# Jev on Robotis / Robotics

**语言 / Language: 简体中文 · [English](ROBOTICS_EN.md)**

> 核验至 **2026-09-27（Asia/Shanghai）**。本页收录的是 Jev 参与机器人或具身系统的公开项目；它们多数是仿真、原型或作者实验。这里的“Robotis”保留为发起检索时的关键词，**不是** ROBOTIS 品牌已接入 Jev 的证明。

## 先说结论

Jev 在机器人系统里适合放在低频、可枚举的语义判断环节：选择已有技能、判断是否需要重试、对事件分级、选择人工介入或给候选动作排序。它不读取像素、不规划连续轨迹、不执行关节控制，也不应拥有安全最终决定权。

一个可审查的分层通常像这样：

```text
传感器 / 视觉 ──> 状态估计 ──> Jev：有边界的判断 ──> 已注册技能
      │                 │                 │                 │
      └───────  时间戳 / 新鲜度 / 置信度 ─────────>  安全门控与控制器
```

当状态过期、低置信度、观测互相矛盾或涉及碰撞、人身与设备风险时，确定性安全层应拒绝、保持、降速或转人工。Jev 的 `confidence` 不是动作成功概率，阈值要在单独的验证记录上校准。[官方限制](https://docs.typesafe.ai/model-jaggedness/jev-1.13) · [Confidence](https://docs.typesafe.ai/confidence)

## 收录状态

| 状态 | 含义 |
| --- | --- |
| **仿真已运行** | 项目有可运行仿真、代码或作者记录；不等于真实机器人验证 |
| **作者测量** | 作者公开了方法或结果；数字只对其环境、任务与对照成立 |
| **设计阶段** | 有接口或评估计划，但尚未集成或报告结果 |

## 机器人与具身系统案例

| 项目 | 状态 | Jev 在哪里 | 值得看的地方 | 不应推断 |
| --- | --- | --- | --- | --- |
| [jev-drone](https://github.com/RomanSlack/jev-drone) | **仿真已运行；单次演示为主** | MuJoCo 无人机约 2.5 Hz 的战术选择：绕行、爬升、制动、重新捕获目标 | 视觉先把深度和分割压成符号状态；500 Hz 飞控与 50 Hz 安全反射始终在普通代码中，能否执行动作由代码否决 | 不是端到端视觉模型，不是飞控替代，也不是跨场景飞行基准；作者明确记录运行方差大 |
| [jev-arm-lab](https://github.com/Vankleben/jev-arm-lab) | **仿真已运行；作者测量** | xArm7 拾放的技能选择、抓取是否稳固、任务进度 | 将意图、抓取与进度放在一次三题调用；记录 JSONL、故障注入、数据新鲜度和确定性 veto | 其场景、样本和阈值不能直接迁移到真实机械臂或其他任务；仓库也说明部分 live 测量仍待新批次更新 |
| [jev-robotics-demo](https://github.com/FazalAAli/jev-robotics-demo) | **仿真原型；各一个记录运行** | 对 MuJoCo Franka + Allegro 手的候选小动作、抓取 / 松手 / 完成条件作选择 | “代码采样并前瞻模拟，Jev 只从候选中判断”的职责划分清晰；提供复跑和录制步骤 | 两边各一条记录轨迹，不能作为通用速度、费用或控制质量结论 |
| [JEV-Drive](https://github.com/CATS-Lab/JEV-Drive) | **仿真已运行；部分轨迹记录** | 从 AlpaSim 的自车、车道、周边参与者和交通控制等结构化场景状态，选择速度与转向变化；MPC 与车辆动力学执行参考轨迹 | README 给出 65 个决策帧、12.8 秒的部分 Score rollout，以及安装、输出和状态字段说明 | 依赖 Linux、AlpaSim 与单独取得的场景数据；作者明确不是 Alpamayo 模型，局部轨迹不构成道路安全、完整场景或实车验证 |
| [Jev for Physical AI](https://github.com/robokrunch/jev-physical-ai) | **作者测量；模拟事件** | 仓储 AMR 车队的事件分流、责任团队选择、紧急度评分 | 300 个模板化事件、三项并发判断、结果文件和复现步骤都公开；也比较了小型自托管分类器的成本交叉点 | 不是实机车队、不是生产准确率，也没有实测 GPT-4o-mini 质量或延迟；仓库已明确这些限制 |
| [Jev + VLA](https://github.com/Alpha-Harper-Franklin/jev-vla) | **设计阶段** | 在 VLA 动作边界识别失败，选择重试、恢复技能或重规划 | 给出了观察、历史、可用恢复技能到有界选择的接口，以及匹配信息量的评估方案 | 没有可用 Jev adapter、VLA 集成、仿真运行或测量恢复结果 |
| [jev-robotics-radar](https://github.com/Rosequan/jev-robotics-radar) | **可运行研究工具** | 根据公司官网文字，对机器人公司赛道和四个维度评分 | 完整公开了 rubric，且明确分数只表示“官网营销文案透露了什么” | 不是机器人控制项目，也不是经事实核查的公司研究或投资建议 |

## 设计一条可靠的机器人决策环

### 1. 把连续控制留给控制器

Jev 的输出应是技能级或策略级选项，例如 `hold`、`retry_grasp`、`reobserve`、`request_help`，而不是关节扭矩、速度或“自由文本命令”。候选集由系统当前可用技能决定；缺少安全的候选项时，应让代码停机或升级。

### 2. 状态要含时间与来源

只给“物体在左边”会掩盖观测是否过期。至少记录：传感器时间戳、上一动作、已执行时长、关键观测的质量标记、约束是否满足。`jev-arm-lab` 把传感器新鲜度列为独立风险；它比再加一个模型判断更容易审计。

### 3. 题目与安全规则分离

题目可以问“在现有技能里下一步哪个最合适？”；规则应该明确写在代码里，例如：

```text
if obstacle_distance < hard_stop_distance: stop
if observation_is_stale: hold + reobserve
if proposed_skill requires a secure grasp and grasp_probability < calibrated_gate: deny
if confidence < calibrated_gate: request_review_or_safe_fallback
```

Jev 提供的是判断信息，安全规则决定是否允许执行。不要把最终权限塞进自然语言 rubic。

### 4. 用轨迹而不是截图评估

至少比较四类基线：无 Jev、规则恢复、生成模型恢复和 Jev 恢复。保持相同的观测、候选技能、仿真种子和停止条件；报告完成率、危险误放行、无谓干预、端到端延迟、成本和失败轨迹。`Jev + VLA` 的评估草案是一个不错的最低标准。

## 关于 ROBOTIS

本轮以 `Jev Robotis`、`Jev ROBOTIS`、`site:github.com/ROBOTIS-GIT Jev` 和 GitHub 仓库检索核对，未发现可引用的一手集成材料。因此这里不把“Robotis”写成产品案例。

如果将来出现官方 ROBOTIS / DYNAMIXEL、TurtleBot、OpenMANIPULATOR 等项目的源码、发布说明或可复核演示，可以提交到本页；请同时提供硬件型号、观测输入、Jev 题目、执行器安全边界、运行环境和实机 / 仿真标记。

## 延伸阅读

- [官方 System One 概念](https://docs.typesafe.ai/concepts/system-one)：理解状态、题目和类型化输出的接口边界。
- [官方模型限制](https://docs.typesafe.ai/model-jaggedness/jev-1.13)：数值、日期、对抗输入和跨问题一致性不应交给判断模型兜底。
- [REFLEX with Jev](https://arxiv.org/abs/2609.26532)：低置信度或需要生成时回退到更强模型的 Agent 架构论文，结论限于其协议。
- [研究与评测](RESEARCH.md)：阅读任何“更快、更便宜、更好”的数字前，先看其数据和对照。

## 收录与核验说明

本页重点项目在 2026-09-27 读取了公开仓库说明并核对仓库元数据。星数、活跃度和作者演示不会作为质量排序。详见 [来源核验](SOURCES.md#2026-09-27-机器人与入门资料增补)。
