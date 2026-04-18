---
title: "Why Autonomous Buildings Need Edge Intelligence, Not Dashboards"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: building automation, edge computing, autonomous buildings, BMS, dashboard failure, local inference, edge-native AI, Actor-Network Theory, cloud dependency, building intelligence, HVAC optimisation, design science research, SMILE methodology, digital twin
status: ready
date: 2026-04-16
---

# Why Autonomous Buildings Need Edge Intelligence, Not Dashboards

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

Twenty years of building automation experience, synthesised across a 65-minute advisory session, converges on a conclusion that contradicts the dominant direction of building intelligence investment: cloud-connected dashboards do not make buildings autonomous; they make buildings observable. Observation and autonomy are different properties. A building that sends all its sensor data to a cloud dashboard has improved the building operator's situational awareness while leaving the building's response intelligence unchanged: still running on fixed schedules, still dependent on human decision-making to act on what the dashboard reveals, still failing in the same ways when connectivity is lost, when the cloud subscription lapses, or when the human operator is not watching the screen. This paper argues that genuinely autonomous buildings require edge intelligence — AI inference capable of perceiving, deciding, and acting locally, without cloud round-trips, without human approval for routine decisions, and without dashboard-mediated human attention as the decision-making bottleneck. We develop this argument through Actor-Network Theory (ANT), examining the heterogeneous actants — building management system (BMS) hardware, control protocols, facility management organisations, energy regulators, cloud platform vendors, and building occupants — whose network configuration currently prevents edge intelligence from being deployed at scale. We document the specific failure modes of cloud dashboard architectures in building automation contexts, drawing on operational experience across commercial, residential, and industrial building portfolios. We engage the counter-argument that cloud dashboards are "good enough" for most building automation use cases, and argue that this framing systematically underestimates the cost of dashboard-mediated decision latency, human attention dependency, and connectivity fragility. Three falsifiable propositions are stated. The paper contributes a framework for evaluating building automation architectures by their autonomous decision-making capacity rather than their data collection and visualisation capabilities.

**Keywords:** building automation, edge computing, autonomous buildings, BMS, dashboard failure, local inference, edge-native AI, Actor-Network Theory, cloud dependency, building intelligence, HVAC optimisation, design science research, SMILE methodology, digital twin

---

## 1. Introduction: The Dashboard Is Not a Decision

The standard pitch for a modern building intelligence platform goes as follows: deploy IoT sensors throughout the building, connect them to a cloud platform, build dashboards that visualise energy consumption, occupancy patterns, equipment health, and environmental conditions in real time, and give building operators the information they need to make better decisions. The pitch is coherent. The technology works. The dashboards are often genuinely informative.

And then the building keeps running on the same fixed schedules it has run on for fifteen years, because the dashboard shows the operator what is happening but does not change what the building does.

This gap between observation and action is the central failure mode of dashboard-first building intelligence architectures. It is not a technology failure; it is an architectural misidentification: the architects of these systems have treated the information deficit as the binding constraint on building performance. The information deficit is real — building operators frequently do not have adequate visibility into what their buildings are doing — but it is not the binding constraint. The binding constraint is decision-making latency: the delay between an observable condition and a building system response.

A building HVAC system that is over-conditioning a conference room because its schedule was set two years ago and has not been updated continues to over-condition that room whether or not a dashboard shows an operator in real time that the room is empty. The dashboard surfaces the information. It does not change the schedule. Changing the schedule requires a human to notice the dashboard, understand the implication, log into the BMS, navigate to the zone schedule, and modify it. In practice, this sequence happens at the median facility management organisation approximately never — not because facility managers are negligent, but because they have many buildings, many zones, many systems, and one dashboard that requires their attention simultaneously.

The advisory session that grounds this paper was conducted with a practitioner who had spent two decades deploying building automation systems across commercial, industrial, and public sector portfolios. The session was structured around the question: given everything that has been tried, what works? The answer was consistent with the analysis above: what works is systems that decide without asking.

---

## 2. Theoretical Framework

### 2.1 ANT and Building Control Networks

ANT [1][2] is appropriate for analysing building automation because the building control system is a quintessential ANT object: a heterogeneous network of human and non-human actants — sensors, actuators, controllers, communication protocols, scheduling software, facility managers, energy consultants, building owners, regulators, and occupants — whose collective behaviour determines building performance. No single actor controls building performance; it is an emergent property of the network.

The dashboard architecture is, in ANT terms, a translation that re-routes data flows through a human actor (the dashboard observer) as an obligatory passage point for all decisions. Every insight the building's sensors could generate about the building's state must be observed by a human before it can influence the building's behaviour. This architecture makes the human's attention the bottleneck for every operational decision, however routine.

The edge intelligence architecture is a different translation: it re-routes routine decisions through a local AI inference engine that acts as the obligatory passage point, removing human attention from the routine decision loop and reserving it for exception handling and strategic adjustment.

### 2.2 The SMILE Methodology Applied to Building Automation

Following Waern (2026a, DOI: 10.5281/zenodo.19587944), the as-is state is a building running on fixed schedules with cloud dashboard observation and human-mediated response. The to-be state is a building with local AI inference capable of adjusting its HVAC, lighting, access, and energy systems continuously based on real-time occupancy, energy prices, weather, equipment condition, and occupant feedback, without cloud round-trips or human approval for routine adjustments. The SMILE methodology requires all design decisions to be evaluated against this transition.

### 2.3 Edge-Native Design Principles

Following Waern (2025b, DOI: 10.5281/zenodo.17464804), edge-native design prioritises local inference over cloud round-trips as the default operating mode. The cloud is a synchronisation and analytics resource, not the primary decision-making environment. This inversion of the standard cloud-first architecture is not a performance optimisation; it is a reliability requirement: the building's control systems must continue to function normally when cloud connectivity is unavailable, which in the context of a building's operational lifetime (50+ years) will happen repeatedly and unpredictably.

---

## 3. Twenty Years of Building Automation: What Fails and Why

### 3.1 The Schedule Fossilisation Problem

Fixed schedules are the dominant operating mode of building control systems globally. An HVAC schedule set at system commissioning defines when heating starts, when cooling starts, when ventilation runs at design airflow, and when it drops to minimum. In theory, the schedule is updated as the building's occupancy patterns change. In practice, the commissioning schedule fossilises: it reflects the building's intended use pattern at the time of installation, which diverges from actual use within months of occupancy and bears almost no relationship to actual use five years later.

The schedule fossilisation problem is documented in the building energy performance literature. Post-occupancy studies of commercial buildings in multiple climates consistently find that actual energy consumption for HVAC conditioning of unoccupied zones represents 15–40% of total HVAC energy use [3]. Dashboard architectures surface this waste through visualisation; they do not eliminate it. Elimination requires either continuous human schedule updating (which facility managers do not do) or autonomous schedule inference from occupancy data (which requires local decision-making capability, not visualisation).

### 3.2 The Connectivity Fragility Problem

Cloud dashboard architectures create a new failure mode in building automation that did not exist before internet-connected building systems: loss of building intelligence when internet connectivity fails. In a cloud-first BMS architecture, the cloud platform may perform setpoint calculation, schedule execution, and fault detection. When internet connectivity is lost, the building falls back to its baseline control logic — typically the fossilised commissioning schedule — and the facility manager loses visibility into the building's state at the same moment that the building's control intelligence is most needed.

The 20-year practitioner in the advisory session described multiple instances of this failure mode across their portfolio: buildings that over-heated or under-ventilated during cloud connectivity failures because the local BMS had been configured to defer to cloud-computed setpoints; fault conditions that went undetected for hours because the fault detection logic resided in the cloud platform; and — most expensively — a case in which a building's fire damper actuation control had been partially cloud-mediated, raising building safety concerns during a network outage.

### 3.3 The Human Attention Economy Problem

Every building operation that requires dashboard-mediated human attention competes for that attention against every other building operation requiring the same attention. At the median facility management organisation, one facility manager is responsible for multiple buildings, multiple systems within each building, and multiple administrative functions. The dashboard presents all of these simultaneously. The interface design may prioritise certain alerts; the facility manager's professional judgement determines which alerts are acted upon, in what order, at what latency.

The result is that routine suboptimal building operation — unoccupied zones being conditioned, minor equipment faults that will become major faults if not addressed, lighting patterns that do not match occupancy — persists not because the dashboard does not show it but because the human attention economy cannot process all alerts and acts on the most urgent. Edge intelligence that handles routine decisions autonomously does not compete for this attention; it simply acts, freeing the facility manager's attention for decisions that genuinely require human judgement.

### 3.4 The Protocol Fragmentation Problem

The building control protocol landscape is heterogeneous in a way that makes cloud integration architecturally difficult: BACnet, Modbus, KNX, LonWorks, EnOcean, DALI, and Zigbee all coexist in production buildings, often within the same facility, with no native interoperability. Cloud platforms that claim to integrate building systems typically do so through protocol gateways — embedded devices that translate between protocols — at a cost in complexity, maintenance burden, and failure points that scales with the diversity of the protocol mix.

Edge intelligence architectures do not eliminate protocol heterogeneity, but they change its architectural significance. If the edge inference engine runs on a device that co-locates with the protocol gateway (or is the gateway), the protocol translation is a local operation: the edge device speaks the native protocol of each subsystem and presents a unified control interface locally. Cloud connectivity becomes optional rather than essential.

---

## 4. The Counter-Argument: Cloud Dashboards Are "Good Enough"

The most frequently stated counter-argument to edge intelligence in building automation is that cloud dashboards, combined with alert-driven workflows, are "good enough" for the majority of building automation use cases. Proponents of this position argue that: (i) most buildings do not require sub-second response latency for HVAC control; (ii) cloud platforms provide economies of scale in compute, storage, and AI model training that edge devices cannot match; (iii) the total cost of a cloud dashboard deployment is lower than a comparable edge intelligence deployment; and (iv) facility managers want visibility, and dashboards provide it.

We engage each point.

*Response latency.* The issue is not sub-second latency. The issue is decision latency measured in hours or days — the time between an observable condition and a human-mediated response. A cloud dashboard with a five-second round-trip latency for sensor data delivery provides adequate latency for HVAC setpoint calculation. It does not provide adequate latency for the human decision-making loop that the dashboard requires. The relevant comparison is not cloud versus edge in data transport latency; it is human-in-the-loop versus autonomous local decision for routine building control decisions.

*Economies of scale in cloud AI.* Cloud platforms do provide superior AI model training infrastructure. Edge intelligence does not require training; it requires inference. Inference for routine building control decisions — occupancy-based setpoint adjustment, fault detection by deviation from baseline, predictive maintenance scheduling — can be performed by compact models that run effectively on current-generation edge hardware. The training/inference separation means cloud training advantages do not determine edge deployment viability.

*Total cost.* Cloud dashboard total cost of ownership is dominated by ongoing subscription costs, which compound over the building's operational life. Edge intelligence deployments have higher upfront hardware costs but lower ongoing costs. Over a ten-year horizon in a well-instrumented commercial building, the economics typically favour edge deployment, particularly for portfolios where the cloud platform's per-building subscription cost scales with asset count. This directional argument is supported by network-level analysis of smart building data flows: Lazarova-Molnar and Mohamed [12] examined collaborative data analytics architectures for smart buildings and identified cloud-centric data routing as a structural cost driver, noting that edge-side processing reduces both bandwidth costs and cloud compute expenditure at scale — a finding consistent with the economic comparison drawn here.

*Visibility.* Facility managers do want visibility, and dashboards provide it. Edge intelligence and dashboard visualisation are not mutually exclusive. An edge-intelligent building can send all its sensor data, inference outputs, and autonomous decision logs to a cloud dashboard for visibility and trend analysis — it simply does not depend on the cloud dashboard for routine decisions. The dashboard becomes an audit and analytics interface rather than the decision bottleneck.

---

## 5. ANT Analysis: The Actants That Block Edge Intelligence Deployment

### 5.1 The BMS Hardware Vendor

The incumbent BMS hardware vendor is the most powerful actant blocking edge intelligence deployment. Major BMS vendors have invested decades in proprietary control platforms that create customer lock-in through protocol implementation details, commissioning tooling, and service contract structures. Edge intelligence architectures that run on commodity hardware with open-source inference engines represent a direct threat to this lock-in. The BMS vendor's translation of edge intelligence is: "our platform already does this" (referring to cloud-based analytics features that do not provide local autonomous decision-making) or "we cannot guarantee system reliability if you deploy third-party edge devices alongside our controllers."

The enrollment strategy: frame edge intelligence as complementary to existing BMS infrastructure rather than replacing it. The edge inference engine reads BMS sensor data via open protocols (BACnet/IP, MQTT) and writes control commands back to the BMS through the same protocols. The BMS hardware continues to execute control logic as before; the edge inference engine provides a higher-level optimisation layer that adjusts setpoints within BMS-defined limits.

### 5.2 The Energy Regulator

Energy performance certification frameworks in most jurisdictions are designed for buildings operated according to standard schedules. Dynamic, AI-driven building control systems whose behaviour is not predictable from a schedule create compliance uncertainty: the building operator cannot demonstrate in advance that the AI-controlled building will meet its certified energy performance targets, because the AI's behaviour depends on future occupancy patterns and energy price signals that are not known in advance.

The enrollment strategy: develop a performance-based compliance demonstration methodology — proving compliance through demonstrated performance data rather than predicted performance from static calculations — and engage regulators with data from edge intelligence deployments that demonstrate energy performance improvements over schedule-based alternatives.

### 5.3 The Facility Management Organisation

Facility management organisations have invested in dashboard platforms and the human workflows that operate them. Edge intelligence that removes routine decisions from human hands threatens both the workflow investment and, more sensitively, the facility manager's sense of professional control. A building that adjusts its own setpoints without human instruction is a building that appears to need less active management — a perception that can threaten headcount.

The enrollment strategy: frame edge intelligence as a tool that elevates the facility manager's role from routine decision-making to exception management and strategic oversight. The facility manager who is currently spending 60% of their attention on routine dashboard monitoring can redirect that attention to tenant relationship management, capital expenditure planning, and regulatory compliance — higher-value activities that justify a different kind of professional engagement with the building.

---

## 6. Falsifiable Propositions

1. **The decision latency proposition:** Commercial buildings operated with edge-intelligence-based autonomous setpoint adjustment will achieve HVAC energy consumption reductions of at least 15% compared to matched buildings operated with cloud dashboard plus human-mediated setpoint management, attributable to reduction in decision latency for occupancy-responsive conditioning. This proposition can be falsified by a controlled study showing no significant energy consumption difference between the two operating models in matched commercial building portfolios.

2. **The connectivity resilience proposition:** Buildings with edge-native control architectures will maintain HVAC control performance within 5% of nominal during internet connectivity outages of up to 72 hours, while buildings with cloud-dependent BMS architectures will revert to commissioning-schedule performance within the same period, measurable by energy consumption deviation from baseline during documented connectivity events. This proposition can be falsified by a study of building performance during connectivity outages showing equivalent performance maintenance across edge-native and cloud-dependent architectures.

3. **The attention economy proposition:** Facility managers responsible for buildings with autonomous edge intelligence handling routine decisions will spend a measurably lower proportion of their working time on routine BMS monitoring (less than 20% versus greater than 40% for dashboard-dependent models) and report higher job satisfaction scores, measured by time-use survey and validated satisfaction instruments. This proposition can be falsified by a time-use study showing no significant difference in monitoring time allocation between edge-intelligent and dashboard-dependent building portfolios.

---

## 7. Limitations and Future Research

The practitioner knowledge mobilised in this paper comes from a single 65-minute advisory session; it represents substantial but individual expertise accumulated in specific regional markets and building typology segments. The failure modes described are based on qualitative practitioner reports rather than systematic performance measurement studies.

The edge hardware landscape is evolving rapidly; performance claims about inference capability on edge devices are based on current-generation hardware (2025) and should be evaluated against hardware capability at the time of any specific deployment.

The economic comparison between cloud dashboard and edge intelligence deployment costs requires organisation-specific analysis; the general argument in Section 4 is directionally valid but should not be used as a substitute for detailed cost modelling.

Future research should: (1) conduct a randomised controlled study of HVAC energy consumption in matched commercial buildings under cloud dashboard, cloud dashboard plus alert workflow, and edge intelligence operating models; (2) develop a standardised methodology for performance-based energy compliance demonstration applicable to dynamically controlled buildings; (3) conduct a longitudinal study of facility manager time allocation and job satisfaction in organisations that have transitioned from dashboard-mediated to edge-intelligence-supported building management.

---

## 8. Conclusion

The building automation industry has spent a decade building better dashboards for buildings that still run on fixed schedules. The dashboards have improved. The schedules have not changed. The gap between observation and action has not narrowed; it has been given a more attractive interface.

Autonomous buildings require edge intelligence: AI inference running locally, acting on local sensor data, adjusting local systems without cloud round-trips and without dashboard-mediated human attention. Not for every decision — some decisions require human judgement, and the facility manager's role is not eliminated but elevated. For the large class of routine decisions — occupancy-based setpoint adjustment, minor fault response, schedule inference from real occupancy patterns — edge intelligence eliminates the latency that makes these decisions happen too slowly or not at all.

The barriers are institutional: BMS vendor lock-in, energy compliance frameworks designed for static schedules, facility management organisations that have invested in dashboard workflows. Each barrier is translatable through enrollment strategies that frame edge intelligence as complementary rather than displacing. The practitioner knowledge mobilised in this paper suggests that these translations are achievable — that buildings can be made genuinely autonomous without requiring institutional revolution.

The 20-year lesson is not that better technology is needed. It is that the architecture must change: from cloud-mediated observation to edge-native decision, from dashboard-dependent attention to autonomous action. The buildings that make this transition will not merely be observed. They will act.

---

## References

[1] Callon M. Some elements of a sociology of translation. In: Law J (ed.) *Power, Action and Belief.* Routledge, 1986: 196–223.

[2] Latour B. *Science in Action.* Harvard University Press, 1987.

[3] Pérez-Lombard L, Ortiz J, Pout C. A review on buildings energy consumption information. *Energy and Buildings* 2008;40(3):394–398.

[4] Kastner W, Neugschwandtner G, Soucek S, Newman HM. Communication systems for building automation and control. *Proceedings of the IEEE* 2005;93(6):1178–1203.

[5] Wetter M, Hu J. Quayside energy systems analysis. Lawrence Berkeley National Laboratory Technical Report. 2017.

[6] Killian M, Kozek M. Ten questions concerning model predictive control for energy efficient buildings. *Building and Environment* 2016;105:403–412.

[7] Dong B, Lam KP. A real-time model predictive control for building HVAC systems using low-order linear models and optimization. *Energy and Buildings* 2014;83:223–235.

[8] Pritoni M, Bhattacharya A, Prakash AK, Pritoni M. A review of occupancy and non-intrusive load monitoring for advanced control in commercial buildings. *Applied Energy* 2022;310:118410.

[9] Waern N. Designing the Life Programmable Interface: A Modular Architecture for Personal Health AI Sovereignty. Zenodo, 2025. DOI: 10.5281/zenodo.17462962.

[10] Waern N. Edge-Native Biological Digital Twins: Architecture Principles for Local-First Personal Health Intelligence. Zenodo, 2025. DOI: 10.5281/zenodo.17464804.

[11] Waern N. SMILE: A Methodology for Impact-First Digital Twin Deployment in Complex Sociotechnical Systems. Zenodo, 2026. DOI: 10.5281/zenodo.19587944.

[12] Lazarova-Molnar S, Mohamed N. Collaborative data analytics for smart buildings: opportunities and challenges. *Cluster Computing* 2019;22(1):1065–1077.
