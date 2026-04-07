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
    <div
      className="fixed top-0 left-0 right-0 z-50 h-px"
      style={{ background: "var(--color-border)" }}
    >
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
        <span
          className="text-[10px] tracking-[0.6em] uppercase"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
        >
          {chapter}
        </span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
      </div>

      <h2
        className="text-3xl md:text-4xl font-light"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}
      >
        {title}
      </h2>

      <div
        className="inline-block w-px h-8 mt-8"
        style={{ background: "linear-gradient(to bottom, var(--color-gold-dim), transparent)" }}
      />
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
      <p
        className="text-[10px] tracking-[0.55em] uppercase"
        style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
      >
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
          <li
            key={i}
            className="flex items-start gap-4 text-base md:text-lg leading-[1.9]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <span className="mt-[0.55em] flex-shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--color-gold-dim)" }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DataTable — generic multi-column
   ═══════════════════════════════════════════════════════════════ */

interface GenericTableProps {
  headers: string[];
  rows: string[][];
}

function DataTable({ headers, rows }: GenericTableProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="mb-12 transition-all duration-[1400ms] ease-out overflow-x-auto"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)" }}
    >
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left py-3 px-4 text-[10px] tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)", borderBottom: "1px solid var(--color-border)" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ borderBottom: "1px solid var(--color-border)", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3 px-4 leading-[1.7]"
                  style={{ color: j === 0 ? "var(--color-text)" : j === row.length - 1 ? "var(--color-gold)" : "var(--color-text-secondary)" }}
                >
                  {cell}
                </td>
              ))}
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
    <div
      ref={ref}
      className="mt-16 mb-8 text-center transition-all duration-[1400ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(12px)" }}
    >
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

export default function WhitepaperHealthcareRoadmap() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  const tamRows = [
    ["Pharma Biosimulation", "$3.9B", "$10B", "$5&ndash;25M", "2027"],
    ["Clinical Decision Support", "$5.8B", "$10.7B", "$2&ndash;10M", "2028"],
    ["Consumer Longevity / HNWI", "$20.4B", "$48.3B", "EUR 2&ndash;25M", "Now"],
    ["Healthcare Digital Twins", "$0.9B", "$3.6B", "$0", "2033+"],
    ["Public Health (grants)", "$28&ndash;35B", "$40B+", "EUR 0.3&ndash;1M", "Now"],
  ];

  const fundingRows = [
    ["Pre-seed", "EUR 1.5&ndash;2.5M", "Now", "EUR 6&ndash;12M post", "10 customers, M4 signed"],
    ["Seed", "EUR 4&ndash;8M", "2027", "EUR 20&ndash;40M", "EUR 150K MRR, 1 pharma pilot"],
    ["Series A", "EUR 12&ndash;20M", "2029", "EUR 60&ndash;120M", "EUR 1&ndash;3M ARR, published study"],
    ["Series B", "EUR 30&ndash;60M", "2031", "EUR 200&ndash;400M", "EUR 8&ndash;15M ARR, regulatory filing"],
    ["Series C / Pre-IPO", "EUR 80&ndash;150M", "2034", "EUR 600M&ndash;1.5B", "EUR 50&ndash;100M ARR"],
  ];

  const orgRows = [
    ["Layer", "Who Owns It", "What They Do", "What They Can&rsquo;t Do"],
  ];

  const competitorRows = [
    ["Certara", "$418.8M rev", "Molecular\u2192PK only", "YES", "120+ FDA drugs", "Gold standard"],
    ["Dassault", "$1.2B life sci", "Organ (heart) only", "YES (physics)", "Living Heart 10yr", "FDA co-author"],
    ["Siemens", "$23.8B healthineers", "Organ (imaging)", "NO (ML)", "Mayo Clinic AI", "MDR compliant"],
    ["HeartFlow", "$176M rev, $2.27B IPO", "Organ (coronary) only", "YES (CFD)", "130K patients", "FDA cleared"],
    ["Twin Health", "$950M val", "Body-level", "NO (black box)", "NEJM Catalyst", "Wellness only"],
    ["Unlearn.AI", "$130M+ raised", "Statistical twin", "NO (ML)", "EMA qualified", "Phase 2/3"],
    ["Life Atlas + M4", "EUR 250/mo", "Full stack (via LPI)", "YES (via M4)", "Zero", "Zero"],
  ];

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
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)" }}
        />

        {/* Floating motes */}
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
          {/* Vertical gold line */}
          <div className="mb-10 flex justify-center">
            <div className="w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
          </div>

          {/* Collection label */}
          <p
            className="text-xs tracking-[0.6em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          >
            Life Atlas &mdash; Strategy Document
          </p>

          {/* Category label */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}
          >
            Biological Digital Twins &nbsp;&bull;&nbsp; Apr 7, 2026
          </p>

          {/* Main title */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
          >
            Healing Fragmented Reality
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
          >
            The 15-Year Biological Digital Twin Roadmap
          </p>

          {/* Classification */}
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.35 }}
          >
            Board Eyes Only &mdash; 7 autonomous agent analyses
          </p>

          {/* Author */}
          <p
            className="text-sm mb-16"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.45, letterSpacing: "0.15em" }}
          >
            Life Atlas AB
          </p>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-3" style={{ color: "var(--color-gold-dim)" }}>
            <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Scroll
            </span>
            <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          Content
          ════════════════════════════════════════════════ */}
      <article className="max-w-[720px] mx-auto px-6 pb-32">

        {/* Thesis */}
        <div className="my-20">
          <Paragraph>
            Healthcare is broken because reality is fragmented. Cardiology doesn&apos;t talk to endocrinology.
            Drug discovery doesn&apos;t connect to clinical dosing. Physics simulation doesn&apos;t include biology.
            The human body doesn&apos;t respect these boundaries &mdash; it is a system of systems where a drug targeting
            one receptor cascades through signaling pathways, organ metabolism, hemodynamics, and immune response
            simultaneously. The biological digital twin is the first computational object that forces integration
            because modeling a whole person requires modeling the connections, not just the parts. Life Atlas,
            through the LPI governance layer and the M4 mechanistic engine, provides the orchestration protocol
            that makes this integration programmable, sovereign, and swappable.
          </Paragraph>
        </div>

        {/* Part 1 */}
        <ChapterDivider chapter="Part 1" title="Where We Are Today" />

        <SectionLabel>Clinically Proven (TRL 7&ndash;9)</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>JHU TWIN-VT cardiac digital twin &mdash;</strong> 100% arrhythmia-free at 1 year vs. 60% standard, n=10, NEJM April 2026.</>,
          <><strong style={{ color: "var(--color-text)" }}>Certara Simcyp &mdash;</strong> replaced 10 human trials; FDA accepted PBPK modeling for asciminib NDA.</>,
          <><strong style={{ color: "var(--color-text)" }}>HeartFlow FFRCT &mdash;</strong> 130,000+ patients, 600+ publications, 14% CV mortality reduction.</>,
          <><strong style={{ color: "var(--color-text)" }}>Unlearn.AI TwinRCTs &mdash;</strong> EMA qualified for Phase 2/3 primary analysis.</>,
          <><strong style={{ color: "var(--color-text)" }}>Stryker virtual patients &mdash;</strong> 50,000 virtual patients, 30% trial enrollment reduction.</>,
        ]} />

        <SectionLabel>Validated at Research Level (TRL 4&ndash;6)</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>M4 multi-organ glucose model &mdash;</strong> 300+ data points, 40+ time series, Cedersund/Frontiers 2021.</>,
          <><strong style={{ color: "var(--color-text)" }}>M4 drug discovery (GLP-1R agonist) &mdash;</strong> 16 new + 6 existing studies explained, AstraZeneca collaboration, bioRxiv Nov 2025.</>,
          <><strong style={{ color: "var(--color-text)" }}>STRATIF-AI stroke digital twins &mdash;</strong> &euro;6M+ EU Horizon, 15 partners, 8 hospitals, 6 countries.</>,
          <><strong style={{ color: "var(--color-text)" }}>Norlandia deployment &mdash;</strong> M4-based health monitoring for 2,400 employees.</>,
          <><strong style={{ color: "var(--color-text)" }}>Whole-cell simulation (JCVI-syn3A) &mdash;</strong> 4D digital twin of minimal bacterium, 200 GPU nodes, PNAS 2026.</>,
        ]} />

        <SectionLabel>The Three Chasms Nobody Has Bridged</SectionLabel>
        <DataTable
          headers={["Layer", "Who Owns It", "What They Do", "What They Can&rsquo;t Do"]}
          rows={[
            ["Molecular/PK", "Certara ($418.8M rev), Simulations Plus ($79.2M)", "Drug metabolism, PBPK", "Disease biology, whole-body outcomes"],
            ["Organ Physics", "Dassault (Living Heart), Ansys, HeartFlow ($2.27B IPO)", "Cardiac mechanics, CFD, FEA", "Biology — zero biochemistry capability"],
            ["Whole-Body Phenotype", "Twin Health ($950M val)", "Metabolic outcomes via AI", "Can\u2019t explain WHY \u2014 black box ML"],
          ]}
        />

        <Paragraph keyLine>
          M4 is the only published framework spanning molecule to whole body mechanistically.
        </Paragraph>

        {/* Part 2 */}
        <ChapterDivider chapter="Part 2" title="The Honest Reality Check" />

        <SectionLabel>What the Hostile VC Says</SectionLabel>
        <Paragraph>
          <strong style={{ color: "var(--color-text)" }}>Fundability at current state: 3/10. Macro thesis: TRUE.</strong>{" "}
          Zero M4 code in either Life Atlas repository. M4 collaboration agreement unsigned. Platform audit score 4.6/10.
          Revenue approximately EUR 250/month from 1 customer. Team: CEO + 1 Head of AI + interns.
        </Paragraph>
        <Paragraph>
          What would flip the verdict: signed M4 agreement with clear IP terms, 50+ paying customers (EUR 150K ARR),
          one working biological simulation feature in production, 2+ PhD computational biology hires, platform audit
          above 7/10, and critical security vulnerabilities resolved.
        </Paragraph>

        <SectionLabel>The 8 Questions Every Investor Will Ask</SectionLabel>
        <BulletList items={[
          "\u201cThe M4 agreement is unsigned. Why would Cedersund license to you instead of building SUND himself?\u201d",
          "\u201cYour internal audit scored 4.6/10 five days ago. Why is the platform ready for customers?\u201d",
          "\u201cNone of your 7-layer architecture exists in code. Explain the gap.\u201d",
          "\u201cHeartFlow spent $800M for ONE cardiac indication. You\u2019re raising EUR 2M for ALL of biology. Walk me through the math.\u201d",
          "\u201cWhere is the computational biology expertise on your team?\u201d",
          "\u201cWhat prevents Dassault or Siemens from building your whitespace in 6 months?\u201d",
          "\u201cWhat clinical evidence supports your pricing?\u201d",
          "\u201cWhat is the bus factor of this company?\u201d",
        ]} />

        {/* Part 3 */}
        <ChapterDivider chapter="Part 3" title="The Financial Model" />

        <SectionLabel>TAM by Segment (Evidence-Based)</SectionLabel>
        <DataTable
          headers={["Segment", "2024", "2030", "Life Atlas 2031 SOM", "First Revenue"]}
          rows={tamRows}
        />

        <SectionLabel>Funding Trajectory</SectionLabel>
        <DataTable
          headers={["Stage", "Amount", "When", "Valuation", "Gate"]}
          rows={fundingRows}
        />

        <Paragraph keyLine>
          The one number that matters right now: EUR 10,000 MRR by June 30, 2026.
        </Paragraph>

        <SectionLabel>Compute Is NOT the Bottleneck</SectionLabel>
        <Paragraph>
          Simulating one patient&apos;s metabolic response to an intervention costs $0.05&ndash;$0.50 in current cloud compute.
          At EUR 250/mo consumer pricing, compute is &lt;2% of revenue. Edge-native deployment reduces this to zero for
          patient-specific simulations at the device level.
        </Paragraph>

        {/* Part 4 */}
        <ChapterDivider chapter="Part 4" title="The Technical Architecture" />

        <SectionLabel>Multi-Scale Hierarchy</SectionLabel>
        <BulletList items={[
          "Level 0: Molecular (nm, ns\u2013us) \u2014 drug-receptor binding, enzyme kinetics",
          "Level 1: Subcellular (\u03bcm, ms\u2013s) \u2014 gene regulatory networks, metabolic pathways",
          "Level 2: Cellular (\u03bcm, s\u2013min) \u2014 cell state, proliferation, secretion",
          "Level 3: Tissue (mm, min\u2013hr) \u2014 spatial gradients, cell populations",
          "Level 4: Organ (cm, min\u2013day) \u2014 M4\u2019s current sweet spot",
          "Level 5: Multi-organ (body, hr\u2013day) \u2014 M4\u2019s multi-organ models",
          "Level 6: Whole-body (body, day\u2013yr) \u2014 integrated physiology, disease progression",
          "Level 7: Population (cohort, yr) \u2014 epidemiological validation, trial simulation",
        ]} />

        <SectionLabel>Three Coupling Patterns (All Required)</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Hierarchical Closure</strong> (molecular\u2192cellular): Pre-computed transfer functions. What M4 already does \u2014 receptor binding \u2192 Hill function in ODE.</>,
          <><strong style={{ color: "var(--color-text)" }}>FMI Co-Simulation</strong> (organ\u2194physics): FMU containers via FMI 2.0/3.0. SUND \u2192 FMU \u2192 Ansys Twin Builder. ~2\u20134 weeks development.</>,
          <><strong style={{ color: "var(--color-text)" }}>Agent-Based Bridging</strong> (immune/cancer): PhysiCell/CompuCell3D for spatial heterogeneity where ODEs fail.</>,
        ]} />

        <SectionLabel>Missing Organs (Priority-Ranked)</SectionLabel>
        <DataTable
          headers={["System", "Clinical Impact", "Effort", "Priority", "Key Integration with M4"]}
          rows={[
            ["Renal", "9/10", "1\u20132 person-years", "1 (best ROI)", "SGLT2, drug clearance, electrolytes"],
            ["Pulmonary", "8/10", "1\u20132 person-years", "2", "O\u2082 delivery, exercise, Ansys CFD"],
            ["Immune", "10/10", "3\u20135 person-years", "3 (hardest)", "Inflammation \u2192 insulin resistance"],
            ["Gut Microbiome", "8/10", "2\u20133 person-years", "4", "FBA \u2192 liver/metabolic boundary conditions"],
            ["Cancer", "10/10", "2\u20134 per type", "5", "Drug metabolism, immune, Ansys radiation"],
          ]}
        />

        <SectionLabel>Edge-Cloud Hybrid (The Moat)</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Cloud:</strong> Full models (500\u20135000 ODEs), parameter estimation, Ansys co-simulation.</>,
          <><strong style={{ color: "var(--color-text)" }}>Edge:</strong> Patient-specific reduced-order models (10\u201350 ODEs), WASM/native, &lt;1 second response.</>,
          "Cloud produces ROMs \u2192 pushed to edge \u2192 real-time predictions without connectivity. Neither Certara nor Twin Health does this.",
        ]} />

        {/* Part 5 */}
        <ChapterDivider chapter="Part 5" title="The 15-Year Roadmap" />

        <SectionLabel>Phase 1: Foundation (2026&ndash;2028) &mdash; Build Real Things</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Year 1 (2026&ndash;2027):</strong> Sign M4 agreement (BLOCKING). Deploy M4&apos;s existing models behind LPI. Build parameterization engine. First Ansys co-simulation proof-of-concept. Edge deployment: reduced-order glucose model on mobile. Ship to 50+ paying customers. Pre-seed close.</>,
          <><strong style={{ color: "var(--color-text)" }}>Year 2 (2027&ndash;2028):</strong> Add renal model. Add pulmonary gas exchange. Multi-organ coupling: glucose-liver-cardiovascular-renal integrated. Genomics integration: pharmacogenomics. Bayesian parameter estimation at scale. Seed round close. First pharma pilot signed.</>,
          <><strong style={{ color: "var(--color-text)" }}>Year 3 (2028&ndash;2029):</strong> Immune system v1. Cancer PK/PD for 2&ndash;3 drug classes. Population-scale validation: 10,000+ patient retrospective. First 510(k) submission for clinical decision support.</>,
        ]} />

        <SectionLabel>Phase 2: Clinical Validation (2029&ndash;2033) &mdash; Prove It Works</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Year 4&ndash;5 (2029&ndash;2031):</strong> Gut microbiome integration. Spatial tissue models. Full immune system v2. Endocrine expansion. Prospective validation results. Series A close. FDA clearance for diabetes management CDS. 12+ organ whole-body model validated for 3+ disease areas.</>,
        ]} />

        <SectionLabel>Phase 3: Scale (2033&ndash;2036) &mdash; Standard of Care</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Year 7&ndash;10 (2033&ndash;2036):</strong> Reproductive system, aging models (telomere, epigenetic clocks). Neural models (Alzheimer&apos;s amyloid/tau dynamics). Automated segmentation \u2192 mesh \u2192 simulation pipeline. ML-assisted discovery of ODE models from omics data. 100,000+ patients running continuously. Series B/C close. IPO window opens.</>,
        ]} />

        <SectionLabel>Phase 4: The Full Biological Digital Twin (2036&ndash;2041) &mdash; The Vision</SectionLabel>
        <BulletList items={[
          "Continuous model updating from every data point.",
          "Cross-scale coupling fully automated (molecular \u2192 whole-body).",
          "Generative model architectures \u2014 models generated, not hand-built.",
          "M4 becomes swappable (as designed) \u2014 simulation engines are commodities.",
          "LPI remains the protocol layer \u2014 the moat.",
          "Standard of care: digital twin for every patient. Life Atlas ARR: EUR 400M\u20131B (base case).",
        ]} />

        {/* Part 6 */}
        <ChapterDivider chapter="Part 6" title="The Regulatory Tailwind" />

        <Paragraph>
          The permission structure is forming now. ICH M15 (adopted January 29, 2026) delivers the first globally
          harmonized MIDD guideline. FDA Modernization Act 3.0 (December 2025) mandates animal testing alternatives.
          EU AI Act high-risk healthcare compliance creates an advantageous framework for explainable M4-based systems
          starting August 2027. EHDS enters force for standardized EU health data access in March 2029.
        </Paragraph>

        <Paragraph keyLine>
          CDRH regulates devices. CDER regulates drugs. No unified framework yet exists for twins that span both physics and pharmacology. Ansys + M4 via Life Atlas is the first platform at this intersection.
        </Paragraph>

        {/* Part 7 */}
        <ChapterDivider chapter="Part 7" title="Competitive Positioning" />

        <DataTable
          headers={["Company", "Revenue/Funding", "Mechanistic?", "Clinical Validation", "Regulatory"]}
          rows={[
            ["Certara", "$418.8M rev", "YES", "120+ FDA drugs", "Gold standard"],
            ["Dassault", "$1.2B life sci", "YES (physics)", "Living Heart 10yr", "FDA co-author"],
            ["HeartFlow", "$176M rev, $2.27B IPO", "YES (CFD)", "130K patients", "FDA cleared"],
            ["Twin Health", "$950M val", "NO (black box)", "NEJM Catalyst", "Wellness only"],
            ["Unlearn.AI", "$130M+ raised", "NO (ML)", "EMA qualified", "Phase 2/3"],
            ["Life Atlas + M4", "EUR 250/mo", "YES (via M4)", "Zero", "Zero"],
          ]}
        />

        <SectionLabel>Investor Response Cards</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Re: Twin Health &mdash;</strong> &ldquo;They prove employers pay $8K/member for metabolic twins. We provide the explainable mechanism they can&apos;t. Same market, defensible science.&rdquo;</>,
          <><strong style={{ color: "var(--color-text)" }}>Re: Certara &mdash;</strong> &ldquo;They proved regulators accept computational evidence. We extend that from PK to whole-body disease modeling. Complementary, not competitive.&rdquo;</>,
          <><strong style={{ color: "var(--color-text)" }}>Re: Dassault &mdash;</strong> &ldquo;Physics without biology. $1.2B in life sciences revenue and still no biochemistry capability. We&apos;re the biology layer.&rdquo;</>,
          <><strong style={{ color: "var(--color-text)" }}>Re: Siemens &mdash;</strong> &ldquo;Imaging + AI, not mechanistic modeling. When you need to explain WHY a drug works, you need ODEs, not neural networks.&rdquo;</>,
        ]} />

        {/* Part 8 */}
        <ChapterDivider chapter="Part 8" title="The Philosophical Foundation" />

        <Paragraph>
          The biological digital twin is the ultimate boundary-spanning object because the body itself is the ultimate
          boundary-spanning system. A Type 2 diabetes patient on a GLP-1 agonist experiences one reality: their body,
          their life, their outcomes. M4 models the biology. Ansys models the physics. The fragmentation is in our
          systems, not in nature.
        </Paragraph>

        <Paragraph>
          Life Atlas is NOT the simulation engine. M4 is the current best engine &mdash; but architecturally swappable,
          and eventually generatable. Life Atlas IS the protocol layer: absorbing the past, emulating the present,
          simulating the future, transcending the now.
        </Paragraph>

        <Paragraph keyLine>
          This is the Ethereum analogy: Ethereum is not the EVM. Ethereum is the protocol. The EVM is swappable. Life Atlas is not M4. Life Atlas is the protocol. M4 is swappable.
        </Paragraph>

        {/* Sources */}
        <ChapterDivider chapter="Appendix" title="Sources" />

        <SectionLabel>Scientific</SectionLabel>
        <BulletList items={[
          "JHU TWIN-VT Trial \u2014 NEJM, April 2026",
          "M4 Drug Discovery \u2014 bioRxiv, November 2025 (doi: 10.1101/2025.11.03.686224v1)",
          "SUND Toolbox \u2014 arXiv, October 2025 (doi: 10.48550/arXiv.2510.13932)",
          "Cedersund Multi-Level Glucose Model \u2014 Frontiers in Physiology, 2021",
          "Whole-Cell 4D Simulation \u2014 PNAS, March 2026",
          "EU EDITH Roadmap \u2014 Zenodo, October 2025 (doi: 10.5281/zenodo.14769224)",
        ]} />

        <SectionLabel>Financial</SectionLabel>
        <BulletList items={[
          "Certara FY2024: $418.8M revenue",
          "HeartFlow FY2025: $176M revenue, $2.27B IPO",
          "Twin Health: $950M valuation, $319M total raised",
          "Biosimulation market: $4.47B \u2192 $9.81B by 2030 at 17% CAGR (Grand View Research)",
          "Drug morbidity cost: $528.4B/yr (Watanabe et al., Annals of Pharmacotherapy 2018)",
        ]} />

        <SectionLabel>Regulatory</SectionLabel>
        <BulletList items={[
          "ICH M15 adopted January 29, 2026 (RAPS)",
          "FDA Modernization Act 3.0 passed December 2025",
          "FDA animal testing phase-out April 2025",
          "EHDS Regulation 2025/327 entered force March 26, 2025",
          "EU AI Act high-risk healthcare compliance August 2027",
        ]} />

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
