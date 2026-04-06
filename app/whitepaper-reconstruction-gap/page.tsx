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
   SectionLabel
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
   BulletList
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
   DataTable — for the timeline comparison table
   ═══════════════════════════════════════════════════════════════ */

interface TableRow {
  step: string;
  conventional: string;
  compressed: string;
}

interface DataTableProps {
  rows: TableRow[];
}

function DataTable({ rows }: DataTableProps) {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="mb-12 transition-all duration-[1400ms] ease-out overflow-x-auto"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Step", "Conventional", "Digital Twin Approach"].map((h) => (
              <th
                key={h}
                className="text-left py-3 px-4 text-[10px] tracking-[0.4em] uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-gold-dim)",
                  borderBottom: "1px solid var(--color-border)",
                }}
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
              style={{
                borderBottom: "1px solid var(--color-border)",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
              }}
            >
              <td
                className="py-3 px-4 leading-[1.7]"
                style={{ color: "var(--color-text)" }}
              >
                {row.step}
              </td>
              <td
                className="py-3 px-4 leading-[1.7]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {row.conventional}
              </td>
              <td
                className="py-3 px-4 leading-[1.7] font-medium"
                style={{ color: "var(--color-gold)" }}
              >
                {row.compressed}
              </td>
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
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <a
        href="/"
        className="inline-block text-xs tracking-[0.4em] uppercase transition-colors duration-300"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-gold-dim)";
        }}
      >
        &larr;&nbsp;&nbsp;The Sentinel Stories
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function WhitepaperReconstructionGap() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  const timelineRows: TableRow[] = [
    { step: "Field documentation", conventional: "2–6 weeks", compressed: "1–2 days" },
    { step: "Office processing", conventional: "4–8 weeks", compressed: "Hours" },
    { step: "Donor formatting", conventional: "2–4 weeks", compressed: "Hours" },
    { step: "Review and iteration", conventional: "4–12 weeks", compressed: "2–4 days" },
    { step: "Total", conventional: "6–24 months", compressed: "5–7 days" },
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
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
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
            Life Atlas &mdash; White Paper
          </p>

          {/* Category label */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            Infrastructure &nbsp;&bull;&nbsp; Apr 2026
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Reconstruction Gap
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-10 max-w-xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            How Digital Twins Can Accelerate Post-Conflict Infrastructure Recovery
          </p>

          {/* Author */}
          <p
            className="text-sm mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.45,
              letterSpacing: "0.15em",
            }}
          >
            by N.W. (Nicolas Waern)
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
          Abstract
          ════════════════════════════════════════════════ */}
      <article className="max-w-[720px] mx-auto px-6 pb-32">

        <div className="my-20">
          <Paragraph>
            The scale of infrastructure destruction in modern conflicts has outpaced our capacity to rebuild.
            Ukraine alone faces an estimated $800 billion in recovery needs. Yet the bottleneck is not capital
            &mdash; international donors have committed hundreds of billions. The bottleneck is the 6&ndash;24 month gap
            between documented damage and funding-ready project proposals. This paper examines why conventional
            approaches to post-conflict infrastructure assessment fail at scale, and how digital twin technology
            &mdash; specifically edge-native, standardized rapid assessment architectures &mdash; can compress that
            timeline from months to days.
          </Paragraph>
        </div>

        {/* ── Section 1 ── */}
        <ChapterDivider
          chapter="Section 1"
          title="The Problem: Unprecedented Destruction Meets Institutional Bottleneck"
        />

        <SectionLabel>1.1 The Scale</SectionLabel>
        <Paragraph>
          The full-scale war in Ukraine has produced infrastructure damage on a scale not seen in Europe since 1945.
          As of late 2025, the World Bank&apos;s Rapid Damage and Needs Assessment estimates total damages at
          $300&ndash;400 billion, with cumulative recovery and reconstruction needs approaching $800 billion over
          a five-year horizon. The destruction spans every category of civilian infrastructure: water and sanitation
          systems, district heating networks, electrical grids, transportation corridors, schools, hospitals,
          and administrative buildings.
        </Paragraph>
        <Paragraph>
          Kharkiv Oblast alone &mdash; Ukraine&apos;s second-largest population center, located 20&ndash;40 kilometers
          from the line of contact &mdash; exemplifies the challenge. Thousands of municipal assets have sustained
          damage ranging from partial to total destruction. Many remain in active service areas where communities
          continue to live, often without reliable access to clean water, heating, or sanitation.
        </Paragraph>
        <Paragraph>
          These are not abstract statistics. Behind every damaged water pumping station is a community of
          1,000&ndash;3,000 people carrying water from improvised sources. Behind every destroyed district heating
          plant is a winter where elderly residents heat their apartments with portable gas heaters &mdash; a practice
          that has caused dozens of fires and fatalities across Ukrainian cities since 2022.
        </Paragraph>

        <SectionLabel>1.2 The Funding Paradox</SectionLabel>
        <Paragraph>
          International financing for Ukraine&apos;s recovery is substantial and growing. The EU Ukraine Facility commits
          EUR 50 billion through 2027. The European Investment Bank has allocated over EUR 100 million in direct
          recovery lending. The EBRD, KfW, USAID, and the World Bank maintain active reconstruction portfolios.
          In April 2025 alone, 131 projects across 110 communities were funded through Ukraine&apos;s national DREAM
          ecosystem, totaling UAH 4.5 billion under a single EIB-backed program.
        </Paragraph>

        <Paragraph keyLine>
          Capital is available. The constraint is not money.
        </Paragraph>

        <Paragraph>
          The constraint is the capacity to transform documented destruction into the structured, auditable,
          standards-compliant project documentation that international financiers require before they can disburse funds.
        </Paragraph>

        <SectionLabel>1.3 The 6&ndash;24 Month Gap</SectionLabel>
        <Paragraph>
          The current pipeline from &ldquo;a destroyed water pipe on Street X&rdquo; to a funding-ready project
          application follows a predictable and painfully slow sequence.
        </Paragraph>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Damage documentation (2&ndash;6 weeks):</strong> An engineer physically visits the site, photographs damage, takes measurements, assesses structural integrity, and documents conditions manually.</>,
          <><strong style={{ color: "var(--color-text)" }}>Office processing (4&ndash;8 weeks):</strong> The engineer returns to an office, drafts descriptive sections, performs preliminary cost calculations, and prepares technical drawings.</>,
          <><strong style={{ color: "var(--color-text)" }}>Donor formatting (2&ndash;4 weeks):</strong> Documentation is reformatted to comply with the specific requirements of the target funding institution &mdash; World Bank, EIB, EBRD, KfW, and USAID each maintain distinct templates, assessment criteria, and compliance standards.</>,
          <><strong style={{ color: "var(--color-text)" }}>Review and iteration (4&ndash;12 weeks):</strong> The documentation is reviewed, returned for corrections, revised, and resubmitted &mdash; often multiple times.</>,
        ]} />
        <Paragraph>
          Total elapsed time: <strong style={{ color: "var(--color-text)" }}>6&ndash;24 months per asset.</strong> Total cost:
          tens of thousands of dollars per asset. With thousands of damaged assets in a single oblast, this approach
          produces a backlog that grows faster than it can be cleared.
        </Paragraph>

        {/* ── Section 2 ── */}
        <ChapterDivider
          chapter="Section 2"
          title="The Gap: Why Current Approaches Do Not Scale"
        />

        <SectionLabel>2.1 The Engineer Shortage</SectionLabel>
        <Paragraph>
          Ukraine&apos;s engineering workforce has been drastically reduced by three concurrent forces: military
          mobilization, international migration, and internal displacement. The engineers who remain are simultaneously
          needed for emergency repairs, ongoing military infrastructure work, and the daily maintenance of systems
          operating far beyond their design parameters.
        </Paragraph>
        <Paragraph>
          This is not a problem that can be solved by training more engineers. Training a qualified infrastructure
          assessment engineer takes 4&ndash;7 years. The reconstruction timeline operates on a 5&ndash;10 year horizon.
          The workforce gap is structural, not cyclical.
        </Paragraph>

        <SectionLabel>2.2 Security Constraints</SectionLabel>
        <Paragraph>
          In frontline and near-frontline regions, field assessment carries direct physical risk. Kharkiv Oblast
          communities at 20&ndash;40 kilometers from the line of contact experience regular shelling, drone attacks,
          and mine contamination. Beyond physical safety, geolocation data from field assessments carries security
          implications. A photograph with embedded GPS coordinates of a critical water treatment facility, shared
          through conventional channels, can become targeting intelligence.
        </Paragraph>

        <SectionLabel>2.3 The Standardization Deficit</SectionLabel>
        <Paragraph>
          Each municipality, each engineer, and each assessment follows its own conventions. Damage is described
          in narrative prose rather than structured data. The result is that even when documentation is produced,
          it frequently fails donor review on technical grounds &mdash; not because the underlying assessment is wrong,
          but because the format, structure, and supporting evidence do not meet the specific standards of the
          target funding institution.
        </Paragraph>

        <SectionLabel>2.4 The Institutional Capacity Gap</SectionLabel>
        <Paragraph>
          Local municipal administrations were designed to manage routine municipal operations, not mass reconstruction.
          Ukraine&apos;s national DREAM ecosystem explicitly acknowledges this gap. DREAM&apos;s own documentation identifies
          the need for &ldquo;ongoing capacity building of regional and local governments, specifically for project design
          and management.&rdquo; The national platform that manages the recovery pipeline recognizes that communities need
          help filling it.
        </Paragraph>

        {/* ── Section 3 ── */}
        <ChapterDivider
          chapter="Section 3"
          title="The Technology: Digital Twins for Rapid Infrastructure Assessment"
        />

        <SectionLabel>3.1 What Is a Minimum Viable Twin?</SectionLabel>
        <Paragraph>
          In the context of post-conflict infrastructure assessment, the relevant concept is a
          <strong style={{ color: "var(--color-text)" }}> Minimum Viable Twin (MVT)</strong> &mdash; a structured
          digital representation of a physical asset that prioritizes decision utility over simulation fidelity.
          An MVT contains: asset identification, damage characterization, service criticality, safety assessment,
          confidence scoring, and visual evidence with standardized photography and drone imagery.
        </Paragraph>
        <Paragraph>
          This is not a simulation model. It is a structured, auditable, machine-readable record of an asset&apos;s
          condition &mdash; designed to be enriched over time with BIM data, engineering surveys, and detailed modeling,
          but immediately useful in its minimum viable form for triage, prioritization, and documentation generation.
        </Paragraph>

        <SectionLabel>3.2 The Six-Module Architecture</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Module 1: Standardized Field Capture.</strong> A mobile application with guided prompts, standardized photo angles, condition checklists, and offline-first architecture. Field capture is performed by trained local submitters, not engineers &mdash; decoupling data collection from the scarce engineering resource.</>,
          <><strong style={{ color: "var(--color-text)" }}>Module 2: Automated Anonymization and Security.</strong> EXIF and GPS metadata removal, face and license plate blurring, and location sensitivity transformation &mdash; all performed automatically at the point of capture.</>,
          <><strong style={{ color: "var(--color-text)" }}>Module 3: Evidence Integrity.</strong> Cryptographic hashing and full version history for every artifact. Every photograph, measurement, and assessment is tamper-evident and fully auditable.</>,
          <><strong style={{ color: "var(--color-text)" }}>Module 4: Asset Digital Twin Creation.</strong> Automated generation of the MVT from captured field data. Each twin is expandable &mdash; designed to accept BIM overlays, GIS data, and detailed engineering surveys as they become available.</>,
          <><strong style={{ color: "var(--color-text)" }}>Module 5: Distributed Expert Triage.</strong> Micro-task decomposition for global expert reviewers: damage classification, root cause hypotheses, safety flagging, indicative scope estimation. Consensus scoring transforms triage from a sequential bottleneck into a parallel, distributed process.</>,
          <><strong style={{ color: "var(--color-text)" }}>Module 6: Interoperable Export.</strong> Documentation package generation in formats compliant with World Bank, EIB, EBRD, KfW, and USAID requirements. Output designed for compatibility with national recovery ecosystems such as Ukraine&apos;s DREAM platform.</>,
        ]} />

        <SectionLabel>3.3 The 10x Acceleration</SectionLabel>
        <DataTable rows={timelineRows} />

        <Paragraph keyLine>
          This is not a marginal improvement. It is an order-of-magnitude acceleration that changes the fundamental economics of post-conflict reconstruction.
        </Paragraph>

        {/* ── Section 4 ── */}
        <ChapterDivider
          chapter="Section 4"
          title="The Architecture: Why Edge-Native Matters in Conflict Zones"
        />

        <SectionLabel>4.1 The Connectivity Reality</SectionLabel>
        <Paragraph>
          Conventional cloud-first architectures assume reliable, high-bandwidth internet connectivity. In frontline
          and near-frontline regions, this assumption fails routinely. Infrastructure damage includes
          telecommunications towers and fiber optic networks. An infrastructure assessment platform that depends
          on real-time cloud connectivity will fail precisely when and where it is needed most.
        </Paragraph>

        <SectionLabel>4.2 Edge-Native Design Principles</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Offline-first field capture.</strong> Mobile applications store all captured data locally and synchronize when connectivity is available. Field teams can operate for days without network access.</>,
          <><strong style={{ color: "var(--color-text)" }}>Local processing.</strong> GPU-equipped workstations at the hub perform 3D visualization, twin creation, and anonymization processing locally, eliminating dependence on cloud compute for time-sensitive operations.</>,
          <><strong style={{ color: "var(--color-text)" }}>Selective synchronization.</strong> When connectivity is available, only processed, anonymized, security-cleared data is transmitted to cloud infrastructure. Raw field data remains on local, physically secured storage.</>,
          <><strong style={{ color: "var(--color-text)" }}>Data sovereignty by design.</strong> In a conflict environment, where data resides is not merely a compliance consideration &mdash; it is a security requirement.</>,
        ]} />

        <SectionLabel>4.3 The Hub-and-Spoke Model</SectionLabel>
        <Paragraph>
          The optimal deployment architecture for conflict-zone digital twin operations is a central hub with mobile
          field teams. GPU workstations, server infrastructure, LiDAR scanners, and drone equipment require secure,
          powered, climate-controlled facilities. A single physical facility is easier to secure, access-control,
          and monitor than a distributed network. Mobile field teams deploy from the hub to communities, perform
          standardized capture, and return. The hub processes, triages, and packages the output.
        </Paragraph>

        {/* ── Section 5 ── */}
        <ChapterDivider
          chapter="Section 5"
          title="The Ecosystem: Pipeline Feeders, Not Competitors"
        />

        <Paragraph>
          A critical design choice &mdash; perhaps the most important strategic decision in any digital twin deployment
          for post-conflict reconstruction &mdash; is whether the platform positions itself as a replacement for or a
          complement to existing engineering firms and national recovery systems.
        </Paragraph>

        <Paragraph keyLine>
          The correct answer is complement. Specifically: pipeline feeder.
        </Paragraph>

        <Paragraph>
          Engineering firms possess deep domain expertise in structural assessment, detailed design, cost engineering,
          and construction supervision. A digital twin platform for rapid assessment does not replicate this expertise.
          What it does is automate the earliest, highest-volume, lowest-margin segment of the recovery pipeline:
          the transformation of raw damage evidence into structured, standardized pre-feasibility documentation.
          Saving the firm 60&ndash;70% of its initial-stage effort makes the firm more productive, not less relevant.
        </Paragraph>

        <SectionLabel>Integration with DREAM</SectionLabel>
        <Paragraph>
          Ukraine&apos;s DREAM ecosystem integrates nine state IT systems into a single window for recovery project
          management. But DREAM works with projects that are already formed. It accepts applications from communities
          that already possess project design documentation, understand the scope of work, and can fill out
          standardized application forms. DREAM does not &mdash; and was not designed to &mdash; help communities prepare
          that documentation in the first place.
        </Paragraph>
        <Paragraph>
          This is precisely the gap that a rapid digital assessment platform fills. It is the front-end for DREAM:
          preparing cases that DREAM accepts and manages from that point forward.
        </Paragraph>

        {/* ── Section 6 ── */}
        <ChapterDivider
          chapter="Section 6"
          title="The Impact: From Documentation to Restored Services"
        />

        <SectionLabel>6.1 The Theory of Change</SectionLabel>
        <Paragraph>
          <strong style={{ color: "var(--color-text)" }}>If</strong> a rapid digital assessment platform provides
          standardized, funding-ready documentation for damaged infrastructure,{" "}
          <strong style={{ color: "var(--color-text)" }}>then</strong> communities can enter national recovery
          pipelines faster, <strong style={{ color: "var(--color-text)" }}>which</strong> accelerates their access
          to international financing, <strong style={{ color: "var(--color-text)" }}>resulting in</strong> earlier
          restoration of essential services &mdash; water, heating, sanitation &mdash; to conflict-affected residents.
        </Paragraph>
        <Paragraph>
          The leverage point is time. Every month that a damaged water system remains unrepaired is a month of
          degraded public health outcomes. Every winter that a district heating network remains offline is a winter
          of preventable suffering. The documentation gap is not an administrative inconvenience &mdash; it is a
          humanitarian bottleneck.
        </Paragraph>

        <SectionLabel>6.2 Quantifying the Impact</SectionLabel>
        <Paragraph>
          A conservative scenario for a single regional deployment: 50&ndash;100 damaged assets assessed in 18 months,
          30% conversion rate to funded feasibility studies (15&ndash;30 projects), 50% acceptance into the national
          pipeline (8&ndash;15 funded restoration projects), 1,000&ndash;3,000 residents served per restored asset.
          Result: 15,000&ndash;50,000 residents with restored essential services from a single hub.
          Scale this across multiple regions, and the aggregate impact reaches hundreds of thousands.
        </Paragraph>

        {/* ── Section 7 ── */}
        <ChapterDivider
          chapter="Section 7"
          title="The Future: A Replicable Model for a Recurring Need"
        />

        <Paragraph>
          Ukraine is today&apos;s most visible post-conflict reconstruction challenge, but the pattern of massive
          infrastructure destruction followed by a multi-year documentation bottleneck repeats across every modern
          conflict: Syria ($400 billion in cumulative damage since 2011), Libya, Gaza, Yemen, and the conflicts that
          have not yet happened. In every case, the same bottleneck appears: destruction is faster than documentation,
          documentation is slower than financing, and communities wait years for services that could be restored in months.
        </Paragraph>

        <SectionLabel>Technology Trajectory</SectionLabel>
        <BulletList items={[
          <><strong style={{ color: "var(--color-text)" }}>Near-term (1&ndash;3 years):</strong> AI-assisted damage classification from imagery. Automated preliminary cost estimation. Natural language generation of descriptive sections from structured twin data.</>,
          <><strong style={{ color: "var(--color-text)" }}>Medium-term (3&ndash;7 years):</strong> Procedural generation of recovery options. Given a digital twin populated with damage data, material availability, and budget parameters, the system generates 2&ndash;3 recovery options with comparative analysis.</>,
          <><strong style={{ color: "var(--color-text)" }}>Long-term (7&ndash;15 years):</strong> Full integration with national digital infrastructure registries. Continuous monitoring through IoT sensors and satellite imagery. The gap between damage and documentation approaches zero.</>,
        ]} />

        {/* ── Vision ── */}
        <ChapterDivider
          chapter="Vision"
          title="Closing the Reconstruction Gap"
        />

        <Paragraph>
          The reconstruction gap &mdash; the months and years between destruction and restoration &mdash; is not inevitable.
          It is an artifact of twentieth-century assessment methods applied to twenty-first-century destruction.
        </Paragraph>

        <Paragraph>
          Digital twin technology, deployed with edge-native architecture, standardized capture protocols, distributed
          expert triage, and pipeline-feeder positioning, can compress that gap from months to days. Not by replacing
          engineers, but by giving them structured, standardized, pre-processed inputs that eliminate the repetitive,
          low-value work that currently consumes the majority of their time.
        </Paragraph>

        <Paragraph keyLine>
          The technology exists. The architecture is proven. The standards are established. The financing is available. What remains is the will to deploy.
        </Paragraph>

        <Paragraph>
          The question is not whether post-conflict reconstruction will be digitized. The question is whether we will
          do it fast enough to matter for the communities that are waiting.
        </Paragraph>

        {/* ── Back link ── */}
        <BackLink />
      </article>

      <style jsx global>{`
        @keyframes mote {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.06;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-36px) translateX(12px) scale(1.4);
            opacity: 0.02;
          }
        }
      `}</style>
    </main>
  );
}
