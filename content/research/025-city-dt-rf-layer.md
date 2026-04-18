---
title: "Why Your City's Digital Twin Needs an RF Layer"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: urban digital twin, RF propagation, radio frequency, open-source pipeline, EU Horizon, proprietary format trap, city model, wireless infrastructure, Actor-Network Theory, design science research, SMILE methodology, electromagnetic simulation, IoT connectivity
status: ready
date: 2026-04-16
---

# Why Your City's Digital Twin Needs an RF Layer

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Urban digital twins are increasingly sophisticated representations of the built environment: they model thermal performance, structural integrity, traffic flow, pedestrian density, microclimate, noise propagation, and energy consumption. They do not, as a rule, model radio-frequency (RF) propagation. This is a significant architectural gap. The IoT sensors, mobile broadband networks, emergency communication systems, autonomous vehicle infrastructure, and smart building systems that urban AI operations depend upon all operate in the RF spectrum. A digital twin that cannot model RF propagation cannot predict which IoT sensors will lose connectivity when a new building is erected, cannot optimise emergency radio coverage for a new district, cannot model the interference effects of dense Wi-Fi deployments in a commercial precinct, and cannot validate 5G small cell placement without physical field testing. This paper argues that the RF layer is not a specialised telecommunications add-on but a foundational capability for any urban digital twin that aspires to model the city's information infrastructure alongside its physical infrastructure. We trace the argument through Actor-Network Theory (ANT), identifying the heterogeneous actants — city digital twin platforms, municipal ICT departments, emergency services radio planners, telecom operators, building regulation authorities, and EU research funding instruments — that must be enrolled to produce an RF-capable urban digital twin, and the translation moments that currently prevent enrollment. We examine the proprietary format trap: the tendency of city digital twin implementations to accumulate RF data in vendor-specific formats that cannot be queried by or shared with external systems, producing silos that undermine the connectivity planning decisions the RF layer is supposed to support. We argue for an open-source RF pipeline strategy and evaluate three existing open-source RF propagation toolkits against urban digital twin integration requirements. Three falsifiable propositions are stated. We engage the counter-argument that RF modelling is too specialised for city-level governance and argue the opposite: that it is precisely the specialisation that makes institutional resistance to the RF layer so persistent and so costly. This paper is intended as a contribution to urban informatics, smart city governance, and the growing field of physically grounded urban digital twins.

**Keywords:** urban digital twin, RF propagation, radio frequency, open-source pipeline, EU Horizon, city model, wireless infrastructure, Actor-Network Theory, design science research, SMILE methodology, electromagnetic simulation, IoT connectivity

---

## 1. Introduction: The Invisible Infrastructure Layer

Walk into any modern city digital twin demonstration and you will see a compelling three-dimensional model of the urban environment: buildings rendered with centimetre-accurate geometry derived from LiDAR surveys, streets populated with real-time traffic flows, building interiors mapped to energy performance certificates, microclimate modelling showing wind corridors and heat island effects. The twin is, in many respects, a better representation of the physical city than any predecessor technology.

Then ask the twin: if I deploy ten thousand IoT sensors across this district, which ones will have reliable 5G connectivity? If I add a twelve-storey residential tower at this location, what happens to emergency radio coverage in the adjacent blocks? If a major telecoms outage takes the LTE network down for two hours, which smart building systems lose connectivity?

In the vast majority of cases, the twin cannot answer these questions. It models the physical city with remarkable fidelity. It is blind to the electromagnetic environment in which the city's digital infrastructure operates.

This is the RF gap. It is not exotic. Radio-frequency propagation is governed by physics as well-characterised as structural mechanics or fluid dynamics. The modelling techniques — ray-tracing, empirical propagation models, network simulation — are mature and computationally tractable at urban scales. The data required — building geometry, material properties, antenna locations — is either available in the twin's existing geometric layer or can be derived from it. Yet RF modelling is absent from virtually all production urban digital twin deployments.

The reasons for this absence are institutional rather than technical, and understanding them — through the lens of Actor-Network Theory — is the first step toward addressing them.

---

## 2. Theoretical Framework

### 2.1 ANT and Urban Digital Twin Design

ANT [1][2] is appropriate for analysing urban digital twin design because the digital twin is a network construction achievement: its properties are not determined by any single actor's decisions but by the sustained negotiations between a heterogeneous set of human and non-human actants. The city's GIS department has data. The building information modelling (BIM) systems of recently constructed buildings have geometric data. The telecom operators have antenna location and configuration data. The emergency services have radio coverage requirements. The IoT platform vendor has sensor connectivity requirements. None of these actors designed the city's digital twin; all of them have contributed data, constraints, and requirements that shape what the twin can and cannot represent.

The RF gap is, in ANT terms, a consequence of failed enrollment: the telecom-relevant actants have not been enrolled in the urban digital twin network. Their data, their requirements, and their expertise remain outside the twin's boundary. The RF layer does not appear in the twin not because the physics is unknown but because the actors who hold RF data and expertise have not been translated into the twin's network.

### 2.2 The Proprietary Format Trap

The proprietary format trap is a specific ANT phenomenon: the enrollment of a vendor platform as an obligatory passage point [3] that inscribes assumptions about data formats, API access, and model representations that are incompatible with external systems. Cities that have deployed urban digital twins based on proprietary platforms frequently find that their RF data — if it exists — is stored in formats that cannot be exported, queried by external systems, or integrated with telecommunications regulatory tools.

This trap is deepened by procurement dynamics. City digital twin procurement typically involves a prime contractor who integrates multiple data sources and modelling capabilities into a unified platform. The prime contractor has a commercial interest in maintaining platform lock-in; the city's procurement team lacks the technical capacity to specify open data format requirements for every modelling capability, including RF. The result is a twin that is feature-rich within the vendor's ecosystem and opaque to external stakeholders.

### 2.3 The SMILE Methodology Applied to Urban RF

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is the urban digital twin without RF capability, and the to-be state is the twin with an open-pipeline RF layer. Every design decision is evaluated by the criterion: does it close the gap between these states, and does it do so in a way that is durable (not locked into a proprietary format that will recreate the gap as soon as the vendor's contract expires)?

---

## 3. Why RF Matters for Urban Digital Twins: Five Use Cases

### 3.1 IoT Sensor Network Planning

A smart city deployment of IoT sensors — environmental monitors, parking sensors, noise meters, street lighting controllers, waste bin fill-level sensors — requires connectivity planning. Each sensor must have reliable communication coverage from its deployment location. In a dense urban environment, RF propagation is highly location-specific: a sensor mounted at 3 metres in a narrow side street may have significantly different coverage characteristics than a sensor at 4.5 metres on a main boulevard fifty metres away.

Without an RF model integrated with the city's 3D geometry, IoT sensor placement is planned using simplified coverage assumptions (radius-based coverage circles, average signal strength tables) that systematically underestimate coverage gaps in complex urban morphology. The result is sensor deployments that discover connectivity failures in the field, requiring expensive physical relocation.

An RF layer in the urban digital twin enables coverage prediction at sensor placement granularity before deployment, reducing field failures and optimising sensor location choices within the constraints of urban furniture and building access permissions.

### 3.2 Emergency Radio Coverage Validation

Emergency services radio networks — police, fire, ambulance, and civil protection — operate under strict coverage requirements defined by national regulation and operational doctrine. In most jurisdictions, emergency radio coverage is required to reach a specified signal strength threshold in a high percentage of the coverage area, including indoor locations. The "indoor coverage" requirement is particularly challenging in urban environments because building penetration losses at the frequencies used by emergency services (typically 350–900 MHz) are highly variable by construction material and building typology.

Urban digital twins with accurate 3D building geometry and material property data are capable of supporting deterministic or semi-deterministic RF modelling that produces indoor coverage estimates significantly more accurate than the empirical models currently used by most emergency services radio planners. But this capability is not available in any production urban digital twin system the authors have evaluated. Emergency services radio planning uses separate, specialist software tools that may have some GIS integration but are not connected to the city's digital twin.

The consequence is that emergency coverage requirements are validated using models that are less accurate than what the existing city geometry data would support, and that coverage validation exercises cannot be run interactively when the city considers building developments that may affect emergency coverage.

### 3.3 5G Small Cell Placement Optimisation

The densification of mobile networks with 5G small cells — low-power transmitters deployed at street furniture, building facades, and rooftop positions every 100–300 metres in dense urban areas — creates a complex RF planning problem. Small cell planning must account for interference between small cells, between small cells and existing macrocell infrastructure, and between 5G deployments and other wireless systems operating in adjacent spectrum bands.

Telecom operators conduct this planning using specialist RF planning tools that are not integrated with the city's digital twin or planning system. The result is that small cell deployment applications arrive at planning departments as individual site applications with coverage predictions generated by the operator's planning tools — predictions that the planning department cannot independently validate, replicate, or aggregate into a city-level assessment of network evolution.

An RF layer in the urban digital twin would enable city planning departments to evaluate small cell applications against the city's own geometric model, compare operator-provided coverage predictions against independent model outputs, and assess the cumulative effect of multiple applications on the city's overall wireless environment.

### 3.4 Smart Building Connectivity Verification

Smart buildings rely on wireless connectivity for building management system (BMS) sensors, occupancy monitoring, HVAC control, access control, and visitor experience services. Building RF environments are notoriously difficult to predict: reinforced concrete construction, metallic cladding, glass facades with low-emissivity coatings, and dense metallic infrastructure (elevator shafts, electrical conduit, HVAC ducts) create multipath-rich, attenuation-heavy propagation environments that are poorly served by simple empirical models.

Building information models (BIM) increasingly include material property data that is directly relevant to RF propagation modelling. The integration of BIM RF material properties with the urban digital twin's building geometry layer would enable connectivity verification at building-interior resolution — identifying dead zones, optimal access point locations, and interference risk areas before building commissioning rather than during it.

### 3.5 Autonomous Vehicle Communication Infrastructure

Connected and autonomous vehicles (CAVs) depend on reliable communication links for vehicle-to-infrastructure (V2I) and vehicle-to-vehicle (V2X) communication. The performance of these communication links — particularly for safety-critical applications — depends on RF coverage continuity along vehicle routes. Urban digital twins are being proposed as the environment for CAV simulation and planning; an RF layer is required to make these simulations physically realistic.

---

## 4. The Open-Source Pipeline Argument

### 4.1 Why Open-Source Matters

The proprietary format trap described in Section 2.2 is particularly damaging for RF data because RF planning spans multiple institutional domains — municipal planning, emergency services, telecom operators, building regulation — each of which uses different tools, data formats, and governance frameworks. A proprietary RF modelling implementation within a city digital twin creates a new silo: RF data that is visible within the twin but not accessible to emergency services radio planners, telecom operators, or building regulation authorities.

Open-source RF modelling pipelines — pipeline components that implement published propagation models, accept standard geospatial data formats as input, and produce outputs in standard formats — enable RF data to flow between the city digital twin and the specialist systems used by each institutional actor. The city digital twin becomes an RF integration hub rather than an RF silo.

### 4.2 Three Open-Source RF Toolkits Evaluated

**SPLAT!** is a mature open-source RF propagation analysis tool based on the Longley-Rice Irregular Terrain Model. It accepts terrain data in standard formats (SRTM, DEM) and produces signal strength predictions and coverage maps in standard raster formats (GeoTIFF, KMZ). It is widely used in amateur radio and television broadcast planning contexts. Its limitation for urban digital twin integration is that it lacks building clutter support: it models terrain effects but not the effects of individual buildings on urban propagation. For urban RF modelling at distances below 2 km, building clutter is the dominant propagation effect, making SPLAT! unsuitable as a primary urban RF tool.

**WinProp** (open-source community edition distributed via a European academic RF simulation toolkit) supports 3D ray-tracing and empirical propagation modelling with building clutter integration. It accepts standard 3D building models (IFC, CityGML, OBJ) and produces coverage predictions compatible with GIS workflows. Its ray-tracing engine supports frequencies from 100 MHz to 100 GHz, covering the full range of wireless systems relevant to urban IoT and mobile broadband planning. Its limitation is performance: ray-tracing at urban scales requires significant compute, and the open-source edition has fewer performance optimisations than the commercial version.

**Sionna** is an open-source differentiable ray-tracing simulator for wireless communications, developed by a major European telecommunications equipment manufacturer and released under the Apache 2.0 licence. It is implemented in TensorFlow and designed for ML-based research applications; it supports GPU acceleration and differentiable channel modelling for AI/ML research. Its limitation for production urban digital twin integration is that it targets research rather than operational deployment: its interface is Python-based, requiring ML engineering capability to integrate with GIS workflows.

**Assessment for urban digital twin integration.** None of the three toolkits provides a ready-made integration with major urban digital twin platforms (CesiumJS, ESRI CityEngine, Bentley iTwin, 3DCityDB). Integration requires custom ETL development. The recommended approach is an open-source pipeline architecture: a processing chain that (1) extracts building geometry from the city's 3D model in CityGML format, (2) converts it to a format compatible with the chosen propagation engine, (3) runs the propagation model with antenna configurations from the city's RF infrastructure register, and (4) returns results in GeoTIFF format for reintegration with the city's GIS layer.

---

## 5. ANT Analysis: Enrolling the RF Actants

### 5.1 The Telecom Operator Translation

Telecom operators have the most complete RF data about the urban wireless environment: antenna locations, configurations, power levels, and drive-test measurements from ongoing network performance monitoring. But they have significant reasons to withhold this data from city digital twin integrations: commercial sensitivity (coverage data reveals network performance relative to competitors), regulatory caution (sharing coverage data may trigger universal service obligations), and technical friction (their RF data is in formats designed for specialist telecom engineering tools, not GIS or digital twin platforms).

The translation required: framing RF data contribution to the city's digital twin as a regulatory simplification (planning applications for new sites would require less documentation if the planning system could independently validate coverage claims) and a competitive neutraliser (if all operators contribute to the same model, no operator's coverage data is more exposed than any other's). Several European city pilot projects have achieved this translation through multilateral data sharing agreements facilitated by the national telecom regulator.

### 5.2 The Emergency Services Translation

Emergency services radio planning departments are potential allies for the RF layer: they have a direct operational interest in accurate coverage modelling and are currently underserved by the planning data available to them. The translation required is technical rather than political: connecting the city's digital twin team with the emergency services RF planning team and establishing a workflow by which the twin's building geometry is usable as input to the emergency services' radio planning tools.

The constraint is institutional: emergency services typically sit outside the municipal governance structure that manages the city digital twin. The translation requires a cross-institutional working group, a data sharing agreement, and a technical integration project — none of which is technically complex, but each of which requires sustained commitment from two institutional actors whose normal workflow does not intersect.

### 5.3 The Building Regulation Translation

Building regulation authorities are the actants closest to the data required for indoor RF modelling: they hold building material specifications, construction drawings, and energy performance certificates that contain the material property data directly relevant to RF penetration prediction. The translation required: developing a standard mapping from building regulation material classifications to RF propagation material properties, and establishing a workflow by which this data is available to the city's digital twin when new building regulation approvals are processed.

This translation is currently being explored in several EU Horizon research projects on digital construction regulation; it is a designed proposal, not a deployed practice.

---

## 6. The EU Horizon Grant Design Opportunity

EU Horizon Europe research infrastructure funding has produced a set of multi-stakeholder, cross-national projects addressing urban digital twin infrastructure, smart city data platforms, and wireless connectivity planning. The RF layer integration challenge — spanning technical integration, data governance framework development, and pilot deployment — is structurally aligned with the consortia compositions these funding instruments favour. What this alignment reveals is analytically significant: the governance architecture required by cross-national grant consortia serves as a natural test bed for the federated RF layer model proposed here. A consortium that must negotiate data sharing agreements between a city administration, a telecom operator, an emergency services authority, and a research institution in order to satisfy grant reporting requirements is, in effect, performing the same multi-actant enrollment that a production RF knowledge fabric requires. The research project and the operational architecture are isomorphic; the grant design is not merely a funding mechanism but a governance rehearsal.

This isomorphism has observable consequences for project design. Horizon projects in this space have typically required multi-stakeholder composition — at minimum one urban digital twin operator, one telecom infrastructure stakeholder, one emergency services stakeholder, and one research institution — precisely because the technical integration problem cannot be solved without simultaneous governance negotiation. Projects that have attempted to separate the technical and governance workstreams have consistently found that the technical deliverables cannot be validated without the governance agreements that the governance workstream was supposed to produce in parallel.

The proprietary format trap analysis in Section 2.2 applies directly to grant-funded RF integration: projects that do not inscribe open-source pipeline implementation and open data formats as mandatory deliverable requirements — rather than optional extensions or aspirational goals — replicate the silo problem in their research outputs. The grant design is itself an inscription device; its technical requirements encode assumptions about data governance that will persist in the project's outputs long after the funding period ends.

---

## 7. Falsifiable Propositions

1. **The coverage prediction proposition:** Urban digital twins with integrated RF layers, using building geometry and material properties from the twin's existing 3D model, produce LTE downlink signal strength predictions with mean absolute error below 6 dB at street level compared to drive-test measurements, outperforming standard empirical propagation models applied to the same urban environment. This proposition can be falsified by a systematic comparison showing that 3D geometry-informed RF modelling does not significantly outperform empirical models at street level in urban environments.

2. **The planning integration proposition:** Cities that integrate RF coverage prediction into their urban planning workflow reduce physical RF survey requirements for new wireless infrastructure applications by at least 40%, as measured by the number of mandatory pre-application field measurements required under the planning authority's technical guidance. This proposition can be falsified by a study of planning workflow timelines showing no significant reduction in field survey requirements after RF layer integration.

3. **The proprietary trap persistence proposition:** City digital twins that implement RF modelling using proprietary vendor platforms will, within five years of initial deployment, face data portability barriers that prevent RF data integration with at least two of the following: emergency services radio planning systems, national telecom regulatory reporting platforms, building regulation digital workflows. This proposition can be falsified by a longitudinal study of proprietary urban digital twin deployments showing successful RF data integration with all three external systems within five years.

---

## 8. Limitations and Future Research

The RF toolkit evaluation in Section 4.2 is based on published documentation and publicly available software assessment, not on direct performance testing of each toolkit against common urban digital twin scenarios. Propagation model accuracy comparisons require standardised test environments and drive-test ground truth that are beyond the scope of this paper.

The EU Horizon grant design discussion in Section 6 is based on analysis of published Horizon work programme documents; specific funding opportunities change between programming periods and should be verified against current calls.

The actant analysis in Section 5 is based on general institutional knowledge of urban governance structures in Western European cities; it may not accurately represent the institutional dynamics of urban digital twin governance in other regulatory contexts.

Future research should: (1) conduct a systematic accuracy comparison of open-source RF propagation models against drive-test ground truth in three urban morphology typologies (compact historic centre, mixed commercial, residential suburbia); (2) develop and pilot a standard data schema for RF material properties derived from building regulation material classifications; (3) evaluate the governance frameworks from multi-stakeholder RF data sharing in at least two European cities that have attempted it.

---

## 9. Conclusion

Cities are building digital twins that are blind to their own information infrastructure. The RF spectrum — the medium through which IoT sensors, emergency radios, mobile broadband, smart building systems, and autonomous vehicle communications all operate — is absent from the geometric, thermal, structural, and hydraulic models that urban digital twins have successfully integrated.

This absence is not a technical limitation. It is an institutional failure: a failure to enrol the telecom, emergency services, and building regulation actants that hold the data and requirements for RF modelling into the digital twin network. The proprietary format trap has made this failure persistent by creating RF data silos within individual vendor platforms rather than open-pipeline integration points that all relevant institutional actors can access.

The argument for the RF layer is not that it will make urban digital twins more impressive. It is that a city cannot make evidence-based decisions about IoT sensor placement, emergency radio coverage, 5G densification, or smart building connectivity without it. The wireless infrastructure is as physically real as the roads, the buildings, and the water mains. The digital twin that models the city without it is building an incomplete representation of a city that increasingly lives and operates in the electromagnetic environment as much as in the physical one.

Open-source pipeline architecture, multi-stakeholder data sharing governance, and EU research funding provide the mechanism. What is needed is the recognition that the RF layer is not a telecommunications specialisation — it is an urban infrastructure planning fundamental.

---

## References

[1] Callon M. Some elements of a sociology of translation: domestication of the scallops and the fishermen of St Brieuc Bay. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Science in Action.* Harvard University Press, 1987.

[3] Callon M. The sociology of an actor-network: the case of the electric vehicle. In: Callon M, Law J, Rip A (eds.) *Mapping the Dynamics of Science and Technology.* Macmillan, 1986: 19–34.

[4] Kerbl B, Kopanas G, Leimkühler T, Drettakis G. 3D Gaussian Splatting for Real-Time Radiance Field Rendering. *ACM Transactions on Graphics* 2023;42(4):139.

[5] ITU-R. Propagation data and prediction methods for the planning of indoor radiocommunication systems and radio local area networks in the frequency range 900 MHz to 100 GHz. ITU-R P.1238-10, 2019.

[6] ETSI. 5G; NR; Physical layer procedures for data. ETSI TS 138 214, 2023.

[7] Open Geospatial Consortium. OGC City Geography Markup Language (CityGML) Encoding Standard. Version 3.0, 2021.

[8] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[9] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[10] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.
