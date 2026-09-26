# Jev community project catalog

> This expands the [README ecosystem section](../README_EN.md#ecosystem) and groups resources by use. **Numbered stars are a 2026-09-24 GitHub API snapshot**; `—` means no star count was collected, not zero, and September 26 additions omit stars to avoid churn. Repository metadata was checked for numbered GitHub entries. Feature descriptions follow maintainers' materials; this repository did not run their code.
> Related guides: [getting started](INSTALLATION_EN.md) · [research and evaluations](RESEARCH_EN.md) · [source audit](SOURCES_EN.md). Independent open models are not TypeSafe's official Jev weights. [中文原文](CATALOG.md)

## I want to understand Jev first

| Resource | Useful for |
|---|---|
| [Official launch blog by Diogo Almeida](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | First-hand motivation, architecture overview, RLCD, pricing, and official caveats |
| [System One concepts](https://docs.typesafe.ai/concepts/system-one) | How decision models differ from chat models |
| [State concepts](https://docs.typesafe.ai/concepts/state) | Organizing context into a structured state for Jev |
| [Confidence documentation](https://docs.typesafe.ai/confidence) | `confidence` versus probability and how to use them |
| [@CompleteSkeptic launch post (09-15)](https://x.com/CompleteSkeptic/status/2099925682726002904) | Founder's product introduction |
| [Huang Xiaomu's Chinese Jev introduction (09-19)](https://x.com/ai_xiaomu/status/2101135680168771979) | Chinese-language primer; waitlist step is outdated |
| [whatisjev.com (also available in Chinese)](https://whatisjev.com/zh/getting-started) | Community-maintained knowledge site |

## Official SDKs and service entry points

| Project | ★ | Notes |
|---|---|---|
| [typesafe-ai/typesafe-sdk-python](https://github.com/typesafe-ai/typesafe-sdk-python) | 212 | Python ≥ 3.10; official changelog reached 0.7.1 on 09-21 |
| [typesafe-ai/typesafe-sdk-js](https://github.com/typesafe-ai/typesafe-sdk-js) | 230 | Node.js ≥ 20; package name `@typesafe-ai/sdk` |

For direct TypeSafe access and the Vercel, Cloudflare, OpenRouter, and LangSmith identifiers and request shapes, use the [getting-started guide](INSTALLATION_EN.md). The official waitlist was removed; check the Console for account credit.

## Framework and platform integrations

| Integration | Type and verified scope |
|---|---|
| [Pydantic AI TypeSafeModel](https://pydantic.dev/docs/ai/models/typesafe/) · [Evals example](https://pydantic.dev/articles/jev-evals) | Pydantic's official typed-decision and low-confidence fallback integration. Pydantic Evals 2.46.0 can run `LLMJudge` / `GEval` on Jev without generating a reason |
| [Pydantic AI Gateway](https://pydantic.dev/articles/jev-pydantic-ai-gateway) | Pydantic's bring-your-own TypeSafe key route forwards native `/v1/systemone` requests, not chat requests |
| [Composio TypeSafe provider](https://docs.composio.dev/docs/providers/typesafe) | Official `@composio/typesafe` / `composio-typesafe` adapters let Jev select tools and closed-set arguments, returning call, partial, or abstain; `decide` does not execute the tool |
| [Rig TypeSafe Jev integration](https://github.com/0xPlaygrounds/rig) | Rig's main repository lists `rig-typesafeai` and explicitly calls its typed judgments **experimental** |
| [Ax TypeSafe integration](https://github.com/ax-llm/ax/blob/main/website/content/_index.md) | Ax's own docs describe Boolean / class outputs and a native client for scores and probabilities. Free-form text is not a native Jev output |
| [Vercel Connect: Jev](https://vercel.com/connect/jev) · [eve evaluation guide](https://github.com/vercel/eve/blob/main/docs/guides/evaluate.md) | Vercel Connect scopes credentials to projects and environments with OIDC; eve's `auto` and `evaluate` default to `typesafe-ai/jev` on AI Gateway |

## I want to make my first call

- [Playground](https://console.typesafe.ai/playground) (no code) → [API key](https://console.typesafe.ai/keys) → [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python)
- No key? [typesafe-ai/system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python) (281★ on 2026-09-24) can substitute an LLM, with that provider's credentials.
- Full steps: [getting started](INSTALLATION_EN.md).

## Community experiments and optional applications

| Project | ★ | Notes |
|---|---|---|
| [TypeSafeAI/typesafe-playground](https://github.com/TypeSafeAI/typesafe-playground) | — | **Unofficial community organization** playground with editable typed questions, A/B inputs, and mock / live Jev demos. Examples and mocks need no key; live calls do. It extends an earlier playground |
| [TypeSafeAI/jev-harness](https://github.com/TypeSafeAI/jev-harness) | — | **Unofficial, research-stage** proposal-review contract: an LLM proposes, Jev answers four questions, and deterministic code produces a verdict and receipt. The main offline fixtures use mocks; a separate host supplies live transport. It does not apply patches or grant authorization |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | — | **Optional Jev integration**: with `TYPESAFE_API_KEY`, the Sentiment Analyst filters StockTwits / Reddit posts and summarizes stance; without it, posts pass through unscreened. The trading framework itself is not Jev-specific |
| [szczyglis-dev/py-gpt](https://github.com/szczyglis-dev/py-gpt) | — | Optional desktop Jev / System One inline plugin; `jev_evaluate(state, questions)` calls `/v1/systemone` with Choice / Score / Noul. Its September 25 v2.8.31 changelog records the plugin addition |

## I want to integrate Jev with an agent or coding assistant

| Project | ★ | Notes |
|---|---|---|
| [typesafe-ai/skills](https://github.com/typesafe-ai/skills) | 1,993 | Official Agent Skill; Claude Code plugin or `npx skills` installation |
| [tamaratran/fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) | 6,527 | Claude Code plugin; scores and filters tool calls and results while retaining user and assistant text |
| [gargpratyush/jev-router](https://github.com/gargpratyush/jev-router) | 364 | Routes Claude Code tasks to the cheapest suitable model |
| [devagrawal09/jev-review](https://github.com/devagrawal09/jev-review) | 576 | Staged code review and local dashboard |
| [NiazMorshed2007/jev-review](https://github.com/NiazMorshed2007/jev-review) | 213 | Local-first, continuous quality-review MCP plugin |
| [Alurith/jeff](https://github.com/Alurith/jeff) | 37 | Read-only CLI semantic code review |
| [zdenham/jev-lint](https://github.com/zdenham/jev-lint) | 2 | Semantic linter with natural-language rules |
| [thruwire/foreman](https://github.com/thruwire/foreman) | 532 | “Foreman” for a software factory |
| [samuelfaj/distill](https://github.com/samuelfaj/distill) | 686 | Coding agent with documents on Jev routing and token savings |
| [reticlehq/reticle](https://github.com/reticlehq/reticle) | 827 | Agent-output verification tool; README listed Jev routing as planned, not delivered |
| [kitze/skillbox](https://github.com/kitze/skillbox) | 234 | Self-hosted skill library with optional Jev integration |
| [DevMortimer/pi-warden](https://github.com/DevMortimer/pi-warden) | 138 | Uses Jev to review coding-agent writes and project rules (added 09-24) |
| [0xNatoshi/jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) | 248 | Per-turn Codex model and reasoning routing; the ~−60% saving comes from a 237-turn historical simulation and, per the project, is not measured billing (added 09-24) |
| [supercorp-ai/supercov](https://github.com/supercorp-ai/supercov) | 114 | Coverage, security and code quality for coding agents: Jev checks each source file so the agent knows what to fix first |

## I want browser, phone, or computer automation

| Project | ★ | Notes |
|---|---|---|
| [browser-use/jev-ultrafast](https://github.com/browser-use/jev-ultrafast) | 18,959 | Browser-use project: Jev-driven browser agent with a dynamically indexed action space |
| [wy-coliney/jev-browser-use](https://github.com/wy-coliney/jev-browser-use) | 425 | Jev handles controls, Codex handles input and verification; author's 5–10× figure is for a specific browser workflow |
| [droidrun/mobile-jev](https://github.com/droidrun/mobile-jev) | 373 | Mobile automation |
| [jkudish/jev-browser](https://github.com/jkudish/jev-browser) | 249 | Jev browser operations |
| [milind-soni/tiptour-macos](https://github.com/milind-soni/tiptour-macos) | 659 | Fast local computer use |
| Older Xiaohongshu lead (unverified) | — | CUA + Jev claim; note text was inaccessible, and older author / cost claims were not rechecked. See [access log](SOURCES_EN.md#xiaohongshu-checks) |

## I want an open Jev-like model or local reimplementation

| Project | ★ | Notes |
|---|---|---|
| [NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) | 19,984 | Independent open decision model with multilingual routing and public weights; check cross-model comparison conditions |
| [TheoLeeCJ/SemIf-OpenJev](https://github.com/TheoLeeCJ/SemIf-OpenJev) | 4,065 | Open-model semantic `if`, runnable on one 3090 according to its project; independent of TypeSafe; formerly named SemIf, stars snapshotted 09-24 |
| [TianyuCodings/NanoJev](https://github.com/TianyuCodings/NanoJev) | 2,103 | Small reimplementation with parallel decisions, dynamic candidates, and end-to-end training |
| [vinnylarouge/jevlike](https://github.com/vinnylarouge/jevlike) | 1,264 | Independent research model using single-forward-pass scoring; author does not claim to reproduce Jev's private training method |
| [bespokelabsai/nimble](https://github.com/bespokelabsai/nimble) | 1,677 | Open data, model, and recipe with contrastive data curation |
| [jaredpalmer/kev](https://github.com/jaredpalmer/kev) | 5,746 | Qwen3.5 family at 0.8B / 4B / 9B; older Qwen3 series and 0.5B prototype remain |
| [featherless-ai/simple-jev](https://github.com/featherless-ai/simple-jev) | 496 | Exposes a classifier / Jev-style endpoint for an open model |
| [ekzhang/openjev-sglang](https://github.com/ekzhang/openjev-sglang) | 298 | Jev-compatible API using prefill-only SGLang |
| [khimaros/verdict](https://github.com/khimaros/verdict) | — | **Independent Jev-like / wire-compatible implementation**: a local GGUF / llama-server provides the `/v1/systemone` protocol. It does not represent TypeSafe Jev's internal mechanism, calibration, or performance |

## I want evaluations, tool review, or paper assistance

| Project | ★ | Notes |
|---|---|---|
| [danielgshea/jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) | 79 | Judges weather-agent traces; five cases repeated 100 times, not 500 independent examples |
| [fstandhartinger/jevbench](https://github.com/fstandhartinger/jevbench) | 103 | Decision-model benchmark; distinguish raw measurements, latency adjustments, and composite scores |
| [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) | 17 | Pilot comparison against local GLiNER2.5; accuracy, coverage under an error budget, and latency, with public conditions (added 09-24) |
| [NanmiCoder/jev-arena](https://github.com/NanmiCoder/jev-arena) | 98 | Ten thousand comments comparing Jev and DeepSeek side by side; AI-reviewed labels with replayable per-item checks (added 09-24) |
| [instax-dutta/sysone-bench](https://github.com/instax-dutta/sysone-bench) | 4 | Matched-input Jev, Laya, Router, and Qwen comparison; original results were read, and README “states” differs from the decision count |
| [yibie/laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 8 | Small Chinese support-ticket study, confidence and cascade experiments, raw outputs, and retracted early conclusions |
| [agent-chaperone/agent-chaperone](https://github.com/agent-chaperone/agent-chaperone) | 20 | MCP proxy and tool-hook review; default shadow mode only records and is not a sandbox |
| [JacobLinCool/jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) | 1 | Rates writing clarity and completeness, not scientific correctness |
| [ourines/hermes-jev](https://github.com/ourines/hermes-jev) | 2 | Explicit Jev decision tool for Hermes, supporting TypeSafe / Cloudflare |
| [ZF-Utokyo/Jev-Benchmark](https://github.com/ZF-Utokyo/Jev-Benchmark) | — | ContractNLI legal inference comparing Jev 1.13 with nine language models. The repo has 123 test contracts, 30 fixed anchors, raw predictions, adapters, and 4,830 recorded attempts; see its [paper](https://arxiv.org/abs/2609.27678) for the reported findings |
| [sumleo/RLCDAlignBench](https://github.com/sumleo/RLCDAlignBench) | — | Jev alignment-failure detection across ten failure types, 44 benchmarks, and five small target models. The [dataset](https://huggingface.co/datasets/sumleo/RLCDAlignBench) requires access approval and labels mostly come from each benchmark's scorer; see the [paper](https://arxiv.org/abs/2609.29429) |
| [get-convex/convex-evals](https://github.com/get-convex/convex-evals) | — | **Separate decision benchmark** for Convex coding knowledge: 108 multiple-choice questions and three option permutations. Jev uses OpenRouter's `/api/alpha/decisions`; probabilities, confidence, and provider costs are stored. This does not make the whole coding-eval framework a Jev framework |

These are tools and experimental repositories, **not Jev academic papers**. See [methods and limitations](RESEARCH_EN.md).

## I want to read the September 2026 Jev papers

Jev-related papers started appearing on arXiv four days after launch. The historical batch through September 22 had 13 papers, with eight more from September 23–24 verified separately (per-paper entries in [the research guide](RESEARCH_EN.md)). Five early papers released companion repositories; repository links were metadata-checked, and this repository has not audited their code.

| Paper (first posted) | ★ | Companion repository and notes |
|---|---|---|
| [Calibrated Decisions at Scale (09-21)](https://arxiv.org/abs/2609.24052) | 0 | [pozapas/jev-calibrated-narrative-coding](https://github.com/pozapas/jev-calibrated-narrative-coding): batch crash-narrative coding pipeline |
| [Jev-Mem (09-21)](https://arxiv.org/abs/2609.23986) | 49 | [libingzheren/Jev-Mem](https://github.com/libingzheren/Jev-Mem): System-One-controlled agent memory system |
| [Visual Jev (09-22)](https://arxiv.org/abs/2609.25845) | 4 | [guanxuyu-sv/Visual-Jev](https://github.com/guanxuyu-sv/Visual-Jev): shared visual context for many questions per image |
| [this-that-model-1.0 (09-20)](https://arxiv.org/abs/2609.23886) | 22 | [FLock-io/this-that-model](https://github.com/FLock-io/this-that-model): ~2B open typed decision model; weights on [Hugging Face](https://huggingface.co/flock-io/this-that-model-1.0) |
| [CSS annotation benchmark (09-21)](https://arxiv.org/abs/2609.24574) | 0 | [hazemibrahim97/decision-models-css](https://github.com/hazemibrahim97/decision-models-css): replication package for the 18-task benchmark |

The other eight papers (two edge / 6G orchestration, scientific decisions, REFLEX, JEV-as-a-Judge, CallScreenBench, JEVQA, and option-name sensitivity) had no companion repository found in this pass; a Chinese-language roundup is available from [PaperWeekly, 09-23](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw).

## I want data or database applications

| Project | ★ | Notes |
|---|---|---|
| [realZachi/pg-jev](https://github.com/realZachi/pg-jev) | 322 | PostgreSQL extension for natural-language table lookup |
| [colliber/duckdb-jev](https://github.com/colliber/duckdb-jev) | 24 | DuckDB: typed Jev responses become SQL types |
| [maayanlevy/mysql-ailike](https://github.com/maayanlevy/mysql-ailike) | 4 | MySQL semantic row filtering |
| [kylemclaren/jevql](https://github.com/kylemclaren/jevql) | 12 | psql-style client for vanilla PostgreSQL, no extension: SQL runs on the server, Jev judges the returned rows |
| [superagents-lab/jev-search](https://github.com/superagents-lab/jev-search) | 432 | Jev-driven web search with source choice and relevance ranking |
| [kylemclaren/jevsearch](https://github.com/kylemclaren/jevsearch) | 3 | shadcn/ui ⌘K site-search block: keyword hits first, then one Jev request re-ranks the top 20; author-reported Hit@1 of 83% vs 41% keyword-only on 41 TypeSafe-docs queries; distinct from superagents-lab/jev-search |
| [kyotofin/tax-doc-classifier](https://github.com/kyotofin/tax-doc-classifier) | 411 | Author-reported classification on 261 IRS forms in its collection; not cross-domain accuracy |
| [kylemclaren/jevpdf](https://github.com/kylemclaren/jevpdf) | 1 | In-browser PDF search by meaning: pdf.js extracts lines locally, Jev answers one yes/no per line, and matching lines highlight page by page, ranked by probability |

## I want to explore compilers and new integrations

| Project | ★ | Notes |
|---|---|---|
| [Ramneet-Singh/jevopt](https://github.com/Ramneet-Singh/jevopt) | 3 | C/C++ compiler driver; Jev selects inlining policy and LLVM enforces legal transformations; includes Embench logs |
| [jevframe](https://pypi.org/project/jevframe/) | — | Row-wise semantic judgments for Pandas / Polars, returning probabilities with concurrency control and caching |
| [MinusPodJev](https://github.com/ttlequals0/MinusPodJev) | 1 | FastAPI proxy detecting ads in podcast transcript segments; offline evaluation uses a 14-episode corpus. [Author @TTLequals0, 09-20](https://x.com/TTLequals0/status/2101776961282408786) |

## I want games or real-time agents

| Project | ★ | Notes |
|---|---|---|
| [OpenByteInc/QuantDinger](https://github.com/OpenByteInc/QuantDinger) | 12,054 | Pre-order semantic checks on a trading platform; with no provider configured, checks may permit orders, so risk-control performance cannot be inferred |
| [jarrodwatts/jev-trader](https://github.com/jarrodwatts/jev-trader) | 2,163 | One trading decision per block on Monad |
| [fhshaik/typesafe-mario](https://github.com/fhshaik/typesafe-mario) | 374 | Jev plays Super Mario |
| [sc2musa/Jev_Star](https://github.com/sc2musa/Jev_Star) | — | Research-stage StarCraft II controller: GPT-6 plans while Jev chooses macro / micro actions. Replays and a paper are available, but game samples are limited and planning's contribution was not isolated; see the [preprint](https://arxiv.org/abs/2609.27331) |
| [dabit3/jev-experiments](https://github.com/dabit3/jev-experiments) | 374 | Experiment collection |
| [jev-pong (online)](https://jev-pong.ably.dev/) · [HN](https://news.ycombinator.com/item?id=49754516) | — | Jev versus GPT-5.6 / Claude Haiku in Pong |
| [Trolley problem (online)](https://gpu.studio/trolley) | — | “Will Jev pull the lever?” |
| [SpriteFusion real-time level generation](https://www.spritefusion.com/blog/generating-game-level-in-real-time-with-jev) | — | Game-level generation in real time |
| [AI Will @FinanceYF5 game demo (09-20)](https://x.com/financeyf5/status/2101502474691698971) | — | Chinese-language account of multi-round play; costs are the poster's report, not independently reproduced |

## I want comparisons and critical analysis

Start with the [2026-09-24 research and evaluation guide](RESEARCH_EN.md), which covers the LangChain judge experiment, Archestra tool calls, JevBench, and Chinese support-ticket study. Earlier commentary remains below; titles alone are not conclusions.

| Resource | Reading note |
|---|---|
| [mizzlelover/jev-hub](https://github.com/mizzlelover/jev-hub) (added 09-24) | Aggregation index of X long-form posts and demo videos, keeping authors and original links; inclusion does not mean the demos were reproduced |
| [Jev vs. classical ML](https://quicqdev.github.io/Jev-vs-ML/) | Early experiment lead; page could not be read during the last audit, so its numerical claims are not repeated |
| [Jev vs. XGBoost and BERT](https://explainx.ai/blog/jev-vs-xgboost-bert-classifiers-2026) | Qualitative discussion; article says it did not run a matched-condition three-way benchmark |
| [Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | Renewed interest in structured output |
| [Most People on the Internet Miss What Jev Is About](https://medium.com/@gemanor/most-people-on-the-internet-miss-what-jev-is-about-ad0a983537d5) | Addresses common misconceptions |
| [You could have built Jev](https://sgnt.ai/p/jev/) | Idea for reading single-token probabilities; claims about Jev internals are the author's speculation |
| [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked/) | Community architecture speculation, not an official disclosure |
| [TypeSafe's Jev Can't See](https://mikulskibartosz.name/typesafe-jev-guess-what-i-drew) | Experiment on capability boundaries |
| [Testing Jev as a validation gate for drug-discovery agents](https://frederickparsons.substack.com/p/can-a-fast-ai-gate-catch-chemistry) | Experiment in a high-stakes domain |
| [Reddit prior-architecture dispute](https://www.reddit.com/r/LocalLLaMA/comments/1wijo3e/i_literally_built_the_jev_architecture_one_year/) | Prior-work claim and discussion |

## Similar Awesome lists

| Repository | ★ |
|---|---|
| [Anil-matcha/awesome-jev-by-typesafe](https://github.com/Anil-matcha/awesome-jev-by-typesafe) | 818 |
| [yibie/awesome-jev](https://github.com/yibie/awesome-jev) | 1,461 |
| [v-modal/awesome-jev-tools](https://github.com/v-modal/awesome-jev-tools) | 689 |
| [AbdelStark/awesome-typesafe-jev](https://github.com/AbdelStark/awesome-typesafe-jev) | 496 |
| [cobanov/awesome-jev](https://github.com/cobanov/awesome-jev) | 371 |
| [fatwang2/awesome-jev](https://github.com/fatwang2/awesome-jev) | 201 |
| [logicrw/awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) | 435 |
| [CodeAlex52/awesome-jev-cn](https://github.com/CodeAlex52/awesome-jev-cn) | 0 |

All stars are a 2026-09-24 snapshot; awesome-jev-cn is a Chinese aggregation repository that reorganizes awesome-jev and indexes Xiaohongshu / Bilibili leads; its Xiaohongshu entries are listed under the [README's unverified leads](../README_EN.md#xiaohongshu).

---

## Inclusion criteria

1. Directly relevant to Jev / System One: models, SDKs, reimplementations, integrations, evaluations, or in-depth explanations.
2. Published entries need an accessible source; X / Xiaohongshu entries should include author and date, and restricted leads must be marked unverified.
3. Popularity figures need a snapshot date (here: 2026-09-24).

PRs are welcome, especially for relevant material on Xiaohongshu, Jike, Bilibili, and other Chinese platforms.
