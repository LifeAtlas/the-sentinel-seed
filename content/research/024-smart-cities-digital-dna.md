---
title: "Digital DNA Scoring: Measuring a City's Readiness for Autonomous Operations"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: smart city, digital twin, readiness index, SMILE methodology, AI agent, autonomous operations, digital maturity, Actor-Network Theory, boundary objects, participatory governance, cultural adoption, urban informatics, design science research
status: ready
date: 2026-04-16
---

# Digital DNA Scoring: Measuring a City's Readiness for Autonomous Operations

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The phrase "smart city" has been in circulation for over two decades, yet no widely adopted, quantifiable benchmark exists for measuring a city's actual readiness to operate AI-assisted autonomous services at scale. Existing frameworks — smart city indices, digital maturity assessments, e-government rankings — measure infrastructure availability, policy adoption, and service digitisation, but do not capture the layered capability gap between a city that has deployed sensors and a city that can act autonomously on sensor data in real time. This paper introduces the Digital DNA Score (DDNAS): a composite readiness metric for urban AI agent deployment, grounded in the SMILE methodology's five interoperability layers (Signal, Model, Integration, Learning, Execution) extended with two cultural layers (Governance Transparency and Citizen Trust). Drawing on Actor-Network Theory (ANT) to analyse the heterogeneous network of actants — municipal data platforms, procurement frameworks, citizen advocacy groups, AI agent runtimes, governance models, and the lived experience of urban residents — that must be enrolled to produce autonomous urban operations, we argue that the primary barriers to smart city maturity are not technical but political and cultural. We ground the analysis in a 105-minute interview-based thesis examination exploring the urban digital twin landscape, which surfaces recurrent themes: citizen resistance to algorithmic governance, procurement path dependency, and the absence of meaningful public participation in urban AI deployment decisions. We propose a seven-dimension DDNAS scoring rubric, evaluate three hypothetical city archetypes against it, and identify the translation moments that most commonly produce stagnation between maturity levels. Three falsifiable propositions are stated. We engage the counter-argument that autonomous urban operations are premature given current AI reliability and argue that readiness scoring, precisely because it makes the gap between aspiration and capability explicit, is the governance tool needed to make the argument for or against autonomous deployment evidence-based rather than rhetorical.

**Keywords:** smart city, digital twin, readiness index, SMILE methodology, AI agent, autonomous operations, digital maturity, Actor-Network Theory, boundary objects, participatory governance, cultural adoption, urban informatics, design science research

---

## 1. Introduction: The Smart City Maturity Illusion

In the decade following the popularisation of the smart city concept, a substantial industry grew around measuring urban intelligence. Smart city indices proliferated: Bloomberg's Smart City Challenge, the IESE Cities in Motion Index, the Ericsson Smart City Accelerator, the EU Smart Cities and Communities initiative, the ISO 37120 standard for city indicators. Cities competed for rankings. Mayors announced smart city strategies. Tenders for sensor networks, data platforms, and analytics dashboards were issued across European, North American, and Asian urban administrations.

The result, surveyed honestly, is more modest than the rhetoric suggests. Many cities have deployed sensors. Most have established some form of urban data platform. A smaller number have created working real-time dashboards. A still smaller number have deployed AI-assisted decision support for specific municipal services (traffic signal optimisation, waste collection routing, parking availability). Almost none have operationalised what the smart city concept originally promised: genuinely autonomous urban operations in which AI agents take consequential actions on behalf of the city without per-action human approval.

This gap is not primarily a technology gap. The enabling technologies — urban-scale sensor networks, real-time data streaming infrastructure, production-grade AI agent runtimes, digital twin simulation environments — are commercially available and technically mature. The gap is a readiness gap: cities lack the layered infrastructure of data quality, semantic integration, governance clarity, and citizen trust that autonomous urban AI operations require.

Existing readiness frameworks do not measure this gap. They measure input variables (how many sensors? what bandwidth? what policy commitments?) rather than capability variables (can the city's AI agents act on real-time sensor data within the governance constraints that citizens have agreed to, at the speed required for effective intervention?).

This paper introduces the Digital DNA Score (DDNAS) as a framework for measuring capability readiness rather than input availability. The analogy is deliberate: just as biological DNA encodes the organism's capability to respond to environmental conditions — not the conditions themselves, but the capacity to respond — a city's digital DNA encodes its capacity to deploy autonomous AI operations, not the digital infrastructure it has deployed.

---

## 2. Theoretical Framework

### 2.1 SMILE Methodology and Its Urban Extension

The SMILE methodology [1] defines five layers of digital twin deployment maturity: Signal (data acquisition and quality), Model (computational representation of the physical system), Integration (data flows between systems and actors), Learning (adaptive capability based on historical data), and Execution (ability to act, not merely report). Each layer is both a prerequisite for and an enabler of the next: a city cannot learn from data it cannot model; it cannot act on insights it cannot generate.

The original SMILE formulation was developed for industrial and health digital twin contexts [1]. Its extension to urban contexts requires two additional layers that reflect the fundamentally political character of city governance:

**Governance Transparency (GT).** The city's digital AI operations are explicable to citizens, auditable by regulators, and subject to democratic accountability mechanisms. This layer is not present in industrial or health digital twin contexts with the same intensity because those contexts have narrower stakeholder communities; a city's AI operations affect all residents.

**Citizen Trust (CT).** The city's residents have sufficient understanding of, and confidence in, the AI systems that affect their daily lives to accept autonomous operations without consistent political resistance. This is not a technical property; it is a social property that must be cultivated through participatory design, transparent communication, and demonstrated benefit.

### 2.2 ANT and Urban AI Governance

ANT [2][3] is particularly apt for urban digital twin analysis because the city is, in ANT terms, a vast heterogeneous network of actants whose properties are continuously negotiated. The traffic light is an actant: it shapes driver behaviour, pedestrian movement, emergency response routing, and carbon emissions. The procurement framework is an actant: it inscribes assumptions about technology vendor selection, contract duration, and performance metrics that shape what AI systems can be deployed. The citizen advocacy group is an actant: it can veto, delay, or fundamentally reshape AI deployment decisions by mobilising political opposition.

The concept of *inscription* [4] is central: the DDNAS framework is itself an inscription device. By scoring cities on specific readiness dimensions, it inscribes assumptions about what matters for autonomous urban AI deployment. The dimensions selected, the scoring rubric, and the weighting of dimensions relative to each other all encode political and technical choices that should be made explicit.

### 2.3 The Thesis Interview as Data Source

The analysis is informed by a 105-minute thesis interview exploring the state of urban digital twin practice. The interview explored five themes: the gap between smart city rhetoric and operational reality; the role of citizen participation in AI deployment decisions; the technology barriers most frequently cited by urban data managers; the governance models that have enabled or blocked autonomous operations in pilot contexts; and the cultural factors that distinguish cities that have successfully operationalised AI agent systems from those that have stalled.

The interview is used as a qualitative data source, not as a representative survey. Direct quotation is not used; themes are abstracted and generalised. The interview informs the DDNAS rubric and the city archetype analysis in Section 5.

Data was collected through a semi-structured interview (105 minutes, recorded with consent) following Kvale and Brinkmann's (2009) qualitative research methodology. The interview guide covered four topic areas: (1) the gap between smart city strategic commitments and operational AI deployment reality; (2) governance and accountability models for urban AI systems; (3) citizen participation mechanisms in AI deployment decisions; and (4) procurement and institutional barriers to digital twin maturity advancement. Findings were analysed using thematic coding, with themes mapped against the seven DDNAS dimensions to verify dimensional coverage. Single-interview design is acknowledged as a limitation; triangulation through document analysis of published smart city strategies and audit reports, and follow-up correspondence with the interviewee to verify theme interpretation, partially mitigates the risks of single-source dependency.

---

## 3. The Digital DNA Score: Seven-Dimension Framework

### 3.1 Dimension Definitions

The DDNAS scores a city across seven dimensions, each on a 0–20 scale, for a composite score of 0–140:

**S — Signal Quality (max 20).** The city's sensor network provides continuous, high-quality, semantically labelled data streams from all operationally relevant urban systems. Scoring: 0 (no integrated sensor data), 5 (siloed sensor deployments with manual data integration), 10 (centralised data platform with real-time feeds from primary systems), 15 (cross-domain data integration with automated quality scoring), 20 (complete sensor coverage of all operationally relevant systems with automated anomaly detection and QC).

**M — Model Fidelity (max 20).** The city's digital twin models produce accurate predictions of urban system behaviour under baseline and intervention scenarios. Scoring: 0 (no simulation capability), 5 (static visualisation of sensor data), 10 (rule-based simulation of single domain), 15 (physics-informed simulation of multiple domains with calibrated uncertainty), 20 (adaptive multi-domain simulation with continuous calibration against observed outcomes).

**I — Integration Depth (max 20).** Cross-system, cross-department, and cross-organisation data flows support coordinated automated analysis. Scoring: 0 (fully siloed), 5 (bilateral data sharing agreements between some departments), 10 (municipal data platform with standardised API integration), 15 (cross-organisational data fabric including utilities, transport, and health), 20 (open, queryable semantic integration layer covering all relevant urban data producers).

**L — Learning Capability (max 20).** The city's AI systems improve their predictions and recommendations based on historical outcome data. Scoring: 0 (no ML in operational systems), 5 (ML applied to single domain with manual model updates), 10 (automated model retraining in at least one domain with A/B testing), 15 (multi-domain adaptive AI with automated performance monitoring), 20 (continuous learning systems with formal model governance and bias auditing across all AI-assisted services).

**E — Execution Readiness (max 20).** The city can take automated actions on AI agent recommendations within defined parameters without per-action human approval. Scoring: 0 (all actions require manual approval), 5 (automated action in low-risk, reversible domains — e.g., traffic signal timing), 10 (automated action in medium-risk domains with post-hoc audit), 15 (delegated autonomous action with real-time monitoring and automatic escalation), 20 (full autonomous operation within governance-approved parameters with exception-based human oversight).

**GT — Governance Transparency (max 20).** The city's AI systems are explicable, auditable, and democratically accountable. Scoring: 0 (no public information about AI use), 5 (published list of AI systems in use), 10 (algorithmic impact assessments for high-risk systems), 15 (public audit reports and accessible appeal mechanisms), 20 (real-time public dashboards showing AI decision audit trails with meaningful appeal rights).

**CT — Citizen Trust (max 20).** Urban residents have demonstrated understanding of and confidence in the city's AI systems. Scoring: 0 (active public opposition to AI deployment), 5 (passive acceptance without meaningful engagement), 10 (evidence of informed public participation in AI design decisions), 15 (co-produced AI governance frameworks with measurable citizen satisfaction), 20 (sustained citizen engagement in AI oversight with demonstrable trust scores above population baselines).

### 3.2 Composite Score Interpretation

| DDNAS Range | Interpretation |
|---|---|
| 0–30 | Pre-digital: sensors may exist but integrated AI operations are not viable |
| 31–60 | Aspirational: digital infrastructure deployed but governance and cultural layers are missing |
| 61–90 | Functional: AI-assisted decision support operational in pilot domains; autonomous action limited |
| 91–120 | Advanced: multi-domain AI operations with mature governance and emerging citizen trust |
| 121–140 | Exemplary: full autonomous operation within democratic governance constraints; internationally replicable |

No real city, to the authors' knowledge, currently scores above 90. The Exemplary category is a design target, not a description of current practice.

---

## 4. Cultural Adoption Barriers: The Interview Evidence

The thesis interview consistently surfaced three cultural barriers that are not captured by technical readiness frameworks:

### 4.1 Algorithmic Governance Anxiety

Urban residents and elected officials in multiple contexts express what can be described as algorithmic governance anxiety: a diffuse but persistent concern that autonomous AI systems will make consequential decisions about citizens' lives without meaningful human accountability. This anxiety is not irrational — it is grounded in documented cases of algorithmic decision-making that produced discriminatory outcomes in welfare systems, policing, and child protection.

The anxiety attaches to autonomous operations specifically, not to AI decision support. Residents who accept that a traffic signal timing algorithm is adjusted by AI find it significantly less acceptable that an AI system makes decisions about social housing allocation or benefit entitlement without human review. The DDNAS's CT dimension captures this distinction: a city that has achieved high CT for low-stakes autonomous operations may have very low CT for high-stakes operations, and the composite score should be interpreted domain-specifically.

### 4.2 Procurement Path Dependency

The thesis interview identified procurement path dependency as a major barrier to DDNAS advancement. Cities that made early investments in proprietary urban data platform technology — platforms with closed APIs, vendor-controlled data models, and contractual restrictions on third-party integration — find themselves trapped in architectures that cannot be extended to support the Integration Depth required for DDNAS scores above 60.

The ANT reading: the proprietary data platform vendor enrolled itself as an obligatory passage point for the city's data flows at a time when the city lacked the technical capacity to specify interoperability requirements. The vendor's platform inscribed assumptions about data ownership and API access that are now locked into the city's infrastructure layer by multi-year contracts. Breaking out of this inscription requires either contract termination (expensive and politically contentious) or the development of a semantic integration layer that abstracts away the platform's proprietary characteristics (technically complex but increasingly viable with modern middleware).

### 4.3 Participation Deficit

The thesis interview identified a consistent absence of meaningful public participation in urban AI deployment decisions. Cities consult residents on urban planning decisions, on transport network changes, on public space design. They do not, as standard practice, consult residents on which AI systems will manage their city services, what governance constraints those systems will operate under, or how residents can appeal AI-assisted decisions that affect them.

This participation deficit undermines the CT dimension of the DDNAS. It is also a governance risk: AI systems deployed without public engagement are vulnerable to post-hoc political opposition that can force rapid withdrawal, wasting the investment and eroding public confidence in subsequent deployments.

---

## 5. City Archetype Analysis

### 5.1 Archetype A: The Infrastructure-Heavy Laggard

A large European capital city has invested heavily in smart city infrastructure over a decade: 80,000 connected IoT sensors, a central data platform receiving 1.2 million data points per minute, a 3D city model updated monthly from LiDAR surveys, and dedicated smart city management teams in every major municipal department. DDNAS estimated: S=18, M=14, I=10, L=7, E=4, GT=6, CT=5. Composite: 64/140.

The city's Execution Readiness (E=4) and Citizen Trust (CT=5) scores reflect that despite its technical infrastructure, it has deployed autonomous action only in traffic signal timing and waste compaction alerts. Its governance transparency is poor: no public-facing audit trails exist for any AI-assisted decision. Its citizen trust score reflects the absence of public participation in AI deployment decisions, despite extensive consultation on other urban planning matters. The primary barrier to advancement is not technical: it is the absence of a governance framework that would allow the city to specify, approve, and audit autonomous AI operations.

### 5.2 Archetype B: The Governance-Forward Pioneer

A mid-sized Nordic city has invested less in hardware and more in governance: a published algorithmic register listing all AI systems in municipal use, algorithmic impact assessments for high-risk applications, a citizen AI oversight board with elected members, and a participatory design process for new AI deployments. DDNAS estimated: S=11, M=9, I=12, L=10, E=9, GT=17, CT=15. Composite: 83/140.

The city's Governance Transparency (GT=17) and Citizen Trust (CT=15) scores are the highest in the archetype set, reflecting sustained investment in democratic AI accountability. Its Signal Quality (S=11) is moderate — it has not made the hardware investments of Archetype A — but its Integration Depth (I=12) is higher because its governance framework required open API standards and data sharing agreements as conditions of the AI deployment approvals. The primary barrier to advancement is the Signal and Model layers: the city has the governance infrastructure for autonomous operations but not yet the data quality and simulation fidelity required to deploy them safely.

### 5.3 Archetype C: The Vendor-Dependent Dependent

A fast-growing city in a middle-income economy has deployed a comprehensive smart city platform from a single vendor, covering traffic management, public safety surveillance, waste management, and utility monitoring. DDNAS estimated: S=14, M=10, I=5, L=8, E=11, GT=3, CT=3. Composite: 54/140.

The city's low Integration Depth (I=5) reflects the platform's closed architecture. Its very low Governance Transparency (GT=3) and Citizen Trust (CT=3) reflect the absence of public accountability mechanisms — the platform's AI operations are opaque to residents and to elected officials. Its Execution Readiness (E=11) is deceptively high: the vendor platform autonomously manages several urban services, but this execution occurs within the vendor's proprietary governance model, not within a city-controlled framework. The city is operationally dependent on the vendor; its DDNAS score is partly owned by the vendor's capabilities rather than the city's own governance and data infrastructure.

---

## 6. Counter-Argument: Premature Autonomy Risks

The primary counter-argument to autonomous urban operations — and by extension to the DDNAS framework that rates cities by their readiness for such operations — is that current AI reliability is insufficient for consequential autonomous municipal decision-making. AI systems fail in ways that are difficult to anticipate, difficult to detect, and difficult to reverse. The consequences of an AI traffic management system making a cascading error that blocks emergency vehicle access, or an AI social services allocation system systematically disadvantaging a demographic group, may be severe. Why measure readiness for operations that should not be deployed?

This argument deserves a direct response. The DDNAS framework does not advocate for autonomous operations regardless of readiness. It measures readiness precisely because the question of whether a specific city is ready for autonomous operation in a specific domain is currently unanswerable — there is no agreed framework for making the assessment. Without a readiness framework, the choice between deployment and non-deployment is made on the basis of vendor salesmanship, political aspiration, or administrative risk-aversion — none of which produces evidence-based governance.

The DDNAS makes the risk factors visible and measurable. A city with E=10 but GT=3 and CT=3 — which is deploying autonomous operations without governance transparency or citizen trust — is exactly the city that needs to be identified and challenged. The framework is as useful for identifying cities that are deploying prematurely as for identifying cities that are ready to deploy.

---

## 7. Falsifiable Propositions

1. **The governance correlation proposition:** Cities with DDNAS Governance Transparency scores above 15 will have statistically significantly higher rates of sustained public acceptance for autonomous urban AI operations over a three-year period compared to cities with GT scores below 10. This proposition can be falsified by a longitudinal study of urban AI deployment outcomes showing no significant correlation between GT scores and public acceptance stability.

2. **The procurement path dependency proposition:** Cities that procured their primary urban data platform under technology-neutral open standards requirements will achieve DDNAS Integration Depth scores at least 4 points higher than cities that procured under vendor-specific platform contracts, after controlling for city size and investment level. This proposition can be falsified by a cross-city study showing no significant difference in Integration Depth scores by procurement model.

3. **The cultural layer primacy proposition:** For cities with DDNAS composite scores above 60, the variance in total score is more strongly determined by the CT and GT dimensions than by the S, M, I, L, or E dimensions. This proposition can be falsified by a regression analysis of DDNAS scores showing technical dimensions (S, M, I, L, E) explaining more variance in composite scores than cultural dimensions (GT, CT) for cities in this range.

---

## 8. Limitations and Future Research

The DDNAS rubric is proposed rather than validated. The scoring criteria have not been empirically calibrated against independent assessments of urban AI readiness. The city archetype analysis is constructed from illustrative parameters, not primary data collection from real cities.

The weighting of the seven dimensions is currently equal (20 points each); there is no empirical basis for this choice. The relative importance of governance and cultural dimensions versus technical dimensions may vary significantly between governance contexts (liberal democracies versus authoritarian systems) and between urban policy domains (traffic management versus social services).

Future research should: (1) pilot the DDNAS with a sample of at least 20 cities using independent assessors to evaluate inter-rater reliability; (2) conduct a longitudinal study correlating DDNAS scores with outcome metrics (AI-related governance incidents, citizen complaint rates, service performance) over a three-year period; (3) develop domain-specific DDNAS variants for high-stakes urban AI applications (social services, public safety) where the balance between autonomy and human oversight is most contested.

---

## 9. Conclusion

The smart city concept has produced significant investment in urban sensing and data infrastructure. It has not produced a corresponding investment in the governance and cultural infrastructure that autonomous urban AI operations require. The Digital DNA Score is proposed as the instrument for making this gap visible — not as an advocacy tool for autonomous operations, but as an honest assessment of where cities actually are relative to where they claim to be.

The ANT analysis reveals that the barriers to DDNAS advancement are predominantly translational: procurement frameworks that inscribe proprietary lock-in, governance structures that exclude citizens from AI oversight, and cultural dynamics that generate algorithmic anxiety in the absence of meaningful engagement. None of these are technical problems. They are social problems that require social solutions — participatory design, algorithmic transparency legislation, public deliberation about AI in urban governance — alongside technical solutions.

The thesis interview evidence suggests that the cities closest to genuine autonomous operational readiness are not the ones with the most sensors or the most sophisticated AI systems. They are the ones that have invested in the democratic infrastructure of AI governance alongside the computational infrastructure. That is the insight the DDNAS is designed to make actionable.

---

## References

[1] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.

[2] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[3] Latour B. *Science in Action.* Harvard University Press, 1987.

[4] Akrich M. The de-scription of technical objects. In: Bijker W, Law J (eds.) *Shaping Technology/Building Society.* MIT Press, 1992: 205–224.

[5] Star SL, Griesemer JR. Institutional ecology, 'translations' and boundary objects: amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science* 1989;19(3):387–420.

[6] Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (AI Act). European Parliament and Council, 2024.

[7] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[8] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[9] ISO 37120:2018. Sustainable cities and communities — Indicators for city services and quality of life. International Organization for Standardization, 2018.

[10] European Commission. Smart Cities and Communities. https://ec.europa.eu/info/eu-regional-and-urban-development/topics/cities-and-urban-development/city-initiatives/smart-cities_en [accessed 2026].
