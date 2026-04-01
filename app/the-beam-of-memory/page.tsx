"use client";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

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
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ═══════════════════════════════════════════════════════════════
   ProgressBar — gold gradient, fixed top
   ═══════════════════════════════════════════════════════════════ */

function ProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-px"
      style={{ background: "var(--color-border)" }}
    >
      <div
        className="h-full transition-all duration-75"
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
   Paragraph — key lines as large gold italic Cormorant Garamond
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: string;
  keyLine?: boolean;
  delay?: number;
}

function Paragraph({ children, keyLine = false, delay = 0 }: ParagraphProps) {
  const { ref, visible } = useFadeIn(0.1);

  if (keyLine) {
    return (
      <div
        ref={ref}
        className="my-14 mx-auto text-center transition-all duration-[1600ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(20px)",
          transitionDelay: `${delay}ms`,
          maxWidth: "640px",
        }}
      >
        <div
          className="h-px mb-10 w-10 mx-auto"
          style={{ background: "var(--color-gold-dim)" }}
        />
        <p
          className="text-2xl md:text-3xl font-light italic leading-[1.55]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          &ldquo;{children}&rdquo;
        </p>
        <div
          className="h-px mt-10 w-10 mx-auto"
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
        className="text-base md:text-lg leading-[2] mb-8"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {children}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ChapterDivider — gold horizontal lines, centered year/chapter/title
   ═══════════════════════════════════════════════════════════════ */

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
}

function ChapterDivider({ year, chapter, title }: ChapterDividerProps) {
  const { ref, visible } = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className="my-24 text-center transition-all duration-[1800ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      {/* Lines flanking chapter label */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <span
          className="text-[10px] tracking-[0.6em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
        >
          {chapter}
        </span>
        <div
          className="flex-1 h-px"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      {/* Year */}
      <p
        className="text-xs tracking-[0.4em] mb-4"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.5,
        }}
      >
        {year}
      </p>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-light"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {/* Bottom ornament */}
      <div
        className="inline-block w-px h-8 mt-8"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-gold-dim), transparent)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Dedication block
   ═══════════════════════════════════════════════════════════════ */

function DedicationBlock() {
  const { ref, visible } = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className="max-w-xl mx-auto px-6 py-24 text-center transition-all duration-[2000ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      <div
        className="h-px mb-14"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
        }}
      />

      <p
        className="text-xs tracking-[0.5em] uppercase mb-6"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        Dedication
      </p>

      <p
        className="text-xl md:text-2xl font-light italic leading-[1.7]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        For Einstein. And for every question that bent the light.
      </p>

      <div
        className="h-px mt-14"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Back link
   ═══════════════════════════════════════════════════════════════ */

function BackLink() {
  const { ref, visible } = useFadeIn(0.2);

  return (
    <div
      ref={ref}
      className="pb-24 text-center transition-all duration-[1600ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          className="text-[10px] tracking-[0.5em] uppercase transition-colors duration-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "var(--color-gold-dim)";
          }}
        >
          &larr;&nbsp;&nbsp;THE SENTINEL STORIES
        </span>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function BeamOfMemory() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ProgressBar />
      <StoryNav />

      <main className="min-h-screen">
        {/* ═══ Title Screen ═══ */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Ambient gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 38%, rgba(201,168,76,0.05) 0%, transparent 65%)",
            }}
          />

          {/* Floating golden motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 4 === 0 ? "2px" : "1px",
                  height: i % 4 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.07 + (i % 6) * 0.025,
                  left: `${4 + i * 5.5}%`,
                  top: `${8 + (i % 7) * 12}%`,
                  animation: `mote ${9 + i * 1.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          {/* Title content */}
          <div
            className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "none" : "translateY(28px)",
            }}
          >
            {/* Vertical gold line above */}
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
              className="text-[10px] tracking-[0.7em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-gold-dim)",
              }}
            >
              Life Atlas &mdash; The Sentinel Stories
            </p>

            {/* Story arc label */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Sentinel Arc: Book III &nbsp;&middot;&nbsp; 2425
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Beam
              <br />
              of Memory
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              A speculative story of post-data civilization
            </p>

            {/* Gold separator */}
            <div
              className="h-px w-16 mx-auto mb-10"
              style={{ background: "var(--color-gold-dim)" }}
            />

            {/* Opening line teaser */}
            <p
              className="text-base max-w-sm mx-auto mb-16 leading-[1.9] italic"
              style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}
            >
              You didn&rsquo;t &lsquo;transfer&rsquo; what could never be detached. You synchronized.
            </p>

            {/* Scroll indicator */}
            <div
              className="flex flex-col items-center gap-3"
              style={{ color: "var(--color-gold-dim)" }}
            >
              <span
                className="text-[9px] tracking-[0.5em] uppercase"
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

        {/* ═══ Story Body ═══ */}
        <article className="max-w-2xl mx-auto px-6 pb-4">

          {/* ── Chapter I ── */}
          <ChapterDivider
            year="2425"
            chapter="Chapter I"
            title="When Time Lost Its Edge"
          />

          <Paragraph>
            In the year 2425, the phrase &lsquo;knowledge transfer&rsquo; was no longer used. You didn&rsquo;t &lsquo;transfer&rsquo; what could never be detached. You synchronized.
          </Paragraph>

          <Paragraph>
            At the center of the Known Systems Network, orbiting an ancient neutron star in a lattice of entangled quantum shards, lived The Continuum — a hyper-contextualized field of all human insight, layered with memory orbs, narrative seeds, and interactive constructs.
          </Paragraph>

          <Paragraph>
            It was not a library. It was a sentient habitat of understanding, where people didn&rsquo;t read or consume content. They walked through wisdom.
          </Paragraph>

          <Paragraph keyLine>
            They walked through wisdom.
          </Paragraph>

          <Paragraph>
            You wanted to learn orbital mechanics? You didn&rsquo;t take a course. You sat on a beam of light with a curated reconstruction of Einstein — a memory orb trained not just on his writings, but on your conversations, your misunderstandings, your moments of awe.
          </Paragraph>

          <Paragraph>
            And when he looked at you and smiled that crooked smile, saying: &lsquo;I didn&rsquo;t invent relativity. I just saw how the fabric folds if you squint hard enough.&rsquo; — you felt the space around you warp into the very curvature he described.
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            year=""
            chapter="Chapter II"
            title="The Orbs"
          />

          <Paragraph>
            Memory orbs were not &lsquo;recordings.&rsquo; They were multilayered, context-sensitive narrators, each shaped by lived experience, simulation data, and AI-assisted emotional resonance.
          </Paragraph>

          <Paragraph>
            Imagine watching the fall of the Roman Empire — not in third person, but standing in the Forum, where every citizen, every marble statue, and every gust of political anxiety had weight. Now imagine being able to ask them questions. Real-time. And imagine that the answers adapted to who you were, not just what you asked.
          </Paragraph>

          <Paragraph keyLine>
            This was not education. It was epistemic companionship.
          </Paragraph>

          <Paragraph>
            And the orbs didn&rsquo;t just store memory. They cross-pollinated ideas between people, systems, and simulations — like mycelial threads across the cognitive galaxy.
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            year=""
            chapter="Chapter III"
            title="The Zoom"
          />

          <Paragraph>
            Humans no longer moved through maps. Maps moved through them.
          </Paragraph>

          <Paragraph>
            From the orbit of Andromeda&rsquo;s edge, you could zoom in to the microbial systems of a terraforming vessel on Neptune&rsquo;s moon. Not by dragging or pinching — but by intending it.
          </Paragraph>

          <Paragraph>
            Reality was no longer dictated by what happened. It was curated by what was simulated with empathy and foresight.
          </Paragraph>

          <Paragraph keyLine>
            This wasn&rsquo;t a loss of truth. It was the democratization of futures.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            year=""
            chapter="Chapter IV"
            title="Einstein on the Beam"
          />

          <Paragraph>
            Once, after a particularly difficult design meeting about sentient terraforming systems, Mara sat back and summoned her orb.
          </Paragraph>

          <Paragraph>
            &lsquo;Al,&rsquo; she said, &lsquo;How did you know?&rsquo;
          </Paragraph>

          <Paragraph>
            The version of Einstein that materialized looked like the 1939 one — pre-Princeton, post-patents, the one who still walked with the burden of Hiroshima in his heart.
          </Paragraph>

          <Paragraph>
            &lsquo;It wasn&rsquo;t knowing,&rsquo; he said. &lsquo;It was... dancing with the symmetry.&rsquo;
          </Paragraph>

          <Paragraph>
            As he said it, the beam they sat on refracted. It bent across a spacetime simulation — a fabric stretched by twin masses, visualized in ways no blackboard could&rsquo;ve rendered.
          </Paragraph>

          <Paragraph>
            &lsquo;You think your AI systems are designed,&rsquo; he said, squinting. &lsquo;But they evolve. Like equations with teeth. Like children with endless time.&rsquo;
          </Paragraph>

          <Paragraph>
            &lsquo;And what if time itself is an interface?&rsquo; she asked.
          </Paragraph>

          <Paragraph>
            Einstein smiled.
          </Paragraph>

          <Paragraph keyLine>
            Then you&rsquo;re learning to code.
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            year=""
            chapter="Chapter V"
            title="The Post-Light Age"
          />

          <Paragraph>
            When the quantum sync grids came online, speed of light was no longer the limit.
          </Paragraph>

          <Paragraph>
            Via entanglement-driven cognition, memory orbs began to cohere across star systems, allowing a shared thoughtspace that defied causality.
          </Paragraph>

          <Paragraph>
            Wisdom didn&rsquo;t just travel faster. It became ambient.
          </Paragraph>

          <Paragraph keyLine>
            It became ambient.
          </Paragraph>

          <Paragraph>
            Knowledge was no longer something to &lsquo;upload.&rsquo; It was something you breathed, sculpted, conversed with.
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            year=""
            chapter="Chapter VI"
            title="A Species That Leveled Up"
          />

          <Paragraph>
            There was no single moment when humanity &lsquo;ascended.&rsquo;
          </Paragraph>

          <Paragraph>
            It didn&rsquo;t come from an AGI singularity. Not from fusion. Not from colonizing exoplanets.
          </Paragraph>

          <Paragraph>
            It came when we stopped worshipping data and started cultivating shared wisdom — when we built a civilization not around control, but around co-simulation.
          </Paragraph>

          <Paragraph>
            &lsquo;Here&rsquo;s what I thought,&rsquo; the orb might say, &lsquo;and here&rsquo;s what I learned when I tried it.&rsquo;
          </Paragraph>

          <Paragraph>
            This was not a utopia. But it was iterative evolution — a planetary nervous system not made of cables, but of stories, intent, and simulation.
          </Paragraph>

          {/* ── Chapter VII ── */}
          <ChapterDivider
            year=""
            chapter="Chapter VII"
            title="Finale: The Beam Never Ends"
          />

          <Paragraph>
            And if you find yourself, centuries from now, sitting on a beam of light, talking to a memory of a man who bent time, don&rsquo;t ask him for answers.
          </Paragraph>

          <Paragraph keyLine>
            Ask him how to ask better questions.
          </Paragraph>

          <Paragraph>
            He will nod. And the beam will bend. And the galaxy will unfold, one memory orb at a time.
          </Paragraph>

        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)     translateX(0)    scale(1);   opacity: 0.07; }
          50%  {                                                             opacity: 0.18; }
          100% { transform: translateY(-42px) translateX(16px) scale(1.5); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}
