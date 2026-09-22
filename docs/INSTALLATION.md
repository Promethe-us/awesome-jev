# Jev 上手指南（Getting Started with Jev）

> 核验日期：**2026-09-22（Asia/Shanghai）**。接口和示例依据[官方 Quick start](https://docs.typesafe.ai/introduction/quickstart)。本轮核对文档，未使用账户密钥执行付费推理。另见[模型规格](https://docs.typesafe.ai/models)、[来源记录](SOURCES.md)。

## 0. 直接登录，无需候补名单

1. 打开官方控制台 [Console](https://console.typesafe.ai) 并登录。官方于 **09-20 21:30 UTC / 北京时间 09-21 05:30** 宣布取消候补名单；早期教程的排队步骤已过时。[公告](https://x.com/typesafeai/status/2101786156572823624)
2. 官方同线程公布每位用户起始 **$5 credit**；到账与账户条件以 Console 为准。[额度说明](https://x.com/typesafeai/status/2101786280946499671)
3. 若控制台或 API 异常，先查看[官方状态页](https://status.typesafe.ai/)。这与候补名单是不同问题。

## 1. 零代码体验：Playground

1. 打开 [Playground](https://console.typesafe.ai/playground) 并登录；
2. 粘贴任意文本作为 **state**（例如一条客服工单）；
3. 添加问题（question）——混用 Noul / Choice / Score，一次调用全部返回；
4. 观察返回概率；Choice / Score 还返回 `confidence`，Noul 没有独立的该字段。

## 2. 拿到 API Key

在 [console.typesafe.ai/keys](https://console.typesafe.ai/keys) 创建 API Key，导出到环境变量：

```bash
export TYPESAFE_API_KEY="你的key"
```

## 3. 直接调 API（cURL）

API 端点：`POST https://api.typesafe.ai/v1/systemone`

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

返回示例（数值仅用于说明，实际回答会变化；Noul 只返回“是”的概率）：

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

## 4. Python SDK（推荐）

要求 Python ≥ 3.10：

```bash
pip install typesafe-sdk      # 或 uv add typesafe-sdk
```

```python
from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

client = TypeSafeClient()  # 自动读取 TYPESAFE_API_KEY，默认模型 jev-latest

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
print(response.answers["department"].probabilities) # 各选项概率
```

完整 API 细节见 [API Reference](https://docs.typesafe.ai/api)。

### SDK 版本变化

- **Python 0.7.1（09-21）**：更早检查密钥配置，避免在异常日志中输出密钥值。
- **Python 0.7.0（09-18）**：序列化从 `msgspec` 迁移到 `pydantic`，新增 `response_model`；升级已有代码时检查类型与响应处理。
- **0.6.0**：`Score.criteria` 改用有序序列。上述示例使用列表，避免沿用整数键字典的旧写法。

来源：[Python changelog](https://docs.typesafe.ai/sdk/python/changelog)。这些是 SDK 变化，当前模型仍应查 [Models](https://docs.typesafe.ai/models)。

### JavaScript / TypeScript SDK

要求 **Node.js ≥ 20**，使用独立的官方包：

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

客户端读取 `TYPESAFE_API_KEY`。Python 方法名是 `system_one`，JS 方法名是 `systemOne`，不要直接复制混用。[JS 官方文档](https://docs.typesafe.ai/sdk/javascript)

## 5. 给 AI Agent 装 Jev 技能（Agent Skill）

**Claude Code（插件市场方式）：**

```bash
claude plugin marketplace add typesafe-ai/skills
claude plugin install typesafe@typesafe-ai
# 之后可用 /typesafe:typesafe-ai 显式调用
```

**其他 Agent（Codex / Cursor / Copilot 等，经 skills.sh）：**

```bash
npx skills add typesafe-ai/skills --skill typesafe-ai
```

安装后，在 prompt 里说一句 **“use the TypeSafe skill”** 即可，例如：

> Use TypeSafe to route incoming support tickets by department, with human review for uncertain decisions.

- Skill 源码：<https://github.com/typesafe-ai/skills>
- 安装指南：<https://docs.typesafe.ai/agent-skill>

## 6. 其他接入渠道与本地替代

官方提供 [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python)，用 LLM API 实现类似的 `TypeSafeClient` 接口。它仍需要对应提供商的凭据，也不会自动继承 Jev 的性能或校准性质。

| 渠道 | 已核验入口 | 请求与费用注意点 |
|---|---|---|
| Vercel AI Gateway | `typesafe-ai/jev`；`experimental_evaluate` | 网关的 Boolean 与原生 Noul 格式不同；[官方接入说明](https://vercel.com/changelog/typesafe-ai-jev-now-available-on-ai-gateway) |
| Cloudflare | `typesafe/jev`；`env.AI.run` | 第三方模型页面列出 32,000 上下文，费用见其控制台；[官方模型页](https://developers.cloudflare.com/ai/models/typesafe/jev/) |
| OpenRouter | [Jev 1.13 模型页](https://openrouter.ai/typesafe/jev-1.13) | beta 接入已由[官方公告](https://x.com/OpenRouter/status/2100744709589316009)确认；使用当前决策接口说明，勿套普通聊天请求 |
| LangSmith Gateway | `typesafe/jev-1.13.0`；`/v1/systemone` | TypeSafe 密钥存为工作区 provider secret，客户端用 `LANGSMITH_API_KEY`；[决策模型文档](https://docs.langchain.com/langsmith/llm-gateway-decision-models) |

**促销单独看**：Vercel 的 [09-19 公告](https://x.com/vercel_dev/status/2101116818463281579)称免费至 09-25；不是 TypeSafe 直连永久降价。本文没有用付费账户验证各网关的实际开通条件或账单。

需要本地推理可研究 [Laya](https://github.com/NandhaKishorM/laya)、[Kev](https://github.com/jaredpalmer/kev) 等独立模型；不是官方 Jev 权重。比较条件见 [RESEARCH.md](RESEARCH.md)。

### LangSmith 在线评估与 SemIf 托管

09-21 的[官方公告](https://www.langchain.com/blog/jev-is-now-available-in-langsmith-evals)已提供 Jev-as-a-judge 配置步骤：在 Settings → Provider secrets 保存 TypeSafe 密钥；进入 tracing project 的 Evaluators，添加 LLM-as-a-Judge Evaluator，选择 TypeSafe / `jev-latest`，再配置 `state` 与各个 typed question。每个问题映射为一个反馈字段。

通过 Gateway 调用 Jev 时，TypeSafe SDK 的 base URL 使用 `https://gateway.smith.langchain.com`，**不附 `/v1`**；客户端凭据是 LangSmith 密钥，模型名是 `typesafe/jev-1.13.0`。这里的前缀与 TypeSafe 直连不同。

Gateway 另托管 **SemIf**（`semif-qwen3.5-4b`），官方文档称免费至 **09-28**，限 US 组织的 Free / Developer / Plus 计划；仍适用访问、速率与预算策略。它是独立开放模型，促销不适用于自带密钥的 Jev。具体请求与账户条件见[官方文档](https://docs.langchain.com/langsmith/llm-gateway-decision-models)。

## 7. 常用设计模式（来自官方文档）

| 模式 | 一句话 | 文档 |
|---|---|---|
| Speculative fan-out | 一次调用发 N 个（含投机性）问题，代码决定用哪个 | [patterns/fan-out](https://docs.typesafe.ai/patterns/fan-out) |
| Confidence-gated routing | 答案说“做什么”，confidence 决定“要不要直接执行/转人工” | [patterns/confidence-routing](https://docs.typesafe.ai/patterns/confidence-routing) |
| Composite scoring | 把复杂判断拆成原子 Score，加权合成 | [patterns/composite-scoring](https://docs.typesafe.ai/patterns/composite-scoring) |
| Intent routing | 按意图分流：确定性逻辑 / 专家 LLM / 人工 | [patterns/intent-routing](https://docs.typesafe.ai/patterns/intent-routing) |

## 8. 注意事项

- **版本**：本轮 `jev-latest`、`jev-preview` 均指向 `jev-1.13.0`。需要可比较结果时固定版本并记录响应中的 `model`，不要假定别名永远不变。[Models](https://docs.typesafe.ai/models)
- **预算与输入**：整次请求 64k token，`state` 加最长问题 32k；只接受文本，不直接接受图片、音频或视频。中文表现应使用自己的样本检查。[Models](https://docs.typesafe.ai/models)
- **选项**：单个 Choice 最多 255 个选项；超过时需自行设计分层或候选筛选，API 不保证自动切换流程。选项不能穷尽输入时加入 `other` / `unknown`。[Choice](https://docs.typesafe.ai/primitives/choice)
- **置信度**：Choice / Score 的 `confidence` 由概率分布计算，不是自由文本自评；Noul 没有该字段。阈值需要针对任务验证。[Confidence](https://docs.typesafe.ai/confidence)
- **限流**：模型页当前列 250,000 token/秒、1,200 请求/分钟，且注明动态调整。处理 `429` 与 `retry-after`，避免把重试放大成额外并发。[Models](https://docs.typesafe.ai/models)
- **能力边界**：数值、日期、跨问题恒等式由代码检查；输出类型正确仍可能语义错误，也可能受到对抗输入影响。[Jev 1.13 已知不足](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
- **直连费用**：输入 $0.042 / 百万 token，输出 token 不计费；示例和促销不承诺未来价格。[Models](https://docs.typesafe.ai/models)
