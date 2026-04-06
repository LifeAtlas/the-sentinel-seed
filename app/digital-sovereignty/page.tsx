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
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}
    >
      <p className="text-base md:text-lg leading-[2] mb-8" style={{ color: "var(--color-text-secondary)" }}>
        {children}
      </p>
    </div>
  );
}

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

export default function DigitalSovereignty() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <>
      <ProgressBar />
      <StoryNav />

      <main className="min-h-screen">
        <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/8 via-transparent to-transparent" />
          <div
            className="text-center px-6 relative max-w-3xl mx-auto transition-all duration-[2000ms] ease-out"
            style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              WINNIIO Perspectives — Whitepaper V — Apr 2026
            </p>
            <h1
              className="text-4xl md:text-6xl font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}
            >
              Digital Sovereignty or Digital Dependency?
            </h1>
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
            >
              Why Swedish Manufacturers Need to Reclaim Control of Their AI Infrastructure
            </p>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-12" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.4 }}>
              Apr 2026
            </p>
            <div className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] opacity-40">
              <span className="text-xs tracking-widest uppercase">Read</span>
              <div className="w-px h-8 bg-[var(--color-text-secondary)] animate-pulse" />
            </div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6 pb-32">

          <Paragraph keyLine>
            Your most sensitive production data — process parameters, machine configurations, quality signatures — is almost certainly being processed on servers you do not own, in jurisdictions whose laws do not protect you. This is not a hypothetical risk. It is the default state of industrial AI deployment in 2026.
          </Paragraph>

          <ChapterDivider chapter="The Problem" title="The Infrastructure Nobody Talks About" />

          <Paragraph>
            Swedish manufacturing has embraced digital transformation at pace. IoT sensors monitor machine health in real time. AI models predict maintenance windows. Digital twins model production flows. The efficiency gains are real and measurable.
          </Paragraph>
          <Paragraph>
            What is rarely discussed is the infrastructure layer on which all of this intelligence runs.
          </Paragraph>
          <Paragraph>
            For the overwhelming majority of Swedish industrial companies, AI workloads are processed on infrastructure owned by three global technology corporations: Amazon Web Services, Microsoft Azure, and Google Cloud. These providers operate data centers across multiple jurisdictions, subject to the legal frameworks of the countries in which they operate — frameworks that include extraterritorial reach into data held by their corporate entities, regardless of where that data physically resides.
          </Paragraph>
          <Paragraph>
            This is not a theoretical concern raised by data privacy advocates. It is a documented legal reality. US cloud providers operating under the CLOUD Act of 2018 can be compelled to produce data held on non-US infrastructure in response to US government orders — without necessarily notifying the data owner or the relevant national authority. For a Swedish steel manufacturer whose competitive advantage resides in proprietary process parameters and quality recipes, this is a commercial risk of the first order.
          </Paragraph>

          <Paragraph keyLine>
            NIS2 does not ask who hosts your data. It asks whether you control your infrastructure. For most manufacturers running cloud-dependent AI, the honest answer is no.
          </Paragraph>

          <ChapterDivider chapter="The Vulnerabilities" title="Four Structural Dependencies That Compound Over Time" />

          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Latency.</strong> A cloud round-trip takes 50 to 200 milliseconds. For real-time process control — managing the temperature ramp in a heat treatment furnace, responding to a grid frequency event — this is unacceptable. Industrial processes operate on millisecond timescales. The physics does not wait for a server response from a data center in Ireland.</>,
            <><strong style={{ color: "var(--color-text)" }}>Vendor lock-in.</strong> Proprietary APIs, proprietary data formats, and proprietary model registries create switching costs that grow every year. When a cloud provider changes pricing, discontinues a service, or becomes subject to geopolitical disruption, the manufacturer has no alternative.</>,
            <><strong style={{ color: "var(--color-text)" }}>Data volume economics.</strong> A modern metal processing facility generates terabytes of sensor data per day. Uploading this volume to a cloud for processing has a cost that scales linearly with production. Edge processing eliminates this cost category entirely for workloads that do not require centralized aggregation.</>,
            <><strong style={{ color: "var(--color-text)" }}>Regulatory exposure.</strong> As the EU regulatory framework tightens, manufacturers whose AI runs on third-party cloud platforms face a growing compliance gap. Demonstrating that AI decisions are traceable, that data never left the jurisdiction, and that human override is always possible is straightforward on infrastructure you control. It is significantly more complex on infrastructure you rent.</>,
          ]} />

          <ChapterDivider chapter="The Alternative" title="The Sovereign Architecture" />

          <Paragraph>
            The architecture that eliminates these vulnerabilities exists, and it is built entirely on open standards.
          </Paragraph>
          <Paragraph>
            The core principle is simple: intelligence should be created where data is generated. Sensor data is processed at the facility — on industrial hardware running AI models optimized for edge deployment. The decisions that require speed happen locally. The insights that benefit from aggregation across multiple sites are shared via federated protocols that never expose raw data.
          </Paragraph>

          <SectionLabel>The Standards Stack</SectionLabel>
          <BulletList items={[
            "LF Edge — the Linux Foundation's vendor-neutral edge platform (Apache 2.0) — validated by industrial actors including Eaton for energy management workloads.",
            "Asset Administration Shell (IEC 63278-1), maintained by IDTA, provides the standardized data model for digital twins under Industry 4.0. Security specification published June 2025.",
            "OPC UA (IEC 62541) — universal communication standard for IIoT, supported by every major PLC and SCADA vendor.",
            "Kubernetes container orchestration enables cloud-agnostic deployment. The same containerized workload can run on on-premise industrial hardware, a private cloud, or any public cloud provider, with no code changes.",
          ]} />

          <Paragraph>
            Research from Chalmers University of Technology has documented AI model optimizations that achieve up to 83 percent reduction in inference energy consumption and 18-times faster inference on edge hardware, without compromising model accuracy and without data leaving the facility.
          </Paragraph>

          <Paragraph keyLine>
            The goal is not independence from technology providers. It is independence from any single technology provider — the architectural property that makes every component of the stack a commodity rather than a dependency.
          </Paragraph>

          <ChapterDivider chapter="Compliance" title="The Regulatory Dimension" />

          <Paragraph>
            For Swedish manufacturers operating under NIS2 as &ldquo;essential entities,&rdquo; the compliance obligations are specific and auditable. The NIS2 transposition in Swedish law carries penalties of up to EUR 10 million or 2 percent of global annual turnover for non-compliant entities.
          </Paragraph>
          <Paragraph>
            A sovereign edge architecture directly satisfies the infrastructure control requirements that NIS2 imposes. When AI inference runs locally, when production data never leaves the OT network in unencrypted form, when every edge node is identifiable and authenticated through mutual TLS certificates, and when the entire system has a documented fallback hierarchy — the compliance case is structurally built into the architecture rather than retrofitted through certification processes.
          </Paragraph>
          <Paragraph>
            The EU AI Act&apos;s requirements for traceability and human oversight are similarly addressed by design. When AI decisions are logged locally, when every decision passes through a documented validation pipeline, and when operators retain visible, exercisable override capability, the transparency requirements of the Act are met at the architectural level.
          </Paragraph>

          <ChapterDivider chapter="The Economics" title="The Economics of Sovereignty" />

          <Paragraph>
            The conventional framing positions sovereign infrastructure as a premium. The arithmetic of the alternative does not support this framing.
          </Paragraph>
          <Paragraph>
            Cloud compute costs for continuous industrial AI workloads scale with data volume and inference frequency. A facility generating terabytes of sensor data per day, running multiple AI models in continuous operation, faces a cloud bill that grows every year as AI applications proliferate. The sovereign edge architecture converts this variable cost into fixed infrastructure — industrial hardware with a known depreciation profile, maintained by the same operational team that manages the production equipment.
          </Paragraph>
          <Paragraph>
            For a manufacturer operating at scale across multiple facilities, the crossover point — at which sovereign edge infrastructure costs less than cloud-dependent alternatives on a total cost of ownership basis — is typically reached within two to three years of deployment. Beyond that point, the gap widens in favor of the edge architecture every year.
          </Paragraph>

          <ChapterDivider chapter="The Path" title="Moving from Dependency to Sovereignty" />

          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Audit where your AI runs.</strong> Most manufacturers who undertake this exercise are surprised by what they find — not because the providers have misled them, but because the question has simply not been asked systematically.</>,
            <><strong style={{ color: "var(--color-text)" }}>Build in parallel.</strong> A containerized edge deployment can run alongside existing SCADA and cloud integrations, progressively taking on more workloads as it is validated in each context.</>,
            <><strong style={{ color: "var(--color-text)" }}>Design for replication from day one.</strong> The value of a sovereign edge architecture multiplies with the number of facilities it covers. The right design enables deployment in a new facility within two weeks, with documented configuration rather than custom engineering.</>,
          ]} />

          <Paragraph>
            The question of digital sovereignty is ultimately a question about where industrial intelligence will be created and who will control it. The manufacturers who establish sovereign infrastructure now will not only be better positioned for compliance; they will own a strategic capability that their cloud-dependent competitors will spend years trying to replicate.
          </Paragraph>

          <div className="mt-20 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
              WINNIIO AB develops edge-native AI platforms and digital twin implementations for European industrial manufacturing. This paper reflects independent research and analysis.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)", opacity: 0.4 }}>
              References: EU Data Act (2025); NIS2 Directive (EU 2022/2555); EU AI Act (2024/1689); CLOUD Act (US, 2018); EU Taxonomy Regulation (2020/852); IEC 62541 (OPC UA); IEC 63278-1 (Asset Administration Shell); IEEE 2874-2025 (Spatial Web); LF Edge / EdgeX Foundry documentation; Embedl technical documentation (Chalmers University of Technology, 2025); Gaia-X Industrial Data Space specifications.
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
