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

export default function UntrustedAI() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/8 via-transparent to-transparent" />
          <div
            className="text-center px-6 relative max-w-3xl mx-auto transition-all duration-[2000ms] ease-out"
            style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)" }}
          >
            <p className="text-[10px] tracking-[0.6em] uppercase mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              WINNIIO Perspectives — Whitepaper VI — Apr 2026
            </p>
            <h1
              className="text-4xl md:text-6xl font-light mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}
            >
              The AI You Can&apos;t Trust
            </h1>
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}
            >
              What Happens When Someone Attacks Your Factory&apos;s Brain
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
            You are deploying AI to make real-time decisions in your production processes. Have you tested what happens when someone attacks it? Not the network — the AI itself.
          </Paragraph>

          <ChapterDivider chapter="The Attack Surface" title="The Attack Surface Nobody Audited" />

          <Paragraph>
            In 2021, Colonial Pipeline&apos;s operations were paralyzed for six days by a ransomware attack that cost $4.4 million in ransom and an estimated $1 billion in downstream economic impact. The attack vector was a legacy VPN credential — a network security failure. The industrial sector learned the lesson, invested in network segmentation and perimeter defense, and moved on.
          </Paragraph>
          <Paragraph>
            What the sector has not yet reckoned with is a different class of threat — one that does not attack the network. It attacks the intelligence.
          </Paragraph>
          <Paragraph>
            Cyberattacks against industrial control systems increased by 300 percent between 2020 and 2025, according to the Dragos Industrial Cybersecurity Report. Sweden&apos;s MSB reported more than 200 serious IT incidents in critical infrastructure in 2025 alone — a 40 percent increase from the prior year. Penetrations of steel production facilities in Europe were documented in 2024.
          </Paragraph>
          <Paragraph>
            But the attack surface that is growing fastest is not the one most security teams are monitoring. It is the AI layer.
          </Paragraph>
          <Paragraph>
            When an AI model makes real-time decisions about furnace temperature, press timing, or energy load distribution — decisions that previously required a human operator&apos;s judgment and were executed on equipment with direct physical safety interlocks — the AI system becomes part of the critical path. Compromise the AI, and you compromise the process.
          </Paragraph>
          <Paragraph>
            The tools that exist to defend conventional OT/ICS environments are necessary but structurally insufficient. Network anomaly detection platforms can identify unusual traffic patterns. They cannot tell you whether the AI model controlling your heat treatment furnace has been gradually taught, over weeks of subtle data manipulation, to make decisions that will cause equipment damage or process failure under specific conditions.
          </Paragraph>

          <ChapterDivider chapter="The Threat Vectors" title="Four Attacks Conventional Security Misses" />

          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Data poisoning.</strong> The most insidious because it operates over time and leaves no obvious signature in network traffic. An attacker who can introduce manipulated readings into the sensor stream can gradually shift an AI model&apos;s behavior. The shift is small enough at each step to evade statistical outlier detection. The cumulative effect is a model that behaves correctly under normal conditions but fails in predictable ways under conditions the attacker controls.</>,
            <><strong style={{ color: "var(--color-text)" }}>Adversarial inputs.</strong> Crafted sensor readings designed to exploit the specific mathematical structure of a trained AI model. A model that accurately predicts energy demand under normal operating conditions may be made to produce wildly incorrect outputs by introducing a carefully calculated perturbation — one that looks like sensor noise but is precisely targeted at the model&apos;s decision boundary.</>,
            <><strong style={{ color: "var(--color-text)" }}>Model extraction.</strong> An attacker with query access to an AI system can reconstruct its underlying logic through systematic probing. For a manufacturer whose competitive advantage is encoded in AI models trained on proprietary production data, this represents direct theft of intellectual property — without any network intrusion that traditional security tools would detect.</>,
            <><strong style={{ color: "var(--color-text)" }}>Multi-agent manipulation.</strong> When multiple AI agents coordinate across machines, production zones, or facilities, the compromise of a single node creates a propagation pathway. A Byzantine-faulty agent that appears to be functioning normally can inject corrupted signals into the collective decision-making of the network.</>,
          ]} />

          <Paragraph keyLine>
            The Claroty and Nozomi platforms watching your OT network are necessary. They are not sufficient. They cannot tell you whether the decisions your AI is making are trustworthy — only whether the traffic looks normal.
          </Paragraph>

          <ChapterDivider chapter="The Regulatory Reality" title="The Compliance Pressure Is Real and It Is Now" />

          <Paragraph>
            NIS2 — implemented in Swedish law in 2025 — classifies heavy industry and steel production as &ldquo;essential services.&rdquo; The obligations include risk assessments for all IT and OT systems, documented incident response procedures, supply chain security controls, and evidence of resilience against both conventional and emerging attack vectors. An AI system that has not been tested against adversarial manipulation is, by definition, an unassessed risk.
          </Paragraph>
          <Paragraph>
            Sweden&apos;s AI Strategy (2026, SEK 479 million allocated) explicitly identifies &ldquo;safe and trustworthy AI&rdquo; as a priority area, with focus on ensuring that AI systems in critical sectors are resistant to manipulation, traceable in their decision-making, and subject to meaningful human control.
          </Paragraph>
          <Paragraph>
            The IEC 62443 standard series for industrial cybersecurity requires Security Level assessments for all OT systems — but currently lacks specific methodologies for AI components. This is the compliance gap that forward-looking manufacturers need to close now, before regulators close it for them with prescriptive requirements.
          </Paragraph>

          <ChapterDivider chapter="The Architecture" title="Building AI That Can Be Trusted" />

          <SectionLabel>Four Structural Properties</SectionLabel>
          <BulletList items={[
            <><strong style={{ color: "var(--color-text)" }}>Adversarial robustness by design.</strong> Models should be trained with explicit resistance to known attack classes. Adversarial training — exposing models to synthetic attacks during training, using frameworks such as the PGD (Projected Gradient Descent) attack methodology — increases robustness against previously unseen adversarial inputs. This is not a one-time test; it is a continuous practice, analogous to penetration testing for conventional software.</>,
            <><strong style={{ color: "var(--color-text)" }}>Physics-informed validation.</strong> Industrial processes obey physical laws that an AI model cannot override. A temperature cannot change by 200 degrees Celsius in three seconds. These physical constraints are precisely defined and perfectly knowable. An AI decision that violates them — regardless of what the sensor data appears to indicate — is wrong, and the system should refuse to execute it. This is the defense layer that no adversarial manipulation can circumvent, because it operates on invariants rather than learned patterns.</>,
            <><strong style={{ color: "var(--color-text)" }}>Uncertainty quantification.</strong> A trustworthy AI system does not just produce decisions — it produces decisions with confidence estimates. When a model&apos;s internal state indicates high uncertainty — because the input pattern is unusual, because sensor readings are in conflict, or because the operating condition is outside the training distribution — the system should escalate to human review rather than proceeding autonomously.</>,
            <><strong style={{ color: "var(--color-text)" }}>Secure federated learning.</strong> When multiple facilities share AI model improvements through federated learning, the federation protocol must be cryptographically protected against poisoning. Secure aggregation techniques allow model updates to be combined without any single party being able to observe individual facilities&apos; raw training data. Byzantine fault tolerance ensures that compromised nodes cannot corrupt the shared model.</>,
          ]} />

          <ChapterDivider chapter="The Digital Twin" title="The Digital Twin as Security Instrument" />

          <Paragraph>
            Perhaps the most powerful and underutilized tool in industrial cybersecurity is one that most manufacturers already have components of: the digital twin.
          </Paragraph>
          <Paragraph>
            A high-fidelity digital twin of a production facility is not just a planning and optimization tool. It is a safe environment in which to simulate attack scenarios before an actual attacker finds the same vulnerabilities in the real system.
          </Paragraph>
          <Paragraph>
            Red team/blue team exercises — standard practice in IT security — have rarely been applied to industrial AI systems because the cost of simulating attacks in a live production environment is prohibitive. A digital twin eliminates this constraint. Security teams can inject realistic attack scenarios based on the MITRE ATT&CK for ICS catalog — sensor spoofing, command injection, coordinated multi-site attacks — and observe how the AI system responds, without any risk to production.
          </Paragraph>

          <Paragraph keyLine>
            The digital twin is the one place where you can let an attacker win — safely, repeatedly, and with full instrumentation — so that you understand your vulnerabilities before they do.
          </Paragraph>

          <Paragraph>
            Beyond incident simulation, a continuously operational digital twin provides a reference model for anomaly detection in the live system. When the real facility&apos;s behavior diverges from the twin&apos;s prediction — beyond the expected noise envelope — this divergence is itself a security signal. An attack designed to evade sensor-level detection may still produce a behavioral signature at the process level that the twin comparison reveals.
          </Paragraph>

          <ChapterDivider chapter="The Cost" title="The Cost of Waiting" />

          <Paragraph>
            The cost of a cybersecurity incident in industrial production is not merely the ransom or the remediation expense. It is the production loss, the delivery defaults, the equipment damage, the regulatory investigation, and the reputational consequences with customers and insurers. For a facility running AI-controlled heat treatment processes, an undetected data poisoning attack that causes systematic quality failures may not be identified until finished parts fail in the field — with consequences that extend far beyond the factory floor.
          </Paragraph>
          <Paragraph>
            The NIS2 compliance clock is running. The AI Act obligations begin in 2026. The attack frequency continues to climb. And the gap between what conventional OT security tools can detect and what AI-specific attacks require to be detected is not closing on its own.
          </Paragraph>
          <Paragraph>
            The manufacturers who move now — who build adversarial robustness into their AI architectures, who use their digital twins as security simulation environments, who implement physics-informed validation as a systematic check on every AI control decision — will have done more than protect themselves. They will have built a security competency that is genuinely differentiated, that satisfies current and anticipated regulatory requirements, and that provides a foundation for expanding AI deployment with confidence rather than trepidation.
          </Paragraph>
          <Paragraph>
            The question is not whether your industrial AI systems are trustworthy. It is whether you have done the work to find out.
          </Paragraph>

          <div className="mt-20 pt-8" style={{ borderTop: "1px solid var(--color-border)" }}>
            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
              WINNIIO AB develops trustworthy AI frameworks and digital twin security implementations for industrial manufacturing. This paper reflects independent research and analysis.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)", opacity: 0.4 }}>
              References: Dragos Industrial Cybersecurity Report 2025; MSB Annual Report 2025; NIS2 Directive (EU 2022/2555); EU AI Act (2024/1689); IEC 62443 (Industrial Cybersecurity); IEC 63278-1 / AAS Part 4 Security (IDTA, June 2025); MITRE ATT&CK for ICS (v15); Goodfellow et al. (2015); Madry et al. (2018); Bagdasaryan et al. (2020); Bonawitz et al. (Google, 2017); Castro &amp; Liskov (1999); Nature Scientific Reports, &ldquo;Digital Twins as Security Instruments&rdquo; (2025).
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
