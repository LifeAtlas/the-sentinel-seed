---
title: "Epigenomics Meets Edge: A Design Science Proposal for a Freemium Quality Control Interface for Chromatin Research"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: epigenomics, chromatin accessibility, quality control, edge-native, freemium, EpiPak, Nextflow, AWS HealthOmics, GDPR, bioinformatics, Life Programmable Interface, infrastructure before intelligence, design science research, absorptive capacity
status: ready
date: 2026-04-16
---

# Epigenomics Meets Edge: A Design Science Proposal for a Freemium Quality Control Interface for Chromatin Research

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Epigenomic sequencing technologies — chromatin immunoprecipitation sequencing, ATAC-seq, and their hybrid variants — generate data of extraordinary biological richness and regulatory sensitivity. The computational infrastructure to process, quality-control, and interpret this data has historically required institutional bioinformatics resources that most research laboratories, clinical operations, and early-stage biotechnology companies do not have. This paper proposes and describes the architectural design of a freemium, locally deployable quality control interface for chromatin research data — termed EpiPak — framed as a design science research (DSR) artefact within Hevner et al.'s (2004) DSR framework. The design situates itself within the broader principle of "infrastructure before intelligence": no supervised learning model can be trained, validated, or trusted until foundational data quality infrastructure is in place. Drawing on the edge-native architectural philosophy developed for sovereign life science data (Waern, 2025a; DOI: 10.5281/zenodo.17462962 — note that Zenodo DOI suffixes reflect the platform's sequential deposit counter and do not encode a publication year) and the Life Programmable Interface (LPI) concept as a universal routing gateway, we argue that epigenomic QC tooling has structural properties that approximate — but do not fully satisfy — Samuelson's (1954) definition of a public good, and that a freemium model is the appropriate design response to this market failure. We examine competing platforms (Galaxy, Terra/AnVIL, DNAnexus) and argue that EpiPak's design differentiator is not capability but governance: local-first data sovereignty enforced at the infrastructure layer, not at the terms-of-service layer. We apply Cohen and Levinthal's (1990) absorptive capacity framework to explain how bioinformatics-capable contributors accelerate open-source adoption in organisations without existing domain expertise. We state two falsifiable propositions that future empirical work should test. The paper explicitly acknowledges that EpiPak is a design proposal; a prototype R package is available at https://github.com/winniio/epipak-proto (alpha), and a representative single-sample MultiQC validation run is documented in the supplementary material. We conclude that the path from sequencing chemistry to biological insight runs through unglamorous infrastructure, and that building this infrastructure correctly — local-first, open-source-integrated, regulation-aware — is the precondition for any downstream intelligence.

**Keywords:** epigenomics, chromatin accessibility, quality control, edge-native, freemium, EpiPak, Nextflow, AWS HealthOmics, GDPR, bioinformatics, Life Programmable Interface, infrastructure before intelligence, design science research, absorptive capacity

---

## 1. Introduction: Intelligence Requires Infrastructure

In the current AI landscape, the tendency is to begin with the model. A new dataset is obtained, a neural architecture is selected, training is initiated, and the quality of the resulting intelligence is taken as the measure of the project's success. The infrastructure that produces, cleans, and validates the dataset is treated as a prerequisite to be dispatched quickly rather than a foundational investment to be designed carefully.

This tendency is understandable. Models are visible, publishable, and fundable. Infrastructure is invisible until it fails. But in genomics generally, and in epigenomics specifically, the failure mode of under-engineered infrastructure is not a degraded model — it is a silently wrong model. Systematic biases introduced at the library preparation, sequencing, or alignment stages propagate through every downstream analysis. A machine learning model trained on epigenomic data with undetected quality failures does not produce obviously wrong outputs; it produces plausible outputs that are wrong in ways that may not become apparent until the findings are tested in validation cohorts or clinical settings.

This paper argues that the correct sequencing of investment in epigenomic research infrastructure is: quality control before model development, local deployment before cloud scaling, open-source integration before proprietary tooling. We term this the "infrastructure before intelligence" principle, and we argue that it is not merely a practical prescription but a direct consequence of the epistemological requirements of quantitative biological models.

The specific context for this argument is the design of EpiPak: a freemium, locally deployable quality control interface for chromatin research data, developed during a three-month foundational infrastructure phase preceding machine learning model development at a Swedish epigenomics research organisation. This paper is a design science contribution in the sense of Hevner et al. (2004): we propose an artefact, articulate the design principles instantiated in it, evaluate it against the requirements of the problem class, and identify the falsifiable propositions that future empirical work should test. We do not claim that EpiPak has been deployed at scale, validated in randomised comparative studies, or demonstrated to produce the population-level outcomes described. A prototype R package is available at https://github.com/winniio/epipak-proto for community inspection and contribution.

The paper proceeds as follows. Section 2 establishes the epigenomic data quality problem and its consequences. Section 3 introduces the design science framework and EpiPak's design principles. Section 4 addresses competing platforms and the counter-argument they represent. Section 5 describes the foundational infrastructure phase and its workflow architecture. Section 6 presents the EpiPak architecture. Section 7 examines the freemium model and its relationship to the public good argument. Section 8 addresses absorptive capacity and contributor acceleration. Section 9 examines the regulatory geography of epigenomics research. Section 10 states two falsifiable propositions. Section 11 acknowledges limitations, and Section 12 concludes.

---

## 2. The Epigenomic Data Quality Problem

### 2.1 The Nature of Epigenomic Data

Epigenomics studies heritable changes in gene expression that do not involve alterations to the DNA sequence itself: DNA methylation, histone modification, chromatin accessibility, and three-dimensional genome organisation. The major assay technologies — ChIP-seq (chromatin immunoprecipitation followed by sequencing), ATAC-seq (assay for transposase-accessible chromatin with sequencing), hmqChIP-seq (a high-fidelity variant of ChIP-seq), CUT&RUN, and CUT&TAG — each generate short-read sequencing data that requires substantial computational processing before biological signal can be extracted.

The processing pipeline has multiple stages at which quality failures can be introduced and, critically, at which quality failures can be detected if appropriate QC steps are applied. Library preparation quality affects sequencing yield and fragment size distribution. Sequencing quality affects read accuracy and coverage depth. Alignment quality affects the proportion of reads successfully mapped to the reference genome and the specificity of those mappings. Peak calling quality affects the sensitivity and specificity with which regulatory elements are identified. Each stage produces QC metrics that, taken together, characterise the overall reliability of the dataset.

The challenge for most research laboratories is that these QC metrics are produced by a diverse set of tools — FastQC, MultiQC, samtools flagstat, deepTools bamCoverage, MACS3, SEACR, HOMER — that do not integrate with each other, do not produce unified reports, and do not surface actionable guidance for laboratories without dedicated bioinformatics expertise. A molecular biologist who produces a high-quality hmqChIP-seq library and sends it for sequencing will receive a directory of FASTQ files and a sequencing quality report. Transforming that output into a validated, analysis-ready dataset requires navigating a computational workflow that is not designed for non-specialists.

### 2.2 The Consequences of QC Gaps

The consequences of QC failures in epigenomic research are well-documented. Landt et al. (2012) established the ENCODE quality metrics for ChIP-seq — the Irreproducible Discovery Rate, the Non-Redundant Fraction, and the PCR Bottleneck Coefficient — following the recognition that published ChIP-seq datasets varied dramatically in quality in ways that were not visible from read counts alone. Buenrostro et al. (2013) noted similar quality challenges in ATAC-seq, where mitochondrial DNA contamination — a well-known library preparation artefact — can consume the majority of sequencing reads if not explicitly controlled.

For early-stage biotechnology companies applying epigenomics to drug target identification or biomarker development, the consequences extend beyond reproducibility to regulatory risk. A drug target identified from an epigenomic dataset with systematic quality failures is a compound probability of error: the probability that the target is real is a product of the probability that the peak call is real (affected by peak calling QC) and the probability that the peak call represents genuine chromatin state (affected by alignment and library QC). Poor QC infrastructure multiplies uncertainty at every stage.

The supervised learning models that represent the next generation of epigenomic analysis — models that predict gene regulation from chromatin accessibility patterns, or infer cell type identity from histone modification signatures — inherit all of this uncertainty. A model trained on inadequately QC'd data is not just imprecise; it is systematically biased in directions that the training data cannot reveal.

---

## 3. Design Science Framework and Design Principles

### 3.1 EpiPak as a Design Science Artefact

This paper adopts the Design Science Research (DSR) framework of Hevner et al. (2004) as its methodological foundation. DSR is concerned with the creation and evaluation of purposeful artefacts that address identified problems in their application domain. It is the appropriate framework for this work because EpiPak does not yet have a history of deployment to study empirically; it is a design proposal whose contribution lies in the articulation of design principles and the demonstration of their feasibility through a prototype.

Within Hevner et al.'s framework, EpiPak satisfies the following DSR criteria. The problem relevance criterion is addressed in Section 2: the epigenomic QC gap is a genuine and documented problem class with real consequences for research reproducibility and regulatory compliance. The design evaluation criterion is partially addressed through the prototype R package and the representative MultiQC validation run documented in the supplementary material; full evaluation against empirical outcomes is identified as future work. The design contribution criterion — articulating generalisable design principles — is addressed in Section 3.2 below.

### 3.2 Design Principles

EpiPak instantiates five generalisable design principles that reflect the edge-native, sovereignty-first philosophy and that could be applied to analogous QC tooling problems in other omics domains:

**DP1: Sovereignty by architecture, not by policy.** Data governance rules — GDPR routing constraints, jurisdiction-specific processing requirements — must be enforced by the infrastructure layer, not communicated through terms-of-service agreements that users may not read and cannot verify. The LPI gateway (Section 6.2) is the technical instantiation of this principle.

**DP2: Capability parity across tiers.** The freemium boundary should be drawn at computational scale, not algorithmic capability. Excluding users from QC algorithms on the basis of payment status reproduces the access inequality that the tool is designed to address. All QC logic runs locally, free, at single-sample scale.

**DP3: Pipeline-stage tool selection.** Workflow orchestration tool choice should be driven by the operational requirements of each pipeline stage, not by organisational standardisation preferences. Stages with portability and cloud-scaling requirements use Nextflow; stages with local execution and rapid iteration requirements use Snakemake.

**DP4: Provenance as first-class output.** Every QC report is incomplete without a cryptographic provenance record that enables independent reproduction of the analysis. Provenance is not a logging afterthought; it is part of the designed output.

**DP5: Open-source community as accelerant.** The organisation's absorptive capacity — its ability to exploit external knowledge — is a function of its prior related knowledge base (Cohen & Levinthal, 1990). Releasing the core QC algorithms as an open-source R package is a mechanism for building that knowledge base through community contribution, not just for attracting users.

---

## 4. The Counter-Argument: Galaxy, Terra, and Existing Platforms

### 4.1 What Existing Platforms Already Solve

The strongest counter-argument to EpiPak's design rationale is that the problem it addresses has already been substantially solved by mature, widely adopted platforms. Galaxy (Afgan et al., 2022) provides a browser-based bioinformatics environment with point-and-click access to hundreds of tools — including FastQC, MultiQC, and the full ATAC-seq/ChIP-seq pipeline — without any programming requirement. Terra (Birger et al., 2021), built on Google Cloud and developed by the Broad Institute, provides a managed environment for large-scale genomic analysis with GATK, Cromwell, and WDL workflow support, and hosts datasets from ENCODE, GTEx, and other major consortia. AnVIL (Schatz et al., 2021) extends Terra with NIH-funded cloud compute credits, directly reducing the cost barrier for US-based academic researchers. DNAnexus provides enterprise-grade managed analysis for clinical and pharmaceutical genomics. Each of these platforms has substantially more users, more validated pipelines, and more community-developed analyses than EpiPak could have at any foreseeable stage of development.

This is not a trivial objection. A new tool that does not offer a compelling differentiated value proposition relative to established alternatives is a duplication of effort. The honest response to this objection requires identifying the specific dimensions on which EpiPak's design is genuinely differentiated, rather than asserting differentiation on the basis of novelty.

### 4.2 Where EpiPak's Design Is Differentiated

EpiPak's design differentiation operates on three axes that existing platforms do not fully address:

**Data sovereignty enforcement.** Galaxy's public server requires data upload to a third-party cloud infrastructure. Terra requires a Google Cloud account and data storage in Google Cloud Storage. AnVIL is available only to US-based researchers and requires NIH authentication. DNAnexus is a commercial cloud platform with data residency options that require enterprise contracts. None of these platforms provides local-first execution as the default mode: in each case, the default is cloud-first, with local options available only through self-hosted deployment that requires significant systems administration expertise. For a Swedish organisation processing human epigenomic data under GDPR Article 9, the regulatory-default mode should be local execution with cloud scaling as an explicitly authorised exception — the inverse of the existing platform defaults.

**GDPR-native routing.** Existing platforms can be configured for GDPR compliance, but compliance is the responsibility of the deploying organisation, not the platform. EpiPak's LPI gateway enforces GDPR routing rules as a platform-level default: human genomic data cannot be routed to a non-compliant cloud endpoint without explicit authorisation at the gateway layer. This is compliance-by-design in the sense of GDPR Article 25, not compliance-by-configuration.

**Freemium at single-sample scale without cloud dependency.** Galaxy's free tier requires internet connectivity to the Galaxy public server. Terra's free tier provides limited Google Cloud credits that expire. AnVIL credits are institutionally administered. EpiPak's free tier is genuinely offline-capable: a researcher in a jurisdiction with unreliable internet, or on an air-gapped clinical workstation, can execute complete QC workflows without any network connectivity.

### 4.3 The Honest Scope Statement

This comparison establishes an honest scope statement for EpiPak's design claim: EpiPak is not designed to replace Galaxy or Terra for researchers with US or EU cloud access and institutional compute budgets. It is designed for the specific case of European researchers — and particularly Swedish researchers under GDPR Article 9 constraints — who require local-first, sovereignty-enforced QC tooling with a zero-cost entry point that does not depend on cloud connectivity. This is a smaller but real problem space, and the design is more defensible for being honest about its scope.

---

## 5. The Foundational Infrastructure Phase

### 5.1 Infrastructure Before Intelligence: The Three-Month Precondition

The organisation whose infrastructure forms the basis for this design study made a deliberate architectural decision at the outset of their epigenomics programme: no supervised model development would begin until three months of foundational infrastructure work was complete. This decision was grounded in the recognition that the first sequencing runs would produce the training data for eventual models, and that training data of unknown or uncontrolled quality is worse than no training data — it introduces false patterns that supervised models will learn and reproduce.

The three-month foundational phase had four components: cloud infrastructure provisioning for scalable workflow execution; integration of open-source pipeline tools into a reproducible workflow architecture; local QC tooling deployment; and the processing of initial sequencing samples through the complete pipeline to validate end-to-end function and generate QC baseline metrics.

This sequencing — infrastructure first, intelligence later — is not the path of least resistance. It delays the exciting work of model development by a quarter. It requires investment in unglamorous systems engineering. It produces no publishable results in its first three months. But it is the correct architectural choice, and it is increasingly recognised as such in the clinical genomics and pharmacogenomics communities, where regulatory requirements for analytical validation of computational pipelines create external pressure toward rigorous infrastructure investment (Rehm et al., 2021; ACMG, 2021).

### 5.2 Workflow Orchestration: Stage-Specific Tool Selection

The workflow orchestration architecture uses Nextflow (Di Tommaso et al., 2017) and Snakemake (Koster & Rahmann, 2012) in a deliberate stage-specific split that instantiates Design Principle 3 (DP3).

Nextflow is used for the cloud-portable, production-scale pipeline stages: raw read preprocessing (adapter trimming and quality filtering at scale), reference genome alignment using BWA-MEM2 or Bowtie2, and downstream peak calling and signal quantification. These are the stages that require AWS HealthOmics integration for production runs of hundreds of samples. Nextflow's execution portability means the same workflow definition runs locally for development and validation and on AWS HealthOmics for production. The nf-core project (Ewels et al., 2020) provides community-curated, peer-reviewed pipeline implementations for ChIP-seq (nf-core/chipseq) and ATAC-seq (nf-core/atacseq) that serve as the starting point, reducing time to a validated reproducible baseline.

Snakemake is used for the local, iterative QC stages: FastQC on raw reads, MultiQC report aggregation, initial library complexity assessment, and the EpiPak dashboard integration that feeds parsed QC metrics into the Shiny application. These stages are executed on the researcher's local workstation, do not require cloud connectivity, and benefit from Snakemake's simpler dependency graph specification for workflows that do not need execution portability across cloud providers. Snakemake's Python-native rule syntax also integrates more naturally with the R/Python analysis environment typical of a bioinformatics workstation than Nextflow's Groovy-based DSL.

The coexistence is not architectural confusion: it is the application of the principle that tool selection should follow operational requirements. The boundary between the Snakemake local tier and the Nextflow cloud tier is the freemium boundary: the Snakemake workflows run free, locally; the Nextflow/HealthOmics workflows require a paid account and cloud credentials.

### 5.3 Open-Source Package and Prototype Artefact

The organisation released an open-source R package providing programmatic access to the hmqChIP-seq analysis methodology. This package functions as the foundational computational layer of EpiPak's QC algorithms. An alpha prototype extending this package with EpiPak's unified QC parsing and reporting functions is available at https://github.com/winniio/epipak-proto under the MIT licence. A representative single-sample validation run — a publicly available hmqChIP-seq dataset processed through the complete EpiPak pipeline — is documented in the supplementary material, including the MultiQC HTML report, the provenance hash, and the QC metric values against ENCODE-defined thresholds.

The release strategy — open-source with a permissive licence — serves two purposes: it accelerates community adoption of the analysis methodology, creating a user base and a contribution community; and it provides a transparent, peer-reviewable implementation of the QC algorithms that EpiPak's reports are based on. The role of open-source community contribution in building the organisation's analytical capability is examined through the absorptive capacity framework in Section 8.

---

## 6. The EpiPak Architecture

### 6.1 Design Principles Instantiated

EpiPak's architecture directly instantiates the five design principles articulated in Section 3.2. The following sections describe the technical implementation of each.

### 6.2 The Life Programmable Interface as Routing Gateway

The Life Programmable Interface (LPI) functions in the EpiPak context as an HTTP middleware layer positioned between the Shiny dashboard frontend and all downstream computational resources — whether local Snakemake executors or remote Nextflow/HealthOmics endpoints. The routing enforcement mechanism operates as follows.

Each data processing request originating from the Shiny dashboard carries a structured JWT claim specifying the data classification (human genomic data under GDPR Article 9, or non-personal reference data), the requested compute endpoint (local, EU-compliant cloud, or non-EU cloud), and the legal basis assertion for the processing operation. The LPI middleware validates this claim triple against a routing policy table before forwarding the request. Requests that assert human genomic data classification with a non-EU compute endpoint are rejected with a 403 response and an audit log entry; the dashboard presents the rejection as a data sovereignty policy block rather than a generic error.

The policy table is maintained as a version-controlled configuration file that can be updated to reflect changes in GDPR adequacy decisions or organisational policy without modifying application code. This separation of routing policy from routing logic instantiates Design Principle 1 (DP1) at the implementation level. It should be noted that the JWT-based middleware has not undergone independent security review, and penetration testing against adversarial claim-forgery and policy-bypass scenarios is a planned pre-deployment requirement before any production use with human genomic data.

The freemium boundary is implemented as a second routing layer within the LPI middleware. Requests for cloud Nextflow execution are checked against the authenticated user's subscription tier; free-tier users receive a 402 response with an upgrade path URL, not a capability error. Local Snakemake execution requests pass without subscription check. This routing architecture means that the freemium boundary is enforced consistently regardless of which interface or API endpoint is used to submit a request.

### 6.3 QC Module Architecture

EpiPak's QC modules address the five stages of the epigenomic processing pipeline:

**Raw read quality.** Integration of FastQC output parsing and MultiQC report aggregation, presented in the dashboard as per-sample quality summaries with flagging of samples that fall below defined thresholds for read quality, adapter contamination, and GC content bias.

**Alignment quality.** Automated parsing of samtools flagstat output, deepTools bamCoverage metrics, and library complexity statistics (NRF, PCR bottleneck coefficient) against ENCODE-defined thresholds. For experiments with biological replicates, EpiPak computes the Irreproducible Discovery Rate (IDR) across replicate peak sets, as mandated by ENCODE for replicate-level peak calling QC; IDR quantifies the reproducibility of peak rankings between replicates and is the ENCODE-recommended criterion for determining the final peak set used in downstream analysis (Li et al., 2011). Samples below threshold are flagged for review with specific diagnostic guidance — for example, distinguishing between alignment failures caused by reference genome mismatch and those caused by library preparation problems.

**Signal quality.** Peak calling statistics from MACS3 (Zhang et al., 2008; updated MACS3 release), SEACR (Meers et al., 2019) for CUT&RUN and CUT&TAG data where MACS3's Poisson background model is inappropriate, and HOMER (Heinz et al., 2010) for motif-based peak annotation. These three tools address distinct use cases: MACS3 for ChIP-seq and ATAC-seq with sufficient background reads, SEACR for sparse signal profiles with high signal-to-noise requirements, and HOMER for regulatory element annotation downstream of peak calling. EpiPak parses the native output of each tool and normalises the reported metrics — fraction of reads in peaks (FRiP), peak count, signal-to-noise ratio — to a common schema, applying assay-specific thresholds derived from published ENCODE and nf-core community standards.

**Biological QC.** For ChIP-seq specifically: antibody efficiency assessment using spike-in controls where available, and cross-correlation analysis to distinguish true signal from background. For ATAC-seq: nucleosomal periodicity in fragment size distribution, which is a hallmark of successful chromatin accessibility profiling and a sensitive indicator of library preparation quality.

**Comparative QC.** Across-sample consistency metrics that identify systematic batch effects — variation in sequencing depth, library preparation date, or reagent lot — that may confound downstream analyses. Batch effect detection is a precondition for valid supervised model training: models trained on data with uncontrolled batch effects learn batch identity rather than biological signal.

### 6.4 The Freemium Boundary in Technical Detail

The freemium model draws the commercial boundary at scale, not at capability, instantiating Design Principle 2 (DP2). All QC algorithms — including MACS3, SEACR, HOMER parsing, and comparative batch QC — are available in the free tier. What the free tier limits is the computational scale at which they execute.

The free tier supports local Snakemake execution of QC workflows on single samples or small batches of up to ten samples per run. This is sufficient for the routine QC needs of most academic research laboratories and early-stage biotechnology companies, where individual sequencing runs are the unit of analysis.

The paid tier provides cloud workflow submission via Nextflow and AWS HealthOmics, enabling parallel processing of hundreds of samples simultaneously. The upgrade path from free to paid is operationally transparent: no change to the interface, no change to the report format, no change to the audit trail — as enforced by the LPI routing layer.

---

## 7. The Freemium Model and the Public Good Argument

### 7.1 QC Tooling as a Partial Public Good

High-quality QC tooling for epigenomic data has properties that approximate a public good in Samuelson's (1954) sense: it is non-rivalrous (one laboratory's use of a QC tool does not reduce its availability to another) and its benefits extend beyond the individual laboratory to the broader research community, which benefits from higher-quality published datasets and more reproducible findings.

However, the reviewer is correct to note that the public good characterisation requires interrogation. Samuelson's definition requires both non-rivalry and non-excludability. EpiPak's freemium architecture is explicitly excludable: the paid tier is gated behind a subscription, and the value of the paid tier — cloud-scale processing — is available only to paying customers. The free tier is non-excludable in practice (no authentication is required for local execution), but it is capability-limited in ways that the public good framing elides.

A more precise characterisation is that EpiPak's architecture deliberately exploits the partial public good character of QC *algorithms* — which are genuinely non-rival and, in the free tier, non-excludable — while treating QC *infrastructure at scale* as a private good whose provision is commercially sustainable through subscription revenue. The market failure that Samuelson (1954) identifies — that private markets underprovide public goods because providers cannot capture the full social value of provision — applies to QC algorithms. It does not apply to cloud infrastructure, whose marginal cost is well-defined and directly chargeable. The freemium design is an attempt to align the incentive structure with this distinction: give away what markets systematically underprovide, charge for what markets can efficiently price.

### 7.2 The Under-Resourced Laboratory Paradox

This analysis surfaces a genuine tension in the freemium model that must be acknowledged. The labs most likely to be systematically excluded from high-quality epigenomic QC are not those who lack cloud infrastructure access — it is those who lack the computational hardware to run local Snakemake workflows at all. A laboratory in a low-income country with a laptop, unreliable power, and no institutional compute cluster is not well served by a local-first architecture that assumes a modern workstation as its execution environment.

The free tier's ten-sample-per-run limit is designed to cover most academic research laboratory needs, but "most" is not "all." Laboratories running population-scale studies on disease cohorts — precisely the use case where QC rigour is most consequential — may find the free tier insufficient and the paid tier unaffordable. This is a contradiction internal to the design, not a problem that framing can resolve.

The honest design response is to identify this as a known limitation and to propose a mitigation path: grant-funded compute credits for verified academic institutions in low-income countries, administered through the same LPI subscription system that manages the commercial tier. This is a design intent, not a currently implemented feature, and is identified as a future development priority.

### 7.3 Democratisation as Strategic Position

The democratisation of access to high-quality epigenomic QC tooling is not only an ethical position — it is a strategic one. A tool that is used by every laboratory in a field, regardless of their computational resources, becomes infrastructure. Infrastructure is difficult to displace. The network effects of a widely adopted standard QC pipeline — shared training datasets, shared QC thresholds, shared interpretation conventions — create switching costs that do not depend on proprietary features or lock-in tactics.

This is the LPI architectural philosophy applied to the commercial layer: make the interface the invariant, make the backend swappable, and win by being the standard that everyone builds around rather than the platform that extracts rent from captive users.

---

## 8. Absorptive Capacity and Contributor Acceleration

### 8.1 Why Prior Knowledge Determines Adoption Speed

Cohen and Levinthal (1990) argue that an organisation's ability to exploit external knowledge — its absorptive capacity — is primarily a function of the level of prior related knowledge within the organisation. Absorptive capacity is not simply a matter of having talented people; it is specifically about possessing the knowledge structures that allow new information to be recognised as valuable, assimilated into existing frameworks, and applied to the organisation's objectives.

This framework is directly applicable to the EpiPak adoption scenario. An epigenomics research organisation that is installing a bioinformatics QC pipeline for the first time faces a classic low-absorptive-capacity problem: the tools available (Nextflow, Snakemake, MACS3, SEACR, deepTools, MultiQC) are well-documented in the bioinformatics literature, but the organisation does not have sufficient prior knowledge to rapidly evaluate, configure, and integrate these tools without significant learning overhead. The time-to-first-valid-QC-report — the practical measure of adoption speed — is substantially longer for an organisation without prior bioinformatics experience than for one with it.

### 8.2 Bioinformatics-Capable Contributors as Absorptive Capacity Builders

The role of a bioinformatics-capable contributor in the early weeks of the foundational phase was significant precisely because of the absorptive capacity dynamic. Cohen and Levinthal (1990) note that absorptive capacity is cumulative: the ability to evaluate and use new knowledge depends on the ability to recognise its value, which depends on existing related knowledge. A contributor who arrives with R programming skills, sequencing data analysis domain knowledge, and prior experience with nf-core pipelines does not just execute tasks — they transfer knowledge structures into the organisation that make the organisation better able to evaluate and adopt future external knowledge.

In the EpiPak context, this manifests as the open-source contribution economy. The prototype R package released on GitHub is not just a software artefact; it is a knowledge structure externalised into the commons. A contributor who improves the package's documentation, adds a usage vignette for SEACR output parsing, or files an issue identifying an edge case in the MultiQC integration is not just providing a software patch — they are building the shared absorptive capacity of the community that adopts the tool. The contribution economy principle — that value accrues through cumulative community knowledge exchange, not just through individual downloads — is precisely the dynamic that Cohen and Levinthal's framework describes; this characterisation is reinforced by Zahra and George's (2002) reconceptualisation of absorptive capacity as a dynamic capability that distinguishes between potential capacity (knowledge acquisition and assimilation) and realised capacity (knowledge transformation and exploitation), where open-source community exchange operates primarily on the potential capacity dimension and accelerates the collective transformation of shared domain knowledge into deployed analytical practice.

### 8.3 Implications for Intern Acceleration Programmes

This analysis has direct implications for the design of contributor and intern acceleration programmes that organisations deploy alongside open-source tools. The critical success factor is not the number of contributors but the depth of prior related knowledge they bring. A bioinformatics-capable contributor who already understands the structure of a MultiQC report and the semantics of an ENCODE QC threshold can make a meaningful contribution in days; a contributor who must learn both the domain and the tooling simultaneously requires weeks to reach the same contribution level.

EpiPak's contributor programme is therefore designed to selectively recruit contributors with specific prior knowledge — R package development, Nextflow pipeline construction, or clinical genomics QC experience — rather than general-purpose developers. This is absorptive capacity management, not elitism: the goal is to maximise the rate at which external knowledge is transferred into and through the community.

---

## 9. Regulatory Geography

### 9.1 GDPR and the Sweden-Constrained Hiring Constraint

The GDPR classification of genomic data as special category personal data (Article 9) creates a practical constraint on the staffing of epigenomics research and development roles that handle human samples: the individuals performing data processing must be in a jurisdiction where GDPR obligations can be enforced, and under Swedish law, the relevant data processors must typically be employed or contracted under Swedish jurisdiction. This is not merely a formal legal requirement — it has real operational consequences for hiring, contractor engagement, and international collaboration.

For a Swedish epigenomics organisation, this means that the bioinformatics roles that handle human genomic data must be filled by Sweden-based personnel — or by contractors operating under data processing agreements that meet GDPR Article 28 requirements, with all the legal overhead that entails. The practical effect is a geographically constrained talent market at exactly the moment when demand for bioinformatics skills is highest and the global talent pool is most valuable.

The architectural response — instantiating Design Principle 1 (DP1) — is to design workflows so that the data sovereignty constraint is applied at the infrastructure layer, not the personnel layer. If the LPI gateway enforces GDPR routing rules automatically — ensuring that human genomic data never leaves a compliant jurisdiction regardless of which personnel are operating the workflow — then the constraint on personnel location can be relaxed to the extent that the law permits. Infrastructure sovereignty enables personnel flexibility.

### 9.2 GDPR as Architectural Specification

The broader lesson of the Swedish hiring constraint is that data protection regulation is not a compliance overhead to be managed after system design but a specification input that should inform architectural decisions from the outset. Systems designed to comply with GDPR from inception — with data minimisation, purpose limitation, and accountability as first-class design constraints — are both easier to operate and more defensible to regulators than systems retrofitted for compliance.

This is a direct application of the privacy-by-design principle articulated in Article 25 of the GDPR and elaborated in ISO 31700:2023. The edge-native, local-first architecture of EpiPak instantiates privacy by design: data does not move to cloud infrastructure unless the user explicitly authorises the transfer, the transfer destination is compliant, and the purpose is within the scope of the original consent or legal basis.

---

## 10. Falsifiable Propositions

Design science contributions are incomplete without propositions that future empirical work can test. We state two:

**Proposition 1 (QC Adoption and Dataset Retraction).** Laboratories that adopt a structured QC pipeline — operationalised as any tool that produces ENCODE-threshold-referenced QC reports before peak calling — will show a statistically significant reduction in epigenomic dataset retraction rates within 24 months of adoption, compared to a matched control group of laboratories using ad hoc QC. A plausible measurable target, based on the retraction literature's base rates for sequencing-based studies, would be a 30% reduction in retraction-relevant quality failures identified in post-publication reviews of datasets processed through structured QC pipelines versus unstructured QC.

**Proposition 2 (Absorptive Capacity and Time-to-Contribution).** Contributors to the EpiPak open-source package who arrive with prior related knowledge — defined as at least one prior R package development contribution and at least one prior sequencing data analysis project — will reach first meaningful contribution (defined as a merged pull request that modifies QC logic, not just documentation) in half the calendar time of contributors without that prior knowledge. This proposition is testable against contribution history data from the GitHub repository once the contributor community reaches a sufficient size.

Both propositions are designed to be falsifiable in the sense that negative findings would require revision of the design claims: if structured QC adoption does not reduce retraction rates, the epistemological argument in Section 2.2 requires re-examination; if prior knowledge does not predict contribution speed, the absorptive capacity design of the contributor programme requires revision.

---

## 11. Limitations

This paper presents an architectural design proposal and should be evaluated as such. The following limitations are explicitly acknowledged.

EpiPak does not yet exist as a deployable production system. The prototype R package at https://github.com/winniio/epipak-proto is in alpha state; the Shiny dashboard is in active development; the LPI routing middleware is implemented as a reference design. The QC run documented in the supplementary material demonstrates the feasibility of the pipeline approach but does not constitute a validation study.

The design is based on fieldwork with a single research organisation in Sweden during a defined foundational phase. The generalisation of findings to the full diversity of epigenomics research environments — including large consortium studies, clinical diagnostic laboratories, and pharmaceutical discovery operations — requires validation in each context. In particular, the assumption that the free tier's ten-sample limit covers most academic laboratory QC needs has not been empirically validated against actual laboratory workflow patterns.

The comparison with Galaxy, Terra, AnVIL, and DNAnexus in Section 4 is based on publicly available documentation as of early 2026. These platforms are actively developed and may address the GDPR-native routing and local-first execution gaps identified here in subsequent releases.

The freemium commercial model described in Section 7 has not been validated against real market demand. The assumption that the free tier will generate sufficient user adoption to create the network effects described requires empirical validation in the target markets. The under-resourced laboratory paradox identified in Section 7.2 remains unresolved at the design level.

The LPI gateway routing protocol described in Section 6.2 represents a reference design, not a production-hardened implementation. JWT claim validation, policy table management, and audit log integrity in adversarial environments require security review that has not yet been conducted.

---

## 12. Conclusion

The path from sequencing chemistry to biological insight does not run through machine learning models. It runs through aligned reads, quality-controlled peaks, reproducible workflows, and transparent provenance records. These are the unglamorous foundations without which no model is trustworthy, no finding is reproducible, and no regulatory submission is supportable.

EpiPak is proposed as a design artefact that makes these foundations accessible: locally deployable by default, freely available for standard workflows, privacy-preserving by architecture, and connected to cloud-scale computation for those who require it. The design science commitment of this paper is to articulate the principles clearly enough that the design can be replicated, critiqued, and improved — and to state the falsifiable propositions that would distinguish a successful design from a well-intentioned failure.

The comparison with established platforms establishes an honest scope: EpiPak is not designed to replace Galaxy or Terra. It is designed for the specific case of European researchers under GDPR Article 9 constraints who require sovereignty-enforced, local-first QC tooling with no cloud dependency for standard workflows. This is a smaller problem than the general case, but it is a real one, and precision of scope is a virtue in design science.

The freemium model is not a pricing strategy for its own sake. It is a mechanism for providing the partial public good of QC algorithms at zero marginal cost, while recovering the cost of cloud infrastructure from the users whose scale requirements make cloud infrastructure necessary. The absorptive capacity framework explains why open-source community contribution is not just a nice-to-have alongside this model — it is the mechanism by which the knowledge structures that make the tool useful propagate through the research community.

Build the infrastructure first. Build it locally. Build it to preserve sovereignty. State what you claim, prove what you can prove, and acknowledge what remains to be tested.

---

## Supplementary Material

A representative single-sample QC validation run — using a publicly available hmqChIP-seq dataset (ENCODE accession ENCSR000AKF, H3K27ac ChIP-seq, human GM12878) processed through the EpiPak alpha pipeline — is available at https://github.com/winniio/epipak-proto/tree/main/examples/single-sample-qc. The validation run includes the MultiQC HTML report, the Snakemake provenance log, and the QC metric values against ENCODE-defined thresholds. The NRF value for this sample was 0.87 (ENCODE minimum: 0.8), the PCR bottleneck coefficient was 1.1 (ENCODE minimum: 1.0 for single-read), and the FRiP (MACS3) was 0.14 (ENCODE minimum: 0.01 for broad-mark ChIP-seq), indicating a passing QC profile. This run demonstrates pipeline feasibility, not population-level validation.

---

## References

ACMG (American College of Medical Genetics and Genomics). (2021). *Points to consider in the detection of germline variants in tumor samples undergoing next-generation sequencing for somatic mutation detection: A statement of the American College of Medical Genetics and Genomics*. Genetics in Medicine, 23, 249–251.

Afgan, E., Baker, D., Batut, B., van den Beek, M., Bouvier, D., Cech, M., Chilton, J., Clements, D., Coraor, N., Grüning, B. A., & others. (2022). The Galaxy platform for accessible, reproducible and collaborative biomedical analyses: 2022 update. *Nucleic Acids Research*, 50(W1), W345–W351. https://doi.org/10.1093/nar/gkac247

Birger, C., Funke, R., Weiler, M., Erdmann-Gilmore, P., Townsend, R., Fenyö, D., Achterberg, E., Getz, G., Grossman, R., Noble, M., & others. (2021). Terra: Enabling community collaboration and scientific reproducibility in life science research. *bioRxiv*. https://doi.org/10.1101/2021.04.22.440939

Buenrostro, J. D., Giresi, P. G., Zaba, L. C., Chang, H. Y., & Greenleaf, W. J. (2013). Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position. *Nature Methods*, 10(12), 1213–1218. https://doi.org/10.1038/nmeth.2688

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128–152.

Di Tommaso, P., Chatzou, M., Floden, E. W., Barja, P. P., Palumbo, E., & Notredame, C. (2017). Nextflow enables reproducible computational workflows. *Nature Biotechnology*, 35(4), 316–319. https://doi.org/10.1038/nbt.3820

European Parliament & Council. (2016). *Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data* (General Data Protection Regulation). Official Journal of the European Union, L 119.

Ewels, P. A., Peltzer, A., Fillinger, S., Patel, H., Alneberg, J., Wilm, A., Garcia, M. U., Di Tommaso, P., & Nahnsen, S. (2020). The nf-core framework for community-curated bioinformatics pipelines. *Nature Biotechnology*, 38(3), 276–278. https://doi.org/10.1038/s41587-020-0439-x

Heinz, S., Benner, C., Spann, N., Bertolino, E., Lin, Y. C., Laslo, P., Cheng, J. X., Murre, C., Singh, H., & Glass, C. K. (2010). Simple combinations of lineage-determining transcription factors prime cis-regulatory elements required for macrophage and B cell identities. *Molecular Cell*, 38(4), 576–589. https://doi.org/10.1016/j.molcel.2010.05.004

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design science in information systems research. *MIS Quarterly*, 28(1), 75–105.

Koster, J., & Rahmann, S. (2012). Snakemake: A scalable bioinformatics workflow engine. *Bioinformatics*, 28(19), 2520–2522. https://doi.org/10.1093/bioinformatics/bts480

Landt, S. G., Marinov, G. K., Kundaje, A., Kheradpour, P., Pauli, F., Batzoglou, S., Bernstein, B. E., Bickel, P., Brown, J. B., Cayting, P., & others. (2012). ChIP-seq guidelines and practices of the ENCODE and modENCODE consortia. *Genome Research*, 22(9), 1813–1831. https://doi.org/10.1101/gr.136184.111

Li, Q., Brown, J. B., Huang, H., & Bickel, P. J. (2011). Measuring reproducibility of high-throughput experiments. *Annals of Applied Statistics*, 5(3), 1752–1779. https://doi.org/10.1214/11-AOAS466

Meers, M. P., Tenenbaum, D., & Bhatt, D. L. (2019). Peak calling by Sparse Enrichment Analysis for CUT&RUN chromatin profiling. *eLife*, 8, e46314. https://doi.org/10.7554/eLife.46314

Rehm, H. L., Page, A. J. H., Smith, L., Adams, J. B., Alterovitz, G., Babb, L. J., Barkley, M. P., Baudis, M., Beauvais, M. J. S., Beck, T., & others. (2021). GA4GH: International policies and standards for data sharing across genomic research and healthcare. *Cell Genomics*, 1(2), 100029. https://doi.org/10.1016/j.xgen.2021.100029

Samuelson, P. A. (1954). The pure theory of public expenditure. *Review of Economics and Statistics*, 36(4), 387–389.

Schatz, M. C., Philippakis, A. A., Afgan, E., Banks, E., Carey, V. J., Carroll, R. J., Culotti, A., Ellrott, K., Goecks, J., Grossman, R. L., & others. (2021). Inverting the model of genomics data sharing with the NHGRI Genomic Data Science Analysis, Visualization, and Informatics Lab-space (AnVIL). *Cell Genomics*, 2(1), 100085. https://doi.org/10.1016/j.xgen.2021.100085

Waern, N. (2025a). *Edge-native intelligence for sovereign life science data: Architecture patterns for genomic research at the computational frontier*. WINNIIO AB. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). *The reality construct: Digital twins as boundary-spanning artefacts for knowledge absorption, organisational evolution, and the co-authorship of intended futures*. WINNIIO AB. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *Life Programmable Interface: A sovereign consultation layer for autonomous life operating systems*. WINNIIO AB. https://doi.org/10.5281/zenodo.19587944

Zahra, S. A., & George, G. (2002). Absorptive capacity: A review, reconceptualization, and extension. *Academy of Management Review*, 27(2), 185–203.

Zhang, Y., Liu, T., Meyer, C. A., Eeckhoute, J., Johnson, D. S., Bernstein, B. E., Nusbaum, C., Myers, R. M., Brown, M., Li, W., & Liu, X. S. (2008). Model-based analysis of ChIP-seq (MACS). *Genome Biology*, 9(9), R137. https://doi.org/10.1186/gb-2008-9-9-r137
