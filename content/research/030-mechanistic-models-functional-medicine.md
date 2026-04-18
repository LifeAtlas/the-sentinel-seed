---
title: "When 150M SEK of Research Meets a Clinic: Bridging Mechanistic Models and Functional Medicine"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: mechanistic models, functional medicine, precision medicine, biological digital twin, clinical translation, systems biology, research-practice gap, Actor-Network Theory, LQM, large quantitative models, physician interface, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# When 150M SEK of Research Meets a Clinic: Bridging Mechanistic Models and Functional Medicine

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Mechanistic biological models — ordinary differential equation systems that describe physiological processes from first principles — represent decades of academic investment and offer capabilities that statistical AI approaches structurally cannot provide: mechanistic explanations of why an intervention produces a given effect, predictions of individual patient response under conditions not present in training data, and the ability to extrapolate across physiological states without requiring examples of those states. A precision medicine clinic demonstration session revealed a translation gap that the academic literature has underweighted: clinicians in functional medicine practice do not primarily lack models. They lack interpretable interfaces to models, actionable output formats that integrate with clinical workflow, and institutional confidence that mechanistic model outputs carry clinically sufficient accuracy for individual patient decisions. This paper analyses the research-to-clinic translation problem through ANT, identifying the actants — mechanistic models, academic research outputs, clinical decision support workflow, clinician epistemologies, patient data infrastructure, and regulatory frameworks — whose enrollment is required to make mechanistic model capability accessible in clinical practice. We argue that the translation gap is not primarily a modelling problem; it is a mediation problem: the mediating artefacts — interfaces, output formats, confidence representations — that would allow a non-specialist clinician to use a mechanistic model's output have not been built at anything approaching clinical readiness. We introduce the concept of the clinician interface layer as the missing architectural component between academic biological modelling and clinical AI deployment. We engage the counter-argument that statistical AI — specifically LLM-based clinical decision support — can substitute for mechanistic models in most clinical contexts. We argue that this counter-argument is correct for population-level pattern recognition tasks and wrong for individual physiological response prediction. Three falsifiable propositions are stated. The paper contributes a translation readiness framework for assessing the clinical deployability of mechanistic biological models.

**Keywords:** mechanistic models, functional medicine, precision medicine, biological digital twin, clinical translation, systems biology, research-practice gap, Actor-Network Theory, LQM, large quantitative models, physician interface, design science research, SMILE methodology

---

## 1. Introduction: The Gap Between the Laboratory and the Consulting Room

Somewhere in a European research university, there is a computational model of human glucose-insulin homeostasis that has been validated against clinical data from thousands of patients, can predict an individual's post-prandial glucose trajectory from a meal composition and their personal parameter set, and can be used to evaluate alternative dietary and pharmacological interventions in silico before they are tried in a person. This model represents perhaps fifteen years of academic work, several million euros of research funding, and a genuine scientific achievement: a mechanistic account of a physiological system that is accurate enough to be clinically useful.

And yet in the functional medicine clinic twenty minutes' drive from that university, the consulting physician does not use it. The physician uses clinical intuition informed by biomarker panels, symptom questionnaires, dietary journals, and the accumulated experience of managing a few hundred patients who present with similar phenotypes. The physician has not heard of the model. If they had heard of it, they would not know how to access it. If they could access it, they would not know how to interpret its outputs in the context of the specific patient in front of them. If they could interpret the outputs, they would not know what confidence to place in them for individual clinical decisions.

This gap — between the model that exists and the clinical practice that continues without it — is the subject of this paper. The clinic demonstration session that grounds this analysis was structured around the question: can we show a practicing functional medicine clinician what a mechanistic biological model can do for their patients, and what do they need before they would use it? The answer to the first question was yes, with reservations. The answer to the second question was more complex, and more structurally revealing, than any model architecture question.

---

## 2. Theoretical Framework

### 2.1 LQMs Versus LLMs: The Mechanistic Advantage

The argument for mechanistic models in clinical AI is not primarily competitive with statistical AI. Statistical AI — including large language models, deep learning classifiers, and gradient-boosted risk score systems — has demonstrated genuine clinical utility in specific domains: radiology image classification, early sepsis detection, electronic health record phenotyping, clinical note summarisation. These are tasks that reward pattern recognition across large datasets.

The domains where mechanistic models are superior are different and complementary: individual physiological response prediction under novel intervention conditions; extrapolation to physiological states (extreme exercise, illness, fasting, polypharmacy) that are underrepresented in training data; mechanistic explanation of why a given biological state has developed; and counterfactual analysis (what would have happened if this intervention had been taken six months earlier?). These are the domains most relevant to personalised functional medicine, and they are precisely the domains where statistical AI's dependence on training data distribution is most limiting.

Following Waern (2025b, DOI: 10.5281/zenodo.17464804), we designate mechanistic physiological models as Large Quantitative Models (LQMs): model families characterised by physics-grounded differential equation systems, mechanistic interpretability, and individual parameter estimation from personal biological data. LQMs are not in competition with LLMs; they are complementary: LLMs handle language, context, and knowledge retrieval, while LQMs handle physiological simulation and personalised response prediction.

### 2.2 ANT and the Research-to-Clinic Translation Network

ANT [1][2] provides the analytical framework for the translation gap. In ANT terms, the mechanistic model is an actant with specific properties — mathematical form, parameter requirements, validation evidence, computational requirements — that must be enrolled in the clinical network in which it is intended to operate. The clinical network includes the consulting physician, the patient, the clinical decision support workflow, the electronic health record system, the clinical governance framework, the regulatory approval pathway, and the payer. Each of these actants has interests, constraints, and existing enrolments that the mechanistic model must accommodate to achieve deployment.

The translation gap analysis asks: at which specific translation moments does the mechanistic model's enrollment in the clinical network fail, and what artefacts, processes, or governance changes would need to be constructed to achieve enrollment at each moment?

### 2.3 The SMILE Methodology Applied to Clinical Translation

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a precision medicine clinic that treats patients using biomarker-informed functional medicine without access to mechanistic physiological modelling. The to-be state is a clinic in which a mechanistic biological digital twin of each patient supports clinical decisions at three points: the initial assessment (what is this patient's physiological phenotype and what are the driving mechanisms of their current condition?), the intervention design (which interventions are predicted to produce the best outcomes for this patient's specific parameter set?), and the response monitoring (is the intervention producing the predicted physiological response?). The methodology requires that every investment in the translation pathway be evaluated by whether it moves toward this state at acceptable cost.

---

## 3. The Clinic Demonstration: What Clinicians Need

### 3.1 The Demonstration Session

The session structured a walkthrough of mechanistic model capability for a practicing functional medicine clinician, using a metabolic health model applied to a de-identified patient profile. The model was capable of simulating the patient's glucose-insulin dynamics, predicting their response to dietary interventions, and estimating their risk trajectory for metabolic syndrome over a five-year horizon under different lifestyle modification scenarios.

The clinician's responses to the demonstration were instructive. Initial reactions were positive: the mechanistic model's outputs — trajectory predictions, mechanism explanations, intervention comparisons — aligned with the clinician's intuitive clinical judgement about several aspects of the patient's presentation. The clinician said, on several occasions, "yes, that's consistent with what I see."

The challenge emerged when the clinician was asked: would you use this to guide a treatment decision? The responses revealed four specific requirements that the demonstration could not satisfy.

### 3.2 The Four Clinical Requirements

**Requirement 1: Parameter provenance.** The mechanistic model's outputs depend on the patient's individual parameter set — the values for insulin sensitivity, glucose uptake rates, and other physiological parameters that are estimated from the patient's data. The clinician wanted to know: where do these parameters come from? How many data points were required to estimate them reliably? What is the confidence interval around the estimates? The model documentation, designed for computational biology researchers, did not present this information in clinically accessible form.

**Requirement 2: Error communication.** The model's simulation outputs were presented as point estimates: the model predicted that under Intervention A, the patient's fasting glucose would reach a specific value at 12 weeks. The clinician wanted uncertainty ranges. In clinical practice, a prediction without error bounds is not a prediction; it is an assertion. The model could generate uncertainty estimates through Monte Carlo simulation over parameter uncertainty, but this capability was not surfaced in the demonstration interface.

**Requirement 3: Workflow integration.** The demonstration required the clinician to step outside their normal clinical workflow to interact with a separate simulation interface. The clinician's workflow — assessment, prescription, follow-up — is structured around their electronic health record system and patient management software. A tool that requires workflow disruption to use will not be used for routine clinical decisions regardless of its accuracy.

**Requirement 4: Regulatory status.** Before using a model output to influence a clinical decision, the clinician needed to know: what is the model's regulatory status? Is it a certified medical device? Has it been validated in a population comparable to their patients? What is their liability if they follow a model recommendation that produces an adverse outcome? The research publication record — the source of the model's scientific validation — does not answer these questions.

---

## 4. The Clinician Interface Layer: The Missing Artefact

### 4.1 What the Clinician Interface Layer Must Do

The four clinical requirements in Section 3.2 define the specification for a clinician interface layer: a mediation component that sits between the mechanistic model and the clinical decision maker, translating model outputs into clinically interpretable, workflow-integrated, error-communicating, and governance-traceable form.

The clinician interface layer is not a simplified version of the model. It is a separate software artefact that addresses a different audience with different requirements. The model is designed for computational biologists: it exposes mathematical structure, parameter identifiability, and numerical solver behaviour. The clinician interface layer is designed for physicians: it exposes mechanism explanations in clinical language, uncertainty ranges in clinically meaningful terms, workflow integration points, and audit trails that document the basis for clinical recommendations.

Building the clinician interface layer requires expertise that does not naturally coexist with mechanistic modelling expertise: clinical workflow design, human-computer interaction for medical decision support, regulatory medical device software engineering, and clinical validation methodology. The absence of this expertise in academic mechanistic modelling groups is not an oversight; it is a structural consequence of academic incentive systems that reward publication of model advances rather than clinical deployment of model capabilities.

### 4.2 Confidence Representation in Clinical AI

Clinical AI confidence representation is an active and unresolved research area [3]. The challenge is that standard machine learning confidence scores (softmax probabilities, posterior distributions) do not map to clinical uncertainty in ways that clinicians find interpretable. A model that predicts with 78% probability that a patient will develop metabolic syndrome within five years is expressing calibrated probabilistic uncertainty; a clinician who hears this may interpret it as a statement about the model's reliability rather than a prediction about the patient's risk.

For mechanistic models, the confidence representation problem has additional dimensions. Parameter uncertainty propagates to output uncertainty through nonlinear dynamics in ways that are not easily summarised by a single confidence metric. The appropriate representation depends on the clinical question: for a decision about whether to initiate a pharmacological intervention, the relevant uncertainty is the range of possible outcomes under the intervention; for a decision about whether to schedule a follow-up in three months or six months, the relevant uncertainty is the range of possible trajectory paths over that horizon.

The clinician interface layer must make these representation choices explicitly, informed by clinical expertise about what uncertainty information is actionable in specific decision contexts, rather than delegating them to the model developers.

### 4.3 The Regulatory Gap

Mechanistic biological models developed in academic research settings are, in most jurisdictions, not medical devices. They are research tools. A clinician who uses a research tool's output to guide a clinical decision is operating in a regulatory grey zone: the tool has not been validated for clinical use, has not been cleared by a regulatory authority, and carries no regulatory-defined liability framework.

The pathway from research tool to clinical decision support tool requires a regulatory process — in the EU, classification under the Medical Device Regulation (MDR) or the In Vitro Diagnostic Regulation (IVDR) depending on the model's clinical application; in the US, FDA clearance as a clinical decision support tool — that typically requires years of clinical validation, quality management system implementation, and post-market surveillance infrastructure. This pathway is well-established for diagnostic and imaging AI tools; it is largely unnavigated for mechanistic physiological simulation tools.

This is not an argument against clinical deployment of mechanistic models. It is an argument for explicit regulatory strategy as part of the translation roadmap: academic research groups that want their models to reach clinical practice must either initiate regulatory qualification themselves or transfer their models to organisations with the regulatory capability to qualify them.

---

## 5. Counter-Argument: Can Statistical AI Substitute for Mechanistic Models?

The counter-argument is direct: LLMs and statistical AI can provide clinical decision support at a quality level that is good enough for most functional medicine use cases, without the complexity of mechanistic model deployment. Physician-assisting LLMs can summarise patient history, suggest differential diagnoses, recommend investigation pathways, and generate personalised lifestyle advice from published evidence — all without a mechanistic model.

We accept this argument for the use cases it accurately describes. LLM-based clinical decision support is valuable and increasingly deployed. Its limitations are precisely the domains where functional medicine clinicians most need help: predicting an individual patient's physiological response to a specific intervention, given their unique metabolic phenotype and current physiological state.

Consider two patients with identical presenting biomarker profiles — fasting glucose, HbA1c, lipid panel, inflammatory markers — who are advised to start intermittent fasting. Their metabolic responses over twelve weeks will differ substantially, driven by differences in their insulin sensitivity, gut microbiome composition, cortisol response, and thyroid function that are not fully captured in their presenting biomarkers. An LLM trained on population-level nutrition intervention literature predicts the population-average response. A mechanistic model parameterised to each patient's personal physiological profile predicts the individual response.

For population-level decisions — should patients with this phenotype be offered intermittent fasting as a first-line intervention? — statistical AI provides the right answer. For individual decisions — will this specific patient benefit more from intermittent fasting or from time-restricted eating with carbohydrate restriction? — the mechanistic model is the right tool. The functional medicine context, where treatment is explicitly personalised, is the context in which the mechanistic model's individual response prediction capability is most clinically valuable.

---

## 6. Falsifiable Propositions

1. **The interface layer proposition:** Mechanistic biological models deployed with clinician interface layers that explicitly address parameter provenance, uncertainty ranges, and workflow integration will achieve clinician adoption rates at least four times higher than equivalent models deployed with researcher-oriented interfaces, measured by percentage of eligible patient encounters in which the model is consulted. This proposition can be falsified by a randomised interface comparison study showing no significant difference in adoption rates between researcher-oriented and clinician-oriented interfaces.

2. **The individual response prediction proposition:** Mechanistic metabolic models personalised to individual patient parameter sets will predict individual post-intervention HbA1c trajectories at 12 weeks with mean absolute error below 6 mmol/mol, outperforming population-average statistical prediction (which uses only baseline biomarker values and demographic information) in head-to-head comparison in a prospective cohort of functional medicine patients. This proposition can be falsified by a prospective study showing that mechanistic personalised models do not significantly outperform statistical population-average models for individual 12-week trajectory prediction.

3. **The regulatory gap proposition:** The absence of a defined regulatory qualification pathway for mechanistic physiological simulation tools in the EU and US is the binding constraint on clinical adoption for at least 70% of academic mechanistic modelling groups that have expressed interest in clinical deployment, as measured by a survey of such groups ranking barriers to clinical translation. This proposition can be falsified by a survey showing that other barriers (compute cost, data access, clinical validation evidence, interface quality) are more frequently cited as the primary adoption barrier.

---

## 7. Limitations and Future Research

The clinic demonstration described in this paper involved a single clinician in a specific functional medicine context; the four clinical requirements identified may not fully represent the requirements of clinicians in other specialty contexts, evidence-based medicine traditions, or regulatory jurisdictions.

The LQM framing is a conceptual proposal developed across the authors' prior work; the designation does not represent a formally established model category recognised by the computational biology or regulatory communities.

The regulatory analysis is based on the EU MDR and US FDA frameworks as of 2025; regulatory guidance for AI and mechanistic clinical decision support tools is evolving and should be verified against current guidance at the time of any specific deployment.

Future research should: (1) conduct a systematic survey of functional medicine and precision medicine clinicians across three or more healthcare systems to validate and extend the four clinical requirement categories; (2) develop and pilot a clinician interface layer design framework for mechanistic metabolic models, evaluating adoption and accuracy outcomes in a clinical validation study; (3) examine the regulatory qualification pathway for mechanistic physiological simulation tools in the EU MDR framework, identifying the minimum clinical validation evidence package required for Article 61 compliance.

---

## 8. Conclusion

One hundred and fifty million SEK — or whatever the specific research investment figure was for the model family demonstrated — is not wasted. The science is real. The models are accurate. The mechanistic understanding they encode has genuine clinical value. But none of that value reaches a patient as long as the research output and the clinical workflow are separated by an unbridged translation gap.

The translation gap is not primarily a scientific problem. It is a design problem: the clinician interface layer has not been built. It is a regulatory problem: the qualification pathway has not been navigated. It is a workflow integration problem: the model has not been embedded in the systems where clinical decisions are made. Each of these problems is solvable. None of them is solved by publishing a better model.

The research-to-clinic translation requires a different kind of investment than the research itself: investment in interface design, clinical validation, regulatory strategy, and workflow integration. Academic incentive systems do not reward this investment, which is why it is systematically underproduced relative to the modelling investment that precedes it. Closing this gap requires either academic incentive reform — research evaluation frameworks that credit clinical translation alongside publication — or partnerships between academic groups and clinical deployment organisations that provide the regulatory and interface engineering capabilities academic groups lack.

The mechanistic model will not walk out of the research environment and into the clinic by itself. It needs a translator. Building that translator is the most important unaddressed challenge in the pathway from computational biology to personalised medicine.

---

## References

[1] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Science in Action.* Harvard University Press, 1987.

[3] Topol EJ. High-performance medicine: the convergence of human and artificial intelligence. *Nature Medicine* 2019;25(1):44–56.

[4] Cedersund G, Roll J. Systems biology: model based evaluation and comparison of potential explanations for given biological data. *FEBS Journal* 2009;276(4):903–922.

[5] Bergman RN, Ider YZ, Bowden CR, Cobelli C. Quantitative estimation of insulin sensitivity. *American Journal of Physiology* 1979;236(6):E667–677.

[6] Hasnain M, Sinaei M, Shi P. Population pharmacokinetic-pharmacodynamic models in drug development. *Expert Opinion on Drug Metabolism and Toxicology* 2018;14(3):299–314.

[7] European Parliament. Regulation (EU) 2017/745 on Medical Devices (MDR). 2017.

[8] Shortliffe EH, Sepúlveda MJ. Clinical decision support in the era of artificial intelligence. *JAMA* 2018;320(21):2199–2200.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
