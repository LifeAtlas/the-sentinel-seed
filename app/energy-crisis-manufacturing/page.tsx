"use client";
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
    <div className="fixed top-0 left-0 right-0 z-50 h-px" style={{ background: "var(--color-border)" }}>
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Paragraph
   ═══════════════════════════════════════════════════════════════ */

function Paragraph({ children, keyLine = false, delay = 0 }: {
  children: React.ReactNode;
  keyLine?: boolean;
  delay?: number;
}) {
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
        <div className="h-px mb-10 w-10 mx-auto" style={{ background: "var(--color-gold-dim)" }} />
        <p
          className="text-2xl md:text-3xl font-light italic leading-[1.55]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
        >
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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="text-base md:text-lg leading-[2] mb-8" style={{ color: "var(--color-text-secondary)" }}>
        {children}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ChapterDivider
   ═══════════════════════════════════════════════════════════════ */

function ChapterDivider({ chapter, title }: { chapter: string; title: string }) {
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

/* ═══════════════════════════════════════════════════════════════
   SectionLabel
   ═══════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: string }) {
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

/* ═══════════════════════════════════════════════════════════════
   BulletList
   ═══════════════════════════════════════════════════════════════ */

function BulletList({ items, delay = 0 }: { items: React.ReactNode[]; delay?: number }) {
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

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function EnergyCrisisManufacturing() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <>
      <ProgressBar />
      <StoryNav />

      <main className="min-h-screen">
        {/* Title */}
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/8 via-transparent to-transparent" />
          <div
            className="text-center px-6 relative max-w-3xl mx-auto transition-all duration-[2000ms] ease-out"
            style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              WINNIIO Perspectives — Whitepaper IV — Apr 2026
            </p>
            <h1
              className="text-4xl md:text-6xl font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}
            >
              The Hidden Energy Crisis
            </h1>
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
            >
              Why Swedish Manufacturing Is Bleeding Money Every Hour
            </p>
            <div className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] opacity-40">
              <span className="text-xs tracking-widest uppercase">Read</span>
              <div className="w-px h-8 bg-[var(--color-text-secondary)] animate-pulse" />
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-6 pb-32">

          <Paragraph keyLine>
            Swedish industry pays twice the electricity price of its American competitors — and still manages its consumption with static schedules written a decade ago. The technology to change this exists today. The question is purely one of execution.
          </Paragraph>

          <ChapterDivider chapter="The Problem" title="The Billion-Kronor Problem Nobody Is Measuring Correctly" />

          <Paragraph>
            Swedish metal manufacturing has an energy problem — and most companies are not measuring its true cost.
          </Paragraph>
          <Paragraph>
            On the surface, energy appears as a line item in the accounts: kilowatt-hours consumed, invoiced at the monthly rate. What this framing misses is the hour-by-hour dimension. In the Nord Pool spot market, electricity prices regularly swing by a factor of ten — sometimes a hundred — within a single day. A press running at 14:00 on a cold January afternoon costs fundamentally more to operate than the same press running at 02:00. Static production schedules, set weeks in advance, are blind to this reality.
          </Paragraph>
          <Paragraph>
            For the heaviest consumers — presses, punching machines, heat treatment furnaces, compressors — electricity represents 20 to 25 percent of direct production cost. That share is not fixed. It moves every hour, and it has been moving upward for years. EU electricity prices have roughly doubled relative to US levels since 2021. Energy is no longer a commodity managed by the finance department; it has become an operational variable that determines whether a production run is profitable.
          </Paragraph>
          <Paragraph>
            Swedish industry as a whole accounts for approximately 35 percent of national electricity consumption. Metal and steel processing represents the largest single share within that figure. The aggregate potential for optimization across the sector runs into billions of kronor annually — yet the typical factory still operates on the same energy management logic it used in 2010.
          </Paragraph>
          <Paragraph>
            The failure is not one of ambition. It is one of architecture.
          </Paragraph>

          <ChapterDivider chapter="The Limit" title="Why the Old Approach Cannot Scale" />

          <Paragraph>
            Existing energy management systems — SCADA platforms, building management systems, basic monitoring dashboards — were designed to observe, not to optimize. They answer the question &ldquo;what is happening?&rdquo; They do not answer &ldquo;what should happen next, and at which of our three facilities?&rdquo;
          </Paragraph>
          <Paragraph>
            The gap between observation and optimization is precisely where value is lost.
          </Paragraph>
          <Paragraph>
            Consider a manufacturer operating multiple facilities in different grid zones. Each site has its own energy contract, its own demand peaks, its own production schedule. When the spot price spikes at one location but remains low at another, there is a commercial opportunity to shift flexible loads across the portfolio. No SCADA system on the market today performs this calculation. No human operator can do it reliably at the speed and granularity that the market requires.
          </Paragraph>

          <SectionLabel>Three Forces Compressing the Timeline</SectionLabel>
          <BulletList items={[
            "The EU Energy Efficiency Directive, strengthened in 2023, sets binding targets that cascade to industrial consumers.",
            "The EU Taxonomy Regulation requires manufacturers consuming above defined thresholds to implement documented, data-driven energy management systems as a condition for access to green finance.",
            "The Digital Product Passport — mandatory for steel products from July 2026 — will require traceability of energy consumption per production batch. Companies that cannot produce this data will face barriers in procurement chains.",
          ]} />
          <Paragraph>
            The regulatory window is not years away. It is this year.
          </Paragraph>

          <ChapterDivider chapter="The Architecture" title="A Different Architecture for a Different Problem" />

          <Paragraph>
            The solution that this situation demands is not another monitoring layer. It is an AI system that closes the loop between observation and action — one that predicts, decides, and coordinates across multiple facilities in real time.
          </Paragraph>

          <SectionLabel>Five Non-Negotiable Requirements</SectionLabel>
          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Edge-native processing.</strong> Data must be processed at the facility, not uploaded to a remote cloud. Round-trip latency of 50 to 200 milliseconds is incompatible with real-time process control. Production data should not traverse public networks to be processed on infrastructure governed by foreign law.</>,
            <><strong style={{ color: "var(--color-text)" }}>Digital twin integration.</strong> A real-time, physics-coupled model of each facility provides the prediction layer. When the digital twin knows the current thermal state of a furnace, the production queue, and the spot price forecast for the next four hours, it can calculate the optimal sequence of operations with a degree of precision no human dispatcher can match.</>,
            <><strong style={{ color: "var(--color-text)" }}>Portfolio optimization.</strong> Single-facility optimization captures perhaps a third of the available value. The remainder comes from coordination across the portfolio.</>,
            <><strong style={{ color: "var(--color-text)" }}>Federated learning.</strong> When AI models improve through experience, that learning should be shared across facilities without centralizing raw production data. Research published in 2024 shows that federated approaches achieve 10 to 40 percent better prediction accuracy for energy applications compared to single-site models.</>,
            <><strong style={{ color: "var(--color-text)" }}>Open, replaceable components.</strong> Industrial AI infrastructure that creates vendor dependency has simply moved the lock-in problem from the energy contract to the software stack. The architecture must be built on open standards.</>,
          ]} />

          <Paragraph keyLine>
            A system that can predict energy demand 4 hours ahead with 90% accuracy, and coordinate load shifting across a portfolio of facilities, does not just reduce costs. It fundamentally changes what is possible in production scheduling.
          </Paragraph>

          <ChapterDivider chapter="The Evidence" title="What Proven Implementation Looks Like" />

          <Paragraph>
            This is not theoretical. The core of this architecture — edge-native AI processing, digital twin integration, real-time energy optimization — was validated in a live deployment in a Swedish educational facility between 2021 and 2022. Six wireless sensors per room, a local AI processing gateway, a digital twin of the building's thermal dynamics: the system achieved a 9.47 percent reduction in energy consumption over four months, with no changes to the physical plant.
          </Paragraph>
          <Paragraph>
            That proof point establishes the technology readiness. The scaling challenge from building to industrial metal production is real — industrial environments introduce electromagnetic interference, vibration, higher temperatures, and far more complex process flows — but it is an engineering problem, not a scientific one. The underlying architecture remains the same.
          </Paragraph>
          <Paragraph>
            The progression from TRL 4 to TRL 7 is the work of a structured three-year program. The milestones are concrete: a digital twin of at least two facilities operationally coupled to their energy systems; an AI model predicting energy demand with greater than 90 percent accuracy; a demonstrated energy cost reduction of 15 to 25 percent through flexible load management; portfolio optimization across at least two sites.
          </Paragraph>

          <ChapterDivider chapter="The Scale" title="The Opportunity and the Cost of Delay" />

          <Paragraph>
            Sweden has approximately 50 metal foundries and metal processing producers. If the results of a validated three-facility deployment could be extended to 10 percent of these within five years, the aggregate energy saving would amount to hundreds of gigawatt-hours per year — equivalent to the annual consumption of a medium-sized Swedish city.
          </Paragraph>
          <Paragraph>
            The global industrial energy management market is projected to reach $15.3 billion by 2028, growing at 14.2 percent annually. The companies that build competency in AI-driven energy optimization now will be positioned both to capture operational savings and to offer the capability as a service to their sector.
          </Paragraph>
          <Paragraph>
            For any Swedish manufacturer with significant electricity consumption, the relevant question is no longer whether AI-driven energy optimization is worth exploring. The question is how quickly the gap between current performance and achievable performance can be closed — and what the cost of every month of delay actually is.
          </Paragraph>

          <ChapterDivider chapter="The Path" title="Three Actions Define the Near Term" />

          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Establish a baseline.</strong> Instrument your highest-consumption processes with sensor coverage sufficient to generate minute-by-minute load profiles. You cannot optimize what you cannot see.</>,
            <><strong style={{ color: "var(--color-text)" }}>Model before you deploy.</strong> Build a digital representation of your facility's energy dynamics before investing in physical changes. The twin reveals the optimization potential and quantifies it before any capital is committed.</>,
            <><strong style={{ color: "var(--color-text)" }}>Design for the portfolio, not the site.</strong> Single-facility optimization leaves the majority of the value on the table. Any architecture you build today should be designed from the outset to coordinate across multiple locations.</>,
          ]} />

          <Paragraph>
            The hidden energy crisis in Swedish manufacturing is hidden only because it has not been measured at the right granularity, in the right time dimension, with the right intelligence applied to the data. The moment that changes, the scale of the opportunity — and the cost of inaction — becomes impossible to ignore.
          </Paragraph>

          {/* Footer */}
          <div className="mt-20 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
              WINNIIO AB develops edge-native AI platforms and digital twin implementations for industrial energy management. This paper reflects independent research and analysis; it does not constitute investment or procurement advice.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)", opacity: 0.4 }}>
              References: EU Energy Efficiency Directive (2023/1791); EU Taxonomy Regulation (2020/852); Energimyndigheten sector strategies 2024; Nord Pool market data 2021–2026; ScienceDirect federated learning energy research (2024); LF Edge / EdgeX Foundry documentation; Dragos Industrial Cybersecurity Report 2025; arXiv:2403.04326 (Linköping University / Energimyndigheten, 2024).
            </p>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-[var(--color-gold-dim)] transition-colors text-sm"
            >
              THE SENTINEL STORIES
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
