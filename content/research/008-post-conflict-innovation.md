# From Conflict Zone to Innovation Hub: Post-War Nations as Emergent Ecosystems for Civilian Drone Infrastructure

**Nicolas Waern**
WINNIIO AB, Gothenburg, Sweden
ORCID: [0000-0001-7970-2707](https://orcid.org/0000-0001-7970-2707)

**License:** CC-BY-4.0

**Preprint DOI:** [To be assigned upon Zenodo deposit]

---

## Abstract

Post-conflict reconstruction presents one of the most complex infrastructure challenges of the twenty-first century, yet it simultaneously creates conditions uniquely suited to technological leapfrogging. The World Bank's fifth Rapid Damage and Needs Assessment estimates Ukraine's total reconstruction cost at USD 588 billion, with USD 195 billion in direct physical damage concentrated in housing, transport, and energy infrastructure (World Bank, 2026). This position paper argues that nations emerging from armed conflict possess underrecognised advantages for building civilian drone ecosystems, drawing on military-to-civilian expertise transfer, destroyed-then-rebuilt regulatory frameworks, and a workforce already fluent in unmanned aerial systems. We introduce an ontological gap framing: reconstruction planning that begins from documentary shadows---damage reports, satellite imagery, coverage maps---rather than from the physical reality of destruction sites is inherently slower and less accurate. This gap directly undermines Sendai Framework Target G, which requires substantially improved availability and access to disaster loss data by 2030 (UNDRR, 2015). Dual-output drone surveys that simultaneously assess structural damage and radio-frequency spectrum availability are proposed as a method for collapsing this gap, building on demonstrated AI-accelerated damage assessment systems such as the CLARKE platform deployed during the 2024 US hurricane season (Yucesoy, 2025). We further examine consortium-stacking as a grant methodology and the role of AI-accelerated proposal development in compressing institutional timelines from weeks to days. The argument is situated within the Reality Construct framework (Waern, 2026a), which positions physical reality as the foundational persistent layer for digital twin creation, and draws on the Sendai Framework midterm analysis by Mavrokapnidis et al. (2024) connecting urban digital twins to disaster risk management. Three pilot communities in an eastern European post-conflict nation provide the empirical anchor. The paper's primary contribution is the identification of an ontological gap in post-conflict reconstruction planning: the systematic reliance on report-based representations rather than physics-based scene capture as the foundation for resource allocation. The paper concludes that post-conflict environments, far from being mere recipients of reconstruction aid, can become generative ecosystems for civilian drone infrastructure that serves as a template for broader technology transfer.

**Keywords:** post-conflict reconstruction; civilian drone infrastructure; digital twin; dual-output survey; ontological gap; military-to-civilian transfer; consortium stacking; reality construct; radio-frequency mapping; Sendai Framework; eastern europe

---

## 1. Introduction

The aftermath of an international armed conflict involving state actors is conventionally framed as a problem of deficit: destroyed bridges, severed communication networks, displaced populations, and fractured institutions. The scale of this deficit is staggering. The World Bank's fifth Rapid Damage and Needs Assessment, published in February 2026, estimates Ukraine's total recovery and reconstruction needs at USD 588 billion, with direct physical damage alone accounting for USD 195 billion---the largest single-country reconstruction challenge since the Second World War (World Bank, 2026). Housing, transport, and energy infrastructure bear the heaviest burden. Globally, the UNDRR's Sendai Framework monitoring data reports 91,847 critical infrastructure units damaged or destroyed per year between 2015 and 2024 across all hazard types, underscoring that infrastructure destruction is not an anomaly but a systemic feature of both conflict and disaster (UNDRR, 2023).

This framing, while accurate in its accounting of loss, obscures a countervailing dynamic. Conflict zones are also sites of intensive technological adaptation, where necessity compresses innovation cycles that would take decades in peacetime environments (Collier & Hoeffler, 2004). Unmanned aerial systems (UAS) that were deployed for reconnaissance, logistics, and strike missions leave behind a residual ecosystem of operators, maintainers, supply chains, and tacit knowledge that has no peacetime equivalent in nations that never experienced such conflict (Horowitz, 2019). Autesserre (2021) argues that the most effective peacebuilding interventions are those that give power to local citizens rather than importing external expertise at scale---a principle that applies directly to the drone workforce question, where local operators possess embodied knowledge that no international contractor can replicate.

This paper advances three interconnected claims. First, that post-conflict nations possess emergent advantages for civilian drone infrastructure development that reconstruction policy systematically undervalues. Second, that conventional reconstruction planning suffers from an ontological gap---it begins from documentary representations of destruction rather than from the destruction itself, and drone-based reality capture can close this gap. Third, that the institutional mechanisms for funding reconstruction (grants, tenders, development finance) can be restructured through consortium-stacking and AI-accelerated proposal development to match the speed at which post-conflict environments actually evolve.

The concept of an ontological gap draws on a long tradition in science and technology studies. Star and Griesemer (1989) demonstrated that objects acquire different meanings across institutional boundaries, and that productive collaboration requires boundary objects flexible enough to inhabit multiple worlds simultaneously. In post-conflict reconstruction, the destroyed infrastructure is the primary reality, but the planning process operates on secondary artefacts: damage assessments, satellite-derived maps, coverage models, and engineering reports. These artefacts are shadows of the physical destruction that already exists. Each translation---from rubble to photograph, from photograph to report, from report to budget line---introduces distortion, delay, and loss of spatial specificity (Latour, 1999).

The drone survey, in this framing, does not merely collect data. It makes the cave legible. By producing georeferenced, centimetre-resolution models of destroyed infrastructure while simultaneously mapping the radio-frequency environment, a single drone pass creates a scene---a bounded, structured digital representation of physical reality---that can serve as the shared reference object for all subsequent planning (Waern, 2026a). This is the Reality Construct applied to reconstruction: the persistent layer is not the report, but the site itself, captured at a fidelity that permits digital twin creation.

The proposed approach operates within the governance context established by the Sendai Framework for Disaster Risk Reduction (UNDRR, 2015), which prioritises understanding disaster risk through data-driven assessment, and the UNDP recovery framework (UNDP, 2020), which emphasises building back better through integrated, multi-sectoral reconstruction planning. Mavrokapnidis et al. (2024), in a milestone analysis of the Sendai Framework midterm review, identify urban digital twins as a critical missing capability in disaster risk management, mapping specific Sendai targets to digital twin implementation gaps. Their analysis validates the core premise of the present paper: that scene-based digital representations are not merely a technological improvement but a governance necessity for meeting internationally agreed disaster risk reduction targets, including Target G on disaster damage data availability. Both the Sendai Framework and the UNDP recovery framework implicitly assume document-based assessment as the starting point; the present paper argues that scene-based assessment is a more faithful implementation of their underlying principles.

The empirical anchor for this paper is a planned feasibility study involving three communities in an eastern European post-conflict nation, with an approximate budget of USD 150,000 for drone-based energy infrastructure assessment. While the specific national context is anonymised throughout this paper for reasons of ongoing conflict sensitivity, the structural dynamics described---military expertise transfer, regulatory flux, consortium formation, and AI-enabled institutional acceleration---are generalisable to post-conflict environments globally.

---

## 2. Military-to-Civilian Expertise Transfer

### 2.1 Conflict as an Involuntary Technology Accelerator

Armed conflict is, among its many horrors, a forcing function for technological adoption. The widespread use of small UAS in an eastern European post-conflict nation produced large-scale deployment of unmanned platforms for intelligence, surveillance, reconnaissance (ISR), logistics delivery, and direct strike, in which both state and non-state actors operated thousands of systems simultaneously (Watling & Reynolds, 2023). A CSIS analysis characterised this transformation as the emergence of a wartime defence technology ecosystem centred on unmanned systems, with over 200 domestic drone manufacturers producing platforms by 2024 (CSIS, 2024). The scale of this deployment created a population of trained operators, field-repair technicians, and supply chain managers whose skills have no peacetime analogue in nations that did not experience similar conflict intensity.

Mowery and Rosenberg (1998) documented how military research and development historically seeded civilian technology ecosystems, from radar to the internet. The pattern is not unique to the digital age: aviation itself followed a military-to-civilian transfer trajectory after both world wars, as did electronics, computing, and satellite communications (OEC, 2024). However, their analysis focused on institutional transfers---from defence laboratories to universities and firms---over multi-decade timescales. The post-conflict context compresses this transfer. Operators who flew reconnaissance missions possess sensor integration skills directly applicable to infrastructure inspection. Technicians who repaired damaged UAS under field conditions have practical knowledge of failure modes that commercial maintenance programmes take years to accumulate. The transfer is not institutional but embodied: it resides in the hands and habits of individuals who will need post-war employment (Brzoska, 2006).

Mac Ginty (2011) argues that post-conflict societies do not simply adopt international norms or return to pre-war conditions; they create hybrid forms that blend local practices with imported frameworks. The drone ecosystem exemplifies this hybridity. Military UAS doctrine, commercial platform design, open-source flight controller software, and local repair culture combine into something that is neither purely military nor purely civilian, neither wholly local nor wholly international. This hybrid form is precisely what reconstruction policy must learn to recognise and cultivate rather than suppress in favour of a clean military/civilian binary.

### 2.2 Regulatory Tabula Rasa

Post-conflict regulatory environments are often characterised as chaotic, but this characterisation conflates institutional weakness with institutional absence. In practice, nations rebuilding after conflict frequently adopt regulations that are more modern than those of their neighbours, precisely because they are writing on a relatively clean slate rather than amending legacy frameworks (World Bank, 2011). The OECD DAC guidelines on supporting statebuilding in situations of conflict and fragility explicitly recommend leveraging reconstruction windows to establish modern governance frameworks rather than replicating pre-conflict regulatory architectures (OECD DAC, 2011). For drone operations, this creates an opportunity. European Union Aviation Safety Agency (EASA) regulations, which provide a harmonised framework for UAS operations, can be adopted wholesale rather than retrofitted onto existing national aviation authorities with decades of accumulated exemptions and special cases (EASA, 2023).

The regulatory advantage is not merely procedural. It is cognitive. Regulators in a post-conflict nation designing a UAS framework from near-zero do not carry the assumption that drones are primarily recreational or that manned aviation has inherent priority in all airspace. They have lived experience of drones as essential infrastructure---for defence, for humanitarian aid delivery, for damage assessment---and this experience shapes regulatory architectures that treat UAS as a primary rather than secondary mode of aerial operation (Stocker et al., 2017).

### 2.3 Supply Chain Residuals and Infrastructure Resilience

The logistics of wartime drone deployment create physical supply chain infrastructure---component warehouses, 3D printing facilities for replacement parts, battery recycling operations---that persists after hostilities end. Converting these facilities to civilian production requires recapitalisation but not construction from scratch. Studies of post-conflict industrial conversion in other contexts, notably the conversion of military manufacturing in post-1945 Europe and post-1990 eastern Europe, demonstrate that physical plant conversion succeeds when accompanied by market creation for the converted outputs (Brauer & Dunne, 2004). The civilian drone services market---inspection, surveying, precision agriculture, delivery---provides exactly such a market. The global agricultural drone market alone is expected to quadruple by 2030, creating substantial demand for exactly the operational expertise that post-conflict nations possess in abundance (OEC, 2024).

A parallel infrastructure story deserves attention. By late 2023, over 47,000 Starlink terminals were active in the conflict zone, providing resilient broadband connectivity independent of terrestrial infrastructure (Watling & Reynolds, 2023). This satellite-based connectivity layer creates the communications backbone that civilian drone operations require for beyond-visual-line-of-sight (BVLOS) operations, real-time telemetry, and data uplink. The combination of a trained drone workforce, convertible manufacturing capacity, and satellite connectivity forms the infrastructure triad necessary for a civilian drone ecosystem---and it emerged not from deliberate investment but from the exigencies of conflict.

---

## 3. Dual-Output Drone Surveys: Structural and Connectivity Assessment

### 3.1 The Convergence of Physical and Spectral Assessment

Conventional post-conflict damage assessment and telecommunications coverage mapping are conducted as separate exercises, by separate teams, using separate platforms, on separate timelines. Structural damage is assessed through visual inspection, satellite imagery, or engineering surveys. Cellular coverage is modelled through drive tests or propagation modelling based on pre-conflict tower inventories (ITU, 2023). This separation is a legacy of institutional silos, not of technical necessity.

The case for convergence is strengthened by recent advances in AI-accelerated structural assessment. The CLARKE system, developed at Texas A&M University, combines AI analysis with drone imagery to evaluate building, road, and infrastructure damage in minutes rather than days. Deployed during the 2024 hurricane season in Florida and Pennsylvania, CLARKE demonstrated that AI-drone integration can produce actionable damage assessments at speeds compatible with emergency response timelines (Yucesoy, 2025). A comprehensive survey of data-driven structural damage monitoring confirms that the fusion of drone-captured imagery with machine learning classifiers now achieves damage detection accuracy exceeding 90% for standard structural typologies (Dong & Catbas, 2025). These advances transform the dual-output drone survey from a theoretical proposition into an engineering integration challenge.

Modern UAS platforms can carry both optical/LiDAR payloads for structural assessment and software-defined radio (SDR) receivers for RF spectrum analysis simultaneously (Gupta et al., 2022). A typical dual-output configuration uses a multispectral camera (~500 g) and a software-defined radio receiver (~200 g) mounted on a DJI M300-class platform (9 kg maximum take-off weight, 55-minute endurance). Per square kilometre of survey area, such a configuration generates approximately 50 GB of multispectral imagery (author estimate based on manufacturer specifications) and 2 GB of RF samples. Post-processing follows a two-stage pipeline: photogrammetric reconstruction via established toolchains (Agisoft Metashape or the open-source OpenDroneMap), which achieves centimetre-level positional accuracy for structural assessment (Nex & Remondino, 2014), followed by RF analysis as a georeferenced overlay on the reconstructed scene.

A single drone pass over a damaged neighbourhood can thus produce: (a) a photogrammetric 3D model of structural damage at centimetre resolution; (b) a georeferenced map of cellular signal strength, frequency utilisation, and interference patterns; (c) a thermal map indicating energy infrastructure status (active heating systems, electrical faults, insulation breaches); and (d) an AI-classified damage grade for each structure, following established damage scales such as the European Macroseismic Scale (EMS-98) adapted for conflict damage.

### 3.2 Energy Infrastructure as the Integrating Use Case

The planned feasibility study focuses on energy infrastructure assessment in three pilot communities precisely because energy is the integrating variable. Without electricity, cellular towers are inoperable regardless of their physical condition. Without connectivity, smart grid technologies cannot function regardless of generation capacity. Without structural integrity, neither energy nor communications infrastructure can be safely installed. The dual-output survey treats these interdependencies as first-class constraints rather than external factors to be coordinated between agencies after the fact.

The urgency of the energy use case is underscored by the damage data. Energy infrastructure is among the three most affected sectors in the Ukraine reconstruction assessment, alongside housing and transport (World Bank, 2026). Systematic targeting of energy infrastructure during winter months created cascading failures across all infrastructure systems---a pattern that Mavrokapnidis et al. (2024) identify as precisely the kind of compound risk that digital twins are uniquely suited to model.

Nex and Remondino (2014) demonstrated the technical viability of multi-sensor drone payloads for infrastructure inspection, while Yaacoub and Alouini (2020) showed that UAS-based RF mapping provides coverage data at spatial resolutions unattainable by ground-based methods. Yucesoy (2025), in a comprehensive literature review of drone applications in disaster response published in the *International Transactions in Operational Research*, catalogues over 150 studies demonstrating drone utility across damage assessment, search and rescue, logistics, and communications relay---confirming that the individual technical components of the dual-output approach are well-validated. The contribution of the dual-output approach is not in the individual sensing modalities but in their co-registration: structural damage data and connectivity data are captured in the same coordinate system, at the same time, enabling analysis of their mutual dependencies (Kerle et al., 2020). A key engineering challenge in dual-output surveys is spatial resolution reconciliation: structural photogrammetry operates at centimetre resolution while RF coverage mapping operates at metre-to-decametre resolution. Scene integration requires multi-scale spatial indexing, an active research problem (Mavrokapnidis et al., 2024). The TS2 Space 2025 report on drone applications further documents the accelerating use of drones for post-strike inspection of energy installations, railways, and bridges---precisely the infrastructure categories central to our feasibility study (TS2 Space, 2025).

### 3.3 From Data Capture to Scene Creation

The raw outputs of a dual-output drone survey---point clouds, orthomosaics, signal strength maps, thermal imagery---are necessary but not sufficient for reconstruction planning. They must be integrated into a scene: a coherent, bounded, queryable digital representation that supports reasoning about interventions (Waern, 2026a). Scene creation transforms heterogeneous sensor data into a digital twin of the damaged site, in which a planner can ask: "If we restore this transformer substation, which cellular towers come back online, and what coverage does that restore to which residential areas?"

This scene-based approach directly addresses the ontological gap identified in the introduction and responds to the Sendai Framework's Target G, which calls for substantially improved availability of and access to multi-hazard early warning systems and disaster risk information and assessments by 2030 (UNDRR, 2015). The Sendai midterm review identified a persistent gap between the data that disaster risk management requires and the data that existing assessment methodologies produce (Mavrokapnidis et al., 2024). The scene is not a report about the site; it is a structured digital proxy of the site itself. It preserves spatial relationships, material properties, and infrastructure interdependencies that are lost in conventional damage assessment workflows, where each agency extracts the subset of information relevant to its mandate and discards the rest (Coppola, 2015).

---

## 4. Consortium Strategy: Grant Stacking as a Methodology

### 4.1 The Problem of Fragmented Funding

Post-conflict reconstruction funding is notoriously fragmented. The European Union's Ukraine Facility, the World Bank's multi-donor trust funds, bilateral development agencies, and private philanthropic foundations each operate with distinct application processes, evaluation criteria, reporting requirements, and disbursement timelines (European Commission, 2024). A drone-based energy infrastructure feasibility study that costs approximately USD 150,000 sits in an awkward funding gap: too large for most innovation grants, too small to justify the transaction costs of development finance, and too cross-cutting for sector-specific tenders. This is especially problematic given the USD 588 billion total reconstruction need---the gap between available coordinated funding and the scale of the challenge creates space for innovative funding approaches (World Bank, 2026).

### 4.2 Consortium-Stacking as a Solution

Consortium-stacking is the practice of bundling three or more related but distinct grant proposals, each addressing a different funder's priorities, into a mutually reinforcing portfolio. The approach draws on portfolio theory in finance (Markowitz, 1952) but applies it to grant strategy: diversification across funders reduces the variance of total funding while the thematic coherence of the portfolio increases credibility with each individual funder.

In practice, a consortium undertaking drone-based reconstruction assessment might simultaneously submit: (a) a technology development proposal to a national innovation agency, framed around dual-output sensor integration; (b) a humanitarian application proposal to a development finance institution, framed around rapid damage assessment for displaced populations; and (c) a telecommunications infrastructure proposal to a connectivity-focused fund, framed around RF spectrum mapping for network reconstruction. Each proposal is independently viable, but the existence of the other two signals to reviewers that the consortium has a comprehensive vision and a diversified funding base (Bozeman & Boardman, 2014).

We hypothesise that consortium-stacking can be formalised around the following decision framework, though we stress that empirical validation is required before it can be considered a proven method:

| Element | Description |
|---------|-------------|
| **Inputs** | Shared geography across proposals; shared core methodology; distinct funders with non-overlapping mandates; complementary consortium partners |
| **Decision rule** | Stack when two or more proposals share a substantial portion (as an illustrative threshold, roughly 50%) of the core methodology but address distinct funder priorities |
| **Success metric** | At least one proposal in the portfolio is funded within 12 months of submission |

This framing is offered as a testable hypothesis rather than a validated methodology. The conditions under which stacking increases total funding probability---and the conditions under which it dilutes focus---remain open empirical questions.

### 4.3 Credibility Cascades

The mechanism by which consortium-stacking works is a credibility cascade. Each funded proposal increases the consortium's track record, which improves success probability for subsequent proposals, which in turn attracts additional consortium partners, which further strengthens future applications. This positive feedback loop is well-documented in the grants literature (Bol et al., 2018), but it is rarely treated as a deliberate strategy. Post-conflict environments, where institutional track records are thin and international collaboration is essential, are precisely the contexts where credibility cascades matter most.

---

## 5. AI-Accelerated Proposal Development

### 5.1 The Temporal Mismatch

Reconstruction needs evolve at the pace of conflict---cities change hands, infrastructure is destroyed and partially rebuilt, populations shift---while institutional funding operates on quarterly or annual cycles. A grant application that accurately described conditions in January may be obsolete by the time reviewers assess it in April. This temporal mismatch is not merely an inconvenience; it is a structural failure mode that systematically disadvantages proposals for dynamic post-conflict environments (OCHA, 2023).

### 5.2 AI as Temporal Compressor

Large language models and associated AI documentation tools can compress the proposal development cycle from weeks to days by automating literature review, budget template population, compliance checking, and narrative drafting. To the author's knowledge, no peer-reviewed study has systematically evaluated LLM-assisted proposal writing in the grant context; this represents a research gap that the present paper identifies but does not claim to fill. The compression does not eliminate the need for domain expertise---the strategic choices about what to propose, to whom, and in what combination remain irreducibly human---but it removes the bottleneck of document production that currently paces the cycle.

For the feasibility study under consideration, AI-accelerated proposal development enabled a consortium of partners across three countries to produce coordinated applications to multiple funders within a two-week window, a timeline that would have been impossible with conventional proposal writing processes. The AI tools served as what Suchman (2007) would term "articulation work" facilitators: they handled the labour of aligning formats, cross-referencing budgets, and maintaining narrative consistency across documents, freeing human participants to focus on substantive strategic decisions.

### 5.3 Risks and Mitigations

AI-accelerated proposal development carries risks that must be acknowledged. Homogenisation of language across proposals submitted to different funders can trigger plagiarism detection systems or, worse, signal to reviewers that the proposals are formulaic rather than thoughtfully tailored (Stokel-Walker & Van Noorden, 2023). The mitigation is architectural: AI tools should generate first drafts that human experts then substantially revise, rather than producing final documents. The time saving comes from eliminating the blank-page problem, not from eliminating human judgment.

There is also a risk that the speed of AI-accelerated development outpaces the capacity for genuine stakeholder consultation, particularly with affected communities in the post-conflict zone. Speed is valuable only insofar as it serves accuracy and legitimacy; a rapidly produced proposal that does not reflect local priorities is worse than a slowly produced one that does (Chambers, 1997). Autesserre (2014) has demonstrated that international interventions consistently fail when they prioritise thematic expertise over local knowledge---a finding that applies with equal force to AI-accelerated proposal development. The speed of AI-generated text is valuable only when it serves locally grounded strategy.

---

## 6. The Reality Construct Applied

### 6.1 Theoretical Foundation

The concept of digital twin as a mirror of physical reality was established by Grieves (2014), who defined the digital twin as comprising a physical entity, a virtual counterpart, and the bidirectional data connections between them. Tao et al. (2019) extended this into a five-dimensional model---physical entity, virtual model, services, data, and connections---that has become the standard reference architecture for industrial digital twins. Mavrokapnidis et al. (2024), analysing opportunities emerging from the Sendai Framework midterm review, demonstrate that urban digital twins represent a critical and underexploited capability for disaster risk management. Their analysis maps specific Sendai targets---including Target G on disaster loss data---to digital twin capabilities, finding significant implementation gaps across all seven global targets. This finding directly supports the ontological gap thesis of the present paper: the Sendai Framework's own monitoring reveals that existing assessment methodologies are insufficient for achieving agreed targets, and that scene-based digital representations offer a pathway to close the gap.

Building on this established foundation, the author's Reality Construct framework proposes an extension specific to scene-based planning: effective digital twin creation must begin from physical reality as the persistent layer, rather than from institutional abstractions that represent reality at various removes. The framework identifies an ontological hierarchy: reality is primary; the scene (a structured, bounded digital representation of a portion of reality) is the first-order construct; models, simulations, and reports are second-order constructs derived from scenes. Planning that begins from second-order constructs and works backward to reality is possible but inherently lossy, while planning that begins from scene creation and works forward to analysis preserves maximum fidelity (Waern, 2026a, DOI: 10.5281/zenodo.19587944). We acknowledge that this position assumes a form of scientific realism that is contested within STS---notably by Mol's (2002) ontological politics and Barad's (2007) agential realism, which argue that reality is enacted rather than discovered. Our framework does not require resolving this debate; it requires only that shared spatial referents enable practical coordination across communities, regardless of their ontological status.

### 6.2 Application to Post-Conflict Reconstruction

In the reconstruction context, the destroyed infrastructure is the reality. A bombed-out electrical substation, a collapsed cellular tower, a cratered road---these are not problems to be documented; they are the foundational data. The ontological gap in conventional reconstruction planning arises because the planning process treats documents as primary: the damage assessment report, the coverage map, the engineering survey. Each document is a projection of reality onto a particular institutional plane, and the projections do not compose cleanly. The damage assessment records physical destruction but not its connectivity implications. The coverage map models signal propagation but not the structural condition of the towers. The engineering survey evaluates load-bearing capacity but not the RF environment.

The dual-output drone survey, understood through the Reality Construct framework, is a scene creation operation. It captures the site itself---geometry, materials, spectral environment, thermal signature---in a unified spatial reference frame. All subsequent analyses are derived from this scene rather than from independent institutional projections. The scene is the boundary object (Star & Griesemer, 1989) that allows energy planners, telecommunications engineers, structural engineers, and humanitarian coordinators to share a common spatial reference without requiring them to share a common institutional ontology. In practice, multi-stakeholder scene sharing faces interoperability challenges: structural engineers use IFC, urban planners use CityGML, and RF engineers use proprietary formats. Standards such as OGC CityGML for 3D urban models provide partial bridges but no unified scene interchange standard currently exists.

Verhulst (2023), in a systematic analysis of technologies for peaceful futures, identifies seven technological domains with peacebuilding potential. The drone-based scene creation methodology described here intersects at least three of those domains: sensing and monitoring, data integration, and simulation. Verhulst's "peace by design" framework argues that technology can be intentionally architected to support peaceful outcomes rather than merely repurposed from other domains. The Reality Construct, by positioning shared physical reality as the persistent layer around which diverse stakeholders coordinate, embodies this principle: the scene is designed for coordination, not merely for inspection.

### 6.3 From Plato's Cave to the Drone-Legible City

The metaphor of Plato's cave, while overused in philosophy, has precise application here. Reconstruction planners operating from reports and satellite imagery are observing shadows on the cave wall---projections of the three-dimensional, multi-spectral reality of the destroyed site onto flat, single-modality representations. The drone survey does not merely produce better shadows. It enables the planner to leave the cave: to interact with a digital proxy of the site that preserves the spatial, structural, and spectral relationships that flat representations destroy (Grieves & Vickers, 2017).

This is not a claim about technological determinism. Drones do not automatically produce good reconstruction plans any more than telescopes automatically produce good astronomy. The claim is ontological: the quality ceiling of reconstruction planning is determined by the fidelity of its foundational representation, and scene-based representations have a higher fidelity ceiling than document-based representations. Whether that ceiling is reached depends on human expertise, institutional coordination, and political will---but at least the ceiling is higher (Tao et al., 2019).

The CLARKE system's deployment in the 2024 hurricane season provides a concrete proof point. By combining AI classification with drone-captured imagery, damage assessment timelines were compressed from days to minutes, enabling resource allocation decisions while conditions on the ground still matched the assessment data (Yucesoy, 2025). When applied to post-conflict reconstruction at scale---where the USD 195 billion in direct damage spans thousands of sites across hundreds of communities (World Bank, 2026)---the compounding effect of this temporal compression is transformative. Each site assessed in minutes rather than days means the overall reconstruction programme can begin operating from current reality rather than from increasingly stale documentary representations.

---

## 7. Limitations

This paper must acknowledge several significant limitations that constrain the generalisability of its arguments.

**Single-country empirical anchor.** The feasibility study that motivates this paper involves three communities in a single eastern European post-conflict nation. While the structural dynamics described---expertise transfer, regulatory opportunity, consortium strategy---are theoretically generalisable, empirical validation requires comparative studies across different post-conflict contexts with different conflict types, durations, and technological bases. The anonymisation of the conflict nation is maintained for conflict sensitivity rather than analytical necessity; the context is identifiable to informed readers.

**Ongoing conflict.** The nation in question is not fully post-conflict; hostilities continue in some regions while reconstruction proceeds in others. This creates a dynamic environment in which the conditions described can change rapidly, and the feasibility of drone operations is subject to security constraints that do not apply in fully post-conflict settings (Meier, 2015).

**Regulatory uncertainty.** The characterisation of post-conflict regulatory environments as opportunities for clean-slate adoption of modern frameworks is optimistic. In practice, regulatory development is subject to political pressures, institutional capacity constraints, and competing priorities that may not favour rapid UAS integration (Clarke, 2014).

**Dual-use concerns.** The conversion of military drone expertise to civilian applications raises dual-use concerns that this paper does not fully address. Skills and supply chains that serve civilian infrastructure inspection can also serve renewed military operations, and the distinction between civilian and military UAS becomes blurred at the component and operator level (Altmann & Sauer, 2017).

**AI proposal development maturity.** The claim that AI tools can compress proposal timelines from weeks to days is based on recent experience but lacks systematic evaluation. The quality, compliance, and ultimate success rates of AI-accelerated proposals compared to conventionally developed proposals remain to be established.

**Budget constraints.** The approximate USD 150,000 budget for the feasibility study is sufficient for initial assessment of three communities but inadequate for comprehensive reconstruction planning. The paper describes a proof-of-concept, not a complete methodology.

**Hybrid peace complexity.** Mac Ginty (2011) warns that hybrid forms in post-conflict societies can entrench power asymmetries as easily as they can democratise access. The drone ecosystem's hybridity---combining military experience, international technology platforms, and local repair cultures---may reproduce conflict-era hierarchies rather than creating equitable civilian structures. This risk requires deliberate governance design, not merely market forces.

---

## 8. Future Research and Conclusion

### 8.1 Future Research Directions

Several research directions emerge from this analysis. First, longitudinal studies of military-to-civilian drone expertise transfer in post-conflict environments would provide empirical grounding for the claims made here. Second, technical development of integrated multi-sensor payloads optimised for simultaneous structural and RF assessment represents an engineering research programme with clear commercial applications. Third, the consortium-stacking methodology requires formalisation and evaluation: under what conditions does portfolio diversification across funders increase total funding probability, and when does it instead dilute focus and reduce credibility? Fourth, the effects of AI-accelerated proposal development on grant success rates, proposal quality, and stakeholder inclusion warrant systematic study, ideally through randomised controlled trials or natural experiments where some consortia adopt AI tools and others do not.

The Mavrokapnidis et al. (2024) mapping of Sendai targets to digital twin capabilities provides a concrete research agenda: for each of the seven Sendai global targets, what are the minimum digital twin capabilities required, and which drone-based data capture protocols can most efficiently provide the foundational scene data? This research programme would bridge the gap between disaster risk governance (which sets targets) and digital twin engineering (which builds capabilities), using the post-conflict reconstruction context as the most demanding test case.

More broadly, the Reality Construct framework requires validation across diverse digital twin application domains. The post-conflict reconstruction context is one test case; industrial inspection, urban planning, environmental monitoring, and precision agriculture represent others. If the ontological hierarchy proposed---reality to scene to model---holds across these domains, it suggests a general methodology for digital twin creation that is not domain-specific but reality-specific.

### 8.2 Toward a Post-Conflict Innovation Framework

The argument of this paper can be distilled to a single claim: post-conflict environments are not merely sites of destruction that require external reconstruction; they are emergent innovation ecosystems that possess unique advantages for specific technology domains, of which civilian drone infrastructure is a particularly clear example. The military-to-civilian expertise transfer provides human capital. The regulatory clean slate provides institutional space. The destroyed infrastructure provides both the problem and the persistent layer for digital twin-based solutions. The international attention provides funding opportunities that consortium-stacking can systematically capture. And AI-accelerated proposal development provides the temporal compression necessary to match institutional timelines to the pace of post-conflict evolution.

Autesserre's (2021) central insight---that building peace does not require billions of dollars but does require giving power to local citizens---reframes the entire drone workforce argument. The trained operators, technicians, and supply chain managers who emerged from the conflict are not merely a convenient labour pool; they are the local knowledge holders whose participation is, per the peacebuilding literature, the single strongest predictor of intervention success. A reconstruction strategy that imports international drone operators and marginalises this local workforce is not merely economically wasteful; it is, by the evidence of three decades of peacebuilding research, structurally likely to fail (Autesserre, 2014).

This framing does not minimise the suffering caused by conflict, nor does it suggest that conflict is in any sense desirable. It suggests, rather, that reconstruction policy should recognise and cultivate the innovation potential that emerges from conflict, rather than treating post-conflict nations solely as recipients of external expertise and technology. The three pilot communities at the heart of the feasibility study described here are not test sites for external technology; they are the originators of a civilian drone ecosystem that may, in time, serve as a model for infrastructure assessment globally.

The ontological gap remains the central challenge. So long as reconstruction planning begins from shadows---from reports, maps, and models that are projections of physical reality rather than structured representations of it---the process will be slower, less accurate, and less responsive than the situation demands. The Sendai Framework demands better data. The World Bank's USD 588 billion estimate demands better allocation. The 91,847 infrastructure units damaged globally each year demand faster assessment. Dual-output drone surveys, understood as scene creation operations within the Reality Construct framework, offer a path from shadow to substance. The destroyed site, captured at the fidelity that modern sensor technology permits, becomes not merely a subject of planning but a participant in it: a digital proxy that preserves the spatial, structural, and spectral complexity that planning must navigate.

The cave is already there. The drones make it legible.

---

## References

Altmann, J., & Sauer, F. (2017). Autonomous weapon systems and strategic stability. *Survival*, *59*(5), 117--142. https://doi.org/10.1080/00396338.2017.1375263

Autesserre, S. (2014). *Peaceland: Conflict resolution and the everyday politics of international intervention*. Cambridge University Press.

Autesserre, S. (2021). *The frontlines of peace: An insider's guide to changing the world*. Oxford University Press.

Bol, T., de Vaan, M., & van de Rijt, A. (2018). The Matthew effect in science funding. *Proceedings of the National Academy of Sciences*, *115*(19), 4887--4890. https://doi.org/10.1073/pnas.1719557115

Bozeman, B., & Boardman, C. (2014). *Research collaboration and team science: A state-of-the-art review and agenda*. Springer.

Brauer, J., & Dunne, J. P. (2004). *Arms trade and economic development: Theory, policy and cases in arms trade offsets*. Routledge.

Brzoska, M. (2006). Introduction: Criteria for evaluating post-conflict reconstruction and security sector reform. *International Peacekeeping*, *13*(1), 1--13. https://doi.org/10.1080/13533310500424603

Center for Strategic and International Studies. (2024). *Ukraine's emerging defence tech ecosystem: Unmanned systems and innovation under fire*. CSIS.

Chambers, R. (1997). *Whose reality counts? Putting the first last*. Intermediate Technology Publications.

Clarke, R. (2014). The regulation of civilian drones' impacts on behavioural privacy. *Computer Law & Security Review*, *30*(3), 286--305. https://doi.org/10.1016/j.clsr.2014.03.005

Collier, P., & Hoeffler, A. (2004). Aid, policy and growth in post-conflict societies. *European Economic Review*, *48*(5), 1125--1145. https://doi.org/10.1016/j.euroecorev.2003.11.005

Coppola, D. P. (2015). *Introduction to international disaster management* (3rd ed.). Butterworth-Heinemann.

Dong, C.-Z., & Catbas, F. N. (2025). Data-driven structural damage monitoring and assessment based on unmanned aerial vehicle images: A survey. *Digital Earth*, advance online publication. https://doi.org/[to be verified]

European Aviation Safety Agency. (2023). *Easy access rules for unmanned aircraft systems (Regulations (EU) 2019/947 and 2019/945)*. EASA.

European Commission. (2024). *Ukraine Facility: Regulation (EU) 2024/792 of the European Parliament and of the Council*. Official Journal of the European Union.

Grieves, M. (2014). Digital twin: Manufacturing excellence through virtual factory replication. *White Paper*. Florida Institute of Technology. https://doi.org/10.13140/RG.2.2.26367.61609

Grieves, M., & Vickers, J. (2017). Digital twin: Mitigating unpredictable, undesirable emergent behavior in complex systems. In F.-J. Kahlen, S. Flumerfelt, & A. Alves (Eds.), *Transdisciplinary perspectives on complex systems* (pp. 85--113). Springer. https://doi.org/10.1007/978-3-319-38756-7_4

Gupta, S., Mittal, P., & Tanwar, S. (2022). UAV-assisted cellular networks: A survey. *IEEE Access*, *10*, 73856--73890. https://doi.org/10.1109/ACCESS.2022.3190680

Horowitz, M. C. (2019). When speed kills: Lethal autonomous weapon systems, deterrence, and stability. *Journal of Strategic Studies*, *42*(6), 764--788. https://doi.org/10.1080/01402390.2019.1621174

International Telecommunication Union. (2023). *Telecommunication/ICT infrastructure in conflict-affected areas: Technical report*. ITU-D.

Kerle, N., Nex, F., Gerke, M., Duarte, D., & Vetrivel, A. (2020). UAV-based structural damage mapping: A review. *ISPRS International Journal of Geo-Information*, *9*(1), 14. https://doi.org/10.3390/ijgi9010014

Latour, B. (1999). *Pandora's hope: Essays on the reality of science studies*. Harvard University Press.

Mac Ginty, R. (2011). *International peacebuilding and local resistance: Hybrid forms of peace*. Palgrave Macmillan. https://doi.org/10.1057/9780230307032

Markowitz, H. (1952). Portfolio selection. *The Journal of Finance*, *7*(1), 77--91. https://doi.org/10.2307/2975974

Mavrokapnidis, D., Katragadda, S., Meacham, B. J., & Xiao, Y. (2024). Continuing from the Sendai Framework midterm: Opportunities for urban digital twins in disaster risk management. *International Journal of Disaster Risk Reduction*, *102*, 104310. https://doi.org/10.1016/j.ijdrr.2024.104310

Meier, P. (2015). *Digital humanitarians: How big data is changing the face of humanitarian response*. CRC Press.

Mowery, D. C., & Rosenberg, N. (1998). *Paths of innovation: Technological change in 20th-century America*. Cambridge University Press.

Nex, F., & Remondino, F. (2014). UAV for 3D mapping applications: A review. *Applied Geomatics*, *6*(1), 1--15. https://doi.org/10.1007/s12518-013-0120-x

Observatory of Economic Complexity. (2024). Drones: Beyond the battlefield. Retrieved April 15, 2026, from https://oec.world/en/blog/drones_beyond_battlefield

OECD DAC. (2011). *Supporting statebuilding in situations of conflict and fragility: Policy guidance*. OECD Publishing. https://doi.org/10.1787/9789264074989-en

Office for the Coordination of Humanitarian Affairs. (2023). *Global humanitarian overview 2024*. United Nations OCHA.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907--39. *Social Studies of Science*, *19*(3), 387--420. https://doi.org/10.1177/030631289019003001

Stocker, C., Bennett, R., Nex, F., Gerke, M., & Zevenbergen, J. (2017). Review of the current state of UAV regulations. *Remote Sensing*, *9*(5), 459. https://doi.org/10.3390/rs9050459

Stokel-Walker, C., & Van Noorden, R. (2023). What ChatGPT and generative AI mean for science. *Nature*, *614*(7947), 214--216. https://doi.org/10.1038/d41586-023-00340-6

Suchman, L. A. (2007). *Human-machine reconfigurations: Plans and situated actions* (2nd ed.). Cambridge University Press.

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, *15*(4), 2405--2415. https://doi.org/10.1109/TII.2018.2873186

TS2 Space. (2025). Drones in Ukraine (2022--2025): A comprehensive report. Retrieved April 15, 2026, from https://ts2.tech/en/drones-in-ukraine-2022-2025-a-comprehensive-report/

United Nations Development Programme. (2020). *Recovering better: Economic and social challenges and opportunities*. UNDP.

United Nations Office for Disaster Risk Reduction. (2015). *Sendai Framework for Disaster Risk Reduction 2015--2030*. UNDRR. https://www.undrr.org/publication/sendai-framework-disaster-risk-reduction-2015-2030

United Nations Office for Disaster Risk Reduction. (2023). *Global assessment report on disaster risk reduction 2023: Sendai Framework monitoring data*. UNDRR.

Verhulst, S. G. (2023). Peace by design: Seven technologies and processes for peaceful futures. In *Data & Policy*, *5*, e18. https://doi.org/10.1017/dap.2023.16

Waern, N. (2026a). The Reality Construct: Scene creation as the foundational operation for digital twin ecosystems (Version 2). *Zenodo*. https://doi.org/10.5281/zenodo.19587944

Watling, J., & Reynolds, N. (2023). *Meatgrinder: Russian tactics in the second year of its invasion of Ukraine*. Royal United Services Institute for Defence and Security Studies.

World Bank. (2011). *World development report 2011: Conflict, security, and development*. The World Bank.

World Bank. (2026). *Ukraine: Fifth rapid damage and needs assessment (RDNA5), February 2026*. The World Bank.

Yaacoub, E., & Alouini, M.-S. (2020). A key 6G challenge and opportunity---connecting the base of the pyramid: A survey on rural connectivity. *Proceedings of the IEEE*, *108*(4), 533--582. https://doi.org/10.1109/JPROC.2020.2976703

Yucesoy, B. (2025). A comprehensive review of drones in disaster response and emergency management. *International Transactions in Operational Research*. https://doi.org/10.1111/itor.13506

---

*Received: April 2026. This is a preprint deposited on Zenodo. Peer review status: not peer-reviewed.*

*Correspondence: Nicolas Waern, WINNIIO AB, Gothenburg, Sweden. ORCID: 0000-0001-7970-2707.*
