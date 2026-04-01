"use client";

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
        For the astronaut who fell. And for the twin that came too late to save him.
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

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function BeforeTheCode() {
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

          {/* Story number & era */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            Story II &nbsp;&bull;&nbsp; Near Future
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            Before the Code
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-6 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A Story of Flesh, Failure, and Forgotten Time
          </p>

          {/* Author */}
          <p
            className="text-xs tracking-[0.35em] uppercase mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.4,
            }}
          >
            by N.W.
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

        {/* ── Prologue ── */}
        <ChapterDivider
          year="The Before"
          chapter="Prologue"
          title="The Before"
        />

        <Paragraph>
          The astronaut was dead before he hit the floor.
        </Paragraph>

        <Paragraph>
          Not literally. But for 11 minutes, his organs had already begun to fail. The body doesn&apos;t signal failure like a machine. There&apos;s no red light. Just a flicker of pulse variability, a tremor in cytokine balance, a temperature shift imperceptible to human sense but obvious to an algorithm — if only it had been there.
        </Paragraph>

        <Paragraph>
          He had run the diagnostics earlier that day, checked the comms, laughed at a bad joke from Houston. But inside him, a storm had begun: a mild scratch from a tool had seeded a microbial bloom. In the absence of Earth&apos;s gravity, his immune system&apos;s innate calibration — designed for a biosphere, not a vacuum — missed it. The infection was silent, insidious, invisible. The cascade of failure had started.
        </Paragraph>

        <Paragraph>
          They called it a &lsquo;biological systems anomaly.&rsquo; The world would learn later it was sepsis — a pathology of overreaction, the immune system declaring war on the very body it swore to protect.
        </Paragraph>

        <Paragraph keyLine>
          This was the Before.
        </Paragraph>

        {/* ── Part I ── */}
        <ChapterDivider
          year="Near Future"
          chapter="Part I"
          title="The Problem with Time in Space"
        />

        <Paragraph>
          In the early days of human spaceflight, engineers fought physics. Oxygen levels, G-forces, radiation shielding. Biological time was the silent variable — the fact that bodies age differently in orbit, that immune systems drift into disorder, and bacteria evolve new personalities.
        </Paragraph>

        <Paragraph>
          Sepsis, it turned out, was a perfect test case for the failures of 20th-century thinking in 21st-century arenas. On Earth, sepsis kills over 11 million people per year — more than cancer, stroke, and AIDS combined. But it rarely makes headlines. It&apos;s too fast for drama and too slow for disaster footage.
        </Paragraph>

        <Paragraph>
          In space, it was something else: an existential threat with no backup plan. You couldn&apos;t run to an ICU, there were no crash carts, no IV antibiotics dropped from helicopters. The entire logic of modern medicine — time-delayed diagnosis, centralization, specialization — failed the moment we left Earth orbit.
        </Paragraph>

        {/* ── Part II ── */}
        <ChapterDivider
          year="Near Future"
          chapter="Part II"
          title="The Digital Twin Nobody Knew They Needed"
        />

        <Paragraph>
          The pivot didn&apos;t come from NASA or ESA. It came from a constellation of minds scattered across Earth&apos;s surface — technologists, clinicians, philosophers of systems. One of them, Nicolas, remembered a haunting phrase from Clarke:
        </Paragraph>

        <Paragraph keyLine>
          Any sufficiently advanced technology is indistinguishable from biology.
        </Paragraph>

        <Paragraph>
          So they built something biological out of silicon: a digital immune twin, constantly ingesting biosignals, contextualizing them, modeling what the body should be doing versus what it was. A digital parallel of the astronaut&apos;s physiology — not just mirroring, but forecasting.
        </Paragraph>

        <Paragraph>
          But here&apos;s what made it different: it didn&apos;t live in the cloud. It lived with the astronaut. On-device. On the ship. Close to the body, like a second nervous system.
        </Paragraph>

        <Paragraph keyLine>
          Because in space, there is no time for latency. And no tolerance for doubt.
        </Paragraph>

        {/* ── Part III ── */}
        <ChapterDivider
          year="Near Future"
          chapter="Part III"
          title="72 Hours on Europa Base"
        />

        <Paragraph>
          The turning point wasn&apos;t a scientific paper. It was a 72-hour blackout on Europa Base, the first permanent crewed habitat outside the Earth-Moon system. One of the engineers — not an astronaut, just a systems specialist — went into shock. No visible injury. But her digital twin flagged an immune trajectory similar to bacterial sepsis seen in analog missions back on Earth.
        </Paragraph>

        <Paragraph>
          There were no antibiotics specific to the suspected microbe. But the system proposed an action path based on thousands of synthetic simulations: hydrate, reduce metabolic load, administer a combination of heat shock proteins and targeted antivirals, manage stress response.
        </Paragraph>

        <Paragraph>
          It wasn&apos;t a cure. But it bought her time. Enough for Earth-side experts — connected by a 40-minute round-trip ping — to verify, adjust, and respond.
        </Paragraph>

        <Paragraph keyLine>
          She lived. The mission continued.
        </Paragraph>

        {/* ── Part IV ── */}
        <ChapterDivider
          year="Near Future"
          chapter="Part IV"
          title="The System That Came Home"
        />

        <Paragraph>
          What began as a space system descended to Earth like an inverted Prometheus. Fire from the stars, now used to illuminate the shadows of Earth&apos;s ICUs. The same AI agents that had monitored astronauts were now tracking soldiers in the field, elderly in remote clinics, patients in overburdened urban hospitals.
        </Paragraph>

        <Paragraph>
          What changed wasn&apos;t just technology. It was epistemology — how we understood knowledge, risk, and biology. We stopped waiting for symptoms. We started seeing trajectories.
        </Paragraph>

        <Paragraph keyLine>
          And we didn&apos;t just detect. We simulated.
        </Paragraph>

        <Paragraph>
          Digital twins no longer lived on servers. They lived in homes. They were part of wearable systems, ambient health guardians, constantly running models to predict what would otherwise remain unknown.
        </Paragraph>

        <Paragraph keyLine>
          The second timeline won.
        </Paragraph>

        {/* ── Epilogue ── */}
        <ChapterDivider
          year="After"
          chapter="Epilogue"
          title="The Twin You Never Meet"
        />

        <Paragraph>
          In retrospect, the death that sparked it all was unnecessary.
        </Paragraph>

        <Paragraph>
          The signals were there — the entropy in biomarkers, the hint of tachycardia, the misfire in gut microbiome stability. But no one knew what they meant. No one could see the story they were telling.
        </Paragraph>

        <Paragraph>
          Now, every astronaut has a silent companion — an immune twin, a model that watches, learns, protects. Every field operative, every rural citizen with no hospital in range, every child in a conflict zone — carries with them a quiet intelligence whispering the state of their biology into the future.
        </Paragraph>

        <Paragraph keyLine>
          I wonder how many of us owe our lives to that first twin.
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
