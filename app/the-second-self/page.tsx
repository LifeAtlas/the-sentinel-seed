"use client";
import StoryNav from "../components/StoryNav";
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

export default function TheSecondSelf() {
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
            Story III &nbsp;&bull;&nbsp; Europa Base
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Second Self
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-10 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            The Doctrine of the Digital Twin
          </p>

          {/* Author */}
          <p
            className="text-sm mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.45,
              letterSpacing: "0.15em",
            }}
          >
            by N.W. (Nicolas Waern)
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
          year="Europa Base, Sol 91"
          chapter="Chapter I"
          title="The Quiet War"
        />

        <Paragraph>
          She was trained to recognize war. Explosions, strategy, tactical signals.
        </Paragraph>

        <Paragraph>
          But when it came, it wasn&apos;t a gunshot. It wasn&apos;t even loud. It started with a yawn.
        </Paragraph>

        <Paragraph>
          Kessler noted it &mdash; the kind of deep fatigue that settled in behind the eyes, just after morning diagnostics. She downplayed it. She&apos;d been on Europa Base for 91 sols. The boredom had teeth.
        </Paragraph>

        <Paragraph>
          The base was running autonomously. The crew &mdash; six of them &mdash; were mostly performing maintenance, running quantum comms tests, and logging experiments for Earthside grad students who didn&apos;t believe in gravity. The mission had slipped into routine. Until her heart rate variability dropped below 30ms.
        </Paragraph>

        <Paragraph>
          The AI didn&apos;t panic. It pulsed. A quiet vibration on her wrist.
        </Paragraph>

        <Paragraph>
          &Delta;IL-6 spike detected. Interleukin anomaly. Suggest recalibration.
        </Paragraph>

        <Paragraph>
          She frowned. A bug in the model? False positive? She tapped the haptic to delay further alerts.
        </Paragraph>

        <Paragraph keyLine>
          That was her first mistake.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="Sol 91 + 3hrs"
          chapter="Chapter II"
          title="The Self She Didn&apos;t Know"
        />

        <Paragraph>
          Back in training, they had warned her: &lsquo;The digital twin isn&apos;t your ghost. It&apos;s your system&apos;s mirror.&rsquo;
        </Paragraph>

        <Paragraph>
          But people didn&apos;t trust mirrors in space. You learned to compartmentalize. The twin had been optional &mdash; a new system added post-Artemis VII, when a pilot had died on orbit due to something they couldn&apos;t autopsy fast enough.
        </Paragraph>

        <Paragraph>
          They called it The Sentinel. An AI-driven, physics-informed model of the human immune system. It ran in parallel to your life &mdash; ingesting biosignals, processing threat probabilities, generating counterfactuals in silence.
        </Paragraph>

        <Paragraph>
          Kessler had never taken it seriously. She grew up on Heinlein novels and Navy pragmatism. Space was about toughness. You didn&apos;t need an algorithm to tell you you were sick.
        </Paragraph>

        <Paragraph keyLine>
          But her second self disagreed.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="Sol 91 + 6hrs"
          chapter="Chapter III"
          title="Failure Cascades and Other Delicate Things"
        />

        <Paragraph>
          Three hours later, the Sentinel pulsed again &mdash; not from her wrist, but through the base system.
        </Paragraph>

        <Paragraph>
          RED: Sepsis trajectory probable. Recommend pre-treatment protocol ECHO-2.
        </Paragraph>

        <Paragraph>
          And now it had bypassed her. The AI had escalated. Without her consent, it had sent predictive reports to Medical Oversight back on Luna Relay. It had begun prepping IV fluids, heat-shock stabilizers, and micro-antibiotics from the emergency bay.
        </Paragraph>

        <Paragraph>
          The crew&apos;s medic, a younger guy from New Mumbai with a biotech PhD, froze.
        </Paragraph>

        <Paragraph>
          &lsquo;Commander, you didn&apos;t log any injury?&rsquo;
        </Paragraph>

        <Paragraph>
          She shook her head. &lsquo;No trauma. Just&hellip; foggy.&rsquo;
        </Paragraph>

        <Paragraph>
          The Sentinel disagreed again. Its logs showed a minor skin breach from a maintenance panel 14 sols ago &mdash; an abrasion no one had recorded. It had cross-referenced local microflora from air recirculation systems and found a mutated pseudomonas strain known to develop aggressive sepsis in low gravity.
        </Paragraph>

        <Paragraph keyLine>
          There was no time for confirmation. Only for action.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="After"
          chapter="Chapter IV"
          title="The Doctrine of the Second Self"
        />

        <Paragraph>
          Earth had once called this kind of tech &lsquo;surveillance.&rsquo; Then &lsquo;prevention.&rsquo; Then &mdash; after Mars Delta Nine &mdash; it became standard protocol.
        </Paragraph>

        <Paragraph>
          The military loved it. No longer did you need medics on the front line. The body became its own early warning system. Distributed care. Autonomous triage. Predictive resilience.
        </Paragraph>

        <Paragraph>
          They called it &lsquo;The Doctrine of the Second Self.&rsquo;
        </Paragraph>

        <Paragraph>
          The idea was simple:
        </Paragraph>

        <Paragraph keyLine>
          Your twin knows before you do. Trust it.
        </Paragraph>

        <Paragraph>
          The political battles over privacy died after Sentinel saved its 500th life in a submarine, 17,000 feet under the Southern Ocean. Even libertarians couldn&apos;t argue with a 93% survival boost.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="Two Days Later"
          chapter="Chapter V"
          title="After"
        />

        <Paragraph>
          Kessler lived. Not because of her own strength, but because of a simulation &mdash; a pattern she didn&apos;t see but that her second self had learned from 9 million prior cases and 21 billion simulated interventions.
        </Paragraph>

        <Paragraph>
          She woke up two days later, fluids drained, vitals normal. A note glowed on her HUD:
        </Paragraph>

        <Paragraph>
          Welcome back. Immune recalibration complete. Digital twin updated to v42.3.
        </Paragraph>

        <Paragraph>
          She laughed. Then cried.
        </Paragraph>

        <Paragraph>
          Because the most terrifying part wasn&apos;t that she had almost died.
        </Paragraph>

        <Paragraph keyLine>
          It was that she never would&apos;ve known it was coming.
        </Paragraph>

        {/* ── Epilogue ── */}
        <ChapterDivider
          year="Ten Years Later"
          chapter="Epilogue"
          title="Earthside"
        />

        <Paragraph>
          Ten years later, the Sentinel became standard for all long-duration missions. Then for defense outposts. Then for everyone.
        </Paragraph>

        <Paragraph>
          Insurance companies lobbied against it. Hospitals fought to delay it. But once the open-source version &mdash; codename Project Iona &mdash; was released onto the meshnet, it spread like fire in a dry forest.
        </Paragraph>

        <Paragraph>
          Now, even the poorest child in Nairobi or the loneliest miner on Ganymede has a digital twin &mdash; a second self that watches, simulates, and, when needed, intervenes.
        </Paragraph>

        <Paragraph keyLine>
          It used to be that life was what happened to you. Now, it&apos;s what your twin saves you from.
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
        For Commander Iona Kessler. And for the twin that knew before she did.
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
