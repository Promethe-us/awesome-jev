<div align="center">

<img src="cover.png" alt="awesome-jev" width="600"/>

# awesome-jev

**Language: [简体中文](README.md) · English**

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Verified](https://img.shields.io/badge/Verified-2026--09--22-38bdf8)](docs/SOURCES_EN.md)

**A source-backed collection of Jev / System One resources, community projects, and research.**

*X · Xiaohongshu leads · GitHub · papers · evaluations · engineering practice*

</div>

> Community-maintained; not affiliated with TypeSafe AI. **Last source audit: 2026-09-22 (Asia/Shanghai).** That audit focused on changes from September 20–22 and revisited launch-week material. This page distinguishes official statements, authors' experiments, and unverified leads. Being able to read a source does not mean this repository reproduced its performance claims. See the [source audit](docs/SOURCES_EN.md) for coverage and access limits.

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
## 🆕 Latest changes (verified through 2026-09-22)

| Change | What it means | Primary source |
|---|---|---|
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
| 09-22 | HN newly indexed [jevopt](https://news.ycombinator.com/item?id=49795171) and [jevframe](https://news.ycombinator.com/item?id=49795313), among others; this is the indexing date, not necessarily the first release date |

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

The secondary index came from SMZDM [reference list A](https://post.smzdm.com/p/ad798m6x/), [list B](https://post.smzdm.com/p/a5ro30p3/), and [list C](https://post.smzdm.com/p/aggqvg7m/), used only to discover original links. Useful Xiaohongshu search terms include `Jev`, `Jev 模型`, `TypeSafe`, and `Jev 实测`. See the [access log](docs/SOURCES_EN.md#xiaohongshu-checks) for the full attempt history and inclusion criteria.

<a id="ecosystem"></a>
## 💻 GitHub ecosystem

> Stars are a **2026-09-22 GitHub API snapshot** and indicate attention, not quality or performance. See the [full catalog](docs/CATALOG_EN.md) for more projects, categories, and updated repository names.

| Area | Project | ★ | What to examine |
|---|---|---|---|
| Browser | [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 16,746 | Dynamically indexes actions; text entry may still call a generative model |
| Context management | [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 6,086 | Filters tool records; examine information loss and context-cache tradeoffs |
| Open model | [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 12,413 | Independent open decision model; check conditions behind cross-model numbers |
| Open model | [TheoLeeCJ/SemIf](https://github.com/TheoLeeCJ/SemIf) | 3,421 | Semantic condition checks on an open model; unaffiliated with TypeSafe |
| Open model | [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 2,757 | Expanded to a Qwen3.5 model family; no longer just a 0.5B prototype |
| Training recipe | [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1,535 | Contrastive data curation, model, and evaluation |
| Training implementation | [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 1,886 | Small training pipeline; independent implementation, not official weights |
| Agent evaluation | [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 63 | Inspect study design; distinguish repetitions from sample count |
| General evaluation | [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 71 | Public tasks, adapters, results, and scoring definitions |
| Chinese evaluation | [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 2 | Chinese support tickets, probability thresholds, and local-model cascades |
| Tool review | [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 2 | Reviews tool calls and responses; default shadow mode is not a sandbox |
| Compiler optimization | [Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt) | 2 | Jev selects whether to inline; LLVM enforces transformation legality; includes run logs and comparison scripts |
| Growth application | [Refix](https://refix.ai) | — | Product growth through experiments, SEO, content, and advertising; description is the project's own claim |

The browser project had a demo target that expired with time: [issue #93 on September 21](https://github.com/browser-use/jev-ultrafast/issues/93) reported that the default flight date had passed. Check inputs before reproducing that demo; the issue report does not establish whether every version is fixed.

<a id="evaluations"></a>
## 📊 Evaluations and limitations

- **193.6× faster and 444.6× cheaper** are TypeSafe's results for specific workflows. TypeSafe says they lean toward the high end of real-world gains; they are not guarantees across tasks, regions, or concurrency levels. [Methodology](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- **100% judge agreement** comes from repeated judgments of five fixed traces. It can inform consistency, but cannot establish accuracy on arbitrary tasks. [Experiment code](https://github.com/danielgshea/jev-as-a-judge)
- **Readable small Chinese-language study:** Jev got 31 of 40 support tickets correct; ambiguous and boundary cases remained problematic. [Chinese experiment](https://github.com/yibie/laya-jev-lab)
- **More tasks in matched-input comparisons:** sysone-bench compares Jev, Laya, routed Laya, and constrained-decoding Qwen; strengths vary by task. Its “751 states” actually corresponds to 751 scored decisions in the raw file. See the [count audit](docs/RESEARCH_EN.md). [Experiment repository](https://github.com/instax-dutta/sysone-bench)
- **Tool-call evaluations need class baselines and label provenance:** Archestra's 100-call study uses a subset where model judges agreed; read beyond aggregate accuracy. [Experiment article](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls)
- **Type-correct is not semantically correct:** known limitations cover arithmetic, dates, long contexts, adversarial inputs, and cross-question identities. [Official documentation](https://docs.typesafe.ai/model-jaggedness/jev-1.13)

See [research and evaluations](docs/RESEARCH_EN.md) for methods, metric definitions, limitations, and a replication checklist.

<a id="papers"></a>
## 📄 Papers and technical reading

The last audit **did not find an official TypeSafe technical paper on Jev / RLCD**. The official blog, documentation, and founder interview explain the product. The six papers below are selected by relevance; background papers are not presented as Jev's training recipe.

| Category | Original paper | Relationship |
|---|---|---|
| Prior work | [SalesRLAgent, 2503.23303](https://arxiv.org/abs/2503.23303) | Reinforcement-learning decisions in sales conversations; primary material in the prior-art discussion |
| Prior work | [Confidence-Aware Routing, 2510.01237](https://arxiv.org/abs/2510.01237) | Estimates uncertainty before generation and selects a processing path |
| Calibration foundation | [On Calibration of Modern Neural Networks, ICML 2017](https://proceedings.mlr.press/v70/guo17a.html) | Understanding confidence, accuracy, and post-hoc calibration |
| Background | [LLaDA, 2502.09992](https://arxiv.org/abs/2502.09992) | Non-autoregressive language modeling; no direct architectural link to Jev confirmed |
| Background | [iLLaDA, 2606.25331](https://arxiv.org/abs/2606.25331) | 2026 research on masked diffusion; not a new Jev version |
| Acronym disambiguation | [RLCD from Contrastive Distillation, 2307.12950](https://arxiv.org/abs/2307.12950) | Its expansion differs from TypeSafe's “Calibrated Decisions” |

Authors, dates, publication status, and reading boundaries are in the [research guide](docs/RESEARCH_EN.md).

<a id="reading"></a>
## 📰 In-depth articles and discussion

| Date | Material | Why read it |
|---|---|---|
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
