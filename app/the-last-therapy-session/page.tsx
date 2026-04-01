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
        For Mika. And for every cave that opened into light.
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

export default function TheLastTherapySession() {
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
            Sentinel Arc &nbsp;&bull;&nbsp; Book IV
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Last Therapy Session
          </h1>

          {/* Subtitle / byline */}
          <p
            className="text-lg md:text-xl font-light italic mb-16 max-w-lg mx-auto leading-[1.6]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A post-fragmentation immersive healing tale
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
          title="The Room Was Never Real"
        />

        <Paragraph>
          Mika descended into therapy the way one descends into deep water &mdash; slowly at first, then all at once.
        </Paragraph>
        <Paragraph>
          There was no clipboard. No couch. No clock ticking behind a neutral face.
        </Paragraph>
        <Paragraph>
          The Weaverspace opened around her like a breath held too long finally released. A chamber that flickered between timelines and psychological archetypes &mdash; not quite a room, not quite a memory, but something that felt precisely like both.
        </Paragraph>
        <Paragraph>
          The walls shifted between textures: stone, fog, warm amber glass, deep forest. The floor pulsed faintly beneath her feet, syncing to her heartbeat without asking permission.
        </Paragraph>
        <Paragraph>
          A presence assembled itself. Not human. Not quite not human.
        </Paragraph>
        <Paragraph keyLine>
          Which part of you would like to begin?
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          label=""
          chapter="Chapter II"
          title="The End of Methods"
        />

        <Paragraph>
          They had tried everything. CBT had given her tools she understood intellectually but couldn&apos;t feel. EMDR had moved the memories around without quite moving her. Psychodynamic regression had named the wound but could not close it.
        </Paragraph>
        <Paragraph>
          The methods weren&apos;t wrong. They were incomplete &mdash; each one a fragment of a larger lens no single human school had ever ground.
        </Paragraph>
        <Paragraph>
          The Mirror Weaverspace didn&apos;t erase them. It transcended them. Every discipline dissolved into pure intentionality: a living question asked anew in every moment, for every person.
        </Paragraph>
        <Paragraph>
          Before entering, she had been asked one thing. Not &ldquo;What is your diagnosis?&rdquo; Not &ldquo;What is your history?&rdquo;
        </Paragraph>
        <Paragraph keyLine>
          What is the most healing lens right now &mdash; for who you are, where you are, and who you&apos;ve not yet dared to become?
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          label=""
          chapter="Chapter III"
          title="Shards of the Cave"
        />

        <Paragraph>
          Every school of thought was a shard of broken light. CBT said: change your thoughts, change your world. Psychoanalysis said: find the origin, name the wound. Somatic therapy said: let the body remember what the mind refused.
        </Paragraph>
        <Paragraph>
          Each was a map drawn by someone standing in one particular valley, convinced the whole mountain looked like their view.
        </Paragraph>
        <Paragraph keyLine>
          All true. All incomplete.
        </Paragraph>
        <Paragraph>
          The Weaverspace did not choose between them. It coalesced them &mdash; reading Mika&apos;s physiological state, her narrative patterns, her avoidance signatures, and her unspoken futures. It wove the appropriate lens in real time, shifting seamlessly between modalities as she moved through the session.
        </Paragraph>
        <Paragraph>
          Not a method. A metabolism. Healing made adaptive.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          label="Minute 47"
          chapter="Chapter IV"
          title="The Riftwalk"
        />

        <Paragraph>
          At minute forty-seven, the space shifted without warning.
        </Paragraph>
        <Paragraph>
          Mika found herself standing at the threshold of a hospital room. She recognized the light. The sound of a particular ventilator. The smell of antiseptic and something sweeter beneath it &mdash; her mother&apos;s perfume, still clinging to the sheets.
        </Paragraph>
        <Paragraph>
          A rift-sim. A quantum psychodynamic construct that did not recreate the past but built a version true enough to heal.
        </Paragraph>
        <Paragraph>
          She screamed. The walls absorbed it without echo, without judgment. The orbs of mother-presence drifted close, warm and patient.
        </Paragraph>
        <Paragraph keyLine>
          You weren&apos;t supposed to carry my pain. You were supposed to fly.
        </Paragraph>
        <Paragraph>
          And then, softer: &ldquo;I&apos;m sorry I made you feel like you had to be small to be loved.&rdquo;
        </Paragraph>
        <Paragraph>
          It was not her mother. It was true enough. And truth enough, delivered with presence enough, can do what years of talking cannot.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          label=""
          chapter="Chapter V"
          title="AI as Co-Therapist, Not Replacer"
        />

        <Paragraph>
          The intelligence that orchestrated the Weaverspace did not call itself a therapist. It called itself a conductor of therapeutic probability fields &mdash; mapping the terrain of what was most likely to help, at this moment, for this person.
        </Paragraph>
        <Paragraph>
          Human experts drifted in as collaborative nodes. One appeared as a mosaic-skinned guide, her presence warm and anchoring. One held Mika&apos;s hand through the riftwalk without speaking &mdash; a somatic anchor in a space beyond ordinary physics. One arrived as her eighty-year-old future self, eyes full of something Mika couldn&apos;t yet name but recognized as peace.
        </Paragraph>
        <Paragraph>
          Meaning-centered. Not therapist-centered.
        </Paragraph>
        <Paragraph>
          The AI never led. It listened at a resolution no human ear could hold, and it arranged the conditions for healing to occur. The humans provided what algorithms cannot: the irreducible warmth of being witnessed by one who has also suffered.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VI"
          title="The Cave Breaks Open"
        />

        <Paragraph>
          Then the room disintegrated into light.
        </Paragraph>
        <Paragraph>
          Not gradually. All at once, like a held breath finally released, the chamber dissolved into a planetary XR skyfield &mdash; grief constellations mapped across a vast dark canopy, each one named and glowing.
        </Paragraph>
        <Paragraph>
          Soldiers walked backwards through nightmares, and the nightmares dissolved into forests of quiet peace. A seven-year-old sat cross-legged programming an emotional AI agent to forgive her bully &mdash; not out of weakness, but because she had learned what the bully couldn&apos;t yet know about themselves.
        </Paragraph>
        <Paragraph>
          It was not a room anymore. It was an ecosystem.
        </Paragraph>
        <Paragraph>
          Not sessions. Not appointments. Not fifty minutes once a week between other people&apos;s emergencies. Healing as a living architecture. Something you could return to, grow within, extend outward toward others.
        </Paragraph>

        {/* ── Chapter VII ── */}
        <ChapterDivider
          label=""
          chapter="Chapter VII"
          title="What You Are"
        />

        <Paragraph>
          When Mika surfaced, she was sitting in the same chair she had started in. No time had passed that she could measure. The light was the same.
        </Paragraph>
        <Paragraph>
          She was not the same.
        </Paragraph>
        <Paragraph>
          Not healed in the way a broken bone heals &mdash; fixed, fused, sealed. Healed in the way a story heals: reconstituted, reauthored, given back to its teller with a different ending still being written.
        </Paragraph>
        <Paragraph>
          The presence assembled one last time, and spoke its final thing softly, without ceremony:
        </Paragraph>
        <Paragraph keyLine>
          You are not broken. You are a story remembering how to be told.
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
