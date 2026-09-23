# Jev research and evaluation reading guide

> Source audit: **2026-09-22 (Asia/Shanghai)**. This guide separates official descriptions, academic papers, community implementations, and experimental results. This repository has not rerun paid inference or training experiments.
> [English README](../README_EN.md) · [Catalog](CATALOG_EN.md) · [Sources and coverage](SOURCES_EN.md) · [中文原文](RESEARCH.md)

## 1. Is there an official Jev paper?

**The last audit did not find a formally published TypeSafe technical paper on Jev / RLCD.** We checked the official launch article, documentation index, and an arXiv search for `Jev TypeSafe`, which returned no results. Additional searches for the full RLCD expansion and on OpenReview did not find a matching official paper. This is a search result, not proof that no relevant material exists anywhere.

- [Launch article, 2026-09-15](https://typesafe.ai/blog/introducing-system-one-models-and-jev): describes the training objective, parallel outputs, and workflow evaluations, but does not provide a complete training recipe.
- [AI primer](https://docs.typesafe.ai/introduction/machine-learning-primer): background for calibration as a training objective.
- [Model documentation](https://docs.typesafe.ai/models) and [Jev 1.13 known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13): current documented capabilities and limits.
- [Latent Space interview with founder Diogo Almeida, 2026-09-21](https://www.latent.space/p/jev): includes a transcript and design motivation; an interview does not replace a paper, training data, or reproducible experiments.

We therefore do not call community projects “reproductions of the official architecture” or infer Jev's underlying model from a GitHub fork.

## 2. Papers and their relationship to Jev

### Two preprints relevant to the prior-work discussion

| Paper | Author and first submission | Core contribution | Relationship and limit |
|---|---|---|---|
| [SalesRLAgent: A Reinforcement Learning Approach for Real-Time Sales Conversion Prediction and Optimization](https://arxiv.org/abs/2503.23303) | Nandakishor M; 2025-03-30; arXiv preprint | Predicts real-time conversion probability in sales conversations; describes text representations, a reinforcement-learning policy, and uncertainty estimation | Primary material in discussion of earlier decision models. Its task is sales conversion; it is neither a Jev paper nor a matched-condition Jev comparison |
| [Confidence-Aware Routing for Large Language Model Reliability Enhancement](https://arxiv.org/abs/2510.01237) | Nandakishor M; 2025-09-23; arXiv preprint | Combines semantic alignment, inter-layer convergence, and learned confidence to route requests to a local model, retrieval, a larger model, or a person | Relevant to confidence-based routing; does not establish that TypeSafe uses the same architecture. Date follows the paper's submission history rather than an inference from its identifier |

Read the architecture, experiments, and limits in the [SalesRLAgent full text](https://arxiv.org/html/2503.23303v1) and the [routing paper full text](https://arxiv.org/html/2510.01237v1). Both predate Jev's launch. Earlier work in a broad area, an identical implementation, and plagiarism are different claims; public evidence here does not establish the latter two.

### Calibration, non-autoregressive background, and acronym disambiguation

| Paper | Date / type | Why read it | Invalid inference |
|---|---|---|---|
| [On Calibration of Modern Neural Networks](https://proceedings.mlr.press/v70/guo17a.html) | Guo et al.; ICML 2017 | Explains the gap between high confidence and true accuracy, plus methods such as temperature scaling | Not a Jev training description; an API probability does not establish calibration on your data |
| [Large Language Diffusion Models (LLaDA)](https://arxiv.org/abs/2502.09992) | Nie et al.; 2025 research paper | A language-modeling route beyond autoregression | No official material found that establishes Jev is based on LLaDA |
| [Improved Large Language Diffusion Models (iLLaDA)](https://arxiv.org/abs/2606.25331) | Nie et al.; 2026-06-24 preprint | Bidirectional attention, masked-diffusion training, and multiple-choice scoring | Background reading, not a Jev update, open weights, or official paper |
| [RLCD: Reinforcement Learning from Contrastive Distillation for Language Model Alignment](https://arxiv.org/abs/2307.12950) | Yang et al.; 2023-07-24, revised 2024 | Language-model alignment using preference data from contrastive prompts | Its acronym expands differently from TypeSafe's **Reinforcement Learning for Calibrated Decisions**; do not conflate the papers or recipes |

## 3. Technical explanations: distinguish description from speculation

| Date | Primary material | What it offers | Reading boundary |
|---|---|---|---|
| 2026-09-21 | [Simon Willison: Jev introduces a new shape of LLM](https://simonwillison.net/2026/Sep/21/jev/) | Decision interface, search reranking, and interpretability with numeric-only output | Author's analysis and trial observations, not a standardized benchmark |
| 2026-09-21 | [Di Zhang: What Is RLCD? The Secret Behind Jev](https://di-zhang-llm.github.io/blog/what-is-rlcd-the-secret-behind-jev/) | Hypothesis using preference modeling, Plackett–Luce distributions, and calibration | **Community architecture hypothesis**; its equations are not a TypeSafe-disclosed training algorithm |
| 2026-09-17 | [LangChain: Building a Harness with Jev](https://www.langchain.com/blog/building-a-harness-with-jev) | Model routing and decisions before tool execution | Integration tutorial, not evidence that the model replaces permissions or a sandbox |
| 2026-09-16 | [Sean Goedecke: Jev means structured output is interesting again](https://www.seangoedecke.com/jev-means-structured-output-is-interesting-again/) | Structured decision interfaces and possible open-model approaches | Engineering opinion, not proof that implementations share training, calibration, or performance |

## 4. Inspectable evaluations and the scope of their numbers

The table summarizes authors' public material. **It does not combine different datasets, hardware, prompts, or billing definitions into a leaderboard.**

| Source | What was measured | Published result / inspectable material | Main limitation |
|---|---|---|---|
| [TypeSafe workflow evals](https://evals.typesafe.ai/) and [methodology](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | Four workflows, using average probabilities from strong models as reference | The site's 193.6× / 444.6× claims come from these workflows | Vendor-run; the reference is not independent human ground truth. TypeSafe says the multipliers lean toward the high end of real-world gains; they are neither universal accuracy nor universal speedup |
| [Jev as a judge](https://github.com/danielgshea/jev-as-a-judge) and [September 20 article](https://www.langchain.com/blog/jev-agent-evals-langsmith) | **Five fixed weather-agent traces × 100 repetitions**, with one human annotator | Authors report all 500 binary Jev judgments matched the annotations, mean latency 0.44 seconds, and roughly $0.00035 per judgment; code and study description are available | Not 500 independent cases. LLMs used provider-default sampling; metadata did not record the actual Jev service version. Repeat stability is not probability calibration |
| [Archestra: 100 real agent calls](https://archestra.ai/blog/we-tested-jev-on-100-real-agent-calls) | 100 tool calls × four labels; reports only **337/400** decisions on which three model judges agreed | Authors report roughly 93% zero-shot and 95% nine-shot for Jev; majority-class baseline is 79%; also checks repeat calls and option permutations | Labels are mainly a model-judge consensus, not full human gold labels; 63 disputed decisions were excluded. Recall on nine dangerous calls alone cannot establish safety performance |
| [JevBench](https://github.com/fstandhartinger/jevbench) · [results file](https://github.com/fstandhartinger/jevbench/blob/main/RESULTS-v1.2.md) | Scoring description v1.3.0 at audit time; 534 decisions per complete system | Public tasks, adapters, per-question results, and scoring code across capability, calibration, speed, and cost | Composite score is not accuracy. Some self-hosted latency is multiplied by two and the author's server gets 0.15 seconds added to simulate load; these are modeling assumptions, so read raw latency. File name says v1.2 while body describes v1.3.0 |
| [laya-jev-lab](https://github.com/yibie/laya-jev-lab) | 40 Chinese-language support tickets; local Laya on M4 Max and Jev API | Jev 31/40, Laya 23/40; a cascade with 0.60 threshold reached 31/40 on the same samples, reducing mean latency from 588 ms to 327 ms | Small sample with disputed labels; threshold chosen on the same data, so no independent-test benefit established. Author explicitly withdrew two earlier small-sample conclusions |
| [sysone-bench](https://github.com/instax-dutta/sysone-bench) and [report with September 22 updates](https://github.com/instax-dutta/sysone-bench/blob/master/FEEDBACK_REPORT.md) | Nine task groups, 751 scored decisions; Jev pinned to 1.13.0, local Laya / Router / constrained-decoding Qwen on M2 | Same-question hashes and raw results. Jev leads on many tasks; Laya scores higher on AG News and MNLI subsets; routed Laya improves multilingual results | Single-author labels and small subsets of public datasets; v1 cannot be mixed with v2–v4 metrics. README labels the decision count “states”; see count check below |
| [Kev](https://github.com/jaredpalmer/kev) | Its own development / test split, public model cards and training recipe | Current README includes Qwen3.5 0.8B / 4B / 9B; original Qwen2.5-0.5B was a historical prototype | Jev comparison covers only some development sets, without corresponding test-set scores; do not combine splits into a superiority claim |
| [Laya](https://github.com/NandhaKishorM/laya) | Open decision model and multilingual routing | Weights, implementation, and author evaluations support local experiments | Some Jev figures in author tables came from external tests with different prompts and sample counts. “No local API fee” does not mean zero hardware or operations cost |

**Count check for sysone-bench:** We summed the groups in its [raw Jev result JSON](https://github.com/instax-dutta/sysone-bench/blob/master/results/run_jev-1.13.0_20260921-212125.json): `states = 541` and `decisions = 751`. For example, triage had 40 states and 160 scored decisions. We therefore do not repeat the README's “751 states.” This is arithmetic on published files, not a new model run. The feedback report includes v2–v4 additions; the earlier `REPORT.md` covers only three author-created task groups.

**Separate the experiment from the product release:** The [September 21 LangSmith announcement](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) adds a configurable Jev evaluator and cites the five-trace experiment above. It is not a new independent accuracy validation.

## 5. Probabilities and known limitations

The [official Confidence guide](https://docs.typesafe.ai/confidence) says Choice / Score `confidence` is calculated from the returned probability distribution and summarizes its concentration. It is not an answer to a separate free-form “how sure are you?” question. **Noul returns no separate `confidence`.** A concentrated distribution does not itself prove correctness on a real task.

The [official jaggedness guide](https://docs.typesafe.ai/model-jaggedness/jev-1.13) lists nine weakness areas: literal interpretation, numerical computation, date comparison, multi-step indirect reasoning, irrelevant long context, adversarial content, instruction/option conflicts, failure to satisfy expected identities across questions, and text generation. For instance, probabilities for two separately asked opposite Noul questions may not sum to one. A threshold tuned for one phrasing should not be transferred blindly to another.

Constraining output types narrows the answer space, but the model can still choose incorrectly, be affected by prompt injection, or miss context. Put arithmetic, time comparisons, action permissions, and business invariants in deterministic code; use the model for narrow semantic judgments that are hard to express as rules.

## 6. Minimum information to record when checking a new evaluation

1. **Data:** Independent sample count, language, class distribution, human or model judges, and train/test split.
2. **Version:** Actual response model ID, SDK version, prompts, candidates, and candidate order.
3. **Quality:** Per-class errors, refusal coverage, and probability calibration in addition to accuracy; give sample counts for sparse probability bins.
4. **Performance:** End-to-end p50 / p95, concurrency, input length, question count, network region, and local hardware.
5. **Cost:** Distinguish per-token, per-request, and per-question costs; record promotions, retries, and self-hosting estimates.
6. **Reproduction:** Link raw results and code; keep failure cases; tune thresholds on validation data and confirm on an independent test set.

This is a reading and contribution checklist, not a claim that this repository performed those experiments.
