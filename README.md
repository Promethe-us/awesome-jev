<div align="center">

<img src="cover.png" alt="awesome-jev" width="600"/>

# awesome-jev

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Updated](https://img.shields.io/badge/Updated-2026--09--20-38bdf8)]()
[![Era](https://img.shields.io/badge/Era-System_One-8b5cf6)]()

**精选 Jev（TypeSafe AI「System One」决策模型）一周内全部资源**
**A curated list of everything Jev — the System One decision model from TypeSafe AI — from launch week.**

*推文 · 小红书 · GitHub · Hacker News · 论文 · 深度报道*

</div>

> ⚠️ **免责声明**：本仓库为社区整理，与 TypeSafe AI 官方无关。信息快照截至 **2026-09-20**（Jev 发布仅 5 天，一切变化很快，以[官方博客](https://typesafe.ai/blog/introducing-system-one-models-and-jev)与[文档](https://docs.typesafe.ai)为准）。
> 💣 **警惕仿冒**：官方 **没有** 发行任何加密代币。任何以 "$JEV"、"Jev 币" 为名的代币均与 TypeSafe AI 无关，谨防受骗。

---

## 📑 目录

- [30 秒了解 Jev](#-30-秒了解-jev)
- [名字的由来](#-名字的由来jevons--system-one)
- [一周时间线](#-一周时间线2026-09-13--09-20)
- [官方资源](#-官方资源-official-resources)
- [X（Twitter）精选](#-xtwitter-精选)
- [小红书精选](#-小红书精选-xiaohongshu)
- [GitHub 生态](#-github-生态-本周大爆发)
- [Hacker News & Reddit 热议](#-hacker-news--reddit-热议)
- [论文与技术解读](#-论文与技术解读-papers--technical-reading)
- [新闻与深度文章](#-新闻与深度文章-press--articles)
- [争议与冷思考](#-争议与冷思考-critiques--open-questions)
- [FAQ](#-faq)
- [贡献](#-贡献-contributing)

---

## 🔥 30 秒了解 Jev

> **一句话**：Jev 是 TypeSafe AI 发布的全球首个 **"System One 模型"** —— 它**不会说话**：不能聊天、不能写文档、不能写代码。它只做一件事：**接收结构化状态，输出带校准概率的类型化决策**（Choice / Score / Noul），让程序代码直接使用。官方称之为 *"frontier-intelligence function call"*。

| | |
|---|---|
| 🏢 **公司** | TypeSafe AI（旧金山， stealth 2 年，2026-09-15 出关） |
| 👤 **创始人** | [Diogo Almeida](https://x.com/CompleteSkeptic)（前 OpenAI，ChatGPT / RLHF 共同创造者之一），联创 Erik Gafni、Sasha Sheng |
| 💰 **融资** | **4,000 万美元种子轮**，DCVC 领投，估值约 2 亿美元（进入 AI 种子轮历史前 1%，[BusinessWire](https://www.businesswire.com)/Forbes/Dealroom） |
| 🧠 **架构** | 非自回归（non-autoregressive）：并行采样器一次查询出全部结果，而非逐 token 生成 |
| 🏋️ **训练** | **RLCD**（Reinforcement Learning for Calibrated Decisions）——为"认识论上诚实的概率"优化，区别于 RLHF / RLVR |
| ⚡ **官方数据** | 快 **193.6×**、便宜 **444.6×**（对比 GPT-6 Astra / Fable 5.1 均值）；端到端延迟 70ms–500ms（LLM 为 3–329 秒） |
| 💸 **定价** | 输入 **$0.042 / 百万 tokens**（$42/十亿），输出 **免费**（"too cheap to meter"）；对比主流 LLM 输入 $0.2–$10/M |
| 🎯 **基准** | 官方 4 工作流评测 67.8% 准确率；选项基数上限 255（更高走两阶段打分） |
| 🚫 **不能做** | 不生成文本、不读图片（只吃结构化文本状态）、不会聊天 |
| 🌊 **生态热度** | 发布一周：官宣推文 **7.3 万赞**、HN 主帖 **1920 分 / 504 评论**、GitHub 本周新建相关仓库 **3,200+**、Vercel 称其为 *"AI Gateway 历史上采用最快的模型"* |

---

## 🏷️ 名字的由来（Jevons × System One）

- **Jev** 取自 **威廉·斯坦利·杰文斯（William Stanley Jevons）**：效率提升不会减少资源消耗，反而让总消耗暴增（**杰文斯悖论**）。TypeSafe 的赌注正是如此——当"决策"便宜 400 倍，智能的总消耗量将爆炸式增长。
- **System One** 取自卡尼曼《思考，快与慢》：**System 1** = 快速、直觉、并行（Jev 干的活）；**System 2** = 缓慢、推理、串行（LLM 干的活）。官方定位：**不取代 Astra / Fable 这类大模型，而是给它们配一个高速执行层**。

---

## 🗓️ 一周时间线（2026-09-13 → 09-20）

| 日期 | 事件 |
|---|---|
| **09-15 一** | 🚀 官宣：[博客发布](https://typesafe.ai/blog/introducing-system-one-models-and-jev) + Early Access 开放；[Diogo 官宣推文](https://x.com/CompleteSkeptic/status/2099925682726002904)狂揽 **73k 赞**；[HN 主帖](https://news.ycombinator.com/item?id=49717558)冲上 **1920 分**；$40M 种子轮新闻（DCVC 领投） |
| **09-16 二** | 🚗 [jpschroeder 用 Jev 一小时"复刻"特斯拉 FSD](https://x.com/jpschroeder/status/2100347770867458384)（4.7k 赞）；社区连夜逆向：[vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike)（HN 166 分） |
| **09-17 三** | 🤖 [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) 发布（现 10.4k★）；宝可梦对决 [Jev vs Opus 5](https://x.com/sid19arya0/status/2100458351440048258)；[中文圈开始发酵](https://x.com/nft_chen/status/2100466502545862725) |
| **09-18 四** | 🧠 [MuJoCo 机械臂实测](https://x.com/dimentary/status/2101018760371171420)、[森叔上手教程](https://x.com/harrisonitsme/status/2100799749192569167)（2.5k 赞）、[Bespoke Nimble 开放复刻](https://x.com/madiator/status/2100990591215783946)；TechCrunch / DataCamp / MindStudio 等媒体集中报道；HN 迎来 Jev 项目刷屏日 |
| **09-19 五** | 🇨🇳 [黄小木长文《Jev 模型从 0 到 1 小白教程》](https://x.com/ai_xiaomu/status/2101135680168771979)（848 赞）；[500 工单实测 vs DeepSeek V4.1 Flash](https://x.com/nft_chen/status/2101253568774697099)；Reddit 出现"一年前我就做过这个架构"争议帖 |
| **09-20 六** | 🏃 [《地铁跑酷》50 开同时运行，成本不到 1 美分](https://x.com/financeyf5/status/2101502474691698971)、[40 秒拆解 724 条广告](https://x.com/financeyf5/status/2101585391140905034)；[Vercel：AI Gateway 史上采用最快模型](https://vercel.com/blog/ai-gateway-jev-model-launch)；小红书首波教程笔记出现（[示例](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c)）；本仓库建立 🎉 |

---

## 🏢 官方资源（Official Resources）

| 资源 | 链接 | 说明 |
|---|---|---|
| 📝 官宣博客 | [typesafe.ai/blog/introducing-system-one-models-and-jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 一切的起点，Diogo Almeida 亲笔（2026-09-15） |
| 📚 文档 | [docs.typesafe.ai](https://docs.typesafe.ai) | 概念 / API / 模式 / 示例（支持 [llms.txt](https://docs.typesafe.ai/llms.txt)） |
| 🎮 Playground | [console.typesafe.ai/playground](https://console.typesafe.ai/playground) | 免代码直接试 |
| 🔑 API Key | [console.typesafe.ai/keys](https://console.typesafe.ai/keys) | Dashboard 申请 |
| 📊 Evals | [evals.typesafe.ai](https://evals.typesafe.ai) | 官方工作流评测 |
| 💬 Discord | [discord.gg/typesafe](https://discord.gg/typesafe) | 官方社区 |
| 🐦 官方 X | [@typesafeai](https://x.com/typesafeai) | 官方账号 |
| 🧩 Agent Skill | [typesafe-ai/skills](https://github.com/typesafe-ai/skills)（899★） | 给 Claude Code / Codex / Cursor 等装上 Jev 技能 |
| 🐍 Python SDK | [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | `pip install typesafe-sdk` |
| 🔌 LLM 适配器 | [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python)（184★） | 用任意 LLM API 模拟 System One 接口（官方评测基线） |

**三种"问题原语"（Question Primitives）** —— Jev API 的全部输出形态：

| 原语 | 返回 | 例子 |
|---|---|---|
| **Choice** | 选中项 + 每个选项概率 + confidence | "这条工单该给哪个团队？" → `technical (0.85)` |
| **Score** | 等级分 + 每档概率 + confidence | "用户有多沮丧？" → `1 "Frustrated but civil" (1.0)` |
| **Noul** | yes 的概率 | "这条消息表达紧急性吗？" → `1.0` |

**快速体验（官方 cURL）**：

```bash
curl -X POST https://api.typesafe.ai/v1/systemone \
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "state": "Hi, my Stripe integration keeps failing. Losing sales. ASAP!",
    "model": "jev-latest",
    "questions": {
      "department": { "type": "choice", "instructions": "Which team should handle this",
        "criteria": { "billing": "Payment issues", "technical": "Bugs", "sales": "Pricing" } },
      "is_urgent": { "type": "noul", "instructions": "Does this express urgency?" }
    }
  }'
```

> 🛠️ 完整上手指南（waitlist → API Key → SDK → Agent Skill 安装）见 **[docs/INSTALLATION.md](docs/INSTALLATION.md)**

---

## 🐦 X（Twitter）精选

> 全部链接已验证可访问，按时间排序；🌟 = 本周最热。

### 官方与创始人

| 日期 | 作者 | 内容 | 热度 | 链接 |
|---|---|---|---|---|
| 09-15 | **Diogo Almeida** [@CompleteSkeptic](https://x.com/CompleteSkeptic) | 🌟 **官宣推文**："共同发明 ChatGPT 之后，我一直在想：为什么超人类聊天模型没有带来 AGI？我在 stealth 待了 2 年，造了新的训练方法（RLCD）和一种全新的前沿模型：Jev。20-200× 更快，40-400× 更便宜……" | **73,115** 赞 | [原文](https://x.com/CompleteSkeptic/status/2099925682726002904) |
| 09-18 | **Mahesh Sathiamoorthy** [@madiator](https://x.com/madiator) | **Bespoke Nimble**：开放数据、开放模型、开放配方的"开源 Jev"（对比式数据策展 + 负样本生成），[代码](https://github.com/bespokelabsai/nimble)与模型全开源 | 1,281 赞 | [原文](https://x.com/madiator/status/2100990591215783946) |

### 疯狂实测（社区 Demo）

| 日期 | 作者 | 内容 | 热度 | 链接 |
|---|---|---|---|---|
| 09-16 | **Justin Schroeder** [@jpschroeder](https://x.com/jpschroeder) | 🌟 "不到 1 小时，我用 Jev 重建了特斯拉 FSD。这模型是彻底的解锁（total unlock）。" 左转变道过路口上高速，每步带置信度 | **4,734** 赞 | [原文](https://x.com/jpschroeder/status/2100347770867458384) |
| 09-17 | **Siddharth Arya** [@sid19arya0](https://x.com/sid19arya0) | Jev vs Opus 5 打宝可梦对战（Showdown）：Jev 赢了。Jev $0.0029 / 37 秒；Opus 5 $2.35 / 6 分 29 秒 —— **便宜 820×，快 10×** | 4 赞 | [原文](https://x.com/sid19arya0/status/2100458351440048258) |
| 09-18 | **Dmytro Hrybov** [@dimentary](https://x.com/dimentary) | 把 Jev 当**实时机器人策略**跑 MuJoCo：拆成两次调用（决定做什么 → 决定手臂/夹爪怎么动）。注意 Jev 不收图片，喂的是简化几何与接触的文本 | 583 赞 | [原文](https://x.com/dimentary/status/2101018760371171420) |
| 09-20 | **Kris Cvetko** [@kris_cvetko](https://x.com/kris_cvetko) | "Jev 是我们等了很久的通用分类器吗？不用先收集海量数据集再训练，就能分类 —— 这才是能在宇宙尺度上撬动东西的东西" | 2 赞 | [原文](https://x.com/kris_cvetko/status/2101614168763695308) |

### 中文 KOL 精华 🇨🇳

| 日期 | 作者 | 内容 | 热度 | 链接 |
|---|---|---|---|---|
| 09-17 | **SuSu_酥酥** [@NFT_Chen](https://x.com/NFT_Chen) | "震惊：Jev 模型一小时复刻特斯拉 FSD？这个不会幻觉的新模型，正在把自动驾驶门槛砸穿！"（解读 jpschroeder 视频） | 348 赞 | [原文](https://x.com/nft_chen/status/2100466502545862725) |
| 09-18 | **森叔** [@harrisonitsme](https://x.com/harrisonitsme) | 🌟 **最火中文上手教程**："1、官网申请 waitlist（基本当天过）；2、告诉你的 Codex：`npx skills add typesafe-ai/skills --skill typesafe-ai`；3、操作台建 API Key；4、prompt 里说 'use the TypeSafe skill'" | **2,522** 赞 | [原文](https://x.com/harrisonitsme/status/2100799749192569167) |
| 09-19 | **黄小木** [@ai_xiaomu](https://x.com/ai_xiaomu) | "客服 & 内容审核 & 招聘等 agent 都会因为 jev 模型迎来重构，这是新的机会。" 附长文 [《Jev 模型从 0 到 1 小白教程》](https://x.com/i/article/2101132195796791296)（融资 4000 万美元、排队申请试用……） | 848 赞 / 77 评 | [原文](https://x.com/ai_xiaomu/status/2101135680168771979) |
| 09-19 | **SuSu_酥酥** [@NFT_Chen](https://x.com/NFT_Chen) | **500 条真实电商客服工单同题对比**：Jev 83 秒清完花 $0.01；DeepSeek V4.1 Flash 只做完 173 条花 $0.06。"差距不在谁更聪明，在设计架构" | 164 赞 | [原文](https://x.com/nft_chen/status/2101253568774697099) |
| 09-20 | **AI Will** [@FinanceYF5](https://x.com/financeyf5) | "Jev 同时运行 50 局《地铁跑酷》，操作速度超过人类，整次运行成本不到 1 美分。大模型负责理解、推理和决策，Jev 负责高速执行" | 29 赞 | [原文](https://x.com/financeyf5/status/2101502474691698971) |
| 09-20 | **AI Will** [@FinanceYF5](https://x.com/financeyf5) | "只用 40 秒，拆解 37 个品牌正在投放的 724 条广告：钩子、形式、Offer、CTA、用户认知阶段、落地页不匹配问题全分析出来。Token 成本仅 $0.09" | 41 赞 | [原文](https://x.com/financeyf5/status/2101585391140905034) |

---

## 📕 小红书精选（Xiaohongshu）

> 📌 小红书内容需 App 内登录查看，且站点对搜索引擎屏蔽（robots noindex），无法被外部索引 —— **本节持续收录中，欢迎 PR 补充你的笔记链接！**
> 🔍 站内搜索入口：[App 内搜索「jev」/「jev 模型」](https://www.xiaohongshu.com/search_result?keyword=jev)

| 日期 | 作者 | 内容 | 链接 |
|---|---|---|---|
| 09-20 | **@北京月薪5k** | 《成了，用 cua 和 jev 实现电脑控制》🎬 视频笔记：CUA + Jev 驱动电脑操作，"**比 codex 的 computer use 便宜**"；作者补充"都是开源的哈，就 jev 收费也便宜"。标签：#jev #ai #自动化 #computeruse | [笔记原文](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c) · [原始分享链接](https://www.xiaohongshu.com/discovery/item/6aaf844a000000001103379c?xsec_source=app_share&type=video&xsec_token=CBam65Y4lHHmK8Rj7yutESPK5lLLlTT32tLapBBE4iJyY=&author_share=1) |

---

## 💻 GitHub 生态（本周大爆发）

> 📈 发布仅 5 天：GitHub 上名字带 `jev` 的**本周新建仓库 3,247 个**，打上 `topic:jev` 的仓库 **596 个**（2026-09-20 快照）。星数为当日数据，持续变动。

### 🏛️ 官方仓库

| 仓库 | ★ | 说明 |
|---|---|---|
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 899 | Agent Skill：`npx skills add typesafe-ai/skills --skill typesafe-ai` |
| [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) | 184 | 用 LLM API 模拟 System One 接口的 drop-in 适配器 |
| [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | – | 官方 Python SDK（`pip install typesafe-sdk`） |

### 🔓 开源复刻 / Jev-like 模型

| 仓库 | ★ | 说明 |
|---|---|---|
| [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | 2,178 | 开源模型的语义 if，单卡 3090 家用可跑（独立项目，与 Jev 无关联） |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 1,220 | Jev 纳米复刻：并行决策 + 动态候选 + 端到端训练流水线 |
| [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | 1,032 | 发布 24 小时内出现的"逆向工程 Jev-like 模型"（[HN 166 分](https://news.ycombinator.com/item?id=49731282)） |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 809 | Bespoke Labs 开源版：本地 typed decisions + **对比式数据策展** + 评测（[官宣推文](https://x.com/madiator/status/2100990591215783946)） |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 729 | 基于 Qwen2.5-0.5B 的迷你 Jev-like 模型，MacBook 可训练可跑 |
| [featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev) | 343 | 把任意开源模型变成 classifier / jev 端点 |
| [ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang) | 207 | 基于开源模型的 Jev 兼容 API（prefill-only） |

### 🌐 浏览器 / Agent / 计算机操作

| 仓库 | ★ | 说明 |
|---|---|---|
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | **10,422** | 🌟 "i. am. speed." —— browser-use 官方出品：Jev 驱动的浏览器 Agent，动态索引动作空间（[HN 90 分](https://news.ycombinator.com/item?id=49735979)） |
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 11,791 | 开源 AI 交易 OS，新增 Jev System One 集成 |
| [wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use) | 224 | "Jev 负责点，Codex 负责想和验证"，浏览器操作快 5–10× |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | 256 | 移动端 Jev 自动化 |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 167 | 用 Jev 做浏览器操作 |

### 🧰 开发者工具

| 仓库 | ★ | 说明 |
|---|---|---|
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 4,627 | 🌟 Claude Code 插件：用 Jev 决策替代上下文压缩摘要 |
| [reticlehq/reticle](https://github.com/reticlehq/reticle) | 753 | Agent 会写代码但不理解建了什么 —— Jev 风格的验证层 |
| [thruwire/foreman](https://github.com/thruwire/foreman) | 416 | 基于 Jev 的"软件工厂工头" |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 385 | 分阶段代码评审工作流 + 本地 Dashboard |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 232 | 在 Claude Code 里按任务路由到最便宜的模型 |
| [sutro-sh/jev-align](https://github.com/sutro-sh/jev-align) | 197 | 用人类反馈 + GEPA 校准出你自己的 Jev 分类器 |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 177 | 本地优先的持续质量评审 MCP 插件 |
| [kitze/skillbox](https://github.com/kitze/skillbox) | 207 | 自托管 Agent 技能库，可选 Jev 集成 |
| [zdenham/jev-lint](https://github.com/zdenham/jev-lint) | – | "语义 linter"：用自然语言规则 lint 代码（Show HN） |

### 🗄️ 数据库 & 数据集成

| 仓库 | ★ | 说明 |
|---|---|---|
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 232 | PostgreSQL 扩展：用自然语言问你的表 |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | – | MySQL 插件：按"语义"过滤行 |
| [colliber/duckdb-jev](https://github.com/colliber/duckdb-jev) | – | DuckDB 扩展：typed Jev 答案变成真正的 SQL 类型 |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 267 | 用 Jev 搜索网络：信源选择、查询理解、相关性排序 |

### 🎮 应用 & 玩具

| 仓库 | ★ | 说明 |
|---|---|---|
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 1,419 | Monad 链上每个区块一次 AI 交易决策（Kuru DEX，MON-USDC） |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 677 | 轻量 coding agent，用远更少的 token 干更多的活 |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 322 | Jev 实验合集 |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 293 | Jev 玩《超级马里奥》：结构化模拟器状态驱动 |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 288 | 税务文件页分类器：261 份 IRS 表格 100% 严格准确 |
| [Alurith/jeff](https://github.com/Alurith/jeff) | – | 只读 CLI：用 Jev 做语义代码评审 |

### 📚 其他 Awesome 列表（同类收录，欢迎互链）

| 仓库 | ★ | 说明 |
|---|---|---|
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 663 | 证据背书的用例 / 模式 / prompts / 起步代码 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 488 | 公开项目 / 集成 / 讨论精选 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 440 | 工具向收录 |
| [AbdelStark/awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) | 371 | 官方资源 + 社区项目 |
| [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) | 240 | 溯源式项目列表 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 173 | 项目目录 + GitHub 评审工作流 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 173 | 开源生态雷达 |

> 🛠️ 更多项目明细与分类导航见 **[docs/CATALOG.md](docs/CATALOG.md)**

---

## 🟠 Hacker News & Reddit 热议

| 日期 | 标题 | 热度 | 链接 |
|---|---|---|---|
| 09-15 | **Introducing System One Models and Jev**（官方博客） | **1920 分 / 504 评论** | [HN 讨论](https://news.ycombinator.com/item?id=49717558) |
| 09-16 | Reverse-engineered Jev-like model（jevlike） | 166 分 / 24 评 | [HN](https://news.ycombinator.com/item?id=49731282) · [GitHub](https://github.com/vinnylarouge/jevlike) |
| 09-17 | Jev Ultrafast: A browser agent with a dynamic, indexed action space | 90 分 / 14 评 | [HN](https://news.ycombinator.com/item?id=49735979) · [GitHub](https://github.com/browser-use/jev-ultrafast) |
| 09-17 | Open-sourced jev architecture last year with model, paper and dataset | 82 分 / 13 评 | [HN](https://news.ycombinator.com/item?id=49736660) |
| 09-18 | Jev: The Model That Gives AI the Properties of Code（Diogo 推文转载） | 18 分 | [HN](https://news.ycombinator.com/item?id=49716682) · [原推](https://x.com/CompleteSkeptic/status/2099925682726002904) |
| 09-18 | Show HN: Jev vs. GPT-5.6 and Claude Haiku at Pong | 10 分 | [HN](https://news.ycombinator.com/item?id=49754516) · [在线玩](https://jev-pong.ably.dev/) |
| 09-18 | Jev means structured output is interesting again（Sean Goedecke） | 15 分 | [HN](https://news.ycombinator.com/item?id=49748997) · [博客](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) |
| 09-19 | Open Source JEV architecture built 1 year ago（⚠️ 先发权争议） | 4 分 | [HN](https://news.ycombinator.com/item?id=49764070) · [Reddit 原帖](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/) |
| 09-19 | Kev – A Jev-Compatible API on top of DiffusionGemma（Workers AI） | 4 分 | [HN](https://news.ycombinator.com/item?id=49762547) |
| 09-20 | Generating levels in real time with the Jev model | 5 分 | [HN](https://news.ycombinator.com/item?id=49771494) · [博客](https://www.spritefusion.com/blog/generating-game-level-in-real-time-with-jev) |
| 09-20 | Jev is the fastest-adopted model in AI Gateway history（Vercel） | 2 分 | [HN](https://news.ycombinator.com/item?id=49774164) · [博客](https://vercel.com/blog/ai-gateway-jev-model-launch) |
| 09-20 | DuckDB extension: typed Jev answers as real SQL types | 3 分 | [HN](https://news.ycombinator.com/item?id=49774406) · [GitHub](https://github.com/colliber/duckdb-jev) |
| 09-20 | Show HN: Will Jev pull the lever in the trolley problem? | 5 分 | [HN](https://news.ycombinator.com/item?id=49773756) · [在线玩](https://gpu.studio/trolley) |

---

## 📄 论文与技术解读（Papers & Technical Reading）

> ⚠️ **截至 2026-09-20，TypeSafe 尚未发表任何官方论文**——官方博客与文档是目前唯一权威技术来源。以下是相关的公开技术阅读：

| 类型 | 资源 | 说明 |
|---|---|---|
| 官方 | [System One 概念](https://docs.typesafe.ai/concepts/system-one) · [AI Primer](https://docs.typesafe.ai/introduction/machine-learning-primer) · [Confidence](https://docs.typesafe.ai/confidence) | 理解 RLCD 与"校准概率"的第一手材料 |
| ⚠️ 撞名提醒 | [RLCD: Reinforcement Learning from Contrastive Distillation（arXiv:2307.12950, 2023）](https://arxiv.org/abs/2307.12950) | 与 TypeSafe 的 RLCD（Reinforcement Learning **for Calibrated Decisions**）**只是缩写相同**，方法完全不同，引用时别搞混 |
| 架构脉络 | [LLaDA: Large Language Diffusion Models（arXiv:2502.09992）](https://arxiv.org/abs/2502.09992) · [Improved LLaDA（arXiv:2606.25331）](https://arxiv.org/abs/2606.25331) | 非自回归路线的代表作；注意 `typesafe-ai` GitHub 组织 fork 了 LLaDA 仓库，可窥其技术谱系 |
| 逆向工程 | [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) · [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked/) · [You could have built Jev](https://sgnt.ai/p/jev/) | 社区对架构的三种还原视角 |
| 开源复现 | [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 开放配方：对比式数据策展（改事实造负样本）+ 本地 typed decisions |
| 独立验证 | [Jev vs. classical ML](https://quicqdev.github.io/Jev-vs-ML/) · [Jev vs. XGBoost and BERT](https://explainx.ai/blog/jev-vs-xgboost-bert-classifiers-2026) | 第三方与经典 ML 的横向对比（结果：情感分类强，跨任务表现不一） |

---

## 📰 新闻与深度文章（Press & Articles）

### 英文

| 日期 | 标题 | 来源 |
|---|---|---|
| 09-15 | [TypeSafe AI Emerges From Stealth With $40M in Funding](https://www.businesswire.com) | BusinessWire |
| 09-18 | A new kind of AI model from a ChatGPT inventor is thrilling some researchers | [TechCrunch](https://techcrunch.com)（搜标题可达） |
| 09-18 | [Jev: TypeSafe's System One Model That Never Hallucinates](https://www.datacamp.com/blog/system-one-models-jev) | DataCamp |
| 09-18 | [Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | Sean Goedecke |
| 09-18 | [A deep dive into Jev, TypeSafe's System One model](https://flaviocopes.com/jev/) | Flavio Copes |
| 09-18 | [Most People on the Internet Miss What Jev Is About](https://medium.com/@gemanor/most-people-on-the-internet-miss-what-jev-is-about-ad0a983537d5) | Medium @gemanor |
| 09-18 | [You could have built Jev](https://sgnt.ai/p/jev/) | sgnt.ai |
| 09-18 | [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked/) | Archer Hume |
| 09-18 | [Using Jev to improve product experiences is pretty crazy](https://www.elvex.com/blog/early-experimentation-using-jev-to-rethink-harness-ux) | elvex |
| 09-18 | [What Is Jev AI? Inside TypeSafe's RLCD Model](https://www.turingpost.com) | Turing Post |
| 09-18 | [Jev AI Pricing Explained: $42 Per Billion Tokens, Free Output](https://www.mindstudio.ai) | MindStudio |
| 09-18 | TypeSafe AI's Jev: What "System One Models" Actually Are | [TrueFoundry](https://www.truefoundry.com) |
| 09-18 | ChatGPT pioneer launches Jev model for programmatic logic | [AI News](https://www.artificialintelligence-news.com) |
| 09-18 | [TypeSafe's Jev Can't See. I Made It Guess What I Drew Anyway](https://mikulskibartosz.name/typesafe-jev-guess-what-i-drew) | Bartosz Mikulski |
| 09-17 | [Jev is about to change the AI economy](https://thefinancialengineer.substack.com/p/typesafes-jev-is-about-to-change) | The Financial Engineer |
| 09-19 | [Jev is to tool use what RAG is to context](https://rajveerbachkaniwala.com/blog/2026/09/19/jev-is-to-tool-use-what-rag-is-to-context/) | Rajveer Bachkaniwala |
| 09-19 | [In 2024 I fine-tuned an LLM. Jev could have removed the side quests](https://kasra.blog/blog/classification-and-jev/) | kasra.blog |
| 09-19 | [Testing Jev as a validation gate for drug-discovery agents](https://frederickparsons.substack.com/p/can-a-fast-ai-gate-catch-chemistry) | Frederick Parsons |
| 09-19 | [Generating game levels in real time with Jev](https://www.spritefusion.com/blog/generating-game-level-in-real-time-with-jev) | SpriteFusion |
| 09-20 | [Jev is the fastest-adopted model in AI Gateway history](https://vercel.com/blog/ai-gateway-jev-model-launch) | Vercel Blog |
| – | [What is Jev?（社区知识站，含中文版）](https://whatisjev.com/zh/getting-started) | whatisjev.com |

### 中文 / 华语圈 🇨🇳🇹🇼

| 日期 | 标题 | 来源 |
|---|---|---|
| 09-17 | [TypeSafe AI 推出结构化决策模型 Jev，不具备文本生成能力](https://fr.tradingview.com) | TradingView 中文 |
| 09-17 | [語言模型沒效率？OpenAI 元老創辦 TypeSafe 以 $40M 種子輪亮相](https://www.inside.com.tw) | INSIDE 硬塞的網路趨勢觀察 |
| 09-18 | [爆紅的 Jev 模型是什麼？OpenAI 元老打造只做決策的 AI](https://www.blocktempo.com) | 動區BlockTempo |
| 09-18 | [什麼是 Jev？TypeSafe AI 的 System One 模型詳解](https://www.eigent.ai) | eigent.ai（繁中详解） |
| 09-19 | B 站测评合集：《TypeSafe 发布 Jev：为何比 LLMs 快 200 倍》《Jev + Browser Use：我用过最快的 AI 智能体》等 | [哔哩哔哩](https://search.bilibili.com/all?keyword=Jev%20%E6%A8%A1%E5%9E%8B) |
| 09-19 | [《Jev 模型从 0 到 1 小白教程》](https://x.com/i/article/2101132195796791296)（X 长文） | [@ai_xiaomu 黄小木](https://x.com/ai_xiaomu) |

---

## ⚖️ 争议与冷思考（Critiques & Open Questions）

发布仅 5 天，全网也不是只有叫好声。以下问题值得跟踪：

1. **先发权争议** ⚠️ — Reddit r/LocalLLaMA 与 HN 出现多个"我一年前就开源了同样架构（含模型、论文、数据集）"的帖子（[Reddit 原帖](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/)、[HN 82 分](https://news.ycombinator.com/item?id=49736660)）。Jev 未见论文，无法裁定。
2. **基准是自报的** — 官方 4 工作流由 TypeSafe 自家团队制作、以 GPT-6 Astra / Fable 5.1 的"平均概率"为参照（官方自己承认这"可能低估了 Jev 也低估了 DeepSeek"）；LLM 基线经 OpenRouter 路由，存在路由偏差；demo 由 West Coast 笔记本录制且"输入刻意选了对模型有利的样例"（官方原话）。
3. **"永不幻觉"是定义级的** — schema 匹配是数学保证（0% 类型错误），但"答案对不对"仍取决于模型；选项基数超 255 会走两阶段流程，明显变慢。
4. **定价可能不可持续** — "输出免费（too cheap to meter）"官方自认可能是补贴行为，长期价格模型未验证。
5. **没有官方论文** — 一切数字出自博客与文档；社区复刻（nimble / kev / jevlike）能否复现"400× 便宜"尚未有严谨对比。
6. **不接收图像/自由文本生成** — [有人故意让它"看图猜画"](https://mikulskibartosz.name/typesafe-jev-guess-what-i-drew)证明边界：Jev 只活在结构化文本状态里。
7. **仿冒代币风险** — 已出现借名 "$JEV" 的代币（如 StonkFun 上的 NVDA 配对 token），**与官方无任何关系**，请自行甄别。

---

## ❓ FAQ

<details>
<summary><b>Jev 能写代码 / 写文档 / 聊天吗？</b></summary>
不能。它不生成自由文本，只能返回 Choice / Score / Noul 三类类型化决策（含概率与置信度）。官方原话："unstructured state in, typed probabilistic decisions out"。
</details>

<details>
<summary><b>它和 LLM 是替代关系吗？</b></summary>
官方与社区的共识是<b>互补</b>：LLM 当 System 2（理解、推理、规划），Jev 当 System 1（高速执行层）。"大模型负责思考，Jev 负责出手"（[@FinanceYF5](https://x.com/financeyf5/status/2101502474691698971)）。
</details>

<details>
<summary><b>怎么获得访问权？</b></summary>
官网 <a href="https://typesafe.ai">typesafe.ai</a> 申请 waitlist（社区反馈基本当天通过）→ <a href="https://console.typesafe.ai">console.typesafe.ai</a> 建 API Key → 调 API 或安装 Agent Skill。详见 <a href="docs/INSTALLATION.md">docs/INSTALLATION.md</a>。
</details>

<details>
<summary><b>开源吗？有没有平替？</b></summary>
Jev 本体闭源、无官方权重与论文。开源替代：bespokelabsai/nimble、jaredpalmer/kev、TianyuCodings/NanoJev、vinnylarouge/jevlike、featherless-ai/simple-jev、TheoLeeCJ/SemIf（见上方 GitHub 节）。
</details>

<details>
<summary><b>有官方代币吗？</b></summary>
<b>没有。</b>任何 $JEV 代币均为蹭名，谨防上当。
</details>

<details>
<summary><b>哪些场景最适合？</b></summary>
官方用例地图：<a href="https://docs.typesafe.ai/concepts/use-case-map">Use Case Map</a>。社区验证最多的：分类/路由（客服分单）、审核（guardrails、越狱检测）、评分抽取、实时 Agent 决策（游戏/浏览器/机器人）、大规模 map-reduce 特征提取。
</details>

---

## 🤝 贡献（Contributing）

欢迎 PR！收录标准：

1. **与 Jev / System One 直接相关**（模型、SDK、复刻、评测、深度解读）
2. **链接需可访问**（X / 小红书链接请附发布日期与作者）
3. 标注星数 / 热度数据时注明快照日期
4. 小红书及其它中文平台内容尤其欢迎（本仓库的短板）

---

## 📜 License

[MIT](LICENSE) © 2026 awesome-jev contributors

---

<div align="center">

**“Cheaper decisions → more decisions → more intelligence. 杰文斯悖论，正在 AI 上重演。”**

⭐ 觉得有用就点个 Star，追更一周 Jev 生态爆发！

</div>
