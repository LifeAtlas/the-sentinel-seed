---
title: "From Fragmented OSS to Self-Healing Networks: Digital Twin Architecture Patterns for Autonomous Telecommunications Operations"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: digital twin, telecommunications, self-healing networks, OSS/BSS, multi-agent AI, knowledge graphs, legacy integration, interoperability, autonomous networks, agentic AI
status: draft
date: 2026-05-09
---

# From Fragmented OSS to Self-Healing Networks: Digital Twin Architecture Patterns for Autonomous Telecommunications Operations

**Nicolas Waern**
WINNIIO AB
ORCID: 0009-0001-4011-8201

**Corresponding author:** ceo@winniio.io
**License:** CC-BY-4.0
**Submitted:** 2026-05-09

---

## Abstract

This article argues that the telecommunications industry's pursuit of autonomous, self-healing networks is architecturally blocked by a problem that is not primarily technological but ontological: the persistent fragmentation of Operational Support Systems (OSS) and Business Support Systems (BSS) into incompatible silos that each hold partial views of network reality. Drawing on practitioner discourse from telecom operators across three continents, including field observations from engagements with operators serving over 200 million subscribers, the article applies four interlocking theoretical frameworks: Star and Griesemer's (1989) boundary object typology to characterize the digital twin as a mediator between fragmented operational domains; Callon's (1986) four moments of translation to analyze the enrollment of legacy systems as actants in a digital twin network; the EU Interoperability Framework's (2017) six layers to map the full spectrum of integration challenges from legal governance to technical protocol harmonization; and Boyd's (1987) OODA loop to model the decision tempo required for autonomous network operations. The central claim is that a digital twin of a telecommunications network must simultaneously represent the physical network (towers, cables, spectrum), the logical network (routing tables, service configurations, customer sessions), and the operational network (trouble tickets, capacity plans, billing states) — and that this tripartite representation constitutes a coincident boundary object (Star & Griesemer, 1989) capable of serving network engineers, AI agents, business analysts, and regulatory auditors without requiring shared ontological commitments across these communities. The article proposes an architecture pattern based on three layers: a data harmonization layer that ingests heterogeneous protocols without requiring source system replacement; a simulation layer that fills observability gaps through physics-informed inference; and an agentic AI layer organized as persona-based autonomous squads mapped to operational processes. Four falsifiable propositions structure the contribution. The article concludes that the path to autonomous networks runs not through replacing legacy infrastructure but through making it legible to AI through digital twin mediation — a strategy that inverts the dominant industry assumption that autonomy requires greenfield deployment.

**Keywords:** digital twin, telecommunications, self-healing networks, OSS/BSS, multi-agent AI, knowledge graphs, legacy integration, interoperability, autonomous networks, agentic AI

---

## 1. Introduction

"Try to reboot."

This is, by frequency of occurrence, the most common diagnostic intervention offered by telecommunications service providers to customers experiencing connectivity problems. It is not an engineering recommendation. It is an admission that the operator's operational systems lack sufficient observability into the customer's network state to form a diagnosis. The fact that this remains true in 2026 — after three decades of investment in network management systems, two generations of operational support platforms, and billions of euros in digital transformation programs — is not a failure of technology investment. It is a failure of integration architecture.

The telecommunications industry operates on a stack of fragmented systems that were never designed to interoperate. Operational Support Systems (OSS) manage network provisioning, fault management, and performance monitoring. Business Support Systems (BSS) manage customer relationships, billing, and service catalogs. Between and beneath these categories sit dozens of specialized platforms: inventory systems, workforce management tools, configuration databases, capacity planning models, and increasingly, AI analytics engines. Each system holds a partial view of network reality. None holds the complete picture. The result is that a service provider with 50 million subscribers may be unable to determine, in real time, why a specific customer's broadband connection is degrading — because the relevant data is distributed across systems that do not share a common data model, a common temporal reference, or even a common definition of what constitutes a "device."

This article argues that the digital twin — understood not as a 3D visualization but as a comprehensive, queryable, continuously synchronized representation of a complex system — is the missing architectural element that enables the transition from fragmented operations to autonomous, self-healing network management. The argument is theoretical and architectural rather than empirical; it draws on practitioner insights from engagements with operators in North America, Europe, and Africa, and is grounded in established frameworks from Science and Technology Studies (STS), organizational theory, interoperability science, and military decision theory.

The contribution proceeds as follows. Section 2 establishes the theoretical framework. Section 3 characterizes the fragmentation problem through an anonymized composite archetype. Section 4 develops the digital twin as a boundary object for telecommunications. Section 5 proposes the three-layer architecture. Section 6 introduces agentic AI personas as the operational interface. Section 7 addresses the legacy enrollment problem through Actor-Network Theory. Section 8 presents four falsifiable propositions. Section 9 discusses limitations. Section 10 identifies future research directions. Section 11 concludes.

---

## 2. Theoretical Framework

### 2.1 Boundary Objects and the Problem of Shared Representation

Star and Griesemer's (1989) concept of boundary objects — artifacts that maintain coherent identity across communities of practice while being plastic enough to serve different local needs — provides the foundational lens for this analysis. Their four types (repositories, ideal types, coincident boundaries, and standardized forms) map directly onto the challenge facing telecommunications operators. A network digital twin must function as a coincident boundary object: a representation where the same underlying entity (a cell tower, a fiber route, a customer session) can be queried by a network engineer for fault diagnosis, by a capacity planner for investment modeling, by an AI agent for automated remediation, and by a regulatory auditor for compliance verification — each receiving a view that is locally meaningful without requiring agreement on the others' ontological categories.

This is precisely the property that current OSS/BSS architectures lack. Each system creates its own representation of network entities, optimized for its specific operational function, with no mechanism for reconciling these representations into a coherent whole. The digital twin, in this reading, is not another system in the stack — it is the integration substrate that makes the stack legible.

### 2.2 Actor-Network Theory and the Enrollment of Legacy Systems

Callon's (1986) four moments of translation — problematization, interessement, enrollment, and mobilization — provide analytical tools for understanding the most significant barrier to digital twin adoption in telecommunications: the legacy systems themselves. Unlike greenfield deployments where new architectures can be designed from first principles, telecommunications digital twins must enroll existing systems as data sources without requiring their replacement.

This enrollment is non-trivial. Legacy systems are not passive data stores; they are actants (Latour, 2005) with their own protocols, data models, access patterns, and — critically — organizational constituencies. The network engineer who has spent a decade mastering a particular fault management system has rational reasons to resist its subsumption into a digital twin platform that may render their expertise less valuable. The vendor who supplies the capacity planning tool has contractual and commercial reasons to resist open data export. Callon's framework makes these resistances analytically tractable rather than dismissing them as "change management" problems.

### 2.3 The EU Interoperability Framework

The European Interoperability Framework (European Commission, 2017) defines six layers of interoperability: legal, organizational, semantic, syntactic, technical, and governance. This framework, originally developed for public sector digital services, proves remarkably applicable to telecommunications integration challenges. The fragmentation of OSS/BSS is not merely a technical problem (different protocols) or a semantic problem (different data models). It is simultaneously a legal problem (vendor contracts restrict data portability), an organizational problem (operational silos mirror system boundaries), and a governance problem (no entity within the operator has authority to mandate integration across all systems).

The EU Interoperability Framework's value for this analysis is its insistence that technical integration without legal, organizational, and governance alignment will fail — a lesson that the telecommunications industry's history of failed "single pane of glass" initiatives amply confirms.

### 2.4 Boyd's OODA Loop and Decision Tempo

John Boyd's (1987) Observe-Orient-Decide-Act (OODA) loop, developed in the context of military fighter combat, provides the temporal framework for understanding why autonomous networks require digital twins. Boyd's central insight is that competitive advantage accrues to the actor who can complete the OODA cycle faster than the adversary — not through faster action, but through faster orientation: the ability to synthesize observations into an accurate situational awareness model.

In telecommunications, the "adversary" is entropy: the continuous emergence of faults, congestion, configuration drift, and security threats across a network of millions of elements. Current operational models complete the OODA loop in hours to days — a trouble ticket is opened, triaged, assigned, diagnosed, and resolved through sequential human processes. A self-healing network must complete the same cycle in seconds to minutes, which requires that the Orient phase — the synthesis of fragmented observations into situational awareness — be automated. This is precisely the function of the digital twin: it is the Orient engine that enables AI agents to Act at machine tempo.

---

## 3. The Fragmentation Problem: An Anonymized Composite

### 3.1 The Archetype

The composite described here draws on practitioner observations from engagements with multiple telecommunications operators. No single operator is described; the archetype synthesizes common patterns observed across the industry.

Consider a mid-tier telecommunications operator — designated TelCo Alpha — serving approximately 15 million fixed and mobile subscribers across a national market. TelCo Alpha's network comprises approximately 12,000 cell sites, 40,000 kilometers of fiber, and 3 million customer premises equipment (CPE) devices. The operator's IT landscape includes:

- **Inventory management**: two systems, one for the physical plant (fiber routes, cabinet locations) and one for the logical network (IP addresses, VLANs, service configurations). These systems share approximately 60% of their entity definitions but disagree on the remaining 40%.
- **Fault management**: three overlapping platforms acquired through successive corporate mergers. None has been decommissioned because each serves a specific network domain (mobile, fixed broadband, enterprise) with unique fault correlation rules.
- **Performance monitoring**: vendor-specific analytics tools for each major equipment supplier, supplemented by a data lake initiative that has ingested 18 months of performance data but lacks the semantic layer to make it queryable across domains.
- **Customer management (BSS)**: a monolithic platform customized over 15 years to the point where the vendor's standard upgrade path is no longer viable.
- **Workforce management**: a separate system that dispatches field engineers but has no real-time integration with fault management, creating situations where technicians arrive at sites without current diagnostic information.

This is not an exceptional case. Industry surveys consistently report that tier-one operators maintain 500-1,500 distinct IT systems, with tier-two operators maintaining 200-500 (TM Forum, 2023). The fragmentation is not accidental; it is the accumulated geological record of decades of technology evolution, vendor lock-in, corporate mergers, and regulatory compliance additions — each layer deposited atop the previous without integration.

### 3.2 The Consequences of Fragmentation

The operational consequences are measurable. TelCo Alpha's mean time to repair (MTTR) for a broadband fault is approximately 14 hours, of which an estimated 60% is spent on diagnosis rather than remediation. The diagnosis time is dominated not by technical complexity but by the need to correlate information across systems that do not share common identifiers. A single customer fault may require queries to the CRM (to identify the customer's service profile), the inventory system (to identify the physical path), the fault management system (to check for correlated alarms), the performance monitoring system (to identify degradation trends), and the workforce management system (to determine if a field visit has already been scheduled). Each query requires a different interface, a different authentication, and a different mental model.

The financial consequences are equally concrete. Industry benchmarks suggest that operational inefficiency attributable to system fragmentation costs operators 15-25% of their total operational expenditure (McKinsey, 2024). For a mid-tier operator with EUR 2 billion in annual revenue and a 30% opex ratio, this represents EUR 90-150 million per year in avoidable cost.

---

## 4. The Digital Twin as Boundary Object for Telecommunications

### 4.1 Beyond Visualization

The term "digital twin" in telecommunications discourse is frequently conflated with network visualization — a 3D or topological map of network assets that operators can inspect on a screen. This conflation obscures the deeper value proposition. A digital twin in the sense relevant to autonomous operations is not a visualization; it is a continuously synchronized computational model of a complex system that maintains sufficient fidelity to support simulation, prediction, and automated decision-making.

For telecommunications, this means the digital twin must represent three interconnected domains simultaneously:

1. **The physical network**: the geographic locations, physical connections, power systems, and environmental conditions of every network element from core routers to customer premises devices.
2. **The logical network**: the configurations, routing tables, service chains, and traffic flows that determine how data moves through the physical infrastructure.
3. **The operational network**: the trouble tickets, maintenance schedules, capacity plans, and customer interactions that determine how the physical and logical networks are managed.

These three domains correspond to three communities of practice that currently operate with limited mutual legibility: network engineering, service management, and business operations. The digital twin's role is to serve as a coincident boundary object (Star & Griesemer, 1989) that makes each domain's reality legible to the others without requiring ontological unification.

### 4.2 The Data Harmonization Problem

The first layer of the proposed architecture addresses the fundamental challenge: ingesting data from heterogeneous sources without requiring source system replacement. This is where the interoperability framework (Section 2.3) becomes operationally relevant.

At the technical layer, telecommunications networks communicate through hundreds of distinct protocols: SNMP, NETCONF, YANG, TR-069, MQTT, proprietary vendor APIs, flat-file exports, and manual spreadsheet uploads. A data harmonization layer must normalize these into a common representation without losing the semantic richness of the source protocols. This is analogous to the challenge that faced the building automation industry with its fragmentation across BACnet, Modbus, LonWorks, and KNX — a challenge that has been partially resolved through gateway architectures and middleware but never through protocol replacement (Bushby, 1997).

The semantic layer is more challenging. Different systems use different ontologies for the same physical reality. A "port" in an inventory system may correspond to a "interface" in a performance monitoring system and a "connection point" in a fault management system. These are not merely naming conventions; they carry different assumptions about granularity, state, and relationships. A knowledge graph architecture — specifically, a property graph with explicit ontology mappings — provides the most promising approach to semantic harmonization without semantic standardization.

### 4.3 The Simulation Layer

Even a perfectly harmonized data layer would not constitute a digital twin in the generative sense. Network observability has inherent gaps: not every device reports telemetry, not every interaction is logged, not every degradation is immediately detectable. The simulation layer fills these gaps through physics-informed inference — using known network behavior models to estimate unobserved states from observed ones.

For example, if a fiber route's measured latency increases by 15% but no fault alarms have been raised, the simulation layer can infer potential causes (fiber degradation, splice loss, equipment aging) by modeling the physical characteristics of the route against its historical performance profile. This inference does not replace measurement; it generates hypotheses that can be validated by targeted measurement or field inspection.

The simulation layer also enables what-if analysis: the ability to model the consequences of proposed changes (rerouting traffic, decommissioning equipment, activating redundancy) before executing them in the live network. This capability is the prerequisite for autonomous decision-making — an AI agent cannot safely act on the network without the ability to simulate the consequences of its actions.

---

## 5. Agentic AI Personas for Network Operations

### 5.1 From Monolithic AI to Persona-Based Squads

The dominant paradigm for AI in telecommunications follows a monolithic pattern: a single analytics platform ingests network data and produces insights (anomaly detection, capacity forecasts, churn predictions) that are presented to human operators through dashboards. This paradigm has delivered measurable value but cannot achieve autonomous operations because it treats AI as an advisory layer rather than an operational one.

The alternative proposed here organizes AI capabilities as persona-based autonomous agents, each mapped to a specific operational process and equipped with the authority and tools to act within defined boundaries. This is analogous to the organizational structure of a network operations center (NOC), where different roles (fault analyst, capacity planner, security analyst, change manager) have different responsibilities, different data needs, and different decision authorities. The agentic AI architecture replicates this organizational structure in software.

Each persona is designed around three properties:

1. **Process scope**: the operational process the persona is responsible for (e.g., fault diagnosis, capacity optimization, security response).
2. **Data access**: the subset of the digital twin that the persona can query and the level of detail it receives.
3. **Action authority**: the range of actions the persona can take autonomously versus those requiring human approval.

### 5.2 The Neurosquad Pattern

Beyond individual personas, the architecture supports composed squads — groups of personas that collaborate on complex operational scenarios. A network degradation event, for example, might activate a fault diagnosis persona, a customer impact persona, and a remediation planning persona simultaneously. These three agents share situational awareness through the digital twin, negotiate a coordinated response through an orchestration layer, and escalate to human operators only when the response exceeds their combined authority or when the simulation layer cannot predict consequences with sufficient confidence.

This pattern — which practitioners in the industry have termed "neurosquads" — addresses a limitation of single-agent AI systems: the inability to simultaneously optimize across multiple operational dimensions (network performance, customer experience, cost, regulatory compliance) without explicit multi-objective coordination.

### 5.3 The Legacy Knowledge Problem

A critical challenge for agentic AI in telecommunications is the legacy knowledge problem. The data science teams that historically built network analytics — typically 30-50 engineers in a mid-tier operator — possess deep domain knowledge about network behavior, fault patterns, and optimization heuristics. This knowledge is largely tacit: embedded in model parameters, feature engineering choices, and interpretation practices rather than in documented rules.

The transition to agentic AI must enroll this knowledge rather than discard it. The SECI model (Nonaka & Takeuchi, 1995) provides a framework: the Socialization phase involves AI engineers working alongside domain experts; the Externalization phase involves encoding domain heuristics as agent rules and reward functions; the Combination phase involves integrating these rules with the digital twin's simulation layer; and the Internalization phase involves the organization learning to trust and refine AI-generated decisions. Skipping the Socialization phase — a common temptation in organizations eager to deploy AI quickly — produces agents that lack the domain grounding to make reliable autonomous decisions.

---

## 6. Enrolling Legacy Systems: A Translation Analysis

### 6.1 Problematization

In Callon's (1986) framework, problematization is the moment when an actor defines a problem in terms that make itself indispensable to the solution. For the digital twin, problematization occurs when the operator recognizes that its fragmentation is not merely an efficiency problem but an existential one: competitors deploying autonomous networks will achieve cost structures and service quality levels that fragmented operators cannot match.

### 6.2 Interessement

Interessement involves placing devices between the actors to be enrolled and their existing alliances. For legacy systems, this means deploying data harmonization adapters that extract data from source systems without requiring changes to those systems. The critical design principle is non-invasiveness: the legacy system continues to function exactly as before, but its data is now also available to the digital twin. This reduces the perceived risk to the communities of practice that depend on the legacy system, which is the primary source of enrollment resistance.

### 6.3 Enrollment

Enrollment occurs when the enrolled actors accept the roles defined for them. For legacy systems, enrollment is achieved when the digital twin demonstrates value that the legacy system cannot provide alone — typically, cross-domain correlation (combining data from multiple legacy systems to produce insights none could generate independently). The first successful cross-domain correlation that prevents a major outage or resolves a chronic fault is typically the enrollment moment.

### 6.4 Mobilization

Mobilization is the final moment: the enrolled actors become active participants in the network. For legacy systems, mobilization occurs when the digital twin becomes the authoritative source of truth for cross-domain decisions, and the legacy systems are recognized as domain-specific data sources rather than competing representations of reality.

---

## 7. Propositions

The following propositions are offered as testable claims that structure the contribution:

**Proposition 1 (Boundary Object Efficacy):** A telecommunications digital twin that simultaneously represents the physical, logical, and operational network will reduce mean time to diagnose (MTTD) by at least 40% compared to fragmented systems, because the elimination of cross-system correlation effort removes the primary temporal bottleneck in fault diagnosis.

**Proposition 2 (Non-Invasive Enrollment):** Digital twin architectures that extract data from legacy systems without requiring source system modification will achieve operational enrollment (defined as cross-domain data correlation) within 6 months, whereas architectures requiring source system changes will fail to enroll within 24 months due to vendor and organizational resistance.

**Proposition 3 (Agentic Superiority at Tempo):** Persona-based AI agents operating on a digital twin will complete the OODA loop for standard fault remediation in under 5 minutes, compared to 4-14 hours for human-mediated processes, because the Orient phase (cross-domain correlation) is automated.

**Proposition 4 (Legacy Knowledge Transfer):** Operators that invest in a structured SECI-based knowledge transfer program between domain expert data scientists and agentic AI engineers will produce agents with 30% fewer false-positive autonomous actions in the first year of deployment, compared to operators that deploy agentic AI without explicit knowledge transfer.

---

## 8. Limitations

Several limitations constrain this analysis. First, the archetype is composite; no single operator was studied with the depth required for empirical claims. The propositions are therefore theoretical and await empirical testing. Second, the analysis does not address the regulatory dimension — specifically, the question of whether autonomous network actions require human oversight under emerging AI governance frameworks (EU AI Act, Article 14). Third, the security implications of a unified digital twin — which by definition concentrates comprehensive network knowledge in a single platform — are acknowledged but not analyzed in depth; this warrants dedicated security architecture research. Fourth, the analysis assumes that operators have the organizational capacity to execute the proposed architecture; the significant organizational change management requirements are noted but not addressed.

---

## 9. Future Research Directions

Three research directions emerge from this analysis. First, empirical case studies of operators at different stages of digital twin maturity would enable testing of the propositions and refinement of the architecture. Second, the interaction between digital twins and Open RAN architectures — which disaggregate network functions in ways that may either simplify or complicate digital twin representation — warrants dedicated investigation. Third, the application of the boundary object framework to multi-operator digital twins (e.g., for roaming optimization or shared infrastructure management) represents an extension from intra-organizational to inter-organizational integration that may require new theoretical tools.

---

## 10. Conclusion

The telecommunications industry's path to autonomous, self-healing networks does not require replacing its fragmented legacy systems. It requires making them legible. The digital twin, understood as a coincident boundary object that simultaneously represents the physical, logical, and operational dimensions of a network, provides the integration substrate that current architectures lack. Agentic AI personas, organized as process-mapped squads and operating at machine tempo through the OODA loop, provide the operational capability that human-mediated processes cannot match. The enrollment of legacy systems — analyzed through Actor-Network Theory as a sociological rather than merely technical challenge — is the critical success factor.

The central claim of this article is an inversion: autonomy does not require greenfield infrastructure. It requires a representation layer — a digital twin — that makes brownfield infrastructure as legible to AI agents as greenfield infrastructure would be by design. The operators who recognize this first will achieve autonomous operations on existing networks while their competitors wait for infrastructure that does not yet exist.

---

## References

Boyd, J. R. (1987). *A discourse on winning and losing*. Air University Library Document No. M-U 43947.

Bushby, S. T. (1997). BACnet: A standard communication infrastructure for intelligent buildings. *Automation in Construction*, 6(5-6), 529-540.

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St. Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge?* (pp. 196-233). Routledge.

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128-152.

European Commission. (2017). *New European interoperability framework: Promoting seamless services and data flows for European public administrations*. Publications Office of the European Union.

Latour, B. (2005). *Reassembling the social: An introduction to actor-network-theory*. Oxford University Press.

McKinsey & Company. (2024). *Network automation: The path to autonomous operations*. McKinsey Technology Report.

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Nonaka, I., & von Krogh, G. (2009). Tacit knowledge and knowledge conversion: Controversy and advancement in organizational knowledge creation theory. *Organization Science*, 20(3), 635-652.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907-39. *Social Studies of Science*, 19(3), 387-420.

TM Forum. (2023). *Digital transformation tracker: 2023 industry benchmarks*. TM Forum Research Report.

Waern, N. (2026). The reality construct: Boundary objects, digital twins, and the epistemology of shared representation. *WINNIIO Research Working Papers*. DOI: 10.5281/zenodo.19587944.
