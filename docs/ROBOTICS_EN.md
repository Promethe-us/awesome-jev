# Jev on Robotis / Robotics

**Language / 语言: [简体中文](ROBOTICS.md) · English**

> Verified through **2026-09-27 (Asia/Shanghai)**. This page collects public Jev projects involving robots or embodied systems. “Robotis” remains the requested search term; it is **not** evidence of a Jev integration by the ROBOTIS brand.

## The short version

In robotics, Jev belongs in low-rate, bounded semantic decisions: choose an available skill, decide whether to retry, triage an event, rank candidate actions, or request human intervention. It does not read pixels, plan continuous motion, execute joint control, or own the final safety decision.

```text
sensors / vision -> state estimation -> Jev: bounded judgment -> registered skill
       \             timestamps + freshness + confidence            /
        -------------------- deterministic safety and control -------
```

When observations are stale, confidence is low, measurements conflict, or the outcome affects people or equipment, deterministic code should reject, hold, slow down, or escalate. Jev `confidence` is not the probability an action succeeds; calibrate thresholds on separate records. [Known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13) · [Confidence](https://docs.typesafe.ai/confidence)

## Reading labels

| Label | Meaning |
| --- | --- |
| **Simulation run** | The project provides a runnable simulation, code, or an author record; it is not real-robot validation |
| **Author measurement** | Method or results are public, but apply only to that environment, task, and baseline |
| **Design stage** | The interface or evaluation plan exists; no integration or result has been reported |

## Projects

| Project | Label | What Jev does | What to inspect | Do not infer |
| --- | --- | --- | --- | --- |
| [jev-drone](https://github.com/RomanSlack/jev-drone) | **Simulation run; mainly a single demonstration** | Tactical choices at roughly 2.5 Hz in a MuJoCo drone: route around, climb, brake, or reacquire | Vision turns depth and segmentation into symbols; 500 Hz flight control and a 50 Hz safety reflex remain ordinary code | It is not end-to-end vision, a flight controller, or a general flight benchmark; the author reports high run variance |
| [jev-arm-lab](https://github.com/Vankleben/jev-arm-lab) | **Simulation run; author measurement** | Skill selection, grasp security, and task progress for simulated xArm7 pick-and-place | One three-question call, JSONL logging, fault injection, freshness gates, and deterministic vetoes | Its scene, sample sizes, and thresholds do not transfer to a physical arm or another task |
| [jev-robotics-demo](https://github.com/FazalAAli/jev-robotics-demo) | **Simulation prototype; one recorded run per side** | Chooses proposed small moves plus grasp, release, and completion decisions for a MuJoCo Franka + Allegro hand | Code samples and simulates candidate moves ahead; Jev judges among candidates | Two recorded trajectories do not establish general speed, cost, or control quality |
| [JEV-Drive](https://github.com/CATS-Lab/JEV-Drive) | **Simulation run; partial rollout record** | Chooses speed and steering changes from AlpaSim's structured ego, lane, actor, navigation, and traffic-control state; MPC and vehicle dynamics execute the reference trajectory | README supplies a 65-decision-frame, 12.8-second partial Score rollout plus installation, output, and state-field documentation | Requires Linux, AlpaSim, and separately obtained scene data. The author explicitly says it is not the Alpamayo model; a local rollout is not road-safety, full-scene, or real-vehicle validation |
| [OmniJev](https://github.com/tinnel123666888/OmniJev) | **Offline replays; open weights and code** | Answers `choice`, `score`, and `noul` questions about images, video, screens, and robot scenes in one forward pass | The repository publishes 0.8B, 2B, and 4B weights, inference code, demos, and evaluation details; its README explicitly identifies robot demos as offline replays | Reliable closed-loop robot control has not been established; its training manifest is still being audited and some results are not matched official benchmarks |
| [Jev for Physical AI](https://github.com/robokrunch/jev-physical-ai) | **Author measurement; simulated incidents** | Warehouse-AMR incident triage, ownership, and urgency scoring | 300 templated incidents, three concurrent questions, result files, and reproducibility notes | It is not a real fleet, production accuracy claim, or measured GPT-4o-mini quality / latency comparison |
| [Jev + VLA](https://github.com/Alpha-Harper-Franklin/jev-vla) | **Design stage** | Detects failures at VLA action boundaries and selects retry, recovery skill, or replanning | A concrete observation-history-skills interface and a matched-information evaluation plan | It explicitly has no working adapter, VLA integration, simulator run, or measured recovery result |
| [jev-robotics-radar](https://github.com/Rosequan/jev-robotics-radar) | **Runnable research tool** | Classifies public company-homepage text by segment and four score dimensions | The rubric is public and the project clearly describes the output as an interpretation of marketing copy | It is not a robot-control system, verified company research, or investment advice |

## A defensible decision loop

1. **Keep continuous control in a controller.** Let Jev choose from skills such as `hold`, `retry_grasp`, `reobserve`, or `request_help`, never torques or unconstrained prose.
2. **Include time and provenance in state.** Record sensor timestamps, last action, duration, quality flags, and constraints. Freshness is easier to audit than another prompt.
3. **Separate questions from rules.** Jev can answer “which available skill is most suitable?”; code should enforce hard stops, freshness checks, grasp gates, and escalation.
4. **Evaluate trajectories, not screenshots.** Compare no-Jev, rules, generative-model recovery, and Jev recovery under matched observations, skills, seeds, and stop conditions. Report completion, dangerous false allows, unnecessary interventions, latency, cost, and failure traces.

## On ROBOTIS

This update checked `Jev Robotis`, `Jev ROBOTIS`, `site:github.com/ROBOTIS-GIT Jev`, and GitHub repositories. No citable first-party ROBOTIS integration was found, so this page does not present “Robotis” as a product case. A future contribution should include the hardware model, observations, Jev questions, actuator safety boundary, environment, and an explicit simulation / physical-hardware label.

## Further reading

- [TypeSafe System One concept](https://docs.typesafe.ai/concepts/system-one)
- [Model limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
- [REFLEX with Jev](https://arxiv.org/abs/2609.26532), an agent architecture paper whose results remain limited to its protocol
- [Research & evaluations](RESEARCH_EN.md)

The selected repositories and metadata were checked on 2026-09-27. Stars and author demos are not quality rankings. See the [source audit](SOURCES_EN.md).
