# Jev 生态项目目录（Community Catalog）

> 这是 [README](../README.md) GitHub 章节的扩展版：按“你想用 Jev 干什么”组织。星数为 2026-09-20 快照。
> 相关指南：上手安装见 [INSTALLATION.md](INSTALLATION.md)。

## 我想先理解 Jev 是什么

| 资源 | 适合 |
|---|---|
| [官宣博客（Diogo Almeida 亲笔）](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 第一手动机、架构、RLCD、定价与官方免责声明 |
| [System One 概念文档](https://docs.typesafe.ai/concepts/system-one) | “决策模型”与聊天模型的本质区别 |
| [State 概念文档](https://docs.typesafe.ai/concepts/state) | 如何把上下文组织成 Jev 能吃的结构化状态 |
| [Confidence 文档](https://docs.typesafe.ai/confidence) | confidence 与 probability 的区别、怎么用 |
| [@CompleteSkeptic 官宣推文（7.3 万赞）](https://x.com/CompleteSkeptic/status/2099925682726002904) | 90 秒读懂创始人的叙事 |
| [《Jev 模型从 0 到 1 小白教程》（中文）](https://x.com/i/article/2101132195796791296) | 中文世界最系统的入门长文 |
| [whatisjev.com（含中文版）](https://whatisjev.com/zh/getting-started) | 社区维护的知识站 |

## 我想跑通第一个调用

- [Playground](https://console.typesafe.ai/playground)（零代码）→ [API Key](https://console.typesafe.ai/keys) → [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python)
- 没拿到 Key？用 [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python)（184★）拿任意 LLM 顶替
- 完整步骤：[INSTALLATION.md](INSTALLATION.md)

## 我想给 Agent / 编程助手接上 Jev

| 项目 | ★ | 说明 |
|---|---|---|
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 899 | 官方 Agent Skill（Claude Code 插件 / npx skills 双通道） |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 4,627 | Claude Code 插件：Jev 决策替代上下文压缩摘要 |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 232 | Claude Code 里按任务路由到最便宜模型 |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 385 | 分阶段代码评审 + 本地 Dashboard |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 177 | 本地优先持续质量评审 MCP 插件 |
| [Alurith/jeff](https://github.com/Alurith/jeff) | – | 只读 CLI 语义代码评审 |
| [zdenham/jev-lint](https://github.com/zdenham/jev-lint) | – | 自然语言规则的语义 linter |
| [thruwire/foreman](https://github.com/thruwire/foreman) | 416 | 软件工厂“工头” |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 677 | 省 token 的轻量 coding agent |
| [reticlehq/reticle](https://github.com/reticlehq/reticle) | 753 | Agent 产出代码的验证层 |
| [kitze/skillbox](https://github.com/kitze/skillbox) | 207 | 自托管技能库，可选 Jev 集成 |

## 我想做浏览器 / 手机 / 电脑自动化

| 项目 | ★ | 说明 |
|---|---|---|
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 10,422 | browser-use 官方：Jev 驱动浏览器 Agent（动态索引动作空间） |
| [wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use) | 224 | Jev 点击 + Codex 思考验证，快 5–10× |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | 256 | 移动端自动化 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 167 | Jev 浏览器操作 |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 610 | 本地快速 computer use |
| 小红书 @北京月薪5k 的视频笔记 | – | CUA + Jev 驱动电脑控制，“比 codex 的 computer use 便宜”（[笔记链接](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c)，需 App 内查看） |

## 我想搭 Jev-like 开源模型 / 本地复刻

| 项目 | ★ | 说明 |
|---|---|---|
| [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | 2,178 | 开源模型语义 if，单卡 3090 可跑（独立项目） |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 1,220 | 纳米复刻：并行决策 + 动态候选 + 端到端训练 |
| [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | 1,032 | 24 小时内出炉的逆向工程版 |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 809 | 开放数据 + 开放模型 + 开放配方（对比式数据策展） |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 729 | Qwen2.5-0.5B 迷你版，MacBook 可训 |
| [featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev) | 343 | 任意开源模型 → classifier/jev 端点 |
| [ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang) | 207 | Jev 兼容 API（prefill-only, sglang） |

## 我想做数据 / 数据库方向

| 项目 | ★ | 说明 |
|---|---|---|
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 232 | PostgreSQL 扩展：自然语言查表 |
| [colliber/duckdb-jev](https://github.com/colliber/duckdb-jev) | – | DuckDB：typed Jev 答案即 SQL 类型 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | – | MySQL：按语义过滤行 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 267 | Jev 驱动的网络搜索（信源选择 + 相关性排序） |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 288 | 261 份 IRS 表格 100% 严格准确 |

## 我想玩游戏 / 做实时 Agent

| 项目 | ★ | 说明 |
|---|---|---|
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,791 | AI 交易 OS（Jev System One 集成） |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 1,419 | Monad 链上每区块一次交易决策 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 293 | Jev 玩超级马里奥 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 322 | 实验合集 |
| [jev-pong（在线）](https://jev-pong.ably.dev/) · [HN](https://news.ycombinator.com/item?id=49754516) | – | Jev vs GPT-5.6 / Claude Haiku 打乒乓 |
| [trolley 问题（在线）](https://gpu.studio/trolley) | – | “Jev 会拉拉杆吗？” |
| [SpriteFusion 实时关卡生成](https://www.spritefusion.com/blog/generating-game-level-in-real-time-with-jev) | – | 实时生成游戏关卡 |
| [地铁跑酷 50 开（推文视频）](https://x.com/financeyf5/status/2101502474691698971) | – | 成本 < 1 美分 |

## 我想看横向评测与冷静分析

| 资源 | 结论倾向 |
|---|---|
| [Jev vs. classical ML](https://quicqdev.github.io/Jev-vs-ML/) | 情感分类强，跨任务表现不一 |
| [Jev vs. XGBoost and BERT](https://explainx.ai/blog/jev-vs-xgboost-bert-classifiers-2026) | 与传统分类器对比 |
| [Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | 结构化输出被重新点燃 |
| [Most People on the Internet Miss What Jev Is About](https://medium.com/@gemanor/most-people-on-the-internet-miss-what-jev-is-about-ad0a983537d5) | 大众误解纠正 |
| [You could have built Jev](https://sgnt.ai/p/jev/) | “你本来也能造出来” |
| [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked/) | 架构逆向分析 |
| [TypeSafe's Jev Can't See](https://mikulskibartosz.name/typesafe-jev-guess-what-i-drew) | 能力边界实测 |
| [Testing Jev as a validation gate for drug-discovery agents](https://frederickparsons.substack.com/p/can-a-fast-ai-gate-catch-chemistry) | 高门槛领域实测 |
| [Reddit：一年前就做过同架构（争议帖）](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/) | 先发权争议 |

## 同类 Awesome 列表

| 仓库 | ★ |
|---|---|
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 663 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 488 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 440 |
| [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | 371 |
| [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) | 240 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 173 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 173 |

---

## 收录标准

1. 与 Jev / System One 直接相关（模型、SDK、复刻、集成、评测、深度解读）
2. 链接可访问；X / 小红书条目附作者与日期
3. 热度数据注明快照日期（本文件：2026-09-20）

欢迎 PR 补充，尤其是小红书、即刻、B站等中文平台内容！
