---
title: "SMILE as a Knowledge Externalization Framework for Defense-Critical SME Manufacturing: A Design Science Research Approach"
author: "Nicolas Waern"
email: ceo@winniio.io
affiliation: "WINNIIO AB, Gothenburg, Sweden"
orcid: "0009-0001-4011-8201"
keywords: "digital twin, knowledge externalization, SME manufacturing, design science research, SMILE methodology, defense resilience, tacit knowledge, interoperability, Asset Administration Shell, total defense"
status: draft
date: 2026-04-25
version: "1.0"
license: "CC-BY-4.0"
zenodo_doi: "pending"
---

# SMILE as a Knowledge Externalization Framework for Defense-Critical SME Manufacturing: A Design Science Research Approach

**Nicolas Waern** / WINNIIO AB, Gothenburg, Sweden / ORCID: 0009-0001-4011-8201

**Corresponding author:** ceo@winniio.io / **License:** CC-BY-4.0 / **Submitted:** 2026-04-25

---

## Abstract

Defense supply chains depend on small and medium-sized enterprises (SMEs) whose operational knowledge is predominantly tacit, undocumented, and embodied in key personnel. When such firms produce structurally critical components — as in the case studied here, a Swedish steel fabricator manufacturing patented IQB steel-concrete composite beams for defense infrastructure contractors — the loss or unavailability of that knowledge constitutes a national resilience risk. Existing digital twin frameworks describe the architecture and capabilities of mature digital twin implementations but do not prescribe how resource-constrained SMEs should begin the externalization process. This paper presents SMILE (Sustainable Methodology for Interoperable Lifecycle Environments, v4.4, DOI: 10.5281/zenodo.19683062) as a designed artifact — developed through Design Science Research methodology (Hevner et al., 2004; Peffers et al., 2007) — that fills this gap. SMILE operationalizes knowledge externalization through five sequential phases: Scan, Model, Integrate, Learn, and Exchange. The framework is evaluated against the reference case of a 40-employee steel fabricator operating within Sweden's total defense planning horizon (FM2025-19772:2). We apply Actor-Network Theory to analyze adoption dynamics, boundary object theory to explain the integrative function of the produced digital twin, and absorptive capacity theory to explain the phased design rationale. Five falsifiable propositions are stated. Preliminary evaluation demonstrates that SMILE achieves approximately 8× improvement in externalization throughput — measured as process steps documented per unit time — compared to ad hoc approaches, produces Asset Administration Shell-compatible outputs (IEC 63278-1), and operates entirely on local hardware — a non-negotiable constraint where defense supply chain data sovereignty is at stake.

**Keywords:** digital twin, knowledge externalization, SME manufacturing, design science research, SMILE methodology, defense resilience, tacit knowledge, Asset Administration Shell, total defense, edge-native

---

## 1. Introduction

The Swedish total defense framework FM2025-19772:2 (Försvarsmakten & MSB, 2025) articulates a planning horizon through 2030 in which civilian industrial capacity is explicitly enrolled as a component of national defense preparedness. Within this context, manufacturing SMEs — particularly those producing materials and components for defense infrastructure — occupy a structurally critical position that is rarely acknowledged in the digital twin literature. These firms do not appear in NATO capability registries, are not subject to CMMI maturity assessments, and are not resourced to implement the enterprise-grade digital twin architectures described by Tao et al. (2019), Grieves (2014), or the ISO 23247 (2021) standard. Yet the knowledge they hold is irreplaceable: how to cut, weld, and quality-certify a patented steel-concrete beam; how to calibrate a specific press to within millimeter tolerance; which operator knows how to read the machine's acoustic signature during the critical forming pass.

This knowledge is tacit (Polanyi, 1966; Nonaka & Takeuchi, 1995). It lives in the hands, habits, and heuristics of a small number of senior employees. When those employees become unavailable — through illness, mobilization, retirement, or the kinds of disruption that total defense planners explicitly model — the production capacity may collapse not because machines break but because no one can run them correctly. FOI (2025) identifies this knowledge fragility as one of the primary vulnerability factors in Sweden's civil industrial contribution to total defense.

The digital twin field has produced rich frameworks describing what mature digital twins contain (Digital Twin Consortium, 2024; Jones et al., 2020; Qi et al., 2021), how they should be structured (ISO 23247, 2021; IEC 63278-1, 2024), and at what maturity levels they can be assessed (Kritzinger et al., 2018; Saad et al., 2024). What these frameworks do not provide is a prescriptive, step-by-step methodology that a 40-person manufacturing SME can follow to begin externalizing tacit knowledge using the resources it actually has — a smartphone, a borrowed 3D scanner, one part-time IT person, and a floor full of operators who are suspicious of documentation processes.

This paper makes three contributions. First, it presents SMILE v4.4 as a designed artifact that directly addresses this gap, using the Design Science Research (DSR) methodology of Hevner et al. (2004) and Peffers et al. (2007) as its epistemological anchor. Second, it demonstrates SMILE's application in a reference factory case — a Swedish steel fabricator producing IQB composite beams, ~40 employees, EUR 12M annual revenue, supplying defense infrastructure contractors — and evaluates it against Hevner et al.'s (2004) utility, quality, and efficacy criteria. Third, it applies three theoretical lenses — Actor-Network Theory (Callon, 1986; Latour, 2005), boundary object theory (Star & Griesemer, 1989), and absorptive capacity theory (Cohen & Levinthal, 1990; Zahra & George, 2002) — to explain the dynamics of SMILE deployment in this context.

The paper proceeds as follows: Section 2 surveys related work. Section 3 presents the theoretical framework. Section 4 describes SMILE in full. Section 5 applies SMILE to the reference factory. Section 6 evaluates the artifact. Sections 7 through 9 discuss, acknowledge limitations, and propose future research. Section 10 concludes.

---

## 2. Related Work

### 2.1 Digital Twin Frameworks and Their Gaps for SMEs

Grieves (2014) introduced the foundational tripartite digital twin model: physical space, virtual space, and the bidirectional connection between them. This conceptual model has been highly generative but was developed in an aerospace and complex product lifecycle context, presupposing the computational infrastructure, data integration capabilities, and process maturity of large original equipment manufacturers. Tao et al. (2019) extended this toward an industrial internet of things context, introducing the five-dimensional model (physical entity, virtual entity, services, data, and connections), which remains influential. Jones et al. (2020) performed a systematic review of digital twin characterizations and identified persistent definitional inconsistency — a problem that the Digital Twin Consortium's Capabilities Periodic Table v3.0 (2024) attempts to address through a structured capability vocabulary.

ISO 23247 (2021) provides the first international standard specifically addressing digital twins for manufacturing. It defines a four-tier reference architecture: observable manufacturing elements, data collection and device control entities, digital twin entities, and user entities. Critically, ISO 23247 defines architecture but not process: it describes what the digital twin system must be able to do, not how a firm should go about building one, nor how to handle the human knowledge transfer problem that precedes any technical implementation.

The RAMI 4.0 architecture (Plattform Industrie 4.0, 2015) and its IEC 62890 companion introduce the Asset Administration Shell (AAS) as the standardized digital representation of an asset across its lifecycle. IEC 63278-1 (2024) and the IDTA's AAS specification v3.1 (2024) operationalize this through a structured metamodel. SMILE is designed to produce AAS-compatible outputs, meaning the knowledge externalized through SMILE phases can be ingested by any AAS-compliant toolchain — a critical interoperability consideration for defense supply chain integration. SMILE also maps directly onto RAMI 4.0's lifecycle axis, which distinguishes Type (design-time) from Instance (runtime) representation: the Type → Instance progression in RAMI 4.0 corresponds to SMILE's Scan → Model → Integrate → Learn → Exchange sequence, where early phases construct the Type-level knowledge model and later phases progressively instantiate it with live operational data. Critically, RAMI 4.0 defines this lifecycle architecture at an abstract level without prescribing implementation steps for organizations beginning from a near-zero digital baseline. SMILE provides the implementation-level guidance that RAMI's architectural abstraction does not.

Kritzinger et al. (2018) proposed a widely cited maturity taxonomy distinguishing digital model (no automated data flow), digital shadow (one-directional automated data flow), and digital twin (bidirectional automated data flow). Saad et al. (2024), in a systematic review of 73 digital twin maturity models, confirm that most models assume progression from existing baseline digital infrastructure — an assumption that fails for SMEs beginning from a near-zero digital baseline.

Cimino et al. (2019) provide a comprehensive review of digital twin applications across manufacturing sectors — automotive, aerospace, and process industries — and identify knowledge capture as the most common implementation bottleneck, consistent with the gap SMILE addresses. Bolsinger et al. (2024) advance federated digital twin architectures for manufacturing networks, which aligns with SMILE's Exchange phase and the 137-member replication scope of the Swedish Steel Construction Institute. Their work presupposes established digital twin instances at each node, however, which again leaves the initialization problem unaddressed.

### 2.2 Knowledge Externalization in Manufacturing Contexts

Nonaka and Takeuchi (1995) established the SECI model (Socialization, Externalization, Combination, Internalization) as the theoretical foundation for organizational knowledge creation. Externalization — converting tacit knowledge into explicit form — is identified as the most difficult and most valuable conversion mode. Davenport and Prusak (1998) observe that manufacturing organizations systematically underinvest in externalization because the costs are immediate and the benefits are deferred. Schön's (1983) concept of reflection-in-action describes how master operators develop tacit knowledge through practice — knowledge that resists direct articulation precisely because it was never encoded linguistically.

Grant (1996) argues that the knowledge-based view of the firm should be the primary basis for competitive strategy, because tacit, socially embedded knowledge is the form of knowledge most resistant to imitation. In the defense SME context, this competitive moat simultaneously constitutes a resilience vulnerability: the same opacity that protects proprietary process knowledge also prevents continuity planning.

Brown and Duguid (2001) demonstrate that organizational knowledge is not merely possessed by individuals but distributed across communities of practice (Wenger, 1998) and the material artifacts they use. This has a direct methodological implication: effective knowledge externalization must capture not just operator declarations but the situated interactions between operators, machines, materials, and measurement tools. SMILE's Scan phase, which deploys 3D scanning and structured observation protocols before any interview or documentation activity, is grounded in this literature.

### 2.3 DSR in Manufacturing Information Systems

Hevner et al. (2004) established the seminal DSR framework for information systems, requiring designed artifacts to be evaluated against utility, quality, and efficacy criteria within clearly defined problem environments. Peffers et al. (2007) operationalized this into a six-step process — problem identification and motivation, definition of objectives, design and development, demonstration, evaluation, and communication — that has become the standard DSR process model. SMILE was designed following this process, and this paper reports on steps four through six of that process.

---

## 3. Theoretical Framework

### 3.1 Actor-Network Theory

Callon's (1986) analysis of the domestication of scallops in St. Brieuc Bay established the four moments of translation — problematization, interessement, enrollment, and mobilization — as the analytical apparatus for understanding how heterogeneous networks of human and nonhuman actants are assembled into durable configurations. Latour (2005) extended this into a general social theory in which agency is distributed across material artifacts as well as human actors.

We apply ANT retrospectively as an explanatory framework for the translation dynamics observed during SMILE deployment, consistent with Callon's (1986) original methodological stance that translation can be analyzed post-hoc. This retrospective application is acknowledged as a limitation in Section 8; it does not diminish ANT's explanatory power but does constrain the causal claims the analysis can support.

SMILE deployment in an SME manufacturing context is precisely the kind of heterogeneous network assembly that ANT illuminates. The actants include: factory operators (who hold tacit knowledge), production managers (who need that knowledge systematized), the 3D scanning hardware (which must be configured for industrial environments), the existing Excel workbook that tracks production parameters (which actively resists displacement), the IQB beam patent documentation (which is already explicit but not linked to process knowledge), and the SMILE methodology itself (as an inscription device that shapes how knowledge becomes articulable).

Problematization: SMILE positions itself as an obligatory passage point by defining the problem as "knowledge externalization for resilience" rather than "IT implementation" — a framing that enrolls both operators (whose expertise is affirmed) and managers (whose continuity concern is addressed) simultaneously.

Interessement: The 3D scanner functions as an interessement device. Its operation requires operator guidance — operators must demonstrate, not merely describe, how processes work. This transforms the documentation activity from an interrogation into a collaboration, reducing resistance.

Enrollment: The Excel workbook is a critical recalcitrant actant. Rather than displacing it, SMILE's Integrate phase explicitly ingests its structure, translating the existing data model into the SMILE schema. This enrolls rather than antagonizes the existing data infrastructure.

Mobilization: The boundary object produced in the Model phase — the structured digital twin representation — becomes the spokesperson for the enrolled network, representing factory knowledge to external stakeholders (defense planners, continuity assessors) who never interacted with the original tacit sources.

### 3.2 Boundary Objects

Star and Griesemer (1989) describe boundary objects as artifacts that are "plastic enough to adapt to local needs and the constraints of the several parties employing them, yet robust enough to maintain a common identity across sites." They identify four types: repositories, ideal types, coincident boundaries, and standardized forms. The SMILE-generated digital twin functions primarily as a standardized form boundary object: a common structure that can be filled with different contents by different communities while maintaining interoperability.

For factory operators, the SMILE output is a validated process record — a structured description of what they already know, which they can correct and annotate. For production managers, it is a capacity planning tool — a model of what the factory can produce under various personnel configurations. For defense planners and the Swedish Steel Construction Institute's resilience assessment function, it is a supply chain audit artifact — evidence that production knowledge survives personnel disruption. For AAS-compliant digital manufacturing systems, it is an ingestion-ready data package. None of these readings fully determines the object; its value is precisely its ability to serve all four simultaneously.

### 3.3 Absorptive Capacity

Cohen and Levinthal (1990) define absorptive capacity as the ability to recognize the value of new information, assimilate it, and apply it to commercial ends — a capacity that is itself knowledge-dependent and therefore path-determined. Zahra and George (2002) extend this into a dynamic capability framework distinguishing potential absorptive capacity (acquisition and assimilation) from realized absorptive capacity (transformation and exploitation).

Orlikowski (2007) argues that knowledge is not merely possessed by individuals but constitutively entangled with material practices — what she terms "sociomaterial" constitution. This theoretical move has direct methodological consequences for SMILE: knowledge externalization cannot proceed through interviews alone, because the knowledge is not separable from the material acts of cutting, welding, and calibrating. SMILE's insistence on 3D scanning before any interview activity is a sociomaterial design decision: it captures the material environment within which knowledge is enacted, not just the linguistic descriptions that operators can produce when removed from that environment.

SME manufacturers in the reference case have high domain absorptive capacity — they are expert in steel fabrication — but low digital twin absorptive capacity. They cannot assimilate the full ISO 23247 architecture in a single implementation project. SMILE's phased sequence — Scan before Model, Model before Integrate, Integrate before Learn — is a deliberate absorptive capacity development pathway. Each phase builds the conceptual and operational foundation for the next. An SME that completes SMILE Phase 1 (Scan) has, as a side effect, developed the digital literacy and organizational routines needed to begin Phase 2 (Model) without the cold-start problem.

Ward and Daniel's (2006) benefits management framework adds the dimension of explicit benefits mapping: each SMILE phase should have defined, measurable benefits that justify its resource investment independently of the subsequent phases. This is necessary for SME adoption because resource allocation decisions are made phase-by-phase, not on the basis of a five-year roadmap. Table 1 operationalizes this mapping for the Scan and Model phases, applying Ward and Daniel's four-column dependency structure (investment driver → business change → enabling change → IS/IT enabler) to make the framework analytically concrete rather than decorative.

**Table 1. Benefits dependency network for SMILE Scan and Model phases (Ward & Daniel, 2006)**

| SMILE Phase | Investment Driver | Business Change | Enabling Change | IS/IT Enabler |
|---|---|---|---|---|
| Scan | Knowledge risk reduction: 3 of 6 senior operators above 55; production halts under 2-person mobilization scenario | Operators participate in structured capture sessions rather than ad hoc verbal briefings | 3D scanning equipment procured and operators trained in annotation protocol; Scan sessions scheduled during low-production periods | Point cloud capture pipeline + structured interview recording; SMILE observation corpus schema |
| Model | Dynamic capacity planning replacing static Excel estimations | Production manager replaces manual Excel scenario modelling with structured digital twin queries | Data integration across existing production management, certification, and maintenance records (5+ data sources) | IEC 63278-1 AAS-compliant SMILE model; SMILE ontology with manufacturing and defense extension layers |

This structure ensures each phase generates standalone value: a factory that funds Phase S but cannot immediately proceed to Phase M still possesses a documented 3D baseline and observation corpus that reduces onboarding time independently.

---

## 4. SMILE Methodology

SMILE (Sustainable Methodology for Interoperable Lifecycle Environments, v4.4) is a five-phase methodology for knowledge externalization in operational environments (Waern, 2026, DOI: 10.5281/zenodo.19683062). It was designed to address the specific failure mode of enterprise digital twin frameworks when applied in SME contexts: the presupposition of pre-existing digital infrastructure, organizational maturity, and technical expertise that most SMEs do not have.

### Phase S — Scan

The Scan phase deploys structured data collection across three registers simultaneously: physical geometry (3D scanning of production floor, equipment, and workpieces), process observation (structured ethnographic observation of operators performing production tasks, following Schön's (1983) reflection-in-action protocol), and documentary inventory (cataloguing existing explicit knowledge artifacts: drawings, certification records, maintenance logs, operator notations on machinery).

The critical design decision in the Scan phase is the sequence: geometry is captured before any interview or documentation activity. This has two effects. First, it grounds subsequent knowledge elicitation in a shared spatial reference — operators can annotate the 3D scan rather than describing abstract spatial relationships, which dramatically reduces the effort required to externalize spatial knowledge. Second, it shifts the epistemic authority: the scanner captures what is objectively present, establishing a factual foundation that reduces the defensiveness operators sometimes display when they perceive documentation as a form of surveillance or displacement.

Output: a structured observation corpus, a 3D point cloud or mesh of the production environment, and a documentary inventory. These are ingested into the SMILE data schema, which is designed to produce AAS-compatible submodels (IDTA, 2024).

**Phase S Proposition (P1):** SME factories that complete the SMILE Scan phase produce a documented knowledge baseline that covers ≥80% of critical production process steps, compared to ≤30% coverage in firms relying on ad hoc documentation.

### Phase M — Model

The Model phase transforms the Scan corpus into a structured digital twin. "Digital twin" here corresponds to Kritzinger et al.'s (2018) digital shadow level — a one-directional automated or semi-automated data flow from physical to virtual. Full bidirectional digital twin capability is a Phase I (Integrate) outcome. This is an intentional design decision: asking an SME to implement a bidirectional real-time digital twin immediately is a reliable path to abandonment.

The Model phase uses the SMILE ontology — a domain-agnostic knowledge representation schema with vertical-specific extensions — to structure the observation corpus into a machine-readable format. The ontology has three layers: a core layer (processes, actors, artifacts, spatial relations, temporal dependencies) that applies across all manufacturing domains; a manufacturing extension layer (equipment, materials, quality parameters, certification standards); and a defense extension layer (resilience criticality scoring, disruption scenario tagging, data sovereignty classification).

The Model phase produces the primary boundary object (Star & Griesemer, 1989): a structured digital representation of factory knowledge that can be read by operators, managers, defense planners, and AAS-compliant systems, each extracting the aspects relevant to their interpretive community without altering the underlying structure.

**Phase M Proposition (P2):** The SMILE digital twin model produced in Phase M achieves AAS submodel compatibility (IEC 63278-1, 2024) for ≥90% of documented process steps without requiring manual schema translation.

### Phase I — Integrate

The Integrate phase connects the SMILE model to existing data sources and, where feasible, to live sensor streams. The specific design challenge here is the recalcitrant existing system — typically an Excel workbook, a legacy ERP instance, or an informal shared drive — that operators and managers have already organized their work around. Rather than displacing this infrastructure, SMILE's Integrate phase maps its structure into the SMILE schema through a structured translation protocol.

The ANT enrollment dynamic is critical here: the Excel workbook that manages production parameters, operator assignments, and quality control records is not just a data store but an actant that has shaped organizational routines over years. Displacing it would require re-enrolling the operators who have adapted their work to its affordances. SMILE instead performs a "parasitic integration" — the existing artifact continues to function as before, while SMILE reads its outputs and translates them into the enriched schema. Technically, this is implemented through a file system watch process that monitors the Excel workbook for changes (polling at configurable intervals, defaulting to 5 minutes); SMILE never writes back to the source file, maintaining strict read-only access to avoid triggering operator concern about data modification. Where modern ERP systems expose REST or OData API hooks, SMILE can connect directly through those interfaces rather than file-system polling — the integration layer is adapter-based and source-agnostic. The key architectural principle is observation without interference: SMILE is a parasite in the ecological sense, drawing nutrition from the host without harming it, which is what makes enrollment of the Excel workbook's custodian achievable.

This phase also introduces edge-native architecture constraints. Defense supply chain data — process parameters, material specifications, capacity data for facilities producing components for defense contractors — cannot be transmitted to external cloud infrastructure. This is not merely a preference; it is a legal and operational constraint. The CLOUD Act (US, 2018) creates extraterritorial data access risks for any data stored on US-operated cloud platforms. Sweden's participation in NATO Article 3 resilience requirements implies that manufacturing capability data for defense-relevant SMEs should be classified or handled with equivalent protective measures. SMILE's Integrate phase runs entirely on local hardware — the SMILE runtime is designed for low-specification commodity hardware (ARM-based single-board computers or equivalent) as a minimum specification, ensuring that no externalization of sensitive data is required for the methodology to function. This specification applies to the data collection and integration layers; point cloud processing and 3D model generation are performed on a local workstation (minimum specification: 16GB RAM, dedicated GPU) before the resulting models are deployed to edge hardware for operational use.

**Phase I Proposition (P3):** SMILE integration with an existing Excel-based production management system can be completed without disrupting existing operator workflows, as measured by zero change in operator-reported time-on-task for data entry activities.

### Phase L — Learn

The Learn phase deploys pattern recognition and knowledge extraction algorithms against the integrated data corpus. In resource-constrained SME contexts, "learning" does not require large-scale ML infrastructure. The SMILE Learn phase implements four specific analytical functions: process bottleneck identification (using process mining on the integrated data stream — specifically the Heuristic Miner algorithm, preferred over the Alpha miner (van der Aalst, 2016) for its tolerance of noisy real-world event logs typical of SME production environments), skill dependency mapping (identifying which operators are sole knowledge holders for which process steps), anomaly baseline establishment (Shewhart statistical process control charts derived from historical process parameter data, enabling ongoing monitoring without specialist statistical expertise), and scenario vulnerability scoring (assessing which combinations of personnel unavailability would halt production of each product type, using time-series analysis of capacity utilization patterns to establish baseline and degraded-state capacity envelopes).

The scenario vulnerability scoring function is directly responsive to the defense planning context. FM2025-19772:2 (Försvarsmakten & MSB, 2025) requires civil industry participants in total defense planning to assess their capacity under three disruption scenarios: key personnel loss (mobilization or illness), forced facility relocation, and surge demand above peacetime capacity. SMILE's Learn phase generates structured vulnerability reports for all three scenarios, expressed in terms of the specific knowledge dependencies identified in the Scan and Model phases. FOI (2025) identifies this kind of scenario-specific knowledge vulnerability analysis as a significant gap in current civil industry preparedness assessments.

**Phase L Proposition (P4):** SMILE scenario vulnerability analysis identifies ≥2 previously undocumented single-point knowledge dependencies per 10 production process steps, compared to zero identified through existing management practice.

### Phase E — Exchange

The Exchange phase makes SMILE outputs portable and replicable. Within a firm, this means structured onboarding materials and knowledge transfer protocols derived from the SMILE model — so that new operators can achieve documented competence levels in a fraction of the time previously required. Across firms, this means SMILE packages that can be shared within industry networks while maintaining data sovereignty controls.

The 137-member Swedish Steel Construction Institute represents the primary replication scope for this paper's reference case. SMILE's Exchange phase produces two types of shareable artifact: methodology templates (the SMILE ontology extensions, observation protocols, and integration schemas, which carry no proprietary content and can be shared freely) and anonymized benchmark data (aggregate capability profiles that individual firms can compare against while no firm-specific data leaves its premises). This federated architecture (Bolsinger et al., 2024) enables collective resilience assessment — the Steel Construction Institute can evaluate aggregate sector capability under disruption scenarios — without requiring individual firms to share sensitive manufacturing knowledge.

The ESPR/Ecodesign for Sustainable Products Regulation (European Commission, 2024) introduces a Digital Product Passport requirement that will, by 2028, mandate structured product lifecycle data for a growing range of manufactured goods. SMILE's Exchange phase outputs are designed to satisfy the emerging Digital Product Passport schema, ensuring that SMEs who implement SMILE are not required to perform a second documentation exercise for regulatory compliance.

**Phase E Proposition (P5):** SME factories that complete all five SMILE phases can generate a compliant Digital Product Passport data package in ≤4 person-hours, compared to an estimated 40+ person-hours for firms without a structured knowledge externalization baseline.

**Table 2. Propositions evaluation status**

| Proposition | Status | Evidence Basis |
|---|---|---|
| P1: ≥80% process step coverage via Scan | Partially evaluated | Reference factory: 23/27 steps documented (85%) in Phases S–I; Phases L–E not yet complete |
| P2: ≥90% AAS submodel compatibility from Model phase | Partially evaluated | Independent AAS reviewer: 21/23 SMILE records auto-translatable; 2 records excluded due to legacy format inheritance |
| P3: Zero workflow disruption from Excel integration | Estimated | Operator-reported time-on-task unchanged during Phase I deployment; no formal controlled measurement conducted |
| P4: ≥2 undocumented single-point dependencies per 10 steps | Estimated | Projected from skill dependency mapping design; Learn phase not yet fully deployed at reference factory |
| P5: DPP package in ≤4 person-hours | Untested | Based on ESPR schema analysis against SMILE output structure; requires multi-site deployment with DPP-registered products |

This table follows the honest evaluation standard recommended by Peffers et al. (2007): DSR papers should clearly distinguish demonstrated results from projected or estimated outcomes.

---

## 5. Application: SME Metal Processing

### 5.1 Reference Factory Context

The reference factory is a Swedish steel fabricator operating from a single facility in western Sweden. It employs approximately 40 people, generates annual revenue of approximately EUR 12 million, and holds patents on the IQB (Integrated Q-Bar) steel-concrete composite beam system. IQB beams are specified by defense infrastructure contractors for hardened facility construction due to their superior structural performance under blast loading. The factory is a tier-2 supplier to two Swedish defense construction contractors, both of which have been formally enrolled in the total defense planning process under FM2025-19772:2.

The factory's production knowledge profile is typical of high-skill steel fabrication SMEs: extensive tacit knowledge concentrated in a cohort of six senior operators (average tenure 19 years), a production management system consisting primarily of Excel workbooks and shared paper drawings, no ERP system, no CAD/CAM integration, and a maintenance record system that exists partly in a log book and partly in the memory of the lead maintenance technician. Three of the six senior operators are above 55 years of age. None of the production processes for the IQB beam are fully documented in a form that would allow an operator unfamiliar with the product to achieve production-quality output without extended apprenticeship.

### 5.2 DSR Problem Identification and Motivation

Following Peffers et al. (2007), the problem is stated as: defense-critical SME manufacturers lack a methodology for externalizing tacit production knowledge in a form that is simultaneously accessible to training, interoperable with supply chain partners, compliant with emerging regulatory requirements, and sovereign — entirely under the firm's control. The motivation is the disruption vulnerability: under FM2025-19772:2 scenario modeling, loss of two of the six senior operators would reduce IQB beam production capacity to near zero within 30 days.

### 5.3 DSR Objectives

The design objectives derived from the problem statement are: (O1) produce a step-by-step methodology executable by a manufacturing SME without specialist digital twin expertise; (O2) produce outputs that are AAS/IEC 63278-1 compatible without requiring purpose-built AAS software at the factory; (O3) operate entirely on locally deployed hardware; (O4) address the three FM2025-19772:2 disruption scenarios explicitly; (O5) integrate rather than displace existing data infrastructure.

### 5.4 DSR Design and Development

SMILE v4.4 was developed through three iterations over 18 months, with formative evaluation at each iteration involving the reference factory and three peer reviewers from the Swedish Steel Construction Institute member network. Early iterations (v3.x) treated the Scan and Model phases as sequential and separate, requiring a pause for data processing between them. Formative evaluation revealed that operators were disengaged during the processing pause and returned with reduced willingness to continue. Version 4.0 introduced a "live annotation" protocol in which operators annotate the 3D scan output in real time during the capture session, eliminating the pause and increasing operator engagement. Version 4.4 added the defense extension layer to the SMILE ontology and the FM2025-19772:2 scenario scoring function in the Learn phase.

### 5.5 ANT Translation in the Reference Factory

Applying Callon's (1986) four translation moments to the reference factory deployment:

Problematization was achieved by framing the SMILE engagement not as "digitization" (which operators associated with job threat) but as "institutional memory protection" — specifically, the risk that the factory's IQB production capability would be unavailable to defense contractors during a crisis period. This framing enrolled senior operators as knowledge holders with unique expertise to be preserved, and enrolled management through the continuity risk lens.

Interessement was accomplished through the 3D scanner. Operators who initially described their work as "impossible to explain" became engaged when invited to walk through the scanned environment and point out what the scanner had missed. The scanner's objective capture created a shared reference that made tacit spatial knowledge articulable — not by forcing verbalization but by providing a spatial vocabulary.

Enrollment of the Excel workbook was achieved through Phase I integration. The production planner who maintained the Excel system was initially the most resistant participant, perceiving the SMILE process as a precursor to ERP implementation that would displace her role. Enrollment was achieved by explicitly designing the integration so that the Excel workbook remained the authoritative input interface — SMILE reads from it, does not write to it.

Mobilization is ongoing. The SMILE model produced in the reference factory is now being used in the first Steel Construction Institute resilience assessment exercise, representing the factory's knowledge to defense planners who have never visited the facility and who are not equipped to evaluate raw production data. The model functions as a spokesperson in the sense Latour (2005) intends: it speaks on behalf of an enrolled network that it simultaneously stabilizes.

---

## 6. Evaluation

Following Hevner et al.'s (2004) three evaluation criteria — utility, quality, and efficacy — the SMILE artifact is evaluated against the reference factory case.

### 6.1 Utility

Utility asks: does the artifact produce actionable knowledge externalization? The reference factory completed Phases S, M, and I over a 14-week implementation period. The output — a SMILE model covering 23 of the 27 documented production steps for IQB beam fabrication — has been used in three concrete applications: (a) onboarding of one new operator who achieved competency certification in the IQB welding sequence 40% faster than the previous cohort average (this observation is based on a single new operator and should be treated as a preliminary signal rather than a validated metric; longitudinal measurement with a larger cohort is required — see Section 9); (b) a capacity planning exercise that identified that the factory could sustain 60% production capacity with its current workforce under a mobilization scenario removing two operators; (c) a supply chain audit submission to a defense contractor that previously required a two-day site visit, which was completed using the SMILE model output without a visit.

These applications confirm utility across the three communities identified through boundary object analysis: operators (training), managers (capacity planning), and defense planners (supply chain audit).

### 6.2 Quality

Quality asks: is the output interoperable? The SMILE model produced in the reference factory was validated against the IEC 63278-1 (2024) AAS metamodel by an independent reviewer with AAS implementation experience. The validation confirmed that 21 of 23 SMILE process step records could be automatically translated to AAS submodels using the SMILE-to-AAS transformation pipeline included in SMILE v4.4. The two non-translating records contained legacy data in a proprietary format inherited from the documentary inventory phase; this is identified as a limitation of the current implementation.

The SMILE model was also validated against the Digital Twin Consortium's Capabilities Periodic Table v3.0 (2024), which organizes 29 digital twin capabilities across six functional groups. The reference factory's SMILE implementation demonstrates capability across 14 of 29 functions — primarily in the data acquisition, data management, and analytics functional groups. The remaining 15 functions (predominantly in the actuation, autonomy, and simulation groups) are targets for later SMILE phases not yet implemented. This positions the reference factory at Kritzinger et al.'s (2018) digital shadow level, consistent with Phase I completion.

### 6.3 Efficacy

Efficacy asks: how does SMILE compare to alternative approaches in time-to-externalization? The reference factory had previously attempted ad hoc knowledge externalization twice: a written procedure documentation exercise in 2019 (abandoned after six months, producing documentation for three of 27 process steps) and a video recording initiative in 2022 (producing recordings that proved too unstructured for onboarding use and were not updated when process changes occurred).

SMILE produced documentation for 23 of 27 process steps in 14 weeks. The previous ad hoc exercise produced documentation for 3 of 27 process steps in 26 weeks. This represents an approximately 8× improvement in externalization throughput. The 14-week timeline included the ANT enrollment activities (problematization and interessement) described above; these activities consumed approximately 18% of total implementation time and are identified as essential, not optional — the prior ad hoc attempts failed partly because operator resistance was never addressed systematically.

---

## 7. Discussion

SMILE's primary theoretical contribution is to demonstrate that knowledge externalization in manufacturing SMEs is not primarily a technical problem — it is a network assembly problem. The existing digital twin literature's focus on architecture, standards, and capability maturity models presupposes that the social and organizational conditions for knowledge capture are already in place. In SME contexts, they are not. The SMILE phases S, M, and I are as much ANT enrollment activities as they are technical processes.

The edge-native architecture constraint is worth elaborating. SMILE's design decision to run entirely on local hardware is sometimes perceived as a technical limitation — a concession to resource-constrained contexts. It is better understood as a design principle appropriate to the threat model. The CLOUD Act (US, 2018), combined with the reality that the dominant cloud providers (AWS, Azure, GCP) are US-operated, means that any SME factory producing components for defense contractors faces potential extraterritorial access to its operational data if that data is cloud-hosted. SMILE's local-first architecture is sovereignty-by-design, not sovereignty-by-accident. This aligns with INSPIRE Directive principles for critical infrastructure data and with the trajectory of European digital sovereignty regulation.

The comparison with ISO 23247 (2021) merits further discussion. ISO 23247 defines four tiers of digital twin architecture for manufacturing, but does not prescribe how a firm should ascend from tier 1 (basic) to tier 4 (advanced). SMILE provides precisely this ascent pathway, and the SMILE phases map onto the ISO 23247 tier progression: Phase S → Tier 1, Phase M → Tier 2, Phase I → Tier 2/3, Phase L → Tier 3, Phase E → Tier 4. This mapping suggests that SMILE could be positioned as a process companion to ISO 23247's architectural prescription — a potentially significant positioning for standardization bodies considering SME-oriented implementation guidance.

The defense resilience contribution connects to NATO's Allied resilience baseline requirements (NATO, 2024), which identify industrial capacity as a component of national resilience under Article 3. Hollnagel et al. (2011) identify knowledge availability as a first-order resilience engineering concern — systems fail not because components break but because operators cannot diagnose, adapt, or improvise when conditions deviate from the designed norm. SMILE directly addresses this failure mode by ensuring that the knowledge required for diagnosis and adaptation is not exclusively embodied in individuals who may be unavailable. The Swedish total defense framework's explicit enrollment of civil industry (Försvarsmakten & MSB, 2025) creates a policy environment in which SMILE-style knowledge externalization is not merely operationally valuable but strategically necessary. The 137-member Swedish Steel Construction Institute represents a replication scope sufficient to meaningfully shift sectoral resilience metrics, and the SMILE Exchange phase is specifically designed to enable collective assessment without sacrificing firm-level data sovereignty.

### 7.1 Counter-Arguments and Critical Engagement

**What if SMILE enrollment fails?** ANT analysis shows that network stabilization is never guaranteed. Operators may resist knowledge externalization for legitimate reasons: fear that documented processes eliminate the bargaining power that tacit expertise provides; distrust of technology that records their work; concern that documentation is a precursor to outsourcing or automation. If problematization fails — if operators do not accept SMILE's framing of the problem as institutional memory protection — interessement and enrollment cannot proceed, and the network never stabilizes. SMILE does not solve this problem; it provides structured tools for addressing it. A deployment where senior operators refuse to participate in Scan phase sessions will fail, and the ANT framework provides the analytical vocabulary to diagnose why: the obligatory passage point was not accepted, the interessement devices were not compelling, the actors were not enrolled. Future research should treat failed enrollment attempts as first-class data, not implementation failures to be omitted from reporting.

**What if the DSR artifact is self-validating?** Sein et al. (2011) identify a structural risk in action design research: when the researcher both designs and evaluates the artifact, evaluation is susceptible to confirmation bias, selective attention to confirming evidence, and framing effects that make the artifact's outputs appear more useful than independent evaluation would confirm. This paper is subject to that risk. The author designed SMILE, deployed it in the reference factory, and conducted the evaluation reported here. The mitigations applied — independent AAS validation (Section 6.2), three peer reviewers from the Steel Construction Institute (Section 5.4), and explicit falsifiable propositions (Section 4) — reduce but do not eliminate this risk. Readers should weight the efficacy claims accordingly, and the multi-site validation proposed in Section 9 is essential precisely because it introduces evaluators who did not design the artifact.

**What if the comparison baseline is unfair?** A methodological objection concerns the comparison baseline. The 8× throughput improvement is measured against the reference factory's 2019 ad hoc documentation attempt, which was abandoned midway. Comparing against an abandoned effort inflates the improvement metric. A fairer comparison would measure SMILE against a structured alternative methodology such as CMMI-based process documentation or ISO 9001-compliant knowledge capture procedures. This comparison remains as future work; the 8× figure should be interpreted as improvement over the factory's actual prior practice, not as a theoretical maximum gain.

**Table 3. SMILE artifact version history (Peffers et al., 2007 traceability requirement)**

| Version | Date | Key Change | Evaluation Method |
|---|---|---|---|
| v3.0 | 2025-Q1 | Initial 5-phase framework; sequential Scan-then-Model | Expert review (3 reviewers) |
| v4.0 | 2026-Q1 | Live annotation protocol; Exchange phase added; AAS alignment | Reference factory formative evaluation; independent AAS validation |
| v4.4 | 2026-Q2 | Defense ontology extension; FM2025-19772:2 scenario scoring; edge-native architecture formalized | Current paper; reference factory Phases S–I deployment |

---

## 8. Limitations

Several limitations of this research must be acknowledged. First, this paper presents findings from a single reference factory case. While the case is rich and the context is well-motivated, single-case DSR evaluation provides limited generalizability. The five propositions stated in Section 4 are untested beyond the reference case. Second, the evaluation is preliminary: Phases L and E have not been fully deployed at the reference factory, and the Learn phase efficacy data (Propositions P4 and P5) are estimated rather than measured. Third, the SMILE methodology has not been subjected to peer review in a manufacturing information systems context prior to this submission; this paper is the first formal communication of SMILE in a DSR framing. Fourth, the methodology has been developed and applied by the same researcher, creating potential self-validation bias that the DSR framework acknowledges as a risk. Fifth, SMILE's domain coverage is currently limited to metal processing manufacturing; extensions to electronics, food processing, or composite materials manufacturing have not been validated. Sixth, the ANT analysis in Section 5.5 is retrospective — enrollment dynamics were observed and analyzed after deployment, not designed and measured prospectively, limiting causal claims.

---

## 9. Future Research

Several research directions emerge from this work. Most urgently, multi-site validation of SMILE across at least five additional SME manufacturers is needed to test the five propositions and to identify domain-specific adaptations required outside metal processing. The Swedish Steel Construction Institute provides a ready recruitment frame for such a study.

Second, the current SMILE Scan phase relies on researcher-facilitated structured observation. Computer vision and natural language processing advances — particularly the class of multimodal foundation models now capable of annotating production video in near-real time — offer the prospect of automated or semi-automated Scan phase execution. A SMILE-AutoScan research program would reduce implementation cost and eliminate the researcher-facilitation bottleneck that currently limits scalability.

Third, integration with CMMI and capability maturity models is unexplored. SMILE's five phases have intuitive correspondence with maturity levels in established frameworks, but this correspondence has not been formalized. Establishing a SMILE-CMMI mapping would enable SMILE-deploying organizations to claim maturity level advancement through a recognized assessment framework, which has significant procurement and grant eligibility implications.

Fourth, longitudinal study is needed. The reference factory case provides a 14-week implementation snapshot. A three-to-five year longitudinal study tracking knowledge retention rates, onboarding velocity improvements, and disruption scenario performance would provide the efficacy evidence that current evaluation can only estimate.

Fifth, the European Commission's ESPR Digital Product Passport requirements are evolving rapidly. Research into SMILE as a DPP generation framework — specifically, whether SMILE outputs satisfy DPP data requirements across product categories — would address a growing compliance need for thousands of European SME manufacturers.

---

## 10. Conclusion

This paper has presented SMILE v4.4 as a designed artifact — developed and evaluated through Design Science Research methodology — that addresses a significant gap in the digital twin literature: the absence of a prescriptive, resource-appropriate methodology for knowledge externalization in defense-critical SME manufacturing. The framework's five phases (Scan, Model, Integrate, Learn, Exchange) were grounded in absorptive capacity theory, evaluated through Actor-Network Theory, and the resulting digital twin was analyzed as a boundary object serving multiple stakeholder communities.

The reference factory case demonstrates that SMILE can achieve documented coverage of 85% of critical production process steps in 14 weeks, produce AAS-compatible outputs, and support three concrete applications — operator training, capacity planning, and defense contractor supply chain audit — using hardware that any manufacturing SME already possesses or can access cost-effectively. The methodology's edge-native architecture satisfies the data sovereignty requirements of defense supply chain contexts without sacrificing interoperability.

The policy context — Sweden's FM2025-19772:2 total defense framework, NATO Article 3 resilience requirements, and the European Commission's emerging Digital Product Passport regulation — creates compounding demand for exactly the kind of structured knowledge externalization SMILE provides. With 137 steel construction member companies representing a quantifiable replication scope, and a broader SME manufacturing population facing similar knowledge fragility challenges, SMILE's potential societal impact extends well beyond a single factory or sector.

The methodology's key contribution is not technical: existing standards (ISO 23247, IEC 63278-1, AAS) provide adequate technical architecture. The contribution is methodological: a step-by-step process that actually works for organizations without pre-existing digital infrastructure, treating operator resistance as an enrollment problem to be solved rather than a compliance problem to be overcome.

---

## Conflict of Interest

The author is CEO of WINNIIO AB, which develops the SMILE methodology. SMILE is published under CC-BY-4.0 and freely available (DOI: 10.5281/zenodo.19683062). The design science artifact and its evaluation are presented for scholarly purposes; readers should be aware of the author's commercial relationship to the methodology. Mitigation measures are described in Section 7.1.

---

## References

Bolsinger, M., Kunze, A., & Schlegel, A. (2024). Towards federated digital twins for distributed manufacturing systems. *Journal of Manufacturing Systems, 73*, 112–128. https://doi.org/10.1016/j.jmsy.2024.01.008

Brown, J. S., & Duguid, P. (2001). Knowledge and organization: A social-practice perspective. *Organization Science, 12*(2), 198–213. https://doi.org/10.1287/orsc.12.2.198.10116

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St. Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge?* (pp. 196–223). Routledge.

Cimino, C., Negri, E., & Fumagalli, L. (2019). Review of digital twin applications in manufacturing. *Computers in Industry, 113*, Article 103130. https://doi.org/10.1016/j.compind.2019.103130

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly, 35*(1), 128–152. https://doi.org/10.2307/2393553

Davenport, T. H., & Prusak, L. (1998). *Working knowledge: How organizations manage what they know*. Harvard Business School Press.

Digital Twin Consortium. (2024). *Digital twin capabilities periodic table v3.0*. Object Management Group. https://www.digitaltwinconsortium.org/initiatives/capabilities-periodic-table/

European Commission. (2007). Directive 2007/2/EC establishing an Infrastructure for Spatial Information in the European Community (INSPIRE). *Official Journal of the European Union, L 108*.

European Commission. (2024). *Ecodesign for Sustainable Products Regulation (ESPR) — Regulation (EU) 2024/1781*. Official Journal of the European Union.

FOI. (2025). *Civil industris bidrag till totalförsvaret: Förutsättningar, hinder och möjligheter* [Civil industry's contribution to total defense: Conditions, obstacles, and opportunities] (FOI-R--5612--SE). Totalförsvarets Forskningsinstitut. https://www.foi.se

Försvarsmakten & MSB. (2025). *Utgångspunkter för totalförsvaret 2025–2030* [Starting points for total defense 2025–2030] (FM2025-19772:2). Försvarsmakten.

Grant, R. M. (1996). Toward a knowledge-based theory of the firm. *Strategic Management Journal, 17*(S2), 109–122. https://doi.org/10.1002/smj.4250171110

Grieves, M. (2014). *Digital twin: Manufacturing excellence through virtual factory replication* [White Paper]. Florida Institute of Technology.

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly, 28*(1), 75–105. https://doi.org/10.2307/25148625

Hollnagel, E., Paries, J., Woods, D. D., & Wreathall, J. (Eds.). (2011). *Resilience engineering in practice: A guidebook*. Ashgate.

IDTA. (2024). *Asset Administration Shell specification v3.1* (IDTA-01001-3-1). Industrial Digital Twin Association. https://industrialdigitaltwin.org

IEC 63278-1. (2024). *Asset Administration Shell for industrial applications — Part 1: Asset Administration Shell structure*. International Electrotechnical Commission.

ISO 23247. (2021). *Automation systems and integration — Digital twin framework for manufacturing* (Parts 1–4). International Organization for Standardization.

Jones, D., Snider, C., Nassehi, A., Yon, J., & Hicks, B. (2020). Characterising the digital twin: A systematic literature review. *CIRP Journal of Manufacturing Science and Technology, 29*, 36–52. https://doi.org/10.1016/j.cirpj.2020.02.002

Kritzinger, W., Karner, M., Traar, G., Henjes, J., & Sihn, W. (2018). Digital twin in manufacturing: A categorical literature review and classification. *IFAC-PapersOnLine, 51*(11), 1016–1022. https://doi.org/10.1016/j.ifacol.2018.08.474

Latour, B. (2005). *Reassembling the social: An introduction to Actor-Network-Theory*. Oxford University Press.

NATO. (2024). *Allied resilience baseline requirements: Guidance for national implementation under Article 3*. NATO HQ.

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Orlikowski, W. J. (2007). Sociomaterial practices: Exploring technology at work. *Organization Studies, 28*(9), 1435–1448. https://doi.org/10.1177/0170840607081138

Peffers, K., Tuunanen, T., Rothenberger, M. A., & Chatterjee, S. (2007). A design science research methodology for information systems research. *Journal of Management Information Systems, 24*(3), 45–77. https://doi.org/10.2753/MIS0742-1222240302

Plattform Industrie 4.0. (2015). *Reference architectural model Industrie 4.0 (RAMI 4.0)* (DIN SPEC 91345). Deutsches Institut für Normung.

Polanyi, M. (1966). *The tacit dimension*. Doubleday.

Qi, Q., Tao, F., Hu, T., Anwer, N., Liu, A., Wei, Y., Wang, L., & Nee, A. Y. C. (2021). Enabling technologies and tools for digital twin. *Journal of Manufacturing Systems, 58*, 3–21. https://doi.org/10.1016/j.jmsy.2019.10.001

Saad, A., Faddel, S., Mohammed, O., & Saad, A. (2024). Digital twin maturity models: A systematic review of assessment frameworks and implementation gaps. *IEEE Access, 12*, 44811–44832. https://doi.org/10.1109/ACCESS.2024.3380742

Schön, D. A. (1983). *The reflective practitioner: How professionals think in action*. Basic Books.

Sein, M. K., Henfridsson, O., Purao, S., Rossi, M., & Lindgren, R. (2011). Action design research. *MIS Quarterly, 35*(1), 37–56. https://doi.org/10.2307/23043488

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science, 19*(3), 387–420. https://doi.org/10.1177/030631289019003001

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics, 15*(4), 2405–2415. https://doi.org/10.1109/TII.2018.2873186

United States Congress. (2018). *Clarifying Lawful Overseas Use of Data (CLOUD) Act*. Public Law 115-141.

van der Aalst, W. M. P. (2016). *Process mining: Data science in action* (2nd ed.). Springer. https://doi.org/10.1007/978-3-662-49851-4

Waern, N. (2026). *SMILE: Sustainable Methodology for Interoperable Lifecycle Environments v4.4*. Zenodo. https://doi.org/10.5281/zenodo.19683062

Ward, J., & Daniel, E. (2006). *Benefits management: Delivering value from IS and IT investments*. Wiley.

Wenger, E. (1998). *Communities of practice: Learning, meaning, and identity*. Cambridge University Press.

Zahra, S. A., & George, G. (2002). Absorptive capacity: A review, reconceptualization, and extension. *Academy of Management Review, 27*(2), 185–203. https://doi.org/10.5465/amr.2002.6587995
