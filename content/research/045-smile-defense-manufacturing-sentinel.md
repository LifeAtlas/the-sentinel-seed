# How to Make a Factory Remember: The SMILE Methodology for Defense-Ready Manufacturing

*Nicolas Waern — WINNIIO AB*
*Published: April 25, 2026*

---

## The Factory That Forgot How to Weld

Somewhere in western Sweden, there is a factory that produces a patented steel beam unlike anything else in the market. The beam is engineered for hardened construction — the kind used in defense infrastructure, facilities that need to survive things most buildings don't. The factory employs about 40 people. It has been doing this for decades. And it is about three retirements away from not being able to do it at all.

The knowledge of how to fabricate this beam — how to cut it, weld it, form it to tolerance, quality-certify it — does not live in any document. It lives in six people. Three of them are over 55. None of what they know has ever been fully written down in a form that would allow someone unfamiliar with the product to achieve production-quality output without years of apprenticeship.

This is not unusual. This is the default state of skilled manufacturing.

The scenario that defense planners model is not subtle: a crisis period in which two of those six operators are unavailable — mobilized, ill, otherwise unreachable — and IQB beam production falls to near zero within 30 days. Not because the machines break. Because no one left in the building knows how to run them correctly.

This is the knowledge fragility problem. It is invisible in good times. It becomes a national security problem the moment conditions stop being good.

---

## The Invisible Infrastructure

Every factory you walk into carries two factories inside it. The first is the one you can see: the machines, the floor layout, the raw material racks, the finished goods staging area. The second is the one you cannot see: the accumulated knowledge of how to run the first one.

The second factory is the more important one. You can replace a press. You cannot easily replace the operator who knows that this specific press, with this specific material batch, needs an extra half-second dwell time on the forming pass to avoid micro-fractures that won't show up until the part is under load. That knowledge was built over years of doing. It was never written down because it was never a problem — the person who knew it was always there.

Until they weren't.

Industrial economists call this tacit knowledge, borrowing the term from philosopher Michael Polanyi, who wrote in 1966 that "we can know more than we can tell." Factory operators are masters of this. Ask a skilled welder to describe exactly what they're doing, and they will give you a partial account at best — not because they're being evasive, but because the knowledge is genuinely in their hands, eyes, and nervous system. It was acquired through repetition, not instruction. It resists verbalization for the same reason that bicycle riding resists verbalization.

The organizational consequence of this is stark: tacit knowledge that is never externalized is invisible infrastructure. It shows up on no balance sheet. It is protected by no redundancy plan. It exists only for as long as the person who holds it continues to show up to work.

For a factory supplying defense contractors, this is not merely an operational risk. Sweden's total defense framework — the planning document that coordinates civilian and military capacity for crisis scenarios — explicitly enrolls manufacturers of critical components as part of national defense preparedness. A factory that cannot run because its three senior operators are unavailable is, in the precise sense that defense planners use the term, a failure of national resilience.

The problem is real, it is widespread, and the existing tools for addressing it don't actually work for factories like this one.

---

## Why The Existing Playbook Fails

When consultants or academics discuss digital twins and knowledge capture for manufacturing, they typically describe what a mature implementation looks like. They show architectures with bidirectional data flows, real-time sensor integration, simulation layers, and cloud-connected analytics dashboards. The standards bodies have produced rigorous specifications for all of this. ISO 23247 defines a four-tier manufacturing digital twin architecture. The Asset Administration Shell standard defines how to structure an asset's digital representation across its lifecycle. The Digital Twin Consortium has catalogued 29 distinct capabilities that a full digital twin system should have.

These are genuinely useful documents. They describe what good looks like. What they do not describe is how a 40-person factory with one part-time IT person, an Excel workbook as its production management system, no CAD/CAM integration, and a maintenance record that exists partly in a physical log book and partly in the memory of the lead technician — how that factory takes the first step.

The gap is not technical. It is methodological. Every framework describes the destination. None of them describe the road.

The predictable result is that most SME manufacturers who attempt knowledge externalization on their own either abandon the effort or produce documentation that is immediately out of date and never used. The reference factory in this case had tried twice: a written procedure documentation exercise in 2019 that was abandoned after six months, producing usable documentation for three of 27 production process steps. A video recording initiative in 2022 that produced recordings too unstructured for onboarding and never maintained when processes changed.

Both failures had the same root cause: no systematic method for getting knowledge out of people's heads and into a form that survives them.

---

## SMILE: Five Phases, Plain Language

The SMILE methodology — Sustainable Methodology for Interoperable Lifecycle Environments, now at version 4.4 — was designed to be the road, not just the destination. It is a step-by-step process that any manufacturing SME can follow, starting from wherever they actually are, using the equipment they actually have.

Five phases. Each one builds the foundation for the next. Each one produces standalone value even if the organization never proceeds further.

**S is for Scan: Walk the floor with a 3D scanner and a microphone.**

Before any interview, before any documentation exercise, before anyone is asked to explain what they know — the physical environment is captured. A 3D scanner maps the production floor, the equipment, the workpiece positioning, the spatial relationships between stations. Structured observation protocols document operators performing actual production tasks, not describing them.

The sequence matters enormously. When the scanner goes in first, something changes in the room. Operators who initially describe their work as "impossible to explain" become engaged when they are invited to walk through the scanned environment and point out what the scanner missed. The scanner's objective capture creates a shared reference. Instead of trying to verbalize abstract spatial knowledge, operators can annotate a 3D model — pointing at the specific position of the welding head, indicating exactly how they're reading the acoustic signature of the press. The scanner provides a spatial vocabulary that makes tacit knowledge articulable without forcing it into linguistic form it was never designed to take.

The Scan phase also captures what the factory already has in explicit form: drawings, certification records, maintenance logs, operator annotations on machinery. This documentary inventory matters because almost every factory has more explicit knowledge than it realizes — it's just scattered and unconnected.

Output: a 3D baseline of the production environment, a structured observation corpus, and a documentary inventory. All of it locally stored. None of it sent anywhere.

**M is for Model: Build the digital twin.**

The Model phase takes everything the Scan produced and transforms it into a structured knowledge representation — a digital twin of the factory's operational knowledge. Not a real-time simulation. Not a bidirectional data mirror. A digital shadow: a structured, machine-readable record of how this factory does what it does.

This is the phase that produces what might be called the factory's institutional memory. The output is structured using the SMILE ontology — a knowledge representation schema with layers for general manufacturing concepts, specific process parameters, quality standards, and, in defense contexts, a resilience layer that classifies each piece of knowledge by its criticality and sovereign sensitivity.

The result is an object that means different things to different people, and that is precisely its value. For the factory's operators, it is a validated record of their expertise — something they can correct and annotate. For production management, it is a capacity planning tool. For defense contractors who need to audit supply chain capability without a two-day site visit, it is a structured evidence package. For the standards bodies, it is directly compatible with the Asset Administration Shell specification that the European industrial digital twin community has converged on. The same artifact, readable by all of them.

**I is for Integrate: Connect it to existing systems without replacing them.**

This is the phase most manufacturers get wrong when they try to do it without a methodology.

Every factory has a system that everyone has organized their work around. Usually it's an Excel workbook. Sometimes it's a legacy system that's been running since the 1990s. Occasionally it's primarily a shared paper record. Whatever it is, it is not going away, and the people who depend on it will resist any process that threatens to displace it.

SMILE's Integrate phase does not displace existing systems. It reads from them. The SMILE integration layer monitors the existing production management workbook for changes and translates its outputs into the enriched SMILE schema. SMILE never writes back to the source. The workbook continues to function exactly as before. The person who maintains it continues to be the authoritative owner of that data.

This matters because knowledge externalization fails when the people who hold the knowledge perceive the documentation process as a threat to their role. The Integrate phase is designed to demonstrate, through its actual technical behavior, that SMILE is a complement not a replacement. The production planner who runs the Excel workbook remains the production planner who runs the Excel workbook. What changes is that the knowledge embedded in that workbook is now connected to everything else the Scan and Model phases captured.

The Integrate phase also establishes the architecture constraint that is non-negotiable in defense contexts: all of this runs locally. No factory production data leaves the building. The SMILE runtime operates on commodity hardware — the kind any manufacturing firm already has or can acquire cheaply. This is not a concession to resource constraints. It is sovereignty by design.

**L is for Learn: Let the twin watch and learn patterns.**

Once the factory's knowledge is externalized and its existing data sources are connected, the SMILE model can begin to do something more valuable than just store what it knows: it can identify what the factory doesn't know it doesn't know.

The Learn phase runs pattern analysis against the integrated data corpus. Four specific functions:

First, it identifies process bottlenecks — the steps in the production sequence where delays concentrate, where variation is highest, where quality failures originate.

Second, it maps skill dependencies — specifically, which operators are the sole knowledge holder for which process steps. This is the map that makes the mobilization scenario concrete. Instead of a general worry that "if we lose people we might have problems," the factory now has a specific list: this welding sequence can only be performed to certification standard by two people; this calibration protocol is known by one.

Third, it establishes statistical baselines for process parameters, enabling ongoing monitoring without requiring specialist statistical expertise. When a process starts to drift, the system surfaces it.

Fourth, for defense contexts, it generates scenario vulnerability scores for each of the three disruption scenarios that Sweden's total defense framework requires civil industry to model: key personnel unavailability, forced facility disruption, and surge demand above peacetime capacity. The output is not a general assessment of resilience. It is a specific, step-by-step account of which combinations of personnel loss would halt production of each product, and by how much.

**E is for Exchange: Share the methodology, not the data.**

The Exchange phase is where SMILE's value multiplies beyond the individual factory.

Within the factory, Exchange produces structured onboarding materials derived from the SMILE model. New operators learn from a documented baseline rather than from informal apprenticeship alone. The reference factory case shows one new operator achieving competency certification in the IQB welding sequence 40% faster than the previous cohort average — a preliminary result, based on a single case, but directionally significant.

Across factories, Exchange enables something more ambitious. Industry networks — in this case, the 137-member Swedish Steel Construction Institute — can aggregate resilience assessments across their membership without requiring any individual factory to share proprietary manufacturing knowledge. The Exchange phase produces two types of shareable artifact: methodology templates that carry no factory-specific content and can be shared freely, and anonymized benchmark data that lets individual firms compare their knowledge coverage and skill dependency profiles against sector norms. Each factory's data stays at the factory. The sector gets a collective picture of its resilience.

This federated architecture matters for defense planners, who need to assess aggregate industrial capacity without requiring the disclosure of sensitive manufacturing capability details from individual suppliers.

---

## What the Numbers Show

The reference factory — the steel fabricator producing IQB beams — completed SMILE Phases S, M, and I over 14 weeks. The result: documented coverage of 23 of 27 critical production process steps. 85% coverage. The factory's previous best effort, over 26 weeks, covered 3 of 27 steps before being abandoned.

That is roughly an 8-fold improvement in documentation throughput. The comparison is imperfect — measuring against an abandoned prior attempt always flatters the new method — but the practical reality is stark: in three and a half months, the factory went from having almost no externalized knowledge to having a structured, standards-compatible, defense-auditable knowledge base.

That knowledge base has already been used in three concrete ways. One new operator onboarded faster. The production manager replaced manual Excel scenario modeling with structured digital twin queries for capacity planning. And a defense contractor supply chain audit that previously required a two-day site visit was completed using the SMILE model output without anyone leaving their office.

The 85% coverage figure means there are still four process steps that remain undocumented. The SMILE model knows which four they are. That transparency is itself a capability: the factory now knows exactly where its knowledge fragility lives.

---

## The Defense Case

Sweden's totalförsvar — total defense — is not an abstract concept. It is a formal planning framework that names specific civilian industrial capacities as components of national defense preparedness. Manufacturers who supply defense infrastructure contractors are part of that framework, whether they know it or not.

The knowledge fragility problem is a totalförsvar problem. A factory that can build patented blast-resistant structural beams under normal peacetime conditions, but that loses that capability within 30 days of a two-person mobilization, is not actually available to the defense supply chain when it matters.

Sweden's defense research institute has identified this knowledge vulnerability as one of the primary failure modes in civil industry's contribution to total defense. The gap is not equipment or capacity in theory — it is knowledge continuity in practice.

SMILE's Learn phase is specifically designed to generate the scenario vulnerability assessments that total defense planning requires. The output is directly usable by the kinds of defense planners who need to know, for any given factory in their supply chain, exactly what happens to production capacity under each disruption scenario.

The edge-native architecture — the fact that SMILE runs entirely on local hardware — is a defense requirement, not just a preference. Manufacturing capability data for defense-relevant suppliers should not transit US-operated cloud infrastructure. The legal exposure alone makes cloud-hosted solutions inappropriate for this context. Sovereignty by design means the data never leaves the building, which means the methodology can be adopted without creating new security risks in the process of managing existing ones.

NATO's Article 3 resilience requirements, which Sweden now operates under, identify industrial knowledge as a component of national resilience. The SMILE Exchange phase, applied at the scale of 137 steel construction companies, produces exactly the kind of collective sector resilience picture that defense planners need and currently cannot get.

---

## Edge-Native by Design

There is a pattern in how technology gets deployed in sensitive industrial environments: a solution is developed for large enterprises with IT departments, cloud connectivity, and risk tolerance for data sharing. The solution then gets presented to SMEs as something they should adopt. The SME looks at the data flows, the cloud dependencies, the integration requirements — and either doesn't adopt it, or adopts a version so watered-down that it provides no real capability.

SMILE was designed in reverse. It started from the constraint that nothing leaves the building, and built upward from there. The runtime runs on commodity hardware. The integration layer is read-only and file-system based for environments without modern APIs. The knowledge model is stored locally and exported only in structures the factory controls.

This is not a limitation of SMILE — it is the architecture appropriate to the threat model. When the data being externalized describes how to manufacture components for defense infrastructure, the question of where that data lives is not a preference. It is a security posture.

The same architecture that satisfies defense data sovereignty requirements also satisfies the more general concern that many factory owners have about knowledge externalization: the worry that making their process knowledge explicit and structured creates new vulnerability, that documenting what they know is the first step toward that knowledge leaving with a consultant or a competitor. SMILE's local-first design means the factory retains complete control over what it shares, with whom, and on what terms.

---

## What Happens Next

The reference factory represents one implementation. The Swedish Steel Construction Institute's 137-member network represents the near-term replication scope. The broader European SME manufacturing population — tens of thousands of firms facing the same knowledge fragility challenge — represents the scale at which SMILE's potential impact becomes genuinely significant.

The methodology is published under an open license. The ontology, observation protocols, and integration schemas can be adopted and adapted without permission or fees. What SMILE protects is data sovereignty: the firm's specific knowledge stays with the firm. The methodology for externalizing it is freely available to anyone who needs it.

Three things need to happen for that potential to be realized.

First, multi-site validation. The 85% coverage figure, the 8x throughput improvement, the 40% faster onboarding — these are real results from one factory. They need to be tested across five, ten, fifty factories before they can be stated with confidence as properties of the methodology rather than artifacts of one implementation.

Second, defense planner adoption. The scenario vulnerability reports that SMILE's Learn phase produces are designed to satisfy the requirements of total defense planning assessments. Defense planners need to validate that these outputs actually work within their assessment frameworks. The Swedish Steel Construction Institute is already running a first resilience assessment exercise using the reference factory's SMILE model. That exercise will either confirm the output format or reveal what needs to change.

Third, regulatory alignment. The European Commission is in the process of mandating Digital Product Passports for a growing range of manufactured goods. SMILE's Exchange phase outputs are designed to satisfy the emerging DPP schema. If that alignment holds up under formal regulatory review, every SME manufacturer who implements SMILE for knowledge externalization and defense resilience purposes also gets DPP compliance as a byproduct. That is a meaningful incentive for adoption that has nothing to do with defense — and it dramatically expands the population of organizations for whom SMILE is immediately relevant.

The factory in western Sweden has, in 14 weeks, gone from a three-retirement knowledge cliff to an 85% documented process baseline. It knows exactly where its remaining vulnerabilities are. Its senior operators' expertise is now encoded in a form that survives them. A defense contractor can audit its supply chain capability without a site visit.

One factory. Fourteen weeks. The knowledge is no longer invisible.

---

*Nicolas Waern is CEO of WINNIIO AB and developer of the SMILE methodology (DOI: 10.5281/zenodo.19683062). ORCID: 0009-0001-4011-8201. Contact: ceo@winniio.io*
