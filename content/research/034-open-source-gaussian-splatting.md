---
title: "Open-Source 3D Gaussian Splatting on Construction Sites: A Hybrid Cloud-Edge Architecture"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: 3D Gaussian splatting, 3DGS, construction, open-source, cloud-edge architecture, container-native, radiance field, neural rendering, boundary object, Actor-Network Theory, open-source pipeline, edge-first, design science research, SMILE methodology
status: ready
date: 2026-04-16
---

# Open-Source 3D Gaussian Splatting on Construction Sites: A Hybrid Cloud-Edge Architecture

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

3D Gaussian Splatting (3DGS) — the technique introduced by Kerbl et al. in 2023 for real-time radiance field rendering using splat-based scene representations — offers properties that photogrammetric reconstruction does not: photorealistic visual quality at real-time rendering frame rates, richer material appearance representation, and training times that are competitive with established NeRF methods while achieving superior rendering throughput. A joint development session on a 3DGS pipeline for construction site capture — 22 minutes in duration but architecturally specific — identified open-source first, container-native, and edge-first design as the three non-negotiable architectural principles for a construction industry 3DGS deployment. This paper argues that the open-source pipeline is not merely a cost-saving choice but a structural boundary object: a technical artefact that multiple organisations, with different interests and different technical capabilities, can jointly develop, deploy, and extend without any single party acquiring lock-in over the pipeline's future direction. We analyse this claim through ANT, examining how the MIT licence, the container-native deployment model, and the edge-first inference architecture each contribute to the pipeline's function as a boundary object across a heterogeneous construction industry ecosystem. We examine the specific technical choices required to make 3DGS viable on construction sites — where capture conditions (uncontrolled lighting, dynamic occlusion by construction activity, partial and changing scene structure) differ substantially from the benchmark environments on which 3DGS was originally evaluated. We engage the counter-argument that 3DGS is insufficiently mature for construction site deployment and argue that maturity is the wrong evaluation criterion: the relevant criterion is whether the pipeline is capable of producing value at current maturity while on a trajectory to improve. Three falsifiable propositions are stated regarding reconstruction quality, edge inference performance, and multi-organisation adoption dynamics under open-source versus proprietary licensing.

**Keywords:** 3D Gaussian splatting, 3DGS, construction, open-source, cloud-edge architecture, container-native, radiance field, neural rendering, boundary object, Actor-Network Theory, open-source pipeline, edge-first, design science research, SMILE methodology

---

## 1. Introduction: Why Open-Source Matters More Than Photorealism

The publication of 3D Gaussian Splatting [1] in 2023 produced a wave of enthusiasm in the computer graphics and applied AI communities for reasons that are well-founded: the technique achieves real-time rendering of photorealistic scenes from multi-view photograph collections, at quality levels competitive with Neural Radiance Fields (NeRF) [2] and at rendering throughputs multiple orders of magnitude higher. For construction site documentation — an application that benefits from photorealistic scene representation and needs to run on hardware available on construction sites rather than in research GPU clusters — 3DGS has plausible advantages over both photogrammetric point clouds and NeRF-based reconstruction.

The joint development session that grounds this paper was not primarily a technical evaluation of 3DGS's photorealism. It was an architectural design session: two organisations exploring how to build a 3DGS pipeline that both of them could deploy, maintain, and extend, without either organisation becoming dependent on the other for continued access. The session was 22 minutes in duration but produced specific architectural commitments: MIT licence for all pipeline components, Docker containerisation for all services, and inference-capable edge deployment as a design requirement, not a future extension.

These commitments are more significant than they might appear. The MIT licence means any organisation can take the pipeline, modify it, and deploy it without returning modifications to the original developers — a property that is essential for adoption across organisations with different security requirements, different deployment environments, and different commercial interests. The Docker containerisation means the pipeline deploys identically in a developer's laptop, a construction site edge server, and a cloud GPU cluster — a property that is essential for a pipeline that must be maintained across heterogeneous deployment environments. The edge inference requirement means the pipeline must continue to produce useful outputs when cloud connectivity is unavailable — a property that is essential in construction site environments.

This paper argues that these architectural commitments are what make the 3DGS pipeline a boundary object: a technical artefact that multiple organisations with different interests can build on without any of them acquiring control over the others' access.

---

## 2. Theoretical Framework

### 2.1 Open-Source as Boundary Object

Star and Griesemer's boundary object concept [3] was developed to describe artefacts that serve multiple communities of practice simultaneously, adapting to local needs while maintaining sufficient common identity for coordination. The canonical examples are scientific objects — species lists, geological surveys — that serve both field scientists and museum curators with different but compatible purposes.

Open-source software pipelines are boundary objects in a specific and underanalysed sense: the MIT licence, the standardised packaging formats, and the version control infrastructure are the boundary object's stabilising structures; the deployment configurations, domain-specific adaptations, and downstream integrations are the local adaptations that different organisations make to serve their specific needs. The pipeline maintains its common identity — the same algorithms, the same interfaces, the same performance characteristics — while accommodating radically different deployment contexts.

The proprietary pipeline is, in ANT terms, an obligatory passage point [4]: access to the pipeline's capabilities requires passing through the vendor who controls the licence. The open-source pipeline eliminates this obligatory passage point, distributing the power to deploy and adapt the pipeline across all organisations that choose to use it. This distribution is what makes multi-organisation adoption possible without the coordination costs of vendor dependency negotiation.

### 2.2 ANT and Joint Development Networks

ANT [4][5] is appropriate for analysing the joint development session because the session is precisely a translation moment: two organisations are negotiating the inscriptions that will determine the pipeline's properties. Each architectural commitment made in the session — MIT licence, Docker containerisation, edge inference — is an inscription that constrains the pipeline's future development in specific ways and enables specific adoption patterns.

The MIT licence inscription constrains: the pipeline can never be made proprietary by either party, even if one party's investment in its development is substantially larger than the other's. The Docker containerisation inscription enables: any organisation that can run Docker can deploy the pipeline without understanding the underlying build environment. The edge inference inscription enables: deployment in environments without cloud connectivity, a constraint that opens the construction site market.

### 2.3 The SMILE Methodology Applied to 3DGS Pipeline Design

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is construction site visual documentation that uses photogrammetric point clouds with limited visual fidelity and high processing latency. The to-be state is a pipeline that produces photorealistic scene representations from standard smartphone or action camera footage, runs training on cloud GPUs when connectivity is available and inference on site edge hardware when it is not, and is jointly maintained by a network of organisations with complementary deployment interests. Every architectural choice in the pipeline design is evaluated against this transition.

---

## 3. 3DGS: Technical Background and Construction Site Challenges

### 3.1 How 3DGS Works

3D Gaussian Splatting represents a scene as a collection of 3D Gaussians: ellipsoidal primitives, each with position, orientation, scale, opacity, and spherical harmonic colour coefficients. Scene reconstruction from multi-view photographs proceeds in two phases: an initialisation phase that uses structure-from-motion to produce a sparse point cloud and initial Gaussian placement, and a training phase that optimises the Gaussian parameters to minimise the photometric error between rendered views and input photographs. Rendering is achieved by splatting the Gaussians onto a 2D image plane via alpha blending, producing real-time frame rates (60+ fps at 1080p on a gaming GPU) for the trained scene.

The technique's advantages over photogrammetric mesh reconstruction include: superior handling of specular reflections and translucent materials; elimination of the mesh tessellation artefacts that photogrammetric reconstruction produces in complex geometry; and continuous level-of-detail that degrades gracefully at distance. The advantages over NeRF include: significantly faster rendering (milliseconds per frame versus seconds), lower inference memory requirement, and a more explicit scene representation that allows local editing.

### 3.2 Construction Site-Specific Challenges

Construction sites impose capture and reconstruction conditions that deviate from the benchmark environments in which 3DGS was evaluated:

**Uncontrolled and time-varying lighting.** Construction sites are lit by a combination of natural light (through windows and temporary openings), construction lighting (high-intensity work lights with inconsistent placement), and reflective surfaces (wet concrete, metallic components, glass). This lighting is not controlled between captures; the same area may be captured at different times with substantially different illumination. Gaussian Splatting optimises for photometric consistency across input views; illumination changes between capture passes produce photometric inconsistencies that degrade reconstruction quality.

The mitigation: separate training runs per capture session rather than a single joint training run; view-dependent colour representation using the full spherical harmonic capacity (degree 3 or 4) to capture directional illumination variation; and normalisation of exposure values across images in each capture session before training.

**Dynamic occlusion by construction activity.** Active construction sites have workers, equipment, and temporary materials that appear in some photographs of a scene but not others. These transient occluders produce "floater" Gaussians in the reconstructed scene — spurious primitives that represent the occluder in specific viewpoints. Standard 3DGS training has no mechanism for distinguishing static scene structure from transient occluders.

The mitigation: pre-processing masking that identifies and masks regions of each image likely to contain transient occluders (using a semantic segmentation model trained to classify construction workers, scaffolding, and mobile equipment as transient classes); and post-processing outlier removal that prunes Gaussians with high view-dependent colour variance, which are characteristic of transient occluder artifacts.

**Partial and changing scene structure.** The scene being captured on a construction site does not have a fixed, complete structure: new elements are added (walls, services, finishes) and old elements are removed (formwork, scaffolding, temporary partitions) between captures. This means that a 3DGS model trained on one capture session does not correctly represent the scene in a subsequent session; incremental training — adding new Gaussians and removing obsolete ones — is required.

Incremental 3DGS training is an active research area [6]; production-ready implementations for construction site use are not yet available in open-source form. The pipeline architecture must accommodate incremental training as a planned extension without requiring it for initial deployment.

### 3.3 The Container-Native Architecture

The pipeline is structured as a set of Docker services with defined interfaces:

**Capture service:** runs on the capture device (smartphone or action camera) or as a post-processing step on a site-based edge server. Responsibilities: image quality filtering (blur rejection, exposure normalisation), EXIF metadata extraction, image packaging for upload.

**SfM service:** runs on cloud GPU. Responsibilities: structure-from-motion reconstruction to produce sparse point cloud and camera poses from each capture session's image set. Uses COLMAP [7] as the reference implementation.

**Splat training service:** runs on cloud GPU. Responsibilities: 3DGS optimisation from the SfM output. Training time scales with scene complexity and image count; a 500-image construction floor typically trains in 15–25 minutes on a mid-range cloud GPU.

**Splat inference service:** runs on edge hardware (NVIDIA Jetson or equivalent) or cloud GPU. Responsibilities: real-time rendering of the trained splat scene for viewing applications. The inference service container is the primary edge deployment target: it allows the trained scene to be rendered on site without cloud connectivity.

**Scene management service:** runs on cloud or local server. Responsibilities: version control for trained splat scenes, comparison between successive sessions, deviation flagging, and API layer for integration with construction project management platforms.

The container-native architecture means that each service can be deployed on the hardware appropriate to its computational requirements without architectural changes: the training service deploys on cloud GPU; the inference service deploys on edge hardware; the capture and scene management services deploy on standard servers or cloud instances.

---

## 4. Open-Source as Structural Boundary Object: The Multi-Organisation Argument

### 4.1 Why Proprietary 3DGS Pipelines Fail the Construction Market

The construction industry is structurally heterogeneous: it consists of tens of thousands of general contractors, subcontractors, specialist consultants, and client organisations operating at different scales, with different technology investment capacities, and with project-specific rather than long-term technology relationships. This structure is incompatible with proprietary SaaS platform adoption for a fundamental reason: construction project teams are temporary assemblies, and the technology stack that serves a project must be accessible to all members of the team at the moment of assembly, not after a procurement and onboarding process that may take longer than the project's pre-construction phase.

An open-source, container-native pipeline that any team member can deploy in an afternoon, without licence negotiation or vendor onboarding, is architecturally suited to the construction industry's project-team assembly dynamics. A proprietary SaaS platform is not.

### 4.2 The Joint Development Network

The session described the pipeline as a joint development artefact: two organisations committing to contribute components to a shared codebase that both will deploy. The MIT licence is the governance instrument that makes this commitment credible: neither organisation can subsequently make the pipeline proprietary, fork it into a proprietary product, or restrict the other's access. The licence is the boundary object's stabilising structure.

The joint development model has strategic implications beyond cost sharing. Each contributing organisation brings domain expertise that complements the other's: one organisation has construction site operational expertise; the other has computer graphics and AI engineering expertise. The pipeline that emerges from joint development is more likely to be operationally viable — to handle the practical challenges of construction site capture described in Section 3.2 — than a pipeline developed by engineers without construction operational experience.

### 4.3 The Fork-and-Contribute Governance Pattern

The MIT licence allows any organisation to fork the pipeline for private extensions — adding proprietary integrations with internal systems, adapting it for specific equipment — without returning those extensions to the shared codebase. This fork-and-contribute governance pattern allows organisations to maintain commercial differentiation on top of a shared foundation. The construction company that adds a proprietary integration between the pipeline and their project management system has a competitive advantage, but the core pipeline improvements they make along the way (improved masking for their specific equipment types, optimised training configurations for their typical capture conditions) are available to contribute back to the shared codebase, where they benefit all users.

This governance pattern is standard in mature open-source ecosystems (Linux kernel, TensorFlow, PyTorch). It is not yet standard in construction technology. The 3DGS pipeline development described in this session represents an early instance of the fork-and-contribute pattern in the construction AI space.

---

## 5. Counter-Argument: Is 3DGS Sufficiently Mature for Construction Deployment?

The counter-argument holds that 3DGS is an immature research technique with known limitations in the construction site conditions described in Section 3.2 (illumination variation, dynamic occlusion, incremental scene updates), and that deploying it in production construction projects before these limitations are resolved risks producing unreliable documentation that is worse than the conventional photogrammetric approaches it replaces.

This counter-argument sets the wrong evaluation criterion. Technology maturity is a static criterion applied to a dynamic situation: a technology that is insufficiently mature today may be sufficiently mature in twelve months. The relevant criterion for a pipeline design decision is not current maturity but trajectory: is the technique on a development trajectory that will bring it to sufficient maturity for the target application within the deployment timeline, and is the investment in building the pipeline architecture justified by the expected trajectory?

For 3DGS, the trajectory argument is strong. The original 3DGS paper was published in August 2023; by early 2025, the open-source ecosystem had produced improvements in training speed, memory efficiency, and dynamic scene handling that made construction site deployment significantly more viable than the original paper's evaluation suggested. The pipeline architecture described in this paper is designed with this trajectory in mind: it accommodates incremental training as a planned extension, uses the best available mitigations for current limitations, and is structured so that improvements to the underlying 3DGS implementation can be adopted by updating the splat training service container without changing the pipeline architecture.

The appropriate response to the maturity counter-argument is not to wait for maturity. It is to build the architecture now, deploy it at pilot scale where current maturity is sufficient, and extend to production scale as maturity improves.

---

## 6. Falsifiable Propositions

1. **The reconstruction quality proposition:** Open-source 3DGS pipelines trained on 500-image construction site walk-through captures (controlled single-session, daylight conditions, post-processing masking for transient occluders) will produce scene reconstructions with mean photometric error below 15 dB PSNR relative to held-out validation views, equivalent to or better than photogrammetric mesh reconstruction from the same input images when evaluated for visual fidelity by human assessment panel rating. This proposition can be falsified by a comparative quality evaluation showing that photogrammetric reconstruction produces significantly higher human-rated visual fidelity scores than 3DGS reconstruction from the same image sets under construction site conditions.

2. **The edge inference proposition:** A trained 3DGS splat scene of a single construction floor (approximately 800 square metres, average complexity) can be rendered at minimum 30 fps at 720p resolution on a current-generation edge inference device (NVIDIA Jetson AGX Orin or equivalent, maximum 60W power consumption) without cloud connectivity, enabling autonomous site review without internet dependency. This proposition can be falsified by a benchmark study showing that construction-scale 3DGS scenes require cloud GPU resources to achieve the specified frame rate and resolution on the specified hardware class.

3. **The open-source adoption proposition:** Open-source 3DGS construction pipelines released under MIT licence will achieve deployment in at least three independent organisations within 18 months of initial public release, while proprietary equivalents with equivalent functionality but SaaS licensing will achieve fewer independent organisational deployments in the same period, controlling for marketing investment, reflecting the structural barrier that proprietary licensing creates for construction industry project-team adoption dynamics. This proposition can be falsified by a market adoption study showing equivalent or higher adoption rates for proprietary versus open-source 3DGS construction pipelines across the 18-month period following release.

---

## 7. Limitations and Future Research

The session that grounds this paper was 22 minutes in duration; the architectural commitments described were the outputs of a very compressed design discussion that did not include detailed technical feasibility analysis for all components. The performance claims in Sections 3.1 and 6 — including training times, rendering frame rates, and PSNR quality targets — are derived from benchmarks reported in the published 3DGS literature, principally Kerbl et al. [1], and from edge hardware specification sheets; they have not been measured on the specific pipeline configuration described in this paper and should be interpreted accordingly. Incremental 3DGS training — the ability to update an existing scene model with new captures without full retraining — is identified in Section 3.2 as a planned extension; this remains an open research problem without a production-ready open-source implementation at the time of writing, and its resolution is a prerequisite for the pipeline to achieve full continuous-capture capability as described.

The construction site challenge mitigations described in Section 3.2 are architectural proposals informed by the 3DGS literature; they have not been implemented and evaluated in the specific construction site context described.

The open-source adoption argument in Section 4.1 is based on structural analysis of the construction industry; the specific claim about deployment timeline advantage for open-source versus proprietary pipelines has not been empirically tested.

Future research should: (1) implement and evaluate the full pipeline architecture described in this paper on at least three construction site types (structural concrete, MEP-intensive fit-out, external envelope), measuring reconstruction quality, training time, and edge inference performance against the propositions in Section 6; (2) evaluate the transient occluder masking and illumination normalisation mitigations described in Section 3.2 on a dataset of construction site images with labelled ground truth for transient occluder regions; (3) conduct a controlled study of deployment adoption rates for open-source versus proprietary 3DGS construction pipelines across a sample of construction technology early adopters, measuring time-to-deployment and total deployment cost.

---

## 8. Conclusion

3D Gaussian Splatting is not primarily interesting to the construction industry because it renders photorealistic scenes. Photorealism is a means, not an end. The relevant ends — accurate as-built documentation, real-time site monitoring, design model comparison — are achievable with adequate visual fidelity that does not require photorealism. 3DGS is interesting because it achieves adequate-to-excellent visual fidelity at rendering speeds that make interactive site review viable on edge hardware.

The open-source architecture is interesting for a reason that has nothing to do with photorealism: it is the governance structure that makes multi-organisation pipeline development viable. A proprietary pipeline concentrates power at the vendor and creates adoption barriers that are structurally incompatible with the construction industry's project-team assembly dynamics. An open-source pipeline distributes power across all organisations that contribute to it and removes adoption barriers for organisations that cannot afford or justify proprietary vendor relationships.

The 22-minute joint development session described in this paper produced three architectural commitments — MIT licence, Docker containerisation, edge inference — that are more durable than any specific technical choice in the pipeline. They define the pipeline's social structure as clearly as its technical structure, and in the construction industry's heterogeneous ecosystem, the social structure is what determines whether the pipeline will be adopted or remain a research demonstration.

Building open-source construction AI infrastructure is not a charitable act. It is a market strategy: the organisations that build the shared foundation accumulate deployment experience, integration expertise, and ecosystem influence that proprietary vendors, locked in their own ecosystems, cannot match. The boundary object that multiple organisations build together is more robust than the proprietary product that one vendor controls alone.

---

## References

[1] Kerbl B, Kopanas G, Leimkühler T, Drettakis G. 3D Gaussian Splatting for Real-Time Radiance Field Rendering. *ACM Transactions on Graphics* 2023;42(4):139.

[2] Mildenhall B, Srinivasan PP, Tancik M, Barron JT, Ramamoorthi R, Ng R. NeRF: Representing scenes as neural radiance fields for view synthesis. In: *Proceedings of ECCV.* 2020.

[3] Star SL, Griesemer JR. Institutional ecology, translations and boundary objects. *Social Studies of Science* 1989;19(3):387–420.

[4] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[5] Latour B. *Science in Action.* Harvard University Press, 1987.

[6] Wu G, Yi T, Fang J, Xie L, Zhang X, Wei W, Liu W, Tian Q, Zhao W. 4D Gaussian Splatting for Real-Time Dynamic Scene Rendering. In: *Proceedings of CVPR.* 2024.

[7] Schönberger JL, Frahm JM. Structure-from-motion revisited. In: *Proceedings of CVPR.* 2016: 4104–4113.

[8] Pumarola A, Corona E, Pons-Moll G, Moreno-Noguer F. D-NeRF: Neural radiance fields for dynamic scenes. In: *Proceedings of CVPR.* 2021.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
