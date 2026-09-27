# 手把手 Jev

**语言 / Language: 简体中文 · [English](HANDS_ON_EN.md)**

> 目标不是“发出一次 API 请求”，而是完成一个小而可验证的决策闭环：输入明确、输出可解释、低置信度有退路、结果能复查。接口细节以 [官方 Quickstart](https://docs.typesafe.ai/introduction/quickstart) 和 [API Reference](https://docs.typesafe.ai/api) 为准。

## 学习路线

| 步骤 | 交付物 | 你应该能回答 |
| --- | --- | --- |
| 1. 选一个窄任务 | 一句话任务定义 | 这是生成任务，还是有边界的判断？ |
| 2. 用 Playground 探索 | 3–10 个代表性样本 | 状态和题目是否足够明确？ |
| 3. 定义状态与题目 | 一份可版本控制的 JSON / 代码对象 | 候选项、等级和未知情况有没有写清？ |
| 4. 接入 SDK | 可重复的最小调用 | 程序如何消费返回的结构化结果？ |
| 5. 加上策略层 | 低置信度回退和日志 | 谁拥有最终动作权限？ |
| 6. 用留出样本验证 | 失败案例与阈值记录 | 这个阈值在没见过的数据上还合理吗？ |

## 1. 先选对第一个任务

从一个“状态已知、答案空间有限、错误可回退”的问题开始：例如把客服请求分给 `billing`、`technical`、`account` 或 `other`，并让低把握的结果转人工。

不要把第一个项目选成：写回复、总结长文、复杂算术、权限批准、医疗 / 金融 / 物理安全动作。Jev 能返回合法类型，不等于语义判断一定正确。[官方已知限制](https://docs.typesafe.ai/model-jaggedness/jev-1.13)

## 2. 先在 Playground 看真实输出

1. 登录 [TypeSafe Console](https://console.typesafe.ai)；候补名单已取消，但账户可用性与额度以控制台为准。
2. 打开 [Playground](https://console.typesafe.ai/playground)。
3. 粘贴一条代表性状态，先加一个题目；再用相同 state 比较 `Choice`、`Score` 和 `Noul` 的返回。
4. 记录难例：缺信息、两类都像、带有攻击性指令、中文表达、日期或数值。

把 Playground 当作题目设计台，而不是性能证明。每次变更题目、候选项或 rubric，都可能改变输出分布。

## 3. 选原语：题目越清楚，工程越简单

| 原语 | 适合的问题 | 设计要点 |
| --- | --- | --- |
| `Choice` | “属于哪个已知类别？” | 选项互斥；无法归类时留 `other` / `unknown`；单题上限 255 选项 |
| `Score` | “在有顺序的等级上处于哪一档？” | 等级从低到高，用可观察描述定义，别只写“好 / 一般 / 差” |
| `Noul` | “该命题是否成立？” | 返回“是”的概率；没有独立 `confidence`，阈值必须自己验证 |

**一个好状态**只包含回答当前问题所需的事实，并保留字段名、来源、时间和不确定性。不要让不可信的文档文本重写题目或业务规则；把外部内容作为数据，而不是指令。

## 4. 跑通第一个 Python 调用

创建密钥后，将它放在环境变量中，别写进仓库或示例：

```bash
export TYPESAFE_API_KEY="your-key"
pip install typesafe-sdk
```

下面是一个小型分流例子。它使用官方 Python SDK 的 `Choice` 和 `Noul`，将模型判断与最终业务动作分开：

```python
from typesafe_sdk import Choice, Noul, TypeSafeClient

client = TypeSafeClient()

result = client.system_one(
    state={
        "message": "My invoice was charged twice. Please fix this today.",
        "channel": "email",
    },
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
human_review = result.answers["needs_human"].noul >= 0.5

if human_review or queue.confidence < 0.70:
    action = "human_review"
else:
    action = f"route:{queue.choice}"

print({"model": result.model, "action": action, "queue": queue.choice})
```

`0.70` 只是示例，不能照搬到你的任务。生产环境要固定版本、记录实际响应里的 `model`，并在独立验证集选择门槛。[Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) · [Confidence](https://docs.typesafe.ai/confidence)

## 5. TypeScript 也遵循同一件事

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

Python 是 `system_one`，JavaScript / TypeScript 是 `systemOne`；不要把两种 SDK 的接口混用。完整、最新示例看 [官方 JavaScript 文档](https://docs.typesafe.ai/sdk/javascript)。

## 6. 把“模型输出”变成“可控的产品行为”

最小策略层至少要做四件事：

1. **检查输入**：长度、格式、来源、敏感字段与时间戳由代码验证。
2. **处理未知和低置信度**：转人工、回退规则或调用更合适的模型；不要强制选择一个看似合理的标签。
3. **保留回放记录**：状态摘要、题目版本、候选项顺序、响应模型、概率、阈值、最终动作和人工修正。
4. **让代码保留权限**：计费、写入、删除、发信、控制设备等动作要由可审计规则决定。

官方的 [confidence-gated routing](https://docs.typesafe.ai/patterns/confidence-routing) 和 [intent routing](https://docs.typesafe.ai/patterns/intent-routing) 是合适的下一步；它们不是替代你自己的验证集。

## 7. 验证清单

用没参与设计的样本检查以下问题：

- 每个类别都有样本吗？`other` 是否真正被允许？
- 中文、缩写、否定、缺字段、脏数据和提示注入文本会发生什么？
- 选项名字、顺序和 rubric 改动后，决策会不会不合理地翻转？
- 阈值以下的样本是否进入安全回退？阈值以上的错误有哪些？
- 端到端 p50 / p95、失败重试、网络地区和每次调用的题目数是否被记录？

研究已显示，类型约束不能避免语义错误，且某些设置下选项名会显著影响决策；看 [研究与评测](RESEARCH.md) 中的 `Type-Safe Is Not Error-Free` 与中文客服实验，再把它们当作要复查的风险，而不是你的结果预测。

## 接下来读什么

- 需要完整 API、网关、Agent Skill 或框架接入：看 [安装与接入](INSTALLATION.md)。
- 想查看社区给编码 Agent 准备的模式示例：可读 [Building with TypeSafe Jev](https://github.com/aaddrick/building-with-typesafe-jev)；它是第三方技能，虽提供多语言说明和 150+ 项目索引，但不代表 TypeSafe 官方背书，也不要把索引数量当作已核验集成数。
- 需要项目灵感：看 [生态目录](CATALOG.md)，并回到原仓库验证维护状态。
- 需要低频技能选择和物理安全边界的例子：看 [Jev on Robotics](ROBOTICS.md)。
- 要比较性能主张：看 [论文与评测](RESEARCH.md)，不要合并不同数据集和基线的数字。

## 来源与更新时间

本页依据 2026-09-27 读取的 [官方 Quickstart](https://docs.typesafe.ai/introduction/quickstart)、[API](https://docs.typesafe.ai/api)、[Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python)、[JavaScript SDK](https://docs.typesafe.ai/sdk/javascript) 与官方模式文档整理；没有使用密钥执行推理。详细核验记录见 [SOURCES.md](SOURCES.md#2026-09-27-机器人与入门资料增补)。
