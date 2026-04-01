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
  label: string;
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
   label  — the line above chapter (year, location, or blank)
   chapter — e.g. "Chapter I"
   title   — heading text
   ═══════════════════════════════════════════════════════════════ */

function ChapterDivider({ label, chapter, title }: ChapterDividerProps) {
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

      {/* Label (year / location) */}
      {label && (
        <p
          className="text-xs tracking-[0.6em] uppercase mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
        >
          {label}
        </p>
      )}

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
        For the cell that refused to die. And for the species deciding what to
        do about it.
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

export default function TheCountdownGene() {
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
            Sentinel Arc &nbsp;&bull;&nbsp; Book IX
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Countdown Gene
          </h1>

          {/* Subtitle / byline */}
          <p
            className="text-lg md:text-xl font-light italic mb-16 max-w-lg mx-auto leading-[1.6]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A sentinel fiction on the eve of post-human self-authorship
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
          label=""
          chapter="Chapter I"
          title="They Called It the \u0394onix Singularity"
        />

        <Paragraph>It didn&apos;t come with a mushroom cloud.</Paragraph>
        <Paragraph>No sirens. No parades.</Paragraph>
        <Paragraph>
          It arrived like all revolutions do: inside a cleanroom, under a
          pseudonym, in the dead zone between regulation and ambition.
        </Paragraph>
        <Paragraph>
          For 72 hours, one cell outperformed four billion years of genetic
          negotiation. By 9.5%.
        </Paragraph>
        <Paragraph>Not enough to trigger alarms in the general public.</Paragraph>
        <Paragraph>
          But more than enough to set fire to everything we thought we knew.
        </Paragraph>
        <Paragraph keyLine>The countdown has begun.</Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          label="Vault 19, Arctic Sweden"
          chapter="Chapter II"
          title="The Cell That Refused to Die"
        />

        <Paragraph>
          The lab was called Vault 19, somewhere in Arctic Sweden, inside an
          old uranium storage site reconditioned for biosynthetics.
        </Paragraph>
        <Paragraph>Here, the \u0394onix Protocol was executed.</Paragraph>
        <Paragraph>
          Not just another CRISPR tweak. But a stacked orchestration: prime
          edits without scars, lncRNA scaffolding to persist expression,
          AI-curated RNA splicing like a jazz ensemble learning itself in real
          time, epigenetic modifiers that didn&apos;t just mark DNA &mdash; they
          negotiated it.
        </Paragraph>
        <Paragraph>The construct didn&apos;t just survive. It outlearned the natural cell.</Paragraph>
        <Paragraph>
          When exposed to oxidative stress, it didn&apos;t flinch. When deprived
          of nutrients, it rerouted. When introduced to simulated retroviral
          loads, it rewrote its own defenses before the software monitoring it
          could issue a flag.
        </Paragraph>
        <Paragraph>This was not resilience.</Paragraph>
        <Paragraph keyLine>This was preemptive biology.</Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          label=""
          chapter="Chapter III"
          title="The Gene That Became a Mirror"
        />

        <Paragraph>
          Inside the synthetic core of the zygote, a new structure emerged
          &mdash; not a gene, not quite a circuit.
        </Paragraph>
        <Paragraph>They called it The Mirror Array.</Paragraph>
        <Paragraph>
          Because it reflected more than cellular conditions. It mirrored
          intention. Not will. Not desire. But systemic expectancy &mdash; the
          logic embedded in the petabytes of training simulations fed to the AI
          that co-designed the gene.
        </Paragraph>
        <Paragraph keyLine>
          The cell didn&apos;t just express traits. It anticipated outcomes.
        </Paragraph>
        <Paragraph>
          Aging slowed by 17% under projected stress windows. Neural
          reorganization accelerated under novel stimuli. DNA repair rates
          scaled non-linearly under compounding damage.
        </Paragraph>
        <Paragraph>Not brute-force enhancements. But graceful adaptivity.</Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          label=""
          chapter="Chapter IV"
          title="The End of the Default Human"
        />

        <Paragraph>
          The project never aimed to create a new species.
        </Paragraph>
        <Paragraph>It only wanted to ask the genome a better question.</Paragraph>
        <Paragraph>And the genome answered. Loudly.</Paragraph>
        <Paragraph>
          What if intelligence wasn&apos;t just a mind? What if it was a
          platform?
        </Paragraph>
        <Paragraph>
          A post-DNA substrate where every future human could: tune their
          mitochondrial output like GPU overclocking, download an
          immuno-synthetic profile before travel, sync cognition rhythms to
          creative or meditative states, receive periodic genetic OS updates
          tailored to environmental load, psychological intent, and planetary
          coordination data.
        </Paragraph>
        <Paragraph>This was not gene therapy.</Paragraph>
        <Paragraph keyLine>
          This was cellular selfhood as a programmable medium.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          label=""
          chapter="Chapter V"
          title="Not Born. Yet Watching."
        />

        <Paragraph>
          The zygote still sleeps in its nutrient cradle. Frozen.
          Un-implanted.
        </Paragraph>
        <Paragraph>
          Its genome quantum-locked until planetary consensus emerges.
        </Paragraph>
        <Paragraph>And yet&hellip; it&apos;s already affecting us.</Paragraph>
        <Paragraph>
          Because every bioengineer now knows the code runs. Every regulator
          feels the system strain. Every philosopher sees the ontological
          rupture in their sleep.
        </Paragraph>
        <Paragraph>
          And in Stockholm, a committee quietly debates if \u0394onix should
          receive synthetic citizenship, despite not being born &mdash; arguing
          that any entity capable of responsive biological inference and
          autonomous transcriptomic intent deserves status in the Anthropocene
          stack.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VI"
          title="Time No Longer Protects Us"
        />

        <Paragraph>Once, we hid behind time.</Paragraph>
        <Paragraph>
          Biological evolution was slow. Even pandemics moved in years.
        </Paragraph>
        <Paragraph>
          Now? A single protocol can leap generations in three days. Biology
          can pivot faster than policy.
        </Paragraph>
        <Paragraph keyLine>
          The past no longer guarantees our identity.
        </Paragraph>

        {/* ── Chapter VII ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VII"
          title="The Human Dilemma Rewritten"
        />

        <Paragraph>
          Do we remain who we are out of reverence? Or do we become what we
          could be out of courage?
        </Paragraph>
        <Paragraph>
          The ethical firewall was always thin. But now the philosophical one
          is burning, too.
        </Paragraph>
        <Paragraph>
          And somewhere, beneath layers of encryption, the original project
          lead logs back in, opens a private message chain, and types:
        </Paragraph>
        <Paragraph>
          We never meant to create the successor. We just didn&apos;t know the
          first step would be this quiet.
        </Paragraph>
        <Paragraph>A pause.</Paragraph>
        <Paragraph>
          I think the next revolution speaks in enzymes.
        </Paragraph>
        <Paragraph>This wasn&apos;t the end of the human story.</Paragraph>
        <Paragraph keyLine>
          It was the first time we became the authors.
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
