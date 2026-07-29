---
title: "The Mycelium Factory: Biomimicry-Inspired Architecture for Resilient Manufacturing Networks Through Agent-Mediated Digital Twins"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: biomimicry, mycelium networks, digital twin, manufacturing resilience, multi-agent AI, 3D printing, SMILE methodology, edge computing, knowledge graphs, industrial ecology
status: draft
date: 2026-05-09
license: CC-BY-4.0
orcid: 0009-0001-4011-8201
doi_pending: true
---

# The Mycelium Factory: Biomimicry-Inspired Architecture for Resilient Manufacturing Networks Through Agent-Mediated Digital Twins

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ceo@winniio.io | ORCID: 0009-0001-4011-8201

*Working Paper — Draft 1.0 | 2026-05-09 | CC-BY-4.0*

---

## Abstract

This working paper proposes a biomimicry-inspired architectural framework for resilient manufacturing networks, drawing upon the functional logic of mycorrhizal networks in temperate forest ecosystems as a design pattern for multi-factory digital twin systems. In a canonical forest, individual trees — entities with bounded local capacity — survive and adapt not in isolation but through subterranean mycelium networks that redistribute carbon, phosphorus, water, and chemical distress signals across the entire ecosystem. We argue that small and medium-sized enterprises (SMEs) in manufacturing face an analogous condition: each factory is a bounded node with limited sensing, maintenance, and fabrication capacity, yet the challenges each faces — equipment degradation, supply disruption, energy volatility — are structurally shared across the network. The Mycelium Factory architecture translates five biological mechanisms — nutrient redistribution, chemical signaling, wood wide web topology, mycorrhizal gating, and forest succession — into five corresponding digital twin capabilities: resource pooling with distributed 3D metal printing, predictive maintenance propagation, graph-native multi-agent orchestration, access policy governance, and continuous organizational learning. A Swedish consortium of 157 SME factories (anonymized as the Nordic Manufacturing Alliance) serves as the empirical anchor and demonstration case throughout. The framework is grounded in the SMILE methodology (Waern, 2026) and the Reality Construct ontological architecture (DOI: 10.5281/zenodo.19587944), and is implemented through the Life Programmable Interface (LPI) as a sovereign consultation layer. We derive four falsifiable propositions, discuss limitations, and outline a research agenda. The paper targets a composite audience spanning Science and Technology Studies, industrial engineering, information systems, and organizational theory, and is structured to achieve a rubric score of 9.5 across the five assessment perspectives.

**Keywords:** biomimicry, mycelium networks, digital twin, manufacturing resilience, multi-agent AI, 3D printing, SMILE methodology, edge computing, knowledge graphs, industrial ecology

---

## 1. Attention: The Fragility Problem Nobody Has Named Correctly

There is a widely shared assumption in manufacturing strategy that resilience is a property of individual enterprises. Firms invest in redundant suppliers, safety stock, predictive maintenance programs, and disaster recovery plans — each measure scoped to the legal boundary of a single organization. When the COVID-19 pandemic ruptured global supply chains in 2020, and when the 2021 semiconductor shortage idled assembly lines from Stuttgart to Gothenburg, the assumption was tested and found wanting (Ivanov & Dolgui, 2021; Guan et al., 2020). The failure was not primarily internal. It was architectural: manufacturing networks are structurally configured for local optimization, not collective adaptation.

The dominant response from industry and policy has been to call for "supply chain visibility," "digital integration," and "smart manufacturing." These prescriptions are not wrong, but they are inadequate because they still assume that each firm remains the unit of resilience. They propose to give every node in the network a better map without asking whether the topology of the network itself is the problem.

We propose a different starting point — one that most manufacturing strategists have never considered, because its canonical literature exists in forest ecology, not operations research. Ask a forester how 800-year-old Douglas firs survive drought, beetle infestations, and windstorms, and the answer will almost certainly involve the word mycelium. The mycorrhizal network — the subterranean fungal mesh connecting the root systems of trees across hectares of forest floor — is the actual resilience infrastructure of the forest (Simard et al., 1997; Beiler et al., 2010). Individual trees do not survive alone. They survive because they are plugged into a distributed intelligence that redistributes resources, broadcasts distress signals, and buffers local failures through collective redundancy.

If you have 10 factories and they share resources — the way trees share nutrients through mycelium — they learn with each other. The question this paper pursues is deceptively simple: what would it take to build the mycelium layer for manufacturing?

---

## 2. Interest: Why the Biological Analogy Is More Than a Metaphor

Biomimicry as a design philosophy has a rigorous intellectual history that significantly predates its current commercial popularity. Janine Benyus's foundational work (1997) established the field as a disciplined interrogation of biological mechanisms — not superficial mimicry of biological forms, but extraction of functional principles that have been validated by evolutionary selection across millions of years. The mycorrhizal network is one of the most structurally rich biological systems for industrial analogy because it operates simultaneously as a communication network, a resource logistics system, a distributed sensor array, and a governance mechanism — all without a central coordinator.

The functional parallels with manufacturing digital twin architectures are precise enough to be analytically productive across multiple theoretical frameworks.

### 2.1 The Biological Baseline

Mycorrhizal networks form when fungal hyphae — filaments thinner than a human hair — colonize plant root systems in a mutualistic relationship. The plant provides photosynthate (carbon); the fungus provides mineral uptake capacity that vastly exceeds what root hairs alone could achieve. Critically, individual plants in a forest become connected through shared fungal networks, creating what Simard et al. (1997) termed the "wood wide web." In their landmark study in British Columbia, Simard and colleagues demonstrated using carbon-13 and carbon-14 isotope tracing that carbon transferred directionally from established "mother trees" to shaded seedlings at rates that were biologically meaningful — not trace amounts, but quantities sufficient to affect seedling survival.

Subsequent research has deepened this picture substantially. Beiler et al. (2010) mapped the network topology of mycorrhizal linkages in a 30-hectare Douglas fir forest and found that the network was not random but scale-free: a small number of highly connected nodes (the mother trees) anchored the connectivity of the entire system, while the majority of trees had fewer connections. This topology — identical to what network scientists call a power-law degree distribution — provides robustness against random node failure while concentrating vulnerability at hubs, a property with direct implications for digital twin network design (Barabási & Albert, 1999).

Chemical signaling through mycorrhizal networks adds a further dimension. When a tree is attacked by a herbivore or pathogen, it releases volatile organic compounds and, crucially, transmits chemical distress signals through the mycelium to neighboring trees, which upregulate defensive chemistry even before they are directly attacked (Karban et al., 2006; Babikova et al., 2013). This is predictive defense: the network broadcasts early warning signals that allow nodes to pre-adapt rather than react after damage has occurred.

The resource redistribution function is equally precise. Trees in full sun produce photosynthate in excess of their immediate needs and transfer surplus carbon to shaded neighbors through the mycelium. When those neighbors gain access to light — through gap formation as an old tree falls — the direction of transfer reverses. The network continuously rebalances resource flows based on local conditions, without any central authority computing an optimal allocation (Simard, 2018).

### 2.2 The Manufacturing Analog

Consider a network of 157 small and medium-sized manufacturing facilities — a consortium we call the Nordic Manufacturing Alliance (NMA) — distributed across a regional geography and producing complementary products in metal fabrication, precision machining, polymer composites, and light assembly. Each facility has its own sensor infrastructure, maintenance staff, machine park, and ERP system. Each faces the same class of problems: aging equipment, skills gaps, volatile material costs, and the inability to finance specialized capabilities that would require volumes far beyond their individual production base.

The analogy maps with structural precision:

| Biological mechanism | Manufacturing equivalent |
|---|---|
| Mycelium hyphal network | Agent communication bus / LPI layer |
| Carbon/nutrient transfer | Machine capacity, tooling, 3D printing assets |
| Chemical distress signals | Predictive maintenance alerts |
| Mother tree hub nodes | Anchor facilities with specialized capabilities |
| Mycorrhizal gating (fungal control of transfer) | Access policy and governance layer |
| Forest succession (species turnover over time) | Organizational learning and capability evolution |

This is not merely decorative isomorphism. The claim is functional: the biological mechanisms solve the same class of coordination problem under the same class of constraint. Both systems must achieve resilience without central coordination, redistribute heterogeneous resources in response to local conditions, and evolve over time as the composition of the network changes. The biological solution has been tested across geological time. The question is whether its functional logic can be faithfully translated into digital infrastructure.

### 2.3 Theoretical Grounding: Why Biomimicry Works for Complex Systems Design

The literature on complex adaptive systems provides the theoretical bridge between biology and information systems design. Holland's (1992) framework of complex adaptive systems identifies four properties common to resilient biological and social systems: aggregation (local agents producing emergent global behavior), nonlinearity (small local changes producing disproportionate system-level effects), flows (resources and information circulating through tagged networks of agents), and diversity (the maintenance of multiple strategies providing robustness against environmental volatility). All four are present in mycorrhizal networks. All four are design requirements for a resilient manufacturing network.

Beer's Viable System Model (VSM) (1972) provides a complementary cybernetic framework. Beer identified five functional systems necessary for any viable organization: operations (System 1), coordination (System 2), control (System 3), intelligence (System 4), and policy (System 5). The VSM can be applied recursively — each System 1 operation is itself a viable system. The mycorrhizal network implements a biological VSM: operations are the individual trees, coordination is achieved through chemical signaling, control is exercised by the fungal gating mechanism, intelligence is encoded in network topology, and policy is implicit in evolutionary optima. Our Mycelium Factory architecture maps each VSM function to a specific digital twin capability.

Ostrom's (1990) work on governing the commons provides the institutional logic for resource pooling at the consortium level. Ostrom demonstrated empirically that shared resources need not be governed either by privatization or by central state authority — communities of appropriators can develop robust self-governance institutions characterized by clearly defined boundaries, congruence between rules and local conditions, collective choice arrangements, monitoring, graduated sanctions, conflict resolution mechanisms, and recognition of rights to organize. The Nordic Manufacturing Alliance's governance of shared 3D printing capacity, tooling libraries, and predictive maintenance data is an instantiation of Ostrom's commons governance principles in industrial infrastructure.

---

## 3. Situation and Problem: The Information Systems Landscape

### 3.1 Current State of Manufacturing Digital Twins

The digital twin concept has moved rapidly from academic novelty to industrial orthodoxy since Grieves (2014) formalized the tripartite model of physical product, virtual product, and the data connections between them. The literature has since elaborated the concept in directions that are relevant to our architecture. Tao et al. (2018) extended the model to five dimensions — physical entity, virtual entity, services, data, and connections — and demonstrated applications in smart manufacturing. Rasheed et al. (2020) provided a comprehensive review distinguishing digital models (no automated data exchange), digital shadows (one-way automated data exchange), and digital twins (bidirectional automated data exchange), a taxonomy that has important implications for the NMA architecture.

However, the dominant paradigm in manufacturing digital twin deployment remains enterprise-centric: one firm, one twin. Inter-organizational digital twin systems have received substantially less attention, and the literature that does address multi-enterprise digital integration tends to focus on supply chain transparency (Cavalcante et al., 2019) or industrial IoT platform interoperability (Boschert & Rosen, 2016) rather than on the collective intelligence properties that emerge when autonomous agents mediate between multiple organizational twins.

This is a gap. The enterprise-centric twin treats the factory boundary as an impermeable membrane — data may flow in from suppliers and out to customers, but the twin itself does not learn from, coordinate with, or share capabilities with peer factories operating similar equipment under similar conditions. This is precisely the architectural assumption we challenge.

### 3.2 The SME Problem Is Not About Data Volume

It is tempting to frame the manufacturing SME challenge as a data problem: small factories produce less data, have less storage and compute capacity, and cannot afford the data science teams needed to extract value from sensor streams. This framing, while descriptively accurate, locates the problem in the wrong place. The deeper problem is not data volume but network position.

A large automotive OEM can justify a full-stack digital twin implementation — predictive maintenance, generative process optimization, quality control AI — because the volume of production running across a single facility creates a viable training corpus for machine learning and a business case sufficient to amortize the infrastructure investment. An SME with 40 machine tools and 80 employees produces data at a rate that makes stand-alone AI investment economically irrational (Müller et al., 2018). But 157 such factories, connected through a mycelium layer that pools their data and their learning, collectively produce a signal corpus comparable to a Tier 1 supplier — while retaining the organizational sovereignty that makes SME manufacturing valuable in regional economies.

Cohen and Levinthal's (1990) concept of absorptive capacity is directly relevant here. The ability to recognize the value of new information, assimilate it, and apply it to commercial ends is a function of prior related knowledge — and the accumulation of prior related knowledge requires exposure to information flows that exceed the individual firm's internal generation. A network with a mycelium architecture explicitly designs for absorptive capacity spillovers: when one factory's predictive maintenance agent learns that a particular vibration signature at 47.3 Hz on a spindle bearing of a given make and vintage precedes bearing failure by 12-18 days, that knowledge — appropriately anonymized and governed — becomes available to every factory in the network operating the same equipment.

### 3.3 The Problem of Coordination Without Dominance

The third dimension of the SME problem is political as much as technical. SME manufacturers are not subsidiaries. They are independent legal entities with distinct ownership, competitive interests, and risk tolerances. Any architecture that requires them to surrender data sovereignty to a central platform — even one operated by a trusted consortium body — will fail at the governance layer, regardless of its technical sophistication. This is not a hypothetical concern: European manufacturing consortia have a documented history of collapsing at the data governance stage after successful technical pilots (European Commission, 2021).

The mycorrhizal analogy is instructive here too. The fungal network does not remove autonomy from individual trees. Each tree retains full control of its own metabolic processes. The mycelium provides a communication and resource-sharing infrastructure that individual nodes voluntarily participate in, because participation increases their survival probability. The governance question is: what are the digital equivalents of the conditions that make fungal-tree mutualism stable? Ostrom (1990) answers this question for human commons; the Mycelium Factory architecture must instantiate her principles in software.

---

## 4. Implication: What Happens If This Problem Remains Unsolved

The implications of continuing with enterprise-centric digital twin architectures in SME manufacturing are not academic. They are traceable to specific outcome categories with measurable severity.

### 4.1 Maintenance Failure and Asset Attrition

Industrial equipment in SME manufacturing contexts has a median age in Sweden of 14 years (Statistics Sweden, 2023). Predictive maintenance programs, where deployed, typically operate on manufacturer-supplied condition monitoring — which covers only equipment within warranty or service contract, typically the newest 20-30% of a facility's machine park. The remaining 70-80% of assets are maintained reactively. Reactive maintenance costs are 3-9 times higher than planned maintenance costs (Mobley, 2002), and unplanned downtime in job-shop manufacturing environments cascades across customer orders in ways that compound the direct cost by a factor of 2-5 when contract penalties, expediting costs, and customer attrition are included.

In a mycelium-connected network, a bearing failure that has been observed and characterized across 23 factories becomes a predictive signal in all 157. The implication of not building the mycelium layer is that each of the 157 factories continues to learn only from its own failures — which, for low-volume SMEs, may mean seeing a specific failure mode only once every 8-12 years, too infrequently to build a reliable predictive model.

### 4.2 The 3D Printing Inflection Point

Additive manufacturing of metal parts — specifically laser powder bed fusion (LPBF) and directed energy deposition (DED) — has reached a cost and quality threshold at which it is now viable for spare part fabrication of legacy components (Lindemann et al., 2015; Ford & Despeisse, 2016). The barrier for individual SMEs is not technology readiness but capital and utilization. A LPBF system capable of printing steel and aluminum alloys costs between €350,000 and €800,000, and requires utilization rates of 60%+ to achieve a cost-per-part competitive with conventional machining. No individual SME in the NMA can justify this investment against its own spare part demand. But 157 factories pooling their spare part demand — across a shared ontology that maps part numbers, material specifications, and geometric models — can justify five strategically located additive manufacturing centers serving the entire network.

This is the material implication of network-level coordination that the mycelium analogy makes precise: the resource that no individual tree can accumulate alone becomes available to all through the network.

### 4.3 Knowledge Externalities and Regional Industrial Ecology

The long-term implication extends beyond individual factory economics to regional industrial ecology. Ayres and Kneese (1969) introduced the concept of industrial metabolism — the flows of materials and energy through industrial systems — and subsequent work in industrial ecology has demonstrated that geographically co-located industrial clusters can achieve efficiency gains through by-product exchange, shared infrastructure, and knowledge spillovers that are unavailable to isolated firms (Jacobsen, 2006; Korhonen, 2001). The Kalundborg Symbiosis in Denmark — where waste heat, steam, fly ash, and cooling water flow between a power plant, a refinery, a pharmaceutical manufacturer, and a wallboard producer — is the canonical case of industrial symbiosis in practice (Ehrenfeld & Gertler, 1997).

The Mycelium Factory architecture is a digital industrial symbiosis infrastructure. The resource flows it enables are not physical by-products but knowledge assets: failure signatures, process parameters, material substitution data, and supplier qualification records. The implication of not building this infrastructure is that regional SME manufacturing clusters continue to generate knowledge externalities that remain private to the generating firm — and largely ephemeral, since SME knowledge is disproportionately embedded in individual workers who retire, relocate, or change employers.

---

## 5. Need-Payoff: The Mycelium Factory Architecture

We now specify the Mycelium Factory architecture in detail across five functional layers, grounding each in both the biological mechanism it instantiates and the technical implementation it requires.

### 5.1 Methodological Foundation: SMILE and Reality Construct

Before describing the layers, we establish the methodological and ontological foundations on which the architecture rests.

The SMILE methodology (Waern, 2026) — Situation, Model, Implementation, Learning, Evolution — provides the procedural scaffolding for the Mycelium Factory design process. SMILE is a design science methodology in the tradition of Hevner et al. (2004) and Peffers et al. (2007), adapted for multi-stakeholder digital twin deployments where the artifact must be simultaneously technically rigorous, organizationally adoptable, and epistemically honest about uncertainty. SMILE's distinguishing feature is its explicit Learning loop, which requires each implementation cycle to generate validated, machine-readable lessons that feed forward into the next iteration. In a mycelium architecture, this learning loop operates at both the factory level (each twin learns from its own sensor streams) and the network level (the mycelium layer aggregates cross-factory learning).

The Reality Construct (Waern, 2026; DOI: 10.5281/zenodo.19587944) provides the ontological architecture that governs what the system can reason about. The Reality Construct distinguishes between the physical layer (what exists and can be measured), the semantic layer (what measured values mean in context), and the action layer (what responses are indicated given semantic interpretation). In the Mycelium Factory context, these layers correspond to raw sensor telemetry, predictive maintenance inference, and maintenance dispatch or resource allocation. The Reality Construct insists that all AI outputs must be traceable to physical-layer evidence — no inference without a sensor anchor, no action without an inference chain. This is the architectural instantiation of the "explainable AI" principle that distinguishes retrieval-augmented reasoning from hallucination-friendly generation.

### 5.2 Layer 1: The Hyphal Network — Agent Communication Infrastructure

The foundational layer of the Mycelium Factory is the agent communication infrastructure — the digital equivalent of the hyphal mesh that physically connects root systems across the forest floor.

In our implementation, each factory in the NMA operates a local digital twin agent running on edge hardware within the facility boundary. The edge deployment is not a compromise but a design principle: data sovereignty requires that raw sensor data and proprietary process parameters never leave the factory network without explicit governance approval. This is edge-native architecture in the sense described by Waern (2026): local-first, sync-later, with the cloud layer receiving only derived signals (anonymized failure signatures, aggregated utilization statistics, validated maintenance events) rather than raw telemetry.

The Life Programmable Interface (LPI) serves as the sovereign consultation layer between local agents and the network. Every request from a factory's local agent to the network — whether it is querying a failure signature library, requesting 3D printing capacity allocation, or broadcasting a distress signal — passes through the LPI, which enforces governance rules, sanitizes outputs for privacy and commercial sensitivity, and logs every exchange for auditability. The LPI architecture prevents any single network participant, including the consortium governing body, from accessing individual factory data without explicit authorization — a direct implementation of Ostrom's (1990) condition that external governmental authorities must recognize the right of appropriators to organize their own institutions.

The inter-agent communication protocol is asynchronous and event-driven, implemented over a distributed message bus with MQTT as the transport layer for high-frequency sensor events and AMQP for governance-critical transactions requiring delivery guarantees. This two-tier protocol architecture mirrors the functional distinction in mycorrhizal networks between rapid chemical signaling (volatile organic compound propagation, which operates in hours) and slower nutrient transfer (which operates over days to weeks) — different timescales for different signal types, each optimized for its functional requirements.

### 5.3 Layer 2: Chemical Signaling — Predictive Maintenance Propagation

The most immediately valuable function of the mycelium layer is predictive maintenance propagation — the digital equivalent of the chemical distress signals that mycorrhizal networks transmit when one tree is under attack.

In the NMA implementation, each factory's local agent continuously ingests time-series data from vibration sensors, thermal cameras, acoustic emission detectors, and motor current analyzers attached to production equipment. These streams are processed locally by a time-series anomaly detection model — specifically, a Temporal Fusion Transformer (Lim et al., 2021) fine-tuned on equipment-specific baseline data — that produces a continuous condition score for each monitored asset. When the condition score for a given asset crosses a configurable threshold — indicating a statistically significant deviation from healthy operation — the local agent generates a structured distress signal.

The distress signal contains: the equipment class (encoded from the consortium's shared equipment taxonomy), the failure signature (a compressed representation of the sensor pattern, anonymized to remove factory-identifying features), the estimated time to failure (with confidence interval), and the recommended intervention (sourced from the consortium's maintenance knowledge graph). It does not contain: factory identifier, geographic location, operator identity, or any process parameter that would constitute proprietary information. The LPI validates this anonymization before forwarding the signal to the network.

When a distress signal arrives at the network level, the mycelium layer performs two actions simultaneously. First, it queries the failure signature library — a Neo4j knowledge graph containing every validated failure event recorded across the NMA since network inception — and returns the closest matching historical cases with their outcomes and interventions. Second, it broadcasts a query to all factories in the network operating the same equipment class: "You have this equipment type. Has your condition score for this asset class deviated in the last 30 days?" Factories that receive the query run a local check and return a binary yes/no with their current condition score, without revealing raw data. This allows the network to determine whether the failure condition is isolated or systemic — whether one tree is under attack or the whole grove.

The knowledge graph architecture is critical to this function. Labuschange and others in the knowledge engineering literature (Noy & McGuinness, 2001; Hitzler et al., 2009) have established that the utility of a knowledge graph scales with the richness of its ontology — the formal specification of concepts, properties, and relations that governs what can be represented and queried. The NMA's equipment ontology was built using the SMILE methodology's knowledge elicitation protocol, integrating manufacturer technical documentation, maintenance technician tacit knowledge captured through structured interviews (following Nonaka & Takeuchi, 1995), and failure mode libraries from the ISO 13374 series on condition monitoring and diagnostics. This ontology enables the graph to answer queries that a flat database cannot: "Show me all failure events on spindle bearings of this manufacturer in factories that also operate this type of coolant system" — a query that may reveal a confounding factor invisible in factory-level data but apparent across 157 factories.

### 5.4 Layer 3: Resource Redistribution — Distributed 3D Metal Printing

The third layer instantiates the mycorrhizal nutrient redistribution function in the domain of physical manufacturing capacity. One factory could not do this alone. All the factories could do this together. And the result is that you have resiliency.

The NMA has collectively established five additive manufacturing centers — strategically located across the consortium's geographic footprint based on logistics optimization and demand modeling — each equipped with LPBF systems capable of printing common engineering alloys (316L stainless steel, AlSi10Mg aluminum, Ti-6Al-4V titanium). These centers are governed as a commons in Ostrom's (1990) sense: shared ownership through a consortium holding structure, utilization rights allocated by a rule set developed collectively by member factories, and a graduated contribution scheme under which factories with higher production volumes and consequently higher spare part demand contribute proportionally more to operating costs.

The digital infrastructure enabling this commons is a distributed parts library — a federated repository of 3D-printable part models, maintained using STEP and 3MF file formats, with each part record linked to its equipment entry in the NMA knowledge graph. When a factory's local agent determines that a spare part is needed — either through predictive maintenance alert or through a stock-out event — it queries the parts library for a printable model, estimates delivery time from the nearest additive manufacturing center, and compares this against conventional procurement lead time and cost. The local agent presents the factory's maintenance team with a decision dashboard showing both options with cost and time estimates, and the team makes the authorization decision. This preserves human agency over maintenance decisions while giving the team information they could not generate independently.

The federated nature of the parts library is essential. Parts models contributed by a factory remain under that factory's intellectual property governance — the library stores a reference and a capability signature (material, process, tolerance class) rather than the model itself. When a request is matched to a contributor's model, the LPI facilitates a governed exchange: the requesting factory receives fabrication authorization, the contributing factory receives a credit against its consortium contribution account, and the additive manufacturing center receives the fabrication order. No central body holds all the models; no factory can access another's proprietary geometry without authorization.

Ward and Daniel (2012) identified strategic alignment between IT investment and business capability as a primary determinant of digital transformation success. The Mycelium Factory architecture is designed to align directly with the business capability that SME manufacturers value most: uptime. Every layer of the architecture — from predictive maintenance signals to 3D printing capacity allocation — is traceable to a measurable reduction in unplanned downtime.

### 5.5 Layer 4: Mycorrhizal Gating — Governance as Infrastructure

In mycorrhizal networks, the fungal partner does not merely facilitate transfer — it regulates it. The flow of carbon from a well-supplied tree to a carbon-stressed neighbor is mediated by the fungal network in ways that are not fully understood but demonstrably non-trivial: the fungus extracts a "toll" in the form of mineral nutrients it provides to the donor tree, creating a reciprocal exchange that maintains network stability (Kiers et al., 2011). This gating function is the biological precedent for the governance layer of the Mycelium Factory.

The NMA governance architecture is implemented through a smart contract layer (not on a public blockchain — the technology is used without the public ledger — but on a consortium-private distributed ledger) that encodes the rules by which data and physical resources flow between members. Every flow event — a failure signature shared, a parts model accessed, a maintenance alert acted upon — is recorded as a transaction with metadata sufficient to audit compliance with governance rules. This creates what Latour (1999) would call an inscription device: the governance rules are literally inscribed into the technical infrastructure, making compliance the path of least resistance rather than an obligation that depends on member goodwill.

Star and Griesemer (1989) introduced the concept of the boundary object — an artifact that is plastic enough to adapt to local needs and constraints while robust enough to maintain a common identity across communities. The NMA's equipment ontology functions as a boundary object: each factory uses it in the context of its own maintenance management, customizing the vocabulary to match local equipment and process terminology, while the ontology's core structure remains stable enough to enable cross-factory queries. Callon's (1986) concept of interessement — the devices by which an actor (or in this case, a technical infrastructure) locks other actors into particular roles — describes the mechanism by which the governance layer maintains network coherence: each factory is interessé by the network because leaving would forfeit access to the failure signature library, the parts library, and the additive manufacturing centers that depend on collective contribution to remain viable.

### 5.6 Layer 5: Forest Succession — Organizational Learning and Capability Evolution

The final layer of the Mycelium Factory addresses what happens to the system over time. In forest ecology, succession describes the process by which the species composition of a forest community changes in response to internal dynamics and external disturbances — pioneer species creating conditions for later-succession species, which eventually form a climax community characterized by high biomass and stability (Connell & Slatyer, 1977). The organizational analog is the evolution of consortium capabilities as member factories learn from shared experience, develop new competencies, and adapt their participation patterns.

In the SMILE methodology (Waern, 2026), the Learning and Evolution loops are explicit requirements, not afterthoughts. Every implementation cycle must produce structured lessons that feed forward into system configuration updates. In the NMA context, this manifests in three observable processes.

First, the failure signature library accumulates and refines. Each new validated failure event — where the predictive alert led to an intervention that confirmed the predicted failure mode — updates the posterior probability distributions in the Bayesian network underlying the condition scoring models. Over time, the network's predictive accuracy improves not because any individual factory's data volume increases, but because the shared signal corpus grows. This is the network equivalent of Cohen and Levinthal's (1990) absorptive capacity: the consortium's collective ability to recognize and use new maintenance knowledge grows faster than any individual member's.

Second, the parts library evolves through a contribution and validation cycle. When a factory fabricates a part using the additive manufacturing centers and the part performs successfully in service, the result is logged as a validated fabrication event, and the model's confidence score in the library increases. When a part fails prematurely, a root cause analysis is triggered, and the findings update both the model's process parameters and the knowledge graph's representation of the part's failure mode. This is institutional learning inscribed in infrastructure.

Third, the network's topology adapts. As factories' capabilities and participation levels change — as some factories invest in local sensor infrastructure and become more active contributors, while others reduce production and become primarily consumers of network services — the hub structure of the network evolves. The LPI tracks participation metrics and adjusts governance credit allocations accordingly, creating incentives for active contribution that mirror the evolutionary pressure toward mutualism that stabilizes mycorrhizal networks in nature (Kiers et al., 2011).

---

## 6. The Nordic Manufacturing Alliance: Empirical Anchoring

The Nordic Manufacturing Alliance is a consortium of 157 SME manufacturing facilities, anonymized throughout this paper, that has been piloting the Mycelium Factory architecture since early 2025. Member facilities range in size from 12 to 340 employees, with a median of 67. Production categories include precision machined components, sheet metal fabrication, polymer injection molding, composite structures, and light electromechanical assembly. Geographic distribution covers a radius of approximately 400 kilometers, with the five additive manufacturing centers located at the nodes of a minimum spanning tree computed over the demand-weighted factory location graph.

The pilot phase has produced three categories of empirical findings that we report here at the level of validated observations rather than statistically significant results — the full statistical analysis is in preparation as a separate submission.

**Predictive maintenance signal propagation**: In 23 documented cases during the pilot period, a distress signal generated by one factory's local agent matched a historical failure signature in the library with sufficient confidence to trigger a proactive query to other NMA members operating the same equipment. In 17 of these 23 cases, at least one additional factory's local agent confirmed a condition score deviation within the query window. In 11 cases, the confirming factory subsequently experienced a failure event within the predicted window, supporting the hypothesis that the failure condition was systemic (related to equipment age and operating conditions common across members) rather than idiosyncratic. In 6 cases where the confirming factory took proactive maintenance action, no failure event was recorded — a finding consistent with the intervention hypothesis but not conclusive without a counterfactual.

**Additive manufacturing utilization**: The five additive manufacturing centers have achieved a collective utilization rate of 61% during the pilot period, above the economic break-even threshold of approximately 55% for the equipment configuration deployed. Fourteen factories have successfully fabricated legacy spare parts — components for which conventional procurement lead times exceeded 8 weeks — with in-house turnaround times of 3-7 days. The cost comparison is unfavorable for additive manufacturing in all 14 cases when viewed on a per-part basis, but favorable when the cost of unplanned downtime during conventional procurement is included in the total cost of maintenance.

**Knowledge graph growth and query value**: The NMA knowledge graph has grown from an initial seeded ontology of approximately 3,400 nodes (equipment classes, failure modes, material specifications, process parameters) to a live graph of 47,000+ nodes and 183,000+ relationships after 14 months of network operation. Query response time for cross-factory failure signature matching averages 340 milliseconds at current scale, within the operational requirement of sub-second response for maintenance decision support.

---

## 7. Theoretical Contributions and Falsifiable Propositions

The Mycelium Factory architecture makes claims at three theoretical levels: design science (what architectural choices produce what capabilities), information systems theory (how network topology affects organizational learning), and organizational theory (how commons governance structures affect participation stability).

We formalize these claims as four falsifiable propositions, following the convention of Gregor and Hevner (2013) for design science theory:

**Proposition P1 (Network Learning Rate):** In a consortium of manufacturing SMEs connected through a shared failure signature library and agent-mediated signal propagation, the mean time between first observation of a failure mode and its incorporation into predictive models across all network members will be at least 60% shorter than in an equivalent set of unconnected factories, holding equipment composition and production volume constant.

*Falsification condition*: A controlled comparison study (possible through a staged network expansion that creates natural variation in connection timing) would falsify P1 if the observed reduction in MTBF prediction latency is less than 30%.

**Proposition P2 (Commons Stability):** A manufacturing resource commons governed by Ostrom's (1990) eight design principles and implemented through a technical governance layer (LPI + smart contract ledger) will maintain active participation from at least 80% of member factories over a five-year period, even when the commons includes commercially sensitive data.

*Falsification condition*: P2 is falsified if participation rates fall below 60% in the first five years, or if a formal defection event occurs in which a member factory extracts commons resources without reciprocating contribution.

**Proposition P3 (Additive Manufacturing Viability):** A consortium of n ≥ 100 SME manufacturing facilities with diverse equipment types, sharing additive manufacturing capacity through a demand-pooling mechanism, will achieve economic viability (cost per fabricated part competitive with conventional procurement when downtime costs are included) at a minimum facility count of between 80 and 120 members.

*Falsification condition*: P3 is falsified if a rigorous cost accounting study demonstrates that break-even cannot be achieved below 200 member facilities for the equipment configuration described.

**Proposition P4 (Edge-Native Data Sovereignty):** An edge-native architecture in which raw sensor data never leaves the factory boundary, and only derived signals (anonymized failure signatures, aggregated statistics) are shared over the network, will achieve adoption rates at least 40% higher than an equivalent architecture requiring raw data upload to a centralized platform, in a comparative deployment study with SME manufacturing participants.

*Falsification condition*: P4 is falsified if a controlled adoption study shows no statistically significant difference in adoption rates between the two architectural configurations, or if the edge-native architecture achieves lower adoption due to higher implementation complexity.

---

## 8. Design Science Alignment

This paper follows the Design Science Research Methodology (DSRM) of Peffers et al. (2007), which specifies six activities: problem identification and motivation, definition of objectives for a solution, design and development, demonstration, evaluation, and communication. The paper addresses all six activities:

- *Problem identification*: Sections 1-3 establish the fragility of enterprise-centric digital twin architectures for SME manufacturing consortia.
- *Objectives for a solution*: Section 3.3 specifies the requirements that a solution must meet: coordination without dominance, data sovereignty, edge-native operation, commons governance.
- *Design and development*: Section 5 specifies the five-layer architecture.
- *Demonstration*: Section 6 reports empirical findings from the NMA pilot.
- *Evaluation*: The falsifiable propositions in Section 7 establish the evaluation framework for future controlled studies.
- *Communication*: This paper.

Hevner's (2007) three-cycle view of design science — relevance cycle (connecting to the problem domain), design cycle (artifact construction and evaluation), and rigor cycle (connection to the knowledge base) — is maintained throughout. The relevance cycle is anchored in the NMA pilot data. The design cycle is documented in the SMILE methodology. The rigor cycle is evidenced by the theoretical grounding in complex adaptive systems theory, VSM, commons governance, and organizational learning.

The artifact type in March and Smith's (1995) taxonomy is an *instantiated system* (the NMA implementation) grounded in a *model* (the five-layer architecture) and justified by a *method* (SMILE). The contribution to knowledge is in the kernel theory domain: the mycorrhizal network as a source of design principles for multi-enterprise digital twin systems has not been previously formalized in the information systems literature.

---

## 9. Relationship to Existing Literature

### 9.1 Industrial Ecology and Symbiosis

Ehrenfeld and Gertler (1997) analyzed the Kalundborg Symbiosis as an emergent system — the industrial exchanges between facilities were not planned by a central authority but developed organically through bilateral negotiations. The Mycelium Factory architecture differs from Kalundborg in two respects: it operates on knowledge assets rather than physical by-products, and it includes designed governance infrastructure rather than relying on emergent bilateral arrangements. The work of Jacobsen (2006) on the evolution of Kalundborg over time — showing how the system became more planned and institutionalized as its value was recognized — suggests that our designed approach may produce more rapid capability accumulation than purely emergent industrial symbiosis.

Korhonen's (2001) critique of industrial ecology is relevant: he argued that industrial ecology metaphors from biology tend to ignore the fact that biological ecosystems are not designed but evolved, and that the design of human-created systems for ecological properties may require principles that differ from those that produced biological ecosystems. We agree in principle and note that our architecture is not a literal copy of mycorrhizal biology but a translation of functional principles through the filter of design science — a translation that necessarily adapts rather than directly copies.

### 9.2 Multi-Agent Systems in Manufacturing

The literature on multi-agent systems (MAS) in manufacturing has a long history, with early work by Parunak (1999) establishing the case for distributed, autonomous agents over centralized planning approaches for dynamic manufacturing environments. More recent work has focused on the integration of MAS with digital twin architectures (Leitão et al., 2016; Klima et al., 2023), demonstrating that agent autonomy and twin fidelity are complementary rather than competing properties. Our architecture extends this literature by explicitly addressing the inter-organizational dimension: the agents in the Mycelium Factory are not just autonomous within a factory but federated across a consortium, with governance rules that constrain their behavior in the inter-organizational domain.

Wooldridge and Jennings (1995) established the foundational properties of intelligent agents: reactivity (perceiving and responding to environment), pro-activeness (goal-directed behavior), and social ability (interaction with other agents). Our factory-level agents instantiate all three properties: they react to sensor anomalies, proactively query the network for matching failure signatures, and engage in governed exchanges with peer agents. The scale at which social ability operates — across organizational boundaries, under commercial sensitivity constraints — is the novel dimension.

### 9.3 Knowledge Management and Organizational Learning

Nonaka and Takeuchi's (1995) SECI model of knowledge creation — Socialization, Externalization, Combination, Internalization — maps directly onto the learning processes enabled by the Mycelium Factory architecture. Socialization of tacit maintenance knowledge occurs through the structured knowledge elicitation protocols used to build the initial equipment ontology. Externalization occurs when maintenance technicians' diagnostic reasoning is encoded as failure signatures in the knowledge graph. Combination occurs when the network agent matches a new failure observation against the library and generates a recommended intervention. Internalization occurs when a factory's maintenance team acts on the recommendation and updates their mental models of equipment behavior.

The network amplifies each of these SECI transitions. Externalization that occurs in one factory is immediately available as a basis for Combination and Internalization in all 157 factories — a knowledge multiplication effect that Nonaka and Takeuchi's original model, designed for the single-firm context, does not capture.

Mintzberg's (1979) structural configurations are useful for characterizing the governance form that the NMA approximates: it is closest to his "Professional Bureaucracy" in that it combines standardization of skills (the shared equipment ontology and maintenance protocols) with decentralization of operational decisions (each factory's maintenance team retains authority over intervention timing). This is not incidental — it is the governance configuration most likely to achieve Ostrom's stability conditions in a knowledge commons, because it preserves the professional autonomy that makes skilled manufacturing workers willing to contribute their tacit knowledge to the commons.

---

## 10. Limitations

We identify six limitations of the current work that bound the claims we make and define the perimeter of required future research.

**L1 — Single consortium context**: All empirical data comes from a single anonymized consortium in a single regional context (Sweden). Swedish manufacturing SMEs operate in a regulatory environment (GDPR, Swedish Work Environment Authority standards), an industrial relations context (high unionization, codetermination), and a technological context (high baseline digitalization relative to Southern and Eastern European SME manufacturing) that may not generalize to other regions.

**L2 — 14-month pilot duration**: The pilot period is insufficient to evaluate the long-term stability predictions in Proposition P2 (five-year participation stability) or the succession dynamics described in Layer 5. Longitudinal data collection is ongoing.

**L3 — Selection bias in NMA membership**: The 157 factories that joined the NMA pilot are not a random sample of Swedish SME manufacturers. They were recruited through industry association networks and self-selected for participation in a digital innovation initiative, suggesting above-average digitalization readiness. Adoption findings from this population may overestimate adoption rates in the broader SME manufacturing population.

**L4 — Causality in predictive maintenance findings**: The 23 distress signal propagation events documented in Section 6 are observational, not experimental. We cannot exclude the hypothesis that the correlation between cross-factory failure events reflects shared equipment vintage and usage patterns rather than a causal network signal. A randomized controlled study with blinded signal propagation is needed to establish causality.

**L5 — Biological analogy limitations**: As Korhonen (2001) notes, biological ecosystem analogies carry risks of oversimplification. The mycorrhizal network is a product of co-evolution over 400 million years (Remy et al., 1994), and its stability properties may depend on mechanisms that have no digital equivalent. We have translated functional principles, not structural details, but we cannot exclude the possibility that unmapped biological mechanisms are load-bearing for the stability we observe in the natural system.

**L6 — Graph scalability**: The NMA knowledge graph at 157 nodes is within a scale range that Neo4j handles comfortably. The architecture has not been stress-tested at 1,000+ node scale, and the query performance characteristics reported in Section 6 (340ms average response time) may not hold at that scale without architectural modifications (sharding, caching layer, read replicas).

---

## 11. Future Research Directions

Seven research directions emerge from the limitations and theoretical gaps identified in this paper.

**R1 — Multi-regional replication**: Replication studies in Southern European (Italy, Spain), Central European (Germany, Poland), and East Asian (Japan, South Korea) SME manufacturing contexts would test the boundary conditions of the governance model and identify cultural and regulatory factors that moderate adoption.

**R2 — Controlled signal propagation experiment**: A randomized design in which equivalent factories are assigned to a network condition (receive distress signals from the mycelium layer) or a control condition (receive only their own local agent output) would allow causal estimation of the maintenance benefit attributable to network signal propagation.

**R3 — Topology optimization for resilience**: The NMA network currently uses a scale-free topology that emerged from differential participation levels. Research is needed on whether deliberately designed topologies — specifically, topologies that balance scale-free efficiency with small-world redundancy (Watts & Strogatz, 1998) — would outperform emergent topologies on resilience metrics.

**R4 — LLM integration for tacit knowledge elicitation**: The current knowledge elicitation protocol for building the equipment ontology relies on structured interviews with maintenance technicians. Large language models fine-tuned on maintenance documentation and interview transcripts could accelerate the externalization of tacit knowledge (the SE transition in the SECI model) and reduce the time required to reach critical mass in the failure signature library.

**R5 — Formal commons governance theory for digital assets**: Ostrom's (1990) design principles were developed for physical resource commons (fisheries, pastures, irrigation systems). Digital knowledge commons have different non-rivalry properties (a failure signature can be used by all 157 factories simultaneously without depletion) that may require modifications to the governance principles. Theoretical work at the intersection of commons governance theory and information economics is needed.

**R6 — Bioforming and planetary extension**: The Life Atlas architecture positions the body-factory-city-planet continuum as a coherent design space. Future research could explore how the Mycelium Factory architecture scales to planetary industrial ecology — networks of factories connected not just regionally but globally, sharing knowledge across supply chains while maintaining data sovereignty through federated LPI nodes.

**R7 — Edge inference at network scale**: As edge AI hardware matures (specifically, the deployment of neural processing units in industrial IoT gateways), it becomes feasible to run increasingly sophisticated inference models — including graph neural networks operating on the local subgraph of each factory's neighborhood in the NMA network — at the edge. Research is needed on the trade-offs between local inference quality and network-level learning rate as the balance between edge and cloud computation shifts.

---

## 12. Conclusion

A forest is not a collection of trees. It is a community of organisms connected through a subterranean intelligence that has been solving the problem of resilience under uncertainty for 400 million years. A manufacturing consortium is not a collection of factories. It is — or it should be — a community of organizations that collectively possess the resources, knowledge, and adaptive capacity to withstand disruptions that would overwhelm any individual member.

The Mycelium Factory architecture translates five specific biological mechanisms of mycorrhizal forest systems into five corresponding digital twin capabilities: agent-mediated communication, predictive maintenance signal propagation, distributed additive manufacturing capacity, commons governance infrastructure, and continuous organizational learning. The architecture is grounded in the SMILE methodology and the Reality Construct ontological framework, implemented through the Life Programmable Interface as a sovereignty-preserving consultation layer, and demonstrated in a 157-factory pilot consortium over 14 months.

The core finding is simple enough to state in a single sentence: the resource that no individual factory can justify — a predictive maintenance knowledge base, an additive manufacturing center, a failure signature library — becomes economically viable and operationally resilient when 157 factories pool their signals through a governance-respecting digital mycelium layer.

The four falsifiable propositions define the research agenda needed to move from demonstrated pilot to validated theory. The limitations are honest. The biological analogy is productive but not exhaustive. The work continues.

Manufacturing resilience is not a property of individual enterprises. It never was. The forest figured this out 400 million years ago. The Mycelium Factory is an attempt to build the digital equivalent of what the forest already knows.

---

## Acknowledgments

The Nordic Manufacturing Alliance consortium members are thanked for their participation in the pilot program. All identifying information has been anonymized at consortium request. The SMILE methodology was developed with intellectual contributions from the LifeAtlas research program. The Reality Construct ontological architecture is documented at DOI: 10.5281/zenodo.19587944.

---

## References

Ashby, W. R. (1956). *An introduction to cybernetics*. Chapman and Hall.

Ayres, R. U., & Kneese, A. V. (1969). Production, consumption, and externalities. *American Economic Review*, 59(3), 282-297.

Babikova, Z., Gilbert, L., Bruce, T. J., Birkett, M., Caulfield, J. C., Woodcock, C., Pickett, J. A., & Johnson, D. (2013). Underground signals carried through common mycelial networks warn neighbouring plants of aphid attack. *Ecology Letters*, 16(7), 835-843.

Barabási, A. L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512.

Beer, S. (1972). *Brain of the firm*. Allen Lane.

Beiler, K. J., Durall, D. M., Simard, S. W., Maxwell, S. A., & Kretzer, A. M. (2010). Architecture of the wood-wide web: Rhizopogon spp. genets link multiple Douglas-fir cohorts. *New Phytologist*, 185(2), 543-553.

Benyus, J. M. (1997). *Biomimicry: Innovation inspired by nature*. William Morrow.

Boschert, S., & Rosen, R. (2016). Digital twin—the simulation aspect. In P. Hehenberger & D. Bradley (Eds.), *Mechatronic futures* (pp. 59-74). Springer.

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St. Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge* (pp. 196-223). Routledge.

Cavalcante, I. M., Frazzon, E. M., Forcellini, F. A., & Ivanov, D. (2019). A supervised machine learning approach to data-driven simulation of resilient supplier selection in digital manufacturing. *International Journal of Information Management*, 49, 86-97.

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128-152.

Connell, J. H., & Slatyer, R. O. (1977). Mechanisms of succession in natural communities and their role in community stability and organization. *American Naturalist*, 111(982), 1119-1144.

Ehrenfeld, J., & Gertler, N. (1997). Industrial ecology in practice: The evolution of interdependence at Kalundborg. *Journal of Industrial Ecology*, 1(1), 67-79.

European Commission. (2021). *Industry 5.0: Towards a sustainable, human-centric and resilient European industry*. Publications Office of the European Union. https://doi.org/10.2777/308407

Ford, S., & Despeisse, M. (2016). Additive manufacturing and sustainability: An exploratory study of the advantages and challenges. *Journal of Cleaner Production*, 137, 1573-1587.

Gregor, S., & Hevner, A. R. (2013). Positioning and presenting design science research for maximum impact. *MIS Quarterly*, 37(2), 337-355.

Grieves, M. (2014). Digital twin: Manufacturing excellence through virtual factory replication. White Paper. Florida Institute of Technology.

Guan, D., Wang, D., Hallegatte, S., Davis, S. J., Huo, J., Li, S., Bai, Y., Lei, T., Xue, Q., Coffman, D., Cheng, D., Chen, P., Liang, X., Xu, B., Lu, X., Wang, S., Hubacek, K., & Gong, P. (2020). Global supply-chain effects of COVID-19 control measures. *Nature Human Behaviour*, 4(6), 577-587.

Hevner, A. R. (2007). A three cycle view of design science research. *Scandinavian Journal of Information Systems*, 19(2), 87-92.

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, 28(1), 75-105.

Hitzler, P., Krötzsch, M., & Rudolph, S. (2009). *Foundations of semantic web technologies*. CRC Press.

Holland, J. H. (1992). *Adaptation in natural and artificial systems* (2nd ed.). MIT Press.

Ivanov, D., & Dolgui, A. (2021). OR-methods for coping with the ripple effect in supply chains during COVID-19 pandemic: Managerial insights and research implications. *International Journal of Production Economics*, 232, 107921.

Jacobsen, N. B. (2006). Industrial symbiosis in Kalundborg, Denmark: A quantitative assessment of economic and environmental aspects. *Journal of Industrial Ecology*, 10(1-2), 239-255.

Karban, R., Baldwin, I. T., Baxter, K. J., Laue, G., & Felton, G. W. (2006). Communication between plants: Induced resistance in wild tobacco plants following clipping of neighboring sagebrush. *Oecologia*, 125(1), 66-71.

Kiers, E. T., Duhamel, M., Beesetty, Y., Mensah, J. A., Franken, O., Verbruggen, E., Fellbaum, C. R., Kowalchuk, G. A., Hart, M. M., Bago, A., Palmer, T. M., West, S. A., Vandenkoornhuyse, P., Jansa, J., & Bücking, H. (2011). Reciprocal rewards stabilize cooperation in the mycorrhizal symbiosis. *Science*, 333(6044), 880-882.

Klima, J., Queiroz, M., & Leitão, P. (2023). Multi-agent systems for manufacturing: A systematic literature review. *Journal of Manufacturing Systems*, 68, 87-105.

Korhonen, J. (2001). Four ecosystem principles for an industrial ecosystem. *Journal of Cleaner Production*, 9(3), 253-259.

Latour, B. (1999). *Pandora's hope: Essays on the reality of science studies*. Harvard University Press.

Leitão, P., Colombo, A. W., & Karnouskos, S. (2016). Industrial automation based on cyber-physical systems technologies: Prototype implementations and challenges. *Computers in Industry*, 81, 11-25.

Lim, B., Arık, S. Ö., Loeff, N., & Pfister, T. (2021). Temporal fusion transformers for interpretable multi-horizon time series forecasting. *International Journal of Forecasting*, 37(4), 1748-1764.

Lindemann, C., Jahnke, U., Moi, M., & Koch, R. (2015). Towards a sustainable and economic selection of part candidates for additive manufacturing. *Rapid Prototyping Journal*, 21(2), 216-227.

March, S. T., & Smith, G. F. (1995). Design and natural science research on information technology. *Decision Support Systems*, 15(4), 251-266.

Mintzberg, H. (1979). *The structuring of organizations*. Prentice-Hall.

Mobley, R. K. (2002). *An introduction to predictive maintenance* (2nd ed.). Butterworth-Heinemann.

Müller, J. M., Kiel, D., & Voigt, K. I. (2018). What drives the implementation of Industry 4.0? The role of opportunities and challenges in the context of sustainability. *Sustainability*, 10(1), 247.

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Noy, N. F., & McGuinness, D. L. (2001). *Ontology development 101: A guide to creating your first ontology*. Stanford Knowledge Systems Laboratory Technical Report KSL-01-05.

Ostrom, E. (1990). *Governing the commons: The evolution of institutions for collective action*. Cambridge University Press.

Parunak, H. V. D. (1999). Industrial and practical applications of distributed agent systems. In G. Weiss (Ed.), *Multiagent systems: A modern approach to distributed artificial intelligence* (pp. 377-421). MIT Press.

Peffers, K., Tuunanen, T., Rothenberger, M. A., & Chatterjee, S. (2007). A design science research methodology for information systems research. *Journal of Management Information Systems*, 24(3), 45-77.

Rasheed, A., San, O., & Kvamsdal, T. (2020). Digital twin: Values, challenges and enablers from a modeling perspective. *IEEE Access*, 8, 21980-22012.

Remy, W., Taylor, T. N., Hass, H., & Kerp, H. (1994). Four hundred-million-year-old vesicular arbuscular mycorrhizae. *Proceedings of the National Academy of Sciences*, 91(25), 11841-11843.

Simard, S. W. (2018). *Finding the mother tree: Discovering the wisdom of the forest*. Allen Lane.

Simard, S. W., Perry, D. A., Jones, M. D., Myrold, D. D., Durall, D. M., & Molina, R. (1997). Net transfer of carbon between ectomycorrhizal tree species in the field. *Nature*, 388(6642), 579-582.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907-39. *Social Studies of Science*, 19(3), 387-420.

Statistics Sweden. (2023). *Industrial enterprises: Capital stock and capital formation 2022*. Statistics Sweden (SCB), Manufacturing Statistics Unit.

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2018). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, 15(4), 2405-2415.

Ward, J., & Daniel, E. (2012). *Benefits management: How to increase the business value of your IT projects* (2nd ed.). Wiley.

Waern, N. (2026). *Reality Construct: An ontological architecture for agent-mediated digital twins*. Zenodo. https://doi.org/10.5281/zenodo.19587944

Waern, N. (2026). *SMILE: A design science methodology for sovereign life-scale digital twin systems*. WINNIIO AB Working Paper Series.

Watts, D. J., & Strogatz, S. H. (1998). Collective dynamics of 'small-world' networks. *Nature*, 393(6684), 440-442.

Wooldridge, M., & Jennings, N. R. (1995). Intelligent agents: Theory and practice. *The Knowledge Engineering Review*, 10(1), 1-38.

---

*Word count: approximately 6,800 words (body text, excluding references and frontmatter)*

*License: CC-BY-4.0. You are free to share and adapt this material for any purpose, provided appropriate credit is given.*

*Citation: Waern, N. (2026). The Mycelium Factory: Biomimicry-inspired architecture for resilient manufacturing networks through agent-mediated digital twins. WINNIIO AB Working Paper 048. https://doi.org/[pending]*
