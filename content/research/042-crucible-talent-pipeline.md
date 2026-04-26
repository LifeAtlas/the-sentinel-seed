# From Screening to Soul Graph: A Local-First Architecture for Gamified Talent Progression in Agent-Native Organisations

**Nicolas Waern**
WINNIIO AB
ORCID: 0000-0001-7970-2707

**License:** CC-BY-4.0

**Submitted:** 2026-04-21

---

## Abstract

This paper reports on the empirical outcomes and architectural evolution of an API-first contributor screening system (Waern, 2026a) that processed 55 candidates in five days. Building on the theoretical design presented in that earlier work, we describe what emerged when the screening methodology was extended into a continuous talent progression system. Three contributions are made. First, we introduce the **Soul File** — a structured identity capture that maps a contributor's stated goals, self-awareness, and motivational patterns alongside their demonstrated technical capability. Second, we present the **Soul Graph** — a force-directed network visualisation that renders identity-based connections (parallel dreams, complementary strengths, gravitational ties) rather than organisational hierarchy. Third, we propose a **gamified progression engine** with uncapped experience points, achievement systems, streak multipliers, and penalty mechanisms — all fed by behavioural signals from development tools (Git, meeting transcripts, peer reviews) rather than self-reported surveys. The system runs local-first: all code, conversations, and identity data remain on the organisation's infrastructure. Only anonymised progression signals flow upstream, enabling a federated intelligence layer that improves all instances without accessing any single organisation's data. We frame this architecture through Granovetter's (1973) strength of weak ties theory and argue that the Soul Graph makes previously invisible inter-personal connections actionable for team formation, mentorship matching, and promotion decisions. We position this as a counter-architecture to cloud-dependent HR analytics platforms (Lattice, Jellyfish, LinearB) that require full data access, and propose differential privacy (Dwork, 2006) as the mathematical guarantee of data sovereignty. Limitations of the current implementation, the cold-start problem for the signal network, and the gamification backlash risk are discussed.

**Keywords:** talent progression, soul graph, gamification, local-first architecture, federated learning, differential privacy, identity capture, weak ties, agent-native organisations, engineering analytics, API-first screening

---

## 1. Introduction

In a companion paper (Waern, 2026a), we described the design of an API-first screening methodology in which 114 applicants for an open-source contributor programme would be evaluated through programmable interfaces rather than documentary proxies. That system has now been deployed. 55 candidates completed the full pipeline in five days. Four emerged as "architects" (Level 4), nine scored in the 92nd percentile, and fourteen demonstrated strong execution at the 85th percentile.

But screening is a point-in-time event. The more interesting question is: what happens *after* selection? How do you track whether the people you chose are growing? How do you know when someone is ready for promotion — not because they asked, but because the evidence is overwhelming? And how do you do this without building a surveillance system that erodes the trust you're trying to cultivate?

This paper describes what we built to answer these questions.

---

## 2. The Soul File: Identity as Data Structure

### 2.1 Beyond the CV

A curriculum vitae represents capability at one or more removes from the capability itself (Waern, 2026a). We argued previously that artefact-based assessment closes this gap. But artefacts capture *what someone can do* — not *who they are* or *where they want to go*.

The Soul File captures three dimensions that no code repository reveals:

1. **Digital Twin Vision** ("MY TWIN"): What would you track about yourself if you had a personal digital twin? This question reveals self-awareness, introspective capacity, and the gap between a person's current state and their desired state.

2. **Trajectory** (3-year goal): Where do they want to be? This enables alignment between organisational needs and individual growth direction — the condition under which unpaid contribution becomes genuinely mutual.

3. **Excitement Signal**: What kind of work energises them? This predicts sustained engagement more reliably than any competency assessment.

### 2.2 Empirical Observations

Of 55 scored candidates, 23 provided Soul Files with substantive content. These exhibited markedly higher engagement: all four Level 4 submissions came from candidates with rich Soul Files. The correlation suggests that self-awareness (the capacity to articulate one's own cognitive patterns) predicts execution quality.

Notable identity types emerged:
- The **Builder-Founder** (running a startup while completing the programme)
- The **Poet-Scientist** (scheduling creative work around energy, not calendar)
- The **Trader-Engineer** (correlating investment decisions with coding focus states)
- The **Night-Owl Debugger** (debugging life like debugging code)

These are not HR categories. They are *identity patterns* that predict which work will feel like play for each person — and therefore where they will produce disproportionate output.

---

## 3. The Soul Graph: Weak Ties Made Visible

### 3.1 Theoretical Foundation

Granovetter (1973) demonstrated that weak ties — connections between people who do not share a close social circle — are disproportionately valuable for information flow and opportunity creation. Yet in most organisations, weak ties are invisible. You cannot see who shares a dream with someone three teams away. You cannot see which skills complement across departments. You cannot see which connections *would* be valuable if only the two people knew about each other.

The Soul Graph renders these invisible connections as a force-directed network.

### 3.2 Architecture

Nodes represent people. Size encodes Soul Strength (an uncapped experience metric). Colour encodes tier (Core Crew, Fast Track, Proving Ground). Position encodes gravitational relationship — people with more shared connections orbit closer together.

Edges are typed:
- **Gravitational** (gold): Connection to the orchestrating node (manager, CEO, team lead)
- **Skill overlap** (grey): Shared technical capabilities
- **Dream parallel** (purple, dashed): Similar 3-year goals expressed independently
- **Complementary** (green, dotted): Skills that complete each other

The orchestrating node — the person "putting everyone together" — is rendered as a sun whose luminosity responds to network activity. When the team ships, the sun blazes. When activity drops, it dims. This is not metaphor for its own sake: it creates an immediate visual signal of organisational energy that no dashboard of metrics provides.

### 3.3 Radial Orbits as Organisational Design

Rather than boxes-and-lines hierarchy, the graph uses concentric orbits:
- **Inner orbit** (150px): Core Crew — proven builders with ownership
- **Middle orbit** (250px): Fast Track — high potential, accelerated onboarding
- **Outer orbit** (350px): Proving Ground — demonstrating capability, earning their seat

Promotion is visible as orbital migration. A node moves inward as its Soul Strength grows. No announcement needed — the graph shows it.

---

## 4. Gamified Progression: Uncapped Growth

### 4.1 Why Uncapped

Most HR systems normalise scores (1-5, percentile ranks, competency levels). This creates a ceiling effect: once you're "senior," the system has nothing left to tell you.

Soul Strength is uncapped. It starts at the selection score (typically 60-95) and grows indefinitely: 100 → 200 → 500. There is always another achievement. There is always a higher state. This mirrors how expertise actually works: mastery has no ceiling.

### 4.2 Signal Sources

| Source | XP | Verification |
|--------|-----|--------------|
| PR merged | +15 | GitHub webhook |
| Security audit | +20 | Validated by peer |
| Tier promotion | +25 | Manager approval |
| Skill unlock | +12 | Automated challenge |
| Peer review given | +10 | GitHub review API |
| Course module completed | +8 | LMS completion |
| Meeting led | +5 | Transcript analysis |
| Daily standup | +3 | Post detected |

### 4.3 Multipliers and Penalties

Streaks multiply XP: 3-day (×1.2), 7-day (×1.5), 14-day (×2.0). Reviewing others grants ×1.1 on the next PR. Shipping before deadline grants ×1.3.

Penalties deduct: Ghosting 3+ days (-15), missed standup (-5), broken CI (-10), never reviewing others despite shipping 5+ PRs (-8), plagiarism (-50).

This creates a self-correcting system: the behaviour you want (consistency, collaboration, quality) is mechanically rewarded. The behaviour you don't want (isolation, silence, recklessness) is mechanically penalised.

### 4.4 Achievements

Achievements mark qualitative milestones: First Blood (first merged PR), Mentor (reviewed 3+ others), Hawk Eye (found a real vulnerability), Ship It (feature deployed to production), Gravitational (3+ people referenced your code).

For orchestrating nodes (managers, leads), a separate achievement track rewards network-building: Spark (connected two strangers), Catalyst (team shipped after your intervention), Gardener (mentee promoted), Network Weaver (5+ new inter-person edges in one week).

---

## 5. Local-First Architecture and Federated Intelligence

### 5.1 The Privacy Problem

Engineering analytics tools (Jellyfish at $30-62/seat/month, LinearB, Pluralsight Flow) require full access to an organisation's codebase, communication tools, and project management systems. This creates a fundamental tension: the data needed to track progression is the same data that constitutes trade secrets.

Lattice ($11-19/seat/month) takes a different approach — asking employees to self-report — but sacrifices signal quality for privacy.

### 5.2 Our Architecture

CRUCIBLE deploys as a container on the organisation's infrastructure. All source code, meeting transcripts, identity data, and progression state remain local. The system accesses GitHub, Jira, and meeting tools through local integrations that never route through our servers.

What flows upstream: anonymised signals. XP delta distributions (not individual scores). Achievement trigger rates (not who triggered them). Graph density metrics (not who is connected to whom). Streak length distributions (not whose streak broke).

What flows downstream: model updates. Better scoring weights. New achievement types validated across the network. Team formation heuristics improved by aggregate patterns.

### 5.3 Differential Privacy Guarantee

We employ DPella's differential privacy framework (Lobo-Vesga et al., 2020) to provide a mathematical guarantee: no individual's data can be reconstructed from the aggregate signals. This is not a policy promise — it is a cryptographic property of the signal aggregation function itself.

---

## 6. Limitations and Future Work

1. **Cold start**: The federated model requires ~100 organisations before aggregate signals outperform local heuristics. Early adopters bear the cost without the benefit.

2. **Gamification resistance**: Some engineers will perceive any scoring system as surveillance. Opt-in culture, transparent algorithms, and employee-controlled visibility settings are necessary but not sufficient mitigations.

3. **Scoring accuracy**: Our automated scorer produced false positives (a 48-line print statement scoring 9/11). The Agent Scorer addresses this but at computational cost.

4. **Cultural validity**: The Soul File questions may not translate across cultures. "Where do you want to be in 3 years?" assumes a linear career conception that is not universal.

5. **Survivorship bias**: We can validate whether selected candidates succeed, but cannot observe the counterfactual (whether rejected candidates would have succeeded if selected).

---

## 7. Conclusion

The hiring pipeline is a single moment. Talent progression is a continuous signal. By extending an API-first screening methodology into a local-first, gamified progression system, we transform a cost centre (recruiting) into an epistemic asset (organisational self-knowledge). The Soul Graph makes weak ties visible. The gamification engine makes growth continuous. The federated architecture makes it sovereign.

The question is no longer "who should we hire?" It is: "who is ready for what, right now, and how do we know?"

---

## References

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, 35(1), 128-152.

Dwork, C. (2006). Differential privacy. In *Automata, Languages and Programming* (pp. 1-12). Springer.

Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology*, 78(6), 1360-1380.

Lobo-Vesga, E., Russo, A., & Gaboardi, M. (2020). A programming framework for differential privacy with accuracy concentration bounds. In *IEEE Symposium on Security and Privacy*.

Waern, N. (2026a). 114 Applicants, Zero CVs Read: Designing an API-First Contributor Screening Methodology. WINNIIO AB. Zenodo.
