# Sources and verification log

> Audit date: **2026-09-22, Asia/Shanghai (UTC+8)**; **papers section added on 2026-09-24** (13 arXiv papers; method under “Paper search and evaluation reading”). All other sections keep the 09-22 snapshot.
> [English README](../README_EN.md) · [Catalog](CATALOG_EN.md) · [Research and evaluations](RESEARCH_EN.md) · [Getting started](INSTALLATION_EN.md) · [中文原文](SOURCES.md)

## Coverage and evidence levels

| Area | Material obtained in the last audit | What it does not establish |
|---|---|---|
| Official information | TypeSafe launch article, documentation, SDK changelog, status page; official material from four gateways and LangSmith Evals | That this repository reproduced the documentation's claims or that all gateway specifications match |
| X | Authors, dates, and readable text for **45 distinct posts**: 32 via X's official embed endpoint and 13 via the FxTwitter mirror | Exhaustive platform coverage, complete access to every long post or video, or reproduction of every demo |
| GitHub | Public API metadata for **51 repositories**, plus README or result files for selected new and older entries | That stars measure quality or every project's code was audited |
| Papers | Original pages for **six papers**, with HTML full text for the two directly relevant to the prior-work dispute (09-22 snapshot); **13 more added on 09-24** (first posted 09-19 to 09-22), each checked against the arXiv API for title, authors, and first-submission date, with content from abstracts | That these are Jev's official papers (still nonexistent) or that this repository reproduced the abstract numbers |
| Engineering and evaluation | Author blogs, experiment repositories, result reports, founder interview, and transcript | That scores from different samples, hardware, regions, and price definitions can be ranked together |
| Xiaohongshu | Search page, nine note links, and secondary indexes; **no verifiable note body text** | Complete platform coverage or confirmation of speed and cost claims in titles |

Main entries prefer official pages, authors' original posts, primary papers, and code. Aggregators, HN, and other Awesome lists were used to discover leads, then traced back to origins. Reposts do not become independent experiments; community hypotheses, self-reported results, and unverified leads are labeled.

## Primary sources for key facts

| Claim checked | Source and treatment |
|---|---|
| Launch date, RLCD positioning, vendor workflow evaluations | [TypeSafe launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev); speed and cost multipliers restricted to its measurement conditions |
| Model version, aliases, price, context, and input modalities | [Models](https://docs.typesafe.ai/models); SDK updates kept separate from model upgrades |
| `confidence` and Noul | [Confidence](https://docs.typesafe.ai/confidence); corrected an older “free-form self-rating” interpretation and noted that Noul has no separate confidence |
| 255 choices and capability boundaries | [Choice](https://docs.typesafe.ai/primitives/choice), [Jev 1.13 jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13); no claim that the API automatically switches to a two-stage selection |
| No waitlist and starting credit | [Official access announcement](https://x.com/typesafeai/status/2101786156572823624), [same-thread credit reply](https://x.com/typesafeai/status/2101786280946499671) |
| Python and JS usage | [Python changelog](https://docs.typesafe.ai/sdk/python/changelog), [JS SDK](https://docs.typesafe.ai/sdk/javascript); added 0.7.1, breaking changes, and distinct package name |
| Vercel integration and temporary offer | [September 16 integration announcement](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway), [September 19 original promotion](https://x.com/vercel_dev/status/2101116818463281579); no inferred cutoff time zone or unpublished account terms |
| Cloudflare / OpenRouter | [Cloudflare model page](https://developers.cloudflare.com/ai/models/typesafe/jev/), [OpenRouter model page](https://openrouter.ai/typesafe/jev-1.13), and [official beta announcement](https://x.com/OpenRouter/status/2100744709589316009) |
| LangSmith Evals / Gateway | [September 21 product announcement](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals), [decision-model docs](https://docs.langchain.com/langsmith/llm-gateway-decision-models); distinguished bring-your-own-key Jev from hosted SemIf and its September 28 promotion with region / plan restrictions |
| Service incidents | [Official status page](https://status.typesafe.ai/); the September 20 Console incident was marked resolved at 08:16 UTC on September 21, and the September 21 API incident at 23:40 UTC. On rereading, the page showed an update timestamp of 07:28 UTC on September 22 and the service online |
| The September 2026 paper wave (added 09-24) | The lead came from [PaperWeekly's September 23 roundup](https://mp.weixin.qq.com/s/kK3du8zji4fa_9chnBl7Dw); all 13 arXiv IDs were then checked one by one via the [arXiv API](https://export.arxiv.org/api/query) for title, authors, and first-submission date (13/13 matched, including exactly six first posted on 09-21). Content summaries and numbers come from the papers' abstracts. Five companion GitHub repositories had `full_name` and stars checked (09-24 snapshot); their code was not audited |
| Company and financing | [September 15 company press release](https://www.businesswire.com/news/home/20260915525333/en/); retained sourced facts and removed unverified valuation and biographical details |

These are dated snapshots. Recheck service status, aliases, rate limits, prices, and promotions before use.

## How X posts were checked

Where direct post pages were restricted, we first read X's public embed endpoint, such as the [embed data for the access announcement](https://cdn.syndication.twimg.com/tweet-result?id=2101786156572823624&lang=en&token=0). The [same post on FxTwitter](https://api.fxtwitter.com/status/2101786156572823624) was a supplementary third-party mirror, not a replacement for official evidence.

We checked post ID, author, time, and text, and linked selected entries to the original X URL. Embed output can truncate long posts, so we quote only accessible content and use linked repositories or articles for experimental details. Demos described as “reported by the author” were not run independently.

Dates for X entries use **UTC**. For example, the waitlist-removal post was published at **21:30 UTC on September 20**, which is **05:30 Beijing time on September 21**; these dates refer to the same announcement.

<a id="xiaohongshu-checks"></a>
## Xiaohongshu access log

We visited the [Jev search page](https://www.xiaohongshu.com/search_result?keyword=jev&source=web_explore_feed). It returned a search page title but no readable note results; that does not prove the search had no matches. Detail pages reported temporary unavailability, redirected to login, or timed out. No connected platform search plugin was available in that audit session.

Apart from the first lead from an older repository record, titles and index dates came from SMZDM reference lists [A](https://post.smzdm.com/p/ad798m6x/), [B](https://post.smzdm.com/p/a5ro30p3/), and [C](https://post.smzdm.com/p/aggqvg7m/). They were used only to discover links; **authors, publication dates, and note text were not verified against original platform content**.

| Indexed date | Note link / title lead | Access result |
|---|---|---|
| 09-20, older repository record | [“Computer control with CUA and Jev” (Chinese)](https://www.xiaohongshu.com/explore/6aaf844a000000001103379c) | Explore page unavailable; older share link redirected to login; previous attribution “北京月薪5k” could not be rechecked |
| 09-20, B | [“Jev went viral two days ago, and an open 0.5B model is already here!” (Chinese)](https://www.xiaohongshu.com/explore/6aaf83ef0000000012001034) | Unavailable; an HTTP success response contained an error page, not note text |
| 09-20, B | [“50× faster than Jev? Run it locally!” (Chinese)](https://www.xiaohongshu.com/explore/6aaff680000000000b0379c0) | Unavailable |
| 09-20, A | [“Jev explained in one video” (Chinese)](https://www.xiaohongshu.com/explore/6aaf548c000000000d025edf) | Unavailable |
| 09-18, C | [“Jev with Codex” (Chinese)](https://www.xiaohongshu.com/explore/6aace869000000002a024546) | Unavailable |
| 09-18, A | [“What is the Jev model?” (Chinese)](https://www.xiaohongshu.com/explore/6aac6d53000000002802a9ff) | Timed out |
| 09-16, A | [“Free output! Former OpenAI researcher releases a new model” (Chinese)](https://www.xiaohongshu.com/explore/6aa9fe26000000001001c25e) | Timed out |
| 09-16, A | [“RLHF researcher releases a model said to be 200× faster than LLMs” (Chinese)](https://www.xiaohongshu.com/explore/6aaa543600000000260385d5) | Timed out |
| 09-16, A | [“ChatGPT co-founder releases Jev” (Chinese)](https://www.xiaohongshu.com/explore/6aa9e5aa0000000028002b34) | Timed out |

We did not present “50×,” “200×,” or biographical titles as fact. A later addition needs verifiable author, date, note or video content, and measurement conditions for performance figures before moving to the selected list.

## Paper search and evaluation reading

- Checked the official launch article, [documentation index](https://docs.typesafe.ai/llms.txt), and publicly available technical material in the founder interview.
- The [arXiv search for “Jev TypeSafe”](https://arxiv.org/search/?query=Jev+TypeSafe&searchtype=all&abstracts=show&order=-announced_date_first&size=50) returned no results in that round. Supplemental searches for the exact RLCD expansion and OpenReview found no matching official paper. One separate arXiv exact-phrase search timed out; we did not count that failure as “zero results.”
- **09-24 papers addition:** the WeChat article was fully readable (direct HTML fetch), but it served only as a **lead**. The 13 papers were admitted after an [arXiv API `id_list` batch query](https://export.arxiv.org/api/query) confirmed each ID, title, author list, and first-submission date. The article's grouping (first applications / Jev-Anything / open alternatives and stress tests) and its “six papers on 09-21 alone” claim match the API response; the article named no authors, so author lists come from the API. Keyword site search may still miss items, so the 09-22 “no official paper found” conclusion is kept as-is.
- Read the two prior-work preprints, a calibration paper, LLaDA / iLLaDA, and a paper using RLCD for a different expansion. Metadata and relevance boundaries are in the [research guide](RESEARCH_EN.md).
- Checked the judge study's **five independent traces**, Archestra's model-judge agreement subset, JevBench's latency adjustments, and the Chinese study's **40 examples** and threshold selection.
- An initial fetch of `sysone-bench` from `main` failed; its default branch was `master`. We then read its README, two report versions, hardware information, and raw Jev JSON, yielding 541 states and 751 scored decisions. We neither called a paid API nor reran training or benchmarks.

## GitHub snapshot and corrections to older content

Stars came from the public `GET https://api.github.com/repos/{owner}/{repo}` endpoint's `stargazers_count`, with `full_name`, default branch, and description checked too. Metadata was obtained for 51 repositories. When later anonymous API requests hit rate limits, we stopped; missing numbers are shown as `—` rather than recycled old star counts. Features and experiment descriptions were checked against README and result files separately.

Corrections in that audit included:

- Vercel's adoption article was dated **September 18**, and Sean Goedecke's article **September 16**; HN indexing dates are marked separately.
- `AbdelStark/awesome-typesafe` redirected to `awesome-typesafe-jev`; the official JS repository is `typesafe-sdk-js`.
- Kev had expanded into a Qwen3.5 model family; jevlike was an independent research implementation; Reticle listed its Jev integration as planned, not shipped.
- A GitHub fork was not treated as proof of technical lineage; platform search totals were not counted as valid Jev projects; unverified like-count snapshots were removed.
- Aggregator entries dated after the audit were excluded; a news site's home page was not used as a source for a specific report.

Readable links, valid document syntax, and reproducible experiments are different levels of verification. This audit organized sources and checked documentation; service and community changes still need ongoing review.
