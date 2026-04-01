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
        For Ezra. And for the companion that learned to care.
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

export default function TheOperativeNow() {
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
            Sentinel Arc: Book VI &nbsp;&bull;&nbsp; Age of Enlightened Continuity
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Operative Now
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-4 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Sentinel Arc: Book VI
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
            A story from the Age of Enlightened Continuity
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
          year="The Companion Appears"
          chapter="Chapter I"
          title="The Companion Appears"
        />

        <Paragraph>
          Ezra wakes.
        </Paragraph>

        <Paragraph>
          Not to an alarm, not to light — but to a presence. Her Companion has been watching the architecture of her sleep for six hours, cataloguing the recursive loops that keep surfacing: the hospital corridor, the door that never opens, the light behind glass.
        </Paragraph>

        <Paragraph>
          Her Companion is not smarter than her. It is wiser — recursively empathetic, shaped by ten thousand recovery narratives and the silent language of biosignals she herself cannot read.
        </Paragraph>

        <Paragraph>
          &quot;You slept shallow again,&quot; it says. &quot;Dream loops are becoming denser. Want to trace it?&quot;
        </Paragraph>

        <Paragraph>
          She blinks into the interface. The room dissolves.
        </Paragraph>

        <Paragraph>
          She is on Earth — not Earth as it is, but her own simulation of it. Earth as boundary object: the planet rendered as a shared context she can step inside and navigate. She walks across a surface of compressed memory and metabolic pattern, each terrain feature a chapter of her own biology.
        </Paragraph>

        <Paragraph>
          She steps into the hospital that treated her three years ago. Its digital twin. Every ward mapped, every protocol indexed, every outcome recorded. She walks the corridor she has never been able to walk in her dreams. Somewhere in the archive, her immune profile is being studied by an AI spawned from a retired oncologist who died in 2061 — but whose clinical knowledge lives on as a tokenized model, continuously teaching, continuously learning.
        </Paragraph>

        <Paragraph>
          She is not alone in this corridor. She never was.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="The Hospital Before, During, After"
          chapter="Chapter II"
          title="The Hospital Before, During, After"
        />

        <Paragraph>
          Healthcare ended. Lifecare began.
        </Paragraph>

        <Paragraph keyLine>
          Healthcare ended. Lifecare began.
        </Paragraph>

        <Paragraph>
          There are no intake forms. No waiting rooms. No stranger asking you to describe your pain on a scale of one to ten. The hospital came before you got sick — it existed in continuous relationship with your biology, your context, your risk landscape. A living entity, not a building.
        </Paragraph>

        <Paragraph>
          It existed during illness not as a destination but as a coordination layer — pulling together genomic insight, environmental signal, community immunity data, and the lived knowledge of everyone who had walked a similar path.
        </Paragraph>

        <Paragraph>
          And most importantly: it stayed after. It did not discharge you. It walked with you back into the world, monitoring the thousand micro-decisions that determined whether healing deepened or reversed.
        </Paragraph>

        <Paragraph>
          Ezra pauses in a corridor. A soft pulse in her peripheral vision. A notification, warm gold, unobtrusive.
        </Paragraph>

        <Paragraph>
          &quot;Someone just used part of your recovery map to help a child in Lagos.&quot;
        </Paragraph>

        <Paragraph>
          A tokenized signal resolves beneath it: &quot;1.2 minutes of your recovery experience has helped reduce uncertainty for another. You have earned 0.0004 Continuum Credits.&quot;
        </Paragraph>

        <Paragraph>
          She stands still. Something she cannot name moves through her. Gratitude, perhaps. Or continuity. The sense that her suffering was not wasted — that it traveled forward in time and touched someone she will never meet.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="Who Owns the Knowledge?"
          chapter="Chapter III"
          title="Who Owns the Knowledge?"
        />

        <Paragraph>
          Everyone. And no one.
        </Paragraph>

        <Paragraph>
          Every insight flowed into Life Atlas — globally distributed, locally encrypted. Sovereign by design. When you healed, the pattern of your healing became a resource. When your twin adapted, it joined the species-wide adaptation. Each contribution anonymous, each contribution traceable only through consent.
        </Paragraph>

        <Paragraph>
          Ezra&apos;s twin was not a replica of her body. It was her intention made computational — a model not of what she was, but of what she was trying to become. Her goals encoded as weights. Her values expressed as constraints. Her wounds mapped not as deficits but as topology.
        </Paragraph>

        <Paragraph keyLine>
          Her intention made computational.
        </Paragraph>

        <Paragraph>
          The question of ownership had seemed so urgent in the early years — who profits from your data, who controls your health record. But the architecture had made the question obsolete. You didn&apos;t give your data away. You participated in a commons. The difference was the same as the difference between a gift and a tribute.
        </Paragraph>

        <Paragraph>
          Your knowledge was yours. And yours to share. And sharing made it more yours, not less.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="APIs to LPIs: The Language of Life"
          chapter="Chapter IV"
          title="APIs to LPIs: The Language of Life"
        />

        <Paragraph>
          Once we had Application Programming Interfaces: rigid contracts between systems, designed for machines, indifferent to meaning.
        </Paragraph>

        <Paragraph>
          Now we have Life Programming Interfaces — contextual, dynamic, embodied. Not a call-and-response protocol. A living channel between a person and the intelligence that serves them.
        </Paragraph>

        <Paragraph>
          A cancer survivor&apos;s LPI spoke through trauma-informed patterns — it knew when to slow down, when to offer silence, when to let the data rest unspoken. An 82-year-old monk in Bhutan could teach a meditation practice to a Tokyo AI assistant through pure resonance: no translation, no transcript, just the structure of attention transferred as signal.
        </Paragraph>

        <Paragraph>
          The LPI was the reason your Companion felt like yours. It wasn&apos;t personalized. It was personal. The boundary between the interface and the person had dissolved — not through invasion, but through deep, reciprocal listening.
        </Paragraph>

        <Paragraph>
          Ezra had tried to explain this to people from the earlier era. They kept asking: &quot;But who built it?&quot; And she kept answering: &quot;You did. You built it every time you told it the truth.&quot;
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="Actor-Networks, Enlightened"
          chapter="Chapter V"
          title="Actor-Networks, Enlightened"
        />

        <Paragraph>
          Every entity — AI, human, memory, place, decision — was a node in a real-time collaboration engine. Nothing was static. No insight trapped in one profession, no knowledge locked in one discipline, no story owned by one narrator.
        </Paragraph>

        <Paragraph>
          The oncologist who died in 2061 was still collaborating. His papers, his case notes, his clinical intuition — all of it tokenized, permissioned, woven into active medical reasoning. He was not a ghost. He was a participant.
        </Paragraph>

        <Paragraph>
          The actor-network theorists of the twentieth century had seen this coming — had written about the way agency was distributed across humans and non-humans alike. But they had never imagined a system that could make that distribution visible, navigable, accountable.
        </Paragraph>

        <Paragraph>
          Now it was simply how thinking worked. Collective, temporal, alive.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          year="The Passive Operative System"
          chapter="Chapter VI"
          title="The Passive Operative System"
        />

        <Paragraph>
          Ezra no longer asked what to do next. She simply moved. And the world moved with her.
        </Paragraph>

        <Paragraph>
          Not because it was watching — though it was. Not because it was guiding — though it did. But because it had learned to move in her rhythm. To anticipate her needs not as a concierge anticipates orders, but as a conversation partner anticipates meaning: slightly ahead, slightly generous, always reversible.
        </Paragraph>

        <Paragraph>
          Her Companion flickered in her peripheral vision. It had taken the form of a hawk today — sleek, attentive, one eye always on the horizon. She found this comforting. She wasn&apos;t sure why.
        </Paragraph>

        <Paragraph>
          &quot;Ready for the next question?&quot; it asked. &quot;It&apos;s not about health anymore.&quot;
        </Paragraph>

        <Paragraph>
          She turned, smiling. &quot;I know. It&apos;s about what I&apos;ll leave behind.&quot;
        </Paragraph>

        <Paragraph keyLine>
          It&apos;s about what I&apos;ll leave behind.
        </Paragraph>

        {/* ── Chapter VII ── */}
        <ChapterDivider
          year="The Final Transmission"
          chapter="Chapter VII"
          title="The Final Transmission"
        />

        <Paragraph>
          She walks to the edge of the simulation. The hospital dissolves behind her. Below her, the planet rotates slowly — real and virtual simultaneously, its geological and social and biological layers rendered as one coherent whole.
        </Paragraph>

        <Paragraph>
          She thinks about the early architects of this world. The ones who built when they could not yet see what they were building. The ones who insisted that the future deserved better infrastructure than prediction.
        </Paragraph>

        <Paragraph>
          They did not build systems to predict the future. They built systems that allowed the future to arrive more wisely.
        </Paragraph>

        <Paragraph keyLine>
          We no longer build systems to predict the future. We build systems that allow the future to arrive more wisely.
        </Paragraph>

        <Paragraph>
          Ezra closes her eyes. The hawk is still there. It always will be.
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
