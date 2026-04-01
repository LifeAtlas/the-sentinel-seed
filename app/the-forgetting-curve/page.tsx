"use client";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: string;
  keyLine?: boolean;
  delay?: number;
}

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
}

/* ═══════════════════════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════════════════════ */

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/* ═══════════════════════════════════════════════════════════════
   ProgressBar
   ═══════════════════════════════════════════════════════════════ */

function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-px"
      style={{ background: "var(--color-border)" }}
    >
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Paragraph
   ═══════════════════════════════════════════════════════════════ */

function Paragraph({ children, keyLine = false, delay = 0 }: ParagraphProps) {
  const { ref, visible } = useFadeIn();

  if (keyLine) {
    return (
      <div
        ref={ref}
        className="my-14 md:my-20 text-center px-4 transition-all duration-[1800ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(18px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <div
          className="inline-block w-8 h-px mb-8"
          style={{ background: "var(--color-gold-dim)" }}
        />
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-[1.5] max-w-2xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          &ldquo;{children}&rdquo;
        </p>
        <div
          className="inline-block w-8 h-px mt-8"
          style={{ background: "var(--color-gold-dim)" }}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p
        className="text-base md:text-[1.05rem] leading-[1.95] mb-7"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {children}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ChapterDivider
   ═══════════════════════════════════════════════════════════════ */

function ChapterDivider({ year, chapter, title }: ChapterDividerProps) {
  const { ref, visible } = useFadeIn(0.08);

  return (
    <div
      ref={ref}
      className="my-24 md:my-32 text-center transition-all duration-[2000ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
      }}
    >
      {/* Gold lines — top */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div
          className="h-px flex-1 max-w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-gold-dim)" }}
        />
        <div
          className="h-px flex-1 max-w-[120px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      {/* Year */}
      <p
        className="text-xs tracking-[0.6em] uppercase mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {year}
      </p>

      {/* Chapter label */}
      <p
        className="text-xs tracking-[0.4em] uppercase mb-5"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.6,
        }}
      >
        {chapter}
      </p>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-light tracking-wide"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {/* Gold lines — bottom */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-border))",
          }}
        />
        <div
          className="w-px h-4"
          style={{ background: "var(--color-gold-dim)", opacity: 0.4 }}
        />
        <div
          className="h-px flex-1 max-w-[80px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-border), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DedicationBlock
   ═══════════════════════════════════════════════════════════════ */

function DedicationBlock() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-28 mb-10 text-center transition-all duration-[1800ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <div className="flex items-center justify-center gap-6 mb-10">
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: "var(--color-gold-dim)", opacity: 0.6 }}
        />
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      <p
        className="text-sm mb-1"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.4,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Dedicated
      </p>
      <p
        className="text-xl md:text-2xl italic font-light mt-3 max-w-md mx-auto leading-[1.7]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        For Alma and Karin. For every slope that was caught in time.
        And for every one that wasn&apos;t.
      </p>

      <div className="mt-10 flex justify-center">
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-gold-dim), transparent)",
          }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BackLink
   ═══════════════════════════════════════════════════════════════ */

function BackLink() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-16 mb-8 text-center transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <Link
        href="/"
        className="inline-block text-xs tracking-[0.4em] uppercase transition-colors duration-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-gold-dim)";
        }}
      >
        &larr;&nbsp;&nbsp;The Sentinel Stories
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheForgettingCurve() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />

      {/* ════════════════════════════════════════════════
          Title Screen
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
        />

        {/* Floating golden motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? "2px" : "1px",
                height: i % 3 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.07 + (i % 6) * 0.025,
                left: `${4 + i * 6}%`,
                top: `${8 + (i % 7) * 12}%`,
                animation: `mote ${9 + i * 1.3}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={titleRef}
          className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "none" : "translateY(28px)",
          }}
        >
          {/* Vertical gold line */}
          <div className="mb-10 flex justify-center">
            <div
              className="w-px h-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--color-gold-dim))",
              }}
            />
          </div>

          {/* Collection label */}
          <p
            className="text-xs tracking-[0.6em] uppercase mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-gold-dim)",
            }}
          >
            Life Atlas &mdash; The Sentinel Stories
          </p>

          {/* Arc label */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            Sentinel New Dawn
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Forgetting Curve
          </h1>

          {/* Byline */}
          <p
            className="text-lg md:text-xl font-light italic mb-16 max-w-lg mx-auto leading-[1.6]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A story about the disease that forgot to win
          </p>

          {/* Scroll indicator */}
          <div
            className="flex flex-col items-center gap-3"
            style={{ color: "var(--color-gold-dim)" }}
          >
            <span
              className="text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Scroll
            </span>
            <div
              className="w-px h-10 animate-pulse"
              style={{ background: "var(--color-gold-dim)" }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          Story Body
          ════════════════════════════════════════════════ */}
      <article className="max-w-[680px] mx-auto px-6 pb-32">

        {/* ── Chapter I ── */}
        <ChapterDivider
          year="2028"
          chapter="Chapter I"
          title="The Blood That Knew"
        />

        <Paragraph>
          Alma Lindqvist was 52 years old, a schoolteacher in Uppsala. She went for a routine
          blood test &mdash; not because she felt sick, but because her Life Atlas companion had
          flagged a trajectory. Not a symptom. A slope.
        </Paragraph>

        <Paragraph>
          Her p-tau217 level &mdash; phosphorylated tau at threonine 217, a protein fragment shed
          when tau tangles begin forming in the brain &mdash; had been rising for eighteen months.
          Not dramatically. Not alarmingly. The way a river rises before anyone notices the banks
          are closer.
        </Paragraph>

        <Paragraph>
          Her doctor wouldn&apos;t have caught it. Doctors don&apos;t test p-tau217 routinely.
          They test cholesterol. They test blood sugar. They don&apos;t test for a disease that
          won&apos;t show symptoms for fifteen years.
        </Paragraph>

        <Paragraph>But her twin did.</Paragraph>

        <Paragraph>
          The twin had been tracking seven streams: her blood biomarkers quarterly &mdash; p-tau217,
          GFAP (a marker of brain inflammation), NfL (a marker of neuronal damage) &mdash; her sleep
          architecture nightly (slow-wave sleep percentage declining 0.3% per month for six months),
          her gait metrics passively (her phone had detected a 4.6x acceleration in annual gait speed
          decline, a pattern that in a 2024 study preceded clinical diagnosis by 12.1 years), her
          typing patterns (inter-key intervals widening by 11ms over three months), and her voice
          (subtle acoustic shifts in prosody that matched patterns from 21 machine learning models
          with an average accuracy of 88.7%).
        </Paragraph>

        <Paragraph>None of these alone meant anything. Together, they drew a line.</Paragraph>

        <Paragraph>
          &ldquo;You&apos;re not sick,&rdquo; her twin said. &ldquo;But your brain is starting to
          forget how to clean itself.&rdquo;
        </Paragraph>

        <Paragraph keyLine>
          The disease that would have erased her began as a slope only her twin could see.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="2029"
          chapter="Chapter II"
          title="The Glymphatic Hour"
        />

        <Paragraph>The first intervention wasn&apos;t a drug. It was sleep.</Paragraph>

        <Paragraph>
          Alma learned something that would have changed medicine a generation earlier if anyone had
          been listening: during deep slow-wave sleep, her brain&apos;s extracellular space expanded
          by roughly 60%, allowing cerebrospinal fluid to flush through channels surrounding her blood
          vessels &mdash; the glymphatic system, discovered by Maiken Nedergaard in 2013. This fluid
          carried away the day&apos;s metabolic waste: amyloid-beta fragments, hyperphosphorylated
          tau, cellular debris. Every night, her brain ran its own dialysis.
        </Paragraph>

        <Paragraph>
          But Alma&apos;s slow-wave sleep had been deteriorating. Not insomnia &mdash; she slept seven
          hours. But the architecture was wrong. Stage 3 was shrinking. Her brain wasn&apos;t getting
          the deep cleaning cycles it needed.
        </Paragraph>

        <Paragraph>
          The trap was bidirectional: Alzheimer&apos;s pathology disrupts sleep, and disrupted sleep
          accelerates Alzheimer&apos;s pathology. A vicious loop that, left unchecked, tightens until
          the damage becomes irreversible.
        </Paragraph>

        <Paragraph>
          Her twin prescribed a sleep protocol &mdash; not pills, but environmental: room temperature
          lowered to 18.5&deg;C, blue light eliminated after 7&nbsp;PM, a specific 40&nbsp;Hz auditory
          stimulation played during the first sleep cycle (gamma entrainment, shown to enhance
          microglial clearance activity), and a restructured evening routine that prioritised the two
          hours before sleep as sacred.
        </Paragraph>

        <Paragraph>
          Within four months, her slow-wave sleep percentage recovered from 12% to 19%. Her next
          p-tau217 reading showed the slope had flattened.
        </Paragraph>

        <Paragraph>
          She hadn&apos;t taken a single drug. Her environment had changed. Because her environment
          knew what she needed.
        </Paragraph>

        <Paragraph keyLine>
          Every night, her brain ran its own dialysis. All she had to do was let it.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="2031"
          chapter="Chapter III"
          title="The Gut That Listened"
        />

        <Paragraph>
          The second intervention came from an unexpected place: her intestines.
        </Paragraph>

        <Paragraph>
          Her twin&apos;s microbiome analysis revealed severe dysbiosis &mdash; depleted
          Akkermansia muciniphila (a bacterium that maintains gut barrier integrity and, when
          abundant, correlates with reduced neuroinflammation), elevated pro-inflammatory
          Prevotella species, and a pattern that a 2025 Frontiers in Aging paper had mapped to a
          specific mechanistic chain: gut dysbiosis &rarr; increased intestinal permeability &rarr;
          bacterial lipopolysaccharides entering the bloodstream &rarr; crossing a compromised
          blood-brain barrier &rarr; binding directly to microglial receptors &rarr; priming the
          brain&apos;s immune cells to overreact to even minor amyloid stimuli.
        </Paragraph>

        <Paragraph>Her brain&apos;s immune system was being sabotaged by her gut.</Paragraph>

        <Paragraph>
          The microglia &mdash; the brain&apos;s resident immune cells, 10&ndash;15% of all brain
          cells &mdash; were shifting from their normal protective state to what researchers called
          &ldquo;disease-associated microglia.&rdquo; In this state, they released pro-inflammatory
          cytokines (IL-1&beta;, TNF-&alpha;, IL-6), impaired their own ability to clear amyloid and
          tau, and damaged the very synapses they were supposed to protect.
        </Paragraph>

        <Paragraph>The brain&apos;s defenders had become its destroyers.</Paragraph>

        <Paragraph>
          Her twin coordinated with a nutritionist AI trained on the MIND diet protocol
          (Mediterranean&ndash;DASH Intervention for Neurodegenerative Delay) and the Finnish
          FINGER trial data &mdash; the first study to show that a multidomain lifestyle intervention
          could improve cognitive performance by 25% over two years. The protocol was specific:
          leafy greens six times per week, berries twice, fish once, olive oil daily, wine never
          (Alma&apos;s APOE4 status made alcohol a neuroinflammatory amplifier).
        </Paragraph>

        <Paragraph>
          She also received a targeted probiotic protocol &mdash; not generic supplements from a
          health store, but specific strains selected by her twin based on her metabolic profile:
          Agathobaculum butyriciproducens (demonstrated in 2025 research to directly inhibit
          microglial activation) and Bifidobacterium longum (shown to reduce gut permeability and
          systemic inflammation).
        </Paragraph>

        <Paragraph>
          Twelve months later, her GFAP levels &mdash; the marker of brain inflammation &mdash;
          dropped 23%.
        </Paragraph>

        <Paragraph keyLine>
          Her brain&apos;s defenders had become its destroyers. Her gut was the one giving the orders.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="2033"
          chapter="Chapter IV"
          title="The Gene She Carried"
        />

        <Paragraph>
          Alma had always known she carried one copy of APOE4 &mdash; the gene variant carried by
          one in five people globally. One copy meant 2&ndash;3x the risk of Alzheimer&apos;s.
          Two copies meant near-certainty.
        </Paragraph>

        <Paragraph>She had one. Her sister had two.</Paragraph>

        <Paragraph>
          For decades, APOE4 had been called a &ldquo;risk factor.&rdquo; But a January 2024 paper
          in Neuron had argued that APOE4 homozygosity should be considered a distinct genetic form
          of Alzheimer&apos;s &mdash; not a risk factor but a different disease. And Stanford
          research in 2025 had shifted the understanding further: APOE4 wasn&apos;t just ineffective
          at clearing amyloid. It was actively toxic &mdash; an altered protein conformation that
          reduced lipid transport, broke down the blood-brain barrier, enhanced tau pathology, and
          created chronic unresolved neuroinflammation.
        </Paragraph>

        <Paragraph>
          Alma&apos;s sister, Karin, had been diagnosed at 58. By the time symptoms appeared
          &mdash; the word-finding difficulties, the misplaced keys, the moment she forgot her
          daughter&apos;s name &mdash; the damage had been accumulating for twenty years.
        </Paragraph>

        <Paragraph>Karin didn&apos;t have a twin.</Paragraph>

        <Paragraph>Alma did.</Paragraph>

        <Paragraph>
          The difference wasn&apos;t genetic. The difference was fifteen years of continuous
          monitoring, environmental optimisation, sleep architecture management, gut microbiome
          cultivation, and metabolic calibration. Alma&apos;s twin had caught the slope at 52.
          Karin&apos;s doctors caught the cliff at 58.
        </Paragraph>

        <Paragraph>
          Alma was now 65 and cognitively sharper than she&apos;d been at 50. Her biological brain
          age, measured by the Horvath epigenetic clock &mdash; a DNA methylation pattern that
          measures cellular ageing independent of calendar years &mdash; was 57.
        </Paragraph>

        <Paragraph>
          Her sister was in a memory care facility that cost 480,000 kronor per year.
        </Paragraph>

        <Paragraph keyLine>
          The same genome. Different trajectories. Because one had a twin and the other had a
          healthcare system.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="2038"
          chapter="Chapter V"
          title="515,000 Twins"
        />

        <Paragraph>
          When the Swedish health authorities deployed Life Atlas across the Careium pendant
          network &mdash; 515,000 seniors, each wearing a device that was once just a fall alarm
          &mdash; the data changed everything.
        </Paragraph>

        <Paragraph>
          Not because of what they found in individuals. Because of what they found in populations.
        </Paragraph>

        <Paragraph>
          The anonymised twin-pair data revealed that Alzheimer&apos;s was not one disease.
          RNA sequencing had already identified three molecular subtypes &mdash; tau-dominant,
          amyloid-neuroinflammation dominant, and synaptic-myelination disruption &mdash; but the
          twin network data added behavioural subtypes that no clinical trial had ever captured:
          seasonal depression correlated with heating patterns, medication non-compliance correlated
          with loneliness scores, cognitive decline acceleration correlated with how many days since
          the last visitor.
        </Paragraph>

        <Paragraph>
          The most powerful predictor of cognitive decline in the over-75 population was not
          amyloid load. It was social isolation.
        </Paragraph>

        <Paragraph>
          No drug addressed that. No clinical trial measured it. But 515,000 twins, watching
          continuously, saw it clearly.
        </Paragraph>

        <Paragraph>
          The interventions that followed were not pharmaceutical. They were architectural:
          community walking groups matched by gait speed and cognitive profile. Shared gardens
          optimised for the specific nutritional needs of each participant. Inter-generational
          housing designs where children&apos;s noise &mdash; once considered a nuisance &mdash; was
          reframed as a cognitive stimulus that activated the very neural pathways that
          Alzheimer&apos;s was silencing.
        </Paragraph>

        <Paragraph>
          Healthcare costs for twin-monitored seniors dropped 31% in two years. Not through
          better drugs. Through better lives.
        </Paragraph>

        <Paragraph keyLine>
          The most powerful predictor of cognitive decline was not amyloid load. It was social
          isolation.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          year="2048"
          chapter="Chapter VI"
          title="The Woman Who Remembered"
        />

        <Paragraph>
          Alma Lindqvist is 72 years old. She teaches a class on epigenetics to twelve-year-olds
          at the same school where she once taught them to read. Her p-tau217 levels have been
          stable for sixteen years. Her gait speed is that of a healthy 58-year-old. Her slow-wave
          sleep runs at 17% &mdash; better than most people half her age.
        </Paragraph>

        <Paragraph>
          She never took Lecanemab. She never took Donanemab. She never had a PET scan or a lumbar
          puncture. She never spent a night in a hospital for anything related to her brain.
        </Paragraph>

        <Paragraph>
          Her sister Karin died three years ago, at 77, having spent the last twelve years in
          progressive cognitive darkness. Karin&apos;s medical costs over that period exceeded
          5.7 million kronor. Alma&apos;s prevention costs over twenty years: 340,000 kronor.
        </Paragraph>

        <Paragraph>
          The difference is not theoretical. It is not a policy paper. It is two sisters from
          Uppsala with the same parents, the same genes, the same childhood, and two completely
          different endings.
        </Paragraph>

        <Paragraph>
          When people ask Alma how she did it, she gives an answer that confuses them.
        </Paragraph>

        <Paragraph>
          &ldquo;I didn&apos;t do anything,&rdquo; she says. &ldquo;My twin did. It caught the
          slope when I couldn&apos;t see it. It fixed my sleep when I didn&apos;t know it was
          broken. It fed my gut what my brain needed. It measured my loneliness before I felt
          it.&rdquo;
        </Paragraph>

        <Paragraph>She pauses.</Paragraph>

        <Paragraph>&ldquo;I just kept teaching.&rdquo;</Paragraph>

        <Paragraph keyLine>
          Alzheimer&apos;s didn&apos;t lose to a drug. It lost to a companion that never stopped
          watching.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Dedication
            ════════════════════════════════════════════════ */}
        <DedicationBlock />

        {/* ════════════════════════════════════════════════
            Back link
            ════════════════════════════════════════════════ */}
        <BackLink />
      </article>

      <style jsx global>{`
        @keyframes mote {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.07;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-44px) translateX(12px) scale(1.5);
            opacity: 0.02;
          }
        }
      `}</style>
    </main>
  );
}
