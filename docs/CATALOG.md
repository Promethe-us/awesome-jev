# Jev 生态项目目录（Community Catalog）

**语言 / Language: 简体中文 · [English](CATALOG_EN.md)**

> 这是 [README](../README.md#ecosystem) 的扩展目录，按用途组织。**星数核验于 2026-09-22，取自 GitHub API**；`—` 表示本轮未取得数值，不代表零星。带数值的 GitHub 条目已核对仓库元数据；功能描述依据维护者资料，本仓库未运行验证其代码。
> 相关指南：[上手安装](INSTALLATION.md) · [论文与评测](RESEARCH.md) · [核验记录](SOURCES.md)。独立开放模型不是 TypeSafe 官方 Jev 权重。

## 我想先理解 Jev 是什么

| 资源 | 适合 |
|---|---|
| [官宣博客（Diogo Almeida 亲笔）](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 第一手动机、架构、RLCD、定价与官方免责声明 |
| [System One 概念文档](https://docs.typesafe.ai/concepts/system-one) | “决策模型”与聊天模型的本质区别 |
| [State 概念文档](https://docs.typesafe.ai/concepts/state) | 如何把上下文组织成 Jev 能吃的结构化状态 |
| [Confidence 文档](https://docs.typesafe.ai/confidence) | confidence 与 probability 的区别、怎么用 |
| [@CompleteSkeptic 官宣推文（09-15）](https://x.com/CompleteSkeptic/status/2099925682726002904) | 创始人对产品的介绍 |
| [黄小木：Jev 模型从 0 到 1（09-19）](https://x.com/ai_xiaomu/status/2101135680168771979) | 中文入门；候补名单步骤已过时 |
| [whatisjev.com（含中文版）](https://whatisjev.com/zh/getting-started) | 社区维护的知识站 |

## 官方 SDK 与服务入口

| 项目 | ★ | 说明 |
|---|---|---|
| [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | 194 | Python ≥ 3.10；官方 changelog 已至 0.7.1（09-21） |
| [typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | 218 | Node.js ≥ 20；包名 `@typesafe-ai/sdk` |

直连、Vercel、Cloudflare、OpenRouter、LangSmith 的模型标识和请求格式分别查看[安装指南](INSTALLATION.md)。官方已取消候补名单；账号额度以 Console 为准。

## 我想跑通第一个调用

- [Playground](https://console.typesafe.ai/playground)（零代码）→ [API Key](https://console.typesafe.ai/keys) → [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python)
- 没拿到 Key？用 [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python)（248★，2026-09-22）拿任意 LLM 顶替
- 完整步骤：[INSTALLATION.md](INSTALLATION.md)

## 我想给 Agent / 编程助手接上 Jev

| 项目 | ★ | 说明 |
|---|---|---|
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 1,645 | 官方 Agent Skill（Claude Code 插件 / npx skills 双通道） |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 6,086 | Claude Code 插件：评分后筛除工具调用及结果，保留用户与助手正文 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 319 | Claude Code 里按任务路由到最便宜模型 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 509 | 分阶段代码评审 + 本地 Dashboard |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 198 | 本地优先持续质量评审 MCP 插件 |
| [Alurith/jeff](https://github.com/Alurith/jeff) | 35 | 只读 CLI 语义代码评审 |
| [zdenham/jev-lint](https://github.com/zdenham/jev-lint) | 2 | 自然语言规则的语义 linter |
| [thruwire/foreman](https://github.com/thruwire/foreman) | 479 | 软件工厂“工头” |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 683 | 编码 Agent；附 Jev 路由与 token 节省机制文档 |
| [reticlehq/reticle](https://github.com/reticlehq/reticle) | 810 | Agent 产出验证工具；README 将 Jev 路由列为计划，尚未交付该集成 |
| [kitze/skillbox](https://github.com/kitze/skillbox) | 224 | 自托管技能库，可选 Jev 集成 |

## 我想做浏览器 / 手机 / 电脑自动化

| 项目 | ★ | 说明 |
|---|---|---|
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 16,746 | browser-use 官方：Jev 驱动浏览器 Agent（动态索引动作空间） |
| [wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use) | 340 | Jev 操作控件、Codex 输入和验证；作者的 5–10× 来自特定浏览器工作流 |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | 334 | 移动端自动化 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 233 | Jev 浏览器操作 |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 644 | 本地快速 computer use |
| 小红书旧记录（待核验） | — | CUA + Jev 线索；本轮正文不可读取，旧署名与成本说法未复核，见 [核验记录](SOURCES.md#xiaohongshu-checks) |

## 我想搭 Jev-like 开源模型 / 本地复刻

| 项目 | ★ | 说明 |
|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 12,413 | 独立开放决策模型；多语言路由与权重公开，跨模型比较需核对条件 |
| [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | 3,421 | 开源模型语义 if，单卡 3090 可跑（独立项目） |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 1,886 | 纳米复刻：并行决策 + 动态候选 + 端到端训练 |
| [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | 1,181 | 单次前向评分的独立研究模型；作者明确未复现 Jev 私有训练方法 |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1,535 | 开放数据 + 开放模型 + 开放配方（对比式数据策展） |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 2,757 | 当前为 Qwen3.5 的 0.8B / 4B / 9B 模型族；旧 Qwen3 系列和 0.5B 原型仍保留 |
| [featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev) | 462 | 任意开源模型 → classifier/jev 端点 |
| [ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang) | 259 | Jev 兼容 API（prefill-only, sglang） |

## 我想做评测、工具审查或论文辅助

| 项目 | ★ | 说明 |
|---|---|---|
| [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 63 | 天气 Agent 轨迹评判；5 个案例重复 100 次，不能当作 500 个独立样本 |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 71 | 决策模型综合评测；需要区分原始测量、延迟修正和综合评分 |
| [instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench) | — | 同输入比较 Jev、Laya、Router 与 Qwen；已读原始结果，README 的 states / decisions 口径有差异 |
| [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 2 | 中文客服小样本、置信度与级联实验；附原始输出和撤回结论 |
| [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 2 | MCP 代理和工具 hooks 审查；默认 shadow，仅记录，不能替代沙箱 |
| [JacobLinCool/jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | 0 | 评价论文表达清晰度与完整性，不验证科学结论是否正确 |
| [ourines/hermes-jev](https://github.com/ourines/hermes-jev) | 1 | 为 Hermes 提供显式 Jev 决策工具，支持 TypeSafe / Cloudflare |

这些是工具或实验仓库，**不是 Jev 的学术论文**。方法和局限见 [RESEARCH.md](RESEARCH.md)。

## 我想做数据 / 数据库方向

| 项目 | ★ | 说明 |
|---|---|---|
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 291 | PostgreSQL 扩展：自然语言查表 |
| [colliber/duckdb-jev](https://github.com/colliber/duckdb-jev) | 20 | DuckDB：typed Jev 答案即 SQL 类型 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 4 | MySQL：按语义过滤行 |
| [kylemclaren/jevql](https://github.com/kylemclaren/jevql) | 12 | 原生 PostgreSQL 的类 psql 客户端，无需扩展：SQL 在服务端执行，Jev 判断返回的行 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 390 | Jev 驱动的网络搜索（信源选择 + 相关性排序） |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 358 | 作者报告在其 261 份 IRS 表格集合上的分类结果；不是跨领域准确率 |
| [kylemclaren/jevpdf](https://github.com/kylemclaren/jevpdf) | 1 | 浏览器内按语义搜索 PDF：pdf.js 在本地提取文本行，Jev 对每行回答一次是/否，匹配的行逐页高亮并按概率排序 |

## 我想探索编译器和新的集成方向

| 项目 | ★ | 说明 |
|---|---|---|
| [Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt) | 2 | C/C++ 编译驱动；Jev 选择内联策略，LLVM 负责合法变换；附 Embench 运行记录 |
| [jevframe](https://pypi.org/project/jevframe/) | — | Pandas / Polars 逐行语义判断，返回概率；支持并发控制与缓存 |
| [MinusPodJev](https://github.com/ttlequals0/MinusPodJev) | — | 对播客转录片段做广告识别的 FastAPI 代理；含 14 期语料的离线评测；[作者 @TTLequals0，09-20](https://x.com/TTLequals0/status/2101776961282408786) |

## 我想玩游戏 / 做实时 Agent

| 项目 | ★ | 说明 |
|---|---|---|
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,967 | 交易平台的下单前语义判断；未配置提供商时可放行，不能据此推断风险控制效果 |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 1,910 | Monad 链上每区块一次交易决策 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 340 | Jev 玩超级马里奥 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 362 | 实验合集 |
| [jev-pong（在线）](https://jev-pong.ably.dev/) · [HN](https://news.ycombinator.com/item?id=49754516) | – | Jev vs GPT-5.6 / Claude Haiku 打乒乓 |
| [trolley 问题（在线）](https://gpu.studio/trolley) | – | “Jev 会拉拉杆吗？” |
| [SpriteFusion 实时关卡生成](https://www.spritefusion.com/blog/generating-game-level-in-real-time-with-jev) | – | 实时生成游戏关卡 |
| [AI Will @FinanceYF5：游戏演示（09-20）](https://x.com/financeyf5/status/2101502474691698971) | — | 多局游戏的中文分享；成本为帖子报告，未独立复现 |

## 我想看横向评测与冷静分析

优先阅读 [2026-09-22 论文与评测说明](RESEARCH.md)：新增 LangChain judge、Archestra 工具调用、JevBench 和中文客服实验；下面也保留早期解读入口，不据其标题推断结论。

| 资源 | 结论倾向 |
|---|---|
| [Jev vs. classical ML](https://quicqdev.github.io/Jev-vs-ML/) | 早期实验入口；本轮未成功读取页面，不引用其数值结论 |
| [Jev vs. XGBoost and BERT](https://explainx.ai/blog/jev-vs-xgboost-bert-classifiers-2026) | 定性讨论；文章说明并未完成三者同条件基准 |
| [Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | 结构化输出被重新点燃 |
| [Most People on the Internet Miss What Jev Is About](https://medium.com/@gemanor/most-people-on-the-internet-miss-what-jev-is-about-ad0a983537d5) | 大众误解纠正 |
| [You could have built Jev](https://sgnt.ai/p/jev/) | 单 token 概率读取的实现思路；关于 Jev 内部机制的说法属于作者推测 |
| [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked/) | 社区架构推测，不能当作官方披露 |
| [TypeSafe's Jev Can't See](https://mikulskibartosz.name/typesafe-jev-guess-what-i-drew) | 能力边界实测 |
| [Testing Jev as a validation gate for drug-discovery agents](https://frederickparsons.substack.com/p/can-a-fast-ai-gate-catch-chemistry) | 高门槛领域实测 |
| [Reddit：一年前就做过同架构（争议帖）](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/) | 先发权争议 |

## 同类 Awesome 列表

| 仓库 | ★ |
|---|---|
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 776 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 1,092 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 630 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 432 |
| [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) | 318 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 187 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 339 |

---

## 收录标准

1. 与 Jev / System One 直接相关（模型、SDK、复刻、集成、评测、深度解读）
2. 正式条目应有可访问来源；X / 小红书附作者与日期，受限线索明确标记待核验
3. 热度数据注明快照日期（本文件：2026-09-22）

欢迎 PR 补充，尤其是小红书、即刻、B站等中文平台内容！
