---
title: "From Spreadsheets to Spatial Fabric: Why the Equine Industry Needs a Data Operating System"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: equine digital twin, animal welfare data, edge-native architecture, data operating system, African Horse Sickness, wearable biosensors, reality as boundary object, Life Atlas, SMILE methodology, Actor-Network Theory
status: ready
date: 2026-04-16
---

# From Spreadsheets to Spatial Fabric: Why the Equine Industry Needs a Data Operating System

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The equine industry manages physiologically complex, economically significant animals using data infrastructure that remains deeply fragmented: veterinary records in clinic-proprietary systems, feeding logs in paper notebooks, behavioural observations transmitted verbally at shift handover, and biosensor streams siloed in vendor applications with no integration path. This paper argues that the equine industry faces a data architecture problem — not a shortage of data — analogous to human healthcare a decade ago. Drawing on Actor-Network Theory (Callon, 1986; Latour, 1987), the Reality as Boundary Object framework (Waern, 2025a, DOI: 10.5281/zenodo.17462962), and the SMILE methodology (Waern, 2025b, DOI: 10.5281/zenodo.17464804), we propose the Equine Data Operating System (EDOS): a spatially grounded, temporally versioned, edge-first platform anchored to the individual animal as the canonical unit of organisation. We operationalise this claim through an ANT translation analysis of the shift handover in a mid-sized Arabian stud farm context, illustrate architectural requirements under African Horse Sickness regulatory constraints, and engage critically with platformisation and data colonialism objections. We propose three falsifiable propositions for empirical validation and identify two concrete research agendas. We argue that the horse — its body, its space, its biological state — should be the persistent layer around which all other data orbits, and that the conceptual and technical foundations to build this system are available now.

**Keywords:** equine digital twin, animal welfare data, edge-native architecture, data operating system, African Horse Sickness, wearable biosensors, reality as boundary object, Life Atlas, SMILE methodology, Actor-Network Theory, platformisation

---

## 1. Introduction

In 2026, a thoroughbred racehorse can be insured for eight figures and tracked by satellite on race day. The same animal, on any other day of the year, has its health history stored across three veterinary clinics in formats that do not communicate with each other, its feeding log written in a notebook in the feed room, and its behavioural condition assessed entirely by the experienced eye of a stable hand whose observations will not survive the end of their shift in any retrievable form.

This is not an edge case. It is the operational norm across mid-to-large equine breeding and performance operations in southern Africa, Europe, and Australia — the segments where the economic and welfare stakes are highest and where regulatory compliance obligations are most demanding. The industry manages animals worth, in aggregate, hundreds of billions of dollars using data infrastructure that would be considered inadequate in a 1990s general medical practice.

The gap is architectural, not motivational. There is no agreed persistent layer — no canonical system of record that functions for the horse the way an electronic health record functions, however imperfectly, for a human patient. Without a persistent layer, data does not accumulate; it is produced, briefly consulted, and lost to staff turnover, clinic format incompatibility, and the entropy of systems not designed to remember.

This paper argues that addressing this gap requires a categorical shift in architectural orientation: the horse must become the unit of organisation. Every record, every observation, every sensor reading, every regulatory compliance document must be anchored to a canonical representation of the individual animal. We term this the Equine Data Operating System (EDOS).

We ground this argument in Actor-Network Theory (Callon, 1986; Latour, 1987) to trace how a specific sociotechnical transition — the verbal handover becoming a database record — involves translation, inscription, and a redistribution of agency. We draw on the Reality as Boundary Object framework (Waern, 2025a, DOI: 10.5281/zenodo.17462962) for the conceptual architecture, on the SMILE methodology (Waern, 2025b, DOI: 10.5281/zenodo.17464804) for the implementation pathway, and on edge-native architectural principles for distributed life science environments (Waern, 2026a, DOI: 10.5281/zenodo.19587944) for the infrastructure specification.

We also engage critically with the proposal. Platformisation of agricultural data has generated legitimate concerns about market dependency, vendor capture, and data colonialism in the Global South (Bronson, 2019; Carolan, 2020). We take these concerns seriously and identify the architectural commitments — open standards, local data sovereignty, edge-native operation, and zero lock-in — that distinguish EDOS from extractive platform models. We do not claim that a data operating system is automatically beneficial; we claim that its design choices determine whether it is.

The paper is structured as follows. Section 2 characterises current fragmentation and its consequences. Section 3 presents the theoretical framework, including ANT translation analysis and proper boundary object typing. Section 4 examines the critical platformisation literature and our response. Section 5 addresses architectural challenges. Section 6 specifies the EDOS architecture. Section 7 discusses implications for welfare, economics, and epidemiology. Section 8 presents falsifiable propositions and adoption barriers. Section 9 states limitations and future research agendas. Section 10 concludes.

---

## 2. The Current State: Fragmentation as the Default

### 2.1 The Data Topology of a Working Stud Farm

A mid-sized Arabian stud farm — twenty-five to thirty horses, yearly foals, eight to nine permanent staff — generates a substantial volume of data in the course of normal operations. A single week produces: daily feeding records (quantity, type, timing per horse), farrier visit notes, veterinary examination findings from on-site visits and referrals, pregnancy monitoring outputs from foaling box cameras, temperature and heart rate readings from any wearable sensors deployed, behaviour observations from morning and evening checks, medication administration records, competition preparation notes, and export compliance documentation for horses moving across provincial or national borders.

In the operation informing the fieldwork for this paper, none of these data streams were connected. Veterinary records from the primary clinic were stored in a proprietary system and shared with the farm only when explicitly requested, typically as PDFs. Records from specialist clinics were not transmitted to the primary clinic. Feeding logs were maintained on paper in the feed room. Pregnancy camera footage was reviewed in real time but not archived in any structured way. Wearable sensors — a small number of heart rate and temperature monitors — produced readings in a vendor-specific mobile application with no export capability and no integration with any other system. Behavioural observations were communicated verbally at morning handover and recorded nowhere.

A structured interview with the farm manager captured the operational reality succinctly: *"When a groom leaves, everything they know about that horse — how he stands before a bad day, what he does when he's off his feed — that goes with them. We start from scratch with the next person. You can't write down everything they know."* This observation, while single-site and not statistically representative, articulates the knowledge evaporation problem with a specificity that aggregate statistics do not.

A complementary perspective emerged from an informal consultation with a practitioner veterinarian with fifteen years of equine clinical experience (identity withheld; composite paraphrase of oral exchanges, not a formal interview). The practitioner noted: *"We send reports to the owner but have no way to know if the previous vet's findings were ever recorded digitally. Most of the time we're starting from whatever the owner can remember."* This account, offered here as illustrative rather than evidentiary, independently replicates the fragmentation pattern observed in the farm fieldwork and locates it at the inter-institutional level — between veterinary practices — rather than only within a single operation. Methodological caveat: informal consultations of this kind cannot substitute for systematic comparative fieldwork and are offered as corroborating texture, not empirical evidence.

### 2.2 The Consequences of Fragmentation

**Knowledge evaporation.** When a staff member leaves, their accumulated knowledge of individual horses — which animals exhibit subtle signs of discomfort before lameness becomes clinically apparent, which horses are prone to colic when weather changes, which mare has historically required intervention during foaling — leaves with them. This knowledge is not encoded in any system and is irrecoverable once the person is gone.

**Delayed risk detection.** Risk prediction in equine health requires correlation of signals across time and data types: a subtle change in feeding behaviour combined with a slight temperature elevation and an altered gait pattern may precede a serious health event by seventy-two hours. No individual signal is alarming in isolation; their conjunction is. But conjunction requires all signals to exist in the same analytical space, anchored to the same animal, at the same time. In a fragmented architecture, this conjunction is structurally impossible.

**Regulatory compliance friction.** African Horse Sickness (AHS) creates a regulatory environment of unusual complexity for equine operations in southern Africa. The disease is caused by an orbivirus transmitted by *Culicoides* midges and is endemic in sub-Saharan Africa, with periodic extensions into the AHS surveillance zone in the Western Cape (Sailleau et al., 2019). Export requires demonstrated health history. In the current architecture, compiling this documentation requires manually gathering records from multiple clinic systems, feeding logs, and vaccination records — a process that takes days and introduces substantial error risk.

---

## 3. Theoretical Framework

### 3.1 Actor-Network Theory: Tracing the Verbal Handover Translation

Actor-Network Theory (ANT) provides tools for examining how sociotechnical arrangements are constructed and stabilised through networks of human and non-human actors (Callon, 1986; Latour, 1987). ANT's key analytical move is tracing *translations*: the processes by which an actor gains the right to speak for others and how meaning, obligation, and agency are redistributed in the process (Callon, 1986, p. 196). Critically, ANT also attends to power: who gains from a translation, and who loses.

We apply this framework to a specific and ubiquitous translation in equine operations: the moment when a stable hand's embodied observation of an animal's condition — formed through physical proximity, experienced pattern recognition, and tacit knowledge accumulated over months — is communicated verbally at morning handover and then, in the current architecture, disappears.

**Moment 1: Observation.** The stable hand occupies a privileged epistemic position. Their direct, repeated contact with a specific animal gives them access to signals — a subtle change in how the horse holds its left hindleg, a fractional reduction in grain consumption, a behavioural shift in social interaction — that no remote sensor currently captures. At this moment, the knowledge exists only in embodied form. It is powerful but fragile: it requires the presence of this person, in this facility.

**Moment 2: Verbal translation.** At handover, the stable hand translates their embodied knowledge into natural language addressed to an oncoming colleague. This is the first inscription attempt — and the first moment of *interessement* in Callon's (1986) sense: the stable hand must hold the attention of the incoming colleague and frame the observation in terms that motivate action. The translation is lossy: tacit knowledge partially resists verbalization (Polanyi, 1966), and the recipient's interpretive context differs from the speaker's. Power is being transferred — the incoming colleague will now act on this summary — but the original observer's epistemic authority is being attenuated. Knowledge becomes instruction: "watch horse 7 today." Whether the incoming colleague accepts this framing — whether *enrolment* occurs — depends on trust, habit, and the plausibility of the concern, not on any formal record.

**Moment 3: Non-inscription.** In the current architecture, the handover ends here. No record is created. The knowledge exists briefly in two people's memories and then in one — the incoming colleague's — as a fading directive. When the shift ends, the inscription fails entirely. The observation evaporates. In ANT terms, the attempted translation collapses because no durable *inscription* — no material form that can carry the fact beyond the immediate interaction — is ever produced (Latour, 1987, p. 108).

**Moment 4: EDOS translation.** The EDOS architecture introduces a new actor into the network: the structured observation interface on the stable hand's mobile device. This actor performs *obligatory passage*: all handover knowledge must now flow through it to be preserved (Callon, 1986). The entity that controls inscription at the obligatory passage point determines which observations become durable facts and which remain ephemeral — a redistribution of epistemic authority from those who currently hold tacit knowledge to those who design the inscription device. This is not a neutral technical choice; it is a reallocation of who gets to define what counts as a fact about the animal. The mobile interface is itself an *inscription device* — it transforms a spoken observation into a timestamped, attributed, structured record that can travel across time and between people without the presence of its author. The translation is consequential. The stable hand gains a new obligation (entering the observation) and loses some flexibility (free-form verbal knowledge must conform to structured categories). The farm manager gains persistent institutional memory and loses the social dynamic of the verbal handover as a coordination ritual. The horse gains, instrumentally: the probability that early warning signals are acted upon increases with each successfully inscribed observation. Enrolment of stable staff in the new inscription practice — their ongoing willingness to enter observations — is the critical adoption variable, and it cannot be assumed from system deployment alone.

The introduction of the mobile interface does not merely add a tool. It redistributes agency across the entire sociotechnical network. The stable hand who previously held tacit knowledge as an asset that made them indispensable now shares that knowledge with the system — potentially reducing their personal leverage while improving organisational resilience. This is a genuine political dimension of the EDOS transition, not a technical footnote.

**Who gains, who loses.** Farm management and animal welfare gain from inscription. Individual staff members who derive power from tacit knowledge lose informational asymmetry. Veterinarians gain a richer dataset for clinical decision-making. Vendors of proprietary sensor platforms potentially lose the lock-in that comes from being the only repository of their data. These distributional consequences must be acknowledged in implementation planning.

It should be acknowledged that this ANT translation analysis is constructed from a single site and a small number of practitioner accounts. The theoretical vocabulary of interessement, enrolment, and inscription gives the analysis precision and situates it within an established sociological tradition, but the theoretical generalisation outruns the empirical base: whether this translation dynamic is reproducible across racing yards, polo operations, or working horse contexts in other regulatory environments is an open question that the empirical research agenda in Section 9.2 is designed to address.

### 3.2 Reality as Boundary Object: Proper Star & Griesemer Typing

Star and Griesemer (1989) identified four types of boundary objects, each characterised by a different mode of serving multiple social worlds simultaneously:

- **Repositories**: ordered "piles" of objects indexed in standardised ways (e.g., specimen collections, databases), which different groups can extract from for different purposes without consensus on meaning.
- **Ideal types**: objects with sufficient abstraction to be adaptable to a local site while remaining recognisable as the same object (e.g., a diagram of a "typical" horse).
- **Coincident boundaries**: objects with the same boundaries but different internal contents (e.g., a map of a nature reserve that serves conservationists and property owners simultaneously).
- **Standardised forms**: common methods of communication across otherwise uncommensurate viewpoints (e.g., a veterinary examination protocol).

Waern (2025a, DOI: 10.5281/zenodo.17462962) proposes that digital reality representations — spatially grounded, temporally versioned models of physical entities — function primarily as *coincident boundary objects*: they share the same external referent (the physical animal, in a specific location, at a specific time) while each stakeholder group reads internally different content from that referent. The veterinarian reads clinical state. The stable hand reads behavioural disposition. The farm manager reads economic asset. The regulatory authority reads compliance status. The shared boundary — this horse, in this body, now — enables coordination without requiring consensus on what the horse fundamentally *is*.

The EDOS canonical animal entity is additionally structured as a *repository*: it accumulates standardised records (timestamped, attributed, typed) from which different stakeholders extract different subsets for their purposes. This combination — coincident boundary plus repository — is what gives the EDOS its capacity to serve veterinary, welfare, economic, and regulatory purposes simultaneously without requiring any of those communities to abandon their domain-specific frameworks.

### 3.3 Animal Welfare Foundations

Animal welfare science has developed a multidimensional framework through the Five Freedoms (Brambell, 1965; Farm Animal Welfare Committee, 2009) and the Five Domains model (Mellor, 2017), which adds mental state as a fifth domain to the original four physical domains (nutrition, environment, health, behaviour). The Five Domains model shares with the WHO-QoL framework (WHOQOL Group, 1995) the insight that welfare is an emergent property of multiple interacting dimensions, not a single measurable variable.

A platform designed to support equine welfare must therefore integrate data across all Five Domains because welfare is only visible in the integration, not in any individual signal. This is precisely the integration the EDOS architecture is designed to provide.

---

## 4. Critical Engagement: Platformisation and Data Colonialism

### 4.1 The Platformisation Critique

The digitisation of agricultural operations has generated substantial critical literature on what Bronson (2019) terms "digital agriculture's political economy": the concentration of farm data in large platform operators who monetise it in ways that benefit input suppliers and data intermediaries rather than the farmers who generated it. The same dynamic operates in equine sport and breeding. When biosensor data is ingested exclusively into a vendor application with no export capability — as was the case in the operation examined here — the vendor has effectively captured a proprietary dataset from the farm's own operations.

Carolan (2020) extends this critique to argue that digital agriculture platforms frequently extract local agricultural knowledge, encode it in proprietary models, and then resell analytic services to the same farming communities that supplied the original knowledge — a form of epistemic dispossession that resembles extractive colonial resource dynamics applied to data.

These critiques have direct application to an equine data operating system. An EDOS built on proprietary APIs, cloud-dependent architecture, and vendor-controlled data models would reproduce exactly the extractive dynamic the critics describe. Adoption by equine operations in the Global South — including the southern African context examined here — would risk creating data dependency on northern-hemisphere technology vendors, with the analytical value of local equine health data captured at the infrastructure level.

### 4.2 The Architectural Response

The EDOS architecture responds to these critiques through four specific commitments that are architectural, not merely policy:

**Open data standards.** All data entering the EDOS is stored in open formats. No proprietary encoding. The horse owner can export the entire history of their animal at any time, in a format readable without the EDOS software.

**Edge-native operation.** The system operates fully on local hardware. No cloud dependency means no data hostage situation: the operator can continue using the system if any cloud provider is withdrawn, repriced, or shut down.

**Local AI inference.** The risk detection layer runs on local compute. Model weights are portable. Operators in southern Africa are not dependent on inference endpoints in Frankfurt or Virginia.

**Open-source core.** The core EDOS data model, API, and inference pipeline are proposed as open-source releases, following the Life Atlas architecture for sovereign data infrastructure (Waern, 2026a, DOI: 10.5281/zenodo.19587944). Commercial services layer on top of an open foundation; they do not own it.

These commitments do not eliminate the political economy of digital agriculture. They do ensure that the EDOS does not structurally reproduce the extractive patterns the literature identifies. This is a design choice that must be made explicitly and early; it cannot be added to an extractive architecture as an afterthought.

### 4.3 Counter-Arguments to the EDOS Proposal

We identify three substantive objections:

**Objection 1: Structured observation increases administrative burden and reduces adoption.** Requiring stable staff to enter structured mobile observations adds cognitive load to physically demanding work. If the observation interface is perceived as surveillance or administrative overhead, staff will resist, and data quality will be poor regardless of system capability. This is a real adoption barrier documented in agricultural IS literature (Eastwood et al., 2012; Tey & Brindal, 2012). The response is not to deny the objection but to design around it: voice-to-text entry, minimal structured fields, immediate feedback showing the value of the entered data (e.g., "this observation contributed to an early health alert for horse 7"), and genuine staff involvement in interface design.

**Objection 2: AI risk detection without validated training data produces false confidence.** The risk detection layer (Section 6.3) requires training data of volume and quality that does not yet exist in structured, accessible form. A model producing risk scores on insufficient training data may give farm managers false confidence in an unvalidated output. The response is explicit hedging (see Section 6.3) and phased capability deployment: the integration architecture delivers value through knowledge consolidation and compliance documentation before any AI inference is activated.

**Objection 3: A single case study cannot ground architectural generalisation.** The operational fieldwork informing this paper is a single mid-sized Arabian stud farm in southern Africa. The paper's claims about data fragmentation, knowledge evaporation, and compliance burden are grounded in that context. Generalisation to racing yards, polo operations, endurance stables, or working horse populations in low-income countries requires empirical validation in each context.

---

## 5. Architectural Challenges of the Equine Operating Environment

### 5.1 Biosensor Integration: The Attachment Problem

Wearable biosensors for equines present attachment challenges with no direct analogue in human health monitoring. The equine anatomy — a large, powerful quadruped with significant variation in coat thickness, body morphology, and movement patterns — does not accommodate adhesive patch sensors or wrist-worn devices that dominate human health monitoring.

Subcutaneous microchip implantation (ISO 11784/11785 compliant) is the most widely adopted equine identification technology. Current passive RFID chips provide identification only, not physiological telemetry. Active implantable sensors capable of transmitting physiological data represent a technically feasible extension but introduce veterinary intervention requirements, regulatory complexities, and owner acceptance barriers.

Leg sock sensors and girth-attached accelerometers represent non-invasive alternatives with growing commercial deployment (e.g., Equisense Motion S, Lameness Locator). These devices capture accelerometry, gyroscopy, and in some cases skin temperature, providing data on movement patterns and gait characteristics. Their limitations are equally significant: they capture external, movement-based signals rather than internal physiological state, they are prone to displacement during exercise, and they produce data streams requiring substantial signal processing to extract meaningful health indicators.

Ear-mounted sensors, in common use in cattle and sheep monitoring, have been adapted for equine use in research contexts. The equine ear presents better thermal contact and motion characteristics than the leg for temperature-based physiological monitoring (McGreevy et al., 2018). Regulatory and welfare considerations around ear-mounted devices in horses differ substantially from ruminant livestock, where ear-tagging is standard practice.

The EDOS architecture must accommodate this heterogeneity. It cannot assume a single sensor modality. It must treat biosensor data as one of multiple input streams — valuable but partial, to be interpreted in conjunction with clinical records, behaviour observations, and environmental context.

### 5.2 Disease Zone Restrictions and Regulatory Data Requirements

African Horse Sickness imposes a layered regulatory framework that interacts directly with data architecture requirements. The AHS surveillance zone in the Western Cape operates under seasonal movement restrictions, requiring equines entering the zone to meet defined vaccination and health certification standards. Export of horses from AHS-affected regions to international markets requires demonstrated compliance with WOAH (formerly OIE) standards, including serological testing, quarantine periods, and documented health history.

The documentation burden for export compliance currently requires the manual aggregation of records held across multiple systems and institutions. The EDOS architecture addresses this directly: if all health records are anchored to the canonical animal representation and the record of each entry includes authorship, timestamp, and data source provenance (see Section 6.2 for technology specification), compliance documentation becomes a query, not a manual aggregation exercise.

### 5.3 Connectivity Constraints and Edge-Native Architecture

Agricultural operations — and equine facilities are agricultural operations in their infrastructure requirements — frequently operate in connectivity environments that would be inadequate for cloud-dependent data systems. Rural stud farms in southern Africa may have intermittent mobile connectivity, unreliable fixed broadband, or no connectivity at all in areas remote from municipal infrastructure.

This is a design constraint of the first order. A system that requires continuous cloud connectivity cannot serve the majority of the world's equine operations. The architecture must be edge-native: capable of full local operation, with cloud synchronisation as an optional enhancement rather than a prerequisite (Waern, 2026a, DOI: 10.5281/zenodo.19587944). All biosensor data processing, health record storage, and AI-assisted risk detection must operate on local hardware — a standard server or high-specification workstation — without any external dependency.

---

## 6. The Equine Data Operating System: Architecture

### 6.1 The Animal as Canonical Unit

The EDOS is organised around a single primitive: the individual animal, represented as a persistent entity with a unique identifier, a spatial location, a biological state, and a temporal history. Every other data entity — health record, feeding event, behaviour observation, biosensor reading, regulatory compliance document — is an attribute of an animal, not an independent record.

This architectural choice has consequences throughout the system. Queries are animal-centric: "show me all health events for this horse in the last ninety days" is a first-class query, not a join across disconnected tables. Timeline visualisation is animal-centric: the primary interface is a temporal view of an individual animal's state, with all data streams collapsed into a single navigable representation. Risk detection is animal-centric: the inference layer operates on the integrated state of an individual animal, not on individual sensor streams in isolation.

### 6.2 Data Integration Layer

The EDOS integrates five primary data stream categories:

**Clinical records.** Veterinary examination findings, diagnostic results, medication administration records, and surgical histories. It is important to note that HL7 FHIR — the dominant interoperability standard in human health informatics — has no direct veterinary equivalent with widespread adoption as of 2026. The EDOS clinical data layer is therefore proposed as a structured mapping layer that normalises incoming records from clinic-proprietary formats (including PDF, HL7 v2, and SOAP-based APIs where available) into an open internal schema. This is an engineering challenge, not a theoretical one, and it requires ongoing engagement with veterinary software vendors rather than reliance on a standards body that has not yet acted.

**Nutritional records.** Feeding events, forage analysis results, supplement protocols, and body condition scoring, entered via mobile interface at point of care and anchored to the animal and timestamp at entry.

**Biosensor streams.** Accelerometry, heart rate, skin temperature, and any additional physiological signals from attached sensors, ingested via open API from vendor systems and stored in a time-series database. The proposed implementation uses InfluxDB (open-source, Apache 2.0 licensed) for time-series storage, selected for its edge-deployability, native downsampling for long-term retention management, and REST API compatibility with common IoT ingest patterns. This is a design proposal; other time-series stores (TimescaleDB, OpenTSDB) are architecturally substitutable.

**Behavioural observations.** Structured observation records entered by stable staff, supporting both free-text entry and structured assessment using validated equine behaviour scales (e.g., the EPAS pain assessment scale; Gleerup et al., 2015). Note that Gleerup et al. (2015) developed and validated this pain assessment scale in dairy cattle; its application here to equine behaviour assessment is a cross-species transfer — the scale's structured observational categories provide a useful template, but equine-specific validation remains an open research requirement. Voice-to-text entry via mobile interface is provided to reduce friction at the point of observation.

**Environmental and regulatory records.** AHS zone status, vaccination compliance documentation, movement permits, quarantine records, and export health certificates, linked to the animal entity and timestamped. Record provenance is implemented through hash-chaining at the application layer: each record is stored with the SHA-256 hash of the preceding record for that animal, creating an auditable append-only history without requiring blockchain infrastructure. This approach is referred to as "cryptographic provenance" in the system design; it is a well-established pattern in document integrity systems (Schneier, 1996) and does not require distributed consensus mechanisms.

### 6.3 AI-Assisted Risk Detection

The EDOS includes an inference layer that operates on the integrated state of each animal, producing risk scores across three dimensions: health risk (probability of a clinically significant health event within a defined window), nutritional risk (likelihood of condition score change outside target range), and regulatory risk (upcoming compliance deadlines or documentation gaps).

**Model specification.** As of 2026, no published equine health dataset exists at sufficient scale and label quality to train a supervised deep learning model for multi-signal risk detection. The proposed implementation therefore uses a gradient-boosted ensemble (XGBoost or LightGBM class models) operating on engineered features from each data stream, with a rule-based override layer for high-confidence clinical triggers (temperature exceeding defined thresholds, accelerometry patterns consistent with published lameness signatures). This is a conservative choice: gradient-boosted models are interpretable, require less training data than deep architectures, and produce calibrated probability estimates that can be honestly communicated as preliminary indicators rather than clinical conclusions.

**Baseline.** The appropriate comparison baseline for risk detection accuracy is the current operational standard: no systematic early warning capability. Against this baseline, any validated early warning signal — even a simple temperature-plus-activity anomaly detector — constitutes improvement. Claims of specific sensitivity or specificity values would require prospective clinical validation outside the scope of this architectural paper. We explicitly do not make such claims here.

**Output framing.** Risk scores are not presented as algorithmic conclusions. They are signals for human review — inputs to a decision that remains with the veterinarian or farm manager. The system surfaces what experienced staff would notice if they had complete information access; it does not replace the judgement they apply to that information.

### 6.4 SMILE-Aligned Implementation Pathway with Adoption Barriers

The SMILE methodology (Waern, 2025b, DOI: 10.5281/zenodo.17464804) prescribes five phases for impact-driven digital system deployment: Spatial awareness, Managed intelligence, Integrated context, Layered collaboration, and Empowered outcomes. Table 1 maps each phase to its EDOS deliverable, the maturity level it represents, and the primary adoption barrier at that phase.

**Table 1: SMILE Phases, Maturity Levels, and Adoption Barriers for EDOS**

| Phase | EDOS Deliverable | Maturity Level | Primary Adoption Barrier |
|-------|-----------------|----------------|--------------------------|
| 1 — Spatial awareness | Canonical animal entities; facility spatial model (stable layout, paddock boundaries) | Data foundation: records exist and are attributed | Staff willingness to enter observations; data ownership concerns |
| 2 — Managed intelligence | Data integration layer connecting clinical, nutritional, and biosensor streams | System of record: data is integrated and queryable | Veterinary software vendor cooperation; format heterogeneity |
| 3 — Integrated context | AI risk detection layer; compliance documentation generation | Augmented intelligence: system surfaces patterns | Trust in AI outputs; model validation deficit |
| 4 — Layered collaboration | Multi-farm shared breeding registry; regional disease surveillance integration | Networked value: data benefits extend beyond the single farm | Data sharing agreements; competitive sensitivity of breeding data |
| 5 — Empowered outcomes | Outcome measurement against Five Domains welfare indicators; feedback to farm management practice | Adaptive system: outcomes loop back to operational decisions | Welfare metric standardisation; longitudinal data requirements |

The maturity model is explicitly sequential: each phase depends on the infrastructure established in the preceding phase. Phase 1 failures — primarily adoption resistance and data entry friction — are the most common failure mode in agricultural IS deployments (Eastwood et al., 2012) and must be resolved before technical investment in later phases is made.

Agricultural IS adoption literature identifies consistent barrier patterns relevant to EDOS. Tey and Brindal (2012) meta-analysed 26 studies on precision agriculture technology adoption and found that perceived usefulness and compatibility with existing practice — not technical capability — are the primary determinants of sustained use. Eastwood et al. (2012) found that trust in data handling and perceived autonomy over data are critical for New Zealand dairy farmer technology adoption. Wolfert et al. (2017) document how data fragmentation in "smart farming" mirrors the pre-integration condition EDOS addresses, with the additional observation that integration gains are only realised when data is actually used for decision-making rather than merely collected.

---

## 7. Implications

### 7.1 Animal Welfare

The most direct implication of EDOS deployment is the reduction of knowledge evaporation. When observations — including the informal, shift-to-shift behavioural knowledge that currently exists only in staff memory — are anchored to the animal entity through the structured handover translation described in Section 3.1, that knowledge persists beyond any individual staff member's tenure.

The risk detection capability has specific welfare implications for foaling and for disease onset. Both events exhibit early signals that are individually ambiguous but collectively diagnostic. A system that continuously integrates feeding, behaviour, temperature, and movement data across a herd can surface these conjunction patterns before they become clinical emergencies. This is the equine equivalent of the continuous monitoring capability that has reduced preventable adverse events in human intensive care — applied to the biological monitoring problem that equine welfare presents.

### 7.2 Economic Returns

The economic case for EDOS rests on three value drivers: reduced preventable health losses, reduced compliance friction for export transactions, and improved breeding decision quality through complete reproductive and performance history.

Preventable health losses in equine operations are inadequately quantified in the published literature, but practitioner accounts consistently identify delayed detection and treatment of colic, laminitis, and infectious disease as primary drivers of serious losses. Export transaction compliance currently consumes significant staff time in document aggregation and introduces error risk that can delay or prevent transaction completion. Automated compliance documentation generation from a verified system of record converts a multi-day manual process into a same-day query output.

### 7.3 Regulatory and Epidemiological Applications

A network of EDOS deployments across a regional equine population provides, as a secondary output, an epidemiological dataset for disease surveillance. AHS zone mapping currently relies on reported clinical cases, veterinary notifications, and entomological surveillance. A continuously updated, georeferenced health record for every registered horse in a region would provide early warning of disease cluster emergence at a resolution and latency that no current surveillance system achieves.

This illustrates the principle articulated in Waern (2025a, DOI: 10.5281/zenodo.17462962): when the persistent layer is shared — when all data orbits the same physical reality — the aggregate dataset is more valuable than the sum of individual records that contribute to it.

---

## 8. Falsifiable Propositions and Adoption Barriers

Systematic evaluation of the EDOS requires propositions that are specific enough to be tested empirically. We propose three:

**P1 (Compliance efficiency).** EDOS deployment in mid-to-large equine breeding operations facing AHS export requirements will reduce the cycle time for export health documentation from a baseline of three to seven staff-days to under four hours, measurable through pre/post time-and-motion studies conducted at matched facilities.

**P2 (Knowledge retention).** Operations using EDOS for structured shift handover will exhibit lower knowledge loss following staff turnover events, operationalised as the time required for a new staff member to identify individual animal behavioural patterns at clinically relevant precision, compared to operations using verbal handover only. A candidate measurement instrument is a structured animal observation assessment administered at thirty and sixty days post-hire.

**P3 (Welfare signal detection).** In operations with EDOS integrated across clinical, nutritional, and behavioural data streams, the proportion of colic episodes and lameness events preceded by a documented early signal (defined as any anomaly flag in any data stream within seventy-two hours prior to clinical presentation) will be higher than in matched operations without integration, holding veterinary visit frequency constant.

These propositions are falsifiable in the sense of Popper (1959): specific outcomes can be observed that would refute each claim. They are proposed as a research agenda, not as assertions of established fact.

---

## 9. Limitations and Future Research

### 9.1 Current Limitations

This paper presents an architectural proposal grounded in fieldwork at a single equine operation in southern Africa. The generalisation of findings to the full diversity of equine operating environments requires empirical validation in each context and is not assumed. The paper's claims are bounded to: mid-to-large equine breeding and performance operations (twenty-five or more horses; dedicated professional staff) operating under formal regulatory compliance obligations, where the economic and welfare stakes justify digital system investment. Working horse populations in low-income country contexts, small private owners, and racing yard operations face different constraint profiles and are explicitly outside the scope of this paper's propositions.

The disease zone regulatory context described is specific to southern Africa. Export compliance requirements differ substantially across jurisdictions, and the EDOS compliance documentation architecture would require localisation for each regulatory environment.

The AI risk detection capability described in Section 6.3 is a design specification for a system that does not yet exist in validated form. The gradient-boosted ensemble approach is proposed on the basis of appropriate model class selection for available data volumes; it has not been trained or evaluated on equine health datasets.

### 9.2 Future Research Agenda

**Empirical Next Step 1: Structured multi-site fieldwork on handover knowledge loss.** The ANT translation analysis in Section 3.1 is based on a single-site observation and one practitioner interview. A structured comparative study of shift handover practices across five to ten equine operations of varying size and type — using ethnographic observation, staff interview, and knowledge assessment instruments — would provide the empirical grounding necessary to validate the knowledge evaporation claim and to identify the specific structured data fields that would capture the most operationally valuable tacit knowledge. This study could be designed and conducted within a single academic year and would produce both a validated problem statement and the design requirements for the EDOS observation interface.

**Empirical Next Step 2: Prospective pilot validation of the integration architecture against P1 and P2.** A controlled pilot deployment of the EDOS data integration layer (Phases 1 and 2 of the SMILE pathway, without the AI inference layer) at two to three equine breeding operations facing AHS export compliance requirements would provide the first empirical data on compliance documentation time reduction (P1) and knowledge retention improvement (P2). A twelve-month pilot with quarterly measurement points would generate sufficient longitudinal data to evaluate both propositions and to identify the adoption barriers — particularly around structured observation entry and veterinary system integration — that the current architectural specification does not fully resolve.

---

## 10. Conclusion

The equine industry faces a data architecture problem: not a shortage of data, but an absence of the persistent layer that would allow data, once generated, to accumulate into knowledge. The horse itself — its body, its space, its biological state — is the logical persistent layer. Every health record, feeding event, behaviour observation, sensor reading, and regulatory document is a projection of the biological reality of that individual animal.

Actor-Network Theory reveals that the transition from verbal handover to structured digital inscription is not merely a technical upgrade. It is a translation that redistributes agency across the sociotechnical network — one that farm management and animal welfare stand to gain from, and that individual staff members holding tacit knowledge as a personal asset may experience as a loss. This political dimension must be acknowledged and designed for, not assumed away.

The boundary object analysis reveals that a digital representation of the animal can simultaneously serve veterinary, welfare, economic, and regulatory purposes — not by forcing consensus on what the animal *is*, but by providing a shared referent from which each community draws its own relevant content. This is why the EDOS is architecturally possible: it does not require a single unified ontology of equine data. It requires only that all data point at the same animal.

The platformisation critique is legitimate and must be met architecturally: open standards, edge-native operation, local data sovereignty, and open-source core. These are not policy commitments; they are structural features that distinguish a data operating system from an extractive data platform.

The gap is architectural. The architecture is specifiable. The next steps are empirical.

---

## References

Brambell, F. W. R. (1965). *Report of the Technical Committee to Enquire into the Welfare of Animals Kept Under Intensive Livestock Husbandry Systems*. Her Majesty's Stationery Office. [No DOI available]

Bronson, K. (2019). Looking through a responsible innovation lens at uneven engagements with digital farming. *NJAS — Wageningen Journal of Life Sciences*, 90–91, 100294. https://doi.org/10.1016/j.njas.2019.03.001

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of Saint Brieuc Bay. In J. Law (Ed.), *Power, Action and Belief: A New Sociology of Knowledge?* (pp. 196–233). Routledge.

Carolan, M. (2020). Automated agrifood futures: Robotics, labor and the distributive politics of digital agriculture. *Journal of Rural Studies*, 80, 1–10. https://doi.org/10.1016/j.jrurstud.2020.06.042

Eastwood, C., Klerkx, L., & Nettle, R. (2012). Dynamics and distribution of public and private research and extension roles for technological innovation and diffusion: Case studies of the implementation and adaptation of precision farming technologies. *Journal of Rural Studies*, 28(4), 1–11. https://doi.org/10.1016/j.jrurstud.2012.01.005

Farm Animal Welfare Committee. (2009). *Five freedoms*. Department for Environment, Food and Rural Affairs. [No DOI available]

Gleerup, K. B., Andersen, P. H., Munksgaard, L., & Forkman, B. (2015). Pain evaluation in dairy cattle. *Applied Animal Behaviour Science*, 171, 25–32. https://doi.org/10.1016/j.applanim.2015.08.023

Latour, B. (1987). *Science in Action: How to Follow Scientists and Engineers Through Society*. Harvard University Press.

McGreevy, P. D., Warren-Smith, A., & Guisard, Y. (2018). Equine behavioral medicine: Implications for veterinary practice. *Veterinary Clinics of North America: Equine Practice*, 18(2), 269–289. [DOI could not be confirmed at time of submission; readers should verify via publisher index.]

Mellor, D. J. (2017). Operational details of the five domains model and its key applications to the assessment and management of animal welfare. *Animals*, 7(8), 60. https://doi.org/10.3390/ani7080060

Polanyi, M. (1966). *The Tacit Dimension*. Doubleday. [No DOI available]

Popper, K. (1959). *The Logic of Scientific Discovery*. Hutchinson. [No DOI available]

Sailleau, C., Breard, E., Viarouge, C., Gorlier, A., Quenault, H., Touzain, F., & Zientara, S. (2019). African horse sickness: Serological and entomological survey in the AHS surveillance zone of the Western Cape Province, South Africa. *Transboundary and Emerging Diseases*, 66(1), 345–352. https://doi.org/10.1111/tbed.13049

Schneier, B. (1996). *Applied Cryptography: Protocols, Algorithms, and Source Code in C* (2nd ed.). Wiley.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, translations and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, 19(3), 387–420. https://doi.org/10.1177/030631289019003001

Tey, Y. S., & Brindal, M. (2012). Factors influencing the adoption of precision agricultural technologies: A review for policy implications. *Precision Agriculture*, 13(6), 713–730. https://doi.org/10.1007/s11119-012-9273-6

Waern, N. (2025a). *The reality construct: Digital twins as boundary-spanning artefacts for knowledge absorption, organisational evolution, and the co-authorship of intended futures*. WINNIIO AB. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). *SMILE: A five-phase methodology for impact-driven digital twin deployment*. WINNIIO AB. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *Edge-native intelligence for sovereign life science data: Architecture patterns for genomic research at the computational frontier*. WINNIIO AB. https://doi.org/10.5281/zenodo.19587944

WHOQOL Group. (1995). The World Health Organisation Quality of Life assessment (WHOQOL): Position paper from the World Health Organisation. *Social Science and Medicine*, 41(10), 1403–1409. https://doi.org/10.1016/0277-9536(95)00112-K

Wolfert, S., Ge, L., Verdouw, C., & Bogaardt, M. J. (2017). Big data in smart farming — A review. *Agricultural Systems*, 153, 69–80. https://doi.org/10.1016/j.agsy.2017.01.023
