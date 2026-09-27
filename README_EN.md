<div align="center">

# awesome-jev

**A source-backed field guide for understanding, building with, and evaluating Jev.**

Prefer the web guide? Click the logo to open it.

<a href="https://promethe-us.github.io/awesome-jev/" aria-label="Open the awesome-jev web guide">
  <img src="docs/assets/jev-guide-mark.svg" alt="Open the awesome-jev web guide" width="250" />
</a>

[Start building](docs/HANDS_ON_EN.md) · [Robotics](docs/ROBOTICS_EN.md) · [Research & evaluations](docs/RESEARCH_EN.md) · [Full catalog](docs/CATALOG_EN.md) · [Source audit](docs/SOURCES_EN.md)

[简体中文](README.md) · English

</div>

> Community-maintained and not affiliated with TypeSafe AI. Each entry states what its source establishes; a link, demo, or author-reported number is never treated as a general capability claim.

## Start here

| Your question | Read this first | Why |
| --- | --- | --- |
| Is Jev a fit for my task? | [The 30-second fit check](#make-the-fit-check-first) | Separate bounded judgment from text generation before integrating anything |
| Can I make my first call today? | [Hands-on Jev](docs/HANDS_ON_EN.md) | A path from Playground and key setup to a verifiable Python or TypeScript call |
| How do I use it in an agent or app? | [Installation & integrations](docs/INSTALLATION_EN.md) · [Catalog](docs/CATALOG_EN.md) | Official SDKs, gateways, and framework integrations are kept distinct |
| What exists in robotics? | [Jev on Robotics](docs/ROBOTICS_EN.md) | Simulation, measured prototypes, and design-only projects are labelled separately |
| How should I read the performance claims? | [Research & evaluations](docs/RESEARCH_EN.md) | Methods, data, and limits on generalization stay with the claims |

## Make the fit check first

Jev takes state plus bounded questions and returns `Choice`, `Score`, or `Noul`. It is intended for routing, filtering, ranking, risk gates, and escalation decisions. Text generation, complex reasoning, arithmetic, permissions, and safety-critical actions still belong to generative models or deterministic code. Start with TypeSafe's [System One concept](https://docs.typesafe.ai/concepts/system-one) and [known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13).

| If you need to ask… | Start with | A sound default |
| --- | --- | --- |
| “Which queue owns this?” | `Choice` | Make options mutually exclusive and include `other` / `unknown` |
| “Which severity band applies?” | `Score` | Use ordered, observable rubric definitions |
| “Should this be reviewed by a person?” | `Noul` | Select your own threshold on validation data; it has no separate `confidence` field |

## New sections

### Jev on Robotis / Robotics

“Robotis” is retained as the requested search term. As of **2026-09-27**, this collection has not found a verifiable Jev integration from the ROBOTIS brand. The section therefore uses the accurate **Robotics** label rather than presenting a brand integration as established.

- [Jev on Robotics](docs/ROBOTICS_EN.md): drones, robot arms, fleet triage, and VLA recovery, with simulation, prototype, and design-stage status clearly marked.
- [jev-drone](https://github.com/RomanSlack/jev-drone): a MuJoCo drone where Jev makes tactical choices at roughly 2.5 Hz while perception, flight control, and safety vetoes remain separate.
- [jev-arm-lab](https://github.com/Vankleben/jev-arm-lab): task-level decisions and sensor-freshness gates for a simulated xArm7, with logs and a failure map.
- [Jev + VLA](https://github.com/Alpha-Harper-Franklin/jev-vla): a recovery interface and evaluation plan only; it explicitly has no working integration or reported result yet.

### Hands-on Jev

The learning path treats a valid structured answer as the beginning, not the end. It covers task selection, Playground exploration, state and question design, SDK integration, conservative low-confidence handling, and a held-out validation set.

→ [Open Hands-on Jev](docs/HANDS_ON_EN.md)

## The library

| Topic | Contents | Evidence standard |
| --- | --- | --- |
| [Official resources & access](docs/INSTALLATION_EN.md) | API, SDKs, gateways, Agent Skill, and patterns | Primary documentation and maintainer code first |
| [Ecosystem catalog](docs/CATALOG_EN.md) | Frameworks, agents, browsers, automation, and open alternatives | A project listing, not a code audit or performance endorsement |
| [Research & evaluations](docs/RESEARCH_EN.md) | Papers, benchmarks, independent experiments, and failure modes | Keeps the setup and boundary of each result |
| [Community leads & source audit](docs/SOURCES_EN.md) | How X, Xiaohongshu, Zhihu, and other sources were collected | Material without accessible primary evidence remains a lead |

## Web edition

The repository includes a build-free static front end: [open the navigation page](docs/index.html). After pushing, set GitHub Pages to deploy `/docs` from `main`; its default address will be:

`https://promethe-us.github.io/awesome-jev/`

The page offers topic filtering, a clear learning path, and evidence labels. Markdown remains the durable, searchable reference layer.

## Contributing

Please include the original source and identify whether it is official documentation, runnable code, an author experiment, third-party analysis, or an unverified lead. Quantitative claims need their data, version, baseline, environment, and method; unqualified “faster”, “better”, or “cheaper” claims are not conclusions.

See the [source audit and inclusion criteria](docs/SOURCES_EN.md).

## License

[MIT](LICENSE)
