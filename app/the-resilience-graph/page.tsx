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
        For Sweden. And for every storm that taught us to listen.
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
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold-dim)";
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

export default function TheResilienceGraph() {
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
            Sentinel Arc: Book VII &nbsp;&bull;&nbsp; Sweden&apos;s Synthetic Edge
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Resilience Graph
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-4 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Sentinel Arc: Book VII
          </p>

          {/* Byline */}
          <p
            className="text-sm italic mb-4 max-w-lg mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
              opacity: 0.6,
            }}
          >
            A critical infrastructure story from Sweden&apos;s synthetic edge
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

        {/* ── Chapter I ── */}
        <ChapterDivider
          year="The Map That Woke Up"
          chapter="Chapter I"
          title="The Map That Woke Up"
        />

        <Paragraph>
          It began in Lulea.
        </Paragraph>

        <Paragraph>
          Wind patterns unlike anything recorded since 1972 — not merely unusual, but structurally anomalous. The kind of atmospheric configuration that older models had never been trained to recognize, because it had not existed in the training data. The world had changed faster than the models that were supposed to understand it.
        </Paragraph>

        <Paragraph>
          Sweden&apos;s National Digital Twin sensed it. Not through a single instrument, but through the convergence of ten thousand data streams: satellite telemetry, distributed IoT sensors embedded in bridge supports and forest floors, biosignals from wildlife monitoring networks, thermal differentials in the Arctic shipping lanes.
        </Paragraph>

        <Paragraph>
          Ragnarok Node 4 activated.
        </Paragraph>

        <Paragraph keyLine>
          Not with panic. But with purpose.
        </Paragraph>

        <Paragraph>
          The activation was quiet, methodical — a cascade of readiness propagating through the mesh like light through fiber. No sirens. No emergency broadcasts. Just the careful, coordinated preparation of a nation that had learned to read the weather before it arrived.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="From GIS to JADO"
          chapter="Chapter II"
          title="From GIS to JADO"
        />

        <Paragraph>
          Sweden no longer operated on Geographic Information Systems alone. GIS had been the foundation — the map that gave the state eyes. But eyes were not enough. You needed understanding. You needed coordination. You needed the capacity to act across every domain simultaneously.
        </Paragraph>

        <Paragraph>
          The JADO mesh — Joint All Domain Operations — had evolved from military doctrine into national infrastructure philosophy. Every critical asset was modeled, simulated, and continuously updated: hydroelectric plants rendered as living digital twins, their turbine stress profiles updated in real time. Data transmission lines mapped with contingency routing logic baked into the model. Bridge supports instrumented with structural integrity monitors that fed directly into emergency logistics planning.
        </Paragraph>

        <Paragraph>
          Arctic logistics hubs — once managed through weekly manual reports — now operated as self-aware nodes, rerouting supply chains around predicted disruption before the disruption materialized.
        </Paragraph>

        <Paragraph>
          The mesh was not a command system. It was a coordination layer. The distinction mattered enormously.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="The Agents Were Not Pre-Built"
          chapter="Chapter III"
          title="The Agents Were Not Pre-Built"
        />

        <Paragraph>
          They were grown.
        </Paragraph>

        <Paragraph>
          Not designed in advance for specific scenarios — that approach had failed repeatedly in the early crises of the century, when pre-built systems met novel situations and found themselves architecturally incapable of adaptation. Instead, the agents were assembled from modular libraries at the moment of need, shaped by purpose rather than role.
        </Paragraph>

        <Paragraph>
          One agent assembled itself in the configuration of a snowplow integrated with drone intelligence — ground-clearing capability married to aerial reconnaissance, able to clear a route while simultaneously mapping what lay ahead. Another configured itself to resemble a child&apos;s toy: small, non-threatening, designed to reassure a family trapped in a collapsed structure while it quietly coordinated rescue.
        </Paragraph>

        <Paragraph keyLine>
          They weren&apos;t machines. They were micro-ecosystems with purpose.
        </Paragraph>

        <Paragraph>
          Each one edge-native by design. No satellite connectivity required — the agents carried their own operational intelligence. When solar power was available, they harvested it. When not, they drew on heat differentials, geothermal decay signatures, kinetic energy recovery from their own movement. They were not dependent on infrastructure. They were infrastructure.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="The Library of Infrastructure Past"
          chapter="Chapter IV"
          title="The Library of Infrastructure Past"
        />

        <Paragraph>
          One of the things that made the JADO mesh genuinely intelligent — as opposed to merely fast — was its relationship to history.
        </Paragraph>

        <Paragraph>
          Accessible through the mesh: Cold War bunker blueprints, cross-referenced against current utility maps to identify which structures could still serve as emergency shelters. NATO logistics maps from the 1980s, their supply chain logic reverse-engineered and adapted for twenty-first century geography. The field notes and after-action reviews of retired engineers and crisis managers, their insights digitized and transformed into tokenized wisdom pools that could be queried in real time.
        </Paragraph>

        <Paragraph>
          A 1974 NATO operational model — designed for a European land war that never happened — was being overlaid with 2029 climate simulation data, rendered live through a game engine mod that a student in Gothenburg had designed as a thesis project. Her model had been adopted by the Swedish Civil Contingencies Agency within six months of submission.
        </Paragraph>

        <Paragraph>
          The past was not a museum. It was a resource — continuously mined for patterns that present conditions had forgotten how to recognize.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="Humans in the Loop, But Never Out of Control"
          chapter="Chapter V"
          title="Humans in the Loop, But Never Out of Control"
        />

        <Paragraph>
          The system had one inviolable principle: a human could always override it. Not just in theory — in practice. With a single authenticated gesture, any individual with contextual credentials could issue a local reconfiguration.
        </Paragraph>

        <Paragraph>
          A woman in Kiruna — a nurse, not an engineer — reprogrammed three fire suppression drones to transport insulin across a flooded district. She had the contextual authority because she was physically present, medically qualified, and the system recognized both. The drones complied instantly. The system logged her decision, flagged it for review, and learned from it.
        </Paragraph>

        <Paragraph>
          Another operator — a retired signals officer running a community communications hub — reconfigured a surface-to-air monitoring node into a ground relay for emergency broadcasts when the primary network went dark. He had not asked permission. He had not needed to. His credentials, his context, and his judgment were sufficient.
        </Paragraph>

        <Paragraph keyLine>
          No one was in command. Everyone was in sync.
        </Paragraph>

        <Paragraph>
          This was what distributed authority looked like when it worked: not chaos, not consensus paralysis, but coherent action emerging from ten thousand individual decisions made by people who understood their context and trusted the mesh to integrate their contributions.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          year="Security by Entanglement"
          chapter="Chapter VI"
          title="Security by Entanglement"
        />

        <Paragraph>
          The security architecture had a name the engineers used internally: entanglement. Every node was cryptographically bound to every other node in a post-quantum lattice that made isolation impossible. You could not compromise one node without the compromise being immediately visible across the mesh. You could not silence one agent without the silence being interpreted as a signal.
        </Paragraph>

        <Paragraph>
          PQ crypto standard throughout — lattice-based key exchange, hash-based signatures, every credential purpose-scoped and temporally bounded. Identity was not a username and password. It was a contextual claim: who you were, where you were, what you were trying to accomplish, and whether the mesh could verify the coherence of those three things.
        </Paragraph>

        <Paragraph>
          Even if the satellites went down — and they did, for eleven hours during the Lulea event — the mesh held. Even if the grid blinked — and it did, twice — the agents continued. The system was not fault-tolerant in the engineering sense. It was fault-expressive: every disruption made visible, every constraint acknowledged, every adaptation logged.
        </Paragraph>

        <Paragraph>
          Each agent preserving continuity not just of infrastructure, but of people, of meaning, of the social fabric that infrastructure was built to serve.
        </Paragraph>

        {/* ── Chapter VII ── */}
        <ChapterDivider
          year="Sweden, As a Continuum"
          chapter="Chapter VII"
          title="Sweden, As a Continuum"
        />

        <Paragraph>
          When the storm passed, the after-action review took four hours. Not because the failures were extensive — they were not — but because the successes needed to be understood. Every adaptation logged. Every human decision that had improved on the system&apos;s recommendation examined for what it revealed about the limits of the model.
        </Paragraph>

        <Paragraph>
          Sweden did not operate as a country in the traditional sense — a territory bounded by lines on a map, administered by a hierarchy of institutions. It operated as a resilient graph: a network of relationships between people, infrastructure, knowledge, and environment, continuously updated, continuously learning, always coherent and never static.
        </Paragraph>

        <Paragraph>
          The next storm was already forming over the Norwegian Sea. The models showed it arriving in eleven days. By the time it made landfall, three new agent configurations would have been tested in simulation, two retired engineers&apos; knowledge bases would have been integrated into the mesh, and the student in Gothenburg would have published a second thesis.
        </Paragraph>

        <Paragraph>
          When it came, the people did not wait. They modded reality before it arrived.
        </Paragraph>

        <Paragraph keyLine>
          We used to simulate the future. Now we preconfigure it.
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
