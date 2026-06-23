# The Sovereign Body: Personal Digital Twins as Boundary-Spanning Objects Across the WHO Quality of Life Dimensions

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: 0009-0001-4011-8201

*Corresponding author: ceo@winniio.io*

---

**Version:** 1.0 | **Date:** 2026-04-14 | **License:** CC-BY-4.0

**Cite as:** Waern, N. (2026). *The Sovereign Body: Personal Digital Twins as Boundary-Spanning Objects Across the WHO Quality of Life Dimensions*. WINNIIO AB. Zenodo. https://doi.org/10.5281/zenodo.19586851

**Prior works in this series:**
Waern (2025a). DOI: 10.5281/zenodo.17462962
Waern (2025b). DOI: 10.5281/zenodo.17464804
Waern (2026a). DOI: 10.5281/zenodo.19587944 [Indexing Reality]

---

## Abstract

Personal digital twins — computational representations of individual human beings — constitute a new class of boundary-spanning object (Star & Griesemer, 1989) capable of integrating knowledge across the four WHO Quality of Life dimensions: physical, psychological, social, and environmental. This position paper traces the progression from building twins to biological twins to personal twins, arguing that each step represents an epistemological shift from environment-as-model to person-as-system. We introduce three intelligence regimes — Large Language Models (LLMs), Large Quantitative Models (LQMs), and Small Quantitative Models (SQMs) — arguing that LQMs are epistemologically superior for biological systems because biology is governed by physics, not statistics. Drawing on Ward and Daniel's (2006) benefits-driven approach, we propose that personal digital twin platforms must be evaluated by measurable quality-of-life improvements, not technical sophistication. We present the *Sovereign Body* as an architectural principle: personal health intelligence generated on the person's devices, explained in human terms, and subject to unilateral override. The Life Atlas platform instantiates this architecture as an edge-native life operating system governed by the SMILE methodology (Waern, 2025a; 2025b; 2026c). Preliminary architectural validation at non-human scale (equine biological twins) demonstrates the feasibility of the LQM/SQM/LLM separation across biological domains; empirical performance benchmarks are forthcoming. Novel terminology is explicitly flagged.

**Keywords:** personal digital twin, boundary objects, WHO quality of life, sovereign body, SMILE methodology, large quantitative models, edge computing, data sovereignty, biological digital twin, AI governance

---

## 1. Introduction: From Twin to Self

### 1.1 The Twin That Knows You

In 2020, Corral-Acero et al. reported a landmark demonstration: patient-specific cardiac digital twins, parameterised from MRI and catheterisation data, were used to simulate haemodynamic response to virtual interventions — predicting how a given patient's ventricle would behave under pacing changes or drug administration (Corral-Acero et al., 2020). The physics-based model revealed flow dynamics invisible to standard clinical assessment because it was solving the governing equations, not pattern-matching against a historical database. Similarly, Niederer et al. (2020) showed that virtual patient cohorts — populations of cardiac twins, each parameterised from individual anatomy and electrophysiology — could identify adverse drug responses that population-average models missed entirely. Topol (2019) argued that such capabilities represent a fundamental shift: "deep medicine" requires moving from population averages to individual computation.

These examples point toward something fundamental: there is a class of question about the human body that can only be answered by simulation from first principles, not by retrieval from data. "What happens to my cardiac output if I reduce my resting heart rate by eight beats per minute?" is not a lookup. It is a computation. And as the density of personal health data increases — continuous glucose monitors, photoplethysmography, accelerometers, spirometers, heart rate variability sensors, proteomics panels — the question of *what to do with it* becomes the central design problem of health technology for the next decade.

This paper addresses that design problem through three interlocking arguments:

1. **Architectural**: Personal digital twins are not a healthcare application; they are a new *ontological layer* — a persistent, physics-informed computational model of the person that spans all dimensions of life, from molecular biology to social environment.
2. **Epistemological**: The dominant intelligence paradigm — Large Language Models trained on text — is fundamentally mismatched to biological systems, which are governed by conserved physical laws. Physics-based simulation engines, which we term Large Quantitative Models (LQMs), are the epistemologically appropriate tool.
3. **Political**: Data sovereignty is not a compliance requirement; it is an architectural commitment. A person's biological twin must run on their devices, not a corporation's servers, or it is not their twin — it is their profile.

### 1.2 Scope and Limitations

This is a position paper. It does not report experimental results from a deployed system. Where it describes the Life Atlas platform, it describes an architecture under active development, not a validated product. Empirical claims are attributed to peer-reviewed sources; architectural claims are explicitly marked as proposals or positions. Novel terminology is flagged with the notation **[proposed term]**.

The paper's geographic focus is Europe and the Global North. The implications of personal digital twins for the Global South — where data infrastructure, device penetration, and regulatory capacity differ substantially — are noted but not developed.

---

## 2. Conceptual Foundations: Boundary Objects and the Life Span

### 2.1 Star and Griesemer's Boundary Objects

Star and Griesemer (1989), in their study of the Museum of Vertebrate Zoology at Berkeley, identified a class of artefact that enables cooperation across communities with different purposes, values, and vocabularies without requiring those communities to reach consensus. They called these *boundary objects*: artefacts "plastic enough to adapt to local needs and the constraints of the several parties employing them, yet robust enough to maintain a common identity across sites" (p. 393). Their canonical examples — specimen collections, field notebooks, maps — are physical objects, but the concept has since been extended to software systems, standards, and conceptual frameworks (Bowker & Star, 1999; Carlile, 2002).

The power of a boundary object lies in its *interpretive flexibility* (Pinch & Bijker, 1984): the same artefact is read differently by different communities. A geological map is a navigation tool for a biologist, a resource guide for a mining engineer, and a boundary document for a land claims lawyer. It provides a shared referent around which they can communicate without consensus.

We argue in this paper that the personal digital twin has the structural characteristics of a boundary object — but operating across something far more consequential than professional communities. It operates across the four domains of a single person's existence: their body, their mind, their relationships, and their environment. The WHO Quality of Life framework (WHOQOL Group, 1995) provides the ontological structure for this claim.

### 2.2 The WHO Quality of Life Framework as Ontological Foundation

The World Health Organization's Quality of Life framework, operationalised as the WHOQOL-BREF assessment instrument (WHOQOL Group, 1998), identifies four fundamental domains of human flourishing:

1. **Physical health**: energy, fatigue, pain, sleep, mobility, activities of daily living, dependence on medication
2. **Psychological health**: bodily image, negative and positive feelings, self-esteem, thinking, learning, memory, concentration, spirituality
3. **Social relationships**: personal relationships, social support, sexual activity
4. **Environment**: financial resources, freedom, physical safety, health and social care, home environment, opportunities for acquiring new information and skills, physical environment (pollution, noise, traffic, climate), transport

These domains are not independent. Social isolation predicts cardiovascular disease (Holt-Lunstad et al., 2015). Air pollution is identified as a modifiable risk factor for dementia and cognitive decline (Livingston et al., 2020), with nanoparticulate exposure specifically linked to neuroinflammatory pathways (Calderón-Garcidueñas et al., 2021). Psychological distress modulates inflammatory markers (Kiecolt-Glaser et al., 2002). Sleep quality governs metabolic function (Van Cauter et al., 2008). The domains interact through feedback loops that operate on timescales from milliseconds (neuroendocrine) to decades (epigenetic).

The personal digital twin, as we define it, must model all four domains and their interactions. A twin that models only physical health is a fitness tracker. A twin that models physical and psychological health is a wellness app. A twin that models all four domains and their causal interactions is something qualitatively different: it is a *life model* — a computational representation of the person in their full ecological context.

This framing is explicitly not clinical. Clinical digital twins model pathological states for diagnostic or therapeutic purposes (Corral-Acero et al., 2020; Niederer et al., 2020). The personal digital twin, as proposed here, models the person in their ordinary life — and the question it answers is not "what disease do I have?" but "what does thriving look like for me, and how do I get there?"

### 2.3 The Boundary Object Function Across QoL Domains

The personal digital twin functions as a boundary object in two senses.

**Across professional communities**: The same model is relevant to a general practitioner (physical domain), a psychologist (psychological domain), a social worker (social domain), and an environmental health officer (environmental domain). Today these professionals operate from disconnected records systems, disconnected vocabularies, and disconnected models of the person. The personal digital twin, as a shared computational referent, creates the possibility of — without mandating — cross-disciplinary coordination without requiring consensus.

**Across time**: The twin represents the person's past (retrospective data), present (real-time state), and future (simulated trajectories). This temporal spanning is what distinguishes it from an electronic health record (past only) or a monitoring dashboard (present only). The future dimension is where the epistemological debate between LLMs and LQMs becomes critical (Section 5).

Carlile (2002) refined the boundary object concept through three types of knowledge boundary: *syntactic* (different vocabularies), *semantic* (different interpretations of shared vocabulary), and *pragmatic* (different interests creating political barriers to knowledge transfer). The personal digital twin must address all three. A common data standard (syntactic) is necessary but insufficient; a shared ontology (semantic) is necessary but insufficient; governance that aligns incentives across professional communities (pragmatic) is the hardest and most important challenge.

However, a boundary object is only as effective as the receiving community's capacity to interpret and act on it. Cohen and Levinthal (1990) introduced the concept of *absorptive capacity*: a community's ability to recognise the value of new external information, assimilate it, and apply it to productive ends. For the personal digital twin, this means the twin's outputs must be presented at different levels of abstraction for different communities — a design requirement fulfilled by the LLM communication layer (Section 5), which translates physics-based model outputs into domain-appropriate language.

### 2.4 The Ontological Gap: The Body as the Reality

The personal digital twin rests on a foundational ontological claim that must be made explicit: the body IS the reality. Every health record, every wearable reading, every clinical note, every laboratory panel is a *shadow* of the body's actual state — a partial, lossy, temporally bounded projection of a continuous, multidimensional biological reality. The personal twin does not create the biology; it makes the existing biology *legible* across all WHO dimensions simultaneously.

This is the ontological gap that the personal digital twin addresses. The gap is not between "digital" and "physical" — that framing reduces the twin to a copy. The gap is between the body's actual state (which is always richer, more continuous, and more causally interconnected than any measurement) and the fragmented, domain-specific, temporally discontinuous representations through which people and professionals currently apprehend it. A fasting glucose reading is a shadow of the body's metabolic state. A PHQ-9 score is a shadow of the body's psychological state. An air quality index is a shadow of the body's environmental exposure. None of these shadows, alone, is the reality. The personal digital twin is the construct that assembles the shadows into the most coherent available approximation of the reality — while being explicit about where the shadows end and the darkness of unmeasured biology begins.

This framing — drawn from the Reality Construct methodology (Waern, 2026a) — has a direct architectural consequence: the twin's ontology must represent not only what is known but what is *not yet known*. The knowledge graph must encode epistemic gaps: regions of the person's biology where no sensor data exists, where no model has been parameterised, where uncertainty is not quantified but undefined. This honest representation of ignorance is itself a form of intelligence — and it is the architectural expression of the Vitruvius firmitas criterion applied to epistemology.

---

## 3. The Progression: Building Twins to Biological Twins to Personal Twins

### 3.1 Building Information Modelling and the First Wave

The digital twin concept originated in aerospace — Grieves (2014) traces it to a NASA product lifecycle management model from 2002 — but reached broad adoption through construction and facilities management. Building Information Modelling (BIM), standardised through ISO 19650 and mandated for public procurement in the UK since 2016, represents the first large-scale deployment of digital twins across a professional community. The BIM model is a boundary object in the classic sense: the same 3D model serves as the architect's spatial vision, the structural engineer's load analysis, and the facility manager's maintenance record.

The lessons from BIM adoption are directly applicable to personal digital twins:

1. **The twin is not the building; the twin is the knowledge asset**: The value of BIM is not the 3D geometry but the structured data attached to it — material specifications, maintenance schedules, energy performance parameters. Similarly, the value of the personal digital twin is not the visualisation but the causal model.
2. **Adoption requires boundary infrastructure, not just boundary objects**: Bowker and Star (1999) showed that classification systems — the unglamorous infrastructure of naming, categorising, and standardising — are as important as the objects themselves. Their central argument is that infrastructure is *relational* — something becomes infrastructure only in relation to organised practices, not through inherent properties. The Industry Foundation Classes (IFC) standard, which defines a common data model for BIM objects, is more important to BIM interoperability than any particular software platform — precisely because it provides the invisible substrate upon which boundary objects can function. For personal digital twins, this infrastructure argument is even more consequential: the ontological layer connecting physical biomarkers (SNOMED CT), psychological assessments (DSM/ICD), social context (no established standard), and environmental exposure (EPA AQI, WHO guidelines) does not yet exist as an integrated classification system. The OMOP Common Data Model (Hripcsak et al., 2015) addresses observational health data but not cross-domain life modelling. Building this boundary infrastructure — the open health ontology that makes the personal digital twin legible across all four WHO QoL domains — is architecturally prior to building the twin itself. Without it, the twin is a sophisticated model trapped in a single professional vocabulary.
3. **Value is realised in use, not in creation**: The BIM mandate in public procurement was driven by the recognition that the model created during design and construction has orders-of-magnitude more value if it is maintained and used during operation (Eastman et al., 2011). The same principle applies to personal health data: its value is not in collection but in continuous use.

### 3.2 Environmental Twins and the Ecological Embedding

The second wave — driven by smart city initiatives and climate modelling — extended the twin from buildings to urban systems. The European Commission's DestinE initiative (Bauer et al., 2021) aims to create a digital twin of Earth's climate system. Urban twins in Singapore, Helsinki, and Rotterdam model not just physical infrastructure but social and economic flows.

Urban twins address the WHO environmental domain — safety, pollution, transport — but model the aggregate, not the individual. The personal digital twin completes the loop: the urban twin reports district air quality; the personal twin computes what that means for *your* lungs, given your asthma history, inflammatory state, and planned exercise.

### 3.3 Biological Twins and the Physics of Life

The third and most epistemologically ambitious wave is the biological digital twin: a computational model not of the built environment around the person but of the biological system within the person. Niederer et al. (2020) survey the landscape of cardiac digital twins; Corral-Acero et al. (2020) propose a framework for the digital twin of the heart; Björnsson et al. (2020) discuss digital twins in oncology for personalised cancer treatment.

What distinguishes biological twins from data analytics is the *causal mechanism*. A machine learning model that predicts cardiac risk from a set of biomarkers is a correlational engine: it exploits statistical regularities in historical data. A biological digital twin that simulates haemodynamic response to a change in medication is a causal engine: it solves differential equations derived from first principles of fluid mechanics, electrophysiology, and biochemistry. The distinction matters enormously: correlational models are accurate for populations in training distributions; causal models are accurate for individual patients in novel situations.

The work of Cedersund and colleagues on the M4 biological simulation framework exemplifies this approach (Cedersund et al., 2021; Hagström et al., 2022). Their models — ODE systems representing glucose homeostasis, insulin signalling, fatty acid metabolism, and thermodynamics — are derived from biochemistry and parameterised using data. When the model predicts a metabolic response for a patient outside the training distribution, it is computing from physics, not extrapolating from statistics.

This epistemological foundation — *physics, not statistics* — is the defining characteristic of the biological digital twin and the basis for our argument about the superiority of LQMs over LLMs for personal health modelling (Section 5). However, LQMs are epistemologically suited to prediction along modelled pathways but are silent on mechanisms not yet incorporated into the model. LLMs retain a legitimate role in anomaly detection — flagging data patterns that the LQM cannot explain — which may indicate novel phenotypes requiring model extension.

### 3.4 The Personal Twin: Integration Across All Four Domains

The personal digital twin, as we define it, integrates all three prior waves:

- **From building twins**: The structured data model, the boundary object function, the persistence across time, the separation between the digital model and the physical subject.
- **From environmental twins**: The ecological embedding of the person in their social and physical environment; the environmental domain of WHO QoL; the data flows from urban sensors and social platforms.
- **From biological twins**: The physics-based causal model of the body; the distinction between correlation and causation; the ability to simulate counterfactual futures.

This integration is constitutive, not merely additive. Without environmental context the twin cannot model air quality effects on lung function; without the psychological domain it cannot model stress-cortisol-metabolism cascades; without the social domain it cannot model how social support affects cardiovascular recovery. All four domains and their causal interactions are necessary.

---

## 4. The Vitruvius Triad as Design Principle

### 4.1 Firmitas, Utilitas, Venustas

Marcus Vitruvius Pollio, writing in *De Architectura* around 25 BCE, proposed that a well-designed building must satisfy three criteria: *firmitas* (structural soundness), *utilitas* (functional fitness for purpose), and *venustas* (aesthetic delight). This triad — which we will refer to as the Vitruvius triad — has outlasted the Roman Empire to become a persistent organising principle in design theory (Scruton, 1979; Pallasmaa, 2005) and, more recently, in human–computer interaction (Dix et al., 2003).

We adopt the Vitruvius triad as a design evaluation framework for personal digital twin platforms, mapping its terms to the contemporary context:

**Firmitas (Robust)**: The platform must be architecturally sound — secure, private, fault-tolerant, and technically validated. For a personal digital twin, robustness means: the biological model is parameterised from validated physiology, not confabulated; the data pipeline is encrypted end-to-end; the edge deployment survives network outages; the model's confidence intervals are honest. A platform that is useful and beautiful but technically unsound — that confidently predicts health outcomes from spurious correlations — is dangerous in proportion to its convincingness.

**Utilitas (Useful)**: The platform must serve the person's actual goals, not a physician's clinical workflow or a researcher's data collection agenda. Ward and Daniel's (2006) benefits-driven approach — which insists that technology investments be evaluated by measurable benefits to defined stakeholders, not by technical capability — is the operationalisation of utilitas for information systems. For a personal digital twin, usefulness means: the platform answers questions the person actually has, in language they understand, on a timescale that enables action.

**Venustas (Attractive)**: The platform must be genuinely appealing — not merely usable but desirable. The history of electronic health records is a litany of utilitas-without-venustas failures: systems that physicians are legally required to use, that impose significant burden, and that generate no intrinsic motivation (Shanafelt et al., 2016). A personal digital twin that a person does not *want* to engage with is, in practice, a system they will abandon. Venustas is not decoration; it is the mechanism by which long-term engagement — and therefore long-term benefit — is sustained.

The three criteria are in tension. A maximally robust system is neither useful nor attractive; a maximally attractive system is neither robust nor secure. Good design navigates these tensions through principled trade-offs.

### 4.2 The Vitruvius Test as Acceptance Criterion

We propose **[proposed term]** the *Vitruvius test* as an acceptance criterion for personal digital twin platforms: any proposed feature or architectural decision must pass all three criteria simultaneously. Features that are robust and useful but repellent are not shipped. Features that are attractive and useful but technically unsound are not shipped. Features that are robust and attractive but serve no identifiable human need are not shipped.

This test operationalises a principle from the SMILE methodology (Waern, 2025a; 2025b; 2026c): *impact first, data last*. The SMILE inverted pyramid (Outcome → Action → Insight → Information → Data) encodes the same priority order as the Vitruvius triad: begin from the human outcome (utilitas), ensure the architecture can sustain it (firmitas), and express it in a form that humans will engage with (venustas).

---

## 5. Intelligence Regimes: LLMs, LQMs, and SQMs for Personal Health

### 5.1 The Epistemological Mismatch

Large Language Models (LLMs) — transformer architectures trained on text corpora — have demonstrated extraordinary capability at linguistic reasoning, knowledge retrieval, and general-purpose problem solving (Brown et al., 2020; Achiam et al., 2023). Their application to health has produced useful tools: clinical note summarisation, differential diagnosis suggestion, patient communication drafting. But LLMs have a fundamental epistemological limitation when applied to biological systems: they model *patterns in descriptions of the world*, not *the world itself*.

Consider the question: "If I reduce my caloric intake by 500 kcal/day while maintaining my current exercise regime, what will happen to my fasting glucose in six weeks?" An LLM can produce a plausible, fluent answer by retrieving statistical patterns from health literature. But it cannot compute the answer for *this specific person* with *this specific metabolic phenotype* — because the LLM has no model of the person's liver insulin sensitivity, their pancreatic beta-cell function, or their skeletal muscle glucose uptake. It is providing a population average dressed as a personal prediction.

Biology is governed by conserved physical laws — thermodynamics, chemical kinetics, fluid mechanics, electrophysiology — that do not change because the person is unusual, elderly, or presents a novel metabolic phenotype. A physics-based simulation engine that models glucose homeostasis through ordinary differential equations does not extrapolate from population statistics; it computes from biochemical first principles parameterised by this person's data. It will be wrong in proportion to its parameterisation error — but it will be wrong in a transparent, correctable way, not in the opaque, statistically-plausible-but-individually-wrong way of the LLM.

### 5.2 The Three Intelligence Regimes

We propose — and wish to be explicit that this taxonomy is novel, building on but not identical to the formulation in Waern (2026a) — a three-tier intelligence architecture for personal digital twin platforms. **[proposed taxonomy]**

**Large Language Models (LLMs)**: Statistical models trained on text corpora. Their role in the personal digital twin platform is *communication and coordination* — not simulation. LLMs are the interface layer: they translate complex model outputs into human language, they accept natural language queries and translate them into structured model calls, they synthesise narratives from numerical outputs, they draft recommendations in the person's preferred communication style. LLMs excel at the tasks that require linguistic and social intelligence. They must not be asked to simulate biology.

**Large Quantitative Models (LQMs)** **[proposed term]**: Physics-based computational engines that simulate biological, environmental, and social systems through mathematical equations, not correlations. In the personal health context, LQMs include: systems biology models of metabolic networks (Cedersund et al., 2021), haemodynamic simulation engines (Corral-Acero et al., 2020; Niederer et al., 2020), circadian rhythm models (Leloup & Goldbeter, 2003), pharmacokinetic/pharmacodynamic (PKPD) models (Sheiner & Steimer, 2000), and finite element models of musculoskeletal mechanics (Erdemir et al., 2007). LQMs are large not because they have many parameters in the machine learning sense but because they model large systems with high fidelity. They run on cloud or high-performance edge infrastructure and require significant compute for parameterisation. Their outputs are deterministic given parameters; their uncertainty is in the parameters, not in the model structure.

**Small Quantitative Models (SQMs)** **[proposed term]**: Compact, edge-deployable physics models derived from LQMs through model reduction — the application of sensitivity analysis, lumped-parameter approximation, and validated simplification to produce models that run on smartphones, wearables, or home edge devices with millisecond latency. The relationship between LQMs and SQMs is analogous to model distillation in machine learning (Hinton et al., 2015) but applied to physics-based engines: the SQM preserves the causal structure of the LQM while discarding computationally expensive sub-components whose contribution to the output of interest is below a defined threshold. SQMs are the intelligence that lives on the person's device, updating continuously from their wearable sensors, providing real-time feedback without requiring cloud connectivity.

The feasibility of SQM edge-deployment rests on established principles of model reduction in dynamical systems (Antoulas, 2005). In the biological domain, Cedersund and colleagues have demonstrated that multi-state ODE systems for glucose-insulin homeostasis can be systematically simplified through sensitivity analysis and lumped-parameter approximation while retaining the causal structure necessary for individual-level prediction (Cedersund & Roll, 2009; Cedersund et al., 2021). Similarly, Leloup and Goldbeter's (2003) circadian rhythm models, originally formulated as multi-variable oscillator systems, admit reduced-order approximations suitable for real-time phase estimation. The general principle — that physics-based models can be reduced to compact forms deployable on ARM Cortex-A class processors (the compute class of current smartphones) while preserving causal fidelity within defined error tolerances — is well-established in the model reduction literature; its specific application to personal biological subsystems at edge scale is a design commitment of this architecture that requires empirical validation per subsystem and per population. Tolerance thresholds for metabolically atypical populations (e.g., Type 2 diabetes, rare metabolic disorders) require separate validation, as error propagation characteristics differ substantially across phenotypic diversity. The error budget for SQM reduction is defined per subsystem: the reduced model must reproduce the full LQM's output for the target variable within a specified tolerance across the operating range defined by the person's observed physiological data. Subsystems where this tolerance cannot be met remain on the LQM layer and are computed server-side.

### 5.3 The Regime Stack in Practice

The intelligence architecture of the Life Atlas platform, as proposed, deploys all three regimes in a coordinated hierarchy:

1. The LQM (hosted at the infrastructure layer) is parameterised from the person's deep data: laboratory panels, imaging, clinical records, detailed lifestyle assessments. Parameterisation runs periodically — weekly or monthly — and produces a calibrated personal model.

2. The SQM (running on the person's device) receives the calibrated model coefficients from the LQM and runs continuously, updating in real time from the person's wearable sensors (continuous glucose, heart rate variability, activity, sleep staging). The SQM provides the "now" — the current physiological state and short-term trajectory forecasts.

3. The LLM (deployed as an interface agent) receives both LQM outputs (deep analysis, periodic reports) and SQM outputs (real-time state summaries) and translates them into the conversational interface through which the person interacts with their twin. The LLM is the voice of the twin; it is not the twin.

This separation of concerns is not merely architectural preference. It is a safety architecture. The LLM is explicitly prohibited from generating biological predictions that have not been computed by the LQM/SQM layer. All numerical outputs surface with their source (which model), their confidence interval (model uncertainty + parameterisation uncertainty), and their explanation (which parameters drive the output). This is the operationalisation of the Vitruvius firmitas criterion: the platform is structurally sound because its intelligence regime matches the epistemology of the domain.

---

## 6. The Sovereign Body: Edge-Native Data Sovereignty

### 6.1 The Political Economy of Health Data

Health data is simultaneously the most personal data a person generates and the most commercially valuable data in the digital economy. The business model of the dominant health technology platforms — from fitness trackers to hospital EHR systems to direct-to-consumer genetic testing — is, to varying degrees, built on centralising personal health data on proprietary servers, extracting value from aggregate analysis, and monetising population-level insights while providing individual-level tools.

This economic reality is changing. The convergence of three technological trends is creating the conditions for edge-native health intelligence:

1. **Edge compute density**: Apple M-series chips, Qualcomm Snapdragon X, and NVIDIA Jetson-class hardware now provide sufficient compute for local LLM inference and compact physics-based simulation on personal devices.
2. **Wearable sensor density**: The combination of continuous glucose monitors (Dexcom G7, Abbott FreeStyle Libre 3), photoplethysmography watches (Apple Watch Series 9, Garmin Forerunner 965), and IMU-based activity trackers now provides a continuous multi-modal physiological data stream at the person's wrist.
3. **Privacy regulation**: GDPR (EU 2016/679), HIPAA, and emerging AI Act (EU 2024/1689) provisions create regulatory pressure toward data minimisation and purpose limitation that is structurally hostile to centralised health data aggregation.

The convergence of these trends makes possible what we term the **[proposed term]** *Sovereign Body* architecture: a personal digital twin that runs primarily on the person's own devices, with cloud infrastructure used only for computationally intensive periodic operations (LQM parameterisation, model updates), and with the person as the sole controller of their biological model.

### 6.2 Sovereignty as Architecture, Not Policy

The distinction between sovereignty as policy and sovereignty as architecture is the central political argument of this paper.

Sovereignty as policy means: the platform's terms of service grant the user rights over their data — rights defined, modifiable, and enforced by the platform against itself, a governance fiction systematically eroded by commercial incentives (Zuboff, 2019). Sovereignty as architecture means: the technical design makes it *impossible* for any party other than the person to access their biological model without the person's active participation — local-first storage, end-to-end encryption, federated training that never transmits raw data, and cryptographic access control the platform operator cannot bypass. These are engineering commitments that hold even if the operator is acquired or changes its business model.

The Life Atlas platform implements sovereignty as architecture through four mechanisms:

1. **Local-first storage**: The biological model and all personal health data reside on the person's primary device. Cloud synchronisation is optional, encrypted end-to-end, and can be disabled without loss of core functionality.
2. **SQM on-device inference**: The real-time intelligence layer (SQM) runs entirely on the person's device. No health data is transmitted to cloud servers for real-time processing. The device may be offline for weeks without degradation of core functionality.
3. **Privacy-preserving LQM parameterisation**: When the person chooses to update their LQM parameters using cloud compute, the parameterisation protocol transmits only sufficient statistics — summary moments, likelihood evaluations, or parameter posteriors — never raw biological data. For population-level model improvement, the platform employs federated Bayesian inference: each device computes a local posterior over shared model parameters and transmits only the posterior summary, which the server aggregates without accessing individual data. This approach extends the variational federated multi-task learning framework of Corinzia et al. (2019) to the specific case of ODE-parameterised biological models, where the local posterior is computed over model kinetic parameters rather than neural network weights — a novel application that requires empirical validation of convergence properties under the non-IID data distributions characteristic of individual physiological phenotypes. The raw biological data never leaves the device. We note that posterior summaries from rare phenotypes may carry re-identification risk — a metabolic posterior from an unusual genetic variant could be effectively de-anonymised. Differential privacy mechanisms applied to posterior transmission is an architectural requirement for production deployment. We propose an epsilon-budget approach where each posterior transmission consumes a privacy budget quantum, with the total budget calibrated per user risk profile. The calibration protocol is designated as future work; the requirement is not.
4. **Portable exit**: All personal data — including the calibrated SQM coefficients — is exportable in open formats (FHIR R4, HL7 CDA, JSON-LD) that are readable without the Life Atlas platform. If the platform disappears, the person's biological model goes with them. We acknowledge that FHIR interoperability in practice remains incomplete due to profiling fragmentation and vendor-specific extensions; the portability claim assumes conformant implementations.

### 6.3 The GDPR as Technical Specification

The General Data Protection Regulation (EU 2016/679) establishes six principles for personal data processing (Article 5). We argue that these should be read not as legal constraints but as *technical requirements*: purpose limitation maps to user-defined SQM scope; data minimisation maps to outcome-justified collection; accuracy maps to continuous recalibration with honest confidence intervals; storage limitation maps to raw-data summarisation; integrity and confidentiality map to encryption and on-device processing. This reframing is consistent with the privacy-by-design principle (Cavoukian, 2009) and GDPR Article 25.

---

## 7. The SMILE Methodology: Impact First, Data Last

### 7.1 The Inverted Pyramid

The SMILE methodology — Sustainable Methodology for Impact Lifecycle Enablement (Waern, 2025a; 2025b; Waern, 2026c) — begins with a structural inversion of the conventional data-driven approach to digital technology. We note that SMILE has been developed and applied across digital twin engagements spanning construction, manufacturing, and biological systems (Waern, 2025a; 2025b), but independent external validation and critique of the methodology by other research groups remains an open gap; we invite the community to apply and assess the framework.

The conventional approach follows a bottom-up pyramid: *collect data → process data → generate information → extract insight → enable action → achieve outcome*. This approach is epistemologically appropriate for scientific discovery — where the goal is to learn what is true from observation — but it is systematically inappropriate for human-centred technology deployment, where the person's goal is an outcome (thriving, performance, recovery, longevity) and data is merely one input to achieving it.

The SMILE inverted pyramid reverses the order: *Outcome → Action → Insight → Information → Data*. Begin by defining the outcome the person wants — in WHO QoL terms, across all four domains. Work backward through the actions that would produce that outcome, the insights needed to choose those actions, the information needed to generate those insights, and finally the data needed to produce that information. Collect *only* the data required for the defined outcome. This inversion has three consequences:

1. **Data collection is justified, not assumed**: Every data collection request must be justified by a chain of inference from data through information through insight through action to outcome. Data collected without this chain is waste.
2. **The person's outcome, not the platform's data asset, is the design goal**: The platform is evaluated by whether the person achieves their defined outcome, not by the richness of the data it collects.
3. **The platform is replaceable**: Because data collection is defined by the outcome rather than by the platform's architecture, the data can be migrated to any platform that serves the same outcome. There is no proprietary data moat — and this is a feature, not a bug.

### 7.2 SMILE Phases Applied to the Personal Digital Twin

The six concentric phases of SMILE map onto the personal digital twin lifecycle:

**Phase 1 — Reality Emulation**: The person's current state is represented as comprehensively as possible. This is the *baseline twin*: a parameterised SQM that captures the person's current physiological state, psychological profile, social context, and environmental conditions. The baseline is established through a structured onboarding protocol — not by requiring the person to upload years of historical data, but by conducting a minimum viable assessment sufficient to initialise the SQM. This is the *Minimal Viable Twin* **[proposed term]**: the smallest model that captures the person's current state with sufficient fidelity to generate useful predictions.
*Transition criterion (1→2)*: The SQM produces at least one forward prediction (e.g., next-day fasting glucose) whose 95% prediction interval is narrower than the population-level interval for the same biomarker, validated against three consecutive observed values.

**Phase 2 — Concurrent Engineering**: The scope of the twin is expanded collaboratively. The person and the platform negotiate which aspects of their life are most important to model. A competitive athlete and a postmenopausal woman recovering from cancer treatment have radically different scopes. Concurrent engineering means that the model's boundaries are defined by the person's goals, not by the platform's data collection defaults.
*Transition criterion (2→3)*: The person has defined at least two cross-domain outcome goals (e.g., one physical, one psychological), and the SQM covers the causal pathways connecting them — verified by a non-empty directed path in the model's causal graph between the two domain variables.

**Phase 3 — Collective Intelligence**: The SQM is validated against observed outcomes. When the model predicts that reducing evening cortisol through a specific relaxation protocol will improve sleep quality by 18%, and the person observes a 15% improvement, the model is recalibrated. This feedback loop — prediction → action → observation → recalibration — is the core intelligence loop of the personal digital twin. It is also the mechanism through which the model becomes increasingly personalised over time.
*Transition criterion (3→4)*: The calibration loop has completed at least 10 prediction-observation cycles, and the model's mean absolute prediction error for the person's primary outcome variable has decreased by ≥ 20% relative to Phase 1 baseline.

**Phase 4 — Contextual Intelligence**: The twin becomes capable of contextual reasoning: "Given that you are travelling to Tokyo next week (environmental domain shift), your circadian model predicts a 4-day adaptation period; your metabolic model predicts increased insulin resistance during adaptation; your social model predicts reduced physical activity due to conference scheduling. Here is a protocol to minimise the impact across all three domains." This is the cross-domain integration that makes the personal twin qualitatively different from domain-specific health apps.
*Transition criterion (4→5)*: The twin has generated at least three context-triggered recommendations spanning two or more WHO QoL domains, and the person has rated ≥ 2 of 3 as actionable (binary accept/reject logged in the feedback system).

**Phase 5 — Continuous Intelligence**: The twin runs autonomously, updating in real time from the continuous sensor stream. The SQM recalibrates continuously; the LLM interface surfaces alerts and recommendations without requiring the person to check in. The twin is *proactive*, not reactive. It detects adverse trends before they become symptoms.
*Transition criterion (5→6)*: The twin has operated autonomously for ≥ 90 consecutive days with a false-positive alert rate below 15% (measured as alerts dismissed without action / total alerts surfaced), and the person has not manually overridden a model parameter in the most recent 30-day window.

**Phase 6 — Perpetual Wisdom**: The person's accumulated model becomes a knowledge asset — not for the platform, but for the person. Their calibrated SQM, refined over years of validated predictions, represents a form of personalised physiological knowledge that is irreplaceable. The model's history — including failed predictions, recalibrations, and the interventions that worked — is a record not just of data but of learning.

### 7.3 Ward and Daniel: Benefits-Driven Evaluation

Ward and Daniel (2006) argued that IT investment fails when organisations focus on technological capability rather than measurable business benefit. Their benefits management framework identifies five categories of benefit: financial, efficiency, effectiveness, service quality, and social/political. For a personal digital twin platform, the corresponding benefit categories are:

1. **Health outcomes**: measurable improvements in biomarkers, functional capacity, disease incidence, or longevity (analogous to financial benefit)
2. **Time efficiency**: reduction in unnecessary medical appointments, diagnostic delays, and treatment iterations (efficiency)
3. **Decision quality**: improvement in the quality of health decisions — better choices about diet, exercise, sleep, medication — measured by outcome variance reduction (effectiveness)
4. **Experience quality**: improvement in the person's subjective sense of health, agency, and comprehension of their own biology (service quality)
5. **Systemic effects**: reduction in population-level healthcare burden, improvement in health equity, and contribution to collective health knowledge (social/political)

Ward and Daniel (2006) also identified the most common failure mode: the failure to *change behaviour*. A system that provides perfect information but does not change what the person does is worthless. This is the Vitruvius venustas criterion in disguise: a system that people do not engage with cannot change their behaviour.

The Life Atlas platform is designed to be evaluated on benefits, not technical capability. The tiered access model aligns platform sustainability with delivered benefit: deeper biological simulation is available to those who derive measurable value from it, and the appropriate reference class for evaluating that value is the cost of preventable chronic disease — a framing that grounds the platform's evaluation in health economics rather than technology pricing.

---

## 8. Life Atlas: An Instantiation

### 8.1 Architecture Overview

The Life Atlas platform is an edge-native personal life operating system — not a healthcare application — designed to integrate all four WHO QoL domains into a single coherent model of the person. The platform is described here as an architectural position, not as a deployed product; its components are at various stages of development and validation.

The architecture has seven layers:

1. **Data Fabric**: Multi-modal ingestion from wearables (continuous glucose, HRV, activity, sleep), environmental sensors (air quality, noise, light), social signals (calendar, communication patterns), and periodic laboratory data. The data fabric is local-first; raw data resides on the person's device.

2. **SQM Layer (Edge)**: Compact physics-based models of the core biological subsystems relevant to the person's defined outcomes, running on-device with millisecond latency. SQMs are calibrated by the LQM layer and updated continuously from the data fabric.

3. **LQM Layer (Infrastructure)**: High-fidelity biological simulation engines for periodic deep parameterisation. The LQM layer is cloud-hosted but receives only sufficient statistics, likelihood evaluations, or parameter posteriors — never raw health data.

4. **Knowledge Graph**: A graph-database-backed ontological representation of the person's health state, relationships, and environment. The knowledge graph provides the semantic layer connecting the four WHO QoL domains; it is the boundary object in the Star and Griesemer sense — the shared representation that enables cross-domain reasoning.

5. **LPI (Life Programmable Interface)** **[proposed term]**: A sovereign consultation layer through which all intelligence requests are governed. The LPI implements five-stage AI governance through an AI governance guardrails framework: input sanitisation, intent classification, tool routing, output validation, and explainability annotation. All AI outputs are accompanied by source citations, confidence intervals, and the model that generated them. The LPI is the architectural implementation of the Vitruvius firmitas criterion.

6. **Agent Layer**: Specialised AI agents for each WHO QoL domain — physical health agent, psychological wellbeing agent, social context agent, environmental agent — plus a coordinating orchestrator that maintains the integrated picture. Agents use tool registries and schema registries to maintain structured, validated outputs.

7. **Interface Layer**: Conversational and visual interfaces powered by the LLM layer, presenting the twin's outputs in natural language and spatial/graphical form. The interface is the Vitruvius venustas layer.

The Life Atlas architecture can be understood through the lens of platform ecosystem theory (Tiwana, 2014; Gawer & Cusumano, 2014), where the LPI layer functions as the platform core that third-party developers extend. In Tiwana's (2014) framework, platform governance requires explicit decisions on three dimensions: *decision rights* (who decides what runs on the platform), *control mechanisms* (how quality and safety are enforced), and *pricing* (how value is distributed). For Life Atlas, the LPI implements governance through schema validation (all third-party agent outputs must conform to the platform's ontological schema), sandboxed execution (agents access only the data scopes the person has granted), and a graduated trust model where new agents operate in advisory-only mode until their outputs have been validated against the person's observed outcomes. The SMILE methodology (Waern, 2025a; 2025b; 2026c) governs how complementary innovations are integrated without compromising architectural coherence.

### 8.2 The Ontology as Shared Grammar

The platform's ontological foundation — the taxonomy of health concepts, relationships, and causal mechanisms — is derived from four sources: WHOQOL-BREF (WHO QoL domain structure), SNOMED CT (clinical terminology for health concepts), ICD-11 (disease and condition classification), and a platform-specific extension that models the four-domain interaction graph described in Section 2.2.

The proposed ontology is designed to be complementary to, not competitive with, the OMOP Common Data Model (Hripcsak et al., 2015), which provides the de facto standard for observational health data interoperability across 800+ institutions globally. Concretely, the platform maps clinical observations to OMOP CDM vocabulary concepts (condition_occurrence, measurement, drug_exposure) via standard concept IDs, while extending the graph with cross-domain relationship types (environment→physiology causal links, social→psychological mediation pathways) that fall outside OMOP's observational scope. This bridge architecture allows clinical data to flow bidirectionally between OMOP-conformant research networks and the personal twin's multi-domain graph without vocabulary translation loss. This ontology is open. It is published as a linked data vocabulary, readable by any system, and extensible by the research community. The ontology is the boundary infrastructure (Bowker & Star, 1999) of the platform — the invisible classification system that makes cross-domain reasoning possible.

### 8.3 EquestRai: The Biological Twin at Non-Human Scale

The Life Atlas architecture was first validated at non-human scale in the EquestRai platform — a biological digital twin for performance horses, currently in validation at an Australian stud farm (Waern, 2026b, manuscript in preparation). EquestRai deploys the same architectural stack — SQM on edge devices at the stable, LQM in cloud for deep parameterisation, LLM for trainer interface, knowledge graph for relationship modelling — but parameterised for equine physiology rather than human physiology.

EquestRai validates two architectural claims: the LQM/SQM/LLM separation is domain-agnostic (the same pattern works for equine and human metabolic modelling because the underlying physics is identical), and it provides an ethically simpler validation environment with more aggressive testing protocols. The deployment at Mulawa Estate (Australia) tests the edge-native architecture: local SQMs update from GPS, HRV, and activity sensors; the LQM parameterises from veterinary panels; trainers query individual horse readiness in natural language.

EquestRai is currently in early validation; quantitative benchmarks for prediction accuracy, parameterisation speed, and edge-deployment latency will be reported in the dedicated EquestRai publication (Waern, 2026b). The architectural claim under test — that physics-based model reduction preserves causal fidelity at edge-deployable latency, and that the LQM/SQM/LLM separation scales across biological domains — does not depend on specific performance numbers but on the structural separation of concerns: the SQM handles real-time inference on-device, the LQM handles periodic deep parameterisation in cloud, and the LLM handles communication without simulating biology. Transfer to human physiology requires separate parameterisation studies and clinical validation.

### 8.4 The Platform as Tool, Not Authority

A critical design constraint governs all Life Atlas capabilities: the platform is a tool, not an authority. This constraint operationalises the SMILE principle (Waern, 2026c) that humans are irreplaceable participants in the intelligence loop — and distinguishes the Life Atlas approach from the paternalistic design pattern common in clinical health systems.

In tool design, the system shows the person what is true — including the uncertainty — and supports them in deciding what to do. This has three practical consequences:

1. **Every AI output is overridable**: The person can reject any recommendation, and the system will record the rejection, attempt to understand the reason, and recalibrate the model accordingly. Rejection is not a failure mode; it is a data point.
2. **Uncertainty is always surfaced**: No output is presented without a confidence interval and a plain-language explanation of what the uncertainty means. "Your glucose is predicted to peak at 8.2 mmol/L ± 1.1 mmol/L in the next 45 minutes" is a useful output. "Your glucose will be 8.2 mmol/L" is a dangerous one.
3. **The person's definition of thriving governs**: The platform's objective function is defined by the person, not by a clinical norm. A 75-year-old who defines thriving as being able to walk his granddaughter to school every day has a different model objective than a 40-year-old competitive triathlete. The platform does not impose a universal health goal.

---

## 9. Governance, Ethics, and the NUDEDA Progression

### 9.1 AI Governance for Personal Health

The European AI Act (EU 2024/1689), which came into force in August 2024, classifies AI systems used for individual health decision support as high-risk (Annex III, Category 5). High-risk AI systems are subject to requirements including: risk management systems, data governance requirements, technical documentation, transparency toward users, human oversight measures, accuracy and robustness requirements. The Life Atlas platform, as a personal health AI, falls squarely within this classification.

We argue that the AI Act's requirements are not burdens but design specifications — the regulatory instantiation of Vitruvius firmitas. Specifically:

- **Human oversight measures** (Article 14): Operationalised through the LPI governance layer and the overridability principle described in Section 8.4.
- **Accuracy and robustness** (Article 15): Operationalised through the LQM/SQM separation — physics-based models with explicit parameterisation uncertainty, not black-box neural networks.
- **Transparency** (Article 13): Operationalised through the explainability annotation on all LPI outputs — every AI output surfaces its source, confidence interval, and model provenance.

The AI Act also requires, for high-risk systems, a conformity assessment before market deployment (Article 43). Beyond the AI Act, a personal health decision support platform may also qualify as Software as a Medical Device (SaMD) under the EU Medical Device Regulation (MDR 2017/745) or FDA's SaMD classification framework, depending on the specificity and clinical risk level of its outputs. If the platform's predictions influence clinical decisions (e.g., medication timing based on SQM glucose forecasting), regulatory classification as a Class IIa or higher medical device is likely. The regulatory pathway for platforms that span clinical and non-clinical wellness domains — where the same SQM may produce a clinically actionable output (medication timing) and a lifestyle suggestion (exercise scheduling) — remains an open regulatory design question that must be resolved before market deployment.

We propose that the appropriate conformity assessment for a personal biological twin is not a static pre-market test but a continuous validation protocol — the SMILE Phase 3 feedback loop (Waern, 2026c) applied to model accuracy — in which the platform's predictions are continuously compared against observed outcomes and the conformity assessment is updated accordingly.

### 9.2 The NUDEDA Progression for Personal Health Platforms

We extend the NUDEDA framework introduced in Waern (2026a) to the personal health domain. **[extended application of proposed framework]**

**NUDE** (Technology as Enabler): The person uses the platform as a health journal — logging data, reviewing trends, receiving generic recommendations. Most current health apps operate here.

**NUDED** (Technology as Digital DNA): The platform becomes constitutive of how the person understands their health. The biological model is the lens through which they understand their body; exercise, dietary, sleep, and social decisions are all mediated through the twin's contextual awareness.

**NUDEDA** (Autonomous by Design): The platform evolves within human-defined governance boundaries. SQMs recalibrate automatically; the orchestrating agent proactively surfaces insights. The twin anticipates needs — "your circadian model predicts a stress peak Thursday based on calendar and HRV patterns; recovery protocol scheduled" — within governance boundaries set in advance. The critical distinction from paternalistic automation is *governance by exception*: the autonomous system surfaces situations approaching a boundary for human review.

### 9.3 The Ethics Officer Principle

Floridi et al. (2018) proposed five principles for ethical AI: beneficence, non-maleficence, autonomy, justice, and explicability. We add a sixth, derived from the Sovereign Body framework: *inalienability* — the principle that the person's biological model, and the data that parameterises it, cannot be transferred, sold, or encumbered without their explicit, revocable consent. This is stronger than GDPR's portability right (Article 20), which grants the right to receive and transmit data but does not prevent the original holder from retaining a copy.

Inalienability, as we define it, means: if the person deletes their account, all their data and model parameters are deleted from all systems. The platform retains no copy. This is architecturally enforced, not merely promised. The implementation uses cryptographic deletion — the encryption key held only by the person's device is destroyed, rendering retained encrypted data irrecoverable.

We acknowledge that this principle conflicts with research interests. We propose *opt-in federated research*: the person may choose to contribute anonymised parameter posteriors (not raw data) to research consortia, with explicit purpose limitation, revocable consent, and transparent compensation. This differs from the current health research data model, which relies on consent to centralised data sharing — a consent model that Nissenbaum (2004) has argued is systematically inadequate for complex information flows.

---

## 10. Discussion: Implications and Future Directions

### 10.1 The Boundary Object Revisited

We began with Star and Griesemer's (1989) boundary object as a theoretical lens. Having developed the personal digital twin framework across nine sections, we return to assess the fit.

The personal digital twin satisfies the structural criteria for a boundary object: it is plastic enough to adapt to different professional contexts (the GP reads the physical domain summary; the psychologist reads the psychological domain; the environmental health officer reads the environmental domain) while robust enough to maintain a common identity (it is always *this person's* twin, with its provenance, its parameterisation history, and its validated accuracy record). Its interpretive flexibility (Pinch & Bijker, 1984) is not a weakness but a design feature: the same model can be interrogated from multiple professional perspectives without requiring those perspectives to agree.

Star (2010) herself cautioned that boundary objects lose their interpretive flexibility when standardised by powerful actors — a risk that applies directly to health platforms where clinical ontologies may override patient self-knowledge.

Callon's (1986) sociology of translation provides additional analytical precision. The personal digital twin instantiates all four moments of translation:

1. **Problematisation**: The platform defines the person's fragmented health data as a problem requiring integration — establishing itself as an *obligatory passage point* between the person and their own biological legibility. This is both the twin's value proposition and its power risk: by framing health as computationally legible, it may marginalise non-quantified dimensions of wellbeing.

2. **Interessement**: The twin enrolls heterogeneous actors — wearable manufacturers, clinical laboratories, environmental sensor networks — by providing each a structured interface (the LPI) through which their data becomes meaningful in context. Each actor's contribution is stabilised within the platform's ontological schema.

3. **Enrolment**: Through the SMILE methodology's phased progression (Waern, 2026c), the person and their professional communities negotiate roles within the twin's governance. The GP contributes clinical data under terms the person controls; the wearable contributes continuous data under terms the SQM schema defines. These negotiations are ongoing, not one-time — each SMILE phase transition represents a re-enrolment with expanded scope.

4. **Mobilisation**: The calibrated twin, once validated through Phase 3 feedback loops, becomes a spokesperson for the person's biology — representing them in clinical consultations, insurance assessments, or research participation. The Sovereign Body principle constrains this mobilisation: the twin speaks *for* the person only with their active consent, and the person retains unilateral veto.

This translation lens also reveals a limitation of the boundary object frame: Star and Griesemer's objects mediated between human communities. The personal digital twin mediates not only between communities but between the person and their future selves — between the person who makes a dietary choice today and the person whose metabolic state that choice produces in three months.

We further note that the WHO QoL framework itself may produce new forms of invisibility — health experiences that fall outside its four domains (spiritual wellbeing, existential meaning, culturally specific distress idioms) risk being erased rather than merely unmeasured. To address this, the knowledge graph employs an extensible ontology architecture: user-defined domain nodes and community-contributed ontology extensions allow health experiences outside the four WHO QoL domains to be encoded without requiring centralised schema modification. This is a design commitment to epistemic humility — the framework acknowledges that it cannot anticipate all dimensions of human wellbeing. The deeper risk of power entrenchment through boundary objects is addressed in Section 10.1.2.

### 10.1.1 Temporal Mediation and the Temporal Boundary Object

This temporal mediation has no clear precedent in the boundary object literature but finds theoretical grounding in Emirbayer and Mische's (1998) theory of temporal agency, which identifies three orientations operating simultaneously: the *iterational* (habitual repetition of past patterns), the *projective* (imaginative generation of future trajectories), and the *practical-evaluative* (contextual judgement in the present). Most health technologies address only one: electronic health records serve the iterational, monitoring dashboards serve the practical-evaluative, and risk calculators offer crude projective estimates.

The personal digital twin operates across all three simultaneously: it encodes iterational history (calibrated parameters reflecting years of data), computes projective trajectories (simulated futures under different interventions), and supports practical-evaluative judgement (real-time contextual recommendations). We propose that this tripartite temporal function constitutes a new category: the *temporal boundary object* **[proposed term]** — an artefact enabling a person to reason across temporal distance with the coherence that spatial boundary objects enable across disciplinary distance.

The temporal boundary object has structural properties analogous to Star and Griesemer's spatial boundary objects: it must be *plastic* enough to represent different temporal horizons (the next-hour glucose prediction and the ten-year cardiovascular risk trajectory are both valid readings of the same model) yet *robust* enough to maintain identity across those horizons. The twin's causal structure — the ODE system that connects present inputs to future states — provides this robustness. A statistical predictor that correlates present biomarkers with future risk does not qualify, because it provides no mechanism for understanding *how* the present produces the future.

### 10.1.2 Power Asymmetries and Interpretive Contestation

The Callon translation analysis (Section 10.1) reveals that the personal digital twin's role as obligatory passage point creates a power concentration that cannot be resolved by architectural sovereignty alone. Suchman (2007) showed how technologies configure their users, subtly constraining the roles people are permitted to play. If the twin's quantitative outputs carry the epistemic authority of physics, they may override the person's lived experience in clinical encounters — a dynamic that Jasanoff (2004) analyses as the co-production of scientific authority and social order, where quantified knowledge can displace experiential knowledge.

The Sovereign Body principle (Section 6) provides the architectural response, but governance must also include mechanisms for *interpretive contestation* that are practically accessible, not merely formally available. We propose three such mechanisms: (1) the twin must surface the uncertainty and limitations of its models as prominently as its predictions; (2) the person must be able to annotate model outputs with lived-experience counterpoints that are preserved in the knowledge graph; (3) professional users querying the twin must receive the person's annotations alongside model outputs — the twin mediates, but does not arbitrate.

### 10.2 Open Research Questions

The framework developed in this paper generates several empirically tractable research questions:

1. **Parameterisation fidelity**: What is the minimum dataset required to parameterise an SQM that is clinically useful? How does parameterisation error propagate through the model to output uncertainty? What are the practically important failure modes?

2. **Engagement and adherence**: Under what conditions do people maintain engagement with their personal digital twin over multi-year timescales? What are the Vitruvius venustas factors that predict long-term engagement?

3. **LQM-LLM interface**: How should the LLM interface layer be designed to communicate LQM uncertainty to lay users without either trivialising it (false precision) or overwhelming it (analysis paralysis)? What communication formats are most effective?

4. **Federated research governance**: What consent architectures are ethically adequate for federated health research using SQM parameter posteriors? How should compensation and purpose limitation be structured?

5. **Cross-domain interaction effects**: Which inter-domain interactions (physical-psychological, social-environmental, etc.) are sufficiently well-characterised to be encoded in LQM causal models, and which remain empirically open? What experiments would most efficiently close the key gaps?

### 10.3 Relationship to Existing Personal Health Digital Twin Efforts

Several research programmes have advanced complementary aspects. Topol (2019) argued for AI-augmented "deep medicine" but focused on clinical settings rather than sovereign personal use. Laubenbacher et al. (2022) demonstrated immune system digital twins simulating individual patient responses to immunotherapy — LQM-class modelling applied to personalised treatment. The NIH Bridge2AI programme (Bridge2AI Consortium, 2023) has invested in ethically sourced, AI-ready biomedical datasets addressing the data infrastructure prerequisite for population-scale twin parameterisation. These efforts validate the technical feasibility of components described here; our contribution lies in the architectural integration across all four WHO QoL domains, the edge-native sovereignty commitment, and the boundary object framing connecting technical and social dimensions.

Two European programmes deserve mention. The Virtual Physiological Human (VPH) programme has produced organ-level simulation capabilities representing state-of-the-art LQM-class modelling for clinical research (Hunter et al., 2013). The EU DigiTwins initiative has proposed an infrastructure roadmap for scaling digital twin technologies across European healthcare.

Table 1 summarises the architectural positioning of Life Atlas relative to these complementary efforts:

| Dimension | VPH (Hunter et al., 2013) | DigiTwins (EU) | Deep Medicine (Topol, 2019) | Bridge2AI (NIH, 2023) | **Life Atlas** |
|-----------|--------------------------|----------------|----------------------------|----------------------|----------------|
| **Primary scope** | Organ-level simulation | Healthcare infrastructure | Clinical AI augmentation | AI-ready datasets | Multi-domain life model |
| **WHO QoL coverage** | Physical only | Physical only | Physical + Psychological | Physical only | All four domains |
| **Intelligence regime** | LQM (physics) | Unspecified | LLM (statistical) | Data infrastructure | LQM/SQM/LLM stack |
| **Data sovereignty** | Institutional | Institutional | Provider-controlled | Consortium-governed | Edge-native, person-controlled |
| **Compute location** | HPC cluster | Cloud | Cloud | Cloud | Edge-first, cloud for LQM |
| **Boundary object function** | Research artefact | Policy artefact | Clinical tool | Research resource | Cross-domain life model |
| **Temporal orientation** | Simulation snapshots | Infrastructure roadmap | Diagnostic present | Historical datasets | Iterational + projective + evaluative |
| **Governance model** | Research ethics | EU institutional | Clinical governance | IRB + consent | Sovereign Body (architectural) |

These are complementary: VPH focuses on organ-level simulation fidelity; DigiTwins provides institutional infrastructure; Topol articulates the clinical vision; Bridge2AI addresses the data prerequisite. Life Atlas proposes what none addresses: an edge-native, sovereign, multi-domain integration layer spanning all four WHO QoL dimensions on the person's own devices, governed by the person rather than an institution.

---

## 11. Conclusion

This paper has argued for a specific vision of the personal digital twin: not a health tracker, not a clinical simulation, but a *sovereign life model* — a persistent, physics-informed, edge-native computational representation of the person across all four WHO Quality of Life dimensions, governed by the person, explained in human terms, and evaluated by measurable improvements in human flourishing.

The core theoretical contribution is the framing of the personal digital twin as a boundary-spanning object operating across disciplinary communities (as in Star and Griesemer's original formulation) and across time (our proposed temporal boundary object extension). The boundary object frame explains why the twin's value increases with the heterogeneity of the communities it connects — and why the WHO QoL ontological structure, which spans biological, psychological, social, and environmental domains, is not merely convenient but necessary.

The core technical argument is the LLM/LQM/SQM distinction: biology is governed by physics, not statistics, and the epistemologically appropriate intelligence regime for personal health modelling is physics-based simulation, not language model inference. LLMs have a legitimate and important role as communication and coordination layers; they must not be asked to simulate biology.

The core political argument is the Sovereign Body principle: data sovereignty over personal health data is not a regulatory compliance requirement but an architectural commitment. Sovereignty as architecture — local-first storage, on-device SQM inference, federated LQM parameterisation, cryptographic deletion, portable exit — is the only form of sovereignty that holds when commercial incentives change.

The work described here is a position paper, not a validated system. The Life Atlas platform is under active development. The LQM/SQM framework requires empirical parameterisation studies. The governance architecture requires legal review in multiple jurisdictions. The engagement hypotheses require longitudinal user research. We present these not as limitations that invalidate the framework but as the research agenda that the framework generates.

We began with the observation that patient-specific cardiac twins can reveal dynamics invisible to conventional clinical assessment. We close with a different image: a person, fifty years old, sitting at a kitchen table in the early morning, reviewing their twin's overnight summary — sleep staging, HRV trend, glucose trajectory, the social calendar for the week, the air quality forecast — and making a breakfast choice with the full context of what that choice means for their body, their mind, and their life. That is the sovereign body. That is the personal digital twin, operating as intended.

---

## Acknowledgements

The author thanks the WINNIIO AB team and the EquestRai collaboration partners for technical discussions informing the architecture described in this paper. The SMILE methodology (Waern, 2025a; 2025b; 2026c) was developed across a decade of digital twin deployments in construction, manufacturing, and biological systems; the insights from those deployments are the empirical foundation of the framework presented here. This work was supported by WINNIIO AB internal research funding.

---

## References

Achiam, J., Adler, S., Agarwal, S., Ahmad, L., Akkaya, I., Aleman, F. L., ... & Zoph, B. (2023). GPT-4 technical report. *arXiv preprint arXiv:2303.08774*.

Antoulas, A. C. (2005). *Approximation of Large-Scale Dynamical Systems*. SIAM. https://doi.org/10.1137/1.9780898718713

Bauer, P., Stevens, B., & Hazeleger, W. (2021). A digital twin of Earth for the green transition. *Nature Climate Change*, 11(2), 80–83. https://doi.org/10.1038/s41558-021-00986-y

Björnsson, B., Borrebaeck, C., Elander, N., Gasslander, T., Gawel, D. R., Gustafsson, M., ... & Stenvall, M. (2020). Digital twins to personalize medicine. *Genome Medicine*, 12(1), 1–4. https://doi.org/10.1186/s13073-019-0701-3

Bowker, G. C., & Star, S. L. (1999). *Sorting Things Out: Classification and Its Consequences*. MIT Press.

Bridge2AI Consortium. (2023). Bridge2AI: Generating new biomedical datasets for artificial intelligence. *National Institutes of Health Common Fund*. https://bridge2ai.org

Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J. D., Dhariwal, P., ... & Amodei, D. (2020). Language models are few-shot learners. *Advances in Neural Information Processing Systems*, 33, 1877–1901.

Calderón-Garcidueñas, L., Torres-Jardón, R., Franco-Lira, M., Mora-Tiscareño, A., Peña-Cruz, B., Zhu, H., ... & D'Angiulli, A. (2021). Environmental nanoparticles, SARS-CoV-2 brain involvement, and potential acceleration of Alzheimer's and Parkinson's diseases in young urbanites exposed to air pollution. *Journal of Alzheimer's Disease*, 78(2), 379–407. https://doi.org/10.3233/JAD-201386

Carlile, P. R. (2002). A pragmatic view of knowledge and boundaries: Boundary objects in new product development. *Organization Science*, 13(4), 442–455. https://doi.org/10.1287/orsc.13.4.442.2953

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, Action and Belief: A New Sociology of Knowledge?* (pp. 196–233). Routledge & Kegan Paul.

Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*. Information and Privacy Commissioner of Ontario. https://www.ipc.on.ca/wp-content/uploads/Resources/7foundationalprinciples.pdf

Cedersund, G., & Roll, J. (2009). Systems biology: Model based evaluation and comparison of potential explanations for given biological data. *The FEBS Journal*, 276(4), 903–922. https://doi.org/10.1111/j.1742-4658.2008.06845.x

Cedersund, G., Johansson, Å., Schilcher, J., & Nyman, E. (2021). Systems biology and digital twins in medicine: The case of glucose regulation. *Journal of Internal Medicine*, 290(5), 1064–1079. https://doi.org/10.1111/joim.13337

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128–152. https://doi.org/10.2307/2393553

Corinzia, L., Beuret, A., & Buhmann, J. M. (2019). Variational federated multi-task learning. *arXiv preprint arXiv:1906.06268*.

Corral-Acero, J., Margara, F., Marciniak, M., Rodero, C., Loncaric, F., Feng, Y., ... & Lamata, P. (2020). The "Digital Twin" to enable the vision of precision cardiology. *European Heart Journal*, 41(48), 4556–4564. https://doi.org/10.1093/eurheartj/ehaa159

Dix, A., Finlay, J., Abowd, G. D., & Beale, R. (2003). *Human-Computer Interaction* (3rd ed.). Pearson Education.

Eastman, C., Teicholz, P., Sacks, R., & Liston, K. (2011). *BIM Handbook: A Guide to Building Information Modeling for Owners, Managers, Designers, Engineers and Contractors* (2nd ed.). Wiley.

Emirbayer, M., & Mische, A. (1998). What is agency? *American Journal of Sociology*, 103(4), 962–1023. https://doi.org/10.1086/231294

Erdemir, A., McLean, S., Herzog, W., & van den Bogert, A. J. (2007). Model-based estimation of muscle forces exerted during movements. *Clinical Biomechanics*, 22(2), 131–154. https://doi.org/10.1016/j.clinbiomech.2006.09.005

EU. (2016). Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data (General Data Protection Regulation). *Official Journal of the European Union*, L 119, 1–88.

EU. (2017). Regulation (EU) 2017/745 of the European Parliament and of the Council of 5 April 2017 on medical devices (Medical Device Regulation). *Official Journal of the European Union*, L 117, 1–175.

EU. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, L, 1689.

Gawer, A., & Cusumano, M. A. (2014). Industry platforms and ecosystem innovation. *Journal of Product Innovation Management*, 31(3), 417–433. https://doi.org/10.1111/jpim.12105

Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., ... & Vayena, E. (2018). An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. *Minds and Machines*, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5

Grieves, M. (2014). *Digital Twin: Manufacturing Excellence through Virtual Factory Replication*. White Paper. https://www.researchgate.net/publication/275211047

Hagström, H., Simonsson, O., Kamp, B., & Cedersund, G. (2022). A human whole-body mathematical model of the glucose-insulin system with feedback to the liver and pancreatic functions. *npj Systems Biology and Applications*, 8, 54. https://doi.org/10.1038/s41540-022-00260-7

Hripcsak, G., Duke, J. D., Shah, N. H., Reich, C. G., Huser, V., Schuemie, M. J., ... & Ryan, P. B. (2015). Observational Health Data Sciences and Informatics (OHDSI): Opportunities for observational researchers. *Studies in Health Technology and Informatics*, 216, 574–578. https://doi.org/10.3233/978-1-61499-564-7-574

Hunter, P., Chapman, T., Coveney, P. V., de Bono, B., Diaz, V., Fenner, J., ... & Viceconti, M. (2013). A vision and strategy for the virtual physiological human: 2012 update. *Interface Focus*, 3(2), 20130004. https://doi.org/10.1098/rsfs.2013.0004

Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the knowledge in a neural network. *arXiv preprint arXiv:1503.02531*.

Holt-Lunstad, J., Smith, T. B., Baker, M., Harris, T., & Stephenson, D. (2015). Loneliness and social isolation as risk factors for mortality: A meta-analytic review. *Perspectives on Psychological Science*, 10(2), 227–237. https://doi.org/10.1177/1745691614568352

Kiecolt-Glaser, J. K., McGuire, L., Robles, T. F., & Glaser, R. (2002). Emotions, morbidity, and mortality: New perspectives from psychoneuroimmunology. *Annual Review of Psychology*, 53, 83–107. https://doi.org/10.1146/annurev.psych.53.100901.135217

Jasanoff, S. (2004). The idiom of co-production. In S. Jasanoff (Ed.), *States of Knowledge: The Co-Production of Science and the Social Order* (pp. 1–12). Routledge.

Laubenbacher, R., Niarakis, A., Helikar, T., An, G., Shapiro, B., Malik-Sheriff, R. S., ... & Glazier, J. A. (2022). Building digital twins of the human immune system: Toward a roadmap. *npj Digital Medicine*, 5(1), 64. https://doi.org/10.1038/s41746-022-00610-z

Livingston, G., Huntley, J., Sommerlad, A., Ames, D., Ballard, C., Banerjee, S., ... & Mukadam, N. (2020). Dementia prevention, intervention, and care: 2020 report of the Lancet Commission. *The Lancet*, 396(10248), 413–446. https://doi.org/10.1016/S0140-6736(20)30367-6

Leloup, J. C., & Goldbeter, A. (2003). Toward a detailed computational model for the mammalian circadian clock. *Proceedings of the National Academy of Sciences*, 100(12), 7051–7056. https://doi.org/10.1073/pnas.1132112100

Niederer, S. A., Aboelkassem, Y., Cantwell, C. D., Corrado, C., Coveney, S., Cherry, E. M., ... & Zhang, Y. (2020). Creation and application of virtual patient cohorts of heart models. *Philosophical Transactions of the Royal Society A*, 378(2173), 20190558. https://doi.org/10.1098/rsta.2019.0558

Nissenbaum, H. (2004). Privacy as contextual integrity. *Washington Law Review*, 79(1), 119–157.

Pallasmaa, J. (2005). *The Eyes of the Skin: Architecture and the Senses*. Wiley-Academy.

Pinch, T. J., & Bijker, W. E. (1984). The social construction of facts and artefacts: Or how the sociology of science and the sociology of technology might benefit each other. *Social Studies of Science*, 14(3), 399–441. https://doi.org/10.1177/030631284014003004

Scruton, R. (1979). *The Aesthetics of Architecture*. Princeton University Press.

Shanafelt, T. D., Dyrbye, L. N., Sinsky, C., Hasan, O., Satele, D., Sloan, J., & West, C. P. (2016). Relationship between clerical burden and characteristics of the electronic environment with physician burnout and professional satisfaction. *Mayo Clinic Proceedings*, 91(7), 836–848. https://doi.org/10.1016/j.mayocp.2016.05.007

Sheiner, L. B., & Steimer, J. L. (2000). Pharmacokinetic/pharmacodynamic modeling in drug development. *Annual Review of Pharmacology and Toxicology*, 40, 67–95. https://doi.org/10.1146/annurev.pharmtox.40.1.67

Suchman, L. (2007). *Human-Machine Reconfigurations: Plans and Situated Actions* (2nd ed.). Cambridge University Press.

Star, S. L. (2010). This is not a boundary object: Reflections on the origin of a concept. *Science, Technology, & Human Values*, 35(5), 601–617. https://doi.org/10.1177/0162243909345838

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, 19(3), 387–420. https://doi.org/10.1177/030631289019003001

Tiwana, A. (2014). *Platform Ecosystems: Aligning Architecture, Governance, and Strategy*. Morgan Kaufmann.

Topol, E. J. (2019). *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*. Basic Books.

Van Cauter, E., Spiegel, K., Tasali, E., & Leproult, R. (2008). Metabolic consequences of sleep and sleep loss. *Sleep Medicine*, 9(Suppl 1), S23–S28. https://doi.org/10.1016/S1389-9457(08)70013-3

Vitruvius Pollio, M. (ca. 25 BCE). *De Architectura*. (M. H. Morgan, Trans., 1914). Harvard University Press.


Ward, J., & Daniel, E. (2006). *Benefits Management: Delivering Value from IS & IT Investments*. Wiley.

Waern, N. (2025a). From One Room to Fifty: Orchestrating Explainable AI, Resilience, and Contextual Interoperability in the Built Environment. WINNIIO AB. Zenodo. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). Beyond the Shadows — Contextual Awakening, Federated Learning, and the Realization of Reality through Digital Twins. WINNIIO AB. Zenodo. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026c). SMILE v5.0: Sustainable Methodology for Impact Lifecycle Enablement. WINNIIO AB. Zenodo. https://doi.org/10.5281/zenodo.20175406

Waern, N. (2026a). Indexing Reality: Boundary-Spanning Objects, Automated Scene Creation, and the Convergence of Spatial Intelligence with RF Digital Twins. WINNIIO AB. Zenodo. https://doi.org/10.5281/zenodo.19587944

Waern, N. (2026b). *EquestRai: Edge-Native Biological Digital Twins for Performance Horse Management*. Manuscript in preparation. WINNIIO AB.

WHOQOL Group. (1995). The World Health Organization Quality of Life assessment (WHOQOL): Position paper from the World Health Organization. *Social Science & Medicine*, 41(10), 1403–1409. https://doi.org/10.1016/0277-9536(95)00112-K

WHOQOL Group. (1998). Development of the World Health Organization WHOQOL-BREF quality of life assessment. *Psychological Medicine*, 28(3), 551–558. https://doi.org/10.1017/S0033291798006667

Zuboff, S. (2019). *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power*. PublicAffairs.

---

## Appendix A: SMILE Phase-to-QoL Domain Mapping

| SMILE Phase | Primary QoL Domain | Key Data Sources | Intelligence Regime |
|-------------|-------------------|------------------|---------------------|
| 1. Reality Emulation | All (baseline) | Onboarding assessment, baseline labs, device pairing | LQM (parameterisation) |
| 2. Concurrent Engineering | User-defined | Goal elicitation, domain prioritisation | LLM (dialogue) |
| 3. Collective Intelligence | Physical, Psychological | Continuous wearable data, outcome logging | SQM (calibration loop) |
| 4. Contextual Intelligence | Social, Environmental | Calendar, location, air quality, communication patterns | SQM + LLM (integration) |
| 5. Continuous Intelligence | All (integrated) | Full sensor stream, federated updates | SQM (autonomous) |
| 6. Perpetual Wisdom | All (longitudinal) | Multi-year model history, prediction accuracy record | LQM (deep recalibration) |

## Appendix B: Novel Terminology Introduced in This Paper

The following terms are introduced in this paper as proposed contributions. They are not established terms in the literature. The author invites critique, alternative framings, and empirical investigation of the concepts they represent.

| Term | Definition | Section |
|------|-----------|---------|
| Large Quantitative Model (LQM) | A physics-based computational engine that simulates biological or physical systems through mathematical equations derived from first principles, not trained from statistical correlations. | 5.2 |
| Small Quantitative Model (SQM) | A compact, edge-deployable physics model derived from an LQM through validated model reduction, preserving causal structure while achieving millisecond latency on personal devices. | 5.2 |
| Sovereign Body | A design principle and architectural commitment in which a person's biological model and health data are stored locally, processed on-device, cryptographically protected from third-party access, and portable without loss of model fidelity. | 6.1 |
| Minimal Viable Twin | The smallest parameterised SQM that captures a person's current physiological state with sufficient fidelity to generate useful predictions, suitable as the starting point for the SMILE Phase 1 onboarding protocol. | 7.2 |
| Temporal Boundary Object | An artefact that enables a person (or community) to reason coherently across temporal distance — connecting present decisions to future states — with the same functional properties that spatial boundary objects enable reasoning across geographic or disciplinary distance. | 10.1 |
| Vitruvius Test | An acceptance criterion for platform features that requires simultaneous satisfaction of firmitas (technically sound and safe), utilitas (serves a defined human need), and venustas (genuinely engaging and appealing). | 4.2 |
| Life Programmable Interface (LPI) | The sovereign consultation layer through which all AI intelligence requests in the Life Atlas platform are governed — implementing five-stage governance (input sanitisation, intent classification, tool routing, output validation, explainability annotation) and serving as the architectural implementation of firmitas. | 8.1 |

---

*This paper is published under a Creative Commons Attribution 4.0 International (CC-BY-4.0) licence. You are free to share and adapt this material for any purpose, provided you give appropriate credit, provide a link to the licence, and indicate if changes were made.*

*Licence URL: https://creativecommons.org/licenses/by/4.0/*
