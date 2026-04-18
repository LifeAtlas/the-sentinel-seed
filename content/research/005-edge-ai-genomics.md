# Edge-Native Intelligence for Sovereign Life Science Data: Architecture Patterns for Genomic Research at the Computational Frontier

**Nicolas Waern**
WINNIIO AB
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

---

**License:** This work is licensed under a Creative Commons Attribution 4.0 International License (CC-BY-4.0).

---

## Abstract

The exponential growth of genomic data has created an architectural paradox: the very datasets most sensitive to privacy violations are those most frequently shipped to centralised cloud infrastructure for processing. This position paper argues that genomic research infrastructure must be designed as edge-native from inception rather than retrofitted from cloud-first architectures. We present architecture patterns for deploying machine learning inference at the computational edge — specifically GPU workstations functioning as sovereign processing nodes within life science laboratories. We introduce the concept of a Large Quantitative Model to Small Quantitative Model (LQM-to-SQM) progression [proposed terms] as a paradigm for compressing cloud-trained genomic intelligence into edge-deployable artefacts through systematic distillation, quantisation, and validation cycles. A two-tier deployment model is proposed: a software-as-a-service sandbox for development and non-sensitive workloads, paired with on-premises enterprise nodes for regulated genomic data. The architecture is positioned relative to existing on-premises solutions — notably Illumina DRAGEN and NVIDIA Clara Parabricks — and mapped to regulatory requirements under the European Union Artificial Intelligence Act and the General Data Protection Regulation. We conclude that edge-native design for genomic AI is not merely a privacy safeguard but an architectural necessity. It improves resilience, reduces latency, and aligns computational topology with the biological reality of distributed research environments.

**Keywords:** edge computing, genomic data sovereignty, edge-native architecture, quantised inference, digital twin, life science infrastructure, regulatory alignment, large quantitative models, small quantitative models

---

## 1. Introduction

Genomic data generation has entered a phase of superexponential growth. Stephens et al. (2015) estimated that genomic data acquisition would outpace YouTube, Twitter, and astronomy by 2025, projecting annual generation rates of 2–40 exabytes depending on sequencing adoption curves. That projection has proven conservative. The convergence of long-read sequencing, spatial transcriptomics, single-cell multi-omics, and whole-genome sequencing at population scale has created datasets whose volume, velocity, and sensitivity challenge every assumption embedded in contemporary cloud-first bioinformatics infrastructure.

The systemic tension is straightforward: faster sequencing produces vastly more data, and more data demands more computation. The computational machinery required to extract biological insight from raw sequence data — alignment, variant calling, expression quantification, machine learning inference — has historically been concentrated in centralised cloud environments. Amazon Web Services, Google Cloud Platform, and Microsoft Azure host the majority of production bioinformatics pipelines worldwide (Langmead & Nellore, 2018). This centralisation is justified on grounds of elasticity, cost amortisation, and access to specialised hardware. But it introduces a fundamental misalignment: the most privacy-sensitive data category recognised in European law — genetic data under Article 9 of the General Data Protection Regulation (European Parliament & Council, 2016) — is routinely transferred across jurisdictional boundaries to be processed on infrastructure controlled by third parties.

This paper argues that the resolution of this tension requires not incremental privacy patches on cloud infrastructure, but a categorical shift in architectural orientation: from cloud-first to edge-native. The distinction is not semantic. Cloud-first architectures treat edge deployment as a degraded mode, a fallback when connectivity is unavailable. Edge-native architectures treat the edge as the primary computational locus, with cloud resources serving as optional amplifiers for tasks that genuinely require centralised scale (Shi et al., 2016; Satyanarayanan, 2017).

The logic is straightforward: sequencing machines exist in laboratories, samples exist in biobanks, and researchers exist in institutions. The computational topology should reflect this physical distribution rather than artificially centralising it (see also Waern, 2026a, for a broader treatment of reality-anchored digital architecture).

Existing on-premises solutions demonstrate the viability of local genomic processing. Illumina's DRAGEN platform provides FPGA-accelerated secondary analysis deployed in thousands of laboratories worldwide (Illumina, 2024), and NVIDIA Clara Parabricks offers GPU-accelerated bioinformatics pipelines for variant calling and alignment (Franke et al., 2021). Oxford Nanopore Technologies has arguably advanced furthest toward edge-native sequencing: the MinION — a 90-gram USB device generating tens of gigabases per run — and the high-throughput PromethION, which integrates on-device basecalling and can produce up to 6 Tb of data per day, have been deployed in field hospitals, Antarctic research stations, and the International Space Station (Jain et al., 2016; Oxford Nanopore Technologies, 2024). Long-read nanopore sequencing with real-time, on-device base calling represents the most mature instantiation of edge-native genomic data generation available today. These systems, however, are vendor-specific acceleration solutions optimised for defined secondary analysis workflows. This paper proposes a complementary contribution: an open, vendor-agnostic, edge-native *architecture pattern* applicable across vendors, model types, and analytical modalities — particularly for the tertiary analysis and ML inference stages that follow secondary analysis. The Global Alliance for Genomics and Health (GA4GH) has established interoperability standards for genomic data sharing and tool portability (Rehm et al., 2021); the architecture patterns presented here are designed to operate within that standards ecosystem.

The paper proceeds as follows. Section 2 establishes the design principles underpinning edge-native genomic architecture. Section 3 develops the edge-native thesis and its implications for data sovereignty. Section 4 introduces the LQM-to-SQM progression as a framework for edge-deployable genomic intelligence. Section 5 presents concrete architecture patterns. Section 6 addresses regulatory alignment. Section 7 acknowledges limitations, and Section 8 proposes future research directions.

## 2. Design Principles

Three design principles underpin the architecture patterns in this paper:

**Principle 1: Sovereignty as architecture, not policy.** Data governance frameworks such as GDPR treat sovereignty as a legal constraint. Edge-native architecture reframes sovereignty as a structural property: genomic data should be sovereign by virtue of where and how it is processed, not merely by virtue of a data processing agreement filed with a supervisory authority.

**Principle 2: Fidelity to context.** Genomic data is generated in specific physical locations by specific instruments operated by specific researchers under specific ethical approvals. An architecture that strips this context — uploading raw FASTQ files to a generic cloud bucket — loses information essential for reproducibility, provenance, and regulatory compliance. Edge-native architectures preserve contextual fidelity because the computational node is physically co-located with the data generation instrument (see also Waern, 2025a).

**Principle 3: Resilience through distribution.** A cloud-first genomic pipeline has a single point of failure: the network connection to the cloud provider. An edge-native architecture distributes failure domains across every processing node. For time-sensitive clinical genomics — where a diagnosis may depend on rapid whole-genome analysis — this resilience is a clinical necessity, not merely an engineering preference (Turro et al., 2020).

## 3. The Edge-Native Thesis

### 3.1 Design for Edge from Day One

The central thesis of this paper is that genomic research infrastructure must be *designed* for edge deployment from inception, not *adapted* for edge deployment as an afterthought. The imperative is to think edge constraints from day one.

This distinction matters because cloud-first architectures make assumptions — about bandwidth, latency, storage elasticity, and centralised state management — that are structurally incompatible with edge deployment. A pipeline designed for unlimited S3 storage cannot be trivially redeployed on a local NVMe workstation with finite capacity. A model trained on a cluster of A100 GPUs cannot be trivially served on an RTX 4090. These constraints must inform the architecture from the earliest design decisions, not be retrofitted as post-hoc optimisations.

There is also an ontological argument for edge-native genomic computation. The genome is not a dataset to be uploaded — it is the biological reality. Every assay, every variant call, every expression profile is a projection of a reality that already exists in the cell, in the tissue, in the organism on the laboratory bench. Cloud-first architectures introduce an ontological gap: the computation that interprets biological reality is separated from the physical location where that reality exists. Edge-native processing closes this gap by keeping computation where the reality is — in the laboratory, next to the sequencer, co-located with the biological material that generated the data. This is not merely a convenience; it is an architectural recognition that the fidelity of genomic interpretation degrades when computation is decoupled from its physical context.

Edge-native design imposes three architectural constraints that, paradoxically, produce better systems overall:

1. **Resource consciousness.** Edge nodes have finite compute, memory, and storage. Designing for these constraints forces efficient algorithms, compressed models, and parsimonious data representations — qualities that benefit even cloud deployments.

2. **Offline resilience.** Edge nodes must function without continuous connectivity. This forces clean separation between local processing and remote synchronisation, producing architectures that are inherently more fault-tolerant than those that assume always-on connectivity (Garcia Lopez et al., 2015).

3. **Data minimisation.** When data cannot be freely uploaded to the cloud, architects must decide precisely which data elements are necessary for each processing step. This forced minimisation aligns with GDPR's data minimisation principle (Article 5(1)(c)) not as a compliance exercise but as a structural consequence of the architecture.

### 3.2 Data Sovereignty as Structural Property

The General Data Protection Regulation classifies genetic data as a "special category" requiring explicit consent and enhanced protection (European Parliament & Council, 2016, Article 9). The European Union Artificial Intelligence Act (European Parliament & Council, 2024) further classifies AI systems processing biometric and genetic data as high-risk, imposing requirements for human oversight, transparency, and robustness.

Edge-native architecture transforms these regulatory requirements from compliance burdens into structural guarantees. When genomic data never leaves the laboratory's physical perimeter, the data protection impact assessment becomes dramatically simpler. There are no cross-border transfers to evaluate under Chapter V of GDPR. There are no sub-processor chains to audit. There are no cloud provider incident response procedures to validate. The genomic data stays where it was generated, processed by infrastructure under the direct physical control of the data controller.

This inversion of the default — from "everything goes to the cloud unless we prevent it" to "nothing goes to the cloud unless we permit it" — is the architectural expression of data sovereignty.

### 3.3 Two-Tier Deployment Model

Pure edge deployment is not always practical or desirable. Reference genome assembly, population-scale variant databases, and large-scale model training benefit from centralised resources. We propose a two-tier deployment model:

**Tier 1: SaaS Sandbox.** A cloud-hosted environment for non-sensitive workloads: pipeline development with synthetic data, model training on public reference datasets, benchmarking against published cohorts, and collaborative tool development. This tier operates under standard cloud security controls and does not process identifiable genomic data.

**Tier 2: On-Premises Enterprise Node.** A GPU workstation deployed within the laboratory's physical security perimeter, running the same software stack as the SaaS sandbox but processing real genomic data under the institution's direct control. Models trained in Tier 1 are compressed and deployed to Tier 2. Results from Tier 2 that require cloud processing (e.g., cross-cohort meta-analysis) are aggregated, anonymised, or differentially privatised before synchronisation.

This two-tier model respects the absorptive capacity framework (Cohen & Levinthal, 1990): organisations adopt new technology most effectively when they can experiment in low-risk environments (Tier 1) before committing to production deployment (Tier 2). It also aligns with benefits management principles (Ward & Daniel, 2006) by separating the investment in capability development from the investment in sovereign infrastructure (Weill & Broadbent, 1998).

## 4. LQMs and SQMs for Genomic Intelligence

### 4.1 The LQM-to-SQM Progression

We introduce two proposed terms to describe the lifecycle of machine learning models in genomic research: Large Quantitative Models (LQMs) [proposed term] and Small Quantitative Models (SQMs) [proposed term].

An LQM is a model trained at cloud scale on large, diverse datasets — potentially encompassing millions of genomic samples, multi-modal data integration, and extensive hyperparameter searches. LQMs in genomics include foundation models for DNA sequence analysis (Dalla-Torre et al., 2025), protein structure prediction (Jumper et al., 2021), and variant effect prediction (Cheng et al., 2023). These models are too large, too computationally demanding, and too reliant on diverse training data to be developed at the edge. They are inherently centralised artefacts.

An SQM is a distilled, quantised, and validated derivative of an LQM — or an independently trained compact model — that can be deployed and executed within the resource constraints of an edge node. The SQM retains the predictive capability of its parent LQM for a specific, bounded task (e.g., variant calling in a specific organism, gene expression prediction for a specific tissue type) while operating within the memory, compute, and latency constraints of edge hardware.

The distinction between LQMs and SQMs is not merely one of size. It is a distinction in architectural role. LQMs are *training-time artefacts* that exist in the cloud. SQMs are *inference-time artefacts* that exist at the edge. The LQM-to-SQM progression is the process by which the former becomes the latter.

An LQM trained on population-scale data is a collective asset. An SQM deployed on a laboratory's GPU workstation is a sovereign asset — it embodies the collective intelligence of the LQM but operates under the exclusive control of the institution (see also Waern, 2026b, on the broader principle of computational sovereignty over sensitive data).

### 4.2 Genomic ML as SQMs at the Edge

Genomic machine learning tasks vary enormously in computational intensity. Some — whole-genome alignment, *de novo* assembly — remain impractical at the edge with current hardware. Others are natural candidates for SQM deployment:

- **Variant calling.** Convolutional neural network-based variant callers (Poplin et al., 2018) can be distilled into compact models that run on a single GPU with minimal latency degradation. For reference, NVIDIA Clara Parabricks completes a full FASTQ-to-VCF germline pipeline — including GPU-accelerated DeepVariant — on a 30x whole human genome in approximately 25 minutes on a single data-centre GPU (NVIDIA, 2024b). On a consumer-grade RTX 4090 with 24 GB VRAM, estimated runtimes of roughly 35–45 minutes are projected based on published A100 benchmarks scaled by VRAM bandwidth ratio; empirical validation on consumer GPUs remains future work. If confirmed, this would place whole-genome variant calling well within interactive turnaround times for a laboratory edge node.
- **Gene expression prediction.** Models predicting gene expression from sequence context (Avsec et al., 2021) can be quantised for edge deployment, enabling real-time analysis of regulatory variants.
- **Clinical classification.** Pathogenicity classifiers for specific gene panels (e.g., BRCA1/2, Lynch syndrome genes) are inherently narrow-task models well-suited to SQM deployment.
- **Quality control.** ML-based QC models for sequencing run assessment can operate entirely at the edge, providing immediate feedback on data quality before any data leaves the instrument.

### 4.3 The Compile-Benchmark-Quantise-Validate Cycle

The LQM-to-SQM progression follows a four-stage cycle:

**Compile.** The LQM is distilled into a smaller architecture using knowledge distillation techniques (Hinton et al., 2015, preprint). The teacher model (LQM) generates soft labels that train the student model (SQM candidate) to approximate the teacher's output distribution on the target task. Architecture search may further optimise the student model's topology for edge hardware.

**Benchmark.** The SQM candidate is benchmarked against the LQM on a held-out validation set representative of the target deployment context. Metrics include not only predictive accuracy (F1, AUROC, calibration) but also throughput (samples per second), memory footprint, and power consumption — metrics that are irrelevant for cloud deployment but critical for edge viability.

**Quantise.** The SQM candidate is quantised — converting floating-point weights to lower-precision representations (INT8, INT4) using post-training quantisation or quantisation-aware training (Jacob et al., 2018). Quantisation reduces model size and accelerates inference on edge GPUs that support reduced-precision arithmetic. The fidelity of quantisation — the degree to which the quantised model preserves the accuracy of the full-precision model — is a critical metric [proposed term: *quantisation fidelity*] that must be evaluated for each genomic task independently.

**Validate.** The quantised SQM is validated against clinical or research ground truth in the target deployment environment. This validation must occur *on the edge hardware* where the model will be deployed, because quantisation interacts with hardware-specific numerical behaviour in ways that cannot always be predicted from software-only benchmarks. Validation datasets should be curated with attention to the specific population, organism, and sequencing technology of the target laboratory (Koboldt, 2020).

This four-stage cycle is iterative. If validation fails, the cycle returns to compilation with adjusted distillation parameters, alternative architectures, or less aggressive quantisation.

## 5. Architecture Patterns

### 5.1 GPU Workstation as Edge Node

The minimal viable edge node for genomic AI is a GPU workstation with the following reference specification:

| Component | Specification | Rationale |
|-----------|--------------|-----------|
| GPU | NVIDIA RTX 4090 (24GB VRAM) or equivalent | Sufficient for INT8 inference on most genomic SQMs; consumer-grade for cost efficiency |
| CPU | 16+ cores, AMD EPYC or Intel Xeon | Parallel data preprocessing |
| RAM | 128GB DDR5 | In-memory processing of whole-genome datasets |
| Storage | 16TB NVMe SSD (RAID 0 or spanned) | Local storage for active sequencing runs; a single NovaSeq X 25B flow cell generates up to 8 Tb (terabases, approximately 2.4 TB of compressed FASTQ data) per run (Illumina, 2024b) |
| Network | 10GbE | High-speed local connectivity to sequencing instruments |
| OS | Ubuntu 22.04 LTS | Broad bioinformatics tool support |

This configuration, which can be assembled for approximately USD 12,000–15,000, constitutes what we term the *minimal viable twin* [proposed term] — the smallest hardware investment that enables sovereign genomic AI processing. The minimal viable twin is not a compromise; it is a design target. Edge-native architecture demands that the primary processing node be affordable enough for individual laboratories to deploy and maintain independently.

For comparison, earlier estimates placed the annual cloud computing cost for a modestly active genomics laboratory at USD 15,000–40,000 (Muir et al., 2016; Langmead & Nellore, 2018). Cloud costs have declined significantly since those publications due to competition, spot pricing, and reserved instance models; the raw cost-per-compute argument for edge deployment is therefore weaker than it was in 2018. The stronger arguments for edge-native architecture are sovereignty and latency: genomic data that never leaves the laboratory perimeter eliminates egress costs, cross-border transfer risk, and round-trip latency for interactive analysis — benefits that persist regardless of cloud pricing trends.

### 5.2 The Hub Pattern

Individual edge nodes are powerful but isolated. The hub pattern connects multiple edge nodes through a lightweight coordination layer that enables:

- **Model distribution.** SQMs compiled in the SaaS sandbox (Tier 1) are pushed to edge nodes via signed, encrypted model packages. Edge nodes verify package integrity before deployment. Model packages are signed using organisation-specific keys with certificate chains rooted in the platform operator's certificate authority, ensuring that only authorised models execute on sovereign infrastructure.
- **Metadata aggregation.** Non-sensitive metadata — run statistics, quality metrics, model performance telemetry — is synchronised from edge nodes to the hub for fleet-wide monitoring and benchmarking.
- **Federated learning.** Model gradients or parameter updates are aggregated across edge nodes without centralising raw data (McMahan et al., 2017). This enables continuous model improvement from distributed genomic datasets while preserving sovereignty. We assume the federated hub operates within EU jurisdiction; cross-border gradient transfers to non-adequate jurisdictions would constitute personal data transfers under GDPR Chapter V, requiring additional safeguards such as Standard Contractual Clauses or supplementary technical measures in light of *Schrems II* (CJEU Case C-311/18).
- **Configuration management.** Pipeline configurations, reference databases, and annotation resources are distributed from the hub to edge nodes, ensuring consistency across the fleet.

The hub itself can be deployed as a lightweight cloud service (Tier 1) or as a dedicated on-premises server within an institutional network. The critical architectural property is that the hub never processes raw genomic data. It coordinates, distributes, and aggregates — but the sensitive computation occurs exclusively at the edge.

### 5.3 Bioinformatics Pipeline Context

It is important to acknowledge that the architecture patterns described above address the *tertiary analysis* layer — ML inference, classification, and predictive modelling — rather than the full bioinformatics pipeline. Between raw sequencing reads and ML-ready features lies a substantial secondary analysis toolchain that is predominantly CPU-bound: alignment (BWA-MEM2; Vasimuddin et al., 2019), variant calling (GATK; McKenna et al., 2010), and file manipulation (SAMtools; Danecek et al., 2021). These tools are mature, well-validated, and increasingly available in GPU-accelerated forms through platforms such as DRAGEN and Clara Parabricks. The edge node specification in Section 5.1 is designed to accommodate both secondary analysis (CPU-intensive) and tertiary analysis (GPU-intensive) workloads, though the primary architectural contribution of this paper concerns the latter.

## 6. Regulatory Alignment

### 6.1 EU AI Act Classification

The European Union Artificial Intelligence Act (European Parliament & Council, 2024) classifies AI systems that process biometric data for identification purposes as high-risk (Annex III, Section 1). While genomic research AI does not typically perform biometric identification, the Act's broad definition of biometric data — which includes genetic data — may bring genomic AI within scope, particularly when models are used for clinical decision support or diagnostic purposes.

High-risk classification under the AI Act imposes requirements for:

- **Risk management systems** (Article 9) — edge-native deployment with documented compile-benchmark-quantise-validate cycles provides structured risk management artefacts.
- **Data governance** (Article 10) — edge-native architecture ensures that training and validation data remain under institutional control, simplifying data governance documentation.
- **Technical documentation** (Article 11) — the compile-benchmark-quantise-validate cycle generates documentation artefacts at each stage.
- **Human oversight** (Article 14) — edge deployment enables real-time human oversight by co-locating the AI system with its operators, rather than abstracting it behind a cloud API.

### 6.2 GDPR Special Category Processing

Genetic data is classified as special category data under GDPR Article 9, requiring explicit consent or one of the enumerated exceptions (scientific research under Article 9(2)(j)) for lawful processing. Edge-native architecture simplifies GDPR compliance in several dimensions:

- **Data minimisation** (Article 5(1)(c)) — edge processing eliminates unnecessary data transfers, ensuring that only the minimum necessary data is processed at each stage.
- **Storage limitation** (Article 5(1)(e)) — edge nodes under institutional control enable precise management of data retention and deletion schedules.
- **Security** (Article 32) — physical control over edge hardware simplifies the implementation of appropriate technical and organisational security measures.
- **Data protection by design** (Article 25) — edge-native architecture embodies data protection by design rather than retrofitting it onto a cloud architecture.

Additionally, the European Health Data Space (EHDS) regulation, currently progressing through the EU legislative process, will establish a framework for the secondary use of health data — including genomic data — across member states; edge-native architectures are well-positioned to serve this framework by enabling compliant local processing with controlled, purpose-limited data release.

## 7. Limitations

This paper is a position paper, not an empirical study. The architecture patterns presented are derived from a single pilot deployment context and have not been validated across diverse institutional settings, sequencing modalities, or regulatory jurisdictions beyond the European Union.

Several specific limitations warrant acknowledgement:

1. **Hardware evolution.** The minimal viable twin specification is based on current GPU hardware (NVIDIA Ampere/Ada Lovelace architecture). Rapid hardware evolution — particularly the emergence of purpose-built AI accelerators, neuromorphic chips, and photonic computing — may alter the cost-performance calculus of edge deployment within two to three years (Jouppi et al., 2017).

2. **Model complexity ceiling.** Some genomic AI tasks — notably *de novo* genome assembly, long-read structural variant detection, and multi-modal integration across genomic, transcriptomic, proteomic, and metabolomic data — may exceed the capacity of edge nodes for the foreseeable future. The LQM-to-SQM progression does not eliminate the need for cloud-scale computation; it reduces the scope of tasks that require it.

3. **Institutional readiness.** Edge-native deployment requires local IT expertise for hardware provisioning, maintenance, and security management. Not all research institutions have this capacity. The absorptive capacity framework (Cohen & Levinthal, 1990) suggests that institutional learning is a prerequisite for effective technology adoption, and this learning cannot be bypassed by architectural elegance.

4. **Federated learning limitations.** While federated learning enables collaborative model improvement without data centralisation, it introduces new challenges: communication efficiency, non-IID data distributions across sites, and potential privacy leakage through gradient analysis (Zhu et al., 2019). These challenges are active research areas and not fully resolved.

5. **Regulatory uncertainty.** The EU AI Act is recently enacted and its implementing regulations are still being developed. The classification of genomic research AI under the Act's risk categories may evolve as regulatory guidance is issued.

6. **Self-citation limitation.** The Reality Construct (Waern, 2026a), Sovereign Body thesis (Waern, 2026b), and scaling infrastructure work (Waern, 2025a) referenced in this paper are the author's own preprints and have not been independently validated or peer-reviewed beyond the preprint stage.

## 8. Future Research and Conclusion

### 8.1 Future Research Directions

Several research directions emerge from this analysis:

**Quantisation fidelity benchmarks for genomic tasks.** There is no systematic benchmark for quantisation fidelity across genomic AI tasks. A community resource — analogous to the GLUE benchmark for natural language processing — that evaluates the accuracy degradation of quantised models across variant calling, expression prediction, and clinical classification would accelerate SQM development and deployment.

**Edge-native federated learning for genomic cohorts.** Empirical evaluation of federated learning protocols optimised for the specific characteristics of genomic data — high dimensionality, population structure, rare variant sparsity — across real-world multi-site deployments.

**Economic modelling of edge versus cloud total cost of ownership.** Rigorous total cost of ownership analysis incorporating not only direct compute costs but also compliance costs (legal review, DPIA preparation, processor audits), latency costs (clinical decision delays), and sovereignty risk costs (probability-weighted impact of data breaches or jurisdictional conflicts).

**Hardware-software co-design for genomic edge AI.** Investigation of custom hardware configurations — FPGA-based variant callers, specialised memory architectures for graph-based genome representations — that could further reduce the cost and power consumption of edge genomic processing (Goyal et al., 2017).

**Longitudinal deployment evaluation.** Multi-year studies tracking the evolution of edge-native genomic infrastructure across diverse institutional settings, evaluating total cost of ownership, operational sustainability, and compliance outcomes over time.

### 8.2 Conclusion

Cloud-first architectures embed assumptions about data governance, institutional sovereignty, and computational topology that may not hold under tightening regulatory requirements and the inherently distributed nature of biological research. Edge-native architecture — designed for edge constraints from inception — offers a complementary approach that can improve resilience, preserve data sovereignty, and reduce latency for interactive genomic analysis.

The LQM-to-SQM progression provides a mechanism for deploying cloud-trained intelligence at edge-scale cost. The architecture patterns presented here are not intended to replace cloud genomics or existing on-premises solutions such as DRAGEN; rather, they propose an open, vendor-agnostic layer for the tertiary analysis and ML inference tasks that increasingly follow secondary analysis in production genomic workflows.

Empirical validation across diverse institutional settings, sequencing modalities, and regulatory jurisdictions is required before these patterns can be recommended for production deployment. The architecture is presented as a hypothesis to be tested, not a prescription to be adopted.

---

## References

Avsec, Z., Agarwal, V., Visentin, D., Ledsam, J. R., Grabska-Barwinska, A., Taylor, K. R., Assael, Y., Jumper, J., Kohli, P., & Kelley, D. R. (2021). Effective gene expression prediction from sequence by integrating long-range interactions. *Nature Methods*, *18*(10), 1196–1203. https://doi.org/10.1038/s41592-021-01252-x

Cheng, J., Novati, G., Pan, J., Bycroft, C., Žemgulytė, A., Applebaum, T., Pritzel, A., Wong, L. H., Zielinski, M., Sargeant, T., Schneider, R. G., Senior, A. W., & Jumper, J. (2023). Accurate proteome-wide missense variant effect prediction with AlphaMissense. *Science*, *381*(6664), 1303–1308. https://doi.org/10.1126/science.adg7492

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, *35*(1), 128–152. https://doi.org/10.2307/2393553

Danecek, P., Bonfield, J. K., Liddle, J., Marshall, J., Ohan, V., Pollard, M. O., Whitwham, A., Keane, T., McCarthy, S. A., Davies, R. M., & Li, H. (2021). Twelve years of SAMtools and BCFtools. *GigaScience*, *10*(2), giab008. https://doi.org/10.1093/gigascience/giab008

Dalla-Torre, H., Gonzalez, L., Mendoza-Revilla, J., Lopez Carranza, N., Grzywaczewski, A. H., Oteri, F., Dallago, C., Trop, E., de Almeida, B. P., Sirelkhatim, H., Richard, G., Skwark, M., Beguir, K., Lopez, M., & Pierrot, T. (2025). Nucleotide Transformer: Building and evaluating robust foundation models for human genomics. *Nature Methods*, *22*(2), 287–297. https://doi.org/10.1038/s41592-024-02523-z

European Parliament & Council. (2016). Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation). *Official Journal of the European Union*, *L119*, 1–88.

European Parliament & Council. (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *Official Journal of the European Union*, *L 2024/1689*.

Franke, K. R., Crowgey, E. L., & Paten, B. (2021). Accelerating genomics workflows using NVIDIA Parabricks. *BMC Bioinformatics*, *22*(Suppl 13), 442.

Garcia Lopez, P., Montresor, A., Epema, D., Datta, A., Higashino, T., Iamnitchi, A., Barcellos, M., Felber, P., & Riviere, E. (2015). Edge-centric computing: Vision and challenges. *ACM SIGCOMM Computer Communication Review*, *45*(5), 37–42. https://doi.org/10.1145/2831347.2831354

Goyal, A., Deng, Z., & Tan, M. (2017). FPGA-accelerated bioinformatics computations. *IEEE Transactions on Biomedical Circuits and Systems*, *11*(5), 1137–1148. https://doi.org/10.1109/TBCAS.2017.2737585

Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the knowledge in a neural network. *arXiv preprint arXiv:1503.02531*. https://doi.org/10.48550/arXiv.1503.02531

Illumina. (2024). DRAGEN Bio-IT Platform: Secondary analysis for next-generation sequencing data. https://www.illumina.com/products/by-type/informatics-products/dragen-bio-it-platform.html

Illumina. (2024b). NovaSeq X Series specifications. https://www.illumina.com/systems/sequencing-platforms/novaseq-x-plus/specifications.html

Jain, M., Olsen, H. E., Paten, B., & Akeson, M. (2016). The Oxford Nanopore MinION: Delivery of nanopore sequencing to the genomics community. *Genome Biology*, *17*(1), 239. https://doi.org/10.1186/s13059-016-1103-0

Jacob, B., Kligys, S., Chen, B., Zhu, M., Tang, M., Howard, A., Adam, H., & Kalenichenko, D. (2018). Quantization and training of neural networks for efficient integer-arithmetic-only inference. In *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition* (pp. 2704–2713). https://doi.org/10.1109/CVPR.2018.00286

Jouppi, N. P., Young, C., Patil, N., Patterson, D., Agrawal, G., Bajwa, R., Bates, S., Bhatia, S., Boden, N., Borber, A., Boyle, R., Cantin, P., Chao, C., Clark, C., Coriell, J., Daley, M., Dau, M., Dean, J., Gelb, B., ... Yoon, D. H. (2017). In-datacenter performance analysis of a tensor processing unit. In *Proceedings of the 44th Annual International Symposium on Computer Architecture* (pp. 1–12). https://doi.org/10.1145/3079856.3080246

Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A., Potapenko, A., Bridgland, A., Meyer, C., Kohl, S. A. A., Ballard, A. J., Cowie, A., Romera-Paredes, B., Nikolov, S., Jain, R., Adler, J., ... Hassabis, D. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, *596*(7873), 583–589. https://doi.org/10.1038/s41586-021-03819-2

Koboldt, D. C. (2020). Best practices for variant calling in clinical sequencing. *Genome Medicine*, *12*(1), 91. https://doi.org/10.1186/s13073-020-00791-w

Langmead, B., & Nellore, A. (2018). Cloud computing for genomic data analysis and collaboration. *Nature Reviews Genetics*, *19*(4), 208–219. https://doi.org/10.1038/nrg.2017.113

McKenna, A., Hanna, M., Banks, E., Sivachenko, A., Cibulskis, K., Kernytsky, A., Garimella, K., Altshuler, D., Gabriel, S., Daly, M., & DePristo, M. A. (2010). The Genome Analysis Toolkit: A MapReduce framework for analyzing next-generation DNA sequencing data. *Genome Research*, *20*(9), 1297–1303. https://doi.org/10.1101/gr.107524.110

McMahan, B., Moore, E., Ramage, D., Hampson, S., & y Arcas, B. A. (2017). Communication-efficient learning of deep networks from decentralized data. In *Proceedings of the 20th International Conference on Artificial Intelligence and Statistics* (pp. 1273–1282). PMLR.

Muir, P., Li, S., Lou, S., Wang, D., Spakowicz, D. J., Salichos, L., Zhang, J., Weinstock, G. M., Isaacs, F., Rozowsky, J., & Gerstein, M. (2016). The real cost of sequencing: Scaling computation to keep pace with data generation. *Genome Biology*, *17*(1), 53. https://doi.org/10.1186/s13059-016-0917-0

NVIDIA. (2024b). Clara Parabricks: GPU-accelerated genomics. Best performance guide. https://docs.nvidia.com/clara/parabricks/latest/bestperformance.html

Oxford Nanopore Technologies. (2024). Nanopore sequencing products and specifications. https://nanoporetech.com/products/sequence

Poplin, R., Chang, P. C., Alexander, D., Schwartz, S., Colthurst, T., Ku, A., Newburger, D., Dijamco, J., Nguyen, N., Afshar, P. T., Gross, S. S., Dorfman, L., McLean, C. Y., & DePristo, M. A. (2018). A universal SNP and small-indel variant caller using deep neural networks. *Nature Biotechnology*, *36*(10), 983–987. https://doi.org/10.1038/nbt.4235

Rehm, H. L., Page, A. J. H., Smith, L., Adams, J. B., Alterovitz, G., Babb, L. J., Barkley, M. P., Baudis, M., Beauvais, M. J. S., Beck, T., ... & Birney, E. (2021). GA4GH: International policies and standards for data sharing across genomic research and healthcare. *Cell Genomics*, *1*(2), 100029. https://doi.org/10.1016/j.xgen.2021.100029

Satyanarayanan, M. (2017). The emergence of edge computing. *Computer*, *50*(1), 30–39. https://doi.org/10.1109/MC.2017.9

Shi, W., Cao, J., Zhang, Q., Li, Y., & Xu, L. (2016). Edge computing: Vision and challenges. *IEEE Internet of Things Journal*, *3*(5), 637–646. https://doi.org/10.1109/JIOT.2016.2579198

Stephens, Z. D., Lee, S. Y., Faghri, F., Campbell, R. H., Zhai, C., Efron, M. J., Iyer, R., Schatz, M. C., Sinha, S., & Robinson, G. E. (2015). Big data: Astronomical or genomical? *PLoS Biology*, *13*(7), e1002195. https://doi.org/10.1371/journal.pbio.1002195

Turro, E., Asber, D., Bartels, A., & Caulfield, M. J. (2020). Whole-genome sequencing of patients with rare diseases in a national health system. *Nature*, *583*(7814), 96–102. https://doi.org/10.1038/s41586-020-2434-2

Vasimuddin, M., Misra, S., Li, H., & Aluru, S. (2019). Efficient architecture-aware acceleration of BWA-MEM for multicore systems. In *2019 IEEE International Parallel and Distributed Processing Symposium (IPDPS)* (pp. 314–324). https://doi.org/10.1109/IPDPS.2019.00041

Waern, N. (2025a). From one room to fifty: Scaling digital twin infrastructure across distributed environments. *Zenodo*. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2026a). The Reality Construct: Anchoring digital systems in observable reality (v2). *Zenodo*. https://doi.org/10.5281/zenodo.19587944

Waern, N. (2026b). The Sovereign Body: Architectural principles for individual data sovereignty. *Zenodo*. https://doi.org/10.5281/zenodo.19586851

Ward, J., & Daniel, E. (2006). *Benefits management: Delivering value from IS and IT investments*. John Wiley & Sons.

Weill, P., & Broadbent, M. (1998). *Leveraging the new infrastructure: How market leaders capitalize on information technology*. Harvard Business School Press.

Zhu, L., Liu, Z., & Han, S. (2019). Deep leakage from gradients. In *Advances in Neural Information Processing Systems* (Vol. 32, pp. 14774–14784). Curran Associates.
