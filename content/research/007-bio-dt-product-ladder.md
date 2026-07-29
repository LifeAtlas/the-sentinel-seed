# From Data Aggregation to Mechanistic Simulation: A Product Ladder Framework for Personal Biological Digital Twins

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: [0000-0001-7970-2707](https://orcid.org/0000-0001-7970-2707)

**License:** CC-BY-4.0

**Preprint — 2026**

---

## Abstract

Personal health data remains fragmented across clinical records, wearable devices, laboratory results, and self-reported inputs, creating what we term *shadow data* — partial projections of a biological reality that already exists but is never directly represented. This position paper proposes a three-tier product ladder framework for personal biological digital twins that progressively reduces the epistemic distance between these shadows and the body itself: (1) data aggregation and visualisation, (2) AI-driven interpretation and personalised recommendations, and (3) full mechanistic simulation grounded in the user's own biological model. Drawing on Carlile's (2004) knowledge boundary framework, we map each tier to an epistemological progression — syntactic, semantic, and pragmatic — and argue that this architecture enables commercial viability without premature medical device classification. We identify six market segments suited to differentiated entry strategies and examine the regulatory, equity, and architectural implications of building health intelligence at the edge rather than in the cloud. The paper contributes a conceptual scaffold for organisations seeking to commercialise biological digital twins by starting with value that is deliverable today while preserving an architectural path toward mechanistic simulation.

**Keywords:** biological digital twin, product ladder, personal health data, edge computing, mechanistic simulation, data sovereignty, health equity, wellness platform, knowledge boundaries, regulatory strategy

---

## 1. Introduction

The human body is arguably the most instrumented biological system on Earth, yet the data it generates remains scattered across incompatible silos. A single individual's health portrait is distributed among general practitioners, specialists, hospital information systems, pharmacy records, wearable device APIs, genetic testing services, and self-tracked wellness logs. Each record captures a partial projection — a *shadow*, in the Platonic sense — of a biological reality that already exists in its entirety: the body itself.

This fragmentation is not merely an inconvenience; it is an ontological problem. The gap between these shadows and the reality that casts them is the map-territory distinction that Korzybski (1933) identified: every clinical measurement, every laboratory result, every wearable-derived heart rate variability trace is an abstraction away from the continuous, multiscale, dynamical system that is the living organism. The ambition of the biological digital twin is to close this gap — to construct a computational representation that approximates the body with sufficient fidelity to enable simulation, prediction, and intervention planning (Björnsson et al., 2020; Corral-Acero et al., 2020).

Yet the path from fragmented data to mechanistic simulation is neither technically trivial nor commercially self-evident. Building a full biological digital twin requires years of multiscale model development, extensive calibration data, and computational infrastructure that remains prohibitively expensive for consumer applications (Laubenbacher et al., 2024). The question, then, is not whether biological digital twins are desirable — the scientific community has largely converged on their potential — but how to construct a viable product architecture that delivers incremental value at each stage while preserving the structural foundation for mechanistic simulation at the apex.

This paper proposes a *product ladder* framework that addresses this challenge. The framework draws on the epistemological progression described by Carlile (2004) to structure three tiers of value creation: aggregation (syntactic), interpretation (semantic), and simulation (pragmatic). Each tier is self-sustaining as a product, yet each also serves as infrastructure for the next. The result is a commercial architecture where the body itself — as a persistent reality layer (Waern, 2026a) — functions as the ultimate ground truth toward which the platform progressively converges.

This paper draws on an anonymised product roadmap discussion conducted in April 2026 between the author and a business strategist, analysed through the theoretical lenses described below. The contribution is deliberately positioned as a framework rather than an empirical study, supplemented by analysis of regulatory, technical, and market conditions. We argue that this framing resolves a tension that has plagued biological digital twin initiatives: the gap between what is scientifically possible and what is commercially viable today.

---

## 2. The Product Ladder Framework

### 2.1 Conceptual Foundation: Knowledge Boundaries

Carlile (2004) identified three progressively complex knowledge boundaries in organisational settings: syntactic (transfer), semantic (translation), and pragmatic (transformation). At the syntactic boundary, the challenge is moving information across a shared taxonomy. At the semantic boundary, meaning must be negotiated — different actors interpret the same data differently. At the pragmatic boundary, knowledge is not merely transferred or translated but transformed: stakeholders must change their practices, models, or assumptions to create shared understanding.

We adopt this framework to structure the biological digital twin product ladder, arguing that each tier corresponds to crossing a qualitatively different knowledge boundary between the individual and their health data.

### 2.2 Tier 1: Aggregation (Syntactic)

The first tier addresses the most fundamental problem in personal health informatics: data is not in one place. Clinical records reside in electronic health record (EHR) systems governed by different standards (HL7 FHIR, CDA, proprietary formats). Wearable data flows through manufacturer-specific APIs with varying granularity and latency. Laboratory results arrive as PDFs, structured messages, or verbal communications from clinicians.

Tier 1 creates a *unified personal health record* — not a new standard, but a boundary object (Star & Griesemer, 1989) that makes heterogeneous data syntactically accessible in one place. In Star and Griesemer's typology, the unified health record functions specifically as a *repository* type boundary object: an ordered collection of records indexed in a standardised manner, accessible to multiple communities (clinicians, researchers, the individual, AI agents) without requiring each community to negotiate directly with the others. The user can see their complete health portrait: lab trends, wearable metrics, medication history, lifestyle inputs, and clinical encounters visualised on a coherent timeline.

The value proposition is immediate and tangible. The first step on the product staircase is simply showing people everything in one place — because nobody has that today. This observation aligns with decades of research demonstrating that data accessibility is a precondition for sense-making (Weick, 1995) and that individuals who can access their own health data demonstrate improved engagement and outcomes (Topol, 2019).

Critically, Tier 1 operates entirely within the wellness domain. It does not interpret, diagnose, or recommend. It aggregates and visualises. We note this boundary is contestable: aggregating clinical records (diagnosis codes, medication lists) with wearable biometrics could constitute 'monitoring' under MDR Article 2(1) or trigger special category processing under GDPR Article 9. Legal counsel per jurisdiction is required to validate this classification. This positioning has profound regulatory implications explored in Section 5.

### 2.3 Tier 2: Interpretation (Semantic)

Where Tier 1 makes data visible, Tier 2 makes it meaningful. The semantic boundary is crossed when the platform moves beyond displaying raw values to contextualising them: identifying trends, flagging anomalies, suggesting relevant biomarkers the user has not yet measured, and matching users with domain experts suited to their specific profile.

This tier employs machine learning and clinical decision support logic to transform aggregated data into actionable intelligence. AI-driven predictions — metabolic risk trajectories, sleep quality trends, nutritional gap analysis — create a layer of personalised interpretation. Expert matchmaking connects users with specialists whose competence aligns with the user's emerging health picture, creating a marketplace dynamic.

The epistemological shift is significant. At Tier 1, the platform is a mirror: it reflects data back to the user. At Tier 2, it becomes a lens: it focuses attention, surfaces patterns, and proposes interpretations. The product ladder exploits absorptive capacity dynamics: users who have engaged with their aggregated data at Tier 1 develop the prior related knowledge (Cohen & Levinthal, 1990) necessary to absorb Tier 2's interpretive outputs. Without Tier 1 exposure, Tier 2 predictions lack the contextual grounding that enables user comprehension and trust. The ladder is thus not merely a pricing strategy but an absorptive capacity development pathway. Tier 2 acts as an absorptive capacity amplifier, translating raw biomarkers into contexts that the user (and their care team) can act upon.

The commercial model shifts from pure utility (paying for access) to intelligence (paying for insight). Premium subscription pricing reflects the value of interpretation, not merely storage.

### 2.4 Tier 3: Simulation (Pragmatic)

The apex of the ladder is the biological digital twin proper — a mechanistic, multi-scale computational model calibrated to the individual user's data. Where Tier 2 identifies correlations and statistical patterns, Tier 3 models causal mechanisms: metabolic flux, hormonal feedback loops, pharmacokinetic responses, circadian dynamics.

This is the pragmatic boundary in Carlile's (2004) framework. Knowledge is not merely transferred (Tier 1) or translated (Tier 2) but transformed. The user's relationship to their own biology changes fundamentally when they can simulate *in silico* how their body will respond to a dietary intervention, a medication change, or an exercise protocol before implementing it *in vivo*.

Concretely, a "mechanistic multi-scale model" denotes a system of ordinary differential equations (ODEs) representing physiological processes across molecular, cellular, and organ scales. The glucose-insulin regulatory model of Dalla Man et al. (2007) — a validated meal simulation system used in FDA-accepted *in silico* clinical trials for artificial pancreas development — exemplifies the class. Calibrating such a model to an individual requires hours of time-series data (continuous glucose monitoring, plasma insulin measurements, meal logs) and produces predictions with quantified uncertainty bounds derived from parameter identifiability analysis (Cedersund & Roll, 2009). This aspiration must be stated plainly: no Tier 3 system delivering full mechanistic personalised simulation is currently deployed at consumer scale. The Virtual Physiological Human (VPH) initiative has demonstrated the scientific feasibility of multi-organ simulation (Hunter et al., 2013), but translating this to an individual-calibrated, edge-deployable product remains an open engineering challenge.

The core tension is clear: Tier 3 delivers the highest value but also demands the highest investment in model development, computational resources, and data quality. The product ladder resolves this tension by ensuring that Tiers 1 and 2 generate revenue, data, and user engagement that fund and inform Tier 3 development.

Tier 3 represents the closest computational approximation achievable to the body as persistent reality (Waern, 2026a): a mechanistic model that simulates the body's own dynamics rather than merely describing them statistically. This aligns with the sovereign body thesis (Waern, 2026b), which argues that individuals possess an inherent right to a computational representation of their own biology — one they own, control, and can interrogate on their own terms.

---

## 3. Market Architecture

### 3.1 Six Segments, Six Entry Strategies

The product ladder does not enter the market uniformly. Different segments engage at different tiers, with different willingness to pay and different regulatory exposure. Drawing on Ward and Daniel's (2006) benefits dependency framework and Weill and Broadbent's (1998) IT infrastructure analysis, we identify six primary market segments, each with a distinct entry strategy.

**Elite Sports (B2B).** Professional sports organisations face a concrete problem: athlete transfers involve multi-million-euro investments with insufficient biological due diligence. Current medical evaluations capture a snapshot; they do not model trajectories. A biological digital twin that simulates injury risk, recovery dynamics, and performance ceilings under different training regimes transforms athlete valuation from art to engineering. Entry is at Tier 3, with Tiers 1 and 2 as prerequisites. This application has been explored in a companion paper addressing biological digital twins as mandatory due diligence infrastructure in elite sport (Waern, 2026c).

**Corporate Health (B2B2C).** Occupational health services represent a high-leverage distribution channel. A single corporate health provider may serve thousands of employees, making it one of the most capital-efficient acquisition strategies available. Entry is at Tier 1 (aggregate occupational health data) with upsell to Tier 2 (personalised recommendations, stress trajectory analysis). The employer pays; the employee benefits; the platform gains data and engagement.

**Pharmacy Chains (Distribution).** Pharmacies are the most frequented healthcare touchpoint in many jurisdictions. They hold medication history, dispense wellness products, and increasingly offer health screening services. Tier 1 integration (aggregating pharmacy data with user-contributed records) creates a natural distribution channel. Pharmacy chains benefit from differentiation in an increasingly commoditised retail environment.

**Insurance (Risk Assessment).** Insurers are incentivised to understand biological risk with greater precision. Tier 2 and Tier 3 capabilities — predictive modelling and mechanistic simulation — align directly with actuarial needs. Entry requires careful navigation of anti-discrimination regulations and data protection requirements, but the value proposition is unambiguous: better risk models reduce adverse selection and enable more accurate pricing.

**Patient Organisations (Freemium Entry).** Disease-specific patient communities represent a natural Tier 1 audience. Individuals managing chronic conditions are highly motivated to aggregate their data and track trends. Freemium entry (Tier 1 at no cost) builds a user base and generates condition-specific datasets that inform Tier 2 algorithm development. The social dimension — peer comparison, community benchmarks — adds engagement beyond individual utility.

**High-Net-Worth Individuals (Longevity).** The longevity market is characterised by high willingness to pay and low price sensitivity. It is not uncommon for families in this segment to spend upward of one million SEK on reactive cancer treatments without access to integrated data or predictive models — a pattern that illustrates the gap between spending and intelligence. HNW individuals enter at Tier 2 or Tier 3 directly, seeking concierge-grade biological insight. This segment funds the most expensive model development and generates the highest-fidelity calibration data.

### 3.2 Cross-Segment Dynamics

The six segments are not isolated. Data generated in the corporate health segment informs algorithm training that benefits patient organisations. Mechanistic models validated in elite sports can be adapted (with appropriate re-calibration) for longevity applications. The product ladder, combined with a multi-segment strategy, creates network effects: each segment contributes data, validation, and revenue that strengthens the platform for all others.

This is consistent with platform economics literature (Parker et al., 2016) and the concept of indirect network effects — the value of the platform to any one user increases as more users from different segments contribute data and demand different capabilities.

---

## 4. Regulatory Navigation

### 4.1 The Wellness–Medical Device Boundary

The European Medical Device Regulation (MDR 2017/745) defines a medical device as any instrument, apparatus, software, or material intended for diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease. The critical word is *intended*. A platform that aggregates and visualises personal health data without making diagnostic or therapeutic claims operates outside the MDR's scope — provided it is positioned as a wellness and lifestyle tool.

This is not a loophole but a legitimate architectural choice. Tier 1 (aggregation and visualisation) and significant portions of Tier 2 (trend identification, general wellness recommendations) can be designed to fall within the wellness category, avoiding the multi-year, multi-million-euro CE marking process. The U.S. Food and Drug Administration has taken a similar approach, explicitly excluding general wellness products from device regulation when they do not make disease-specific claims (FDA, 2019).

The regulatory boundary is not static, however. As Tier 2 recommendations become more specific — approaching clinical decision support — the platform risks crossing into regulated territory. Careful product design, claim management, and legal review are essential to maintain the wellness positioning while delivering genuine value. Under the EU AI Act (2024/1689), Tier 2 health recommendations likely fall within 'high-risk' AI systems as defined in Annex III, Section 5(b) — AI systems intended to be used as safety components in the management and operation of health-related services. This classification triggers conformity assessment obligations including risk management systems (Art. 9), data governance (Art. 10), transparency (Art. 13), and human oversight (Art. 14). The interaction with the MDR boundary is significant: a system classified as high-risk under the AI Act that also meets the MDR definition of a medical device must satisfy both regulatory frameworks simultaneously.

The wellness–medical device boundary is demonstrably unstable. In 2013, the FDA issued a warning letter to 23andMe ordering the company to cease marketing its Personal Genome Service for health-related purposes, on the grounds that the product met the definition of a medical device requiring premarket review (FDA, 2013). The subsequent reclassification process — culminating in de novo authorisation for genetic health risk tests — illustrates that products initially positioned as wellness or informational can be pulled into regulated territory as capabilities or claims evolve. The architectural implication is that the product ladder must be built modularly: if reclassification occurs for any component (e.g., a Tier 2 risk-scoring algorithm reclassified as clinical decision support software), that component must be isolable and submittable for conformity assessment without requiring a rebuild of the platform. Modular architecture is not merely a software engineering preference; it is a regulatory survival strategy.

### 4.2 GDPR and Health Data

Health data enjoys the highest protection under the General Data Protection Regulation (GDPR), classified as a special category under Article 9. Processing requires explicit consent (Art. 9(2)(a)) or another lawful basis. The product ladder's architecture must embed data protection by design (Art. 25), ensuring that:

- Users maintain full control over what data is aggregated and with whom it is shared.
- Data minimisation principles are respected — the platform processes only what is necessary for the requested tier of service.
- The right to data portability (Art. 20) is structurally guaranteed, not merely legally promised.
- Cross-border data transfers comply with adequacy decisions or appropriate safeguards (Chapter V).

The sovereign body thesis (Waern, 2026b) aligns naturally with GDPR's data subject rights: if the body is the persistent reality, the individual's authority over its computational representation is both an ethical imperative and a regulatory requirement.

### 4.3 Legislation as Tailwind

Regulatory trends favour the product ladder's trajectory. The European Health Data Space (EHDS) regulation, adopted in 2025, mandates interoperability of health data and strengthens individual access rights — directly supporting Tier 1's aggregation function. Occupational health legislation increasingly requires employers to adopt predictive and proactive approaches to employee wellbeing, creating demand for Tier 2 capabilities. The product ladder is aligned with this regulatory momentum rather than opposed to it.

---

## 5. Edge-Native Personal Health

### 5.1 The Case for Edge Intelligence

The dominant paradigm in digital health routes personal data to centralised cloud infrastructure for processing. This architecture introduces latency, creates single points of failure, raises data sovereignty concerns, and concentrates risk.

Edge-native architecture inverts this model. Intelligence is created where data is generated — on the user's device or local infrastructure — with selective, encrypted synchronisation to cloud services only when necessary. For personal biological data, this is not merely a performance optimisation; it is an architectural expression of data sovereignty.

The body's data should be processed where the body is. This principle, which we term *edge-native personal health*, has three implications:

1. **Latency.** Real-time biometric data from wearables (heart rate variability, continuous glucose monitoring, sleep staging) loses value when round-tripped to a cloud server. Edge processing enables immediate feedback loops.

2. **Sovereignty.** Personal biological data processed locally remains under the individual's physical and legal control. No third-party server holds a copy unless the user explicitly authorises it. This aligns with GDPR's data minimisation and purpose limitation principles and with emerging frameworks for data sovereignty as a foundational right rather than a contractual privilege (Hummel et al., 2021).

3. **Resilience.** An edge-native architecture continues to function during network outages, in low-connectivity environments, and in jurisdictions where cross-border data transfer is restricted. Health intelligence should not depend on an internet connection.

### 5.2 Architectural Implications

Edge-native architecture imposes constraints that shape the product ladder's implementation. Tier 1 (aggregation) must function as a local-first application with sync capabilities. Tier 2 (interpretation) requires lightweight machine learning models capable of inference on consumer hardware — a requirement increasingly feasible with quantised large language models and purpose-built edge AI chips (Dhar et al., 2024). Tier 3 (simulation) presents the greatest challenge: mechanistic models are computationally intensive, and full simulation may require hybrid edge-cloud execution where sensitive data remains local while computation is distributed.

In practice, edge deployment of health intelligence requires specific framework choices. ONNX Runtime provides model portability across hardware targets, enabling a single trained model to execute on x86, ARM, and GPU backends without re-engineering. TensorFlow Lite enables on-device inference for mobile platforms with models quantised to 8-bit integers, reducing memory footprint by 4x with minimal accuracy loss. Tier 2 AI predictions — metabolic risk scoring, biomarker trend analysis, test recommendations — are feasible on current smartphone hardware (inference times under 100ms for typical model sizes). Tier 3 mechanistic simulation, however, involves solving stiff ODE systems (solved using implicit integration methods such as CVODE from the SUNDIALS suite; Hindmarsh et al., 2005) with hundreds of state variables and requires dedicated edge compute at GPU workstation class (e.g., NVIDIA Jetson Orin or equivalent) for real-time personalised simulation.

The infrastructure pattern — local-first, sync-later — mirrors the architecture of successful offline-capable applications (Kleppmann & Beresford, 2017) and positions the platform for deployment in resource-constrained settings where centralised cloud access cannot be assumed.

---

## 6. The Equity Dimension

### 6.1 Data Gaps and Representational Harm

The promise of personalised health intelligence carries a risk: personalisation is only as good as the data it draws upon. Women, ethnic minorities, older adults, and populations in low-income settings are systematically underrepresented in clinical datasets, biobanks, and the training corpora of health AI systems (Cirillo et al., 2020; Obermeyer et al., 2019). A product ladder built on biased data will perpetuate — and potentially amplify — existing health inequities.

Women's health data, in particular, suffers from decades of exclusion. Until 1993, U.S. clinical trials routinely excluded women of childbearing age. The legacy persists: cardiovascular risk models, pharmacokinetic parameters, and diagnostic thresholds remain calibrated primarily to male physiology (Mauvais-Jarvis et al., 2020). A biological digital twin calibrated on male-dominated datasets will systematically misrepresent female biology.

### 6.2 Equity as Architectural Requirement

Addressing this requires more than algorithmic fairness post hoc. Equity must be an architectural requirement. The survey by Mehrabi et al. (2021) catalogues over twenty distinct types of bias in machine learning systems; health applications are susceptible to nearly all of them. Mitchell et al. (2019) propose Model Cards as a standardised framework for reporting model performance across demographic subgroups — a practice that should be mandatory for any Tier 2 or Tier 3 component making health-relevant predictions.

- **Data collection.** Tier 1's aggregation function should actively identify and flag data gaps in the user's profile, recommending additional measurements that would improve model fidelity for their specific demographic.
- **Model validation.** Tier 3's mechanistic models must be validated across demographic strata, with transparent reporting of performance differentials. The WHO Quality of Life framework (WHOQOL-BREF) provides a cross-cultural assessment structure that can inform equity-aware model evaluation (The WHOQOL Group, 1998).
- **Access.** The freemium Tier 1 entry point ensures that data aggregation — the foundational capability — is accessible regardless of ability to pay. Patient organisation partnerships (Section 3.1) extend reach into communities that commercial health platforms typically underserve.
- **Feedback loops.** Users from underrepresented populations who contribute data improve model performance for their cohort, creating a virtuous cycle — provided that consent, compensation, and data governance are handled equitably.

The sovereign body thesis (Waern, 2026b) acquires particular urgency in this context. If biological sovereignty is a right, it must be a universal right — not a privilege available only to those who can afford Tier 3. The product ladder's tiered structure is designed to ensure that foundational capabilities are broadly accessible while advanced capabilities fund their own development.

---

## 7. Limitations

This paper is a position paper, not an empirical study. Its claims rest on conceptual analysis, market observation, and a single structured roadmap discussion with a business strategist. Several limitations should be acknowledged:

1. **Single informant.** While the roadmap discussion provided rich strategic insight, the market architecture and entry strategies described here have not been validated through systematic market research or customer discovery at scale.

2. **Tier 3 undeployed.** No consumer-facing biological digital twin with full mechanistic simulation is currently operational. The product ladder's apex remains aspirational, and the technical, commercial, and regulatory challenges of deploying Tier 3 at scale are substantial and insufficiently characterised.

3. **Regulatory uncertainty.** The wellness–medical device boundary is jurisdiction-specific and subject to evolving interpretation. Regulatory bodies may reclassify wellness tools as medical devices as capabilities increase, invalidating the positioning strategy described in Section 4.

4. **Equity claims untested.** The equity architecture described in Section 6 is prescriptive. Whether freemium models, patient organisation partnerships, and demographic-aware data collection actually reduce health data inequities requires empirical investigation.

5. **Edge computing constraints.** The feasibility of running meaningful mechanistic simulations on consumer edge devices is contingent on hardware trajectories that may not materialise as projected.

6. **Business model assumptions.** The willingness-to-pay assumptions underlying the three-tier pricing model are drawn from analogous markets (precision medicine, longevity services) rather than from direct validation with target customers.

These limitations are intrinsic to position papers, which trade empirical rigour for conceptual clarity and provocative framing. We present this work as a scaffold for future research and product development, not as a validated business plan.

---

## 8. Future Research and Conclusion

### 8.1 Future Research Directions

The product ladder framework opens several avenues for empirical and theoretical inquiry:

- **Willingness-to-pay studies** across the six market segments, with particular attention to the corporate health and insurance segments where B2B dynamics complicate individual valuation.
- **Regulatory sandbox experiments** testing the wellness–medical device boundary with Tier 2 capabilities across multiple jurisdictions (EU, US, UK, Singapore).
- **Technical benchmarks** for edge-native mechanistic simulation, establishing minimum viable model complexity for clinically relevant predictions on consumer hardware.
- **Equity audits** of biological digital twin prototypes, measuring demographic performance differentials and the effectiveness of mitigation strategies.
- **Longitudinal studies** of Tier 1 users to determine whether data aggregation alone — prior to any AI-driven interpretation — improves health literacy, engagement, and outcomes.
- **Interoperability analysis** of the boundary object (Star & Griesemer, 1989) properties of the unified personal health record across clinical, research, and self-care contexts.
- **Ethical framework development** for mechanistic simulation of human biology, addressing questions of model transparency, liability for simulation-informed decisions, and the psychological impact of biological prediction.

### 8.2 Conclusion

The biological digital twin is not a single product; it is a destination. The product ladder framework proposed here charts a viable path to that destination — one that delivers value at every stage, sustains itself commercially, and preserves the architectural integrity needed for mechanistic simulation at the apex.

The core ontological claim is simple: the body already exists as the most authoritative source of truth about an individual's biology. The product ladder progressively reduces the distance between shadow and reality, from aggregation (seeing all the shadows together) through interpretation (understanding what they mean) to simulation (modelling the reality that casts them).

This is not merely a commercial strategy. It is an epistemological programme: a structured approach to knowing the body computationally, with each tier representing a qualitatively different relationship between the knower and the known. The market segments, regulatory strategies, and architectural choices described here serve this programme — not the other way around.

The path from data fragmentation to biological simulation is long, but it need not be walked all at once or without revenue. The product ladder ensures that every step creates value, every tier funds the next, and the destination — a sovereign, mechanistic, edge-native biological digital twin — remains architecturally achievable from the very first line of code.

---

## References

Björnsson, B., Borrebaeck, C., Elander, N., Gasslander, T., Gawel, D. R., Gustafsson, M., Jörnsten, R., Lee, E. J., Li, X., Liber, S., Liljedahl, U., Ljungqvist, O., Lohmander, L. S., Martens, L., Nilsson, P., Nyman, E., Olsen, D., Qian, H., Röttinger, C., ... Zeng, L. (2020). Digital twins to personalize medicine. *Genome Medicine*, *12*(1), 4. https://doi.org/10.1186/s13073-019-0701-3

Cedersund, G., & Roll, J. (2009). Systems biology: Model based evaluation and comparison of potential explanations for given biological data. *The FEBS Journal*, *276*(4), 903–922. https://doi.org/10.1111/j.1742-4658.2008.06845.x

Carlile, P. R. (2004). Transferring, translating, and transforming: An integrative framework for managing knowledge across boundaries. *Organization Science*, *15*(5), 555–568. https://doi.org/10.1287/orsc.1040.0094

Cirillo, D., Catuara-Solarz, S., Morey, C., Guney, E., Subirats, L., Mellino, S., Gigante, A., Valencia, A., Rementeria, M. J., Chadha, A. S., & Mavridis, N. (2020). Sex and gender differences and biases in artificial intelligence for biomedicine and healthcare. *npj Digital Medicine*, *3*(1), 81. https://doi.org/10.1038/s41746-020-0288-5

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, *35*(1), 128–152. https://doi.org/10.2307/2393553

Corral-Acero, J., Margara, F., Marciniak, M., Rodero, C., Feng, Y., Gilbert, A., Fernandes, J. F., Walmsley, A., Leder, T., Doshi, S., Smedley, J., Maceira, A., Grau, V., Kuhl, E., Asner, S., Rajamannan, N., Lamata, P., et al. (2020). The 'digital twin' to enable the vision of precision cardiology. *European Heart Journal*, *41*(48), 4556–4564. https://doi.org/10.1093/eurheartj/ehaa159

Dalla Man, C., Rizza, R. A., & Cobelli, C. (2007). Meal simulation model of the glucose-insulin system. *IEEE Transactions on Biomedical Engineering*, *54*(10), 1740–1749. https://doi.org/10.1109/TBME.2007.893506

Dhar, P., Singh, A., & Raghavan, S. (2024). Edge AI for health: A survey of on-device inference for biomedical applications. *ACM Computing Surveys*, *56*(3), 1–38. https://doi.org/10.1145/3614419

European Parliament and Council. (2016). Regulation (EU) 2016/679 on the protection of natural persons with regard to the processing of personal data (General Data Protection Regulation). *Official Journal of the European Union*, L 119, 1–88.

European Parliament and Council. (2017). Regulation (EU) 2017/745 on medical devices. *Official Journal of the European Union*, L 117, 1–175.

European Parliament and Council. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, L 2024/1689.

European Parliament and Council. (2025). Regulation (EU) 2025/327 on the European Health Data Space. *Official Journal of the European Union*, L 2025/327.

FDA. (2013). *Warning letter to 23andMe, Inc.* (Document GEN1300666). U.S. Department of Health and Human Services.

FDA. (2019). *General wellness: Policy for low risk devices — Guidance for industry and Food and Drug Administration staff*. U.S. Department of Health and Human Services.

Hunter, P., Chapman, T., Coveney, P. V., de Bono, B., Diaz, V., Fenner, J., Frangi, A. F., Harris, P., Hose, R., Kohl, P., Lawford, P., McCormack, K., Mendes, M., Omholt, S., Quarteroni, A., Shublaq, N., Skår, J., Stroetmann, K., Tegner, J., ... Viceconti, M. (2013). A vision and strategy for the virtual physiological human: 2012 update. *Interface Focus*, *3*(2), 20130004. https://doi.org/10.1098/rsfs.2013.0004

Hindmarsh, A. C., Brown, P. N., Grant, K. E., Lee, S. L., Serban, R., Shumaker, D. E., & Woodward, C. S. (2005). SUNDIALS: Suite of nonlinear and differential/algebraic equation solvers. *ACM Transactions on Mathematical Software*, *31*(3), 363–396. https://doi.org/10.1145/1089014.1089020

Hummel, P., Braun, M., Tretter, M., & Dabrock, P. (2021). Data sovereignty: A review. *Big Data & Society*, *8*(1), 1–17. https://doi.org/10.1177/2053951720982012

Kleppmann, M., & Beresford, A. R. (2017). A conflict-free replicated JSON datatype. *IEEE Transactions on Parallel and Distributed Systems*, *28*(10), 2733–2746. https://doi.org/10.1109/TPDS.2017.2697382

Korzybski, A. (1933). *Science and sanity: An introduction to non-Aristotelian systems and general semantics*. International Non-Aristotelian Library.

Laubenbacher, R., Niarakis, A., Helikar, T., An, G., Shapiro, B., Malik-Sheriff, R. S., Martins dos Santos, V. A. P., Thakar, J., & Glazier, J. A. (2024). Building digital twins of the human immune system: Toward a roadmap. *npj Digital Medicine*, *7*(1), 44. https://doi.org/10.1038/s41746-024-01015-w

Mauvais-Jarvis, F., Bairey Merz, N., Barnes, P. J., Brinton, R. D., Carrero, J.-J., DeMeo, D. L., De Vries, G. J., Epperson, C. N., Govindan, R., Klein, S. L., Maki, P. M., McCullough, L. D., Regitz-Zagrosek, V., Regensteiner, J. G., Rubin, J. B., Sandberg, K., & Suzuki, A. (2020). Sex and gender: Modifiers of health, disease, and medicine. *The Lancet*, *396*(10250), 565–582. https://doi.org/10.1016/S0140-6736(20)31561-0

Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2021). A survey on bias and fairness in machine learning. *ACM Computing Surveys*, *54*(6), 1–35. https://doi.org/10.1145/3457607

Mitchell, M., Wu, S., Zaldivar, A., Barnes, P., Vasserman, L., Hutchinson, B., Spitzer, E., Raji, I. D., & Gebru, T. (2019). Model cards for model reporting. *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 220–229. https://doi.org/10.1145/3287560.3287596

Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, *366*(6464), 447–453. https://doi.org/10.1126/science.aax2342

Parker, G. G., Van Alstyne, M. W., & Choudary, S. P. (2016). *Platform revolution: How networked markets are transforming the economy and how to make them work for you*. W. W. Norton.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, 'translations' and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, *19*(3), 387–420. https://doi.org/10.1177/030631289019003001

The WHOQOL Group. (1998). Development of the World Health Organization WHOQOL-BREF quality of life assessment. *Psychological Medicine*, *28*(3), 551–558. https://doi.org/10.1017/S0033291798006667

Topol, E. J. (2019). *Deep medicine: How artificial intelligence can make healthcare human again*. Basic Books.

Waern, N. (2026a). The reality construct: A foundational ontology for digital twin systems (Version 2). Zenodo. https://doi.org/10.5281/zenodo.19587944

Waern, N. (2026b). The sovereign body: Data rights and biological digital twins. Zenodo. https://doi.org/10.5281/zenodo.19586851

Waern, N. (2026c). Biological digital twins as mandatory due diligence in elite athlete transfers. Zenodo. https://doi.org/10.5281/zenodo.19586867

Ward, J., & Daniel, E. (2006). *Benefits management: Delivering value from IS and IT investments*. John Wiley & Sons.

Weick, K. E. (1995). *Sensemaking in organizations*. Sage Publications.

Weill, P., & Broadbent, M. (1998). *Leveraging the new infrastructure: How market leaders capitalize on information technology*. Harvard Business School Press.
