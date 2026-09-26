# 来源与核验记录（Source Audit）

**语言 / Language: 简体中文 · [English](SOURCES_EN.md)**

> 2026-09-22 初次核验；2026-09-24 完成全库链接核查；**2026-09-26 增量核验**新增来源。README 徽章中的 09-24 仍表示上次全库核验，不表示本轮重查了全部旧链接。
> 返回 [README](../README.md) · [项目目录](CATALOG.md) · [论文与评测](RESEARCH.md) · [安装指南](INSTALLATION.md)

## 覆盖范围与证据等级

| 范围 | 本轮取得的材料 | 不能由此推断 |
|---|---|---|
| 官方信息 | TypeSafe 发布文章、文档、SDK changelog、状态页；四个网关及 LangSmith Evals 的官方资料 | 文档承诺已经由本仓库实测，或各网关规格完全相同 |
| X | **45 条不同帖文**的作者、日期与可读取文本；32 条来自 X 官方嵌入接口，另 13 条来自 FxTwitter 镜像 | 全平台穷尽检索、所有长文与视频均完整读取、所有演示均复现 |
| GitHub | **51 个仓库**的公开 API 元数据；对新增重点项目及部分旧条目另读 README / 结果文件 | 星数代表质量，或所有项目代码均经过审计 |
| 论文 | **6 篇**原始论文页面，对其中涉及先前工作争议的两篇另读 HTML 正文（09-22 快照）；09-24 增补 **13 篇**（09-19 至 09-22 首发），经 arXiv API 逐篇核对标题 / 作者 / 首发日期，内容取自摘要 | 这些是 Jev 官方论文（仍不存在），或摘要数字已被本仓库复现 |
| 工程与评测 | 作者博客、实验仓库、结果说明、创始人访谈及文字稿 | 不同样本、硬件、地区和计价口径可以直接合并排名 |
| 小红书 | 搜索页、9 个笔记链接及二级索引；**未取得可核验的笔记正文** | 已完成平台内容覆盖，或标题中的速度 / 成本数字已经确认 |

正文优先引用官方页面、作者原帖、原始论文和代码。新闻聚合、HN 和其他 Awesome 列表用于发现线索，再回查出处。重复转述不算独立实验；社区假说、作者自报结果、待核验线索均作显式标记。

## 关键事实的原始出处

| 核验项 | 出处与本轮处理 |
|---|---|
| 发布时间、RLCD 定位、厂商工作流评测 | [TypeSafe 发布文章](https://typesafe.ai/blog/introducing-system-one-models-and-jev)；将速度与费用倍数限定到官方测量条件 |
| 模型版本、别名、价格、上下文与输入模态 | [Models](https://docs.typesafe.ai/models)；将 SDK 更新与模型升级分开 |
| `confidence` 与 Noul | [Confidence](https://docs.typesafe.ai/confidence)；更正“自由文本自评”的旧解释，注明 Noul 无独立 confidence |
| 255 个候选项与能力边界 | [Choice](https://docs.typesafe.ai/primitives/choice)、[Jev 1.13 jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13)；不声称 API 自动切换为两阶段选择 |
| 不再需要候补名单、起始额度 | [官方开放公告](https://x.com/typesafeai/status/2101786156572823624)、[同线程额度回复](https://x.com/typesafeai/status/2101786280946499671) |
| Python 与 JS 使用方式 | [Python changelog](https://docs.typesafe.ai/sdk/python/changelog)、[JS SDK](https://docs.typesafe.ai/sdk/javascript)；补充 0.7.1、破坏性变化和独立包名 |
| Vercel 接入与限时活动 | [09-16 接入公告](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway)、[09-19 活动原帖](https://x.com/vercel_dev/status/2101116818463281579)；不推断未公布的截止时区或账户条件 |
| Cloudflare / OpenRouter | [Cloudflare 模型页](https://developers.cloudflare.com/ai/models/typesafe/jev/)、[OpenRouter 模型页](https://openrouter.ai/typesafe/jev-1.13)及[官方 beta 公告](https://x.com/OpenRouter/status/2100744709589316009) |
| LangSmith Evals / Gateway | [09-21 产品公告](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals)、[Decision models 文档](https://docs.langchain.com/langsmith/llm-gateway-decision-models)；区分 Jev BYOK、托管 SemIf 及其 09-28 免费期限与地区 / 计划限制 |
| 服务事件 | [官方状态页](https://status.typesafe.ai/)；09-20 Console 事件在 09-21 08:16 UTC 标为恢复，09-21 API 事件在 23:40 UTC 标为恢复；复读时页面更新标记为 09-22 07:28 UTC，显示服务在线 |
| 2026-09 论文潮（09-24 增补） | 线索来自 [PaperWeekly 09-23 盘点](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw)；13 个 arXiv 编号经 [arXiv API](https://export.arxiv.org/api/query?id_list=2609.22753,2609.23136,2609.24052,2609.24965,2609.23986,2609.26532,2609.26550,2609.23959,2609.24395,2609.25845,2609.23886,2609.24574,2609.26758) 逐篇核对标题、作者与首发日期（13/13 命中，其中 09-21 首发确为 6 篇）；正文要点与数字取自各论文摘要；5 个配套 GitHub 仓库核对过 `full_name` 与星数（09-24 快照），未审计代码 |
| 2026-09-24 社区增补轮 | **GitHub**：jev-benchmarks、jev-arena、pi-warden、jev-codex-router、jev-hub、awesome-jev-cn 六个仓库经公开 API 核对 `full_name` 与星数；jev-benchmarks / jev-arena / jev-codex-router 另读 README 原文核对数字与免责声明。**文章与文档**：腾讯云 ADP 博客、Pydantic AI 文档、投资界（卡兹克授权转载，09-21）、虎扑（硅星人Pro 转载，09-20）、腾讯云开发者（程序员鱼皮）五篇 HTTP 可读并抽取关键数字；硅星人Pro 公众号原文返回验证墙、三个知乎入口自动抓取 403——知乎三篇已由维护者于 09-24 在浏览器确认可打开，正文要点待读取后补充。**X**：@rinte0321、@ctatedev、@yanhua1010 三条经 FxTwitter 镜像核对作者、UTC 时间与文本。**小红书**：DeepSleep 笔记访问返回“页面不存在”，仅按第三方索引列为待核验线索。无法读取的正文一律不采信其数字 |
| 2026-09-24 全库链接核查 | 10 个 Markdown 文件的 **219 条外部链接、65 个 GitHub 仓库**与全部内部锚点、相对链接逐一检查：GitHub 无 404，除 SemIf 已更名（[SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev)，README 与 CATALOG 同步更新）外无仓库改名；x.com、HN、Medium、Reddit、Substack、Discord、HuggingFace 等域名在本轮网络环境遭 DNS 污染不可达（其内容 09-22 已核验或经镜像可读），知乎 403（维护者浏览器确认可打开，正文待读）、小红书“暂无法浏览”跳转、businesswire 403、微信验证墙与既有条目标注一致；未发现新增失效链接。README 主标注据此更新为 2026-09-24（Asia/Shanghai） |
| 公司与融资 | [09-15 公司新闻稿](https://www.businesswire.com/news/home/20260915525333/en/)；保留有出处的信息，删除未核实的估值与人物细节 |

以上都是日期快照。状态页会变化，模型别名、限流、价格与促销也应在实际使用前重查。

## 2026-09-26 增量核验与取舍

本轮重新打开 [TypeSafe Models](https://docs.typesafe.ai/models)：当前仍为 `jev-1.13.0`，`jev-latest` / `jev-preview` 均指向它，且暂无 preview。[状态页](https://status.typesafe.ai/)显示 API / Console 在线，09-23 延迟事件及此前事件均为已恢复的历史记录。Vercel 的[模型页](https://vercel.com/ai-gateway/models/jev)写促销于 09-25 结束，但 09-26 页面仍显示 Free；未使用账户核对账单，故不宣称 09-26 仍免费或必然收费。[接入公告](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway)仍保留旧促销文案。

- **框架与平台第一方材料**：[Pydantic Jev 模型文档](https://pydantic.dev/docs/ai/models/typesafe/)、[Evals 实例](https://pydantic.dev/articles/jev-evals)、[Gateway 公告](https://pydantic.dev/articles/jev-pydantic-ai-gateway)；[Composio TypeSafe 文档](https://docs.composio.dev/docs/providers/typesafe)及[更新记录](https://docs.composio.dev/reference/changelog)；[Rig 主仓库](https://github.com/0xPlaygrounds/rig)标示 experimental；[Ax 第一方站点源码](https://github.com/ax-llm/ax/blob/main/website/content/_index.md)；[Vercel Connect](https://vercel.com/connect/jev)及[eve 评估指南](https://github.com/vercel/eve/blob/main/docs/guides/evaluate.md)。Pydantic 的 `LLMJudge` / `GEval` 已由正式文章确认，不能仅从旧 issue 推断。
- **社区仓库直接核验**：[TypeSafeAI 组织声明](https://github.com/TypeSafeAI)明确非官方；[playground](https://github.com/TypeSafeAI/typesafe-playground)区分 mock 和实时调用；[harness](https://github.com/TypeSafeAI/jev-harness)主体是离线契约、实时传输交给宿主。[verdict](https://github.com/khimaros/verdict)自述独立 wire-compatible 实现。[TradingAgents](https://github.com/TauricResearch/TradingAgents) 及其 [v0.5.1 release](https://github.com/TauricResearch/TradingAgents/releases)确认 Jev 仅是可选帖文筛选；[PyGPT](https://github.com/szczyglis-dev/py-gpt) README / 2.8.31 changelog 明示 inline 插件。[Convex 决策评测](https://github.com/get-convex/convex-evals) 与主编码评测分开。未给这些新增条目填写易变的星数。
- **研究与原始记录**：8 篇新论文的 arXiv 原页逐篇列于 [RESEARCH.md](RESEARCH.md)；此前 13 个 ID 也重新打开检查仍可用，历史批次计数未当作当前总数。[Jev-Benchmark](https://github.com/ZF-Utokyo/Jev-Benchmark) 的 `benchmark/providers.py`、`benchmark/protocol.py`、`data/provenance.json` 与 `docs/protocol.md` 直接核对 ContractNLI 和 Jev 原生调用；[RLCDAlignBench](https://github.com/sumleo/RLCDAlignBench) 与[受限访问数据卡](https://huggingface.co/datasets/sumleo/RLCDAlignBench)核对数据范围和标签来源；[JEV-Star](https://github.com/sc2musa/Jev_Star) README 保留有限样本与同时改动接口的限制。
- **未收录 / 未宣称**：`reticlehq/reticle` 现有条目仍明确是计划集成，未提升为已支持；`TypeSafeAI` 不归入官方；`verdict` 不归入官方模型；playground 的 110 个示例数不复制进目录，避免高频维护；`Jev in the Wild` 的 2,170 是论文方法下的 GitHub 样本，不是本仓库验证的集成数。暂不依据聚合站结果新增缺少代码或第一方证据的长尾项目。

## X 的核验方法

直接帖子页受访问限制时，先读取 X 的公开嵌入接口，例如[官方开放公告的嵌入数据](https://cdn.syndication.twimg.com/tweet-result?id=2101786156572823624&lang=en&token=0)。补充渠道为 [FxTwitter 的同帖镜像](https://api.fxtwitter.com/status/2101786156572823624)；它是第三方服务，不是官方证据等级的替代品。

核对帖文 ID、作者、时间和文本，精选条目仍链接原始 X 地址。嵌入接口可能截断长帖：只引用实际取得的内容；需要实验细节时转向作者链接的仓库或文章。视频演示若未独立运行，只写“作者报告”。

正文 X 日期统一用 **UTC**。例如取消候补名单的帖子发布于 **09-20 21:30 UTC**，换算北京时间是 **09-21 05:30**；两种日期不是互相矛盾的公告。

<a id="xiaohongshu-checks"></a>
## 小红书访问记录

访问了[站内 Jev 搜索页](https://www.xiaohongshu.com/search_result?keyword=jev&source=web_explore_feed)。返回页面有搜索标题，但未包含可读取的笔记结果；这不能证明搜索无命中。详情页返回“当前笔记暂时无法浏览”、登录跳转或超时。当前会话也没有可用的已连接平台检索插件。

2026-09-24 补充：小红书近年为笔记直链引入 `xsec_token`（配合 `xsec_source`）安全校验与反爬参数，token 与会话 / 来源绑定且有时效；缺 token 或 token 失效时表现为登录跳转、“当前笔记暂时无法浏览”或 404 跳转。上述访问结果与该校验行为一致，**不证明笔记已被删除**；核验需在站内或携带有效 token 打开。

除第一条来自仓库旧记录外，其余标题和日期来自什么值得买的参考列表：[A](https://post.smzdm.com/p/ad798m6x/)、[B](https://post.smzdm.com/p/a5ro30p3/)、[C](https://post.smzdm.com/p/aggqvg7m/)。它们只用于发现链接，**作者、发布日期及正文均未获平台原文复核**。

| 索引日期 | 笔记链接 / 标题线索 | 访问结果 |
|---|---|---|
| 09-20，仓库旧记录 | [成了，用 cua 和 jev 实现电脑控制](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c) | explore 页暂不可浏览；旧分享入口转登录；旧署名“北京月薪5k”未复核 |
| 09-20，B | [Jev刚火两天，开源就杀疯了：0.5B就能跑！](https://www.xiaohongshu.com/explore/6aaf83ef0000000012001034) | 暂不可浏览；HTTP 成功返回的是错误提示页，并非笔记正文 |
| 09-20，B | [比Jev快50倍？本地部署直接原地起飞！](https://www.xiaohongshu.com/explore/6aaff680000000000b0379c0) | 暂不可浏览 |
| 09-20，A | [一个视频搞懂Jev！](https://www.xiaohongshu.com/explore/6aaf548c000000000d025edf) | 暂不可浏览 |
| 09-18，C | [给Codex配上Jev，真不想回去了](https://www.xiaohongshu.com/explore/6aace869000000002a024546) | 暂不可浏览 |
| 09-18，A | [一文了解 Jev 模型到底是啥](https://www.xiaohongshu.com/explore/6aac6d53000000002802a9ff) | 读取超时 |
| 09-16，A | [输出免费！前OpenAI研究员发布全新模型](https://www.xiaohongshu.com/explore/6aa9fe26000000001001c25e) | 读取超时 |
| 09-16，A | [RLHF核心研究者发布新模型，称比LLM快200倍](https://www.xiaohongshu.com/explore/6aaa543600000000260385d5) | 读取超时 |
| 09-16，A | [chatgpt联合创始人发布新模型jev](https://www.xiaohongshu.com/explore/6aa9e5aa0000000028002b34) | 读取超时 |

没有将“50 倍”“200 倍”或人物头衔写成事实。后续补充需给出可复核的作者、日期、正文或视频内容，以及性能数字的测试条件；满足后再移入正式精选。

## 论文检索与实验阅读

- 检查官方发布文章、[文档索引](https://docs.typesafe.ai/llms.txt)和访谈中的公开技术材料。
- [arXiv：Jev TypeSafe](https://arxiv.org/search/?query=Jev+TypeSafe&searchtype=all&abstracts=show&order=-announced_date_first&size=50) 本轮返回无结果；补充搜索精确 RLCD 全称及 OpenReview，未找到匹配的官方论文。精确全称的 arXiv 检索页另一次访问超时，不将这次失败计作“零结果”。
- **09-24 论文增补**：微信公众号文章可读取原文（HTML 直取，正文完整），但其角色只是**发现线索**；13 篇论文以 [arXiv API 的 `id_list` 批量查询](https://export.arxiv.org/api/query?id_list=2609.22753,2609.23136,2609.24052,2609.24965,2609.23986,2609.26532,2609.26550,2609.23959,2609.24395,2609.25845,2609.23886,2609.24574,2609.26758)为准，逐篇核对编号、标题、作者与首发日期，全部命中后才收录。文章的分组（首批应用 / Jev-Anything / 开源平替与挑错）与“09-21 一天 6 篇”的说法与 API 返回一致；文章没给出各论文作者，作者名单取自 API。关键词站内检索可能漏检，09-22 关于“未找到官方论文”的检索结论按原样保留。
- 阅读两篇先前工作预印本、校准基础论文、LLaDA / iLLaDA，以及同缩写但不同含义的 RLCD 论文；完整元数据与关联范围见 [RESEARCH.md](RESEARCH.md)。
- 核对 judge 实验的 **5 个独立轨迹**、Archestra 的模型裁判一致子集、JevBench 的延迟修正、中文实验的 **40 个样本**与阈值选择方式。
- `sysone-bench` 最初按 `main` 抓取失败，后确认默认分支为 `master`，成功读取 README、两版报告、硬件信息与原始 Jev JSON；核算为 541 条状态、751 个计分判断，更正作者概述的口径。未调用付费 API，也未重新训练或跑基准。

## GitHub 快照与旧内容修正

星数取自公开 `GET https://api.github.com/repos/{owner}/{repo}` 返回的 `stargazers_count`，另核对 `full_name`、默认分支与描述。51 个仓库成功取得元数据；后续请求遇到匿名 API 限流时停止补取，未取得的数值用 `—`，不沿用旧星数冒充新快照。功能与实验描述另以 README 和结果文件为准。

本轮还修正了这些容易误导读者的内容：

- Vercel 采用情况文章实际为 **09-18**，Sean Goedecke 文章为 **09-16**；HN 收录日单独注明。
- `AbdelStark/awesome-typesafe` 已重定向至 `awesome-typesafe-jev`；官方 JS 仓库是 `typesafe-sdk-js`。
- Kev 已扩展到 Qwen3.5 模型族；jevlike 是独立研究实现；Reticle 将 Jev 集成列为尚未交付的计划。
- 不从 GitHub fork 推断技术血缘，不把平台搜索总量当成有效 Jev 项目数，也不保留未经核验的点赞快照。
- 聚合页中出现晚于本轮日期的更新条目时排除；新闻媒体首页不充当具体报道的来源。

链接可读取、文档语法正确与实验可复现是不同层次的验证。本轮完成的是资料整理与文档核对，仍需持续跟进服务和社区变化。
