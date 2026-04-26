---
title: "The Invisible Patient: Bridging Personal Health Platforms with Hospital Care Through Extended Systems Theory, Professional Bureaucracy, and EU Interoperability Dimensions"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: interoperability, personal health platform, EU Interoperability Framework, Five Model, Mintzberg, professional bureaucracy, privacy by design, OASC MIM, digital twin, health data sovereignty, SMILE methodology, Ward Daniel, benefits management, OODA loop, hernia surgery, Sweden
status: ready
date: 2026-04-18
---

# The Invisible Patient: Bridging Personal Health Platforms with Hospital Care Through Extended Systems Theory, Professional Bureaucracy, and EU Interoperability Dimensions

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-18

---

## Abstract

Between clinical visits, the patient disappears. The health system records illness episodes but not the continuous reality of the person's life — their fitness trajectory, sleep patterns, stress levels, goals, and the context that gives clinical numbers meaning. This paper analyses the interoperability gap between personal health platforms and hospital care in Sweden through three theoretical lenses: the Five Model of systems analysis (Magoulas and Pessi), extended with data, knowledge, and context as missing dimensions; Mintzberg's theory of professional bureaucracy as applied to surgical decision-making; and the EU Interoperability Framework's six layers (technical, syntactic, semantic, organisational, legal, contextual). We use a fictional case study — Karin, 58, scheduled for hernia repair at a major university hospital in western Sweden — to map the as-is state across all dimensions and design a to-be bridge specification. The central question is an alignment question: can a personal health platform help clinicians understand a human being's past, present, and future faster? The analysis reveals that the critical gaps are not technical but organisational and contextual: the hospital operates as a professional bureaucracy where autonomous clinicians make hundreds of micro-decisions per case, starved of data from outside hospital walls. The platform captures data before, during, and after care — not only when the person is sick. That data travels with the person: rich, dynamic, carrying genomic, epigenetic, lifestyle, and clinical dimensions alongside goals and personal context — the opposite of the fragmented, episodic, flat sick-snapshots hospitals currently receive. The analysis draws on fifteen years of observing Swedish healthcare delivery, combining platform design experience with the clinical perspective of surgical practitioners — the as-is from the operating table. We apply Ward and Daniel's Benefits Management framework to quantify the impact delta, and the SMILE methodology to ensure every specification decision is evaluated by its move from as-is to to-be. The proposed bridge — a personal interface (LPI) meeting the hospital's API under mathematically verified differential privacy — is specified as an open, MIT-licensed architecture packaged as OASC Minimal Interoperability Mechanisms for reuse by any Swedish region. We argue that the bridge must serve professional autonomy rather than constrain it, that goals must drive design ahead of data volume, and that the person — not the IT system — must be at the centre. Three falsifiable propositions are stated. This paper contributes the first Swedish mapping of the personal-to-hospital interoperability gap across all six EU dimensions for surgical care.

**Keywords:** interoperability, personal health platform, EU Interoperability Framework, Five Model, Mintzberg, professional bureaucracy, privacy by design, OASC MIM, digital twin, health data sovereignty, SMILE methodology, Ward Daniel, benefits management, OODA loop, hernia surgery, Sweden

---

## 1. Introduction: The Gap Nobody Funds

There is a peculiar structural hole in Swedish health innovation funding. Vinnova funds clinical systems. Medtech4Health funds device development. The EU Horizon programme funds cross-border research infrastructure. But none of them fund the bridge between what the patient knows and what the hospital sees — the organisational and contextual connection between a person's continuous life data and the episodic, system-centred world of hospital care.

This is not a gap that anyone denies exists. Regional medtech innovation arenas in Sweden name the destination explicitly: care before people become patients; health history carried alongside illness history; insights shared while raw data stays with the individual. But no Swedish example puts this vision into practice.

The reason is not technical. The technical standards for health data interoperability — HL7 FHIR, SNOMED CT, IHE profiles, openEHR archetypes — are mature and widely implemented. Hospital-based sensor monitoring programmes have completed multiple phases of clinical validation [1]. Landahl et al. demonstrated that hospital-operated automated monitoring works under the Medical Device Regulation [2]. The technical layers of the EU Interoperability Framework are, if not fully closed, at least well-mapped.

The reason is organisational, contextual, and — we will argue — philosophical. The health system is designed around the system as the organising principle, not the person. The patient enters a system, is processed by the system, and exits the system. Between entries, they are invisible. The data they generate continuously — before they become patients, through their recovery, and in the years between episodes — has no sanctioned channel into clinical decision-making. That data is not a flat sick snapshot. It carries a continuous life view: genomic predispositions, epigenetic signals, lifestyle trajectory, clinical history, and personal goals. It travels with the person, or it should. The person is the only coherent thread across the entire care continuum.

This paper provides the analytical mapping that must precede any implementation. The driving question is goal-driven rather than data-driven: not "what data can we share?" but "can a personal health platform help a clinician understand a human being's past, present, and future faster than the current system does?" We use three theoretical frameworks in combination — the Five Model of systems analysis, Mintzberg's organisational theory, and the EU Interoperability Framework — to map the as-is state, identify where the gaps actually are, and specify a to-be bridge architecture. We ground the analysis in a fictional but realistic case — constructed from fifteen years of observing the Swedish healthcare system — featuring Karin, a 58-year-old architect scheduled for elective hernia repair at a major university hospital.

The paper is structured as follows. Section 2 presents the theoretical framework. Section 3 describes the fictional case and methods. Section 4 maps the as-is state. Section 5 specifies the to-be state. Section 6 quantifies the impact delta. Section 7 discusses implications. Section 8 states falsifiable propositions. Section 9 concludes.

---

## 2. Theoretical Framework

### 2.1 The Five Model — and What It Misses

The Five Model, developed by Magoulas and Pessi at the University of Gothenburg [3], and further elaborated in Hugoson, Magoulas, and Pessi's enterprise architecture governance framework [16], is a framework for analysing information systems in organisational context. It places the IT system at the centre, surrounded by five interacting dimensions: people, roles, processes, goals/culture, and the system itself. The framework has been influential in Scandinavian information systems research because it refuses to treat systems as isolated technical artefacts — it insists that every system exists within a web of human, organisational, and cultural relationships.

But the Five Model, as originally formulated, has a blind spot that becomes critical when we consider the bridge between personal health platforms and hospital care. Three dimensions are absent:

**Data.** Not data-as-stored-in-systems, but data as a distributed resource that exists across multiple systems, devices, and human memories simultaneously. In Karin's case, her health data is fragmented across twelve or more systems — the hospital's electronic patient record, surgical scheduling, imaging archive, clinical chemistry, the national health portal, the pharmacy system, the social insurance system, her wearable devices, her own memory, her GP's memory, and her physiotherapist's notes. She is the only node that touches all of these. The Five Model has no way to represent this.

**Knowledge.** Not procedural knowledge (how to operate) but synthesised understanding that emerges when data from multiple sources is combined with professional expertise and patient experience. The surgeon has twenty years of tacit surgical knowledge. Karin has fifty-eight years of embodied knowledge about her own body. PubMed has millions of research findings. None of these knowledge sources are currently synthesised in any structured way during the eight minutes the surgeon has to make a surgical plan.

**Context.** The lived reality that gives numbers their meaning. A resting heart rate of 72 means something different for a 58-year-old architect who runs three times a week than for a 58-year-old architect who has been sedentary since her laparotomy. The same post-operative pain score means something different for someone who lives alone than for someone with a partner who can monitor recovery. Context is not metadata — it is the interpretive frame without which data is noise.

We propose an extended Eight-Dimension Model: the original five (people, roles, systems, goals/culture, processes) plus data, knowledge, and context. Critically, we argue that the centre of the model should not be the IT system but the person. Systems at the centre is too technocratic — what should be in focus is always the reality we operate in. In healthcare, that reality is the person and their body.

### 2.2 Mintzberg's Professional Bureaucracy

Henry Mintzberg's taxonomy of organisational structures [4] classifies hospitals as professional bureaucracies — organisations where the operating core (doctors, surgeons, nurses) has high autonomy, standardisation occurs through skills rather than outputs or processes, and the technostructure (IT, administration, quality departments) has limited authority to dictate how the core professionals do their work.

This has profound implications for any bridge between personal health data and hospital care. A top-down mandate to "use patient-generated health data" will not work in a professional bureaucracy. The bridge must be pulled by clinical demand, not pushed by administrative policy. It must serve the surgeon's existing decision-making patterns — enriching them with information that was previously unavailable — rather than imposing new workflows.

The decision frequency is also critical. A surgeon in this role makes hundreds of micro-decisions per case: whether the patient is fit for surgery, which technique to use, what mesh to place, how to manage the hernia sac, when to escalate, what to document. Most of these decisions are undocumented — they happen in the surgeon's head, informed by pattern recognition built over years. The bridge does not need to participate in all of these decisions. It needs to provide the contextual substrate that makes each decision marginally better-informed.

### 2.3 The EU Interoperability Framework

The European Interoperability Framework [5] identifies six layers at which cross-organisational connection can succeed or fail:

1. **Technical:** Network, transport, protocols. Can the systems physically connect?
2. **Syntactic:** Data formats and encoding. Can they parse each other's messages?
3. **Semantic:** Meaning of terms and codes. Do they mean the same thing by the same word?
4. **Organisational:** Governance, roles, responsibilities. Who is allowed to do what?
5. **Legal:** Regulation, consent, liability. What does the law permit?
6. **Contextual:** Culture, trust, willingness. Will people actually use it?

The first three layers are engineering problems with known solutions. FHIR R4, SNOMED CT, LOINC, IHE profiles, and openEHR archetypes provide a mature technical and semantic foundation. Hospital-based sensor monitoring programmes [1] and Landahl et al. [2] have demonstrated that these solutions work in practice on the hospital side.

The last three layers — organisational, legal, contextual — are the hard ones. They are where the gap between personal health platforms and hospital care actually lives. And they are where existing funding instruments fail, because they fund either the hospital side (Vinnova, regional funding) or the consumer side (innovation grants, VC funding), but not the bridge between them.

### 2.4 Ward and Daniel's Benefits Management

Ward and Daniel [6] provide a structured approach to benefits realisation in IT projects: map the as-is state, define the to-be state, identify the benefits (measurable changes), and trace how specific changes in systems, processes, and roles deliver specific benefits. The critical insight is that benefits do not come from technology — they come from the changes in practice that technology enables.

We use this framework to quantify the impact delta: for each dimension of the interoperability gap, what specifically changes between as-is and to-be, and how is that change measured?

### 2.5 Positioning Against Competing Frameworks

Several established IS frameworks address technology adoption and information system success in healthcare: DeLone and McLean's IS Success Model [9], Davis's Technology Acceptance Model (TAM) [10], and Venkatesh et al.'s Unified Theory of Acceptance and Use of Technology (UTAUT) [11]. Each offers a valid lens, but each has a specific limitation for the problem addressed here.

DeLone and McLean focus on system quality, information quality, and service quality as drivers of use and user satisfaction — but they presuppose a single system. The bridge problem spans *two* systems (personal and hospital) with different owners, different governance, and different definitions of quality. TAM and UTAUT focus on individual adoption behaviour — perceived usefulness, ease of use, social influence — but the bridge problem is not primarily an adoption problem. Surgeons will adopt a bridge that saves them time; they will reject one that costs time. The question is not *whether* they will accept it but *what design properties make it acceptable within the professional bureaucracy's operating logic.* Mintzberg provides the answer that TAM cannot: the bridge must serve professional autonomy, not disrupt it.

The extended Eight-Dimension Model contributes what these frameworks miss: a structural analysis of where multi-system, multi-actor interoperability breaks down across organisational boundaries. It is complementary to adoption frameworks — once the bridge is designed, TAM/UTAUT can assess its adoption. But design must precede adoption research.

### 2.6 SMILE Methodology — Impact First

The SMILE methodology, as applied in Life Atlas platform development, evaluates every design decision by a single criterion: does it move the situation from as-is toward to-be? Impact is defined as the delta — the measurable change between current state and target state. A specification that is technically elegant but does not close a gap in any interoperability layer has zero impact.

### 2.7 Time as a Dimension — Boyd's OODA Loop

John Boyd's OODA loop — Observe, Orient, Decide, Act [7] — was developed for fighter pilot decision-making but applies directly to clinical care. The speed of the observation-to-action cycle determines outcomes. Currently, the clinical OODA loop for a hernia patient runs at visit frequency: weeks or months between observations. With a personal health platform bridge, the loop runs continuously: the patient's device observes, the AI orients (detects deviations from baseline), the human decides (with AI-assisted context), and the system acts (alert, escalation, or continued monitoring).

The competitive advantage is not data volume. It is cycle speed. Clinics that loop faster catch deviations earlier — and this is measurable in readmission rates, complication detection time, and patient-reported outcomes.

---

## 3. Case and Methods

### 3.1 Fictional Case: Karin

Karin is a 58-year-old architect living alone in Gothenburg. She was diagnosed with a primary ventral hernia following a laparotomy in 2019. Her BMI is 28. She takes losartan for hypertension. She wears an Apple Watch and an Oura ring daily. She is strongly motivated to return to work within eight weeks of surgery.

Karin is scheduled for elective open hernia repair with mesh at a major university hospital in western Sweden. Her surgeon is a senior consultant with twenty years of experience who also champions AI strategy within the department.

Karin is fictional. Her clinical profile is constructed from typical patient characteristics in the Swedish hernia repair population, informed by fifteen years of observing Swedish healthcare delivery. Every clinical detail is realistic but no real patient data was used. All institutional and individual details are anonymised.

### 3.2 Why Karin

Karin was chosen because she maximises the visibility of the interoperability gap:

- She has a concrete hospital touchpoint (elective surgery) with defined pre-operative, intra-operative, and post-operative phases.
- She already generates continuous health data through consumer wearables.
- She has explicit goals (healthspan, work capacity) that are meaningful but invisible to the hospital's systems.
- She carries life context (lives alone, architect, active lifestyle, prior surgery) that changes the interpretation of every clinical measurement but never travels with her into the hospital.

### 3.3 Analytical Method

**Analytical approach.** This analysis is based on fifteen years of observing Swedish healthcare delivery — as a patient, as a technology platform designer, and as a participant in medtech innovation arenas. The clinical perspective draws on published literature and documented surgical workflows at Swedish university hospitals, not on primary interviews or clinical data collection.

For each of the six EU Interoperability Framework layers and each of the eight extended Five Model dimensions, we map:

1. **As-is:** Current state, based on published literature on Swedish hospital information systems and hospital-based sensor monitoring reports.
2. **Gap assessment:** Size and nature of the gap (technical, organisational, cultural, legal).
3. **To-be:** Target state with the bridge in place, specified by Life Atlas against the platform's continuous life view architecture.
4. **Impact delta:** Measurable change, using Ward and Daniel's benefits framework. Impact is goal-driven: the starting question is always what changes for the person and the clinician, not what data volume increases.
5. **Who closes the gap:** Which actor (hospital, Life Atlas, privacy partner, regulator, patient, culture) is responsible.

---

## 4. As-Is Analysis

### 4.1 The Clinical Reality Through Mintzberg's Lens

The lead surgeon operates in a professional bureaucracy. He has eight minutes per outpatient consultation. He navigates four primary systems: the electronic patient record, the surgical scheduling system, the medical imaging archive (PACS), and the clinical chemistry portal. None of these systems surfaces data from Karin's life outside the hospital.

His decision-making is autonomous and skill-based. He does not consult a protocol for each decision — he draws on twenty years of pattern recognition, calibrated by thousands of previous cases. This is the defining characteristic of the professional bureaucracy's operating core: standardisation through internalised skills, not through external process controls.

But the lead surgeon is data-starved in a specific and systematic way. He has abundant data about what happens inside the hospital (lab values, imaging, surgical notes, anaesthesia records) and essentially zero data about what happens outside it (activity levels, sleep quality, stress patterns, medication adherence, recovery trajectory at home, functional capacity trends).

The professional bureaucracy does not have a mechanism for integrating patient-generated data. There is no workflow, no governance model, no legal framework, and no cultural norm for it. The technostructure (IT department, quality department) could theoretically build one, but in a professional bureaucracy, the technostructure serves the operating core — it does not direct it.

### 4.2 EU Interoperability Gap — As-Is

| Layer | Current State | Gap Size | Gap Owner |
|---|---|---|---|
| **Technical** | HL7v2, proprietary APIs, partial FHIR. Hospital systems can technically exchange data internally. No external API for personal devices. | Medium | IT departments, national e-health infrastructure |
| **Syntactic** | Partial FHIR R4 adoption. Much clinical data still in free text or PDF. Wearable data in proprietary formats (Apple HealthKit, Oura API). | Medium | Standards bodies, platform developers |
| **Semantic** | SNOMED CT adopted but unevenly. No ontology for wearable-derived health metrics. ICHOM outcome sets exist but are not mapped to wearable signals. | Medium | National e-health agency, this project |
| **Organisational** | Silos per department. Patient is not a peer in information exchange. No governance model for personal health data entering clinical workflows. No defined roles or responsibilities. | **Critical** | Regional medtech arenas, this analysis, hospital leadership |
| **Legal** | GDPR Article 9 [15] (special category data) applies. MDR [12] applies per device. AI Act [13] (EU 2024/1689) introduces human oversight requirements. Self-care / regulated care boundary is undefined for personal platforms sharing data with hospitals. | Medium-High | Regulators, privacy technology providers, this analysis |
| **Contextual** | Swedish healthcare culture is hierarchical. Patients are recipients, not participants. Trust in institutions is high, but trust in personal health technology sharing data with hospitals is untested. | **Critical** | Culture, clinical champions, this project |

### 4.3 Extended Eight-Dimension Model — As-Is

| Dimension | Current State |
|---|---|
| **People** | Karin, the lead surgeon, anaesthesia team, OR nurses, post-op nurses, primary care physician, physiotherapist, pharmacist, relatives — all operating in silos with no shared information space. |
| **Roles** | Patient is passive recipient. Surgeon is autonomous decision-maker. No role exists for "patient as data contributor" or "AI agent as delegated information broker." |
| **Systems** | 12+ disconnected systems: electronic patient record, surgical scheduling, imaging archive, clinical chemistry, national hernia register, national health portal, pharmacy system, social insurance, wearable apps, email. |
| **Goals/Culture** | Hospital goals: successful operation, minimal complications, acceptable DRG cost, register reporting. Patient goals (healthspan, work capacity, quality of life) are invisible to the system. Mintzberg: the professional bureaucracy optimises for skill-based autonomy, not for information integration. |
| **Processes** | Linear: Referral → waiting list → pre-op visit → OR → post-op ward → discharge → primary care → 3/6/12-month follow-up (if not lost). No feedback loops between home recovery and hospital learning. |
| **Data** *(added)* | Fragmented across all 12 systems. Karin is the only node touching all of them. No synthesis tool exists. Hospital data is structured but siloed. Personal data (wearables) is continuous but invisible to the hospital. |
| **Knowledge** *(added)* | Tacit. The lead surgeon's surgical expertise: 20 years, undocumented pattern recognition. Karin's body knowledge: 58 years, never asked for in structured form. Research evidence: in PubMed, not synthesised with either. |
| **Context** *(added)* | Swedish, hierarchical, trust-based. Patient as recipient, not participant. Wearables are "consumer gadgets," not clinical tools. Solo household — recovery context differs fundamentally from patient with partner support. |

---

## 5. To-Be Specification

### 5.1 The Bridge Architecture

The bridge connects two interfaces:

**Person's side — LPI (Life Programmable Interface).** A personal health interface running on the individual's own device. It collects, visualises, and stores health data locally. It maintains the individual's goals, preferences, and privacy policy. It includes an AI agent that negotiates information exchange on the person's behalf, according to their explicitly stated rules.

**Hospital's side — API.** The hospital's existing systems, extended with a standardised interface for receiving structured personal health data. The hospital's existing sensor monitoring infrastructure provides the technical foundation. The API exposes: department capacity, protocol options, outcome data (aggregated, privacy-verified), and scheduling.

**The bridge itself** is the negotiation layer between LPI and API. Software agents on each side negotiate what information to share, under what conditions, with what privacy guarantees. A differential privacy technology partner provides the mathematically verified privacy layer: personal and contextual insights — genomic, epigenetic, lifestyle, and clinical dimensions; goals; recovery trajectory — can be shared in structured form without raw data leaving the person's device. Aggregated outcome comparisons and risk stratification signals can additionally flow at population level, also without individual raw data crossing the boundary.

**Protocol specification.** The bridge protocol operates in three phases: (1) *Handshake* — the personal LPI advertises available data categories (fitness trajectory, medication log, genomic risk profile, personal goals) and privacy budget per category using a capability manifest in FHIR CapabilityStatement format [14]; the hospital API responds with requested categories and clinical context (scheduled procedure, relevant comorbidity flags). (2) *Negotiation* — the personal AI agent evaluates requests against the person's privacy policy, computes differential privacy budgets per category using the differential privacy composition theorem [19], and returns a privacy-verified summary rather than raw data. (3) *Delivery* — structured FHIR R4 resources (Observation, Condition, Goal, CarePlan) are transmitted over mTLS, with each resource carrying provenance metadata (source device, measurement accuracy class, temporal resolution). The 90-second clinical summary is generated hospital-side from the delivered resources, ensuring the hospital retains rendering control while the person retains data control.

**The body as boundary-spanning object.** The human body serves as the shared reference point — the boundary object in Star and Griesemer's sense [8] — that all parties can orient around without requiring shared vocabulary. The surgeon points at the right groin and sees scar tissue, pain trajectory, fitness trend. The patient points at the same place and sees plain-language options, recovery timeline, goal progress. The AI agent points at the same place and retrieves evidence, peer outcomes, risk factors. Same object. Different lenses. Shared situational awareness.

### 5.2 EU Interoperability — To-Be

| Layer | Target State | Who Closes the Gap |
|---|---|---|
| **Technical** | mTLS-secured, edge-native mesh. Personal device connects to hospital API via standardised bridge protocol. Local-first: data stays on device unless explicitly shared. | Life Atlas (specification), hospital IT (implementation) |
| **Syntactic** | FHIR R4 profiles for personal health events. P4-event schema for baseline, deviation, goal, and privacy policy. openEHR archetypes for longitudinal personal health records. | Life Atlas (MIT specification) |
| **Semantic** | SNOMED CT + LOINC + ICHOM outcome sets + wearable-derived metric ontology. Mapping table between Apple HealthKit/Oura data types and clinical terminology. | Life Atlas + national e-health agency |
| **Organisational** | Department + SME + patient as equal nodes in information governance. Defined roles: patient as data owner, AI agent as delegated broker, clinician as autonomous professional enriched (not constrained) by personal context. Governance template: who can see what, under what conditions, with what audit trail. | Regional medtech arenas, this analysis, hospital governance |
| **Legal** | Regulatory memo: self-care / regulated care boundary defined. MDR [12] scope clarified for personal platforms that share data with hospitals (not medical devices if they don't diagnose or treat). AI Act Article 14 [13] compliance: human override on every AI-mediated recommendation. GDPR Article 25 [15]: privacy by design implemented through mathematically verified differential privacy. | Privacy technology providers, legal experts, regulators |
| **Contextual** | Person as expert on their own life. Visual body interface as shared reference point that requires no clinical vocabulary. 90-second summary accessible to clinician, patient, researcher, and hospital system. Cultural shift: from "patient brings nothing" to "patient brings continuous context." | Clinical champions, UX design, pilot validation |

### 5.3 Extended Eight-Dimension Model — To-Be

| Dimension | Target State |
|---|---|
| **People** | Same actors + Karin's AI agent + department's AI agent as negotiating parties. Relatives can be granted read access under Karin's control. |
| **Roles** | Patient as data owner and active participant. AI agent as delegated information broker. Surgeon retains full professional autonomy — enriched, not constrained. |
| **Systems** | Personal platform (LPI) ↔ bridge (negotiation + privacy layer) ↔ hospital systems (sensor monitoring infrastructure + existing). Single visual interface for the body as shared reference. |
| **Goals/Culture** | Hospital goals + patient goals (healthspan, work capacity, reduced readmission risk). Goals are explicit, measurable, and shared. Mintzberg: the professional autonomy is preserved; the information substrate is expanded. |
| **Processes** | Continuous OODA loop: Observe (edge sensors + self-report) → Orient (AI contextualisation + peer comparison) → Decide (human + AI, human always has final word per AI Act Art. 14) → Act (intervention, escalation, or continued monitoring). Auto-PROM replaces manual follow-up questionnaires. |
| **Data** *(added)* | Data stays with the person and travels with the person — before, during, and after each care episode. Rich, dynamic data covering genomic, epigenetic, lifestyle, clinical, and goal dimensions is shared as structured personal and contextual insights through the privacy layer. Aggregate, privacy-verified statistics enable population-level learning without raw data access. The person is never a flat sick snapshot — they arrive at every clinical touchpoint with their full continuous life view. |
| **Knowledge** *(added)* | Synthesised. The bridge enables the lead surgeon's tacit expertise to meet Karin's embodied knowledge to meet research evidence — all referenced against the same body, the same timeline, the same goals. |
| **Context** *(added)* | Person as expert on their own life. Solo household is not a clinical data point — it is a recovery context that changes the meaning of every post-operative signal. The bridge makes this visible. |

---

## 6. Impact Delta

Using Ward and Daniel's Benefits Management framework [6], we map the measurable change for each dimension:

| Dimension | As-Is | To-Be | Measurable Impact |
|---|---|---|---|
| **Decision time** | 8 minutes across 4 systems, no life context | 90-second visual summary + full context available | Pre-op assessment time reduction; information completeness score |
| **Information completeness** | Hospital data only (~40% of relevant information) | Hospital + personal + contextual (~90%) | Percentage of relevant data available at decision point |
| **Patient visibility between visits** | Zero — person is invisible | Continuous — passive monitoring + active self-report | Days of continuous monitoring per patient; deviation detection rate |
| **Readmission detection** | Detected at re-presentation (days to weeks) | Detected at deviation from baseline (hours to days) | Time from complication onset to clinical awareness |
| **Knowledge synthesis** | Never — tacit knowledge in silos | Continuous — shared visual interface | Number of decision-relevant insights surfaced per case |
| **Research data quality** | Retrospective, register-based, episodic | Prospective, continuous, patient-contributed | Data completeness; follow-up rate; time resolution |
| **OODA cycle speed** | Visit frequency (weeks/months) | Continuous (hours/days) | Observation-to-action latency for post-op complications |
| **Patient autonomy** | Passive recipient | Active data owner with delegated AI agent | Patient activation measure; consent granularity |

---

## 7. Discussion

### 7.1 The Organisational Gap Is the Real Gap

The most significant finding of this analysis is not surprising, but it is important to state clearly: the gap between personal health platforms and hospital care is not primarily technical, syntactic, or semantic. It is organisational and contextual. The EU Interoperability Framework predicts this — the lower layers are engineering problems, the upper layers are human problems — but seeing it mapped concretely against a real clinical pathway makes the point viscerally.

The hospital, as a professional bureaucracy in Mintzberg's terms, does not have a mechanism for integrating patient-generated data. This is not an oversight — it is a structural property of the organisational form. Professional bureaucracies standardise through skills (years of medical training) rather than through processes (checklists, workflows) or outputs (performance metrics). Adding patient-generated data to the information environment of a professional bureaucracy requires a bridge that respects the defining characteristic of that organisational form: professional autonomy.

### 7.2 The Bridge Must Serve Autonomy, Not Constrain It

Any attempt to mandate the use of patient-generated data through top-down policy will fail in a professional bureaucracy. The surgeon will not adopt a system that slows down their decision-making, adds process overhead, or implies that their clinical judgement needs external validation.

The bridge must be designed as an enrichment, not a constraint. The 90-second visual summary adds information that was previously unavailable; it does not prescribe how that information should be used. The AI agent suggests, but the human decides. The AI Act Article 14 [13] requirement for human oversight is not a limitation — it is a design principle that aligns with the professional bureaucracy's operating logic. Greenhalgh et al.'s NASSS framework [20] identifies exactly this alignment — between the technology and the adopter's professional context — as a critical determinant of whether health technologies scale or are abandoned.

### 7.3 Privacy Is Architecture, Not a Feature

The distinction between "privacy features" and "privacy architecture" is critical. A privacy feature is a consent checkbox. A privacy architecture is a system where raw data physically cannot leave the person's device — where the mathematical properties of the system guarantee that individual data cannot be reconstructed from the insights that cross the bridge.

The approach proposed here — mathematically verified differential privacy, as implemented by specialist providers in this space — provides this architectural guarantee. It is not a policy promise. It is a mathematical proof. The person's data stays on their device. Personal and contextual insights — goals, genomic context, lifestyle trajectory, epigenetic signals — can be shared in structured form across the bridge, because they are shared on the person's explicit terms, under their control, not extracted by the system. Aggregated population-level insights (how do people like Karin typically recover? what are the complication risk factors for this patient profile?) can be computed and shared separately. But no individual's trajectory can be reconstructed from either layer.

### 7.4 The Person at the Centre

The Five Model places the IT system at the centre. We argue this is too technocratic. The extended model places the person at the centre — not as a philosophical statement, but as an architectural principle. Every data flow, every knowledge synthesis, every contextual interpretation radiates from the person's reality outward, not from the system's capabilities inward.

This is not anti-technology. It is pro-reality. The person's body is the ground truth. The hospital's data is a partial, episodic snapshot of that truth. The personal health platform's data is a continuous, contextual record of that truth. The bridge connects the two representations of the same underlying reality — the person's life.

### 7.5 Goal-Driven Before Data-Driven

A recurring failure mode in health data projects is that the data becomes the product. Volume grows, pipelines proliferate, dashboards multiply — but no one asks whose goals are being served. This project is explicit that goals drive design. The alignment question — can a personal health platform help a clinician understand a human being's past, present, and future faster? — is a goal statement, not a data statement.

The impact delta table in Section 6 is structured accordingly: every measurable change is anchored to a human outcome (decision time, complication detection speed, patient autonomy) rather than a data metric (records ingested, API calls made). The SMILE methodology enforces this: a specification that increases data volume without closing a gap in any interoperability layer has zero impact, by definition.

This framing also protects the project from scope creep. The bridge does not need to share everything. It needs to share what changes the outcome. Karin's fitness trajectory changes the meaning of a post-operative pain score. Her goal to return to work in eight weeks changes the meaning of a discharge decision. Her solo household changes the meaning of "routine follow-up." These are the signals that matter. The rest is noise.

### 7.6 Counter-Arguments and Risks

Three substantive objections deserve engagement.

**"Patient-generated data is unreliable."** Clinicians rightly note that consumer wearable data lacks the calibration and validation of medical-grade devices. Bent et al. [17] demonstrated significant variability in heart rate and SpO2 accuracy across consumer wearables. However, the bridge does not propose using raw wearable data for clinical diagnosis. It proposes using *trajectories* — deviations from personal baselines — as contextual signals. A 20% decline in Karin's step count over three days post-surgery is clinically meaningful regardless of whether the absolute step count is accurate to ±5%. Clinical-grade sensors can be added at the device layer without changing the bridge architecture.

**"Clinicians don't have time for more data."** This is the strongest objection and the one the bridge design must address directly. The 90-second visual summary is the answer: not more data, but synthesised context. Topol [18] argues that AI's primary clinical value is not in replacing clinician judgement but in restoring time to the clinical encounter by pre-processing information that currently requires manual chart review. The bridge follows this principle: the AI agent synthesises; the clinician decides.

**"The privacy guarantees are theoretical."** Differential privacy has known limitations: the privacy-utility trade-off means that stronger privacy guarantees degrade the usefulness of shared insights. Dwork and Roth [19] formalised this trade-off. The contribution of differential privacy providers is making the trade-off explicit and mathematically auditable — the clinician and patient can see exactly what privacy budget is consumed by each query. This is superior to the current state (policy promises with no mathematical backing) even if it is not a perfect solution.

### 7.7 Limitations

This analysis is based on a fictional case. No real patient data was collected or analysed. The as-is mapping is based on published literature and general knowledge of Swedish hospital information systems; it has not been validated through systematic observation or interviews. The to-be specification is a design artefact, not a tested implementation.

The economic estimates (readmission rates, costs) are drawn from published registry data and national statistics, not from primary research. They should be treated as indicative rather than definitive.

The analysis is specific to Swedish healthcare and to the professional bureaucracy form of hospital organisation. Generalisability to other national contexts or organisational forms requires additional analysis.

---

## 8. Three Falsifiable Propositions

1. **The organisational gap proposition:** In Swedish surgical care, the organisational and contextual layers of the EU Interoperability Framework represent larger barriers to personal-hospital data bridging than the technical and syntactic layers. This can be falsified by a systematic survey of Swedish surgical departments showing that technical barriers are rated higher than organisational barriers.

2. **The professional autonomy proposition:** Bridges that constrain professional autonomy (mandatory data review, prescriptive protocols) will have lower adoption rates among surgeons than bridges that enrich autonomy (optional context, visual summaries, AI suggestions with human override). This can be falsified by a controlled study comparing adoption rates of constraining versus enriching bridge designs.

3. **The cycle speed proposition:** Post-operative complication detection latency is inversely correlated with OODA cycle speed. Patients with continuous personal health monitoring will have shorter complication-to-detection intervals than patients with standard episodic follow-up. This can be falsified by a comparative study measuring detection latency in monitored versus unmonitored post-surgical cohorts.

---

## 9. Conclusion

The invisible patient is not invisible because the technology to see them does not exist. The technology exists — in their pocket, on their wrist, in their daily self-reports. The patient is invisible because the bridge between their continuous life and the hospital's episodic snapshot has never been built.

The core question this paper asks is an alignment question: can a personal health platform help a clinician understand a human being's past, present, and future faster? Not just their lab values from the last visit. Their past: a continuous health record going back years, carrying genomic, epigenetic, lifestyle, and clinical dimensions. Their present: real-time fitness trajectory, sleep, stress, medication adherence, recovery at home. Their future: explicit goals — eight weeks to work capacity, return to running, live alone safely — that change the meaning of every clinical decision.

Data that travels with the person, rather than staying locked in disconnected hospital systems, is the prerequisite for that alignment. A person should not arrive at a surgical pre-assessment as a flat sick snapshot. They should arrive as themselves — continuous, contextual, goal-bearing, with a rich record that came with them from before the illness started and will continue long after discharge.

This paper provides the analytical mapping — the blueprint — for that bridge. The Five Model, extended with data, knowledge, and context, reveals gaps that traditional systems analysis cannot see. Mintzberg's professional bureaucracy lens explains why top-down mandates will fail and demand-driven, autonomy-respecting design will succeed. The EU Interoperability Framework provides the structured assessment of where exactly the connections break down — and the finding that the critical breaks are organisational and contextual, not technical. Goals drive the entire specification: not "what data can we share?" but "what changes in the outcome for the person and the clinician?"

The bridge specification produced by this analysis is open (MIT licence), structured as OASC Minimal Interoperability Mechanisms [23], and designed for reuse by any Swedish region, hospital, or research programme that wants to connect hospital care with person-held health data. The infrastructure thinking follows Weill and Broadbent's [21] principle that shared infrastructure must be designed for leverage, not just for the first use case. Ciborra [22] reminds us that the lived experience of technology — the "labyrinths" of real organisational use — will inevitably diverge from any specification; the bridge must be designed for adaptation, not just for compliance.

The implementation of this bridge requires three capabilities in concert: a personal health platform with sovereign data architecture, a clinical champion embedded in the professional bureaucracy, and a privacy technology partner capable of mathematically verified guarantees. The specification is the product. The implementation is the next step.

But the specification must come first. You cannot build a bridge without a blueprint. After fifteen years of observing this gap widen — despite accelerating technical maturity on both sides — this paper is a first step toward closing it.

---

## References

[1] Nilsson S, Gummesson C, Torén K, et al. Sensor-Based Clinical Monitoring in Hospital Care — Phase 3 Final Report. A Major University Hospital in Western Sweden; 2024.

[2] Landahl J, Bäckström M, Rotter T, et al. Automated Process for Monitoring of Amiodarone Treatment: Development and Evaluation. *Journal of Medical Internet Research.* 2025;27:e65473. doi:10.2196/65473

[3] Magoulas T, Pessi K. Fundamental Considerations for Designing Information Systems. Gothenburg Studies in Informatics, Report 31. University of Gothenburg; 1998.

[4] Mintzberg H. *The Structuring of Organizations.* Prentice-Hall; 1979.

[5] European Commission. European Interoperability Framework — Implementation Strategy. COM(2017) 134 final. Brussels; 2017.

[6] Ward J, Daniel E. *Benefits Management: How to Increase the Business Value of Your IT Projects.* 2nd ed. Wiley; 2006.

[7] Boyd JR. The Essence of Winning and Losing. Unpublished briefing; 1996.

[8] Star SL, Griesemer JR. Institutional Ecology, 'Translations' and Boundary Objects: Amateurs and Professionals in Berkeley's Museum of Vertebrate Zoology, 1907-39. *Social Studies of Science.* 1989;19(3):387-420. doi:10.1177/030631289019003001

[9] DeLone WH, McLean ER. The DeLone and McLean Model of Information Systems Success: A Ten-Year Update. *Journal of Management Information Systems.* 2003;19(4):9-30. doi:10.1080/07421222.2003.11045748

[10] Davis FD. Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Technology. *MIS Quarterly.* 1989;13(3):319-340. doi:10.2307/249008

[11] Venkatesh V, Morris MG, Davis GB, Davis FD. User Acceptance of Information Technology: Toward a Unified View. *MIS Quarterly.* 2003;27(3):425-478. doi:10.2307/30036540

[12] Regulation (EU) 2017/745 of the European Parliament and of the Council of 5 April 2017 on Medical Devices (MDR). *Official Journal of the European Union.* L 117/1.

[13] Regulation (EU) 2024/1689 of the European Parliament and of the Council Laying Down Harmonised Rules on Artificial Intelligence (AI Act). *Official Journal of the European Union.* 2024.

[14] HL7 International. HL7 FHIR Release 4. https://hl7.org/fhir/R4/

[15] Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation). *Official Journal of the European Union.* L 119/1; 2016.

[16] Hugoson MÅ, Magoulas T, Pessi K. Enterprise Architecture: Creating Value by Informed Governance. In: Bernus P, Doumeingts G, Fox M, eds. *Handbook on Enterprise Architecture.* Springer; 2003.

[17] Bent B, Goldstein BA, Kibbe WA, Dunn JP. Investigating Sources of Inaccuracy in Wearable Optical Heart Rate Sensors. *npj Digital Medicine.* 2020;3:18. doi:10.1038/s41746-020-0226-6

[18] Topol EJ. *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again.* Basic Books; 2019.

[19] Dwork C, Roth A. The Algorithmic Foundations of Differential Privacy. *Foundations and Trends in Theoretical Computer Science.* 2014;9(3-4):211-407. doi:10.1561/0400000042

[20] Greenhalgh T, Wherton J, Papoutsi C, et al. Beyond Adoption: A New Framework for Theorizing and Evaluating Nonadoption, Abandonment, and Challenges to the Scale-Up, Spread, and Sustainability of Health and Care Technologies. *Journal of Medical Internet Research.* 2017;19(11):e367. doi:10.2196/jmir.8775

[21] Weill P, Broadbent M. *Leveraging the New Infrastructure: How Market Leaders Capitalize on Information Technology.* Harvard Business School Press; 1998.

[22] Ciborra C. *The Labyrinths of Information: Challenging the Wisdom of Systems.* Oxford University Press; 2002.

[23] Open and Agile Smart Cities (OASC). Minimal Interoperability Mechanisms (MIMs). https://oascities.org/minimal-interoperability-mechanisms/
