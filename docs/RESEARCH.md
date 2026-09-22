# Jev 论文与评测阅读指南

> 核验日期：**2026-09-22（Asia/Shanghai）**。这里区分官方说明、学术论文、社区实现和实验结果；本仓库没有重新运行付费推理或训练实验。
> 返回 [README](../README.md) · [项目目录](CATALOG.md) · [来源与核验范围](SOURCES.md)

## 1. Jev 有没有官方论文？

**本轮未检索到 TypeSafe 正式公开的 Jev / RLCD 技术论文。** 检查了官方发布文章、文档索引，以及 arXiv 的 `Jev TypeSafe` 检索；后者返回无结果。对 RLCD 全称和 OpenReview 的补充搜索也未找到匹配的官方论文。这是检索结论，不能证明所有渠道都不存在相关材料。

- [发布文章，2026-09-15](https://typesafe.ai/blog/introducing-system-one-models-and-jev)：官方给出训练目标、并行输出和工作流评测的说明，未提供完整训练配方。
- [AI primer](https://docs.typesafe.ai/introduction/machine-learning-primer)：理解校准这一训练目标。
- [模型文档](https://docs.typesafe.ai/models)与 [Jev 1.13 已知不足](https://docs.typesafe.ai/model-jaggedness/jev-1.13)：确认当前能力和限制。
- [创始人 Diogo Almeida 的 Latent Space 访谈，2026-09-21](https://www.latent.space/p/jev)：有文字转录，适合了解设计动机；访谈不能替代公开论文、训练数据和可复现实验。

因此，不把社区实现称为“官方架构复现”，也不根据某个 GitHub fork 推断 Jev 使用了某种具体底座。

## 2. 论文清单：每篇与 Jev 的关系

### 直接关联社区争议的两篇预印本

| 论文 | 作者与首发日期 | 核心内容 | 与 Jev 的关系及限制 |
|---|---|---|---|
| [SalesRLAgent: A Reinforcement Learning Approach for Real-Time Sales Conversion Prediction and Optimization](https://arxiv.org/abs/2503.23303) | Nandakishor M；2025-03-30；arXiv 预印本 | 对销售对话做实时转化概率预测；论文描述文本表征、强化学习策略与不确定性估计 | 是“先前已有决策模型”讨论中的原始材料。任务是销售转化；不是 Jev 论文，也不是与 Jev 的同条件实验 |
| [Confidence-Aware Routing for Large Language Model Reliability Enhancement](https://arxiv.org/abs/2510.01237) | Nandakishor M；2025-09-23；arXiv 预印本 | 结合语义对齐、层间收敛和学习到的置信度，将请求分配给本地模型、检索、大模型或人工 | 与置信度路由相关，不能据此断定 TypeSafe 采用同一架构。日期按论文页面的 submission history 记录，不从编号月份推断 |

阅读时对照 [SalesRLAgent 正文](https://arxiv.org/html/2503.23303v1)的架构、实验和局限章节，以及[路由论文正文](https://arxiv.org/html/2510.01237v1)的实验设置。两者都早于 Jev 发布，但“方向较早出现”“实现相同”“存在抄袭”是不同命题；公开证据不足以得出后两项结论。

### 校准基础、非自回归背景与缩写辨析

| 论文 | 时间 / 类型 | 为什么值得读 | 不应作出的推断 |
|---|---|---|---|
| [On Calibration of Modern Neural Networks](https://proceedings.mlr.press/v70/guo17a.html) | Guo 等；ICML 2017 | 解释高置信度与真实正确率之间的差距，以及温度缩放等校准方法 | 不是 Jev 的训练说明；不能因为 API 返回概率就认定已在你的数据上校准 |
| [Large Language Diffusion Models（LLaDA）](https://arxiv.org/abs/2502.09992) | Nie 等；2025；研究论文 | 了解自回归之外的语言建模路线 | 未发现足以证明 Jev 基于 LLaDA 的官方材料 |
| [Improved Large Language Diffusion Models（iLLaDA）](https://arxiv.org/abs/2606.25331) | Nie 等；2026-06-24；预印本 | 研究双向注意力、掩码扩散训练和多项选择评分 | 是背景阅读，不是 Jev 的更新、开源权重或官方论文 |
| [RLCD: Reinforcement Learning from Contrastive Distillation for Language Model Alignment](https://arxiv.org/abs/2307.12950) | Yang 等；2023-07-24，2024 年修订 | 用对比提示构建偏好数据的语言模型对齐方法 | 与 TypeSafe 的 **Reinforcement Learning for Calibrated Decisions** 全称不同；不要将两者混为一篇论文或同一训练配方 |

## 3. 最新技术解读：说明与推测分开看

| 日期 | 一手材料 | 可学到什么 | 阅读边界 |
|---|---|---|---|
| 2026-09-21 | [Simon Willison：Jev introduces a new shape of LLM](https://simonwillison.net/2026/Sep/21/jev/) | 决策接口、检索重排，以及只有数值输出时的可解释性问题 | 作者的分析和试用观察，不是标准化基准 |
| 2026-09-21 | [Di Zhang：What Is RLCD? The Secret Behind Jev](https://di-zhang-llm.github.io/blog/what-is-rlcd-the-secret-behind-jev/) | 从偏好建模、Plackett–Luce 分布和校准角度提出解释 | **社区架构假说**；文中的公式不是 TypeSafe 已披露的训练算法 |
| 2026-09-17 | [LangChain：Building a Harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev) | 将 Jev 用于模型路由和工具执行前的判断 | 集成教程，不代表模型能替代权限系统或沙箱 |
| 2026-09-16 | [Sean Goedecke：Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | 结构化决策接口与开放模型实现思路 | 工程观点；并非证明所有实现具备同等训练、校准和性能 |

## 4. 可检查的评测，以及数字的适用范围

下表是对作者公开材料的归纳，**没有将不同数据集、硬件、提示词或计费口径合并排名**。

| 来源 | 测了什么 | 公开结果 / 可复核材料 | 主要限制 |
|---|---|---|---|
| [TypeSafe workflow evals](https://evals.typesafe.ai/)及[方法说明](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 4 个工作流；用强模型平均概率作为参照 | 官网的 193.6× / 444.6× 来自这些工作流 | 厂商自测；参照不是独立人工真值；官方称这些倍数偏向实际收益的高端。不能写成通用准确率或普遍加速比 |
| [Jev as a judge](https://github.com/danielgshea/jev-as-a-judge)及[09-20 实验文章](https://www.langchain.com/blog/jev-agent-evals-langsmith) | **5 个固定天气 Agent 轨迹 × 100 次重复**；一位人工标注者 | 作者报告 Jev 的 500 次二元判断均与标注一致，平均延迟 0.44 秒、单次成本约 $0.00035；提供代码和实验说明 | 不是 500 个独立案例。LLM 使用提供商默认采样参数；实验元数据未记录实际 Jev 服务版本。稳定性不等于概率校准 |
| [Archestra：100 real agent calls](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls) | 100 个工具调用 × 4 个标签；仅报告三组模型裁判一致的 **337/400** 个决策 | 作者报告 Jev 零样本约 93%、9-shot 约 95%；常量多数类基线为 79%；另测重复调用和选项置换 | 主要是模型裁判一致性标签，不是全量人工金标；63 个争议决策被排除。9 个危险调用的召回不能单独代表安全能力 |
| [JevBench](https://github.com/fstandhartinger/jevbench) · [结果文件](https://github.com/fstandhartinger/jevbench/blob/main/RESULTS-v1.2.md) | 本轮读取的 v1.3.0 评分说明；每个完整系统 534 个决策 | 提供题目、适配器、逐题结果及评分代码；覆盖能力、校准、速度、成本 | 综合分不是准确率。部分自托管延迟被乘 2，并对作者服务器加 0.15 秒以模拟负载：这是建模假设，比较时应读原始延迟。文件名保留 v1.2，正文评分版本为 v1.3.0 |
| [laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 40 条中文客服工单；M4 Max 上的本地 Laya 与 Jev API | Jev 31/40、Laya 23/40；同一批样本上阈值 0.60 的级联达到 31/40，平均延迟从 588 ms 降到 327 ms | 样本小、含有争议标签；在同一批数据上选阈值，没有证明独立测试集收益。作者明确撤回过两个早期小样本结论 |
| [sysone-bench](https://github.com/instax-dutta/sysone-bench)及[报告与 09-22 补充](https://github.com/instax-dutta/sysone-bench/blob/master/FEEDBACK_REPORT.md) | 9 组任务、751 个计分判断；Jev 固定 1.13.0，本地 M2 上测试 Laya / Router / Qwen 约束解码 | 提供相同问题的哈希与原始结果；Jev 在多项任务领先，Laya 在 AG News、MNLI 子集更高；路由版 Laya 改善多语言结果 | 自编标签来自单一作者，公开数据只取小子集；不能混用 v1 与 v2–v4 指标。README 把判断数写成 states，详见下方核对 |
| [Kev](https://github.com/jaredpalmer/kev) | 自有开发 / 测试切分，公开模型卡和训练配方 | 当前 README 已包含 Qwen3.5 的 0.8B / 4B / 9B；原 Qwen2.5-0.5B 是历史原型 | Jev 的比较只覆盖部分开发集；没有对应测试集成绩，不能把不同切分拼成领先结论 |
| [Laya](https://github.com/NandhaKishorM/laya) | 开源决策模型及多语言路由实现 | 权重、实现与作者评测公开，适合本地实验 | 作者表格中的部分 Jev 数字来自外部测试，提示词和样本量不同；“本地无 API 费用”不等于硬件与运维成本为零 |

**sysone-bench 的统计口径核对**：读取其 [Jev 原始结果 JSON](https://github.com/instax-dutta/sysone-bench/blob/master/results/run_jev-1.13.0_20260921-212125.json)，逐组相加得到 `states = 541`、`decisions = 751`；例如 triage 为 40 条状态、160 个计分判断。因此本仓库不沿用 README 的“751 states”。这是对已公开文件的核算，不是重新运行模型。v2、v3、v4 的增量结果见反馈报告；早期 `REPORT.md` 只覆盖三组自编任务。

**实验与产品发布分开看**：[09-21 的 LangSmith 公告](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals)新增可直接配置的 Jev 评估器；它引用了上面的五轨迹实验，并不是一个新的独立准确率验证。

## 5. 正确理解概率与已知不足

[官方 Confidence 文档](https://docs.typesafe.ai/confidence)说明：Choice / Score 的 `confidence` 根据返回概率分布计算，概括分布集中程度；它不是单独向模型询问“你有多确定”的自由文本自评。**Noul 不返回独立的 `confidence`。** 高集中度也不自动证明现实任务上的高正确率。

[官方 jaggedness 文档](https://docs.typesafe.ai/model-jaggedness/jev-1.13)列出九类弱点：字面理解、数值计算、日期比较、多层间接推理、无关长上下文、对抗内容、指令与选项冲突、跨问题不满足预期恒等式，以及文本生成。例如，分别问两个互为否定的 Noul，返回概率未必相加为 1；不要把一个问题调好的阈值直接移到另一种问法。

“输出类型受约束”只缩小了答案空间，仍可能选错、受提示注入影响或遗漏关键上下文。把算术、时间比较、动作权限和业务不变量交给确定性代码；模型负责无法轻易写成规则的窄范围语义判断。

## 6. 复核新评测时至少记录这些信息

1. **数据**：独立样本数、语言、类别分布、标注人 / 模型裁判、训练与测试划分。
2. **版本**：实际响应的模型 ID、SDK 版本、提示词和候选项；保留选项排列。
3. **质量**：准确率之外，报告各类误判、拒答覆盖率与概率校准；小概率桶列出样本数。
4. **性能**：端到端 p50 / p95、并发、输入长度、问题数、网络地区和本地硬件。
5. **成本**：区分每 token、每请求、每问题；注明促销、重试和自托管估算。
6. **复现**：链接原始结果与代码，记录失败案例；阈值在验证集调整，再用独立测试集确认。

这是评测阅读与贡献清单，不是声称本仓库已经完成了这些实验。
