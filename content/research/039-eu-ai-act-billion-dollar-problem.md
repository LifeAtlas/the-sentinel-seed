---
title: "The EU AI Act Created a Billion-Dollar Problem: Compliance as the Next Platform Opportunity"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: EU AI Act, regulatory compliance, regulatory entrepreneurship, compliance technology, regulatory technology, Actor-Network Theory, obligatory passage point, pre-seed fundraising, SPIN selling, AI governance, platform opportunity, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# The EU AI Act Created a Billion-Dollar Problem: Compliance as the Next Platform Opportunity

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The EU AI Act, which entered into force in August 2024 and is being phased into full effect through 2027, has created compliance obligations that the majority of affected organisations lack the internal capability to satisfy. A 60-minute discussion with a compliance-technology startup founder — framed around a SPIN-sell approach to compliance advisory and pre-seed fundraising in the regulatory technology space — provides the empirical grounding for this paper's central argument: that regulatory compliance, typically framed as a cost and barrier, is the site of the next significant platform opportunity in the European AI ecosystem. Drawing on regulatory entrepreneurship theory and Actor-Network Theory, we argue that the EU AI Act functions as a mandatory obligatory passage point that every AI system deploying organisation in the EU must navigate — and that the organisation that builds the infrastructure for navigating that passage point accumulates a structural position in the AI ecosystem that compounds over time. We analyse the specific compliance challenges created by the Act — risk classification, documentation requirements, human oversight implementation, post-market monitoring — and the technical architecture required to address them systematically rather than case-by-case. We examine the SPIN-sell approach as a framework for translating the compliance burden into advisory revenue, and the transition from advisory revenue to platform revenue as the sustainable business model. Two falsifiable propositions are stated regarding compliance platform adoption and the regulatory moat effect. Counter-arguments challenging the platform framing are engaged.

**Keywords:** EU AI Act, regulatory compliance, regulatory entrepreneurship, compliance technology, regulatory technology, Actor-Network Theory, obligatory passage point, pre-seed fundraising, SPIN selling, AI governance, platform opportunity, design science research, SMILE methodology

---

## 1. Introduction: The Regulation as Market-Creating Event

The EU AI Act is one of the most consequential regulatory events in the history of technology governance. It establishes a risk-based framework for AI systems deployed in the European Union, imposing documentation, transparency, human oversight, and post-market monitoring requirements that scale with the assessed risk level of the AI system. For high-risk AI systems — which include AI used in employment, education, critical infrastructure, law enforcement, and a range of other sensitive domains — the requirements are extensive and technically complex.

The compliance burden created by the Act is large, and the majority of affected organisations — the companies that are deploying AI systems in EU-regulated domains — lack the internal expertise to satisfy it. This is the problem. The opportunity is that any organisation that builds the infrastructure for navigating the Act's compliance requirements — the technical tools, the documentation workflows, the risk classification frameworks, the audit trail systems — and that makes that infrastructure available to the affected organisations, occupies a structural position at a mandatory choke point in the EU AI deployment ecosystem.

The 60-minute discussion that grounds this paper was with a startup founder building in this space, framing the opportunity through a SPIN-sell advisory model: a consulting-led entry that generates revenue from compliance advisory work while building the product intelligence required to eventually productise the advisory into a compliance technology platform. The discussion also addressed pre-seed fundraising — how to communicate the platform opportunity to investors who may default to viewing compliance technology as a niche services business rather than a platform.

This paper analyses the EU AI Act compliance opportunity through two lenses: regulatory entrepreneurship theory, which examines the strategic dynamics of building businesses around regulatory events; and ANT, which provides the vocabulary for understanding how the Act creates an obligatory passage point that compliance platform builders can leverage as a structural position.

---

## 2. Theoretical Framework

### 2.1 Regulatory Entrepreneurship Theory

Regulatory entrepreneurship theory [1][2] studies the dynamics by which entrepreneurs identify and exploit opportunities created by regulatory change. The central insight is that regulation is not merely a cost imposed on markets; it is a market-creating event that redistributes costs and capabilities across market participants in ways that create entrepreneurial opportunities for organisations that develop regulatory navigation capability early.

The mechanism is asymmetric: regulatory events impose compliance requirements on all affected organisations but do not provide those organisations with the capability to satisfy the requirements. Organisations that develop compliance capability become suppliers of a necessity — compliance — to organisations that lack the capability. If the compliance requirement is large, technically complex, and persistent (not a one-time filing but an ongoing operational requirement), the supplier of compliance capability occupies a recurring revenue position.

The EU AI Act satisfies all three conditions: the compliance requirement is large (risk classification, documentation, human oversight implementation, post-market monitoring across all deployed AI systems); technically complex (requires AI system architecture documentation, training data governance, bias assessment, continuous monitoring infrastructure); and persistent (ongoing as new AI systems are deployed and existing systems are updated).

### 2.2 ANT and the Obligatory Passage Point

In ANT terms [3][4], the EU AI Act creates an obligatory passage point: any organisation that wishes to deploy AI systems in the EU must pass through the Act's compliance requirements. The Act is an inscription in the regulatory actor-network that makes compliance capability mandatory for participation in the EU AI deployment ecosystem.

The obligatory passage point has a specific structure in the AI Act context: the compliance pathway is not a single gateway but a sequence of checkpoints — risk classification, conformity assessment, documentation filing, ongoing monitoring — each of which requires specific capabilities that many affected organisations lack. The compliance platform builder who provides the infrastructure for each checkpoint acquires a network position at every point in the compliance pathway, not just at its entry.

This network position compounds over time in ways that are characteristic of platform businesses: as more organisations use the compliance platform, the platform accumulates data about AI system risk profiles, documentation patterns, and compliance monitoring outcomes that improve its risk classification models and documentation templates. The platform becomes more valuable as it is used more, creating a data flywheel that disadvantages later entrants who lack the accumulated compliance data.

### 2.3 The SPIN-Sell Framework as Market Entry Strategy

The SPIN-sell framework [5] — Situation, Problem, Implication, Need-Payoff — is a structured consultative selling methodology designed for complex, high-value sales where the buyer's needs must be developed rather than assumed. In the EU AI Act compliance context, SPIN-sell provides a framework for structuring compliance advisory conversations:

**Situation:** The buyer's current AI deployment portfolio and existing compliance infrastructure — how many AI systems, what risk domains, what current documentation practices.

**Problem:** The specific compliance gaps that the buyer faces under the EU AI Act — which requirements they cannot currently satisfy, which systems they cannot currently document to the required standard.

**Implication:** The consequences of non-compliance — regulatory fines, market access restriction, reputational damage, and the operational disruption of remediation under regulatory scrutiny rather than in advance of it.

**Need-Payoff:** The value of the compliance advisory and platform services — the cost reduction relative to internal capability building, the risk reduction relative to non-compliance, and the strategic value of compliance infrastructure that supports future AI system deployments.

The SPIN-sell approach generates advisory revenue while building the platform intelligence needed to productise compliance: each advisory engagement produces documentation of a real AI system's compliance pathway that can be structured as a template for the platform's automated compliance workflows.

### 2.4 SMILE Applied to Regulatory Platform Design

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a compliance landscape in which the majority of EU AI-deploying organisations face significant compliance gaps under the AI Act, are attempting to satisfy compliance requirements through ad hoc internal processes, and lack the technical infrastructure for ongoing compliance monitoring. The to-be state is a compliance technology platform that makes the EU AI Act compliance pathway navigable for organisations of all sizes, systematises the documentation and monitoring requirements, and compounds its value through the data flywheel described in Section 2.2. Every element of the platform design is evaluated against its contribution to closing this gap.

---

## 3. The EU AI Act Compliance Challenge: Technical Architecture

### 3.1 Risk Classification

The EU AI Act's risk-based framework requires affected organisations to classify each of their AI systems into one of four risk categories: unacceptable risk (prohibited), high risk (full compliance requirements), limited risk (transparency obligations), and minimal risk (no specific obligations). The classification decision is consequential: a system incorrectly classified as minimal risk when it is actually high risk exposes the organisation to full regulatory liability for non-compliant operation.

Risk classification is not a purely definitional exercise. The Act's high-risk category definitions reference specific application domains — employment, education, critical infrastructure — but the application of these definitions to real AI systems requires interpretation: is a recommendation system used in a hiring process a high-risk AI system under the Act? Is an AI system that assists teachers in grading student work a high-risk educational AI system? These classification decisions require expertise in both the Act's legal framework and the technical characteristics of the AI systems being classified.

The compliance platform opportunity at the risk classification stage is: an AI-assisted classification tool that combines the Act's definitional framework with documented interpretation guidance from regulatory bodies, maps user-described AI system characteristics to classification decisions, and produces classification rationale documentation that demonstrates the organisation's compliance with the classification requirement.

### 3.2 Conformity Assessment and Documentation

High-risk AI systems under the Act require conformity assessment: a process of demonstrating that the system meets the Act's technical requirements for high-risk systems. The technical requirements include: data governance documentation (training data quality, representativeness, labelling methodology); transparency documentation (system capabilities, limitations, human oversight interfaces); accuracy and robustness requirements (performance across demographic groups, performance under adversarial conditions); and human oversight requirements (mechanisms for human operators to monitor, intervene in, and override the AI system).

Satisfying these requirements requires documentation that most AI-deploying organisations do not currently maintain: detailed training data provenance records, systematic bias assessment results, and ongoing performance monitoring data are not standard practice in organisations that deployed AI systems before the Act's requirements applied to their systems.

The compliance platform opportunity at the conformity assessment stage is: a documentation workflow system that generates conformity assessment documentation from existing engineering records and test results, identifies gaps in the organisation's documentation against the Act's requirements, and manages the documentation update process as AI systems are modified.

### 3.3 Post-Market Monitoring

The EU AI Act requires high-risk AI system operators to implement post-market monitoring systems that continuously assess the AI system's performance after deployment, identify cases where the system's performance has degraded or where the system is performing differently from its conformity assessment documentation, and report serious incidents to the relevant regulatory authority.

Post-market monitoring is the most technically demanding of the Act's compliance requirements: it requires continuous data collection on the AI system's decisions and outcomes, statistical analysis to detect performance drift or distributional shift, and incident reporting workflows that satisfy the Act's notification requirements. Most AI-deploying organisations do not have this monitoring infrastructure in place.

The compliance platform opportunity at the post-market monitoring stage is: a monitoring infrastructure service that instruments deployed AI systems with performance monitoring capabilities, implements the statistical tests required to detect performance drift, and automates the incident reporting workflows required by the Act.

### 3.4 The Platform Architecture

The compliance platform that addresses these three requirements — risk classification, conformity assessment, and post-market monitoring — has a specific architecture: an AI system registry at the core, which maintains the authoritative record of each organisation's AI systems and their compliance status; document generation workflows that produce conformity assessment documentation from structured system descriptions; monitoring agents that instrument deployed AI systems and collect performance data; and a regulatory intelligence layer that tracks the evolution of the Act's requirements and guidance, updating the platform's risk classification models and documentation templates as the regulatory framework develops.

This architecture is not a simple compliance checklist application. It is a data platform that accumulates structural knowledge about AI system risk profiles, compliance documentation patterns, and post-market monitoring outcomes. The data flywheel is the platform's competitive moat: organisations that use the platform contribute to its intelligence about how different types of AI systems are classified, documented, and monitored, making the platform more accurate and efficient for all users.

---

## 4. From Advisory to Platform: The Revenue Transition

### 4.1 The Advisory Entry Model

The SPIN-sell advisory model generates revenue from the compliance knowledge gap in advance of the platform being built. An advisory engagement produces: a compliance audit of the client's AI system portfolio, mapping each system to its risk classification and documenting the gap between current practices and Act requirements; a remediation roadmap that sequences the compliance work required to close those gaps; and implementation support for the documentation and monitoring requirements that the client cannot satisfy with internal resources.

Advisory engagements in the EU AI Act compliance space are high-value — the compliance stakes are significant and the internal expertise is scarce — but advisory revenue does not scale. The transition from advisory to platform is the critical value-creation event: when the advisory work has been systematised into documented processes, templates, and classification models, it can be executed through software rather than through billable consultant hours.

The advisory-to-platform transition also produces the data asset required for the platform's data flywheel: real AI system compliance documentation, produced through real advisory engagements with real organisations, provides the training data for the platform's AI-assisted classification and documentation tools.

### 4.2 The Platform Revenue Model

The compliance platform's revenue model has three components that reflect the three compliance stages described in Section 3:

**Risk classification as a service:** A subscription service for AI-deploying organisations that provides ongoing risk classification for new AI system deployments, updated as the Act's regulatory guidance evolves. Pricing is per system classified, with volume discounts for organisations with large AI portfolios.

**Conformity assessment documentation:** A software service that generates conformity assessment documentation from structured AI system descriptions, with a per-system pricing model that scales with system complexity and documentation requirements.

**Post-market monitoring infrastructure:** A monitoring-as-a-service offering that instruments deployed AI systems and provides the ongoing monitoring and incident reporting infrastructure required by the Act. Recurring revenue, priced per monitored system per month.

The platform's compounding advantage is that the data generated by all three services accumulates into the AI system registry and intelligence layer, making the platform's risk classification models more accurate, its documentation templates more comprehensive, and its monitoring infrastructure more sensitive to the specific risk patterns of different AI system types.

### 4.3 Pre-Seed Fundraising Framing

The discussion addressed how to communicate the compliance platform opportunity to pre-seed investors who may default to viewing compliance technology as a niche services business. The key framing shift is from "compliance tool" to "mandatory infrastructure at a regulated choke point":

The EU AI Act is not a niche regulation; it applies to every organisation deploying AI systems in the largest single market in the world. The compliance requirements are not one-time filing obligations; they are persistent operational requirements that generate recurring demand for compliance infrastructure. The data flywheel creates a compounding advantage that makes early market position increasingly defensible over time.

The investor-facing narrative frames the opportunity as analogous to earlier regulatory platform businesses: compliance infrastructure for a mandatory, technically complex, persistent regulatory requirement creates the same structural market position that earlier companies built in adjacent regulatory domains. The scale of the EU AI Act's affected market — every AI-deploying organisation in the EU — and the technical complexity of its requirements — which make simple compliance checklists inadequate — create the conditions for a category-defining compliance platform.

---

## 5. Counter-Arguments

### 5.1 The Regulatory Uncertainty Counter-Argument

The most significant counter-argument holds that the EU AI Act's regulatory framework is still evolving — with implementing acts, technical standards, and regulatory guidance still being developed — and that building compliance infrastructure before the framework is stable creates the risk of building to specifications that change, requiring expensive platform rebuilds.

This counter-argument is correct about the regulatory uncertainty and wrong about the strategic implication. The organisations that invest in compliance infrastructure while the regulatory framework is still evolving do not face the risk of rebuilding to changed specifications; they face the opportunity of shaping those specifications. Early-stage compliance platform builders who engage with the regulatory process — participating in standards development, submitting guidance requests, building working relationships with supervisory authorities — are positioned to influence the implementing acts and technical standards that will determine the platform's future compliance requirements.

Moreover, the regulatory uncertainty is itself a market condition that advantages early entrants: organisations that are uncertain about how to comply are more likely to seek external compliance support, which advantages advisory models in the early phases. The platform's flexibility to update classification models and documentation templates as the framework evolves is a feature, not a risk.

### 5.2 The Incumbency Counter-Argument

A second counter-argument holds that the compliance technology market will be dominated by large incumbents — the major enterprise software vendors that already have relationships with the large organisations most affected by the Act — and that pre-seed startup positions in the space will be acquired or marginalised before they can achieve platform scale.

The incumbency counter-argument underestimates the speed of regulatory change and the agility advantage of early-stage specialised platforms. Large enterprise software vendors move slowly: their compliance solutions will be generic across regulatory domains and will lag the specific technical guidance of the EU AI Act by quarters or years. A specialised compliance platform that is built specifically for the EU AI Act's requirements, maintained by a team whose entire attention is on that regulatory domain, and updated in near real-time as the framework evolves will be significantly more accurate and more current than a generic compliance module from a large enterprise vendor.

The acquisition risk is real and is better framed as an exit opportunity than a threat: a compliance platform that achieves category-defining position in EU AI Act compliance is an acquisition target for the enterprise software vendors that need to offer compliance solutions to their existing customers. The acquisition opportunity is a feature of the market position, not a challenge to the startup's viability.

---

## 6. Falsifiable Propositions

1. **The platform adoption proposition:** Compliance technology platforms that provide AI Act risk classification, conformity assessment documentation, and post-market monitoring as an integrated service — rather than as separate point solutions — will achieve greater than 3x customer retention at 24 months compared to organisations using single-stage compliance tools (risk classification only or documentation only), reflecting the compounding value of integrated compliance infrastructure over the AI system lifecycle. This proposition can be falsified by a longitudinal study of compliance technology adoption showing no significant retention difference between integrated and single-stage compliance tools.

2. **The regulatory moat proposition:** Compliance technology platforms that accumulate AI system risk classification data from at least 500 distinct AI system deployments will achieve risk classification accuracy above 90% (measured against subsequent regulatory determinations) at least 18 months before equivalent accuracy is achieved by platforms launched after the Act's full implementation deadline, reflecting the learning advantage of early data accumulation. This proposition can be falsified by a comparative accuracy study showing no significant accuracy advantage for early-data-accumulating platforms relative to later entrants at equivalent time points post-launch.

---

## 7. Limitations and Future Research

This paper's empirical grounding is a 60-minute discussion with a single compliance-technology startup founder. The discussion provides a practitioner's perspective on the EU AI Act compliance opportunity from the position of a startup building in the space; it does not represent systematic market research on the compliance technology landscape or empirical measurement of the compliance burden experienced by affected organisations.

The regulatory entrepreneurship analysis in Section 2.1 draws on the general regulatory entrepreneurship literature; the specific dynamics of the EU AI Act compliance market may differ from earlier regulatory platform markets in ways that the general framework does not capture. The Act's scope, geographic reach, and technical complexity are all at the extreme end of the regulatory event spectrum; the market dynamics may not follow the patterns documented in less extensive regulatory contexts.

The revenue model described in Section 4.2 is a design proposal based on the advisory-to-platform transition logic, not an empirically validated pricing model. The actual pricing dynamics of the EU AI Act compliance market will be determined by competition, customer willingness to pay, and the regulatory urgency timeline, none of which are modelled here.

Future research should: (1) conduct systematic market research on EU AI Act compliance capability and readiness among affected organisations, measuring the compliance gaps, internal resource availability, and willingness to pay for external compliance support; (2) develop and test the risk classification platform described in Section 3.1 against a sample of real AI system deployments, measuring classification accuracy against regulatory body determinations; (3) conduct longitudinal studies of compliance technology platform adoption following the EU AI Act's full implementation, measuring the retention, data flywheel, and moat dynamics proposed in Section 6.

---

## 8. Conclusion

The EU AI Act is simultaneously the most significant regulatory event in the history of AI governance and the largest single compliance opportunity in the European technology ecosystem. The organisations that respond to it as a burden will spend the next three years in reactive compliance work, managing the documentation and monitoring requirements of their existing AI deployments without building the infrastructure that would make future deployments faster and cheaper. The organisations that respond to it as a platform opportunity will build the compliance infrastructure that every AI-deploying organisation in the EU eventually needs, and will accumulate the data flywheel and network position that make that infrastructure defensible.

The advisory-to-platform transition is the strategic pathway for early-stage compliance technology ventures: advisory revenue funds the business while building the platform intelligence; platform revenue scales the advisory insight into recurring software revenue; data flywheel creates the moat that makes the platform's position defensible against later entrants and large incumbents.

The SPIN-sell framework is the right selling approach not because it is a clever technique but because it is structurally appropriate for the compliance market: the problem is real, the implication of non-compliance is severe, and the need-payoff of compliance infrastructure is large relative to the cost of building it. The selling challenge is not generating demand — the EU AI Act generates that — but helping prospective buyers recognise the severity of their compliance gaps before they experience the regulatory consequences of ignoring them.

The billion-dollar problem the EU AI Act created is not the compliance burden; it is the compliance capability gap. Every organisation that recognises the gap and cannot satisfy it internally is a potential customer. The organisations that build the infrastructure to close the gap will not be serving a compliance niche; they will be operating mandatory infrastructure at the centre of the EU AI deployment ecosystem.

The most expensive way to navigate regulatory change is to wait until you are forced to react. The most profitable way is to build the passage point everyone else must travel through.

---

## References

[1] Pollman E, Barry JM. Regulatory Entrepreneurship. *Southern California Law Review* 2017;90(3):383–448.

[2] Engel C. Regulatory entrepreneurs. *Journal of Institutional Economics* 2021;17(5):871–879.

[3] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[4] Latour B. *Science in Action.* Harvard University Press, 1987.

[5] Rackham N. *SPIN Selling.* McGraw-Hill, 1988.

[6] European Parliament and Council. *Regulation (EU) 2024/1689 on artificial intelligence (EU AI Act).* Official Journal of the European Union, 2024.

[7] Wachter S, Mittelstadt B, Russell C. Counterfactual Explanations without Opening the Black Box: Automated Decisions and the GDPR. *Harvard Journal of Law and Technology* 2017;31(2):841–887.

[8] Floridi L, Cowls J, Beltrametti M, Chatila R, Chazerand P, Dignum V, Luetge C, Madelin R, Pagallo U, Rossi F, Schafer B, Valcke P, Vayena E. An Ethical Framework for a Good AI Society. *Minds and Machines* 2018;28(4):689–707.

[9] Parker GG, Van Alstyne MW, Choudary SP. *Platform Revolution: How Networked Markets Are Transforming the Economy.* W. W. Norton, 2016.

[10] Eisenmann T, Parker GG, Van Alstyne MW. Strategies for Two-Sided Markets. *Harvard Business Review* 2006;84(10):92–101.

[11] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[12] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[13] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
