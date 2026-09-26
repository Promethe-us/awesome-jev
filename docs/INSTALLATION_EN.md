# Getting Started with Jev

> Source audit: **2026-09-22 (Asia/Shanghai)**. API shapes and examples follow the [official Quick start](https://docs.typesafe.ai/introduction/quickstart). We reviewed documentation but did not make paid inference calls with an account key. See also [model specifications](https://docs.typesafe.ai/models) and the [source audit](SOURCES_EN.md).
> [English README](../README_EN.md) · [中文指南](INSTALLATION.md)

## 0. Sign in directly; no waitlist

1. Open the official [Console](https://console.typesafe.ai) and sign in. TypeSafe announced the end of its waitlist at **21:30 UTC on September 20 / 05:30 Beijing time on September 21**. Waitlist steps in earlier tutorials are outdated. [Announcement](https://x.com/typesafeai/status/2101786156572823624)
2. An official reply in the same thread announced **$5 starting credit** per user. Check the Console for whether it has been granted and for account terms. [Credit reply](https://x.com/typesafeai/status/2101786280946499671)
3. If the Console or API has an incident, check the [official status page](https://status.typesafe.ai/). That is a separate issue from waitlist access.

## 1. Try the Playground without code

1. Open and sign in to the [Playground](https://console.typesafe.ai/playground).
2. Paste any text as the **state**, such as a support ticket.
3. Add questions of type Noul, Choice, or Score; one call can return all of them.
4. Inspect the probabilities. Choice and Score also return `confidence`; Noul has no separate `confidence` field.

## 2. Get an API key

Create a key at [console.typesafe.ai/keys](https://console.typesafe.ai/keys) and put it in an environment variable:

```bash
export TYPESAFE_API_KEY="your-key"
```

## 3. Call the API directly with cURL

Endpoint: `POST https://api.typesafe.ai/v1/systemone`

```bash
curl -X POST https://api.typesafe.ai/v1/systemone \
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \
  -H "Content-Type: application/json" \
  -d @- <<'EOF'
{
  "state": "Hi, I've been trying to connect my Stripe account for 3 days and the integration keeps failing. I'm losing sales. Please help ASAP.",
  "model": "jev-latest",
  "questions": {
    "department": {
      "type": "choice",
      "instructions": "Which team should handle this",
      "criteria": {
        "billing":   "Payment or subscription issues",
        "technical": "Bugs or integration problems",
        "sales":     "Pricing or account questions"
      }
    },
    "frustration": {
      "type": "score",
      "instructions": "How frustrated the customer appears",
      "criteria": [
        "Calm, just stating facts",
        "Frustrated but civil",
        "Very angry, strong language"
      ]
    },
    "is_urgent": {
      "type": "noul",
      "instructions": "The message conveys urgency or time-sensitivity"
    }
  }
}
EOF
```

Illustrative response (the numbers are examples; actual responses vary; Noul returns only a “yes” probability):

```json
{
  "model": "jev-1.13.0",
  "answers": {
    "department": {
      "type": "choice",
      "choice": "technical",
      "confidence": 0.78,
      "probabilities": { "technical": 0.85, "sales": 0.0, "billing": 0.15 }
    },
    "frustration": {
      "type": "score",
      "score": 1.0,
      "confidence": 1.0,
      "probabilities": { "0": 0.0, "1": 1.0, "2": 0.0 }
    },
    "is_urgent": { "type": "noul", "noul": 1.0 }
  },
  "usage": { "input_tokens": 392, "output_tokens": 65 }
}
```

## 4. Python SDK

Requires Python **3.10 or newer**:

```bash
pip install typesafe-sdk      # or: uv add typesafe-sdk
```

```python
from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

client = TypeSafeClient()  # Reads TYPESAFE_API_KEY; defaults to jev-latest

response = client.system_one(
    state="Hi, my Stripe integration keeps failing. Losing sales. ASAP!",
    questions={
        "department": Choice(
            instructions="Which team should handle this",
            criteria={
                "billing":   "Payment or subscription issues",
                "technical": "Bugs or integration problems",
                "sales":     "Pricing or account questions",
            },
        ),
        "frustration": Score(
            instructions="How frustrated the customer appears",
            criteria=["Calm", "Frustrated but civil", "Very angry"],
        ),
        "is_urgent": Noul(
            instructions="The message conveys urgency"
        ),
    },
)
print(response.answers["department"].choice)        # technical
print(response.answers["department"].probabilities) # probability per option
```

See the [API Reference](https://docs.typesafe.ai/api) for complete details.

### SDK version changes

- **Python 0.7.1 (09-21):** Checks key configuration earlier and keeps key values out of exception logs.
- **Python 0.7.0 (09-18):** Moved serialization from `msgspec` to `pydantic` and added `response_model`; review types and response handling when upgrading existing code.
- **0.6.0:** `Score.criteria` changed to an ordered sequence. The example above uses a list rather than the old integer-keyed dictionary shape.

Source: [Python changelog](https://docs.typesafe.ai/sdk/python/changelog). SDK releases do not imply a model update; consult [Models](https://docs.typesafe.ai/models).

### JavaScript / TypeScript SDK

Requires **Node.js 20 or newer** and a separate official package:

```bash
npm install @typesafe-ai/sdk
```

```javascript
import { choice, TypeSafeClient } from "@typesafe-ai/sdk";

const service = new TypeSafeClient();
const result = await service.systemOne({
  state: { request: "Please help me reset my account password." },
  questions: {
    queue: choice("Select the support queue for this request.", {
      account: "Account access and credentials",
      billing: "Invoices and payments",
      other: "Requests outside these categories",
    }),
  },
});
console.log(result.model, result.answers.queue);
```

The client reads `TYPESAFE_API_KEY`. Python calls `system_one`; JavaScript calls `systemOne`. Do not interchange their syntax. [Official JS documentation](https://docs.typesafe.ai/sdk/javascript)

## 5. Install the TypeSafe Agent Skill

**Claude Code, through its plugin marketplace:**

```bash
claude plugin marketplace add typesafe-ai/skills
claude plugin install typesafe@typesafe-ai
# You can then explicitly invoke /typesafe:typesafe-ai
```

**Other agents, including Codex, Cursor, and Copilot, through skills.sh:**

```bash
npx skills add typesafe-ai/skills --skill typesafe-ai
```

After installation, you can say “use the TypeSafe skill” in your prompt. For example:

> Use TypeSafe to route incoming support tickets by department, with human review for uncertain decisions.

- Skill source: <https://github.com/typesafe-ai/skills>
- Installation guide: <https://docs.typesafe.ai/agent-skill>

## 6. Other access channels and local alternatives

TypeSafe publishes [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python), which provides a similar `TypeSafeClient` interface using an LLM API. It still requires that provider's credentials and does not inherit Jev's performance or calibration.

| Channel | Verified entry point | Request and billing notes |
|---|---|---|
| Vercel AI Gateway | `typesafe-ai/jev`; `experimental_evaluate` | Gateway Boolean differs from native Noul; [official integration guide](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| Cloudflare | `typesafe/jev`; `env.AI.run` | Third-party model page listed a 32,000 context window; check its console for charges. [Model page](https://developers.cloudflare.com/ai/models/typesafe/jev/) |
| OpenRouter | [Jev 1.13 model page](https://openrouter.ai/typesafe/jev-1.13) | Beta integration confirmed by an [official announcement](https://x.com/OpenRouter/status/2100744709589316009); follow its current decision-interface instructions, not a generic chat request |
| LangSmith Gateway | `typesafe/jev-1.13.0`; `/v1/systemone` | Store the TypeSafe key as a workspace provider secret; the client uses `LANGSMITH_API_KEY`. [Decision-model docs](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |

**Promotions are separate:** Vercel's [model page](https://vercel.com/ai-gateway/models/jev) says the promotion was scheduled to end on September 25, 2026, yet still displayed Free on September 26. This is distinct from TypeSafe's direct rate; check your account billing for the applicable price. No paid account was tested here.

For local inference, consider independent models such as [Laya](https://github.com/NandhaKishorM/laya) and [Kev](https://github.com/jaredpalmer/kev); they are not official Jev weights. See the [research guide](RESEARCH_EN.md) for comparison conditions.

### LangSmith online evaluations and hosted SemIf

The [September 21 announcement](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals) gives setup steps for Jev-as-a-judge: save a TypeSafe key under Settings → Provider secrets; in a tracing project's Evaluators, add an LLM-as-a-Judge Evaluator, select TypeSafe / `jev-latest`, and configure `state` and typed questions. Each question maps to a feedback field.

When calling Jev through Gateway, set the TypeSafe SDK base URL to `https://gateway.smith.langchain.com` **without appending `/v1`**. Use a LangSmith key as the client credential and `typesafe/jev-1.13.0` as the model name. The prefix differs from direct TypeSafe access.

Gateway also hosts **SemIf** (`semif-qwen3.5-4b`). Its docs said the model was free through **September 28** for eligible US organizations on Free, Developer, or Plus plans; access, rate, and budget policies still apply. SemIf is a separate open model, and its promotion does not apply to Jev calls made with your own TypeSafe key. Check the [official documentation](https://docs.langchain.com/langsmith/llm-gateway-decision-models) for request and account terms.

## 7. Common patterns from the official docs

| Pattern | In brief | Documentation |
|---|---|---|
| Speculative fan-out | Ask N questions, including speculative ones, in one call; code chooses which answers to use | [patterns/fan-out](https://docs.typesafe.ai/patterns/fan-out) |
| Confidence-gated routing | The answer says what to do; validated confidence policy decides whether to execute or refer to a human | [patterns/confidence-routing](https://docs.typesafe.ai/patterns/confidence-routing) |
| Composite scoring | Split a complex judgment into atomic Scores and combine them with weights | [patterns/composite-scoring](https://docs.typesafe.ai/patterns/composite-scoring) |
| Intent routing | Route by intent to deterministic logic, a specialist LLM, or a person | [patterns/intent-routing](https://docs.typesafe.ai/patterns/intent-routing) |

## 8. Practical cautions

- **Version:** At the last audit, `jev-latest` and `jev-preview` both pointed to `jev-1.13.0`. Pin a version and record the returned `model` for comparable results; aliases can move. [Models](https://docs.typesafe.ai/models)
- **Budget and input:** 64k tokens per request, 32k for `state` plus the longest question. Text only, with no direct image, audio, or video input. Test Chinese performance on your own samples. [Models](https://docs.typesafe.ai/models)
- **Options:** Choice supports up to 255 options. Beyond that, design your own hierarchy or candidate filter; the API does not promise automatic restructuring. Add `other` / `unknown` if your options are not exhaustive. [Choice](https://docs.typesafe.ai/primitives/choice)
- **Confidence:** Choice / Score `confidence` is derived from the probability distribution, not a free-form self-assessment; Noul has no such field. Validate thresholds for the task. [Confidence](https://docs.typesafe.ai/confidence)
- **Rate limits:** The model page listed 250,000 tokens/second and 1,200 requests/minute, subject to dynamic change. Handle `429` and `retry-after` without multiplying concurrency through retries. [Models](https://docs.typesafe.ai/models)
- **Capability boundaries:** Check arithmetic, dates, and cross-question invariants in code. Correct output types can still contain semantic errors or be affected by adversarial input. [Known limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
- **Direct price:** $0.042 per million input tokens; output tokens were not billed. Examples and promotions do not promise future pricing. [Models](https://docs.typesafe.ai/models)
