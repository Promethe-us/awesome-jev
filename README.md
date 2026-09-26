<div align="center">

<img src="cover.png" alt="awesome-jev" width="600"/>

# awesome-jev

**语言 / Language: 简体中文 · [English](README_EN.md)**

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Updated](https://img.shields.io/badge/Verified-2026--09--24-38bdf8)](docs/SOURCES.md)

**精选 Jev / System One 官方资料、社区实践与研究阅读**<br>
**A source-backed collection of Jev resources, community projects, and research.**

*X · 小红书线索 · GitHub · 论文 · 评测 · 工程实践*

</div>

> 社区整理，与 TypeSafe AI 官方无关。**全库核验：2026-09-24（Asia/Shanghai）**。来源可读取不等于性能已被本仓库复现；覆盖范围与访问限制见 [核验记录](docs/SOURCES.md)。

## 📑 目录

- [最新变化](#latest)
- [30 秒了解 Jev](#overview)
- [时间线](#timeline)
- [官方资源与接入](#official)
- [X 精选](#x)
- [小红书线索](#xiaohongshu)
- [GitHub 生态](#ecosystem)
- [评测与局限](#evaluations)
- [论文与技术阅读](#papers)
- [深度文章与讨论](#reading)
- [FAQ](#faq)
- [贡献](#contributing)

<a id="latest"></a>
## 🆕 最新变化（增量核验至 2026-09-26）

| 变化 | 对使用者的意义 | 一手来源 |
|---|---|---|
| **09-23 / 09-24 新论文与基准** | 新核验 8 篇直接研究 Jev 的预印本，涉及安全、医疗报告评判、法律文档、移动操作、游戏控制与评测；结果均为作者报告，方法与局限见研究页 | [论文与评测](docs/RESEARCH.md) |
| **框架与接入更新** | Composio 的 Python / TypeScript 适配器、Rig 的实验性 Rust 适配器、Ax 的 TypeSafe 接入、Pydantic Evals 与 Gateway、Vercel Connect / eve 均有第一方说明 | [完整目录](docs/CATALOG.md) · [Pydantic Gateway](https://pydantic.dev/articles/jev-pydantic-ai-gateway) |
| **第二轮社区增补（09-24）** | 新增独立评测（[jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks)、[jev-arena](https://github.com/NanmiCoder/jev-arena)、[腾讯云 ADP 博客](https://adp.tencent.com/zh/blog/jev-vs-general-llm-automated-decision-selection)、[硅星人Pro 实测](https://www.huxiu.com/article/4892583.html)）、[Pydantic AI 官方接入文档](https://pydantic.dev/docs/ai/models/typesafe/)、三个工程项目与 X / 知乎 / 小红书待核验线索 | [评测页](docs/RESEARCH.md) · [核验记录](docs/SOURCES.md) |
| **arXiv 出现 13 篇 Jev 相关论文** | 09-19（发布后 4 天）起挂出，至 09-22 共 13 篇，其中 09-21 一天 6 篇：首批应用、Agent 记忆 / Judge / 视觉（“Jev-Anything”）、开源平替与失效分析；数字均为作者报告 | [论文区](#papers) · [PaperWeekly 中文盘点，09-23](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw) |
| **已取消候补名单** | 官方于 09-20 21:30 UTC（北京时间 09-21 05:30）宣布向所有用户开放；直接前往 Console | [官方 X 公告](https://x.com/typesafeai/status/2101786156572823624) |
| **新用户起始 $5 额度** | 官方同帖回复公布约 1.2 亿输入 token 的起始额度；不是持续免费的承诺 | [官方回复](https://x.com/typesafeai/status/2101786280946499671) |
| **Vercel 限时免费活动的历史记录** | 官方模型页写明促销计划于 2026-09-25 结束，但 09-26 页面仍显示 Free。实际计费以账户账单为准 | [Vercel 模型页](https://vercel.com/ai-gateway/models/jev) · [接入公告](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| **Python SDK v0.7.1** | 09-21 更新：提前验证 API Key，并从异常日志中排除密钥值；补充网关示例 | [官方 changelog](https://docs.typesafe.ai/sdk/python/changelog) |
| **LangSmith 上线 Jev 评估集成** | 09-21 宣布支持 Jev-as-a-judge；Gateway 也支持自带 TypeSafe 密钥调用 Jev | [集成公告](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) · [Gateway 文档](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |
| **SemIf 托管限时免费** | LangSmith 提供独立开放模型 `semif-qwen3.5-4b`，免费至 09-28；限 US 组织的 Free / Developer / Plus 计划，并非 Jev 免费活动 | [官方说明](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |
| **当前文档仍列 Jev 1.13.0** | `jev-latest` 和 `jev-preview` 都指向该版本；SDK 更新不等于模型升级 | [Models](https://docs.typesafe.ai/models) |
| **历史服务事件** | 状态页显示 09-20、09-21 和 09-23 的事件均已恢复；09-26 读取时 API 与 Console 显示在线，属于时间点快照 | [官方状态页](https://status.typesafe.ai/) |
| **新增研究与工程材料** | 创始人长访谈、中文小样本比较、Agent 调用评测和 JevBench；新增编译内联决策等项目 | [论文与评测](docs/RESEARCH.md) · [完整目录](docs/CATALOG.md) |

<a id="overview"></a>
## 🔥 30 秒了解 Jev

Jev 是 TypeSafe AI 的决策模型。程序提供文本状态和边界明确的问题，模型返回 **Choice / Score / Noul**；应用代码解释结果并决定下一步。TypeSafe 将这类模型称为 **System One**。它不直接生成文章、代码或自由文本回答。[官方概念说明](https://docs.typesafe.ai/concepts/system-one)

| 项目 | 本轮核验结果 |
|---|---|
| 发布 | 2026-09-15；[官方发布文章](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| 公司 | Diogo Almeida 与 Erik Gafni、Sasha Sheng 创立 TypeSafe AI；宣布 DCVC 领投 $40M 种子轮；[公司新闻稿](https://www.businesswire.com/news/home/20260915525333/en/) |
| 当前模型 | `jev-1.13.0`；两个公开别名目前均指向它 |
| 直连价格 | 输入 **$0.042 / 百万 token**；输出 token 不计费 |
| 输入预算 | 整次请求 **64k token**；`state` 加最长单个问题 **32k token**，两项限制同时适用 |
| 输入模态 | 文本：字符串、JSON 对象或文本数组；不直接接受图片、音频或视频 |
| 速率 | 文档列出 **250,000 token/秒、1,200 请求/分钟**；官方注明仍可能动态调整 |
| 语言 | 官方说明英语表现最好；中文等语言应单独验证 |

模型、价格、预算、速率和语言信息均来自 [Models](https://docs.typesafe.ai/models)，不是第三方网关的统一规格。

| 原语 | 输出 | 例子 |
|---|---|---|
| **Choice** | 一个选项、所有选项的概率、`confidence` | 工单属于账单、技术还是其他问题？最多 255 个选项 |
| **Score** | 有序等级上的分数、等级概率、`confidence` | 按明确定义的等级判断问题严重性 |
| **Noul** | “是”的概率；**没有单独的 `confidence`** | 消息是否明确表达紧急性？ |

`confidence` 是由概率分布计算的统计量，不是模型的自由文本自评；也不应直接当成业务正确率。输出符合类型仍可能选错。[Primitives](https://docs.typesafe.ai/primitives) · [Confidence](https://docs.typesafe.ai/confidence)

名字中的 Jev 指向 William Stanley Jevons，System One 借用《思考，快与慢》的命名；这属于官方产品定位，并不构成对生物认知机制的证明。[命名说明](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

<a id="timeline"></a>
## 🗓️ 时间线

> 日期按原始来源；X 行使用 UTC。文章发表日与讨论帖收录日分开记录。

| 日期 | 事件 |
|---|---|
| 09-15 | [Jev 发布](https://typesafe.ai/blog/introducing-system-one-models-and-jev)，开始早期访问 |
| 09-16 | [Vercel AI Gateway 接入公告](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| 09-17 | [Cloudflare 公告](https://x.com/CloudflareDev/status/2100688880798159254)；[LangChain harness 教程](https://www.langchain.com/blog/building-a-harness-with-jev) |
| 09-18 | [OpenRouter beta 公告](https://x.com/OpenRouter/status/2100744709589316009)；[Vercel 发布采用情况文章](https://vercel.com/blog/ai-gateway-jev-model-launch) |
| 09-19 | [Vercel 公布限时免费](https://x.com/vercel_dev/status/2101116818463281579)；[LangChain 发布 judge 实验](https://x.com/LangChain/status/2101454284927959080) |
| 09-20 | [TypeSafe 取消候补名单](https://x.com/typesafeai/status/2101786156572823624)；社区继续探索语义搜索、播客广告识别和素材选择 |
| 09-21 | [LangSmith Jev 评估集成](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals)与 [SemIf 托管公告](https://x.com/Hacubu/status/2102064714851455363)；[Python SDK 0.7.1](https://docs.typesafe.ai/sdk/python/changelog)；[Simon Willison 分析](https://simonwillison.net/2026/Sep/21/jev/)；[创始人访谈](https://www.latent.space/p/jev) |
| 09-22 | HN 新收录 [jevopt](https://news.ycombinator.com/item?id=49795171) 与 [jevframe](https://news.ycombinator.com/item?id=49795313) 等项目；这是收录日期，不代表项目当天首次发布。当天 arXiv 上的 Jev 相关论文累计达到 13 篇（[Visual Jev](https://arxiv.org/abs/2609.25845)、[REFLEX](https://arxiv.org/abs/2609.26532)、[JEV-as-a-Judge](https://arxiv.org/abs/2609.26550)、[Type-Safe Is Not Error-Free](https://arxiv.org/abs/2609.26758)） |
| 09-23 | [PaperWeekly 中文盘点](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw)梳理这批论文；见[论文区](#papers) |

<a id="official"></a>
## 🏢 官方资源与接入（Official Resources）

| 资源 | 用途 |
|---|---|
| [TypeSafe 发布文章](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 定位、厂商评测方法及其限制 |
| [文档](https://docs.typesafe.ai) · [机器可读索引](https://docs.typesafe.ai/llms.txt) | 找到概念、API、示例和 SDK 页面 |
| [Playground](https://console.typesafe.ai/playground) · [API Key](https://console.typesafe.ai/keys) | 登录后体验与创建密钥 |
| [模型规格](https://docs.typesafe.ai/models) · [HTTP API](https://docs.typesafe.ai/api) | 版本、上下文、价格与请求格式 |
| [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) · [JS / TS SDK](https://github.com/typesafe-ai/typesafe-sdk-js) | 分别使用 `typesafe-sdk` 与 `@typesafe-ai/sdk` |
| [Agent Skill](https://github.com/typesafe-ai/skills) | 为编码助手提供 TypeSafe 使用资料 |
| [System One LLM 适配器](https://github.com/typesafe-ai/system-one-adapter-python) | 用 LLM 实现类似接口；输出与性能不等同于 Jev |
| [Cookbooks](https://docs.typesafe.ai/cookbooks) | 重排、引用核查、特征构造、分类与路由 |
| [Pydantic AI：TypeSafe (Jev) 模型文档](https://pydantic.dev/docs/ai/models/typesafe/)（09-24 增补） | 第三方 Agent 框架的官方接入：`TypeSafeModel`、类型化输出、布尔阈值、工具调用与低置信度回退示例 |
| [Pydantic Evals：Jev 评判示例](https://pydantic.dev/articles/jev-evals) · [Pydantic AI Gateway](https://pydantic.dev/articles/jev-pydantic-ai-gateway) | 官方示例使用 Jev 作自定义评判以及 `LLMJudge` / `GEval`；Gateway 用自带 TypeSafe 密钥转发原生 System One 请求 |
| [Vercel Connect：Jev](https://vercel.com/connect/jev) · [Vercel eve 评估指南](https://github.com/vercel/eve/blob/main/docs/guides/evaluate.md) | Connect 按项目 / 环境控制凭证，eve 的 `auto` 与 `evaluate` 默认选择 AI Gateway 的 `typesafe-ai/jev` |
| [已知不足](https://docs.typesafe.ai/model-jaggedness/jev-1.13) | 数值、日期、对抗输入和跨问题一致性等限制 |
| [Workflow evals](https://evals.typesafe.ai/) · [状态页](https://status.typesafe.ai/) | 厂商实验与服务事件 |
| [官方 X](https://x.com/typesafeai) · [Discord](https://discord.gg/typesafe) | 公告与社区交流 |

| 接入渠道 | 已核验的入口 / 标识 | 注意事项 |
|---|---|---|
| TypeSafe 直连 | `POST https://api.typesafe.ai/v1/systemone`；`jev-1.13.0` / `jev-latest` | 原生 Choice / Score / Noul；[安装指南](docs/INSTALLATION.md) |
| Vercel AI Gateway | `typesafe-ai/jev`；AI SDK 的 `experimental_evaluate` | 实验 API 中使用 Boolean 等类型；不要直接混用原生 Noul 请求；[接入公告](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| Cloudflare | `typesafe/jev`；官方示例使用 `env.AI.run` | 第三方模型页面列 32,000 上下文；计费查看 Cloudflare 控制台；[模型页](https://developers.cloudflare.com/ai/models/typesafe/jev/) |
| OpenRouter | Jev 1.13 模型页与 beta 公告已确认 | 属于结构化决策接口，不能假定适用普通 chat-completions 请求；[模型页](https://openrouter.ai/typesafe/jev-1.13) · [公告](https://x.com/OpenRouter/status/2100744709589316009) |
| LangSmith Gateway | `typesafe/jev-1.13.0`；System One API | 工作区配置 TypeSafe provider secret，客户端使用 LangSmith 密钥；与托管 SemIf 分开；[文档](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |

<a id="x"></a>
## 🐦 X 精选（Twitter）

> 核验作者、UTC 发布日期和可读取文本；直达页受限时使用 X 官方嵌入接口或公开镜像交叉核对。演示数字均属于作者报告，未在本仓库独立复现；不以点赞数判断技术质量。

### 公告与有方法说明的实验

| 日期 | 作者 | 内容与阅读重点 |
|---|---|---|
| 09-21 | [@Hacubu](https://x.com/Hacubu/status/2102064714851455363) · [@hwchase17](https://x.com/hwchase17/status/2102065131202945152) | LangSmith 托管 SemIf 并限时免费；TypeSafe SDK 兼容表示接口兼容，不代表官方 Jev 权重开放 |
| 09-21 | [@typesafeai](https://x.com/typesafeai/status/2101952261421474159) | API / Console 异常公告及[后续恢复帖](https://x.com/typesafeai/status/2101973003710222600)；具体事件以状态页为准 |
| 09-20 | [@typesafeai](https://x.com/typesafeai/status/2101786156572823624) | 无需候补名单；[同线程额度说明](https://x.com/typesafeai/status/2101786280946499671) |
| 09-19 | [@LangChain](https://x.com/LangChain/status/2101454284927959080) | 比较 judge 的准确性、重复稳定性、延迟与成本；结合[实验仓库](https://github.com/danielgshea/jev-as-a-judge)阅读，注意只有 5 个独立轨迹 |
| 09-19 | [@vercel_dev](https://x.com/vercel_dev/status/2101116818463281579) | AI Gateway 免费活动至 09-25，勿与直连定价混淆 |
| 09-18 | [@OpenRouter](https://x.com/OpenRouter/status/2100744709589316009) | beta 接入公告 |
| 09-18 | [@madiator](https://x.com/madiator/status/2100990591215783946) | Bespoke Nimble 的开放模型、数据和训练配方；是独立实现 |
| 09-18 | [@nedwize](https://x.com/nedwize/status/2100973868324417852) | 税务文件分类实践；可进一步检查[代码与数据说明](https://github.com/kyotofin/tax-doc-classifier)，不要将单一文档库成绩泛化 |
| 09-15 | [@CompleteSkeptic](https://x.com/CompleteSkeptic/status/2099925682726002904) | 创始人发布帖；性能主张与正式博客中的评测条件一起读 |

### 工程案例与中文实践

| 日期 | 作者 | 案例与边界 |
|---|---|---|
| 09-20 | [@richardt830](https://x.com/richardt830/status/2101780631667794077) | JevGraph：文档到带证据的知识图谱，基于 DocJev 的社区管线 |
| 09-20 | [@TTLequals0](https://x.com/TTLequals0/status/2101776961282408786) | 播客广告识别，附 [MinusPodJev 源码](https://github.com/ttlequals0/MinusPodJev)；不能据此认定 Jev 原生接收音频 |
| 09-20 | [@Saboo_Shubham_](https://x.com/Saboo_Shubham_/status/2101576462042366114) | 语义查找浏览器扩展：按含义定位文本 |
| 09-20 | [归藏 @op7418](https://x.com/op7418/status/2101536330018918793) | 从预制 3D 素材中并行选择并调整场景；不是 Jev 直接生成网格模型 |
| 09-20 | [AI Will @FinanceYF5](https://x.com/FinanceYF5/status/2101502474691698971) | 多局游戏决策演示的中文分享；成本和速度为帖子报告 |
| 09-20 | [AI Will @FinanceYF5](https://x.com/FinanceYF5/status/2101585391140905034) | 广告分析案例的中文分享；另见 [Matthew Berman 的 09-17 原始演示帖](https://x.com/TheMattBerman/status/2100654891756589230)，避免重复统计同一案例 |
| 09-19 | [@NFT_Chen](https://x.com/NFT_Chen/status/2101253568774697099) | 客服分单与 DeepSeek 的耗时 / 成本对照；没有足够证据由此推断同等准确率 |
| 09-19 | [黄小木 @ai_xiaomu](https://x.com/ai_xiaomu/status/2101135680168771979) | 中文入门长文入口；文中候补名单步骤已被后续公告更新 |
| 09-18 | [森叔 @harrisonitsme](https://x.com/harrisonitsme/status/2100799749192569167) | Agent Skill 和密钥配置教程；waitlist 部分保留为历史信息 |
| 09-18 | [@dimentary](https://x.com/dimentary/status/2101018760371171420) | MuJoCo 仿真：高层决策与运动判断拆为两次调用，输入为几何和接触文本 |
| 09-17 | [@tamarajtran](https://x.com/tamarajtran/status/2100694549362553153) | 对工具记录评分后筛除或截断；需要评估上下文信息损失和缓存影响 |
| 09-17 | [@ali_uraish](https://x.com/ali_uraish/status/2100425130082238682) | SO-101 仿真：视觉模型提供观察，Jev 选动作，本地控制器执行 |
| 09-17 | [@TheINAOG](https://x.com/TheINAOG/status/2100384258804093139) | 从模拟器 RAM 提取状态并做动作前瞻；游戏专用适配器降低了感知难度 |
| 09-17 | [@sid19arya0](https://x.com/sid19arya0/status/2100458351440048258) | 宝可梦对战的单次演示，不能当作跨游戏模型排行榜 |
| 09-16 | [@jpschroeder](https://x.com/jpschroeder/status/2100347770867458384) | 驾驶决策演示；“复刻 FSD”是作者说法，不能写成真实道路自动驾驶能力已验证 |
| 09-17 | [@rinte0321](https://x.com/rinte0321/status/2100736454850908344) | 日文电商实时接客演示：对话中途按用户发言即时推荐商品（Jev + gpt-live-1）；体验为作者描述，视频未复现 |
| 09-18 | [@ctatedev](https://x.com/ctatedev/status/2101022101750571357) | json-render + Jev 的动态界面实验：组件化 UI 毫秒级渲染，属于生成式 UI 方向的早期尝试 |
| 09-19 | [@yanhua1010](https://x.com/yanhua1010/status/2101257759497089171) | 用浏览器 Agent（Jev Ultrafast）查 12306 动车票：日常任务可用性演示 |

<a id="xiaohongshu"></a>
## 📕 小红书线索（Xiaohongshu）

**本轮访问了搜索页和原始笔记链接，但未取得可核验的笔记正文。** 搜索页未返回笔记结果，详情页出现登录跳转、暂不可浏览或超时；没有可用的已连接平台检索插件。因此下面是待核验入口，不是已确认的实测结论，也不代表平台没有更多新内容。

| 索引日期 | 笔记线索 | 核验状态 |
|---|---|---|
| 09-20，旧仓库记录 | [成了，用 cua 和 jev 实现电脑控制](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c) | 旧记录署名“北京月薪5k”；本轮未能复核作者、日期及正文 |
| 09-20，二级索引 | [Jev刚火两天，开源就杀疯了：0.5B就能跑！](https://www.xiaohongshu.com/explore/6aaf83ef0000000012001034) | 作者 / 正文待核验；标题的“本地模型”不能解释成官方 Jev 权重 |
| 09-20，二级索引 | [比Jev快50倍？本地部署直接原地起飞！](https://www.xiaohongshu.com/explore/6aaff680000000000b0379c0) | 作者 / 正文待核验；未采纳标题中的速度倍数 |
| 09-20，二级索引 | [一个视频搞懂Jev！](https://www.xiaohongshu.com/explore/6aaf548c000000000d025edf) | 作者 / 正文待核验 |
| 09-18，二级索引 | [给Codex配上Jev，真不想回去了](https://www.xiaohongshu.com/explore/6aace869000000002a024546) | 作者 / 正文待核验 |
| 09-18，二级索引 | [一文了解 Jev 模型到底是啥](https://www.xiaohongshu.com/explore/6aac6d53000000002802a9ff) | 作者 / 正文待核验 |
| 09-23，中文聚合仓库索引（09-24 收录） | [DeepSleep《GPT6 太慢？试试 Jev》](https://www.xiaohongshu.com/explore/6aafe241000000001103375f?xsec_source=pc_feed&xsec_token=ABBYuHgvK74N6nwyt2XSUtiXIRfSD7DdEkRk9hEf7bpsE%3D) | 标题、署名与带 `xsec_token` 的链接来自 [CodeAlex52/awesome-jev-cn](https://github.com/CodeAlex52/awesome-jev-cn) 的索引；带 token 访问仍返回“页面不存在”，正文未核实 |

> **关于 `xsec_token`**：小红书近年为笔记链接引入 `xsec_token`（配合 `xsec_source`）作为安全校验与反爬参数，直链必须携带与会话 / 来源绑定的有效 token 才能打开；缺 token 的站外直访会跳登录、提示“当前笔记暂时无法浏览”或 404。因此本节多数笔记链接在浏览器直接打开会失败，**这不代表笔记已删除**；带 token 的链接也会随 token 过期失效。

二级索引来自什么值得买的[参考来源列表 A](https://post.smzdm.com/p/ad798m6x/)、[列表 B](https://post.smzdm.com/p/a5ro30p3/)与[列表 C](https://post.smzdm.com/p/aggqvg7m/)，只用于发现原始链接。站内可检索 `Jev`、`Jev 模型`、`TypeSafe`、`Jev 实测`。完整访问情况与收录门槛见 [SOURCES.md](docs/SOURCES.md#xiaohongshu-checks)。

### 知乎文章（截至09-24）

> 三条入口已由维护者在浏览器中确认可打开（2026-09-24）；自动化抓取仍被知乎反爬拦截（403），正文要点待读取后补充。**标题中的数字在对照正文复核前不采信**。

| 文章 | 状态 |
|---|---|
| [《每步决策 385ms：接进两个真实系统》](https://zhuanlan.zhihu.com/p/2085717977140352185) | 维护者 09-24 确认可打开；自动抓取 403 |
| [《JEV 应用接入实测：距离“能用”还远着》](https://zhuanlan.zhihu.com/p/2085662736722276833) | 维护者 09-24 确认可打开；自动抓取 403 |
| [《Jev 实战系列 04：Jev + CDP 浏览器自动化》](https://zhuanlan.zhihu.com/p/2084848802809303864) | 维护者 09-24 确认可打开；自动抓取 403 |

另：[程序员鱼皮的实战教程](https://cloud.tencent.com/developer/article/2748472)有[知乎同题入口](https://zhuanlan.zhihu.com/p/2085400278489101833)，同一实验只算一条，已收录在[深度文章](#reading)区，以可读取的腾讯云原文为准。

<a id="ecosystem"></a>
## 💻 GitHub 生态

> 星数为 **2026-09-24 GitHub API 快照**，表示关注度，不是质量或性能评分。完整分类、更多项目和更新后的仓库名称见 [CATALOG.md](docs/CATALOG.md)。

| 方向 | 项目 | ★ | 阅读重点 |
|---|---|---|---|
| 浏览器 | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 18,959 | 动态索引动作；文本输入环节仍可调用生成模型 |
| 上下文管理 | [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 6,527 | 筛选工具记录；检查信息损失和上下文缓存的取舍 |
| 开放模型 | [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 19,984 | 独立开源决策模型；横向数字需检查测试条件 |
| 开放模型 | [TheoLeeCJ/SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev) | 4,065 | 开放模型上的语义条件判断，与 TypeSafe 无隶属关系；原 SemIf 已更名 |
| 开放模型 | [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 5,746 | 已扩展为 Qwen3.5 模型族，不能继续只描述为 0.5B 原型 |
| 训练配方 | [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1,677 | 对比数据策展、模型与评测 |
| 训练实现 | [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2,103 | 小型训练管线；独立实现而非官方权重 |
| Agent 评测 | [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 79 | 可检查实验设计，严格区分重复次数和样本数 |
| 综合评测 | [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 103 | 题目、模型适配器、结果和评分口径公开 |
| 独立评测 | [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 17 | 与本地 GLiNER2.5 的同任务对比试点；准确率、错误预算下覆盖率与延迟，条件公开 |
| 中文评测 | [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 8 | 中文客服、概率阈值与本地模型级联 |
| 中文评测 | [NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena) | 98 | 一万条评论同批对比 Jev 与 DeepSeek；AI 复核口径、可回放逐条核查 |
| 工具审查 | [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 20 | 检查工具调用和返回内容，默认 shadow 模式；不是沙箱 |
| Agent 审查 | [DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden) | 138 | 用 Jev 检查编码 Agent 的写入与项目规则，附维护者评测 |
| 模型路由 | [0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | 248 | 按调用选 Codex 模型与推理深度；约 −60% 的节省来自 237 轮历史模拟，非实测账单 |
| 内容索引 | [mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub) | 23 | X 长文与演示视频聚合，保留作者与原链；演示不因此视为已复现 |
| 编译优化 | [Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt) | 3 | Jev 选择是否内联，LLVM 负责变换合法性；有运行日志和比较脚本 |
| 增长应用 | [Refix](https://refix.ai) | — | 增长：通过产品试验、SEO、内容与广告，让产品以自动驾驶方式更快增长 |

浏览器项目存在随日期失效的演示目标：[09-21 的 issue #93](https://github.com/browser-use/jev-ultrafast/issues/93)指出默认机票日期已过期。复现演示时应检查输入条件；该 issue 是问题报告，不代表所有版本均已修复。

<a id="evaluations"></a>
## 📊 评测与局限

- **193.6× 更快、444.6× 更便宜**是 TypeSafe 特定工作流上的结果，官方指出它们偏向真实收益的高端；不是所有任务、地区或并发下的保证。[方法说明](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- **100% judge 命中**来自 5 个固定轨迹的重复评判；可研究稳定性，但无法据此宣称对任意任务准确。[实验代码](https://github.com/danielgshea/jev-as-a-judge)
- **中文场景已有可读小样本**：40 条工单中 Jev 31 条正确；含糊和边界输入仍有明显问题。[中文实验](https://github.com/yibie/laya-jev-lab)
- **同输入横向测试出现更多任务**：sysone-bench 比较 Jev、Laya、路由版 Laya 与 Qwen 约束解码；各模型的优势随任务变化。其“751 states”实际对应原始文件中的 751 个计分判断，详见[口径核对](docs/RESEARCH.md)。[实验仓库](https://github.com/instax-dutta/sysone-bench)
- **工具调用评测需要看多数类基线与标签来源**：Archestra 的 100 调用实验采用模型裁判一致子集，不能只读总准确率。[实验文章](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls)
- **类型正确不等于语义正确**：数学、日期、长上下文、对抗输入和跨问题恒等式都有已知限制。[官方说明](https://docs.typesafe.ai/model-jaggedness/jev-1.13)。09-22 的[选项名敏感性论文](https://arxiv.org/abs/2609.26758)进一步实测：只交换选项名与定义的对应，Jev-like 开源模型 AUC 从 0.94 跌到 0.23，托管 Jev 同类现象但幅度较小，而类型错误率始终为 0%
- **第三方横评开始出现**：09-21 的[计算社会科学标注横评](https://arxiv.org/abs/2609.24574)（18 任务 7,977 样本）报告 Jev 在 15 个正式任务中 14 个落后单任务最佳 LLM（中位差 11.6 macro-F1），但成本约为 1/44，且低置信度路由回 LLM 可用 1/4–1/2 成本追平；09-22 的 [REFLEX](https://arxiv.org/abs/2609.26532) 也报告外部评测对低成本生成级联的优势不稳定。均为作者报告，任务与提示词互不相同，不能合并排名

完整方法比较、指标口径、局限与复核清单见 [RESEARCH.md](docs/RESEARCH.md)。

<a id="papers"></a>
## 📄 论文与技术阅读（Papers & Technical Reading）

截至 09-26 未发现 TypeSafe 官方 Jev / RLCD 技术论文；这里收录的直接研究均为第三方预印本。此前核验的 13 篇仅代表 **09-22 截止的历史批次**，不是当前论文总量。09-23 / 09-24 新核验 8 篇，详见 [RESEARCH.md](docs/RESEARCH.md)。

新增研究中，[Decision Hijacking](https://arxiv.org/abs/2609.28613) 研究类型化决策受到提示注入后的概率变化；[Just Ask Jev](https://arxiv.org/abs/2609.29429) 提供对齐失效检测基准与受限访问的数据；[JEV vs. LLMs as Rubric Judges](https://arxiv.org/abs/2609.29769) 报告其任务中评判器的相关错误。另有[医疗报告](https://arxiv.org/abs/2609.27607)、[法律文档](https://arxiv.org/abs/2609.27678)、[移动操作](https://arxiv.org/abs/2609.30186)、[星际争霸控制](https://arxiv.org/abs/2609.27331)和[生态方法学](https://arxiv.org/abs/2609.30216)研究；不要把单篇实验结论推广为 Jev 的通用性能。

以下 6 篇背景研究按关联性收录，不将背景论文包装成 Jev 的训练配方：

| 分类 | 原始论文 | 关系 |
|---|---|---|
| 先前工作 | [SalesRLAgent，2503.23303](https://arxiv.org/abs/2503.23303) | 销售对话中的强化学习决策；先发讨论的原始材料 |
| 先前工作 | [Confidence-Aware Routing，2510.01237](https://arxiv.org/abs/2510.01237) | 在生成前评估不确定性并选择处理路径 |
| 校准基础 | [On Calibration of Modern Neural Networks，ICML 2017](https://proceedings.mlr.press/v70/guo17a.html) | 理解置信度、正确率和后处理校准 |
| 背景 | [LLaDA，2502.09992](https://arxiv.org/abs/2502.09992) | 非自回归语言建模；未确认与 Jev 架构的直接关系 |
| 背景 | [iLLaDA，2606.25331](https://arxiv.org/abs/2606.25331) | 2026 年掩码扩散模型研究；不是 Jev 新版本 |
| 缩写辨析 | [RLCD from Contrastive Distillation，2307.12950](https://arxiv.org/abs/2307.12950) | 全称与 TypeSafe 的 Calibrated Decisions 不同 |

### 2026-09 早期论文批次（截至09-22，13 篇）

| 分组 | 首发 | 论文 | 要点（作者报告） | 代码 |
|---|---|---|---|---|
| 应用 | 09-19 | [Replacing LLMs with Jev Decision Models for Low-Latency Edge Service Orchestration，2609.22753](https://arxiv.org/abs/2609.22753) | 边缘服务编排；中位决策延迟比结构化输出 DeepSeek 低 15.9–26.5%，无缓存时每正确完成任务的 API 费用低约七成；缓存基本抹平延迟差 | — |
| 应用 | 09-19 | [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks，2609.23136](https://arxiv.org/abs/2609.23136) | 6G 意图驱动编排；中位决策延迟比 DeepSeek 低 22.4%、比 Gemini 低 61.9%；真实图像服务 1,080 请求中 459 个正确按时（DeepSeek 463、Qwen 435） | — |
| 应用 | 09-21 | [Calibrated Decisions at Scale: … Crash Narratives … (Jev)，2609.24052](https://arxiv.org/abs/2609.24052) | 德州事故叙述批量编码：筛查 499,500 条，27 题模式编码 195,857 条；对 2,416 条盲评人工判断 F1 0.908；概率用于抽选人工复核样本 | [GitHub](https://github.com/pozapas/jev-calibrated-narrative-coding) |
| 应用 | 09-21 | [Jev for Scientific Decisions，2609.24965](https://arxiv.org/abs/2609.24965) | 科学流程中的语义选择；10 个案例上与其他 5 个配置并列语义全对，成功响应的中位延迟最低；强调语义选择、下游计算与最终标签分开检查 | — |
| Jev-Anything | 09-21 | [Jev-Mem: System-One-Controlled Agentic Memory，2609.23986](https://arxiv.org/abs/2609.23986) | 记忆分类、检索预算、查询路由与停止条件交给 System-One 控制；LoCoMo 综合分 0.777，记忆构建 158 秒（比最快对照快 6.6 倍） | [GitHub](https://github.com/libingzheren/Jev-Mem) |
| Jev-Anything | 09-22 | [REFLEX with Jev for Efficient Selective Control in LLM Agents，2609.26532](https://arxiv.org/abs/2609.26532) | 置信度足够高执行有限决策，否则升级到强模型；固定 100 任务保持 95% 成功率、强模型调用少 72.7%；但外部评测中相比低成本生成级联优势不稳定 | — |
| Jev-Anything | 09-22 | [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure，2609.26550](https://arxiv.org/abs/2609.26550) | 对比 16 个生成式 / 奖励模型 Judge；常规偏好与事实判断距最强 LLM Judge 不到 3 个百分点，费用约 0.36%；置信级联保留 99% 准确率 | — |
| Jev-Anything | 09-21 | [Open-Jev Judgments on CallScreenBench，2609.23959](https://arxiv.org/abs/2609.23959) | Qwen3-4B 微调出 JevLite，单次前向读出诈骗概率；41 场景 577 次逐轮判断 AUROC 0.974；64.5 ms / 次、比同底座生成答案快 4.9 倍；作者自述无架构创新、配方选择有测试集暴露、来电均为合成 | — |
| Jev-Anything | 09-21 | [JEVQA — Video Quality …，2609.24395](https://arxiv.org/abs/2609.24395) | 零样本视频质量；仅元数据相关 0.737 已接近标准化 P.1204.1（0.733），加码流 + 像素特征到 0.824；相同特征专门训练的模型仍明显更好 | — |
| Jev-Anything | 09-22 | [Visual Jev: … Shared Visual Context，2609.25845](https://arxiv.org/abs/2609.25845) | 一图多问共享视觉上下文；每图 32 问时比逐问执行快 8.9 倍、比重算视觉前缀的批处理快 3.4 倍，代价是峰值内存更高 | [GitHub](https://github.com/guanxuyu-sv/Visual-Jev) |
| 开源与横评 | 09-20 | [this-that-model-1.0，2609.23886](https://arxiv.org/abs/2609.23886) | 约 2B 参数开源类型化决策模型，单次判断 30.9 ms；第三方记录的 68 题上 0.941 对 Jev 0.765；多步计算任务 0.560 对 Jev 0.98–1.00 | [GitHub](https://github.com/FLock-io/this-that-model) |
| 开源与横评 | 09-21 | [Evaluating Decision Models for Text Annotation in Computational Social Science，2609.24574](https://arxiv.org/abs/2609.24574) | 18 个计算社会科学任务 7,977 条样本，对比 19 个 LLM；15 个正式任务中 14 个 Jev 落后单任务最佳 LLM，中位差 11.6 macro-F1，成本约为其 1/44；低置信度路由回 LLM 可用 1/4–1/2 成本追平或更好 | [GitHub](https://github.com/hazemibrahim97/decision-models-css) |
| 开源与横评 | 09-22 | [Type-Safe Is Not Error-Free，2609.26758](https://arxiv.org/abs/2609.26758) | 只交换选项名与定义的对应（0/1 ↔ no/yes）即大面积反转，AUC 0.94 → 0.23；托管 Jev 同类现象但幅度较小；全程类型错误率 0% | — |

作者、日期、发表性质和阅读边界见 [论文详解](docs/RESEARCH.md)。

<a id="reading"></a>
## 📰 深度文章与讨论

| 日期 | 材料 | 价值 |
|---|---|---|
| 09-24 | [程序员鱼皮：一手实战测评 + 保姆级教程（腾讯云开发者）](https://cloud.tencent.com/developer/article/2748472) | 数字华容道、1,000 封模拟邮件、连连看、697 篇文章打标签的操作记录；邮件速度与费用为作者测试，不写成通用基准；[知乎同题入口](https://zhuanlan.zhihu.com/p/2085400278489101833)勿重复计数 |
| 09-23 | [PaperWeekly：13 篇论文盘点（中文）](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw) | 按“首批应用 / Jev-Anything / 开源平替与挑错”三组梳理 09-19 至 09-22 的 arXiv 论文潮；数字以各论文原文为准 |
| 09-21 | [数字生命卡兹克：这个只会做选择题的 Jev（授权转载）](https://news.pedaily.cn/202609/569378.shtml) | 将 Jev 用于 AI 信息预筛的作者自测：100 题比较、一条新闻同时回答多个问题；结果以截图与叙述呈现，标注为作者自测（09-24 收录） |
| 09-20 | [硅星人Pro：实测 Jev（虎扑转载）](https://www.huxiu.com/article/4892583.html) | 50 条中文客服题 × 4 项判断 × 15 次重复：约 64–65% 正确、约 0.73 秒 / 题；**阈值附近的分数波动**——1.99 分对 2.00 分转人工截断，15 次中 3 题翻转；[公众号原帖](https://mp.weixin.qq.com/s?__biz=MzkyNjU2ODM2NQ%3D%3D&chksm=c34d64c8d9c576303a91a12548bb0d3a63e9c0d03e25645cd7d460b5cfaf5d0a192546d90b33&idx=1&mid=2247633323&sn=936abc6916a79b3005f4fc6c42e8653f)本轮被验证墙拦截，数字取自可读转载（09-24 收录） |
| 09-21 | [LangSmith：Jev 评估集成](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) | 将轨迹与问题映射到反馈字段；附在线评估配置步骤 |
| 09-21 | [Latent Space × Diogo Almeida](https://www.latent.space/p/jev) | 创始人长访谈与文字稿；设计动机、使用方式和生态案例 |
| 09-21 | [Simon Willison：Decision Models](https://simonwillison.net/2026/Sep/21/jev/) | 接口、搜索重排与黑箱可解释性 |
| 09-21 | [Di Zhang：What Is RLCD?](https://di-zhang-llm.github.io/blog/what-is-rlcd-the-secret-behind-jev/) | 偏好建模视角；明确作为社区假说阅读 |
| 09-21 HN 收录 | [Archestra：100 个真实 Agent 调用](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls) | 多数类基线、选项顺序、拒绝召回和评测标签问题 |
| 09-21 HN 收录 | [Expanso：日志分流实践](https://expanso.io/blog/log-triage-expanso-jev/) | 将规则、上下文计数、模型判断与重试降级拆开 |
| 09-20 | [LangChain：Jev-as-a-Judge for Agent Evals](https://www.langchain.com/blog/jev-agent-evals-langsmith) | 五个固定轨迹的重复实验；不要与 09-21 的产品集成公告混淆 |
| 09-18 | [Vercel：AI Gateway 采用情况](https://vercel.com/blog/ai-gateway-jev-model-launch) | 平台报告首日近 13% 付费团队使用；统计范围不是全球开发者 |
| 09-17 | [LangChain：Building a Harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev) | Agent 路由和工具执行前判断 |
| 09-16 | [Sean Goedecke：结构化输出](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | 接口设计与不同实现路径 |
| 09-15 | [TypeSafe 公司新闻稿](https://www.businesswire.com/news/home/20260915525333/en/) | 公司与融资信息的一手出处 |

讨论入口：[HN 发布帖](https://news.ycombinator.com/item?id=49717558)、[Simon 文章讨论（09-22 收录）](https://news.ycombinator.com/item?id=49796843)、[工具调用评测讨论](https://news.ycombinator.com/item?id=49788402)、[Reddit 先前工作争议](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/)。讨论热度和当事人主张都不能替代实验或论文证据。

<a id="faq"></a>
## ❓ FAQ

**现在还要排队吗？** 官方已宣布取消候补名单。直接到 [Console](https://console.typesafe.ai) 登录；历史教程中的 waitlist 步骤已过时。见[公告](https://x.com/typesafeai/status/2101786156572823624)与[安装指南](docs/INSTALLATION.md)。

**能在本地运行 Jev 吗？** 本轮未找到官方 Jev 权重。Laya、Kev、SemIf、Nimble 等是独立开放实现，能力、训练与许可分别以各项目为准。

**能看图、写文章或生成 3D 模型吗？** 当前官方接口只接受文本状态。相关演示通常先将视觉 / 音频转成文本，或让 Jev 从已有素材和动作中选择；生成工作由其他组件完成。[模型规格](https://docs.typesafe.ai/models)

**返回 0.9 是否意味着这次一定有 90% 把握正确？** 需要先分清概率字段和 `confidence`，再在目标分布上测量校准；单个数值无法替代任务验证。[Confidence](https://docs.typesafe.ai/confidence)

**为什么不收录所有热帖？** 重复转述、只有夸张标题、无法找到原文或没有实验条件的条目不能作为技术结论。受访问限制的社交线索单独标注，欢迎补充可复核来源。

<a id="contributing"></a>
## 🤝 贡献（Contributing）

1. 与 Jev / System One 直接相关；优先官方资料、作者原帖、代码和原始论文。
2. 附作者、发布日期、原始链接；社交平台注明正文是否可读取。
3. 数字附任务、样本量、版本和测量条件；星数 / 热度注明快照日期。
4. 同一案例的中英文转述互相链接；不重复计算为独立实验。
5. 小红书线索核验后请补作者、时间与内容证据，再移入正式精选。
6. 提交前检查 Markdown、相对链接和目录锚点。

## 📜 License

[MIT](LICENSE) © 2026 awesome-jev contributors
