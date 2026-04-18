# 114 Applicants, Zero CVs Read: Designing an API-First Contributor Screening Methodology

**Nicolas Waern**
WINNIIO AB
ORCID: 0000-0001-7970-2707

**License:** CC-BY-4.0

**Submitted:** 2026-04-14

---

## Abstract

Traditional hiring and contributor screening rely on documentary proxies — curricula vitae, transcripts, recommendation letters — that represent a candidate's capability at one or more removes from the capability itself. This paper presents the design of a screening methodology in which 114 applicants for an eight-week open-source contributor programme are to be evaluated entirely through a programmable interface (API), with no CVs read at any stage. We describe a system in which candidates interact with a live platform through tiered tasks auto-assigned and partially evaluated by AI agents, producing traceable, Git-tracked artefacts from their first interaction. Empirical validation of this methodology is planned but not yet conducted; the contribution of this paper is the design itself — its theoretical grounding, architectural rationale, and expected outcomes. We frame the approach through Plato's allegory of the cave: the CV is the shadow on the wall; the API-first screening turns the candidate toward the fire, making demonstrated capability — not claimed capability — the unit of evaluation. Drawing on Cohen and Levinthal's (1990) absorptive capacity framework, we hypothesise that the platform itself should gain knowledge from every contributor interaction, transforming screening from a cost centre into an epistemic asset. We discuss the "AI-screens-AI" paradox introduced by generative AI tools, the design of "crown jewel" challenges that test comprehension rather than completion, and the implications for multi-track contribution models that extend beyond code to research, design, quality assurance, and three-dimensional visualisation. Limitations of the pre-empirical design and cultural context are acknowledged, and directions for future validation are proposed.

**Keywords:** API-first screening, programmable interfaces, contributor evaluation, absorptive capacity, open-source contribution, AI-assisted hiring, artefact-based assessment, generative AI paradox, multi-track contribution, effort-based filtering

---

## 1. Introduction: The CV as Shadow, the API as Cave

In Book VII of *The Republic*, Plato describes prisoners chained in a cave, able to see only shadows cast on the wall by objects passing before a fire (Plato, trans. 1992). The shadows are not false — they are real projections of real objects — but they are impoverished representations, stripped of depth, colour, and dimensionality. The prisoners mistake these shadows for reality itself because they have no access to the originals.

The curriculum vitae is a shadow. It is a two-dimensional projection of a multidimensional person: their skills compressed into bullet points, their experience into date ranges, their potential into the institutional prestige of their degrees. Like the shadows on Plato's cave wall, the CV is not false. It does correspond to something real. But it is a representation at several removes from the thing that actually matters — the candidate's capacity to contribute.

The entire apparatus of traditional hiring — CV screening, transcript analysis, reference checks, standardised interviews — operates within the cave. Each instrument adds another layer of representation, another shadow of a shadow. A recommendation letter is someone else's interpretation of the candidate's capability. A transcript is an institution's quantification of the candidate's performance on the institution's own tasks. A behavioural interview is the candidate's narrative reconstruction of past events, shaped by preparation, social desirability, and the stochastic vagaries of memory (Highhouse, 2008).

This paper presents the design of an alternative: a screening methodology in which the candidate's capability *is* the evaluation. In a programme involving 114 applicants for an eight-week open-source contributor programme, no CVs are to be read at any stage. Instead, candidates are given access to a programmable interface — a Life Programmable Interface (LPI) — through which they complete tiered tasks on a live platform. Their contributions are tracked via Git from the first interaction, evaluated partially by AI agents, and scored on demonstrated capability rather than claimed credentials. The programme is designed and deployed; empirical results are forthcoming and will be reported separately.

We argue that this approach is designed not merely to improve screening efficiency but to transform the epistemological basis of evaluation. The API-first model turns the candidate away from the wall of shadows and toward the fire: what you can do, demonstrated in a real system, under real constraints, producing real artefacts. The candidate's capability is no longer described. It is enacted.

The shift from credential-based to contribution-based evaluation aligns with Schmidt and Hunter's (1998) meta-analytic finding that work sample tests achieve the highest predictive validity (r = .54) among all selection methods, substantially outperforming unstructured interviews (r = .38) and years of education (r = .10). The API-first model operationalises this finding: every screening interaction is, in effect, a work sample.

The design implications extend beyond hiring. Drawing on Cohen and Levinthal's (1990) foundational concept of absorptive capacity, we hypothesise that the platform itself becomes an epistemic beneficiary of the screening process. Every contributor interaction — even from candidates who do not complete the programme — should generate knowledge that the platform absorbs, processes, and retains. Screening, in this model, is designed not as a cost centre but as a knowledge-production mechanism.

---

## 2. Platform Architecture: The Life Programmable Interface as Screening Mechanism

### 2.1 Design Principles

The screening system was built on a programmable interface that mediates all contributor interactions with the platform. The design adhered to three principles derived from the open-source software development tradition and the programmable web paradigm (Zittrain, 2008):

1. **Opacity of internals, transparency of interfaces.** Contributors interacted with the platform through its API without access to the underlying source code. This design constraint was intentional: it evaluated the candidate's ability to work with a system as an external contributor — the dominant mode of interaction in modern software ecosystems (Vasilescu et al., 2015).

2. **Artefact primacy.** Every interaction produced a traceable artefact: a pull request, a test result, a documentation contribution, a design asset. The artefact, not the candidate's self-report, was the unit of evaluation. This aligns with the portfolio-based assessment tradition in creative fields (Marlow et al., 2013) and extends it to technical and research contributions.

3. **Graduated disclosure.** The interface revealed platform complexity incrementally through tiered task levels, allowing candidates to self-select their depth of engagement. This mirrors the "onion model" of open-source community participation described by Crowston and Howison (2005).

### 2.2 Tiered Task Architecture

Tasks were organised into three levels of increasing complexity and autonomy:

**Level 1: Auto-Merged Contributions.** These tasks require candidates to interact with the API to produce a well-formed contribution — a documentation fix, a translation, a test case — that meets predefined validation criteria. Contributions passing automated checks are merged without human review. Level 1 tasks serve as a proof-of-life signal: the candidate can read documentation, authenticate with the API, and produce a conforming output. The cognitive demand is low; the compliance demand is precise.

To make this concrete, and to enable replication by other organisations, we specify the canonical Level 1 task in full. The candidate is required to: (1) fork the public repository; (2) call a single API endpoint (`/api/health`); and (3) submit a pull request documenting the response schema. Auto-merge criteria are: the PR passes CI, the response schema is correctly documented (matching the live endpoint's actual JSON structure), and the fork is from the correct upstream repository. This task can be completed in under thirty minutes by a candidate with basic Git literacy. It tests three things simultaneously: the ability to follow written instructions, familiarity with Git-based workflows, and the willingness to engage with a live system rather than submit a speculative application.

**Level 2: Scored Contributions.** These tasks require candidates to make design decisions, interpret ambiguous requirements, or extend existing functionality. Contributions are scored by a combination of automated metrics (test coverage, code style conformance, API response correctness) and AI-agent evaluation. Candidates receive structured feedback on their submissions.

**Level 3: Crown Jewel Challenges.** These tasks require candidates to demonstrate comprehension of the platform's architecture, propose novel integrations, or solve problems that demand synthesis across multiple API endpoints. Level 3 tasks are designed specifically to resist completion by generative AI tools alone, a design decision discussed in detail in Section 5.

### 2.3 Infrastructure

All contributions were tracked via Git, with each candidate's work visible on a public repository from their first interaction — leveraging the transparency and social accountability mechanisms that characterise collaborative development on platforms such as GitHub (Dabbish et al., 2012). An auto-generated leaderboard, hosted on a static site, provided real-time visibility into contribution volume and quality. AI agents handled task allocation, initial evaluation, and feedback generation, reducing the manual overhead of screening 114 candidates to near zero for Level 1 tasks and approximately two hours per week for Level 2-3 review.

---

## 3. The Effort Filter: Why 26-35% Conversion Is a Feature, Not a Bug

### 3.1 The Dropout Hypothesis

Of 114 applicants who entered the screening pipeline, we projected that 30 to 40 would complete Level 1 tasks — a conversion rate of 26-35%. This projection was based on documented attrition patterns in open-source onboarding (Steinmacher et al., 2015) and MOOC completion rates (Jordan, 2015), both of which show steep early dropout curves. We acknowledge these are analogical baselines from different contexts (asynchronous online learning, established open-source projects). Transfer rates to API-mediated screening in a startup context may differ significantly.

The critical insight is that this attrition is not a failure of the screening process. It *is* the screening process. The effort required to engage with a live API — reading documentation, configuring authentication, producing a conforming output — constitutes what we term an *effort filter*: a mechanism that selects for persistence, self-direction, and tolerance for ambiguity without explicitly testing for any of these traits.

### 3.2 Effort Filters vs. Credential Filters

Traditional screening uses credential filters: minimum GPA thresholds, degree requirements, institutional prestige signals. Credential filters are efficient proxies for ability, but they carry well-documented biases. They systematically disadvantage candidates from non-elite institutions (Rivera, 2012), underrepresent self-taught practitioners (Lakhani & Wolf, 2005), and privilege the ability to acquire credentials over the ability to produce results.

Effort filters operate on a fundamentally different mechanism. They do not ask "what credentials have you accumulated?" but rather "what are you willing and able to do right now?" The cost of passing an effort filter is denominated in time and cognitive engagement, not in tuition fees or institutional access. This makes effort filters more equitable in principle, though not immune to bias — candidates with fewer time resources (working students, caregivers, those in different time zones) may be disadvantaged, a limitation we address in Section 8.

### 3.3 Signal-to-Noise Improvement

The effort filter dramatically improves the signal-to-noise ratio of the candidate pool. The 65-74% who do not complete Level 1 tasks are not "screened out" by a human evaluator applying subjective criteria. They self-select out by declining to invest the effort required. The remaining 26-35% have already demonstrated baseline competence (they produced a working contribution) and baseline commitment (they persisted through the friction of real-system interaction).

This aligns with findings from open-source community research showing that the primary differentiator between one-time and sustained contributors is not skill but persistence through initial barriers (von Krogh et al., 2003). The effort filter operationalises this insight as a screening mechanism.

---

## 4. Multi-Track Contribution: Beyond Code-Only Programmes

### 4.1 The Monoculture Problem

Most technical contributor programmes — whether internships, Google Summer of Code, or corporate open-source onboarding — are structured around code contributions. This creates a monoculture that systematically excludes contributors whose strengths lie in research, design, quality assurance, documentation, community management, or domain expertise (Trinkenreich et al., 2020).

The monoculture problem is not merely one of diversity. It is an architectural failure. Modern platforms require contributions across multiple modalities: visual design, user research, scientific validation, data curation, accessibility testing, and three-dimensional asset creation. A screening process that evaluates only coding ability will populate the contributor pool with people who can write code, while the platform's most pressing needs may lie elsewhere.

### 4.2 Multi-Track Task Design

The screening programme offered tasks across five contribution tracks:

1. **Engineering.** API integration, test authoring, performance optimisation.
2. **Research.** Literature review, data analysis, methodology documentation.
3. **Design.** Interface prototyping, visual asset creation, user flow mapping.
4. **Quality Assurance.** Bug reproduction, test scenario design, accessibility audits.
5. **3D Visualisation.** Spatial asset creation, scene composition, rendering pipeline contribution.

Each track had its own Level 1-3 task progression, with track-specific evaluation criteria. A candidate could engage with multiple tracks, and cross-track contributions were explicitly encouraged. The leaderboard weighted contributions by complexity level, not by track, ensuring that a high-quality research contribution was valued equivalently to a high-quality code contribution.

### 4.3 Revealing Hidden Capability

Multi-track design is expected to reveal capabilities that a code-only programme would miss entirely. We anticipate that candidates who struggle with engineering tasks may produce exceptional design contributions, and that others with no prior open-source experience may contribute rigorous QA work that surfaces genuine platform bugs. The API-first approach makes these contributions legible to the same evaluation infrastructure — a pull request is a pull request regardless of whether it contains Python code or a Figma export.

This finding resonates with research on "legitimate peripheral participation" in communities of practice (Lave & Wenger, 1991). Contributors who enter through non-code tracks are not lesser participants; they are participants who enter through a different door into the same building.

---

## 5. The AI-Screens-AI Paradox: Crown Jewel Challenges for the Generative AI Era

### 5.1 The Paradox Stated

Generative AI tools — large language models, code completion systems, image generators — have fundamentally altered the economics of task completion. A candidate armed with a capable AI assistant can produce syntactically correct code, well-structured documentation, and plausible research summaries with minimal domain understanding (Chen et al., 2021). When AI agents evaluate submissions that were themselves produced with AI assistance, the screening process risks degenerating into an AI-evaluates-AI loop in which the candidate's actual capability is never measured.

This is the AI-screens-AI paradox: the same tools that make task completion easier also make task completion less informative as a signal of candidate ability.

### 5.2 The Completion-Comprehension Distinction

The paradox is resolved by distinguishing between *completion* and *comprehension*. Generative AI excels at completion: given a well-specified task with clear inputs and outputs, current models can produce a satisfactory result. Generative AI is substantially weaker at comprehension: understanding *why* a system is designed the way it is, anticipating second-order consequences of a change, and synthesising information across multiple system boundaries (Vaithilingam et al., 2022).

Level 3 "crown jewel" challenges were designed to test comprehension, not completion. Examples include:

- **Architectural rationale tasks.** Candidates were asked to propose an API extension and justify their design in terms of the platform's existing architecture. AI tools could generate a syntactically valid API extension, but justifying the design required understanding the system's constraints, trade-offs, and evolution — knowledge that was not available in the AI tool's training data because the platform was proprietary.

- **Failure mode analysis.** Candidates were given a scenario in which a specific API call produced unexpected results and asked to diagnose the cause. The diagnosis required understanding the interaction between multiple system components, not merely pattern-matching against known error types.

- **Integration synthesis.** Candidates were asked to combine data from multiple API endpoints to produce an insight that no single endpoint could provide. This required understanding what each endpoint represented and how they related — conceptual work that AI tools could assist with but not replace.

### 5.3 Designing for the AI-Augmented Candidate

The goal of crown jewel challenges is not to prohibit AI tool use. Prohibiting AI tools is neither enforceable nor desirable — the modern contributor will work with AI tools as a matter of course, and screening should evaluate the candidate's ability to use these tools effectively, not their ability to work without them (Prather et al., 2023).

The goal is to ensure that AI tool use amplifies the candidate's comprehension rather than substituting for it. A candidate who uses an AI tool to generate boilerplate code and then demonstrates genuine understanding of the system's architecture in their design justification is a strong candidate. A candidate who submits AI-generated output without evidence of comprehension is a weak candidate — and the crown jewel challenge makes this distinction visible.

---

## 6. Absorptive Capacity of the Platform: A Hypothesis for Knowledge Capture Through Screening

### 6.1 The Absorptive Capacity Framework

Cohen and Levinthal (1990) introduced the concept of absorptive capacity: the ability of an organisation to recognise the value of new, external information, assimilate it, and apply it to commercial ends. They argued that absorptive capacity is a function of the organisation's prior related knowledge — knowledge begets the ability to acquire more knowledge, creating a virtuous cycle.

We propose extending this framework to the platform level. In the API-first screening model, every contributor interaction should generate information that the platform can absorb: bug reports that reveal edge cases, documentation contributions that clarify ambiguities, design submissions that propose interface improvements, and failed attempts that illuminate where the API's developer experience breaks down. Whether this absorption occurs in practice is an empirical question that the forthcoming validation phase is designed to answer.

### 6.2 Artefactual Absorptive Capacity

We introduce the term *artefactual absorptive capacity* to describe the platform's hypothesised ability to absorb knowledge through the artefacts that contributors produce. Unlike traditional absorptive capacity, which operates through human cognition and organisational routines, artefactual absorptive capacity would operate through the platform's technical infrastructure: version control systems that preserve every contribution, CI/CD pipelines that validate artefacts against platform specifications, and AI agents that extract patterns from submission data.

We hypothesise that every Level 1 submission, even from a candidate who does not proceed further, tests the platform's documentation, API design, and onboarding flow. A cluster of failures at a specific API endpoint would be diagnostic information about that endpoint's usability. A pattern of misinterpretation in task descriptions would reveal ambiguity in the platform's communication. The screening process, viewed through this lens, should function as a massive, structured usability test conducted by 114 motivated participants (von Hippel & Katz, 2002).

To confirm this hypothesis, we propose three measurable indicators: (a) the number of Level 1 submissions that surface documentation gaps, measured by subsequent documentation commits traceable to candidate-reported confusion; (b) the number of QA-track findings that lead to confirmed bug fixes in the platform's issue tracker; and (c) the number of knowledge base articles generated from contributor questions, measured by articles whose provenance metadata links to screening-phase interactions. These metrics will be tracked during the empirical validation phase. To these process metrics we add an outcome metric: (d) reduction in Level 1 failure rate between the first and second cohort attributable to documentation improvements surfaced by screening — a direct measure of whether absorbed contributor knowledge improved the platform's onboarding effectiveness.

### 6.3 The Intern Work Disappears Problem

A persistent failure mode of traditional internship programmes is that intern work "disappears" — it exists in local environments, on personal branches, or in documents that are never integrated into the main codebase (Begel & Simon, 2008). The API-first model is designed to solve this problem architecturally. Because all contributions are submitted through the API and tracked via Git from the first interaction, every artefact is versioned, attributed, and retrievable. The platform's absorptive capacity should not be dependent on managerial diligence in archiving intern work. It is built into the contribution infrastructure.

This has a designed second-order benefit: contributors can demonstrate their work to future employers by pointing to a public contribution history. The screening process is thus intended to generate value for the candidate as well as for the platform — the portfolio-as-screening-artefact is simultaneously a portfolio-as-career-asset (Marlow et al., 2013).

---

## 7. AI Agent Orchestration in Evaluation

### 7.1 The Role of AI Agents

The screening system employed AI agents at three points in the evaluation pipeline:

1. **Task allocation.** Agents matched incoming candidates with appropriate tasks based on stated track preferences and observed behaviour during onboarding interactions.

2. **Automated evaluation.** Level 1 submissions were evaluated entirely by automated checks — test suites, linting rules, API conformance validators — with AI agents handling edge cases that fell outside predefined rules.

3. **Feedback generation.** For Level 2-3 submissions, AI agents generated structured feedback that highlighted strengths, identified areas for improvement, and suggested next steps. Human reviewers validated AI-generated feedback before delivery, but the AI draft reduced reviewer time by an estimated 70%.

### 7.2 Scaling Properties

The AI-agent-mediated evaluation model has favourable scaling properties. The marginal cost of evaluating an additional Level 1 candidate is approximately zero — the automated pipeline runs regardless of volume. Level 2-3 evaluation scales linearly with the number of advanced submissions, but because the effort filter reduces the pool by 65-74% before Level 2, the actual human review burden remains manageable.

This scaling property is critical for programmes that aim to be inclusive rather than exclusive. A traditional screening process that requires a human reviewer to read every CV imposes a hard ceiling on applicant volume: beyond a certain point, review quality degrades or review becomes prohibitively expensive (Kuncel et al., 2013). The API-first model removes this ceiling for initial screening, enabling programmes to accept large applicant pools without compromising evaluation quality.

### 7.3 Bias Considerations

AI agents introduce their own bias risks. Language models may evaluate contributions differently based on writing style, which correlates with native language and cultural background (Raghavan et al., 2020). Automated code quality checks may penalise unconventional but valid approaches. To mitigate these risks, the system employed multiple evaluation signals (automated tests, AI-agent assessment, human review) and tracked evaluation outcomes across demographic dimensions to detect systematic disparities.

Transparency was a core design principle: candidates could see their scores, the rubric used to generate them, and the specific feedback on their submissions. This aligns with emerging frameworks for responsible AI in hiring that emphasise explainability and contestability (Shneiderman, 2020).

---

## 8. Limitations

### 8.1 Pre-Empirical Design

This paper presents a methodology design based on a single cohort of 114 candidates, with empirical validation pending. The design targets and expected outcomes may not generalise to different candidate populations, programme structures, or platform domains. Replication across multiple cohorts and contexts will be necessary before the approach can be recommended as a general screening methodology.

### 8.2 Selection Bias

The candidate pool was drawn primarily from B.Tech and M.Tech students in a specific geographic and institutional context. Candidates self-selected into the programme, introducing self-selection bias that may inflate observed completion rates (those who applied may have been more motivated than the general student population). The effort filter may also introduce survivorship bias: the characteristics of completers reflect those who can invest the required time, which correlates with socioeconomic privilege.

### 8.3 Cultural Context

The API-first screening model assumes that candidates are comfortable with self-directed, asynchronous, documentation-driven work. This assumption may not hold across all cultural contexts. Research on cross-cultural differences in learning styles (Hofstede, 2011) suggests that candidates from cultures emphasising structured instruction and teacher-led learning may be disadvantaged by an approach that requires high levels of autonomy and ambiguity tolerance.

### 8.4 Construct Validity

We claim that API-first screening measures "capability" more directly than CV-based screening. This claim requires more rigorous validation. Does performance on tiered API tasks predict performance in the full contributor programme? Does the effort filter select for qualities that matter for sustained contribution? Longitudinal data from multiple cohorts is needed to establish construct validity.

### 8.5 Researcher-as-Instrument Bias

The author designed the screening system, operates the platform, and evaluates the methodology. This researcher-as-instrument configuration introduces potential confirmation bias that independent evaluation would mitigate. We recommend replication by an organisation with no authorial connection to the platform.

### 8.6 AI Evaluation Reliability

The reliability of AI-agent evaluation has not been formally assessed in this pilot. Inter-rater reliability between AI agents and human reviewers, as well as AI-agent consistency across time and candidate demographics, should be measured in future iterations. The field of AI-assisted assessment is evolving rapidly (Yan et al., 2024), and best practices established today may be superseded.

---

## 9. Future Research and Conclusion

### 9.1 Directions for Future Research

Several research directions emerge from this pilot:

**Longitudinal validation.** Tracking the relationship between screening-stage performance and sustained contribution quality over subsequent cohorts would establish the predictive validity of API-first screening.

**Cross-cultural replication.** Deploying the screening model with candidate pools from diverse geographic, institutional, and cultural backgrounds would test the generalisability of the effort filter and crown jewel challenge design.

**Comparative studies.** A controlled comparison between API-first screening and traditional CV-based screening, measuring both screening accuracy and downstream contributor performance, would provide direct evidence of the relative merits of each approach.

**AI agent optimisation.** Systematic study of AI agent evaluation accuracy, bias profiles, and feedback quality would inform the design of more reliable automated evaluation systems. The interaction between AI-generated tasks, AI-augmented candidate work, and AI-mediated evaluation constitutes a novel sociotechnical system that warrants study in its own right.

**Absorptive capacity quantification.** Developing metrics for artefactual absorptive capacity — the rate at which a platform converts contributor artefacts into platform improvements — would enable comparison across programmes and platforms.

**Effort filter calibration.** Investigating the optimal difficulty of Level 1 tasks to maximise signal-to-noise ratio while minimising bias against time-constrained candidates would improve the equity properties of the effort filter.

### 9.2 Toward a Reality Construct for Screening

The API-first screening model instantiates a broader principle: that evaluation should be grounded in demonstrated reality rather than representational proxies. This principle, which we have termed the *reality construct* (Waern, 2025), holds that the most reliable basis for any assessment — of a person, a system, or a process — is direct observation of the thing itself, not observation of documents, narratives, or scores that claim to represent it.

The CV is a narrative about capability. The API contribution is capability itself. The screening process we have described does not eliminate judgement — Level 2-3 evaluation still requires qualitative assessment of design decisions and architectural reasoning. But it grounds that judgement in artefacts rather than claims, shifting the epistemological foundation of evaluation from representation to enactment.

### 9.3 The Platform as Epistemological Infrastructure

Raymond (1999) famously observed that "given enough eyeballs, all bugs are shallow." The API-first screening model extends this principle: given enough contributors, all platform weaknesses become visible. The screening process is simultaneously an evaluation mechanism, a usability test, a knowledge-production system, and a contributor onboarding pipeline. The platform does not merely screen contributors; it learns from them, absorbing their artefacts into its own knowledge base and improving itself through the very process of evaluating others.

This convergence — screening as learning, evaluation as improvement, selection as knowledge production — represents, we argue, a meaningful advance over the shadow-watching of traditional hiring. The cave remains. The shadows persist. But the API-first model offers a method for turning, however partially, toward the fire.

### 9.4 Conclusion

We have presented the design of a screening methodology in which 114 applicants for a contributor programme are to be evaluated entirely through their interactions with a programmable interface, with no CVs read at any stage. The methodology uses tiered tasks, AI-agent evaluation, multi-track contribution paths, and Git-tracked artefacts to assess demonstrated capability rather than claimed credentials. We framed the approach through Plato's cave allegory and Cohen and Levinthal's absorptive capacity framework, hypothesised that the platform should benefit epistemically from the screening process itself, and addressed the AI-screens-AI paradox through crown jewel challenges that test comprehension rather than completion.

The approach has limitations — it is a pre-empirical design with potential selection and cultural biases yet to be measured — but the methodology is deployed, the candidate pool is engaged, and empirical validation is underway. The design targets are clear: a 26-35% Level 1 conversion rate, measurable platform knowledge absorption, and screening fidelity that exceeds CV-based alternatives. Whether these targets are met will be reported in a follow-up empirical study. The core proposition, however, stands on design merit: in a world where generative AI makes document production trivially easy, the ability to *do* — demonstrated through a programmable interface, tracked from the first interaction, and evaluated against the reality of a live system — should be the most trustworthy signal of all.

---

## References

Begel, A., & Simon, B. (2008). Struggles of new college graduates in their first software development job. *Proceedings of the 39th SIGCSE Technical Symposium on Computer Science Education*, 226-230. https://doi.org/10.1145/1352135.1352218

Chen, M., Tworek, J., Jun, H., Yuan, Q., Pinto, H. P., Kaplan, J., Edwards, H., Burda, Y., Joseph, N., Brockman, G., Ray, A., Puri, R., Krueger, G., Petrov, M., Khlaaf, H., Sastry, G., Mishkin, P., Chan, B., Gray, S., ... Zaremba, W. (2021). Evaluating large language models trained on code. *arXiv preprint arXiv:2107.03374*. https://doi.org/10.48550/arXiv.2107.03374

Cohen, W. M., & Levinthal, D. A. (1990). Absorptive capacity: A new perspective on learning and innovation. *Administrative Science Quarterly*, *35*(1), 128-152. https://doi.org/10.2307/2393553

Crowston, K., & Howison, J. (2005). The social structure of free and open source software development. *First Monday*, *10*(2). https://doi.org/10.5210/fm.v10i2.1207

Dabbish, L., Stuart, C., Tsay, J., & Herbsleb, J. (2012). Social coding in GitHub: Transparency and collaboration in an open software repository. *Proceedings of the ACM 2012 Conference on Computer Supported Cooperative Work*, 1277-1286. https://doi.org/10.1145/2145204.2145396

Highhouse, S. (2008). Stubborn reliance on intuition and subjectivity in employee selection. *Industrial and Organizational Psychology*, *1*(3), 333-342. https://doi.org/10.1111/j.1754-9434.2008.00058.x

Hippel, E. von, & Katz, R. (2002). Shifting innovation to users via toolkits. *Management Science*, *48*(7), 821-833. https://doi.org/10.1287/mnsc.48.7.821.2817

Hofstede, G. (2011). Dimensionalizing cultures: The Hofstede model in context. *Online Readings in Psychology and Culture*, *2*(1). https://doi.org/10.9707/2307-0919.1014

Jordan, K. (2015). Massive open online course completion rates revisited: Assessment, length and attrition. *International Review of Research in Open and Distributed Learning*, *16*(3), 341-358. https://doi.org/10.19173/irrodl.v16i3.2112

Kuncel, N. R., Klieger, D. M., Connelly, B. S., & Ones, D. S. (2013). Mechanical versus clinical data combination in selection and admissions decisions: A meta-analysis. *Journal of Applied Psychology*, *98*(6), 1060-1072. https://doi.org/10.1037/a0034156

Lakhani, K. R., & Wolf, R. G. (2005). Why hackers do what they do: Understanding motivation and effort in free/open source software projects. In J. Feller, B. Fitzgerald, S. Hissam, & K. R. Lakhani (Eds.), *Perspectives on free and open source software* (pp. 3-22). MIT Press.

Lave, J., & Wenger, E. (1991). *Situated learning: Legitimate peripheral participation*. Cambridge University Press. https://doi.org/10.1017/CBO9780511815355

Marlow, J., Dabbish, L., & Herbsleb, J. (2013). Impression formation in online peer production: Activity traces and personal profiles in GitHub. *Proceedings of the 2013 Conference on Computer Supported Cooperative Work*, 117-128. https://doi.org/10.1145/2441776.2441792

Plato. (1992). *Republic* (G. M. A. Grube, Trans., rev. C. D. C. Reeve). Hackett Publishing. (Original work published ca. 375 BCE)

Prather, J., Denny, P., Leinonen, J., Becker, B. A., Albluwi, I., Craig, M., Keuning, H., Kiesler, N., Kohn, T., & Luxton-Reilly, A. (2023). The robots are here: Navigating the generative AI revolution in computing education. *Proceedings of the 2023 Working Group Reports on Innovation and Technology in Computer Science Education*, 108-159. https://doi.org/10.1145/3623762.3633499

Raghavan, M., Barocas, S., Kleinberg, J., & Levy, K. (2020). Mitigating bias in algorithmic hiring: Evaluating claims and practices. *Proceedings of the 2020 Conference on Fairness, Accountability, and Transparency*, 469-481. https://doi.org/10.1145/3351095.3372828

Raymond, E. S. (1999). *The cathedral and the bazaar: Musings on Linux and open source by an accidental revolutionary*. O'Reilly Media.

Rivera, L. A. (2012). Hiring as cultural matching: The case of elite professional service firms. *American Sociological Review*, *77*(6), 999-1022. https://doi.org/10.1177/0003122412463213

Schmidt, F. L., & Hunter, J. E. (1998). The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. *Psychological Bulletin*, *124*(2), 262-274. https://doi.org/10.1037/0033-2909.124.2.262

Shneiderman, B. (2020). Bridging the gap between ethics and practice: Guidelines for reliable, safe, and trustworthy human-centered AI systems. *ACM Transactions on Interactive Intelligent Systems*, *10*(4), 1-31. https://doi.org/10.1145/3419764

Steinmacher, I., Conte, T., Gerosa, M. A., & Redmiles, D. (2015). Social barriers faced by newcomers placing their first contribution in open source software projects. *Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing*, 1379-1392. https://doi.org/10.1145/2675133.2675215

Trinkenreich, B., Guizani, M., Wiese, I., Sarma, A., & Steinmacher, I. (2020). Hidden figures: Roles and pathways of successful OSS contributors. *Proceedings of the ACM on Human-Computer Interaction*, *4*(CSCW2), 1-22. https://doi.org/10.1145/3415251

Vaithilingam, P., Zhang, T., & Glassman, E. L. (2022). Expectation vs. experience: Evaluating the usability of code generation tools powered by large language models. *CHI Conference on Human Factors in Computing Systems Extended Abstracts*, 1-7. https://doi.org/10.1145/3491101.3519665

Vasilescu, B., Yu, Y., Wang, H., Devanbu, P., & Filkov, V. (2015). Quality and productivity outcomes relating to continuous integration in GitHub. *Proceedings of the 2015 10th Joint Meeting on Foundations of Software Engineering*, 805-816. https://doi.org/10.1145/2786805.2786850

von Krogh, G., Spaeth, S., & Lakhani, K. R. (2003). Community, joining, and specialization in open source software innovation: A case study. *Research Policy*, *32*(7), 1217-1241. https://doi.org/10.1016/S0048-7333(03)00050-7

Waern, N. (2025). The reality construct: Grounding digital twin assessment in observable phenomena (Version 2). *Zenodo*. https://doi.org/10.5281/zenodo.19587944

Yan, L., Sha, L., Zhao, L., Li, Y., Martinez-Maldonado, R., Chen, G., Li, X., Jin, Y., & Gasevic, D. (2024). Practical and ethical challenges of large language models in education: A systematic scoping review. *British Journal of Educational Technology*, *55*(1), 90-112. https://doi.org/10.1111/bjet.13370

Zittrain, J. L. (2008). *The future of the Internet — and how to stop it*. Yale University Press.

---

**Ethics Statement:** This paper reports on the design of a contributor screening methodology, not on human subjects research. The programme constitutes standard organisational assessment. Formal ethical review was not sought for the design phase; empirical validation of outcomes in future work will be submitted for institutional ethical review.

**Data Availability Statement:** No individual-level candidate data are reported in this paper. Aggregate statistics (applicant count, projected completion rates) are provided. The programmable interface and task specifications will be made available upon programme completion.

**Conflicts of Interest:** The author is the founder of the organisation that operated the screening programme described in this paper.

**Acknowledgements:** The screening methodology was developed in collaboration with AI agents operating within the organisation's programmable interface. The author acknowledges the 114 candidates whose participation made this study possible.
