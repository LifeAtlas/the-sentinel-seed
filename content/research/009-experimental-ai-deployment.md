# Ship It Broken, Label It Honest: Deployment Patterns for AI Agents in Early-Stage Wellness Platforms

**Nicolas Waern**
WINNIIO AB
ORCID: 0000-0001-7970-2707

**License:** CC-BY-4.0

**Preprint** | Position Paper | April 2026

---

## Abstract

The integration of artificial intelligence agents into consumer wellness platforms creates a deployment paradox: users expect polished experiences, yet the underlying models are probabilistic, brittle, and contextually unreliable. This paper introduces the *Experimental Label Pattern* --- a design and deployment strategy that reconciles rapid iteration with user trust by explicitly marking AI-generated outputs as experimental within production environments. Drawing on a 71-minute anonymised sprint planning session with 11 participants working on an edge-native wellness platform anchored to World Health Organization Quality of Life (WHO QoL) dimensions, we document six deployment patterns: (1) transparent experimental labelling, (2) stability-first model selection, (3) data gap architecture for wearable integration, (4) progressive onboarding with minimal friction, (5) ontological anchoring to WHO QoL frameworks, and (6) tiered AI credit systems for cost management. We argue that the user's body constitutes an ontologically real stratum that AI agents can only approximate as interpretive shadows --- a position grounded in Bhaskar's critical realism. Labelling AI outputs as "experimental" is therefore not a UX workaround but an epistemological commitment: an acknowledgement that the model's interpretation is categorically distinct from the reality it attempts to represent. This paper contributes deployment heuristics for early-stage teams building AI-augmented wellness products, and frames honest labelling as a form of responsible innovation rather than a concession of failure.

**Keywords:** AI deployment, experimental labelling, wellness platforms, wearable data, WHO Quality of Life, critical realism, responsible AI, progressive onboarding, edge computing, AI agents

---

## 1. Introduction: The Premature AI Deployment Problem

The wellness technology sector has entered a phase of acute tension. On one side, large language models (LLMs) and autonomous AI agents have reached a capability threshold that makes consumer-facing deployment technically feasible (Bommasani et al., 2021). On the other, the epistemic status of these systems remains deeply uncertain: they hallucinate, they drift, and their outputs carry a false precision that can mislead users about their own health (Bender et al., 2021). For early-stage platforms --- startups operating with limited resources, small user bases, and unproven product-market fit --- this tension is existential. Ship too early and you erode trust. Ship too late and you never learn what users actually need.

The dominant industry response has been to either (a) avoid deploying AI features until they are "ready," which in practice means never, or (b) deploy them silently and hope users do not notice the rough edges. Neither strategy is intellectually honest. The first denies users access to genuinely useful capabilities. The second treats users as passive consumers rather than informed participants in an evolving system.

This paper proposes a third path: *ship it broken, label it honest*. The phrase is deliberately provocative. We do not advocate for shipping dangerous or negligent software. Rather, we argue that labelling AI-generated features as "experimental" within production environments is a deployment pattern that simultaneously enables rapid learning, manages user expectations, and embodies a philosophically coherent stance toward the limits of machine intelligence.

The empirical basis for this paper is a 71-minute anonymised sprint planning session involving 11 participants engaged in the production deployment of an edge-native wellness platform. The platform integrates AI agents for health insights, wearable data interpretation, and progressive onboarding, anchored to the World Health Organization's Quality of Life (WHOQOL) framework rather than medical device compliance pathways. The session surfaced six recurring deployment patterns that we formalise and contextualise within existing literature on responsible AI, lean product development, and the philosophy of science.

Our central thesis draws on Bhaskar's (1975) stratified ontology. The user's body is *real* --- it exists and operates independently of any model's representation of it. The AI agent, by contrast, is an *empirical* construct: a shadow projected onto that reality through data, inference, and approximation. Labelling the agent's outputs as "experimental" is not a marketing decision. It is an *ontological declaration* --- an acknowledgement that the shadow is, and will remain, categorically distinct from the thing it represents. This framing transforms what might appear to be a product limitation into an act of scientific integrity.

**Methodological note.** Insights were derived from a recorded sprint planning session (71 minutes, 11 participants from a single wellness technology organisation, April 2026). The session was coded by the author using inductive thematic coding (Braun & Clarke, 2006). Six patterns were identified from 23 initial codes through iterative consolidation. No inter-rater reliability was computed; this is a limitation. Participants did not review findings. Patterns were validated against deployment logs and codebase history.

The remainder of this paper is structured as follows. Section 2 introduces the Experimental Label Pattern. Section 3 examines model selection under uncertainty. Section 4 addresses the architecture of data gaps in wearable integration. Section 5 discusses progressive onboarding. Section 6 anchors the platform's ontological positioning in the WHO QoL framework. Section 7 discusses limitations, and Section 8 offers directions for future research.

---

## 2. The Experimental Label Pattern: Managing Expectations Without Hiding Features

### 2.1 The Pattern Defined

The Experimental Label Pattern consists of deploying AI-powered features in production with explicit, persistent UI indicators that communicate their provisional status. In the observed sprint session, this took two concrete forms:

1. **"Experimental" badges** on AI-generated health insights, visible at all times, not dismissible.
2. **"Coming soon" placeholders** for features that were architecturally present but not yet stable enough for user interaction.

The distinction is significant. "Experimental" signals that a feature *exists and functions* but that its outputs should be interpreted with appropriate epistemic caution. "Coming soon" signals that a feature *will exist* but is currently incomplete --- a promise rather than an invitation. Both are preferable to the industry-standard alternatives: silent deployment (which hides uncertainty) or gated beta programs (which restrict access to a self-selected minority).

### 2.2 Theoretical Grounding

The pattern aligns with multiple traditions. From lean startup methodology, it embodies the Minimum Viable Product (MVP) principle (Ries, 2011), but extends it: the label itself is part of the product, not incidental to it. The label communicates the product's *maturity* as a first-class feature. From responsible AI discourse, it addresses the transparency imperative articulated by Floridi et al. (2018), who argue that AI systems must be "inspectable" and that users must understand the basis on which algorithmic decisions are made. The experimental label is a lightweight, scalable implementation of this principle.

From the philosophy of science, the pattern instantiates what Bhaskar (1975) calls *epistemic humility about the empirical domain*. In Bhaskar's stratified ontology, reality consists of three layers: the *real* (mechanisms and structures that exist independently of observation), the *actual* (events that occur whether or not they are observed), and the *empirical* (events as experienced and interpreted). An AI agent's wellness recommendations operate exclusively in the empirical domain --- they are interpretations of data, not direct apprehensions of biological reality. Labelling them "experimental" makes this epistemic status visible to the user.

### 2.3 Practical Benefits Observed

During the sprint session, participants reported three direct benefits of the pattern:

First, **reduced support burden**. Users who encountered experimental labels were less likely to report AI outputs as "bugs" and more likely to provide constructive feedback. This aligns with findings from Kocielnik et al. (2019), who demonstrated that setting appropriate expectations for AI accuracy significantly reduces user frustration.

Second, **faster iteration cycles**. Because the label pre-empts the expectation of perfection, the development team could deploy incremental improvements without the overhead of regression testing against user expectations of stability. This echoes the "build-measure-learn" feedback loop central to lean methodology (Ries, 2011) but adds an epistemic dimension: the label makes the "measure" phase more honest.

Third, **legal and regulatory clarity**. By explicitly labelling outputs as experimental and anchoring the platform to WHO QoL dimensions rather than medical compliance frameworks (see Section 6), the team positioned itself outside the regulatory perimeter of medical device classification. This is not evasion; it is precise scoping. The platform does not diagnose, treat, or prevent disease. It supports quality of life --- a categorically different claim.

### 2.4 The Shadow Metaphor

We propose that the experimental label operationalises what we call the *shadow principle*: the AI agent is a shadow cast by reality, not reality itself. Just as a shadow reveals information about the object that casts it (its shape, position, movement) without being the object, an AI agent's outputs reveal patterns in health data without being health itself. Shadows are useful. They are also, by definition, incomplete, distorted by the angle of the light, and unable to capture the full dimensionality of what they represent. The experimental label is the admission that we are showing the user a shadow.

This metaphor has precedent in Plato's allegory of the cave, but our usage is more directly indebted to Bhaskar's (1975) critical realist distinction between *transitive* knowledge (our theories and models, which change) and *intransitive* reality (the world itself, which persists regardless of our models). The AI agent produces transitive knowledge. The user's body is intransitive. The label marks the boundary.

### 2.5 Governance: When Does the Label Come Off?

A persistent experimental label raises a governance question that time alone cannot answer: who decides when a feature graduates from "experimental" to "stable," and on what basis? We propose that label removal should be treated as a *governance decision* rather than a calendar event, governed by three convergent criteria: (a) an accuracy threshold sustained over a minimum number of predictions --- for instance, the AI agent's recommendations must achieve ≥80% alignment with user-reported outcomes over at least 500 interactions; (b) a user satisfaction threshold, measured through in-context micro-surveys, that remains above a defined floor (e.g., ≥4.0 on a 5-point scale) for a sustained period; and (c) zero unresolved adverse event reports --- instances where an AI output led to user harm or demonstrably poor decision-making. These thresholds are proposed defaults informed by clinical decision support accuracy benchmarks (Kawamoto et al., 2005 reported that systems exceeding 68% accuracy improved clinical outcomes) and the System Usability Scale interpretive threshold (Bangor et al., 2009 classify scores above 4.0/5 as 'good'). They are subject to calibration against empirical deployment data. The "zero adverse events" criterion uses a specific definition: an 'adverse event' is any user-reported negative health outcome attributed to platform guidance. All three criteria must be met simultaneously. No single metric suffices: an agent can be accurate but disliked, or well-received but occasionally dangerous. The graduation decision should be made by a cross-functional review board (product, clinical advisory, engineering, and user advocacy) rather than by the development team alone. This governance structure ensures that the experimental label is not a permanent disclaimer used to avoid accountability, nor a temporary inconvenience removed at the first sign of commercial pressure. It is a commitment that the platform takes its own epistemic claims seriously.

---

## 3. Model Selection Under Uncertainty: Stability Over Cost

### 3.1 The Mid-Sprint Model Swap

A pivotal moment in the observed session was a mid-sprint decision to swap AI model providers. The team had initially selected a cheaper, faster model for generating wellness insights. During testing, this model exhibited inconsistent output quality --- not catastrophic failures, but subtle unreliabilities: occasional non-sequiturs, inconsistent tone, and sporadic hallucinations about wellness metrics that did not exist in the user's data. The team replaced it with a more expensive, slower, but demonstrably more stable alternative.

The rationale was captured in a participant's remark: *"Model cost optimisation is premature for early-stage products --- stability wins."*

### 3.2 Cost Versus Stability Tradeoffs

This decision runs counter to the prevailing startup wisdom of aggressive cost reduction. In the AI deployment literature, model selection is typically framed as a multi-objective optimisation problem balancing latency, accuracy, cost, and capability (Chen et al., 2023). However, this framing assumes that the platform has sufficient scale to amortise the costs of occasional failures across a large user base. For early-stage platforms with tens or hundreds of users, each failure is disproportionately costly --- not financially, but in trust.

The observed team's heuristic can be formalised as a *trust-weighted cost function*:

$$C_{effective} = C_{monetary} + \lambda \cdot P_{failure} \cdot T_{erosion}$$

Where $C_{monetary}$ is the per-query cost, $P_{failure}$ is the probability of a perceptibly unreliable output, $T_{erosion}$ is the trust cost of a single failure (disproportionately high for small user bases), and $\lambda$ is a scaling factor reflecting the platform's stage. For early-stage platforms, $\lambda$ is large and $T_{erosion}$ dominates, making stability the rational choice regardless of monetary cost differentials.

### 3.3 Implications for Model Marketplace Design

This finding has implications for the emerging model-as-a-service ecosystem. Current marketplaces emphasise benchmarks (accuracy on standard tasks) and pricing. Neither metric captures *consistency* in the wild --- the property that matters most for consumer-facing wellness applications. We argue that model providers should publish *stability metrics*: variance in output quality across domains, hallucination rates under distribution shift, and behavioural consistency over time. Without these, model selection for wellness platforms remains a gamble dressed in benchmark scores (Liang et al., 2022).

### 3.4 Rate Limiting as Cost Architecture

The observed team also implemented per-user daily AI credit limits. Rather than treating AI as an unlimited resource, they allocated a fixed number of AI interactions per day for free-tier users, with higher limits for premium subscribers. This serves dual purposes: it controls costs (preventing runaway API spending from power users) and it frames AI interactions as *valuable* rather than disposable. When something is limited, users attend to it more carefully. This is consistent with findings from behavioural economics on scarcity effects (Cialdini, 2009) and with the broader principle that constraints can enhance rather than diminish user experience (Norman, 2013).

---

## 4. Data Gap Architecture: Designing for Missing Wearable Data

### 4.1 The Real Problem Is Not Connection

Wearable device integration is frequently discussed in terms of connectivity: APIs, data formats, Bluetooth protocols, and interoperability standards (Dias & Cunha, 2018). The observed sprint session revealed a different priority. Connecting to wearable data sources was, in the team's experience, a solved problem. The unsolved problem was handling *data gaps* --- periods where the upstream API returns incomplete, delayed, or missing data.

This inversion of the expected difficulty is itself a finding worth documenting. Industry discourse around wearable integration emphasises the "connection" problem because it is visible and dramatic: APIs change, authentication breaks, devices disconnect. But the more insidious challenge is the silent absence of data. A heart rate monitor that skips three hours of readings because the user removed their device. A sleep tracker that reports partial nights. A step counter that loses data during firmware updates. These gaps are not exceptional; they are the norm (Evenson et al., 2015).

### 4.2 Designing for Absence

The team's architectural response was to treat data gaps as a first-class entity rather than an error condition. Specifically:

1. **Gap-aware data models.** The database schema distinguishes between "no data recorded" and "data recorded as zero." This is a foundational distinction that many platforms elide, leading to misleading aggregations (e.g., averaging heart rate readings that include false zeros).

2. **Explicit gap visualisation.** Rather than interpolating across gaps (a common practice that creates false continuity), the UI displays gaps as visible discontinuities. Users see where their data is and where it is not. This is another application of the transparency principle: showing absence is more honest than fabricating presence.

3. **Degraded-mode AI.** When data gaps exceed a threshold, the AI agent switches from interpretive mode (generating insights) to advisory mode (suggesting data collection improvements). This prevents the agent from generating confident-sounding recommendations on insufficient evidence --- a failure mode that Ghassemi et al. (2020) identify as particularly dangerous in health contexts.

### 4.3 Upstream API Resilience

The session also documented architectural decisions around upstream API instability. Wearable data providers frequently modify their APIs, introduce rate limits, or experience outages. The team implemented a caching and retry layer with exponential backoff, combined with user-facing indicators of data freshness. If wearable data is more than six hours stale, the UI communicates this explicitly. Again, the principle is transparency over smoothness.

This approach contrasts with the "seamless integration" narrative promoted by device manufacturers, which presupposes reliable data flow. For platforms operating at the edge --- particularly those serving users in varied connectivity environments --- designing for unreliable data is not pessimism. It is realism (Satyanarayanan, 2017).

---

## 5. Progressive Onboarding: Minimal Friction Data Collection

### 5.1 Five Questions, Not Fifty Fields

The observed team implemented a progressive onboarding flow that collects five key data points at signup, deferring all additional data collection to natural interaction moments. This stands in contrast to the health-tech industry norm of front-loading extensive intake forms --- sometimes fifty or more fields --- before users can access any functionality.

The rationale is both practical and philosophical. Practically, extensive intake forms create abandonment. Torous et al. (2018) identify onboarding friction as a significant predictor of early dropout in digital health applications. Industry estimates suggest that each additional field reduces completion rates by approximately 3--5% (Wroblewski, 2008), a figure consistent with broader usability research on form design.

Philosophically, the five-question approach reflects a commitment to *earning data through value delivery*. The platform asks for minimal data, delivers immediate value, and then requests additional data in contexts where users can see why it matters. This aligns with the data minimisation principle codified in the EU General Data Protection Regulation (GDPR) Article 5(1)(c) and with Zuboff's (2019) critique of "behavioural surplus" --- the extraction of data beyond what is necessary for service delivery.

### 5.2 Progressive Disclosure of Complexity

The five initial questions were selected to maximise the AI agent's ability to generate useful --- if coarse --- initial recommendations. The questions map to the four WHO QoL domains (physical health, psychological health, social relationships, environment) plus a lifestyle anchor point. This design is deliberately parsimonious: it provides enough signal for a first interaction without overwhelming the user or pretending to comprehensive assessment.

Subsequent data collection follows what Cooper et al. (2014) call *progressive disclosure*: complexity is revealed incrementally as the user demonstrates readiness for it. Wearable data integration, detailed health history, and granular preference settings are introduced over the first weeks of use, each tied to a specific value proposition. The platform never asks for data it cannot immediately use.

### 5.3 Implications for AI Agent Design

This onboarding pattern has direct implications for AI agent architecture. The agent must be designed to operate across a *spectrum of data availability* --- from the five initial data points to rich longitudinal datasets. This requires what we term *graceful capability scaling*: the agent's confidence, specificity, and recommendation granularity should scale with the available data, and this scaling should be visible to the user. An agent with five data points should not sound like an agent with five months of wearable data. The experimental label (Section 2) provides the framing, but the agent's behaviour must reinforce it.

---

## 6. WHO QoL as Ontological Anchor: Wellness Positioning Versus Medical Device

### 6.1 The Regulatory Positioning Decision

One of the most consequential decisions documented in the sprint session was the platform's explicit anchoring to the World Health Organization's Quality of Life (WHOQOL) framework (The WHOQOL Group, 1998) rather than to medical compliance pathways. This is not merely a regulatory strategy; it is an *ontological commitment* about what the platform is and what it claims to know.

Medical device classification (e.g., under EU MDR or FDA 21 CFR 820) entails specific claims about diagnosis, treatment, or prevention of disease. These claims carry heavy epistemic burdens: clinical validation, randomised controlled trials, and post-market surveillance. A wellness platform that inadvertently makes medical claims --- even implicitly, through the confidence of its AI outputs --- risks regulatory action and, more importantly, risks harming users who interpret wellness suggestions as medical advice (Babic et al., 2019).

The WHO Guideline on Digital Interventions for Health System Strengthening (WHO, 2019) provides a complementary governance framework, though its focus on population-level interventions does not address the individual-sovereign architecture proposed here. This boundary deserves careful examination. The FDA's evolving framework for Artificial Intelligence/Machine Learning-based Software as a Medical Device (SaMD) defines a risk-based classification that hinges not on the technology's architecture but on its *intended use* and the seriousness of the health condition it addresses (FDA, 2021). Under this framework, software that "drives clinical management" for serious conditions faces the highest regulatory burden, while software that merely "informs" about non-serious conditions faces the lowest. The EU Medical Device Regulation (EU MDR 2017/745), particularly Article 2, similarly classifies based on intended purpose: software qualifies as a medical device if it is intended for diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease. The critical implication for wellness platforms is that the SaMD threshold is crossed not by what the technology *is* but by what it *does* in the user's decision-making process. If an AI agent begins generating personalised health recommendations that users demonstrably act upon --- adjusting medication timing, modifying exercise regimens for specific conditions, or interpreting biomarker trends as diagnostic signals --- the platform may cross the SaMD boundary regardless of its wellness positioning. The experimental label pattern described in Section 2 serves, in part, as a regulatory safeguard: by explicitly marking outputs as provisional and non-clinical, it reinforces the intended use as quality-of-life support rather than clinical decision-making. However, this is a necessary but not sufficient condition. Ongoing monitoring of how users interpret and act on AI outputs is essential to ensure the platform does not drift into de facto medical device territory.

### 6.2 WHOQOL as a Structural Framework

The WHOQOL-BREF instrument assesses quality of life across four domains: physical health, psychological health, social relationships, and environment (Skevington et al., 2004). By anchoring to this framework, the observed platform makes a specific claim: it supports users in understanding and improving their quality of life. It does not diagnose. It does not prescribe. It does not treat.

This anchoring serves multiple functions:

1. **Ontological clarity.** The platform addresses the *lived experience* of health rather than its biomedical reduction. This aligns with Engel's (1977) biopsychosocial model and with contemporary critiques of reductionist digital health (Lupton, 2017).

2. **Regulatory precision.** WHO QoL dimensions are explicitly non-clinical. Anchoring to them creates a clear demarcation between the platform's scope and the medical device regulatory perimeter.

3. **AI agent scoping.** The WHOQOL framework provides a *bounded ontology* for the AI agent's outputs. The agent reasons about quality of life dimensions, not about disease states. This constrains hallucination risk by limiting the domain within which the agent operates.

4. **User empowerment.** Quality of life is inherently subjective and self-assessed. By centring the user's own QoL perception, the platform respects user autonomy in a way that top-down medical frameworks do not (Entwistle & Watt, 2006).

### 6.3 The Construct of Reality

This positioning connects to a broader philosophical claim. The construct of reality in wellness technology is not the biomedical body --- the collection of measurable biomarkers that reductionist platforms attempt to quantify. It is the *experienced body* --- the body as lived, felt, and reported by its inhabitant. The WHOQOL framework operationalises this insight: it measures what people *experience*, not what instruments detect.

When we assert that the user's body is the reality and the AI agent is a shadow, we are drawing on this tradition. The shadow is not cast onto the biomedical body (a constructed abstraction) but onto the experienced body (an ontological given). This framing has practical consequences: it means the AI agent's primary data source should be the user's self-report, supplemented --- not supplanted --- by wearable data. Wearable data provides texture and pattern; self-report provides ground truth.

This position is informed by the Reality Construct framework (Waern, 2025; preprint; the framework proposes that physics-based reality constitutes the persistent shared referent across all domain-specific digital representations), which posits that digital representations of reality must be anchored to their referents through explicit ontological commitments. Without such anchoring, digital systems drift toward solipsistic models that mistake their own representations for the world they represent. The experimental label is one mechanism for preventing this drift.

---

## 7. Limitations

This paper has several limitations that must be acknowledged.

First, the empirical basis is a single sprint planning session. While the session was substantial (71 minutes, 11 participants) and produced rich qualitative data, the findings are not generalisable in a statistical sense. They are *transferable* in the qualitative research sense (Lincoln & Guba, 1985): the patterns identified may apply to similar contexts, but this claim requires further investigation.

Second, the platform under observation is early-stage. The deployment patterns documented here are shaped by the constraints of small teams, limited resources, and nascent user bases. Platforms at scale face different tradeoffs --- including regulatory scrutiny, brand risk, and user base heterogeneity --- that may render some patterns inapplicable.

Third, the philosophical framing, while internally coherent, is one of several possible frameworks. A pragmatist reading (Dewey, 1938) might emphasise the functional utility of the experimental label without the ontological apparatus. A social constructionist reading (Berger & Luckmann, 1966) might challenge the claim that the body constitutes an independent ontological stratum. We defend the critical realist framing on the grounds that it most accurately captures the relationship between AI models and biological reality, but acknowledge it is a choice, not a necessity.

Fourth, long-term user responses to persistent "experimental" labels have not been studied. There is a risk that users may habituate to the label and cease to treat it as meaningful. Alternatively, persistent labelling may erode confidence in the platform over time. Longitudinal research is needed.

Fifth, the anonymisation of the sprint session, while necessary for ethical and commercial reasons, limits the reader's ability to assess contextual factors that may have influenced the observed patterns.

---

## 8. Future Research and Conclusion

### 8.1 Future Research Directions

Several avenues for future research emerge from this work.

**Longitudinal label studies.** How do users' perceptions of "experimental" labels evolve over time? Do they habituate? Does the label's effectiveness depend on how often the AI's outputs visibly improve? These questions require controlled longitudinal studies with wellness platform users.

**Cross-cultural label interpretation.** The WHOQOL framework is explicitly cross-cultural (Skevington et al., 2004), but the "experimental" label may carry different connotations across cultural contexts. In some cultures, "experimental" may connote innovation and cutting-edge technology; in others, it may connote risk and unreliability. Localisation research is needed.

**Data gap taxonomies.** The architecture described in Section 4 treats data gaps as a binary (present/absent). In practice, gaps have structure: duration, periodicity, cause (user-initiated vs. device failure vs. API outage), and informativeness (a gap during sleep may be less concerning than a gap during exercise). A richer taxonomy of data gaps would enable more nuanced AI agent behaviour.

**Model stability benchmarks.** Section 3 argued for stability metrics in model selection. Developing standardised benchmarks for output consistency --- beyond accuracy on held-out test sets --- is a significant open problem in the AI evaluation community (Liang et al., 2022). Wellness-specific stability benchmarks would be particularly valuable.

**Edge-native AI agents.** The platform's edge-native architecture (Satyanarayanan, 2017; Shi et al., 2016) raises questions about how AI agents perform when deployed on local devices with constrained compute. As local LLMs become viable (Touvron et al., 2023), the deployment patterns described here will need to account for on-device model behaviour, including novel failure modes.

**Freemium AI economics.** The tiered AI credit system described in Section 3.4 raises broader questions about the economics of AI-augmented freemium models. How should platforms price AI interactions? What is the optimal credit allocation that maximises both user engagement and conversion to paid tiers? These questions sit at the intersection of behavioural economics and AI deployment strategy.

### 8.2 Conclusion

This paper has documented and theorised six deployment patterns for AI agents in early-stage wellness platforms, grounded in an anonymised sprint planning session and contextualised within critical realist philosophy, responsible AI frameworks, and lean product methodology.

The central contribution is the *Experimental Label Pattern*: the practice of deploying AI features in production with explicit, persistent indicators of their provisional status. We have argued that this pattern is not a UX hack or a legal shield, but an epistemological commitment --- an acknowledgement that AI-generated wellness insights are interpretive shadows projected onto an ontologically real substrate (the user's body and lived experience).

The broader argument is that honesty is a deployment strategy. In an ecosystem where AI wellness products compete on the appearance of confidence and completeness, choosing to be explicit about uncertainty is a form of competitive differentiation that is also, incidentally, the right thing to do. Early-stage teams are uniquely positioned to establish this norm: they are small enough that every design decision is a cultural decision, and their users are early adopters who expect imperfection and reward transparency.

The user's body is not a dataset. It is not a model's training distribution. It is not an API response. It is *real* --- in the fullest, most philosophically loaded sense of that word. The least we can do is label our approximations honestly.

---

## References

Babic, B., Gerke, S., Evgeniou, T., & Cohen, I. G. (2019). Algorithms on regulatory lockdown in medicine. *Science*, *366*(6470), 1202--1204. https://doi.org/10.1126/science.aay9547

Bangor, A., Kortum, P. T., & Miller, J. T. (2009). Determining what individual SUS scores mean: Adding an adjective rating scale. *Journal of Usability Studies*, *4*(3), 114--123.

Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency* (pp. 610--623). https://doi.org/10.1145/3442188.3445922

Berger, P. L., & Luckmann, T. (1966). *The social construction of reality: A treatise in the sociology of knowledge*. Doubleday.

Bhaskar, R. (1975). *A realist theory of science*. Leeds Books.

Bommasani, R., Hudson, D. A., Adeli, E., Altman, R., Arber, S., von Arx, S., ... & Liang, P. (2021). On the opportunities and risks of foundation models. *arXiv preprint arXiv:2108.07258*. https://doi.org/10.48550/arXiv.2108.07258

Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology*, *3*(2), 77--101. https://doi.org/10.1191/1478088706qp063oa

Chen, L., Zaharia, M., & Zou, J. (2023). FrugalGPT: How to use large language models while reducing cost and improving performance. *arXiv preprint arXiv:2305.05176*. https://doi.org/10.48550/arXiv.2305.05176

Cialdini, R. B. (2009). *Influence: Science and practice* (5th ed.). Pearson.

Cooper, A., Reimann, R., Cronin, D., & Noessel, C. (2014). *About face: The essentials of interaction design* (4th ed.). Wiley.

Dewey, J. (1938). *Logic: The theory of inquiry*. Henry Holt.

Dias, D., & Cunha, J. P. S. (2018). Wearable health devices --- vital sign monitoring, systems and technologies. *Sensors*, *18*(8), 2414. https://doi.org/10.3390/s18082414

Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. *Science*, *196*(4286), 129--136. https://doi.org/10.1126/science.847460

Entwistle, V. A., & Watt, I. S. (2006). Patient involvement in treatment decision-making. *Health Expectations*, *9*(1), 23--36. https://doi.org/10.1111/j.1369-7625.2006.00382.x

European Parliament and Council. (2017). Regulation (EU) 2017/745 on medical devices (EU MDR). *Official Journal of the European Union*, L 117, 1--175. https://eur-lex.europa.eu/eli/reg/2017/745/oj

Evenson, K. R., Goto, M. M., & Furberg, R. D. (2015). Systematic review of the validity and reliability of consumer-wearable activity trackers. *International Journal of Behavioral Nutrition and Physical Activity*, *12*(1), 159. https://doi.org/10.1186/s12966-015-0314-1

FDA. (2021). *Artificial intelligence/machine learning (AI/ML)-based software as a medical device (SaMD) action plan*. U.S. Food and Drug Administration. https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-software-medical-device

Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., ... & Vayena, E. (2018). AI4People --- An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. *Minds and Machines*, *28*(4), 689--707. https://doi.org/10.1007/s11023-018-9482-5

Ghassemi, M., Oakden-Rayner, L., & Beam, A. L. (2020). The false hope of current approaches to explainable artificial intelligence in health care. *The Lancet Digital Health*, *2*(11), e745--e750. https://doi.org/10.1016/S2589-7500(20)30200-0

Kawamoto, K., Houlihan, C. A., Balas, E. A., & Lobach, D. F. (2005). Improving clinical practice using clinical decision support systems: A systematic review of trials to identify features critical to success. *BMJ*, *330*(7494), 765. https://doi.org/10.1136/bmj.38398.500764.8F

Kocielnik, R., Amershi, S., & Bennett, P. N. (2019). Will you accept an imperfect AI? Exploring designs for adjusting end-user expectations of AI systems. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (pp. 1--14). https://doi.org/10.1145/3290605.3300641

Liang, P., Bommasani, R., Lee, T., Tsipras, D., Soylu, D., Yasunaga, M., ... & Koreeda, Y. (2022). Holistic evaluation of language models. *arXiv preprint arXiv:2211.09110*. https://doi.org/10.48550/arXiv.2211.09110

Lincoln, Y. S., & Guba, E. G. (1985). *Naturalistic inquiry*. Sage.

Lupton, D. (2017). Digital health: Critical and cross-disciplinary perspectives. *Critical Public Health*, *27*(4), 373--375. https://doi.org/10.1080/09581596.2017.1307323

Norman, D. (2013). *The design of everyday things* (Rev. ed.). Basic Books.

Ries, E. (2011). *The lean startup: How today's entrepreneurs use continuous innovation to create radically successful businesses*. Crown Business.

Satyanarayanan, M. (2017). The emergence of edge computing. *Computer*, *50*(1), 30--39. https://doi.org/10.1109/MC.2017.9

Shi, W., Cao, J., Zhang, Q., Li, Y., & Xu, L. (2016). Edge computing: Vision and challenges. *IEEE Internet of Things Journal*, *3*(5), 637--646. https://doi.org/10.1109/JIOT.2016.2579198

Skevington, S. M., Lotfy, M., & O'Connell, K. A. (2004). The World Health Organization's WHOQOL-BREF quality of life assessment: Psychometric properties and results of the international field trial. *Quality of Life Research*, *13*(2), 299--310. https://doi.org/10.1023/B:QURE.0000018486.91360.00

The WHOQOL Group. (1998). The World Health Organization Quality of Life Assessment (WHOQOL): Development and general psychometric properties. *Social Science & Medicine*, *46*(12), 1569--1585. https://doi.org/10.1016/S0277-9536(98)00009-4

Torous, J., Nicholas, J., Larsen, M. E., Firth, J., & Christensen, H. (2018). Clinical review of user engagement with mental health smartphone apps: Evidence, theory and improvements. *BMJ Open*, *8*(3), e019735. https://doi.org/10.1136/bmjopen-2017-019735

Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., ... & Scialom, T. (2023). Llama 2: Open foundation and fine-tuned chat models. *arXiv preprint arXiv:2307.09288*. https://doi.org/10.48550/arXiv.2307.09288

Waern, N. (2025). The reality construct: Ontological anchoring for digital twin systems (v2). *Zenodo*. https://doi.org/10.5281/zenodo.19587944

WHO. (2019). *WHO guideline: Recommendations on digital interventions for health system strengthening*. World Health Organization. https://apps.who.int/iris/handle/10665/311941

Wroblewski, L. (2008). *Web form design: Filling in the blanks*. Rosenfeld Media.

Zuboff, S. (2019). *The age of surveillance capitalism: The fight for a human future at the new frontier of power*. PublicAffairs.
