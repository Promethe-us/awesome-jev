# Jev 论文与评测阅读指南

**语言 / Language: 简体中文 · [English](RESEARCH_EN.md)**

> 2026-09-24 全库核验；**2026-09-26 增量核验**。这里区分官方说明、学术论文、社区实现和实验结果；本仓库没有重新运行付费推理或训练实验。
> 返回 [README](../README.md) · [项目目录](CATALOG.md) · [来源与核验范围](SOURCES.md)

## 1. Jev 有没有官方论文？

**本轮未检索到 TypeSafe 正式公开的 Jev / RLCD 技术论文。** 检查了官方发布文章、文档索引，以及 arXiv 的 `Jev TypeSafe` 检索；后者返回无结果。对 RLCD 全称和 OpenReview 的补充搜索也未找到匹配的官方论文。这是检索结论，不能证明所有渠道都不存在相关材料。2026-09-24 增补的 13 篇论文（见下）**全部是第三方论文**，不改变这一结论。

- [发布文章，2026-09-15](https://typesafe.ai/blog/introducing-system-one-models-and-jev)：官方给出训练目标、并行输出和工作流评测的说明，未提供完整训练配方。
- [AI primer](https://docs.typesafe.ai/introduction/machine-learning-primer)：理解校准这一训练目标。
- [模型文档](https://docs.typesafe.ai/models)与 [Jev 1.13 已知不足](https://docs.typesafe.ai/model-jaggedness/jev-1.13)：确认当前能力和限制。
- [创始人 Diogo Almeida 的 Latent Space 访谈，2026-09-21](https://www.latent.space/p/jev)：有文字转录，适合了解设计动机；访谈不能替代公开论文、训练数据和可复现实验。

因此，不把社区实现称为“官方架构复现”，也不根据某个 GitHub fork 推断 Jev 使用了某种具体底座。

## 2. 论文清单：每篇与 Jev 的关系

### 2026-09 论文潮：Jev 发布后一周内出现的 13 篇论文

Jev 于 09-15 发布；09-19（4 天后）第一批论文挂上 arXiv，至 09-22 累计 13 篇，其中 09-21 一天 6 篇。分组沿用 [PaperWeekly 09-23 的中文盘点](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw)。元数据核验方式：2026-09-24 通过 arXiv API（`export.arxiv.org`）逐篇核对标题、作者与首发日期，13 篇全部命中；内容与数字取自论文摘要，**均为作者报告，本仓库未复现**，且全部是未经同行评审的预印本。配套 GitHub 仓库来自论文摘要与上述盘点，仓库元数据于 09-24 核对，但本仓库未审计其代码。

**与 Jev 的总体关系**：这批论文把 Jev 当作可调用的决策组件做应用、横评或压力测试（另有两篇开源替代实现），均**不涉及 Jev 的训练配方或内部架构**；比较对象、提示词与计费口径各不相同，不能合并成排行榜。

| 分组 | 论文 | 作者与首发 | 核心内容与作者报告的数字 | 阅读边界 |
|---|---|---|---|---|
| 应用 | [Replacing LLMs with Jev Decision Models for Low-Latency Edge Service Orchestration](https://arxiv.org/abs/2609.22753) | Delong Li、Xu Wang、Haochen Gong、Rui Lang、Guangsheng Yu；2026-09-19；cs.DC/cs.NI | 从自然语言请求抽 4 个受限意图字段做边缘编排；三个测量块中位决策延迟比结构化输出 DeepSeek 低 15.9–26.5%；8 组配对 OCR 条件中 7 组正确按时数持平、1 组反超；无缓存时端到端延迟低 11.1–25.3%，每正确完成任务 API 费用低 69.0–70.6%；重复请求缓存基本抹平延迟差 | 对照组是特定部署的 DeepSeek 与自托管 Qwen / 规则基线；部分结果含建模执行成分；缓存命中场景收益消失是作者自己给出的边界 |
| 应用 | [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks](https://arxiv.org/abs/2609.23136) | 同上五作者；2026-09-19；cs.NI | Jev 从意图生成执行位置、截止时间、优先级约束，再交数值调度器；中位决策延迟比 DeepSeek 低 22.4%、比 Gemini 低 61.9%，建模场景完成率 +3.50 / +8.35 个百分点；对比直出属性的自托管 Qwen 仍低 53.0%、+4.78 个百分点；真实图像服务 1,080 请求中 459 个正确按时（DeepSeek 463、Qwen 435） | 与上一条同一团队、同一方向；优势集中在决策延迟而非解释质量；完成率提升来自建模仿真与 12 条轨迹的录制回放 |
| 应用 | [Calibrated Decisions at Scale: Converting Police Crash Narratives into Probabilistic Crash Variables with a System One Model (Jev)](https://arxiv.org/abs/2609.24052) · [代码](https://github.com/pozapas/jev-calibrated-narrative-coding) | Amir Rafe、Subasish Das；2026-09-21；cs.CL | 德州事故叙述批量编码：筛查 499,500 条，27 题模式编码 195,857 条；对 2,416 条按抽样设计的盲评人工判断 F1 0.908；两个前沿 LLM 做同记录对照；同标签重校准把校准误差降为 1/3.3；加校准变量后九个因子年均 +10,747 起伤 / 死亡事故归因 | 成本是模式规模的函数而非叙述长度；校准因模型而异，“每个模型都要单独审计”是论文自己的结论；F1 只对该 27 题模式和该抽样有效 |
| 应用 | [Jev for Scientific Decisions: Evaluating Semantic Choices and Their Consequences](https://arxiv.org/abs/2609.24965) | Boyuan Deng、Shuyi Fan、Hongyang Zhang、Xinhong Xie；2026-09-21；cs.CL/cs.AI | 科学流程中的语义选择评测：12 个模型配置、10 个案例 20 个有出处的 Choice 各重复 5 次；Jev 与另外 5 个配置并列语义全对，成功响应的中位延迟最低；一个文化史问题上 7 次错选改变了下游计数但最终标签仍正确 | 任务是“答案范围已知的语义选择”，算术与计数按官方建议交给程序；结论支持“准备好的决策任务”，不外推到开放推理 |
| Jev-Anything | [Jev-Mem: System-One-Controlled Agentic Memory for Efficient AI Agents](https://arxiv.org/abs/2609.23986) · [代码](https://github.com/libingzheren/Jev-Mem) | Dongming Jiang、Yi Li、Bingzhe Li；2026-09-21；cs.AI/cs.LG | 记忆分类、关系组织、查询路由、检索预算、图遍历与停止条件由 System-One 控制器承担，LLM 只做复杂推理与答案合成；LoCoMo 综合 LLM-as-Judge 0.777（较最强基线相对 +11.0%），构建 158 s（快 6.6 倍），平均查询延迟 0.93 s（−36.7%） | 评测依赖 LLM-as-Judge 打分；“记忆” 这里是 Agent 记忆系统，与 Jev 产品本身无关；效率数字对照的是特定基线集 |
| Jev-Anything | [REFLEX with Jev for Efficient Selective Control in LLM Agents](https://arxiv.org/abs/2609.26532) | Tiantong Wu、Wei Yang Bryan Lim；2026-09-22；cs.AI | 置信度足够高时执行 Jev 的受限决策，否则升级强模型；固定 100 任务 95% 成功率、强模型调用少 72.7%（三种回退模型族均成立）；可靠性受动作集大小与授权边界附近近似项影响；外部 BFCL 与 τ 风格评测中相对低成本生成级联优势有限 | 作者自己划定了收益边界：普通路由已很准时，换成 Jev 带来的额外收益不明显；100 任务是预先固定的基准，不是在线流量 |
| Jev-Anything | [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure](https://arxiv.org/abs/2609.26550) | Yubo Li、Yidi Miao、Ramayya Krishnan、Rema Padman；2026-09-22；cs.AI | 与 16 个生成式 / 奖励模型 Judge 及盲评人工裁决对比：常规偏好与有证据的事实判断上距最强 LLM Judge 不到 3 个百分点，费用约 0.36%；差距集中在低置信度判断；冻结级联（自信接受、存疑升级）以更低成本保留 99% 准确率 | 需要检查推导过程或识别“看似有理的错误答案”时差距明显扩大——这是适用范围的边界；与 LangChain 09-19/20 的五轨迹实验是不同研究，勿混用 |
| Jev-Anything | [Open-Jev Judgments on CallScreenBench: Calibrated One-Pass Scam Screening with a Small Language Model](https://arxiv.org/abs/2609.23959) | Simiao Ren 等 9 人；2026-09-21；cs.CL | Qwen3-4B LoRA 微调出 JevLite，温度缩放的两标签 softmax 即 P(scam)；41 个场景 577 次逐轮判断，三种子集成 AUROC 0.974、校准误差 0.052，按预先登记的 0.02 边距不劣于 LLM Judge；合法来电零误报，同一挂断规则下提前 1.14 轮；单卡 64.5 ms / 次，比同底座生成答案快 4.9 倍 | 摘要明示：收益来自读出与校准而非准确率（微调 ModernBERT 不显著更差）、配方选择有测试集暴露、来电全部是合成数据；开放实现，不是 TypeSafe 官方组件 |
| Jev-Anything | [JEVQA — Video Quality from Metadata, Bitstream, and Pixel Features with a General-Purpose Decision Model](https://arxiv.org/abs/2609.24395) | Werner Robitza；2026-09-21；eess.IV | 零样本视频质量预测：研究一（1,936 个编码 / 22 源，对 VMAF）仅元数据 Pearson 0.737 ≈ P.1204.1 的 0.733，加码流 0.797，加像素 + 码流 0.824，纯像素方案失败；研究二（AVT-VQDB-UHD-1，对 MOS）仅元数据 0.879 ≈ P.1204.1 的 0.898，码流特征无增益 | 论文自述同特征专门训练的模型在两个研究中都明显更好；Jev 不接收像素本身，像素特征需先转成文本，这一转换的成本与信息损失要单独评估 |
| Jev-Anything | [Visual Jev: Accurate and Efficient Decisions from Shared Visual Context](https://arxiv.org/abs/2609.25845) · [代码](https://github.com/guanxuyu-sv/Visual-Jev) | Guanxu Yu、Yuhang Yao；2026-09-22；cs.CV/cs.LG | 一张图编码一次，多个问题后缀批执行并从语言模型头读候选概率；4 个基准上答案监督后训练把等权宏平均从 70.6% 提到 76.1%（增益集中在训练覆盖的两类任务）；N=32 时比逐问串行快 8.9 倍、比重算视觉前缀的批处理快 3.4 倍，峰值内存更高；类型化读出头的对照无一致精度优势 | 这是修改过的开放底座，不是调用 Jev 服务；官方接口不接收图像；加速倍数依赖“每图问题数”这一工作负载假设 |
| 开源与横评 | [this-that-model-1.0: A typed decision model that decides in 30 ms, for a millionth of a cent](https://arxiv.org/abs/2609.23886) · [代码](https://github.com/FLock-io/this-that-model) | Zehua Cheng、Wei Dai、Jiahao Sun；2026-09-20；cs.CL | 约 2B 参数开源类型化决策模型，隐藏状态直读选项、单次前向答全部问题；单卡 30.9 ms / 次、32 次 / 秒、零输出 token；第三方记录的 68 题上 0.941（Brier 0.042）对 Jev 0.765（0.133）；多步算术 0.560 对 Jev 0.98–1.00；针对性二轮训练只改善目标 5 族、未迁移到其余 13 族 | 68 题的第三方队列很小，措辞与输入都是别人的；内部 42 族套件是自己选的；作者把“多步计算失败”如实写进摘要，引用时不要只取 0.941 |
| 开源与横评 | [Evaluating Decision Models for Text Annotation in Computational Social Science](https://arxiv.org/abs/2609.24574) · [代码](https://github.com/hazemibrahim97/decision-models-css) | Hazem Ibrahim、Yasir Zaki；2026-09-21；cs.CL/cs.CY | 复刻 Ziems 等 (2024) 的 18 个计算社会科学分类任务（7,977 条），同一零样本协议下比 Jev、两个开放权重决策模型与 19 个 LLM；15 个正式任务中 14 个 Jev 落后单任务最佳 LLM，中位差 11.6 macro-F1，实测成本中位约为其 1/44；Jev 置信度校准优于 19 个 LLM 中的 16 个，但三个前沿模型中位校准误差更低（0.066 对 0.157）；共情任务上高置信度近随机；低置信度路由回 LLM 可用 1/4–1/2 成本追平或超过单用 LLM | 零样本协议，不含任何提示工程；"44 倍价差” 是中位实测而非保证；“实用定位” 是流水线第一步加路由，不是替代最强 LLM |
| 开源与横评 | [Type-Safe Is Not Error-Free: A Constrained Decision Head Follows the Option Name, Not the Rubric Bound to It](https://arxiv.org/abs/2609.26758) | Yu Sun、Junhao Xu；2026-09-22；cs.AI | 只交换选项名与定义的对应（问题、状态、定义、选项集全不变）：1,200 个工作流决策中 0/1 → no/yes 使每百题多翻转 70.4 个答案（95% CI 67.6–73.1），AUC 0.94 → 0.23；4 个谓词上效应至少是中性对照的 7.4 倍且随选项数增强；均值池化的另一模型族翻转少 4.1 倍；托管 Jev AUC 0.8146 → 0.5806，翻转数是重测下限的 24 倍；换成随机字符串则回到中性区间且不损精度；全程类型错误率 0% | 这是对[官方已知不足](https://docs.typesafe.ai/model-jaggedness/jev-1.13)中“选项冲突”一条的受控放大；托管 Jev 的效应明显小于两个开源 Jev-like 模型，跨模型外推需谨慎；结论是“选项名语义极性”而非改名操作本身 |

阅读这批论文时区分三类主张：**能力**（能否完成任务）、**效率**（延迟 / 成本节省，通常依赖特定对照与工作负载）和**失效**（何时判断失灵）。效率数字随对照模型、缓存与建模假设变化最大，引用时应连同对照条件一起给出。

### 09-23 / 09-24 新核验的直接 Jev 研究

以下 8 篇均于 2026-09-26 重新打开 arXiv 原页，核对标题、作者、首发日期和 submission history；页面均只有 v1。它们是第三方预印本，不计入上方截至 09-22 的历史 13 篇，也不据此声称当前全网总量为 21 篇。结果是作者报告，未独立复现。

| 论文（arXiv；首发；作者） | 研究对象与可查材料 | 阅读边界 |
|---|---|---|
| [JEV-Star: Fast, Low-Cost StarCraft II Control with Language-Model Planning](https://arxiv.org/abs/2609.27331)；09-23；Weiyu Ma 等 | JEV 选动作、GPT-6 做持续规划；[代码、回放与固定统计](https://github.com/sc2musa/Jev_Star) | 论文报告 4 场完整胜局；仓库当前 README 只概述旧版两场非作弊最高难度胜利，并称新版尚无新增实战成绩。版本与计数口径不可混用；微操样本有限，规划与接口改进同时发生 |
| [Can Jev Judge Radiology Reports? Evaluating a System One Model for Clinical Factuality](https://arxiv.org/abs/2609.27607)；09-23；Jiaju Huang 等 | 双向判断生成报告与医生参考报告间的陈述支持关系 | 作者在两个专家数据集报告相关性；本地 RadMatch 在临床显著错误上更强。报告长度与错误口径影响指标，不能当作临床使用验证 |
| [Same Scores, Different Decisions: Evaluating JEV and Language Models for Legal Document Understanding](https://arxiv.org/abs/2609.27678)；09-23；Fan Zhang 等 | [Jev-Benchmark](https://github.com/ZF-Utokyo/Jev-Benchmark) 以 ContractNLI 比较 Jev 与九个语言模型，改变假设可见性、请求输出和顺序 | 作者报告 Jev 费用和中位延迟最低，托管 LLM 基线准确率较高；重复正确性差异不构成一般稳定性优势。仓库有原始预测与可重跑适配器 |
| [Decision Hijacking: Prompt Injection Attacks on Jev's Typed Probabilistic Decisions](https://arxiv.org/abs/2609.28613)；09-23；Tiantong Wu、Wei Yang Bryan Lim | 510 个重构 InjecAgent 案例与自适应攻击；检测概率及攻击者目标选择 | 作者报告新鲜验证调用中目标成功率从 1.8% 到 3.5%；研究的是受控注入面，既不能宣称绝对安全，也不能外推到所有代理 |
| [Just Ask Jev: Reinforcement Learning for Calibrated Decisions as a Zero-Shot Detector of AI Alignment Failures](https://arxiv.org/abs/2609.29429)；09-24；Ruoqi Guo 等 | [RLCDAlignBench 代码](https://github.com/sumleo/RLCDAlignBench)与[受限访问数据](https://huggingface.co/datasets/sumleo/RLCDAlignBench)：44 个基准、十类失效、五个小型目标模型、7,193 条标注实例 | 标签主要来自各基准自带评判器，仅两个额外集合含人工标签；作者的 AUROC / 成本结论只适用于其协议，数据文件需申请访问 |
| [JEV vs. LLMs as Rubric Judges: Cheaper, Faster, and Wrong in the Same Places](https://arxiv.org/abs/2609.29769)；09-24；Delip Rao、Chris Callison-Burch | 七个基准的九组面板，对比 Jev 与三个快速 LLM judge | 作者报告分级判据上的相关错误使置信度级联收益有限；费用和时延倍数依赖逐判据调用的对照方案，不代表通用优势 |
| [Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186)；09-24；Linghua Zhang | 视觉语言模型低频规划，Jev 根据 Android 无障碍树反复选择动作 | 作者报告 AndroidWorld 全套任务成功率 79%，对照分别为 78% 与 84%；时间和成本改善仅对成功轨迹统计，论文未在摘要给出代码仓库 |
| [Jev in the Wild: A Data-Driven Analysis of the Jev Model's Functionality, Applications and Ecosystem](https://arxiv.org/abs/2609.30216)；09-24；Guoming Ling 等 | 作者按自身方法收集截至 09-22 的 2,170 个 GitHub 公开项目并分析用途分布 | 这是论文的数据集定义与作者计数，不等于本目录已核验的真实 Jev 集成数；不能由搜索规模推断项目质量或官方采用率 |

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
| [CSS 标注横评，2609.24574](https://arxiv.org/abs/2609.24574) · [复现包](https://github.com/hazemibrahim97/decision-models-css) | 18 个计算社会科学分类任务、7,977 条样本的零样本横评：Jev、两个开放权重决策模型对 19 个 LLM | Jev 在 15 个正式任务中 14 个落后单任务最佳 LLM（中位差 11.6 macro-F1），实测成本中位约 1/44；置信度校准优于 16/19 个 LLM；低置信度路由回 LLM 用 1/4–1/2 成本追平或超过 | 复刻固定任务集的零样本协议，无提示工程；成本是中位实测而非报价；共情任务上高置信度但近随机，说明 confidence 不能替代任务验证 |
| [JEV-as-a-Judge，2609.26550](https://arxiv.org/abs/2609.26550) | JEV 与 16 个生成式 / 奖励模型 Judge 的对比，配盲评人工裁决 | 常规偏好与证据事实判断距最强 LLM Judge 不到 3 个百分点、费用 0.36%；低置信度子集差距集中；冻结级联保留 99% 准确率、成本更低 | 与 danielgshea 的五轨迹实验是不同研究、不同数据；差距扩大的场景（检查推导、识别似真错误）恰好是 judge 的高价值场景 |
| [Type-Safe Is Not Error-Free，2609.26758](https://arxiv.org/abs/2609.26758) | 1,200 个工作流决策上的选项名敏感性受控实验，覆盖 Jev 与两个开源 Jev-like 模型 | 语义选项名（no/yes）被交换后 AUC 0.94 → 0.23、每百题多翻转 70.4 个；托管 Jev 0.8146 → 0.5806；中性名（0/1、A/B）几乎无影响；类型错误率始终 0% | 单一研究、作者自建工作流决策；效应在模型族间差异大（均值池化族翻转少 4.1 倍），不能把开源模型上的数字直接安到 Jev 头上 |
| [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)（09-24 收录） | Jev 与本地部署 GLiNER2.5 在共享分类任务上的对比试点；配置、代码与结果文件公开 | README 报告 Banking77（72 标签）上 Jev 0.870 对 GLiNER2.5 0.610，并给出 ≤5% 错误预算下两侧的覆盖率；延迟条件写明：GLiNER 在 M4 Max CPU 本地，Jev 为法国调用托管服务 | 作者自述是小规模试点（pilot 配置）；GLiNER 在 4 / 6 标签任务上延迟更低（约 44 ms p50）；数字仅对该试点配置有效 |
| [jev-arena](https://github.com/NanmiCoder/jev-arena)（09-24 收录） | 同一批 10,000 条评论对比 Jev 1.13 与 DeepSeek Flash 的相关性 / 情感 / 意图三项标注 | 用 GPT-6 Astra 全量复核并随机抽 400 条复标；处理耗时 203.2 秒对 823.5 秒，费用 $0.84 对 $1.50（估算）；相关性准确率 94.70% 对 96.26%；提供导入、回放与逐条核查材料 | README 自述“AI 参考下的复核结果，不是人工金标准”；严格三项全对口径下为 50.58% / 55.45%；数字仅代表本次数据与配置 |
| [腾讯云 ADP 博客](https://adp.tencent.com/zh/blog/jev-vs-general-llm-automated-decision-selection)（09-24 收录） | 自建模拟工单的分流评测：意图分类、情绪评分、转人工判断三项 | 报告意图分类 88.2% 对 93.2%、排除空结果后约 93.5% 对 93.2%、情绪 MAE 0.29 对 0.16、转人工 86.6% 对 89.8%（Jev 对 LLM 方案）；处理速度约 0.38 秒 | 团队自建模拟工单，不是真实流量；LLM 费用为估算；属厂商博客，与独立第三方评测分开看 |
| [硅星人Pro 实测，09-20](https://www.huxiu.com/article/4892583.html)（09-24 收录） | 50 条中文电商客服题 × 4 项判断（紧急度 / 购买意向 / 类目 / 严重度）× 15 次重复 | 约 64–65.2% 正确；约 0.73 秒 / 题、50 题约 $0.002；最强小模型对照（MiniMax M3）高约 10.8 个百分点；一条消息 1.99 分对 2.00 分转人工截断，15 次重复中 3 题结果翻转 | 媒体作者自测，逐条数据未完全公开；公众号原文被验证墙拦截，数字取自[虎扑可读转载](https://www.huxiu.com/article/4892583.html)并注明出处 |

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
