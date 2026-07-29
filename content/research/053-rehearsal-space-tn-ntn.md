---
title: "The Rehearsal Space — Why Hybrid Satellite-Terrestrial Networks Need a Digital Twin"
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

*Why hybrid satellite-terrestrial networks need a digital twin*

*By Nicolas Waern, CEO — WINNIIO AB / Life Atlas*

*Fictionalized composite scenario grounded in industry-standard NTN launch conditions (sub-GHz satellite–terrestrial co-channel reuse, mass-market subscriber base, government-linked spectrum programs) — not a description of any named operator or event.*

---

## The claim

A digital twin does one thing for a satellite direct-to-device launch: it moves handover and interference failures from the live network — where every customer is a test probe — into a simulation, where mistakes are free. Without it, six functions — planning, operations, finance, regulatory, legal, security — each independently rediscover the same failure after it has already reached customers. That is not six problems. It is one: no rehearsal space for reality.

One caveat governs everything that follows, and it cuts against the vendor as much as for it: **a twin without a measured accuracy figure is a rendering, not an instrument.** The first deliverable of any credible program is small — one cluster, one prediction, one comparison against real network counters, one error bar. Every benefit below is conditional on that number existing.

## Why now

Three verifiable facts make this urgent rather than interesting:

1. **Direct-to-device is going broadband and commercial.** Mass-market satellite messaging launched in the US in July 2025 at $10/month; broadband D2D video calls over LEO satellites to unmodified phones have been demonstrated with multiple operators. Several announced programs reuse the operator's own sub-GHz terrestrial band from space — meaning the satellite and the macro grid interfere with each other by design, per location, per pass.
2. **The base station is moving to orbit.** 3GPP Release 19 (frozen December 2025) standardized the regenerative NTN payload — a full gNB on the satellite; first standards-based trials of Rel-19-class features over commercial LEO ran in late 2025. Cells moving at 7.5 km/s with inter-satellite links exceed what human planners and classic SON counters were built for.
3. **Autonomy frameworks already point here.** Operators are validating TM Forum Level 4 autonomy in narrow domains, and the 2025–26 research frontier names the bottleneck explicitly: trust in the simulation that closed-loop AI acts through. The twin is where that trust is manufactured — or isn't.

## The two worlds, by stakeholder

The scenario is a composite: an operator launching direct-to-device service over a band shared with its terrestrial grid, in terrain that mixes dense urban, remote, and hard-to-reach geography. Every consequence below follows mechanically from whether a calibrated rehearsal space exists. No figures in this section are measurements; they describe failure modes documented in the mobility-robustness literature.

**Network planning.** With: interference seams and handover conflicts between the space and ground layers are surfaced per-location before launch, fixed in configuration, verified in re-simulation. Without: the seam is discovered by dropped calls; every fix is a live experiment needing a maintenance window, a change board, a rollback plan — and counters say where it hurts, never why.

**Operations (NOC).** With: alarms are judged against a predicted baseline, so deviation means signal; AI-proposed parameter changes are rehearsed in the twin and approved with the physics visible. Without: baseline and noise are indistinguishable, and "AI-powered optimization" recommends changes nobody dares approve — because the one time it was trusted blind, it traded one district's drops for another's coverage hole.

**Finance.** With: the satellite add-on's revenue case survives launch because the customer experience does. Without: refund requests and churn convert the differentiator into the liability, and the coverage-everywhere brand promise becomes the thing the market jokes about. The revenue line, not the RF plan, is what the twin actually protects.

**Regulatory.** With: coexistence evidence is reproducible — versioned inputs, stated error bars, rerunnable studies — the exact form regulators and spectrum conferences accept. Without: the answer to "show us your interference analysis" is a consultant's pre-launch PDF, and a public proceeding begins. Programs funded with public money face this question with certainty, not probability.

**Legal.** With: every automated decision has provenance — which prediction, which model version, which data, which approval — so incident liability is a lookup. Without: it is a negotiation with the satellite partner, conducted without the ability to reconstruct what happened. Indemnity clauses assume someone can determine causation; without a twin, frequently nobody can.

**Cybersecurity.** With: hostile scenarios are rehearsable — GNSS jamming that strips the timing reference the satellite link depends on (a real enough failure mode that 3GPP opened a GNSS-resilience study for it) is tested before an adversary tests it. Without: the failure mode is evaluated for the first time in production, and the post-incident report states the scenario was never modeled — the finding regulators and boards actually read.

**The customer** is the stakeholder the whole table collapses into: in one world they notice nothing; in the other they notice everything, and in markets where porting takes minutes, they act on it.

## One scene, for scale

A phone on a ferry leaves the terrestrial network mid–video call and picks up a satellite doing 7.5 km/s, on the same frequency the coastal towers use. Whether that moment is invisible or becomes a support ticket was decided months earlier — by whether someone could afford to be wrong in private.

## Where this is heading

The satellites launch either way. Between now and ~2030: D2D shifts from messaging to broadband; regenerative payloads put base stations in orbit; the 2027 World Radiocommunication Conference decides whether direct satellite-to-phone spectrum scales globally — and the coexistence studies that decision runs on are precisely twin-shaped work. Operators with a calibrated twin will run these networks with smaller teams and defend their spectrum position with data. Operators without one will defend it with opinions — live, blind, and in public.

The entry ticket is not a platform pitch. It is one cluster, one prediction, one error bar.

---

*Composite scenario; technical and regulatory context verifiable against public 3GPP, TM Forum, ITU and operator announcements as of July 2026.*
