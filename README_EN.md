<div align="center">

<img src="cover.png" alt="awesome-jev" width="600"/>

# awesome-jev

**Language: [简体中文](README.md) · English**

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Verified](https://img.shields.io/badge/Verified-2026--09--24-38bdf8)](docs/SOURCES_EN.md)

**A source-backed collection of Jev / System One resources, community projects, and research.**

*X · Xiaohongshu leads · GitHub · papers · evaluations · engineering practice*

</div>

> Community-maintained; not affiliated with TypeSafe AI. **Full source audit: 2026-09-22 (Asia/Shanghai).** This page distinguishes official statements, authors' experiments, and unverified leads. Being able to read a source does not mean this repository reproduced its performance claims. See the [source audit](docs/SOURCES_EN.md) for coverage and access limits.

## 📑 Contents

- [Latest changes](#latest)
- [Jev in 30 seconds](#overview)
- [Timeline](#timeline)
- [Official resources and access](#official)
- [Selected X posts](#x)
- [Xiaohongshu leads](#xiaohongshu)
- [GitHub ecosystem](#ecosystem)
- [Evaluations and limitations](#evaluations)
- [Papers and technical reading](#papers)
- [In-depth articles and discussion](#reading)
- [FAQ](#faq)
- [Contributing](#contributing)

<a id="latest"></a>
## 🆕 Latest changes (full audit through 2026-09-22; papers added 09-24)

| Change | What it means | Primary source |
|---|---|---|
| **Second community increment (09-24)** | Adds independent evaluations ([jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks), [jev-arena](https://github.com/NanmiCoder/jev-arena), [Tencent Cloud ADP's blog](https://adp.tencent.com/zh/blog/jev-vs-general-llm-automated-decision-selection), [Guixingren Pro's hands-on test](https://www.huxiu.com/article/4892583.html)), [Pydantic AI's official integration docs](https://pydantic.dev/docs/ai/models/typesafe/), three engineering projects, and unverified X / Zhihu / Xiaohongshu leads | [Research and evaluations](docs/RESEARCH_EN.md) · [Source audit](docs/SOURCES_EN.md) |
| **13 Jev-related papers appeared on arXiv** | Starting September 19 (four days after launch), 13 papers had been posted by September 22, six of them on September 21 alone: first applications; agent memory, judge, and vision work (“Jev-Anything”); and open alternatives plus failure analysis. All numbers are author-reported | [Papers section](#papers) · [PaperWeekly's Chinese roundup, 09-23](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw) |
| **Waitlist removed** | TypeSafe announced access for everyone at 21:30 UTC on September 20 (05:30 Beijing time on September 21); go directly to the Console | [Official X announcement](https://x.com/typesafeai/status/2101786156572823624) |
| **$5 starting credit for new users** | An official reply described this as roughly 120 million input tokens; it is not a promise of ongoing free use | [Official reply](https://x.com/typesafeai/status/2101786280946499671) |
| **Vercel's temporary free offer** | A September 19 announcement said Jev would be free on AI Gateway through September 25. Treat this separately from TypeSafe's direct price and starting credit; check Vercel for the exact cutoff and account terms | [Vercel Developers](https://x.com/vercel_dev/status/2101116818463281579) |
| **Python SDK v0.7.1** | September 21 update: earlier API key validation, no key value in exception logs, and additional gateway examples | [Official changelog](https://docs.typesafe.ai/sdk/python/changelog) |
| **Jev evaluation integration in LangSmith** | LangSmith announced Jev-as-a-judge support on September 21; its Gateway also supports Jev with your own TypeSafe key | [Integration announcement](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) · [Gateway docs](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |
| **Temporary free SemIf hosting** | LangSmith's separate open model, `semif-qwen3.5-4b`, was free through September 28 for eligible US organizations on Free, Developer, or Plus plans; this was not a free Jev offer | [Official documentation](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |
| **Docs still listed Jev 1.13.0** | Both `jev-latest` and `jev-preview` pointed to that version at the time; an SDK update is not a model update | [Models](https://docs.typesafe.ai/models) |
| **September 20–21 service incidents** | The status page recorded Console and API incidents and their recovery. It showed the service online when checked; that status is a point-in-time observation | [Official status page](https://status.typesafe.ai/) |
| **More research and engineering material** | A long founder interview, a small Chinese-language comparison, an agent-call evaluation, JevBench, and projects including compiler inline decisions | [Research and evaluations](docs/RESEARCH_EN.md) · [Full catalog](docs/CATALOG_EN.md) |

<a id="overview"></a>
## 🔥 Jev in 30 seconds

Jev is TypeSafe AI's decision model. An application supplies a text state and well-scoped questions; the model returns **Choice / Score / Noul** results, which application code interprets to decide what happens next. TypeSafe calls this family **System One**. Jev does not directly write articles, code, or free-form answers. [Official concept guide](https://docs.typesafe.ai/concepts/system-one)

| Item | Finding from the last audit |
|---|---|
| Launch | 2026-09-15; [official launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| Company | TypeSafe AI was founded by Diogo Almeida, Erik Gafni, and Sasha Sheng; it announced a $40M seed round led by DCVC. [Company press release](https://www.businesswire.com/news/home/20260915525333/en/) |
| Model | `jev-1.13.0`; both public aliases pointed to it at the time |
| Direct price | **$0.042 per million input tokens**; output tokens were not billed |
| Input limits | **64k tokens per request** and **32k tokens for `state` plus the longest single question**; both limits apply |
| Input modalities | Text as a string, JSON object, or text array; no direct image, audio, or video input |
| Rate limits | Docs listed **250,000 tokens/second and 1,200 requests/minute**, subject to dynamic change |
| Languages | Official docs said English performed best; evaluate Chinese and other languages separately |

Model, price, budget, rate, and language information comes from [Models](https://docs.typesafe.ai/models), and is not a universal specification for third-party gateways.

| Primitive | Output | Example |
|---|---|---|
| **Choice** | A selected option, probabilities for every option, and `confidence` | Is this ticket about billing, technical support, or something else? Up to 255 options |
| **Score** | A score on an ordered scale, probabilities for each level, and `confidence` | Rate an issue's severity against explicitly defined levels |
| **Noul** | Probability of “yes”; **no separate `confidence` field** | Does the message explicitly convey urgency? |

`confidence` is computed from the probability distribution, not a free-form self-assessment. It should not be treated as task accuracy either: a type-correct output can still choose the wrong answer. [Primitives](https://docs.typesafe.ai/primitives) · [Confidence](https://docs.typesafe.ai/confidence)

The name Jev refers to William Stanley Jevons; System One borrows terminology from *Thinking, Fast and Slow*. This describes the company's product positioning, not proof of a biological cognitive mechanism. [Naming explanation](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

<a id="timeline"></a>
## 🗓️ Timeline

> Dates follow the original sources; X posts use UTC. Publication dates and dates when discussion posts were indexed are recorded separately.

| Date | Event |
|---|---|
| 09-15 | [Jev launches](https://typesafe.ai/blog/introducing-system-one-models-and-jev) in early access |
| 09-16 | [Vercel AI Gateway integration announcement](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| 09-17 | [Cloudflare announcement](https://x.com/CloudflareDev/status/2100688880798159254); [LangChain harness tutorial](https://www.langchain.com/blog/building-a-harness-with-jev) |
| 09-18 | [OpenRouter beta announcement](https://x.com/OpenRouter/status/2100744709589316009); [Vercel adoption article](https://vercel.com/blog/ai-gateway-jev-model-launch) |
| 09-19 | [Vercel temporary free offer](https://x.com/vercel_dev/status/2101116818463281579); [LangChain judge experiment](https://x.com/LangChain/status/2101454284927959080) |
| 09-20 | [TypeSafe removes the waitlist](https://x.com/typesafeai/status/2101786156572823624); the community continues exploring semantic search, podcast ad detection, and asset selection |
| 09-21 | [LangSmith Jev evaluations](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) and [SemIf hosting](https://x.com/Hacubu/status/2102064714851455363); [Python SDK 0.7.1](https://docs.typesafe.ai/sdk/python/changelog); [Simon Willison's analysis](https://simonwillison.net/2026/Sep/21/jev/); [founder interview](https://www.latent.space/p/jev) |
| 09-22 | HN newly indexed [jevopt](https://news.ycombinator.com/item?id=49795171) and [jevframe](https://news.ycombinator.com/item?id=49795313), among others; this is the indexing date, not necessarily the first release date. Jev-related papers on arXiv also reached 13 that day ([Visual Jev](https://arxiv.org/abs/2609.25845), [REFLEX](https://arxiv.org/abs/2609.26532), [JEV-as-a-Judge](https://arxiv.org/abs/2609.26550), [Type-Safe Is Not Error-Free](https://arxiv.org/abs/2609.26758)) |
| 09-23 | [PaperWeekly's Chinese roundup](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw) of this paper wave; see the [papers section](#papers) |

<a id="official"></a>
## 🏢 Official resources and access

| Resource | Use |
|---|---|
| [TypeSafe launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | Positioning, vendor evaluation methods, and their limits |
| [Documentation](https://docs.typesafe.ai) · [machine-readable index](https://docs.typesafe.ai/llms.txt) | Concepts, API, examples, and SDK pages |
| [Playground](https://console.typesafe.ai/playground) · [API keys](https://console.typesafe.ai/keys) | Try the service and create a key after signing in |
| [Model specification](https://docs.typesafe.ai/models) · [HTTP API](https://docs.typesafe.ai/api) | Version, context, price, and request format |
| [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) · [JS / TS SDK](https://github.com/typesafe-ai/typesafe-sdk-js) | Use `typesafe-sdk` and `@typesafe-ai/sdk`, respectively |
| [Agent Skill](https://github.com/typesafe-ai/skills) | TypeSafe reference material for coding assistants |
| [System One LLM adapter](https://github.com/typesafe-ai/system-one-adapter-python) | Similar interface backed by an LLM; its output and performance are not equivalent to Jev |
| [Cookbooks](https://docs.typesafe.ai/cookbooks) | Reranking, citation checking, feature construction, classification, and routing |
| [Pydantic AI: TypeSafe (Jev) model docs](https://pydantic.dev/docs/ai/models/typesafe/) (added 09-24) | Official integration in a third-party agent framework: `TypeSafeModel`, typed outputs, boolean thresholds, tool calls, and low-confidence fallback examples |
| [Known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13) | Numbers, dates, adversarial input, and cross-question consistency, among others |
| [Workflow evals](https://evals.typesafe.ai/) · [status page](https://status.typesafe.ai/) | Vendor experiments and service incidents |
| [Official X](https://x.com/typesafeai) · [Discord](https://discord.gg/typesafe) | Announcements and community discussion |

| Access channel | Verified endpoint / identifier | Notes |
|---|---|---|
| Direct TypeSafe API | `POST https://api.typesafe.ai/v1/systemone`; `jev-1.13.0` / `jev-latest` | Native Choice / Score / Noul; [getting started](docs/INSTALLATION_EN.md) |
| Vercel AI Gateway | `typesafe-ai/jev`; AI SDK `experimental_evaluate` | Its experimental API uses types such as Boolean; do not mix its request shape with native Noul. [Announcement](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| Cloudflare | `typesafe/jev`; official example uses `env.AI.run` | Its model page listed a 32,000 context window; check Cloudflare's console for billing. [Model page](https://developers.cloudflare.com/ai/models/typesafe/jev/) |
| OpenRouter | Jev 1.13 model page and beta announcement confirmed | This is a structured decision interface; ordinary chat-completions requests may not apply. [Model page](https://openrouter.ai/typesafe/jev-1.13) · [announcement](https://x.com/OpenRouter/status/2100744709589316009) |
| LangSmith Gateway | `typesafe/jev-1.13.0`; System One API | Configure a TypeSafe provider secret in the workspace and use a LangSmith key in the client; distinct from hosted SemIf. [Docs](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |

<a id="x"></a>
## 🐦 Selected X posts

> We checked authors, UTC publication dates, and readable text. Where direct X pages were restricted, we cross-checked against X's public embed interface or a public mirror. Demo numbers are authors' reports and were not reproduced here; likes are not a technical quality measure.

### Announcements and experiments with methodology

| Date | Author | Content and reading notes |
|---|---|---|
| 09-21 | [@Hacubu](https://x.com/Hacubu/status/2102064714851455363) · [@hwchase17](https://x.com/hwchase17/status/2102065131202945152) | LangSmith hosts SemIf with a temporary free offer. TypeSafe SDK compatibility means interface compatibility, not open official Jev weights |
| 09-21 | [@typesafeai](https://x.com/typesafeai/status/2101952261421474159) | API / Console incident announcement and [subsequent recovery post](https://x.com/typesafeai/status/2101973003710222600); use the status page for incident details |
| 09-20 | [@typesafeai](https://x.com/typesafeai/status/2101786156572823624) | No waitlist; [starting-credit reply in the same thread](https://x.com/typesafeai/status/2101786280946499671) |
| 09-19 | [@LangChain](https://x.com/LangChain/status/2101454284927959080) | Compares judge accuracy, repeat consistency, latency, and cost. Read alongside the [experiment repository](https://github.com/danielgshea/jev-as-a-judge); there were only five independent traces |
| 09-19 | [@vercel_dev](https://x.com/vercel_dev/status/2101116818463281579) | AI Gateway offer through September 25; separate from direct TypeSafe pricing |
| 09-18 | [@OpenRouter](https://x.com/OpenRouter/status/2100744709589316009) | Beta integration announcement |
| 09-18 | [@madiator](https://x.com/madiator/status/2100990591215783946) | Bespoke Nimble's open model, data, and training recipe; an independent implementation |
| 09-18 | [@nedwize](https://x.com/nedwize/status/2100973868324417852) | Tax document classification; check the [code and data description](https://github.com/kyotofin/tax-doc-classifier), and do not generalize performance from one document collection |
| 09-15 | [@CompleteSkeptic](https://x.com/CompleteSkeptic/status/2099925682726002904) | Founder's launch post; read performance claims with the evaluation conditions in the formal blog post |

### Engineering examples and Chinese-language practice

| Date | Author | Example and boundary |
|---|---|---|
| 09-20 | [@richardt830](https://x.com/richardt830/status/2101780631667794077) | JevGraph: a document-to-evidence-backed knowledge graph pipeline built on community project DocJev |
| 09-20 | [@TTLequals0](https://x.com/TTLequals0/status/2101776961282408786) | Podcast ad detection with [MinusPodJev source](https://github.com/ttlequals0/MinusPodJev); does not imply Jev natively accepts audio |
| 09-20 | [@Saboo_Shubham_](https://x.com/Saboo_Shubham_/status/2101576462042366114) | Browser extension that locates text by meaning |
| 09-20 | [Guizang @op7418](https://x.com/op7418/status/2101536330018918793) | Selects and adjusts prefabricated 3D assets in parallel; Jev does not directly generate mesh models |
| 09-20 | [AI Will @FinanceYF5](https://x.com/FinanceYF5/status/2101502474691698971) | Chinese-language account of multi-round game decisions; cost and speed are reported by the poster |
| 09-20 | [AI Will @FinanceYF5](https://x.com/FinanceYF5/status/2101585391140905034) | Chinese-language account of an ad-analysis example; compare [Matthew Berman's original September 17 demo](https://x.com/TheMattBerman/status/2100654891756589230) so the same case is not counted twice |
| 09-19 | [@NFT_Chen](https://x.com/NFT_Chen/status/2101253568774697099) | Support-ticket routing versus DeepSeek on latency / cost; insufficient evidence for equal accuracy |
| 09-19 | [Huang Xiaomu @ai_xiaomu](https://x.com/ai_xiaomu/status/2101135680168771979) | Long Chinese introduction; its waitlist instructions were superseded by a later announcement |
| 09-18 | [Sen Shu @harrisonitsme](https://x.com/harrisonitsme/status/2100799749192569167) | Agent Skill and key setup tutorial; waitlist instructions are historical |
| 09-18 | [@dimentary](https://x.com/dimentary/status/2101018760371171420) | MuJoCo simulation: separate calls for high-level choice and motion judgment, using geometry and contact text as input |
| 09-17 | [@tamarajtran](https://x.com/tamarajtran/status/2100694549362553153) | Scores tool records before filtering or truncating them; evaluate lost context and cache effects |
| 09-17 | [@ali_uraish](https://x.com/ali_uraish/status/2100425130082238682) | SO-101 simulation: vision model observes, Jev selects an action, local controller executes |
| 09-17 | [@TheINAOG](https://x.com/TheINAOG/status/2100384258804093139) | Extracts state from simulator RAM and looks ahead before acting; game-specific adapters reduce perception difficulty |
| 09-17 | [@sid19arya0](https://x.com/sid19arya0/status/2100458351440048258) | Single Pokémon battle demo; not a cross-game model leaderboard |
| 09-16 | [@jpschroeder](https://x.com/jpschroeder/status/2100347770867458384) | Driving decision demo; “recreated FSD” is the author's phrase, not verified real-road autonomous driving capability |
| 09-17 | [@rinte0321](https://x.com/rinte0321/status/2100736454850908344) | Japanese e-commerce live-recommendation demo: mid-conversation product suggestions that react to the user's latest utterance (Jev + gpt-live-1); the experience is the author's description, video not reproduced |
| 09-18 | [@ctatedev](https://x.com/ctatedev/status/2101022101750571357) | json-render + Jev experiment for dynamic interfaces: componentized UI rendered in milliseconds; an early generative-UI direction |
| 09-19 | [@yanhua1010](https://x.com/yanhua1010/status/2101257759497089171) | Looks up a 12306 train ticket with the browser agent (Jev Ultrafast): an everyday-usability demo |

<a id="xiaohongshu"></a>
## 📕 Xiaohongshu leads

**The last audit visited search pages and original note links but did not obtain verifiable note text.** Search did not return readable results; detail pages required login, were temporarily unavailable, or timed out. These are leads for verification, not confirmed experiment results or evidence that the platform has no other relevant posts.

| Indexed date | Note lead | Verification status |
|---|---|---|
| 09-20, older repository record | [“Computer control with CUA and Jev” (Chinese)](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c) | Older record attributed it to “北京月薪5k”; author, date, and text could not be rechecked |
| 09-20, secondary index | [“Jev went viral two days ago, and an open 0.5B model is already here!” (Chinese)](https://www.xiaohongshu.com/explore/6aaf83ef0000000012001034) | Author and text unverified; “local model” in the title must not be read as official Jev weights |
| 09-20, secondary index | [“50× faster than Jev? Run it locally!” (Chinese)](https://www.xiaohongshu.com/explore/6aaff680000000000b0379c0) | Author and text unverified; the title's speed claim is not adopted |
| 09-20, secondary index | [“Jev explained in one video” (Chinese)](https://www.xiaohongshu.com/explore/6aaf548c000000000d025edf) | Author and text unverified |
| 09-18, secondary index | [“Jev with Codex” (Chinese)](https://www.xiaohongshu.com/explore/6aace869000000002a024546) | Author and text unverified |
| 09-18, secondary index | [“What is the Jev model?” (Chinese)](https://www.xiaohongshu.com/explore/6aac6d53000000002802a9ff) | Author and text unverified |
| 09-23, Chinese aggregator index (added 09-24) | [DeepSleep, “GPT6 too slow? Try Jev” (Chinese)](https://www.xiaohongshu.com/explore/6aafe241000000001103375f) | Title and attribution come from the [CodeAlex52/awesome-jev-cn](https://github.com/CodeAlex52/awesome-jev-cn) index; this round's visit returned “page not found,” text unverified |

The secondary index came from SMZDM [reference list A](https://post.smzdm.com/p/ad798m6x/), [list B](https://post.smzdm.com/p/a5ro30p3/), and [list C](https://post.smzdm.com/p/aggqvg7m/), used only to discover original links. Useful Xiaohongshu search terms include `Jev`, `Jev 模型`, `TypeSafe`, and `Jev 实测`. See the [access log](docs/SOURCES_EN.md#xiaohongshu-checks) for the full attempt history and inclusion criteria.

### Zhihu leads (unverified, added 09-24)

> All three Zhihu entry points returned 403 this round and their text could not be read; titles and links come from search indexes. **Numbers and methods in the titles are not credited until the full text is read.**

| Entry point | Status |
|---|---|
| [“385 ms per decision: wired into two real systems” (Chinese)](https://zhuanlan.zhihu.com/p/2085717977140352185) | Returned 403 on 09-24 |
| [“JEV integration tested: still far from usable” (Chinese)](https://zhuanlan.zhihu.com/p/2085662736722276833) | Returned 403 on 09-24 |
| [“Jev in practice 04: Jev + CDP browser automation” (Chinese)](https://zhuanlan.zhihu.com/p/2084848802809303864) | Returned 403 on 09-24 |

Also: [programmer Yupi's tutorial](https://cloud.tencent.com/developer/article/2748472) has a [same-title Zhihu entry point](https://zhuanlan.zhihu.com/p/2085400278489101833); the experiment counts once and is listed under [in-depth articles](#reading), with the readable Tencent Cloud original as the reference.

<a id="ecosystem"></a>
## 💻 GitHub ecosystem

> Stars are a **2026-09-24 GitHub API snapshot** and indicate attention, not quality or performance. See the [full catalog](docs/CATALOG_EN.md) for more projects, categories, and updated repository names.

| Area | Project | ★ | What to examine |
|---|---|---|---|
| Browser | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 18,946 | Dynamically indexes actions; text entry may still call a generative model |
| Context management | [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 6,519 | Filters tool records; examine information loss and context-cache tradeoffs |
| Open model | [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 19,900 | Independent open decision model; check conditions behind cross-model numbers |
| Open model | [TheoLeeCJ/SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev) | 4,054 | Semantic condition checks on an open model; unaffiliated with TypeSafe; formerly named SemIf |
| Open model | [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 5,688 | Expanded to a Qwen3.5 model family; no longer just a 0.5B prototype |
| Training recipe | [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1,676 | Contrastive data curation, model, and evaluation |
| Training implementation | [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2,100 | Small training pipeline; independent implementation, not official weights |
| Agent evaluation | [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 78 | Inspect study design; distinguish repetitions from sample count |
| General evaluation | [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 102 | Public tasks, adapters, results, and scoring definitions |
| Independent evaluation | [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 17 | Pilot comparison against local GLiNER2.5; accuracy, coverage under an error budget, and latency, with public conditions |
| Chinese evaluation | [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 8 | Chinese support tickets, probability thresholds, and local-model cascades |
| Chinese evaluation | [NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena) | 98 | Ten thousand comments comparing Jev and DeepSeek side by side; AI-reviewed labels, replayable per-item checks |
| Tool review | [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 20 | Reviews tool calls and responses; default shadow mode is not a sandbox |
| Agent guardrails | [DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden) | 138 | Uses Jev to review coding-agent writes and project rules; includes a maintainer evaluation |
| Model routing | [0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | 248 | Per-turn Codex model and reasoning routing; the ~−60% saving comes from a 237-turn historical simulation, not measured bills |
| Content index | [mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub) | 23 | Aggregates X long-form posts and demo videos with authors and original links; inclusion does not mean the demos were reproduced |
| Compiler optimization | [Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt) | 3 | Jev selects whether to inline; LLVM enforces transformation legality; includes run logs and comparison scripts |
| Growth application | [Refix](https://refix.ai) | — | Product growth through experiments, SEO, content, and advertising; description is the project's own claim |

The browser project had a demo target that expired with time: [issue #93 on September 21](https://github.com/browser-use/jev-ultrafast/issues/93) reported that the default flight date had passed. Check inputs before reproducing that demo; the issue report does not establish whether every version is fixed.

<a id="evaluations"></a>
## 📊 Evaluations and limitations

- **193.6× faster and 444.6× cheaper** are TypeSafe's results for specific workflows. TypeSafe says they lean toward the high end of real-world gains; they are not guarantees across tasks, regions, or concurrency levels. [Methodology](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- **100% judge agreement** comes from repeated judgments of five fixed traces. It can inform consistency, but cannot establish accuracy on arbitrary tasks. [Experiment code](https://github.com/danielgshea/jev-as-a-judge)
- **Readable small Chinese-language study:** Jev got 31 of 40 support tickets correct; ambiguous and boundary cases remained problematic. [Chinese experiment](https://github.com/yibie/laya-jev-lab)
- **More tasks in matched-input comparisons:** sysone-bench compares Jev, Laya, routed Laya, and constrained-decoding Qwen; strengths vary by task. Its “751 states” actually corresponds to 751 scored decisions in the raw file. See the [count audit](docs/RESEARCH_EN.md). [Experiment repository](https://github.com/instax-dutta/sysone-bench)
- **Tool-call evaluations need class baselines and label provenance:** Archestra's 100-call study uses a subset where model judges agreed; read beyond aggregate accuracy. [Experiment article](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls)
- **Type-correct is not semantically correct:** known limitations cover arithmetic, dates, long contexts, adversarial inputs, and cross-question identities. [Official documentation](https://docs.typesafe.ai/model-jaggedness/jev-1.13). A [September 22 paper on option-name sensitivity](https://arxiv.org/abs/2609.26758) adds measurements: swapping only the option-name-to-definition assignment dropped open Jev-like models from AUC 0.94 to 0.23, with the same pattern in the hosted Jev but smaller, while the type-error rate stayed 0%
- **Third-party benchmarks are arriving:** a [September 21 computational-social-science annotation benchmark](https://arxiv.org/abs/2609.24574) (18 tasks, 7,977 items) reports the decision model behind the per-task best LLM on 14 of 15 formal tasks (median gap 11.6 macro-F1) at about 1/44 of the cost, with low-confidence routing to an LLM matching it at 1/4–1/2 of the cost; [REFLEX](https://arxiv.org/abs/2609.26532) (09-22) also reports an unstable advantage over cheap generative cascades in external evaluations. All author-reported, with tasks and prompts that differ, so they cannot be merged into one ranking

See [research and evaluations](docs/RESEARCH_EN.md) for methods, metric definitions, limitations, and a replication checklist.

<a id="papers"></a>
## 📄 Papers and technical reading

The last audit did not find an official TypeSafe technical paper on Jev / RLCD; the official blog, documentation, and founder interview explain the product. But eight days after launch (September 23), 13 related papers had been posted on arXiv.

The six background papers below are selected by relevance and are not presented as Jev's training recipe:

| Category | Original paper | Relationship |
|---|---|---|
| Prior work | [SalesRLAgent, 2503.23303](https://arxiv.org/abs/2503.23303) | Reinforcement-learning decisions in sales conversations; primary material in the prior-art discussion |
| Prior work | [Confidence-Aware Routing, 2510.01237](https://arxiv.org/abs/2510.01237) | Estimates uncertainty before generation and selects a processing path |
| Calibration foundation | [On Calibration of Modern Neural Networks, ICML 2017](https://proceedings.mlr.press/v70/guo17a.html) | Understanding confidence, accuracy, and post-hoc calibration |
| Background | [LLaDA, 2502.09992](https://arxiv.org/abs/2502.09992) | Non-autoregressive language modeling; no direct architectural link to Jev confirmed |
| Background | [iLLaDA, 2606.25331](https://arxiv.org/abs/2606.25331) | 2026 research on masked diffusion; not a new Jev version |
| Acronym disambiguation | [RLCD from Contrastive Distillation, 2307.12950](https://arxiv.org/abs/2307.12950) | Its expansion differs from TypeSafe's “Calibrated Decisions” |

### The September 2026 paper wave (09-19 through 09-22, 13 papers)

| Group | First posted | Paper | Key points (author-reported) | Code |
|---|---|---|---|---|
| Applications | 09-19 | [Replacing LLMs with Jev Decision Models for Low-Latency Edge Service Orchestration, 2609.22753](https://arxiv.org/abs/2609.22753) | Edge service orchestration; median decision latency 15.9–26.5% lower than structured-output DeepSeek, and API fees per correctly completed task about 70% lower without caching; caching largely removes the latency gap | — |
| Applications | 09-19 | [Fast Intent-Driven Service Orchestration with Jev for 6G Edge Networks, 2609.23136](https://arxiv.org/abs/2609.23136) | Intent-driven 6G orchestration; median decision latency 22.4% lower than DeepSeek and 61.9% lower than Gemini; in a real image service, 459 of 1,080 requests completed correctly and on time (DeepSeek 463, Qwen 435) | — |
| Applications | 09-21 | [Calibrated Decisions at Scale: … Crash Narratives … (Jev), 2609.24052](https://arxiv.org/abs/2609.24052) | Batch coding of Texas crash narratives: 499,500 screened, 195,857 coded with a 27-question schema; F1 0.908 against 2,416 blinded human judgments; probabilities drive the sampling for human review | [GitHub](https://github.com/pozapas/jev-calibrated-narrative-coding) |
| Applications | 09-21 | [Jev for Scientific Decisions, 2609.24965](https://arxiv.org/abs/2609.24965) | Semantic choices in scientific workflows; tied five other configurations at complete semantic correctness across ten cases with the lowest observed median latency; checks semantic choices, downstream computations, and final labels separately | — |
| Jev-Anything | 09-21 | [Jev-Mem: System-One-Controlled Agentic Memory, 2609.23986](https://arxiv.org/abs/2609.23986) | Memory typing, retrieval budgets, query routing, and stopping handled by a System-One controller; LoCoMo composite score 0.777 and 158-second memory construction (6.6× faster than the fastest baseline) | [GitHub](https://github.com/libingzheren/Jev-Mem) |
| Jev-Anything | 09-22 | [REFLEX with Jev for Efficient Selective Control in LLM Agents, 2609.26532](https://arxiv.org/abs/2609.26532) | Executes bounded decisions when confident, escalates otherwise; on a frozen 100-task benchmark, 95% success with 72.7% fewer strong-model calls, but external evaluations show an unstable advantage over cheap generative cascades | — |
| Jev-Anything | 09-22 | [JEV-as-a-Judge: Accept When Confident, Escalate When Unsure, 2609.26550](https://arxiv.org/abs/2609.26550) | Compared against 16 generative and reward-model judges; within three percentage points of the strongest LLM judge on ordinary preference and factuality judgments at about 0.36% of its fee; a confidence cascade retains 99% of its accuracy | — |
| Jev-Anything | 09-21 | [Open-Jev Judgments on CallScreenBench, 2609.23959](https://arxiv.org/abs/2609.23959) | JevLite, a LoRA-tuned Qwen3-4B, reads scam probability in one forward pass; AUROC 0.974 over 577 per-turn decisions in 41 scenarios; 64.5 ms per decision, 4.9× faster than generating with the same backbone; authors note no architectural novelty, test-set exposure in recipe selection, and synthetic callers | — |
| Jev-Anything | 09-21 | [JEVQA — Video Quality …, 2609.24395](https://arxiv.org/abs/2609.24395) | Zero-shot video quality; metadata-only Pearson correlation 0.737 approaches standardized P.1204.1 (0.733), rising to 0.824 with bitstream and pixel features; purpose-trained models on the same features remain clearly ahead | — |
| Jev-Anything | 09-22 | [Visual Jev: … Shared Visual Context, 2609.25845](https://arxiv.org/abs/2609.25845) | One image, many structured questions, shared visual context; at 32 questions per image, 8.9× faster than per-question execution and 3.4× faster than a batched scheme that recomputes the visual prefix, at higher peak memory | [GitHub](https://github.com/guanxuyu-sv/Visual-Jev) |
| Open models and benchmarks | 09-20 | [this-that-model-1.0, 2609.23886](https://arxiv.org/abs/2609.23886) | ~2B-parameter open typed decision model at 30.9 ms per decision; scores 0.941 versus Jev's 0.765 on a third party's 68 recorded questions, and 0.560 versus Jev's 0.98–1.00 on multi-step arithmetic | [GitHub](https://github.com/FLock-io/this-that-model) |
| Open models and benchmarks | 09-21 | [Evaluating Decision Models for Text Annotation in Computational Social Science, 2609.24574](https://arxiv.org/abs/2609.24574) | 18 computational-social-science tasks, 7,977 items, against 19 LLMs; the decision model trails the per-task best LLM on 14 of 15 formal tasks (median gap 11.6 macro-F1) at about 1/44 of the cost; routing low-confidence items to an LLM matches or beats the LLM alone at 1/4–1/2 of its cost | [GitHub](https://github.com/hazemibrahim97/decision-models-css) |
| Open models and benchmarks | 09-22 | [Type-Safe Is Not Error-Free, 2609.26758](https://arxiv.org/abs/2609.26758) | Swapping only the option-name-to-rubric assignment (0/1 ↔ no/yes) causes large-scale reversals, AUC 0.94 → 0.23; the hosted Jev shows the same pattern, smaller in magnitude; the type-error rate stays 0% throughout | — |

Authors, dates, publication status, and reading boundaries are in the [research guide](docs/RESEARCH_EN.md).

<a id="reading"></a>
## 📰 In-depth articles and discussion

| Date | Material | Why read it |
|---|---|---|
| 09-24 | [Programmer Yupi: hands-on review and step-by-step tutorial (Tencent Cloud, Chinese)](https://cloud.tencent.com/developer/article/2748472) | Working notes on a numeric sliding puzzle, 1,000 simulated emails, a matching game, and tagging 697 articles; email speed and cost are the author's tests, not general benchmarks; the [same-title Zhihu entry](https://zhuanlan.zhihu.com/p/2085400278489101833) should not be counted twice |
| 09-23 | [PaperWeekly: roundup of 13 papers (Chinese)](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw) | Organizes the September 19–22 arXiv wave into “first applications / Jev-Anything / open alternatives and stress tests”; treat the papers themselves as the source of record for numbers |
| 09-21 | [Kazik, “This Jev only does multiple choice” (authorized reprint, Chinese)](https://news.pedaily.cn/202609/569378.shtml) | The author's own test using Jev to pre-screen AI news: a 100-question comparison and one article answered by multiple questions at once; results shown as screenshots and narration — read as a self-report (added 09-24) |
| 09-20 | [Guixingren Pro, “Hands-on Jev” (Huxiu reprint, Chinese)](https://www.huxiu.com/article/4892583.html) | 50 Chinese customer-service questions × 4 judgments × 15 repetitions: about 64–65% correct at roughly 0.73 s per question; **score fluctuation near the threshold** — a message scored 1.99 against a 2.00 human-handoff cutoff, and 3 questions flipped across 15 runs; the [WeChat original](https://mp.weixin.qq.com/s?__biz=MzkyNjU2ODM2NQ%3D%3D&chksm=c34d64c8d9c576303a91a12548bb0d3a63e9c0d03e25645cd7d460b5cfaf5d0a192546d90b33&idx=1&mid=2247633323&sn=936abc6916a79b3005f4fc6c42e8653f) sat behind a verification wall, numbers come from the readable reprint (added 09-24) |
| 09-21 | [LangSmith: Jev evaluations](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) | Maps traces and questions to feedback fields; includes online evaluator setup |
| 09-21 | [Latent Space × Diogo Almeida](https://www.latent.space/p/jev) | Long founder interview and transcript on design, use, and ecosystem examples |
| 09-21 | [Simon Willison: Decision Models](https://simonwillison.net/2026/Sep/21/jev/) | Interface, search reranking, and interpretability with numeric-only output |
| 09-21 | [Di Zhang: What Is RLCD?](https://di-zhang-llm.github.io/blog/what-is-rlcd-the-secret-behind-jev/) | Preference-modeling perspective; read explicitly as a community hypothesis |
| Indexed by HN 09-21 | [Archestra: 100 real agent calls](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls) | Majority-class baseline, option order, refusal recall, and label issues |
| Indexed by HN 09-21 | [Expanso: log triage](https://expanso.io/blog/log-triage-expanso-jev/) | Separates rules, context counting, model judgment, retries, and fallback |
| 09-20 | [LangChain: Jev-as-a-Judge for Agent Evals](https://www.langchain.com/blog/jev-agent-evals-langsmith) | Repeated experiment on five fixed traces; distinct from the 09-21 product integration announcement |
| 09-18 | [Vercel: AI Gateway adoption](https://vercel.com/blog/ai-gateway-jev-model-launch) | Platform-reported adoption by nearly 13% of paying teams on day one; not a global-developer statistic |
| 09-17 | [LangChain: Building a Harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev) | Agent routing and pre-tool-execution decisions |
| 09-16 | [Sean Goedecke: structured output](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | Interface design and possible implementations |
| 09-15 | [TypeSafe company press release](https://www.businesswire.com/news/home/20260915525333/en/) | Primary source for company and financing information |

Discussion entry points: [HN launch thread](https://news.ycombinator.com/item?id=49717558), [discussion of Simon's article (indexed 09-22)](https://news.ycombinator.com/item?id=49796843), [tool-call evaluation discussion](https://news.ycombinator.com/item?id=49788402), and [Reddit prior-art dispute](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/). Popularity and participants' claims do not replace experimental or paper evidence.

<a id="faq"></a>
## ❓ FAQ

**Is there still a waitlist?** TypeSafe announced its removal. Sign in at the [Console](https://console.typesafe.ai); waitlist steps in older tutorials are outdated. See the [announcement](https://x.com/typesafeai/status/2101786156572823624) and [getting-started guide](docs/INSTALLATION_EN.md).

**Can Jev run locally?** The last audit did not find official Jev weights. Laya, Kev, SemIf, and Nimble are independent open implementations; check each project for capabilities, training, and licensing.

**Can it inspect images, write articles, or generate 3D models?** The official interface accepted text states only. Demos generally convert visual or audio observations to text first, or use Jev to choose among existing assets or actions; other components handle generation. [Model specification](https://docs.typesafe.ai/models)

**Does a returned 0.9 mean this decision is 90% likely to be correct?** First distinguish probability fields from `confidence`, then measure calibration on your target distribution. One number cannot replace task validation. [Confidence](https://docs.typesafe.ai/confidence)

**Why are some viral posts excluded?** Reposts, sensational titles without evidence, missing originals, and experiments without conditions are not technical conclusions. Restricted social leads are labeled separately; verifiable sources are welcome.

<a id="contributing"></a>
## 🤝 Contributing

1. Keep entries directly relevant to Jev / System One; prefer official material, original author posts, code, and original papers.
2. Include author, publication date, and original URL; for social posts, state whether the actual content was readable.
3. Give task, sample size, version, and measurement conditions for numbers; date star and popularity snapshots.
4. Cross-link Chinese and English accounts of the same case; do not count translations as separate experiments.
5. After verifying a Xiaohongshu lead, add author, time, and content evidence before moving it to the main selection.
6. Check Markdown, relative links, and contents anchors before submitting.

## 📜 License

[MIT](LICENSE) © 2026 awesome-jev contributors
