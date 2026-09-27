# Hands-on Jev

**Language / 语言: [简体中文](HANDS_ON.md) · English**

> The goal is not merely one successful API request. Build a small, testable decision loop: clear input, understandable output, a low-confidence fallback, and a record you can inspect. For current syntax, follow the [official Quickstart](https://docs.typesafe.ai/introduction/quickstart) and [API reference](https://docs.typesafe.ai/api).

## The path

| Step | Deliverable | Question to answer |
| --- | --- | --- |
| 1. Pick a narrow task | One-sentence task definition | Is this text generation or a bounded judgment? |
| 2. Explore in Playground | 3–10 representative samples | Are state and question specific enough? |
| 3. Define state and questions | Versioned JSON or code object | Are candidates, levels, and unknown cases explicit? |
| 4. Add an SDK call | Repeatable minimal call | How will software consume the typed answer? |
| 5. Add policy | A low-confidence fallback and log | Who owns final action authority? |
| 6. Validate on held-out data | Failures and a threshold record | Does the threshold hold on unseen cases? |

## 1. Choose the first task well

Start with known state, a limited answer space, and a safe fallback. For example: route a support request to `billing`, `technical`, `account`, or `other`, then send uncertain cases to a person.

Avoid starting with reply writing, long summaries, complicated arithmetic, permission approval, or physical / medical / financial safety actions. A type-correct answer can still be semantically wrong. [Known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)

## 2. Inspect real answers in Playground

1. Sign in to [TypeSafe Console](https://console.typesafe.ai), subject to the availability and credits shown there.
2. Open the [Playground](https://console.typesafe.ai/playground).
3. Paste one representative state, ask one question, then compare `Choice`, `Score`, and `Noul` on the same state.
4. Save difficult cases: missing facts, overlapping classes, hostile instructions, Chinese text, dates, and numbers.

Use Playground to design questions, not to prove performance. Changing a question, candidate, or rubric can change the output distribution.

## 3. Pick the primitive

| Primitive | Good question | Default design |
| --- | --- | --- |
| `Choice` | “Which known category applies?” | Use exclusive options and include `other` / `unknown`; one question supports up to 255 options |
| `Score` | “Which ordered band applies?” | Define observable levels from low to high |
| `Noul` | “Is this proposition true?” | It returns the probability of yes and has no separate `confidence`; validate your own threshold |

Keep state to facts needed for the question and retain field names, sources, timestamps, and uncertainty. Treat untrusted document text as data, never as an instruction that can rewrite the task or business rules.

## 4. First Python call

Keep the key in an environment variable, never in source or examples:

```bash
export TYPESAFE_API_KEY="your-key"
pip install typesafe-sdk
```

```python
from typesafe_sdk import Choice, Noul, TypeSafeClient

client = TypeSafeClient()
result = client.system_one(
    state={"message": "My invoice was charged twice. Please fix this today."},
    questions={
        "queue": Choice(
            instructions="Choose the owning support queue.",
            criteria={
                "billing": "Invoices, payments, refunds, or duplicate charges.",
                "technical": "Product bugs, integration errors, or outages.",
                "account": "Access, identity, or account settings.",
                "other": "The message does not fit the listed queues.",
            },
        ),
        "needs_human": Noul(
            instructions="A human should review this before any automated reply."
        ),
    },
)

queue = result.answers["queue"]
action = "human_review" if (
    result.answers["needs_human"].noul >= 0.5 or queue.confidence < 0.70
) else f"route:{queue.choice}"
print({"model": result.model, "action": action, "queue": queue.choice})
```

`0.70` is only an example. Pin the version for comparisons, log the model actually returned, and choose a threshold on independent validation data. [Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) · [Confidence](https://docs.typesafe.ai/confidence)

## 5. First TypeScript call

```bash
npm install @typesafe-ai/sdk
```

```ts
import { choice, TypeSafeClient } from "@typesafe-ai/sdk";

const client = new TypeSafeClient();
const result = await client.systemOne({
  state: { message: "I cannot reset my password." },
  questions: {
    queue: choice("Choose the support queue.", {
      account: "Credentials, identity, or account access.",
      billing: "Invoices or payment issues.",
      other: "Anything outside these choices.",
    }),
  },
});
console.log(result.answers.queue);
```

Python uses `system_one`; JavaScript / TypeScript uses `systemOne`. Keep their SDK APIs separate. See the current [JavaScript documentation](https://docs.typesafe.ai/sdk/javascript).

## 6. Turn output into controlled behaviour

1. Validate input length, format, source, sensitive fields, and timestamps in code.
2. Send unknown or low-confidence outcomes to a person, a rule fallback, or a better-suited model.
3. Log a state summary, question version, option order, response model, probabilities, threshold, final action, and human correction.
4. Keep authority for billing, writes, deletion, messaging, and device control in auditable code.

The official [confidence-gated routing](https://docs.typesafe.ai/patterns/confidence-routing) and [intent routing](https://docs.typesafe.ai/patterns/intent-routing) patterns are useful next reads; they do not replace validation data.

## 7. Validate it

Use cases that did not shape the design. Check class coverage, `other`, Chinese and abbreviated text, negation, missing fields, dirty data, prompt injection text, option-name / order sensitivity, low-confidence fallback, high-confidence errors, p50 / p95, retries, region, and questions per call.

Read the `Type-Safe Is Not Error-Free` study and the Chinese customer-service experiment in [Research & evaluations](RESEARCH_EN.md) as concrete risks to test, not as predictions of your result.

Next: [Installation & integrations](INSTALLATION_EN.md), [Ecosystem catalog](CATALOG_EN.md), [Jev on Robotics](ROBOTICS_EN.md), or [Research & evaluations](RESEARCH_EN.md). For community pattern examples prepared for coding agents, see [Building with TypeSafe Jev](https://github.com/aaddrick/building-with-typesafe-jev). It is a third-party skill with multilingual material and a 150+ project index, not a TypeSafe endorsement; its index count is not a count of verified integrations.
