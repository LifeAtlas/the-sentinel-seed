---
title: "Three Architectures, Three Outcomes: A Scenario Analysis of Digital Twin Strategies for Swedish Industrial Resilience Under Armed Conflict"
author: "Nicolas Waern"
affiliation: "WINNIIO AB"
orcid: "0009-0001-4011-8201"
email: ceo@winniio.io
keywords: digital twins, industrial resilience, Swedish defense, scenario analysis, edge computing, knowledge externalization, total defense, data sovereignty, armed conflict, manufacturing continuity
status: draft
date: 2026-04-25
license: CC-BY-4.0
zenodo_community: digital-twins
language: en
---

# Three Architectures, Three Outcomes: A Scenario Analysis of Digital Twin Strategies for Swedish Industrial Resilience Under Armed Conflict

**Nicolas Waern** / WINNIIO AB / ORCID: 0009-0001-4011-8201
**Corresponding author:** ceo@winniio.io / **License:** CC-BY-4.0 / **Submitted:** 2026-04-25

---

## Abstract

Sweden's defense-critical manufacturing base — approximately 150 small and medium metal processors supplying SAAB, BAE Systems Hägglunds, and the Swedish Armed Forces — faces a structural resilience gap that existing procurement, training, and investment frameworks have not fully addressed. This paper presents a structured scenario analysis comparing three digital twin deployment architectures for Swedish industrial continuity under a hypothetical but plausible armed conflict beginning in 2029. Using Schwartz's scenario methodology and drawing on resilience engineering, knowledge management theory, and recent doctrine from Försvarsmakten and MSB, three scenarios are constructed against identical disruption conditions: mass mobilization of industrial workers, coordinated cyberattacks on SCADA networks, and Baltic supply chain disruption. Scenario A (no digital twins) models the baseline knowledge hemorrhage and production collapse. Scenario B (proprietary American cloud-based platforms) models partial mitigation at the cost of data sovereignty and structural cloud dependency. Scenario C (decentralized, open-source, edge-native digital twins) models near-continuous production capability with full national sovereignty over industrial knowledge assets. Capacity modeling using C(t) = C₀ × (1 − α × K_loss(t)) quantifies the divergence: Scenario A reaches 50–60% baseline capacity at month two; Scenario B reaches 65–75%; Scenario C reaches 85–90% and recovers to near-baseline within six to eight weeks. The analysis concludes that architectural choice is a strategic defense decision made today, not in 2029, and that edge-native, open-standard digital twins offer the strongest alignment with sovereignty requirements among the three architectures analyzed.

**Keywords:** digital twins, industrial resilience, Swedish defense, scenario analysis, edge computing, knowledge externalization, total defense, data sovereignty, armed conflict, manufacturing continuity

---

## 1. Prologue: Spring 2029

The call comes at 04:17 on a Tuesday in March 2029.

For the previous 18 months, the Baltic situation had deteriorated in the way that serious observers had long anticipated and that official briefings had consistently underestimated in their public-facing communications. Hybrid operations — infrastructure interference, GPS spoofing in the eastern Baltic, a gas pipeline incident attributed to no party — had been followed by overt military positioning. The diplomatic machinery had failed in the way diplomatic machinery tends to fail when one party has made a decision and is using negotiation as a delay tactic.

By 05:00, Sweden activates *höjd beredskap*. By 06:30, NATO Article 5 is formally invoked. The first mobilization orders to approximately 180,000 reservists are transmitted through the Plikt- och prövningsverket system.

Within 72 hours, three cascades converge on Swedish industrial production:

**Mobilization:** Across the 150-plus small metal processors that constitute the backbone of Sweden's defense supply chain, 25–30% of production workers receive mobilization orders. These are not randomly distributed workers. Military service selection in Sweden has historically drawn disproportionately from technically skilled tradespeople. Among those called up are welders certified for defense-specification alloys, CNC operators with multi-year institutional memory of non-documented machine behaviors, and the logistics coordinators who hold — in their heads and in Excel files — the scheduling knowledge that keeps production lines synchronized.

**Cyber:** Coordinated cyberattacks target Swedish industrial SCADA networks. The attack patterns are not novel; they replicate, with refinements, what Ukrainian industrial facilities experienced beginning in 2022 (Greenberg, 2019; Zetter & Volz, 2025). Swedish industry has had the Ukrainian precedent as a reference case for seven years and has acted on it to varying degrees.

**Supply:** Baltic shipping becomes contested. JIT inventory systems, optimized for cost efficiency under peace conditions, provide two to three weeks of buffer. After that, production depends on what is already in the facility.

Three factories. Three different decisions made three years earlier. Three different outcomes.

---

## 2. Introduction

Sweden's reintegration into NATO collective defense and the publication of the 2025 defense proposition (Prop. 2024/25:34) have refocused national attention on industrial mobilization capacity in ways not seen since the end of the Cold War. The FOI analysis of civil industry contributions to total defense (FOI, 2025) identifies the SME manufacturing sector — metal processors in particular — as a critical vulnerability: high operational dependency on individual expert knowledge, minimal documentation, and infrastructure designed for efficiency rather than redundancy.

Jernkontoret's 2024 report on the steel industry and total defense (Jernkontoret, 2024) and the SBI sector report (Stålbyggnadsinstitutet, 2024) both acknowledge the challenge without fully mapping the architectural solution space. Digital twins are referenced as a future capability rather than an immediate deployment target.

This paper argues that the architectural decisions about how digital twins are deployed — not whether they are deployed — constitute a strategic defense choice with consequences that will materialize within a three-to-five-year horizon. The paper contributes:

1. A structured scenario analysis applying Schwartz (1991) and van der Heijden (2005) methodologies to Swedish industrial resilience under armed conflict conditions.
2. A quantitative capacity degradation model grounding each scenario in comparable metrics.
3. An explicit analysis of data sovereignty implications for cloud-dependent architectures under the U.S. CLOUD Act (U.S. Congress, 2018).
4. A policy recommendation framed as an architectural imperative: sovereignty is architecture, not policy.

The scenarios are not predictions. They are structured explorations of decision consequences. The disruption conditions are held constant across all three. Only the architectural choices differ.

This analysis complements rather than replaces traditional war-gaming and tabletop exercises (FOI, 2025). Where tabletop exercises test human decision-making under uncertainty, the present analysis isolates the technology architecture variable while holding the human and strategic variables constant. The two approaches are complementary: tabletop exercises could use the scenarios developed here as starting conditions, while this analysis provides the quantitative capacity modeling that tabletop formats typically cannot generate. The combination of narrative scenario (for human decision realism) and parametric capacity model (for architectural comparison) represents a methodological contribution distinct from either approach alone.

---

## 3. Theoretical Frameworks and Methodology

### 3.1 Scenario Methodology

This analysis follows the scenario planning tradition established by Schwartz (1991) and developed by van der Heijden (2005). Scenarios are not forecasts; they are internally consistent narratives that explore how a set of driving forces might interact under specified conditions. The value of scenario methodology for this analysis is precisely that it holds the external environment constant while varying the organizational and technological response — isolating the contribution of architectural choice to outcome variance.

While drawing on the scenario planning tradition (Schwartz, 1991; van der Heijden, 2005), this analysis employs a comparative architectural evaluation format: three technology deployment alternatives are assessed under identical disruption conditions, rather than the classic uncertainty-matrix approach. This design choice foregrounds the controllable variable (architecture) while holding the uncontrollable variable (conflict scenario) constant.

The disruption conditions (mobilization, cyber, supply chain) are derived from the FM2025-19772:2 *Utgångspunkter* framework (Försvarsmakten & MSB, 2025), NATO resilience doctrine (NATO, 2024), and published analysis of Ukrainian industrial experience under armed conflict (Zetter & Volz, 2025). These are not speculative; they are the documented planning baseline of Swedish defense authorities.

### 3.2 Knowledge Vulnerability and the Tacit Dimension

The foundational problem in all three scenarios is what Nonaka and Takeuchi (1995) termed the knowledge creation challenge: the conversion between tacit and explicit knowledge. Polanyi's (1966) formulation — "we know more than we can tell" — is not merely a philosophical observation in an industrial context. It is an operational risk. Digital twins as knowledge externalization systems have been systematically characterized across the literature (Grieves, 2014; Negri et al., 2017; Jones et al., 2020; Semeraro et al., 2021), with broad convergence on their role in converting tacit operational knowledge into explicit, machine-readable form.

In Swedish SME metal processing, tacit knowledge is concentrated in ways that create single points of failure. The certified welder who adjusts parameters by sound and vibration. The planner whose Excel file is a 46-sheet artifact of 12 years of hard-won optimization. The CNC operator who knows that machine number seven needs a 0.3mm correction on the Z-axis after thermal expansion in summer. None of this knowledge exists in any system accessible to a replacement worker.

Digital twins, in the context of this analysis, are not merely visualization tools. They are structured knowledge externalization systems — mechanisms for converting tacit expertise into explicit, machine-readable, and spatially-anchored operational data (Cimino et al., 2019; Kritzinger et al., 2018). The Saad et al. (2024) maturity model for digital twins provides the progression framework: from passive documentation (Level 1) through active simulation (Level 3) to autonomous optimization (Level 5). The enabling technologies — IoT integration, cloud and edge architectures, and real-time data pipelines — are surveyed comprehensively by Qi et al. (2021) and Minerva et al. (2020).

The three scenarios differ fundamentally in which modes of the Nonaka and Takeuchi (1995) SECI spiral remain functional under disruption.

In Scenario A, only the Socialization mode — tacit-to-tacit knowledge transfer through shared practice — remains possible. When key knowledge holders are mobilized, the SECI spiral breaks entirely: there is no explicit knowledge substrate to enable Externalization, and no platform through which Combination or Internalization can occur. Each mobilized expert removes their portion of the spiral irreversibly. The concrete failure point is Marcus at welding station three: his adjustment protocol — reducing arc voltage by 4–6% during the first pass on armor-grade plate when humidity exceeds 65% — was never externalized. No document records it. No system encodes it. When the replacement operator produces defective welds on day two, no diagnostic substrate exists to identify the missing parameter. The Externalization mode never engaged; the Combination and Internalization modes have no material to operate on.

In Scenario B, Externalization is partially achieved — tacit expertise has been converted into explicit representations within the cloud platform. However, Internalization is blocked when cloud access fails: the knowledge exists but is inaccessible to the new operators who need to absorb it. The spiral stalls at the Externalization stage under precisely the conditions in which Internalization is most needed. The concrete failure point is the eleven-hour authentication outage on day one: the IQB welding sequences that Marcus documented eighteen months earlier are encoded in the platform's process library, but the platform returns a 401 Unauthorized error for every facility attempting to retrieve them. The knowledge completed the Externalization transition — it is explicit, encoded, and stored — but the Combination and Internalization modes require connectivity that the attack has severed. The SECI spiral breaks not at the encoding stage but at the retrieval stage.

In Scenario C, all four SECI modes remain functional throughout the disruption. Socialization continues through structured knowledge capture sessions encoded in the methodology. Externalization is complete and locally accessible. Combination occurs across the 147-node facility network through mesh querying of aggregate knowledge assets. Internalization — the conversion of explicit digital twin knowledge into new operators' tacit competence — is supported by spatially-anchored 3D overlays that give new operators access to the previous operator's hard-won expertise directly at the point of application. The concrete example is the replacement operator at welding station three in week two: navigating the 3D digital twin of the station, she accesses the humidity-voltage correction protocol that Marcus encoded in his sixth knowledge capture session. It is spatially anchored to the exact location on the machine where the adjustment is made. Within four days she has internalized the correction as procedural habit — the Internalization mode completes its cycle. The SECI spiral does not break under disruption; it slows, then resumes. The architectural difference between scenarios is, in knowledge management terms, the preservation or destruction of the full SECI cycle under stress.

### 3.3 Resilience Engineering

Hollnagel's (2011) resilience engineering framework defines four essential capabilities: the ability to respond to actual disturbances, to monitor potential threats, to anticipate future challenges, and to learn from past experience. The Hollnagel et al. (2006) precepts establish that resilient systems do not merely resist disruption — they absorb it and adapt. The three scenarios in this analysis differ primarily in their *absorption capacity*: Scenario A has none, Scenario B has partial, Scenario C has designed-in absorption.

### 3.4 Capacity Degradation Model

Production capacity under workforce disruption is modeled as:

**C(t) = C₀ × (1 − α × K_loss(t))**

Where:
- C(t) = production capacity at time t
- C₀ = baseline production capacity
- α = knowledge concentration factor (the degree to which production capability depends on specific individuals)
- K_loss(t) = proportion of critical knowledge no longer accessible at time t

For Scenario A, α is high (0.7–0.9 for specialist operations) because knowledge has not been externalized. K_loss rises sharply with mobilization. For Scenario C, α is low (0.2–0.3) because knowledge has been externalized into the digital twin system. K_loss from mobilization is buffered by system access. The scenarios below operationalize these parameters through concrete narrative, translating structural differences into production outcomes.

The parameter values assigned to α in each scenario are estimated based on the architectural properties of each deployment model rather than empirically measured. This creates a limitation: the model outputs are illustrative rather than predictive. We present sensitivity analysis below to demonstrate the range of plausible outcomes.

The capacity degradation model presented here serves as a structured thought experiment rather than a predictive instrument. Its value lies not in the specific output values — which are sensitive to parameter selection as the sensitivity analysis demonstrates — but in its ability to make explicit the relationship between knowledge concentration (α), workforce disruption (K_loss), and capacity degradation. The directional finding — that edge-native knowledge externalization produces materially better resilience outcomes than either the baseline or cloud-dependent alternatives — is robust across the full parameter range tested. We deliberately avoid false precision: the model illustrates mechanisms, not forecasts.

| α value | Scenario A capacity (month 2) | Scenario C capacity (month 2) |
|---|---|---|
| 0.5 (conservative) | 60% | 88% |
| 0.7 (moderate) | 50% | 85% |
| 0.9 (severe) | 40% | 80% |

The directional finding — that Scenario C materially outperforms Scenario A across the full parameter range — holds under all three sensitivity cases. The absolute values are projections, not measurements.

### 3.5 Data Sovereignty Framework

The CLOUD Act (U.S. Congress, 2018) permits U.S. government agencies to compel American cloud service providers to produce data stored anywhere in the world, including data held in European data centers operated by U.S.-headquartered companies. For defense-critical manufacturing data — production sequences, material specifications, supplier networks, throughput capacities — this represents a structural sovereignty gap that is architectural, not contractual. Contractual protections cannot override statutory law. Chander and Lê's (2015) analysis of data nationalism provides the theoretical grounding: data sovereignty in practice requires *physical* custody, not just *legal* custody.

---

## 4. Scenario A — No Digital Twins (Baseline)

### 4.1 Day 1–7: The Knowledge Hemorrhage

At 08:15 on Thursday, the plant manager at a representative metal processing facility — 43 employees, two production lines supplying structural components for armored vehicles — receives the mobilization confirmations. Twelve workers will report to Plikt- och prövningsverket by Monday.

Among the twelve: Marcus, the only operator certified for the IQB (Improved Quality Baseline) welding sequences required for armor-grade specifications. Lena, the lead production planner, whose 46-sheet Excel workbook represents the institutional memory of the scheduling system. Two of the three operators certified for the critical welding portals. The quality control supervisor who has the tacit knowledge of which batches of steel from which suppliers require non-standard pre-heating.

Production does not slow. Production stops.

By day three, the plant manager has contacted the remaining nine workers and three temporary recruits from a general staffing agency. No one knows the IQB sequences except Marcus, who left on Saturday. The welding portal requires a three-week certification process that cannot be compressed. The Excel scheduling system is accessible but requires Lena's operational knowledge to interpret — the formulas reference conditions that exist only in her memory.

The plant enters what the resilience engineering literature would recognize as a *complexity collapse* (Hollnagel, 2011): the system's cognitive demands exceed the available cognitive resources, and rather than degrading gracefully, it fails categorically.

### 4.2 Week 2–4: The Cascade

Training begins without documentation. Workers learn by watching workers who are themselves learning. Error rates increase an estimated 340% above baseline. Rework consumes 40% of production capacity — not to advance production, but merely to remediate errors in production already attempted. Defense contract timelines begin slipping by day ten.

The cyberattack on day eighteen reaches the facility's aging SCADA system. Without documented operational baselines, operators cannot distinguish attacked behavior from degraded-but-normal behavior. The attack succeeds not through technical sophistication but through the absence of a reference state.

By week four, the plant is operating at 40–55% of baseline capacity, and that figure is degrading as untrained workers encounter the increasing complexity of later production stages.

### 4.3 Month 2–6: Permanent Damage

SAAB's supplier network reporting, by month two, shows seven of twelve critical SME suppliers operating at 40–60% of baseline capacity. BAE Systems Hägglunds begins diverting contract allocations to Norwegian and Finnish suppliers with higher continuity capacity — a rational commercial decision with long-term strategic consequences for Swedish industrial capability.

The capacity degradation at month two is not a recovery trajectory. It is a new equilibrium at a lower level. Workers who were trained incorrectly have developed habituated incorrect behaviors. Machine settings have been adjusted by operators without documentation of the adjustments. The institutional knowledge that was lost in the first week is not recoverable — it left with Marcus and Lena, and they are occupied elsewhere.

Recovery to pre-mobilization capacity takes 14 months in this scenario. The strategic impact: 45% degradation for six months, 25% degradation for months 6–12. These are not rounding errors in a defense supply chain — they are the difference between equipping mobilized forces and not equipping them.

---

## 5. Scenario B — Proprietary American Cloud Digital Twins

### 5.1 The Deployment Context

In 2027, following intense lobbying by a U.S. defense technology contractor and facilitated by an FMV procurement framework that prioritized demonstrated capability over sovereignty considerations, a proprietary digital twin platform was deployed across 40 of the 150-plus facilities in the defense supply chain. The platform is sophisticated: 3D facility scanning, process documentation, capacity simulation, and supply chain integration. It runs on AWS GovCloud Stockholm. Authentication is handled through a U.S.-hosted identity service.

The remaining 110-plus facilities were not included. The procurement framework did not extend to them. Cost per facility: €200,000–500,000. These figures are based on publicly available pricing from comparable industrial digitalization programs and the author's experience with digital twin deployment projects (Stålbyggnadsinstitutet, 2024); they should be treated as order-of-magnitude estimates pending formal cost analysis of specific procurement frameworks.

### 5.2 Day 1–7: The Cloud Problem

At 04:17 on Tuesday, the same mobilization orders go out. At the 40 equipped facilities, the digital twin systems contain the IQB sequences, the scheduling logic, the operator certification records, and the process documentation that Scenario A lacks. The knowledge did not leave with Marcus.

At 09:43 the same morning, a coordinated application-layer attack targets the vendor's authentication service and API gateway — the two chokepoints through which all 40 facilities authenticate. The attack pattern, exploiting a known vulnerability in the identity provider's OAuth implementation, generates a volume of malformed token requests sufficient to exhaust connection pool capacity without requiring volumetric traffic. The attack is not unprecedented — it replicates the application-layer targeting that Ukrainian industrial facilities experienced (Zetter & Volz, 2025; Schneier, 2024). The authentication service experiences what the vendor's status dashboard will later describe as "elevated error rates and service degradation." Factory operators attempting to access their digital twin platforms receive authentication failures.

For 11 hours, 40 factories equipped with sophisticated digital twin platforms are locked out of them.

The fallback is paper. Then Excel. The knowledge that was externalized into the platform is inaccessible. Workers revert to Scenario A behaviors, with the additional cognitive overhead of uncertainty: is the system coming back? Should we improvise or wait?

### 5.3 Week 2–4: The Sovereignty Gap

The DDoS clears. The platforms are restored. But the machine learning inference layer — which powers the capacity simulation and cross-training prioritization — requires API calls to a Virginia-based processing cluster. Transatlantic bandwidth is degraded. Latency increases to the point where simulation queries time out.

Operators work with static documentation — essentially, very expensive PDFs.

Meanwhile, a fact that was discussed briefly during the 2027 procurement process and then set aside: the platform has been learning from 40 defense manufacturers for two years. Production sequences. Material specifications. Throughput rates. Supplier relationships. Bottleneck locations. This data is stored on U.S.-controlled infrastructure and is subject to the CLOUD Act (U.S. Congress, 2018). The Swedish government's legal officers, asked about this on day four of the conflict, note that contractual protections do not override statutory authority.

The 40 equipped facilities operate at 60–70% of baseline capacity in week one. The 110-plus unequipped facilities operate at 40–55%, identical to Scenario A. The national production picture is marginally better than Scenario A at a population level, but the improvement is concentrated in a minority of facilities.

### 5.4 Month 2–6: Partial Mitigation, New Dependency

By month two, the transatlantic connectivity issues have been partially resolved through NATO bandwidth prioritization agreements. The 40 equipped facilities reach 65–75% of baseline capacity — a genuine improvement over Scenario A.

The 110-plus unequipped facilities have not improved. The €200,000–500,000 per-facility cost of the proprietary platform was never viable for SMEs operating on margins of 3–7%.

Net national production improvement over Scenario A: approximately 10%. Distributed as: 25–30% improvement at 40 facilities, zero improvement at 110+.

The sovereignty gap is not theoretical. It is a structural feature of the architecture. The data about Swedish defense manufacturing — what is made, how fast, with what specifications, through which supplier networks — is now in a foreign jurisdiction under foreign legal authority. This is not a policy failure. It is an architectural choice made in 2027 that cannot be undone by policy in 2029.

---

## 6. Scenario C — Decentralized, Open-Source, Edge-Native Digital Twins

### 6.1 The Build Trajectory: 2026–2028

In spring 2026, a small Swedish AI company submits a Vinnova grant application for a project titled, in translation, "Knowledge Externalization and Operational Continuity in SME Metal Processing." The application argues that the knowledge concentration risk in Swedish defense supply chain SMEs is not a training problem or a documentation problem — it is an architectural problem, requiring a systems solution. The deployment methodology — SMILE (Waern, 2026) — provides the structured knowledge externalization framework that enables this systems-level response.

The methodology is validated, refined, and published open-source under CC-BY-4.0 by summer 2027. Implementation uses IEC 63278-1 Asset Administration Shell (AAS) format (IEC, 2024) — an open standard that ensures no vendor lock-in and full national control over the data format. Edge hardware costs €15,000–25,000 per facility. Total deployment cost per facility: €30,000–80,000 (Stålbyggnadsinstitutet, 2024; author's deployment experience). These are order-of-magnitude estimates based on comparable SME digitalization programs and should be validated through formal cost analysis prior to procurement.

By autumn 2028, 147 of the 150-plus facilities have implemented the system. The rollout was driven by the SBI and Jernkontoret industry networks, funded by a Vinnova follow-up grant and MSB civil defense funding following the publication of FM2025-19772:2 (Försvarsmakten & MSB, 2025). Systems have been learning for 12–24 months.

A critical design principle was established in the original methodology: *no inference requires cloud connectivity*. All AI models run locally on edge hardware. All data is stored locally. Mesh networking between facilities enables aggregate capacity queries without routing through any external service. The architecture is explicitly designed for degraded-connectivity environments — the planning assumption was armed conflict, not a blue-sky implementation. This design principle reflects the edge computing paradigm documented by Satyanarayanan (2017) and Shi and Dustdar (2016): computation at the network edge eliminates dependency on centralized infrastructure and reduces latency in time-critical applications. The Digital Twin Consortium (2024) has formally codified edge-native deployment as a core capability dimension in its capabilities framework, acknowledging the operational necessity of local inference in disconnected or contested environments.

### 6.2 Day 1–7: The Edge Holds

The mobilization orders arrive. Marcus and Lena and the two welding portal operators receive them. They leave on Saturday.

The knowledge does not leave with them.

Every workstation in the facility was 3D-scanned eighteen months ago. The IQB welding sequences are documented in spatially-anchored 3D overlays — a new operator sees not instructions on a screen but visual guidance projected onto the actual workstation geometry. Marcus participated in twelve structured knowledge externalization sessions over six months, translating tacit expertise into machine-readable process parameters. He found it tedious. He did it because the plant manager told him it was a defense obligation.

The scheduling logic that lived in Lena's Excel workbook was translated into a capacity model that runs locally. It does not require Lena to interpret. It requires inputs: workforce availability, material inventory, order priorities. The plant manager enters the mobilization parameters at 09:00 Saturday morning: "12 workers mobilized, including these specific roles." The system identifies cross-training priorities, schedules for the remaining workforce, and flags three operations that require immediate process adaptation. It does this in under 30 minutes, without any cloud connectivity.

When the DDoS hits AWS Stockholm at 09:43 Tuesday, the edge hardware in the facility is unaffected. There is nothing in Stockholm to attack.

### 6.3 Week 2–4: Cross-Training at Machine Speed

New operators navigate the facility through its 3D digital twin. Physical locations are tagged with process information — not manuals, but operational context. The spatial anchoring of knowledge to physical coordinates reduces the cognitive load of learning in an unfamiliar environment (Tao et al., 2019b; Fuller et al., 2020). The new operator at welding station seven sees, overlaid on the physical machine, the thermal expansion correction protocol that the previous operator encoded over years of experience.

Error rates in week one of Scenario C increase 80% above baseline. This is not good. It is, however, substantially better than the 340% error rate in Scenario A. The difference is not operator competence — in both scenarios, the replacement operators have similar backgrounds. The difference is the knowledge substrate available to those operators.

By week three, error rates have declined to 25% above baseline. The system is actively learning from the new operators' behavior, identifying where the knowledge transfer has gaps and flagging those gaps for prioritized attention. This data-driven adaptation reflects the manufacturing intelligence paradigm described by Tao et al. (2019a): continuous operational data feeds back into the process model, progressively closing the gap between the knowledge encoded at deployment and the knowledge generated by new operators.

The cyberattack on the SCADA system finds an edge architecture with documented operational baselines. The digital twin provides the reference state that operators need to distinguish attacked behavior from normal degradation. The attack is detected and contained within four hours — not because the cybersecurity is more sophisticated, but because the knowledge of what normal looks like is encoded and accessible.

### 6.4 Month 2–6: Autonomous Augmentation

Among the 147 equipped facilities, 23 have reached what the Saad et al. (2024) maturity framework classifies as Level 4–5: predictive and autonomous digital twin operation. At these facilities, robotic welding systems — operating on specifications encoded in the digital twin — handle 40% of standard sequences without human intervention.

The edge architecture demonstrates its full strategic value during the six-week period when transatlantic connectivity is intermittently degraded. MSB-authorized capacity planners are querying aggregate production capacity across all 147 facilities through the mesh network, receiving accurate current-state data without routing through any external system.

The methodology's applicability beyond metal processing becomes operationally relevant in weeks three through six. The same knowledge externalization framework had been applied to 200-plus farms in the Mälardalen region beginning in 2027. Autonomous berry-harvesting robots, programmed with spatially-anchored operational knowledge, are operating at an estimated 70–85% of baseline output with 40% of the pre-mobilization workforce — consistent with preliminary projections from autonomous harvesting research (Duckett et al., 2018; Bechar & Vigneault, 2016), though this specific scenario has not been validated under combined mobilization-plus-conflict stressor conditions. Agricultural production does not collapse in parallel with industrial production.

Drone logistics operators, whose systems were built on the same edge-native AAS framework, receive clearance upgrades under *höjd beredskap* to reroute supply chains around contested Baltic shipping. Reprogramming logistics routes takes hours, not weeks, because the operational logic is encoded in accessible, modifiable formats.

By month two, the 147 equipped facilities are operating at 85–90% of baseline capacity. This is not a recovery trajectory — it is where they land after absorbing the disruption. The recovery to near-baseline (95%+) takes six to eight weeks from the disruption event.

---

## 7. Comparative Analysis

### 7.1 Quantitative Summary

| Metric | Scenario A | Scenario B | Scenario C |
|---|---|---|---|
| Week 1 capacity | 40–55% | 60–70% | 65–75% |
| Month 2 capacity | 50–60% | 65–75% | 85–90% |
| Month 6 capacity | 55–65% | 70–80% | 88–95% |
| Recovery to 90% baseline | 14+ months | 6–8 months | 6–8 weeks |
| Data sovereignty | N/A | Foreign-controlled | National/sovereign |
| Cloud dependency | None | Critical | None |
| Cost per facility | €0 | €200,000–500,000 | €30,000–80,000 |
| Coverage (150+ facilities) | 150+ | 40 | 147 |
| Autonomous capability | None | Limited | Progressive |
| Cyberattack exposure | High | High (additional vector) | Low |

The "Low" cyberattack exposure rating for Scenario C warrants qualification. Edge-native systems face distinct security challenges including physical access vulnerabilities to on-premises hardware, firmware attack vectors at the device layer, and the operational complexity of distributing security patches across 147 disconnected installations (Abbas et al., 2018). However, the attack surface is distributed rather than concentrated: compromise of a single node does not propagate to the network, and the absence of a central authentication chokepoint eliminates the single-point attack vector that proved decisive in Scenario B.

### 7.2 Applying the Capacity Model

Using C(t) = C₀ × (1 − α × K_loss(t)):

In Scenario A, α = 0.8 for specialist operations (high knowledge concentration). K_loss at day three, following mobilization of 25–30% of workforce including disproportionately knowledge-concentrated individuals, is approximately 0.55. C(day 3) ≈ C₀ × (1 − 0.8 × 0.55) = C₀ × 0.56. This aligns with the observed 40–55% capacity range.

In Scenario C, α = 0.25 for the same operations after digital twin deployment. K_loss from the same mobilization is 0.35 (workforce loss without equivalent knowledge loss). C(day 3) ≈ C₀ × (1 − 0.25 × 0.35) = C₀ × 0.91. However, the simplified linear model does not capture operational friction factors that are material in the first days of disruption: cross-training overhead, new operators' unfamiliarity with workstation-specific parameter conventions, and coordination delays inherent in a workforce reorganized under mobilization pressure. Applying an estimated operational friction coefficient of 0.72–0.80 to the model output yields an effective capacity of C_effective(day 3) ≈ 0.91 × 0.72–0.80 = 0.65–0.73, aligning with the 65–75% range reported in the quantitative summary. This friction coefficient is itself a modeling assumption — it reflects the documented learning curve reduction achievable with spatially-anchored knowledge systems (Tao et al., 2019b; Fuller et al., 2020) rather than an empirically calibrated value.

The model clarifies why the gap between scenarios widens over time: in Scenario A, α remains high and K_loss continues to increase as incorrect habits compound. In Scenario C, α declines as the digital twin continues to learn from new operators, and K_loss effectively decreases as new operators absorb knowledge from the system.

### 7.3 The Sovereignty Dimension

Scenario B's partial mitigation comes at a cost not reflected in the week-one capacity numbers. The data held in U.S.-jurisdiction cloud infrastructure represents years of learning about Swedish defense manufacturing specifics: which alloys, which tolerances, which supplier dependencies, which bottlenecks. Under the CLOUD Act framework (U.S. Congress, 2018), this constitutes a *structural* intelligence exposure — not a hypothetical risk, but an architectural feature.

The Chander and Lê (2015) data nationalism analysis is directly applicable: when data sovereignty matters (and it matters most under armed conflict conditions), physical custody is the only reliable sovereignty mechanism. Contractual arrangements, data processing agreements, and bilateral frameworks all operate within political contexts that can change rapidly. Architecture does not change rapidly. The decision made in 2027 about where to store defense manufacturing data is the decision that governs data sovereignty in 2029.

### 7.4 The Coverage Asymmetry

Scenario B's most significant limitation is not technical but economic. The €200,000–500,000 per-facility cost excluded 110-plus SMEs that could not access the procurement framework. Defense supply chains do not have optional tiers. A single-source component missing from the supply chain stops the assembly line regardless of how well the other components are supplied.

Scenario C's €30,000–80,000 per-facility cost, enabled by open-source methodology and standard edge hardware, was accessible through existing SME grant frameworks. The 147/150+ coverage figure is not incidental — it is the architectural consequence of a cost structure designed for SME economics.

### 7.5 Contribution of a Reusable Evaluation Framework

Beyond the scenario narratives, this paper contributes a reusable evaluation framework for national-scale digital twin deployment decisions. The three-architecture comparison template — assessing each option against capacity retention, recovery time, data sovereignty, cloud dependency, cost structure, and autonomous capability — is applicable to any nation evaluating digital twin strategies for critical infrastructure. The comparative table (Section 7.1) can be adapted by defense planners, procurement agencies, or industrial policy makers by substituting their own sector-specific parameters while retaining the analytical structure. Readers should note that the framework's utility is independent of which architecture proves superior in a given national context: the evaluative dimensions themselves constitute the methodological contribution. This template is independent of the Swedish context and of the specific disruption scenario used here, and represents a contribution to the information systems and management science literature on decision frameworks for digital infrastructure under strategic uncertainty.

---

## 8. Cross-Sector Validation: Agriculture and Logistics

The scenario analysis focuses on metal processing, but the methodology's generalizability is part of the strategic argument. Industrial resilience under armed conflict is not sector-specific — it encompasses food production, logistics, healthcare supply chains, and critical infrastructure maintenance.

The extensions to agriculture and logistics are presented at a lower resolution than the core manufacturing analysis, reflecting the author's direct domain experience in metal processing and the theoretical (rather than empirical) basis for cross-sector application. We present these extensions as architectural projections — demonstrations that the same edge-native, spatially-anchored framework generalizes beyond manufacturing — rather than as validated deployment models. Each domain would require its own pilot implementation, sensor integration study, and knowledge externalization protocol development before the capacity estimates cited here could be empirically grounded.

Agricultural robotics literature (Duckett et al., 2018; Bechar & Vigneault, 2016) documents the feasibility of knowledge-encoded autonomous systems for labor-intensive operations. While the agricultural and logistics extensions have not been validated under combined-stressor conditions (see Section 9, Limitations), the underlying architectural principle — spatially-anchored knowledge externalization on edge-native infrastructure — transfers directly across these domains.

Drone logistics systems operating on edge-native AAS frameworks demonstrate the Rasheed et al. (2020) prediction: digital twin value in complex operational environments comes not from visualization but from decision support under degraded conditions. When Baltic shipping is contested, the ability to rapidly reprogram logistics routes depends on operational logic being accessible, modifiable, and not dependent on external authorization.

The cross-sector coherence of Scenario C is itself a resilience argument. A national edge-native digital twin capability is not a factory-by-factory initiative — it is an infrastructure layer that, once established, benefits every sector that deploys it.

---

## 9. Limitations and Methodological Caveats

Scenario analysis is not prediction. The 2029 conflict scenario is a structured exploration, not a forecast. Several limitations warrant explicit acknowledgment.

The capacity degradation model uses simplified α and K_loss parameters. Real-world values vary by facility, by operation type, by workforce demographics, and by the specific knowledge encoded in the digital twin. The model is directionally correct but should not be used for precise operational planning without facility-specific calibration.

The Scenario C deployment timeline — 147 facilities by autumn 2028 — assumes successful grant funding, industry network uptake, and methodology validation. These are plausible but not guaranteed. The scenario is contingent on decisions made in 2026, not predictions about decisions that will be made.

The sovereignty analysis of Scenario B focuses on the CLOUD Act framework applicable to U.S.-headquartered companies. European cloud providers may offer different legal structures, though Scenario B is constructed around the documented procurement patterns of 2025–2026 in which U.S.-headquartered defense technology contractors dominate the field.

The agricultural and logistics extensions of Scenario C are illustrative. They demonstrate methodological generalizability but are not based on the same level of evidentiary grounding as the metal processing scenarios.

Three additional limitations merit explicit acknowledgment. First, the author is CEO of WINNIIO AB, which develops the SMILE methodology that forms the architectural basis of Scenario C. This represents a direct commercial conflict of interest: Scenario C is the favorable outcome for the author's product. While the comparative analysis has been constructed to apply identical evaluative criteria across all three scenarios, readers should apply appropriate skepticism to the Scenario C characterization and seek independent validation of the methodology's performance claims. Second, the capacity model parameters (α and the operational friction coefficient) are estimated from architectural reasoning rather than empirically calibrated from production data. The sensitivity table in Section 3.4 establishes that the directional finding is robust, but the specific numerical outputs should not be used for operational planning without facility-level calibration. Third, the deployment cost estimates for both Scenarios B and C are order-of-magnitude figures derived from comparable programs; they have not been validated through formal procurement analysis.

---

## 10. Implications for Policy and Investment

Three implications follow from this analysis with direct relevance to current policy instruments:

**The time constraint.** Digital twins require time to learn. The capacity improvement in Scenario C at month two — 85–90% versus 50–60% in Scenario A — is the product of 12–24 months of operational learning before the disruption event. A digital twin deployed in 2029 is not useful in 2029. The analysis suggests that deployment programs initiated in 2026 would be at the early end of a viable preparation window, not comfortably ahead of it.

**The coverage imperative.** Defense supply chain resilience is a network property. Improving 40 of 150+ facilities to 70% capacity while leaving 110+ at 40% produces a worse national outcome than improving 147 of 150+ to 65%. The analysis suggests that MSB's civil defense funding frameworks and Vinnova's SME grant instruments would benefit from explicit evaluation against the coverage asymmetry documented here — particularly the per-facility cost differential between the architectures.

**The sovereignty constraint.** The Critical Raw Materials Act (European Commission, 2024) and the FM2025-19772:2 *Utgångspunkter* framework both identify supply chain sovereignty as a national security imperative. The central finding of the sovereignty analysis is that this imperative extends equally to the data about supply chains. An architecture that externalizes defense manufacturing knowledge to foreign-jurisdiction infrastructure is not sovereignty-preserving regardless of the contractual framework surrounding it. The analysis suggests that procurement evaluation criteria would benefit from explicitly addressing where data is physically stored and under which statutory authority it operates.

---

## 11. Epilogue: The Choice

These scenarios are not warnings about 2029. They are structured representations of decision consequences traceable to choices made in 2026.

Scenario A represents the outcome of the default case — what the model predicts when no deliberate architectural choice is made. Facilities that have not externalized operational knowledge are, in the model's terms, operating with high α values and no K_loss buffering. The scenario makes explicit what that structure implies under mobilization conditions.

Scenario B represents a partial mitigation that introduces a new structural dependency. The analysis finds that it exchanges one strategic vulnerability — knowledge concentrated in individuals — for another: knowledge concentrated in foreign-jurisdiction infrastructure. The substitution improves week-one capacity outcomes while creating a sovereignty exposure that is architectural rather than contractual.

Scenario C represents the outcome when edge-native deployment precedes the disruption event by a sufficient margin for the systems to develop operational knowledge. The analysis suggests that the three-to-five-year deployment horizon implied by FM2025-19772:2 (Försvarsmakten & MSB, 2025) makes this scenario achievable, contingent on program initiation timing.

The central analytical finding is that sovereignty in the digital twin context is an architectural property rather than a policy declaration. Operational independence under conflict conditions follows from deployment choices made years in advance — choices about where data is stored, what standards govern its format, and whether inference can run without external connectivity. These choices are made at the facility level, before the disruption conditions that will test them materialize.

---

## Conflict of Interest

The author is CEO of WINNIIO AB, which develops the SMILE methodology referenced as the basis for Scenario C. SMILE is published under CC-BY-4.0 (DOI: 10.5281/zenodo.19683062). The scenario analysis is presented as a scholarly contribution; however, readers should note that Scenario C represents an architecture aligned with the author's commercial interests. The author has endeavored to apply consistent analytical rigor across all three scenarios, and the comparative metrics are presented as estimated projections for future empirical validation, not observed data.

The author submitted a Vinnova grant application in spring 2026 for the methodology described in Scenario C, covering a single pilot factory. This application provided the empirical context for the scenario construction.

## References

Abbas, N., Zhang, Y., Taherkordi, A., & Skeie, T. (2018). Mobile edge computing: A survey. *IEEE Internet of Things Journal*, *5*(1), 450–465. https://doi.org/10.1109/JIOT.2017.2750180

Bechar, A., & Vigneault, C. (2016). Agricultural robots for field operations: Concepts and components. *Biosystems Engineering*, *149*, 94–111. https://doi.org/10.1016/j.biosystemseng.2016.06.014

Chander, A., & Lê, U. (2015). Data nationalism. *Emory Law Journal*, *64*(3), 677–739.

Cimino, C., Negri, E., & Fumagalli, L. (2019). Review of digital twin applications in manufacturing. *Computers in Industry*, *113*, 103130. https://doi.org/10.1016/j.compind.2019.103130

Digital Twin Consortium. (2024). *Capabilities periodic table v3.0*. Object Management Group.

Duckett, T., Pearson, S., Blackmore, S., Grieve, B., Chen, W.-H., Cielniak, G., Cleaversmith, J., Czyrzanski, J., Fox, C., From, P., Georgilas, I., Gunn, S., Hunter, A., Hutchinson, M., Nickson, K., Purnell, G., Sherburn-Holmes, D., Sherwood, J., Sklar, E., & Wright, M. (2018). *Agricultural robotics: The future of robotic agriculture*. UK-RAS Network.

European Commission. (2024). *Regulation (EU) 2024/1252 of the European Parliament and of the Council establishing a framework for ensuring a secure and sustainable supply of critical raw materials* (Critical Raw Materials Act). Official Journal of the European Union.

FOI. (2025). *Civil industris bidrag till totalförsvaret* (FOI-R--5612--SE). Totalförsvarets forskningsinstitut.

Försvarsmakten & MSB. (2025). *Utgångspunkter för det civila försvaret* (FM2025-19772:2, MSB 2025-08877). Swedish Armed Forces and Swedish Civil Contingencies Agency.

Greenberg, A. (2019). *Sandworm: A new era of cyberwar and the hunt for the Kremlin's most dangerous hackers*. Doubleday.

Grieves, M. (2014). *Digital twin: Manufacturing excellence through virtual factory replication* (White Paper). Florida Institute of Technology.

Fuller, A., Fan, Z., Day, C., & Barlow, C. (2020). Digital twin: Enabling technologies, challenges and open research. *IEEE Access*, *8*, 108952–108971. https://doi.org/10.1109/ACCESS.2020.2998358

Hollnagel, E. (2011). *Resilience engineering in practice: A guidebook*. Ashgate.

Hollnagel, E., Woods, D. D., & Leveson, N. (Eds.). (2006). *Resilience engineering: Concepts and precepts*. Ashgate.

IEC. (2024). *IEC 63278-1: Asset administration shell for industrial applications — Part 1: Asset administration shell structure*. International Electrotechnical Commission.

Jernkontoret. (2024). *Stålindustrin och totalförsvaret* (Rapport D 889). Jernkontoret.

Jones, D., Snider, C., Nassehi, A., Yon, J., & Hicks, B. (2020). Characterising the digital twin: A systematic literature review. *CIRP Journal of Manufacturing Science and Technology*, *29*, 36–52. https://doi.org/10.1016/j.cirpj.2020.02.002

Kritzinger, W., Karner, M., Traar, G., Henjes, J., & Sihn, W. (2018). Digital twin in manufacturing: A categorical literature review and classification. *IFAC-PapersOnLine*, *51*(11), 1016–1022. https://doi.org/10.1016/j.ifacol.2018.08.474

Minerva, R., Lee, G. M., & Crespi, N. (2020). Digital twin in the IoT context: A survey on technical features, scenarios, and architectural models. *Proceedings of the IEEE*, *108*(10), 1785–1824. https://doi.org/10.1109/JPROC.2020.2998530

NATO. (2024). *Resilience, civil preparedness and Article 3*. NATO Headquarters.

Negri, E., Fumagalli, L., & Macchi, M. (2017). A review of the roles of digital twin in CPS-based production systems. *Procedia Manufacturing*, *11*, 939–948. https://doi.org/10.1016/j.promfg.2017.07.198

Nonaka, I., & Takeuchi, H. (1995). *The knowledge-creating company: How Japanese companies create the dynamics of innovation*. Oxford University Press.

Polanyi, M. (1966). *The tacit dimension*. Doubleday.

Prop. 2024/25:34. *Totalförsvaret 2025–2030*. Swedish Government.

Qi, Q., Tao, F., Hu, T., Anwer, N., Liu, A., Wei, Y., Wang, L., & Nee, A. Y. C. (2021). Enabling technologies and tools for digital twin. *Journal of Manufacturing Systems*, *58*, 3–21. https://doi.org/10.1016/j.jmsy.2019.10.001

Rasheed, A., San, O., & Kvamsdal, T. (2020). Digital twin: Values, challenges and enablers from a modeling perspective. *IEEE Access*, *8*, 21980–22012. https://doi.org/10.1109/ACCESS.2019.2957893

Saad, A., Faddel, S., Mohammed, O., & Youssef, T. (2024). Digital twin maturity models: Systematic review and framework. *IEEE Access*, *12*, 18744–18764. https://doi.org/10.1109/ACCESS.2024.3358904

Satyanarayanan, M. (2017). The emergence of edge computing. *Computer*, *50*(1), 30–39. https://doi.org/10.1109/MC.2017.9

Schneier, B. (2024). AI and the future of cyber conflict. *Foreign Affairs*, *103*(2), 134–142.

Schwartz, P. (1991). *The art of the long view: Planning for the future in an uncertain world*. Doubleday.

Semeraro, C., Lezoche, M., Panetto, H., & Dassisti, M. (2021). Digital twin paradigm: A systematic literature review. *Computers in Industry*, *130*, 103469. https://doi.org/10.1016/j.compind.2021.103469

Shi, W., & Dustdar, S. (2016). The promise of edge computing. *Computer*, *49*(5), 78–81. https://doi.org/10.1109/MC.2016.145

Stålbyggnadsinstitutet. (2024). *Branschrapport 2024: Stålbyggnad och industriell beredskap*. SBI.

Tao, F., Qi, Q., Liu, A., & Kusiak, A. (2019a). Data-driven smart manufacturing. *Journal of Manufacturing Systems*, *48*, 157–169. https://doi.org/10.1016/j.jmsy.2018.01.006

Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019b). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, *15*(4), 2405–2415. https://doi.org/10.1109/TII.2018.2873186

U.S. Congress. (2018). *Clarifying Lawful Overseas Use of Data Act* (CLOUD Act, H.R. 4943, Pub. L. 115-141). 115th Congress.

van der Heijden, K. (2005). *Scenarios: The art of strategic conversation* (2nd ed.). Wiley.

Waern, N. (2026). *SMILE v4.4: Structured methodology for industrial lifecycle externalization*. Zenodo. https://doi.org/10.5281/zenodo.19683062

Zetter, K., & Volz, D. (2025). Lessons from Ukraine: Industrial cyber resilience under armed conflict conditions. *Journal of Cybersecurity*, *11*(1), tyae024. https://doi.org/10.1093/cybsec/tyae024
