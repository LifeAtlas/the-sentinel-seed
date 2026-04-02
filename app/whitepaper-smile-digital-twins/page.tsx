"use client";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: React.ReactNode;
  keyLine?: boolean;
  delay?: number;
}

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
  id?: string;
}

interface FadeBlockProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
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
   FadeBlock — generic fade wrapper
   ═══════════════════════════════════════════════════════════════ */

function FadeBlock({ children, delay = 0, className = "" }: FadeBlockProps) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1400ms] ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
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

function ChapterDivider({ year, chapter, title, id }: ChapterDividerProps) {
  const { ref, visible } = useFadeIn(0.08);

  return (
    <div
      id={id}
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

      <p
        className="text-xs tracking-[0.6em] uppercase mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {year}
      </p>

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

      <h2
        className="text-3xl md:text-4xl font-light tracking-wide"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

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
   SectionHeading — for sub-sections (###)
   ═══════════════════════════════════════════════════════════════ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className="mt-12 mb-5 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <h3
        className="text-xl md:text-2xl font-light tracking-wide"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {children}
      </h3>
      <div
        className="mt-2 h-px w-16"
        style={{ background: "var(--color-gold-dim)", opacity: 0.4 }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SmileTable — styled dark-theme table
   ═══════════════════════════════════════════════════════════════ */

function SmileTable() {
  const { ref, visible } = useFadeIn(0.06);
  const rows = [
    {
      phase: "1",
      name: "Reality Emulation",
      description: "Create a shared reality canvas",
      activities:
        "Stakeholder mapping, GIS/BIM integration, \"where, when, who\" definition, virtual-first mindset",
    },
    {
      phase: "2",
      name: "Concurrent Engineering",
      description: "Define scope and validate hypotheses",
      activities:
        "As-is/to-be analysis, virtual user interaction, Minimal Viable Twin (MVT) definition",
    },
    {
      phase: "3",
      name: "Collective Intelligence",
      description: "Integrate physical sensors and meet KPIs",
      activities:
        "Ontology creation, IoT deployment, remote enablement, knowledge graph construction",
    },
    {
      phase: "4",
      name: "Contextual Intelligence",
      description: "Connect everything for real-time decisions",
      activities: "Command & control, predictive analytics, connected systems",
    },
    {
      phase: "5",
      name: "Continuous Intelligence",
      description: "Prescriptive and prognostic capabilities",
      activities:
        "AI-driven maintenance, universal event pipeline, simulation of everything",
    },
    {
      phase: "6",
      name: "Perpetual Wisdom",
      description: "Ecosystem enablement and knowledge sharing",
      activities:
        "Circular strategies, open-source contribution, global impact sharing",
    },
  ];

  return (
    <div
      ref={ref}
      className="my-10 overflow-x-auto transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <table
        className="w-full text-sm border-collapse"
        style={{ borderColor: "var(--color-border)" }}
      >
        <thead>
          <tr
            style={{
              borderBottom: "1px solid var(--color-gold-dim)",
              opacity: 0.9,
            }}
          >
            {["Phase", "Name", "Description", "Key Activities"].map((h) => (
              <th
                key={h}
                className="py-3 px-3 text-left text-[10px] tracking-[0.3em] uppercase font-normal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-gold-dim)",
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
              key={row.phase}
              style={{
                borderBottom: "1px solid var(--color-border)",
                background:
                  i % 2 === 0 ? "rgba(201,168,76,0.02)" : "transparent",
              }}
            >
              <td
                className="py-3 px-3 text-center font-light"
                style={{ color: "var(--color-gold-dim)" }}
              >
                {row.phase}
              </td>
              <td
                className="py-3 px-3 font-light italic"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "var(--color-text)",
                  fontSize: "0.95rem",
                  whiteSpace: "nowrap",
                }}
              >
                {row.name}
              </td>
              <td
                className="py-3 px-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {row.description}
              </td>
              <td
                className="py-3 px-3 text-[12px]"
                style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
              >
                {row.activities}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CodeBlock
   ═══════════════════════════════════════════════════════════════ */

function CodeBlock({ children }: { children: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className="my-8 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <pre
        className="rounded-md px-5 py-4 text-sm leading-[1.8] overflow-x-auto"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          background: "rgba(201,168,76,0.04)",
          border: "1px solid var(--color-border)",
          color: "var(--color-gold)",
          letterSpacing: "0.02em",
        }}
      >
        <code>{children}</code>
      </pre>
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
          e.currentTarget.style.color = "var(--color-gold)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--color-gold-dim)";
        }}
      >
        &larr;&nbsp;&nbsp;The Sentinel Stories
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TableOfContents
   ═══════════════════════════════════════════════════════════════ */

function TableOfContents() {
  const { ref, visible } = useFadeIn(0.05);
  const items = [
    { n: "1", label: "Introduction: The Convergence Opportunity", id: "section-1" },
    { n: "2", label: "The Japanese Context: Society 5.0 and Beyond", id: "section-2" },
    { n: "3", label: "The SMILE Methodology", id: "section-3" },
    { n: "4", label: "Critical Success Factors for Digital Twin Projects", id: "section-4" },
    { n: "5", label: "Application Domains", id: "section-5" },
    { n: "6", label: "Edge-Native Architecture: Intelligence at the Source", id: "section-6" },
    { n: "7", label: "The Human Digital Twin: Life Atlas Vision", id: "section-7" },
    { n: "8", label: "Addressing Japan's Demographic Challenge", id: "section-8" },
    { n: "9", label: "Extreme Collaboration: From NASA to Global Digital Twins", id: "section-9" },
    { n: "10", label: "Recommendations for NRI and Japanese Enterprise", id: "section-10" },
    { n: "11", label: "Conclusion", id: "section-11" },
    { n: "12", label: "References", id: "section-12" },
  ];

  return (
    <div
      ref={ref}
      className="my-12 p-6 rounded-md transition-all duration-[1600ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        background: "rgba(201,168,76,0.03)",
        border: "1px solid var(--color-border)",
      }}
    >
      <p
        className="text-[10px] tracking-[0.4em] uppercase mb-5"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        Table of Contents
      </p>
      <ol className="space-y-2">
        {items.map((item) => (
          <li key={item.n} className="flex items-baseline gap-3">
            <span
              className="text-[11px] shrink-0 w-5 text-right"
              style={{ color: "var(--color-gold-dim)", fontFamily: "'Inter', sans-serif" }}
            >
              {item.n}.
            </span>
            <a
              href={`#${item.id}`}
              className="text-sm font-light leading-snug transition-colors duration-200 hover:text-[var(--color-gold)]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function WhitepaperSmileDigitalTwins() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <StoryNav />

      {/* ════════════════════════════════════════════════
          Title Screen
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 65%)",
          }}
        />

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
          <div className="mb-10 flex justify-center">
            <div
              className="w-px h-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--color-gold-dim))",
              }}
            />
          </div>

          <p
            className="text-xs tracking-[0.6em] uppercase mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-gold-dim)",
            }}
          >
            Life Atlas &mdash; The Sentinel Stories
          </p>

          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            White Paper &mdash; SMILE Methodology &nbsp;&bull;&nbsp; Sep 18, 2025
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            Digital Twins and AI
          </h1>

          <p
            className="text-xl md:text-2xl font-light italic mb-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            A Methodological Framework for Japan&rsquo;s Next Industrial Transformation
          </p>

          <p
            className="text-xs tracking-[0.35em] uppercase mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.4,
            }}
          >
            Sep 18, 2025 &mdash; Lecture to Nomura Research Institute, Tokyo
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
            <div
              className="w-px h-10 animate-pulse"
              style={{ background: "var(--color-gold-dim)" }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          White Paper Body
          ════════════════════════════════════════════════ */}
      <article className="max-w-[720px] mx-auto px-6 pb-32">

        {/* ── Meta block ── */}
        <FadeBlock className="mt-16 mb-10">
          <div
            className="p-5 rounded-md text-sm space-y-1.5"
            style={{
              background: "rgba(201,168,76,0.03)",
              border: "1px solid var(--color-border)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {[
              ["Date", "September 18, 2025"],
              ["Author", "Nicolas Waern, CEO & Founder, WINNIIO AB / Life Atlas"],
              ["Occasion", "Lecture to Nomura Research Institute (NRI) — Tokyo, Japan"],
              ["Classification", "Professional / External"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase w-28 shrink-0 pt-0.5"
                  style={{ color: "var(--color-gold-dim)" }}
                >
                  {k}
                </span>
                <span style={{ color: "var(--color-text-secondary)" }}>{v}</span>
              </div>
            ))}
          </div>
        </FadeBlock>

        {/* ── Abstract ── */}
        <ChapterDivider
          year="Abstract"
          chapter="Overview"
          title="The Methodology Gap"
          id="abstract"
        />

        <Paragraph>
          This white paper synthesises the key themes presented during a lecture on &ldquo;Digital Twins and AI&rdquo; delivered to a research delegation from Nomura Research Institute (NRI) on September 18, 2025. It introduces the S.M.I.L.E. methodology (Sustainable Methodology for Impact Lifecycle Enablement) as a comprehensive framework for implementing digital twin strategies across construction, healthcare, manufacturing, logistics, and human-centric applications.
        </Paragraph>

        <Paragraph>
          Drawing on current market research, Japan&rsquo;s Society 5.0 vision, and real-world case studies from Nordic and global contexts, this paper argues that the fundamental barrier to digital twin adoption is not technological but methodological — and that reality, not data, must serve as the persistent layer upon which all digital transformation is built.
        </Paragraph>

        <Paragraph keyLine>
          Do not start with data. Start with impact. Do everything virtually first.
        </Paragraph>

        {/* ── Table of Contents ── */}
        <TableOfContents />

        {/* ════════════════════════════════════════════════
            Section 1
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-1"
          year="Section 1"
          chapter="Introduction"
          title="The Convergence Opportunity"
        />

        <Paragraph>
          The global digital twin market was valued at USD 13.6 billion in 2024 and is projected to reach USD 428.1 billion by 2034, growing at a compound annual growth rate (CAGR) of 41.4% (Grand View Research, 2025). This explosive growth reflects a fundamental shift in how organisations conceptualise, design, operate, and optimise physical systems through their digital counterparts.
        </Paragraph>

        <Paragraph>
          However, the vast majority of digital twin implementations remain siloed, data-centric, and disconnected from the broader organisational and societal context in which they operate. The technology exists. What is missing is the methodology.
        </Paragraph>

        <Paragraph>
          This white paper presents a methodology-first approach to digital twin implementation, grounded in twenty years of cross-industry experience spanning construction, healthcare, manufacturing, smart cities, telecommunications, space, and robotics. The central thesis is simple yet profound:
        </Paragraph>

        <Paragraph keyLine>
          Do not start with data. Start with impact. Do everything virtually first.
        </Paragraph>

        <Paragraph>
          This principle — &ldquo;Impact First, Data Last&rdquo; — forms the foundation of the S.M.I.L.E. framework and was the core message delivered to the NRI research team during the September 18, 2025 lecture in Tokyo.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 2
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-2"
          year="Section 2"
          chapter="Context"
          title="The Japanese Context: Society 5.0 and Beyond"
        />

        <SectionHeading>2.1 Japan&rsquo;s Digital Twin Landscape</SectionHeading>

        <Paragraph>
          Japan&rsquo;s digital twin market is experiencing significant growth across multiple sectors. The Japan Healthcare Digital Twins Market alone is estimated at USD 48.85 million in 2025 and anticipated to reach USD 360.29 million by 2033, growing at a CAGR of 28.40% (Transpire Insight, 2025). The Japan Building Digital Twin Market is accelerating at a 26.95% CAGR as smart buildings, AI-driven energy optimisation, and net-zero mandates reshape the built environment (OpenPR, 2025).
        </Paragraph>

        <Paragraph>
          Japan&rsquo;s Project PLATEAU, launched in 2020 by the Ministry of Land, Infrastructure, Transport and Tourism (MLIT), represents one of the world&rsquo;s most ambitious 3D urban digital twin initiatives, aiming to extend models to 500 cities by 2027 (MLIT, 2025). This initiative aligns directly with the SMILE methodology&rsquo;s first phase of Reality Emulation — creating a shared reality canvas using geographic information systems (GIS) and Building Information Modelling (BIM).
        </Paragraph>

        <SectionHeading>2.2 Society 5.0: The Human-Centric Digital Society</SectionHeading>

        <Paragraph>
          Japan&rsquo;s Society 5.0 framework envisions a human-centric society that balances economic advancement with the resolution of social problems through the deep integration of cyberspace and physical space. The concept introduces Human Digital Twins as a central element of Cyber-Physical Systems designed to interact with humans in a personalised fashion (Springer, 2024).
        </Paragraph>

        <Paragraph>
          The EU-Japan e-VITA project, coordinated by Tohoku University&rsquo;s Smart Aging Research Centre (SARC), exemplifies this convergence — developing &ldquo;Digital Twins for Smart Aging&rdquo; that combine European and Japanese research competencies (Granrath, 2024).
        </Paragraph>

        <SectionHeading>2.3 NRI&rsquo;s Role in Digital Transformation</SectionHeading>

        <Paragraph>
          Nomura Research Institute, as Japan&rsquo;s premier consulting and IT services firm, has been instrumental in driving digital transformation across Japanese enterprise. NRI&rsquo;s involvement in the Earthbrain consortium (jointly established in 2021 with Komatsu, NTT Docomo, and Sony Semiconductor Solutions) demonstrates the firm&rsquo;s commitment to applying digital twin concepts to construction and heavy industry (NRI, 2021). NRI&rsquo;s multicloud strategy and Digital Trust Service further position the firm as a critical enabler of the secure, governed digital infrastructure required for enterprise-grade digital twin deployments (NRI, 2025).
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 3
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-3"
          year="Section 3"
          chapter="Framework"
          title="The SMILE Methodology"
        />

        <SectionHeading>3.1 Overview</SectionHeading>

        <Paragraph>
          S.M.I.L.E. — Sustainable Methodology for Impact Lifecycle Enablement — is a proprietary, benefits-driven digital twin implementation methodology developed by Nicolas Waern. Its core principle inverts the conventional approach to digital transformation:
        </Paragraph>

        <FadeBlock className="my-8">
          <p
            className="text-center text-lg md:text-xl font-light tracking-widest"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            Outcome &rarr; Action &rarr; Insight &rarr; Information &rarr; Data
          </p>
        </FadeBlock>

        <Paragraph>
          Rather than the typical &ldquo;collect data, build models, derive insights&rdquo; approach, SMILE begins with the desired impact and works backwards to determine what data, systems, and people are required.
        </Paragraph>

        <SectionHeading>3.2 Six Phases (Concentric Loops)</SectionHeading>

        <Paragraph>
          The methodology operates through six progressive phases, each building upon the previous:
        </Paragraph>

        <SmileTable />

        <SectionHeading>3.3 Three Perspectives</SectionHeading>

        <Paragraph>
          Every SMILE implementation is evaluated through three complementary lenses:
        </Paragraph>

        <FadeBlock className="my-8 space-y-4">
          {[
            {
              label: "From People",
              desc: "Organisation-agnostic stakeholder mapping, concurrent engineering, knowledge capture",
            },
            {
              label: "From Systems",
              desc: "Standards identification, ontology alignment, metadata mastery, semantic interoperability",
            },
            {
              label: "From Planet",
              desc: "GIS/BIM/CIM integration, satellite data, reality canvas as the persistent foundation",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex gap-4 items-start"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <span
                className="text-[11px] tracking-[0.2em] uppercase shrink-0 pt-1 w-28"
                style={{ color: "var(--color-gold-dim)", fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </span>
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </FadeBlock>

        <SectionHeading>3.4 The AI Journey within SMILE</SectionHeading>

        <Paragraph>
          SMILE defines a progressive AI maturity path:
        </Paragraph>

        <CodeBlock>
          {`Data Contextualisation → AI-Ready → AI-Infused → AI-Ingrained → Explainable AI Decision Making`}
        </CodeBlock>

        <Paragraph>
          This journey maps directly to the lecture&rsquo;s core argument: digital twins must progress from passive data repositories to active, explainable decision-support systems that ground their outputs in shared visual reality.
        </Paragraph>

        <SectionHeading>3.5 Supporting Theoretical Foundations</SectionHeading>

        <Paragraph>
          SMILE draws on several established academic frameworks:
        </Paragraph>

        <FadeBlock className="my-8 space-y-5">
          {[
            {
              title: "Actor-Network Theory (Bruno Latour)",
              body: "In socio-technological ecosystems, humans and non-humans are equal actors. Buildings, sensors, robots, and people all function as actors in a 3D environment that must collaborate. Knowledge is transcribed between all actors through the digital twin.",
            },
            {
              title: "Boundary-Spanning Objects",
              body: "Digital twins serve as the ultimate boundary-spanning objects — shared artefacts that bridge disciplinary, organisational, and cultural divides.",
            },
            {
              title: "Benefits-Driven Framework (Ward & Daniel)",
              body: "Starting with benefits/impact, then defining actions, insights, information, and finally data requirements.",
            },
            {
              title: "Omni-Interoperability",
              body: "Legal, semantic, technical, and organisational interoperability layers must be addressed simultaneously.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p
                className="text-sm font-medium mb-1.5"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "var(--color-text)",
                  fontSize: "1rem",
                }}
              >
                {item.title}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </FadeBlock>

        {/* ════════════════════════════════════════════════
            Section 4
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-4"
          year="Section 4"
          chapter="Practice"
          title="Critical Success Factors for Digital Twin Projects"
        />

        <SectionHeading>4.1 What NOT to Do</SectionHeading>

        <Paragraph>
          Do not start with data. The structuring of data, database schemas, data governance policies — these are activities for later phases. The problems observed across healthcare, manufacturing, construction, robotics, and cybersecurity are fundamentally the same: everyone looks at the world through different applications, which means no one can truly communicate with each other.
        </Paragraph>

        <SectionHeading>4.2 The Five Pillars</SectionHeading>

        <FadeBlock className="my-8 space-y-6">
          {[
            {
              n: "1",
              title: "Shared Reality",
              body: "Use the physical world — represented in 3D — as the common ground. Regardless of whether participants are cybersecurity specialists, roboticists, legal compliance officers, or marketing professionals, they all work in the same world. The digital twin must make this shared reality visible and navigable.",
            },
            {
              n: "2",
              title: "Impact-First Orientation",
              body: "Define the desired outcome before any technical implementation. What is the impact we want to create? For whom? Where? Only then determine what systems, people, and data are involved.",
            },
            {
              n: "3",
              title: "Knowledge Before Data",
              body: "Data comes from sensors, systems, PDFs, and databases. Knowledge and wisdom come from people. The digital twin must capture both, but knowledge comes first. People's expertise must be integrated before automated data collection begins.",
            },
            {
              n: "4",
              title: "Virtual-First Execution",
              body: "Everything is prototyped, simulated, and validated in the virtual environment before any physical implementation. This applies to construction, lab design, robot training, supply chain configuration, and operational planning.",
            },
            {
              n: "5",
              title: "Lifecycle Methodology",
              body: "Not a one-time project but a continuous loop of learning, adaptation, and improvement. The digital twin learns from every interaction and improves over time through a \"Phoenix strategy\" where no data or knowledge is ever lost.",
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 items-start">
              <span
                className="text-2xl font-light shrink-0 w-7 text-right leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "var(--color-gold-dim)",
                }}
              >
                {item.n}.
              </span>
              <div>
                <p
                  className="mb-1.5 text-base font-light"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: "var(--color-text)",
                    fontSize: "1.05rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </FadeBlock>

        <SectionHeading>4.3 Why Companies Fail</SectionHeading>

        <Paragraph>
          The primary barriers are not technological:
        </Paragraph>

        <FadeBlock className="my-8 space-y-3">
          {[
            ["Culture", "\"Culture eats strategy for breakfast.\" Without organisational alignment, technology cannot deliver value."],
            ["Procurement processes", "Traditional procurement does not accommodate collaborative, virtual-first methodologies."],
            ["Sequential working patterns", "Specialists work in sequence rather than concurrently, losing context and creating information silos."],
            ["Cloud-centric architectures", "Over-reliance on centralised cloud processing creates vulnerability, latency, and data sovereignty issues."],
            ["Lack of lifecycle perspective", "Projects end at deployment rather than continuing through operation, learning, and evolution."],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k}: </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        {/* ════════════════════════════════════════════════
            Section 5
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-5"
          year="Section 5"
          chapter="Application"
          title="Application Domains"
        />

        <SectionHeading>5.1 Construction and Smart Cities</SectionHeading>

        <Paragraph>
          The lecture presented a detailed walkthrough of building a hospital using SMILE methodology:
        </Paragraph>

        <FadeBlock className="my-8 space-y-3">
          {[
            ["PESTLE Analysis", "Evaluate political, environmental, social, technological, ethical, legal, and demographic context before selecting a site."],
            ["GIS-Driven Site Selection", "Use planetary-scale GIS data to analyse population movement patterns, proximity to energy infrastructure, and regulatory constraints. The digital twin of the planet identifies optimal building locations before any architectural design begins."],
            ["Generative and Parametric Design", "Generate building designs that absorb contextual parameters — legal requirements, material availability, contractor capabilities, accessibility standards."],
            ["Concurrent Engineering", "Bring doctors, nurses, equipment specialists, cybersecurity experts, and compliance officers into the virtual model simultaneously, rather than sequentially."],
            ["Supply Chain Visualisation", "Every physical element of the hospital traces back to manufacturing plants worldwide, visualised as lines on a global map. When tariffs or embargoes change, AI agents dynamically reorient supply chains."],
            ["Simulation with Human Digital Twins", "Instead of abstract synthetic data, simulate the hospital with digital twins of real people to assess suitability, accessibility, and patient experience."],
          ].map(([k, v], i) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <span
                className="shrink-0 w-5 text-right text-xs pt-0.5"
                style={{ color: "var(--color-gold-dim)", fontFamily: "'Inter', sans-serif" }}
              >
                {i + 1}.
              </span>
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k}: </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        <Paragraph>
          This approach has direct relevance to Japan&rsquo;s Project PLATEAU initiative and NRI&rsquo;s Earthbrain consortium work.
        </Paragraph>

        <SectionHeading>5.2 Healthcare and Biological Digital Twins</SectionHeading>

        <Paragraph>
          Japan&rsquo;s healthcare digital twins market is projected to grow from USD 48.85 million (2025) to USD 360.29 million (2033). Key drivers include:
        </Paragraph>

        <FadeBlock className="my-6 space-y-3">
          {[
            ["Fujitsu's Policy Twin (November 2024)", "Uses machine learning and generative AI to simulate the social impact of local government healthcare policies, identifying measures to reduce costs and improve preventive healthcare outcomes."],
            ["Hospital Operations Optimisation", "Virtual patient replicas forecast treatment outcomes and develop customised treatment plans while improving operational performance."],
            ["Drug Discovery and Virtual Labs", "The lecture described how pharmaceutical companies are using 3D virtual environments to design laboratories that are optimised before physical construction, ensuring interoperability between vendor systems, compliance with the EU AI Act, and edge-native data processing."],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k}: </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        <Paragraph>
          In a real-world example discussed during the lecture (an unnamed major pharmaceutical company), the methodology was applied to a lab retrofit project using Autodesk Construction Cloud. The critical insight: by requiring vendors to demonstrate data flows, AI capabilities, and interoperability standards within the 3D model before physical installation, the organisation avoids the typical post-deployment discovery that &ldquo;10 different systems cannot communicate, data cannot be combined, and AI can only operate in silos.&rdquo;
        </Paragraph>

        <SectionHeading>5.3 Manufacturing and Supply Chain</SectionHeading>

        <Paragraph>
          The convergence of edge computing, federated learning, and digital twins is transforming manufacturing. Recent research (Nature Scientific Reports, 2025) demonstrates a method combining Digital Twin, Edge AI, and Federated Learning for real-time co-simulation in smart factories, enabling edge devices near the factory floor to process data and share learnings while keeping sensitive production data within factories.
        </Paragraph>

        <Paragraph>
          The &ldquo;Invite to Innovate&rdquo; model: when supply chain disruptions (tariffs, embargoes, geopolitical shifts) require rapid supplier evaluation: scan candidate manufacturing plants using 360-degree cameras and point cloud technology; enable remote &ldquo;teleportation&rdquo; into these facilities from anywhere in the world; deploy domain experts who can assess operational maturity, equipment quality, and organisational capability through visual inspection — leveraging 25-30 years of tacit knowledge; combine AI-generated shortlists with human expert evaluation; and make supplier selection decisions within days rather than months.
        </Paragraph>

        <SectionHeading>5.4 Robotics and Physical AI</SectionHeading>

        <Paragraph>
          The lecture addressed the emerging paradigm of Physical AI — robots trained in digital twin environments before physical deployment. Spatial World Models: working with Nokia Bell Labs to create models where 360-degree cameras record reality, generating NeRFs (Neural Radiance Fields) and Gaussian Splats that allow users to &ldquo;teleport&rdquo; into any recorded space and view it from arbitrary angles at any point in time. Context-Specific Robot Generation: rather than deploying generic humanoid robots, generate robot designs tailored to specific physical spaces and required tasks. A robot for an agricultural orchard will look fundamentally different from one for a manufacturing plant. Knowledge Transfer: retiring workers transfer knowledge into digital twins through observation and direct interaction. This knowledge trains the next generation of robotic systems that embody &ldquo;part Sarah, part me, part someone else.&rdquo;
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 6
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-6"
          year="Section 6"
          chapter="Architecture"
          title="Edge-Native Architecture: Intelligence at the Source"
        />

        <Paragraph keyLine>
          All the data should reside in this 3D environment. Federated learning, zero-knowledge proofs, where you share insights, never the data.
        </Paragraph>

        <Paragraph>
          This principle aligns with critical developments in 2025: the EU NIS2 Directive requires data localisation and stringent controls on cross-border data transfers; the EU AI Act requires transparency and accountability for AI systems, which is more achievable when intelligence resides at the edge; Data Sovereignty ensures users and organisations own and control their data; and Edge computing provides operational continuity regardless of connectivity status.
        </Paragraph>

        <Paragraph>
          The digital twin market analysis confirms this trend: the convergence of digital twins with edge computing ensures faster data processing closer to the source, enabling seamless integration across enterprises while supporting remote monitoring and real-time collaboration (Belden, 2025; Litmus, 2025).
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 7
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-7"
          year="Section 7"
          chapter="Vision"
          title="The Human Digital Twin: Life Atlas Vision"
        />

        <Paragraph>
          Life Atlas, founded by Nicolas Waern, represents the application of SMILE methodology to the most complex system of all: the human being.
        </Paragraph>

        <SectionHeading>7.1 Core Concept</SectionHeading>

        <FadeBlock className="my-6 space-y-3">
          {[
            "Capture dimensional, preferential, and contextual data about individuals",
            "Generate foundational AI models that individuals themselves control (not corporations or governments)",
            "Enable synthetic data generation that is holistic rather than fabricated",
            "Allow individuals to \"send\" their digital twin into environments (hospitals, workplaces, cities) to assess compatibility and preference",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>{item}</p>
            </div>
          ))}
        </FadeBlock>

        <SectionHeading>7.2 Sovereign AI Companions</SectionHeading>

        <Paragraph>
          The lecture outlined a future where every person has a Large Quantitative Model (LQM) — a physics-based model of themselves, distinct from statistical LLMs. This &ldquo;soul&rdquo; (in the Ghost in the Shell sense) transfers between physical embodiments. The companion manifests through augmented reality, physical robots, or purely digital interfaces. The individual maintains complete sovereignty over their digital twin and AI companion.
        </Paragraph>

        <SectionHeading>7.3 Privacy Architecture</SectionHeading>

        <FadeBlock className="my-6 space-y-3">
          {[
            ["Federated learning", "Models learn without centralising data"],
            ["Zero-knowledge proofs", "Insights are shared without exposing underlying data"],
            ["Edge-native processing", "Data never leaves the individual's sovereign domain unless explicitly shared"],
            ["Open APIs and standards", "No vendor lock-in; the platform is designed for interoperability"],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k}: </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        {/* ════════════════════════════════════════════════
            Section 8
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-8"
          year="Section 8"
          chapter="Demographics"
          title="Addressing Japan's Demographic Challenge"
        />

        <SectionHeading>8.1 The Scale of the Challenge</SectionHeading>

        <Paragraph>
          Japan faces a projected shortage of 11 million workers by 2040, with nearly 30% of the population over 65 by 2042 (IMF, 2025). The care sector alone faces a 570,000 worker shortfall by 2040 (HumansAreObsolete, 2026). 2025 marked the 14th consecutive year of population decline, maintaining an average decrease of half a million people per year.
        </Paragraph>

        <SectionHeading>8.2 SMILE-Informed Responses</SectionHeading>

        <Paragraph>
          Knowledge Preservation: record the reality of existing workplaces through digital twins; capture retiring workers&rsquo; tacit knowledge through observation and interaction recording; embed this knowledge in AI systems that train the next generation of workers and robots.
        </Paragraph>

        <Paragraph>
          Contextual Robot Deployment: do not replace workers with generic robots — instead, generate robot designs optimised for specific physical spaces and required outcomes; train robots virtually first in the digital twin, informed by decades of human operational knowledge; use multi-agent systems where robots, AI agents, and human supervisors collaborate through the digital twin.
        </Paragraph>

        <Paragraph>
          Solving Loneliness: AI companions that &ldquo;mask intelligence and insight and personalisation&rdquo; to provide genuine relational support; digital twins that visit environments on behalf of their human counterparts, assessing suitability; augmented reality interfaces that overlay digital companions onto physical space.
        </Paragraph>

        <Paragraph>
          Labour Mobility and Upskilling: digital twins of manufacturing plants enable global experts to assess, advise, and train without physical travel; education delivered through shared reality, not siloed classroom instruction; upskilling of both humans and robots through the same digital twin platform.
        </Paragraph>

        <SectionHeading>8.3 The Societal Fabric Warning</SectionHeading>

        <Paragraph>
          The lecture concluded with a critical warning: the technical capability to automate and robotise exists today. The greater challenge is the societal fabric. Without addressing the social, legal, and ethical dimensions — universal income, meaningful occupation, human dignity — the technological transformation will create more problems than it solves.
        </Paragraph>

        <Paragraph keyLine>
          This is what worries me the most. I know exactly how to do this, but the problem is the slowness of legal, the slowness of everything.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 9
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-9"
          year="Section 9"
          chapter="Methodology"
          title="Extreme Collaboration: From NASA to Global Digital Twins"
        />

        <SectionHeading>9.1 Origin: NASA JPL</SectionHeading>

        <Paragraph>
          The Extreme Collaboration (XC) methodology originated at NASA&rsquo;s Jet Propulsion Laboratory (JPL) in 1994. Facing planning cycles that had extended from days to 3–9 months for space missions, JPL developed a radically compressed approach: assemble 20 cross-functional specialists (rather than hundreds); place all information in one shared space; enable real-time visibility so that when one specialist modifies parameters, all others immediately see the change and can assess impact on their domains.
        </Paragraph>

        <Paragraph keyLine>
          Planning time reduced from 9 months to 9 hours.
        </Paragraph>

        <SectionHeading>9.2 Digital Twin Extension</SectionHeading>

        <Paragraph>
          The SMILE methodology extends NASA&rsquo;s XC approach into the digital twin paradigm. The &ldquo;room&rdquo; is now the digital twin itself — accessible from anywhere in the world. All information is embedded in the 3D model, not distributed across documents and databases. Specialists teleport into the shared reality rather than traveling physically. AI agents supplement human expertise with real-time analysis and simulation.
        </Paragraph>

        <SectionHeading>9.3 Relevance to Japanese Enterprise</SectionHeading>

        <Paragraph>
          Japanese corporate culture — with its emphasis on consensus (nemawashi), attention to detail (kaizen), and long-term thinking — is particularly well-suited to the SMILE methodology&rsquo;s concurrent engineering approach. The methodology does not replace consensus-building; it accelerates it by providing a shared visual reality in which consensus can form more rapidly and with greater fidelity.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 10
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-10"
          year="Section 10"
          chapter="Recommendations"
          title="Recommendations for NRI and Japanese Enterprise"
        />

        <SectionHeading>10.1 Immediate Actions (0–6 months)</SectionHeading>

        <FadeBlock className="my-6 space-y-4">
          {[
            ["1. Pilot SMILE Phase 1 (Reality Emulation)", "on an existing NRI client project — preferably a construction or healthcare facility design. Use 360-degree cameras, point cloud scanning, and GIS integration to create a shared reality canvas."],
            ["2. Integrate with Project PLATEAU", "to leverage Japan's existing 3D urban digital twin infrastructure as the geographic foundation for industry-specific digital twins."],
            ["3. Establish Edge-Native Architecture Standards", "for digital twin deployments, aligning with NIS2, the AI Act, and Japan's own data governance frameworks."],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k} </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        <SectionHeading>10.2 Medium-Term Initiatives (6–18 months)</SectionHeading>

        <FadeBlock className="my-6 space-y-4">
          {[
            ["4. Develop a Boundary-Spanning Practice", "within NRI's consulting methodology that specifically addresses the fragmentation problem — bringing cybersecurity, robotics, legal, operations, and strategy specialists into shared digital twin environments."],
            ["5. Launch an Invite to Innovate Programme", "for Japanese manufacturing SMEs facing succession challenges. Record and digitise retiring artisans' workplaces and knowledge before it is lost."],
            ["6. Explore Human Digital Twin Applications", "aligned with Society 5.0's vision and the e-VITA project's \"Digital Twin for Smart Aging\" concept, particularly for eldercare facility design and personalised healthcare planning."],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k} </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        <SectionHeading>10.3 Strategic Positioning (18–36 months)</SectionHeading>

        <FadeBlock className="my-6 space-y-4">
          {[
            ["7. Position NRI as the Methodology Partner", "for Japan's digital twin ecosystem. Technology is commoditising; methodology is the differentiator. SMILE's lifecycle approach fills a gap that no technology vendor currently addresses."],
            ["8. Develop a Japan-Specific SMILE Localisation", "that incorporates monozukuri (craftsmanship), kaizen (continuous improvement), and nemawashi (consensus-building) as cultural amplifiers of the methodology."],
            ["9. Establish a Joint Research Programme", "on LQMs (Large Quantitative Models) for biological and human digital twins, leveraging Japan's leadership in precision medicine and robotics."],
          ].map(([k, v]) => (
            <div key={k} className="flex gap-3 items-start text-sm">
              <div
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: "var(--color-gold-dim)" }}
              />
              <p style={{ color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-text)" }}>{k} </span>
                {v}
              </p>
            </div>
          ))}
        </FadeBlock>

        {/* ════════════════════════════════════════════════
            Section 11
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-11"
          year="Section 11"
          chapter="Conclusion"
          title="Conclusion"
        />

        <Paragraph>
          The lecture delivered to Nomura Research Institute on September 18, 2025, presented not merely a technology briefing but a paradigm shift in how digital transformation should be conceived and executed. The SMILE methodology offers a structured, repeatable, and scalable approach to digital twin implementation that addresses the root causes of project failure: fragmentation, sequential working, data-first thinking, and the absence of shared reality.
        </Paragraph>

        <Paragraph>
          Japan stands at a unique inflection point. The convergence of Society 5.0 ambitions, Project PLATEAU infrastructure, acute demographic pressures, and world-leading robotics capabilities creates an opportunity to lead global digital twin adoption — not through technology alone, but through methodology.
        </Paragraph>

        <Paragraph keyLine>
          Reality is the persistent layer. Everything else — applications, data, AI models — changes. But reality endures.
        </Paragraph>

        <Paragraph>
          By anchoring digital transformation in shared visual reality, Japan can bridge the boundaries between disciplines, generations, and the physical and virtual worlds.
        </Paragraph>

        <Paragraph>
          The future is not data-driven. It is impact-driven, virtually-first, and grounded in the reality we all share.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Section 12 — References
            ════════════════════════════════════════════════ */}
        <ChapterDivider
          id="section-12"
          year="Section 12"
          chapter="References"
          title="References"
        />

        <FadeBlock className="space-y-3">
          {[
            "Belden. (2025). \"Digital Twins and Edge Computing Unite to Drive Manufacturing Insights.\" Belden Industrial Automation Blog.",
            "Bonafide Research. (2025). \"Japan Digital Twin Market Overview, 2030.\"",
            "CACM. (2005). \"Extreme Collaboration.\" Communications of the ACM.",
            "Fujitsu. (2024). \"Policy Twin: Digital Twin Solution for Healthcare Policy Simulation.\" Press Release, November 2024.",
            "Grand View Research. (2025). \"Digital Twin Market Size and Share | Industry Report, 2033.\"",
            "Grand View Research. (2025). \"Japan Healthcare Digital Twins Market Size & Outlook, 2030.\"",
            "Granrath, D. (2024). \"EU-Japan Project e-VITA in Society 5.0: the Digital Twin for Smart Aging.\" LinkedIn Article.",
            "IMF. (2025). \"The Impact of Aging and AI on Japan's Labor Market: Challenges and Opportunities.\" Working Paper WP/2025/184.",
            "IMARC Group. (2025). \"Japan Digital Twin Market Size, Share, Growth | 2025-33.\"",
            "Litmus. (2025). \"Edge Computing and Digital Twins: A Match Made for Manufacturing.\"",
            "MarketsandMarkets. (2025). \"Japan Digital Twin Market Growth, Trends, and Industry Insights.\"",
            "MLIT. (2025). \"Project PLATEAU: The Initiative of Digital Twin in Japan.\" Ministry of Land, Infrastructure, Transport and Tourism.",
            "NASA/JPL. (1998). \"Concurrent Engineering at JPL Team X.\" NASA Technical Reports Server.",
            "Nature Scientific Reports. (2025). \"Digital twin driven smart factories: real time physics based co-simulation using edge AI and federated learning.\"",
            "NRI. (2021). \"Earthbrain Ltd. — Digital Transformation in Construction Industry.\" Joint Venture Announcement.",
            "NRI. (2025). \"Nomura Research Institute Expands MultiCloud Strategy to Enhance Governance and Convenience for Customers.\" News Release, February 12, 2025.",
            "OECD. (2025). \"Artificial Intelligence and the Labour Market in Japan.\"",
            "OpenPR. (2025). \"Japan Building Digital Twin Market to Accelerate at 26.95% CAGR.\"",
            "RTInsights. (2026). \"Digital Twins Transition to Intelligent, AI-Driven Systems in 2026.\"",
            "Springer. (2024). \"Human digital twins unlocking Society 5.0? Approaches, emerging risks and disruptions.\" Ethics and Information Technology.",
            "Transpire Insight. (2025). \"Japan Healthcare Digital Twins Market Size, Share by 2033.\"",
            "VERSES. (2024). \"VERSES Completes First Phase of Digital Twins Interoperability Project with JPL.\"",
          ].map((ref, i) => (
            <div key={i} className="flex gap-3 items-start text-sm">
              <span
                className="shrink-0 w-6 text-right text-xs pt-0.5"
                style={{ color: "var(--color-gold-dim)", fontFamily: "'Inter', sans-serif" }}
              >
                {i + 1}.
              </span>
              <p
                className="leading-relaxed"
                style={{ color: "var(--color-text-secondary)", opacity: 0.8 }}
              >
                {ref}
              </p>
            </div>
          ))}
        </FadeBlock>

        {/* ── About block ── */}
        <FadeBlock className="mt-20 mb-10">
          <div
            className="p-6 rounded-md space-y-6"
            style={{
              background: "rgba(201,168,76,0.03)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
              >
                About the Author
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Nicolas Waern is the CEO and Founder of WINNIIO AB and Life Atlas, a platform creating sovereign digital twins of people. A guest lecturer at Oxford University on digital twin methodology, Nicolas has two decades of cross-industry experience spanning construction, healthcare, manufacturing, telecommunications, space, and robotics. He is the creator of the S.M.I.L.E. methodology and an advocate for edge-native, sovereignty-by-design approaches to digital transformation.
              </p>
              <p
                className="text-xs mt-3"
                style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}
              >
                ceo@winniio.io &nbsp;&bull;&nbsp; nicolas@lifeatlas.online &nbsp;&bull;&nbsp; www.lifeatlas.online
              </p>
            </div>
            <div
              className="h-px"
              style={{ background: "var(--color-border)" }}
            />
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
              >
                About Nomura Research Institute (NRI)
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Nomura Research Institute, Ltd. is Japan&rsquo;s largest consulting firm and IT solutions provider, with a comprehensive range of services from consulting and financial IT solutions to IT platform services. NRI&rsquo;s involvement in digital transformation initiatives — including the Earthbrain consortium for construction digital twins and the NRI Digital Trust Service — positions the firm as a critical enabler of Japan&rsquo;s Society 5.0 vision.
              </p>
            </div>
            <div
              className="h-px"
              style={{ background: "var(--color-border)" }}
            />
            <p
              className="text-xs leading-relaxed italic"
              style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}
            >
              This white paper was prepared following a 98-minute lecture and Q&A session conducted on September 18, 2025, between Nicolas Waern (WINNIIO/Life Atlas) and a research delegation from NRI including representatives from NRI&rsquo;s technology research, consulting, and innovation divisions. The session was facilitated by Kiyomi Ogawa and Bonnie Kortrey of RI-LLC.
            </p>
            <p
              className="text-xs"
              style={{ color: "var(--color-text-secondary)", opacity: 0.4 }}
            >
              Copyright 2025 WINNIIO AB. All rights reserved.
            </p>
          </div>
        </FadeBlock>

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
