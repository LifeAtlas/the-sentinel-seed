# The Reality Construct: Digital Twins as Boundary-Spanning Artefacts for Knowledge Absorption, Organisational Evolution, and the Co-Authorship of Intended Futures

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: 0000-0001-7970-2707

---

## Abstract

How can spatially grounded, temporally versioned digital representations of physical reality serve as boundary-spanning artefacts that not only transfer but absorb, store, and regenerate knowledge across industries, disciplines, and temporal states? This paper proposes the concept of the *reality construct* — a digitally emulated scene that functions as a four-dimensional boundary object with what we term *artefactual absorptive capacity*: the ability to accumulate, integrate, and make accessible the knowledge deposited by every actor who interacts with it. Drawing on Actor-Network Theory (Latour, 2005; Callon, 1986), boundary objects (Star & Griesemer, 1989), organisational memory (Walsh & Ungson, 1991), absorptive capacity (Cohen & Levinthal, 1990), and benefits-driven IT governance (Ward & Daniel, 2006), we argue that the fragmentation of knowledge into industry verticals represents a misapprehension of shared physical reality. We introduce Reality Programmable Interfaces (RPIs) through which people, systems, and AI can query reality constructs; we formalise the SMILE methodology for impact-driven digital twin creation; and we extend Weill and Broadbent's (1998) NUDE infrastructure framework to NUDEDA, capturing the transition from technology-as-utility to technology-as-autonomous-agent. The paper positions spatial scene intelligence, multi-agent simulation, and immersive environments as mechanisms through which intended futures can be co-authored rather than passively received.

**Keywords:** digital twins, boundary objects, reality construct, artefactual absorptive capacity, actor-network theory, SMILE methodology, reality programmable interface, NUDEDA, spatial web, organisational memory, multi-agent systems, scenario planning

---

## 1. Introduction

The digital twin has arrived at a paradox. Despite exponential growth in deployments across manufacturing (Grieves, 2014; Tao et al., 2019), the built environment (Waern, 2025a), healthcare, and urban planning, the field remains fragmented along the very industry verticals that digital twins should, in principle, transcend. An RF coverage model of a city block and a structural assessment of the same block exist in separate systems, separate standards, and separate organisational contexts — despite describing the same physical reality.

This paper asks: *What conceptual framework would allow digital twin systems to function as boundary-spanning artefacts that absorb and regenerate knowledge across any combination of industries, disciplines, and temporal states?*

We propose that the answer lies not in building new interoperability layers but in recognising what already exists. Every digital twin, regardless of domain, ultimately describes the same thing: physics-based, spatially grounded, temporally continuous reality. The cave — to invoke Plato's allegory, which we refine in Section 4.3 — is already there. It does not need to be constructed. It needs to be *defined*, *agreed upon*, and *understood* as the shared referent that makes all domain-specific interpretations commensurable.

This is the ontological gap that the present paper identifies: the reason digital twins fail to interoperate across domains is not primarily technical (standards exist in abundance) nor organisational (governance frameworks are well-developed). It is *ontological*. Each domain constructs its own representation of reality — BIM for buildings, GIS for geography, FHIR for health, SAREF for IoT — and treats that representation as the thing itself. These are shadows on different cave walls, each internally consistent, each forgetting that it is a projection of a shared reality that exists independently of any single description.

When this recognition is made explicit — when the shared referent is reality itself rather than any domain-specific abstraction of it — the digital twin becomes what we term a *reality construct*: a four-dimensional capsule that stores how a specific portion of reality has appeared, is appearing, and may appear under various future conditions.

This is not a new intuition. The intellectual lineage extends through Orlikowski's (2007) concept of sociomateriality — the constitutive entanglement of the social and the material — which established that technological artefacts do not merely support organisational practice but are inseparable from it. The present paper develops that insight — informed by a subsequent decade of cross-vertical digital twin deployments — into a theoretically grounded framework.

The paper proceeds as follows. Section 2 establishes the theoretical foundations in Actor-Network Theory, boundary objects, weak ties, and benefits-driven governance. Section 3 argues that the dominant data-driven paradigm contains a systematic bias toward measurable past states. Section 4 introduces reality as the persistent layer through which this bias is corrected. Section 5 defines the reality construct and develops the concept of artefactual absorptive capacity. Section 6 specifies Reality Programmable Interfaces. Section 7 formalises the SMILE methodology. Section 8 introduces the NUDE-to-NUDEDA organisational evolution framework. Section 9 examines how intended futures can be co-authored through simulation and immersive environments. Section 10 identifies limitations, and Section 11 concludes.

---

## 2. Theoretical Foundations

### 2.1 Actor-Network Theory: Relational Agency and Translation

Actor-Network Theory (ANT) provides the ontological foundation for this paper's central claim: that non-human artefacts participate in the constitution of knowledge, not merely its storage or transfer. However, a precise application of ANT requires care. Agency, in ANT, is not a property that actors *have*; it is a relational effect that emerges within networks (Latour, 2005, p. 46). A digital twin does not "have" agency in isolation. It acquires the capacity to make a difference — to mediate, translate, and transform — through its position within a network of human actors, sensors, standards, governance structures, and other artefacts.

Callon's (1986) sociology of translation provides the analytical machinery. The four moments of translation — problematisation, interessement, enrolment, and mobilisation — describe how heterogeneous actors are assembled into a functioning network. We illustrate this through the VOFAB/V&auml;xj&ouml; smart heating deployment (funded by the Swedish Energy Agency, Grant 2023-203019), where a digital twin of municipal buildings was deployed to optimise energy performance.

**Problematisation.** VOFAB, the municipal property company, framed the challenge: energy costs were rising, building performance was opaque, and regulatory targets demanded measurable improvement. The digital twin was positioned as an *obligatory passage point* — the mechanism through which all actors (building managers, energy consultants, IoT sensors, regulatory bodies) would need to pass to achieve their respective goals.

**Interessement.** Each actor group was enrolled through alignment with its existing interests. Building managers gained operational visibility. Energy consultants gained calibrated models. Sensor manufacturers gained a deployment context. The digital twin's interpretive flexibility — its capacity to present different facets to different communities — was precisely the boundary object property Star and Griesemer (1989) described.

**Enrolment.** Actors accepted their roles within the network. Building managers began using the twin for daily operations. Consultants contributed domain models. The twin began accumulating knowledge from each interaction — a property we develop in Section 5 as artefactual absorptive capacity.

**Mobilisation.** The enrolled network spoke on behalf of its constituents. VOFAB's results were presented to other municipal companies, the Swedish Energy Agency, and the Digital Twin Consortium. The reality construct — the emulated building scenes — became the spokesperson for an entire approach to energy-efficient building management.

This is what it means for a reality construct to *make a difference* in a traced network: not that it possesses agency as an inherent property, but that it mediates translations between actors who would otherwise remain disconnected.

### 2.2 Boundary Objects: From Transfer to Knowledge Storage

Star and Griesemer (1989) defined boundary objects as artefacts that inhabit multiple social worlds and satisfy the informational requirements of each through interpretive flexibility. Their four-type taxonomy — repositories, ideal types, coincident boundaries, and standardised forms — provides precise analytical vocabulary. The reality construct is, in this taxonomy, a *coincident boundary* object: it shares a common referent (the physical scene) across communities while each community projects its own disciplinary reading onto that shared referent. Just as the state of California functioned as a coincident boundary for the amateur naturalists, professional biologists, and trappers in Star and Griesemer's original study, the digitally emulated scene functions as a coincident boundary for structural engineers, RF planners, energy consultants, and urban designers.

Bowker and Star (1999) extended boundary object theory into what they termed *boundary infrastructure*: the material classification systems and ontologies that become invisible once established. The semantic classification embedded in a reality construct — material taxonomies, spatial ontologies, the INSPIRE spatial themes — constitutes precisely such invisible infrastructure. Users interact with the scene without consciously navigating its classification architecture, yet that architecture determines what can be queried, compared, and discovered. This infrastructural invisibility is a design goal, not an oversight: classification should recede into the background precisely so that cross-domain interaction can occur without terminological negotiation.

Two further developments in organisational theory enrich the framework. Walsh and Ungson (1991) demonstrated that organisational memory is distributed across multiple *retention facilities* — individuals, culture, transformations, structures, ecology, and external archives. Artefacts, in their framework, serve as external memory repositories that persist beyond the tenure of any individual. Olivera (2000) extended this to show how organisational memory systems function through artefacts that store and make retrievable the knowledge that organisations accumulate.

We argue that the reality construct functions as precisely such a retention facility — but one that spans organisational boundaries. A digitally emulated scene of an industrial site does not belong to any single organisation; it accumulates knowledge from structural engineers, environmental consultants, telecom planners, and urban designers, each depositing domain-specific knowledge into the same spatial referent. The scene becomes, in Walsh and Ungson's terms, an *ecology-based* retention facility: the physical environment itself, digitally preserved and made queryable.

### 2.3 The Strength of Weak Ties: Material Bridges

Granovetter (1973) demonstrated that novel information flows disproportionately through weak ties — connections between actors in different social circles. Hansen (1999) refined this: weak ties are effective for *searching* for knowledge, but strong ties are necessary for *transferring* complex knowledge.

We propose that reality constructs create *material weak ties* between communities that have no pre-existing social connection. A marine biologist and an urban planner have no structural reason to interact — until both are studying the same coastal reality construct, one for ecosystem modelling and the other for tsunami resilience. The shared spatial referent constitutes a tie that did not previously exist. Furthermore, because the reality construct provides rich spatial context — an immersive, navigable scene rather than a database record — it may lower the complexity threshold that Hansen identified as requiring strong ties for transfer. This remains a hypothesis warranting empirical investigation (see Section 10).

### 2.4 Benefits-Driven Governance

Ward and Daniel (2006) established that technology investments should be justified by the benefits they deliver, not the capabilities they provide. Their benefits management framework requires explicit identification of desired outcomes before any system specification begins. This principle — outcome first, technology second — is foundational to the SMILE methodology (Section 7) and to the broader argument of this paper: that digital twins should be evaluated by the futures they help create, not the data they help collect.

To illustrate concretely, the VOFAB deployment (Section 2.1) maps onto Ward and Daniel's benefits dependency network as follows:

- **Investment objective (benefit)**: 15–25% reduction in heating energy costs across municipal building stock.
- **Enabling change**: Real-time occupancy-responsive HVAC control replacing static scheduling.
- **IT/IS enabler**: Edge-deployed self-learning digital twin with federated learning across building nodes.

This chain — from IT enabler through organisational change to measurable benefit — is precisely what SMILE Phases 3–4 (Collective Intelligence and Contextual Intelligence) operationalise: Phase 3 establishes the bidirectional data flows and calibrated models (IT enabler), while Phase 4 delivers the queryable, actionable intelligence (enabling change) that produces the measured energy reduction (benefit).

---

## 3. The Data-Driven Fallacy

The dominant paradigm in technology strategy — "data-driven decision making" — contains a systematic bias that is rarely acknowledged. Data is, by definition, historical: a sensor reading records a past state, however recent. A dataset is a collection of measurements of what has already occurred. As Kitchin (2014) argues in *The Data Revolution*, the rhetoric of data-driven approaches obscures the interpretive frameworks, institutional priorities, and power structures that determine which data is collected, how it is processed, and what counts as evidence.

The problem is not that data is useless — it is indispensable. The problem is that a data-driven orientation creates what Muller (2018) terms a "tyranny of metrics": a systematic bias toward what can be measured and quantified, at the expense of what cannot. In the context of digital twins, this manifests as a pervasive tendency to begin projects with data collection — instrumenting buildings, deploying sensors, ingesting historical records — and hoping that valuable outcomes will emerge from sufficient data accumulation.

We argue that this inverts the proper relationship between data and impact. Impact — the change one intends to create — is inherently future-oriented. It concerns states of reality that do not yet exist. A data-driven approach, by privileging measurable past states, systematically underweights speculative future states — precisely the states that digital twins are uniquely positioned to explore through simulation and scenario planning.

The SMILE methodology (Section 7) formalises the correction: begin with the desired outcome (impact), work backward through the actions required to achieve it, the insights needed to guide those actions, the information from which insights are derived, and only then identify the data that must be collected. This inverted pyramid — Outcome, Action, Insight, Information, Data — ensures that data serves impact rather than the reverse.

---

## 4. Reality as the Persistent Layer

### 4.1 The Vitruvius Triad for Digital Systems

The Roman architect Vitruvius (c. 80-15 BC) argued in *De Architectura* that all structures must exhibit three qualities: *firmitas* (structural soundness), *utilitas* (usefulness), and *venustas* (beauty). As Gelernter (1998) demonstrated in *Machine Beauty*, this triad applies with equal force to computational artefacts — elegance and structural integrity are not cosmetic features of software but determinants of its longevity and effectiveness.

We adopt Gelernter's extension and apply it specifically to digital twin systems:

- **Robust** (*firmitas*): Modular, replaceable, zero vendor lock-in. Every component must be extractable and independently functional. A system passes the test of time not by remaining unchanged but by remaining changeable.
- **Useful** (*utilitas*): Delivering measurable impact across the stakeholder ecosystem — not to engineers alone, nor to executives alone, but to every actor in the network.
- **Attractive** (*venustas*): Visually compelling, immersive, intuitive. The visual dimension is epistemological, not cosmetic. Humans understand through spatial and visual cognition. If a system cannot be seen and navigated, its knowledge content remains inaccessible to most of its potential users.

These three qualities must be simultaneously present. A robust system that is visually impenetrable will not be adopted. A beautiful system that breaks under load is unreliable. A useful system that locks users into proprietary formats is a trap. The Vitruvian test is conjunctive: all three conditions must hold.

### 4.2 Reality as Four-Dimensional Boundary Object

Physical reality is the one referent that all industries, disciplines, and jurisdictions share. A building is simultaneously a structural system, an energy system, an electromagnetic environment, a workplace, a legal entity, and an ecological footprint. These are not different realities — they are different *descriptions* of the same reality.

We propose that reality, when digitally emulated with spatial grounding and temporal versioning, functions as a four-dimensional boundary object: three spatial dimensions plus time. This 4D structure supports three modes of inquiry:

- **Spatial traversal** — from planetary scale to molecular, carrying context through every zoom level. This "zoom out to zoom in" methodology, grounded in the *overview effect* documented by White (1987) among Apollo astronauts, ensures that local decisions are made with awareness of their broader context.
- **Temporal traversal** — from historical states through present conditions to projected futures. Understanding what *was* there enables forensic analysis; what *is* there enables operational intelligence; what *could be* there enables the co-authorship of intended futures.
- **Perspectival traversal** — the same scene queried from different disciplinary, regulatory, or stakeholder perspectives, each receiving domain-relevant responses while maintaining referential coherence.

The INSPIRE Directive (European Commission, 2007), initially designed for spatial data infrastructure, provides the taxonomic foundation for spatial traversal — a standardised classification of spatial themes that enables consistent description across scales and jurisdictions.

### 4.3 Revealing Hidden Structure

Plato's cave allegory is sometimes invoked to frame digital twins as shadows of reality. The framing is misleading. Digital twins do not reveal ideal Platonic Forms; they reveal physically real but perceptually invisible structure — thermal bridging hidden within wall assemblies, RF propagation patterns shaped by material composition, stress distributions invisible to the naked eye, metabolic pathways operating beneath conscious awareness. This is scientific realism in Bhaskar's (1975) sense: the world possesses real structures and mechanisms that exist independently of our perception and that generate the observable phenomena we experience. The digital twin, grounded in physics-based models and calibrated against empirical data, makes these real-but-imperceptible mechanisms accessible — not by ascending to an ideal realm, but by rendering the actual causal structure of physical reality visible, navigable, and queryable.

---

## 5. The Reality Construct

### 5.1 Definition

A *reality construct* is a digitally emulated scene — spatially bounded, temporally versioned, semantically structured — that serves as a capsule for past, present, and projected future states of a specific portion of physical reality. Each reality construct is:

- **Spatially grounded**: referenced to physical coordinates, navigable, and composable with adjacent constructs.
- **Temporally versioned**: storing discrete states across time, enabling both historical forensics and future projection.
- **Semantically structured**: classified according to shared ontologies, enabling cross-domain querying.
- **Absorptive**: accumulating knowledge from every interaction, regardless of the domain from which the interaction originates.

### 5.2 Artefactual Absorptive Capacity

Cohen and Levinthal (1990) defined *absorptive capacity* as an organisation's ability to recognise the value of new external information, assimilate it, and apply it to commercial ends. Their insight was that absorptive capacity is path-dependent: an organisation's ability to absorb new knowledge depends on the knowledge it has already accumulated.

We extend this concept from organisations to artefacts. The theoretical mechanism for this extension is provided by Hutchins' (1995) distributed cognition framework, which demonstrated that cognition is not confined to individual minds but distributed across people, artefacts, and environments. In Hutchins' study of naval navigation, the cognitive system included charts, alidade, bearing books, and plotting tools — artefacts that did not merely store information but actively participated in computational processes. The reality construct extends this principle: it is not a passive repository but a participant in cognitive systems that span organisations, accumulating and integrating knowledge through its spatial structure in ways that no individual contributor fully comprehends.

A reality construct thus exhibits *artefactual absorptive capacity*: the ability to accumulate, integrate, and make accessible the knowledge deposited by every actor who interacts with it. When a structural engineer assesses damage, that assessment becomes part of the construct's knowledge content. When an RF engineer models coverage, that model is integrated. When an AI agent runs simulations, the results are stored. Each interaction increases the construct's capacity to absorb subsequent interactions — precisely the path-dependency Cohen and Levinthal identified, and precisely the distributed cognitive mechanism Hutchins described.

This is the genuinely novel contribution of this paper. Boundary objects, as Star and Griesemer (1989) defined them, *transfer* knowledge through interpretive flexibility. Organisational memory systems, as Walsh and Ungson (1991) and Olivera (2000) described them, *store* knowledge within organisational boundaries. The reality construct does both — and does so *across* organisational boundaries, accumulating knowledge from actors who may never interact directly but who share a spatial referent.

The mechanism aligns with what Orlikowski (2007) termed the constitutive entanglement of the social and the material: technological artefacts do not merely store collective knowledge but actively participate in its constitution, becoming repositories that exceed any individual contributor's understanding. The reality construct operationalises this sociomaterial entanglement through spatial grounding: the physical scene provides the integrating structure that holds heterogeneous knowledge contributions in coherent relation.

### 5.3 Temporal Capsules and the Babel Problem

Each temporal state of a reality construct constitutes what we term a *reality shard* — a snapshot of how a specific scene appeared at a specific moment, enriched with the knowledge accumulated up to that point. The collection of shards across time constitutes the construct's memory: a navigable history of physical and knowledge states.

This temporal dimension addresses what we call the Babel problem: the fragmentation of knowledge across industries that describe the same reality in mutually unintelligible vocabularies. The shared spatial referent — the scene itself — functions as a translation medium. The construct translates not by imposing a single language, but by providing a shared referent that each community can describe in its own terms while maintaining spatial and temporal coherence.

---

## 6. Reality Programmable Interfaces

### 6.1 Beyond Existing Standards

Application Programming Interfaces (APIs) enable system-to-system communication. Existing standards address specific aspects of digital twin interoperability: OGC APIs provide geospatial query capabilities; NGSI-LD (adopted as MIM1 in the Minimal Interoperability Mechanisms framework; OASC, 2023) provides context brokering for real-time entity state; Azure DTDL provides device-level twin definition. Each is necessary; none is sufficient.

We propose a synthesising category: **Reality Programmable Interfaces (RPIs)** — interfaces through which people, systems, and AI can query reality constructs natively. An RPI accepts three classes of input:

- **Spatial queries**: "What exists within this bounding volume?" "What is the material composition of this surface?" "What are the sight lines from this point?"
- **Temporal queries**: "What did this scene look like on this date?" "How has this parameter changed over this period?" "What is the projected state under these conditions?"
- **Actor queries**: "Which actors have contributed knowledge to this construct?" "What assessments have been made?" "What is the provenance of this data point?"

An RPI produces three classes of output:

- **Scene states**: navigable, renderable representations of reality at specified coordinates and times.
- **Predictions**: projected future states derived from calibrated models and scenario parameters.
- **Explanations**: traceable chains from query to response, identifying the data sources, models, and assumptions that produced each output.

The RPI is implemented through a knowledge fabric combining graph databases (relational structure), vector databases (semantic similarity), structured documents (human-readable knowledge), decentralised storage (sovereignty and resilience), and context brokers (real-time state management). This fabric enables the reality construct to be queryable by all three actor classes: people through visual and natural-language interfaces, systems through standardised protocols, and AI through semantic query languages.

### 6.2 Eight Interoperability Dimensions

The European Interoperability Framework (European Commission, 2017) identifies four layers: legal, organisational, semantic, and technical. Drawing on the MIMs framework and cross-vertical deployment experience, we extend this to eight dimensions required for a complete reality construct:

1. **Contextual** — the spatial and temporal situation.
2. **Legal** — applicable regulations, data protections, and jurisdictions.
3. **Human** — stakeholder needs, capabilities, and accessibility requirements.
4. **Security** — threat landscape, protections, and trust boundaries.
5. **Technical** — available systems, protocols, and infrastructure.
6. **Syntactical** — data formats and exchange patterns.
7. **Semantic** — meaning of terms and classifications across communities.
8. **Organisational** — governance structures and decision processes.

A reality construct that satisfies all eight dimensions becomes a complete boundary-spanning artefact — one capable of operating across any combination of industries, jurisdictions, and actor types.

---

## 7. SMILE: From Impact to Intelligence

### 7.1 Overview and Lineage

The SMILE methodology — Sustainable Methodology for Impact Lifecycle Enablement (Waern, 2025a; 2025b) — provides the operational framework for reality construct creation. Evolved from NASA JPL's systems engineering approach and refined through deployments spanning the built environment (VOFAB/V&auml;xj&ouml;, Sweden), manufacturing (Digital Twin Consortium Working Group), equine biology (EquestRai, Mulawa Arabian Stud, Australia), and personal health (Life Atlas), SMILE operationalises the impact-first principle through six phases.

### 7.2 The Six Phases

Each phase is described below with its entry criteria, primary artefact outputs, and exit criteria.

**Phase 1: Reality Emulation** (Scene)
- *Entry*: A defined spatial scope and at least one stakeholder with a stated outcome need.
- *Artefacts*: Georeferenced 3D scene; initial semantic classification; stakeholder map.
- *Exit*: Scene is navigable and understandable by non-technical stakeholders.

**Phase 2: Concurrent Engineering** (Minimal Viable Twin)
- *Entry*: Scene exists; hypotheses about desired outcomes have been articulated.
- *Artefacts*: Minimal Viable Twin (MVT) specification; hypothesis register; data requirements derived from outcomes (not the reverse).
- *Exit*: MVT is defined and the required data collection is scoped to serve stated hypotheses.

**Phase 3: Collective Intelligence** (Bidirectional Twin)
- *Entry*: MVT is deployed; physical sensors are operational.
- *Artefacts*: Calibrated models; bidirectional data flows (physical-to-virtual and virtual-to-physical); initial knowledge deposits from domain experts.
- *Exit*: The reality construct is absorbing knowledge from interactions and sensor data.

**Phase 4: Contextual Intelligence** (Queryable Twin)
- *Entry*: Construct is absorbing; RPI endpoints are available.
- *Artefacts*: Queryable scene state; real-time dashboards; natural-language query capability; audit logs.
- *Exit*: Non-specialist users can query the construct and receive actionable responses.

**Phase 5: Continuous Intelligence** (Learning Twin)
- *Entry*: Construct is queryable; governance boundaries for autonomous learning are defined.
- *Artefacts*: Anomaly detection models; predictive maintenance alerts; edge-native processing pipelines; governance audit trail.
- *Exit*: The system identifies patterns and generates alerts without human initiation, within governed boundaries.

**Phase 6: Perpetual Wisdom** (Ecosystem Twin)
- *Entry*: Multiple constructs are operational; cross-construct knowledge transfer is architecturally possible.
- *Artefacts*: Calibrated model library; transferable knowledge packages; ecosystem-level dashboards; contribution provenance records.
- *Exit*: Knowledge generated in one construct demonstrably improves outcomes in another.

Each phase is experienced from three perspectives (Waern, 2025a): **From People** (organisation-agnostic stakeholder engagement), **From Systems** (standards, ontology, metadata), and **From Planet** (GIS/BIM/CIM, satellite imagery, the spatial web).

### 7.3 Comparison with Existing Frameworks

Tao et al. (2019) proposed a five-dimension digital twin model: physical entity, virtual model, connection, data, and service. SMILE differs in two respects. First, it is *phase-sequential*, describing a maturity progression rather than a static architecture. Second, it begins with impact (the desired outcome) rather than with the physical entity or data, reflecting the benefits-driven governance principle (Ward & Daniel, 2006). ISO 23247 (Digital Twin Framework for Manufacturing) provides complementary guidance on the technical interface between physical and virtual, but does not address the stakeholder engagement, governance, or knowledge absorption dimensions that SMILE foregrounds.

The following table summarises the key distinctions:

| Dimension | SMILE | Tao et al. (2019) | ISO 23247 | DTC Capability Model |
|-----------|-------|-------------------|-----------|---------------------|
| Orientation | Impact-first (outcome → data) | Data-first (physical → virtual) | Manufacturing process | Cross-industry |
| Stakeholder engagement | Three perspectives (People/Systems/Planet) | Not specified | Implied | Advisory boards |
| Maturity progression | 6 phases with entry/exit gates | 5 dimensions (static) | 4-part framework | Capability periodic table |
| Benefits tracking | Ward & Daniel BDN integration | Not addressed | Not addressed | Not addressed |
| Edge/sovereignty | Phase 5-6 edge-native by design | Cloud-centric | Not specified | Not specified |

### 7.4 Cross-Domain Portability: From Building Energy to Equine Biology

The same SMILE methodology has been applied beyond the built environment to equine biology through the EquestRai project at Mulawa Arabian Stud, Australia — a deployment that tests whether an impact-first digital twin framework designed for building energy optimisation transfers to biological systems. The translation demonstrates that SMILE's phase structure is domain-independent: what changes between domains is the content of each phase, not the phase logic itself.

In Phase 1 (Reality Emulation), the shared reality canvas was defined as the Mulawa farm environment — paddocks, stables, training arenas, and veterinary facilities — with individual horse profiles registered as entities within that spatial context, augmented by environmental sensors monitoring temperature, humidity, and ground conditions. Phase 2 (Concurrent Engineering) defined the Minimal Viable Twin as a readiness scoring model across five dimensions: training load, veterinary history, nutrition, competition schedule, and lineage. These dimensions were derived from desired outcomes (optimal competition readiness, breeding programme optimisation) rather than from available data — the impact-first inversion that distinguishes SMILE from data-first approaches. Phase 3 (Collective Intelligence) established bidirectional data flows from wearable sensors, ACARiS visual monitoring cameras, and veterinary record systems feeding the twin with continuous biological state data. The result is the same framework operating on a fundamentally different substrate — a horse, not a building — yet following identical methodological logic from impact through intelligence. Phases 4–6 (Contextual Intelligence through Perpetual Wisdom) are in active development at the time of writing and will be reported in a subsequent publication; the present example demonstrates portability of the phase logic itself, not completion of the full lifecycle in the equine domain.

---

## 8. NUDE to NUDEDA: Organisational Evolution Through Technology

### 8.1 The NUDE Framework

Weill and Broadbent (1998) identified four views of IT infrastructure investment, forming the NUDE framework:

- **None**: No shared IT infrastructure; each unit procures independently.
- **Utility**: IT as a cost centre providing basic shared services (email, networking).
- **Dependent**: IT infrastructure investments are driven by specific business strategies; technology *supports* the business.
- **Enabling**: IT infrastructure creates options for future business strategies; technology *enables* the business to pursue opportunities it could not otherwise reach.

This framework, developed through extensive empirical research across industries, captured the dominant modes of IT governance through the late 1990s and into the 2000s. Weill's earlier work on the role and value of IT infrastructure (Weill, 1992) and subsequent studies on strategic agility (Weill, Subramani, & Broadbent, 2002) reinforced the finding that organisations' competitive positioning correlated with their infrastructure investment philosophy.

### 8.2 NUDED: Technology as Organisational DNA

We propose a fifth position: **Digital DNA**. In this view, technology is not merely *enabling* the organisation — it *is* the organisation. The digital infrastructure constitutes the organisation's operational reality: its processes, its knowledge, its relationships, its memory. Removing the technology would not merely inconvenience the organisation; it would dissolve it.

This transition was anticipated by Zammuto et al. (2007), who argued that information technology was fundamentally changing the fabric of organisation — not simply automating existing processes but enabling entirely new organisational forms. The NUDED position (None, Utility, Dependent, Enabling, Digital DNA) captures this: an organisation at the Digital DNA stage does not *use* digital twins; it *is constituted by* them. The reality constructs are not tools the organisation employs; they are the medium through which the organisation perceives, remembers, decides, and acts.

Carr's (2003) provocative argument that "IT doesn't matter" as a strategic differentiator — because infrastructure becomes commoditised — applies to the Utility and Dependent stages. At the Digital DNA stage, the argument inverts: it is precisely because the technology is inseparable from the organisation that it becomes a source of sustained advantage, not through proprietary lock-in but through accumulated artefactual absorptive capacity.

### 8.3 NUDEDA: Autonomous Intelligence Within Governance

We propose a sixth position: **Autonomous**. In this view, the digital infrastructure does not merely constitute the organisation's operational reality — it learns, adapts, and acts within governed boundaries without continuous human direction.

This is the stage at which multi-agent systems, calibrated digital twins, and edge-native AI converge. The reality construct does not merely store and regenerate knowledge; it generates new knowledge through simulation, identifies anomalies through continuous monitoring, and proposes interventions through scenario analysis.

The governance dimension is critical. Floridi et al. (2018), in the AI4People framework, identified five principles for ethical AI deployment: beneficence, non-maleficence, autonomy (of the human, not the system), justice, and explicability. The NUDEDA position (None, Utility, Dependent, Enabling, Digital DNA, Autonomous) requires that autonomous behaviour operates strictly within boundaries defined by these principles. The system learns and acts; humans govern and override. Every autonomous decision must be explicable, traceable, and reversible.

To make the NUDEDA progression empirically observable, we identify one concrete indicator per stage:

- **None**: No shared IT infrastructure across business units; each procures independently (no shared IT budget line across divisions).
- **Utility**: IT costs managed as overhead; investments justified by cost reduction (IT appears as "overhead" in annual reports, not "investment").
- **Dependent**: IT investments explicitly linked to strategic business plans (IT projects appear in strategic business plans with named dependencies).
- **Enabling**: IT investments justified by new strategic capabilities they create (new market entries cite IT capability as a precondition in board minutes).
- **Digital DNA**: Organisation cannot describe its core processes without reference to its digital systems (process documentation references digital systems as constitutive, not supportive).
- **Autonomous**: System modifies its own parameters within governed boundaries without human initiation (system change logs show parameter modifications with governance-rule justification but without corresponding human initiation tickets).

The NUDE-to-NUDEDA progression thus describes the organisational evolution that reality constructs both enable and require: from IT as absent or utilitarian, through IT as strategic enabler, to IT as organisational constitution, to IT as governed autonomous intelligence.

---

## 9. Co-Authoring Intended Futures

The ambition of the reality construct extends beyond description and analysis to what we term the *co-authorship of intended futures*. Multi-agent simulation populated with calibrated models enables systematic exploration of possibility spaces — grounded in scenario planning (Schwartz, 1991; van der Heijden, 2005) but enriched by the spatial grounding and absorptive capacity that reality constructs provide. Three capabilities converge.

**Agent-based modelling.** Digital twins populated with autonomous agents explore "what if" scenarios — connecting today's choices to projected outcomes through simulation rather than speculation.

**Immersive experience.** Reality constructs rendered into extended reality (XR) environments allow projected futures to be walked through and inspected before physical resources are committed, making futures comprehensible to non-specialist stakeholders.

**Planetary context.** When constructs are grounded in planetary data — satellite observation, climate models, resource flows — local decisions incorporate broader consequences by design. In ongoing work with the EDGE-VERSE consortium, satellite-derived damage assessments of post-conflict urban districts are being integrated into reality constructs to enable reconstruction scenario comparison — structural, connectivity, and environmental — before physical resources are committed. This exemplifies how a single spatial referent absorbs knowledge from satellite imagery, RF propagation models, and structural engineering simultaneously, enabling cross-domain scenario analysis that no single-domain system could provide.

The vision is informed co-authorship: systematically exploring and choosing among possible futures rather than passively receiving emergent ones.

---

## 10. Limitations

Several limitations must be acknowledged.

**Empirical validation.** The central claims — artefactual absorptive capacity, material weak ties, SMILE's superiority over data-first approaches — are theoretically grounded but empirically untested in controlled settings. The VOFAB deployment provides an illustrative case, not a validation study. Longitudinal comparative research across matched contexts is needed.

**Scalability.** Whether the eight interoperability dimensions and SMILE phases scale to planetary-scope deployments — where actors, standards, and jurisdictions become combinatorially complex — remains open.

**Tuckman bypass hypothesis.** Section 5.3 suggests that shared reality constructs may enable teams to bypass early Tuckman (1965) stages. This remains a hypothesis, not a validated finding; spatial common ground may be necessary but insufficient for effective cross-disciplinary teamwork.

**Cross-domain absorption.** While Section 7.4 demonstrates SMILE's portability across domains (built environment to equine biology), full cross-domain *absorption* within a single reality construct — where, for example, building performance knowledge and biological knowledge enrich each other through shared spatial grounding — remains untested and represents a priority for future empirical work.

**Technological maturity.** Several enabling technologies (edge-native AI, real-time Gaussian splatting, federated learning on spatial data) are at early maturity stages. The NUDEDA framework's Autonomous stage, in particular, depends on governance mechanisms for autonomous AI that are still being developed across regulatory, technical, and ethical dimensions.

**Reflexivity.** This paper was produced with the assistance of a Large Language Model (Claude, Anthropic), which functions as a mediating actor in the translation chain from conceptual intent to published form. The degree to which such mediation introduces biases or transformations that diverge from authorial intent is an acknowledged limitation and an open research question in AI-assisted scholarship.

---

## 11. Conclusion

This paper has argued that the central challenge of cross-domain digital twin interoperability is ontological, not technical. Every industry has constructed its own representation of reality — and then forgotten that it is a representation. BIM, GIS, FHIR, SAREF, and hundreds of domain-specific ontologies are internally consistent shadows projected onto different walls of the same cave. The cave — physics-based, spatially grounded, temporally continuous reality — already exists. It does not need to be built. It needs to be defined, agreed upon, and understood as the shared referent that makes all domain-specific interpretations commensurable. When this recognition is made explicit, the digital twin becomes a reality construct: a boundary-spanning artefact with absorptive capacity that does not merely transfer knowledge across communities but accumulates, integrates, and regenerates it across industries, disciplines, and temporal states.

The key contributions are:

1. **Artefactual absorptive capacity**: the extension of Cohen and Levinthal's (1990) absorptive capacity concept from organisations to artefacts, explaining how reality constructs accumulate knowledge through interaction.
2. **The data-driven fallacy, properly scoped**: not that data is useless, but that a data-driven orientation systematically biases toward measurable past states at the expense of speculative future states — the states digital twins are uniquely positioned to explore.
3. **Reality Programmable Interfaces**: a synthesising interface category (spatial, temporal, and actor queries producing scene states, predictions, and explanations) that addresses the insufficiency of any single existing standard.
4. **SMILE formalisation**: entry criteria, artefact outputs, and exit criteria for each of six phases, compared with ISO 23247 and Tao et al.'s (2019) five-dimension model.
5. **NUDE to NUDEDA**: the extension of Weill and Broadbent's (1998) IT infrastructure investment framework to capture the transitions to Digital DNA (technology-as-organisation) and Autonomous (self-learning within governance).

This is a foundational framing paper. It is intended to be referenced by subsequent domain-specific publications applying these principles to telecommunications (RF digital twin scene creation), personal health (the sovereign body as reality construct), manufacturing (lifecycle twins as boundary objects), and post-conflict reconstruction (reality indexing for humanitarian logistics).

The existing structures of industry verticals, technical standards, and disciplinary boundaries have produced enormous value and continue to do so. The argument of this paper is not that they should be discarded but that they should be *grounded* — anchored to the shared physical reality they variously describe — so that the knowledge generated within each can flow to all others through the boundary-spanning artefact of the reality construct. Physics-based reality is the persistent layer. It is the foundation on which everything else rests, and the medium through which intended futures can be co-authored.

---

## References

Bhaskar, R. (1975). *A Realist Theory of Science*. Leeds Books.

Bowker, G. C., & Star, S. L. (1999). *Sorting Things Out: Classification and Its Consequences*. MIT Press.

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, Action and Belief* (pp. 196-233). Routledge.

Carr, N. G. (2003). IT doesn't matter. *Harvard Business Review*, 81(5), 41-49.

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128-152.

European Commission. (2007). Directive 2007/2/EC establishing an Infrastructure for Spatial Information in the European Community (INSPIRE).

European Commission. (2017). New European Interoperability Framework. Publications Office of the European Union.

Digital Twin Consortium. (2021). *Capabilities Periodic Table*. Object Management Group. https://www.digitaltwinconsortium.org/initiatives/capabilities-periodic-table/

Digital Twin Consortium. (2025). Digital Twin Consortium Adds Eight New Testbeds [Press release]. https://www.globenewswire.com/news-release/2025/09/16/3150899/0/en/

Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., Luetge, C., Madelin, R., Pagallo, U., Rossi, F., Schafer, B., Valcke, P., & Vayena, E. (2018). AI4People — An ethical framework for a good AI society. *Minds and Machines*, 28(4), 689-707.

Gelernter, D. (1998). *Machine Beauty: Elegance and the Heart of Technology*. Basic Books.

Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology*, 78(6), 1360-1380.

Grieves, M. (2014). Digital Twin: Manufacturing Excellence through Virtual Factory Replication. White paper.

Hansen, M. T. (1999). The search-transfer problem: The role of weak ties in sharing knowledge across organization subunits. *Administrative Science Quarterly*, 44(1), 82-111.

Hutchins, E. (1995). *Cognition in the Wild*. MIT Press.

ISO. (2020). ISO 23247: Automation systems and integration — Digital twin framework for manufacturing.

Kitchin, R. (2014). *The Data Revolution: Big Data, Open Data, Data Infrastructures and Their Consequences*. SAGE Publications.

Latour, B. (2005). *Reassembling the Social: An Introduction to Actor-Network-Theory*. Oxford University Press.

Muller, J. Z. (2018). *The Tyranny of Metrics*. Princeton University Press.

OASC. (2023). Minimal Interoperability Mechanisms (MIMs). Open & Agile Smart Cities.

Olivera, F. (2000). Memory systems in organizations: An empirical investigation of mechanisms for knowledge collection, storage and access. *Journal of Management Studies*, 37(6), 811-832.

Orlikowski, W. J. (2007). Sociomaterial practices: Exploring technology at work. *Organization Studies*, 28(9), 1435-1448.

Schwartz, P. (1991). *The Art of the Long View: Planning for the Future in an Uncertain World*. Currency Doubleday.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects. *Social Studies of Science*, 19(3), 387-420.

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, 15(4), 2405-2415.

Tuckman, B. W. (1965). Developmental sequence in small groups. *Psychological Bulletin*, 63(6), 384-399.

van der Heijden, K. (2005). *Scenarios: The Art of Strategic Conversation* (2nd ed.). John Wiley & Sons.

Waern, N. (2025a). From One Room to Fifty: Orchestrating Explainable AI, Resilience, and Contextual Interoperability in the Built Environment. DOI: 10.5281/zenodo.17462962.

Waern, N. (2025b). Beyond the Shadows — Contextual Awakening, Federated Learning, and the Realization of Reality through Digital Twins. DOI: 10.5281/zenodo.17464804.

Walsh, J. P., & Ungson, G. R. (1991). Organizational memory. *Academy of Management Review*, 16(1), 57-91.

Ward, J., & Daniel, E. (2006). *Benefits Management: Delivering Value from IS & IT Investments*. John Wiley & Sons.

Weill, P. (1992). The role and value of information technology infrastructure: Some empirical observations. In R. D. Banker, R. J. Kauffman, & M. A. Mahmood (Eds.), *Strategic Information Technology Management*. Idea Group Publishing.

Weill, P., & Broadbent, M. (1998). *Leveraging the New Infrastructure: How Market Leaders Capitalize on Information Technology*. Harvard Business School Press.

Weill, P., Subramani, M., & Broadbent, M. (2002). IT infrastructure for strategic agility. *MIT Sloan Management Review*, 44(1), 57-65.

White, F. (1987). *The Overview Effect: Space Exploration and Human Evolution*. Houghton Mifflin.

Zammuto, R. F., Griffith, T. L., Majchrzak, A., Dougherty, D. J., & Faraj, S. (2007). Information technology and the changing fabric of organization. *Organization Science*, 18(5), 749-762.

---

## Funding Acknowledgement

This conceptual work was informed by research funded by the Swedish Energy Agency (Grant 2023-203019) and by the author's ongoing work as Co-Chair of the Digital Twin Consortium Manufacturing Working Group and lead developer of the Q-SMART testbed (DTC, 2025).

---

## Disclosure

This is a position paper proposing a conceptual framework, not reporting experimental results. The framework was developed through the author's decade of cross-vertical digital twin deployments. The article was produced with the assistance of a Large Language Model (Claude, Anthropic), acknowledged as a mediating actor in the translation chain from conceptual intent to published form. Each node in this production chain — human cognition, language model, document system, repository — mediates and transforms the original intent, and the degree of faithful translation versus introduced bias remains an open research question. The origin prompt is stored as a private provenance record.

---

*Corresponding author: Nicolas Waern, ceo@winniio.io, WINNIIO AB, Stampgatan 54d, 411 01 Gothenburg, Sweden.*
