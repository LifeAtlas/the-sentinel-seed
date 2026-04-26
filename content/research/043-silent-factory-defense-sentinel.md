---
title: "The Silent Factory: Why Sweden's Next Line of Defense Runs Without Workers"
author: "Nicolas Waern"
publication: "Sentinel"
date: 2026-04-25
status: draft
---

# The Silent Factory: Why Sweden's Next Line of Defense Runs Without Workers

*Nicolas Waern — WINNIIO AB*
*Published: April 25, 2026*

---

At 06:14 on a Tuesday, 30% of a small steel manufacturer's welders receive their mobilization orders. By 08:00, they are gone. By 10:00, a capacity planner sitting three desks away opens a 46-sheet Microsoft Excel workbook — nine years of accumulated heuristics, conditional logic, and override rules that exist nowhere else on earth — and begins to realize there is no one left who can read it the way she can.

This is not a hypothetical. It is the structural condition of a real category of Swedish industry, repeated across the defense supply chain in firms that employ between 30 and 80 people, earn EUR 10-15 million a year, and hold the quiet knowledge of how critical components for national infrastructure are actually built.

Sweden entered NATO in March 2024. Its total defense doctrine — *totalförsvar* — now formally states that every company in Sweden is a defense actor. That is a serious claim. It implies that the resilience of the nation depends not only on tanks and fighter jets and hardened communications, but on the continued ability of a steel fabricator in Dalarna to weld structural beams to tolerance. The doctrine is correct. What it does not yet say is that those beams cannot be welded without two specific people, and that those two people have never been assessed as strategic assets.

---

## The Knowledge No One Sees

Consider the factory I have studied — anonymized here as a defense-relevant steel fabricator of approximately 40 employees. Its product is a patented system of prefabricated steel-concrete composite beams used in defense infrastructure construction. The design is documented. The patent is filed. The drawings exist.

What is not documented is how you actually make them.

The weld sequences that join the steel components require tolerances that cannot be achieved from the drawings alone. They require calibrated hands, trained ears listening to the arc sound, eyes that have learned to read the resistance through a welding mask. Two certified welders at this firm hold this knowledge between them. Management estimates that passing this knowledge to a new welder takes a minimum of 24 months of supervised apprenticeship. That estimate is not written down anywhere. It lives in the shared understanding of three senior staff members who have been present long enough to form it.

The capacity planning function — which determines what can be produced, when, at what cost, given labor availability, machine uptime, and material lead times — lives in that 46-sheet Excel workbook. Its author has refined it continuously over nine years. When she was on extended sick leave for three weeks in 2023, production planning effectively stopped. Decisions were deferred. Contracts were delayed. Two client relationships required remediation. No post-incident review was conducted.

This is the anatomy of a single-point-of-failure that is invisible to defense procurement planners, absent from resilience frameworks, and unremarkable to the firm itself — because the workbook works, and the welders weld, and every day that nothing goes wrong is evidence that nothing is wrong.

---

## 137 Factories. All the Same.

The Swedish Steel Construction Institute — *Stålbyggnadsinstitutet*, known as SBI — represents approximately 137 member companies. The majority are SMEs in the size range of this factory. There is no systematic data on how many of them have a version of the 46-sheet workbook, the two irreplaceable welders, the knowledge that lives in heads rather than systems. But the structural conditions that produce this configuration — small firm, deep craft knowledge, no dedicated IT function, no knowledge management program, no defense-specific continuity planning — are endemic to the sector.

If even half of these firms share the core vulnerability, Sweden's defense supply chain has scores of single-thread dependencies running through individuals who have never been identified as critical to national security, holding knowledge that has never been documented as defense infrastructure.

Sweden's national risk assessment (*Nationell riskbild för strategisk beredskap*, 2025) identifies supply chain disruption as a Category 1 resilience risk. Its analytical focus is physical infrastructure. A factory whose equipment survives a disruption event but whose key personnel are unavailable is, from a production standpoint, as dead as a bombed factory. The difference is that the bombed factory gets rebuilt. The factory that lost its capacity planner sits with a workbook no one can decode, waiting.

---

## What "Knowledge Infrastructure" Actually Means

The defense planning community thinks in terms of physical assets: facilities, equipment, logistics networks, stockpiles. These are important. But they are not sufficient.

There is a second category of infrastructure that is equally load-bearing and almost entirely invisible: the tacit knowledge of how to use those physical assets to produce specific outcomes. The philosopher Michael Polanyi called it the tacit dimension — the things we know that we cannot tell. A master welder who can produce a joint to a half-millimeter tolerance knows something that cannot be transferred by reading a manual, or by watching a video, or even by watching the weld being made. It requires co-presence, practice, correction, time. Realistically, months to years of it.

This is not a criticism of how manufacturers operate. It is how skilled craft knowledge works, everywhere, always. The problem is not that the knowledge is tacit. The problem is that it has never been externalized — converted from embodied memory into any form that survives the departure of the person who holds it.

When I look at how knowledge flows — and fails to flow — through a firm like the IQB Fabricator, the picture is stark. The welders transmit their craft to apprentices through physical co-presence: guiding hands, correcting posture, interpreting arc sound in real time. This produces skilled welders, but it produces no artifact, no record, no redundancy. The capacity planner's heuristics have been encoded, inadvertently, into Excel formulas over nine years — a partial externalization that was never intentional, never reviewed for completeness, and requires the author present to interpret.

The firm's entire production capacity sits at the intersection of these two fragile threads. There is no combination of these artifacts into a coherent knowledge system. There is no pathway for a new operator to learn from a document rather than a person. There is no scenario planning for what happens when the persons are gone.

---

## The Digital Twin Is Not a Technology Project

The answer to this problem is a digital twin. But it is critical to understand what that means and what it does not mean.

A digital twin, in this context, is not a glamorous simulation. It is not a 3D visualization for a trade show. It is not a cloud platform that aggregates IoT sensor data. It is the externalization of knowledge that currently exists only in human heads, into a structured, persistent, on-premises record that survives the departure of any individual.

For the weld bay, this means conducting structured knowledge elicitation interviews with senior welders while they work — capturing their process judgments not as abstract text but as annotations on a spatial 3D model of the specific joints where those judgments are made. When the welder says "at this angle, with this material, you read the arc sound like this," that statement is attached to the precise location in the factory where it is valid. Spatial anchoring works because skilled knowledge is often more accessible and more accurate when recalled in the physical context where it is practiced. The knowledge does not float free of its environment; the digital twin maps the environment and pins the knowledge to it.

For capacity planning, this means working with the Excel master — not around her — to elicit and formalize the nine years of heuristic logic that currently lives in conditional formatting rules and override tables that only she can interpret. This is the single most important and most difficult step in the entire deployment. The person whose knowledge needs to be externalized is also the only person who can do the externalizing. She is simultaneously the risk and the solution. Managing this correctly — through structured elicitation conducted as collaboration, not extraction — is the rate-limiting factor for whether the entire project succeeds or fails. No technology solves this. Facilitation does.

Once the knowledge is externalized and structured, the digital twin enables three capabilities that are directly relevant to defense resilience. It enables scenario simulation: what happens to delivery schedules if the capacity planner is unavailable for four weeks? It enables faster onboarding: new welders can begin from a documented spatial model rather than from zero co-presence time. And it enables a defensible answer to the question that defense procurement planners should be asking of every supplier: "If your three most critical people are unavailable tomorrow, how long before you can produce again?"

Without a digital twin, the honest answer to that question, at most firms in this sector, is: "We don't know. Months. Maybe never at full capacity."

---

## Why the Data Cannot Leave the Building

There is a constraint that makes cloud-based digital twin solutions unsuitable for this context, and it is not a preference — it is a legal and operational reality.

Defense supply chain participation means that the detailed process knowledge of how specific structural components are fabricated — tolerances, weld sequences, capacity constraints — may constitute sensitive information under Swedish law and NATO security protocols. The US CLOUD Act of 2018 creates a structural condition in which data stored on US-based cloud infrastructure remains accessible to US federal agencies under lawful order, regardless of where the data physically resides. For a firm manufacturing components for defense infrastructure, putting its process knowledge on any US-based cloud platform is a sovereignty exposure.

The architecture I advocate through the [SMILE methodology](https://doi.org/10.5281/zenodo.19683062) — Sustainable Methodology for Interoperable Lifecycle Environments — resolves this by design: all data stays on premises. The digital twin runs locally. No manufacturing process data is transmitted to external services. The software tools may be open-source; the data is sovereign. Edge-native is not a buzzword here. It is the only architecture that is simultaneously interoperable with national resilience frameworks and compatible with the data handling requirements of defense supply chain participation.

The data model underlying this architecture is the [IEC 63278 Asset Administration Shell](https://industrialdigitaltwin.org/) — an open international standard for industrial digital twins. Its submodel structure allows a firm to represent technical properties, operational parameters, process documentation, and compliance artifacts in a single interoperable format. Critically, it creates a pathway to standardized resilience reporting: for each critical process, how many people hold the relevant tacit knowledge, how much has been externalized, and what is the estimated recovery time if key personnel are unavailable. This is the kind of structured, auditable answer that defense procurement should require — and that no firm in this sector currently has.

---

## Three Ways This Fails Without a Digital Twin

It is worth being concrete about the disruption scenarios, because abstract resilience arguments are easy to set aside.

**Personnel loss.** A capacity planner with nine years of knowledge in a 46-sheet workbook is removed from the operational picture — illness, death, coercion, relocation. Production planning stops within days. Recovery requires recruiting, onboarding, and training a replacement with no externalized knowledge model to learn from. Realistic recovery time: 6 to 18 months to partial restoration, 24 months or more to full function. During that window, defense infrastructure contracts are at risk.

**Forced relocation.** Sweden's totalförsvar framework provides for relocation of civilian enterprises in conditions of heightened preparedness. A factory relocated from its established premises loses not only its equipment configuration but the spatial-tacit knowledge anchored to that configuration: the specific weld bays where experienced welders have calibrated their techniques, the production floor layout around which capacity planning heuristics are organized. Without a spatial knowledge model of the original site, reassembly at a new location begins from zero.

**Surge demand.** A mobilization event requires rapid increase in production volume. Surge capacity requires rapid onboarding of new workers to existing processes. If those processes exist only in the tacit knowledge of a small number of experienced practitioners, surge onboarding time is measured in months, not days. A factory whose process knowledge is not externalized has no collective organizational intelligence to mobilize under surge conditions — only the heroic effort of its knowledge holders, who will be simultaneously the most overloaded and most irreplaceable people in the building.

In all three scenarios, the physical factory survives. The knowledge does not.

---

## The Hybrid Warfare Angle Nobody Is Discussing

State-level adversaries pursuing hybrid warfare strategies have documented incentives to target not the physical assets of defense supply chain firms but their knowledge infrastructure. Personnel targeting — identifying and removing key knowledge holders through mechanisms short of kinetic attack — is a well-documented vector. The IQB Fabricator archetype presents a minimal-effort attack surface of this type: three individuals control all knowledge that cannot be recovered without their participation.

This is not classified information. It is derivable by any competent analyst from publicly available procurement records and standard industrial reconnaissance. A supply chain map, a company registration, a LinkedIn search. The knowledge concentration is visible to anyone who looks.

Knowledge externalization through digital twin deployment directly reduces this attack surface. A factory whose process knowledge is comprehensively documented in an edge-native digital twin is not invulnerable to personnel targeting, but its recovery time drops from months or years to days or weeks. The knowledge survives the individual.

---

## Sweden Has a Narrow Window

Digital twins take time to mature. Knowledge elicitation at a firm like the IQB Fabricator — done properly, with the trust and collaboration of the people whose knowledge is being captured — takes months, not weeks. A six-phase deployment from initial survey to embedded organizational practice is a 12 to 18 month commitment. You cannot build this capability in a crisis. You build it before the crisis, which means building it now.

Sweden's defense bill for 2025-2030 allocates significant resources to hardening physical manufacturing capacity: procurement contracts, facility hardening, material stockpiling. These investments address the asset dimension of manufacturing resilience. They do not address the knowledge dimension. They are necessary but not sufficient.

The 137 member companies of the Swedish Steel Construction Institute represent a defined, bounded population within which a national knowledge resilience program could be piloted. A structured audit — identifying which process knowledge is held by fewer than two individuals, which planning functions depend on single-person systems, which production capabilities cannot be replicated from existing documentation — requires no technology investment and can be completed in two weeks per firm. It produces the baseline against which any subsequent digital twin deployment must be measured, and against which any defense resilience assessment of that firm should be required.

> "The silent factory runs on knowledge stored in human heads. Making that knowledge resilient is not a technology project. It is an act of national preparedness."

The case for starting is not that digital twins are good technology. It is that the alternative — continuing to treat human memory as the persistent layer of national defense infrastructure — is a bet that no mobilization event, no illness, no personnel targeting operation, and no surge demand will test that assumption before it can be corrected.

That is a bet Sweden cannot afford to make.

---

*Nicolas Waern is CEO of WINNIIO AB and developer of the SMILE methodology for digital twin implementation in resource-constrained manufacturing environments. ORCID: [0009-0001-4011-8201](https://orcid.org/0009-0001-4011-8201). Contact: ceo@winniio.io*
