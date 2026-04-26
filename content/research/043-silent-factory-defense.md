---
title: "The Silent Factory: Tacit Knowledge, Digital Twins, and the Invisible Infrastructure of National Defense"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: tacit knowledge, digital twins, defense resilience, total defense, SME manufacturing, knowledge management, SECI model, Actor-Network Theory, totalförsvar, steel fabrication, edge computing, hybrid warfare
status: draft
date: 2026-04-25
---

# The Silent Factory: Tacit Knowledge, Digital Twins, and the Invisible Infrastructure of National Defense

**Nicolas Waern**
WINNIIO AB
ORCID: 0009-0001-4011-8201

**Corresponding author:** ceo@winniio.io
**License:** CC-BY-4.0
**Submitted:** 2026-04-25

---

## Abstract

This article argues that tacit knowledge embedded in small and medium-sized metal fabrication enterprises constitutes critical but systematically unrecognized defense infrastructure. Drawing on a single-site qualitative study of a Swedish steel fabricator manufacturing patented structural beam systems for defense contractors, the article applies four interlocking theoretical frameworks: Nonaka and Takeuchi's (1995) SECI model of knowledge conversion, Callon's (1986) four moments of translation from Actor-Network Theory, Star and Griesemer's (1989) boundary object typology, and Cohen and Levinthal's (1990) absorptive capacity construct. Together, these frameworks reveal that the factory's entire production capacity (weld sequences, tolerance workarounds, surge scheduling) is held in the embodied memory of fewer than three individuals and maintained in a 46-sheet Excel workbook controlled by one capacity planner. This configuration represents a single-point-of-failure that is simultaneously invisible to defense procurement planners and unaddressed by existing resilience frameworks. Grounded in Sweden's total defense planning document *Utgångspunkter för totalförsvaret 2025-2030* (FM2025-19772:2; MSB 2025-08877), which frames national resilience as encompassing every company, the article proposes an edge-native digital twin architecture aligned with the SMILE methodology (Waern, 2026) and the IEC 63278 Asset Administration Shell standard. Three falsifiable propositions structure the contribution. The article concludes that knowledge externalization, rather than workforce scaling, is the prerequisite condition for resilience at the manufacturing base, and that this is now a matter of national security rather than merely operational efficiency.

**Keywords:** tacit knowledge, digital twins, total defense, SME manufacturing, SECI model, Actor-Network Theory, boundary objects, absorptive capacity, totalförsvar, steel fabrication, defense resilience, hybrid warfare

---

## 1. Introduction

"A nation's small manufacturers are the invisible backbone of defense, and they run on knowledge stored in human heads."

This observation, adapted from recurring practitioner discourse in Swedish defense planning circles, names a problem that academic literature has only partially addressed. The strategic importance of manufacturing supply chains in national defense is well established (Davenport & Prusak, 1998; Grant, 1996). The fragility of tacit knowledge when key personnel become unavailable has also been extensively theorized (Nonaka & Takeuchi, 1995; Polanyi, 1966; Schön, 1983). What remains underexplored is the precise intersection: the condition in which an entire nation's wartime production capacity for a specific critical component category depends on knowledge that has never been externalized, held by individuals who have never been assessed as strategic assets, in firms that have never been included in continuity planning frameworks.

Sweden's *Utgångspunkter för totalförsvaret 2025-2030* (Swedish Armed Forces & MSB, 2025) represents the most explicit recent articulation of total defense (totalförsvar) as a principle encompassing every actor in Swedish society — including private enterprises. The document operationalizes Article 3 of the Washington Treaty (NATO, 2024), which obliges member states to develop resilience across critical infrastructure and defense-relevant industries. Sweden's accession to NATO in March 2024 sharpened the urgency of this alignment. Yet the mechanisms by which small and medium-sized enterprises (SMEs) contribute to — and are simultaneously vulnerable within — this resilience architecture remain underspecified.

This article contributes to closing that gap. It pursues three objectives. First, it theorizes tacit knowledge in manufacturing SMEs as a category of national infrastructure risk, rather than merely an operational or human resources concern. Second, it applies an interlocking set of theoretical frameworks to demonstrate *how* that risk materializes in a concrete organizational context. Third, it proposes an edge-native digital twin architecture designed to externalize and preserve manufacturing knowledge while respecting the data sovereignty requirements inherent to defense supply chain participation.

The empirical anchor is an anonymized archetype derived from field engagement with a Swedish steel fabricator of approximately 40 employees and EUR 12 million in annual revenue. This firm manufactures patented prefabricated steel-concrete composite beam systems — designated here as IQB systems — that are supplied to defense infrastructure contractors. The archetype is presented not as a representative sample but as an analytically rich instance that makes the theoretical arguments concrete and testable.

The argument proceeds as follows. Section 2 establishes the theoretical framework. Sections 3 through 6 develop the substantive analysis: the anatomy of tacit knowledge risk, the digital twin as actant and boundary object, the architecture of edge-native knowledge externalization, and the defense resilience implications at national scale. Section 7 discusses counter-arguments. Section 8 states three falsifiable propositions. Section 9 acknowledges limitations. Section 10 identifies future research directions. Section 11 concludes.

---

## 2. Theoretical Framework

### 2.1 Polanyi's Tacit Dimension as the Foundational Problem

Michael Polanyi's (1966) observation that "we know more than we can tell" remains, sixty years after its formulation, the most precise statement of the problem this article addresses. Tacit knowledge is knowledge that cannot be fully articulated in explicit form — it is embedded in practice, perception, and bodily skill rather than in text, procedure, or code. For manufacturing, this means weld sequences calibrated by sound and resistance rather than gauge readings, tolerance decisions made by experienced fingers rather than calipers, and capacity planning governed by accumulated pattern recognition rather than formal optimization models.

The significance of Polanyi's insight for defense planning is this: tacit knowledge cannot be transferred by copying a file or issuing a manual. It requires co-presence, time, and a shared practice community (Lave & Wenger, 1991; Wenger, 1998). This makes it both irreplaceable and catastrophically vulnerable, because the loss, injury, relocation, or unavailability of the individuals who carry it has no documentary substitute.

### 2.2 Nonaka and Takeuchi's SECI Model

Nonaka and Takeuchi's (1995) knowledge creation spiral describes four modes of knowledge conversion that together enable organizational learning. These are: Socialization (tacit to tacit), Externalization (tacit to explicit), Combination (explicit to explicit), and Internalization (explicit to tacit). The SECI model was developed primarily in the context of Japanese product development firms, and its application to shop-floor manufacturing has been contested (Nonaka & von Krogh, 2009). However, Nonaka and von Krogh (2009) themselves argue for the model's continued validity when applied with sensitivity to the "enabling conditions" — intention, autonomy, fluctuation, redundancy, and variety — rather than treating the four modes as a mechanical sequence. This nuanced reading is adopted here.

### 2.3 Actor-Network Theory and the Sociology of Translation

Callon's (1986) sociological study of scallop domestication in Brittany introduced the four moments of translation — problematization, interessement, enrolment, and mobilization — as a framework for understanding how heterogeneous actors (human and non-human) are assembled into stable networks. Latour (2005) extended this into a broader reassemblage sociology that treats technologies, artifacts, and documents as actants with agency. For the present study, this framework provides tools for analyzing how a digital twin platform must navigate organizational resistance, overcome competing interests, and enroll the most recalcitrant actant in any manufacturing knowledge project: the expert who carries the knowledge and may have rational reasons not to externalize it.

### 2.4 Boundary Objects

Star and Griesemer (1989) introduced the concept of boundary objects to describe artifacts that are plastic enough to adapt to the needs of multiple communities of practice while robust enough to maintain a common identity across them. They identified four types: repositories, ideal types, coincident boundaries, and standardized forms. This last type — which establishes common measurement methods and shared vocabularies without standardizing meaning — is argued here to be the relevant type for the digital twin in this context.

### 2.5 Absorptive Capacity

Cohen and Levinthal (1990) defined absorptive capacity as a firm's ability to recognize the value of new external knowledge, assimilate it, and apply it to commercial ends. Zahra and George (2002) later distinguished between potential absorptive capacity (the ability to acquire and assimilate knowledge) and realized absorptive capacity (the ability to transform and exploit it). For this article, the concept identifies a structural irony: the individual who is simultaneously the greatest single point of failure in knowledge retention — the "Excel master" who controls all capacity planning — is also the primary bottleneck for the firm's ability to absorb and internalize a digital twin methodology designed to make their own knowledge explicit.

---

## 3. The Anatomy of Tacit Knowledge Risk in a Steel Fabrication SME

### 3.1 The Archetype

The firm analyzed here — designated IQB Fabricator for this article — is a Swedish steel construction SME of approximately 40 employees with annual revenue of approximately EUR 12 million. Its primary product is a patented system of prefabricated steel-concrete composite beams used in structural applications including defense infrastructure. The IQB system's competitive advantage lies not in the product design itself — which is documented and patented — but in the fabrication process. The weld sequences that join the steel components are calibrated to tolerances that cannot be achieved by reference to the technical drawings alone; they require experienced hands, trained eyes, and institutional memory.

The firm has two certified welders whose combined process knowledge is, in the judgment of management, not transferable in less than 24 months of supervised apprenticeship. This estimate is not documented anywhere in the firm's formal records. It exists as a shared assumption among the three senior staff members who have been present long enough to form it.

Capacity planning — the function that determines what can be produced, when, at what cost, given current labor availability, machine uptime, and material lead times — is managed by a single individual. This individual has developed a 46-sheet Microsoft Excel workbook over approximately nine years of continuous refinement. The workbook contains conditional formatting logic, lookup arrays, and heuristic override rules that are not documented outside the file itself. When this individual was on extended sick leave for three weeks in 2023, production planning effectively stopped. Decisions were deferred, contracts were delayed, and two client relationships required remediation. No post-incident review was conducted.

### 3.2 Applying the SECI Model to the Factory Floor

The SECI model (Nonaka & Takeuchi, 1995) is applied here not as a normative prescription but as a diagnostic instrument. The question is not how knowledge *should* flow but how it *actually* flows, and where it stalls.

**Socialization (tacit to tacit):** At IQB Fabricator, socialization is the primary and dominant mode of knowledge transfer. Welding technique is transmitted through physical co-presence: a senior welder guides a trainee's hands, corrects posture, reads the arc sound, and adjusts stance in real time. This knowledge cannot be observed by someone not performing the weld. As Trist and Bamforth (1951) documented in the Longwall coal-getting context, skilled manual labor generates knowledge communities whose coherence is constituted by shared physical practice. IQB Fabricator's weld quality depends entirely on this mode — but it produces no artifact, no externalized record, and no redundancy.

**Externalization (tacit to explicit):** This mode is where the firm's knowledge creation system breaks down most severely. There is no structured process by which experienced welders articulate their process knowledge into any explicit form. The 46-sheet Excel workbook represents an inadvertent, partial externalization — the capacity planner's heuristics have been encoded, over years, into formulas and conditional rules. But this externalization was never intentional, never reviewed for completeness, and is entirely dependent on the originating individual for interpretation. Schön's (1983) concept of "reflection-in-action" is relevant here: the planner continuously refines the workbook through practice, but that refinement process itself is tacit and unrecorded.

**Combination (explicit to explicit):** Where explicit artifacts do exist (technical drawings, material specifications, IQB system patents), they are effectively siloed. There is no integration between the capacity planning workbook, the quality control records maintained in a separate folder structure, and the production order system (a basic ERP module). Combination is minimal and accidental rather than systematic.

**Internalization (explicit to tacit):** New staff members who onboard to the capacity planning function must internalize the workbook's logic through supervised use. But because the workbook's logic was never externalized in a pedagogically structured form, this internalization requires direct mentorship from the workbook's author. The internalization pathway is therefore exactly as fragile as the socialization pathway in the weld bay: it collapses when the key individual is unavailable.

This diagnostic application reveals that the SECI model's ba (the shared contexts that enable knowledge creation; Nonaka & Takeuchi, 1995) exists in a permanently precarious configuration at IQB Fabricator. Two of the four modes are effectively non-functional, and the functional modes (socialization, partial externalization) create single-person dependencies rather than organizational knowledge.

---

## 4. The Digital Twin as Actant and Boundary Object

### 4.1 Problematization: Defining the Obligatory Passage Point

Callon (1986) begins the sociology of translation with problematization, defined as the moment in which one actor frames the problem such that their proposed solution becomes the obligatory passage point through which all other actors must pass to achieve their goals. For a digital twin deployment at IQB Fabricator, problematization requires reframing the firm's vulnerability not as an IT problem (the Excel workbook is inadequate) but as a knowledge continuity problem (the firm's survival under stress depends on knowledge held by individuals who may become unavailable).

This reframing is non-trivial. The current framing, shared by management and the capacity planner, is that the workbook is a tool that works, and that the planner's expertise is an asset, not a risk. Destabilizing this framing is the first challenge of translation. Callon (1986) notes that successful problematization requires that the problematizer demonstrate that other actors' goals are better achieved through the proposed obligatory passage point than through alternatives. Here, the obligatory passage point is a structured knowledge externalization process enabled by a digital twin platform: defense contract retention under disruption scenarios requires knowledge resilience, and knowledge resilience requires externalization.

### 4.2 Interessement: Holding Competing Interests Stable

Interessement involves stabilizing alliances and preventing competing translations. At IQB Fabricator, three competing translations must be blocked. First, management's translation: "we should hire a deputy capacity planner," which addresses the symptom (single point of failure) without addressing the cause (unexternalized knowledge). Second, the capacity planner's translation: "the workbook is the system, and I can train a replacement in three months," which underestimates the embeddedness of tacit heuristics in the workbook's logic. Third, the welders' translation: "our skill is not transferable to a software system," which is correct as stated but misframes the objective (the goal is not to replace welding skill with software but to create an explicit record that enables faster socialization of new welders).

Interessement in this context means stabilizing a shared understanding that knowledge externalization is a prerequisite condition for all three groups' goals: management's goal of contract retention, the capacity planner's goal of reduced interruption pressure, and the welders' goal of receiving adequately trained colleagues.

### 4.3 Enrolment: Recruiting the Digital Twin as Actant

Latour (2005) argues that non-human actants must be enrolled in networks with the same analytical seriousness as human actors. A digital twin platform, in Latour's vocabulary, has agency: it shapes interactions, imposes formats, and resists certain uses while enabling others. The specific challenge of enrolling a digital twin at IQB Fabricator is that it must simultaneously enroll the capacity planner's heuristic knowledge (by providing a data model capable of representing conditional scheduling logic), the welders' embodied process knowledge (by providing a structured interview protocol linked to spatial 3D scanning of the weld bay), and the existing explicit artifacts (drawings, specifications, ERP records).

Orlikowski's (2007) concept of sociomaterial practices is useful here: the digital twin does not merely represent the factory; it reconfigures the relational assemblage of humans and materials that constitutes factory practice. This reconfiguration is the enrollment.

### 4.4 The Digital Twin as Standardized Form

Star and Griesemer (1989) identify four boundary object types: repositories, ideal types, coincident boundaries, and standardized forms. Earlier characterizations of the digital twin in this article as primarily a standardized form require refinement. In practice, the digital twin exhibits properties of multiple types simultaneously, and this multi-type character is itself theoretically significant.

As a knowledge repository, the digital twin functions as a shared collection of externalized artifacts (3D scan data, annotated weld sequences, scheduling heuristics) that different communities can access according to their own needs without requiring centralized coordination — the repository type. As an AAS-structured data model with common submodel schemas and measurement conventions, it establishes shared definitions without requiring shared meaning — the standardized form type. And as a 3D spatial visualization of the factory floor, it operates as a coincident boundary: the welder sees a process context, the engineer sees a tolerance map, the defense planner sees a resilience asset — all viewing the same representation through different interpretive frames.

Star (2010) notes that boundary objects in real practice rarely conform neatly to a single category; the typology identifies analytic properties that empirical objects combine in varying proportions. The digital twin's theoretical interest lies precisely in its combining all three types: it is simultaneously an accessible collection (repository), a structured vocabulary (standardized form), and a shared space that different communities inhabit differently (coincident boundary). This combination enables its function across communities that share a stake in the IQB system's reliable production but do not share a common interpretive vocabulary for what that production involves. Brown and Duguid (2001) note that boundary objects of this type are essential for knowledge transfer across practice communities that share objects but not meanings. The IQB system's structural beam is one such shared object; the digital twin of its fabrication process is the boundary object that makes shared meaning possible across communities who all have stakes in that beam's reliable production.

### 4.5 The Absorptive Capacity Bottleneck

Cohen and Levinthal's (1990) framework distinguishes the recognition, assimilation, and application of new knowledge as analytically separable capacities. Zahra and George (2002) sharpen this into the PACAP/RACAP distinction: potential absorptive capacity (the ability to acquire and assimilate) and realized absorptive capacity (the ability to transform and exploit). Applied to IQB Fabricator, the picture is structurally troubling.

The firm's PACAP for digital twin methodology is nominally present: management can attend trade exhibitions, read vendor documentation, and consult advisors. The firm is capable of recognizing that such tools exist. Its RACAP, however, is almost entirely bottlenecked at a single individual: the Excel master. Transformation of a digital twin's structured data model into actually useful scheduling intelligence requires that someone can map the twin's formalism onto the nine years of heuristic logic currently encoded in the workbook. Only the workbook's author can perform that mapping. If this individual is unavailable, resistant, or unwilling to externalize the heuristics into a format the digital twin can ingest, the firm's realized absorptive capacity for the entire methodology drops to near zero, regardless of management commitment or tool quality.

Cohen and Levinthal (1990) emphasize that absorptive capacity is path-dependent: it accumulates from prior related knowledge. IQB Fabricator's prior related knowledge for digital twin adoption is, paradoxically, the workbook itself. The workbook is simultaneously the artifact that needs to be superseded and the only existing scaffold through which any successor system can be understood. This creates a dependency inversion: the very individual whose knowledge externalisation is the goal of the project is also the only person capable of enabling the project to succeed. Managing this bottleneck through structured knowledge elicitation conducted with the planner rather than around them is not merely a change management consideration; it is the primary technical prerequisite of the entire deployment.

---

## 5. Edge-Native Digital Twin Architecture for Defense-Relevant Manufacturing

### 5.1 Data Sovereignty as the Non-Negotiable Constraint

Defense supply chain participation imposes data handling requirements that are fundamentally incompatible with standard cloud-based digital twin deployments. The EU-US Data Privacy Framework notwithstanding, the CLOUD Act (U.S. Congress, 2018) creates a structural condition in which data stored on US-based cloud infrastructure remains accessible to US federal agencies under lawful order, regardless of where the data physically resides. For a firm manufacturing components for defense infrastructure, this creates a classification conflict: the detailed process knowledge of how specific structural components are fabricated — tolerances, weld sequences, capacity constraints — may constitute sensitive defense supply chain information under Swedish law (Swedish Government, 2024) and NATO security protocols (NATO, 2024).

The architecture proposed here resolves this conflict by design: all data remains local. The digital twin runs on premises. No manufacturing process data is transmitted to external services. Cyber-physical manufacturing systems that transmit process data to cloud platforms introduce exactly the sovereignty exposure this architecture eliminates (Leng et al., 2024). The Waern (2026) SMILE methodology — Sustainable Methodology for Interoperable Lifecycle Environments — provides the six-phase process framework for this deployment:

1. **Survey**: Physical and organizational audit of the factory environment, including 3D scanning of production areas, equipment inventory, and structured knowledge elicitation interviews with key personnel.
2. **Map**: Translation of survey data into a formal ontology aligned with the IEC 63278 Asset Administration Shell (Industrial Digital Twin Association, 2024) data model. Each piece of equipment, each process step, and each knowledge artifact becomes a formally typed asset.
3. **Integrate**: Connection of the AAS-structured data model to existing explicit systems (ERP, drawing management, quality records) via local APIs.
4. **Leverage**: Activation of the digital twin as a live operational mirror, enabling scenario simulation (what happens to delivery schedules if the capacity planner is unavailable for four weeks?), anomaly detection (when does the Excel workbook's logic produce scheduling conflicts?), and knowledge gap identification (which process steps have zero explicit documentation?).
5. **Evolve**: Continuous enrichment of the knowledge model as new tacit knowledge is socialized, externalized, and combined.
6. **Embed**: Integration of the digital twin into the firm's organizational routines such that knowledge externalization becomes a normal feature of practice rather than a special project.

The SMILE phases map directly onto the SECI knowledge conversion modes, making the integration between Sections 2.2 and 5 explicit. Survey corresponds to Socialization: knowledge elicitation requires co-presence between the facilitator and the expert in the physical environment where knowledge is practiced. Map corresponds to Externalization: tacit process knowledge is converted into explicit ontological structures and AAS submodels. Integrate corresponds to Combination: disparate explicit artifacts (ERP data, drawings, scan geometry, elicited heuristics) are assembled into a unified knowledge model. Leverage and Evolve correspond to Combination and Internalization respectively: patterns extracted from the running twin feed back into operational decision-making, and practitioners begin to internalize the model's logic as a new cognitive scaffold for their own practice. Exchange (renamed Embed in this article's six-phase rendering) corresponds to Internalization: new operators learn from the twin rather than exclusively from human mentors, closing the SECI spiral.

This mapping is necessarily imperfect; the six SMILE phases do not correspond one-to-one with four SECI modes, reflecting the methodological reality that knowledge creation is iterative rather than sequential. The mapping is offered as a diagnostic guide for identifying which SECI mode is most active at each phase, not as a claim that the phases and modes are structurally equivalent.

The digital twin architecture underlying SMILE builds on the foundational conceptualization of digital twins as mechanisms for mitigating unpredictable emergent behavior in complex systems (Grieves & Vickers, 2024). SMILE itself is presented here as a designed artifact in the tradition of Hevner et al. (2004): a methodological construct whose value is evaluated through the utility it generates in specific problem contexts — here, the SME manufacturing knowledge-resilience problem — rather than through statistical generalization.

### 5.2 Spatial Knowledge Anchoring

A critical feature of the proposed architecture is spatial knowledge anchoring: the linking of tacit knowledge artifacts to specific physical locations in the factory environment. This is enabled by combining photogrammetric 3D scanning of the production floor with structured knowledge elicitation interviews conducted in situ. When a senior welder describes a tolerance judgment, that judgment is recorded not as abstract text but as an annotation on the 3D spatial model of the specific weld joint at which the judgment is made. This spatial anchoring leverages the phenomenon that Suchman (2007) calls "situated action" — the way in which skilled knowledge is often more accessible, more accurate, and more complete when recalled in the physical context in which it is practiced.

The resulting knowledge artifacts are aligned with the INSPIRE Directive (European Commission, 2007, as extended) requirements for spatial data infrastructure, ensuring that factory spatial data is documented in a format compatible with national infrastructure registries.

### 5.3 The Asset Administration Shell as Defense-Compatible Data Model

The IEC 63278 Asset Administration Shell (AAS) specification (Industrial Digital Twin Association, 2024) provides a vendor-neutral, semantically rich data model for industrial digital twins. Its submodel structure allows the representation of technical properties, operational parameters, process documentation, and compliance artifacts in a single interoperable format. For defense supply chain contexts, the AAS provides a pathway to standardized resilience reporting: an AAS submodel for "knowledge continuity" could capture, for each critical process, the number of individuals who hold the relevant tacit knowledge, the degree of externalization achieved, and the estimated recovery time if key personnel are unavailable. The AAS's structured product lifecycle data representation is also aligned with emerging Digital Product Passport requirements under the Ecodesign for Sustainable Products Regulation (European Commission, 2024), ensuring that knowledge externalization investments contribute simultaneously to defense resilience and to forthcoming regulatory compliance obligations.

### 5.4 Positioning Against Existing Frameworks

The architecture proposed here can be located against three established reference frameworks. ISO 23247 (2021) provides a conceptual digital twin framework for manufacturing, describing the functional elements a digital twin should contain — observable manufacturing elements, data collection, device connectivity — but explicitly not prescribing how to achieve those elements in specific organizational contexts. RAMI 4.0 (Platform Industrie 4.0, 2015) provides a three-dimensional reference architecture organizing digital twin concepts by lifecycle, hierarchy, and layer, but operates at a system-design level that presupposes technical capacity that SMEs typically lack. The Digital Twin Consortium's Capabilities Periodic Table (v3.0) provides a capability-mapping assessment instrument useful for identifying gaps but not for sequencing their closure in resource-constrained environments.

The common limitation of all three frameworks is descriptive adequacy at the cost of implementation guidance: they articulate *what* a mature digital twin should contain without specifying *how* a resource-constrained SME gets there from a baseline of tacit knowledge, Excel workbooks, and no dedicated IT staff. SMILE's contribution is sequenced process guidance — six phases with explicit entry conditions, outputs, and failure modes — designed for organizations that cannot purchase their way to digital twin maturity in a single procurement cycle. The frameworks are complementary, not competing: ISO 23247 defines the target state, RAMI 4.0 provides the conceptual map, and SMILE provides the navigation instructions.

---

## 6. Defense Resilience at National Scale

### 6.1 The Scale of the Problem

Sweden's *Stålbyggnadsinstitutet* (Swedish Steel Construction Institute) represents approximately 137 member companies, the majority of which are SMEs in the size range of the IQB Fabricator archetype. If the knowledge vulnerability described in Section 3 is even partially representative of this population, then the defense supply chain exposure is systemic rather than episodic. The *Nationell riskbild för strategisk beredskap* (NRSB, 2025) identifies supply chain disruption as a Category 1 resilience risk, but its analytical focus remains on physical infrastructure rather than knowledge infrastructure.

The Swedish Government's defense bill *Totalförsvaret 2025-2030* (Swedish Government, 2024) allocates significant resources to hardening physical manufacturing capacity — additional procurement contracts, facility hardening, material stockpiling. These measures address the asset dimension of manufacturing resilience. They do not address the knowledge dimension. A factory whose equipment survives an attack or disruption event but whose key personnel are unavailable is a factory that cannot produce.

### 6.1a Benefits Dependency Structure

Ward and Daniel's (2006) benefits realization framework identifies four categories of change that link IS/IT investment to organizational value: the IS/IT enabler (the technology itself), enabling change (organizational adaptations that make the technology useful), business change (process or structural changes that generate benefits), and the investment driver (the strategic rationale). Applying this framework to the SMILE digital twin deployment at IQB Fabricator makes the value chain explicit.

The IS/IT enabler is the edge-native AAS digital twin: a formally structured, on-premises knowledge repository capturing process geometry, weld sequences, and scheduling heuristics. The enabling change is the structured knowledge elicitation process through which the Excel master and senior welders are engaged as co-authors of the externalized model — this is not automatic; it requires facilitated sessions, trust-building, and validation cycles. The business change is the shift from person-dependent to system-supported operations: scheduling decisions that previously required the capacity planner's presence can be informed by the twin's scenario simulation; new-welder orientation that previously required months of co-presence can begin from a documented spatial model. The investment driver — for the firm — is contract retention under disruption; for the national defense system, it is the reduction of supply chain attack surface.

This dependency network has a critical implication: the enabling change (elicitation and engagement) is the rate-limiting step. An organization that acquires the IS/IT enabler without achieving the enabling change will realize no benefits, because the knowledge model will be incomplete. The Ward and Daniel (2006) framework thus supports the argument in Section 4.5: absorptive capacity at the enabling-change layer is the determinant of whether the technology investment generates any value at all.

### 6.2 Three Disruption Scenarios

**Scenario 1: Key personnel loss.** A single experienced capacity planner, carrying nine years of accumulated heuristic knowledge in a 46-sheet Excel workbook, is removed from the operational picture through illness, death, coercion, or relocation. Production planning stops within days. With no externalized knowledge model, recovery requires recruiting, onboarding, and training a replacement from scratch. Realistic recovery time under this scenario: 6-18 months to partial restoration, 24+ months to full function.

**Scenario 2: Forced relocation.** Under Sweden's totalförsvar framework, civilian enterprises may be subject to relocation directives in conditions of heightened preparedness (Swedish Armed Forces & MSB, 2025). A factory relocated from its established premises loses not only its equipment configuration but the spatial-tacit knowledge anchored to that configuration: the specific weld bays where experienced welders have calibrated their techniques, the production floor layout around which capacity planning heuristics are organized, the informal communication channels between adjacent workstations. Without a spatial knowledge model of the original site, reassembly at a new location begins from zero.

**Scenario 3: Surge demand.** A defense mobilization event requires a rapid increase in production volume — a scenario for which totalförsvar planning explicitly provides (Swedish Armed Forces & MSB, 2025). Surge capacity requires rapid onboarding of new workers to existing processes. If those processes exist only in the tacit knowledge of a small number of experienced practitioners, surge onboarding time is measured in months, not days. Weick and Roberts (1993) describe "collective mind" — the distributed cognition that enables organizations to perform reliably under stress — as dependent on heedful interrelating among members who share mental models of the system. A factory whose process knowledge is not externalized has no collective mind to mobilize under surge conditions; it has only the heroic effort of its knowledge holders, who will be simultaneously the most overloaded and most irreplaceable actors in the surge event.

### 6.3 Hybrid Warfare and the Knowledge Attack Surface

State-level adversaries pursuing hybrid warfare strategies have strong incentives to target not the physical assets of defense supply chain SMEs but their knowledge infrastructure. Personnel targeting — identifying and removing key knowledge holders through mechanisms short of kinetic attack — is a well-documented hybrid warfare vector (NRSB, 2025). The IQB Fabricator archetype presents a minimal-effort attack surface of this type: three individuals control all knowledge that cannot be recovered without their participation. This is not a classified observation; it is derivable by any competent analyst from publicly available procurement records and standard industrial reconnaissance.

Knowledge externalization through digital twin deployment directly reduces this attack surface. A factory whose process knowledge is comprehensively documented in an edge-native digital twin is not invulnerable to personnel targeting, but its recovery time drops from months or years to days or weeks.

For the manufacturing SME, the immediate first step is a structured knowledge audit: identifying which process knowledge is held by fewer than two individuals, which planning functions depend on single-person systems, and which production capabilities cannot be replicated from existing documentation. This audit requires no technology investment and can be completed in two weeks. It produces the baseline against which any subsequent digital twin deployment — and any defense resilience assessment — must be measured.

---

## 7. Discussion

### 7.1 Counter-Argument: SMEs Need More Workers, Not Digital Twins

The most pragmatic objection to the argument advanced here is that small manufacturers face a workforce crisis — a shortage of skilled welders and experienced planners — and that the appropriate response is workforce investment, not technology deployment. This objection is empirically accurate about the crisis but analytically incorrect about the solution sequence. Workforce scaling is constrained by onboarding time, which is constrained by the availability of experienced practitioners to supervise socialization. The capacity for rapid onboarding is precisely the capability that knowledge externalization creates. Preliminary practitioner estimates at the reference archetype suggest that a digital twin capturing weld sequences in spatial, annotated detail could reduce the supervised apprenticeship requirement from 24 months to approximately 12 months — not because the software replaces the mentor, but because the externalized knowledge model enables more efficient mentoring. This estimate requires longitudinal validation (see Section 10). Knowledge externalization is the prerequisite to workforce scaling, not its alternative.

### 7.2 Counter-Argument: Defense Supply Chains Require Classified Infrastructure

A second objection holds that defense supply chain participation requires classified information handling protocols that are incompatible with open-source digital twin tools. This objection conflates tool openness with data sensitivity. The edge-native architecture proposed in Section 5 separates these concerns by design: the software tools (which may be open-source) run on premises; the data (which is sensitive) never leaves the premises. The IEC 63278 AAS specification is an open international standard developed under IEC governance — it is not a security vulnerability but a security asset, because its openness enables interoperability with national resilience frameworks without creating vendor lock-in that introduces its own security risks.

### 7.3 Counter-Argument: Digital Twin Implementations Fail at SME Scale

Kritzinger et al. (2018) found that digital twin implementations in published literature are overwhelmingly concentrated in large enterprises with dedicated engineering teams, data infrastructure, and change management capacity. The critics are empirically correct: most documented DT implementations are not in firms of 40 employees with no dedicated IT function. This is precisely the problem SMILE's phased architecture is designed to address. Phase 1 (Survey) and Phase 2 (Map) require only a laptop, a photogrammetry-capable mobile device, and structured facilitation — capital requirements well within SME reach. The full six-phase deployment is sequenced so that each phase delivers standalone value, allowing resource-constrained firms to pause and consolidate at any stage rather than committing to a transformation program whose cost is front-loaded. The barrier to DT adoption at SME scale is not primarily technical; it is methodological — the absence of implementation guidance calibrated to SME constraints. SMILE is offered as a response to that gap, with the Kritzinger et al. (2018) finding as evidence of the gap's significance, not its permanence.

### 7.4 Counter-Argument: SECI Is an Organizational Model, Not a Shop-Floor Model

Nonaka and von Krogh (2009) acknowledge that the SECI model has been criticized for its level of abstraction and its origins in high-technology product development rather than manual manufacturing. The critics are correct that the model's original formulation emphasizes managerial and organizational knowledge more than embodied craft knowledge. However, Nonaka and von Krogh (2009) argue that the model's validity is grounded not in a specific organizational type but in the phenomenology of knowledge — the fundamental distinction between tacit and explicit knowledge that Polanyi (1966) identified — which is present in all contexts of skilled practice. The application here uses the SECI model diagnostically rather than prescriptively: not to prescribe how knowledge should flow, but to identify, with precision, where existing knowledge flows are fragile. This diagnostic use is consistent with Nonaka and von Krogh's (2009) position that the model's value lies in directing analytical attention rather than in mechanically specifying knowledge management programs.

---

## 8. Falsifiable Propositions

Three falsifiable propositions follow from the argument:

**P1:** Steel fabrication SMEs participating in defense supply chains where process knowledge externalization scores below 30% on a standardized knowledge continuity index will exhibit production recovery times greater than 90 days following the loss of their primary knowledge holder, controlling for firm size and process complexity.

**P2:** Digital twin deployments at defense-relevant manufacturing SMEs that use edge-native architecture (no data leaving premises) will demonstrate higher organizational adoption rates than cloud-based deployments, measured 18 months post-implementation, due to lower perceived data sovereignty risk.

**P3:** Spatial anchoring of externalized knowledge (SMILE-generated digital twins co-located with physical workstations) will reduce new-operator error rates by at least 40% compared to document-based training, as measured by quality control rejection rates during the first 30 days of cross-training.

These propositions are falsifiable through multi-site comparative studies across Swedish Steel Construction Institute member firms, using standardized knowledge continuity assessment instruments and longitudinal production continuity data.

---

## 9. Limitations

This article is subject to four principal limitations that constrain the generalizability of its claims.

**Single case study basis.** The empirical archetype is derived from engagement with a single firm. While the IQB Fabricator is presented as analytically representative rather than statistically representative, the theoretical claims rest on a narrow empirical base. The three disruption scenarios in Section 6 are plausible derivations from established hybrid warfare doctrine and totalförsvar planning documents, but they have not been empirically validated against the IQB Fabricator archetype or against the broader population of Swedish Steel Construction Institute members.

**Methodology not yet validated at scale.** The SMILE methodology (Waern, 2026) is presented as the process framework for the proposed digital twin architecture. Its six phases have been developed through applied practice, but they have not been subjected to controlled comparative evaluation across multiple deployment contexts. The knowledge continuity index referenced in Proposition P1 does not yet exist as a validated instrument.

**Defense supply chain access restrictions.** The data that would most directly support or falsify the arguments in this article — production continuity records, personnel dependency assessments, knowledge transfer timelines from defense supply chain SMEs — is precisely the data most protected by defense supply chain confidentiality requirements. The archetype is therefore necessarily constructed from indirect engagement rather than comprehensive access.

**Theoretical pluralism without integration.** The four theoretical frameworks applied here — SECI, ANT translation moments, boundary objects, and absorptive capacity — are drawn from different research traditions (organizational theory, sociology of science, strategic management) with different epistemological commitments. This article treats them as complementary analytical lenses rather than as a formally integrated theoretical model. The relationships among these frameworks are argued but not formally specified.

---

## 10. Future Research

Four research directions follow from this work.

**Multi-site comparative study.** A structured comparative study across a stratified sample of Swedish Steel Construction Institute member companies would establish the prevalence and severity of the knowledge vulnerability described here. Such a study would enable calibration of the knowledge continuity index proposed in Proposition P1 and would provide the empirical base for national-scale policy recommendations.

**Integration with NATO resilience assessment frameworks.** NATO's Allied Resilience Baseline Requirements (NATO, 2024) provide a framework for national resilience assessment that operates at a level of abstraction above the individual firm. Future research should develop a mapping between firm-level knowledge continuity metrics and NATO-level resilience baselines, enabling defense planners to include manufacturing knowledge infrastructure in national resilience assessments.

**Longitudinal study of knowledge retention post-digitization.** The claim that digital twin-enabled knowledge externalization reduces onboarding time and improves surge capacity is theoretically grounded but empirically untested. A longitudinal study tracking knowledge transfer outcomes at firms that have completed the SMILE methodology's full six-phase cycle would provide the first direct evidence for this claim.

**Federated digital twin architectures for defense supply chains.** Bolsinger et al. (2024) develop the concept of federated digital twins for manufacturing — architectures in which multiple firms' digital twins interoperate without centralizing data. This architecture is particularly promising for defense supply chains, where inter-firm data sharing is necessary for supply chain resilience assessment but centralization is constrained by sovereignty requirements. Future research should develop and test federated AAS architectures aligned with totalförsvar resilience requirements.

---

## 11. Conclusion

This article has argued that tacit knowledge in small and medium-sized metal fabrication enterprises constitutes critical but invisible defense infrastructure, and that this invisibility is now a national security concern rather than merely an organizational risk. The argument has been grounded empirically in an anonymized Swedish steel fabricator archetype and theoretically in four interlocking frameworks: the SECI model's diagnostic application to shop-floor knowledge flows, Actor-Network Theory's translation moments applied to digital twin adoption, the boundary object typology applied to the digital twin's cross-community role, and absorptive capacity theory applied to the structural irony of the Excel master as adoption bottleneck.

The practical implication is direct: Sweden's totalförsvar framework, which already establishes that every company is a defense actor, requires extension to encompass knowledge infrastructure alongside physical infrastructure. The 137 member companies of the Swedish Steel Construction Institute represent a defined, bounded population within which a national knowledge resilience assessment program could be piloted. The edge-native digital twin architecture aligned with SMILE and the IEC 63278 AAS standard provides a technically viable, data-sovereignty-compatible pathway for this program.

The silent factory runs on knowledge stored in human heads. Making that knowledge resilient is not a technology project. It is an act of national preparedness.

---

## Conflict of Interest

The author is CEO of WINNIIO AB, which develops the SMILE methodology referenced in this paper. SMILE is published under Creative Commons license (CC-BY-4.0) and is freely available. The theoretical analysis presented here is independent of any commercial interest, but readers should be aware of this relationship.

---

## References

Bolsinger, M., Bader, S., Maleshkova, M., & Pullmann, J. (2024). Towards federated digital twins for manufacturing. *Journal of Manufacturing Systems*, *73*, 15–29. https://doi.org/10.1016/j.jmsy.2024.01.002

Brown, J. S., & Duguid, P. (2001). Knowledge and organization: A social-practice perspective. *Organization Science*, *12*(2), 198–213. https://doi.org/10.1287/orsc.12.2.198.10122

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge* (pp. 196–233). Routledge.

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, *35*(1), 128–152. https://doi.org/10.2307/2393553

Davenport, T. H., & Prusak, L. (1998). *Working knowledge: How organizations manage what they know*. Harvard Business School Press.

Digital Twin Consortium. (2024). *Capabilities Periodic Table* (Version 3.0). Digital Twin Consortium. https://www.digitaltwinconsortium.org/

European Commission. (2007). Directive 2007/2/EC establishing an Infrastructure for Spatial Information in the European Community (INSPIRE). *Official Journal of the European Union*, L 108.

European Commission. (2024). *Ecodesign for Sustainable Products Regulation (ESPR)* (Regulation (EU) 2024/1781). Official Journal of the European Union.

Grant, R. M. (1996). Toward a knowledge-based theory of the firm. *Strategic Management Journal*, *17*(S2), 109–122. https://doi.org/10.1002/smj.4250171110

Grieves, M., & Vickers, J. (2024). Digital twin: Mitigating unpredictable, undesirable emergent behavior in complex systems. In F. Kahlen, S. Flumerfelt, & A. Alves (Eds.), *Transdisciplinary perspectives on complex systems* (2nd ed., pp. 85–113). Springer. https://doi.org/10.1007/978-3-319-38756-7_4

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, *28*(1), 75–105. https://doi.org/10.2307/25148625

Industrial Digital Twin Association. (2024). *Asset Administration Shell specification, Part 1: Metamodel* (Version 3.1). IDTA.

International Organization for Standardization. (2021). *Automation systems and integration — Digital twin framework for manufacturing* (ISO 23247). ISO.

Platform Industrie 4.0. (2015). *Reference Architecture Model Industrie 4.0 (RAMI 4.0)*. Federal Ministry for Economic Affairs and Energy, Germany.

Kritzinger, W., Karner, M., Traar, G., Henjes, J., & Sihn, W. (2018). Digital twin in manufacturing: A categorical literature review and classification. *IFAC-PapersOnLine*, *51*(11), 1016–1022. https://doi.org/10.1016/j.ifacol.2018.08.474

Latour, B. (2005). *Reassembling the social: An introduction to actor-network-theory*. Oxford University Press.

Lave, J., & Wenger, E. (1991). *Situated learning: Legitimate peripheral participation*. Cambridge University Press.

Leng, J., Liu, Q., Ye, S., Jing, J., Wang, Y., Zhang, C., Shen, W., & Liu, P. (2024). Digital twin-driven manufacturing cyber-physical system for parallel controlling of smart workshop. *Journal of Ambient Intelligence and Humanized Computing*, *15*, 1155–1171. https://doi.org/10.1007/s12652-019-01530-3

NATO. (2024). *Allied resilience baseline requirements*. NATO Resilience Committee.

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Nonaka, I., & von Krogh, G. (2009). Tacit knowledge and knowledge conversion: Controversy and advancement in organizational knowledge creation theory. *Organization Science*, *20*(3), 635–652. https://doi.org/10.1287/orsc.1080.0412

NRSB. (2025). *Nationell riskbild för strategisk beredskap*. Myndigheten för samhällsskydd och beredskap.

Orlikowski, W. J. (2007). Sociomaterial practices: Exploring technology at work. *Organization Studies*, *28*(9), 1435–1448. https://doi.org/10.1177/0170840607081138

Polanyi, M. (1966). *The tacit dimension*. University of Chicago Press.

Schön, D. A. (1983). *The reflective practitioner: How professionals think in action*. Basic Books.

Star, S. L. (2010). This is not a boundary object: Reflections on the origin of a concept. *Science, Technology, & Human Values*, *35*(5), 601–617. https://doi.org/10.1177/0162243910377624

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907-39. *Social Studies of Science*, *19*(3), 387–420. https://doi.org/10.1177/030631289019003001

Suchman, L. (2007). *Human-machine reconfigurations: Plans and situated actions* (2nd ed.). Cambridge University Press.

Swedish Armed Forces & MSB. (2025). *Utgångspunkter för totalförsvaret 2025-2030* (FM2025-19772:2; MSB 2025-08877). Försvarsmakten and Myndigheten för samhällsskydd och beredskap.

Swedish Government. (2024). *Totalförsvaret 2025-2030* (Prop. 2024/25:34). Regeringskansliet.

Trist, E. L., & Bamforth, K. W. (1951). Some social and psychological consequences of the Longwall method of coal-getting. *Human Relations*, *4*(1), 3–38. https://doi.org/10.1177/001872675100400101

U.S. Congress. (2018). Clarifying Lawful Overseas Use of Data Act (CLOUD Act), Pub. L. 115-141, Division V.

Waern, N. (2026). *SMILE: Sustainable Methodology for Interoperable Lifecycle Environments* (Version 4.4). Zenodo. https://doi.org/10.5281/zenodo.19683062

Ward, J., & Daniel, E. (2006). *Benefits management: Delivering value from IS and IT investments*. John Wiley & Sons.

Weick, K. E., & Roberts, K. H. (1993). Collective mind in organizations: Heedful interrelating on flight decks. *Administrative Science Quarterly*, *38*(3), 357–381. https://doi.org/10.2307/2393339

Wenger, E. (1998). *Communities of practice: Learning, meaning, and identity*. Cambridge University Press.

Zahra, S. A., & George, G. (2002). Absorptive capacity: A review, reconceptualization, and extension. *Academy of Management Review*, *27*(2), 185–203. https://doi.org/10.5465/amr.2002.6587995
