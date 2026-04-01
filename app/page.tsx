"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Story collection data
   ═══════════════════════════════════════════════════════════════ */

interface Story {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  excerpt: string;
  status: "live" | "coming";
}

const stories: Story[] = [
  {
    slug: "the-sentinel-seed",
    number: "I",
    title: "The Sentinel Seed",
    subtitle: "The First User and the Final Platform",
    year: "2026 \u2013 2097",
    excerpt: "The basil was dying again. Nicolas Waern stood in his apartment in Gothenburg, 2:47 AM, the blue glow of four monitors carving his silhouette against the window. Rain streaked the glass in the way it only does in Sweden \u2014 a patient, permanent rain, as if the sky had decided long ago to never fully stop.",
    status: "live",
  },
  {
    slug: "before-the-code",
    number: "II",
    title: "Before the Code",
    subtitle: "A Story of Flesh, Failure, and Forgotten Time",
    year: "Near Future",
    excerpt: "The astronaut was dead before he hit the floor. Not literally. But for 11 minutes, his organs had already begun to fail. The body doesn\u2019t signal failure like a machine. There\u2019s no red light. Just a flicker of pulse variability, a tremor in cytokine balance, a temperature shift imperceptible to human sense but obvious to an algorithm \u2014 if only it had been there.",
    status: "live",
  },
  {
    slug: "the-second-self",
    number: "III",
    title: "The Second Self",
    subtitle: "The Doctrine of the Digital Twin",
    year: "Europa Base",
    excerpt: "She was trained to recognize war. Explosions, strategy, tactical signals. But when it came, it wasn\u2019t a gunshot. It wasn\u2019t even loud. It started with a yawn. Kessler noted it \u2014 the kind of deep fatigue that settled in behind the eyes, just after morning diagnostics. She downplayed it. She\u2019d been on Europa Base for 91 sols.",
    status: "live",
  },
  {
    slug: "the-countdown-gene",
    number: "IV",
    title: "The Countdown Gene",
    subtitle: "Sentinel Arc \u2014 Book IX",
    year: "Post-Human Era",
    excerpt: "It didn\u2019t come with a mushroom cloud. No sirens. No parades. It arrived like all revolutions do: inside a cleanroom, under a pseudonym, in the dead zone between regulation and ambition. For 72 hours, one cell outperformed four billion years of genetic negotiation. By 9.5%.",
    status: "live",
  },
  {
    slug: "the-architect-of-hooves",
    number: "V",
    title: "The Architect of Hooves",
    subtitle: "The First Horse That Knew Itself",
    year: "2027 \u2013 2061",
    excerpt: "The mare moved wrong. Not wrong in a way anyone could see \u2014 not a limp, not a hesitation, not anything a groom would notice or a vet would flag. Wrong in a way that only showed up in the numbers, in the seventeen sensors embedded in the sand of the Mulawa arena, in the pressure map that bloomed like a heat signature across the screen.",
    status: "live",
  },
  {
    slug: "the-last-silo",
    number: "VI",
    title: "The Last Silo",
    subtitle: "The Day the Walls Came Down",
    year: "2028 \u2013 2084",
    excerpt: "Ingrid Eriksson was 83 years old and she had seventeen doctors. Not one of them knew about the others. Not really. They knew in the way that bureaucracies know things \u2014 in referral letters filed and forgotten, in discharge summaries that arrived three weeks late, in medication lists that contradicted each other across three different systems.",
    status: "live",
  },
];

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
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -20px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ═══════════════════════════════════════════════════════════════
   Story Card
   ═══════════════════════════════════════════════════════════════ */

function StoryCard({ story, index }: { story: Story; index: number }) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="transition-all duration-[1500ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      <a
        href={story.status === "live" ? `/${story.slug}` : undefined}
        className={`block group ${story.status === "live" ? "cursor-pointer" : "cursor-default"}`}
      >
        <div
          className="relative border rounded-lg p-8 md:p-10 transition-all duration-500"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-surface)",
          }}
          onMouseEnter={(e) => {
            if (story.status === "live") {
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
              e.currentTarget.style.boxShadow = "0 0 60px rgba(201,168,76,0.05)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Number & Year */}
          <div className="flex items-center justify-between mb-6">
            <span
              className="text-xs tracking-[0.5em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
            >
              Story {story.number}
            </span>
            <span
              className="text-xs tracking-[0.3em]"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
            >
              {story.year}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-light mb-2 transition-colors duration-500"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: story.status === "live" ? "var(--color-gold)" : "var(--color-text-secondary)",
            }}
          >
            {story.title}
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg italic mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            {story.subtitle}
          </p>

          {/* Gold separator */}
          <div
            className="h-px mb-8 w-16"
            style={{ background: "var(--color-gold-dim)" }}
          />

          {/* Excerpt */}
          <p
            className="text-base leading-[1.9] mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {story.excerpt}
          </p>

          {/* Read link */}
          {story.status === "live" ? (
            <span
              className="text-sm tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-[var(--color-gold)]"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
            >
              Read the story \u2192
            </span>
          ) : (
            <span
              className="text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.4 }}
            >
              Coming soon
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Home Page
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.1);
  const { ref: introRef, visible: introVisible } = useFadeIn();

  return (
    <main className="min-h-screen">
      {/* ═══ Hero ═══ */}
      <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.03) 0%, transparent 60%)" }}
        />

        {/* Floating motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? "2px" : "1px",
                height: i % 3 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.1 + (i % 4) * 0.04,
                left: `${8 + i * 9}%`,
                top: `${12 + (i % 5) * 16}%`,
                animation: `mote ${7 + i * 1.8}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.9}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={titleRef}
          className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "none" : "translateY(24px)" }}
        >
          <div className="mb-10">
            <div
              className="inline-block w-px h-16 mb-6"
              style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }}
            />
          </div>

          <p
            className="text-xs tracking-[0.6em] uppercase mb-6"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          >
            Life Atlas
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
          >
            The Sentinel Stories
          </h1>

          <p
            className="text-lg md:text-xl font-light italic max-w-lg mx-auto mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
          >
            Fictions from the future we are building.
          </p>

          <p
            className="text-sm max-w-md mx-auto mb-16"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5, lineHeight: 1.7 }}
          >
            Each story begins in the present and ends in a world where
            the relationship between people and their environment has been healed.
          </p>

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
            <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
          </div>
        </div>
      </section>

      {/* ═══ Introduction ═══ */}
      <section className="max-w-xl mx-auto px-6 py-20">
        <div
          ref={introRef}
          className="transition-all duration-[1500ms] ease-out"
          style={{ opacity: introVisible ? 1 : 0, transform: introVisible ? "none" : "translateY(20px)" }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
          </div>
          <p className="text-base leading-[2] mb-6" style={{ color: "var(--color-text-secondary)" }}>
            These are not predictions. They are directions.
          </p>
          <p className="text-base leading-[2] mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Life Atlas builds the operating system for the relationship between people
            and their environment. The technology is real. The architecture exists. The
            advisory board is assembled. What follows are stories about where it leads
            \u2014 told through the people who use it first.
          </p>
          <p
            className="text-xl italic"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold-dim)" }}
          >
            A founder and his basil. An astronaut and her twin. A cell that refused to die.
            A horse trainer and her mare. A grandmother and her seventeen doctors.
            Six stories. One platform. One future.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
          </div>
        </div>
      </section>

      {/* ═══ Story Cards ═══ */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {stories.map((story, i) => (
            <StoryCard key={story.slug} story={story} index={i} />
          ))}
        </div>
      </section>

      {/* ═══ Colophon ═══ */}
      <section className="max-w-xl mx-auto px-6 py-20">
        <div className="text-center">
          <div
            className="inline-block w-px h-10 mb-8"
            style={{ background: "linear-gradient(to bottom, var(--color-gold-dim), transparent)" }}
          />
          <p
            className="text-sm mb-2"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}
          >
            Written for Life Atlas by the people building it.
          </p>
          <p
            className="text-sm mb-8"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.3 }}
          >
            Gothenburg, Sweden \u2014 2026
          </p>
          <a
            href="https://lifeatlas.github.io/investor-portal/"
            className="inline-block px-8 py-3 rounded border text-sm transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              borderColor: "var(--color-gold-dim)",
              color: "var(--color-gold-dim)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.color = "var(--color-gold)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold-dim)";
              e.currentTarget.style.color = "var(--color-gold-dim)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            LIFE ATLAS \u2014 INVESTOR PORTAL
          </a>
        </div>
      </section>

      <style jsx global>{`
        @keyframes mote {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { transform: translateY(-35px) translateX(12px) scale(1.3); opacity: 0.03; }
        }
      `}</style>
    </main>
  );
}
