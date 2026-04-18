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

function ProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-px" style={{ background: "var(--color-border)" }}>
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))" }}
      />
    </div>
  );
}

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
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transitionDelay: `${delay}ms`, maxWidth: "640px" }}
      >
        <div className="h-px mb-10 w-10 mx-auto" style={{ background: "var(--color-gold-dim)" }} />
        <p className="text-2xl md:text-3xl font-light italic leading-[1.55]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
          &ldquo;{children}&rdquo;
        </p>
        <div className="h-px mt-10 w-10 mx-auto" style={{ background: "var(--color-gold-dim)" }} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="transition-all duration-[1400ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}
    >
      <p className="text-base md:text-lg leading-[2] mb-8" style={{ color: "var(--color-text-secondary)" }}>
        {children}
      </p>
    </div>
  );
}

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
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)" }}
    >
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim))" }} />
        <span className="text-[10px] tracking-[0.6em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          {chapter}
        </span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
      </div>
      <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
        {title}
      </h2>
      <div className="inline-block w-px h-8 mt-8" style={{ background: "linear-gradient(to bottom, var(--color-gold-dim), transparent)" }} />
    </div>
  );
}

interface SectionLabelProps {
  children: string;
}

function SectionLabel({ children }: SectionLabelProps) {
  const { ref, visible } = useFadeIn(0.1);
  return (
    <div
      ref={ref}
      className="mt-12 mb-4 transition-all duration-[1200ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)" }}
    >
      <p className="text-[10px] tracking-[0.55em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
        {children}
      </p>
      <div className="mt-3 h-px w-8" style={{ background: "var(--color-gold-dim)", opacity: 0.5 }} />
    </div>
  );
}

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
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}
    >
      <ul className="space-y-4 pl-0">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-4 text-base md:text-lg leading-[1.9]" style={{ color: "var(--color-text-secondary)" }}>
            <span className="mt-[0.55em] flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--color-gold-dim)" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <p className="text-[10px] tracking-[0.5em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
        {location}
      </p>
      <p className="text-base leading-[1.9]" style={{ color: "var(--color-text-secondary)" }}>
        {finding}
      </p>
    </div>
  );
}

function FootnoteBlock() {
  const { ref, visible } = useFadeIn(0.15);
  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto px-6 py-20 transition-all duration-[2000ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)" }}
    >
      <div className="h-px mb-14" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
      <div className="space-y-4">
        {[
          "Based on field research and consultation sessions conducted 2019–2026",
          "SMILE Framework © Nicolas Waern / WINNIIO AB",
          "Published by Life Atlas — The Sentinel Stories",
          "April 2026",
        ].map((line, i) => (
          <p key={i} className="text-[11px] tracking-[0.25em]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.55 }}>
            {line}
          </p>
        ))}
      </div>
      <div className="h-px mt-14" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
    </div>
  );
}

function BackLink() {
  const { ref, visible } = useFadeIn(0.2);
  return (
    <div
      ref={ref}
      className="pb-24 text-center transition-all duration-[1600ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)" }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span
          className="text-[10px] tracking-[0.5em] uppercase transition-colors duration-300"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold-dim)"; }}
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

export default function WhitepaperCompanyMemory() {
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
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 38%, rgba(201,168,76,0.05) 0%, transparent 65%)" }}
          />
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

          <div
            className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
            style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "none" : "translateY(28px)", maxWidth: "780px" }}
          >
            <div className="mb-10 flex justify-center">
              <div className="w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
            </div>

            <p className="text-[10px] tracking-[0.7em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              WINNIIO &mdash; Working Paper
            </p>

            <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
              Organisational Digital Twins &mdash; April 2026
            </p>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide leading-[1.1]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
            >
              The Company
              <br />
              That Remembered
            </h1>

            <p
              className="text-xl md:text-2xl font-light italic mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
            >
              AI Agents as Organisational Memory
              <br className="hidden md:block" />
              and the End of Knowledge Attrition
            </p>

            <div className="h-px w-16 mx-auto mb-8" style={{ background: "var(--color-gold-dim)" }} />

            <p className="text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.45 }}>
              Nicolas Waern &nbsp;&middot;&nbsp; WINNIIO AB &nbsp;&middot;&nbsp; Knowledge Architecture Series
            </p>

            <div className="flex flex-col items-center gap-3 mt-14" style={{ color: "var(--color-gold-dim)" }}>
              <span className="text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
              <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
            </div>
          </div>
        </section>

        {/* ═══ Body ═══ */}
        <article className="max-w-2xl mx-auto px-6 pb-4">

          <ChapterDivider chapter="Section I" title="The Problem No Org Chart Shows" />

          <Paragraph>
            Our Scrum Master was leaving. For most organisations, this is a logistics problem — write a job description, schedule interviews, onboard a replacement. But we had spent three years watching companies respond to exactly this moment, and we knew what would happen next. Not a skills gap. A memory gap.
          </Paragraph>

          <Paragraph>
            When a key person walks out the door, they do not simply take their role. They take context. They take the accumulated understanding of why decisions were made, not just what was decided. They take the informal map of how information actually flows between people — which is never the same as the org chart. They take three months of onboarding time from whoever comes next, and even then, approximately half of what they knew will never be reconstructed.
          </Paragraph>

          <Paragraph>
            This is not a new problem. Organisations have been losing institutional memory since the first person resigned from the first company. What is new is that we now have the architectural primitives to solve it — not partially, not metaphorically, but technically and completely.
          </Paragraph>

          <Paragraph keyLine>
            Your people are irreplaceable. Your institutional knowledge should not be.
          </Paragraph>

          <Paragraph>
            The question we asked ourselves was simple: what if the company itself could remember? Not in the passive sense of storing documents in a drive that nobody reads, but in the active sense of a living system that captures how work actually happens, holds context across time, and transfers that context to whoever needs it next.
          </Paragraph>

          <ChapterDivider chapter="Section II" title="What Knowledge Attrition Actually Costs" />

          <Paragraph>
            Before proposing a solution, it is worth being honest about the scale of the problem. Industry estimates for the cost of replacing a single mid-level employee range from 50% to 200% of annual salary, when you account for recruitment, onboarding, and the productivity trough that follows. But these figures capture only the visible costs — the HR line items and the lost hours during the transition window.
          </Paragraph>

          <Paragraph>
            The invisible costs are larger. A new hire who does not understand the context behind a process will optimise that process incorrectly. They will make technically correct decisions that are strategically wrong because they are missing the history. They will rebuild relationships that already existed — at the cost of time and trust. They will make the same mistakes the organisation already learned from, because that learning was never encoded anywhere a newcomer could access it.
          </Paragraph>

          <SectionLabel>The three layers of organisational knowledge</SectionLabel>

          <BulletList items={[
            "Explicit knowledge — documented processes, meeting notes, decision logs. This is what organisations typically try to preserve, and even here, the coverage is incomplete.",
            "Tacit knowledge — the mental models, heuristics, and judgment calls that experienced people apply automatically but rarely articulate. This is what walks out the door.",
            "Relational knowledge — the map of who trusts whom, how conflict typically surfaces, which informal channels matter more than the formal ones. This is almost never documented, and it is often the most operationally critical.",
          ]} />

          <Paragraph>
            Traditional knowledge management systems address the first layer reasonably well. Wikis, documentation platforms, and CRM systems can store explicit knowledge with reasonable fidelity. But they do nothing for the second and third layers — and it is precisely those layers that determine whether an organisation operates at full capacity or spends the first six months after every departure rebuilding what it already had.
          </Paragraph>

          <ChapterDivider chapter="Section III" title="The Architecture of Organisational Memory" />

          <Paragraph>
            When we decided to give our company a memory, we did not start with technology. We started with the question that the SMILE framework always begins with: what is the impact we are trying to achieve? In this case: a new team member should be able to reach full operational context in days, not months. The institutional knowledge of every departing colleague should be preserved with enough fidelity to be operationally useful to their successor.
          </Paragraph>

          <Paragraph>
            The technical implementation followed from this intent. We began with eleven daily standup transcripts — raw text from the real conversations where work is actually coordinated. Not the polished meeting notes that get cleaned up and never quite capture what was said, but the actual language of the team in motion. From these, we mapped how information actually flows between people. Who raises blockers? Who resolves them? Who is the informal arbiter of disagreements? Whose opinion shapes decisions even when they are not formally in the decision? The org chart never shows this. The transcript analysis does.
          </Paragraph>

          <SectionLabel>The four components of a working organisational twin</SectionLabel>

          <BulletList items={[
            "Interaction mapping — understanding real communication flows from real data, not assumed flows from org charts.",
            "Context agents — AI agents built on each team member's communication patterns, decision history, and working vocabulary, capable of answering 'why was this built this way?' rather than just 'what does this do?'",
            "Decision provenance — automated capture of the context, options considered, and rationale behind significant decisions, linked to the decisions themselves.",
            "Onboarding simulations — structured scenarios that let a new hire stress-test their understanding of the system before they are in a position where getting it wrong has consequences.",
          ]} />

          <Paragraph>
            The result is not a replacement for human judgment or human relationship-building. It is a scaffold — something a new hire can lean on while they are developing their own context, and something the organisation can consult when it needs to reconstruct reasoning that is no longer in anyone's active memory.
          </Paragraph>

          <Paragraph keyLine>
            The next hire does not start from zero. They start from memory.
          </Paragraph>

          <ChapterDivider chapter="Section IV" title="Field Evidence — What We Have Seen" />

          <Paragraph>
            This architecture is not theoretical. Across WINNIIO&apos;s client engagements in construction project management, municipal infrastructure, agricultural operations, and health administration, the pattern of knowledge attrition is consistent. The domain changes. The mechanism does not.
          </Paragraph>

          <CaseEvidence
            location="Construction — Northern Europe"
            finding="A major infrastructure project lost its lead coordinator eighteen months before completion. Three months of delay and significant rework followed — not because the technical knowledge was lost, but because the relational knowledge of how the contractor-subcontractor network actually operated was entirely in one person's head. A structured interaction mapping exercise at project start would have cost two days. The attrition cost three months."
            index={0}
          />

          <CaseEvidence
            location="Municipal Infrastructure — Eastern Europe"
            finding="A smart city initiative lost momentum when its internal champion moved to a different department. The programme&apos;s new lead had no access to the reasoning behind vendor selections, data architecture decisions, or the political context for why certain integration points had been deliberately avoided. Six months of strategy was effectively reset. The decisions themselves were documented. The reasoning behind them was not."
            index={1}
          />

          <CaseEvidence
            location="Agricultural Operations — Scandinavia"
            finding="A precision agriculture implementation lost its operational rhythm when seasonal workers did not return the following year. Knowledge of which fields had anomalous sensor readings, which irrigation schedules had been manually overridden and why, and which equipment combinations had produced unexpectedly poor results was entirely undocumented. The twin had captured the data. It had not captured the context."
            index={2}
          />

          <ChapterDivider chapter="Section V" title="The Digital Twin of Your Organisation" />

          <Paragraph>
            The phrase &ldquo;digital twin&rdquo; in most organisational contexts conjures images of 3D building models or factory floor simulations. But the underlying definition is more precise and more powerful: a digital twin is a computational model of a real system that is continuously updated with real data and can be used to simulate the future behaviour of that system.
          </Paragraph>

          <Paragraph>
            An organisation is a system. It has components (people, processes, tools), relationships (reporting lines, informal networks, contractual structures), and behaviours (how it responds to pressure, how it makes decisions, how it recovers from failure). All of these can be modelled. None of them are typically modelled well.
          </Paragraph>

          <Paragraph>
            What the agent-based approach described in this paper does is begin to close that gap — not by creating a 3D model of the office, but by creating a living representation of how the organisation actually works. The standup transcripts are the sensor data. The interaction maps are the system diagram. The context agents are the simulation layer. The onboarding scenarios are the decision support tool.
          </Paragraph>

          <SectionLabel>Standards and frameworks that underpin this approach</SectionLabel>

          <BulletList items={[
            "ISO 30401:2018 — Knowledge Management Systems: provides the governance framework for what organisational knowledge systems need to achieve.",
            "IEEE 2413-2019 — IoT Architecture: the same connectivity principles that govern physical sensor networks apply directly to the human interaction graphs that feed organisational twins.",
            "TOGAF and ArchiMate: enterprise architecture frameworks that, used correctly, begin to capture the relational and process layers that knowledge management systems typically miss.",
          ]} />

          <Paragraph>
            The agent layer — the AI components that hold and transfer context — is the new element. It is what converts a passive documentation system into an active memory. The distinction matters. A document that nobody reads is not memory. An agent that can answer questions, surface relevant history, and flag when a new decision conflicts with established context — that is memory.
          </Paragraph>

          <ChapterDivider chapter="Section VI" title="Implementation — Where to Start" />

          <Paragraph>
            The mistake most organisations make when approaching this problem is to treat it as a technology procurement exercise. They issue RFPs for knowledge management platforms, evaluate enterprise content management systems, and select tools before they have defined the problem. The technology is not the challenge. The problem definition is.
          </Paragraph>

          <Paragraph>
            The SMILE methodology inverts this sequence. Start with the specific impact you need to achieve — in this case, the onboarding time you need to reduce, or the type of decision context you need to preserve. Then work backwards to the data you need, the model that fits that data, and only then the tool that runs the model.
          </Paragraph>

          <SectionLabel>A practical starting sequence</SectionLabel>

          <BulletList items={[
            "Audit your current knowledge attrition — calculate the actual cost of the last three departures, including delay and rework. This number will focus executive attention.",
            "Map one team's actual interaction graph — use standup transcripts, Slack channel data, or email metadata to understand how information actually flows. Compare it to the org chart.",
            "Build one context agent for one departing team member — this is a three-day exercise. The output will be more useful than any exit interview.",
            "Simulate one onboarding — before the new hire starts, have them interact with the context agent. Measure what they know after one day versus what a typical new hire knows after one month.",
            "Measure and iterate — the value of organisational twins compounds over time. The first version captures 30% of the knowledge. The fifth version captures 80%.",
          ]} />

          <Paragraph>
            The goal is not a perfect system deployed at scale. The goal is a living system that gets better with every person who uses it, every decision that gets recorded, and every context that gets preserved. The first standup transcript you analyse will be imperfect. The hundredth will be precise. That is the nature of digital twins — they earn their value through continuity, not through one-time implementation.
          </Paragraph>

          <Paragraph keyLine>
            This is what a digital twin of your organisation looks like. Not a 3D model. A living memory.
          </Paragraph>

          <ChapterDivider chapter="Section VII" title="Conclusion — The Company That Remembers Wins" />

          <Paragraph>
            The knowledge economy is not primarily about acquiring knowledge. It is about retaining it. The organisations that will define the next decade are not the ones with the most talented individuals — talent is increasingly abundant and increasingly mobile. They are the ones whose institutional memory compounds faster than their turnover rate.
          </Paragraph>

          <Paragraph>
            AI agents are the first technology that makes this achievable at the granularity it requires. Not by replacing human judgment, but by encoding the context in which judgment was exercised. Not by eliminating the need for experienced people, but by ensuring that experience does not die when people leave.
          </Paragraph>

          <Paragraph>
            Our Scrum Master left. His successor walked into a system that already knew the team&apos;s rhythms, the history of every current blocker, and the reasoning behind every current process. The handover took three days instead of three months. The knowledge did not leave with him. It stayed.
          </Paragraph>

          <Paragraph>
            That is the company that remembered. That is the only kind of company that will remain competitive in an environment where the half-life of individual tenure is shrinking and the complexity of what organisations know is expanding.
          </Paragraph>

          <Paragraph>
            One world. Your world. Simulate it.
          </Paragraph>

        </article>

        <FootnoteBlock />
        <BackLink />

      </main>
    </>
  );
}
