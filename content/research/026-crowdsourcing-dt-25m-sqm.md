---
title: "Crowdsourcing Digital Twins at Scale: Facility Managers as the Data Workforce"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: digital twin, real estate, facility management, crowdsourcing, boundary objects, inscription theory, Actor-Network Theory, data workforce, built environment, spatial indexing, asset data quality, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# Crowdsourcing Digital Twins at Scale: Facility Managers as the Data Workforce

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The canonical assumption in built environment digital twin literature is that spatial data is produced by specialists: surveyors with LiDAR scanners, BIM authors with parametric modelling tools, GIS technicians with enterprise data management platforms. This paper reports analysis of a different model, drawn from a 147-minute standards working group session in which a participant firm described indexing 25 million square metres of real estate using the organisation's own facility managers as the primary data collection workforce. The approach — which the firm had reached through operational necessity rather than theoretical design — reconstitutes the facility manager as an inscription agent: a human actant whose professional proximity to the built fabric makes them uniquely capable of grounding digital representations in physical reality at a scale and cost that specialist survey approaches cannot achieve. We analyse this model through Actor-Network Theory (ANT), identifying the translation work required to enrol facility managers as data producers rather than data consumers, the boundary objects that stabilised their contributions across a heterogeneous portfolio, and the failure modes observed when inscription quality was inconsistent. We argue that the facility manager data workforce model represents a viable and undertheorised pathway to built environment digital twin scale, and that its success depends less on data collection technology than on the quality of the boundary objects — data schemas, mobile capture interfaces, validation workflows — that mediate between facility manager practice and digital twin requirements. Three falsifiable propositions are stated. We engage the counter-argument that crowdsourced facility data is too inconsistent for engineering-grade digital twins, and distinguish between the accuracy requirements of different twin use cases. The paper contributes a framework for evaluating the boundary object quality of facility data capture systems intended for crowdsourced twin population.

**Keywords:** digital twin, real estate, facility management, crowdsourcing, boundary objects, inscription theory, Actor-Network Theory, data workforce, built environment, spatial indexing, asset data quality, design science research, SMILE methodology

---

## 1. Introduction: The Data Gap That Stops Digital Twins at Scale

Every serious analysis of built environment digital twin deployment identifies the same constraint: the data. The geometry, the asset register, the system documentation, the maintenance history — the information substrate on which a useful digital twin depends — either does not exist in machine-readable form, exists in formats incompatible with the twin platform, exists in documents that have never been digitised, or exists in the memories of people who have worked in the building for twenty years and have never been asked to record what they know.

The standard response to this constraint in technology-forward digital twin discourse is to propose better capture technology: terrestrial LiDAR scanning, drone photogrammetry, millimetre-wave radar, BIM-as-built reconciliation workflows, IoT sensor retrofits that generate data in the process of operating. These technologies are real and improving. They are also expensive, episodic, and dependent on access conditions — a large retail tenant, a government security classification, a hospital infection control protocol — that prevent continuous systematic deployment across a diverse portfolio.

The working group session that grounds this paper described a different response: deploying the people who are already in the buildings, already know what is in them, and are already paid to maintain them — facility managers — as the primary data collection workforce. In the observed case, one participating organisation reported indexing approximately 25 million square metres of real estate using this approach over a sustained programme. The organisation reported that this figure represents a scale of spatial data collection that, using specialist survey approaches, would have required capital expenditure that the organisation assessed as impossible to justify.

This paper asks: what does it take to turn a facility manager into a digital twin data contributor? What boundary objects must be constructed? What translations must be performed? Where does the model fail? And what does success at this scale tell us about the architectural assumptions embedded in standard approaches to built environment digital twin population?

---

## 2. Theoretical Framework

### 2.1 Inscription and the Non-Human Turn in Facility Data

ANT [1][2] provides the primary analytical framework. The central move is to treat the facility manager not merely as a data collector — a human instrument wielded by a digital twin implementation programme — but as an actant in a network whose properties are co-produced by the facility manager, the mobile capture interface, the data schema, the validation workflow, the programme manager, and the physical building fabric itself.

The concept of inscription [3] is particularly relevant: inscription occurs when human practices, knowledge, and judgements are encoded into non-human artefacts. When a facility manager takes a photograph of a fire door, annotates it with asset type and condition, and submits it through a mobile application, they are inscribing their embodied knowledge of the building into a structured data object. The quality of that inscription depends on the quality of the mobile interface (does it ask the right questions in terms the facility manager recognises?), the quality of the data schema (does it capture the distinctions that matter for subsequent twin use cases?), and the quality of the facility manager's professional formation (do they have the knowledge to distinguish between asset types and conditions in a way the schema requires?).

### 2.2 Boundary Objects and Heterogeneous Portfolios

Star and Griesemer [4] define boundary objects as artefacts that are plastic enough to adapt to local needs and the constraints of the several parties employing them, yet robust enough to maintain a common identity across sites. In the facility manager data workforce model, the mobile capture interface and the underlying data schema are boundary objects: they must be interpretable and usable by facility managers in a Victorian office building, a modern logistics facility, a retail park, a hospital estate, and a residential tower, all of which have different asset typologies, different terminology conventions, different physical access conditions, and different data maturity starting points.

Boundary object quality — the degree to which a schema or interface successfully spans these heterogeneous contexts without collapsing into either rigid uniformity (forcing inappropriate categorisations) or incoherent flexibility (producing data that cannot be aggregated) — is, we argue, the primary determinant of facility manager workforce model success.

### 2.3 The SMILE Methodology Applied to Portfolio Indexing

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a real estate portfolio in which asset data is fragmented across spreadsheets, paper records, institutional memory, and incomplete CAD drawings, and the to-be state is a digital twin in which each asset is represented at a level of detail sufficient for the portfolio's highest-value use cases (predictive maintenance scheduling, energy performance benchmarking, regulatory compliance reporting, capital expenditure planning). Every design decision in the crowdsourcing programme is evaluated by the criterion: does it reduce the gap between these states at acceptable cost and data quality?

---

## 3. The Facility Manager as Inscription Agent

### 3.1 Professional Proximity and Embodied Knowledge

The facility manager's claim to be an effective inscription agent rests on two properties that specialist surveyors typically lack: professional proximity and embodied knowledge. Professional proximity means physical presence: facility managers are in their buildings daily, weekly, or at intervals determined by planned maintenance schedules. They observe the building in operation — systems running, failures occurring, modifications being made, tenants changing practice. A LiDAR survey team visits once every several years and produces a geometrically precise snapshot of the building at that moment; the facility manager has a continuous, if less geometrically precise, relationship with the building's evolving state.

Embodied knowledge means the accumulated understanding of a specific building that develops through sustained working in it: knowledge of which assets have chronic maintenance issues, which drawings are inaccurate representations of what was actually installed, which spaces are used in ways that differ from their design purpose, which systems are interdependent in ways not visible from the documentation. This knowledge is, in the language of knowledge management, tacit [5]: it is not recorded anywhere and would be lost if the facility manager left. The crowdsourced digital twin programme creates a mechanism for externalising this knowledge into structured data objects.

### 3.2 Translation Requirements

Enrolling facility managers as inscription agents requires specific translation work. Translation, in ANT terms [2], is the process by which an actor redefines other actors' interests so that they align with the enrolment programme. Several translations are required:

**Identity translation.** The facility manager must come to understand data collection as part of their professional role, not as an additional administrative burden delegated to them by a technology team with whom they have no relationship and whose purposes they do not understand. This translation fails when data collection is introduced as a top-down mandate without explanation of how the data will be used to benefit the facility manager's own work (maintenance planning, budget justification, compliance reporting).

**Epistemic translation.** The facility manager's embodied, contextual knowledge must be translated into the structured, categorical format that the data schema requires. A facility manager who knows that the second-floor fan coil units "are all different because the east wing was refurbished in 2011" holds knowledge that is epistemically richer than the schema's asset type, installation date, and condition rating fields can fully capture. The translation must preserve enough of this contextual richness to be useful while producing data that can be aggregated across a portfolio of thousands of buildings.

**Temporal translation.** Facility manager data collection must be integrated with existing work patterns rather than imposed as a separate activity stream. The most successful implementations observed in the working group session integrated data capture with planned maintenance visits: the facility manager captures asset data as part of the maintenance workflow, producing twin data as a by-product of work they are doing anyway, rather than as a separate site visit.

### 3.3 Failure Modes

Three systematic failure modes were identified in the working group discussion.

**Schema mismatch.** When the data schema was designed by digital twin architects without adequate input from facility management practitioners, the categorical structure of the schema did not match the distinctions that facility managers actually make. Facility managers either forced assets into inappropriate categories (producing inaccurate data) or left fields blank (producing incomplete data).

**Interface friction.** When the mobile capture interface required more than four fields per asset for routine capture, completion rates dropped significantly. The working group session described a specific finding: when a form required conditional logic navigation (if asset type is X, then show fields Y and Z), field completion rates fell by approximately 35% compared to flat forms with equivalent data requirements.

**Inconsistent incentive alignment.** In portfolio segments where facility managers were employed by outsourced FM contractors rather than directly by the property owner, data collection participation was inconsistent. The contractor had no operational interest in the property owner's digital twin programme; the facility manager received no benefit from participation. Several portfolio segments in these conditions produced data of insufficient quality for twin population and required specialist survey remediation.

---

## 4. Boundary Object Architecture

### 4.1 What Makes a Facility Data Schema a Good Boundary Object

A facility data schema that functions effectively as a boundary object across a heterogeneous real estate portfolio must satisfy three conditions:

**Interpretive flexibility.** Different facility managers in different building typologies must be able to interpret the schema's categories as applicable to their specific context. A mechanical and electrical asset category structure that works for a modern office building must also be interpretable for a Victorian warehouse conversion, a data centre, and a retail park. This requires categorical structures that are generic enough to be cross-applicable while specific enough to capture meaningful distinctions.

**Robustness under aggregation.** Data collected by hundreds of facility managers across thousands of buildings must be aggregatable into portfolio-level analyses without requiring manual reconciliation. This requires controlled vocabulary enforcement (drop-down lists rather than free text), identifier schemes that persist across updates, and data lineage tracking that records who collected what data when and in what context.

**Evolvability.** The schema must be able to evolve as the portfolio's twin use cases evolve without requiring full re-collection of existing data. Schema versions must be backward-compatible for existing records while forward-extensible for new data requirements.

### 4.2 The 25 Million Square Metre Case

In the observed case, the organisation reported that its programme achieved boundary object quality through an iterative design process that involved facility manager representatives in schema development from the outset. Key design decisions included: a three-tier asset hierarchy (system, sub-system, component) that mapped to facility management maintenance planning practice; a condition rating scale that used observable physical indicators rather than engineering judgements (allowing facility managers without engineering qualifications to make consistent assessments); and a photograph-first workflow in which the photograph was the primary data object and structured fields were secondary, reducing the cognitive burden of the capture interaction.

The programme ran over approximately four years. The first year was pilot-scale: three buildings, intensive observation of facility manager capture behaviour, iterative schema refinement. Years two and three were scaled deployment with a cohesion team that monitored data quality metrics and provided field support for facility managers whose data quality was below threshold. Year four was maintenance mode: routine data updates, integration with planned maintenance workflows, and expansion to newly acquired portfolio assets.

### 4.3 The Role of Validation Workflows

Boundary object quality is not solely a property of the schema; it is also a property of the validation workflow that processes submitted data. The working group described a tiered validation approach: automated validation (format checks, controlled vocabulary enforcement, mandatory field completion) at submission; statistical validation (outlier detection, comparison against portfolio averages for similar asset types) within 24 hours; and human review (spot audits of a random sample of submissions, escalation of statistical outliers) on a weekly cycle.

The human review component was the most important quality driver: not because it caught large volumes of errors, but because facility managers who knew that their submissions were periodically reviewed by a named data quality manager produced measurably better data than those who believed their submissions were processed by an automated system only.

---

## 5. Counter-Argument: Is Crowdsourced Data Good Enough?

The most forceful counter-argument to the facility manager data workforce model is that facility manager-collected data cannot achieve the accuracy required for engineering-grade digital twins. A structural engineer who relies on a digital twin for load analysis needs geometry accurate to millimetres. An energy performance model needs material thermal properties that are not visible to a facility manager with a smartphone. A fire engineering model needs as-built duct routing that may not be accessible without opening ceiling voids.

This counter-argument is correct for specific high-accuracy use cases. It is wrong as a general objection to the model.

The majority of digital twin use cases in a real estate portfolio do not require engineering-grade accuracy. Predictive maintenance scheduling requires knowledge of asset type, installation date, current condition, and maintenance history — all of which a facility manager can provide. Energy performance benchmarking requires floor area, occupancy pattern, and major plant specifications — available from facility management records. Regulatory compliance reporting for building safety cases requires asset location and condition assessments that facility managers are in many jurisdictions already required to maintain.

The facility manager data workforce model should be understood not as a replacement for specialist survey but as a complement: a mechanism for achieving 80% of the digital twin's data requirements at dramatically lower cost than specialist survey, leaving specialist survey resources to be applied to the 20% of data requirements where geometric precision, engineering measurement, or specialist system access is genuinely necessary.

This distinction maps directly onto twin maturity levels: a Level 1 twin (asset register with location, type, condition, maintenance history) can be fully populated by facility manager data. A Level 3 twin (real-time simulation with predictive physics) requires specialist data for the physics model parameters but can use facility manager data for the asset register that defines the model's structure.

---

## 6. Falsifiable Propositions

1. **The scale proposition:** Real estate portfolio digital twin programmes that use facility managers as the primary data collection workforce, supported by well-designed mobile capture interfaces and structured validation workflows, can achieve asset register completeness exceeding 85% of a portfolio's total asset count at a cost per square metre below 20% of the cost of equivalent specialist survey coverage. This proposition can be falsified by a cost analysis of facility manager versus specialist survey approaches across programmes of comparable scope showing no significant cost differential.

2. **The boundary object quality proposition:** Facility data schemas developed with direct participation of facility management practitioners in design and piloting will achieve field completion rates at least 30 percentage points higher than schemas developed without practitioner participation, measured across matched portfolio segments of equivalent complexity. This proposition can be falsified by a controlled comparison showing no significant difference in completion rates between practitioner-designed and architect-designed schemas.

3. **The incentive alignment proposition:** Facility manager data quality (measured by validation pass rate) in directly employed FM models will be at least 25 percentage points higher than in outsourced FM contractor models with equivalent schema and interface quality, attributable to the absence of incentive alignment in contractor employment relationships. This proposition can be falsified by a study showing equivalent data quality across employment models when explicit quality incentives are incorporated in outsourced FM contracts.

---

## 7. Limitations and Future Research

The empirical basis of this paper is a single working group session in which one organisation described its programme; independent verification of the reported scale and data quality outcomes was not possible within this study. All quantitative figures — including the approximately 25 million square metres indexed, the 35% drop in completion rates under conditional form logic, and the quality differential between directly employed and outsourced FM models — are reported as stated by the session participant and should be treated as single-source illustrations rather than independently validated findings. The session was 147 minutes in length; the level of methodological detail provided was sufficient for analytical framework construction but not for replication study design.

The boundary object analysis is based on the description provided in the session supplemented by general knowledge of facility management practice and digital twin data requirements. It has not been validated through field observation of actual facility manager capture workflows.

Future research should: (1) conduct a comparative study of facility manager data quality across directly employed and outsourced FM models in three or more portfolio operators, controlling for schema and interface quality; (2) develop and validate a boundary object quality assessment instrument for facility data schemas, testing its predictive validity against field completion rates and validation pass rates; (3) conduct a longitudinal study of twin data currency in facility manager workforce programmes, measuring data freshness (time since last update) and accuracy decay (divergence between twin state and surveyed physical state) over three to five years of programme operation.

---

## 8. Conclusion

The facility manager is the most underutilised data asset in the built environment digital twin ecosystem. Physically present, professionally knowledgeable, and operationally embedded, facility managers have a relationship to the buildings they manage that no specialist survey programme can replicate at scale and at the temporal resolution that a live digital twin requires.

The programme described in this paper — in which the organisation reported indexing approximately 25 million square metres — illustrates that this relationship can be systematically translated into structured digital twin data — not through technological sophistication, but through careful boundary object design: schemas that match facility management practice, interfaces that integrate with existing workflows, validation systems that maintain quality without creating adversarial relationships with the people doing the work.

The facility manager data workforce model does not solve every digital twin data challenge. It does not produce millimetre-accurate geometry. It does not automatically populate physics model parameters. It does not capture as-built routing in sealed ceiling voids. What it does is solve the most fundamental challenge: it makes the asset register complete, current, and grounded in the physical reality of the building as it exists and operates today. That foundation is what every subsequent layer of twin sophistication depends upon.

The field needs better boundary object design frameworks, better quality assessment instruments, and better comparative evidence on programme economics. What it does not need is the continued assumption that specialists must produce all built environment digital twin data. The people who know the buildings best are already there.

---

## References

[1] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Science in Action.* Harvard University Press, 1987.

[3] Akrich M. The de-scription of technical objects. In: Bijker W, Law J (eds.) *Shaping Technology/Building Society.* MIT Press, 1992: 205–224.

[4] Star SL, Griesemer JR. Institutional ecology, translations and boundary objects: amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science* 1989;19(3):387–420.

[5] Polanyi M. *The Tacit Dimension.* Routledge, 1966.

[6] East EW, Nisbet N, Liebich T. Facility management handover model view. *Journal of Computing in Civil Engineering* 2013;27(1):58–65.

[7] Kassner L, Wahl B, Kübler P, Schindler C, Stiefelhagen R. City model enrichment. *ISPRS Annals of the Photogrammetry, Remote Sensing and Spatial Information Sciences* 2015;II-3/W4:95–102.

[8] Kiviniemi A. Ten years of IFC development — why are we not yet there? In: *Proceedings of the 24th CIB W78 Conference.* Maribor, 2007.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
