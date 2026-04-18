# Indexing Reality: Boundary-Spanning Objects, Automated Scene Creation, and the Convergence of Spatial Intelligence with RF Digital Twins

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: 0000-0001-7970-2707

---

## Abstract

This position paper proposes that automated spatial scene creation — the transformation of drone-captured environments into semantically segmented, physics-informed 3D meshes — functions as a boundary object (Star & Griesemer, 1989) enabling knowledge transfer across spatially disseparated actors, industries, and intelligence modalities. Drawing on a collaboration between WINNIIO AB and a leading European telecommunications research laboratory in preparation for a Horizon Europe proposal on virtual worlds and Web 4.0, the paper argues that the primary deliverable of RF digital twin pipelines is not the propagation model but the scene itself: a queryable, physics-based spatial fabric. We frame this through the SMILE methodology, the Minimal Interoperability Mechanisms (MIMs) framework, and propose a progression from Large Language Models (LLMs) to Large Quantitative Models (LQMs) to Small Quantitative Models (SQMs). We further introduce the NUDEDA framework — an extension of Ward and Daniel's benefits-driven approach through Pessi and Magoulas' Five Models — arguing that organisations must progress through technology-as-enabler to technology-as-DNA to autonomous-by-design to realise the potential of spatial digital twins.

**Keywords:** Digital Twins, Boundary Objects, Actor-Network Theory, Automated Scene Creation, RF Propagation, Gaussian Splatting, SMILE Methodology, Minimal Interoperability Mechanisms, Web 4.0, NUDEDA

---

## 1. Introduction: The Scene Is the Deliverable

In a working conversation between the author and a senior researcher at a leading European telecommunications research laboratory (hereafter 'the collaborating researcher') (April 13, 2026), preparing a joint proposal for the Horizon Europe call HORIZON-CL4-2026-04-HUMAN-01 on Virtual Worlds and Web 4.0, a deceptively simple insight emerged. The collaborating researcher stated:

> "The biggest bottleneck for this sort of simulation work is the spatial scene creation because it's all manual... joining the multiple data sources together is still a manual process and then assigning material properties, that's still a manual process. So a big part of this will be putting the automated pipeline for the scene creation, and then the RF propagation modelling — that's like a nice bit on top."

This observation inverts conventional thinking about RF digital twins. The telecommunications industry has focused on the prediction layer — machine learning coverage maps, ray tracing algorithms, path loss models — while treating the spatial scene as an input to be manually assembled from fragmented sources (Google Earth, OpenStreetMap, LiDAR surveys, building databases). Yet as the collaborating researcher confirmed, none of the existing machine learning coverage prediction tools are validated against site-specific measurements, creating what he described as "this huge gap that's not being addressed mainly because no one wants to do the validation part."

Current manual scene creation for RF simulation requires an estimated 40–160 person-hours per square kilometre. This estimate is the author's own, based on industry experience with multi-source spatial data integration across building, manufacturing, and telecommunications domains; no peer-reviewed benchmark for RF-specific scene creation effort currently exists in the literature, and establishing such a benchmark is itself a contribution this pipeline could enable. Automated pipelines targeting 2–8 hours — a 10–50x acceleration — represent a quantitative efficiency gain. But more fundamentally, they represent a qualitative shift in what the scene *is*: from a disposable input to a persistent, queryable knowledge asset.

The urgency of this reframing becomes clearer when considered ontologically. Every domain that needs spatial intelligence has built its own shadow of reality: BIM for buildings, GIS for geography, CityGML for urban planning, FHIR for clinical environments, IFC for construction. Each is a domain-specific projection — an interpretation of reality shaped by the concerns of the community that created it. We acknowledge that sensor-captured data is itself an interpretation — photons measured by a multispectral camera carry the camera's spectral response function, not unmediated reality. Nevertheless, the scene creation pipeline proposed here works precisely because it starts not from any domain's interpretation but from physics-based reality itself: photons captured by sensors, reconstructed into geometry, classified by material properties, and validated against electromagnetic measurements. It begins, to borrow Plato's metaphor, from the cave itself rather than from any particular set of shadows cast upon its walls. This is what gives the scene its power as a boundary object: it is not aligned with any single domain's ontology, and therefore it can serve all of them.

This paper is a position paper, not an empirical study. It does not report experimental results from an implemented pipeline. Rather, it proposes a theoretical framework for understanding *why* automated scene creation matters beyond the RF domain, drawing on established concepts from science and technology studies, information systems, and telecommunications engineering. The pipeline described — drone capture, Gaussian splatting, semantic segmentation, mesh extraction, RF ray tracing — is technically feasible based on published components (Sections 3–4), but its integrated realisation remains a research objective, not a demonstrated capability.

## 2. Theoretical Framework: Boundary Objects, Translation, and Weak Ties

### 2.1 Boundary Objects and Interpretive Flexibility

Star and Griesemer (1989) introduced the concept of *boundary objects* to explain how scientific work succeeds across heterogeneous social worlds without requiring consensus. Boundary objects are "objects which are both plastic enough to adapt to local needs and constraints of the several parties employing them, yet robust enough to maintain a common identity across sites" (p. 393). They identified four types: *repositories* (ordered collections), *ideal types* (abstracted, vaguely agreed-upon descriptions), *coincident boundaries* (common objects with different internal contents depending on the community), and *standardised forms* (methods of common communication). We note that the concept has attracted criticism for being applied too loosely; Star (2010) herself cautioned against the inflation of the term into a vague synonym for any shared artefact, a concern we take seriously by grounding our use in the specific *coincident boundary* type rather than invoking the concept generically.

We propose that a semantically segmented 3D scene — a georeferenced mesh with assigned material properties and dielectric constants — functions primarily as a *coincident boundary* object: it has the same spatial extent and geometric identity for all communities that use it, but its internal meaning varies by professional context. The RF engineer reads dielectric properties and signal paths. The structural engineer reads load-bearing walls and damage assessment. The humanitarian logistics planner reads access routes and building occupancy potential. The scene's *interpretive flexibility* (Pinch & Bijker, 1984) — the capacity of different groups to interpret it differently — is what makes it valuable across domains, not despite this multiplicity but because of it.

Bowker and Star (1999) extended this analysis to *boundary infrastructure*: classification systems that become invisible precisely because they work. The material classification ontology embedded in the scene (concrete, brick, glass, vegetation, metal — each mapped to ITU-R P.2040-3 dielectric parameters) functions as such an infrastructure: it is "boring" and invisible when working correctly, yet fundamentally shapes what each community can do with the scene. When the classification is wrong — when wet concrete is labelled as dry brick, for instance — the RF prediction fails, but so does the structural assessment and the environmental model. The shared dependence on classification accuracy creates what Bowker and Star termed *convergence*: the boundary infrastructure becomes a site where different communities' concerns align, even when their purposes diverge.

### 2.2 Actor-Network Theory: Translation and Obligatory Passage Points

Latour's Actor-Network Theory (Latour, 1987; 2005; Callon, 1986) offers a complementary lens. ANT insists that non-human actors — instruments, artefacts, algorithms — have agency in constituting sociotechnical networks. In the scene creation pipeline, the Gaussian splatting algorithm (Kerbl et al., 2023) is not a passive tool; it *translates* the drone-captured point cloud into a representation that enables subsequent actors (semantic segmentation networks, mesh extractors, ray tracers) to act. Each stage is, in Callon's (1986) terminology, a *moment of translation*:

1. **Problematisation**: The scene creation bottleneck is identified as the shared obstacle. The collaborating researcher framed it: "Really, it's all going to be about the scene creation pipeline."
2. **Interessement**: The research laboratory, WINNIIO, and the Ukrainian field partners are enrolled around the scene as a shared goal, each with different interests (RF validation, interoperability methodology, reconstruction assessment) but converging on the same artefact.
3. **Enrolment**: The automated pipeline becomes the proposed mechanism through which all actors participate — The laboratory provides RF expertise, WINNIIO provides the SMILE methodology and interoperability framework, Ukrainian partners provide field access and calibration data.
4. **Mobilisation**: The scene, once created, *speaks for* the physical environment in contexts far removed from the drone survey — in the laboratory's controlled test environment, in EU evaluation committees, in municipal reconstruction planning offices.

The automated scene creation pipeline thus functions as an *obligatory passage point* (Callon, 1986): all actors who wish to achieve their goals (RF validation, reconstruction assessment, connectivity planning) must pass through the shared scene. This structural position gives the scene its power as a boundary object — and explains why its automation is not merely an efficiency improvement but a reconfiguration of the entire actor-network.

### 2.3 Granovetter and the Strength of Weak Ties in Knowledge Networks

Granovetter's (1973) strength of weak ties thesis demonstrated that novel information — job opportunities, innovative ideas — flows disproportionately through *weak ties*: connections between people in different social circles, rather than through the strong ties within close-knit groups. Hansen (1999) extended this to knowledge transfer in organisations, showing that weak ties are effective for *searching* for knowledge but strong ties are necessary for *transferring* complex knowledge.

We propose a material extension of Granovetter's framework: boundary objects can *create* weak ties between communities that have no pre-existing social connection. The Ukrainian reconstruction planner and the telecommunications RF engineer attend no common conferences, share no professional networks, and speak no common technical language. Yet the semantically segmented scene creates a structural bridge — a *material weak tie* — between their knowledge domains. The scene does not merely flow through existing ties; it *constitutes* a tie that did not previously exist.

This is significant because the value of the scene increases with the *heterogeneity* of the communities it connects. A scene that serves only RF engineers is a simulation input. A scene that simultaneously serves RF engineers, structural engineers, urban planners, and humanitarian logistics — each reading different information from the same artefact — is a *knowledge multiplier*. Its value is not the sum but the product of its connections.

However, following Hansen (1999), we must acknowledge a limitation: weak ties enable search but not transfer of complex, tacit knowledge. The RF engineer's expertise in interpreting propagation patterns, or the structural engineer's ability to assess damage from visual cues, cannot be encoded in the scene itself. The scene enables discovery ("there is relevant information here for me") but the deep expertise required to act on that information remains with the human actors. This is consistent with the SMILE methodology's emphasis on human actors as irreplaceable participants in the intelligence loop (Section 5).

## 3. The Pipeline: From Point Cloud to Physics-Informed Scene

The proposed automated scene creation pipeline consists of five stages. Each stage draws on published research, though their integration into a single automated workflow remains an open engineering challenge.

### 3.1 Drone Capture and Point Cloud Generation

Photogrammetric reconstruction from drone-mounted cameras produces dense point clouds of urban and rural environments. The accuracy depends on flight parameters (altitude, overlap, GSD — ground sampling distance) and environmental conditions. Nex and Remondino (2014) provide a comprehensive review of UAV photogrammetric workflows, reporting geometric accuracies of 1–3 GSD (typically 2–10 cm) for dense point clouds generated from multi-view stereo reconstruction, which is well within the 10–30 cm range sufficient for RF simulation purposes.

### 3.2 Gaussian Splatting

Kerbl et al. (2023) introduced 3D Gaussian Splatting (3DGS), representing scenes as collections of anisotropic 3D Gaussians that enable real-time rendering at 1080p. The method achieves state-of-the-art visual quality with training times of minutes rather than hours. For scene creation, 3DGS provides a continuous, differentiable representation of the environment that supports downstream processing — but, critically, does not directly produce geometry suitable for ray tracing.

### 3.3 Mesh Extraction (Open Research Challenge)

Extracting watertight, topologically clean meshes from Gaussian splat representations is a non-trivial and actively researched problem. The fundamental challenge, as identified in a recent survey (Chen, Wang, & Gao, 2025), is "the lack of geometry hints to regulate the optimization of millions of unorganized Gaussian blobs to align to the true surface." Current approaches include:

- **SuGaR** (Guédon & Lepetit, CVPR 2024): surface-aligned Gaussian splatting with regularisation for mesh extraction
- **GS2Mesh** (Wolf et al., 2024): stereo rendering from Gaussian splats followed by multi-view stereo fusion
- **MILo** (2025): mesh-in-the-loop optimisation that integrates mesh extraction directly into the Gaussian splatting training loop

None of these methods yet produce meshes of sufficient quality for RF ray tracing without significant post-processing. This stage represents the primary technical risk in the proposed pipeline.

### 3.4 Semantic Segmentation and Material Classification

Given a mesh (or, alternatively, operating directly on the Gaussian splat representation), semantic segmentation assigns material labels — concrete, brick, glass, vegetation, metal, water — to scene elements. Recent work by Zhang et al. (CVPR 2024) on aerial lifting demonstrates neural urban semantic segmentation from drone imagery. For RF applications, visual material classification must be mapped to electromagnetic properties following ITU-R P.2040-3 (2023), which provides dielectric constant and conductivity values for common building materials across frequencies from 1 GHz to 100 GHz.

This mapping is a significant open challenge. Visual appearance is an imperfect proxy for electromagnetic properties: different concrete mixes appear similar but exhibit different dielectric constants (ranging from 5.0 to 7.0 at 1 GHz per ITU-R P.2040-3). Environmental conditions (moisture content, temperature, age) further modulate properties. The pipeline must therefore treat material classification as probabilistic, propagating uncertainty through to the RF prediction stage.

### 3.5 RF Ray Tracing and Sionna

Given a mesh with assigned material properties, deterministic ray tracing computes signal propagation through reflection, diffraction, and scattering. NVIDIA's Sionna (Hoydis et al., 2023) — an open-source, GPU-accelerated, differentiable link-level simulator — is the most directly relevant tool in this space. Sionna's ray tracing module operates on triangulated meshes with material properties, computes propagation paths including reflections and diffractions, and — critically — is differentiable, meaning gradients can flow back through the propagation simulation to the scene parameters. This differentiability opens the possibility of end-to-end optimisation: calibration measurements could, in principle, refine not only the ray tracing parameters but also the material classifications and even geometric details of the scene itself. In the proposed pipeline, Sionna would serve as the ray tracing engine within the validation loop, though other deterministic solvers (e.g., Altair WinProp, Ranplan) could substitute depending on licensing and computational constraints.

The validation gap identified by the collaborating researcher — "there are some things marketed as machine learning based coverage map prediction, but none of it is validated" — motivates the two-stage approach discussed in Section 1: high-fidelity validation in a controlled environment (Cambridge), followed by phone-based calibration in the field (Kharkiv). Our project target is prediction accuracy of ≤6 dB RMSE, which would represent a meaningful improvement over the 8–12 dB RMSE commonly reported in site-specific ray tracing validation studies (Degli-Esposti et al., 2007). Achieving this will require both geometric scene accuracy and correct material parameterisation — underscoring why scene creation, not the ray tracer itself, is the primary research challenge.

[Figure descriptions provided; figures to be produced for journal submission.]

*Figure 1: Five-stage pipeline architecture — Drone Capture, Gaussian Splatting, Mesh Extraction, Semantic Segmentation / Material Classification, RF Ray Tracing (Sionna), with feedback loops for calibration. Each stage annotated with key references and open challenges.*

*Figure 2: The scene as boundary object — the same 3D mesh at centre, with four quadrants showing how RF engineers, structural engineers, urban planners, and humanitarian logistics each read different properties from the same artefact.*

## 4. Proposed Intelligence Progression: LLMs → LQMs → SQMs

We propose — and wish to be explicit that this is a novel taxonomy, not established terminology — a three-stage progression in the types of intelligence applicable to spatial digital twins:

**Large Language Models (LLMs)** — Statistical models trained on text corpora. Their strength is linguistic fluency and general reasoning; their limitation is physical reality. An LLM cannot compute the dielectric constant of wet concrete at 28 GHz from first principles. It can retrieve approximate values from training data or hallucinate plausible ones, but it cannot simulate the electromagnetic interaction. As the collaborating researcher noted regarding ML coverage predictions: "I can get a coverage map plot out, but it's kind of meaningless" without physics-based validation.

**Large Quantitative Models (LQMs)** — Physics-based computational engines that simulate reality through equations, not correlations. Deterministic ray tracing through a geometrically and materially accurate scene is an LQM operation. The distinction from LLMs is epistemological: LQMs compute from causal mechanisms (Maxwell's equations, material physics), not from statistical patterns. The term "Large Quantitative Model" is our proposed counterpart to "Large Language Model," emphasising that the frontier of useful AI extends beyond language into quantitative simulation.

**Small Quantitative Models (SQMs)** — Compact, edge-deployable physics models calibrated for specific contexts. When the collaborating researcher described using mobile phones to calibrate RF models in Kharkiv — "we give you the phones with the software stack... taken around some areas of Kharkiv just to give us some reference points which we can then use to calibrate our model outputs for that specific location" — he was describing an SQM deployment pattern. The global LQM (the laboratory's full ray tracing engine) produces a calibrated local SQM that runs on phones, drones, or edge devices. This is analogous to model distillation in machine learning (Hinton et al., 2015), but applied to physics simulations rather than neural networks.

This progression parallels trends in edge computing and data sovereignty: SQMs keep computation and data local, reducing latency and maintaining privacy — critical for post-conflict environments where data sensitivity is high.

## 5. SMILE: From NASA JPL to Spatial Scene Intelligence

The SMILE methodology — Sustainable Methodology for Impact Lifecycle Enablement (Waern, 2025a; 2025b) — evolved from NASA JPL's systems engineering approach for space missions, adapted through a decade of cross-vertical digital twin deployments in buildings (VÖFAB/Växjö, Sweden), manufacturing (Traton Group), and biological systems (EquestRai, Australia). Its core principle — *impact first, data last* — inverts the typical technology-push approach, following the inverted pyramid: Outcome → Action → Insight → Information → Data.

SMILE's six concentric phases map onto the scene creation pipeline:

1. **Reality Emulation** — The drone survey establishes a shared reality canvas. All stakeholders observe the same physical environment, virtually. This phase establishes the coincident boundary (Section 2.1).
2. **Concurrent Engineering** — Gaussian splatting and semantic segmentation define scope: which areas, which materials, which frequencies. The *Minimal Viable Twin* (MVT) is a single scene with material classification sufficient for basic RF ray tracing.
3. **Collective Intelligence** — Calibration data from mobile phones adds ground truth. The Cambridge validation site provides high-fidelity reference data. Knowledge flows bidirectionally, validating the boundary object's classifications against physical measurements.
4. **Contextual Intelligence** — The scene becomes queryable: "Where is there coverage? Where are the structural risks? Where should we deploy connectivity?" Real-time decisions emerge from the indexed reality.
5. **Continuous Intelligence** — SQMs run autonomously, updating as new drone passes or phone measurements arrive. The scene evolves with reality.
6. **Perpetual Wisdom** — If one calibrated scene template represents the majority of similar environments, the model becomes a transferable knowledge asset. As discussed in the source conversation: "If you can do this in one scene that represents 95% of these villages, you're basically indexing reality."

This final phase connects directly to Ward and Daniel's (2012) benefits-driven approach: the value of the pipeline is measured not by technical sophistication but by the breadth of benefits it enables across stakeholder communities.

## 6. MIMs: Interoperability Grammar for Spatial Scenes

The Minimal Interoperability Mechanisms (MIMs) framework, standardised through OASC and referenced in ITU-T Y.4505, provides structured interoperability requirements for digital twin ecosystems. We map the ten MIMs to the scene creation context, acknowledging that some mappings are stronger than others:

| MIM | Domain | Scene Creation Relevance | Strength of Fit |
|-----|--------|--------------------------|----------------|
| MIM1: Context Information Management | NGSI-LD, context brokers | Scene elements as context entities with spatial, temporal, and material attributes | Strong |
| MIM2: Data Models | SAREF, DTDL | Material classification ontology as machine-readable entity definitions | Strong |
| MIM3: Ecosystem Transactions | Marketplace APIs | One validated scene template reusable across environments — the "knowledge fabric" | Moderate |
| MIM4: Personal Data Management | MyData, GDPR | Relevant where scenes contain identifiable structures; less central to RF application | Weak |
| MIM5: Fair AI | Algorithmic transparency | Explainable material classification (why "wet concrete" vs "dry brick"?) and RF prediction confidence | Moderate |
| MIM6: Security Management | Cyber risk, zero trust | Critical for post-conflict spatial data; validated through Q-SMART testbed (DTC, 2025) | Strong |
| MIM7: Geospatial Information | INSPIRE | Every voxel georeferenced; spatial data infrastructure compliance | Strong |
| MIM8: Measurable Societal Objectives | SDG alignment | Coverage restoration, structural safety, reconstruction priority — all measurable from scene | Strong |
| MIM9: Complex Data Model Interoperability | Cross-domain analytics | RF + structural + environmental in a single queryable model — the core value proposition | Strong |
| MIM10: Resource Management | Circular economy | Reuse, extend, federate scenes across deployments | Moderate |

## 7. NUDEDA: From Enabler to Autonomous-by-Design

### 7.1 Theoretical Lineage

Ward and Daniel (2012) established that IT investments should be driven by measurable business benefits, not technological capability. Their benefits management framework — identifying, planning, realising, and reviewing benefits — remains foundational in information systems. Pessi and Magoulas (2012), working within the University of Gothenburg informatics tradition, proposed the *Five Models* framework: Strategy, Structure, Process, People, and Technology interact in complex organisations, and alignment between them determines whether IT investments deliver value.

The Five Models framework treats technology as one of five co-equal dimensions. The implicit assumption — shared with most IS frameworks including TOGAF ADM (The Open Group, 2018) and Weill and Ross's (2004) IT governance archetypes — is that technology *supports* organisational goals. We propose that this assumption, while historically appropriate, is becoming insufficient for organisations whose primary activity is the creation and management of digital twins.

### 7.2 Three Stages of Organisational Technology Integration

We propose three stages of organisational technology integration, presented as a conceptual framework requiring empirical validation. To make the stages concrete, we illustrate each with reference to the scene creation pipeline.

**NUDE** (Pessi and Magoulas' framework, applied): Technology is an *enabler* — a tool that supports organisational strategy, structure, and processes. Most organisations operate here. In NUDE mode, the scene creation pipeline is a project: funded, staffed, delivered, closed. A municipality commissions a drone survey of a damaged district, receives a 3D model, uses it for one planning cycle, and archives it. Technology serves the organisation.

**NUDED** (proposed extension — Digital DNA): Technology is not merely an enabler but is *constitutive* of the organisation's identity and capabilities. The "D" for Digital DNA recognises that in a world of digital twins, AI agents, and spatial intelligence, the technology IS the operating system of the organisation, not an adjunct to it. In NUDED mode, the same municipality embeds the scene into its operational infrastructure: building permits reference the digital twin, connectivity planning queries it in real time, structural inspections update it continuously. The Q-SMART testbed (Digital Twin Consortium, 2025) — a self-learning heating system deployed on edge devices — illustrates this: the system does not *use* digital twins; it *is* a digital twin. Organisation and technology are ontologically inseparable.

**NUDEDA** (proposed further extension — Autonomous): The organisation is autonomous by design — not in the narrow sense of removing human oversight, but in the sense that the system continues to learn, adapt, and improve within human-defined governance boundaries. In NUDEDA mode, the scene creation pipeline is not a project but a perpetual process: drones survey, scenes update, SQMs recalibrate, coverage maps refresh — all within ethical and operational guardrails. This connects to Floridi et al.'s (2018) principle of *explicability* in AI governance: autonomous systems must be both *intelligible* (how do they work?) and *accountable* (who is responsible when they err?).

We acknowledge several limitations of this framework. First, it is not empirically grounded — we have not conducted case studies or surveys to validate the stages. Second, we have not systematically compared NUDEDA to existing maturity models (CMMI, Gartner's digital twin maturity model, ISO/IEC 33001). Third, the framework's applicability beyond digital twin organisations is unclear. We present it as a conceptual contribution for discussion, not as a validated theory.

### 7.3 Mapping to SMILE Phases

We observe — speculatively — a correspondence between NUDEDA stages and SMILE phases:

- SMILE Phases 1–2 (Reality Emulation, Concurrent Engineering) correspond to **NUDE**: technology enables stakeholders to perceive and plan.
- SMILE Phases 3–4 (Collective Intelligence, Contextual Intelligence) correspond to **NUDED**: technology becomes inseparable from how the organisation senses and decides.
- SMILE Phases 5–6 (Continuous Intelligence, Perpetual Wisdom) correspond to **NUDEDA**: the system learns and evolves autonomously within governed boundaries.

This mapping requires further investigation. We present it as a hypothesis, not a finding.

## 8. Physical AI Embodiment and the Fabric Vision

The collaboration surfaced a concrete example of physical AI embodiment: deployable connectivity units developed by a major telecommunications vendor — autonomous deployable base stations that can provide temporary coverage in areas where infrastructure is damaged or absent. Combined with the RF digital twin, these represent a closed loop: the scene identifies coverage gaps, the SQM predicts optimal deployment positions, and the physical agent executes.

In Kharkiv Oblast, where an estimated 15–20% of base stations are offline and over 6,000 buildings are damaged (OCHA Ukraine Situation Reports, 2024), the ability to rapidly assess both structural and connectivity conditions from a single drone survey represents a significant capability for reconstruction planning. The dual output — structural assessment and RF coverage map — from a single drone pass is the practical instantiation of the boundary object described in Section 2.

Coverage at altitude introduces a third dimension to traditionally 2D coverage analysis. 3GPP TR 36.777 (2017) documents the challenges of aerial UE (user equipment) coverage, and FCC studies (TAC Report on UAS and Spectrum, 2020) indicate significant coverage degradation at altitude. As urban air mobility develops and 3D coverage volumes become operationally necessary, the volumetric scene representation described in this paper — queryable at any point in three-dimensional space — will provide the spatial substrate that 2D coverage maps cannot.

As the author stated during the collaboration discussion: "We're indexing reality... creating a queryable knowledge fabric that people would understand and then also other systems." This "indexing reality" vision positions the scene not as a model of one place at one time, but as a node in a growing spatial knowledge graph — each node enriching the global model, each enrichment reducing the effort required for subsequent scenes through transfer learning and template reuse.

[Figure descriptions provided; figures to be produced for journal submission.]

*Figure 3: The "indexing reality" concept — a network of scene nodes across multiple locations, connected by shared material ontologies and calibrated SQMs, forming a spatial knowledge fabric. Illustrates how knowledge from one validated scene transfers to new environments.*

## 9. Conclusion

This paper has argued that automated spatial scene creation constitutes a boundary object of significant theoretical and practical interest. The core insight — that the scene, not the RF model, is the primary deliverable — reframes how digital twin projects should be scoped, funded, and evaluated.

We have drawn on Actor-Network Theory (particularly Callon's moments of translation), Star and Griesemer's boundary objects (specifically the coincident boundary type), Granovetter's strength of weak ties (extended to material connections between communities), and Ward and Daniel / Pessi and Magoulas' benefits-driven frameworks (extended through the proposed NUDEDA progression). We have proposed the LLM → LQM → SQM taxonomy as a way to understand the intelligence requirements of spatial digital twins, and mapped the SMILE methodology and MIMs framework to the scene creation pipeline.

The principal limitations of this paper are: (1) it is a conceptual framework paper, not an empirical study; (2) the proposed pipeline has not been implemented as an integrated system; (3) the NUDEDA framework and LQM/SQM taxonomy are proposed terminology requiring community discussion and empirical validation; (4) the theoretical frameworks are applied at a survey level rather than deep analytical engagement.

Future work should prioritise: proof-of-concept implementation of at least one scene through the full pipeline; quantitative comparison of automated vs. manual scene creation; empirical case studies of NUDEDA stage transitions in digital twin organisations; and community discussion of the LQM/SQM taxonomy within both the physics simulation and AI/ML communities.

The scene is the deliverable. The RF is the proof. The fabric is the platform.

---

## References

Bowker, G. C., & Star, S. L. (1999). *Sorting Things Out: Classification and Its Consequences*. MIT Press.

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, Action and Belief* (pp. 196–233). Routledge.

Chen, Y., Wang, Z., & Gao, H. (2025). A survey on surface reconstruction based on 3D Gaussian splatting. *Frontiers in Computer Science*.

Degli-Esposti, V., Fuschini, F., Vitucci, E. M., & Falciasecca, G. (2007). Measurement and modelling of scattering from buildings. *IEEE Transactions on Antennas and Propagation*, 55(1), 143–153.

Digital Twin Consortium. (2025). Digital Twin Consortium Adds Eight New Testbeds [Press release]. https://www.globenewswire.com/news-release/2025/09/16/3150899/0/en/

FCC Technology Advisory Council. (2020). Report on UAS and Spectrum.

Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People — An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. *Minds and Machines*, 28(4), 689–707.

Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology*, 78(6), 1360–1380.

Guédon, A., & Lepetit, V. (2024). SuGaR: Surface-Aligned Gaussian Splatting for Efficient 3D Mesh Reconstruction and High-Quality Mesh Rendering. *Proceedings of CVPR 2024*.

Hansen, M. T. (1999). The search-transfer problem: The role of weak ties in sharing knowledge across organization subunits. *Administrative Science Quarterly*, 44(1), 82–111.

Hinton, G., Vinyals, O., & Dean, J. (2015). Distilling the knowledge in a neural network. *arXiv preprint arXiv:1503.02531*.

Hoydis, J., Cammerer, S., Ait Aoudia, F., et al. (2023). Sionna: An Open-Source Library for Next-Generation Physical Layer Research. *IEEE Communications Magazine*, 61(3), 52–58.

ITU-R. (2023). Recommendation ITU-R P.2040-3: Effects of building materials and structures on radiowave propagation above about 100 MHz. International Telecommunication Union.

Kerbl, B., Kopanas, G., Leimkühler, T., & Drettakis, G. (2023). 3D Gaussian Splatting for Real-Time Radiance Field Rendering. *ACM Transactions on Graphics*, 42(4).

Latour, B. (1987). *Science in Action: How to Follow Scientists and Engineers through Society*. Harvard University Press.

Latour, B. (2005). *Reassembling the Social: An Introduction to Actor-Network-Theory*. Oxford University Press.

Nex, F., & Remondino, F. (2014). UAV for 3D mapping applications: A review. *Applied Geomatics*, 6(1), 1–15.

OASC. (2023). Minimal Interoperability Mechanisms (MIMs). Open & Agile Smart Cities. https://oascities.org/minimal-interoperability-mechanisms/

OCHA. (2024). Ukraine: Humanitarian Situation Reports. United Nations Office for the Coordination of Humanitarian Affairs.

Pessi, K., & Magoulas, T. (2012). Five Models for alignment and IT governance. University of Gothenburg, Department of Applied IT.

Pinch, T. J., & Bijker, W. E. (1984). The social construction of facts and artefacts. *Social Studies of Science*, 14(3), 399–441.

Star, S. L. (2010). This is Not a Boundary Object: Reflections on the Origin of a Concept. *Science, Technology, & Human Values*, 35(5), 601–617.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, 19(3), 387–420.

The Open Group. (2018). *TOGAF Standard, Version 9.2*. The Open Group.

3GPP. (2017). TR 36.777: Study on Enhanced LTE Support for Aerial Vehicles.

3GPP. (2019). TR 38.901: Study on channel model for frequencies from 0.5 to 100 GHz.

Waern, N. (2025a). From One Room to Fifty: Orchestrating Explainable AI, Resilience, and Contextual Interoperability in the Built Environment. DOI: 10.5281/zenodo.17462962.

Waern, N. (2025b). Beyond the Shadows — Contextual Awakening, Federated Learning, and the Realization of Reality through Digital Twins. DOI: 10.5281/zenodo.19587944.

Ward, J., & Daniel, E. (2012). *Benefits Management: How to Increase the Business Value of Your IT Projects* (2nd ed.). Wiley.

Weill, P., & Ross, J. W. (2004). *IT Governance: How Top Performers Manage IT Decision Rights for Superior Results*. Harvard Business Press.

MILo. (2025). Mesh-In-the-Loop Gaussian Splatting. *arXiv preprint*.

Wolf, L., Bracha, A., & Kimmel, R. (2024). GS2Mesh: Surface Reconstruction from Gaussian Splatting via Novel Stereo Views. *arXiv preprint*.

Zhang, Q., et al. (2024). Aerial Lifting: Neural Urban Semantic and Building Instance Lifting from Aerial Images. *Proceedings of CVPR 2024*.

---

## Funding Acknowledgement

This conceptual work was informed by research funded by the Swedish Energy Agency (Grant 2023-203019: "Verification, Further Development and Upscaling of Smart Heating Systems") and prepared in the context of WINNIIO AB's participation in a proposal submitted under Horizon Europe call HORIZON-CL4-2026-04-HUMAN-01 (Virtual Worlds and Web 4.0 Partnership).

---

## Disclosure

This is a position paper reflecting the author's conceptual framework. The pipeline described herein is a research proposal, not an implemented system. Quotes attributed to the collaborating researcher are from a recorded working conversation (April 13, 2026) and are included with awareness of the collaborative context.

---

*Corresponding author: Nicolas Waern, ceo@winniio.io, WINNIIO AB, Stampgatan 54d, 411 01 Gothenburg, Sweden.*
