"use client";

import Link from "next/link";
import StoryNav from "../components/StoryNav";
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
   Paragraph — keyLine mode = gold italic pull-quote
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
   ChapterDivider — gold lines, centered year / chapter / title
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

      <h2
        className="text-3xl md:text-4xl font-light"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

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
   Principles list — numbered, gold accent
   ═══════════════════════════════════════════════════════════════ */

interface PrincipleProps {
  number: number;
  title: string;
  body: string;
  delay?: number;
}

function Principle({ number, title, body, delay = 0 }: PrincipleProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="flex gap-6 mb-10 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex-shrink-0 mt-1">
        <span
          className="text-xs tracking-[0.3em]"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
        >
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <div>
        <p
          className="text-base md:text-lg font-light mb-1"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          {title}
        </p>
        <p
          className="text-sm md:text-base leading-[1.9]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DedicationBlock
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
        For every body that was never given a twin.
        <br />
        This is for you.
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
   Tags
   ═══════════════════════════════════════════════════════════════ */

const TAGS = [
  "Manifesto",
  "Sovereignty",
  "LPI",
  "LQM",
  "M4",
  "Digital Twin",
  "Colombia",
  "Sweden",
  "Epigenetics",
  "Seven Principles",
  "Life Atlas",
];

function TagRow() {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto px-6 pb-10 flex flex-wrap justify-center gap-2 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      {TAGS.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full border text-[9px] tracking-[0.1em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderColor: "var(--color-gold-dim)",
            color: "var(--color-text-secondary)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BackLink
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
      <Link
        href="/"
        className="inline-block"
        style={{ textDecoration: "none" }}
      >
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
          &larr;&nbsp;&nbsp;The Sentinel Stories
        </span>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheSovereignBody() {
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
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 42%, rgba(201,168,76,0.04) 0%, transparent 58%)",
            }}
          />

          {/* Floating golden motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  height: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.05 + (i % 5) * 0.028,
                  left: `${6 + i * 5.8}%`,
                  top: `${12 + (i % 8) * 11}%`,
                  animation: `mote ${8 + i * 1.3}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.65}s`,
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

            {/* Byline */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Nicolas Waern &nbsp;&middot;&nbsp; March 2026, Gothenburg
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Sovereign Body
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              A Manifesto
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
              Healthcare is a fire department with no smoke detectors.
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

          {/* ── Section I ── */}
          <ChapterDivider
            year="The System"
            chapter="Section I"
            title="The Diagnosis"
          />

          <Paragraph>
            Healthcare is a fire department with no smoke detectors.
          </Paragraph>

          <Paragraph>
            The system waits for disease. It responds to symptoms. It treats organs in isolation, prescribes drugs tested on male averages, stores your data in silos you cannot access and cannot export and cannot own. The diseases that destroy us now — the ones that fill the hospitals, consume the budgets, end the careers, shorten the lives — are slow. Diabetes builds for a decade before it announces itself. Heart disease accumulates silently through twenty years of small decisions and uninspected inflammation. Cancer begins as a cellular whisper, years before the scream.
          </Paragraph>

          <Paragraph>
            By the time the fire department arrives, the house has been burning for years. The department is expert. The equipment is sophisticated. The protocols are refined by decades of practice. None of this matters if the fire was avoidable — if the smoke was detectable at the point when a single conversation, a single intervention, a single change in environment could have stopped it.
          </Paragraph>

          <Paragraph>
            A quarter of all healthcare spending is waste. Not fraud, not negligence — just the structural inefficiency of a system designed to react, applied to diseases that require prevention. The waste is not a failure of the people inside the system. It is a failure of the system's architecture. It was designed for a different era of disease, and it has not yet redesigned itself.
          </Paragraph>

          <Paragraph keyLine>
            The system is not broken. It is obsolete.
          </Paragraph>

          {/* ── Section II ── */}
          <ChapterDivider
            year="The Conviction"
            chapter="Section II"
            title="Your Body Is a Complex System"
          />

          <Paragraph>
            Your body is the most complex system that has ever existed. Treat it like one.
          </Paragraph>

          <Paragraph>
            Twenty-five years building digital twins of buildings, cities, factories, supply chains. Twenty-five years of the same lesson, learned in every domain: you cannot manage a complex system with snapshots. You need continuous simulation. Longitudinal data. Models that understand causation, not just correlation. Mechanistic structures that explain WHY a system behaves the way it does, not just THAT it behaves that way.
          </Paragraph>

          <Paragraph>
            And you need sovereignty. The building owner owns the building twin. The city owns the city twin. The factory operator owns the factory twin. The data does not live on the vendor's server. The data lives where the system lives, accessible to the people responsible for it, portable if the relationship ends. Sovereignty is not a privacy feature. It is a trust architecture.
          </Paragraph>

          <Paragraph>
            All of this is obvious in industrial digital twin practice. None of it has been applied to the human body at scale. Until now.
          </Paragraph>

          <Paragraph keyLine>
            A health snapshot is a photograph. A health memory is a film. You cannot predict where a story is going from a single frame.
          </Paragraph>

          {/* ── Section III ── */}
          <ChapterDivider
            year="The Technology"
            chapter="Section III"
            title="From LLMs to LQMs"
          />

          <Paragraph>
            The first generation of AI health tools made the same mistake as the first generation of health data systems: they optimised for the wrong thing. LLMs — large language models — predict the next word. They do not understand the sentence. They find patterns in text without modeling the mechanisms that produced the text. Apply them to health data and they produce confident answers with no mechanistic grounding — patterns that match historical correlations but cannot distinguish cause from consequence, cannot predict the effect of an intervention they have never seen, cannot explain what they are doing in terms that a physician could verify.
          </Paragraph>

          <Paragraph>
            LQMs — Large Quantitative Models — are different in kind, not just in degree. Physics-based. Mechanistic. Explainable. The M4 mechanistic multi-organ digital twin does not predict from patterns. It simulates from physics. Every organ represented as a computational model of its actual mechanisms. Every drug, every food, every environmental input processed through the model of what those inputs actually do to cells, tissues, systems. Every output traceable to a specific mechanism that a trained physician can interrogate.
          </Paragraph>

          <Paragraph>
            One guesses. The other knows. One finds patterns and extrapolates them until the pattern breaks. The other models the mechanism and understands why the pattern exists — and therefore understands when and why it will change.
          </Paragraph>

          <Paragraph keyLine>
            One guesses. The other knows. One hallucinates. The other computes.
          </Paragraph>

          {/* ── Section IV ── */}
          <ChapterDivider
            year="The Origin"
            chapter="Section IV"
            title="Preamble"
          />

          <Paragraph>
            I got my first epigenetic scar before I could speak.
          </Paragraph>

          <Paragraph>
            Ten months old. Bogotá to Stockholm. The stress of that displacement — the cortisol, the disruption, the cold — was written into my methylation patterns before I had language to describe or consciousness to remember it. I know this now. At the time, nobody knew anything. There was no measurement, no model, no mechanism for understanding what that crossing did to the epigenome of an infant.
          </Paragraph>

          <Paragraph>
            Forty-five years later, those signatures are still there. Not permanent damage — epigenetics is not fate. But present. Measurable. Meaningful, when you know how to read them. My M4 twin reads them. They inform how my stress response system behaves, how my methylation pathways process folate, why I have always needed more recovery than people around me assumed I needed. The body kept score before the mind learned to count.
          </Paragraph>

          <Paragraph>
            I spent twenty-five years building digital twins of every complex system I encountered. Buildings. Cities. Factories. The infrastructure of the physical world, modeled and optimized and made legible to the people responsible for it. Then my mother-in-law got breast cancer. And I realized I had never built a twin of the system that actually mattered. The one we all inhabit. The one none of us owns.
          </Paragraph>

          <Paragraph>
            The human body.
          </Paragraph>

          <Paragraph keyLine>
            The body keeps score long before the mind learns to count.
          </Paragraph>

          {/* ── Section V ── */}
          <ChapterDivider
            year="The Framework"
            chapter="Section V"
            title="Seven Principles"
          />

          <Principle
            number={1}
            title="Zoom Out to Zoom In"
            body="From mitochondrion to solar system, the same interface. The twin must span scales — from the cellular mechanisms that determine your methylation state to the environmental inputs from the room you sleep in. Siloed health data is as useless as a map that only shows one road."
            delay={0}
          />

          <Principle
            number={2}
            title="Sovereignty Is Non-Negotiable"
            body="Your data. Your device. Your rules. No exceptions, no carve-outs for research partnerships or insurance integrations or platform upgrades. The twin lives where you live. It migrates when you migrate. It cannot be sold, aggregated, or federated without per-request consent."
            delay={80}
          />

          <Principle
            number={3}
            title="Physics Over Statistics"
            body="Mechanistic models, not pattern matching. When the twin makes a recommendation, it must be able to explain the mechanism. Not a correlation. Not a population average. The specific pathway, the specific intervention, the specific expected outcome — traceable to biology, not to training data."
            delay={160}
          />

          <Principle
            number={4}
            title="The Environment Is the Therapy"
            body="The garden, the air, the light, the sound, the food grown for your specific biology. The most powerful health intervention available to most people is not pharmaceutical — it is environmental. The twin models the environment as carefully as it models the body, because they are not separate systems."
            delay={240}
          />

          <Principle
            number={5}
            title="Humans Always in Control"
            body="AI in the loop, never in the chair. Every recommendation is a recommendation. Every intervention is approved by the person it affects. The twin handles things and tells you after only for the categories you have explicitly authorised. Everything else is a conversation."
            delay={320}
          />

          <Principle
            number={6}
            title="Abundance Through Precision"
            body="Not excess. Precision. The goal is not maximum supplementation, maximum monitoring, maximum optimisation. The goal is exactly what this body needs, at exactly the right time, through the most natural channel available. The measure of success is what you don't need to take."
            delay={400}
          />

          <Principle
            number={7}
            title="Clear the Room"
            body="Sometimes the best technology is knowing when to turn it off. The twin manages the system. The system serves the life. The life includes evenings when the avatars fade, the robots power down, and the room is human. The ability to clear the room is not a limitation of the technology. It is the point of it."
            delay={480}
          />

          <Paragraph keyLine>
            Your body. Your twin. Your sovereignty. Non-negotiable.
          </Paragraph>

          {/* ── Section VI ── */}
          <ChapterDivider
            year="The Promise"
            chapter="Section VI"
            title="The Last Platform"
          />

          <Paragraph>
            Life Atlas will be the last platform anyone needs. Not because it does everything — no platform should do everything, and any platform that claims to is lying — but because it connects everything. Your biology and your environment. Your family and your community. Your present state and your longitudinal trajectory. Your data and the models that understand it. Your sovereignty and the network that amplifies it.
          </Paragraph>

          <Paragraph>
            One interface. One sovereignty layer. One provenance chain running through every query, every recommendation, every intervention. The intelligence is fluid — models swap, providers change, local compute replaces cloud as the hardware matures. The architecture is permanent. The principle is permanent. You own this. You always will.
          </Paragraph>

          <Paragraph>
            The platform is not the point. Your body is the point. Your life is the point. The platform is what stands between you and the complexity that currently makes both of those things harder than they need to be. When the platform does its job, it disappears. You feel better. You sleep. Your garden grows. Your children are healthy. The platform is invisible, because good infrastructure is always invisible.
          </Paragraph>

          <Paragraph>
            The promise is not immortality. The promise is not optimisation. The promise is legibility — the ability to understand what is happening in the most complex system you will ever be responsible for, and to make decisions about it with the information you deserve to have.
          </Paragraph>

          <Paragraph keyLine>
            We don't build technology to replace life. We build technology to make life possible.
          </Paragraph>

          {/* ── Section VII ── */}
          <ChapterDivider
            year="The Closing"
            chapter="Section VII"
            title="Absorb. Simulate. Transcend."
          />

          <Paragraph>
            Every complex system has three relationships with time. It absorbs the past — accumulates the record of what happened, learns from it, carries it forward in its structure. It simulates the future — models what will happen given current trajectories, given proposed interventions, given changes in environment or behavior. And it transcends the now — uses the gap between past and future to act in the present with a clarity that neither pure memory nor pure prediction can provide alone.
          </Paragraph>

          <Paragraph>
            This is what a forest does. What a mycorrhizal network does. What a body does, when it is given the conditions to do it. The twin is not doing something new. The twin is giving you access to something the body has always been doing, at a resolution you have never previously been able to see.
          </Paragraph>

          <Paragraph>
            The scar at ten months old is still there. It will always be there. But it is now legible. Legibility is not erasure — it is something better. It is the ability to work with what is, rather than being worked on by it without your knowledge. The body has been keeping score for decades. The twin lets you read the scoreboard. What you do with that information is, entirely and permanently, yours.
          </Paragraph>

          <Paragraph>
            This is the manifesto. Not of a company. Not of a platform. Of a principle — that every person deserves to understand the system they inhabit, and that understanding is the beginning of everything else.
          </Paragraph>

          <Paragraph keyLine>
            Absorb the past. Simulate the future. Transcend the now.
          </Paragraph>
        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Tags ═══ */}
        <TagRow />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)     translateX(0)     scale(1);   opacity: 0.05; }
          50%  {                                                              opacity: 0.16; }
          100% { transform: translateY(-40px) translateX(12px)  scale(1.4); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}
