---
title: "The Rehearsal Space — Why Hybrid Satellite-Terrestrial Networks Need Orchestrated Digital Twins"
author: "Nicolas Waern"
affiliation: "WINNIIO AB"
orcid: "0009-0001-4011-8201"
email: ceo@winniio.io
keywords: digital twin, non-terrestrial networks, NTN, direct-to-device, D2D, TN/NTN convergence, mobility robustness, MRO, handover, co-channel interference, 3GPP Release 19, regenerative payload, autonomous networks, TM Forum, AI-RAN, self-healing networks, explainable AI, WINNIIO, Life Atlas
status: published
date: 2026-07-29
license: CC-BY-4.0
zenodo_community: winniio-research
language: en
type: sentinel-whitepaper
---

# The Rehearsal Space

*Why hybrid satellite-terrestrial networks need orchestrated digital twins — one orchestration twin, many domain twins working together*

*By Nicolas Waern, CEO — WINNIIO AB / Life Atlas*

*Fictionalized composite scenario grounded in industry-standard NTN launch conditions (satellite–terrestrial co-channel reuse in operator-licensed bands, mass-market subscriber base, government-linked spectrum programs) — not a description of any named operator or event.*

---

## The claim

A digital twin — in the original sense of a virtual counterpart continuously reconciled against its physical system [4, 5] — does one thing for a satellite direct-to-device launch: it moves handover and interference failures from the live network — where every customer is a test probe — into a simulation, where mistakes are free. And "a twin" is shorthand for an architecture, not a monolith: no single model spans orbital dynamics, radio propagation, city geometry, protocol behavior, and live network state. What works in practice is **one orchestration twin coordinating many domain twins** — each best-in-class at its own physics, composed into one rehearsal space, each replaceable without replacing the whole. Without that, six functions — planning, operations, finance, regulatory, legal, security — each independently rediscover the same failure after it has already reached customers. That is not six problems. It is one: no rehearsal space for reality.

One caveat governs everything that follows, and it cuts against the vendor as much as for it: **a twin without a measured accuracy figure is a rendering, not an instrument.** The first deliverable of any credible program is small and falsifiable — one cluster, one prediction against a named KPI (handover-failure hotspots at cell-relation level, verified against the operator's own performance counters over an agreed window), one error bar. Every benefit below is conditional on that number existing. This paper itself contains no measurements; it is an argument for producing exactly one.

## Why now

Three verifiable facts make this urgent rather than interesting:

1. **Direct-to-device is going broadband and commercial.** Mass-market satellite messaging launched in the US in July 2025 at $10/month [19]; broadband D2D video calls over LEO satellites to unmodified phones have been demonstrated with multiple operators [15, 17], and further national launches are announced [16]. Several programs reuse the operator's own terrestrial spectrum from space — 700 MHz in some deployments [18], 1.9 GHz in others [19] — meaning the satellite and the macro grid interfere with each other by design, per location, per pass [13, 14] — with the regulatory framework for that sharing itself still in motion between WRC-23 and WRC-27 [22, 23].
2. **The base station is moving to orbit.** Regenerative NTN payloads — a full gNB on the satellite — entered 3GPP study with TR 38.821 [2] and were brought into the normative track through Release 19 [10, 11]; the first standards-based 5G-Advanced NTN connections over commercial LEO, including conditional handover, were demonstrated in late 2025 [21]. The satellites move at roughly 7.5 km/s; the cells they project can be earth-fixed, but beam-to-cell mappings re-point on a schedule of minutes, with inter-satellite links behind them [13, 14]. That combinatorial churn exceeds what human planners and the classic SON toolbox [6] were built for.
3. **Autonomy frameworks already point here.** Operators are validating TM Forum Level 4 autonomy in narrow domains [37, 92], the intent-driven loop is being standardized [89, 90, 91], and the 2025–26 research frontier names the bottleneck explicitly: trust in the simulation that closed-loop AI acts through [42, 43]. The twin is where that trust is manufactured — or isn't.

## The two worlds, by stakeholder

The scenario is a composite: an operator launching direct-to-device service over a band shared with its terrestrial grid, in terrain that mixes dense urban, remote, and hard-to-reach geography. Every consequence below follows mechanically from whether a calibrated rehearsal space exists. No figures in this section are measurements; they describe failure modes documented in the mobility-robustness literature.

**Network planning.** With: interference seams and handover conflicts between the space and ground layers are surfaced per-location before launch, fixed in configuration, verified in re-simulation. Without: the seam is discovered by dropped calls; every fix is a live experiment needing a maintenance window, a change board, a rollback plan — and counters say where it hurts, never why.

**Operations (NOC).** With: alarms are judged against a predicted baseline, so deviation means signal; AI-proposed parameter changes are rehearsed in the twin and approved with the physics visible. Without: baseline and noise are indistinguishable, and "AI-powered optimization" recommends changes nobody dares approve — because the one time it was trusted blind, it traded one district's drops for another's coverage hole.

**Finance.** With: the satellite add-on's revenue case survives launch because the customer experience does. Without: refund requests and churn convert the differentiator into the liability, and the coverage-everywhere brand promise becomes the thing the market jokes about. The revenue line, not the RF plan, is what the twin actually protects.

**Regulatory.** With: coexistence evidence is reproducible — versioned inputs, stated error bars, rerunnable studies — the exact form regulators and spectrum conferences accept. Without: the answer to "show us your interference analysis" is a consultant's pre-launch PDF, and a public proceeding begins. Programs funded with public money face this question with certainty, not probability.

**Legal.** With: every automated decision has provenance — which prediction, which model version, which data, which approval — so incident liability is a lookup. Without: it is a negotiation with the satellite partner, conducted without the ability to reconstruct what happened. Indemnity clauses assume someone can determine causation; without a twin, frequently nobody can.

**Cybersecurity.** With: hostile scenarios are rehearsable — GNSS jamming that strips the timing reference the satellite link depends on (a real enough failure mode that 3GPP's Rel-19 summary flags a GNSS-resilience study rolling into Rel-20 [11], and position-independent synchronization research exists because of it [44]) is tested before an adversary tests it. Without: the failure mode is evaluated for the first time in production, and the post-incident report states the scenario was never modeled — the finding regulators and boards actually read.

**The customer** is the stakeholder the whole table collapses into: in one world they notice nothing; in the other they notice everything, and in markets where porting takes minutes, they act on it.

## What "orchestrated" means — and who owns it

The title says orchestrated digital twins, plural, and that word is doing real work. No single model spans the problem. Concretely, a TN/NTN rehearsal space composes at least four domain twins that already exist as separate disciplines:

- an **orbital-dynamics twin** (ephemeris propagation, pass schedules, elevation-dependent beam geometry — the digital-mission-engineering class of tool, advancing state on a timescale of seconds to minutes);
- an **RF-propagation twin** (deterministic ray tracing over real geometry [7], the class now industrialized by GPU tracers such as Sionna RT [30] and NVIDIA's Aerial Omniverse Digital Twin [29] — terrestrial-validated today, and requiring the 3GPP NTN channel model [1] as companion for elevation-dependent LEO-to-ground links; snapshot-based);
- a **protocol-behavior twin** (3GPP mobility events, timers, conditional-handover logic per Rel-17/18 [13] — advancing in milliseconds);
- a **live-state twin** (the operator's counters, configurations and neighbor relations from the OSS — arriving at 15-minute reporting granularity through the management interfaces the O-RAN architecture already defines (O1, R1, E2), with the natural home for this twin beside the SMO and its rApps — the layer operators like Rakuten Symphony have themselves argued for [35]).

Those four clocks — minutes, snapshots, milliseconds, quarter-hours — are the actual engineering problem, and glossing them is how composed twins die. The orchestration twin's job is exactly that reconciliation: an event-driven scheduler that advances orbital geometry per pass segment, triggers propagation re-computation when a beam footprint moves, runs the protocol twin at native timer resolution inside each snapshot, and calibrates the whole against the live-state twin at each reporting period — handing the protocol twin per-location SINR computed by the propagation twin from the orbital twin's time-tagged beam footprints and EIRP masks. This is a co-simulation problem with known engineering patterns, not an invention. O-RAN's research groups have mapped both the use cases and the enabling technologies for exactly this composition [33, 34], and the network-digital-twin literature has converged on the same multi-domain framing [31, 32]; what does not yet exist anywhere is the composed, calibrated, operational whole.

One example of why composition matters: a monolithic coverage model evaluates the satellite beam and the terrestrial grid separately and shows both green. The failure lives in the interaction — co-channel interference at the precise second a moving beam edge crosses a handover boundary. Only a twin-of-twins that advances orbital geometry, propagation, and protocol state on the same clock catches it before a customer does.

Ownership is an architecture decision, not an afterthought. If the orchestration layer belongs to a RAN vendor, it becomes the lock-in it was meant to prevent. The defensible answer is operator-owned orchestration over open interfaces, consuming vendor and open-source domain twins as replaceable components — each best-in-class, none load-bearing for the whole. The incumbents named above are not competitors to that architecture; they are its parts.

And the cost shape is knowable, because the entry ticket was defined at the top. The "one cluster, one prediction, one error bar" pilot is a small-team engagement measured in weeks, not quarters: cluster-scale ray tracing runs on a single modern GPU node in minutes per square kilometer per antenna, protocol simulation is compute-trivial by comparison, and no orchestration platform needs to exist before the first accuracy figure does. The genuinely expensive inputs are legal, not technical — data-sharing agreements for site geometry and counters, and for the NTN case, satellite beam data whose transfer may raise export-control questions before engineering ones. A pilot priced so it clears without a committee is not a compromise; it is the design. The platform investment comes after the error bar earns it, or not at all.

## One scene, for scale

A phone on a ferry leaves the terrestrial network mid–video call and picks up a satellite doing 7.5 km/s, on the same frequency the coastal towers use. Whether that moment is invisible or becomes a support ticket was decided months earlier — by whether someone could afford to be wrong in private.

## Toward high-fidelity holographic societies

The end-state that makes all of this worth building is not a better phone call. It is presence at a distance: holographic-type communication — volumetric, multi-sensory, eventually touchable. The requirements are on record. ITU's Network-2030 work names holographic-type communication a defining use case and quantifies the uncompressed extreme: raw holograms would demand up to terabits per second at sub-millisecond latency [47, 48] — a deliberate upper bound, echoed in industry 6G overviews [77], that compression exists to demolish. The IMT-2030 (6G) framework adopted "immersive communication" as one of six official usage scenarios [72]. Compression is closing the gap fast: MPEG's V-PCC brings a million-point dynamic cloud down to single-digit-megabit streams [50, 55], codec avatars transmit semantics instead of pixels and already use less bandwidth than 2D video on shipping hardware [60, 64] — and the first commercial light-field telepresence products are on the market at $24,999 [63].

What closes the rest of the gap is the network — and this is where the chain of prerequisites runs straight back through this paper:

1. **Flawless mobility.** A hologram call dies at the handover 2D video shrugs off. Inside the terrestrial network, 3GPP's L1/L2-triggered mobility already pushes handover interruption toward near-zero for XR-class traffic [82, 83], and cell-free architectures aim to remove cell edges entirely [85]. But LTM is an intra-network, lower-layer mechanism — the handover it does **not** cover is the one this paper is about: the inter-system TN↔NTN transition, still an open work item in the standards [14]. The one mobility event that cannot yet be engineered to invisibility is exactly the one that must be rehearsed in simulation.
2. **Self-healing operation.** Immersive sessions cannot wait for a human in a NOC. ETSI ZSM intent-driven autonomy [89, 90], TM Forum intent management [91], and the first Level-4-certified production networks [92] define the loop: intent in, closed-loop correction out. Every one of those loops needs a place to rehearse before it acts — the twin again.
3. **Spatially aware infrastructure.** 6G integrated sensing and communication turns the network itself into a spatial sensor [79, 80] — the live geometry feed a nation-scale twin consumes, and the privacy question [81] a sovereignty-first architecture must answer.

The societal stakes are already concrete: telesurgery over public 5G at 3,000+ km with sub-300 ms delay [97, 98] — worth noting that clinical presence tolerates roughly two and a half orders of magnitude more latency than the raw-hologram bound, which is precisely why the requirements space is a spectrum, not a wall — standardized haptic codecs for the tactile internet [96], holograms in classrooms and cultural memory [99], city-scale twins with real governance questions [100], and an accessibility baseline if holographic presence is to be a medium for everyone rather than a niche [101].

The through-line is one sentence: **holographic societies run on networks that cannot afford untested failure — and networks that cannot afford untested failure run on rehearsal spaces.** The hybrid TN/NTN twin argued for in this paper is not a telecom optimization tool that happens to be timely. It is the first load-bearing layer of the infrastructure presence-at-a-distance will stand on.

## Where this is heading

The satellites launch either way. Between now and ~2030: D2D shifts from messaging to broadband [17, 19]; regenerative payloads put base stations in orbit [10, 11]; the 2027 World Radiocommunication Conference decides whether direct satellite-to-phone spectrum scales globally [23] — and the coexistence studies that decision runs on are precisely twin-shaped work. The domain twins are arriving from every direction — GPU ray tracers as open source [30], city-scale RAN twins from silicon vendors [29], twin advocacy from operators themselves [35], use-case maps from the standards bodies [33, 34]. What no one has assembled is the orchestrated, calibrated whole. If the caveat at the top of this paper is met — a measured error bar, per domain, per composition — then operators with that whole will run hybrid networks with smaller teams and defend their spectrum position with data, while operators without it defend theirs with opinions — live, blind, and in public. If the caveat is not met, the twin is theater, and honest theater is still worth less than one verified prediction.

The entry ticket is not a platform pitch. It is one cluster, one prediction, one error bar.

---

## References and further reading

*Sources cited inline carry the argument; the remainder are the surrounding evidence base for the TN/NTN, network-twin, AI-RAN and holographic-communication landscape, listed for the reader who wants the full map.*

**Foundations (pre-2023)**

1. 3GPP TR 38.811, Study on NR to support NTN (2018–20). https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3234
2. 3GPP TR 38.821, Solutions for NR-NTN (2019–21). https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=3525
3. Leopold & Miller, The Iridium System, IEEE (1993). https://ieeexplore.ieee.org/document/236424
4. Grieves, Digital Twin: Manufacturing Excellence through Virtual Factory Replication (2014). https://www.researchgate.net/publication/275211047
5. Glaessgen & Stargel, The Digital Twin Paradigm for Future NASA and USAF Vehicles, AIAA (2012). https://ntrs.nasa.gov/citations/20120008178
6. 3GPP TR 36.902, Self-configuring and self-optimizing network use cases (2011). https://portal.3gpp.org/desktopmodules/Specifications/SpecificationDetails.aspx?specificationId=2582
7. Yun & Iskander, Ray Tracing for Radio Propagation Modeling, IEEE Access (2015). https://ieeexplore.ieee.org/document/7152831
8. Kurt et al., A Vision and Framework for HAPS Networks, IEEE COMST (2021). https://arxiv.org/abs/2007.15088
9. Azari et al., Towards 6G Non-Terrestrial Networks (2021). https://arxiv.org/pdf/2109.14581

**TN/NTN standards & real-world D2D (2024–2026)**

10. Ericsson, NTN payload architecture in Rel-19 (Oct 2024). https://www.ericsson.com/en/blog/2024/10/ntn-payload-architecture
11. 3GPP TSG, Release 19 Summary (Apr 2026). https://www.3gpp.org/ftp/Information/presentations/presentations_2026/2026_04_Rel19.pdf
12. 3GPP, Release 19 overview. https://www.3gpp.org/specifications-technologies/releases/release-19
13. A Tutorial on Non-Terrestrial Networks: Towards Global and Ubiquitous 6G, arXiv (Dec 2024). https://arxiv.org/pdf/2412.16611
14. Non-Terrestrial Networking for 6G, arXiv (Dec 2024). https://arxiv.org/html/2412.00820v1
15. Rakuten Mobile, First satellite video call in Japan (Apr 2025). https://corp.mobile.rakuten.co.jp/english/news/press/2025/0423_01/
16. Rakuten Mobile, Satellite-to-mobile service from Q4 2026 (Feb 2024). https://corp.mobile.rakuten.co.jp/english/news/press/2024/0216_01/
17. AST SpaceMobile, Q1 2025 business update, Businesswire (May 2025). https://www.businesswire.com/news/home/20250512355107/en/
18. AT&T/FirstNet, Band 14 satellite connectivity trials (2025). https://www.firstnet.com/community/news/firstnet-satellite-connectivity-trials-in-2025.html
19. T-Mobile, T-Satellite commercial launch (Jul 2025). https://www.t-mobile.com/news/un-carrier/reaching-for-the-stars-with-t-satellite
20. Starlink Direct-to-Cell status (2026). https://www.satelliteinternet.com/providers/starlink/starlink-direct-to-cell/
21. ESA, First direct 5G connection to LEO satellite (Dec 2024), https://www.esa.int/Applications/Connectivity_and_Secure_Communications/World-first_direct_5G_connection_to_low_Earth_orbit_satellite_opens_new_era_for_mobile_coverage ; ESA/Eutelsat OneWeb, first 5G-Advanced NTN connection incl. conditional handover (Nov 2025), https://www.intelligentcio.com/eu/2025/11/07/esa-and-partners-successfully-demonstrate-worlds-first-5g-advanced-ntn-connection-using-eutelsats-oneweb-low-earth-orbit-leo-satellites/
22. ITU, WRC-23 closing outcomes (Dec 2023). https://www.itu.int/en/mediacentre/Pages/PR-2023-12-15-WRC23-closing-ceremony.aspx
23. GSMA, The road to WRC-27 (2024). https://www.gsma.com/connectivity-for-good/spectrum/the-road-to-wrc-27-a-new-cycle-begins/
24. SoftBank, WRC-23 & WRC-27 roundtable, ITU RRS-24 (Sep 2024). https://www.itu.int/en/ITU-R/seminars/rrs/rrs-24-asia&pacific/
25. AI-RAN Alliance, Vision & Mission whitepaper (Dec 2024). https://ai-ran.org/wp-content/uploads/2024/12/AI-RAN_Alliance_Whitepaper.pdf
26. AI-RAN Alliance WG3, AI-on-RAN whitepaper (2025). https://ai-ran.org/documents/AI-RAN-WG3-AI-on-RAN-Whitepaper.pdf
27. NVIDIA, AI-RAN Goes Live — SoftBank AITRAS (Nov 2024). https://developer.nvidia.com/blog/ai-ran-goes-live-and-unlocks-a-new-ai-opportunity-for-telcos/
28. NVIDIA × SoftBank, Japan AI partnership (2024). https://nvidianews.nvidia.com/news/nvidia-and-softbank-accelerate-japans-journey-to-global-ai-powerhouse
29. NVIDIA, Aerial Omniverse Digital Twin. https://developer.nvidia.com/blog/improve-ai-native-6g-design-with-the-nvidia-aerial-omniverse-digital-twin/
30. Hoydis et al., Sionna RT: Differentiable Ray Tracing, arXiv 2303.11103 (2023). https://arxiv.org/abs/2303.11103

**Network digital twins & autonomy (2024–2026)**

31. From Simulators to Digital Twins for Enabling Emerging Cellular Networks, arXiv (Nov 2024). https://arxiv.org/pdf/2411.08907
32. Network Digital Twin for 6G and Beyond, arXiv (Jun 2025). https://arxiv.org/pdf/2506.01609
33. O-RAN nGRG, Digital Twin RAN Use Cases (2024). https://mediastorage.o-ran.org/ngrg-rr/nGRG%20RS01%20Digital%20Twin%20Use%20Case%20Research%20Report%20v1.0.pdf
34. O-RAN nGRG, Digital Twin Key Enabling Technologies (Oct 2024). https://mediastorage.o-ran.org/ngrg-rr/nGRG-RS01-RS03-Digital%20Twin%20Key%20Enabling%20Technologies%20Research%20Report.pdf
35. Rakuten Symphony, How Digital Twin technology will tame 5G/6G RAN complexity. https://symphony.rakuten.com/blog/how-digital-twin-technology-will-tame-5g-6g-ran-complexity
36. TM Forum Catalyst, Digital twins + agentic AI for L4+ autonomous operations (2025). https://inform.tmforum.org/research-and-analysis/proofs-of-concept/using-digital-twins-and-agentic-ai-to-enable-level-4-autonomous-network-operations
37. Fierce Network, Telcos hit Level 4 autonomous network milestone (2025/26). https://www.fierce-network.com/cloud/telcos-hit-level-4-autonomous-network-milestone-says-tm-forum
38. Hexa-X-II, D3.5 Final architectural framework (Mar 2025). https://hexa-x-ii.eu/wp-content/uploads/2025/03/Hexa-X-II_D3.5_v1.0.pdf
39. ETSI GR ISC 001/003, ISAC use cases & architectures (Mar 2025). https://www.etsi.org/deliver/etsi_gr/isc/001_099/001/01.01.01_60/gr_isc001v010101p.pdf
40. The LLM as a Network Operator, arXiv (Sep 2025). https://arxiv.org/pdf/2509.10478
41. LLMs for Next-Generation Wireless Network Management: Survey, arXiv (Sep 2025). https://arxiv.org/html/2509.05946v1
42. Toward Trustworthy Digital Twins in AI Agent-based Wireless Optimization, arXiv (Nov 2025). https://arxiv.org/pdf/2511.19961
43. TwinLoop: Simulation-in-the-Loop Digital Twins for Online Multi-Agent RL, arXiv (Apr 2026). https://arxiv.org/pdf/2604.06610
44. Position-independent synchronization for 6G NTN, npj Wireless Technology (2026). https://www.nature.com/articles/s44459-026-00032-3
45. Semantics-Aware Unified TN-NTN 6G Networks, arXiv (2025/26). https://arxiv.org/html/2505.01796
46. ESA, Eagle-1 sovereign QKD LEO mission (~2026). https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Eagle-1

**Holographic-type communication, volumetric video & displays**

47. ITU-T FG-NET2030, Representative Use Cases and Key Network Requirements (2020). https://www.itu.int/hub/publication/t-fg-net2030-2020-sub-g1/
48. ITU-T FG-NET2030, New Services and Capabilities for Network 2030 (2019). https://www.itu.int/en/ITU-T/focusgroups/net2030/Documents/Gap_analysis_and_use_cases.pdf
49. Ericsson Technology Review, Enabling Holographic Communication with 5G (2022). https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/holographic-communication-in-5g-networks
50. Graziosi et al., V-PCC and G-PCC point-cloud compression overview, APSIPA. https://www.cambridge.org/core/journals/apsipa-transactions-on-signal-and-information-processing/article/an-overview-of-ongoing-point-cloud-compression-standardization-activities-videobased-vpcc-and-geometrybased-gpcc/56FCAF660DD44348BCB1BCA9B5EC56CF
51. ISO/IEC 23090-12:2023, MPEG Immersive Video (2023). https://www.iso.org/standard/79113.html
52. Ilola et al., MPEG carriage of V3C volumetric video, Frontiers in Signal Processing (2022). https://www.frontiersin.org/journals/signal-processing/articles/10.3389/frsip.2022.883943/full
53. MPEG Immersive Video resource site. https://mpeg-miv.org/
54. IBC, MPEG Heads to the Holograph. https://www.ibc.org/mpeg-heads-to-the-holograph/3507.article
55. Point Cloud Video Streaming in 5G Systems and Beyond, IEEE Wireless Communications. https://pdfs.semanticscholar.org/e923/153b4bdc002dd00b6e73ef9263448a333a5d.pdf
56. Forbes, Light Field Lab raises $50M for SolidLight holograms (2023). https://www.forbes.com/sites/charliefink/2023/02/08/light-field-lab-raises-50m-to-bring-solidlight-holograms-into-the-real-world/
57. Digital Engineering, Light Field Lab modular holographic displays (2024). https://www.digitalengineering247.com/article/light-field-lab-launches-modular-holographics-displays/
58. Looking Glass Factory, group-viewable light-field displays. https://lookingglassfactory.com/
59. Motion Estimation Techniques for Volumetric Video Attribute Compression, arXiv (2026). https://arxiv.org/pdf/2607.03576

**XR & immersive telepresence**

60. Ma et al. (Meta), Pixel Codec Avatars, CVPR (2021). https://arxiv.org/pdf/2104.04638
61. Wei et al., Universal Facial Encoding of Codec Avatars from VR Headsets, ACM TOG (2024). https://dl.acm.org/doi/10.1145/3658234
62. Google, Project Starline commercialization with HP (2024). https://blog.google/technology/research/google-project-starline-hp-partnership/
63. HP, HP Dimension with Google Beam (2025). https://www.hp.com/us-en/newsroom/press-releases/2025/hp-dimension-with-google-beam-at-infocomm-2025.html
64. Cheng et al., A First Look at Immersive Telepresence on Apple Vision Pro, ACM IMC (2024). https://dl.acm.org/doi/10.1145/3646547.3689006
65. UploadVR, Apple Vision Pro Spatial Personas hands-on (2024). https://www.uploadvr.com/apple-vision-pro-spatial-personas-hands-on/
66. 3GPP, XR and Media Services (XRM, Rel-18) (2023–24). https://www.3gpp.org/technologies/xr-sa2
67. 3GPP, 5G-Advanced XR features as the bridge towards 6G (2024). https://www.3gpp.org/technologies/xr-towards-6g
68. 5G Americas, Extended Reality and 3GPP Evolution. https://www.5gamericas.org/extended-reality-and-3gpp-evolution/
69. Psychometric QoE modeling for point-cloud video, EURASIP JIVP (2024). https://jivp-eurasipjournals.springeropen.com/articles/10.1186/s13640-024-00655-y
70. Modeling User QoE in Adaptive Point Cloud Video Streaming (2025). https://www.researchgate.net/publication/390256538
71. Adaptive 3D Gaussian Splatting Video Streaming, arXiv (2025). https://arxiv.org/pdf/2507.14454

**6G requirements for holographic societies**

72. ITU-R M.2160-0, Framework and objectives of IMT-2030 (Nov 2023). https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.2160-0-202311-I!!PDF-E.pdf
73. ITU, IMT-2030 development press release (Dec 2023). https://www.itu.int/en/mediacentre/Pages/PR-2023-12-01-IMT-2030-for-6G-mobile-technologies.aspx
74. 6G-AI, ITU-R M.2160 framework technical implications. https://6g-ai.com/research/itu-r-m2160-imt-2030-6g-framework
75. Hexa-X-II, D1.2 6G Use Cases and Requirements (2024). https://hexa-x-ii.eu/wp-content/uploads/2024/01/Hexa-X-II_D1.2.pdf
76. Hexa-X-II, D1.4 final use-case analysis (2025). https://hexa-x-ii.eu/wp-content/uploads/2025/05/D1.4-final.pdf
77. one6G, 6G Technology Overview, 3rd ed. (Oct 2023). https://eprints.lancs.ac.uk/id/eprint/210484/4/one6G_TechnologyOverview_version3.pdf
78. one6G, 6G Vertical Use Cases white paper. https://one6g.org/one6g-publishes-a-white-paper-on-6g-vertical-use-cases/
79. Ericsson, Integrated Sensing and Communication explained (2024). https://www.ericsson.com/en/blog/2024/6/integrated-sensing-and-communication
80. Intelligent ISAC: A Survey, Science China Information Sciences (2024). https://link.springer.com/article/10.1007/s11432-024-4205-8
81. Secure ISAC in 6G Networks: Survey, IEEE COMST (2024). https://dl.acm.org/doi/10.1109/COMST.2024.3432871

**Mobility perfection as prerequisite**

82. Ericsson Technology Review, Reducing handover interruption with L1/L2 triggered mobility (2024). https://www.ericsson.com/en/reports-and-papers/ericsson-technology-review/articles/reducing-handover-interruption-l1l2-triggered-mobility
83. On L1/L2-Triggered Mobility in 3GPP Release 18 and Beyond, IEEE (2024). https://ieeexplore.ieee.org/document/10744020/
84. Ofinno, An Introduction to Lower-Layer Triggered Mobility. https://ofinno.com/blog/an-introduction-to-lower-layer-triggered-mobility-ltm/
85. Demir, Björnson & Sanguinetti, Foundations of User-Centric Cell-Free Massive MIMO (2021). https://arxiv.org/abs/2108.02541
86. Handoffs in User-Centric Cell-Free MIMO Networks: A POMDP Framework, arXiv (2024). https://arxiv.org/pdf/2403.08900
87. The Bridge Toward 6G: 5G-Advanced Evolution in 3GPP Release 19, arXiv (2023). https://arxiv.org/pdf/2312.15174
88. A Tale of Two Mobile Generations: 5G-Advanced and 6G in Release 20, arXiv (2025). https://arxiv.org/pdf/2506.11828

**Self-healing / autonomous networks as prerequisite**

89. ETSI GR ZSM 011, Intent-Driven Autonomous Networks (Sep 2024). https://www.etsi.org/deliver/etsi_gr/ZSM/001_099/011/02.01.01_60/gr_ZSM011v020101p.pdf
90. ETSI GR ZSM 020 (Jan 2026). https://www.etsi.org/deliver/etsi_gr/ZSM/001_099/020/01.01.01_60/gr_zsm020v010101p.pdf
91. TM Forum, IG1253 Intent in Autonomous Networks v1.3. https://www.tmforum.org/resources/how-to-guide/ig1253-intent-in-autonomous-networks-v1-3-0/
92. Ericsson & TDC NET, Industry-first TM Forum Level 4 autonomy certification (Jun 2025). https://www.ericsson.com/en/news/2025/6/tdc-net-and-ericsson-achieves-industry-first-certification-from-tm-forum-of-level-4-autonomy
93. TM Forum Inform, Operationalizing intent-based autonomy at Level 4+. https://inform.tmforum.org/research-and-analysis/proofs-of-concept/operationalizing-intent-based-autonomy-at-level-4
94. Nokia, AI/ML-enhanced mobility in 5G-Advanced toward AI-native 6G. https://www.nokia.com/blog/aiml-enhanced-mobility-in-5g-advanced-paving-the-way-for-an-ai-native-6g/
95. Towards End-to-End Network Intent Management with LLMs, arXiv (2025). https://arxiv.org/pdf/2504.13589

**The societal layer**

96. IEEE Std 1918.1.1-2024, Haptic Codecs for the Tactile Internet (2024). https://ieeexplore.ieee.org/iel8/10555005/10555006/10555007.pdf
97. Telesurgery Expert Conference insights, Journal of Robotic Surgery (2024). https://link.springer.com/article/10.1007/s11701-024-01984-w
98. Chen & Chen, First 5G-based intercontinental remote robotic surgery framework, SSRN (2025). https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5385185
99. Inside Higher Ed, Holograms begin beaming into college classrooms (Feb 2024). https://www.insidehighered.com/news/tech-innovation/teaching-learning/2024/02/23/holograms-begin-beaming-classrooms
100. Urban Digital Twins and Metaverses Towards City Multiplicities, PMC (2024). https://pmc.ncbi.nlm.nih.gov/articles/PMC11584446/
101. W3C WAI, XR Accessibility User Requirements (2021). https://www.w3.org/TR/xaur/

---

*Composite scenario; technical and regulatory context verifiable against the public sources above, as of July 2026.*
