# Jev 上手指南（Getting Started with Jev）

> 信息快照：2026-09-20。Jev 处于 Early Access 阶段，流程以官方文档为准：<https://docs.typesafe.ai/introduction/quickstart>

## 0. 前置：申请访问权

1. 打开官网 <https://typesafe.ai>，点击 **Join waitlist** 申请早期访问（社区实测基本当天通过，见 [@harrisonitsme 教程推文](https://x.com/harrisonitsme/status/2100799749192569167)）。
2. 通过后登录控制台 **Console**：<https://console.typesafe.ai>

## 1. 零代码体验：Playground

1. 打开 [Playground](https://console.typesafe.ai/playground) 并登录；
2. 粘贴任意文本作为 **state**（例如一条客服工单）；
3. 添加问题（question）——混用 Noul / Choice / Score，一次调用全部返回；
4. 观察返回的概率与 confidence。

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

返回示例（注意每个答案都带概率与 confidence）：

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

## 6. 没有 Key？用 LLM 模拟 System One 接口

官方提供了 [system-one-adapter-python](https://github.com/typesafe-ai/system-one-adapter-python)：一个 drop-in 的 `TypeSafeClient` 替身，背后接任意 LLM API——方便在拿到 Jev 访问权之前开发调试（也是官方评测里的 LLM 基线）。

## 7. 常用设计模式（来自官方文档）

| 模式 | 一句话 | 文档 |
|---|---|---|
| Speculative fan-out | 一次调用发 N 个（含投机性）问题，代码决定用哪个 | [patterns/fan-out](https://docs.typesafe.ai/patterns/fan-out) |
| Confidence-gated routing | 答案说“做什么”，confidence 决定“要不要直接执行/转人工” | [patterns/confidence-routing](https://docs.typesafe.ai/patterns/confidence-routing) |
| Composite scoring | 把复杂判断拆成原子 Score，加权合成 | [patterns/composite-scoring](https://docs.typesafe.ai/patterns/composite-scoring) |
| Intent routing | 按意图分流：确定性逻辑 / 专家 LLM / 人工 | [patterns/intent-routing](https://docs.typesafe.ai/patterns/intent-routing) |

## 8. 注意事项

- Jev **不接收图片**，state 是结构化文本（社区实测：[MuJoCo 机器人](https://x.com/dimentary/status/2101018760371171420)喂的是几何与接触信息的文本）。
- Choice 选项基数上限 **255**；更高要走两阶段（独立打分 + 显式选择），会明显变慢。
- confidence ≠ probability：前者是模型对“自己是否确定”的自评，路由逻辑建议两把都用（见 Confidence 文档）。
- 定价：输入 **$0.042 / MTok**，输出免费；但官方承认可能是补贴价，生产环境请做好预算监控。
