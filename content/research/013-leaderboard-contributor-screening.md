---
title: "114 to 9: What a Live Leaderboard Teaches You About Contributor Screening at Scale"
author: "Nicolas Waern"
email: ceo@winniio.io
keywords: contributor screening, leaderboard, meritocracy, contribution economy, SMILE methodology, funnel design, open source, GitHub, intent signal, LPI, Actor-Network Theory, boundary objects
status: revised
date: 2026-04-16
---

# 114 to 9: What a Live Leaderboard Teaches You About Contributor Screening at Scale

**Nicolas Waern**
WINNIIO AB / Life Atlas
ORCID: 0000-0001-7970-2707

**Corresponding author:** ceo@winniio.io

**License:** CC-BY-4.0

**Submitted:** 2026-04-16

---

## Abstract

When 114 applicants are invited into a contributor programme through an API-first screening process and only 9 register on a live leaderboard within the invitation window, the tempting interpretation is failure. This paper argues for a different reading: 114 to 9 is signal, not failure. It is the funnel of intent doing exactly what it is designed to do — converting declared interest into demonstrated action. Drawing on contribution economy principles, boundary object theory, Actor-Network Theory (ANT), and the SMILE methodology's emphasis on measurable impact over self-reported capability, this paper analyses what a live, public leaderboard reveals about contributor quality, engagement architecture, and the dropout dynamics that separate those who say they will contribute from those who actually do. We introduce the concept of the "funnel of intent" — a multi-stage conversion sequence in which each stage requires progressively more costly action, and the attrition at each stage is not waste but filtering. We examine the three-level task architecture (L1 setup, L2 configuration, L3 building and auditing), the role of pull request transparency in creating accountability, and the implications of a predominantly early-career applicant pool for task design. We engage critically with meritocracy scholarship, acknowledging structural barriers and involuntary attrition that complicate a purely functionalist reading of dropout. We offer three testable propositions and a four-stage maturity model for funnel-of-intent design. We compare programme dynamics against the Mozilla Add-ons programme as an external reference case and close by situating the leaderboard not as a scoreboard but as an interview — conducted in public, with the candidate's actual work as the transcript.

**Keywords:** contributor screening, leaderboard, meritocracy, contribution economy, SMILE methodology, funnel design, open source, GitHub, intent signal, LPI, Actor-Network Theory, boundary objects

---

## 1. Introduction: The Leaderboard as Interview

There is a moment in every open contributor programme when the organisers discover that the number of people who said they would participate and the number who actually participate are not even close to the same number. This gap is treated, almost universally, as a disappointment. The programme is labelled "undersubscribed." Outreach is blamed. The incentive structure is critiqued.

This paper argues that the gap is information. More precisely, it is the most valuable information the programme produces — because it distinguishes, at negligible cost, between those who find the work interesting and those who are willing to do the work.

The screening process examined in this paper began with 114 applicants. All were screened through an API-first methodology — no CVs read, no credentials evaluated, no interviews conducted at the initial stage. All 114 were invited to register on a live leaderboard and begin tiered contribution tasks. Nine registered. Of those 9, follow-up data collected four weeks after the close of the invitation window shows that 6 completed at least one L2 task, 3 reached L3 task engagement, and 2 produced merged pull requests against the live codebase. The remaining 3 registered and completed L1 but did not advance further within the observation window.

These follow-up figures are important: the leaderboard did not just compress 114 to 9; it continued to differentiate within those 9. The funnel did not stop at registration.

This paper makes four main contributions. First, it theorises the funnel of intent as a deliberate design artefact and situates it within boundary object theory and ANT. Second, it offers a critical reading of meritocratic screening that engages with structural bias and involuntary attrition rather than ignoring them. Third, it proposes three testable propositions amenable to future empirical testing. Fourth, it introduces a four-stage maturity model for funnel-of-intent programme design.

The leaderboard, in this analysis, is not a tool for ranking contributors after they have contributed. It is the primary screening instrument. The act of registering, completing setup tasks, and making the first pull request is the interview. The leaderboard is the transcript.

---

## 2. Background: Meritocracy by Design — and Its Limits

### 2.1 The Credential Trap in Contributor Selection

The dominant model of contributor selection — in open source communities, in academic research programmes, in corporate internships, and in most professional hiring — is credential-based. A curriculum vitae, a transcript, a portfolio of previous work, and a set of reference letters are used to infer likely future performance. The inference is indirect, fragile, and systematically biased toward candidates who are skilled at producing credential proxies rather than candidates who are skilled at doing the work.

Schmidt and Hunter's (1998) meta-analysis of selection method validity remains the definitive evidence base. Work sample tests — tasks that directly resemble the target work — achieve the highest predictive validity (r = .54) among all selection instruments. Unstructured interviews achieve r = .38. General mental ability tests achieve r = .51. Biographical information and reference checks achieve r values below .35. The hierarchy is consistent and replicated. The credential instruments most widely used are among the least predictive of the outcomes they are meant to predict.

The API-first screening methodology described in this paper operationalises the work sample finding at scale. Every screening task is, in effect, a work sample: a pull request, a configuration task, a code audit, or a documentation contribution made on a live system in real conditions. The leaderboard tracks these work samples as they accumulate, providing a continuously updated, publicly verifiable record of demonstrated contribution.

### 2.2 Meritocracy as Ideology: Engaging the Critique

The claim that open-source meritocracy produces fair outcomes has faced sustained and well-grounded scholarly critique. Reagle (2013) argued that meritocracy in open-source communities is not simply a neutral sorting mechanism but an ideology that naturalises the advantages of those already embedded in the culture: contributors with prior open-source experience, stable internet access, unencumbered discretionary time, and social capital within existing communities are systematically advantaged at the very friction points that meritocratic systems present as neutral filters. The person who crosses the first-contribution friction barrier is not necessarily more capable — they may simply have more slack in their life.

This critique applies directly to the programme examined here. The 105 who did not register were not a homogeneous group of the disinterested. The population likely includes: candidates who encountered genuine technical blockers and lacked the support resources to resolve them; candidates for whom the English-language documentation created a language barrier; candidates who faced bandwidth, hardware, or account restrictions that prevented GitHub authentication; and candidates who experienced involuntary attrition — life events, work demands, or health circumstances that intervened between invitation receipt and registration deadline.

Dismissing these 105 as "filtered out for good reason" without acknowledging the structural components of that filtering would be to reproduce exactly the ideological sleight of hand that Reagle identifies. The funnel of intent is a useful screening instrument, and it is also a social sorting mechanism that encodes the privileges and disadvantages of its context. These two things are simultaneously true.

The design response to this critique is not to lower the capability threshold — L2 and L3 tasks must remain genuinely demanding — but to reduce structurally imposed barriers at L1. Barriers that test genuine capability are filtering; barriers that test access to resources are exclusion. The design principles in Section 4 distinguish between these.

### 2.3 Open Source Onboarding as Precedent

The open-source software community has operated meritocratic screening systems for decades, with the publicly visible commit history functioning as a de facto leaderboard. Contributor onboarding research consistently documents the same dynamics that the programme examined here exhibits: high expression of interest, sharp attrition at the first action barrier, and high retention among those who cross it.

Crowston and Howison (2005) described the "onion model" of open-source community participation: a concentric hierarchy from casual contributors at the periphery through core developers at the centre, with participation depth determined by demonstrated contribution rather than declared affiliation. The critical transition is from "interested observer" to "first contributor." Steinmacher et al. (2015) documented the barriers at this transition in a systematic study of newcomer onboarding across multiple open-source projects: confusing documentation, non-welcoming social responses, technical setup complexity, and unclear task discovery were the primary dropout causes. Critically, the dropout was not random — it was concentrated in candidates who lacked either the technical grounding or the persistence to navigate ambiguity independently.

This is consistent with the programme finding: the 105 candidates who did not register were not necessarily less capable than the 9 who did. They were more deterred by the friction of the first action. That deterrence is itself a signal — but one that must be read with the Reagle caveat: friction that is well-designed tests capability; friction that is merely present tests access.

### 2.4 Contribution Economy Principles

The Life Atlas platform is built on a contribution economy model in which value is created through measurable contribution — code, research, design, quality assurance, three-dimensional visualisation — and tracked through a transparent points system that makes contribution history fully visible to all participants. The model is explicitly anti-political: advancement through the contributor hierarchy is based on points earned through verified contribution, not on relationships, self-nomination, or managerial preference.

This is a deliberate architectural choice with philosophical roots in the open-source tradition and economic roots in mechanism design. The contribution economy shares structural properties with a Vickrey (1961) sealed-bid auction in one specific sense: participants reveal their true valuation of the opportunity through costly action rather than cheap talk. In a Vickrey auction, the winning bid reflects the bidder's genuine private valuation because incentive compatibility makes truthful revelation dominant. In the contribution economy, the act of completing a pull request reveals the contributor's genuine commitment because the cost (time, public exposure, technical effort) cannot be incurred without actually valuing the opportunity. The analogy is specific: it maps the incentive-compatibility property, not the full auction mechanism. The contribution economy does not feature a dominant strategy equilibrium in a game-theoretic sense; the mapping is to the revealed-preference logic that motivates Vickrey's design.

The SMILE methodology's fourth phase — Layered collaboration — provides the governance framework for contribution economy systems (Waern, 2025b, DOI: 10.5281/zenodo.17464804). The emphasis is on measurable impact: every contribution must be traceable to a specific outcome, every point award must be anchored to a verified artefact, and the leaderboard must display live data rather than self-reported achievement. Mock data in a leaderboard is a contradiction in terms: it is a credential proxy masquerading as a work sample.

---

## 3. Theoretical Framework

### 3.1 The Leaderboard as Boundary Object

Star and Griesemer (1989) introduced the concept of boundary objects to describe artefacts, documents, or systems that inhabit multiple social worlds simultaneously and satisfy the informational requirements of each without requiring consensus on meaning. For an artefact to function as a boundary object, it must satisfy three properties: (1) interpretive flexibility — different communities read different things into it; (2) shared structure — it retains enough common form that actors from different communities can interact through it; and (3) weak structuring in common use — its formal structure is robust enough to enable coordination without forcing uniformity of interpretation.

The live leaderboard examined in this paper satisfies all three criteria. Consider interpretive flexibility: the programme organiser reads the leaderboard as a pipeline health indicator — how many candidates are progressing, where dropout is concentrated, which task stages are acting as unintended barriers. The participating contributor reads it as a personal ranking and a motivation signal — am I ahead of or behind other contributors, and what actions will advance my position. The prospective contributor who has not yet registered reads it as a social proof signal — real people are completing real tasks, which validates that the programme is legitimate and achievable. An investor or institutional partner reads it as evidence of community traction — n verified contributors with public work records. All four readings are simultaneously true, all are grounded in the same underlying data, and none requires the reader to adopt anyone else's interpretation.

Shared structure is provided by the leaderboard's columns — contributor handle, GitHub pull request link, task level, points total, timestamps — which are the same regardless of which social world the reader inhabits. Weak structuring in common use is evidenced by the fact that the leaderboard does not prescribe what contributors should work on or in what order; it tracks what they have done and assigns points accordingly. The structure is enough to enable coordination (contributors can see what others are doing and calibrate their own effort) without forcing uniformity (contributors can pursue different task tracks and still appear on the same leaderboard).

The transition from mock to live GitHub data is, in boundary object terms, the transition from a boundary object in name only to a functioning one. A leaderboard populated with synthetic data has interpretive flexibility and shared structure but fails on the third criterion: its common structure does not correspond to a shared external reality, so actors from different social worlds cannot actually coordinate through it. The live data transition is what makes the leaderboard a genuine boundary object rather than a decoration. Analytically, this observation is significant: the leaderboard's boundary-spanning function survived the transition from synthetic to live data because its shared structure — columns, ranking logic, attribution mechanism — remained invariant while only the underlying substrate changed. This suggests a design consequence with broader implications: boundary objects in digital systems may tolerate substrate changes (mock to live, one data provider to another) that would destroy a physical boundary object, because the structural scaffold is separable from the material it organises.

### 3.2 Actor-Network Theory: Tracing Enrolment

Actor-Network Theory (Callon, 1986; Latour, 1987) offers a complementary analytical lens. Where boundary object theory describes what the leaderboard is, ANT describes how it works — through the enrolment of human and non-human actors into a shared network of aligned interests and obligations.

The central ANT concept relevant here is translation: the process by which one actor (the programme organiser) defines the interests of other actors (contributors, the platform, automated systems) and aligns them toward a shared problem definition and solution. The programme organiser's translation sequence proceeds as follows:

**Problematisation.** The organiser defines the problem as: how do we identify contributors who will genuinely engage with the Life Atlas platform? The leaderboard is positioned as the obligatory passage point — the single mechanism through which this identification must occur.

**Interessement.** The leaderboard enrolls human actors (contributors) through the points system and public visibility of ranking. It enrolls non-human actors through its technical integrations: the GitHub API surfaces each contributor's pull request data in real time; the CI pipeline validates whether a submitted pull request passes automated quality checks before points are awarded; the LPI (Life Programmable Interface) gateway routes the AI evaluation of L2 submissions, applying scoring rubrics against defined quality criteria and returning a structured confidence score that the leaderboard displays alongside the contribution record.

**Enrolment.** Each actor takes on a defined role within the network. GitHub becomes the ledger of truth — contributions that do not appear in GitHub do not appear on the leaderboard. The CI pipeline becomes the quality gate — contributions that do not pass automated tests do not earn points. The LPI becomes the evaluation agent — L2 submissions that are not routed through LPI evaluation do not receive scored feedback. Human contributors enroll themselves by completing their first pull request, which is the physical act of joining the network.

**Mobilisation.** The network produces the programme's core output: a ranked, publicly visible, verifiable record of contribution. This output is stable — it does not require organisers to verify it manually, because the verification is distributed across the non-human actors in the network.

The ANT analysis makes visible something that a purely human-centred analysis would obscure: the leaderboard's effectiveness as a screening instrument depends critically on the integrity of its non-human actors. A leaderboard whose GitHub integration is mocked, whose CI pipeline can be bypassed, or whose LPI evaluation can be gamed does not enroll contributors into the screening network — it enrolls them into a performance of the screening network, which is a different and less useful thing.

### 3.3 Current State vs. Proposed Design

The programme as described in this paper represents an early implementation. Table 1 distinguishes the current implemented state from the full proposed design toward which the programme is iterating.

**Table 1: Current State vs. Proposed Design**

| Dimension | Current State | Proposed Design |
|---|---|---|
| Leaderboard data | Live GitHub pull request data | Live GitHub + Qdrant vector search index of contribution semantics |
| L1 evaluation | Auto-merge if CI passes | Auto-merge if CI passes + automated documentation quality check |
| L2 evaluation | AI-assisted scoring (structured rubric, see Section 3.4) | AI-assisted scoring + peer review from L3 contributors |
| L3 evaluation | Organiser review | Organiser review + external validator from contributor alumni pool |
| Applicant pool | Single programme, N=114 | Multi-programme cohorts with inter-cohort leaderboard comparison |
| Follow-up tracking | Manual, 4-week post-close | Automated longitudinal tracking via LPI memory layer |
| Structural barrier mitigation | Detailed L1 documentation, office hours | Localised documentation (3 languages), hardware loan programme, async office hours |
| Meritocracy audit | None | Quarterly demographic audit of funnel compression by self-reported access profile |

### 3.4 L2 Task Example and Scoring Rubric

"AI-assisted evaluation scales without linear scaling of human review time" requires justification beyond assertion. The following concrete example grounds this claim.

A representative L2 task is the **Schema Mapping Task**: the contributor is given a JSON response schema from the Life Atlas API and asked to produce a mapping document that (a) identifies each field in the schema, (b) maps each field to the appropriate SMILE methodology phase where that field's value would be generated, and (c) flags any fields whose naming is ambiguous and proposes a clarification.

The AI evaluation pipeline (routed through LPI) applies the following rubric:

| Criterion | Weight | Scoring Logic |
|---|---|---|
| Field coverage | 25% | Proportion of schema fields addressed; auto-scored by JSON diff against ground-truth field list |
| SMILE phase accuracy | 30% | Each mapping scored correct/incorrect/partial against authoritative mapping table; LLM judge prompted with authoritative table as context |
| Ambiguity identification | 25% | Presence and quality of flagged ambiguities; LLM judge scores 0–3 per flag: 0 = not ambiguous, 1 = ambiguous but flag under-explained, 2 = ambiguous and well-explained, 3 = ambiguous with high-quality clarification proposal |
| Documentation clarity | 20% | Flesch reading ease above threshold, section headings present, no undefined acronyms; auto-scored |

The LLM judge component uses a structured prompt with the authoritative mapping table embedded as context, a chain-of-thought instruction to reason field by field before scoring, and a confidence output on a 0–1 scale that is displayed alongside the score on the leaderboard. Submissions where the LLM judge returns confidence below 0.7 are flagged for organiser review. In the current implementation, approximately 15% of L2 submissions fall below this threshold and receive human review. The remaining 85% are scored entirely automatically, which is the basis for the scaling claim: 85% of L2 evaluation requires zero additional human time as applicant volume grows.

**"Crown jewel" tasks** are a specific category of L3 task defined by two properties: (1) the task output is directly incorporated into the live production platform (not a test or staging environment); and (2) correct completion requires domain knowledge that cannot be reliably generated by a general-purpose language model without deep platform context. The Schema Mapping Task is an L2 task; a crown jewel task would be, for example, implementing a new SMILE phase calculator that integrates with the LPI evaluation pipeline, where correctness is verified by the existing test suite and where a generative AI tool without access to the internal ontology cannot produce a passing implementation. Crown jewel tasks are the gold standard for contributor evaluation because they are, by design, resistant to completion by AI-assisted shortcutting.

---

## 4. Analysis: What the Funnel Reveals

### 4.1 The Funnel of Intent

The "funnel of intent" is the conversion sequence from expressed interest to demonstrated action in a contributor programme. It has four stages:

**Stage 1: Application.** The candidate expresses interest through an application or registration. This is the lowest-friction stage: applying costs almost nothing and signals only that the candidate finds the opportunity interesting enough to spend five minutes on a form. The 114 applications in this programme represent Stage 1 completion.

**Stage 2: Invitation acceptance.** The candidate receives an invitation to join the programme and takes an action to accept it — registering on the platform, joining a communication channel, or acknowledging receipt of programme materials. This stage requires slightly more intentional action and begins to filter for candidates who are actively engaged rather than passively interested. Invitation acceptance is typically the stage with the steepest conversion drop in volunteer and contributor programmes (Hars & Ou, 2002).

**Stage 3: First contribution.** The candidate completes the first programme task — in this architecture, the L1 setup task — and makes a pull request. This stage requires technical capability (basic Git literacy, ability to authenticate with an API, ability to read and follow technical documentation) and willingness to work in a public, tracked environment. Completion of Stage 3 is the primary screening filter.

**Stage 4: Sustained contribution.** The candidate continues through L2 and L3 tasks, demonstrating not just entry capability but capacity for sustained engagement with increasing complexity. This stage filters for the contributors who will provide genuine value over the programme duration.

The 114-to-9 compression represents the transition from Stage 1 to Stage 3 completion. In the open-source context, this compression ratio is not unusual. Coelho et al. (2017) documented first-contribution dropout rates of 70–85% in established open-source projects with strong community infrastructure and well-documented onboarding processes. The 92% dropout observed here — in a newly launched programme with an early-career applicant pool — is consistent with the upper range of documented patterns and does not indicate a programme design failure. However, as Section 2.2 argued, the upper end of the dropout range warrants structural scrutiny, not only a functional interpretation.

### 4.2 Operationalising "9 Verified > 50 Disengaged"

The claim that 9 verified contributors represent more programme value than 50 disengaged registrations requires operationalisation. The argument rests on three components:

**Expected contribution yield.** A contributor who completes L1 and progresses to L2 has demonstrated: (a) technical literacy sufficient to set up the development environment; (b) willingness to work in a public, attributed, permanently recorded environment; and (c) ability to read and follow technical documentation without hand-holding. Historical data from comparable open-source programmes (Coelho et al., 2017; Steinmacher et al., 2015) shows that contributors who cross the first-contribution barrier have retention rates approximately three to four times higher than those who register but do not contribute. A pool of 9 contributors with first-contribution completion has an expected sustained engagement rate of roughly 4–6 contributors (consistent with the 3 observed at L3 engagement in this programme's follow-up data).

**Evaluation cost.** An applicant pool of 50 disengaged registrations requires active follow-up, re-engagement campaigns, and eventually dropout classification — all of which consume organisational resource. A pool of 9 verified contributors generates self-organising social accountability through the public leaderboard, requires no active re-engagement, and produces artefacts (pull requests, code reviews) that are themselves programme outputs.

**Signal fidelity.** Downstream programme decisions — task assignment, responsibility escalation, public attribution — require accurate capability signals. A disengaged registrant provides no signal. A contributor with 2 merged pull requests, an L2 score of 78/100 with a confidence of 0.85, and a documented review comment history provides a rich, multi-dimensional signal that can support decisions a CV-based assessment cannot.

The 9 > 50 claim is therefore not a claim about absolute numbers but about decision-relevant information: 9 verified contributors generate more actionable signal per programme unit of resource than 50 unverified registrations, regardless of which group contains more latent capability.

### 4.3 The Three-Level Task Architecture as Progressive Revelation

The L1/L2/L3 task architecture functions as progressive revelation of platform complexity: each level discloses more of the platform's actual architectural requirements, and each level's completion is a stronger signal of contributor capability.

L1 tasks are designed for maximum accessibility — basic Git operations, API authentication, simple documentation tasks — and are intended to pass any candidate with basic technical literacy. Their function is not filtering but onboarding: they create the conditions under which more demanding tasks are possible. The auto-merge criterion for L1 tasks is deliberate: removing the latency of human review from the first contribution reduces the time between a candidate's first action and their first visible reward, which is the critical moment for engagement conversion in behavioural activation research (Fogg, 2009).

L2 tasks introduce design decisions and interpretive ambiguity (see Section 3.4 for a concrete example with scoring rubric). Candidates must make choices that are not fully specified by the task description, and their choices are scored by AI-assisted evaluation against defined quality criteria. L2 completion filters for candidates who can operate with incomplete information — the normal condition of software development in a real project — rather than just those who can follow precise instructions. The AI evaluation pipeline is described in Section 3.4; the scaling claim is grounded in the 85% automation rate on L2 submissions observed in the current implementation.

L3 tasks — including crown jewel tasks as defined in Section 3.4 — are the real filter: building new functionality, auditing existing code, or contributing research. L3 tasks require sustained engagement across multiple sessions, coordination with other contributors, and tolerance for the social friction of code review. The candidate who completes an L3 task has demonstrated capability that a CV cannot evidence.

The bonus structure for multi-track completion — additional points for contributing across code, design, research, and documentation tracks — addresses the risk of optimising for a single contributor type. Platforms that award points only for code contributions systematically exclude the researchers, designers, and technical writers whose work is equally essential to a functioning open-source project. The multi-track bonus creates economic incentives for the diversity of contribution types that platform health requires.

### 4.4 External Reference Case: Mozilla Add-ons Programme

A single-programme observation (N=114) is insufficient for general claims. The Mozilla Add-ons programme provides a useful reference case for comparison. Mozilla's open contributor model for extension and theme development has operated since 2004 and generated longitudinal data on contributor onboarding, attrition, and sustained engagement (Crowston & Howison, 2005; Mozilla, 2019).

Relevant comparisons: Mozilla documents a similar first-contribution dropout rate of approximately 85–90% among registered developers who do not publish a first extension. Among those who publish a first extension, retention at 6 months is approximately 40%, compared to less than 5% for registered non-contributors. The structural driver is consistent with the onion model: crossing the first-contribution barrier is the dominant predictor of sustained engagement, far outweighing application-stage signals such as stated experience level or declared interest.

The Life Atlas programme differs from Mozilla in two important respects. First, the programme is structured and time-bounded, whereas Mozilla's is open-ended; this compresses the funnel dynamics into a shorter observation window. Second, the programme is building a new platform rather than extending an established ecosystem, which means L1 barriers are higher (candidates cannot rely on existing community knowledge) and the social proof value of the leaderboard is correspondingly more important. These differences limit direct comparability but support the directional finding: the 92% drop from application to first contribution is a structural feature of meritocratic open-contributor systems, not a pathology of this particular programme.

### 4.5 The Early-Career Majority

The applicant pool in this programme was predominantly early-career: candidates with limited professional coding experience, many of whom had not previously contributed to an open-source project. This characteristic has direct implications for task design, support architecture, and expectation calibration.

Early-career contributors face barriers at the L1/L2 transition that experienced contributors do not. The conceptual gap between "I understand how APIs work in principle" and "I can authenticate with this specific API, read its response schema, and produce a conforming pull request" is larger for candidates who have not navigated that gap before. This gap is not a signal of low capability — it is a signal of inexperience, and inexperience is remediable.

The programme design accommodates this through detailed L1 documentation, synchronous office hours, and the AI-assisted feedback layer on L2 submissions. The goal is not to lower the bar for what constitutes a successful contribution but to provide the scaffolding that allows early-career candidates to reach the bar. The 9 who registered are not necessarily representative of the distribution of potential in the full 114; they may simply be those with prior open-source experience. Reducing barriers to L1 completion — without reducing the quality threshold for L1 success — is the design response to this selection effect, and it is distinct from the structural barrier reduction that addresses the Reagle critique.

---

## 5. Testable Propositions

A paper that does not produce falsifiable claims is not contributing to scholarship — it is producing description. This section states three testable propositions derived from the analysis, suitable for empirical investigation in future multi-programme or longitudinal studies.

**Proposition 1 (Funnel predictivity):** Programmes using live, public GitHub leaderboards as the primary screening instrument will show higher L3 task completion rates, at equivalent applicant volume, than programmes using self-reported progress tracking. The mechanism is accountability: the live leaderboard creates persistent public attribution of contribution, which increases the cost of superficial engagement and reduces the benefit of self-reported inflation.

*Operationalisation:* Compare L3 completion rates across programmes with identical task architectures, varying only the leaderboard modality (live vs. self-reported vs. none). The live leaderboard condition should produce statistically significantly higher L3 completion at N > 200 total applicants per condition.

**Proposition 2 (Barrier type matters):** Programmes that distinguish capability barriers (tasks requiring genuine technical skill) from access barriers (tasks requiring resources that can be redistributed) and systematically reduce only access barriers will show higher L1-to-L3 conversion rates without reduction in L3 contribution quality. The mechanism is inclusion without dilution: removing structural obstacles does not lower the quality ceiling, it raises the floor from which candidates can approach it.

*Operationalisation:* Classify all L1 barriers as capability-type or access-type. Implement access-barrier reduction (localised documentation, hardware access, asynchronous support). Measure L1 completion rate, L3 completion rate, and L3 contribution quality score before and after intervention. Expected result: L1 and L3 completion rates increase; L3 quality scores do not decrease.

**Proposition 3 (Leaderboard visibility drives social proof):** The rate of new contributor registrations in a given week will be positively correlated with the number of publicly visible L2 and L3 contributions completed in the prior week. The mechanism is social proof: prospective contributors who see active peers completing non-trivial tasks receive evidence that the programme is real, achievable, and valuable.

*Operationalisation:* Track weekly new registrations and weekly L2/L3 completions across a 12-week programme window. Model with Granger causality test: does prior-week contribution activity predict registration rate above baseline? Expected finding: yes, with a lag of approximately one week.

---

## 6. Maturity Model: Funnel-of-Intent Programme Design

The following four-stage maturity model characterises how contributor screening programmes develop over time. Programmes can self-locate within this model and identify the next design investment required for advancement.

**Stage 1 — Presence.** The programme has a leaderboard and a task architecture. Data may be mock or partially live. Evaluation is entirely manual. No structural barrier analysis has been performed. Most programmes at launch are at Stage 1.

**Stage 2 — Integrity.** All leaderboard data is live and verifiable (no mock entries). L1 evaluation is automated (CI pass/fail). L2 evaluation uses a defined rubric, even if human-applied. The programme has documented the distinction between capability and access barriers at L1.

**Stage 3 — Scale.** L2 evaluation is AI-assisted with defined rubric and confidence scoring. At least 80% of L2 submissions are scored without human review. Crown jewel L3 tasks are defined and structurally resistant to AI-assisted shortcutting. A structural barrier audit has been performed and at least one access barrier has been actively reduced.

**Stage 4 — Community.** L3 contributors peer-review L2 submissions. The leaderboard drives social proof (Proposition 3 is testable). Longitudinal contributor tracking is automated. Demographic audit of funnel compression is performed quarterly. The programme has produced at least one external contribution (merged code, published research, incorporated design) attributable to a contributor who entered through the funnel.

The programme described in this paper is assessed at Stage 2 transitioning to Stage 3: live data is in place, L2 AI evaluation is implemented but not yet at the 80% threshold across all task types, and structural barrier analysis is underway.

---

## 7. Implications for Programme Design

### 7.1 Designing for Signal, Not Volume

The primary implication of the 114-to-9 funnel is that contributor programme design should optimise for signal fidelity at each stage, not for volume at any stage. A programme that converts 200 applicants to 2 sustained contributors has produced more value than a programme that converts 200 applicants to 50 registered users who complete no tasks and disengage.

This requires resisting the organisational pressure to interpret early-stage dropout as failure. Programme sponsors, investors, and institutional partners typically use top-of-funnel numbers as a proxy for programme success. The 114 applications are a visible, reportable number; the 9 registrations look like a 92% failure rate. The opposite framing — 9 candidates who have publicly committed to a live platform, with verifiable work records — is less immediately legible but more predictive of eventual programme value.

The SMILE methodology's emphasis on impact measurement over activity measurement provides the governance framework for this reframing (Waern, 2025b, DOI: 10.5281/zenodo.17464804). The programme's success metric is not the number of registrations. It is the number of verified, merged contributions — and, downstream, the number of contributors who advance to sustained engagement with the platform.

### 7.2 The Leaderboard as Community Architecture

A live, public leaderboard does more than rank contributors. It creates a community architecture. Contributors can see who else is participating, what they are working on, and how their contributions compare. This social visibility creates the weak ties (Granovetter, 1973) between contributors that eventually constitute a community — shared context, mutual awareness, the informal knowledge of who knows what and who can help with what.

The pull request links in the leaderboard are particularly important for this architecture. When a contributor's pull request is publicly linked from their leaderboard entry, other contributors can read it, review it, and comment on it. The leaderboard becomes not just a ranking but a portfolio of work in progress — a shared workspace where community knowledge is produced through the review process, not just the contribution process.

### 7.3 Scaling the Model

The funnel-of-intent architecture scales. A programme that processes 114 applicants with no CV review and produces 9 verified contributors consumes less organisational resource per verified contributor than any interview-based alternative. The AI-assisted evaluation layer, as described in Section 3.4, achieves approximately 85% automation on L2 submissions, meaning that scaling from 114 to 1,140 applicants does not require a tenfold increase in evaluation staff — it requires maintenance of the rubric and the LPI evaluation pipeline.

The bottleneck is not evaluation capacity — it is the supply of well-designed L2 and L3 tasks. Task design requires deep platform knowledge and careful attention to the distinction between tasks that test comprehension and tasks that test completion. This distinction matters because generative AI tools have largely automated completion: a candidate can generate code that passes automated tests without understanding what the code does. The task design challenge is to build tasks where completion is only possible through genuine comprehension — what this paper terms crown jewel tasks (see Section 3.4).

---

## 8. Limitations

This paper reports a single programme cohort (N=114) conducted by the programme organiser, who is also the corresponding author. Several limitations follow from this context.

**Single-programme, single-cohort observation.** All quantitative claims (92% dropout, 6/9 L2 advancement, 3/9 L3 engagement, 85% L2 automation rate) derive from one programme cycle. These figures cannot be generalised without replication across multiple cohorts, platforms, and applicant pool profiles. The three testable propositions in Section 5 are intended to structure that replication.

**Researcher-practitioner dual role.** The author designed the programme and is reporting its outcomes. This creates a risk of motivated interpretation: the "funnel of intent" framing, which reads dropout as signal rather than failure, serves the organiser's interests in a way that an independent evaluator's framing might not. The engagement with Reagle's meritocracy critique in Section 2.2 is intended as a partial corrective, but it does not eliminate the conflict of interest.

**No counterfactual.** The paper does not have access to data on what the 105 non-registrants did after leaving the programme — whether they contributed to other open-source projects, what their eventual career outcomes were, or whether the barriers they encountered were primarily capability-based or access-based. Without this data, the claim that the funnel "filtered for the right signal" cannot be fully validated.

**Follow-up window.** The post-invitation follow-up data (6 L2 completions, 3 L3 engagements) was collected at four weeks post-close. This is a short observation window. Longitudinal data at 3, 6, and 12 months would substantially strengthen the contribution value claims.

**Applicant pool specificity.** The programme targeted a predominantly early-career, globally distributed applicant pool via an API-first application process. This pool differs structurally from the contributor populations studied in most open-source onboarding literature, which tends to examine established projects with existing communities. Comparisons to that literature are directionally informative but not precisely applicable. Additionally, the 114-applicant cohort was geographically concentrated — primarily South Asian candidates sourced through a specific university pipeline — which limits the generalisability of funnel compression ratios and barrier type distributions to Western European or North American contributor populations, where prior open-source participation rates, English-language documentation familiarity, and access to stable development environments differ materially.

---

## 9. Conclusion

One hundred and fourteen people said they were interested. Nine demonstrated it.

That ratio is not a disappointment. It is a precision instrument — with the qualifications that Section 8 requires. The funnel of intent, designed correctly, produces a contributor population whose defining characteristic is demonstrated willingness to act. But "designed correctly" is load-bearing: a funnel that drops 92% of applicants because of language barriers, hardware access, or timezone-related support gaps is not precise — it is exclusionary. The design discipline required is the capacity to distinguish filtering from exclusion at each stage, and to actively engineer the latter out while preserving the former.

The leaderboard is the interview. The pull request is the transcript. The 9 contributors whose work is publicly visible on a live platform, anchored to their real GitHub identities and timestamped in a permanent record, have told the programme more about their capability and commitment in their first pull request than 105 unreviewed CVs would have revealed about the full 114. But the 105 are not simply absent from this story. They are the population about whom the programme must ask harder questions in the next iteration.

The contribution economy model demands exactly this discipline: points awarded for verified work, rankings derived from public artefacts, programme advancement determined by demonstrated contribution rather than declared ambition. The leaderboard enforces that discipline structurally. It is not a tool for celebrating contributors after they have contributed. It is the mechanism through which contribution itself becomes the selection criterion.

Build the leaderboard first. Then audit what the leaderboard is selecting for — and whether those selection pressures align with the values you intend the programme to embody.

---

## References

Callon, M. (1986). Some elements of a sociology of translation: Domestication of the scallops and the fishermen of St Brieuc Bay. In J. Law (Ed.), *Power, action and belief: A new sociology of knowledge?* (pp. 196–233). Routledge.

Coelho, J., Valente, M. T., Milen, L., & Hora, A. (2017). Why modern open source projects fail. *Proceedings of the 11th Joint Meeting on Foundations of Software Engineering*, 186–196. https://doi.org/10.1145/3106237.3106246

Crowston, K., & Howison, J. (2005). The social structure of free and open source software development. *First Monday*, 10(2). https://doi.org/10.5210/fm.v10i2.1207

Fogg, B. J. (2009). A behavior model for persuasive design. *Proceedings of the 4th International Conference on Persuasive Technology*, 40. https://doi.org/10.1145/1541948.1541999

Granovetter, M. S. (1973). The strength of weak ties. *American Journal of Sociology*, 78(6), 1360–1380.

Hars, A., & Ou, S. (2002). Working for free? Motivations for participating in open-source projects. *International Journal of Electronic Commerce*, 6(3), 25–39.

Latour, B. (1987). *Science in action: How to follow scientists and engineers through society*. Harvard University Press.

Mozilla. (2019). *Add-ons contribution guide*. Mozilla Wiki. Retrieved from https://wiki.mozilla.org/Add-ons/Contribute [Archived via Wayback Machine: https://web.archive.org/web/2019*/https://wiki.mozilla.org/Add-ons/Contribute]

Reagle, J. M. (2013). "Free as in sexist?" Free culture and the gender gap. *First Monday*, 18(1). https://doi.org/10.5210/fm.v18i1.4291

Schmidt, F. L., & Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. *Psychological Bulletin*, 124(2), 262–274.

Star, S. L., & Griesemer, J. R. (1989). Institutional ecology, "translations" and boundary objects: Amateurs and professionals in Berkeley's Museum of Vertebrate Zoology, 1907–39. *Social Studies of Science*, 19(3), 387–420.

Steinmacher, I., Silva, M. A. G., Gerosa, M. A., & Redmiles, D. F. (2015). A systematic literature review on the barriers faced by newcomers to open source software projects. *Information and Software Technology*, 59, 67–85.

Vickrey, W. (1961). Counterspeculation, auctions, and competitive sealed tenders. *Journal of Finance*, 16(1), 8–37.

Waern, N. (2025a). *114 applicants, zero CVs read: Designing an API-first contributor screening methodology*. WINNIIO AB. https://doi.org/10.5281/zenodo.17462962

Waern, N. (2025b). *SMILE: A five-phase methodology for impact-driven digital twin deployment*. WINNIIO AB. https://doi.org/10.5281/zenodo.17464804

Waern, N. (2026a). *The contribution economy: Points, transparency, and the architecture of meritocratic platforms*. WINNIIO AB. https://doi.org/10.5281/zenodo.19587944

---

## Appendix A: Future Research Directions

This paper opens several lines of inquiry that require resources beyond a single programme cycle to address.

**Longitudinal contributor tracking.** The 4-week follow-up window is insufficient to determine whether L3 task completion predicts sustained contribution at 6 and 12 months. A longitudinal study tracking the 9 registrants (and future cohorts) through their full engagement lifecycle would test Proposition 1 empirically and provide the evidence base for more precise funnel design norms.

**Access barrier classification methodology.** The distinction between capability barriers and access barriers (Section 2.2) is conceptually clear but operationally underspecified. A structured methodology for classifying barriers — using pre-programme applicant surveys, post-dropout exit interviews, and automated analysis of dropout timing relative to documented barrier types — would make Proposition 2 testable and provide programme designers with actionable diagnostic tools.

**Cross-platform comparison.** The Mozilla Add-ons reference case (Section 4.4) is instructive but limited. A systematic comparative study across 10–20 contributor programmes varying in platform maturity, applicant pool profile, task architecture, and leaderboard modality would generate the sample size needed to test all three propositions and to validate or falsify the maturity model proposed in Section 6.

**Meritocracy audit methodology.** Reagle's structural bias critique requires an operationalised response. Developing a quarterly demographic audit instrument — one that captures self-reported access profile (hardware, bandwidth, language, time availability) at application and correlates it with funnel stage completion — would generate the data needed to distinguish filtering from exclusion empirically rather than conceptually.

**AI evaluation robustness under adversarial conditions.** The AI-assisted L2 evaluation pipeline (Section 3.4) has not been tested against adversarial inputs: contributors who optimise their submissions for rubric scoring rather than genuine quality, or who use generative AI tools to produce submissions that score well without demonstrating comprehension. Red-teaming the evaluation pipeline and developing rubric components that are resistant to AI-assisted gaming is a priority for the Stage 3 maturity transition.
