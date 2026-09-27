<div align="center">

# awesome-jev

**一份有出处、有判断、能动手的 Jev 资料库。**

想用网页模式浏览？点击 logo 进入导航站。

<a href="https://promethe-us.github.io/awesome-jev/" aria-label="打开 awesome-jev 网页导航站">
  <img src="docs/assets/jev-guide-mark.svg" alt="打开 awesome-jev 网页导航站" width="250" />
</a>

[开始学习](docs/HANDS_ON.md) · [机器人与具身智能](docs/ROBOTICS.md) · [研究与评测](docs/RESEARCH.md) · [完整目录](docs/CATALOG.md) · [来源核验](docs/SOURCES.md)

简体中文 · [English](README_EN.md)

</div>

> 社区维护，与 TypeSafe AI 无关。条目说明的是资料本身能证明什么；不把链接、演示或作者自报数字写成通用能力。

## 从这里开始

| 你要解决的问题 | 先看这里 | 为什么 |
| --- | --- | --- |
| Jev 到底适不适合我的任务？ | [30 秒判断](#先判断任务是否适合) | 先分清“需要文字生成”和“需要有边界的判断” |
| 想在今天跑通第一个调用 | [手把手 Jev](docs/HANDS_ON.md) | 从 Playground、API Key 到可验证的 Python / TypeScript 调用 |
| 想把它放进 Agent 或应用 | [安装与接入](docs/INSTALLATION.md) · [项目目录](docs/CATALOG.md) | 官方 SDK、网关和框架集成分开列出 |
| 想看机器人、具身智能实践 | [Jev on Robotics](docs/ROBOTICS.md) | 区分已跑通的仿真、指标实验和仅设计阶段项目 |
| 想判断宣传数字是否可信 | [研究与评测](docs/RESEARCH.md) | 逐项保留方法、数据和不能外推的边界 |

## 先判断任务是否适合

Jev 接收状态和边界明确的问题，返回 `Choice`、`Score` 或 `Noul`。它适合路由、筛选、排序、风险门控和“是否升级处理”一类判断；生成文字、复杂推理、算术、权限和安全动作仍应交给生成模型或确定性代码。先读 [官方 System One 说明](https://docs.typesafe.ai/concepts/system-one) 与 [已知限制](https://docs.typesafe.ai/model-jaggedness/jev-1.13)。

| 如果你的问题是… | 从这个原语开始 | 一个好起点 |
| --- | --- | --- |
| “该交给哪个队列？” | `Choice` | 选项要互斥，并提供 `other` / `unknown` |
| “严重程度属于哪一档？” | `Score` | 用有序、可解释的等级定义 |
| “是否需要人工复核？” | `Noul` | 自己用验证集确定阈值；它不返回独立 `confidence` |

## 新板块

### Jev on Robotis / Robotics

“Robotis”是你提出的检索词；截至 **2026-09-27**，本库未找到可核验的 ROBOTIS 品牌 Jev 集成。因此页面以更准确的 **Robotics** 呈现，并把“尚未找到品牌集成”保留为事实，而不是补造案例。

- [Jev on Robotics](docs/ROBOTICS.md)：无人机、机械臂、车队分流、VLA 恢复等案例；每项都标明仿真 / 原型 / 设计阶段。
- [jev-drone](https://github.com/RomanSlack/jev-drone)：MuJoCo 无人机中，Jev 约 2.5 Hz 做战术选择；视觉、飞控与安全否决由独立模块承担。
- [jev-arm-lab](https://github.com/Vankleben/jev-arm-lab)：xArm7 仿真中的任务层选择与传感器新鲜度门控，附测量日志和失败图谱。
- [Jev + VLA](https://github.com/Alpha-Harper-Franklin/jev-vla)：公开了恢复接口与评估计划，**仍是设计阶段**，没有宣称集成结果。

### 手把手 Jev

不把“拿到结构化返回”当成项目完成。这个路径把一个真实可维护的最小闭环拆成六步：选任务、先在 Playground 观察、定义状态和题目、接入 SDK、用保守策略处理低置信度、留出验证集。

→ [打开手把手 Jev](docs/HANDS_ON.md)

## 资料地图

| 主题 | 内容 | 证据标准 |
| --- | --- | --- |
| [官方资源与接入](docs/INSTALLATION.md) | API、SDK、网关、Agent Skill、常用设计模式 | 优先官方文档和维护者代码 |
| [生态目录](docs/CATALOG.md) | 框架、Agent、浏览器、自动化、开放替代实现 | 项目归类；不等同代码审计或性能背书 |
| [论文与评测](docs/RESEARCH.md) | 论文、基准、独立实验、失效模式 | 保留实验设置和可外推边界 |
| [社区线索与来源核验](docs/SOURCES.md) | X、小红书、知乎等平台的收录方法与访问限制 | 未取得正文或一手证据的内容只作线索 |

## 使用这个库的方式

1. 先从 [手把手 Jev](docs/HANDS_ON.md) 做一个窄判断；不要一开始就把整条 Agent 链交给它。
2. 用 [研究与评测](docs/RESEARCH.md) 选择你需要验证的风险：选项命名、中文表现、提示注入、阈值漂移或端到端延迟。
3. 在自己的验证集记录模型版本、状态构造、题目文本、候选项顺序、阈值和失败案例。
4. 需要灵感时再看 [项目目录](docs/CATALOG.md)，并回到原仓库确认是否真的可运行、是否仍在维护。

## 网页版

仓库内含无需构建的静态前端：[打开资料导航页](docs/index.html)。推送后，在仓库 **Settings → Pages** 选择 `main` 分支的 `/docs` 目录，即可发布为 GitHub Pages；默认地址会是：

`https://promethe-us.github.io/awesome-jev/`

页面提供主题筛选、清晰的学习路径和证据标签；Markdown 仍保留为可检索、可引用的长期资料层。

## 贡献

欢迎提交新资料，但请附上原始链接，并说明它是官方文档、可运行代码、作者实验、第三方分析还是尚待核验的线索。若包含数字，请同时给出数据、模型版本、对照、环境和方法；没有这些条件的“更快”“更准”“更便宜”不会直接写成结论。

详见 [来源与收录标准](docs/SOURCES.md)。

## License

[MIT](LICENSE)
