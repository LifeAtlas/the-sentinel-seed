"use client";
import StoryNav from "../components/StoryNav";

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
      {/* Gold lines */}
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

      {/* Bottom lines */}
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
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheLimitlessPill() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <StoryNav />

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

        {/* Floating motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 4 === 0 ? "2px" : "1px",
                height: i % 4 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.08 + (i % 5) * 0.03,
                left: `${5 + i * 7}%`,
                top: `${10 + (i % 6) * 14}%`,
                animation: `mote ${8 + i * 1.5}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.7}s`,
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

          {/* Story number */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            A Sentinel Origin Story &nbsp;&bull;&nbsp; 2024 &ndash; 2029
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Limitless Pill
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-16 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Not Trained on the Population. Trained on You.
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
          year="2024"
          chapter="Chapter I"
          title="The Generic World"
        />

        <Paragraph>
          Doug Kiehl spent thirty-one years building drugs for a population of
          hundreds of millions. He knew how the machine worked. He had watched
          molecules progress from bench to bottle, watched clinical trials
          dissolve individuals into statistics, watched the FDA approve
          compounds that worked, on average, on a cohort that was nothing like
          him. He had approved those compounds himself. He had believed in the
          average. Then the average nearly killed him.
        </Paragraph>

        <Paragraph>
          It started with a cough. Not a dramatic cough. A persistent one. The
          kind that gets dismissed in the first appointment and re-dismissed in
          the second. Bronchitis, they said. It had the texture of bronchitis,
          the sound of bronchitis, the seasonality of bronchitis. It was not
          bronchitis. It was a pulmonary embolism building quietly in his lung
          for months while the system that had trained him looked the other way.
        </Paragraph>

        <Paragraph>
          Nine days in intensive care. Not because the clot was discovered late
          in some dramatic sense. Because it was discovered after months of
          being diagnosed as something else. The system that had built the drugs
          could not see the man taking them. The drugs were for populations. The
          man was singular. The gap between those two facts had a name, but
          nobody in the system was required to close it.
        </Paragraph>

        <Paragraph>
          When Doug got out of the ICU he did what engineers do after a near
          miss. He studied the failure mode. He found The Wellness Company, a
          physician-founded startup shipping generic medical kits to your door
          — methylprednisolone, azithromycin, ivermectin, montelukast, packaged
          for predictable emergencies, delivered before you needed them. It was
          better than nothing. Doug ordered one. He kept it in the cabinet
          above his bathroom sink. He looked at it every morning.
        </Paragraph>

        <Paragraph>
          It was generic. It was designed for a median patient that Doug was
          not. The pill that could have saved him six months of misdiagnosis
          did not exist yet. It was still being averaged into someone else.
        </Paragraph>

        <Paragraph keyLine>
          The system that built the drugs could not see the man taking them.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="2026"
          chapter="Chapter II"
          title="The Coca-Cola Insight"
        />

        <Paragraph>
          The call happened on a Tuesday afternoon, Stockholm time. Doug was in
          Indianapolis. Nicolas was in a co-working space in Gothenburg with a
          bad connection and a good idea he hadn&apos;t finished yet. They had
          been introduced through a mutual contact in pharmaceutical regulatory
          circles, and they had spent twenty minutes establishing that they were
          thinking about the same problem from opposite ends of the supply chain.
        </Paragraph>

        <Paragraph>
          Doug described the kits. The protocol logic. The way the physician
          founders had assembled a formulary for predictable acute events —
          respiratory, cardiovascular, inflammatory — and shipped them to
          households before the event, so there was something in the cabinet
          when Saturday night turned into a problem that couldn&apos;t wait
          until Monday morning. It was smart. It was systematic. It was, Doug
          acknowledged, still generic.
        </Paragraph>

        <Paragraph>
          &ldquo;You know Coca-Cola, where they put your name on the
          bottle?&rdquo; Nicolas said. The line landed before he had finished
          saying it. Doug was quiet for two seconds, which was a long time for
          Doug. &ldquo;That&apos;s what&apos;s missing. This is a catastrophe
          kit. It&apos;s generic. But what if you train your data with Life
          Atlas and they come back with a Doug kit?&rdquo;
        </Paragraph>

        <Paragraph>
          Not drugs to market. Drugs to people. Not a formulation approved by a
          committee studying ten thousand averaged subjects. A formulation
          derived from ten thousand simulations of one subject. The committee
          had been replaced. The subject was the study.
        </Paragraph>

        <Paragraph>
          Doug had spent thirty-one years at Eli Lilly understanding pharmacology
          at the population level. He understood, in the space of that silence,
          that population-level pharmacology had always been a compromise — the
          best available answer to a question that nobody had the data to answer
          correctly. Life Atlas had the data to answer it correctly. Not for
          everyone. For one person at a time. Starting with Doug.
        </Paragraph>

        <Paragraph>
          They stayed on the call for three more hours. By the end, the generic
          kit sitting above Doug&apos;s bathroom sink felt like a relic from a
          previous century. It was. They just hadn&apos;t built the replacement
          yet.
        </Paragraph>

        <Paragraph keyLine>
          Not drugs to market. Drugs to people.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="2027"
          chapter="Chapter III"
          title="100,000 Simulations"
        />

        <Paragraph>
          Her name was Maja. She lived in Gothenburg, in a flat in
          H&ouml;gs&shy;bo overlooking a canal that froze in February and
          smelled of algae in July. She was thirty-eight years old, a
          structural engineer, mildly iron-deficient in ways that three
          different GPs had noted and none had followed, carrying a family
          history of autoimmune disease that nobody had connected to her
          recurring fatigue because the data lived in different systems in
          different hospitals in different decades.
        </Paragraph>

        <Paragraph>
          Maja was the first Limitless subscriber. She enrolled in March, during
          a week when she was tired enough to try something she would normally
          have dismissed. She connected her wearable, uploaded her bloodwork,
          gave the twin access to her activity data and her food log and, after
          some hesitation, her menstrual cycle data, which turned out to be the
          single most informative input in the entire profile.
        </Paragraph>

        <Paragraph>
          Her twin ran 100,000 simulations in the first twenty-four hours. Not
          simulations of an average woman. Simulations of Maja, specifically,
          derived from her specific biomarker history, her specific genomic
          variants — she had done a consumer panel two years earlier and mostly
          ignored the results — her specific gut microbiome composition as
          inferred from her dietary data, her specific inflammatory markers
          correlated against her cycle phase and her sleep architecture and her
          stress indicators.
        </Paragraph>

        <Paragraph>
          Monday&apos;s pill was different from Friday&apos;s pill because
          Monday-Maja was different from Friday-Maja. Not in ways that any
          doctor would have measured. In ways the twin could see because it had
          been watching her continuously for three months, building a model
          granular enough to distinguish the Maja who had slept seven hours from
          the Maja who had slept five, the Maja two days before ovulation from
          the Maja two days after, the Maja at the end of a deadline week from
          the Maja at the beginning of one.
        </Paragraph>

        <Paragraph>
          She was traveling to Tokyo the following week. Her twin had already
          run the simulation. Thirteen-hour time shift. Humidity rising from
          sixty percent to eighty-two. A food environment with dramatically
          different sodium and fermented-food profiles. The twin had modeled her
          gut microbiome response to Japanese dietary inputs, her circadian
          disruption trajectory given her specific chronotype, the likely
          inflammatory uptick on day three of the trip based on previous long-
          haul data. The kit arrived four days before she boarded the plane.
        </Paragraph>

        <Paragraph>
          Inside the box, printed on a label in the same clean sans-serif as
          the box itself: MAJA. Her formulation. Her biology, optimized for her
          next ten days, adjusted for the life she was about to live, not the
          life the average passenger lived.
        </Paragraph>

        <Paragraph keyLine>
          Monday&apos;s pill was different from Friday&apos;s pill because
          Monday-her was different from Friday-her.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="2028"
          chapter="Chapter IV"
          title="The Inversion"
        />

        <Paragraph>
          The logic of pharmaceutical development had been stable for seventy
          years. You recruited a population. You divided it into cohorts. You
          administered a compound and a placebo. You measured outcomes across
          the population and reported the mean. The mean became the dose. The
          dose became the drug. The drug was approved for the population. The
          population, as a statistical entity, benefited. Individual patients,
          as biological singularities, did their best.
        </Paragraph>

        <Paragraph>
          The Limitless protocol inverted this entirely. Pharma had spent
          decades training on 100,000 averaged humans to produce one drug. Life
          Atlas trained 100,000 times on one human to produce their drug. The
          inputs were the same — genomics, biomarkers, physiological time
          series, environmental context. The direction of travel was opposite.
          Population to individual had been the only available direction because
          individual-level data at sufficient depth had never existed. It existed
          now. It had been accumulating quietly in wearables and bloodwork apps
          and continuous glucose monitors and food logs and sleep trackers for
          a decade, waiting for a system capable of synthesising it into
          something actionable.
        </Paragraph>

        <Paragraph>
          The inversion was not a technology story. It was a data story. The
          technology — the mechanistic models, the simulation engine, the
          biological twin — had existed in research settings for years. What
          had not existed was a platform capable of acquiring and integrating
          the continuous individual data required to run the models on a single
          person rather than a population sample. Life Atlas was that platform.
          The models could finally run where they were always supposed to run:
          on you.
        </Paragraph>

        <Paragraph>
          Doug Kiehl understood this before anyone else in his network did. He
          had spent his career on the population side of the equation and he
          could see, with the clarity of someone who had studied the limitation
          from the inside, exactly what the inversion meant. It did not replace
          population-level pharmacology. Population studies would still be how
          you discovered that a molecule had an effect. But the question of what
          dose, what timing, what formulation, what combination — that question
          had always been answered at the wrong resolution. The population was
          not the patient. The patient was the patient.
        </Paragraph>

        <Paragraph>
          The pill was not trained on the population. It was trained on you. Not
          who you were at your last checkup. Not who you were at enrollment in
          a clinical trial twelve years ago. Who you are right now, at this
          weight, in this season, at this point in your cycle, under this
          particular load, sleeping these particular hours. The drug met you
          where you were. It had never been able to do that before.
        </Paragraph>

        <Paragraph keyLine>
          The pill was not trained on the population. It was trained on you.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="2029"
          chapter="Chapter V"
          title="Open Source Biology"
        />

        <Paragraph>
          The question nobody had thought to ask came from a subscriber in
          Malm&ouml; during the first annual Limitless user forum, held in a
          converted warehouse on the waterfront on a Saturday morning in
          October. She was a software developer. She had spent her career
          thinking about data ownership in the context of code, and she had
          started, in the months since enrolling, to think about it in the
          context of her own body.
        </Paragraph>

        <Paragraph>
          &ldquo;If Life Atlas disappeared tomorrow,&rdquo; she said, &ldquo;
          what happens to my formulation?&rdquo;
        </Paragraph>

        <Paragraph>
          The answer had been decided at the architecture level two years
          earlier, when the platform was still being built. It was not a
          business decision. It was a principle that predated the business —
          the same principle that had governed every layer of the stack since
          the first line of code. Sovereignty is not a feature. Sovereignty is
          architecture. If it can be revoked, it was never sovereignty. It was
          a licence.
        </Paragraph>

        <Paragraph>
          Every subscriber owned their formulation. Not in the sense that they
          had agreed to terms that said so. In the sense that the recipe lived
          on their device, in their twin, exported in an open format readable
          by any pharmacist, any physician, any compounding lab, any future
          platform that chose to implement the standard. The Life Atlas
          formulation schema was published. It was MIT licensed. If Life Atlas
          vanished, the recipe remained. If a subscriber switched to a
          different platform, the recipe came with them. The twin was theirs.
          The data was theirs. The biology that the models had learned to
          represent was, in the deepest sense, theirs to begin with.
        </Paragraph>

        <Paragraph>
          This was not popular with the investors who wanted a data moat. It
          was not designed to be popular with them. It was designed to be
          correct. The platform&apos;s moat was not the data. The moat was the
          methodology — the framework for turning continuous individual data
          into actionable biological insight, which was a skill, not a secret.
          You could not lock up a skill. You could only demonstrate it better
          than anyone else, continuously, for as long as it mattered.
        </Paragraph>

        <Paragraph>
          Maja, in Gothenburg, heard about the exchange secondhand. She thought
          about the kit sitting on her bathroom shelf — the one with her name
          on it, the one tuned to her current bloodwork, the one that existed
          because someone had understood that she was not an average. She
          thought about the fact that the recipe was hers. Not licensed to her.
          Not provisionally available to her pending continued subscription.
          Hers, the way her body was hers, which was to say completely and
          without condition.
        </Paragraph>

        <Paragraph>
          She found that she had nothing further to worry about. The system
          had been built to make itself unnecessary. That was, she thought, the
          most trustworthy kind of system there was.
        </Paragraph>

        <Paragraph keyLine>
          Sovereignty is not a feature. It is architecture.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Closing
            ════════════════════════════════════════════════ */}
        <ClosingBlock />

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
            opacity: 0.08;
          }
          50% {
            opacity: 0.18;
          }
          100% {
            transform: translateY(-40px) translateX(14px) scale(1.4);
            opacity: 0.02;
          }
        }
      `}</style>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Closing Block
   ═══════════════════════════════════════════════════════════════ */

function ClosingBlock() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-20 mb-6 text-center transition-all duration-[1800ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
      }}
    >
      <p
        className="text-lg md:text-xl font-light italic leading-[1.7] max-w-xl mx-auto"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        They called it the Limitless Pill. Not because it had no limits.
        Because it had no averages.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Dedication
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
        For Doug. And for every patient whose body was studied in a population
        but treated as an individual.
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
   Back link
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
      <a
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
      </a>
    </div>
  );
}
