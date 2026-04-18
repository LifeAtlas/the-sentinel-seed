---
title: "Robots Will Do Every Human Factory Job in 2 Years: What Pharma Standards Mean for the Transition"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: factory automation, robotics, pharmaceutical manufacturing, digital twin, labour displacement, Actor-Network Theory, actant substitution, pharma standards, edge computing, personalised medicine manufacturing, labour economics, technology transition, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# Robots Will Do Every Human Factory Job in 2 Years: What Pharma Standards Mean for the Transition

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

A 61-minute discussion between a pharmaceutical regulatory veteran, a robotics engineering practitioner, and a DT platform developer produced a provocation that structures this paper: full automation of every human factory job within two years. This claim, made in the context of pharma manufacturing standards and edge computing deployment, is analytically useful not because it is literally accurate but because it forces precision about what "factory job" means, what "automation" means, and what the regulatory and standards infrastructure must look like for an automated manufacturing environment to be compliant, safe, and governable. Drawing on Actor-Network Theory, we frame the automation transition as an actant substitution event: human actants performing physical and cognitive manufacturing tasks are progressively replaced by robotic and AI actants, but the network of standards, regulatory requirements, validation protocols, and quality management obligations that stabilises pharmaceutical manufacturing does not disappear — it is rewritten to accommodate the new actants. We argue that this rewriting is the central challenge of the automation transition, and that organisations that invest in the standards infrastructure for automated manufacturing will define the regulatory landscape that all subsequent entrants must navigate. We examine the specific demands of personalised medicine manufacturing — where batch sizes may be a single dose and manufacturing parameters must be patient-specific — as a case where automation is not merely economically attractive but physically necessary. Two falsifiable propositions are stated regarding automation adoption timelines and regulatory compliance infrastructure readiness. Counter-arguments engaging labour economics and regulatory friction are addressed.

**Keywords:** factory automation, robotics, pharmaceutical manufacturing, digital twin, labour displacement, Actor-Network Theory, actant substitution, pharma standards, edge computing, personalised medicine manufacturing, labour economics, technology transition, design science research, SMILE methodology

---

## 1. Introduction: The Two-Year Claim as Analytical Provocation

"Robots will do every human factory job within two years." The claim, made in the context of a practical discussion about pharmaceutical manufacturing standards and robotics deployment, is analytically useful not because it should be taken literally but because it forces a set of questions that comfortable, hedged projections avoid. What exactly are the human factory jobs that are being automated? What does it mean to say a job is done by a robot rather than a human? What happens to the regulatory and standards infrastructure that was designed assuming humans are performing those jobs? And what is the specific contribution of pharmaceutical manufacturing standards to the transition — are they accelerators or barriers?

The discussion that grounds this paper was 61 minutes in duration and brought together three distinct expert perspectives: a pharmaceutical regulatory veteran with decades of experience in manufacturing compliance and standards bodies; a robotics engineering practitioner with deployment experience in automated manufacturing cells; and a DT platform developer whose platform spans both physical manufacturing control and quality management systems integration. The combination produced a conversation that moved fluidly between the practical constraints of robot deployment and the regulatory requirements of pharmaceutical manufacturing, and that generated the two-year automation claim as a provocation designed to test the limits of regulatory and technical readiness.

This paper takes the claim seriously as an analytical structure — not as a prediction to be confirmed or refuted, but as a forcing function for understanding what the transition requires. The transition is framed through Actor-Network Theory (ANT): automation is an actant substitution event in which the network of manufacturing actants is reconfigured, and the standards and regulatory infrastructure must be rewritten to accommodate the new configuration.

---

## 2. Theoretical Framework

### 2.1 ANT and Actant Substitution

In ANT, actants are any entities — human or non-human — that make a difference to a network's behaviour [1][2]. A manufacturing facility is an actor-network in which human workers, robotic systems, measurement instruments, standard operating procedures, quality management systems, regulatory requirements, and physical materials are all actants that stabilise each other's roles through mutual inscription.

Automation is an actant substitution event: human actants performing specific manufacturing tasks are replaced by robotic or AI actants. The substitution is never total in a single step; it proceeds by task rather than by job. The first substitution is typically for tasks that are physically repetitive, dimensionally precise, and well-defined in terms of input-output specification — welding, pick-and-place, material handling. Later substitutions address tasks with more contextual judgment requirements — quality inspection, process parameter adjustment, exception handling.

The critical ANT insight is that actant substitution does not dissolve the network; it requires the network to be restabilised around the new actants. The standard operating procedure that was written for a human operator executing a manual task must be rewritten for a robotic system executing the same task — and the rewritten procedure must satisfy the same regulatory requirements that the human-operator procedure satisfied, plus additional requirements specific to robotic systems (validation of robotic performance, management of robotic failure modes, maintenance of audit trails for automated decisions).

### 2.2 The Regulatory Network as Stabilising Infrastructure

Pharmaceutical manufacturing is governed by a dense regulatory network that stabilises the industry's actants in specific configurations. Good Manufacturing Practice (GMP) requirements [3], electronic records and signatures requirements [4], validation and qualification frameworks, and product-specific manufacturing authorisations collectively constitute a regulatory actor-network that has been developed over decades, primarily around the assumption that humans are performing the regulated activities.

This regulatory network is not an obstacle to automation; it is the infrastructure within which automation must occur. The regulatory network's inscriptions — who is responsible for each manufacturing step, how decisions are documented, how deviations are managed, how quality is assured — must be rewritten to accommodate robotic actants without losing the regulatory protections that the network was designed to provide.

The organisations and standards bodies that lead this rewriting will define the regulatory landscape for automated pharmaceutical manufacturing. This is not a neutral technical exercise; it is a power-forming process in which early participants establish the inscriptions that subsequent entrants must adopt.

### 2.3 Labour Economics as Network Effect

The labour economics of manufacturing automation are well-documented in aggregate [5][6][7]: automation displaces routine tasks, suppresses wages for routine workers, and increases productivity and wages for complementary skilled workers and managers. Graetz and Michaels (2018) estimate that one additional industrial robot per thousand workers raised annual GDP growth by approximately 0.37 percentage points across 17 countries, while reducing employment shares and wages for lower-skilled manufacturing workers [7]. The pharmaceutical manufacturing context adds regulatory complexity to this economic picture: the cost of automation in pharmaceutical manufacturing includes not only capital expenditure on robotic systems but validation costs, regulatory submission costs, and the cost of transitioning quality management systems from human-operator to automated-system documentation models.

These validation and regulatory costs are the primary reason pharmaceutical manufacturing automation has proceeded more slowly than manufacturing automation in non-regulated industries. A robot deployment in an automotive assembly plant requires engineering validation but not regulatory submission; the equivalent deployment in a pharmaceutical manufacturing environment may require a significant regulatory filing and inspection. The two-year timeline claim's most important analytical challenge is not whether robot hardware can perform manufacturing tasks — it largely can for the routine task categories that constitute the majority of direct manufacturing labour — but whether the regulatory infrastructure can process the wave of automation validations and submissions at the speed required. This paper treats the claim as a forcing function for that analysis, not as an empirical prediction to be confirmed or refuted.

### 2.4 SMILE Applied to Automation Transition Design

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a pharmaceutical manufacturing environment in which the majority of direct manufacturing labour is performed by human operatives working within GMP frameworks designed for human-executed processes. The to-be state is a manufacturing environment in which robotic and AI actants perform the majority of manufacturing tasks, validated under a regulatory framework that was developed jointly by industry and regulators to accommodate automated manufacturing. Every investment in standards infrastructure development, automation validation methodology, and regulatory framework evolution is evaluated against the impact on closing this transition gap.

---

## 3. What "Every Factory Job" Actually Means

### 3.1 The Task-Job Distinction

The two-year automation claim conflates jobs with tasks in a way that is productively ambiguous. Human factory workers do not perform single tasks; they perform constellations of tasks, many of which have different automation readiness profiles. A pharmaceutical manufacturing technician's job may include: loading materials into process equipment (high automation readiness), monitoring process parameters and intervening in deviations (medium automation readiness), sampling for quality testing (medium-high readiness), documenting batch records (high readiness for routine entries, low readiness for deviation investigations), and managing unexpected exceptions — equipment failures, supply anomalies, environmental excursions — that require contextual judgment (currently low readiness for robotic systems).

The two-year claim is most defensible if interpreted as: the technology exists or will exist within two years to automate the majority of routine manufacturing tasks in most pharmaceutical manufacturing environments. The human factory job is not eliminated; it is transformed — the remaining human role is concentrated in exception management, system oversight, validation and qualification activities, and the judgment-intensive tasks that robotic systems cannot yet reliably perform.

This transformation is not economically neutral. A job that is 80% routine and 20% judgment-intensive, when the routine component is automated, becomes a job that is 100% judgment-intensive — requiring a different skill profile that may not match the existing workforce. This is the labour displacement mechanism that the discussion addressed: not elimination of all human roles but radical transformation of what human factory workers do.

### 3.2 The Personalised Medicine Manufacturing Case

Personalised medicine manufacturing is the case where automation is not merely economically attractive but physically necessary. Cell and gene therapies, patient-specific pharmaceutical formulations, and personalised medical devices require manufacturing processes in which batch size may be a single unit, manufacturing parameters must be patient-specific, and the manufacturing timeline is determined by clinical need rather than production planning schedules.

Human-executed manufacturing processes are incompatible with these requirements at scale: the variability in human execution that is acceptable for large-batch manufacturing, where process capability can be statistically established across thousands of units, is not acceptable for single-unit manufacturing where every deviation from specification is a failure for that patient. The process consistency required for personalised medicine manufacturing can only be reliably achieved by automated systems whose performance has been characterised and validated to the required specification.

This creates a regulatory and quality paradox: personalised medicine manufacturing has the highest validation requirements (single-unit processes, patient-specific parameters, catastrophic consequences of manufacturing error) and simultaneously requires automation to achieve the process consistency that those validation requirements demand. The standards infrastructure for automated personalised medicine manufacturing is therefore not a future concern; it is an immediate requirement for the clinical translation of personalised therapies.

### 3.3 Edge Computing as Manufacturing Infrastructure

The discussion's third major theme was edge computing as manufacturing infrastructure — the deployment of computational capability at the manufacturing cell level rather than in centralised data centres. This is architecturally significant for automation in ways that extend beyond latency optimisation, and it directly bears on the two-year timeline claim: the regulatory data governance constraints in pharmaceutical manufacturing make cloud-dependent automation architectures problematic, meaning that edge-native deployment readiness is a precondition for the timeline claim, not a peripheral consideration.

Pharmaceutical manufacturing environments impose data governance requirements that make cloud-dependent automation architectures problematic: patient data, manufacturing batch records, and process parameters may all have residency requirements or confidentiality requirements that make external cloud processing inappropriate for primary process control. An automated manufacturing cell that depends on cloud connectivity for process control decisions is also operationally fragile: loss of connectivity must not translate to manufacturing stoppage or uncontrolled process excursion.

Edge-native manufacturing control architecture — where the robotic control system, the process monitoring system, and the batch record system all operate on hardware physically located in the manufacturing environment — satisfies both the data governance requirements and the operational resilience requirements. Following Waern (2025b, DOI: 10.5281/zenodo.17464804), edge-native architecture is not a cost-reduction choice; it is a sovereignty and resilience requirement for manufacturing environments with data governance obligations.

---

## 4. What Pharma Standards Must Do for the Transition

### 4.1 Rewriting GMP for Automated Actants

Current GMP frameworks were written around human actants performing regulated activities. The framework assigns responsibility to qualified persons, requires human oversight of critical process steps, and defines documentation requirements in terms of human-executed records and signatures. These inscriptions are not wrong; they were appropriate for the actor-network they were designed to govern.

The automation transition requires rewriting these inscriptions for robotic actants: defining what "oversight" means when the primary actant is a robotic system; specifying how responsibility is assigned when a manufacturing decision is made by an AI system rather than a qualified person; and defining the documentation requirements for automated batch records that are generated by the manufacturing system rather than completed by human operators.

This rewriting is not merely administrative. It requires regulatory bodies to agree on the standards for automated manufacturing that they will apply in inspections and submissions. The organisations that engage most actively in the standards development process will shape the regulatory framework in ways that reflect their automation architectures — creating de facto standards that advantage their implementations and impose costs on competitors whose architectures differ.

### 4.2 Validation Methodology for Adaptive Robotic Systems

Current pharmaceutical manufacturing validation methodology — installation qualification, operational qualification, performance qualification — was designed for static systems with fixed parameter ranges. Adaptive robotic systems that modify their behaviour based on process feedback, AI systems that continuously update their process models, and autonomous exception management systems are not amenable to the same validation approach: their behaviour is not fully characterised by a fixed parameter range and cannot be validated through a finite set of qualification experiments.

New validation methodology is needed for adaptive systems: statistical validation approaches that characterise the distribution of system behaviour rather than fixed parameter acceptance criteria; continuous monitoring approaches that detect performance drift; and exception management validation that characterises how the system responds to the range of anomalous conditions it may encounter.

The regulatory framework for adaptive system validation is underdeveloped. The two-year automation timeline claim's most serious challenge is not technological readiness but regulatory readiness: the validation methodology and the regulatory framework for adaptive automated manufacturing systems do not yet exist at a maturity level that would support rapid widespread deployment.

### 4.3 The Digital Twin as Regulatory Evidence

Manufacturing DT — continuously updated models of physical manufacturing processes that reflect actual process performance rather than design intent — provides a new category of regulatory evidence. A manufacturing DT that accurately models a production process can be used to demonstrate process understanding, to justify process parameter adjustments without full revalidation, and to provide a basis for prospective validation of process changes.

The regulatory acceptance of manufacturing DT as evidence is still developing. The discussion highlighted the tension between the potential of DT-based regulatory evidence — which could dramatically reduce the validation burden for automated manufacturing transitions — and the conservatism of regulatory frameworks that have not yet established acceptance criteria for DT-based submissions.

---

## 5. Counter-Arguments

### 5.1 The Regulatory Friction Counter-Argument

The most substantive counter-argument holds that the two-year timeline is not merely aspirational but actively obstructed by regulatory friction: the validation costs, submission timelines, and inspection requirements for pharmaceutical manufacturing automation are so substantial that no amount of technological readiness can produce full factory automation within two years at an industry scale.

This counter-argument is correct as a description of the current situation and wrong as a constraint on the possible. Regulatory frameworks are not physical laws; they are actor-networks that can be reconfigured through the same translation processes that reconfigure technical networks. The regulatory bodies that govern pharmaceutical manufacturing have, historically, evolved their frameworks to accommodate technological change — electronic batch records, process analytical technology, continuous manufacturing — in each case through a period of intense stakeholder engagement, pilot implementation, and regulatory guidance development.

The regulatory framework evolution for automated manufacturing is occurring now. The timeline for that evolution is not fixed; it depends on how actively industry, regulators, and standards bodies invest in developing the required guidance. The two-year claim, interpreted as a forcing function for that investment rather than as a literal timeline prediction, is a useful provocation.

### 5.2 The Complexity Counter-Argument

A second counter-argument holds that pharmaceutical manufacturing is more complex than the automation framing acknowledges: the variety of manufacturing processes, the product-specific nature of manufacturing parameters, and the requirement for human judgment in managing the full range of manufacturing exceptions make comprehensive automation significantly more difficult than automation in less regulated and more standardised manufacturing environments.

This counter-argument is partially correct but undersells the state of automation technology. The challenge is not the automation of individual manufacturing tasks — these are largely solved — but the integration of automated systems into the GMP quality management framework and the validation of those integrations at the required regulatory standard. This is precisely the area where pharmaceutical standards bodies can accelerate the transition.

---

## 6. Falsifiable Propositions

1. **The validation infrastructure proposition:** Pharmaceutical manufacturing organisations that invest in developing and publishing automated manufacturing validation methodology — specifically, validation approaches for adaptive robotic systems and AI-based process control — will achieve first-in-class regulatory submissions for fully automated manufacturing lines at least 18 months ahead of organisations that wait for regulatory guidance to be published before developing their validation approaches, as measured by manufacturing authorisation dates for comparable process automation implementations. This proposition can be falsified by a comparative study showing no significant timing advantage for organisations that develop validation methodology in advance of regulatory guidance.

2. **The personalised medicine manufacturing proposition:** Cell and gene therapy manufacturing processes that achieve commercially viable yields at single-unit batch scales will, within 36 months of clinical approval, be deployed exclusively using automated manufacturing platforms — not because regulation requires automation but because human-executed manufacturing cannot achieve the process consistency required at single-unit scale. This proposition can be falsified by a documented case of commercially scaled single-unit pharmaceutical manufacturing achieving regulatory-compliant process consistency using primarily human-executed manufacturing processes.

---

## 7. Limitations and Future Research

The discussion that grounds this paper was a 61-minute conversation among three expert practitioners. The regulatory veteran's perspective reflects experience with a specific set of regulatory jurisdictions and product classes; the robotics practitioner's experience reflects a specific range of manufacturing cell configurations. Neither perspective provides comprehensive coverage of the full range of pharmaceutical manufacturing environments and regulatory contexts.

The two-year timeline claim is used analytically in this paper rather than empirically evaluated. The paper does not contain a systematic assessment of automation technology readiness across the full range of pharmaceutical manufacturing processes, nor a systematic analysis of regulatory framework development timelines across the major pharmaceutical regulatory jurisdictions.

The labour economics analysis in Section 2.3 draws on the general automation and labour literature; it does not include pharmaceutical manufacturing sector-specific labour market data that would be needed to assess the distributional impacts of automation on pharmaceutical manufacturing workforces.

Future research should: (1) conduct a systematic assessment of pharmaceutical manufacturing task categories against current automation technology readiness, producing a task-level automation timeline with confidence intervals; (2) develop and pilot the adaptive system validation methodology described in Section 4.2, evaluating the methodology against regulatory acceptance in at least two major jurisdictions; (3) conduct longitudinal studies of pharmaceutical manufacturing workforce impacts in facilities that have implemented significant automation, measuring skill profile shifts, workforce retention, and wage effects at the worker level rather than the industry aggregate.

---

## 8. Conclusion

The claim that robots will do every human factory job within two years is wrong as a literal prediction and right as a directional forcing function. The technology exists or will exist to automate the majority of routine pharmaceutical manufacturing tasks; the barrier is not hardware capability but the regulatory infrastructure that must be rewritten to govern automated actants within pharmaceutical GMP frameworks.

The organisations that invest in the regulatory infrastructure — the validation methodology, the standards documents, the regulatory guidance submissions, the inspection frameworks — will define the landscape for automated pharmaceutical manufacturing. This is not a secondary concern to be addressed after the technology is deployed; it is the primary strategic opportunity of the automation transition. The technology that executes the manufacturing tasks is replicable; the regulatory framework that governs them is built through relationships, credibility, and sustained engagement with standards bodies that is not replicable at speed.

Personalised medicine manufacturing removes all ambiguity about the urgency. Single-unit manufacturing of cell and gene therapies cannot be executed by human-operator processes at commercial scale; it requires automated systems whose performance has been characterised and validated to pharmaceutical quality standards. The patients awaiting those therapies do not benefit from waiting for regulatory frameworks to mature on their own schedule; they benefit from the investment that accelerates that maturation.

The two-year claim is a provocation. The response to a provocation is not to calculate whether it is literally accurate. It is to ask what would need to be true for it to be substantially accurate — and to start building those conditions.

---

## References

[1] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Reassembling the Social: An Introduction to Actor-Network Theory.* Oxford University Press, 2005.

[3] European Commission. *EudraLex Volume 4 — Good Manufacturing Practice (GMP) Guidelines.* European Commission, 2022.

[4] US Food and Drug Administration. 21 CFR Part 11: Electronic Records; Electronic Signatures. *Federal Register* 1997;62(54):13430–13466.

[5] Acemoglu D, Restrepo P. Robots and Jobs: Evidence from US Labor Markets. *Journal of Political Economy* 2020;128(6):2188–2244.

[6] Autor DH. Work of the Past, Work of the Future. *AEA Papers and Proceedings* 2019;109:1–32.

[7] Graetz G, Michaels G. Robots at Work. *Review of Economics and Statistics* 2018;100(5):753–768.

[8] Gulur P, Arnstein P. Digital Twins in Pharmaceutical Manufacturing. *Journal of Pharmaceutical Sciences* 2022;111(9):2497–2507.

[9] US Food and Drug Administration. *Process Validation: General Principles and Practices.* FDA, 2011.

[10] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[11] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[12] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
