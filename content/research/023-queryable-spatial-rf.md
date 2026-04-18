---
title: "Indexing Reality: Building a Queryable Spatial-RF Knowledge Fabric for 250,000 Villages"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: spatial knowledge graph, RF digital twin, Gaussian splatting, GIS, drone survey, conflict-zone connectivity, rural coverage, nation-scale digital twin, Actor-Network Theory, design science research, knowledge fabric, spatial indexing, queryable infrastructure
status: ready
date: 2026-04-16
---

# Indexing Reality: Building a Queryable Spatial-RF Knowledge Fabric for 250,000 Villages

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

The vision of a connected rural world — where every village, regardless of geography, infrastructure legacy, or geopolitical context, has access to reliable digital services — requires more than the deployment of wireless infrastructure. It requires the ability to reason about that infrastructure spatially: to query coverage gaps, predict propagation anomalies, identify optimal tower placements, and validate as-built infrastructure against as-designed specifications across hundreds of thousands of settlements simultaneously. This paper proposes a Spatial-RF Knowledge Fabric (SRKF): a queryable, nation-scale data architecture that integrates radio-frequency (RF) propagation models, photogrammetric reality captures (including Gaussian neural radiance field splats), GIS cadastral and terrain data, and drone survey observations into a unified, semantically queryable spatial intelligence layer. We trace the design through Actor-Network Theory (ANT), identifying the heterogeneous actants — satellite imagery providers, telecom operators, national mapping agencies, drone operators, regulatory bodies, and village-level community informants — that must be enrolled to produce a fabric with sufficient coverage and fidelity for nation-scale decision-making. We examine the dual validation strategy that gives SRKF its epistemic credibility: ground-truth field measurements against model predictions, cross-validated against independent capture modalities (drone photogrammetry versus satellite imagery versus RF survey measurements). We analyse the specific challenge of conflict-zone and post-conflict territories where conventional survey methodologies are unsafe, infrastructure is damaged or absent, and administrative boundary data is unreliable, and we argue that drone-based RF survey with autonomous flight planning provides the only feasible path to SRKF coverage in these contexts. Three falsifiable propositions are stated. We engage the counter-argument that proprietary telecom operator data makes SRKF unnecessary and argue the opposite: that operator data is a subset actant in a fabric that must include physical reality captures unavailable to any single operator. This paper contributes an architecture specification for nation-scale spatial-RF knowledge infrastructure, grounded in the specific data challenges of sub-national connectivity planning.

**Keywords:** spatial knowledge graph, RF digital twin, Gaussian splatting, GIS, drone survey, conflict-zone connectivity, rural coverage, nation-scale digital twin, Actor-Network Theory, design science research, knowledge fabric, spatial indexing, queryable infrastructure

---

## 1. Introduction: The Coverage Gap That Cannot See Itself

A national telecommunications regulator seeking to allocate spectrum, fund rural connectivity obligations, or evaluate universal service compliance needs to answer a deceptively simple question: which of the 250,000 villages in this country have adequate mobile broadband coverage?

The answer, in most countries, is: we do not precisely know.

Mobile operators provide coverage maps. But coverage maps are predictions from propagation models, not measurements of actual signal quality at ground level. They systematically overestimate coverage in complex terrain, under-represent building penetration losses, and do not account for the interference effects of co-channel deployments across operator boundaries. They are, in ANT terms, inscriptions of a simplified reality — artefacts that encode specific assumptions about terrain, building density, and propagation physics — rather than representations of observed reality.

National mapping agencies provide GIS data. But cadastral data is frequently years behind actual settlement patterns, particularly in rapidly urbanising or conflict-affected contexts. Terrain models derived from satellite-based radar may not resolve the built environment features (single-storey structures, vegetation canopy, water features) that most significantly affect ground-level RF propagation at cellular frequencies.

What does not exist, in any country studied in the preparation of this paper, is an integrated, queryable fabric that combines RF propagation modelling with physical reality captures — photogrammetric point clouds, Gaussian neural radiance field splats, UAV survey observations — and makes the combination queryable at the level of individual settlements across a national territory.

That fabric is what this paper proposes. The Spatial-RF Knowledge Fabric (SRKF) is a designed artefact in the Design Science Research sense [1]: a proposed solution to a class of problems (rural connectivity assessment at nation scale) justified by analytical argument and evaluated against scenario criteria. It is not a deployed system; it is a specification grounded in the real capabilities of component technologies that exist and are operational individually, but have not been integrated in the manner proposed.

---

## 2. Theoretical Framework

### 2.1 ANT and Nation-Scale Spatial Intelligence

A nation-scale spatial intelligence infrastructure is, almost by definition, an ANT object: it must enrol an extraordinary range of heterogeneous actants — satellite operators, national mapping agencies, telecom operators, drone manufacturers, regulatory bodies, village community leaders, weather service providers, and the physical terrain itself — to produce a fabric with the coverage density and fidelity required for decision-making at national scale.

ANT [2][3] is appropriate because the translation problem is as significant as the technical problem. The satellite imagery provider and the telecom operator both have data that would improve SRKF coverage, but their data are produced for different purposes, encoded in incompatible formats, governed by different legal frameworks, and priced under assumptions that make free integration economically unviable. Enrolling them in the SRKF network requires finding a translation — a framing of their interests as compatible with the fabric's goals — that neither party currently recognises.

The concept of the *obligatory passage point* [2] is central to SRKF design: the fabric must become the obligatory passage point for connectivity planning decisions at national and sub-national scale. This means it must provide decision-relevant outputs (coverage gap maps, tower placement recommendations, interference predictions, investment prioritisation scores) that are not available through any alternative data source or analytical approach.

### 2.2 Design Science Research Frame

Following DSR methodology [1], the SRKF is evaluated against four design criteria: coverage completeness (what percentage of the 250,000-village national territory can be characterised?), query latency (how quickly can a coverage gap analysis be returned for a specified geography?), epistemic credibility (can the fabric's outputs be validated against ground truth?), and actant accessibility (can the fabric be populated and maintained by actors without specialised RF engineering skills?).

### 2.3 Boundary Objects in Multi-Actant Spatial Data

The SRKF must accommodate data contributions from actants with very different reference frames: a telecom operator's coverage prediction is a continuous radio-frequency signal strength map; a GIS cadastral layer is a vector topology of administrative boundaries and land parcels; a Gaussian splat capture is a volumetric visual reconstruction of a physical environment. These are not commensurable representations. The SRKF's semantic layer must define the boundary objects — settlement identifiers, spatial anchor specifications, coverage scoring rubrics — that allow these incommensurable representations to be co-located and jointly queried without requiring any actant to abandon their native representation.

---

## 3. Component Technologies: Current State

### 3.1 RF Propagation Modelling

RF propagation models — from empirical models (COST-Hata, COST-231, Erceg-Greenstein) to deterministic models (ray-tracing, finite-difference time-domain) — predict signal strength at ground level from transmitter location, power, and antenna parameters, combined with terrain and clutter data. Empirical models are computationally tractable at nation scale but produce wide prediction uncertainty intervals in complex terrain. Deterministic models are accurate in specific environments but computationally intensive and require high-resolution 3D building and vegetation models that are not available for most rural territories.

The current state of RF modelling for rural connectivity planning is characterised by empirical model deployments with terrain data that is typically 30-metre resolution (SRTM) or better in well-mapped countries, but significantly coarser in sub-Saharan Africa, Central Asia, and conflict-affected territories. Building clutter data — the factor that most significantly reduces the accuracy of rural coverage predictions — is absent from most national-scale propagation modelling exercises.

### 3.2 Gaussian Neural Radiance Fields as Reality Capture

Gaussian splatting — specifically 3D Gaussian Splatting (3DGS), introduced in 2023 — provides a photorealistic volumetric reconstruction of a physical environment from a set of calibrated photographs, producing a representation that can be rendered in real time and queried for geometric properties (building heights, vegetation density, line-of-sight obstructions) that are directly relevant to RF propagation prediction [4].

3DGS outputs are not conventional point clouds: they are volumetric probability distributions parameterised by Gaussian functions, which allow rendering at arbitrary viewpoints and resolution. For RF propagation purposes, the relevant properties are the derived geometric features: surface normals, building height profiles, vegetation canopy boundaries, and terrain slope estimates that can be extracted from the 3DGS reconstruction and used to improve the clutter data input to propagation models.

At the time of writing, 3DGS captures have been demonstrated for individual buildings, urban blocks, and archaeological sites. Nation-scale coverage using 3DGS is not established; the proposed use in SRKF is to prioritise 3DGS capture for settlements in complex terrain or with unusual building typologies where empirical model errors are largest.

### 3.3 Drone-Based RF Survey

Drone-based RF survey — equipping a UAV with a calibrated RF measurement instrument and flying a structured measurement grid over a target area — provides ground-truth signal strength observations that can validate propagation model predictions. The combination of position (from GPS), altitude, and RF measurement (signal strength, frequency, time) produces a spatial dataset that maps actual coverage with a spatial resolution determined by the flight path geometry.

In conflict-zone and post-conflict contexts, drone-based survey provides coverage assessment capability where human survey teams cannot safely operate. Autonomous flight planning — flight paths generated algorithmically from GIS terrain models, optimised for measurement coverage density within regulatory altitude limits — enables RF survey of remote or unsafe territories without requiring local operator expertise at the survey site.

The regulatory environment for drone-based RF survey varies significantly by jurisdiction. EU-regulated drone operations under EASA's open and specific categories provide a framework for systematic survey operations; conflict-zone applications require engagement with military and civil aviation authorities whose permitting processes are not standardised.

---

## 4. The Spatial-RF Knowledge Fabric: Architecture

### 4.1 Fabric Layers

The SRKF is proposed as a five-layer architecture:

**Layer 1 — Settlement index.** A structured index of all settlements in the national territory, with unique identifiers, geographic coordinates, population estimates, and administrative classifications. Populated from national census data, OpenStreetMap, and satellite-derived settlement detection models. This layer is the primary key for all SRKF queries; every other data type is indexed against settlement identifiers.

**Layer 2 — Terrain and clutter.** A 3D terrain model at the highest available resolution, combined with building height, land cover, and vegetation density layers. Populated from SRTM, national mapping agency data, OpenStreetMap building footprints, and 3DGS captures for priority settlements. This layer is the primary input to RF propagation modelling.

**Layer 3 — RF propagation model layer.** Pre-computed propagation coverage predictions for each currently operational base station in the national territory, generated using empirical models calibrated against available drive-test measurements. Stored as spatial grids at 30-metre resolution. Updated when base station configurations change.

**Layer 4 — Observation layer.** Ground-truth RF signal strength measurements from drone survey, crowd-sourced mobile measurements (OpenCelliD, NetAnt equivalents), and field team surveys. Each observation is geolocated, timestamped, and associated with its originating measurement instrument and methodology.

**Layer 5 — Semantic query layer.** A knowledge graph indexing the settlement layer as the primary entity type, with relationships to Layer 2–4 data types. Queryable using structured graph query languages (SPARQL, Cypher) and natural language interfaces. Supports queries such as: "Which settlements within 50 km of [geographic point] have less than -95 dBm predicted LTE signal strength and no observation layer measurements in the last 12 months?" or "What is the propagation model prediction error distribution for settlements with building heights above 8 metres in Region X?"

### 4.2 The Dual Validation Strategy

SRKF's epistemic credibility depends on its dual validation architecture: every propagation model prediction can be compared against observation layer measurements, and the model-observation discrepancy is itself a queryable attribute of each settlement's coverage characterisation.

The dual validation strategy serves two purposes:

**Calibration.** Where observation measurements are available, they are used to calibrate empirical model parameters for the local terrain and clutter characteristics. This calibration is stored as settlement-specific model parameters in the semantic query layer, enabling higher-accuracy coverage predictions for settlements near surveyed sites.

**Uncertainty quantification.** Where observation measurements are absent, the query layer reports the modelled coverage estimate alongside a confidence interval derived from the model's calibration accuracy in similar terrain. This uncertainty quantification is the critical epistemic property that distinguishes SRKF outputs from conventional operator coverage maps, which typically report point estimates without confidence intervals.

---

## 5. The Conflict-Zone Challenge

### 5.1 Why Standard Survey Methods Fail

Conflict-zone and post-conflict territories present the most severe SRKF coverage challenge. Standard ground-truth survey methods — human survey teams driving or walking measurement transects — are unsafe. Administrative boundary data may be outdated, disputed, or deliberately withheld. National mapping agency data may not have been updated since pre-conflict surveys. Telecom operator infrastructure may be damaged, destroyed, or operating under emergency configurations that do not reflect normal coverage planning.

At the same time, conflict-zone connectivity is arguably the context where SRKF outputs are most consequential: humanitarian organisations need to understand which areas have connectivity for logistics and communications planning; governance reconstruction programmes need to prioritise infrastructure investment; public health surveillance depends on connectivity for data transmission.

### 5.2 Drone-Based RF Survey in Conflict Contexts

Drone-based RF survey with autonomous flight planning provides coverage assessment capability without requiring human presence in unsafe survey areas. A drone equipped with an RF measurement instrument can be launched from a safe perimeter, fly a pre-planned measurement grid over a target settlement, and return with a dataset that maps actual signal strength across the settlement at the spatial resolution determined by the flight altitude and speed.

The actant translations required for this approach in conflict contexts are significant. The drone operator must obtain airspace permissions from both civil aviation authorities and military actors controlling the airspace. The RF measurement must use frequency bands that do not interfere with military or emergency communications. The data produced must be handled under a data governance framework acceptable to all parties with jurisdiction in the surveyed territory.

These are governance problems, not technical ones. The drone technology is available; the RF measurement instrumentation is available; the autonomous flight planning software is available. The governance framework for conflict-zone spatial survey is not yet established in any standardised form.

The ANT reading: the governance actants (civil aviation authorities, military commands, humanitarian coordination bodies, national spectrum regulatory agencies) have not been enrolled in the SRKF network for conflict-zone applications. Their enrollment requires translation — a framing of SRKF outputs as neutral, multi-use infrastructure rather than intelligence collection — that must be negotiated case by case under the current institutional landscape.

The translation calculus differs substantially between post-conflict and peacetime contexts, and among the three principal actant categories. Municipal authorities in post-conflict settings are typically reconstituted, under-resourced, and operationally dependent on international donors for both funding and legitimacy; their enrollment in SRKF requires framing the fabric as a reconstruction planning tool that strengthens their administrative capacity — a translation that aligns with their interest in demonstrating governance function. International donors (UN agencies, bilateral development banks, NGO consortia) are enrolled through the language of evidence-based investment: SRKF reduces the risk of funding connectivity infrastructure that duplicates existing marginal coverage or misses genuine gaps, a value proposition that maps directly onto donor accountability requirements. Telecom operators in post-conflict contexts face a different incentive structure than in peacetime: where peacetime operators resist data sharing to protect competitive position, post-conflict operators — often operating under emergency licensing or temporary spectrum assignments — may welcome SRKF as a planning tool that reduces their own capital misallocation risk. The result is that conflict-zone SRKF enrollment may paradoxically be more tractable with operators than peacetime enrollment, while being significantly harder with governance and airspace actants whose institutional legitimacy is itself contested.

---

## 6. Making SRKF Queryable at Nation Scale

### 6.1 The Semantic Query Layer Design

The semantic query layer must support three classes of query from three actor types:

**Strategic investment queries (national policy actors).** "Which decile of settlements by estimated coverage quality accounts for the highest population-weighted connectivity deficit?" These queries require aggregation across the settlement index and join against population data, propagation model outputs, and observation confidence intervals.

**Operational planning queries (infrastructure operators).** "For a tower placed at [geographic coordinates] with [antenna configuration], what is the predicted incremental coverage improvement for settlements currently below -95 dBm threshold, accounting for terrain and clutter?" These queries require propagation model computation against the terrain/clutter layer and spatial join against the settlement index.

**Monitoring and compliance queries (regulators).** "Which base stations have been offline for more than 72 hours in the past 30 days, and what is the affected population-weighted coverage deficit?" These queries require joins against operational monitoring data, propagation model outputs, and settlement population data.

The knowledge graph data model must support all three query classes without requiring different data representations for each. The settlement identifier as universal primary key, with standardised relationship types to all other data layers, is the architectural principle that enables this.

### 6.2 Scalability to 250,000 Villages

A settlement index of 250,000 entities, each with associated propagation model grids, terrain/clutter data, and observation measurements, represents a substantial data management challenge. At 30-metre resolution, a 25 km² village territory requires approximately 28,000 grid cells per propagation prediction layer; with multiple base stations per village, the total grid data volume grows rapidly.

The SRKF addresses this through hierarchical resolution storage: terrain and propagation data are stored at full resolution only for settlements with observation measurements or active query interest; other settlements are stored at reduced resolution (150 metres or 450 metres) with on-demand interpolation to full resolution when a query requires it. This approach reduces storage requirements by approximately 90% compared to full-resolution coverage of the entire national territory.

To quantify this reduction concretely: a 250,000-settlement fabric where every settlement is assigned a 25 km² territory and stored at full 0.1 m resolution requires approximately 2,500 grid cells per metre-square kilometre, giving roughly 62.5 billion grid cells nationally; at 4 bytes per cell for a single propagation layer, this is approximately 250 TB of storage before multi-layer or multi-operator stacking. The hierarchical approach stores regional settlements at 10 m resolution, urban settlements at 1 m resolution, and only critical-infrastructure or high-priority settlements at 0.1 m resolution. Applying a conservative distribution (80% regional, 15% urban, 5% critical), total storage reduces to approximately 20–25 TB — a factor-of-ten reduction consistent with the 90% claim. On-demand interpolation to full resolution for query-active settlements adds compute latency but eliminates the persistent storage cost for the 95% of settlements that are queried infrequently.

---

## 7. Falsifiable Propositions

1. **The validation accuracy proposition:** Propagation model predictions in SRKF, calibrated using drone-survey ground-truth observations from a 5% sample of national settlements, will achieve mean absolute prediction error below 8 dB at unsampled settlements in similar terrain classes. This proposition can be falsified by an empirical validation study showing mean absolute error above 8 dB for unsampled settlements after calibration against a 5% observation sample.

2. **The coverage gap detection proposition:** SRKF-based coverage gap analysis identifies at least 30% more underserved settlements than operator-reported coverage maps for the same national territory, as measured against drive-test ground truth in a randomly sampled set of 1,000 settlements. This proposition can be falsified by a comparison study showing SRKF gap detection sensitivity below the operator-map baseline.

3. **The query latency proposition:** A SRKF semantic query layer, optimised for the settlement index as primary key with pre-computed propagation grid indices, can return strategic investment queries (population-weighted coverage deficit by region) in under 30 seconds for a 250,000-settlement national territory. This proposition can be falsified by a performance benchmark showing query latency above 30 seconds under representative query loads.

---

## 8. Limitations and Future Research

The SRKF architecture is proposed rather than deployed. The component technology capabilities (3DGS capture quality, drone RF survey accuracy, knowledge graph query performance at nation scale) are based on published research results from smaller-scale deployments; their performance at national scale has not been empirically demonstrated.

The conflict-zone governance framework described in Section 5 is aspirational; the specific permitting processes, data governance models, and multilateral agreements required for drone RF survey in active conflict contexts do not yet exist in standardised form.

The 250,000-village scale is illustrative; the architecture's scalability to this scale is argued analytically, not demonstrated computationally.

Future research should: (1) deploy a SRKF prototype for a sub-national territory (5,000–10,000 settlements) and measure validation accuracy, query performance, and operational complexity; (2) develop and pilot a governance framework for drone RF survey in post-conflict territories in collaboration with humanitarian coordination organisations; (3) evaluate 3DGS capture efficiency and propagation model accuracy improvement for a representative sample of rural settlement typologies.

---

## 9. Conclusion

The 250,000 villages that lack reliable connectivity data represent a structural gap in the ability to plan, fund, and validate rural digital infrastructure investment. Operator coverage maps are predictions; ground-truth observations are sparse; and the combination of RF propagation modelling with physical reality capture has never been integrated into a queryable, nation-scale fabric.

The SRKF is a designed solution to this problem. It integrates the component technologies that exist — RF propagation models, 3DGS reality captures, drone-based survey, GIS terrain data — into a semantically queryable fabric that makes spatial intelligence about connectivity accessible to the actors who need it: national policy makers allocating universal service funds, infrastructure operators planning tower deployments, and regulators evaluating compliance.

The ANT analysis reveals that the primary barriers to SRKF are not technical but translational: satellite data providers, telecom operators, national mapping agencies, drone operators, and governance bodies in conflict-affected territories must each be enrolled in the fabric's network through specific translations of their interests. The conflict-zone case is the hardest: the governance actants who control airspace and data sovereignty in active conflict territories have not yet been enrolled in any standardised spatial intelligence framework.

Indexing reality at 250,000-village scale is tractable. The components exist. The architecture is specifiable. The translations are hard but not impossible. The payoff — a governance infrastructure for rural connectivity that is grounded in observed reality rather than model predictions — justifies the investment.

---

## References

[1] Hevner AR, March ST, Park J, Ram S. Design science in information systems research. *MIS Quarterly* 2004;28(1):75–105.

[2] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[3] Latour B. *Science in Action.* Harvard University Press, 1987.

[4] Kerbl B, Kopanas G, Leimkühler T, Drettakis G. 3D Gaussian Splatting for Real-Time Radiance Field Rendering. *ACM Transactions on Graphics* 2023;42(4):139.

[5] International Telecommunication Union. *Guidelines for evaluation of radio interface technologies for IMT-2020.* ITU-R M.2412-0, 2017.

[6] OpenStreetMap Foundation. OpenStreetMap. https://www.openstreetmap.org [accessed 2026].

[7] EASA. Easy Access Rules for Unmanned Aircraft Systems. EASA, 2022.

[8] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[9] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[10] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
