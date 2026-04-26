---
title: "Three Swedens: Year One"
subtitle: "A conflict scenario analysis of Swedish industrial resilience in 2029 — with, without, and beyond digital twins"
author: "Nicolas Waern"
affiliation: "WINNIIO AB"
orcid: "0009-0001-4011-8201"
email: ceo@winniio.io
status: draft
date: 2026-04-25
license: CC-BY-4.0
type: sentinel-narrative
---

# Three Swedens: Year One

*A conflict scenario analysis of Swedish industrial resilience in 2029 — with, without, and beyond digital twins*

*Nicolas Waern — WINNIIO AB*
*Published: April 25, 2026*

---

## Prologue: Spring 2029

The call comes at 04:17 on a Tuesday in March 2029.

Not the emergency broadcast. Not an alarm. A text message from the Plikt- och prövningsverket system, automated and impersonal, delivering nine words that every Swede in the reserve has half-expected for three years: *Du är inkallad. Rapportera senast måndag kl 08:00.*

For eighteen months before that Tuesday, the Baltic situation had been deteriorating in the way that serious observers had long anticipated and that official briefings had consistently underestimated in their public-facing communications. What followed the predictable diplomatic script: hybrid operations first, then infrastructure interference, GPS spoofing across the eastern Baltic, a pipeline incident attributed to no party. Then overt military positioning along the arc from Kaliningrad to Saint Petersburg. Then negotiations — which, in retrospect, were never negotiations at all, but a delay tactic by a party that had already made its decision.

By 05:00, Sweden activates *höjd beredskap*. By 06:30, NATO Article 5 is formally invoked.

The mobilization orders reach approximately 180,000 reservists by 06:14 that morning. Most of them are not soldiers. Most of them are people who showed up to their annual training, passed their physicals, and then went back to being welders, logistics coordinators, production planners, CNC operators — the technical tradespeople who constitute the backbone of a modern manufacturing economy. Sweden, uniquely among NATO members, drew its reserves disproportionately from exactly the people its defense industry could least afford to lose.

Within 72 hours of that Tuesday morning, three cascades converge simultaneously on Swedish industrial production.

The first cascade is the mobilization itself. Across the 150-plus small metal processors that supply SAAB, BAE Systems Hägglunds, and the Swedish Armed Forces, 25 to 30 percent of production workers receive mobilization orders. The loss is not random. The selection process has, over decades, drawn disproportionately from technically skilled tradespeople. The people being called up are not the easily replaced ones.

The second cascade arrives at 09:43 Tuesday morning: coordinated cyberattacks targeting Swedish industrial SCADA networks. The attack patterns are not novel. They replicate, with refinements, what Ukrainian industrial facilities experienced beginning in 2022. Sweden has had the Ukrainian precedent as a reference case for seven years. Its facilities have acted on it to varying degrees.

The third cascade is slower and more certain. Baltic shipping becomes contested. The just-in-time inventory systems that Swedish manufacturers had optimized for cost efficiency under peace conditions provide two to three weeks of buffer. After that, production depends on what is already in the building.

Three factories. Three different decisions made three years earlier. Three different outcomes.

This is not a war story. It is an architecture story.

---

## Sweden A: Without Digital Twins

### The Knowledge Hemorrhage

At 08:15 Thursday morning, the plant manager at a 43-employee metal processor in Mälardalen reads through the mobilization confirmations. Twelve workers. By Monday.

He goes through the list slowly, because the list is not twelve interchangeable production workers. It is Marcus, the only operator in the facility certified for IQB — Improved Quality Baseline — welding sequences, the specification required for armor-grade plate. It is Lena, the lead production planner, whose 46-sheet Excel workbook is not a spreadsheet so much as an externalized mind: twelve years of hard-won scheduling logic, supplier-specific quirks, machine-specific tolerances, none of which is documented anywhere else. It is two of the three operators certified for the critical welding portals. It is the quality control supervisor who carries in his head — and only in his head — the knowledge of which batches of steel from which suppliers require non-standard pre-heating.

Production does not slow. Production stops.

The plant manager spends Friday and Saturday on the phone with the remaining nine workers and three temporary recruits from a general staffing agency. By Sunday evening he understands the scope of the problem. No one knows the IQB sequences except Marcus, who left Saturday morning. The welding portal requires a three-week certification process that cannot be legally compressed. The Excel scheduling system is open on Lena's laptop — the plant manager has the password — but the formulas reference conditions that exist only in Lena's memory. The workbook is not a document. It is an interface to a person who is no longer present.

On Monday morning, twelve workstations in the facility are either idle or staffed by people who are learning in real time, from other people who are also learning in real time, without documentation, without a knowledge substrate of any kind. The institutional knowledge that made this facility capable of producing to defense specifications took twelve years to accumulate. It left over a weekend.

This is not a personnel crisis. It is a knowledge crisis.

### The Cascade

Training begins anyway, because there is no alternative. Workers learn by watching workers who are themselves learning. By the end of week one, error rates have increased an estimated 340 percent above baseline. Rework consumes 40 percent of production capacity — not to advance production, but merely to remediate errors in production already attempted. Defense contract timelines begin slipping by day ten.

On day eighteen, the cyberattack reaches the facility's aging SCADA system. The attack is not technically sophisticated. It does not need to be. Without documented operational baselines, the operators cannot distinguish attacked behavior from degraded-but-normal behavior. The attack succeeds not through technical elegance but through the absence of a reference state — no one knows what the machines are supposed to sound like, read like, behave like under normal conditions, because the people who knew are occupied elsewhere.

By week four, the facility is operating at 40 to 55 percent of baseline capacity. That number is not a recovery trajectory. It is a new equilibrium at a lower level. Workers who were trained incorrectly have developed habituated incorrect behaviors. Machine settings have been adjusted without documentation. The institutional knowledge is not recoverable — it did not disappear into a void, it relocated to a military deployment where Marcus and Lena and the quality control supervisor are doing other things.

### The Permanent Damage

By month two, SAAB's supplier network reporting shows seven of twelve critical SME suppliers operating at 40 to 60 percent of baseline capacity. BAE Systems Hägglunds begins diverting contract allocations to Norwegian and Finnish suppliers with higher continuity capacity. This is a rational commercial decision. It is also a strategic decision with consequences that will outlast the immediate crisis: a Swedish defense supply chain that loses contracts during the mobilization period faces a long rebuild after it.

Recovery to pre-mobilization capacity takes 14 months in this scenario. For six of those months, capacity sits 45 percent below baseline. This is not a rounding error in a defense supply chain. It is the difference between equipping mobilized forces and not equipping them.

The facility in Mälardalen did not make a bad decision in 2026. It made no decision. The default case — no architectural change, no knowledge externalization, no deliberate investment in resilience — produced exactly the outcome that the default case always produces when the stress arrives.

---

## Sweden B: With American-Made Digital Twins

### The Cloud Problem

In 2027, following intense lobbying by a U.S. defense technology contractor and facilitated by an FMV procurement framework that prioritized demonstrated capability over sovereignty considerations, a proprietary digital twin platform was deployed across 40 of the 150-plus facilities in the defense supply chain.

The platform is genuinely impressive. 3D facility scanning. Process documentation with version history. Capacity simulation. Supply chain integration. It runs on AWS GovCloud Stockholm. Authentication is handled through a U.S.-hosted identity service. The knowledge that Scenario A loses when Marcus walks out the door — the IQB sequences, the scheduling logic, the operator certification records — is encoded in this platform. It cost €200,000 to €500,000 per facility. The remaining 110-plus facilities were not included in the procurement framework. The cost structure made them inaccessible to SMEs operating on 3 to 7 percent margins.

On Tuesday morning at 04:17, the same mobilization orders go out to Marcus and Lena and the welding portal operators at the 40 equipped facilities. But this time, Marcus has spent eighteen months feeding the platform: process parameters, adjustment protocols, the humidity-voltage correction for armor-grade plate that he learned through years of failed welds before he got it right. The knowledge is there, encoded, accessible.

At 09:43, the coordinated application-layer attack targets the vendor's authentication service and API gateway. The attack exploits a known vulnerability in the identity provider's OAuth implementation, generating a volume of malformed token requests sufficient to exhaust connection pool capacity without requiring volumetric traffic. The vendor's status dashboard will later describe it as "elevated error rates and service degradation." The factory operators describe it differently: they are locked out of their platforms.

For 11 hours, 40 factories equipped with sophisticated digital twin technology are cut off from it. The knowledge Marcus encoded is in there. The IQB sequences are in there. The platform is running, somewhere in Stockholm, on servers that the cyberattack cannot reach. It simply will not authenticate the people who need it.

The fallback is paper. Then Excel. Workers revert to Scenario A behaviors, with the additional cognitive overhead of uncertainty: is the system coming back? Should we improvise or wait?

### The Sovereignty Gap

The DDoS clears. The platforms are restored. But the machine learning inference layer — which powers the capacity simulation and cross-training prioritization — requires API calls to a Virginia-based processing cluster. Transatlantic bandwidth is degraded. Latency increases to the point where simulation queries time out consistently. Operators work with static documentation. Very expensive PDFs.

Meanwhile, a different problem crystallizes — one that was raised briefly in the 2027 procurement discussions and then set aside in the enthusiasm for the platform's capabilities. The system has been learning from 40 defense manufacturers for two years. Production sequences. Material specifications. Throughput rates. Supplier dependencies. Bottleneck locations. The aggregate picture of Swedish defense manufacturing capacity — what gets made, how fast, through which nodes, with which vulnerabilities — is encoded in a platform stored on U.S.-controlled infrastructure. On day four of the conflict, Swedish government legal officers, asked whether this data can be compelled for access under U.S. legal authority, note carefully that contractual protections do not override statutory authority.

The U.S. CLOUD Act permits American government agencies to compel American cloud service providers to produce data stored anywhere in the world, including data held in European data centers operated by U.S.-headquartered companies. This is not a theoretical risk or a legal technicality. It is the statutory architecture of data sovereignty in 2029. The Swedish government cannot undo it by declaration. Its lawyers cannot undo it by contract. The architects who chose the platform in 2027 made this decision permanently.

The 40 equipped facilities are operating at 60 to 70 percent of baseline capacity in week one — a genuine improvement over Scenario A. The 110-plus unequipped facilities are operating at 40 to 55 percent, identical to Scenario A. The national production picture is marginally better at a population level, but the improvement is concentrated in a minority of facilities, and the data about all of those facilities is now in a foreign jurisdiction.

### Partial Recovery, New Dependency

By month two, transatlantic connectivity has been partially resolved through NATO bandwidth prioritization agreements. The 40 equipped facilities reach 65 to 75 percent of baseline capacity — a real number, a real improvement. Six months of partial mitigation, concentrated in the minority of facilities wealthy enough to afford the platform.

Net national production improvement over Scenario A: approximately 10 percent. Distributed as 25 to 30 percent improvement at 40 facilities, zero improvement at 110-plus.

The sovereignty gap is a feature of the architecture, not a failure of the platform. The platform works as designed. It simply was not designed for a world in which the authentication service is a single point of failure, transatlantic connectivity is contested bandwidth, and the legal framework governing stored data does not respect national sovereignty declarations.

---

## Sweden C: With Edge-Native, Open-Source Digital Twins

### The Build Trajectory: 2026–2028

In spring 2026, a small Swedish AI company submits a Vinnova grant application for a project focused on knowledge externalization in SME metal processing. The application's core argument is architectural: the knowledge concentration risk in Swedish defense supply chain SMEs is not a training problem or a documentation problem. It is a systems problem requiring a systems solution.

The methodology — structured knowledge externalization with spatially-anchored 3D overlays, running on locally-operated edge hardware, using the IEC 63278-1 Asset Administration Shell open standard — is validated, refined, and published open-source under CC-BY-4.0 by summer 2027. Edge hardware costs €15,000 to €25,000 per facility. Total deployment cost per facility: €30,000 to €80,000. Not cheap for a 43-person manufacturing operation, but accessible through existing SME grant frameworks in ways that the €200,000 to €500,000 proprietary platform never was.

A critical design principle was established from the beginning: no inference requires cloud connectivity. All AI models run locally on edge hardware. All data is stored locally. Mesh networking between facilities enables aggregate capacity queries without routing through any external service. The architecture was designed for degraded-connectivity environments. The planning assumption was armed conflict, not a blue-sky implementation environment.

By autumn 2028, 147 of the 150-plus facilities in the defense supply chain have implemented the system, driven by the SBI and Jernkontoret industry networks, funded by a Vinnova follow-up grant and MSB civil defense funding. The systems have been learning for 12 to 24 months.

Marcus, at the facility in Mälardalen, participated in twelve structured knowledge externalization sessions over six months. He found them tedious. He spent hours with the methodology lead, translating the adjustments he makes by instinct into parameters a system could encode and a new operator could access. The humidity-voltage correction on armor-grade plate — reduce arc voltage 4 to 6 percent during the first pass when humidity exceeds 65 percent — went in during session six. He did it because the plant manager told him it was a defense obligation. He would not have done it otherwise.

### The Edge Holds

The mobilization orders arrive. Marcus and Lena and the welding portal operators receive them. They leave on Saturday.

The knowledge does not leave with them.

Every workstation in the facility was 3D-scanned eighteen months ago. The IQB welding sequences are documented in spatially-anchored 3D overlays. A new operator approaching welding station three does not see instructions on a screen at the far end of the room. She sees visual guidance projected onto the actual workstation geometry — the exact location where the adjustment is made, spatially anchored to the machine where it applies. The knowledge is where the work is.

The scheduling logic that lived in Lena's 46-sheet Excel workbook was translated into a capacity model that runs locally. On Saturday morning at 09:00, the plant manager enters the mobilization parameters: twelve workers mobilized, these specific roles. The system identifies cross-training priorities, builds schedules for the remaining workforce, and flags three operations that require immediate process adaptation. It does this in under 30 minutes. Without any cloud connectivity.

At 09:43 Tuesday, when the coordinated attack targets AWS Stockholm and the authentication service goes down for 11 hours, the edge hardware in the facility registers nothing. The DDoS is targeting a server the facility does not depend on. There is nothing in Stockholm to attack.

### Cross-Training at Machine Speed

New operators navigate the facility through its 3D digital twin. Physical locations carry operational context — not manuals, but the accumulated working knowledge of the people who ran these machines for years. The new operator at welding station seven sees, overlaid on the physical machine, the thermal expansion correction that the previous operator encoded over years of experience. The knowledge has not been generalized into a manual; it has been anchored to the specific machine where it applies.

In week one, error rates increase 80 percent above baseline. This is not good. It is substantially better than the 340 percent in Scenario A. The difference is not operator competence — in both scenarios, the replacement operators have similar backgrounds and similar levels of unfamiliarity with defense-specification welding. The difference is the knowledge substrate available to those operators.

By week three, error rates have declined to 25 percent above baseline. The system is actively learning from the new operators' behavior, identifying where knowledge transfer has gaps, flagging those gaps for prioritized attention. The data-driven adaptation is continuous: the gap between the knowledge encoded before the disruption and the knowledge being generated by the new operators closes progressively.

On the day the cyberattack reaches the facility's SCADA system, the operators have something that Scenario A's operators did not: a documented baseline. The digital twin provides the reference state. Operators can distinguish attacked behavior from degraded-but-normal behavior because they know what normal looks like — it is encoded and accessible. The attack is detected and contained within four hours, not because the cybersecurity architecture is more sophisticated, but because the knowledge of what normal looks like is available.

### Autonomous Augmentation

Among the 147 equipped facilities, 23 have reached what the maturity literature would classify as predictive and autonomous digital twin operation. At these facilities, robotic welding systems — operating on specifications encoded in the digital twin — handle 40 percent of standard sequences without human intervention. Workforce mobilization does not reach these systems. They continue.

The edge architecture demonstrates its full strategic value during the six-week period when transatlantic connectivity is intermittently degraded. MSB-authorized capacity planners are querying aggregate production capacity across all 147 facilities through the mesh network. Current-state production data — how many facilities are running at what capacity, where the bottlenecks are, where to redirect orders — arrives without routing through any external system. National defense planning does not depend on a transatlantic data connection.

Beyond metal processing, the same framework had been applied to farms in the Mälardalen region. Autonomous berry-harvesting robots, programmed with spatially-anchored operational knowledge of the specific fields they work, are operating at 70 to 85 percent of baseline output with 40 percent of the pre-mobilization workforce. Agricultural production does not collapse in parallel with industrial production.

Drone logistics operators, whose systems were built on the same edge-native open standard, receive clearance upgrades under *höjd beredskap* to reroute supply chains around contested Baltic shipping lanes. Reprogramming logistics routes takes hours, not weeks, because the operational logic is encoded in accessible, modifiable formats that do not require vendor authorization to change.

By month two, the 147 equipped facilities are operating at 85 to 90 percent of baseline capacity. This is not where they recover to — it is where they land after absorbing the disruption. Recovery to near-baseline takes six to eight weeks from the initial mobilization.

---

## The Three Swedens, Compared

| Metric | Sweden A | Sweden B | Sweden C |
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
| Single-point attack surface | N/A | High — auth chokepoint | Low — distributed |

The coverage row warrants specific attention. Sweden B improves 40 facilities to 70 percent capacity. Sweden A leaves all 150-plus at 40 to 55 percent. Sweden C brings 147 facilities to 85 to 90 percent. Defense supply chains do not have optional tiers. A single-source component missing from the supply chain stops the assembly line regardless of how well every other component is supplied. Coverage is not a secondary metric.

Sweden B's most significant limitation is not technical and not about authentication attacks. It is economic. The cost structure that produced a sophisticated platform also produced a coverage gap that no national emergency could patch. You cannot deploy a €400,000 solution across 150 SMEs operating on thin margins in a three-year window. Sweden C's cost structure — designed for SME economics from the beginning — produced a different coverage outcome.

---

## The Choice

These scenarios are not warnings about 2029. They are structured representations of decision consequences traceable to choices that Sweden is making right now, in 2026, about where to store industrial knowledge, what standards govern its format, and whether inference can run without external connectivity.

Scenario A is the default. It is what happens when no deliberate architectural decision is made. It does not require neglect or incompetence. It requires only the absence of action in a window when action was possible. Every month that passes without knowledge externalization is a month in which the institutional knowledge of Swedish defense manufacturing remains concentrated in people who will, one day, receive a text message at 04:17.

Scenario B is the comfortable choice. A demonstrated platform, vendor support, integration with existing procurement frameworks. It delivers real improvement over the baseline. It also introduces a structural dependency — on an authentication service, on transatlantic bandwidth, on a legal framework that does not recognize Swedish sovereignty claims over data stored on foreign-jurisdiction infrastructure. The 11-hour lockout in this scenario is not a worst case. It is a Tuesday.

Scenario C is the sovereign choice. Not because it is Swedish, or open-source, or philosophically satisfying. Because edge-native, locally operated, open-standard architecture is the only technical design that preserves operational independence under the conditions that make operational independence matter. Cloud platforms work in peacetime. The architecture that holds when the DDoS hits AWS Stockholm and the transatlantic bandwidth is contested NATO priority traffic is the architecture where the data never left the building.

Digital twins require time to learn. The 85 to 90 percent capacity retention in Scenario C at month two is the product of 12 to 24 months of operational learning before the disruption. A digital twin deployed in March 2029 is not useful in March 2029. The choice being made in 2026 is not whether to be resilient in 2029. It is whether resilience was built early enough for the learning to compound.

There is a harder observation beneath the scenarios. Marcus's twelve knowledge externalization sessions were tedious. He did not do them because they were professionally fulfilling. He did them because his plant manager told him it was a defense obligation. The entire architecture of Scenario C depends on that conversation happening — and on the grant funding that made the methodology accessible, and on the industry networks that drove uptake, and on the national doctrine that framed it as a defense priority.

Scenario C is not inevitable. It is a policy decision, a procurement decision, and an architectural decision made in advance of the conditions that will test it. Scenario A is what happens when those decisions are deferred.

The analysis does not tell Sweden which scenario it will inhabit in 2029. It identifies which scenario Sweden is currently building toward, one architectural choice at a time.

Sovereignty is architecture. Architecture is decision. Decision is now.

---

*Nicolas Waern is CEO of WINNIIO AB, a Swedish AI company developing knowledge externalization methodology for industrial applications. ORCID: 0009-0001-4011-8201*

*Disclosure: The author submitted a Vinnova grant application in spring 2026 for the methodology described in Scenario C, covering a single pilot facility. WINNIIO AB develops the SMILE methodology that forms the architectural basis of Scenario C. Readers should apply appropriate skepticism to the Scenario C characterization and note that the capacity figures presented are structured projections, not measured data. The academic version of this analysis, with full methodology, capacity modeling, and references, is available as Article 46 in the author's Zenodo repository.*
