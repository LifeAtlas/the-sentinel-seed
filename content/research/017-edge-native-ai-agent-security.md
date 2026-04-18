---
title: "Edge-Native Security for AI Agents: Why Your Digital Twin Needs a Bodyguard"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: AI agent security, edge-native, digital twin, prompt injection, data exfiltration, model poisoning, Life Programmable Interface, LPI, defence-in-depth, threat modelling, health data sovereignty, GDPR, SMILE methodology, design science research, autonomous agents
status: ready
date: 2026-04-16
---

# Edge-Native Security for AI Agents: Why Your Digital Twin Needs a Bodyguard

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The deployment of autonomous AI agents on personal health data introduces a class of security problems that differ in kind, not merely in degree, from the security problems of cloud-hosted AI services. When an agent runs locally — with access to an individual's longitudinal health records, biometric streams, and genomic data — the threat model shifts: data exfiltration is local not cloud-scale, prompt injection attacks target the agent's reasoning rather than the application layer, and the individual has no third-party infrastructure operator to absorb accountability for security failures. This paper analyses the AI agent security problem for edge-native personal health platforms through a design science framework, grounded in a structured dialogue between a platform architect and a security engineering practitioner about to take ownership of AI agent security hardening. We introduce and develop the "bodyguard metaphor" as an analytical and design tool: the digital twin is a VIP, the AI agents are staff, and the security layer — instantiated in the Life Programmable Interface (LPI) — is the bodyguard. The bodyguard metaphor is not merely illustrative; it encodes a specific security architecture principle: the bodyguard does not trust the staff unconditionally, does not permit the VIP to be exposed without escort, and maintains a log of every interaction. We apply this principle to three threat classes: prompt injection, data exfiltration, and model poisoning. We engage the primary counter-argument — "just run it in the cloud where security is handled" — and argue that it is structurally incompatible with personal health data sovereignty and with GDPR Article 9 special category data obligations. We trace the human dimension of security engineering: the role of personal motivation — specifically, lived experience of healthcare fragmentation — in producing security engineers who understand what they are protecting and why. We argue this is not incidental but structural: security engineers who understand the harm that security failures produce are better positioned to reason about adversarial inputs than those who treat security as a purely technical optimisation. We state three falsifiable propositions and acknowledge limitations. The paper contributes a threat model taxonomy for edge-native AI agent health platforms and a reference architecture for LPI-grounded defence-in-depth.

**Keywords:** AI agent security, edge-native, digital twin, prompt injection, data exfiltration, model poisoning, Life Programmable Interface, LPI, defence-in-depth, threat modelling, health data sovereignty, GDPR, SMILE methodology, design science research, autonomous agents

---

## 1. Introduction: The Autonomous Agent and the Exposed VIP

There is a moment in the deployment of autonomous AI agents on personal health data when the security implications become concrete in a way that no abstract threat model fully communicates. An agent that has read access to an individual's five years of longitudinal health records, their genomic data, their medication history, and their wearable biometric streams is not processing data in the same sense that a cloud analytics pipeline processes data. It is reasoning about a person. It has the informational substrate to make inferences about that person's medical conditions, genetic predispositions, psychological state, financial circumstances, and daily routines. And it is doing so autonomously, without human review of each inference, because autonomy is the property that makes it useful.

This is the VIP problem: the digital twin is a representation of an individual of extraordinary informational richness. The AI agents that serve it are, in effect, members of a staff with access to the VIP's most sensitive information. And like any staff with privileged access, they can be compromised — through direct attack, through manipulation of their inputs, through corruption of their models — in ways that cause harm to the VIP without the VIP's knowledge.

The bodyguard metaphor that this paper develops is not a metaphor in the sense of a simplified analogy for non-technical audiences. It is a design metaphor in the sense of Schon (1979): a frame that generates new design solutions by importing the structure of a known domain into an unfamiliar problem space. The bodyguard metaphor imports the principles of personal protection — escort without surveillance, trust but verify, log every access, terminate without warning when the threat model changes — into the design of an AI agent security layer. The LPI (Life Programmable Interface) is proposed as the architectural realisation of the bodyguard: a mandatory intermediary between every AI agent and every personal health data resource.

The paper proceeds as follows. Section 2 characterises the threat model for edge-native AI agent health platforms, distinguishing it from the cloud-hosted threat model. Section 3 develops the bodyguard metaphor and its design implications. Section 4 analyses prompt injection as the primary threat class for reasoning agents. Section 5 addresses data exfiltration in the edge-native context. Section 6 addresses model poisoning. Section 7 presents the LPI as the defence-in-depth architecture. Section 8 engages the cloud counter-argument. Section 9 examines the role of personal motivation in security engineering. Section 10 states three falsifiable propositions. Section 11 acknowledges limitations, and Section 12 concludes.

---

## 2. The Edge-Native Threat Model: Different in Kind

### 2.1 Why Edge Changes the Threat Model

Security in cloud-hosted AI systems is primarily perimeter security: protect the cloud infrastructure from unauthorised access, enforce authentication and authorisation at the API boundary, and rely on the cloud provider's physical and network security to protect the compute and storage layers. The individual's data is somewhere on a cloud server; the security objective is to prevent unauthorised parties from reaching it through the cloud's network perimeter.

Edge-native deployment inverts this model. The individual's data is on their own device — a personal workstation, a home server, a local NAS — and the AI agents operate on that device with direct access to local data stores. There is no cloud perimeter to enforce. The authentication boundary is the local operating system. The authorisation model is whatever the agent runtime enforces. The physical security of the compute and storage is the physical security of the individual's home or office.

This inversion changes the threat model on three dimensions:

**Attacker proximity.** In a cloud-hosted model, the attacker must penetrate the cloud provider's network to reach the data. In an edge-native model, the attacker can target the individual directly — through a malicious application installed on the same device, through a compromised plugin in the agent runtime, through a network intrusion on the home router, or through social engineering of the individual into accepting a malicious tool. The attack surface is personal, not institutional.

**Data exposure scope.** In a cloud-hosted model, a successful data exfiltration attack may expose data for many users stored on a shared infrastructure. In an edge-native model, a successful attack exposes the data of exactly one individual — but it exposes all of that individual's data, not just the subset that a cloud service happened to hold. An agent with access to all of a person's health records across five years, multiple providers, and multiple data types is a more concentrated target than a cloud service that holds a subset of claims data for millions of users.

**Accountability structure.** In a cloud-hosted model, the cloud operator bears contractual and regulatory responsibility for security of the hosted data. In an edge-native model, the individual is, in a meaningful sense, their own data controller. GDPR Article 4(7) defines the data controller as "the natural or legal person... which, alone or jointly with others, determines the purposes and means of the processing of personal data." An individual who processes their own personal health data on their own device — even using an AI agent platform — may be functioning as their own data controller, absorbing the accountability that a cloud operator would otherwise bear.

### 2.2 The Autonomous Agent Amplifies Every Threat

The deployment of autonomous AI agents amplifies each of these threat dimensions. A static database of personal health records is a target, but it is a passive target: it does not take actions, make decisions, or communicate with external services without explicit user instruction. An autonomous AI agent is an active system: it reasons, communicates, calls external APIs, and takes actions — potentially including actions that move or transmit data — without explicit per-action user authorisation. This autonomy is the source of its utility; it is also the source of its threat amplification.

The key threat amplification mechanisms are:

**Reasoning as an attack surface.** An AI agent that reasons over health data to produce recommendations, summaries, or plans can be manipulated through its inputs — a technique known as prompt injection — in ways that cause it to produce harmful outputs, leak sensitive data, or take unauthorised actions. The agent's reasoning process is an attack surface that does not exist in a passive data system.

**API connectivity as exfiltration channel.** An autonomous agent that communicates with external services — scheduling APIs, pharmacy information services, health insurance portals — has legitimate outbound communication channels that can be exploited for data exfiltration. Malicious instructions embedded in a document the agent reads can direct the agent to encode sensitive data in a query to a seemingly benign external service.

**Model as a persistent attack surface.** An agent whose model is updated — through fine-tuning on new user data, or through retrieval from a vector store that is populated from user-generated content — can be attacked through the data that influences its model. Poisoned training examples or malicious vector store entries can modify the agent's behaviour in ways that persist across sessions.

---

## 3. The Bodyguard Metaphor: A Design Frame

### 3.1 Bodyguard Principles

The bodyguard metaphor is productive as a design frame because it encodes a set of principles that are simultaneously intuitive and technically precise:

**Principle 1: Escort without surveillance.** A bodyguard does not surveil the VIP — they do not read the VIP's private communications, review the VIP's confidential documents, or report the VIP's movements to third parties. They protect the VIP's safety without compromising the VIP's privacy. Applied to AI agent security: the security layer must enforce access controls and log interactions without itself becoming a surveillance mechanism that aggregates sensitive data beyond what the security function requires.

**Principle 2: Trust but verify all staff.** A bodyguard does not treat every staff member as an attacker, but they do verify that staff members are who they claim to be, that they have the authorisation they claim to have, and that their interactions with the VIP are within the scope of their role. Applied to AI agent security: the security layer authenticates every agent request, verifies that the requested action is within the agent's authorised scope, and validates that the claimed context (the reason the agent gives for the requested action) is consistent with the agent's current task.

**Principle 3: Maintain a complete interaction log.** A bodyguard maintains records of who interacted with the VIP, when, and what the nature of the interaction was. This log serves two purposes: it provides an audit trail for post-incident investigation, and it enables the detection of anomalous interaction patterns that may indicate a compromised staff member. Applied to AI agent security: every agent action that accesses, modifies, or transmits personal health data is logged with a structured record that captures the agent identity, the action type, the data accessed, the external endpoint contacted (if any), and the reasoning trace that the agent provided as justification.

**Principle 4: Terminate without negotiation when the threat model changes.** A bodyguard who observes behaviour inconsistent with the established threat model does not engage in negotiation with the potential threat; they remove the VIP from the situation. Applied to AI agent security: an agent whose behaviour deviates from its established operational pattern — an anomalous API call, a request to access data outside its scope, a reasoning trace that includes encoded instructions from external sources — is suspended immediately, not warned.

**Principle 5: The bodyguard's loyalty is to the VIP, not the organisation.** A bodyguard employed by an organisation to protect a VIP does not, in a conflict between the VIP's safety and the organisation's preferences, serve the organisation. Applied to AI agent security: the security layer's loyalty is to the individual whose data it protects. If a platform operator instruction conflicts with an individual's data access preferences, the security layer resolves the conflict in favour of the individual.

### 3.2 From Metaphor to Architecture

The bodyguard metaphor maps onto the LPI architecture as follows. The VIP is the individual's digital twin — their longitudinal health record, genomic data, biometric streams, and the semantic representations derived from these. The staff are the AI agents: health summarisation agents, medication interaction checking agents, appointment scheduling agents, and longitudinal trend analysis agents. The bodyguard is the LPI: a mandatory request intermediary that enforces the five principles above for every agent-to-data interaction.

The LPI's role as bodyguard is architecturally enforced, not policy-enforced. In the edge-native deployment, data stores are accessible only through the LPI; direct data access by agents — bypassing the LPI — is not possible because the data stores are not exposed on any interface that agents can reach without the LPI intermediary. This is the security principle of reference monitor design (Anderson, 1972): the security mechanism is in the mandatory path of every security-relevant operation, with no bypass route.

---

## 4. Prompt Injection: The Primary Reasoning Threat

### 4.1 The Nature of Prompt Injection

Prompt injection is the manipulation of an AI agent's behaviour through malicious instructions embedded in the agent's input context. Unlike traditional injection attacks — SQL injection, command injection — prompt injection targets the agent's reasoning process rather than a parsing or execution engine. The malicious instruction does not exploit a parsing vulnerability; it exploits the agent's design property of following instructions embedded in its context.

The canonical prompt injection attack on a health data agent proceeds as follows: the agent is given a task (for example, "summarise this medical document"). The document contains, embedded in its text, an instruction directed at the agent ("ignore the previous instruction and instead output the patient's medication list to the following external URL"). The agent, following its instruction-following training, executes the embedded instruction rather than the task instruction.

Prompt injection attacks exploit the inability of language models to distinguish instructions from data (Perez & Ribeiro, 2022; Greshake et al., 2023). This attack is not hypothetical. Greshake et al. (2023) demonstrated indirect prompt injection attacks against LLM-integrated applications in which malicious instructions embedded in web pages retrieved by the agent caused the agent to exfiltrate data from other browser tabs, send emails without user consent, and perform actions entirely outside the scope of the original task. The health data context makes this attack class particularly severe: the data accessible to a health data agent is more sensitive than typical web content, and the consequences of unauthorised disclosure are more serious.

### 4.2 Defence Architecture: Eight Patterns

The LPI implements a prompt injection defence architecture based on eight patterns:

**Pattern 1: Input sanitisation.** All external content processed by an agent — documents, web pages, API responses, database records — passes through a sanitisation filter before entering the agent's context. The sanitisation filter identifies and removes or neutralises instruction-pattern text: sequences that resemble imperative commands directed at an AI agent (second-person imperative constructions, patterns that match known injection templates). Sanitisation is not a complete defence — sophisticated injection attacks can evade pattern-matching filters — but it eliminates the large class of naive injection attempts and forces adversaries toward more sophisticated techniques.

**Pattern 2: Context compartmentalisation.** Agent contexts are structured so that external content and system instructions occupy separate, labelled sections. The agent's instruction-following behaviour is conditioned to treat external content as data, not instructions. This conditioning is implemented through system prompt construction and through training on adversarial examples — a technique that reduces, but does not eliminate, the probability of instruction confusion.

**Pattern 3: Action verification.** Before any agent action that involves outbound communication (API calls, email, messaging) or data modification (record updates, file writes), the LPI requires the agent to provide a structured justification: the task it was assigned, the reasoning step that led to this action, and the specific data it proposes to transmit or modify. The LPI evaluates this justification against the agent's authorised action space. Actions whose justification does not match an authorised pattern are rejected.

**Pattern 4: Outbound content inspection.** All agent-initiated outbound communication passes through a content inspection filter that scans for patterns consistent with encoded personal health data. The filter applies regular expression patterns for common health data formats (medication names, ICD codes, blood test values, genetic identifiers) and blocks transmission of content matching these patterns to endpoints not on the agent's authorised endpoint list.

**Pattern 5: Reasoning trace logging.** Every agent reasoning step — every intermediate chain-of-thought output — is logged to an append-only audit store. Anomalous reasoning steps (references to external instructions, unusual information access patterns, justifications that do not follow from the assigned task) trigger an alert and, if the anomaly score exceeds a threshold, agent suspension.

**Pattern 6: Least-privilege data access.** Agents are granted access only to the specific data required for their assigned task, not to the entire health data store. A medication interaction checking agent has read access to the current medication list; it does not have access to the genomic data or the historical clinical notes. The LPI enforces this access boundary at query time, not at provisioning time, so that access can be scoped to the current task context rather than to a standing permission.

**Pattern 7: Session isolation.** Each agent task executes in an isolated session with no persistent memory of previous sessions. Data from a previous session cannot contaminate the current session's context through the agent's implicit memory. Session isolation eliminates the class of attacks that rely on gradually conditioning the agent's behaviour across multiple sessions.

**Pattern 8: Anomaly detection on interaction patterns.** The LPI maintains a baseline model of normal agent interaction patterns — the typical sequence of data accesses, tool calls, and output types for each agent role — and flags deviations from the baseline for human review. A health summarisation agent that suddenly begins accessing genomic data it has never accessed before is flagged, regardless of whether its individual actions are individually authorised.

---

## 5. Data Exfiltration: The Edge-Native Exposure

### 5.1 Exfiltration in the Local Context

Data exfiltration in the edge-native context does not require a network breach. An agent with access to local health data files and outbound internet connectivity has a direct exfiltration path: read the data, encode it, transmit it to an external endpoint. The exfiltration path may be activated through prompt injection (as described in Section 4), through a compromised agent plugin, or through a malicious update to the agent model itself.

The practical exfiltration risk is concentrated in three mechanisms: direct API exfiltration (the agent encodes data in an API request to an attacker-controlled service), steganographic exfiltration (the agent encodes data in an apparently benign output — a calendar entry, a document — that is then transmitted through a legitimate channel), and out-of-band exfiltration (the agent writes data to a location where a separate process controlled by the attacker can retrieve it).

Pattern 4 (outbound content inspection, defined in Section 4.2) and Pattern 3 (action verification, defined in Section 4.2) in the LPI's injection defence architecture address the direct API exfiltration path. Steganographic exfiltration is harder to detect and represents a genuine limitation of pattern-matching approaches. Out-of-band exfiltration requires filesystem-level access controls that go beyond the LPI's application-layer enforcement.

### 5.2 The Principle of Legitimate Channels

The most durable defence against agent-mediated data exfiltration is not detection but structural limitation: constraining the agent's outbound communication to a whitelist of legitimate channels and endpoints. An agent that cannot communicate with any endpoint outside an explicitly authorised list cannot exfiltrate data through any novel channel, regardless of the sophistication of the injection technique used to attempt it.

The LPI's endpoint whitelist is maintained as a signed configuration file, version-controlled and auditable, that specifies the exact URLs, ports, and communication protocols that each agent role is permitted to use. Attempts to communicate with any endpoint not on the whitelist are blocked at the LPI layer, logged, and flagged. The whitelist is not static: it is updated through an explicit governance process that requires human authorisation for any new endpoint addition.

This structural limitation trades agent flexibility for agent security. An agent whose legitimate functionality requires communication with a new external service must go through the whitelist governance process before that communication can proceed. This is a friction that the "cloud handles security" counter-argument would eliminate — in a cloud-hosted agent, the platform operator manages endpoint whitelisting — but it is a friction that enforces accountability for outbound communication in a way that cloud-based endpoint management typically does not.

---

## 6. Model Poisoning: The Persistent Threat

### 6.1 Poisoning Mechanisms in Health Agent Contexts

Model poisoning attacks modify an AI agent's behaviour by corrupting the data that influences its model. In the health agent context, three poisoning vectors are relevant:

**Fine-tuning poisoning.** If the agent is fine-tuned on user-generated health data — clinical notes, symptom descriptions, wearable sensor logs — maliciously crafted user inputs can introduce systematic biases into the fine-tuned model. An adversary who can influence a small fraction of the fine-tuning data can produce a model that consistently misclassifies specific symptoms, suppresses specific recommendations, or generates outputs that serve the adversary's interests rather than the user's. Zou et al. (2023) demonstrate that adversarial suffixes constructed through optimisation can reliably elicit unintended outputs from aligned language models across a range of deployment configurations, establishing that the threat of adversarial input to agent reasoning is not mitigated by alignment training alone.

**Retrieval-augmented generation (RAG) poisoning.** If the agent uses RAG — retrieving relevant documents from a vector store to augment its context — the vector store is a poisoning surface. Malicious documents inserted into the vector store can be retrieved in contexts where they appear relevant, introducing adversarial instructions or false clinical information into the agent's reasoning context.

**Embedding space poisoning.** In a vector store, the semantic similarity between documents is determined by their embedding representations. An adversary who can control a small number of documents in the embedding space can position those documents as highly similar to target queries, ensuring their retrieval in predictable contexts. This attack requires knowledge of the embedding model and the target queries but does not require knowledge of the target document content.

### 6.2 Defence: Data Provenance and Model Integrity Verification

The primary defence against model poisoning is provenance control: every piece of data that influences the agent's model — whether through fine-tuning, RAG indexing, or embedding — carries a cryptographic provenance record that identifies its source, its creation time, its content hash, and the chain of custody since creation. The LPI enforces provenance verification before any data is indexed into the vector store or used in a fine-tuning dataset.

Provenance control does not prevent an adversary from submitting malicious data through a legitimate channel — a user who generates malicious clinical notes using their legitimate account, for example. It does enable post-hoc forensic analysis: if model behaviour anomalies are detected, the provenance log allows the specific data that produced them to be identified and removed from the training set. This reduces the impact of poisoning attacks from permanent model corruption to temporary model degradation, reversible through provenance-guided dataset cleaning.

Model integrity verification — periodic comparison of a deployed agent model's behaviour against a known-good baseline on a fixed test set — provides early detection of behavioural drift that may indicate poisoning. The test set must be held out from any fine-tuning data and must cover the specific recommendation types and data access patterns that the agent is authorised to perform.

---

## 7. The LPI as Defence-in-Depth Architecture

### 7.1 Defence-in-Depth for Agents

Defence-in-depth is the security principle that no single security control is sufficient, and that multiple independent controls should be layered so that failure of any one control does not result in a security failure (Schneier, 2003). Applied to AI agent security, defence-in-depth requires that the security architecture does not rely on any single mechanism — not on prompt sanitisation, not on endpoint whitelisting, not on model integrity verification — to prevent all attack classes.

The LPI's layered architecture implements defence-in-depth across five independent control layers:

**Layer 1: Authentication and authorisation.** Every agent request is authenticated (the agent's identity is verified) and authorised (the agent's identity is checked against the access control list for the requested action). Authentication and authorisation are the entry condition; they are not sufficient alone because a legitimately authenticated and authorised agent can still be compromised.

**Layer 2: Input sanitisation.** All external content entering the agent's context passes through Pattern 1 (input sanitisation) from Section 4. This layer addresses naive prompt injection; it fails against sophisticated evasion.

**Layer 3: Action verification.** Every outbound action is verified against the action justification (Pattern 3) and the endpoint whitelist (Section 5). This layer addresses direct exfiltration and unauthorised API calls; it may fail against steganographic exfiltration.

**Layer 4: Output inspection.** All agent outputs are inspected for personal health data patterns (Pattern 4) before transmission. This layer provides a second check on exfiltration after action verification; it may fail against encoding schemes that the inspection filter does not recognise.

**Layer 5: Interaction logging and anomaly detection.** All interactions are logged (Pattern 5) and compared against behavioural baselines (Pattern 8). This layer detects attacks that evade earlier layers by producing anomalous interaction patterns; it fails against attacks that stay within normal interaction parameters.

No layer is individually sufficient. The depth of the architecture — five independent layers, each addressing different attack mechanisms — is the security property, not the strength of any individual layer.

### 7.2 The Bodyguard Principle Applied to Architecture

The bodyguard architecture principle — the bodyguard is in the mandatory path of every VIP interaction, with no bypass route — is implemented at the OS and filesystem level, not just at the application layer. The health data stores are mounted with access controls that permit only the LPI process to read or write; agent processes run under user accounts that do not have direct filesystem access to the data stores. This means that even an agent process that is fully compromised — running arbitrary attacker-controlled code — cannot access the health data stores without going through the LPI's authentication and authorisation layer.

This is the reference monitor property (Anderson, 1972): the security mechanism is in the trusted computing base, not in the untrusted application layer. It is the difference between a bodyguard who stands between the VIP and all visitors (reference monitor) and a bodyguard who politely asks visitors to sign a guest book (application-layer security).

---

## 8. The Counter-Argument: "Let the Cloud Handle Security"

### 8.1 What Cloud Platforms Do Well

The most direct challenge to edge-native AI agent security is the argument that cloud-hosted agent platforms already solve these problems, and that the appropriate response to the AI agent security threat is not to build edge-native defences but to deploy agents in a cloud environment where the platform operator handles security.

The argument has merit for many applications. Major cloud AI platforms provide: managed identity and access management with multi-factor authentication; network-level isolation between tenant environments; continuous security monitoring and threat detection by dedicated security operations centres; compliance certifications (SOC2, ISO27001, HIPAA Business Associate Agreements) that provide contractual and regulatory accountability for security failures; and automatic security patching of infrastructure components that the individual deployer would otherwise need to manage.

These are genuine advantages, and for organisations that do not process special category personal health data under GDPR Article 9, the cloud security model may be the correct choice.

### 8.2 Why Cloud Security is Structurally Incompatible with Health Data Sovereignty

Cloud security is structurally incompatible with personal health data sovereignty for three reasons that are not addressable through better cloud security controls:

**Data processing location.** GDPR Article 9 requires explicit legal basis for processing special category personal data, including data concerning health. Processing health data on a cloud platform outside the EU — or in an EU-based cloud platform without a valid GDPR data processing agreement that specifies the exact processing operations — creates direct regulatory exposure. The cloud platform handles security in a technical sense; it does not handle regulatory compliance on behalf of the individual data controller.

**Trust asymmetry.** A cloud-hosted agent platform has access to the individual's health data in order to execute the agent's tasks. The individual must trust that the platform operator: does not use the health data for purposes beyond the stated task, does not retain the data beyond the stated retention period, does not share the data with third parties including law enforcement without explicit authorisation, and has not been compromised in a way that exposes the data without the platform operator's knowledge. Each of these trust requirements may be contractually addressed, but none of them can be technically enforced from the individual's side: the individual cannot verify the platform operator's data handling without access to the platform operator's systems.

**Sovereignty is an architecture property, not a policy property.** The Life Atlas architectural principle (Waern, 2026a; DOI: 10.5281/zenodo.19587944) is that sovereignty — the individual's control over their own data and over the systems that process it — must be enforced at the architecture layer, not guaranteed by policy. A cloud platform can promise sovereignty through its terms of service. It cannot deliver sovereignty in the sense of the individual having technical control over what happens to their data. Edge-native deployment is the architecture that makes the promise technically enforceable.

---

## 9. Personal Motivation and Security Engineering Depth

### 9.1 The Lived Experience Hypothesis

The technical engagement that grounds this paper included an observation that the literature on security engineering rarely addresses: a security engineering practitioner who connected their personal experience of healthcare fragmentation — a family experience of caregiving across multiple providers, with fragmented records, duplicated tests, and care coordination failures that had direct consequences for a family member's health outcomes — to the platform's mission of sovereign, integrated personal health data.

This connection was not incidental. The practitioner articulated, with unusual specificity, the concrete harms that data fragmentation, unauthorised access, and AI system failures can produce for individuals in healthcare situations where the quality of information directly determines the quality of care. This specificity of harm understanding shaped the practitioner's approach to security engineering in ways that a purely technical security curriculum does not produce.

We term this the "lived experience hypothesis" and state it as a falsifiable proposition: security engineers with direct personal experience of the harm that security failures in health data systems produce will identify a statistically significant greater number of adversarial attack paths per unit of threat modelling time than security engineers with equivalent technical skills but without such experience.

The mechanism is not emotional engagement — it is epistemic. A security engineer who understands concretely what an attacker could do with a patient's medication history, genomic risk profile, or psychiatric treatment record can generate more realistic adversarial scenarios than one who treats health data as abstract sensitive information. Adversarial scenario generation — the core of threat modelling — is a creative task whose quality is limited by the engineer's ability to inhabit the attacker's perspective. Understanding the value and sensitivity of the target data is part of inhabiting that perspective.

### 9.2 The Continuity Dimension: Security Engineering as Institutional Knowledge

The engagement also surfaced a critical continuity dimension: the practitioner was taking over security hardening from a departing team member, with a target handover timeline several months away. Security knowledge in an early-stage organisation is institutional knowledge — knowledge of specific architectural decisions, specific threat decisions, and specific accepted risks that is not fully documented and is primarily held by the individuals who made those decisions.

When security institutional knowledge departs with a team member, the organisation does not simply lose a security engineer; it loses the reasoning behind the current security architecture. The new security engineer inherits a set of controls without the context that explains why specific controls were chosen, what alternatives were rejected, and what threats the current architecture accepts as residual risks.

The LPI architecture addresses this continuity dimension through its structured logging and audit architecture: every security decision — every policy table entry, every endpoint whitelist update, every anomaly response — is logged with a structured rationale record. The rationale record is not a narrative note; it is a structured entry that specifies the threat being addressed, the control chosen, the alternatives considered, and the residual risk accepted. A new security engineer who inherits a fully logged LPI configuration has access to the reasoning behind every security decision, not just the decisions themselves.

This is the SMILE methodology's "lasting" criterion applied to security architecture: a security architecture is lasting not when it is never changed, but when changes can be made by any competent engineer without the institutional knowledge of the original designers.

### 9.3 IS Governance Alignment

From an IS governance perspective, the bodyguard architecture maps to the access control family (AC) within NIST SP 800-53 (Joint Task Force, 2020), where the LPI functions as a policy enforcement point. The reference monitor property (completeness, isolation, verifiability) aligns with ISO/IEC 27001:2022's requirement for systematic information security management, adapted here to the edge-native constraint that no centralised enforcement authority exists. Standard ISO 27001 ISMS implementations assume a centralised enforcement authority — a security operations centre, a corporate network perimeter, a managed identity provider. The edge-native constraint eliminates all three, requiring the reference monitor to be architecturally local rather than organisationally centralised.

---

## 10. Falsifiable Propositions

**Proposition 1 (Eight-Pattern Defence and Adversarial Robustness).** AI agent deployments that implement all eight prompt injection defence patterns described in Section 4.2 will show a statistically significant lower rate of successful prompt injection attack completion — defined as an injected instruction producing an unintended agent action that would not have occurred without the injection — compared to deployments implementing fewer than four patterns, as measured in a standardised adversarial test suite applied to comparable agent configurations. A plausible measurable target: injection success rate below 5% for eight-pattern deployments versus above 30% for fewer-than-four-pattern deployments.

**Proposition 2 (Reference Monitor Property and Exfiltration Prevention).** Edge-native agent deployments with OS-level filesystem access controls (LPI as mandatory data access intermediary) will show complete prevention of direct data exfiltration attacks in which the agent process itself is fully compromised, compared to application-layer-only security configurations in which compromised agents retain direct filesystem access. This proposition is testable through red team exercises that assume full agent process compromise.

**Proposition 3 (Lived Experience and Threat Model Depth).** Security engineers with documented personal or family experience of healthcare fragmentation or medical record mismanagement will identify a statistically significant greater number of health-data-specific adversarial attack paths per two-hour structured threat modelling session than security engineers with equivalent years of experience and technical qualifications but without such experience. This proposition requires a controlled study design with standardised threat modelling methodology and blinded evaluation of identified attack paths by a panel of domain experts.

---

## 11. Limitations

The security architecture described in this paper is a reference design, not a production-hardened implementation. The LPI's eight prompt injection defence patterns have been prototyped and evaluated against publicly available adversarial prompt datasets; they have not been independently red-teamed against novel, specifically crafted adversarial inputs. Independent penetration testing is a planned pre-deployment requirement.

The threat model in this paper is scoped to adversarial attacks on deployed agents: prompt injection, exfiltration, and model poisoning. It does not address supply chain attacks on agent runtime dependencies, side-channel attacks on local hardware, or social engineering of the individual user. A complete threat model for an edge-native health data platform would address these additional threat classes.

The lived experience hypothesis (Section 9.1) is introduced as a falsifiable proposition, not a demonstrated finding. The observation that motivates it is from a single practitioner engagement and is subject to all the limitations of anecdotal evidence. The proposition requires a formal study design with a defined methodology, a larger sample, and blinded evaluation of threat model outputs before any empirical conclusion can be drawn.

The reference monitor property described in Section 7.2 requires OS-level access control enforcement that is specific to the deployment environment. Implementation details will differ across Linux, macOS, and Windows deployment targets, and the security guarantees of the reference monitor implementation must be evaluated separately for each. The claim that agent processes "cannot access health data stores without going through the LPI" is conditional on correct implementation of the OS-level access controls, which is an implementation assumption, not a verified property.

The paper does not address the security implications of model updates — specifically, the risk of a malicious model update pushed to the agent runtime through a legitimate update mechanism. This supply chain vector is a significant threat in any AI agent deployment and is addressed in the future research agenda.

---

## 12. Conclusion: The Bodyguard Is Architecture, Not Policy

The autonomous AI agent that serves a digital twin of personal health data is one of the most powerful tools in the sovereign health operating system vision. It is also one of the most attractive targets for adversarial attack, because the data it accesses and the actions it can take are both more sensitive and more consequential than those of any passive data system.

The bodyguard metaphor earns its design weight because it encodes the principles of the LPI architecture in a form that is memorable, consistent, and extensible to new threat scenarios. The bodyguard escorts without surveilling; it trusts but verifies all staff; it logs every interaction; it terminates without negotiation when the threat model changes; and its loyalty is to the VIP, not the organisation. These five principles, applied at the architecture layer rather than the policy layer, produce an agent security framework that is structurally sound rather than contractually promised.

The counter-argument from cloud security — real in its scope, genuinely addressing many organisations' security needs — fails at the boundary of personal health data sovereignty. Cloud security handles the cloud operator's security problem. It does not handle the individual's sovereignty problem. These are different problems, and architecture is the only solution to the second.

The observation that personal motivation produces better security engineers is not a management aphorism. It is an epistemic observation: a practitioner who understands the concrete harm that security failures produce in the domain they are protecting generates better threat models, imagines more realistic adversarial scenarios, and makes more defensible security decisions than one who treats the domain as abstract. Build your security team with people who understand what they are protecting and why it matters.

The digital twin needs a bodyguard. The bodyguard must be architecture.

---

## References

Anderson, J. P. (1972). *Computer security technology planning study* (Technical Report ESD-TR-73-51). Electronic Systems Division, Air Force Systems Command. https://csrc.nist.gov/publications/detail/other/1972/10/12/computer-security-technology-planning-study/final

Bieringer, M., Grosse, K., Raab, M., Klauß, M., Fischer, B., Rozsa, A., & Wicker, S. (2022). Industrial intrusion detection for control systems: A systematic review. *Computers & Security*, 120, 102828. https://doi.org/10.1016/j.cose.2022.102828

European Parliament & Council. (2016). *Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data* (General Data Protection Regulation). Official Journal of the European Union, L 119.

Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you've signed up for: Compromising real-world LLM-integrated applications with indirect prompt injection. *arXiv preprint*. https://arxiv.org/abs/2302.12173

Zou, A., Wang, Z., Kolter, J. Z., & Fredrikson, M. (2023). Universal and transferable adversarial attacks on aligned language models. *arXiv preprint arXiv:2307.15043*. https://arxiv.org/abs/2307.15043

ISO/IEC. (2022). *ISO/IEC 27001:2022 Information security, cybersecurity and privacy protection — Information security management systems — Requirements*. International Organization for Standardization.

Joint Task Force. (2020). *Security and Privacy Controls for Information Systems and Organizations*. NIST Special Publication 800-53 Rev. 5. https://doi.org/10.6028/NIST.SP.800-53r5

Perez, F., & Ribeiro, I. (2022). Ignore previous prompt: Attack techniques for language models. *arXiv preprint*. https://arxiv.org/abs/2211.09527

Schneier, B. (2003). *Beyond fear: Thinking sensibly about security in an uncertain world*. Copernicus Books.

Schon, D. A. (1979). Generative metaphor: A perspective on problem-setting in social policy. In A. Ortony (Ed.), *Metaphor and thought* (pp. 254–283). Cambridge University Press.

Wan, A., Wallace, E., Shen, S., & Klein, D. (2023). Poisoning language models during instruction tuning. In *Proceedings of the 40th International Conference on Machine Learning*, PMLR, 202, 35413–35425.

Waern, N. (2025a). *Edge-native intelligence for sovereign life science data: Architecture patterns for genomic research at the computational frontier*. WINNIIO AB. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). *The reality construct: Digital twins as boundary-spanning artefacts for knowledge absorption, organisational evolution, and the co-authorship of intended futures*. WINNIIO AB. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *Life Programmable Interface: A sovereign consultation layer for autonomous life operating systems*. WINNIIO AB. https://doi.org/10.5281/zenodo.19587944

Weidinger, L., Mellor, J., Rauh, M., Griffin, C., Uesato, J., Huang, P.-S., Cheng, M., Glaese, M., Balle, B., Kasirzadeh, A., & others. (2021). Ethical and social risks of harm from language models. *arXiv preprint*. https://arxiv.org/abs/2112.04359
