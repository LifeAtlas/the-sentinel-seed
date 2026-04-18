---
title: "From Spreadsheets to AI Agents: How a 600-Person Property Manager Rethinks Data Strategy"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: property management, AI adoption, organisational readiness, data strategy, AI agents, spreadsheet legacy, digital transformation, Actor-Network Theory, technology adoption, change management, real estate AI, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# From Spreadsheets to AI Agents: How a 600-Person Property Manager Rethinks Data Strategy

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The adoption trajectory for AI in property management does not follow the standard technology diffusion curve. It follows an organisational data readiness curve that most property companies have not yet traversed: from spreadsheet-native operations, where institutional knowledge is embedded in Excel formulas and shared drives, to structured data foundations, to connected systems, to analytical intelligence, to autonomous agent capability. An AI workshop with seven participants from a 600-person property management organisation revealed this trajectory in sharp relief: the organisation's leaders understood what AI agents could eventually do for property operations, were enthusiastic about the potential, and had almost no shared understanding of what organisational and data conditions were prerequisites for that potential to be realised. This paper analyses the organisational readiness problem through a combination of IS adoption theory and Actor-Network Theory (ANT), examining the specific barriers that prevent organisations with long Excel legacies from making the data strategy transition required before AI agent deployment becomes viable. We describe the adoption stages — not as a linear technology maturity model, but as a series of translation moments in which data practices, organisational structures, and technology artefacts must be simultaneously reconfigured. We examine the specific failure modes of organisations that attempt to deploy AI on top of spreadsheet-native data infrastructure, and distinguish between AI applications that can add value at early data maturity stages and those that require a fully structured data foundation. Three falsifiable propositions are stated. We engage the counter-argument that AI can solve the data quality problem rather than depending on prior data quality improvement, and identify the specific conditions under which this argument holds and does not. The paper contributes a practical readiness assessment framework for property management organisations evaluating AI investment, grounded in the translation requirements revealed by the workshop interaction.

**Keywords:** property management, AI adoption, organisational readiness, data strategy, AI agents, spreadsheet legacy, digital transformation, Actor-Network Theory, technology adoption, change management, real estate AI, design science research, SMILE methodology

---

## 1. Introduction: The AI Aspiration Without the Foundation

Seven professionals from a property management company sit in a workshop. They manage approximately 600 people and a large portfolio of mixed-use assets. They have read the literature. They have attended the conferences. They know what AI agents can do: automate lease renewal negotiation, predict maintenance failures before they occur, optimise vacancy portfolios against market conditions in real time, generate regulatory compliance reports from operational data, answer tenant queries without human intervention. They are, in a word, excited.

Then the workshop facilitator asks: where does your lease data live? Pause. In Excel, several people say simultaneously. Where does your maintenance history live? In the BMS system, says one participant. In spreadsheets, says another. In the property manager's heads, says a third, prompting laughter that carries the recognition of a truth too uncomfortable to state directly.

This gap — between AI ambition and data infrastructure reality — is the subject of this paper. It is not a technology gap. The AI agent capabilities that property management leaders want to deploy are real, available, and increasingly affordable. The gap is an organisational data readiness gap: the absence of the structured, accessible, quality-controlled data infrastructure that AI agent capability depends upon. Property management organisations that attempt to deploy AI without addressing this gap will spend money, generate internal friction, and produce systems that either do not work or work only for the narrow use cases where structured data happens to exist.

The workshop that grounds this paper was structured as an introduction to AI capabilities for property management, but the most valuable data it produced was not in the AI demonstration: it was in the seven participants' responses to simple questions about where their organisation's data lives, who owns it, and whether it is consistent.

---

## 2. Theoretical Framework

### 2.1 IS Adoption Theory and the Readiness Prerequisite

IS adoption theory — in its Technology Acceptance Model [1], Diffusion of Innovations [2], and organisational IS assimilation [3] variants — identifies two primary categories of adoption determinant: individual-level factors (perceived usefulness, perceived ease of use, individual innovativeness) and organisational-level factors (top management support, organisational readiness, absorptive capacity). In the AI adoption context, the organisational readiness factor is complicated by a prerequisite that standard adoption models do not explicitly represent: data infrastructure readiness.

AI adoption does not merely require organisational willingness to adopt; it requires that the organisation's data is in a form that the AI system can use. An organisation that is highly willing to adopt AI but maintains its operational data in spreadsheets with inconsistent formatting, missing values, and undocumented field semantics cannot benefit from AI capability regardless of its adoption intent. The data readiness prerequisite creates an adoption barrier that precedes the standard adoption decision.

### 2.2 ANT and Organisational Data Infrastructure

ANT [4][5] is useful for analysing organisational data infrastructure because data infrastructure is precisely the kind of heterogeneous network — spreadsheets, databases, BMS systems, document management platforms, email threads, people's memories — whose properties cannot be reduced to any single component's characteristics. The 600-person property company's data infrastructure is a network of human and non-human actants whose collective properties determine what AI can and cannot be asked to do.

In ANT terms, the spreadsheet is a particularly powerful actant in this network: it is flexible enough to accommodate any data structure, accessible without technical infrastructure, usable by non-technical staff, and embeds organisational knowledge in its formula logic and tab structure in ways that are legible to the people who built it and opaque to systems that cannot read implicit human knowledge. The spreadsheet's very flexibility is the source of its power and its limitation: it can represent anything, but it represents everything in a format that machines cannot reliably parse.

### 2.3 The SMILE Methodology Applied to Property AI Readiness

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a property management organisation whose operational data is in spreadsheets and siloed systems, and the to-be state is an organisation with AI agent capability handling routine operations across maintenance, leasing, finance, and compliance. The SMILE methodology does not prescribe a technology solution; it requires that every investment decision be evaluated by whether it reduces the gap between these states, and whether it does so in a way that preserves future optionality rather than creating new lock-in.

---

## 3. The Data Maturity Stages of Property AI Readiness

### 3.1 Stage 0: Spreadsheet-Native Operations

Stage 0 organisations maintain operational data primarily in spreadsheets: lease tables, maintenance schedules, tenant contact directories, service charge calculations, compliance tracking, capital expenditure plans. The spreadsheet environment is not a failure; for organisations that reached a certain scale before database management systems were widely accessible, it was a rational response to capability and cost constraints. The consequence is that institutional knowledge is distributed across hundreds of spreadsheet files, embedded in formula logic, cell comments, and file naming conventions that are legible to experienced staff and impenetrable to external systems.

At Stage 0, AI can add value in exactly one domain: natural language document processing. Large language models can extract structured information from unstructured text — lease clauses, inspection reports, planning documents, correspondence — and produce structured outputs that can be loaded into a database. This is a legitimate and high-value AI use case that does not depend on pre-existing data quality. It is also, notably, a use case that produces the structured data that enables subsequent AI applications — it is a data migration tool that uses AI, not an AI application that requires prior data quality.

### 3.2 Stage 1: Structured Data Foundation

Stage 1 organisations have migrated core operational data from spreadsheets to structured databases: a property management system (Yardi, MRI, Re-leased, or equivalent) for lease and tenant data; a CAFM system for maintenance and asset management; an accounting system with property-level cost centre structures. The data is structured, queryable, and accessible to systems other than the humans who entered it.

At Stage 1, AI can add value in three additional domains: classification and tagging (categorising maintenance requests, lease clauses, and compliance items at scale); anomaly detection (identifying unusual patterns in maintenance costs, energy consumption, or rental payment behaviour); and report generation (producing natural language summaries of structured data for non-technical stakeholders). These applications require structured data but not semantic consistency or cross-system integration.

### 3.3 Stage 2: Connected and Consistent

Stage 2 organisations have integrated their core systems: the property management system, the CAFM, the accounting system, and the BMS share a common asset identifier scheme; data entered in one system is visible in others without manual re-entry; and data quality standards are enforced at point of entry rather than corrected in downstream analysis. This integration is technically achievable with current middleware platforms but requires sustained organisational effort to achieve and maintain.

At Stage 2, AI can add value in the domains that property management leaders typically aspire to: predictive maintenance scheduling, vacancy optimisation, tenant risk scoring, energy performance benchmarking, and automated lease renewal negotiation. These applications require cross-system data integration and consistent data semantics that Stage 0 and Stage 1 organisations cannot provide.

### 3.4 Stage 3: Autonomous Agent Capability

Stage 3 organisations have reached the data maturity level at which AI agents — systems capable of multi-step reasoning, tool use, and autonomous action in the operational environment — can be deployed for substantive property management tasks. An AI agent capable of processing a maintenance request, determining the appropriate trade, checking contractor availability and contract rates, scheduling the work, and notifying the tenant operates across four or more system domains simultaneously. It depends on real-time data from each domain, consistent asset identifiers across systems, and access to contractor directories, scheduling systems, and tenant communication platforms.

No property management organisation the workshop participants were aware of had reached Stage 3 across its full operational portfolio. Several had Stage 3 capability in specific narrow domains (automated lease renewal reminders, automated service charge reconciliation). The aspiration for broader autonomous agent capability existed; the data infrastructure did not yet support it.

---

## 4. Workshop Analysis: The Gap Between Aspiration and Foundation

### 4.1 What the Workshop Revealed

The seven workshop participants included four from senior management (two from operations, one from finance, one from IT) and three from operational teams (property management, facilities, and tenant services). The management team's framing of AI was capability-focused: what can it do? The operational team's framing was friction-focused: what problems do we have that we wish were solved?

The most revealing moment was a mapping exercise in which participants were asked to trace the data pathway for a common operational process — a tenant maintenance request from submission to completion and invoice payment — across the organisation's current systems. The exercise revealed: four separate system handoffs, three manual re-entry steps, two points at which data was extracted to spreadsheets for intermediate processing, and one point at which the process depended on institutional knowledge held by a specific individual and not recorded anywhere.

This data pathway is not AI-deployable in its current form. An AI agent cannot take over a process that has three manual re-entry steps, because each re-entry step is an inscription event in which human knowledge — judgement about how to categorise the request, which contractor is appropriate, whether the cost is within budget — is embedded in the data. Removing the human from this process requires either capturing that knowledge in explicit rules and models, or training an AI system to replicate it from historical examples, neither of which is possible if the data from historical examples is distributed across systems that cannot be joined.

### 4.2 The Readiness Assessment Framework

The workshop experience grounds a five-dimension readiness assessment framework for property management AI adoption:

**Data location:** Is operational data in queryable systems or in spreadsheets and document repositories? (Stage 0 indicator: primarily spreadsheets)

**Data integration:** Do core operational systems share asset identifiers and exchange data without manual re-entry? (Stage 2 requirement)

**Data quality:** Are field values consistent, controlled, and documented, or are they free-text fields whose meaning depends on the person who entered them? (Prerequisite for any AI beyond document processing)

**Process documentation:** Are operational workflows documented in a form that makes the decision logic explicit, or are they embedded in the knowledge of specific individuals? (Prerequisite for process automation)

**AI literacy:** Do the people who will work alongside AI systems understand what AI can and cannot do, and are they able to specify requirements for AI capability in their operational domain? (Adoption prerequisite)

Organisations that score low on all five dimensions are Stage 0. Organisations that score high on all five are approaching Stage 3. The critical insight is that the dimensions are not independent: data quality improvements depend on data location improvements (structured systems enforce quality better than spreadsheets); AI literacy developments are only productive if data quality improvements follow them (a team that understands AI but has poor data cannot deploy useful AI). The investment sequence matters.

---

## 5. Counter-Argument: Can AI Solve the Data Quality Problem?

A sophisticated objection to the data readiness framing is that AI systems — specifically LLM-based document processing and data extraction pipelines — can extract structured data from unstructured sources (spreadsheets, documents, email) and solve the data quality problem rather than depending on prior data quality improvement.

This argument is partially correct. LLM-based document processing can extract structured information from lease documents, inspection reports, and maintenance records at a quality level that approaches human extraction accuracy for well-formed documents. This is the Stage 0 to Stage 1 transition mechanism described in Section 3.1: AI-powered extraction is a legitimate and valuable data migration tool.

The argument fails for ongoing operations. The Stage 0 property company does not merely have poor historical data; it has poor data practices. Even if historical data is successfully migrated to structured format using AI extraction, new data created by the organisation's operational processes will continue to be created in spreadsheets, email, and free-text fields unless the processes that generate that data are changed. AI extraction of historical data is a one-time improvement; it does not change the data generation practices that determine data quality going forward.

The sustained solution requires process change, not only data processing technology. The data quality problem is an organisational behaviour problem that technology can help with but cannot solve independently.

---

## 6. Falsifiable Propositions

1. **The readiness prerequisite proposition:** Property management organisations that deploy AI agent capabilities without first achieving Stage 2 data infrastructure maturity (integrated systems with consistent asset identifiers and controlled vocabularies) will abandon or significantly descope their AI deployments within 18 months due to data quality failures, at a rate at least three times higher than organisations that deploy AI after reaching Stage 2 maturity. This proposition can be falsified by a longitudinal study of property management AI deployments showing no significant difference in success rates between Stage 0-1 and Stage 2 organisations.

2. **The sequence dependency proposition:** The return on investment from AI capability in property management is more strongly predicted by the organisation's data maturity stage than by the AI capability level deployed, measured across comparable portfolio sizes and property types. This proposition can be falsified by a multi-organisation study showing that AI capability level (rather than data maturity) is the primary predictor of operational improvement outcomes.

3. **The extraction bridge proposition:** Property management organisations that use LLM-based document extraction as the transition mechanism from Stage 0 to Stage 1 will achieve structured data coverage for at least 85% of their historical lease and asset records within six months of deployment, at a cost per record below 15% of the cost of manual data entry, when applied to portfolios of at least 200 assets. This proposition can be falsified by a cost and accuracy benchmarking study showing LLM extraction achieving below 85% coverage or above 15% relative cost at the stated portfolio scale.

---

## 7. Limitations and Future Research

The workshop evidence is drawn from a single session with seven participants from one organisation; the generalisability of the readiness framework to other property management contexts is asserted on analytical grounds rather than demonstrated through systematic comparative research.

The data maturity stages described are constructed from workshop observation, practitioner knowledge, and IS adoption literature; they have not been validated against a representative sample of property management organisations or tested for inter-rater reliability.

The counter-argument analysis in Section 5 is based on general assessment of LLM document processing capability; the specific accuracy and cost figures cited are illustrative of directional expectations and should not be treated as validated benchmarks. LLM-based document understanding performance varies substantially with document type, field complexity, and model selection; Huang et al. [9] provide a systematic benchmark of large language models on complex document understanding tasks, reporting accuracy ranging from approximately 50% to over 90% depending on task type and model, which underscores that the 85% coverage claim in Proposition 3 represents an achievable but not guaranteed upper bound contingent on document quality and model configuration.

Future research should: (1) conduct a systematic survey of data maturity levels across property management organisations of varying scale, validating the five-dimension readiness assessment framework against observed AI adoption outcomes; (2) develop and test a standardised data maturity assessment instrument for property management contexts; (3) conduct a cost-benefit analysis of the Stage 0 to Stage 1 data migration process across organisations that used LLM-based extraction versus manual data entry versus traditional ETL approaches.

---

## 8. Conclusion

The property management sector is in the early stages of an AI adoption wave. The aspiration is clear: autonomous agents handling maintenance coordination, lease management, tenant communications, and regulatory compliance; AI-driven optimisation of portfolio performance across vacancy, energy, and service cost dimensions. The gap between aspiration and current state is, for most organisations, not a technology gap. It is a data infrastructure gap that no amount of AI investment will close while operational data lives in spreadsheets.

The workshop interaction described in this paper reveals the gap in practical terms. Seven senior professionals from a 600-person property management company understood what AI could do and had no shared map of what organisational prerequisites were required before AI could do it. The prerequisite map is what this paper attempts to provide.

The investment sequence matters: address data location before data quality, data quality before integration, integration before AI capability. AI that can accelerate the earlier transitions — LLM-based document extraction for Stage 0 to Stage 1, anomaly detection for early Stage 2 — should be deployed in service of building the foundation, not in anticipation of a foundation that does not yet exist.

The organisations that will lead property AI adoption are not those with the most ambitious AI roadmaps. They are the ones that invested in data infrastructure before the AI conversation started, and who are now able to deploy AI agents on top of a foundation that makes the agents' outputs reliable rather than confidently wrong.

---

## References

[1] Davis FD. Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly* 1989;13(3):319–340.

[2] Rogers EM. *Diffusion of Innovations.* 5th edn. Free Press, 2003.

[3] Purvis RL, Sambamurthy V, Zmud RW. The assimilation of knowledge platforms in organisations: an empirical investigation. *Organization Science* 2001;12(2):117–135.

[4] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[5] Latour B. *Science in Action.* Harvard University Press, 1987.

[6] Agarwal R, Prasad J. A conceptual and operational definition of personal innovativeness in the domain of information technology. *Information Systems Research* 1998;9(2):204–215.

[7] Fichman RG. Real options and IT platform adoption: implications for theory and practice. *Information Systems Research* 2004;15(2):132–154.

[8] Hendricks KB, Singhal VR, Stratman JK. The impact of enterprise systems on corporate performance: a study of ERP, SCM, and CRM system implementations. *Journal of Operations Management* 2007;25(1):65–82.

[9] Huang S, et al. Benchmarking large language models in complex document understanding. arXiv:2308.12133. 2023.

[10] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[11] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[12] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
