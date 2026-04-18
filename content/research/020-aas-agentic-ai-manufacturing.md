---
title: "Asset Administration Shell Meets Agentic AI: The Quiet Revolution in Manufacturing Digital Twins"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: Asset Administration Shell, AAS, agentic AI, manufacturing digital twin, Digital Product Passport, IEC 62832, Industry 4.0, EU regulatory alignment, Actor-Network Theory, autonomous decision-making, industrial ontology, design science research
status: ready
date: 2026-04-16
---

# Asset Administration Shell Meets Agentic AI: The Quiet Revolution in Manufacturing Digital Twins

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The Asset Administration Shell (AAS) specification, developed by a multi-nation industrial working group under the IEC 62832 framework, provides a standardised digital representation of industrial assets — their identity, capability model, and communication interface — as a foundation for interoperable Industry 4.0 deployments. The AAS is a powerful boundary object: it is sufficiently general to accommodate assets from steel mills, automotive plants, pharmaceutical facilities, and logistics networks, while sufficiently structured to enable machine-to-machine communication across enterprise boundaries. But the original AAS conception is fundamentally static: it describes an asset; it does not reason about it. This paper analyses what happens when agentic AI — autonomous, tool-using AI systems capable of multi-step reasoning and environment interaction — is coupled with AAS-structured digital twins. We argue that the combination constitutes a qualitative shift from the industrial internet of things to genuinely autonomous manufacturing intelligence: AAS provides the semantic substrate; agentic AI provides the reasoning and action layer. We trace this coupling through three concrete use cases — predictive maintenance under supply chain disruption, Digital Product Passport (DPP) auto-generation for EU regulatory compliance, and cross-facility production optimisation — using Actor-Network Theory to identify the translation moments and actant enrollments required in each case. We engage the primary counter-argument that AAS complexity makes agentic coupling impractical at scale, and argue that complexity is being resolved through submodel standardisation and ontology alignment rather than reduced through simplification. Three falsifiable propositions are stated. We distinguish carefully between what existing AAS deployments provide and what the proposed agentic coupling would add. The paper contributes a framework for evaluating AAS deployments by their readiness for agentic extension.

**Keywords:** Asset Administration Shell, AAS, agentic AI, manufacturing digital twin, Digital Product Passport, IEC 62832, Industry 4.0, EU regulatory alignment, Actor-Network Theory, autonomous decision-making, industrial ontology, design science research

---

## 1. Introduction: The Shell Without an Agent

The Asset Administration Shell is, in the literal sense of the term, a shell. It is a standardised envelope that wraps a physical or virtual asset — a robot, a production line, a batch of pharmaceutical product, a building — and exposes its identity, properties, and interfaces to the digital world in a machine-readable format. The AAS specification, developed iteratively by an international working group that spans over a hundred member organisations from more than twenty nations, represents one of the most serious attempts to standardise the semantic layer of industrial digital twins.

The shell is impressive engineering. It provides a common information model across asset classes and industries, a standardised submodel library for common properties (nameplate data, technical properties, handover documentation), a communication interface (REST API and OPC-UA bindings), and an emerging governance model for cross-enterprise shell exchange. Several industrial nations have published national roadmaps for AAS adoption as the foundation of their Industry 4.0 infrastructure. EU regulatory instruments, including the emerging Digital Product Passport requirements under the Ecodesign for Sustainable Products Regulation, are being aligned to AAS as a candidate data carrier format.

But the shell, as currently specified, does not act. It stores data about an asset. It responds to queries about that data. It does not reason about the asset's state, generate hypotheses about its future behaviour, propose maintenance actions, or negotiate with the shells of other assets to optimise a production network. The AAS is a knowledge representation artefact, not an agent.

This distinction matters because the gap between knowledge representation and autonomous reasoning is exactly the gap that agentic AI — large language model-based agents equipped with tool use, planning, and multi-step reasoning — is beginning to close. An agentic AI system can take an AAS as its primary information source about an asset and use that structured, semantically rich representation to reason about the asset's state, history, and future behaviour in ways that a traditional rules-based monitoring system cannot.

The question this paper addresses is: what does agentic coupling with AAS enable, what does it require, and what translation work must be done to make it viable at manufacturing scale?

---

## 2. Theoretical Framework

### 2.1 Design Science Research and Artefact Distinction

This paper follows Design Science Research (DSR) methodology [1]. We distinguish explicitly between existing AAS capabilities (the information model, the submodel library, the REST and OPC-UA bindings, the shell exchange protocols) and the proposed agentic coupling (the layer we are arguing for). Neither the coupling architecture nor the use cases described are the current operational practice of industrial AAS deployments. They are designed artefacts in the DSR sense: proposals justified by analytical argument and evaluated against scenario criteria.

### 2.2 ANT and Industrial Standards Networks

ANT [2][3] is appropriate for analysing AAS because the AAS is precisely the kind of network actant that ANT is designed to study: a non-human artefact that actively shapes the behaviour of the human and machine actors who interact with it, whose properties are the result of sustained negotiation among heterogeneous interests, and whose influence depends entirely on sustained enrolment by a critical mass of industrial actors.

The AAS working group is itself an ANT object: a translation arena in which device manufacturers, system integrators, regulatory bodies, and standards organisations negotiate the inscriptions that will determine the AAS's properties. Each submodel specification is the outcome of a specific translation: a negotiation between the interests of asset manufacturers (who want flexibility), system integrators (who want interoperability), and end users (who want simplicity) that is resolved by inscribing a specific data structure in the standard.

### 2.3 The SMILE Methodology

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), each use case analysis evaluates the proposed agentic AAS coupling by a single criterion: does it move a manufacturing organisation from an as-is state of reactive, data-rich but insight-poor digital twin operation to a to-be state of proactive, autonomous decision support? The delta between these states is the impact being sought.

---

## 3. The AAS as Semantic Substrate: Current State

### 3.1 What the AAS Provides

The AAS specification (Part 1: Metamodel, Part 2: Security, Part 3: HTTP/REST API) provides:

**Asset identity and descriptor layer.** Every asset has a globally unique identifier, a globally unique asset identification, and a set of administrative properties (creator, version, revision). This identity layer makes AAS shells addressable across enterprise boundaries without requiring a centralised registry.

**Submodel library.** Standardised data structures for common asset properties: nameplate (manufacturer data, product designation, serial number), technical properties (component-specific parameters), handover documentation (maintenance manuals, calibration certificates), and an expanding library of domain-specific submodels. Standardised submodels exist for photovoltaic systems, machine tools, valve assemblies, and a growing range of industrial asset classes.

**Communication interfaces.** REST API bindings enable shell queries via HTTP, making AAS data accessible to any system capable of HTTP communication. OPC-UA bindings enable real-time data exchange with industrial control systems.

**Shell exchange protocol.** The AASX package format enables AAS shells to be exported from one system and imported into another, supporting asset lifecycle documentation transfer (manufacturer to customer, operator to maintenance provider, recycler to material recovery system).

### 3.2 What the AAS Does Not Provide

The current AAS specification does not provide:

**Inference.** The AAS does not reason about asset state. It stores the last known value of sensor readings; it does not infer from those readings what the asset's likely condition is.

**Prediction.** The AAS does not model future asset behaviour. It does not predict failure probability, maintenance window, or capacity constraint.

**Negotiation.** The AAS does not communicate with other AAS instances to negotiate production schedules, share capacity, or coordinate maintenance windows.

**Action generation.** The AAS does not generate maintenance orders, production schedule modifications, or procurement recommendations. It is queried; it does not initiate.

These are the capabilities that agentic AI can add, given the AAS as semantic substrate.

---

## 4. Agentic AI: From Static Shell to Active Reasoner

### 4.1 What Agentic AI Adds

Agentic AI, as described in recent literature on large language model agents [4][5], combines:

**Structured reasoning over tool outputs.** An agentic system can read an AAS submodel, interpret its values in the context of a maintenance question, and produce a structured response that integrates AAS data with external knowledge sources (manufacturer documentation, historical failure databases, environmental data).

**Tool use and environment interaction.** An agentic system can not only read AAS data but write to it — updating operational parameters, logging maintenance events, or flagging anomalies — when given appropriate authorisation and guardrails.

**Multi-step planning.** An agentic system can decompose a complex manufacturing optimisation problem (minimise downtime across a ten-asset production line given a supply chain disruption) into a sequence of AAS queries, calculations, and external data retrievals, producing a structured recommendation that a human operator can review and approve.

**Cross-shell coordination.** An agentic system can query multiple AAS instances simultaneously — the shell of a production line asset, the shells of its input material suppliers, the shell of the downstream quality control system — and reason about the interactions between them.

### 4.2 The Coupling Architecture

The proposed coupling architecture places an agentic AI layer between the AAS infrastructure and human operators:

- The AAS provides the semantic substrate: structured, machine-readable, semantically consistent asset data accessible via standard APIs.
- The agentic layer provides the reasoning substrate: a large language model-based agent with access to AAS query tools, external database tools, and calculation tools, operating under a strict system prompt that defines its scope, constraints, and escalation conditions.
- The human operator provides the decision and approval layer: every agentic recommendation that triggers a physical action (maintenance order, production schedule change, procurement request) requires explicit human authorisation before execution, consistent with EU AI Act Article 14 requirements for meaningful human oversight on high-stakes AI-assisted decisions.

This architecture is proposed, not deployed. The enabling conditions — stable AAS submodel coverage of the relevant asset class, REST API accessibility of the AAS infrastructure, and a production-grade agentic AI runtime — are available in advanced deployments but not universal.

---

## 5. Three Use Cases: ANT Analysis

### 5.1 Use Case 1 — Predictive Maintenance Under Supply Chain Disruption

**As-is.** A manufacturing facility operates a fleet of precision CNC machining centres, each with an AAS containing nameplate data, technical properties, and operational parameters (spindle hours, cutting tool changes, coolant levels, error codes). Maintenance is condition-based: sensor threshold breaches trigger maintenance orders. When a specific replacement spindle assembly is unavailable due to a supply chain disruption, the maintenance team must manually assess which assets can continue operating, for how long, and under what adjusted parameters.

**Actants and translations.** The agentic coupling must translate: (a) AAS sensor history into a degradation model (the agent reads time-series spindle vibration data and infers remaining useful life); (b) the degradation model into a risk-ranked queue (which assets are closest to failure threshold?); (c) the risk queue into an adjusted maintenance schedule that accounts for the availability of substitute components from other machines or vendors; (d) the adjusted schedule into a recommendation formatted for human operator approval.

**Translation bottleneck.** The critical translation is (a): from raw sensor history to a calibrated degradation model. Current AAS submodel specifications do not define a standard format for time-series sensor history at the granularity required for degradation modelling. The submodel library provides instantaneous values, not histories. This is a gap in the current AAS specification that the agentic coupling exposes.

**To-be.** With a time-series submodel extension (proposed) and an agentic layer, the facility can move from reactive maintenance scheduling under disruption to proactive remaining-useful-life-aware scheduling that accounts for component availability. The impact delta is measured in unplanned downtime reduction.

### 5.2 Use Case 2 — Digital Product Passport Auto-Generation

**As-is.** The EU Ecodesign for Sustainable Products Regulation (ESPR), entering force across product categories through 2026–2030, requires Digital Product Passports (DPP) for an expanding set of products. A DPP is a machine-readable record of a product's composition, environmental impact, repairability score, and end-of-life instructions — analogous in structure to an AAS shell. Current DPP generation is largely manual: compliance teams extract data from ERP systems, supplier declarations, and product documentation and manually populate DPP templates.

**Actants and translations.** The AAS contains much of the raw material for DPP generation: nameplate data provides identity and composition declarations; technical property submodels provide material specifications; operational history submodels provide energy consumption data; handover documentation submodels provide maintenance instructions. An agentic AI layer can translate from AAS submodel data to a DPP-compliant output by: (a) querying relevant AAS submodels; (b) mapping AAS property identifiers to DPP data field equivalents; (c) identifying gaps (data present in AAS but not in DPP format, or data required for DPP but absent from AAS); (d) generating a draft DPP with gaps flagged for human review.

**Translation bottleneck.** The critical translation is (b): mapping AAS property identifiers to DPP data field equivalents. No authoritative mapping between the AAS submodel library and the emerging DPP data models exists as a published standard. This mapping is currently being developed in parallel by standards bodies and is the actant whose successful enrolment in the network will determine whether AAS-to-DPP auto-generation is tractable.

**To-be.** With the mapping and the agentic layer in place, DPP generation becomes a continuous, automated process rather than a quarterly compliance exercise. The impact delta is compliance cost reduction and data freshness improvement.

### 5.3 Use Case 3 — Cross-Facility Production Optimisation

**As-is.** A manufacturing group operates three production facilities with overlapping product lines. Production scheduling is facility-local: each facility optimises its own schedule against its own capacity, maintenance windows, and material inventory. Cross-facility optimisation — transferring production orders between facilities when one is constrained — requires manual coordination between facility managers, supported by ERP data exported to a central planning spreadsheet.

**Actants and translations.** An agentic layer with access to the AAS shells of assets across all three facilities can: (a) query current capacity and utilisation across the fleet; (b) identify transferable production orders (those that can be manufactured at a facility other than the original assignment); (c) model the cost and lead-time implications of each transfer option; (d) generate a ranked list of transfer recommendations for human review and approval.

**Translation bottleneck.** The critical translation is establishing cross-enterprise AAS shell visibility — the infrastructure by which facility A's AAS shells are queryable by a system operating on behalf of the group, with appropriate access control. The AAS shell exchange protocols support this technically, but the organisational governance (which entity is authorised to run the cross-facility agentic layer? under what data sharing agreement?) is the bottleneck.

---

## 6. Counter-Argument: AAS Complexity at Scale

The primary counter-argument to agentic AAS coupling is complexity. The AAS specification is technically rich and demands significant implementation effort per asset class. An industrial facility with ten thousand assets from hundreds of different manufacturers, each requiring a bespoke submodel configuration, faces an onboarding cost that may exceed the operational value of the resulting digital twin infrastructure — particularly if the agentic layer requires additional submodel extensions that are not yet standardised.

This argument is correct about the current state of many industrial deployments. AAS adoption outside of lighthouse projects and standards-body demonstration environments is limited by the complexity of per-asset submodel configuration.

But the counter-argument underestimates the trajectory of submodel standardisation. The AAS working group's submodel library is growing rapidly, and its governance process — which requires submodels to be validated against actual deployment scenarios before standardisation — is producing specifications that are practically deployable rather than theoretically elegant. The complexity that makes AAS challenging to deploy is the complexity of representing real industrial assets; there is no simpler representation that preserves the semantic richness required for multi-vendor, cross-enterprise interoperability.

The agentic coupling actually reduces the effective complexity of AAS interaction for human operators: instead of navigating the AAS's technical structure directly, operators interact with the agentic layer in natural language and receive structured recommendations. The complexity is absorbed by the agentic layer, not eliminated.

---

## 7. Falsifiable Propositions

1. **The degradation modelling proposition:** Manufacturing facilities that deploy agentic AI layers over AAS-structured digital twins, with time-series submodel extensions for sensor history, will achieve statistically significant reductions in unplanned downtime compared to facilities with equivalent AAS infrastructure but without agentic layers. This proposition can be falsified by a controlled comparison study showing no significant downtime reduction attributable to the agentic layer after controlling for asset age and maintenance regime.

2. **The DPP compliance proposition:** AAS-to-DPP automated generation, once a standardised property mapping is available, reduces DPP compliance cost per product category by at least 60% compared to manual DPP generation. This proposition can be falsified by a cost study of early DPP auto-generation deployments showing compliance cost reduction below this threshold.

3. **The governance bottleneck proposition:** In cross-facility AAS deployment, organisational governance (data sharing agreements, access control models, liability allocation) is the primary bottleneck for agentic layer deployment — more consequential than technical barriers. This proposition can be falsified by a survey of industrial digital twin practitioners reporting technical complexity as the primary barrier more frequently than governance complexity.

---

## 8. Limitations and Future Research

This paper is analytical rather than empirical. The three use cases are constructed scenarios, not case studies of deployed systems. The impact claims (downtime reduction, compliance cost reduction) are analytically derived rather than empirically validated.

The AAS specification is under active development; the submodel library referenced reflects the state as of early 2026. Specifications change; readers should verify currency against the current Industrial Digital Twin Association (IDTA) publication status.

The agentic AI capabilities described are based on published research on large language model agents; they are not specific to any vendor's product. The coupling architecture is generic by design.

Future research should: (1) instrument a real industrial AAS deployment with an agentic layer and measure the impact on maintenance decision quality and speed; (2) develop and validate an AAS-to-DPP property mapping for at least one product category; (3) conduct a governance framework analysis for cross-enterprise agentic AAS deployments in the EU regulatory context.

---

## 9. Conclusion

The Asset Administration Shell is one of the most consequential standards initiatives in industrial digitalisation. Its combination of semantic richness, cross-vendor generality, and EU regulatory alignment positions it as the likely information backbone of the European industrial internet. But in its current form, it is a knowledge representation infrastructure without a reasoning layer.

Agentic AI provides the reasoning layer. The combination — AAS as semantic substrate, agentic AI as reasoning and action engine — transforms the static shell into an active participant in manufacturing operations: one that can interpret asset state, predict failure trajectories, generate maintenance schedules under constraint, auto-populate compliance documents, and coordinate across facility boundaries, all under human oversight.

The translation work required is substantial and specific: time-series submodel extensions, AAS-to-DPP property mappings, and cross-enterprise governance frameworks. None of these is a research problem; they are engineering and governance problems with clear paths forward. The ANT analysis identifies where the critical actant translations are stalling and what specific enrollments would unblock them.

The quiet revolution in manufacturing digital twins is already underway. The AAS provides the body; agentic AI provides the capacity for autonomous action. Together, they constitute a genuinely new kind of industrial intelligence — one that acts rather than merely reports.

---

## References

[1] Hevner AR, March ST, Park J, Ram S. Design science in information systems research. *MIS Quarterly* 2004;28(1):75–105.

[2] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[3] Latour B. *Science in Action.* Harvard University Press, 1987.

[4] Yao S, Zhao J, Yu D, et al. ReAct: Synergizing reasoning and acting in language models. *arXiv* 2022. arXiv:2210.03629.

[5] Wang L, Ma C, Feng X, et al. A survey on large language model based autonomous agents. *Frontiers of Computer Science* 2024;18(6):186345.

[6] Industrial Digital Twin Association (IDTA). Asset Administration Shell Specification Part 1: Metamodel. Version 3.0, 2023.

[7] Industrial Digital Twin Association (IDTA). AAS Submodel Template Library. 2025. https://industrialdigitaltwin.org/en/content-hub/submodels

[8] European Commission. Regulation on Ecodesign for Sustainable Products (ESPR). COM(2022) 142, 2022.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
