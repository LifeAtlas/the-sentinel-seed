---
title: "Teaching Digital Twins to MBA Students: Why Financial Metrics Beat Tech Demos"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: digital twin education, MBA, business case, technology adoption, IS adoption theory, financial metrics, value realisation, executive education, design science research, SMILE methodology, management education, ROI, digital transformation
status: ready
date: 2026-04-16
---

# Teaching Digital Twins to MBA Students: Why Financial Metrics Beat Tech Demos

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

This paper is a pedagogical design note grounded in a 78-minute guest lecture to business school students. It reports a pattern that is underweighted in the digital twin adoption literature: for the cohort of people who will actually authorise digital twin investments — business students who will become operations directors, chief financial officers, and chief executive officers — the technology demonstration is not the persuasion problem. The persuasion problem is the business case. The paper presents and analyses a business case framework for digital twin education, informed by IS adoption theory and constructive alignment principles. No formal learning outcome measurement was conducted; the framework is offered as a design contribution for educators, not as a validated pedagogical intervention. The paper argues that digital twin adoption in industry is primarily a financial justification problem rather than a technology comprehension problem. Business decision-makers understand the technology concept quickly when it is framed in terms of outcomes rather than capabilities. What they lack — and what prevents adoption — is a reliable methodology for constructing the business case: translating digital twin capability into financial metrics that are credible to a capital allocation committee, achievable with the organisation's current data infrastructure, and robust to the uncertainty that characterises technology investment projections. We develop a digital twin business case framework grounded in IS value realisation theory, identifying the value pathway from digital twin capability to organisational financial outcome and the measurement design required to make each step in the pathway empirically trackable. We examine why technology demonstrations fail to produce adoption decisions, and identify the specific cognitive and organisational factors that make a financial metrics presentation more persuasive than a capability showcase to business audience segments. We engage the counter-argument that business case frameworks impose excessive rigour on investments that are strategically necessary regardless of near-term financial return. Three falsifiable propositions are stated. The paper contributes to executive digital twin education design and to the broader literature on business-case mediated technology adoption in established enterprises.

**Keywords:** digital twin education, MBA, business case, technology adoption, IS adoption theory, financial metrics, value realisation, executive education, design science research, SMILE methodology, management education, ROI, digital transformation

---

## 1. Introduction: The Room That Changed the Lecture

The original plan for the guest lecture was standard: introduce digital twins conceptually, demonstrate capability through three or four use case examples with visual material, discuss technology architecture at a high level, and invite questions. This is the format that works well for technology-oriented audiences, data science students, and engineering postgraduates.

The room was an MBA cohort. Twelve minutes into the standard format, a student raised her hand and asked: "What is the payback period?" The question was followed, within three minutes, by two more: "Who in a company would own this decision?" and "What has to already be working before this can work?"

These are not technology questions. They are business questions. And the MBA student who asked the first one — a former finance professional retraining for a general management role — had identified the adoption barrier that the technology demonstration format entirely fails to address.

The subsequent 66 minutes of the lecture were different from the planned 78. They were a co-construction, between the lecturer and the MBA cohort, of a business case framework for digital twin investment: what are the value drivers, how do you measure them, what are the investment prerequisites, and who makes the decision? The cohort's engagement was qualitatively different from the technology-demo phase. They were working, not observing.

This paper is grounded in that experience and in the IS adoption literature that explains it.

---

## 2. Theoretical Framework

### 2.1 IS Value Realisation Theory

The IT business value literature [1][2] has consistently found that technology investments produce financial returns only through a value realisation pathway: the technology enables new organisational capabilities; those capabilities enable new or improved processes; those processes produce outcomes (reduced cost, increased revenue, improved quality) that translate to financial value. Each step in this pathway requires complementary organisational investments — in people, processes, and governance — that are typically not counted in the technology cost but without which the financial value cannot be realised.

Digital twin investments fail the business case test not because digital twins do not produce value — they demonstrably do in the cases where they have been well-implemented — but because the value realisation pathway from twin capability to financial outcome is long, contains multiple steps each of which requires complementary investment, and is sensitive to data infrastructure quality that is frequently worse than organisations realise. A business case that counts only the technology cost against the projected financial outcome without accounting for the complementary investments and data infrastructure prerequisites will overstate the return on investment and underestimate the time to realisation.

### 2.2 The Technology Acceptance Model Applied to Capital Allocation

Davis's Technology Acceptance Model (TAM) [3] identifies perceived usefulness and perceived ease of use as the primary determinants of individual technology adoption. In the capital allocation context — where the "adopter" is not an individual user but an investment committee — the relevant constructs shift: perceived usefulness becomes the credibility of the financial return projection, and perceived ease of use becomes the confidence in the organisation's ability to implement the investment successfully.

The technology demonstration format addresses neither of these constructs. It demonstrates the technology's capability, which is a precursor to perceived usefulness but not equivalent to it: a committee member who understands what a digital twin can do in a demonstration environment does not know whether it will produce the projected financial return in their specific organisation with their specific data infrastructure and their specific operational context.

The financial metrics presentation addresses both constructs directly: it specifies the financial return methodology in a form that the committee can audit, and it identifies the implementation prerequisites in a form that the committee can assess against their own organisational capabilities.

### 2.3 The SMILE Methodology Applied to Business Education

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state for a business school digital twin module is students who understand the technology concept but cannot construct a business case that would persuade a capital allocation committee. The to-be state is students who can identify digital twin value drivers in a specific industry context, design a measurement framework for each value driver, and construct a business case that accounts for implementation prerequisites and value realisation timeline. The methodology requires all educational design choices to be evaluated against this transition.

---

## 3. Why Technology Demonstrations Fail Business Audiences

### 3.1 The Capability-Relevance Gap

Technology demonstrations showcase what the technology can do in the best-case scenario: a well-integrated system, clean data, a compelling use case that has been specifically selected to be visually impressive. Business audiences perceive this showcase quality and calibrate it appropriately: they understand that the demonstration does not represent their data quality, their implementation capability, or their specific operational context.

The perception is accurate. The demonstration system was built by people with deep technical expertise who selected the use case specifically for demonstrability; the audience's organisation has different expertise, different data, and different use cases. The gap between the demonstration and the organisation's realistic implementation is real, and the business audience's scepticism about the gap is rational.

What the demonstration format does not provide is a methodology for closing the gap: a structured way for the business audience to estimate what implementation in their context would cost, require, and produce. Without this methodology, the demonstration produces interest without conviction — the audience is impressed but not persuaded.

### 3.2 The Vendor Presentation Problem

The majority of digital twin demonstrations that business decision-makers encounter are vendor presentations: technology providers demonstrating their platform's capabilities in contexts designed to minimise friction and maximise apparent capability. Business audiences have extensive experience with vendor presentations; they apply a discount rate to capability claims that is informed by experience with technology investments that did not deliver their promised value.

A financial metrics framework developed independently of specific technology vendors — one that specifies how to measure value creation from digital twin deployment regardless of which platform delivers it — signals a different kind of credibility. It acknowledges that the financial return depends not on the platform's capabilities but on the organisation's ability to use those capabilities to achieve operational improvements that translate to financial outcomes.

### 3.3 The Abstraction Level Mismatch

Technology demonstrations typically operate at the capability level: the twin can predict equipment failures, visualise operational state in real time, simulate intervention effects. Business audiences need the conversation at the decision level: should we fund this project, and if so, how much? The gap between capability and decision requires several intermediate steps — from capability to application, from application to operational improvement, from operational improvement to financial outcome — that the technology demonstration format does not traverse.

Business school education for digital twins must teach students to traverse this gap: not to understand the technology in more technical detail, but to translate between the technology's capabilities and the financial outcomes that those capabilities can produce in specific organisational contexts.

---

## 4. The Digital Twin Business Case Framework

### 4.1 Value Driver Identification

The business case begins with value driver identification: for a specific industry context and organisation type, what are the operational improvements that digital twin capability can produce, and which of those improvements translate to quantifiable financial outcomes?

The MBA cohort session produced a value driver taxonomy for manufacturing contexts (the cohort's primary interest area) through 20 minutes of structured discussion. The primary value drivers identified were:

- Unplanned downtime reduction (production value at risk per hour of unplanned stoppage, multiplied by downtime reduction percentage achievable through predictive maintenance)
- Energy cost reduction (energy spend per production unit, multiplied by efficiency improvement percentage from real-time optimisation)
- Quality defect reduction (cost of quality failures including rework, scrap, and warranty claims, multiplied by defect rate reduction percentage)
- Inventory optimisation (working capital tied up in maintenance spare parts and raw materials, multiplied by inventory reduction percentage from demand forecasting)
- Regulatory compliance efficiency (person-hours spent on compliance documentation and audit preparation, multiplied by efficiency improvement from automated data collection)

### 4.2 Value Pathway Design

For each value driver, the value pathway design specifies the mechanism by which digital twin capability produces the financial outcome and the assumptions that must hold for the mechanism to operate:

For unplanned downtime reduction: the mechanism requires sensor data from the equipment to be available to the twin (data infrastructure assumption), the twin's anomaly detection to identify developing faults before failure (model accuracy assumption), and maintenance response workflows to act on twin alerts faster than current practice (organisational readiness assumption). If any of these assumptions fails — if sensor data is not available, if the anomaly detection model is not calibrated to the specific equipment, or if maintenance workflows do not change — the downtime reduction does not occur.

The value pathway design makes these assumptions explicit and forces the business case developer to verify them against the organisation's current state before projecting the financial return.

### 4.3 Implementation Prerequisites

The business case must account for the investment required to achieve the data infrastructure assumptions that the value pathway depends on. A predictive maintenance application requires sensor data from the equipment; if the equipment does not currently have sensors, the sensor installation cost is a prerequisite investment that must be included in the business case. A real-time energy optimisation application requires energy sub-metering at zone level; if sub-metering does not exist, it is a prerequisite investment.

The identification of implementation prerequisites is where most digital twin business cases fail: they account for the twin platform cost but not for the data infrastructure investments the platform depends on. The business case framework must include a data infrastructure audit step that identifies prerequisites and estimates their cost before projecting financial returns.

### 4.4 Timeline to Value Realisation

Value realisation timelines for digital twin investments are typically longer than organisations expect, for two reasons. First, the data collection period: before a predictive maintenance model can make reliable predictions, it requires sufficient historical data to characterise normal equipment behaviour. For equipment with annual maintenance cycles, this may require twelve to eighteen months of sensor data before anomaly detection has sufficient baseline calibration. Second, the organisational change period: changing maintenance workflows to act on twin alerts rather than fixed maintenance schedules requires training, process documentation, and sustained management attention that typically takes six to twelve months to achieve stable adoption.

A business case that projects full value realisation within twelve months of digital twin deployment is, for most industrial applications, optimistic to the point of misleading the capital allocation committee. The business case framework must include realistic timeline modelling.

---

## 5. Counter-Argument: Is Business Case Rigour an Obstacle to Strategic Investment?

A sophisticated counter-argument holds that digital twin investment is strategically necessary for competitive positioning in many industries, regardless of whether the near-term financial case is compelling. Under this argument, imposing rigorous financial case requirements on digital twin investment is equivalent to requiring a detailed ROI analysis for a company's first website in 1997: the strategic necessity was obvious even if the financial model was speculative.

This counter-argument has merit for the first digital twin investment in an industry — the genuinely novel capability investment that positions an organisation for a capability category that will be table stakes in five years. It does not have merit for most current digital twin investment decisions, which are not first-movers in a novel capability category but are decisions about how much to invest, in which capabilities, in which sequence.

The business case framework is not an obstacle to strategic investment; it is a mechanism for making strategic investment choices more rational. An organisation that has invested in a financial case methodology for digital twin value drivers can allocate investment more precisely across competing capability options — choosing the predictive maintenance application over the real-time visualisation application because the financial return analysis shows that downtime reduction is a more material value driver for their specific operational profile than situational awareness — rather than making undifferentiated capability investments.

---

## 6. Falsifiable Propositions

1. **The persuasion format proposition:** Business school students who receive digital twin education through a financial metrics framework (value driver identification, value pathway design, prerequisite mapping, timeline modelling) will produce business case documents rated as significantly more credible by experienced investment committee members than students who receive education through technology demonstration and use case showcase formats, as evaluated by blind review of case documents by a panel of CFOs and capital committee chairs. This proposition can be falsified by a controlled study showing no significant difference in business case quality between framework-taught and demonstration-taught student groups.

2. **The prerequisite accounting proposition:** Digital twin project business cases that explicitly account for data infrastructure prerequisite investments will have actual implementation costs within 20% of projected costs, while business cases that do not explicitly account for prerequisites will experience cost overruns exceeding 50% in the majority of cases, as measured by post-implementation cost audit. This proposition can be falsified by a study of digital twin project cost outcomes showing no significant difference in cost predictability between cases that did and did not include prerequisite accounting.

3. **The adoption rate proposition:** Industries in which digital twin vendor associations publish standardised value driver benchmarks and financial case methodology guidance will show higher digital twin adoption rates among mid-market companies (100–2000 employees) than comparable industries without such benchmarks, controlling for technology maturity and industry digitalisation level. This proposition can be falsified by a cross-industry adoption study showing no significant correlation between the availability of standardised financial case methodology and adoption rates.

---

## 7. Limitations and Future Research

This paper is a pedagogical design note: it documents a teaching approach and the reasoning behind it, not a study with measured student outcomes. No pre/post assessment, knowledge test, or follow-up evaluation was conducted; whether the financial metrics framework produces better learning outcomes than a technology demonstration format remains an open empirical question. The framework is grounded in constructive alignment theory — specifically the principle that learning activities and assessment should be aligned with intended outcomes [12] — but alignment with theory is not a substitute for outcome measurement. The educational experience described is based on a single guest lecture session; the business case framework developed from it has not been validated through experimental comparison with alternative educational formats.

The value driver taxonomy in Section 4.1 was developed for manufacturing contexts with an MBA cohort whose professional backgrounds were primarily in operations, finance, and general management; it has not been systematically validated across other industry sectors or decision-maker profiles.

The counter-argument analysis reflects the author's analytical assessment; the specific claim about strategic investment in novel capability categories has not been empirically tested against digital twin adoption patterns in first-mover industries.

Future research should: (1) conduct a controlled experiment comparing learning outcomes and business case quality between financial-metrics-first and technology-demonstration-first digital twin education formats across MBA and executive education cohorts; (2) develop and validate a digital twin value driver benchmark database for two or three industry sectors, testing its predictive validity against actual post-implementation financial outcomes; (3) examine the relationship between the quality of pre-investment digital twin business cases (assessed retrospectively) and post-implementation financial outcome in a sample of 30 or more industrial deployments.

---

## 8. Conclusion

The technology demonstration is not the business case. These are different artefacts, addressing different audiences, serving different purposes. The technology demonstration answers the question: what can this do? The business case answers the question: should we fund this?

MBA students who will go on to authorise technology investments need both answers. They need enough technical literacy to understand what digital twin capability means operationally — what it requires, what it enables, what it does not do. And they need a methodology for translating operational capability into the financial metrics that capital allocation decisions depend upon.

The guest lecture experience described in this paper suggests that the financial methodology is the more valuable educational investment for this audience. Technical literacy has a floor below which it creates adoption barriers (decision-makers who do not understand what they are buying make poor investment decisions). Above that floor, additional technical literacy does not increase the quality of the investment decision; additional financial methodology does.

Teaching digital twins to business students means teaching them that the technology is not the hard part. The hard part is knowing what you are trying to achieve, how you will measure whether you are achieving it, and what investments beyond the technology itself are required to achieve it. That is a business education problem. The technology course cannot solve it.

---

## References

[1] Brynjolfsson E, Hitt LM. Beyond computation: information technology, organizational transformation and business performance. *Journal of Economic Perspectives* 2000;14(4):23–48.

[2] Melville N, Kraemer K, Gurbaxani V. Review: information technology and organizational performance: an integrative model of IT business value. *MIS Quarterly* 2004;28(2):283–322.

[3] Davis FD. Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly* 1989;13(3):319–340.

[4] Venkatesh V, Morris MG, Davis GB, Davis FD. User acceptance of information technology: toward a unified theory. *MIS Quarterly* 2003;27(3):425–478.

[5] Kohli R, Grover V. Business value of IT: an essay on expanding research directions to keep up with the times. *Journal of the Association for Information Systems* 2008;9(1):23–39.

[6] Soh C, Markus ML. How IT creates business value: a process theory synthesis. In: *Proceedings of the International Conference on Information Systems.* 1995: 29–41.

[7] Teece DJ. Explicating dynamic capabilities: the nature and microfoundations of (sustainable) enterprise performance. *Strategic Management Journal* 2007;28(13):1319–1350.

[8] Fitzgerald M, Kruschwitz N, Bonnet D, Welch M. Embracing digital technology. *MIT Sloan Management Review* 2013;55(2):1–12.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.

[12] Biggs J. *Teaching for Quality Learning at University.* Open University Press, 2003.
