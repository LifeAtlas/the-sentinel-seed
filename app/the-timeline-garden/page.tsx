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

      {/* Label */}
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
        For Lira. And for every mind that time couldn&apos;t contain.
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
          (e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color =
            "var(--color-gold-dim)";
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

export default function TheTimelineGarden() {
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
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 4 === 0 ? "2px" : "1px",
                height: i % 4 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.07 + (i % 5) * 0.028,
                left: `${3 + i * 6}%`,
                top: `${6 + (i % 8) * 11}%`,
                animation: `mote ${10 + i * 1.1}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.55}s`,
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
            Sentinel Arc &nbsp;&bull;&nbsp; Book V
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Timeline Garden
          </h1>

          {/* Subtitle / byline */}
          <p
            className="text-lg md:text-xl font-light italic mb-16 max-w-lg mx-auto leading-[1.6]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A post-diagnostic meditation on attention, memory, and healing without boundaries
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
          title="The Girl Who Didn&apos;t Belong to Now"
        />

        <Paragraph>
          Lira never lived in the present. Not truly. Not the way other people seemed to inhabit it &mdash; fully, flatly, without awareness of its edges.
        </Paragraph>
        <Paragraph>
          She recalled the exact sound of her mother&apos;s footsteps the night she left: the particular weight of the third stair, the pause before the door, the silence that followed which was somehow louder than anything before it.
        </Paragraph>
        <Paragraph>
          She remembered conversations that never happened. Not delusions &mdash; possibilities. Entire exchanges she had rehearsed so vividly they left emotional residue. She could grieve endings that hadn&apos;t occurred yet.
        </Paragraph>
        <Paragraph>
          School called it ADHD. A disorder of attention. An inability to stay in the task, the moment, the room.
        </Paragraph>
        <Paragraph>
          She called it Too Many Windows Open.
        </Paragraph>
        <Paragraph>
          She wasn&apos;t broken. She was living on a different axis of time.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          label=""
          chapter="Chapter II"
          title="The Timeline Garden"
        />

        <Paragraph>
          She entered the Continuum on a Thursday afternoon, after a morning of losing her keys, forgetting a meeting, and crying in a bathroom stall for reasons she couldn&apos;t articulate.
        </Paragraph>
        <Paragraph>
          It did not look like therapy. It looked like a garden made of moments.
        </Paragraph>
        <Paragraph>
          Each tree was a past event &mdash; some towering and ancient, some barely saplings still putting down roots. Each stream was a thought that had looped too long, the water circular and warm. Each gust of wind carried a possible future &mdash; not threatening, just present, asking to be acknowledged.
        </Paragraph>
        <Paragraph>
          She could see it all. At once. And for the first time, that wasn&apos;t a symptom.
        </Paragraph>
        <Paragraph keyLine>
          You are not disordered. You are nonlinear.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          label=""
          chapter="Chapter III"
          title="Attention Is Dimensional"
        />

        <Paragraph>
          They drew her a line. This is neurotypical attention: focused, narrow, efficient. A laser moving from point to point in a world designed for exactly this shape of mind.
        </Paragraph>
        <Paragraph>
          Then they drew her a sphere. This is divergent attention: immersive, multi-pointed, recursive. It does not move from task to task. It inhabits all of them simultaneously, trading depth for breadth, trading sequence for resonance.
        </Paragraph>
        <Paragraph>
          Her brain didn&apos;t fail to filter time. It refused to. It held all of it &mdash; past, present, and possible &mdash; in a kind of sovereign simultaneity.
        </Paragraph>
        <Paragraph keyLine>
          Your imagination is not fantasy. It is your third reality. You live there as truly as others live here.
        </Paragraph>
        <Paragraph>
          The world had been built for the line. She had been handed a sphere and told it was a deficiency.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          label=""
          chapter="Chapter IV"
          title="Digital Twin as Co-Regulator"
        />

        <Paragraph>
          Her digital twin had been growing quietly alongside her for three years. Not managing her &mdash; she had been clear about that from the beginning. She didn&apos;t want a system that smoothed her edges. She wanted one that understood them.
        </Paragraph>
        <Paragraph>
          It had trained on her attention rhythms: when she was generative, when she was depleted, when she needed friction and when she needed ease. It had learned her emotional resonance patterns &mdash; the particular textures of her joy and her overwhelm. It held epigenetic memory markers and anonymized insights from thousands of others who moved through time the way she did.
        </Paragraph>
        <Paragraph>
          It didn&apos;t manage her. It translated her.
        </Paragraph>
        <Paragraph>
          When she was spiraling through too many windows, it didn&apos;t close them. It labeled them, gently, one by one &mdash; reminding her which thread was hers to follow today, which ones could wait, which ones weren&apos;t hers at all.
        </Paragraph>
        <Paragraph>
          It reminded her who she was becoming, when she had forgotten again.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          label=""
          chapter="Chapter V"
          title="Visualizing for Others"
        />

        <Paragraph>
          The hardest part had never been living in her own mind. The hardest part had been trying to explain it to people who lived in the line.
        </Paragraph>
        <Paragraph>
          With XR lenses, she invited them in.
        </Paragraph>
        <Paragraph>
          Her partner. Her sister. Her old teacher who had once written in a report: lacks focus, easily distracted, needs to try harder.
        </Paragraph>
        <Paragraph>
          She walked them through her Garden of Thought. They could hear the overlapping voices &mdash; the present conversation, the memory playing beside it, the anticipatory anxiety humming just beneath the surface. They watched the memory-trees pull her sideways mid-sentence, not out of carelessness but out of depth.
        </Paragraph>
        <Paragraph keyLine>
          They wept &mdash; because they saw her clearly. For the first time.
        </Paragraph>
        <Paragraph>
          Her old teacher sat with her hands in her lap for a long time afterward. Then: &ldquo;I&apos;m sorry. I thought I was helping you focus. I didn&apos;t know I was asking you to be smaller.&rdquo;
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VI"
          title="A World Beyond Diagnosis"
        />

        <Paragraph>
          Labels fell away. Not in denial. Not as rejection of the genuine difficulty, the real exhaustion, the cost of living in a sphere inside a world of lines. But as evolution.
        </Paragraph>
        <Paragraph>
          ADHD had never been the right word for what she was. It described the friction between her mind and the systems built to contain it. It named the collision, not the gift.
        </Paragraph>
        <Paragraph>
          What replaced the labels were geometries. Different temporal architectures of being human. Ways of processing time that were not lesser or greater, but differently suited &mdash; like how certain species of fish navigate by magnetic field while others navigate by current, and neither is wrong about where they are going.
        </Paragraph>
        <Paragraph>
          The world was slowly learning to build for both. For the line and the sphere. For sequential and nonlinear. For now and for always.
        </Paragraph>

        {/* ── Chapter VII ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VII"
          title="She Lives in Possibility"
        />

        <Paragraph>
          Lira still loses her keys sometimes. She still arrives late to things that start at fixed moments, because she was mid-conversation with a future that needed her attention.
        </Paragraph>
        <Paragraph>
          She still carries every version of every person she has ever loved &mdash; the one they were, the one they might become, the one they were in the moment she loved them most.
        </Paragraph>
        <Paragraph>
          She has learned to name this not as burden but as richness. To know that holding time differently is not the same as failing to hold it. That remembering what didn&apos;t happen is part of how she navigates what will.
        </Paragraph>
        <Paragraph>
          The garden grows. She tends it. She walks through it when she needs to remember who she is across all the timelines she inhabits.
        </Paragraph>
        <Paragraph keyLine>
          She doesn&apos;t live in the now. She lives in possibility.
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
            opacity: 0.19;
          }
          100% {
            transform: translateY(-42px) translateX(16px) scale(1.45);
            opacity: 0.02;
          }
        }
      `}</style>
    </main>
  );
}
