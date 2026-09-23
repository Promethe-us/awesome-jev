# 来源与核验记录（Source Audit）

**语言 / Language: 简体中文 · [English](SOURCES_EN.md)**

> 核验日期：**2026-09-22，Asia/Shanghai（UTC+8）**。本轮重点更新 09-20 至 09-22 的信息，同时复查发布周资料。
> 返回 [README](../README.md) · [项目目录](CATALOG.md) · [论文与评测](RESEARCH.md) · [安装指南](INSTALLATION.md)

## 覆盖范围与证据等级

| 范围 | 本轮取得的材料 | 不能由此推断 |
|---|---|---|
| 官方信息 | TypeSafe 发布文章、文档、SDK changelog、状态页；四个网关及 LangSmith Evals 的官方资料 | 文档承诺已经由本仓库实测，或各网关规格完全相同 |
| X | **45 条不同帖文**的作者、日期与可读取文本；32 条来自 X 官方嵌入接口，另 13 条来自 FxTwitter 镜像 | 全平台穷尽检索、所有长文与视频均完整读取、所有演示均复现 |
| GitHub | **51 个仓库**的公开 API 元数据；对新增重点项目及部分旧条目另读 README / 结果文件 | 星数代表质量，或所有项目代码均经过审计 |
| 论文 | **6 篇**原始论文页面；对直接涉及先前工作争议的两篇另读 HTML 正文 | 这些都是 Jev 论文，或能据此证明 Jev 的私有架构 |
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
| 公司与融资 | [09-15 公司新闻稿](https://www.businesswire.com/news/home/20260915525333/en/)；保留有出处的信息，删除未核实的估值与人物细节 |

以上都是日期快照。状态页会变化，模型别名、限流、价格与促销也应在实际使用前重查。

## X 的核验方法

直接帖子页受访问限制时，先读取 X 的公开嵌入接口，例如[官方开放公告的嵌入数据](https://cdn.syndication.twimg.com/tweet-result?id=2101786156572823624&lang=en&token=0)。补充渠道为 [FxTwitter 的同帖镜像](https://api.fxtwitter.com/status/2101786156572823624)；它是第三方服务，不是官方证据等级的替代品。

核对帖文 ID、作者、时间和文本，精选条目仍链接原始 X 地址。嵌入接口可能截断长帖：只引用实际取得的内容；需要实验细节时转向作者链接的仓库或文章。视频演示若未独立运行，只写“作者报告”。

正文 X 日期统一用 **UTC**。例如取消候补名单的帖子发布于 **09-20 21:30 UTC**，换算北京时间是 **09-21 05:30**；两种日期不是互相矛盾的公告。

<a id="xiaohongshu-checks"></a>
## 小红书访问记录

访问了[站内 Jev 搜索页](https://www.xiaohongshu.com/search_result?keyword=jev&source=web_explore_feed)。返回页面有搜索标题，但未包含可读取的笔记结果；这不能证明搜索无命中。详情页返回“当前笔记暂时无法浏览”、登录跳转或超时。当前会话也没有可用的已连接平台检索插件。

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
