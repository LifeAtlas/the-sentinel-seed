# Can Digital Twins Form Their Own Teams? Part I: The Setup

**Series: Digital Twin Social Simulation (I/VI)**

*Nicolas Waern, WINNIIO AB*

---

## Abstract

This is Part I of a six-part series documenting a live experiment: can AI-powered digital twins of real people autonomously form effective teams? We describe the initial architecture, data collection, and methodology for a social simulation involving 44 intern contributors, each represented by a structured "soul file" — a living digital profile encoding skills, interests, personality traits, goals, and identity statements. Using sentence-transformer embeddings, pairwise compatibility scoring, and Louvain community detection, we generate initial team hypotheses before any human interaction occurs. This first installment establishes the experimental design and baseline assumptions. Whether the approach works will be evaluated over the next two months as real collaboration data emerges. No claims of efficacy are made at this stage — this is a transparent account of setting up the experiment, not reporting its results.

**Keywords:** digital twin, social simulation, team formation, organizational network analysis, multi-agent systems, SMILE methodology, soul file, community detection

---

## I. Introduction

Team formation in organizations is typically driven by manager intuition, availability, or arbitrary assignment. The question we ask is simple: what if digital representations of people could interact first, and the teams that emerge from those interactions were better than what humans would assign?

This is not a new question. Park et al. (2023) demonstrated that generative agents with memory, reflection, and planning capabilities produce emergent social behaviors in simulated environments. Moltbook (Schlicht, 2026; analyzed in Kim et al., 2026), a social network exclusively for AI agents built on the OpenClaw framework, scaled to over one million autonomous agents shortly after launch, producing emergent governance structures, economic systems, and cultural artifacts. OASIS (Yang et al., 2024) modeled one million agents with personality-driven behaviors on Reddit-like platforms.

We take a narrower, more grounded approach: 44 real people, each with verified skills data, self-reported personality metrics, and free-text identity statements. No synthetic personas. No hypothetical interactions. Real contributors, real data, real consequences — these teams will actually work together for two months.

## II. The Soul File Architecture

Each contributor is represented by a structured digital profile we call a "soul file." The term is deliberately chosen: it captures the aspiration that this profile should reflect something essential about the person, not just their resume.

### Data Sources

Five independent data sources are merged per contributor:

1. **Contributor JSON** — GitHub username, self-declared skills and interests, track preference, educational program, campus, and a free-text "my_twin" identity statement answering: *"If you had a digital twin, what would it do for you?"*

2. **Scoring data** — Automated evaluation of technical submissions across three levels of increasing complexity (sandbox setup, local LLM interaction, agent implementation), producing a score out of 13 possible points.

3. **Questionnaire responses** — 29 questions including technology proficiency ratings (Python, JavaScript, React, Docker, AI/ML, Git, Security on a 1-5 scale), self-assessed proactivity (1-10), team orientation (1-10), purpose-drivenness (1-10), three-year career goal, most meaningful technical project, and a philosophical question: *"What does a life operating system mean to you?"*

4. **CV references** — Links to uploaded resumes providing educational and professional background.

5. **Submission artifacts** — The actual code, documentation, and reflective writing produced during the screening process, including "HOW_I_DID_IT" narratives describing problem-solving approaches.

### Schema

```
SoulFile:
  identity:     free-text twin statement
  skills:       [7-dimensional vector, 1-5 scale]
  personality:  [3-dimensional vector: proactive, team, purpose — all 1-10, min-max normalized to 0-1]
  interests:    [tagged list]
  goals:        free-text 3-year vision
  best_project: free-text project narrative
  platform_meaning: free-text philosophical response
  score:        numeric screening result
  tier:         categorical placement (Tier 1/2/3/Waitlist)
```

The richness of this schema is deliberate. Single-dimension matching (skills only, or interests only) produces shallow pairings. The hypothesis is that multi-dimensional compatibility — especially the combination of *complementary* skills with *aligned* values — predicts effective collaboration better than any single factor.

## III. Compatibility Scoring

We compute a 44×44 pairwise compatibility matrix using three weighted dimensions:

### Skill Complementarity (40% weight)

We use cosine *distance* (not similarity) between 7-dimensional skill vectors. The reasoning: teams benefit from diverse skills, not identical ones. A pair where one excels at Python/AI-ML and the other at React/Security covers more ground than two identical profiles.

**Limitation:** Cosine distance conflates "different" with "complementary." Two contributors who both score 1/5 across all skills are maximally similar but not useful — yet two contributors with inverted profiles (one all 5s, one all 1s) score as maximally complementary despite one contributing little. As a partial mitigation, we normalize skill vectors and add epsilon (1e-8) to prevent zero-magnitude vectors from producing undefined distances. A more robust approach — weighting complementarity by the sum of both vectors' magnitudes — is planned for Part III. We will validate the current metric against actual collaboration outcomes in Part V.

### Interest Alignment (35% weight)

A composite of Jaccard similarity on tagged interests (40%) and cosine similarity on sentence-transformer embeddings of concatenated free-text fields — my_twin, three_year_goal, best_project, and platform_meaning (60%). The 40/60 sub-weighting favors semantic embeddings over exact tag matching because contributors use inconsistent vocabulary for the same concepts (e.g., "AI agents" vs "autonomous systems"). Both sub-weights are subject to the same sensitivity analysis described below.

### Values Resonance (25% weight)

Inverse Euclidean distance between 3-dimensional personality vectors (proactivity, team orientation, purpose). Close values suggest compatible working styles. We weight this lowest because personality self-reports are noisy, but include it because work-style friction is the most common reason teams fail.

**On self-report validity:** Self-assessed technical proficiency is known to be unreliable — Dunning-Kruger effects, social desirability bias, and ceiling effects on 1-5 scales all introduce noise. We use self-reports as initial signals, not ground truth. Part III will compare self-reported skill levels against observable proxies (PR complexity, code review quality, tool usage patterns) to measure calibration accuracy.

### Weight Justification

The 40/35/25 split is an initial hypothesis, not an empirically derived optimum. We weight skill complementarity highest because the primary goal is functional team coverage. Interest alignment is second because shared motivation predicts sustained collaboration. Values resonance is lowest because self-reported personality is the noisiest signal. These weights are explicitly arbitrary at this stage — Part V will include a sensitivity analysis testing alternative weight configurations (equal-weight, skill-dominant, values-dominant) against actual team performance data. We will also test whether the optimal weights differ by team size or task type.

### Community Detection

We threshold the compatibility matrix at the 60th percentile, construct a weighted graph, and apply Louvain community detection (Blondel et al., 2008) to identify natural clusters. The threshold was chosen to produce a connected but not trivially dense graph; Part II will report results at 50th and 70th percentiles for comparison.

**Statistical caveat:** With N=44, Louvain detection will find clusters even in random data. To establish that the observed community structure is meaningful, Part II will include a null-model comparison: we will generate 1,000 randomized compatibility matrices (preserving marginal distributions) and compare the modularity score of our observed graph against the null distribution. If our modularity does not significantly exceed the random baseline, the cluster assignments should be treated as suggestive rather than definitive.

## IV. Twin Conversations

Beyond static compatibility, we test dynamic interaction. The top 15 most compatible pairs engage in structured 3-round conversations powered by a local language model (zero external cost):

- **Round 1 (Icebreaker):** Each twin introduces itself, referencing its actual skills, interests, and goals.
- **Round 2 (Collaboration):** Twins propose and negotiate a joint project, splitting work based on complementary strengths.
- **Round 3 (Reflection):** Each twin rates the partnership 1-5 and explains potential strengths and friction points.

Each twin's system prompt is constructed entirely from its soul file data. The model has no information beyond what the contributor themselves provided. This is not a test of the language model's creativity — it is a test of whether the *data* in the soul file is rich enough to produce meaningful interaction when animated.

## V. Initial Results (Descriptive Only)

From the compatibility matrix and community detection:

- **44 contributors** analyzed (40 accepted, 4 waitlist)
- **378 edges** in the compatibility graph (60th percentile threshold)
- **3 natural clusters** emerged: sizes 19, 16, and 9
- **Zero isolated nodes** — every contributor connects to the graph
- **Hub nodes** identified: contributors with highest degree centrality (most connections)
- **Bridge nodes** identified: contributors with highest betweenness centrality (connecting otherwise separate clusters)
- **Mentorship pairs** surfaced: high-skill contributors matched with lower-skill contributors sharing specific interests
- **Observed modularity** Q = 0.137 (significance pending null-model comparison in Part II)

These are descriptive statistics, not efficacy claims. The question — do these algorithmically-formed teams outperform alternatives? — cannot be answered until the teams actually work together.

## VI. What Comes Next

Over six installments, we will document:

- **Part II:** Baseline measurement — what metrics define "team effectiveness" in this context
- **Part III:** Real collaboration data — PRs, code reviews, pair sessions, knowledge sharing
- **Part IV:** Graph evolution — how the social network changes as real interactions accumulate
- **Part V:** Twin accuracy — do the digital twin conversations predict actual collaboration quality
- **Part VI:** Retrospective — what worked, what failed, and what we would change

### Consent and Ethics

All soul file data is collected with explicit consent. Contributors opt in to both the soul file creation and the social graph inclusion. At program end, each contributor receives their complete soul file as a personal asset. No data is shared externally without permission. The soul files are stored outside the public repository.

This study is conducted within WINNIIO AB's internal contributor program and does not fall under formal IRB jurisdiction. However, we follow equivalent ethical safeguards: informed consent for data collection, right to withdraw at any time, data minimization (only program-relevant data is collected), and data portability (contributors own their soul files). No personally identifiable information appears in this publication — all results are reported in aggregate or with pseudonymized identifiers. The compatibility matrix and conversation transcripts are derived from self-reported data that contributors voluntarily provided as part of their application.

### Reproducibility

The compatibility engine uses only open-source components: sentence-transformers (all-MiniLM-L6-v2), scikit-learn 1.8, NetworkX 3.6, and Ollama for local inference. Total computational cost: $0 (all inference runs locally). The complete scoring pipeline is available as open-source Python at https://github.com/Life-Atlas/lpi-developer-kit (MIT license). The algorithm in pseudocode:

```
for each pair (i, j):
  skill_comp   = cosine_distance(normalize(skill_vec[i]), normalize(skill_vec[j]))
  interest_sim = 0.4 * jaccard(tags[i], tags[j]) + 0.6 * cosine_sim(embed[i], embed[j])
  values_res   = 1 / (1 + euclidean(personality[i], personality[j]))
  compat[i][j] = 0.40 * skill_comp + 0.35 * interest_sim + 0.25 * values_res

threshold = percentile(compat, 60)
G = graph where edge(i,j) exists if compat[i][j] > threshold
squads = louvain_communities(G, weight='weight', resolution=1.0)
```

The resulting graph has density 0.40 (378 edges out of 946 possible), mean degree 17.2, and observed modularity Q = 0.137. Whether this modularity is significant will be tested against a null distribution in Part II.

---

## References

Blondel, V. D., Guillaume, J. L., Lambiotte, R., & Lefebvre, E. (2008). Fast unfolding of communities in large networks. *Journal of Statistical Mechanics: Theory and Experiment*, 2008(10), P10008.

Park, J. S., O'Brien, J. C., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (UIST '23)*.

Schlicht, M. (2026). Moltbook: A social network for AI agents. OpenClaw framework (MIT license). Launched January 2026.

Yang, Z., et al. (2024). OASIS: Open agent social interaction simulations with one million agents. *arXiv preprint arXiv:2411.11581*.

Kim, Y., et al. (2026). How to model AI agents as personas? Applying the persona ecosystem playground to Moltbook. *arXiv preprint arXiv:2603.03140*.

---

*This article is Part I of a six-part series documenting a live experiment in digital twin social simulation. The experiment runs April–June 2026 with 44 contributors at WINNIIO/LifeAtlas. Follow the series for results as they emerge.*

*Published under Creative Commons Attribution 4.0 International (CC BY 4.0).*

*ORCID: 0009-0001-4011-8201*
