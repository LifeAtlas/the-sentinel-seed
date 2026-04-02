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
   Paragraph — key lines as large gold italic Cormorant Garamond
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: React.ReactNode;
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
   ChapterDivider
   ═══════════════════════════════════════════════════════════════ */

interface ChapterDividerProps {
  chapter: string;
  title: string;
}

function ChapterDivider({ chapter, title }: ChapterDividerProps) {
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
   SectionLabel — small all-caps label for subsections
   ═══════════════════════════════════════════════════════════════ */

interface SectionLabelProps {
  children: string;
}

function SectionLabel({ children }: SectionLabelProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="mt-12 mb-4 transition-all duration-[1200ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(10px)",
      }}
    >
      <p
        className="text-[10px] tracking-[0.55em] uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {children}
      </p>
      <div
        className="mt-3 h-px w-8"
        style={{ background: "var(--color-gold-dim)", opacity: 0.5 }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BulletList — academic bullet points with gold markers
   ═══════════════════════════════════════════════════════════════ */

interface BulletListProps {
  items: React.ReactNode[];
  delay?: number;
}

function BulletList({ items, delay = 0 }: BulletListProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="mb-10 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <ul className="space-y-4 pl-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-4 text-base md:text-lg leading-[1.9]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <span
              className="mt-[0.55em] flex-shrink-0 w-1 h-1 rounded-full"
              style={{ background: "var(--color-gold-dim)" }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MaturityRow — NUDE index visual row
   ═══════════════════════════════════════════════════════════════ */

interface MaturityRowProps {
  letter: string;
  label: string;
  description: string;
  index: number;
}

function MaturityRow({ letter, label, description, index }: MaturityRowProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="flex items-start gap-5 py-5 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(14px)",
        transitionDelay: `${index * 80}ms`,
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <span
          className="text-xl font-light"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          {letter}
        </span>
      </div>
      <div className="flex-1">
        <p
          className="text-sm font-normal mb-1 tracking-wide"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-text)",
          }}
        >
          {label}
        </p>
        <p
          className="text-sm leading-[1.8]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ProgressionStep — numbered step in the autonomy progression
   ═══════════════════════════════════════════════════════════════ */

interface ProgressionStepProps {
  step: string;
  timeframe: string;
  description: string;
  index: number;
}

function ProgressionStep({ step, timeframe, description, index }: ProgressionStepProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="relative pl-12 pb-12 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Vertical connector line */}
      <div
        className="absolute left-4 top-8 bottom-0 w-px"
        style={{ background: "var(--color-border)" }}
      />
      {/* Step circle */}
      <div
        className="absolute left-0 top-0 w-9 h-9 rounded-full flex items-center justify-center"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-gold-dim)",
        }}
      >
        <span
          className="text-xs font-light"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-gold)",
          }}
        >
          {index + 1}
        </span>
      </div>
      <div>
        <p
          className="text-[10px] tracking-[0.5em] uppercase mb-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
        >
          {timeframe}
        </p>
        <p
          className="text-lg font-light mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "var(--color-text)",
          }}
        >
          {step}
        </p>
        <p
          className="text-base leading-[1.9]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CaseEvidence — compact case study block
   ═══════════════════════════════════════════════════════════════ */

interface CaseEvidenceProps {
  location: string;
  finding: string;
  index: number;
}

function CaseEvidence({ location, finding, index }: CaseEvidenceProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="py-6 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(14px)",
        transitionDelay: `${index * 90}ms`,
        borderLeft: "2px solid var(--color-gold-dim)",
        paddingLeft: "1.5rem",
        marginBottom: "1.25rem",
      }}
    >
      <p
        className="text-[10px] tracking-[0.5em] uppercase mb-2"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {location}
      </p>
      <p
        className="text-base leading-[1.9]"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {finding}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FootnoteBlock
   ═══════════════════════════════════════════════════════════════ */

function FootnoteBlock() {
  const { ref, visible } = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto px-6 py-20 transition-all duration-[2000ms] ease-out"
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

      <div className="space-y-4">
        {[
          "Based on field research and consultation sessions conducted 2019\u20132026",
          "SMILE Framework \u00a9 Nicolas Waern / WINNIIO AB",
          "Published by Life Atlas \u2014 The Sentinel Stories",
          "April 2026",
        ].map((line, i) => (
          <p
            key={i}
            className="text-[11px] tracking-[0.25em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.55,
            }}
          >
            {line}
          </p>
        ))}
      </div>

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

export default function WhitepaperExtremeCollaboration() {
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
            {[...Array(22)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 5 === 0 ? "2px" : "1px",
                  height: i % 5 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.06 + (i % 6) * 0.022,
                  left: `${3 + i * 4.4}%`,
                  top: `${6 + (i % 8) * 11}%`,
                  animation: `mote ${10 + i * 1.2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.55}s`,
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
              maxWidth: "780px",
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
              Life Atlas &mdash; Working Paper
            </p>

            {/* Type label */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Action-Based Research Framework &mdash; April 2026
            </p>

            {/* Main title */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide leading-[1.1]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              Extreme
              <br />
              Collaboration
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              and the Road Towards Autonomous
              <br className="hidden md:block" />
              and Cognitive City Operations
            </p>

            {/* Gold separator */}
            <div
              className="h-px w-16 mx-auto mb-8"
              style={{ background: "var(--color-gold-dim)" }}
            />

            {/* Authors / context line */}
            <p
              className="text-xs tracking-[0.35em] uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.45,
              }}
            >
              SMILE Framework &nbsp;&middot;&nbsp; WINNIIO AB &nbsp;&middot;&nbsp; Urban Intelligence Series
            </p>

            {/* Scroll indicator */}
            <div
              className="flex flex-col items-center gap-3 mt-14"
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

        {/* ═══ Body ═══ */}
        <article className="max-w-2xl mx-auto px-6 pb-4">

          {/* ── Section 1: Abstract ── */}
          <ChapterDivider chapter="Section I" title="Abstract" />

          <Paragraph>
            Cities worldwide invest billions in smart city infrastructure yet consistently fail to achieve interoperability, shared decision-making, or measurable impact. The data accumulates. The dashboards multiply. The decisions remain as fragmented and slow as before.
          </Paragraph>

          <Paragraph>
            This paper presents an action-based research framework grounded in Extreme Collaboration — a methodology that inverts the conventional data-first approach by beginning with human outcomes and using shared reality as the coordination substrate. Shared reality, in this context, means digital twins: physics-based, visually navigable, temporally continuous models of the urban environment that all stakeholders can see, interrogate, and build decisions upon simultaneously.
          </Paragraph>

          <Paragraph>
            Drawing from case engagements including Olympic city planning for Brisbane 2032 and LA 2028, smart city transformations across Europe and Asia, and Ukraine reconstruction feasibility studies, we propose a progression model from fragmented silos to autonomous cognitive city operations. The framework introduces the NUDE Digital Maturity Index, the SMILE implementation methodology, and a participatory decision-support architecture that repositions tourism and citizen engagement as the drivers — not the consumers — of urban intelligence.
          </Paragraph>

          <Paragraph keyLine>
            The road to autonomous cities does not begin with AI, data, or sensors. It begins with people in the same room, looking at the same reality.
          </Paragraph>

          <Paragraph>
            What follows is both a research agenda and a practitioner framework. It is grounded in field experience, designed to be reproduced, and built on a single conviction: that the hardest engineering problem in urban intelligence is not technical. It is human.
          </Paragraph>

          {/* ── Section 2: The Problem ── */}
          <ChapterDivider chapter="Section II" title="The Problem — Islands of Intelligence" />

          <Paragraph>
            The modern city is not a system. It is an archipelago. Real estate does not speak to energy. Energy does not speak to water. Water does not speak to tourism. Tourism does not speak to GIS. GIS does not speak to traffic. Each island has developed its own data standards, its own organizational culture, its own political mandate, and its own definition of success. What they share is geography. What they do not share is context.
          </Paragraph>

          <Paragraph>
            Technical interoperability efforts — open APIs, data standards, unified platforms — address the surface of this problem without touching its root. Even when data flows freely between departments, decisions are still made by disconnected people operating on disconnected timescales with disconnected objectives. A water department can receive real-time tourism data and still make infrastructure decisions in a four-year budget cycle that ignores every peak and trough in that data.
          </Paragraph>

          <SectionLabel>The Four Layers of Interoperability</SectionLabel>

          <BulletList items={[
            "Technical — common data formats, APIs, sensor standards. Necessary. Achievable. Insufficient.",
            "Semantic — shared meaning. When the tourism department says 'visitor,' does the transport department mean the same person? Often not.",
            "Organizational — shared processes, joint decision-making structures, cross-departmental mandates. Rare. Never default.",
            "Legal and Political — shared accountability. Who is responsible when the combined decision fails? This layer is almost universally unresolved.",
          ]} />

          <Paragraph>
            The OASC (Open and Agile Smart Cities) Minimal Interoperability Mechanisms framework addresses the first two layers with sophistication and real institutional traction. What it cannot address is the third and fourth — because no technical standard can mandate that a city department trust another department, share credit, or accept shared accountability for outcomes.
          </Paragraph>

          <Paragraph>
            Sweden, as one example, has developed a cultural pathology around data. The word &ldquo;data-driven&rdquo; appears in virtually every public sector strategy document produced since 2015. Yet data-driven, as typically practiced, means: collect more data, build more dashboards, hold more meetings about what the dashboards show, and postpone decisions until the data is more complete. This is not data-driven decision-making. It is data-deferred decision-making.
          </Paragraph>

          <Paragraph keyLine>
            Data comes from systems. Knowledge comes from people.
          </Paragraph>

          <Paragraph>
            The dashboard is a representation of reality. It is not reality. A city official who has spent thirty years walking Gothenburg&apos;s waterfront holds knowledge that no sensor array has yet encoded. The gap between that tacit knowledge and the data on the dashboard is where most smart city initiatives fail — not because the data is wrong, but because the people who understand context were never in the conversation.
          </Paragraph>

          {/* ── Section 3: The Inversion ── */}
          <ChapterDivider chapter="Section III" title="The Inversion — Impact First, Data Last" />

          <Paragraph>
            Conventional smart city methodology follows a logical but dysfunctional sequence: collect data, turn it into information, extract insight, design action, and — eventually, if the project survives — achieve some approximation of the intended outcome. The problem is not the sequence. The problem is the rate of attrition. Organizations run out of budget at the insight stage. They run out of political will at the action stage. By the time the initiative reaches the outcome, it has been so attenuated by compromise and delay that the original impact goal is unrecognizable.
          </Paragraph>

          <SectionLabel>Conventional Sequence vs. SMILE Inversion</SectionLabel>

          <BulletList items={[
            "Conventional: Data → Information → Insight → Action → (maybe) Outcome",
            "SMILE inversion: Outcome → Action → Insight → Information → Data",
          ]} />

          <Paragraph>
            The inversion is not merely rhetorical. It changes what gets funded, who gets invited to the table, and what counts as progress. Starting with the outcome means beginning every engagement with a single question: what does success look like in this city, for these people, in five years? Not what data can we collect. Not what platform should we procure. What does impact look like — and can we describe it precisely enough that we will know it when we see it?
          </Paragraph>

          <Paragraph>
            A practical example. A coastal European city is preparing for a 40 percent increase in tourist arrivals over the next decade. The conventional approach begins with sensors, a unified data platform, and a request for proposal. The SMILE approach begins with a different question: how do we absorb two million additional visitors per year without destroying the livability that makes the city worth visiting in the first place? That question — not the data — is the design brief.
          </Paragraph>

          <Paragraph>
            The answer to that question requires tourism, water, transport, planning, and citizen engagement to be in the same conversation from day one. And that conversation cannot happen in a meeting room with PowerPoint slides. It requires a shared representation of reality that all parties can see, point to, and simulate against.
          </Paragraph>

          <Paragraph keyLine>
            The visualization is the key, not the data.
          </Paragraph>

          <Paragraph>
            Reality, rendered as a navigable digital twin, is not a deliverable at the end of the process. It is the medium through which the process happens. It is the table that all parties sit around. It is the shared language that allows a water engineer and a tourism director to have the same conversation at the same level of concreteness — pointing at the same map, seeing the same simulation, arguing about the same future.
          </Paragraph>

          {/* ── Section 4: Shared Reality ── */}
          <ChapterDivider chapter="Section IV" title="Shared Reality as Coordination Substrate" />

          <Paragraph>
            A digital twin, properly understood, is not a visualization tool. It is a physics-based, continuously updated, time-navigable model of a system. For a city, this means a model that knows not just the current state of infrastructure, population distribution, energy load, and water stress, but can be moved backwards through historical states and forwards through simulated futures. The same model. The same coordinate system. The same ground truth — available to every stakeholder, simultaneously, without translation.
          </Paragraph>

          <Paragraph>
            The spatial web — sometimes described as Web 4.0 — uses geography as its universal coordinate system. Every city, regardless of size, exists on the same planet. The coordinate system does not change. This means that Dubrovnik, Tampere, and Gothenburg can be overlaid and compared on the same substrate. The knowledge transfer between cities is not a document or a case study. It is a spatial comparison: here is how Tampere handled peak tourist flow at these coordinates, under these conditions. Here is what happened to water stress. Here is the decision that was made. Would it work here?
          </Paragraph>

          <Paragraph>
            The time dimension is equally transformative. A city official who needs to understand the cumulative impact of thirty years of tourist development does not need to read thirty years of reports. She needs a time slider. Drag it backwards to 1995: see the city as it was. Drag it to today: see the city as it is. Drag it forward to 2035 under three different policy scenarios: see the city as it could become. The simulation shows water stress, traffic saturation, waste infrastructure capacity, air quality, and economic vitality — simultaneously, spatially, for each scenario.
          </Paragraph>

          <Paragraph keyLine>
            Two thousand years ago you had to go somewhere to understand it. Now we are trying to figure out reality by looking at data — and it is completely impossible.
          </Paragraph>

          <Paragraph>
            This is not data visualization. Data visualization shows what has been measured. Shared reality augmentation shows what is, what was, and what could be. The difference is the difference between a photograph and a film that has not yet been made — one in which the viewer can change the ending.
          </Paragraph>

          <Paragraph>
            When a tourism director says &ldquo;show me Brisbane with fifty thousand additional visitors during the Olympics,&rdquo; the simulation does not return a spreadsheet. It shows water stress propagating outward from the stadium district. It shows traffic collapse on the secondary arterials that were not modeled in the original infrastructure plan. It shows waste overflow at the three transfer stations that were built for a city of three million, not a city that briefly hosts five. These are not predictions. They are consequences, made visible before the decisions that generate them are finalized.
          </Paragraph>

          {/* ── Section 5: NUDE ── */}
          <ChapterDivider chapter="Section V" title="The NUDE Digital Maturity Index" />

          <Paragraph>
            Most digital maturity frameworks measure technology adoption. How many sensors does the city have? What percentage of services are digitized? Is the city using AI? These are questions about inputs. They do not measure outputs. They do not measure whether the technology is changing how decisions are made, how quickly, or with what quality.
          </Paragraph>

          <Paragraph>
            The NUDE index takes a different approach. It scores how organizations — at the role level, the department level, and the city level — relate to technology in terms of decision velocity and organizational trust.
          </Paragraph>

          <SectionLabel>The NUDE Scale</SectionLabel>

          <div
            className="mb-10 rounded"
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              padding: "0.25rem 1.25rem",
            }}
          >
            <MaturityRow
              index={0}
              letter="N"
              label="None"
              description="No meaningful technology use. Analog processes. Decisions made from memory, paper records, and interpersonal trust. Common in small municipalities and departments with long-tenured leadership."
            />
            <MaturityRow
              index={1}
              letter="U"
              label="Utility"
              description="Technology as a reluctant tool. Email, spreadsheets, basic GIS. Used when required, not embraced. Decisions are not structured around technological inputs."
            />
            <MaturityRow
              index={2}
              letter="D"
              label="Dependent"
              description="Technology embedded in daily workflows. Decisions require the system to function. Removal of the platform would cause immediate operational disruption."
            />
            <MaturityRow
              index={3}
              letter="E"
              label="Enabler"
              description="Technology actively expands what is possible. New types of decisions become available that were previously infeasible. Cross-departmental data use begins to emerge."
            />
            <MaturityRow
              index={4}
              letter="DNA"
              label="In the DNA"
              description="Technology is inseparable from organizational identity. It shapes culture, hiring, knowledge transfer, and strategic planning. Decisions cannot be meaningfully described without reference to the platform."
            />
          </div>

          <Paragraph>
            The index is applied per role, per department, and per city. A tourism manager scoring Enabler while the water department scores None reveals a collaboration gap that no amount of technical integration will resolve — because the issue is not the absence of data but the absence of shared decision-making culture. The water department does not know how to use tourist flow data even if it arrives in perfect format.
          </Paragraph>

          <Paragraph>
            The most counterintuitive finding from field applications of the NUDE index is this: cities scoring DNA in technology adoption but None in inter-departmental collaboration consistently perform worse on impact outcomes than cities scoring Utility in technology but Enabler in collaboration. The quality of cross-silo relationships is a stronger predictor of smart city success than the sophistication of the technology deployed.
          </Paragraph>

          <Paragraph keyLine>
            The index is not about technology adoption. It is about decision velocity.
          </Paragraph>

          <Paragraph>
            A city that makes high-quality cross-departmental decisions in days, using basic tools and strong relationships, will outperform a city that makes low-quality siloed decisions in months, using expensive platforms. The technology matters. It matters less than the collaboration architecture it is deployed within.
          </Paragraph>

          {/* ── Section 6: Extreme Collaboration ── */}
          <ChapterDivider chapter="Section VI" title="Extreme Collaboration — The Methodology" />

          <Paragraph>
            Extreme Collaboration is not a metaphor. It is a specific methodology for accelerating the organizational conditions under which intelligent urban systems become possible. Its core premise is simple: before any data platform, AI system, or digital twin can deliver value, the humans who will use it must be in conversation with each other — and that conversation must happen in shared reality, not in the abstract.
          </Paragraph>

          <Paragraph>
            The intervention begins with a room. All relevant stakeholders — tourism, water, transport, planning, energy, emergency services, and citizen representatives — are brought into the same physical or virtual space. Not for a workshop about technology. For a workshop about reality. Their reality. The city they actually inhabit, serve, and are responsible for.
          </Paragraph>

          <SectionLabel>Map-Anchored Interview Protocol</SectionLabel>

          <Paragraph>
            The standard questionnaire approach to organizational research produces abstract answers to abstract questions. &ldquo;What are your main challenges?&rdquo; yields generic responses. The map-anchored interview replaces this with a concrete, spatial alternative: every interview is conducted in front of the city&apos;s digital twin. Every challenge, every bottleneck, every opportunity is located. &ldquo;Here is where our water infrastructure cannot scale. Here is where the construction project conflicts with the tourist corridor. Here is the intersection that fails every August.&rdquo;
          </Paragraph>

          <Paragraph>
            Spatial grounding transforms the quality of information collected. It also transforms the interview itself into a collaborative act — the interviewer and interviewee are both looking at the same reality, exploring it together, discovering connections that neither would have surfaced in a conventional conversation.
          </Paragraph>

          <SectionLabel>The SPIN Diagnostic Applied to City Operations</SectionLabel>

          <BulletList items={[
            "Situation — what is the current state of this system, in this place, at this time?",
            "Problem — what is not working, and for whom? Where does it appear on the map?",
            "Implication — what does this problem cause downstream? Which other departments feel it?",
            "Need — what would a resolution look like? What does success mean here, spatially and temporally?",
          ]} />

          <Paragraph>
            The most important discovery from applying this methodology across multiple cities is that the city itself is the primary collaboration partner. Not external vendors. Not national government agencies. Not research institutions. The knowledge required to design the next stage of the city&apos;s intelligence resides, overwhelmingly, within the city&apos;s own staff — in departments that have never been asked to sit in the same room at the same time.
          </Paragraph>

          <Paragraph keyLine>
            How do we make it easy for AI experts to help us? The better question is: how do we become the experts?
          </Paragraph>

          <Paragraph>
            Small cities hold a structural advantage in this methodology. A city of fifty thousand people may have five to ten critical decision-makers across all relevant departments. Those people can be in one room. A decision that would take eighteen months in a large metropolitan bureaucracy can be made in a day — if the right people are looking at the same reality simultaneously, with the authority to commit.
          </Paragraph>

          <Paragraph>
            This is not a soft skill observation. It is a structural design principle. Smart city investments in small cities, anchored in Extreme Collaboration methodology, can produce decision-cycle compression of an order of magnitude over large-city implementations. The question is whether large cities can architect internal structures that replicate the conditions small cities enjoy by default.
          </Paragraph>

          {/* ── Section 7: Progression ── */}
          <ChapterDivider chapter="Section VII" title="From Collaboration to Autonomy — The Progression" />

          <Paragraph>
            The path from siloed city operations to autonomous cognitive city management is not a leap. It is a measurable progression, each stage building the organizational and technical conditions required for the next. The stages are not sequential in the sense that one must be fully complete before the next begins — but each stage creates the substrate that makes the subsequent one possible.
          </Paragraph>

          <div className="mt-12 mb-4">
            <ProgressionStep
              index={0}
              timeframe="Week 1 – 2"
              step="Discovery and Stakeholder Mapping"
              description="People discover each other. The NUDE index is administered across departments. Stakeholder maps reveal who holds critical knowledge, who talks to whom, and — crucially — who does not. The absence of relationships is as diagnostic as their presence. The shared map is introduced. First reactions to seeing one's own domain represented spatially alongside others are frequently the most productive moments of the entire engagement."
            />
            <ProgressionStep
              index={1}
              timeframe="Month 1"
              step="Shared Reality Established"
              description="All key departments are operating from the same base map. The digital twin is populated with real data from each silo. The first cross-silo decisions are made manually — but they are made by people who are now looking at the same information simultaneously. Decision time for issues that previously required three departmental handoffs typically compresses from weeks to hours at this stage."
            />
            <ProgressionStep
              index={2}
              timeframe="Month 2 – 3"
              step="AI Copilots Introduced"
              description="Real-time data is layered onto the shared map. AI copilots begin surfacing patterns and anomalies: unusual concentrations of tourist flow approaching water stress thresholds, transport corridors showing early signs of congestion before the visible bottleneck forms. Feedback loops are established between departments. Human decision-makers remain in full control. The AI role is to ask better questions, not to provide answers."
            />
            <ProgressionStep
              index={3}
              timeframe="Month 3 – 6"
              step="Pattern Learning and Optimization Suggestion"
              description="The AI system has accumulated enough human decision data to begin modelling decision patterns. It learns that the tourism department and the water department, when presented with this combination of conditions, typically reach a particular type of accommodation. It begins suggesting optimizations. Crucially, every suggestion is explainable: not 'the algorithm recommends X' but 'under these seven previous conditions, here is what was decided, here is what the outcome was, here is why this situation is analogous.'"
            />
            <ProgressionStep
              index={4}
              timeframe="Month 6 – 12"
              step="Semi-Autonomous Operations"
              description="Routine cross-silo coordination — the kind that consumes 60 to 70 percent of operational decision-making time without requiring senior judgment — begins to be handled within guardrails by the AI layer. Humans receive notifications rather than action requests. The human role shifts toward exception management, edge cases, and strategic direction. Citizen-facing AI agents begin handling predictive service information."
            />
            <ProgressionStep
              index={5}
              timeframe="Year 1 and Beyond"
              step="Cognitive City Operations"
              description="The city's digital twin is the city's institutional memory and its decision intelligence simultaneously. A new head of tourism does not receive a briefing document. She watches the city's history as a film — spatially, temporally, causally linked. Every decision, its context, its outcome, and its downstream effects are navigable. The knowledge does not leave when people leave. The collaboration does not collapse when relationships change. The city's intelligence has become structural."
            />
          </div>

          <Paragraph>
            A provocation worth defending: the tourism department is the most likely leader of this transformation in most mid-sized cities. Tourism departments understand revenue. They understand visitor experience. They understand the relationship between external demand and internal capacity. They are accustomed to working across organizational boundaries — with transport, with hospitality, with cultural institutions. And they are, in most cities, chronically underestimated as a source of urban intelligence.
          </Paragraph>

          <Paragraph keyLine>
            The autonomous cities of the future will be led by the head of tourism.
          </Paragraph>

          <Paragraph>
            This is less a prediction than a diagnostic. In cities where this transformation has advanced furthest, the initiative has consistently been anchored in departments that combine external accountability — they face real visitors, real revenues, real consequences — with cross-organizational reach. Tourism fits both criteria better than any other urban department.
          </Paragraph>

          {/* ── Section 8: Case Evidence ── */}
          <ChapterDivider chapter="Section VIII" title="Case Evidence" />

          <Paragraph>
            The following cases are drawn from direct field engagement, published research, and documented consultations. They are presented not as proofs but as evidence — patterns that recur across geographies, scales, and political contexts, which any theoretical framework for urban intelligence must account for.
          </Paragraph>

          <div className="mt-8">
            <CaseEvidence
              index={0}
              location="Brisbane 2032 — Olympic City Planning"
              finding="The 2032 Olympic planning process forced cross-silo collaboration at a scale and speed Brisbane had not previously experienced. Departments that had operated in parallel for decades were mandated to share data, share decisions, and share accountability within a fixed timeline. The result was not merely operational coordination — it was an organizational transformation that outlasted the games themselves. The collaboration infrastructure built for the Olympics became the substrate for ongoing smart city governance. The lesson: external forcing functions — a fixed date, a global audience, a reputational stake — can compress the collaboration timeline by years."
            />
            <CaseEvidence
              index={1}
              location="NEOM, Saudi Arabia"
              finding="NEOM represents the largest single smart city investment in history, and one of the most instructive failures of the conventional procurement model. Billions were committed to infrastructure, technology platforms, and architectural ambitions without the foundational condition that makes any of it work: a collaborative human architecture that preceded the technology. The result is a technically sophisticated environment that has consistently underdelivered on its innovation premises because the organizational substrate — the culture of shared decision-making, the trust between departments, the mechanisms for cross-silo accountability — was never built."
            />
            <CaseEvidence
              index={2}
              location="Smart Heating in Swedish Schools"
              finding="A technically excellent smart heating implementation across multiple Swedish municipalities was rejected at the organizational level because the system was designed and deployed without including the people who would use it in the design process. Facilities managers felt surveilled rather than supported. Teachers found the automated adjustments disruptive rather than helpful. The technology worked. The collaboration — between the system's designers and its users — did not. The system was quietly reverted in seventeen of twenty-three pilot schools within eighteen months of deployment."
            />
            <CaseEvidence
              index={3}
              location="Deep Matrix — 250,000 Indian Villages"
              finding="A drone-based survey program across 250,000 Indian villages, creating shared spatial reality at village scale, produced an unexpected finding: small nodes sharing local best practices with adjacent nodes outperformed megacity smart city programs on every measurable impact metric. The mechanism was not technological sophistication but peer-to-peer knowledge transfer anchored in shared spatial context. Villages that could point to what worked on the map — here, under these conditions, with these resources — were able to replicate success faster than any top-down deployment could achieve."
            />
            <CaseEvidence
              index={4}
              location="Ukraine Reconstruction Feasibility Studies"
              finding="Post-conflict reconstruction planning under conditions of ongoing uncertainty requires exactly the combination of shared reality and extreme collaboration this framework describes. Damage assessment using shared spatial twins — visible to planners, funders, international agencies, and local community representatives simultaneously — compressed feasibility study timelines from months to days in several documented cases. More importantly, it allowed dissenting voices to be spatially specific: not 'we object to this reconstruction plan' but 'this reconstruction corridor, visible here, conflicts with the water infrastructure that must be restored first, visible here.'"
            />
            <CaseEvidence
              index={5}
              location="Barcelona — Overtourism and Participatory Failure"
              finding="Barcelona is one of the most technically sophisticated smart cities in Europe and one of the most instructive cautionary tales in participatory urban governance. The city's tourism success, by every conventional metric, was spectacular. By the metric that actually matters — the lived experience of long-term residents — it was a failure. The monitoring systems measured visitor numbers, spending, and satisfaction. They did not measure, or did not weight, the displacement of residents, the loss of neighborhood character, and the growing hostility between the city's economic beneficiaries and its social fabric. Success metrics that ignore citizen experience are not success metrics. They are liability metrics with a delayed fuse."
            />
          </div>

          {/* ── Section 9: Participatory Dimension ── */}
          <ChapterDivider chapter="Section IX" title="The Participatory Dimension" />

          <Paragraph>
            The digital twin, as coordination substrate, enables a form of civic participation that no previous urban technology has made possible: citizens can see the simulated consequences of decisions before those decisions are made. Not as projections in a planning document. As navigable spatial simulations, available to any resident with a smartphone.
          </Paragraph>

          <Paragraph>
            The practical consequence of this is the prevention of what we might call the Barcelona problem: success metrics that ignore citizen experience. When residents can query the shared reality — show me what happens to my neighborhood if we add ten thousand visitors per month — and receive a simulation grounded in real infrastructure capacity, real transport loads, and real historical patterns, the conversation about what counts as success changes. It becomes impossible to claim that a tourism strategy is working well while the residents most affected by it are experiencing displacement, crowding, and degraded services.
          </Paragraph>

          <Paragraph>
            The city&apos;s AI agent, in the mature stage of this progression, serves as a public interface for this participatory layer. Not a chatbot with scripted responses, but a genuinely knowledgeable system that can answer: &ldquo;You are planning to visit the harbor district next Saturday. The weather will be overcast. Based on historical patterns, I expect 40,000 visitors in that zone between 11:00 and 16:00. Here are three alternative itineraries that would give you the same experience with significantly lower crowding. Shall I route you?&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            When a new head of tourism arrives, she should not receive a briefing document. She should watch the city&apos;s history as a film.
          </Paragraph>

          <Paragraph>
            Knowledge transfer is perhaps the most underappreciated benefit of the shared reality approach. Institutional memory, in conventional city management, resides in people. When those people leave — through retirement, career change, or political transition — decades of contextual knowledge leave with them. The digital twin, properly maintained, holds that knowledge in a form that is not dependent on any individual. The causal relationships between decisions and their outcomes are spatially and temporally encoded. The new arrival can navigate them. The institutional knowledge does not disappear when the institutional memory does.
          </Paragraph>

          <Paragraph>
            Participatory approaches must also include dissenting voices — not as a democratic formality but as a methodological requirement. Anti-tourism activists, technology skeptics, and residents who have been burned by previous smart city promises carry knowledge about failure modes that enthusiastic adopters systematically underweight. A research and implementation methodology that does not include mechanisms for dissenting voices to be heard spatially and specifically will reproduce the errors it is trying to prevent.
          </Paragraph>

          {/* ── Section 10: Research Agenda ── */}
          <ChapterDivider chapter="Section X" title="Research Agenda and Methodology" />

          <Paragraph>
            This paper presents a framework derived from field engagement and practitioner observation. What it requires, to advance from framework to theory, is systematic empirical grounding. The following research agenda is proposed for the period 2026 through 2030.
          </Paragraph>

          <SectionLabel>Action-Based Research Design</SectionLabel>

          <Paragraph>
            Research teams embedded in active city transformation processes, participating in the Extreme Collaboration methodology rather than observing it from outside. The researcher is both instrument and participant — present in the room when stakeholders first encounter the shared map, present when the first cross-silo decisions are made, present when the AI copilot begins surfacing patterns. The knowledge produced by this proximity cannot be replicated by case study analysis or retrospective interviews.
          </Paragraph>

          <SectionLabel>Mixed Methods Protocol</SectionLabel>

          <BulletList items={[
            "NUDE index administration at T0, T6, and T12 months across all participating departments — generating longitudinal quantitative data on maturity progression and decision velocity change.",
            "Map-anchored interviews as the primary qualitative instrument — capturing spatial, contextual knowledge that standard interview protocols cannot surface.",
            "Decision velocity measurement — tracking the time from problem identification to cross-departmental decision, before and after Extreme Collaboration intervention.",
            "Outcome attribution — connecting collaboration-phase decisions to measurable urban outcomes (water stress indices, transport efficiency, tourist distribution, citizen satisfaction) at 12 and 24 month intervals.",
          ]} />

          <SectionLabel>Longitudinal and Comparative Design</SectionLabel>

          <Paragraph>
            The same cities measured at six-month intervals on the collaboration-to-autonomy progression, over a minimum three-year research window. Comparative framework spanning at least three European contexts — drawing on the existing network of cities engaged with OASC MIMs, augmented by specific selection criteria for small city representation (population thresholds consistent with established small city literature).
          </Paragraph>

          <SectionLabel>Ethical Commitments</SectionLabel>

          <Paragraph>
            Participatory research methodology requires that the voices of those who will be most affected by the systems being designed are present in the design process — not as consultation formalities but as genuine co-producers of the research. This includes residents at risk of displacement, workers in sectors that will be disrupted by automation, and communities with historical reasons to distrust urban technology deployments. The SMILE methodology provides a structured approach to incorporating these perspectives without allowing the research process to be captured by the loudest or most organized voice in any given engagement.
          </Paragraph>

          <Paragraph>
            Reproducibility is a non-negotiable research commitment. The SMILE methodology is the standardized implementation framework — documented with sufficient specificity that another research team, in another city, on another continent, could replicate the engagement protocol and produce comparable data. This is not merely academic. It is the only mechanism through which the knowledge produced by this research can scale to the cities that need it most.
          </Paragraph>

          {/* ── Section 11: Conclusion ── */}
          <ChapterDivider chapter="Section XI" title="Conclusion" />

          <Paragraph>
            The road to autonomous cognitive city operations does not begin with AI. It does not begin with sensors, platforms, or procurement. It does not begin with data. It begins with people in the same room, looking at the same reality, and being willing — for the first time, in many cases — to see what the person next to them sees.
          </Paragraph>

          <Paragraph>
            Extreme Collaboration is the hardest engineering problem in urban intelligence. Not because the technology is difficult. The technology is, at this point, well ahead of the organizational capacity to use it. The hard problem is human: the trust required for a water department to act on tourist flow data, the political will required to share credit for outcomes, the institutional courage required to put the city&apos;s collective knowledge on a map and let everyone see the gaps.
          </Paragraph>

          <Paragraph>
            The NUDE index gives cities a language for where they are. The SMILE methodology gives them a path for where they need to go. The shared reality substrate — the digital twin as coordination medium rather than deliverable — gives them the table to sit around while they make the journey.
          </Paragraph>

          <Paragraph>
            Small cities will get there first. They have the structural advantage of small numbers, short distances, and decision-makers who already know each other&apos;s names. The question is not whether small cities can achieve cognitive urban operations. The question is whether large cities can learn from them before their own complexity becomes irrecoverable.
          </Paragraph>

          <Paragraph keyLine>
            We are not building smarter cities. We are building cities that know themselves.
          </Paragraph>

          <Paragraph>
            A city that knows itself — its history, its constraints, its latent capacities, its citizens&apos; actual needs — is a city that can be governed with wisdom rather than approximation. The digital twin is not the city&apos;s mirror. It is the city&apos;s mind. And a mind, to function well, requires not just information but the integration of perspectives that have too long been kept apart.
          </Paragraph>

          <Paragraph>
            The progression from collaboration to cognition is measurable, teachable, and replicable. Every city is already somewhere on that progression, whether or not it knows it. The work of this research agenda is to make the path visible — so that every city can find where it stands, see where it needs to go, and understand precisely what the next step requires.
          </Paragraph>

          <Paragraph>
            Not a blueprint. A compass. The city already contains the direction. Our task is to help it find north.
          </Paragraph>

        </article>

        {/* ═══ Footer Attribution ═══ */}
        <FootnoteBlock />

        {/* ═══ Contact ═══ */}
        <div className="max-w-xl mx-auto px-6 py-10 text-center">
          <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
          <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Contact
          </p>
          <a href="mailto:ceo@winniio.io" className="text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)"; }}>
            ceo@winniio.io
          </a>
          <p className="text-[10px] mt-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
            Nicolas Waern &middot; WINNIIO AB &middot; Gothenburg, Sweden
          </p>
        </div>

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
