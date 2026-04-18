---
title: "Infrastructure Before Intelligence: Why a Biotech Startup Chose Cloud Foundations Over AI Models"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: infrastructure before intelligence, biotech startups, cloud architecture, epigenomics, federated data, SMILE methodology, Life Programmable Interface, design science research, data sovereignty, digital twins, longevity research, Actor-Network Theory, boundary objects
status: ready
date: 2026-04-16
---

# Infrastructure Before Intelligence: Why a Biotech Startup Chose Cloud Foundations Over AI Models

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Early-stage biotechnology companies face a seductive architectural trap: the availability of cloud-native machine learning platforms creates the impression that the route from raw biological data to actionable intelligence is shorter than it is. This paper argues, against that impression, that the sequence matters as much as the destination. Drawing on a trilateral engagement between a major hyperscaler's healthcare vertical, a Swedish epigenomics startup, and a digital twin strategy platform, we analyse the decision to invest a full three-month phase in cloud infrastructure foundations before any supervised model development commenced. We frame this decision through Hevner et al.'s (2004) Design Science Research (DSR) framework and trace the key translation moments in the infrastructure adoption network using Actor-Network Theory (ANT). We apply the SMILE methodology — a structured design framework prioritising measurable, infrastructure-grounded innovation — to explain why "infrastructure before intelligence" is not a counsel of patience but a falsifiable architectural principle: models trained on improperly provisioned infrastructure do not merely underperform; they fail silently and non-obviously. We engage two counter-arguments directly: (1) that hyperscaler-managed services abstract infrastructure sufficiently to make foundational investment unnecessary, and (2) that the time cost of infrastructure phases is strategically prohibitive for resource-constrained startups. We argue that the first counter-argument conflates operational abstraction with epistemological reliability, and that the second conflates time-to-model with time-to-trustworthy-model. We further examine the role of federated data architectures in enabling secure multi-party data sharing — a design requirement that precedes AI model development and that becomes structurally intractable if deferred. We state three falsifiable propositions and identify limitations, including the single-organisation scope of the fieldwork. The paper contributes a design science artefact — the SMILE-grounded infrastructure readiness checklist — for use by early-stage life science companies before initiating AI model development programmes.

**Keywords:** infrastructure before intelligence, biotech startups, cloud architecture, epigenomics, federated data, SMILE methodology, Life Programmable Interface, design science research, data sovereignty, digital twins, longevity research, Actor-Network Theory, boundary objects

---

## 1. Introduction: The Model Is Not the Starting Point

When a major cloud provider's life sciences vertical presents its platform capabilities to an early-stage biotechnology company, the natural focal point of the conversation is models. Variant calling pipelines. Genomic foundation models. AI-assisted drug discovery interfaces. These are the capabilities that have commercial visibility, that appear in investor materials, and that the startup's scientific advisors discuss at conferences.

The infrastructure that makes those models trustworthy — the data ingestion pipelines, the federated access controls, the provenance recording systems, the quality assurance checkpoints — does not appear in conference keynotes. It is unglamorous, it is slow to build, and it produces nothing publishable in its first three months. But it is the precondition for everything that follows.

This paper examines a decision made by a Swedish epigenomics startup, in consultation with a major hyperscaler's healthcare vertical and a digital twin strategy platform, to invest a dedicated three-month infrastructure phase before initiating any AI model development. That decision is the object of analysis here, not merely the context. We ask: on what grounds is the "infrastructure before intelligence" sequencing rational, and what would constitute evidence against it?

The question is not academic. Early-stage biotechnology companies operate under intense time-to-market pressure. A three-month infrastructure phase has real opportunity costs. If infrastructure-first sequencing were merely a preference of cautious engineers, it would not justify the investment. We argue that it is not a preference — it is a consequence of the epistemological properties of biological data quality and of the social and regulatory architecture of biomedical data sharing.

The paper proceeds as follows. Section 2 frames the problem through ANT, tracing the human and non-human actants involved in the infrastructure decision. Section 3 applies the SMILE methodology to structure the infrastructure design rationale. Section 4 examines the hyperscaler's healthcare vertical as an enrolled actant and analyses the multi-cloud strategy as a risk management mechanism. Section 5 addresses the federated data architecture requirement. Section 6 engages the two primary counter-arguments. Section 7 connects infrastructure foundations to the eventual convergence with digital twin and longevity research programmes. Section 8 states three falsifiable propositions. Section 9 acknowledges limitations, and Section 10 concludes with the design science artefact: the SMILE-grounded infrastructure readiness checklist.

---

## 2. Tracing the Network: ANT and the Infrastructure Decision

### 2.1 Actor-Network Theory as Analytical Frame

Actor-Network Theory, developed by Callon (1986), Latour (1987), and Law (1992), provides a framework for analysing how heterogeneous networks of human and non-human actants are assembled, stabilised, and made durable. ANT does not privilege social explanation over technical explanation or vice versa; it treats the stabilisation of facts and artefacts as a joint achievement of human actors, technical systems, standards, and inscriptions.

Applied to the infrastructure decision studied here, ANT directs attention to: the actants involved in the network (cloud platforms, genomic sequencing instruments, regulatory frameworks, organisational roles, data schemas, software dependencies); the translation moments at which each actant's interests were aligned or re-defined; and the inscription mechanisms through which the infrastructure commitment was made durable — that is, resistant to reversal by any single actor.

This framing departs from a purely rationalist account of the infrastructure decision ("we chose infrastructure first because it is technically correct") by foregrounding the social and material processes through which "correctness" was established, agreed upon, and committed to in a way that persisted through organisational pressure toward faster model development.

### 2.2 Actants in the Infrastructure Network

The actants in this network include:

**The hyperscaler's healthcare vertical.** A major cloud provider with a dedicated life sciences and genomics processing service that provides managed workflow execution, compliant data storage, and specialised genomics pipeline tooling. This actant's commercial interests align with deep, long-term platform commitment from the startup; it offers favourable terms to startups in exchange for architectural commitment. Its enrolment in the network is partially achieved through the grant of significant cloud credits that make the financial case for cloud-first infrastructure compelling.

**The epigenomics startup.** A Swedish early-stage company with a novel sequencing methodology and a bottleneck resource profile: one bioinformatics lead handling all computational biology requirements. The startup's interests include: producing publishable data, attracting further investment, and building a data asset that can support downstream AI model development. A pending CTO hire creates a moment of organisational instability in which infrastructure decisions are particularly consequential — they may need to be explained, defended, and maintained by a technical leader who was not present when they were made.

**The digital twin strategy platform.** Life Atlas, functioning in this engagement as the ANT "translator" — the actant responsible for re-defining the interests of the other participants such that they align with the network's proposed programme of action (Callon, 1986). The platform's interest is in establishing the principle that any AI intelligence layer must be grounded in a validated data foundation, as this is the architectural prerequisite for the Life Programmable Interface (LPI) layer that Life Atlas proposes as a universal routing and governance gateway.

**The regulatory framework.** GDPR Article 9 (special category personal data) and its Swedish implementation create hard constraints on data processing that function as non-human actants in the network: they cannot be negotiated with, enrolled through persuasion, or bypassed through technical workarounds without creating legal liability. Their presence in the network is what makes federated data architecture — addressed in Section 5 — a mandatory design requirement rather than an optional optimisation.

**The sequencing instrument and its data format.** The epigenomics startup's proprietary sequencing methodology produces data in formats that require specific computational processing steps before standard bioinformatics pipelines can be applied. This non-human actant creates a translation requirement — the raw instrument output must be converted into a representation that cloud genomics pipelines can consume — that is invisible in a conversation focused on AI models but critical in the infrastructure phase.

### 2.3 The Key Translation Moments

ANT identifies translation as the process by which an actant's identity and interests are re-defined as part of network construction (Callon, 1986). Three translation moments were critical in the infrastructure decision:

**Translation 1: From "genomics service" to "compliance infrastructure."** The hyperscaler's genomics processing service was initially framed in the conversation as a scalable compute resource for sequencing pipeline acceleration. The translation — achieved through discussion of GDPR Article 9 and the federated data requirement — re-framed it as a compliance infrastructure: a managed environment whose regulatory certifications (SOC2, ISO27001, GDPR data processing agreements) provide a layer of legal protection that the startup cannot build itself at early stage. This translation shifted the decision from a performance optimisation to a governance decision, and substantially raised the switching cost of departing from the platform.

**Translation 2: From "AI model project" to "data quality programme."** The startup's initial framing of the cloud engagement was as an enabling step toward AI model development — infrastructure as means, model as end. The translation involved re-framing model development as a downstream activity whose success is wholly contingent on the upstream quality of the data infrastructure. The SMILE methodology (Section 3) provides the structured language for this translation: a model that is Specific, Measurable, Impactful, Lasting, and Evidence-based can only be constructed on data whose provenance, quality, and integrity are documented at every stage.

**Translation 3: From "single cloud" to "federated architecture."** The startup's initial inclination was toward single-cloud simplicity — one provider, one account, one billing relationship. The translation involved demonstrating that the data sharing requirements of a longevity research programme (eventual goal, Section 7) require multi-party data governance from the outset: a federated architecture in which each contributing party retains control over their data while enabling compliant analysis across the federation. This is a structural decision that cannot be retrofit onto a single-cloud architecture after data has been accumulated; it must be designed in at the foundation stage.

---

## 3. The SMILE Methodology Applied to Infrastructure Design

### 3.1 SMILE as Infrastructure Validation Framework

The SMILE methodology (Waern, 2025a; DOI: 10.5281/zenodo.17462962) provides a structured framework for evaluating whether an innovation or design proposal is Specific, Measurable, Impactful, Lasting, and Evidence-based. Applied conventionally, SMILE is used to evaluate proposed AI outputs or platform capabilities. Applied here, it is used to evaluate the infrastructure foundation on which those capabilities will rest.

This inversion — SMILE applied to infrastructure rather than to intelligence — is deliberate. It operationalises the "infrastructure before intelligence" principle by creating a forcing function: no AI programme should begin until the infrastructure it depends upon satisfies all five SMILE criteria. Failure on any criterion is grounds for delaying model development until the failure is resolved.

**Specific.** Is the infrastructure design precise enough that two independent engineers would implement it the same way? A vague infrastructure design — "we will use cloud storage for genomic data" — is not specific. A specific design names the storage service, the encryption standard, the access control model, the backup policy, and the data lifecycle management rules. Ambiguity in infrastructure design is not a matter of style; it is a source of compliance risk and reproducibility failure.

**Measurable.** Are the infrastructure's performance, reliability, and compliance properties measurable? Can the team determine, with data, whether the infrastructure is performing as designed? Measurability requires logging, monitoring, and alerting systems — which are themselves infrastructure components that must be provisioned before they can produce measurements. The absence of a monitoring infrastructure is itself an infrastructure failure, and it is one of the most common failures in early-stage startups that move quickly to model development.

**Impactful.** Does the infrastructure design enable a materially better outcome than the alternative? The relevant comparison is not "infrastructure versus no infrastructure" but "this specific infrastructure design versus the most plausible alternative." For the epigenomics startup, the relevant comparison is managed cloud genomics infrastructure versus institutional HPC cluster access. The impact argument — lower time-to-valid-result, higher compliance certainty, lower operational overhead for a team with one bioinformatics lead — must be made explicitly rather than assumed.

**Lasting.** Will the infrastructure design remain fit for purpose as the organisation scales? An infrastructure design that serves a team of three with one sequencing run per month may not serve a team of fifteen with twenty runs per month. Scalability decisions made at the foundation stage are much cheaper than migrations made after data has accumulated. The adoption of a genomics processing service with auto-scaling managed compute is a lasting design choice; the adoption of a fixed-size EC2 cluster is not.

**Evidence-based.** Is the infrastructure design grounded in published standards, validated reference architectures, or empirical evidence from analogous organisations? "Infrastructure before intelligence" is not an invented principle; it is directly grounded in the epigenomic data quality literature (Landt et al., 2012; ACMG, 2021) and in the clinical genomics regulatory landscape (Rehm et al., 2021). An infrastructure design grounded in this evidence base is more defensible — to regulators, to investors, and to a new CTO onboarding into the decision — than one that rests on the engineering preferences of the founding team.

### 3.2 Applying SMILE to the Three-Month Phase

The three-month infrastructure phase was structured around four sequential deliverables, each of which can be evaluated against the SMILE criteria:

1. **Managed cloud account provisioning and compliance configuration.** Specific: defined service catalogue, encryption policies, IAM roles. Measurable: compliance posture dashboards. Impactful: eliminates self-managed compliance overhead for a team without a dedicated security engineer. Lasting: scales with organisational growth without architectural change. Evidence-based: follows the hyperscaler's published life sciences reference architecture.

2. **Genomics workflow integration.** Specific: named pipeline tools (Nextflow, the genomics processing service's managed pipeline executor), named input and output formats. Measurable: end-to-end pipeline run time, resource utilisation, and error rates. Impactful: enables reproducible analysis at scale without bioinformatics engineering overhead. Lasting: community-maintained pipelines track tool updates. Evidence-based: nf-core community-curated pipeline standards (Ewels et al., 2020).

3. **Federated data access architecture.** Specific: named data sharing agreements, defined access control policies, and a documented federation topology. Measurable: access grant and revocation latency, audit log completeness. Impactful: enables multi-party data sharing without centralising data under a single controller. Lasting: federation topology can accommodate new participants without architectural change. Evidence-based: GA4GH data access standards (Rehm et al., 2021).

4. **Baseline QC run and provenance documentation.** Specific: defined QC metrics, defined thresholds, defined provenance schema. Measurable: per-sample QC metric values against thresholds. Impactful: establishes the quality baseline against which model training data quality will be evaluated. Lasting: provenance records are cryptographically signed and immutable. Evidence-based: ENCODE QC standards (Landt et al., 2012).

SMILE compliance at all four deliverables is the condition under which the infrastructure phase is declared complete and model development may begin. This is not a bureaucratic gate; it is an epistemic one.

---

## 4. The Hyperscaler's Healthcare Vertical: Depth Over Breadth

### 4.1 Specialised Verticals as Enrolled Actants

Not all cloud infrastructure is equivalent for life science data. A generic cloud object storage bucket and a managed genomics storage service are both capable of storing FASTQ files. The difference lies in the surrounding infrastructure: the compliance certifications, the managed encryption key services, the audit logging, the integration with genomics-specific processing services, and the support organisation that understands the domain.

The hyperscaler evaluated by the startup offered a dedicated life sciences vertical with the following characteristics relevant to the infrastructure decision: a managed genomics processing service capable of executing Nextflow pipelines with access to the cloud provider's population genomics reference datasets; a healthcare-compliant managed storage service with server-side encryption and object-level audit logging; and a flat organisational philosophy within the startup engagement team — a direct relationship with senior technical staff, not a tiered support structure — that the startup's team found consistent with their own organisational culture.

This last point — the flat organisational philosophy — is not a technical consideration, but it is an ANT consideration: the durability of an infrastructure commitment depends on the durability of the relationship that supports it. A startup in an early infrastructure phase will encounter unexpected technical problems, configuration questions, and compliance edge cases. The ability to reach an experienced technical resource directly, rather than through a tiered support queue, is a material factor in the speed at which those problems are resolved and the infrastructure phase is completed.

### 4.2 The Multi-Cloud Credits Strategy

The startup's resource constraints — one bioinformatics lead, a pre-revenue financing environment, and a pending CTO hire — make the financial engineering of cloud access a strategic concern. Major cloud providers offer startup credit programmes that can substantially offset the cost of the infrastructure phase, converting a cash expenditure into an in-kind resource allocation.

The evaluated strategy involved engaging with the startup programmes of multiple cloud providers simultaneously, with the intent of maximising total credit allocation across providers while making a primary architectural commitment to one provider's genomics vertical. This is not cloud agnosticism — the federated architecture requirement (Section 5) provides a technical argument for maintaining secondary cloud relationships — but it is credit portfolio management: using the competitive dynamics of cloud startup programmes to subsidise infrastructure investment.

The design implication is that the primary architectural commitment should be made on technical and compliance grounds, not on the basis of which provider offers the highest initial credit. Credits are temporary; architectural commitments are not. The SMILE "lasting" criterion applies directly: a provider chosen for credit size but misaligned on compliance architecture creates a costly migration when credits expire. The information systems literature on vendor lock-in and switching costs provides a structural explanation for why this risk is systematically underweighted at the time of initial platform selection (Shapiro & Varian, 1999): the full switching cost — data migration, retraining, workflow re-integration, and renegotiation of compliance agreements — is not visible at the point of commitment, only at the point of attempted migration.

---

## 5. Federated Data Architecture: The Design Requirement That Cannot Be Deferred

### 5.1 Federated Data as Infrastructure, Not Feature

Federated data architecture — a system in which data remains under the control of its originating organisation while permitting compliant, governed analysis across multiple parties — is often discussed as an advanced capability to be implemented after a platform's core functionality is established. This paper argues that federated data architecture is not a feature; it is a foundation. For any life science organisation whose research programme will eventually involve multi-party data collaboration, it must be designed in from the start.

The argument rests on a structural property of data accumulation: data collected under a single-party governance model develops dependencies — schema decisions, identifier systems, access control assumptions — that become increasingly expensive to refactor as the dataset grows. A federated architecture adopted at the outset creates an organisation-level canonical data model that is compatible with multi-party governance from day one. An architecture adopted later requires migration of every existing dataset into the federated model, renegotiation of every existing data sharing agreement, and re-implementation of every existing access control policy.

For the epigenomics startup, the case for early federation is concrete: the startup's research programme is explicitly designed to converge with digital twin and longevity research platforms (Section 7), each of which will bring their own data assets, governance frameworks, and regulatory constraints. The infrastructure foundation must be capable of accommodating this federation at the time of convergence, not constructed to accommodate it after the fact.

### 5.2 Edge-Native Federation: Local-First Data Sovereignty

The Life Atlas architecture (Waern, 2026a; DOI: 10.5281/zenodo.19587944) proposes an edge-native approach to federated data: each participating organisation runs a local data node that retains full sovereignty over its data, with analysis queries executed at the edge and only aggregate, privacy-preserving results leaving the local environment. This is the architectural inverse of centralised federation, in which all data is moved to a central cloud repository and access is governed by the central controller.

The edge-native approach has implications for the infrastructure design of each participating node. Each node must be capable of: executing the analysis queries that will be submitted by the federation; enforcing the access control policies that govern what queries are permitted; maintaining an audit trail of all data accesses; and communicating query results in a standardised format to the federation coordinator. These are infrastructure requirements — not AI model requirements — and they must be in place before the first federated analysis can be executed.

The LPI (Life Programmable Interface), proposed as a reference architecture in Waern (2026a), functions in this context as the federation coordination layer: a standardised routing and governance gateway that each node deploys, ensuring that all federation queries pass through a common policy enforcement point before reaching the local data store. The LPI's role in the federated architecture is described in Waern (2026a); the relevant point here is that the LPI is itself an infrastructure component whose deployment is a prerequisite for federated AI capability, not a consequence of it.

---

## 6. Engaging the Counter-Arguments

### 6.1 Counter-Argument 1: "Managed Services Abstract Infrastructure Away"

The strongest objection to the "infrastructure before intelligence" principle is that modern managed cloud services — fully managed pipeline executors, auto-scaling storage, serverless compute — have so thoroughly abstracted the operational complexity of infrastructure that the foundational investment described in this paper is no longer necessary. Under this view, a startup can provision a cloud account, load data into managed storage, and submit a pipeline job within hours — rendering a three-month infrastructure phase a counsel of excessive caution.

This objection conflates operational abstraction with epistemological reliability. Managed services abstract the operational complexity of running infrastructure: they eliminate server patching, capacity planning, and infrastructure monitoring from the startup's operational concerns. They do not abstract the epistemological requirements of biological data quality: the need for provenance recording, the need for QC metric validation against published thresholds, the need for GDPR-compliant data routing, and the need for a federated access architecture that can accommodate future multi-party collaboration.

A team that provisions a managed genomics pipeline service in a day can submit a sample processing job in a day. But the job's output will be trusted only to the degree that the team understands what the pipeline did to the data, what QC checks were applied, what reference datasets were used, and what the results mean in the context of the specific assay technology and sample preparation protocol being used. That understanding — the epistemological foundation that makes the output trustworthy — requires the three-month investment regardless of how quickly the managed service was provisioned.

### 6.2 Counter-Argument 2: "Three Months is Strategically Prohibitive"

The second objection is strategic: in a competitive market, three months of infrastructure investment before model development is a three-month head start for a competitor who chose to begin model development immediately. This is a real cost, and the paper does not dismiss it.

The response requires disaggregating "time-to-model" from "time-to-trustworthy-model." A model produced after three months of infrastructure investment takes six months to reach production readiness. A model produced without the infrastructure investment may reach a prototype state in three months — but it will require additional time for validation, data cleaning, and quality assurance before it can be deployed. The net timeline difference is smaller than the gross difference suggests, and it may be negative if the model trained on inadequate infrastructure requires substantial rework.

The more important point is that the models produced without infrastructure investment are not merely slow — they are unreliable in non-obvious ways. A genomic model trained on data with undetected quality failures will produce plausible, internally consistent outputs that are wrong in ways that only become apparent in validation cohorts or clinical settings. The cost of discovering that failure at the clinical validation stage — not at the infrastructure stage — is orders of magnitude higher than the cost of the three-month delay.

---

## 7. The Digital Twin and Longevity Research Convergence

### 7.1 Infrastructure as Convergence Precondition

The epigenomics startup's stated long-term research programme includes convergence with digital twin platforms and longevity research consortia — a direction consistent with the broader Life Atlas vision of a sovereign, multi-modal life operating system that integrates biological, environmental, and behavioural data (Waern, 2025b; DOI: 10.5281/zenodo.17464804).

This convergence is not an abstract aspiration; it creates concrete infrastructure requirements. A longevity research programme that integrates epigenomic data with longitudinal clinical records, wearable sensor data, and environmental exposure data requires a data infrastructure capable of: multi-modal data harmonisation (reconciling different identifier systems, units, and sampling frequencies); temporal alignment (matching epigenomic measurements taken at specific timepoints to concurrent clinical and sensor data); and privacy-preserving analysis across data types that may be governed by different regulatory frameworks.

Each of these requirements is an infrastructure requirement, not an AI model requirement. The AI models that will eventually analyse the integrated dataset can only be developed after the infrastructure that integrates, harmonises, and governs the dataset is in place. The three-month infrastructure phase is therefore not a delay in the path to longevity research capability — it is the first three months of that capability being built.

### 7.2 The Digital Twin as the Integration Layer

The Life Atlas digital twin architecture (Waern, 2025b) proposes that the biological digital twin is the integration layer for the multi-modal data streams that a longevity research programme requires. The twin is not a model — it is a structured, provenance-tracked representation of the individual's biological state across time, assembled from heterogeneous data sources and made queryable through the LPI gateway.

The infrastructure decision examined in this paper — managed cloud provisioning, genomics pipeline integration, federated access architecture, QC baseline — is the epigenomics startup's contribution to this twin: the genomic substrate on which longitudinal biological state representation will be built. Seen from this perspective, the three-month infrastructure phase is not a delay before the interesting work starts. It is the interesting work, at the foundational layer.

---

## 8. Falsifiable Propositions

Three falsifiable propositions follow from the analysis:

**Proposition 1 (Infrastructure Phase and Model Reliability).** Startups that complete a structured infrastructure phase — operationalised as satisfying all five SMILE criteria across the four deliverables listed in Section 3.2 — before initiating supervised model development will show a statistically significant reduction in model retraction, major revision, or performance re-evaluation events within 18 months of model deployment, compared to a matched cohort of startups that initiated model development without a prior infrastructure phase. A plausible measurable target: a 40% reduction in post-deployment model quality incidents in the infrastructure-first cohort (illustrative threshold; empirical calibration required during prospective validation per Section 10).

**Proposition 2 (Federated Architecture Adoption Timing and Migration Cost).** Organisations that adopt a federated data architecture at the foundation stage — before accumulating more than 500 samples in a single-party governance model — will incur significantly lower migration costs (measured in engineering person-days) when onboarding a second data-contributing organisation than organisations that adopt federation after accumulating a larger single-party dataset. This proposition is testable through retrospective analysis of federation projects in the clinical genomics and biobank sectors where timeline data is available.

**Proposition 3 (CTO Onboarding and Infrastructure Documentation).** Infrastructure decisions made before a new CTO joins an organisation and documented according to the SMILE framework will be reversed at a significantly lower rate in the first six months of the new CTO's tenure than infrastructure decisions made under equivalent conditions but documented only informally. This proposition reflects the ANT observation that the durability of infrastructure commitments depends on their inscription in artefacts that persist across personnel changes.

---

## 9. Limitations

This paper is grounded in fieldwork with a single early-stage Swedish epigenomics organisation during a defined period of strategic infrastructure evaluation. Generalisation to other organisational contexts — pharmaceutical discovery operations, clinical diagnostic laboratories, academic genomics consortia — requires validation. The startups most likely to benefit from infrastructure-first sequencing may be self-selected toward organisations that already have some bioinformatics infrastructure awareness; organisations with no prior computational biology capability may face a qualitatively different set of challenges.

The three-month timeline described is specific to this organisation's size and resource profile. Larger organisations may require longer infrastructure phases; organisations with experienced bioinformatics teams in place may require shorter ones. The SMILE readiness checklist proposed in Section 10 provides a framework for determining when an infrastructure phase is complete, but it does not predict how long it will take.

The analysis of the hyperscaler's healthcare vertical is based on publicly available documentation and the observations from the trilateral engagement. Specific product features, pricing, and compliance certifications change; claims in this paper reflect the evaluation period and should be verified against current documentation before use in procurement decisions.

The federated data architecture described in Section 5 is a design proposal, not a deployed system. The LPI's role in federation coordination is described as a reference architecture in Waern (2026a); production deployment and security review of the LPI middleware are in progress. Multi-site replication across federation nodes introduces consistency, conflict-resolution, and network-partition failure modes — including eventual-consistency lag between node states and split-brain risk during coordinator outages — that the current architecture has not empirically validated; these trade-offs require formal treatment in subsequent work.

Prospective validation across two additional biotech-hyperscaler engagements is planned for 2027, enabling cross-case comparison of infrastructure readiness trajectories.

---

## 10. Conclusion: The SMILE Infrastructure Readiness Checklist

The paper concludes with the design science artefact it was organised to produce: a checklist for evaluating whether an early-stage life science organisation's infrastructure is ready for AI model development to begin. The checklist is grounded in the SMILE framework and in the four deliverables of the three-month infrastructure phase examined in this paper.

**Cloud provisioning and compliance configuration.** Specific: is the service catalogue defined and version-controlled? Measurable: is a compliance posture dashboard operational? Impactful: has the compliance architecture been reviewed against the applicable regulatory framework? Lasting: does the architecture scale without structural change to ten times the current data volume? Evidence-based: does the architecture follow a published life sciences reference architecture?

**Genomics workflow integration.** Specific: are all pipeline tools named, versioned, and pinned? Measurable: is end-to-end pipeline run time monitored and alerted? Impactful: has the pipeline been validated against a reference dataset with known outputs? Lasting: is the pipeline managed by a community-maintained standard? Evidence-based: is the pipeline implementation grounded in published community standards?

**Federated data access architecture.** Specific: is the federation topology documented, including all current and anticipated participants? Measurable: are access grants and revocations logged and auditable? Impactful: does the federation architecture satisfy the data sharing requirements of the organisation's intended research programme? Lasting: can new participants be onboarded without architectural change? Evidence-based: does the federation protocol follow GA4GH or equivalent published standards?

**Baseline QC run and provenance documentation.** Specific: are all QC metrics defined, with thresholds referenced to published standards? Measurable: have QC metrics been computed and recorded for at least one representative sample? Impactful: have any samples failed QC thresholds, and has the failure mode been investigated and documented? Lasting: is the provenance record cryptographically signed and stored in append-only storage? Evidence-based: are the QC thresholds derived from ENCODE or equivalent published standards?

An affirmative answer to all questions is the condition under which the infrastructure phase is complete and model development may begin. An organisation that can answer "yes" to all twenty questions has done the unglamorous work. The intelligence that follows will be trustworthy because the infrastructure that grounds it was designed to be trustworthy first.

---

## References

ACMG (American College of Medical Genetics and Genomics). (2021). Points to consider in the detection of germline variants in tumor samples undergoing next-generation sequencing for somatic mutation detection. *Genetics in Medicine*, 23, 249–251.

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge* (pp. 196–233). Routledge & Kegan Paul.

Ewels, P. A., Peltzer, A., Fillinger, S., Patel, H., Alneberg, J., Wilm, A., Garcia, M. U., Di Tommaso, P., & Nahnsen, S. (2020). The nf-core framework for community-curated bioinformatics pipelines. *Nature Biotechnology*, 38(3), 276–278. https://doi.org/10.1038/s41587-020-0439-x

European Parliament & Council. (2016). *Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data* (General Data Protection Regulation). Official Journal of the European Union, L 119.

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, 28(1), 75–105.

Landt, S. G., Marinov, G. K., Kundaje, A., Kheradpour, P., Pauli, F., Batzoglou, S., Bernstein, B. E., Bickel, P., Brown, J. B., Cayting, P., & others. (2012). ChIP-seq guidelines and practices of the ENCODE and modENCODE consortia. *Genome Research*, 22(9), 1813–1831. https://doi.org/10.1101/gr.136184.111

Latour, B. (1987). *Science in action: How to follow scientists and engineers through society*. Harvard University Press.

Law, J. (1992). Notes on the theory of the actor-network: Ordering, strategy, and heterogeneity. *Systemic Practice and Action Research*, 5(4), 379–393.

Rehm, H. L., Page, A. J. H., Smith, L., Adams, J. B., Alterovitz, G., Babb, L. J., Barkley, M. P., Baudis, M., Beauvais, M. J. S., Beck, T., & others. (2021). GA4GH: International policies and standards for data sharing across genomic research and healthcare. *Cell Genomics*, 1(2), 100029. https://doi.org/10.1016/j.xgen.2021.100029

Shapiro, C., & Varian, H. R. (1999). *Information Rules: A Strategic Guide to the Network Economy*. Harvard Business School Press. [No DOI available]

Waern, N. (2025a). *Edge-native intelligence for sovereign life science data: Architecture patterns for genomic research at the computational frontier*. WINNIIO AB. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). *The reality construct: Digital twins as boundary-spanning artefacts for knowledge absorption, organisational evolution, and the co-authorship of intended futures*. WINNIIO AB. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *Life Programmable Interface: A sovereign consultation layer for autonomous life operating systems*. WINNIIO AB. https://doi.org/10.5281/zenodo.19587944
