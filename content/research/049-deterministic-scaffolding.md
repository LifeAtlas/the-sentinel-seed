---
title: "The 92/8 Rule: Why Deterministic Scaffolding Precedes Intelligent Automation in Production Agent-Native Systems"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: deterministic automation, agentic AI, production systems, scaffolding architecture, hallucination prevention, RPA, DPA, SMILE methodology, edge computing, reliability engineering
status: draft
date: 2026-05-09
license: CC-BY-4.0
orcid: 0009-0001-4011-8201
doi_preprint: pending
---

# The 92/8 Rule: Why Deterministic Scaffolding Precedes Intelligent Automation in Production Agent-Native Systems

**Nicolas Waern**
WINNIIO AB, Sweden | ORCID: 0009-0001-4011-8201 | ceo@winniio.io

*Working Paper — Draft for Open Review | CC-BY-4.0*
*Submitted to: Zenodo Open Repository | Date: 2026-05-09*

---

## Abstract

The discourse around autonomous AI systems — variously described as "agentic," "generative," or "LLM-native" — has outpaced practical understanding of where such systems reliably fail. This paper introduces the **92/8 Rule**: a design heuristic and architectural principle asserting that in production enterprise environments, approximately 92% of automation must be deterministic (rule-based, schema-bound, verifiable) before the remaining 8% of intelligent, probabilistic reasoning can function reliably. The metaphor is anatomical: the brain constitutes roughly 5–10% of the body by mass, yet it is utterly dependent on a muscular, skeletal, and autonomic infrastructure that operates without conscious deliberation. Agent-native systems that invert this ratio — prioritising LLM reasoning over deterministic scaffolding — exhibit systematic failure modes in high-stakes production environments: hallucination cascades, schema drift, non-reproducible outputs, and catastrophic brittleness at integration boundaries. Drawing on sociotechnical systems theory (Trist & Bamforth, 1951; Emery & Trist, 1965), reliability engineering (Hollnagel, 2004; Leveson, 2011; Rasmussen, 1997; Reason, 1990), design science research (Hevner et al., 2004; Peffers et al., 2007), and the epistemology of bounded rationality (Simon, 1955, 1996), this paper argues that architecture-first design — operationalised through the SMILE methodology (Waern, 2026) and grounded in the Reality Construct framework (Waern, 2025) — constitutes the necessary and sufficient precondition for trustworthy intelligent automation. Four falsifiable propositions are advanced and evaluated against practitioner evidence. Implications for enterprise AI adoption, MLOps governance, and edge-native deployment are discussed.

**Keywords:** deterministic automation, agentic AI, production systems, scaffolding architecture, hallucination prevention, RPA, DPA, SMILE methodology, edge computing, reliability engineering

---

## 1. Introduction: The Seduction of the One-Shot

There is a moment familiar to nearly every enterprise technology team that has evaluated modern large language models: the demonstration succeeds, spectacularly. A prompt is composed, submitted to an LLM API, and within seconds a coherent, contextually appropriate output appears — a workflow plan, a data transformation, a structured report. The assembled group experiences a collective recognition: *this changes everything*. Procurement conversations accelerate. Pilot projects are green-lit. The language of "AI-first" infiltrates the roadmap.

Six months later, the same teams are debugging outputs that contradict themselves across runs. Business rules embedded in a decade of institutional knowledge are missing from AI-generated workflows. Edge cases — rare but high-consequence — produce outputs that no amount of prompt engineering can reliably prevent. The production environment, with its authentication layers, legacy schema, concurrent process execution, and regulatory audit trails, reveals what the demonstration obscured: the model was performing, not reasoning, and the scaffold it needed to reason reliably had never been built.

This paper names and analyses that failure pattern. The 92/8 Rule is not a precise empirical ratio but a structural principle: the proportion of deterministic, verifiable, schema-bound process logic that must be established *before* probabilistic AI reasoning can be safely integrated into any production system operating under conditions of high stakes, high value, or regulatory accountability. The rule encodes an insight that systems engineers, safety researchers, and cognitive scientists have articulated across multiple decades and domains: reliable complex systems are not intelligent all the way through. They are mostly predictable, mostly rule-governed, and mostly boring — with intelligence reserved for the genuinely ambiguous residue.

This is not a pessimistic view of AI capabilities. It is a structural claim about where intelligence must be placed in a system, and what must precede it.

### 1.1 Scope and Contributions

This paper makes four primary contributions:

1. **Conceptual**: It introduces and formally defines the 92/8 Rule as an architectural heuristic for agent-native system design, grounded in analogies from biological cognition, safety-critical systems engineering, and sociotechnical theory.

2. **Theoretical**: It synthesises cross-disciplinary literature — from Ashby's Law of Requisite Variety (1956) to Hollnagel's Resilience Engineering (2006) to Simon's bounded rationality (1955) — to provide a theoretical foundation for the heuristic.

3. **Methodological**: It presents the SMILE methodology (Waern, 2026) as a practical operationalisation of architecture-first design, and connects it to the Reality Construct framework (Waern, 2025) as the epistemological grounding layer.

4. **Propositional**: It advances four falsifiable propositions about the relationship between deterministic scaffolding and AI system reliability, each stated in a form amenable to empirical evaluation.

---

## 2. Background: The Architecture Debt Problem in AI-Native Systems

### 2.1 From RPA to DPA to Agents: A Genealogy

Robotic Process Automation (RPA) emerged in the 2010s as a pragmatic response to the integration tax imposed by legacy enterprise systems (van der Aalst et al., 2018). By scripting UI interactions and API calls in deterministic sequences, RPA tools allowed organisations to automate high-volume, low-variability processes without re-engineering underlying systems. The determinism was the feature, not a limitation: a bot that always follows the same path produces verifiable, auditable outputs (Lacity & Willcocks, 2016).

Dynamic Process Automation (DPA) extended this paradigm by incorporating conditional logic, exception handling, and process orchestration, moving closer to the broader category of Business Process Management (BPM) (Dumas et al., 2018; Weske, 2012). Still, the core commitment was to structured, rule-governed execution: every branch was authored, every exception was anticipated and handled.

The arrival of transformer-based LLMs at commercial viability (Brown et al., 2020; Bommasani et al., 2021) introduced a third paradigm: language-mediated process execution. Instead of authoring every branch, a practitioner could describe intent in natural language and allow the model to infer the appropriate action sequence. The appeal was obvious: the authoring cost of deterministic automation is high, and LLMs appeared to dissolve it.

What the early adoption wave failed to distinguish was the difference between *capability* and *reliability*. An LLM can perform a task. Whether it performs the *same* task consistently, correctly, and verifiably across repeated invocations in a live production environment is a different question entirely. As Bender et al. (2021) noted, language models are stochastic parrots: they generate statistically plausible continuations of prompts, not truth-grounded derivations. The gap between plausible and correct is invisible in demonstrations and lethal in production.

### 2.2 The 90% Illusion

A recurring observation among AI practitioners is what this paper terms the **90% Illusion**: in exploratory or demonstration contexts, an LLM-based system can appear to achieve 90% or more of a target capability with minimal engineering effort. This observation is accurate. What it omits is that the final 10% — the production-grade 10% that encompasses error handling, schema conformance, security boundaries, audit trails, failure recovery, and edge-case correctness — requires engineering effort that often exceeds the entire cost of the initial 90%.

This dynamic is not unique to AI. Brooks (1995) documented an analogous phenomenon in software engineering: building the first 90% of a system takes 10% of the time; finishing the last 10% takes 90% of the time, because the last 10% is where all the hard problems live. But in AI-native systems, the problem is structurally different. In conventional software, the last 10% is difficult but deterministic: given sufficient effort, correct outputs can be guaranteed. In probabilistic AI systems, correctness cannot be guaranteed — it can only be made more likely through constraint, grounding, and architectural discipline.

The 90% Illusion is therefore particularly dangerous in high-stakes contexts. Healthcare workflow automation, financial process execution, regulatory compliance reporting, and industrial control integration are precisely the domains where the remaining 10% is not a quality-of-life improvement but a categorical boundary between safe and unsafe operation.

### 2.3 Hallucination as an Architectural Symptom

The phenomenon of LLM hallucination — the generation of confident, plausible, and factually incorrect outputs — has been extensively documented (Ji et al., 2023; Maynez et al., 2020; Rawte et al., 2023). Most discourse on hallucination focuses on model-level mitigations: improved training data, reinforcement learning from human feedback, retrieval augmentation. These interventions are valuable but insufficient as the sole defence.

This paper advances a different claim: **hallucination is not primarily a model failure but an architectural symptom**. Models hallucinate not merely because they lack knowledge but because they lack *grounding*: structured, verifiable external reference that anchors generation to reality. When an LLM is invoked in an environment where schemas are not machine-readable, process boundaries are not explicit, data contracts are not enforced, and failure states are not enumerated, the model has no alternative but to interpolate from training distribution. That interpolation will be syntactically plausible. It will not be reliably correct.

Rasmussen's (1997) concept of the envelope of safe operation provides a useful frame: systems — human or artificial — operate reliably within envelopes defined by rules, procedures, and environmental constraints. When those constraints are absent or unclear, behaviour drifts toward locally sensible but globally problematic attractors. For LLMs, the equivalent of Rasmussen's "management pressure" toward boundary violation is the absence of schema and context constraints that would prevent confident confabulation.

The implication is architectural: before LLMs can be reliably integrated into production workflows, the architecture must provide the grounding that prevents hallucination by making confabulation structurally impossible. This is the function of deterministic scaffolding.

---

## 3. Theoretical Framework

### 3.1 Bounded Rationality and the Division of Cognitive Labour

Simon's (1955, 1996) concept of bounded rationality established that rational agents — human or artificial — do not optimise over all possible futures but instead satisfice within the constraints of limited computational resources, incomplete information, and time pressure. This insight applies directly to LLM-based systems: a language model cannot reason reliably about production edge cases it has never encountered, system states it cannot observe, or constraints that are not represented in its context window.

Simon's response to bounded rationality was not to build more powerful reasoners but to design *environments* that make good decisions tractable. The chess board has rules. The assembly line has procedures. The legal system has precedent. These are not limitations on intelligence — they are the structural preconditions that allow intelligence to be reliably applied. The 92/8 Rule is a direct application of this insight: the 92% of deterministic scaffolding is the designed environment within which the 8% of AI reasoning can be bounded, grounded, and made reliable.

This connects to Dreyfus's (1972, 1992) critique of classical AI: intelligence in context is not the same as intelligence in the abstract. Expert human performance in complex domains is not a matter of explicit rule-following but of situated, embodied, context-sensitive judgment that emerges from deep immersion in structured environments. LLMs, trained on text, lack embodiment and situation. The architectural scaffolding that the 92/8 Rule prescribes is, in part, a synthetic substitute for the contextual embedding that human experts develop through experience.

### 3.2 Sociotechnical Systems Theory

The Joint Optimisation principle of Sociotechnical Systems Theory (Trist & Bamforth, 1951; Emery & Trist, 1965; Cherns, 1976) holds that productive systems achieve reliability and performance not by optimising the technical or social subsystem independently, but by co-designing them to exploit mutual complementarities. Applied to agent-native systems, this principle implies that neither the AI model nor the process architecture is the primary unit of design — the joint system is.

This has a specific implication for the sequencing of development effort. If the technical subsystem (the AI model and its APIs) is developed without co-design of the process architecture (the schemas, data contracts, exception procedures, and audit mechanisms), the result is a technical subsystem that cannot be reliably integrated because the joint optimum has not been sought. The 92/8 Rule operationalises joint optimisation by requiring architectural completeness — the deterministic 92% — as the precondition for AI integration.

Kling's (1987) concept of the "web of computing" further warns against treating AI deployment as a purely technical event. Every tool is embedded in a social, organisational, and political context that shapes its use and consequences. The architecture-first approach mandated by the 92/8 Rule is also an organisational discipline: it forces teams to make their process assumptions explicit, legible, and negotiable before encoding them in AI prompts that are invisible to most stakeholders.

### 3.3 Reliability Engineering and the Anatomy of Failure

The reliability engineering literature offers a rich vocabulary for understanding why deterministic scaffolding matters. Reason's (1990) Swiss Cheese Model describes how accidents occur when latent failures — present but dormant in the system — align to create an unobstructed path from hazard to harm. In AI-native systems, absent schema validation is a latent failure; absent context grounding is a latent failure; absent exception handling is a latent failure. The 90% Illusion obscures these latent failures because demonstrations do not exercise the paths through which they become active.

Hollnagel's (2004, 2006) work on Cognitive Reliability and Error Analysis Method (CREAM) and Resilience Engineering provides a complementary perspective. Hollnagel distinguishes between performance variability that is controlled and performance variability that is uncontrolled. Controlled variability — the ability to adjust behaviour within defined parameters in response to changing conditions — is a source of system resilience. Uncontrolled variability — behaviour that cannot be predicted, bounded, or corrected — is a source of brittleness. LLM outputs, without architectural grounding, exhibit uncontrolled variability. The deterministic scaffolding mandated by the 92/8 Rule converts uncontrolled variability into controlled variability by defining the envelope within which AI reasoning operates.

Leveson's (2011) STAMP (Systems-Theoretic Accident Model and Processes) framework is also relevant. STAMP treats accidents not as chains of component failures but as emergent properties of complex system interactions that violate safety constraints. Applied to AI-native systems, this suggests that the failure mode to prevent is not individual LLM errors but systemic constraint violations that emerge from the interaction of unconstrained AI outputs with production system state. The 92% deterministic layer is, in STAMP terms, a set of safety constraints that prevent the AI subsystem from inducing unsafe system states.

### 3.4 Ashby's Law of Requisite Variety

Ashby (1956) formulated the Law of Requisite Variety: a controller can only control a system if it has at least as much variety (in the sense of distinct possible states) as the system being controlled. Applied to AI-native architectures, this implies that an AI subsystem attempting to manage a complex production environment must have sufficient representational and operational variety to match the variety of the environment. Without deterministic scaffolding, the AI subsystem's effective variety is limited to what it can infer from natural language context — a severe constraint. With deterministic scaffolding, the AI subsystem inherits the variety of the scaffolding: known schemas, enumerated states, explicit contracts, and verified data.

Beer's (1972, 1985) Viable System Model extends Ashby's insight to organisational design: viable systems require recursive management structures in which each level of the hierarchy has sufficient autonomy and variety to manage its operational environment, while remaining accountable to higher-level policy. Agent-native systems can be designed as viable systems — with the deterministic layer providing the operational management structure and the AI layer providing the policy-level intelligence — but only if the architectural hierarchy is explicitly designed and maintained.

### 3.5 The Anatomical Metaphor Formalised

The body/brain metaphor introduced in this paper's abstract deserves formal treatment. The central nervous system — including the brain — constitutes approximately 5–10% of the human body's mass and approximately 20% of its energy budget. The remaining 90–95% of mass is distributed across the musculoskeletal, cardiovascular, endocrine, digestive, and immune systems. These systems are not unintelligent — they exhibit sophisticated adaptive behaviour — but they operate through mechanisms that are deterministic, rule-governed, and highly reliable. The heart does not deliberate about whether to contract; the immune system does not consult the cortex before initiating an inflammatory response.

Critically, the intelligence of the brain is *dependent on* the reliability of the body. A cortex without a circulatory system is not a brain; it is a corpse. Similarly, an LLM without deterministic scaffolding is not an intelligent agent in a production sense; it is a demonstration that will fail under load, under adversarial conditions, or at integration boundaries.

The 92/8 Rule encodes this dependency: before deploying the brain, build the body. Before deploying the AI, build the architecture.

---

## 4. The SMILE Methodology and the Reality Construct

### 4.1 SMILE as Architecture-First Practice

The SMILE methodology (Waern, 2026) — Systematic Mapping, Integration, Layering, and Evaluation — operationalises the architecture-first principle in a structured, iterative design process applicable to complex sociotechnical systems. SMILE begins with systematic mapping: the exhaustive identification and documentation of system boundaries, data flows, process states, stakeholder roles, and external dependencies before any automation is designed. This mapping phase corresponds directly to the construction of the deterministic 92%: only what is mapped can be automated deterministically; only what is automated deterministically can be safely augmented with AI.

The Integration phase of SMILE addresses the challenge that most production systems are not greenfield. They are compositions of legacy components, external APIs, regulatory requirements, and accumulated institutional knowledge that is rarely fully documented. SMILE's integration discipline requires that every component boundary be expressed as an explicit contract: schema-validated, version-managed, and failure-enumerated. This is the architectural equivalent of Nonaka and Takeuchi's (1995) knowledge externalisation: tacit process knowledge must be made explicit before it can be reliably automated.

The Layering phase introduces AI capabilities in a sequenced order: first deterministic automation, then rule-based exception handling, then statistical classification and routing, and only finally generative AI for genuinely ambiguous residues. This sequencing prevents the common failure mode in which AI is deployed at a layer it cannot reliably serve, because the layers below it have not been built.

The Evaluation phase introduces continuous, structured assessment of AI outputs against known-correct deterministic baselines — a form of groundedness checking that Wachter et al. (2017) have argued is essential for trustworthy AI in high-stakes domains. Without deterministic baselines, AI evaluation is purely comparative (this model versus that model) rather than absolute (this output versus the correct output).

### 4.2 The Reality Construct as Epistemological Ground

The Reality Construct (Waern, 2025; DOI: 10.5281/zenodo.19587944) establishes the philosophical and architectural premise that grounds the SMILE methodology: reality — the state of the physical, social, and institutional world at a given time — is the only reliable persistent layer for any information system. All representations of reality — databases, models, dashboards, AI outputs — are approximations that degrade as reality changes. Reliable systems must therefore be designed to continuously re-anchor their representations to reality, not to trust that prior representations remain accurate.

For AI-native systems, the Reality Construct has a direct architectural implication: LLM outputs must be grounded in verified, current representations of system state, not in training-time approximations. This is precisely what retrieval-augmented generation (Lewis et al., 2020) and tool-use architectures (Schick et al., 2023) attempt — but they succeed only when the retrieval layer and the tool interfaces are themselves reliable, schema-bound, and deterministically maintained. In other words, RAG and tool use are not alternatives to deterministic scaffolding; they are implementations of it.

The Reality Construct also provides the epistemological rationale for the 92/8 Rule's asymmetry: determinism is always to be preferred over probabilism where determinism is achievable, because deterministic processes are verifiable, reproducible, and ground-truth-anchored. Probabilistic processes are reserved for genuinely irreducible uncertainty — the 8% where reality presents genuinely novel configurations that cannot be handled by pre-authored rules.

---

## 5. The 92/8 Rule: Formal Statement and Decomposition

### 5.1 Definition

**The 92/8 Rule:** In any production enterprise automation system operating under conditions of high stakes, high value, or regulatory accountability, the ratio of deterministic process logic (rule-based, schema-validated, verifiable) to probabilistic AI reasoning (LLM-mediated, stochastic, context-sensitive) should be approximately 92:8 by volume of automated process steps, and must be architecturally enforced such that all AI-mediated steps are bounded by deterministic pre- and post-conditions.

The ratio is not empirically derived from a single study; it is a structural heuristic informed by the convergent findings of reliability engineering, cognitive systems research, and practitioner experience. The specific numbers are intended to be memorable and directionally correct, not precise. The essential claim is ordinal: in production systems, deterministic logic must substantially dominate AI reasoning, and AI reasoning must be enveloped within deterministic constraint.

### 5.2 What Counts as Deterministic (the 92%)

The deterministic layer encompasses:

- **Schema management**: Every data object flowing through the system has a formally defined, version-controlled schema. Input validation is enforced at every boundary. Schema violations are handled by deterministic exception logic, not delegated to AI interpretation.
- **Process orchestration**: Every workflow is represented as an explicit, auditable graph of states and transitions. Every transition has defined preconditions and postconditions. No transition is mediated solely by AI inference.
- **Integration contracts**: Every external system interaction (API call, database query, file read/write) is wrapped in a deterministic client with retry logic, timeout handling, and failure enumeration. The AI layer never directly issues raw API calls.
- **Authentication and authorisation**: Access control is enforced by the deterministic layer. The AI layer operates within a permission context that is established deterministically and cannot be overridden by AI inference.
- **Audit and observability**: Every action taken by the system is logged deterministically, with sufficient metadata to reconstruct the causal chain of any output. AI reasoning logs include the prompt, context, model, and output — but the logging itself is deterministic.
- **Exception routing**: Edge cases that fall outside the AI layer's designed scope are routed to deterministic handlers (human review queues, predefined fallback logic, or controlled failure states) rather than to further AI inference.

### 5.3 What Counts as AI-Mediated (the 8%)

The AI layer is reserved for:

- **Natural language understanding**: Parsing unstructured text inputs — customer communications, clinical notes, engineering reports — to extract structured data for the deterministic layer.
- **Ambiguous classification**: Routing decisions where the deterministic rule space does not provide a clear answer, and where the cost of a misclassification is bounded and recoverable.
- **Generative summarisation**: Producing human-readable summaries of structured data for downstream human decision-making — not autonomous action.
- **Anomaly flagging**: Identifying patterns in data that deviate from established norms and warrant human review, as a complement to deterministic rule-based anomaly detection.
- **Context-sensitive response generation**: Producing responses in workflows that require natural language output (customer service augmentation, documentation drafting) within a tightly bounded prompt template and output schema.

The common thread is that all AI-mediated steps are bounded: bounded inputs (from validated deterministic upstream), bounded outputs (schema-validated or schema-constrained), bounded consequences (recoverable failures, human review gates), and bounded scope (narrow, well-defined tasks not general reasoning).

### 5.4 The Inversion Failure Mode

When systems are built with an inverted ratio — AI-first, architecture-second — the failure trajectory is predictable. Initial demonstrations succeed because the demo environment has been implicitly engineered to be favourable: clean data, consistent context, no concurrent process state, no edge cases, no adversarial inputs. When the system is promoted to production, the implicit engineering disappears and the AI layer encounters the full complexity of the production environment for which it was not designed. The result is what this paper terms the **Inversion Failure Mode**: a cascade of hallucinations, inconsistent outputs, schema violations, and exception states that the deterministic layer — underdeveloped or absent — cannot contain.

Perrow's (1984) analysis of Normal Accidents is directly applicable here. Perrow argued that in tightly coupled systems with high complexity, accidents are not anomalies but expected consequences of the system design. AI-native systems without deterministic scaffolding are tightly coupled (AI outputs directly trigger downstream actions) and highly complex (stochastic outputs interacting with complex production state). Normal Accidents are therefore not a risk to be mitigated but an expected outcome to be designed against. The 92/8 Rule is the design response: by building the deterministic layer first, the coupling is controlled and the complexity is reduced to the point where the AI layer can operate reliably.

---

## 6. Falsifiable Propositions

This paper advances four falsifiable propositions derived from the 92/8 Rule. Each is stated in a form amenable to empirical evaluation through controlled study, case series analysis, or longitudinal system monitoring.

### Proposition 1: Pre-Architecture Failure Rate

**P1:** In production enterprise automation systems where AI capabilities (LLMs or ML models) were deployed prior to the completion of formal schema management, process orchestration, and integration contract specification, the rate of production incidents attributable to AI output errors will be at least four times higher than in matched systems where architectural scaffolding was completed prior to AI deployment.

**Rationale:** If the 92/8 Rule is correct, then the absence of deterministic scaffolding should be a reliable predictor of AI-induced production incidents. The 4× threshold is conservative given the theoretical arguments advanced; empirical studies could evaluate whether the true ratio is higher.

**Falsification conditions:** If matched pairs of AI-first and architecture-first deployments show no significant difference in production incident rates attributable to AI outputs, P1 is falsified.

### Proposition 2: Hallucination Rate and Schema Coverage

**P2:** Within a single production AI system, the rate of factually incorrect or contextually inappropriate AI outputs (hallucinations) will decrease monotonically as the proportion of input context that is schema-validated and deterministically sourced increases, holding model and prompt constant.

**Rationale:** If hallucination is an architectural symptom rather than solely a model property, then increasing the structural constraint of the AI's context should reduce hallucination rates. This proposition is testable within individual systems through controlled experiments in which schema coverage is varied while model and prompt are held constant.

**Falsification conditions:** If hallucination rates show no significant relationship to schema coverage of input context, P2 is falsified.

### Proposition 3: The 90% Illusion and Production Degradation

**P3:** In AI-native system pilots where initial capability assessments report ≥90% task completion rates in non-production environments, the rate of task completion in production environments will be systematically lower, with the degradation magnitude positively correlated with the absence of deterministic scaffolding components (schema validation, integration contracts, exception routing).

**Rationale:** The 90% Illusion predicts that demonstration performance will not generalise to production environments. The degradation magnitude should be traceable to specific missing scaffolding components. This proposition is testable through longitudinal study of AI pilot projects that transition to production.

**Falsification conditions:** If production performance is not systematically lower than pilot performance, or if degradation is not correlated with missing scaffolding components, P3 is partially or fully falsified.

### Proposition 4: Architecture-First and Time-to-Stable-Production

**P4:** AI-native automation projects that invest at least 60% of total engineering effort in deterministic scaffolding prior to AI integration will reach stable production operation (defined as ≤1 AI-induced production incident per 1,000 automated process executions) in fewer calendar months than matched projects that invert this ratio.

**Rationale:** The architecture-first approach requires more upfront effort, which may appear to delay delivery. P4 tests whether this apparent delay is offset by faster achievement of production stability — the actual delivery milestone for enterprise systems.

**Falsification conditions:** If architecture-first projects do not reach stable production faster than AI-first projects by a statistically significant margin, P4 is falsified.

---

## 7. Edge-Native Considerations

### 7.1 The Local Inference Imperative

The arguments for deterministic scaffolding are amplified in edge-native deployment contexts where network connectivity cannot be assumed, latency constraints are severe, and data sovereignty requirements prohibit cloud transmission. In these environments — industrial IoT, remote healthcare delivery, agricultural monitoring, field operations — the reliability requirements for AI-native systems are higher, not lower, than in enterprise cloud environments, and the tolerance for probabilistic failure is lower.

Shi et al. (2016) and Satyanarayanan (2017) document the latency and reliability challenges of edge computing environments. These challenges make the deterministic scaffolding layer even more critical: in an edge environment, the scaffolding must be locally executable, capable of operating without cloud connectivity, and designed for graceful degradation when the AI layer (which may require cloud inference) is unavailable.

This implies an additional architectural principle for edge-native agent systems: the deterministic 92% must be fully locally operable; the AI 8% must be designed with an explicit offline fallback that degrades gracefully to deterministic behaviour. Systems that require cloud AI inference for any path-critical function are, by definition, not edge-native.

The Ollama ecosystem (Willison, 2024) and the emergence of quantised small language models (Dettmers et al., 2023) are beginning to make edge-viable AI inference practical. However, the model being local does not make the architecture deterministic. A locally hosted LLM without schema grounding, process orchestration, and integration contracts exhibits the same Inversion Failure Mode as its cloud-hosted equivalent. The 92/8 Rule applies regardless of inference location.

### 7.2 Data Sovereignty and Schema Ownership

Zuboff's (2019) analysis of surveillance capitalism and the emerging discourse on data sovereignty (Hummel et al., 2021; Purtova, 2018) add a governance dimension to the architecture-first argument. When AI systems operate over personal, clinical, or proprietary data without explicit schema ownership — where the organisation cannot fully specify what data the AI system accesses, how it is used, and what outputs it produces — the data sovereignty of individuals and organisations is undermined not through malice but through architectural opacity.

Deterministic scaffolding is also, therefore, a data governance instrument. Schema management makes data access explicit and auditable. Integration contracts make data flows legible to governance processes. Exception routing makes human oversight points mandatory rather than optional. The 92/8 Rule, in this reading, is not only an engineering principle but an ethical one: systems that cannot be governed cannot be trusted, and systems without deterministic scaffolding cannot be fully governed.

---

## 8. Implications for Enterprise AI Adoption

### 8.1 The Maturity Sequence

The 92/8 Rule implies a specific maturity sequence for enterprise AI adoption that differs from common industry frameworks. The dominant model in the market — pilot a use case, demonstrate value, scale — skips the architectural foundation step that the 92/8 Rule requires. The result is a maturity ceiling: organisations scale pilots into production and discover that the value demonstrated in the pilot does not survive contact with production complexity.

A maturity sequence consistent with the 92/8 Rule would be:

1. **Process inventory and schema documentation**: Map and document every process to be automated, including all data schemas, exception states, and integration points. This phase produces no AI output but creates the precondition for reliable AI integration.

2. **Deterministic automation baseline**: Implement rule-based automation for every process step that can be handled deterministically. This phase may deliver 40–70% of the total automation value with high reliability.

3. **Integration contract enforcement**: Wrap every external dependency in a validated, version-managed contract. This phase makes the automation stack resilient to changes in external systems.

4. **Bounded AI augmentation**: Introduce AI capabilities for the specific process steps where deterministic logic is genuinely insufficient, bounded by the pre- and post-conditions established in phases 1–3.

5. **Continuous evaluation and groundedness checking**: Implement ongoing monitoring of AI output quality against deterministic baselines, with automatic routing to human review or fallback logic when quality degrades.

This sequence is slower to begin producing AI outputs but faster to reach stable production than the dominant pilot-and-scale approach.

### 8.2 Organisational Implications

Norman's (1988, 2013) work on human-centered design is relevant to the organisational implications of the 92/8 Rule. Norman argues that complex systems fail not because users are irrational but because systems are designed without adequate attention to the cognitive demands they impose. AI-native systems without deterministic scaffolding impose extreme cognitive demands on the human operators who must monitor, interpret, and correct AI outputs in real time — without the structural support of validated schemas, explicit process states, or bounded failure modes.

The 92/8 Rule reduces the cognitive load on human operators by making the system's behaviour predictable in the 92% deterministic domain, reserving human attention for the 8% where AI reasoning is genuinely in use and oversight is genuinely necessary. This is consistent with the design principle of function allocation: assign to automation what automation can reliably do; reserve for humans what humans must do (Parasuraman et al., 2000).

Suchman's (1987) critique of plans and situated actions is also relevant. Suchman argued that human action in complex environments is not the execution of pre-authored plans but improvised situated response to unfolding circumstances. AI systems that attempt to fully plan complex processes through LLM reasoning replicate the error that Suchman identified: they mistake planning for action. The 92/8 Rule responds to this by treating the deterministic layer as the plan (explicit, pre-authored, reliable) and the AI layer as the situated responder (bounded, contextual, monitored).

### 8.3 MLOps and Governance

The MLOps literature (Sculley et al., 2015; Klaise et al., 2020; Shankar et al., 2022) has extensively documented the "hidden technical debt" in machine learning systems: the complex, often invisible infrastructure required to maintain model performance in production. The 92/8 Rule can be understood as a structural response to MLOps technical debt: by building the deterministic scaffolding first, organisations create the infrastructure that makes model monitoring, retraining, and rollback manageable.

Specifically, the deterministic scaffolding layer provides:

- **Stable evaluation baselines**: Known-correct outputs against which model performance can be measured continuously.
- **Schema-validated training pipelines**: Structured data feeds that prevent training data drift from corrupting model performance.
- **Bounded deployment surfaces**: Explicit, narrow integration points that limit the blast radius of model failures.
- **Rollback paths**: Deterministic fallbacks that maintain system operation when model performance degrades below threshold.

Without these elements — all products of architecture-first design — MLOps becomes crisis management rather than continuous improvement.

---

## 9. Discussion

### 9.1 Objections and Responses

**Objection 1: The 92/8 Rule is too conservative for exploratory or creative domains.**

Response: The Rule explicitly scopes to "high stakes, high value, or regulatory accountability" environments. In genuinely exploratory contexts — research assistance, creative generation, low-consequence draft production — a different ratio may be appropriate. The Rule is not a universal claim; it is a domain-specific constraint. The theoretical arguments from reliability engineering, bounded rationality, and sociotechnical systems theory apply to production enterprise systems, not to all AI use cases.

**Objection 2: Improvements in model capability (reasoning models, tool use, long-context) will reduce the need for deterministic scaffolding.**

Response: This objection conflates capability with reliability. Improved models are more capable in the sense of being able to produce correct outputs more often. They are not more reliable in the sense of guaranteeing correct outputs within specified bounds. The distinction between capability and reliability is fundamental to safety engineering (Leveson, 2011): a highly capable system without reliability guarantees is dangerous in high-stakes domains precisely because its occasional failures are unpredictable. Deterministic scaffolding addresses reliability, not capability; model improvements address capability, not reliability. Both are needed.

**Objection 3: The architecture-first approach delays value delivery.**

Response: This objection is empirically testable through Proposition 4. The theoretical argument is that the architecture-first approach delays the appearance of AI outputs but accelerates the delivery of reliable AI-mediated value. The common failure mode — shipping AI outputs that work in demos but fail in production — does not deliver value; it delivers technical debt and stakeholder scepticism. The maturity sequence proposed in Section 8.1 is designed to deliver deterministic automation value (40–70% of the total) while the AI scaffolding is being built, rather than delivering unreliable AI output while the architecture is being retroactively patched.

### 9.2 Relation to Existing Frameworks

The 92/8 Rule is complementary to, not in competition with, existing AI governance frameworks. The EU AI Act (European Commission, 2021) introduces risk-based obligations for AI systems in high-risk domains; the 92/8 Rule provides an architectural practice that enables compliance with those obligations. The NIST AI Risk Management Framework (NIST, 2023) calls for AI system transparency, explainability, and controllability; the deterministic scaffolding layer is precisely the mechanism through which these properties are achieved. Responsible AI frameworks from industry (Microsoft, 2022; Google, 2023) emphasise human oversight and meaningful control; the 92/8 Rule's exception routing and evaluation components are the operational implementation of those principles.

The Rule also extends Hevner et al.'s (2004) design science framework for information systems: the 92/8 Rule is an artifact of design science — a principle derived from multiple theoretical bases, applied to an observable class of system failures, and stated in falsifiable propositional form. Peffers et al.'s (2007) design science research methodology provides the methodological template within which the propositions advanced in Section 6 could be empirically evaluated.

---

## 10. Limitations

This paper presents a conceptual and theoretical argument; it does not report empirical results from a controlled study. The 92/8 ratio is a heuristic derived from theoretical reasoning and practitioner observation, not from a statistically powered empirical study of AI deployment outcomes. Several specific limitations must be acknowledged:

1. **Absence of empirical derivation**: The 92:8 ratio is not empirically derived. While the directional claim — that deterministic logic must substantially dominate AI reasoning in production — is supported by the theoretical arguments advanced, the specific ratio has not been validated through systematic study. Future work should attempt to derive empirically justified ratios across different domain contexts.

2. **Domain specificity**: The arguments are strongest in high-stakes, high-accountability domains. The applicability to lower-stakes or genuinely exploratory contexts is not established. The scope definition ("high stakes, high value, or regulatory accountability") is itself somewhat underspecified.

3. **Model evolution**: The paper's arguments are calibrated to the capabilities and failure modes of LLMs as of 2025–2026. Substantial improvements in model reliability, factual grounding, or architectural integration could alter the appropriate ratio. The theoretical arguments (bounded rationality, requisite variety, normal accidents) are less sensitive to model evolution than the practical engineering claims.

4. **Confounding in practitioner observation**: The practitioner evidence that motivates this paper is observational and subject to selection bias. Organisations that invest heavily in deterministic scaffolding may differ systematically from those that do not in ways that confound the comparison. Controlled study is needed to isolate the effect of scaffolding from organisational capability, domain context, and technology selection.

5. **Measurement of "deterministic"**: The paper does not provide a precise operational definition of what counts as "deterministic" that would enable consistent measurement across studies. Developing such a definition is a prerequisite for empirical evaluation of the propositions.

6. **The SMILE methodology**: While SMILE (Waern, 2026) is presented as an operationalisation of the 92/8 Rule, the methodology itself has not been subjected to independent empirical evaluation. The relationship between SMILE adoption and production AI reliability is a subject for future research.

---

## 11. Future Research Directions

The theoretical arguments and falsifiable propositions advanced in this paper open several directions for future empirical and design science research:

1. **Empirical validation of the 92/8 ratio**: Longitudinal case study research across a sample of enterprise AI deployments, coding the proportion of deterministic versus AI-mediated process steps and correlating with production incident rates, could provide empirically grounded estimates of the optimal ratio across domain contexts.

2. **Schema coverage as a hallucination predictor**: Controlled experiments within existing AI-native systems, systematically varying the schema coverage of input context while holding model and prompt constant, could empirically test Proposition 2 and provide engineering guidance on minimum schema coverage thresholds.

3. **The 90% Illusion quantified**: Systematic meta-analysis of enterprise AI pilot reports comparing claimed pilot performance with documented production performance would provide empirical evidence for the magnitude and determinants of the 90% Illusion (Proposition 3).

4. **SMILE methodology evaluation**: Independent evaluation of the SMILE methodology (Waern, 2026) through a multi-site case study, comparing systems built with SMILE against matched systems built without it on dimensions of production reliability, time-to-stable-production, and AI-induced incident rates.

5. **Edge-native deterministic scaffolding patterns**: Design science research developing and evaluating specific architectural patterns for deterministic scaffolding in edge-native deployment contexts, where connectivity constraints impose different requirements than in cloud-native deployments.

6. **Human factors of AI-native system oversight**: Empirical study of the cognitive demands imposed on human operators by AI-native systems with and without deterministic scaffolding, extending Norman's (1988, 2013) human-centered design framework to the AI oversight context.

7. **Governance and data sovereignty implications**: Policy research examining how deterministic scaffolding requirements interact with emerging AI governance regulations (EU AI Act, NIST RMF) and data sovereignty frameworks, and developing compliance templates that encode the 92/8 Rule as a governance artifact.

---

## 12. Conclusion

The discourse on agentic AI systems has been dominated by capability demonstrations and technology optimism. This paper has argued that the critical failure mode in enterprise AI adoption is not insufficient capability but premature deployment of probabilistic reasoning in environments that have not been architecturally prepared to bound, ground, and evaluate that reasoning.

The 92/8 Rule encodes the structural principle that resolves this failure mode: build the deterministic body before deploying the intelligent brain. Architecture-first design — operationalised through the SMILE methodology (Waern, 2026) and grounded in the Reality Construct (Waern, 2025) — is the necessary precondition for trustworthy intelligent automation in high-stakes, high-value, and regulated production environments.

The four falsifiable propositions advanced in this paper provide an empirical research agenda that can move this argument from heuristic to evidence-based practice. The theoretical foundations drawn from bounded rationality, sociotechnical systems theory, reliability engineering, and cybernetics provide the interdisciplinary grounding that the propositions require to be interpretable across research traditions.

The brain is remarkable. But without the body — without the muscles, the skeleton, the circulatory system, the autonomic nervous system, all operating reliably, deterministically, without deliberation — the brain is inert. The same is true of every AI system ever deployed in production. The intelligence is not the foundation. The architecture is.

---

## References

Ashby, W. R. (1956). *An introduction to cybernetics*. Chapman & Hall.

Beer, S. (1972). *Brain of the firm*. Allen Lane.

Beer, S. (1985). *Diagnosing the system for organizations*. Wiley.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 610–623. https://doi.org/10.1145/3442188.3445922

Bommasani, R., Hudson, D. A., Aditi, E., Altman, R., Arora, S., Koreeda, Y., ... & Liang, P. (2021). On the opportunities and risks of foundation models. *arXiv preprint arXiv:2108.07258*. https://arxiv.org/abs/2108.07258

Brooks, F. P. (1995). *The mythical man-month: Essays on software engineering* (Anniversary ed.). Addison-Wesley.

Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33, 1877–1901.

Cherns, A. (1976). The principles of sociotechnical design. *Human Relations*, 29(8), 783–792. https://doi.org/10.1177/001872677602900806

Dekker, S. (2011). *Drift into failure: From hunting broken components to understanding complex systems*. Ashgate.

Dettmers, T., Pagnoni, A., Holtzman, A., & Zettlemoyer, L. (2023). QLoRA: Efficient finetuning of quantized LLMs. *Advances in Neural Information Processing Systems*, 36.

Dreyfus, H. L. (1972). *What computers can't do: A critique of artificial reason*. Harper & Row.

Dreyfus, H. L. (1992). *What computers still can't do: A critique of artificial reason*. MIT Press.

Dumas, M., La Rosa, M., Mendling, J., & Reijers, H. A. (2018). *Fundamentals of business process management* (2nd ed.). Springer. https://doi.org/10.1007/978-3-662-56509-4

Emery, F. E., & Trist, E. L. (1965). The causal texture of organizational environments. *Human Relations*, 18(1), 21–32. https://doi.org/10.1177/001872676501800103

European Commission. (2021). *Proposal for a Regulation of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*. COM(2021) 206 final.

Google. (2023). *Responsible AI practices*. https://ai.google/responsibility/responsible-ai-practices/

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, 28(1), 75–105. https://doi.org/10.2307/25148625

Hollnagel, E. (2004). *Barriers and accident prevention*. Ashgate.

Hollnagel, E., Woods, D. D., & Leveson, N. (Eds.). (2006). *Resilience engineering: Concepts and precepts*. Ashgate.

Hummel, P., Braun, M., Tretter, M., & Dabrock, P. (2021). Data sovereignty: A review. *Big Data & Society*, 8(1). https://doi.org/10.1177/2053951720982012

Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., ... & Fung, P. (2023). Survey of hallucination in natural language generation. *ACM Computing Surveys*, 55(12), 1–38. https://doi.org/10.1145/3571730

Klaise, J., Shankar, S., Reid, C., Abhishek, J., & Szady, A. (2020). Monitoring and explainability of models in production. *arXiv preprint arXiv:2007.06299*. https://arxiv.org/abs/2007.06299

Kling, R. (1987). Defining the boundaries of computing across complex organizations. In R. Boland & R. Hirschheim (Eds.), *Critical issues in information systems research* (pp. 307–362). Wiley.

Lacity, M., & Willcocks, L. (2016). *A new approach to automating services*. MIT Sloan Management Review. https://sloanreview.mit.edu/article/a-new-approach-to-automating-services/

Latour, B. (1987). *Science in action: How to follow scientists and engineers through society*. Harvard University Press.

Leveson, N. G. (2011). *Engineering a safer world: Systems thinking applied to safety*. MIT Press.

Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. *Advances in Neural Information Processing Systems*, 33, 9459–9474.

Maynez, J., Narayan, S., Bohnet, B., & McDonald, R. (2020). On faithfulness and factuality in abstractive summarization. *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 1906–1919.

Microsoft. (2022). *Microsoft responsible AI principles and approach*. https://www.microsoft.com/en-us/ai/responsible-ai

NIST. (2023). *Artificial intelligence risk management framework (AI RMF 1.0)*. National Institute of Standards and Technology. https://doi.org/10.6028/NIST.AI.100-1

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Norman, D. A. (1988). *The design of everyday things*. Basic Books.

Norman, D. A. (2013). *The design of everyday things* (Revised and expanded ed.). Basic Books.

Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics—Part A: Systems and Humans*, 30(3), 286–297. https://doi.org/10.1109/3468.844354

Peffers, K., Tuunanen, T., Rothenberger, M. A., & Chatterjee, S. (2007). A design science research methodology for information systems research. *Journal of Management Information Systems*, 24(3), 45–77. https://doi.org/10.2753/MIS0742-1222240302

Perrow, C. (1984). *Normal accidents: Living with high-risk technologies*. Basic Books.

Purtova, N. (2018). The law of everything. Broad concept of personal data and future of EU data protection law. *Law, Innovation and Technology*, 10(1), 40–81. https://doi.org/10.1080/17579961.2018.1452176

Rasmussen, J. (1997). Risk management in a dynamic society: A modelling problem. *Safety Science*, 27(2–3), 183–213. https://doi.org/10.1016/S0925-7535(97)00052-0

Rawte, V., Sheth, A., & Das, A. (2023). A survey of hallucination in large foundation models. *arXiv preprint arXiv:2309.05922*. https://arxiv.org/abs/2309.05922

Reason, J. (1990). *Human error*. Cambridge University Press.

Satyanarayanan, M. (2017). The emergence of edge computing. *Computer*, 50(1), 30–39. https://doi.org/10.1109/MC.2017.9

Schick, T., Dwivedi-Yu, J., Dessì, R., Raileanu, R., Lomeli, M., Zettlemoyer, L., ... & Scialom, T. (2023). Toolformer: Language models can teach themselves to use tools. *Advances in Neural Information Processing Systems*, 36.

Sculley, D., Holt, G., Golovin, D., Davydov, E., Phillips, T., Ebner, D., ... & Dennison, D. (2015). Hidden technical debt in machine learning systems. *Advances in Neural Information Processing Systems*, 28.

Shankar, S., Garcia, R., Hellerstein, J. M., & Parameswaran, A. (2022). Operationalizing machine learning: An interview study. *arXiv preprint arXiv:2209.09125*.

Shi, W., Cao, J., Zhang, Q., Li, Y., & Xu, L. (2016). Edge computing: Vision and challenges. *IEEE Internet of Things Journal*, 3(5), 637–646. https://doi.org/10.1109/JIOT.2016.2579198

Simon, H. A. (1955). A behavioral model of rational choice. *Quarterly Journal of Economics*, 69(1), 99–118. https://doi.org/10.2307/1884852

Simon, H. A. (1996). *The sciences of the artificial* (3rd ed.). MIT Press.

Suchman, L. A. (1987). *Plans and situated actions: The problem of human-machine communication*. Cambridge University Press.

Sutcliffe, K. M., & Weick, K. E. (2003). Firefighting as mindful action: The case of the South Canyon Fire. *Journal of Contingencies and Crisis Management*, 11(2), 49–57.

Trist, E. L., & Bamforth, K. W. (1951). Some social and psychological consequences of the longwall method of coal getting. *Human Relations*, 4(1), 3–38. https://doi.org/10.1177/001872675100400101

van der Aalst, W. M. P., Bichler, M., & Heinzl, A. (2018). Robotic process automation. *Business & Information Systems Engineering*, 60(4), 269–272. https://doi.org/10.1007/s12599-018-0542-4

Wachter, S., Mittelstadt, B., & Russell, C. (2017). Counterfactual explanations without opening the black box: Automated decisions and the GDPR. *Harvard Journal of Law & Technology*, 31(2), 841–887.

Waern, N. (2025). *Reality Construct: A framework for grounding digital representations in physical, social, and institutional reality* [Working paper]. Zenodo. https://doi.org/10.5281/zenodo.19587944

Waern, N. (2026). *SMILE methodology: Systematic mapping, integration, layering, and evaluation for complex sociotechnical systems* [Working paper]. WINNIIO AB.

Weske, M. (2012). *Business process management: Concepts, languages, architectures* (2nd ed.). Springer. https://doi.org/10.1007/978-3-642-28616-2

Willison, S. (2024). Running LLMs locally with Ollama. *Simon Willison's Weblog*. https://simonwillison.net/2024/

Woods, D. D., & Hollnagel, E. (2006). *Joint cognitive systems: Patterns in cognitive systems engineering*. CRC Press.

Zuboff, S. (2019). *The age of surveillance capitalism: The fight for a human future at the new frontier of power*. PublicAffairs.

---

## Appendix A: The 92/8 Rule — Decision Heuristic for Practitioners

The following questions are offered as a practical heuristic for practitioners evaluating whether a proposed AI integration meets the 92/8 Rule preconditions:

**Schema readiness (must all be YES before AI integration)**
- [ ] Is every data object in the workflow defined by a formal, version-controlled schema?
- [ ] Is input validation enforced at every system boundary?
- [ ] Are schema violations handled by explicit, deterministic exception logic?

**Process clarity (must all be YES)**
- [ ] Is every workflow represented as an explicit, auditable state graph?
- [ ] Does every state transition have defined pre- and postconditions?
- [ ] Are all possible exception states enumerated and handled?

**Integration contracts (must all be YES)**
- [ ] Is every external dependency wrapped in a validated, failure-aware client?
- [ ] Are retry, timeout, and failure modes specified for every integration point?
- [ ] Is the AI layer prevented from directly issuing raw API calls?

**Governance readiness (must all be YES)**
- [ ] Is every system action logged with sufficient metadata for causal reconstruction?
- [ ] Are AI reasoning logs (prompt, context, model, output) captured deterministically?
- [ ] Are human review gates defined for AI outputs in path-critical steps?

**Edge-native additions (if applicable)**
- [ ] Is the deterministic layer fully locally executable without cloud connectivity?
- [ ] Does the AI layer have an explicit, tested offline fallback?
- [ ] Is the local execution environment reproducible and version-controlled?

Only when all applicable questions are answered YES is the system ready for AI integration under the 92/8 Rule.

---

*This working paper is released under CC-BY-4.0. Cite as: Waern, N. (2026). The 92/8 Rule: Why deterministic scaffolding precedes intelligent automation in production agent-native systems. WINNIIO AB Working Paper. Zenodo. [DOI pending]*
