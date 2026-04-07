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
        style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))" }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Paragraph
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
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transitionDelay: `${delay}ms`, maxWidth: "640px" }}
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
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}
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
    <div ref={ref} className="mt-12 mb-4 transition-all duration-[1200ms] ease-out" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)" }}>
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
    <div ref={ref} className="mb-10 transition-all duration-[1400ms] ease-out" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}>
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
   MappingTable — Ethereum / LPI
   ═══════════════════════════════════════════════════════════════ */

function MappingTable({ rows }: { rows: [string, string][] }) {
  const { ref, visible } = useFadeIn(0.1);
  return (
    <div ref={ref} className="mb-12 transition-all duration-[1400ms] ease-out overflow-x-auto" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)" }}>
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Ethereum", "LPI"].map((h) => (
              <th key={h} className="text-left py-3 px-4 text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)", borderBottom: "1px solid var(--color-border)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([eth, lpi], i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--color-border)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
              <td className="py-3 px-4 leading-[1.7]" style={{ color: "var(--color-text-secondary)" }}>{eth}</td>
              <td className="py-3 px-4 leading-[1.7]" style={{ color: "var(--color-gold)" }}>{lpi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BackLink
   ═══════════════════════════════════════════════════════════════ */

function BackLink() {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} className="mt-16 mb-8 text-center transition-all duration-[1400ms] ease-out" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)" }}>
      <a
        href="/"
        className="inline-block text-xs tracking-[0.4em] uppercase transition-colors duration-300"
        style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-gold)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-gold-dim)"; }}
      >
        &larr;&nbsp;&nbsp;The Sentinel Stories
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function WhitepaperLpiProtocol() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  const ethereumRows: [string, string][] = [
    ["Blockchain (state machine)", "Body (biological state machine)"],
    ["Transactions", "Biological data inputs"],
    ["Smart contracts", "Mechanistic models (autonomous agents)"],
    ["Account holders", "Sovereign individuals"],
    ["EVM (execution environment)", "LPI (simulation environment)"],
    ["Gas mechanism", "Computational resource metering"],
    ["ETH tokens", "LIFE tokens (biological value exchange)"],
    ["Nodes", "Sovereign community nodes (edge devices)"],
  ];

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <StoryNav />

      {/* ════════════════════════════════════════════════
          Title Screen
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)" }} />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 4 === 0 ? "2px" : "1px",
                height: i % 4 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.06 + (i % 5) * 0.025,
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 6) * 14}%`,
                animation: `mote ${9 + i * 1.4}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={titleRef}
          className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "none" : "translateY(28px)" }}
        >
          <div className="mb-10 flex justify-center">
            <div className="w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
          </div>

          <p className="text-xs tracking-[0.6em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Life Atlas &mdash; Protocol Paper
          </p>

          <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
            Sovereign Biology &nbsp;&bull;&nbsp; Apr 2026
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
          >
            The Life Programmable Interface
          </h1>

          <p
            className="text-xl md:text-2xl font-light italic mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
          >
            A Protocol for Sovereign Biological Intelligence
          </p>

          <p className="text-sm mb-16" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.45, letterSpacing: "0.15em" }}>
            Nicolas Waern &mdash; Life Atlas AB
          </p>

          <div className="flex flex-col items-center gap-3" style={{ color: "var(--color-gold-dim)" }}>
            <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
            <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          Content
          ════════════════════════════════════════════════ */}
      <article className="max-w-[720px] mx-auto px-6 pb-32">

        {/* Abstract */}
        <div className="my-20">
          <Paragraph>
            Every human being alive today is biologically illiterate about their own body. The average person has more
            diagnostic data about their car&apos;s engine than about their metabolism. The cost of this fragmentation is
            staggering: $528.4 billion annually in drug-related morbidity and mortality in the United States alone.
            Nine out of ten drug candidates fail clinical trials, predominantly because we do not understand the systems
            they target. Seventy-five percent of oncology drugs produce no measurable benefit for the specific patient
            who receives them.
          </Paragraph>
          <Paragraph>
            This paper proposes a protocol: the Life Programmable Interface (LPI). LPI is a sovereign, edge-native,
            engine-agnostic protocol layer for biological digital twins &mdash; designed to serve all 8 billion people,
            not as a product, but as infrastructure. Like TCP/IP for communication or HTTP for information, LPI provides
            the protocol layer upon which an entire ecosystem of biological applications will be built.
          </Paragraph>
        </div>

        {/* Section II */}
        <ChapterDivider chapter="Section II" title="The Problem: Biological Illiteracy at Civilizational Scale" />

        <SectionLabel>The Fragmentation</SectionLabel>
        <Paragraph>
          A 45-year-old woman in Stockholm has her blood work at one clinic, her imaging at another, her genomic data
          with a direct-to-consumer company, her sleep data on a wristband, her glucose data on a patch, her medication
          history across three pharmacies, and her family medical history in her memory &mdash; partially, inaccurately,
          and incompletely. No system on Earth can take all of this information, unify it into a coherent model of her
          biology, and answer the question: what will happen to her if she changes nothing?
        </Paragraph>

        <SectionLabel>The Cost of Ignorance</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>$528.4 billion per year</strong> in drug-related morbidity and mortality in the US alone. For every dollar spent on drugs in nursing facilities, $1.33 is consumed in treating the drug-related morbidity those drugs cause.</>,
          <><strong style={{ color: "var(--color-text)" }}>90% clinical trial failure rate,</strong> with 40&ndash;50% of failures attributed to lack of efficacy. Biomarker-driven patient selection improves success from 16% to 57%.</>,
          <><strong style={{ color: "var(--color-text)" }}>$2.6 billion average cost</strong> to bring a single drug to market, an 80-fold increase in inflation-adjusted terms since 1950.</>,
          <><strong style={{ color: "var(--color-text)" }}>2.1 months median improvement</strong> in progression-free survival for cancer drugs approved between 2002 and 2014 &mdash; billions in R&D producing weeks of additional life.</>,
          <><strong style={{ color: "var(--color-text)" }}>1.2 million preventable adverse drug events</strong> from injectable medications alone in US hospitals annually, costing $2.7&ndash;5.1 billion per year.</>,
        ]} />

        <Paragraph keyLine>
          The missing layer is not more data. It is not better AI. It is a mechanistic, individual-level, continuously-updated computational model of human biology.
        </Paragraph>

        {/* Section III */}
        <ChapterDivider chapter="Section III" title="The Vision: A Biological Operating System for Every Human" />

        <SectionLabel>The Three Temporal Modes</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Absorb the past.</strong> Every blood test ever taken. Every imaging study. Every medication prescribed and its observed effect. Every genomic variant. Every wearable data stream. The twin&apos;s first function is to become the unified, queryable record of an individual&apos;s biological history.</>,
          <><strong style={{ color: "var(--color-text)" }}>Emulate the present.</strong> Given the accumulated biological history, the twin continuously estimates the current state of the individual&apos;s physiology &mdash; not as a dashboard of numbers, but as a running simulation of what is generating those numbers.</>,
          <><strong style={{ color: "var(--color-text)" }}>Simulate the future.</strong> What if this medication is introduced at this dose? What if this dietary pattern continues for six months? What happens for this specific person, with this specific biology, at this specific moment?</>,
        ]} />

        <Paragraph>
          The longevity biohacker in Zurich who spends $20,000 per year on optimization is the first mover, not the
          market. The protocol is for the grandmother in rural Tamil Nadu who receives a $5 genomic chip and a basic
          smartphone with an edge-native twin. For the factory worker in Ho Chi Minh City whose twin detects early
          biomarkers of occupational chemical exposure. For the child in Lagos whose twin catches micronutrient
          deficiency patterns before they become irreversible cognitive damage.
        </Paragraph>

        <Paragraph keyLine>
          A biological network&apos;s value scales with the number and diversity of nodes. Everyone is building a better library. The protocol builds the laboratory.
        </Paragraph>

        <SectionLabel>The Mycelium Architecture</SectionLabel>
        <Paragraph>
          Mycorrhizal networks connect over 90% of plant species in forest ecosystems. They exhibit signal propagation,
          distributed resource allocation, scale-free topology with small-world properties, and emergent learning &mdash;
          no central authority. Each person&apos;s twin is a node. Anonymized signals flow through the network. When one
          person with a similar metabolic profile responds to an intervention, the network propagates that signal to
          relevant nodes. The intelligence is emergent, driven by the density of connections and the quality of signals.
        </Paragraph>

        {/* Section IV */}
        <ChapterDivider chapter="Section IV" title="The Protocol: Life Programmable Interface" />

        <SectionLabel>Architecture: Three Layers</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Layer 1: The Edge Twin.</strong> A lightweight biological model running on the individual&apos;s own device. All raw data remains on the device. The edge twin is sovereign: the individual owns it, controls it, and can destroy it. No cloud dependency required for core functionality.</>,
          <><strong style={{ color: "var(--color-text)" }}>Layer 2: The LPI Gateway.</strong> The protocol itself &mdash; standardized data schemas, query language (&ldquo;simulate 90 days of metformin 500mg given current metabolic state&rdquo;), cryptographically enforced consent and access control, engine interface, and network signaling.</>,
          <><strong style={{ color: "var(--color-text)" }}>Layer 3: The Network Fabric.</strong> The distributed network of twins forming the mycelium. Handles matchmaking, collective simulation (assembling virtual cohorts), signal propagation, and economic settlement.</>,
        ]} />

        <SectionLabel>Why a Protocol, Not a Product</SectionLabel>
        <Paragraph>
          Every transformative infrastructure layer in human history followed the same pattern: fragmented proprietary
          systems converge on an open protocol, and the protocol becomes the foundation for an ecosystem orders of
          magnitude larger than any single product. Communication: telegraph &rarr; telephone &rarr; TCP/IP. Information:
          books &rarr; libraries &rarr; HTTP. Biology: symptoms &rarr; diagnostics &rarr; wearables &rarr; <strong style={{ color: "var(--color-text)" }}>???</strong> &rarr; utility.
          The ??? is LPI.
        </Paragraph>

        <SectionLabel>The Ethereum Mapping</SectionLabel>
        <MappingTable rows={ethereumRows} />

        <Paragraph>
          Ethereum&apos;s five design principles map directly: Simplicity (anyone can implement a conforming client),
          Universality (no opinions about which diseases matter), Modularity (every component separable and replaceable),
          Agility (versioned and upgradeable as biology advances), Non-discrimination (serves Zurich biohacker and
          Nairobi community health worker with equal architectural commitment).
        </Paragraph>

        <SectionLabel>Mechanistic Over Statistical: Why Physics Beats Statistics for Biology</SectionLabel>
        <Paragraph>
          A statistical model trained on 100,000 patients taking metformin can predict average response. It cannot
          explain <em>why</em> a specific patient responds differently, because it does not represent the metabolic
          pathways metformin affects. It cannot simulate what happens when that patient simultaneously starts a new
          medication that interacts with the same pathways. It cannot predict response to a drug combination that has
          never been tested.
        </Paragraph>
        <Paragraph>
          Mechanistic models &mdash; systems of differential equations representing actual biochemical processes &mdash; can
          do all of these things. Every prediction has a mechanistic trace: the rate of hepatic glucose production,
          governed by these enzyme kinetics, given this substrate concentration, at this insulin sensitivity level,
          produces this trajectory. A black-box model that recommends a medication change and cannot explain why is
          unacceptable for clinical use. Explainability is not a feature. It is the foundation.
        </Paragraph>

        {/* Section V */}
        <ChapterDivider chapter="Section V" title="The Economics: From Biological Data to Biological Value" />

        <SectionLabel>The Current Model Is Extractive</SectionLabel>
        <Paragraph>
          Today, biological data flows in one direction: from individuals to institutions. You take a blood test;
          the lab stores the results. You wear a CGM; the manufacturer aggregates your glucose patterns. You participate
          in a clinical trial; the pharmaceutical company owns the dataset. In every case, the individual who generated
          the data receives nothing for the downstream value it creates.
        </Paragraph>

        <SectionLabel>The Protocol Model Is Generative</SectionLabel>
        <BulletList items={[
          "You contribute an anonymized metabolic pattern to the network and earn LIFE credits proportional to the novelty and utility of the contribution.",
          "A pharmaceutical company queries the network: 10,000 individuals with a specific genetic variant and longitudinal biomarker measurements. The company pays in LIFE tokens. Tokens flow to contributing nodes.",
          "You redeem LIFE credits for premium simulation capabilities, advanced biomarker testing, specialized engine access, or clinical consultations.",
          "At sufficient scale, biological data contribution becomes a meaningful economic activity. For individuals in low-income settings, this is not speculative altruism. It is the logical economic consequence of a protocol that properly prices biological data.",
        ]} />

        <Paragraph keyLine>
          Your biology is a productive asset. The protocol makes it legible, queryable, and compensable &mdash; without ever surrendering ownership.
        </Paragraph>

        {/* Section VI */}
        <ChapterDivider chapter="Section VI" title="The Technology: Exponential Convergence" />

        <SectionLabel>Five Curves Converging Simultaneously</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Genomics:</strong> $3 billion in 2003 (Human Genome Project). $200 in 2023 (Illumina NovaSeq X). Approaching $10 projected 2028&ndash;2030. At $1 &mdash; achievable this decade &mdash; it becomes as routine as a blood pressure reading.</>,
          <><strong style={{ color: "var(--color-text)" }}>Sensors:</strong> CGM is the template. From hospital-only prescription in 2018 to FDA OTC approval in 2024 (Abbott Lingo, Dexcom Stelo). Market projected at $22 billion by 2034. Continuous multi-analyte patches in late-stage development.</>,
          <><strong style={{ color: "var(--color-text)" }}>Compute:</strong> GPT-4-class inference: $20 per million tokens in late 2022. $0.40 per million tokens in early 2026 &mdash; a 1,000x reduction in 3.5 years. Biological twin simulation costs $0.05&ndash;$0.50 per patient per month.</>,
          <><strong style={{ color: "var(--color-text)" }}>AI for Biology:</strong> AlphaFold predicted 200+ million protein structures. Foundation models trained on multi-omics data predict cellular responses with accuracy exceeding all previous approaches. AI accelerates mechanistic model construction from person-years to months.</>,
          <><strong style={{ color: "var(--color-text)" }}>Edge Computing:</strong> Edge-enabled wearables achieve 92.1% accuracy in real-time health state classification. 97.4% bandwidth reduction. 7.2 days between charges vs. 1.8 for cloud-dependent devices. Raw biological data never leaves the individual&apos;s possession.</>,
        ]} />

        <Paragraph keyLine>
          Linear thinking says whole-body digital twins will take 30&ndash;50 years. Exponential convergence says 10. The difference &mdash; 20 years &mdash; is measured in lives.
        </Paragraph>

        {/* Section VII */}
        <ChapterDivider chapter="Section VII" title="The Network: Mycelium Intelligence" />

        <SectionLabel>Collective Simulation: Virtual Cohorts</SectionLabel>
        <Paragraph>
          A researcher hypothesizes that people with a specific combination of MTHFR variant, elevated homocysteine,
          and vitamin B12 deficiency will respond to a particular methylation support protocol. Testing this hypothesis
          conventionally requires a clinical trial: 18&ndash;24 months, $10&ndash;50 million, regulatory approval, patient
          recruitment.
        </Paragraph>
        <Paragraph>
          On the biological twin network: query the LPI gateway, assemble 5,000 matching twins, simulate 90-day
          response on each twin independently, locally, with results aggregated anonymously. Within hours, a preliminary
          signal. If positive, proceed to clinical validation. If negative, iterate. This does not replace clinical
          trials. It is a filter that ensures only the most promising hypotheses reach clinical trials &mdash; attacking
          the 90% failure rate by eliminating interventions that fail <em>in silico</em> before they fail in humans.
        </Paragraph>

        <SectionLabel>The Agentic Layer</SectionLabel>
        <Paragraph>
          Your twin is not a dashboard. It is your agent. It runs continuously. It monitors incoming data streams,
          detects shifts, cross-references with the network, identifies that people with your profile who showed the
          same pattern had specific outcomes, and surfaces the insight. At the network level, twin agents form temporary
          coalitions: 500 people with similar APOE4 profiles pool anonymized data to test an Alzheimer&apos;s prevention
          hypothesis. Research institutions query the agent network. Agents respond on behalf of their humans, with
          consent pre-configured by the individual.
        </Paragraph>

        {/* Section VIII */}
        <ChapterDivider chapter="Section VIII" title="The Path: Who Moves First" />

        <SectionLabel>The Adoption Curve Is Already Visible</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Prenuvo:</strong> $142.8M revenue (2025), $275M total funding, 17 dedicated centers. Full-body MRI at $2,500 per scan. Demand exceeds capacity at every location.</>,
          <><strong style={{ color: "var(--color-text)" }}>Function Health:</strong> $2.5B valuation (November 2025), $298M Series B. 160+ lab test membership at $365/year.</>,
          <><strong style={{ color: "var(--color-text)" }}>Twin Health:</strong> $950M valuation (August 2025), 71% diabetes reversal rate (Cleveland Clinic, NEJM Catalyst), $8,000+ annual savings per member, &lt;1% voluntary churn.</>,
        ]} />

        <Paragraph>
          These companies prove the market exists. They also reveal the limitation: each provides a <em>fragment</em> of
          biological intelligence. None provides a unified, mechanistic, continuously-updated digital twin. None
          connects to a network. None offers sovereignty over the underlying data and model.
        </Paragraph>

        <SectionLabel>The Four Phases</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Phase 1: Anchor (Years 1&ndash;3).</strong> Collect, unify, and structure existing biological data. Deliver immediate value: &ldquo;here is everything known about your biology, in one place, under your control, for the first time.&rdquo;</>,
          <><strong style={{ color: "var(--color-text)" }}>Phase 2: Model (Years 2&ndash;5).</strong> Layer the digital twin on top of anchored data. Begin simulation: metabolic modeling first, expanding to cardiovascular, endocrine, immune, and neurological systems as engines mature.</>,
          <><strong style={{ color: "var(--color-text)" }}>Phase 3: Connect (Years 4&ndash;7).</strong> Join the network. Contribute anonymized insights and receive network intelligence. The mycelium begins to carry signal.</>,
          <><strong style={{ color: "var(--color-text)" }}>Phase 4: Automate (Years 6&ndash;10).</strong> Twin agents operate autonomously on behalf of their humans: negotiate data access requests, participate in virtual cohorts, surface intervention opportunities, manage consent.</>,
        ]} />

        {/* Section IX */}
        <ChapterDivider chapter="Section IX" title="The Governance: Linux Foundation for Life" />

        <SectionLabel>Why Open Protocol</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Network effects require universality.</strong> A proprietary protocol fragments the network into competing silos &mdash; recreating exactly the fragmentation that plagues healthcare data today.</>,
          <><strong style={{ color: "var(--color-text)" }}>Trust requires transparency.</strong> Individuals will not entrust their most intimate data to a system they cannot inspect. Open specification, open reference implementation, auditable governance.</>,
          <><strong style={{ color: "var(--color-text)" }}>Longevity requires independence.</strong> Companies fail: 23andMe entered bankruptcy proceedings. Google Health shut down. A protocol that depends on a single company&apos;s survival is not infrastructure.</>,
          <><strong style={{ color: "var(--color-text)" }}>Innovation requires permissionlessness.</strong> The most consequential applications of the protocol have not been imagined yet. Open architecture ensures anyone can build them without gatekeepers.</>,
        ]} />

        <Paragraph>
          The proposed Life Protocol Foundation adopts the Linux Foundation model: Technical Steering Committee
          (computational biologists, systems biologists, clinical informaticists), Ethics Board (bioethicists, patient
          advocates, privacy researchers, representatives from underserved and indigenous communities), and Community
          Council. Explicitly excluded from governance veto power: insurance companies, pharmaceutical companies with
          commercial interests in data access, and government surveillance agencies.
        </Paragraph>

        <Paragraph>
          Life Atlas AB operates the first commercial applications built on LPI. The company&apos;s role is analogous to
          Canonical&apos;s relationship with Ubuntu: build the reference implementation, fund development, demonstrate
          viability, and progressively transfer governance to the Foundation as the community matures. The protocol
          does not depend on any single company. That is the point.
        </Paragraph>

        {/* Section X */}
        <ChapterDivider chapter="Section X" title="The Future: What 2036 Looks Like" />

        <SectionLabel>An Individual</SectionLabel>
        <Paragraph>
          Maria is 34, lives in Medellin, and has had a biological digital twin since she was 24. When she became
          pregnant at 31, her twin modeled the metabolic shifts of pregnancy against her specific biology, identified
          a folate metabolism inefficiency linked to her MTHFR variant, and surfaced the finding three weeks before
          her prenatal labs would have caught the deficiency. Her obstetrician reviewed the twin&apos;s mechanistic trace
          &mdash; the specific enzyme kinetics, the pathway bottleneck, the predicted impact on neural tube development
          &mdash; confirmed the reasoning, and prescribed methylfolate accordingly. The twin did not replace the
          physician. The twin made the physician dramatically more effective.
        </Paragraph>

        <SectionLabel>A Population</SectionLabel>
        <Paragraph>
          In Dhaka, 200,000 twins are connected to the network. The network detects an anomalous pattern: a cluster of
          individuals showing simultaneous elevation of inflammatory markers &mdash; not from infection, but correlated
          with geography. An industrial pollutant discharge is identified and remediated. The detection occurred weeks
          before any individual would have sought medical attention, and months before traditional epidemiological
          surveillance would have detected the pattern.
        </Paragraph>

        <SectionLabel>Drug Development</SectionLabel>
        <Paragraph>
          A biotech company queries the network: assemble a virtual cohort of 50,000 twins with Type 2 diabetes on
          metformin monotherapy, across diverse genetic backgrounds. The simulation identifies three subpopulations with
          dramatically different response profiles &mdash; and a fourth subpopulation where the drug is predicted to cause
          hepatotoxicity through a specific CYP450 interaction. The company redesigns inclusion criteria and proceeds to
          human trials with a 40% higher probability of success. Cost of the virtual trial: $500,000 over two weeks,
          versus $50 million over 18 months for traditional Phase II.
        </Paragraph>

        <Paragraph keyLine>
          Eight billion twins connected to a global mycelium. The average person understands their biology better than any physician could have understood it in 2025. This is not utopia. It is infrastructure.
        </Paragraph>

        {/* Section XI */}
        <ChapterDivider chapter="Section XI" title="Why Now, Why This Team" />

        <Paragraph>
          The biological digital twin is not a biology problem, a software problem, or a data problem. It is an
          <em> integration</em> problem &mdash; the same class of problem that digital twins solve in manufacturing,
          infrastructure, and aerospace. The insight that launched Life Atlas was architectural, not medical: the same
          methodology that creates digital twins for buildings and cities can create digital twins for human biology.
          SMILE (Sustainable Methodology for Impact Lifecycle Enablement) provides the interoperability framework
          that makes any simulation engine pluggable and any data source integrable.
        </Paragraph>

        <Paragraph>
          M4 is the only published framework that spans molecule to whole body mechanistically &mdash; from intracellular
          signaling through organ distribution to whole-body physiology, using ODE-based models validated against
          clinical data. It operates from a 15-person academic lab with zero regulatory submissions and zero patients
          managed clinically. The gap between scientific capability and commercial deployment is enormous. That gap is
          precisely why the protocol matters more than any single engine.
        </Paragraph>

        <Paragraph>
          The regulatory window for establishing protocol-level infrastructure &mdash; before the space fragments into
          competing proprietary standards owned by Certara, Dassault, or a tech giant &mdash; is open now. It will close
          when a dominant proprietary platform achieves sufficient regulatory acceptance to become the de facto standard.
          The open protocol must establish itself before that happens.
        </Paragraph>

        {/* Section XII */}
        <ChapterDivider chapter="Section XII" title="Call to Participation" />

        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Researchers:</strong> Contribute models. The LPI engine interface is open. Any mechanistic model of any organ system can be registered as an engine module. The protocol needs models for cardiovascular dynamics, immune response, neurological function, endocrine regulation, musculoskeletal mechanics, renal physiology, hepatic metabolism.</>,
          <><strong style={{ color: "var(--color-text)" }}>Clinicians:</strong> Contribute validation. The gap between computational prediction and clinical reality is closed only through validation against observed outcomes. Compare twin predictions against patient results. Report discrepancies.</>,
          <><strong style={{ color: "var(--color-text)" }}>Individuals:</strong> Contribute data. Every blood test, every wearable stream, every medication response &mdash; anchored in your twin, anonymized and contributed to the network on your terms &mdash; makes the network more intelligent. Your biological past is the most valuable asset you own that you are currently giving away for free.</>,
          <><strong style={{ color: "var(--color-text)" }}>Developers:</strong> Build on LPI. Build the CGM app that feeds the twin. Build the pharmacy integration that captures medication history. Build the clinical dashboard. Build the applications we have not imagined.</>,
          <><strong style={{ color: "var(--color-text)" }}>Organizations:</strong> Become nodes. Hospitals, clinics, employer health programs, research institutions, public health agencies &mdash; any organization that touches human health can operate a node.</>,
        ]} />

        <Paragraph keyLine>
          The human body has been a black box for the entirety of human history. The infrastructure to understand it as a whole, at the individual level, continuously, predictively, and sovereignly is now possible. Build it with us.
        </Paragraph>

        {/* Footer */}
        <div className="mt-16 mb-8 text-center">
          <p className="text-xs tracking-[0.3em] mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.4 }}>
            Life Atlas AB &mdash; Stockholm, Sweden
          </p>
          <p className="text-xs tracking-[0.25em]" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.3 }}>
            Protocol specification: open, engine-agnostic, sovereign by design &mdash; First engine: M4
          </p>
        </div>

        <BackLink />
      </article>

      <style jsx global>{`
        @keyframes mote {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.06; }
          50% { opacity: 0.15; }
          100% { transform: translateY(-36px) translateX(12px) scale(1.4); opacity: 0.02; }
        }
      `}</style>
    </main>
  );
}
