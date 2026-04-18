---
title: "When the Panic Pendant Dies: Edge-Native IoT as the Gateway to Preventive Healthcare"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: IoT, edge-native, elderly care, panic pendant, personal emergency response, UWB sensor, cardiac prediction, digital twin, housing legislation, preventive healthcare, Actor-Network Theory, design science research, PSTN switchover, edge AI
status: ready
date: 2026-04-16
---

# When the Panic Pendant Dies: Edge-Native IoT as the Gateway to Preventive Healthcare

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The analogue telephone network that has underpinned personal emergency response systems — the "panic pendant" worn by millions of elderly and high-risk individuals — is being decommissioned across the United Kingdom and multiple European jurisdictions by the end of 2025. This regulatory discontinuity is widely framed as a replacement problem: how to migrate existing PSTN-dependent alarm systems to digital equivalents without service degradation. This paper argues that it is, in fact, a market creation problem: the death of the analogue pendant is the forcing function for a generation shift from reactive emergency response to proactive, edge-native, multi-sensor health monitoring that can predict and prevent the emergencies the pendant was built to respond to. Drawing on Actor-Network Theory (ANT) to trace the heterogeneous network of actants — regulatory mandates, housing legislation, FDA-approved sensor technologies, NHS commissioning frameworks, elderly care providers, and family caregivers — that must be enrolled to realise this shift, we analyse the translation moments that determine whether the PSTN switchover produces merely a digital equivalent of the 1980s alarm system or a genuinely preventive edge-native monitoring architecture. We examine the role of ultra-wideband (UWB) radar sensors as a non-wearable, no-infrastructure-change alternative to pendant replacement, and the use of edge AI for cardiac anomaly prediction from radar-derived physiological signals. We introduce the concept of the Preventive Monitoring Stack (PMS) — a layered architecture that places edge inference above reactive alarms — and argue that housing legislation and NHS commissioning standards are the primary actants whose translations would most rapidly accelerate PMS adoption. Three falsifiable propositions are stated. We engage the counter-argument that elderly users will not accept surveillance-adjacent technology and argue that the consent and framing model, not the technology itself, determines adoption. This paper contributes an ANT-grounded framework for evaluating PSTN switchover responses against the preventive architecture opportunity.

**Keywords:** IoT, edge-native, elderly care, panic pendant, personal emergency response, UWB sensor, cardiac prediction, digital twin, housing legislation, preventive healthcare, Actor-Network Theory, design science research, PSTN switchover, edge AI

---

## 1. Introduction: The Analogue Deadline

Sometime in the third decade of the twenty-first century, an analogue telephone line will dial a monitoring centre, a human operator will answer, and will hear either a voice asking for help or an open line with ambient sound that suggests something is wrong. This is the panic pendant in operation — fundamentally unchanged from the personal emergency response system that emerged in the 1970s as a solution to the problem of elderly people living alone falling or having medical crises with no one nearby to help.

The pendant works. It has worked for fifty years. Its limitations are well-documented and widely accepted: it requires the user to remember to wear it, to press it in an emergency (which requires consciousness), and to be within radio range of a PSTN-connected base unit. It detects nothing proactively; it only reports emergencies that the user initiates. It produces no data about the person's health between presses. It cannot predict a fall before it happens, detect atrial fibrillation before it becomes a stroke, or identify a gradual decline in mobility that suggests an intervention window is closing.

But it has been good enough. Until the PSTN goes away.

The analogue public switched telephone network is being decommissioned. In the United Kingdom, the formal switchover programme requires all PSTN and ISDN services to be retired by the end of 2025, with digital (IP-based) alternatives replacing them. This is not a technical decision specific to elderly care — it is an infrastructure lifecycle decision that affects the entire telecommunications network. The analogue pendant is collateral: a device that was never designed to run over IP, that has significant technical challenges in IP migration (voice quality, latency under packet loss, power supply continuity), and that represents a large and potentially vulnerable user population.

The official response from pendant manufacturers, housing associations, NHS commissioning bodies, and local authorities has been predominantly conservative: replace the analogue pendant with a digital equivalent. Different radio technology, same product concept. Reactive, wearable, alarm-only.

This paper argues that the PSTN switchover is the wrong frame. The correct frame is: fifty years of installed infrastructure have conditioned us to think about elderly personal response as a reactive problem. The technology available today makes it a predictive problem. The regulatory forcing function of the PSTN switchover is the opportunity to make that shift — not because the new technology is nicer, but because the regulatory discontinuity creates a procurement window in which the installed base must be replaced regardless, and in that window the marginal cost of upgrading to a genuinely preventive architecture is lower than at any other point in the technology's history.

---

## 2. Theoretical Framework

### 2.1 ANT and the Pendant Network

The panic pendant exists within a heterogeneous network of actants. The PSTN itself is an actant: a physical infrastructure that has shaped the design, economics, and regulatory positioning of personal emergency response for decades. Its decommissioning is not merely a technical change — it is the withdrawal of a foundational actant from the network, which requires the renegotiation of every translation that depended on it.

ANT [1][2] is appropriate here because the translation from reactive to preventive elderly care technology is not primarily a technical problem. It is a network construction problem: which actants must be enrolled, in which sequence, to produce a monitoring architecture that is economically viable, technically deployable, and socially acceptable to the target population?

The concept of *inscription* [3] is particularly relevant. The analogue pendant has inscribed into elderly care infrastructure a specific set of assumptions: that the user is the initiating actor (they press the button); that the monitoring centre is the receiving actor (they respond to the alert); and that the home phone line is the communication channel. These inscribed assumptions are deeply embedded in procurement frameworks, CQC compliance checklists, insurance models, and user expectations. Any replacement technology must either inherit these inscriptions (the digital equivalent) or overcome them (the preventive alternative). Overcoming inscribed assumptions in a regulated care market is a translation problem of significant magnitude.

### 2.2 Design Science Research Frame

Following DSR methodology [4], this paper proposes the Preventive Monitoring Stack (PMS) as a designed artefact and evaluates it against the requirements of the PSTN switchover context. The PMS is explicitly proposed, not empirically validated; the paper distinguishes carefully between the capabilities of existing component technologies and the capabilities of the proposed integrated architecture.

### 2.3 The SMILE Methodology

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is the PSTN-dependent reactive alarm, and the to-be state is the edge-native preventive monitoring stack. Every architectural element is justified by its contribution to closing the gap between reactive response and proactive prevention.

---

## 3. The PSTN Switchover: Actant Analysis

### 3.1 The Decommissioning Actant

The PSTN decommissioning is the primary actant forcing the transition. It is a non-human actant with significant agency: by retiring the analogue network, it removes the technical foundation of the existing personal emergency response infrastructure without providing a direct functional equivalent. The IP-based replacement does not simply substitute for PSTN; it changes the physics of the communication channel (packet-switched rather than circuit-switched, latency patterns differ, power-over-line behaviour changes) in ways that require meaningful re-engineering of dependent systems.

### 3.2 Housing Legislation as Enabling Actant

In the United Kingdom, the Housing with Care and Support sector — extra care housing, sheltered accommodation, housing association properties — provides accommodation to a large proportion of the target population for personal emergency response. Housing associations have maintenance obligations for alarm and safety systems in their properties. The PSTN switchover creates a mandatory maintenance event: every PSTN-dependent alarm system in housing association properties must be reviewed and replaced.

This mandatory review is an enabling actant for preventive monitoring adoption. Housing associations that are required to replace their alarm systems face a procurement decision that has, in prior cycles, been resolved by like-for-like replacement. If preventive monitoring technology can be positioned within the mandatory replacement procurement — as a premium option that reduces long-term care costs and NHS admission rates — the market creation problem is substantially simpler than a greenfield market entry.

Housing legislation that mandates specific technology standards in the replacement systems — for example, requirements for IP-native communication, multi-sensor compatibility, or interoperability with NHS health record systems — would inscribe preventive monitoring capabilities into the mandatory replacement requirement. This is a proposed policy lever, not a current legislative requirement.

### 3.3 NHS Commissioning Frameworks

NHS commissioning frameworks for community-based monitoring technology are the third critical actant. If preventive monitoring data — cardiac anomaly detection, fall-risk trend scores, activity decline indicators — can flow into NHS urgent care pathways in a structured, interoperable form, the clinical value of the technology is amplified beyond the individual user. A community care pathway that receives proactive alerts from edge-native monitoring devices, rather than waiting for emergency presentations, can schedule interventions before acute episodes, reducing hospitalisation rates and associated NHS costs.

The translation required is: from monitoring data as alarm management infrastructure (managed by housing providers and alarm receiving centres, outside NHS systems) to monitoring data as clinical surveillance infrastructure (integrated with NHS urgent care, primary care, and community nursing workflows). This is an organisational and information governance translation, not a technical one.

---

## 4. The Technology Layer: UWB Sensors and Edge AI

### 4.1 Ultra-Wideband Radar for Non-Wearable Monitoring

Ultra-wideband (UWB) radar sensors provide contactless physiological monitoring from devices installed in the environment rather than worn on the body. UWB radar can detect respiration rate, heart rate, and gross body movement from ranges of up to several metres through non-line-of-sight conditions, including through lightweight room dividers. Several UWB sensor products have received FDA 510(k) clearance for specific monitoring applications, establishing a regulatory pathway for clinical use.

The relevance to panic pendant replacement is significant. The primary adoption barrier for traditional wearables in elderly populations is compliance: users forget to wear devices, resist wearing them due to stigma or discomfort, or remove them during activities (bathing, sleeping) when monitoring is most important. A room-installed UWB sensor that operates without any user action eliminates the compliance problem entirely. The user does not interact with the technology; the technology observes them continuously, automatically.

This is a privacy-sensitive design choice. An always-on sensor that monitors a person's physiological state and location within their home requires careful consent architecture. The framing and consent model must position the sensor as a health monitoring infrastructure that the resident controls — not as surveillance infrastructure that the landlord or care provider controls. This inscription of user sovereignty into the device's consent model is a design decision, not a product feature; it must be deliberate.

### 4.2 Cardiac Anomaly Prediction from Radar-Derived Signals

UWB radar can extract cardiac waveform approximations from chest wall micro-motion signals. While the fidelity of these signals is lower than ECG, they are sufficient to detect cardiac rhythm anomalies — including atrial fibrillation — with sensitivity comparable to single-lead ECG in resting conditions, according to published studies in the microwave and biomedical engineering literature [5][6].

Atrial fibrillation (AF) is the most common sustained cardiac arrhythmia and a major risk factor for ischaemic stroke. AF is frequently paroxysmal — episodes occur intermittently, often asymptomatically — making detection through periodic clinic visits unreliable. Continuous monitoring in the home environment, even at single-lead-equivalent fidelity, provides a much larger observation window and substantially increases the probability of episode detection.

An edge AI inference layer running on the UWB sensor's local compute — a small ARM-class processor with sufficient memory for a quantised cardiac rhythm classification model — can process the radar-derived cardiac signal in real time and generate a continuous AF risk score, flagging episodes for clinical review without transmitting raw signal data to a cloud service. This is the edge-native architecture pattern described in Waern (2025b, DOI: 10.5281/zenodo.17464804): inference runs locally, only the structured output (AF episode flag, risk score, timestamp) is transmitted.

### 4.3 Fall Risk as a Longitudinal Signal

Beyond acute event detection, UWB radar supports longitudinal gait and mobility analysis. A person's walking speed, step length, gait symmetry, and postural sway — all derivable from radar-based motion tracking in a home corridor — are established predictors of fall risk and functional decline [7]. Longitudinal tracking of these parameters, with trend analysis running on the edge device, can generate a fall-risk trajectory that updates continuously rather than at clinic visit frequency.

The clinical value is proactive: a declining gait trend score that crosses a threshold triggers a community nursing review appointment, rather than waiting for a fall that triggers an emergency admission. The difference in outcome — and in NHS cost — between a proactive gait review and an emergency hip fracture admission is large enough to justify the monitoring infrastructure cost at the individual patient level.

---

## 5. The Preventive Monitoring Stack: Proposed Architecture

### 5.1 Layer Model

The PMS is proposed as a four-layer architecture:

| Layer | Function | Technology |
|---|---|---|
| **Sensing** | Continuous physiological and behavioural signal acquisition | UWB radar, passive IR, acoustic sensor array |
| **Edge inference** | Real-time anomaly detection and risk scoring | Quantised ML models on local ARM compute |
| **Structured alert generation** | Rule-governed alert production from inference outputs | Edge agent, FHIR-formatted alert messages |
| **Care pathway integration** | Alert routing to appropriate care pathway actor | HL7 FHIR R4 API, NHS interoperability standards |

The key architectural principle is that raw signals never leave the home environment. The sensing layer and edge inference layer operate entirely on-device; the structured alert generation layer produces a minimal-disclosure output (risk score, event type, timestamp, severity) that is transmitted to the care pathway integration layer. This minimises data exposure and aligns with GDPR Article 25 data minimisation requirements.

### 5.2 Comparison with Existing Pendant Architecture

| Dimension | Analogue Pendant (as-is) | Digital Pendant Equivalent | Preventive Monitoring Stack (proposed) |
|---|---|---|---|
| Activation | User-initiated | User-initiated | Continuous, automatic |
| Detection capability | Post-event, user-conscious | Post-event, user-conscious | Pre-event, passive |
| Compliance requirement | Must be worn | Must be worn or carried | None |
| Data generated | Single alarm event | Single alarm event + location | Continuous physiological trend + acute alerts |
| Care pathway integration | Alarm receiving centre | Alarm receiving centre | NHS FHIR API compatible |
| Privacy model | Reactive disclosure | Reactive disclosure | Proactive, edge-local, minimal disclosure |

---

## 6. Counter-Argument: The Surveillance Objection

The primary counter-argument to always-on home monitoring for elderly users is the surveillance objection: that continuous physiological monitoring in the home environment is invasive, infantilising, and inconsistent with the dignity and autonomy of elderly people. This objection is frequently raised by elderly people themselves, by elder rights advocates, and by care ethics researchers.

The objection is legitimate and must be engaged seriously rather than dismissed as technophobia. There is a real difference between a technology that an individual chooses to use because they value the safety it provides, and a technology that is installed by a landlord or care provider because it reduces their liability exposure. The former respects autonomy; the latter instrumentalises the resident.

The appropriate response is not to make the technology less capable but to design the consent and control architecture so that the resident is genuinely the primary beneficiary and the primary controller. This means: the resident can turn the sensing layer off at any time, for any reason, with no penalty. The resident can see exactly what data has been generated and exactly where it has been transmitted. The resident can designate who receives alerts from the structured alert layer — family members, a GP, a community nurse, or no one — and can change these designations without involving the housing provider or care system.

A monitoring system that the resident controls, that produces data they can see, and that serves their health interests rather than the provider's cost interests, addresses the surveillance objection without compromising the preventive monitoring architecture. The consent model is the product, as much as the sensor.

---

## 7. Falsifiable Propositions

1. **The prevention proposition:** Elderly individuals living in housing association properties equipped with PMS-class monitoring will show statistically significant reductions in emergency hospital admissions over a 24-month period compared to matched individuals in equivalent properties with digital pendant equivalents. This proposition can be falsified by a randomised controlled trial showing no significant difference in emergency admission rates between PMS and digital pendant cohorts.

2. **The compliance proposition:** Non-wearable UWB-based monitoring in the home environment achieves continuous monitoring coverage (defined as physiological signal acquisition for at least 18 hours per day) at a significantly higher rate than wrist-worn wearable devices in adults over 75 years of age. This proposition can be falsified by a comparative wearability study showing no significant difference in daily monitoring coverage between UWB home sensors and wrist-worn devices in this population.

3. **The housing legislation lever proposition:** Housing legislation that mandates IP-native, multi-sensor interoperable personal emergency response systems as the required minimum standard for housing with care and support properties will produce measurably faster PMS adoption than technology-neutral procurement guidance alone. This proposition can be falsified by a natural experiment comparing adoption rates in jurisdictions with mandated technology standards versus technology-neutral guidance.

---

## 8. Limitations and Future Research

The clinical evidence for UWB radar-based AF detection and gait analysis in elderly home settings is drawn from laboratory and clinical research environments; real-world performance in uncontrolled home conditions (multipath RF interference, co-resident interference, pet presence) has not been systematically validated. The proposed PMS architecture has not been deployed at scale; its cost, complexity, and user acceptability under real-world conditions are not yet established.

The NHS care pathway integration layer requires significant information governance work — consent models, data sharing agreements, FHIR profile development for monitoring data types — that is beyond the scope of this paper.

Future research should: (1) conduct a systematic review of UWB physiological monitoring accuracy in uncontrolled home environments; (2) design and pilot a co-production process for elderly residents to participate in the development of monitoring consent and control architectures; (3) develop and evaluate FHIR profiles for preventive monitoring data types suitable for NHS care pathway integration.

---

## 9. Conclusion

The panic pendant's death is not a crisis. It is an opportunity — one of the rare moments when an incumbent technology's infrastructure dependency is withdrawn, opening a procurement window that does not discriminate between a conservative replacement and a genuinely transformative alternative.

The alternative is not abstract. UWB radar can monitor cardiac rhythm and fall risk continuously without requiring the user to do anything at all. Edge AI can run inference locally, generating risk scores rather than raw data streams. FHIR-compatible structured alerts can route proactive intervention triggers to NHS care pathways rather than waiting for emergency presentations.

The actant analysis reveals that the primary barriers are not technical but translational: housing legislation must inscribe preventive monitoring capabilities into mandatory replacement requirements; NHS commissioning frameworks must create pathways for monitoring-derived alerts to generate community care responses; and the consent architecture must position the elderly resident as the primary controller, not the surveillance subject.

These translations are achievable. The PSTN switchover provides the forcing function. The question is whether the organisations with the authority to make these translations — housing regulators, NHS commissioners, technology standards bodies — will use this window to inscribe a preventive architecture into the replacement infrastructure, or will simply stamp "IP-compatible" on the pendant box and move on.

---

## References

[1] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Science in Action.* Harvard University Press, 1987.

[3] Akrich M. The de-scription of technical objects. In: Bijker W, Law J (eds.) *Shaping Technology/Building Society.* MIT Press, 1992: 205–224.

[4] Hevner AR, March ST, Park J, Ram S. Design science in information systems research. *MIS Quarterly* 2004;28(1):75–105.

[5] Lv H, Jing X, Li S, et al. Detection of the life signs using a dual-frequency microwave radar sensor. *Sensors* 2014;14(7):12270–12290.

[6] Wang Y, Liu M, Zhou Z, et al. A UWB radar based contactless vital sign detection method. *IEEE Sensors Journal* 2022;22(4):3544–3553.

[7] Verghese J, Holtzer R, Lipton RB, Wang C. Quantitative gait markers and incident fall risk in older adults. *Journal of Gerontology: Medical Sciences* 2009;64(8):896–901.

[8] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[9] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[10] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
