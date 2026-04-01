"use client";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: string;
  keyLine?: boolean;
  delay?: number;
}

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
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

function ChapterDivider({ year, chapter, title }: ChapterDividerProps) {
  const { ref, visible } = useFadeIn(0.08);

  return (
    <div
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

      {/* Year / era */}
      <p
        className="text-xs tracking-[0.6em] uppercase mb-3"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        {year}
      </p>

      {/* Chapter label */}
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

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-light tracking-wide"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {/* Bottom lines */}
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
   DedicationBlock
   ═══════════════════════════════════════════════════════════════ */

function DedicationBlock() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-28 mb-10 text-center transition-all duration-[1800ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <div className="flex items-center justify-center gap-6 mb-10">
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim))",
          }}
        />
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: "var(--color-gold-dim)", opacity: 0.6 }}
        />
        <div
          className="h-px flex-1 max-w-[100px]"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent)",
          }}
        />
      </div>

      <p
        className="text-sm mb-1"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.4,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Dedicated
      </p>
      <p
        className="text-xl md:text-2xl italic font-light mt-3 max-w-lg mx-auto leading-[1.7]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        For Marc, Doug, Dan, and Eric. And for every meeting where the map
        revealed itself.
      </p>

      <div className="mt-10 flex justify-center">
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-gold-dim), transparent)",
          }}
        />
      </div>
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
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function MeetingVirtualHumans() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

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

        {/* Floating golden motes */}
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
            Life Atlas &mdash; The Sentinel Stories
          </p>

          {/* Story type & era */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            Meeting Story &nbsp;&bull;&nbsp; April 1, 2026
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Room Where It Started
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-6 max-w-lg mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Virtual Humans in Virtual Labs
          </p>

          {/* Byline */}
          <p
            className="text-xs tracking-[0.35em] uppercase mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.4,
            }}
          >
            April 1, 2026 &mdash; A meeting that mapped the future
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
          Story Body
          ════════════════════════════════════════════════ */}
      <article className="max-w-[680px] mx-auto px-6 pb-32">

        {/* ── Chapter I ── */}
        <ChapterDivider
          year="April 1, 2026"
          chapter="Chapter I"
          title="Four Screens, Four Continents"
        />

        <Paragraph>
          The meeting begins on a Tuesday morning. Four people who should never have been in the same room — a Swedish CEO building a life operating system, an Ansys executive who simulates fluid dynamics inside human organs, a pharma veteran who watched Eli Lilly spend millions sending drugs to the International Space Station and get nothing back, and the man who literally writes the standards for digital twins globally.
        </Paragraph>

        <Paragraph>
          They are talking about virtual humans. Not avatars. Not chatbots. Biological simulations — mechanistic models that predict how a specific human body will respond to a specific drug before the drug is ever manufactured.
        </Paragraph>

        <Paragraph>
          There is a fifth presence in the room, unnamed but felt. Eric Stahlberg, whose work at MD Anderson and the National Cancer Institute has mapped the oncology edge of this same frontier, is absent today. But every sentence touches territory he has already charted. The conversation moves through his shadow.
        </Paragraph>

        <Paragraph keyLine>
          It&apos;s Alzheimer&apos;s. Packed halls. Guaranteed. Every time.
        </Paragraph>

        <Paragraph>
          Doug says it leaning back, matter-of-fact, the way a man speaks when he has spent decades watching research funding chase headlines. If you want the room, go where the fear is. And the fear right now is cognitive decline — every family has been touched, every conference is oversubscribed, every investor is looking for the angle.
        </Paragraph>

        <Paragraph>
          Nicolas writes it down. Asks himself: can Gunnar&apos;s M4 model simulate neural pathways? He does not know yet. But the question alone is worth the meeting.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="The Problem"
          chapter="Chapter II"
          title="The Credibility Gap"
        />

        <Paragraph>
          Marc brings the uncomfortable truth first, the way engineers do. He searched for M4 — the multi-organ metabolic model built over twenty-five years at Link&ouml;ping University, refined in collaboration with AstraZeneca, a mechanistic map of how the diabetic body actually works at the systems level. He found nothing. Not a paper trail. Not a landing page. Not a mention on any platform where clinicians or investors go to look.
        </Paragraph>

        <Paragraph keyLine>
          The science is real. The discoverability is zero.
        </Paragraph>

        <Paragraph>
          Twenty-five years of biology, invisible on the internet. The model exists. The collaborations exist. The results exist. But the signal is lost in the noise of academic publishing, buried behind paywalls and conference proceedings that no investor has ever read.
        </Paragraph>

        <Paragraph>
          Meanwhile, Ansys has HumMod — the whole-body physiology engine developed at the University of Mississippi Medical Center — running virtual populations at scale. Marc&apos;s team in France is doing physiology modeling from a different angle. The Digital Twin Consortium is building the governance layer. The pieces exist across organizations like fragments of a broken hologram. Nobody has assembled the picture.
        </Paragraph>

        <Paragraph>
          &ldquo;Imaging data,&rdquo; Marc says. &ldquo;That&apos;s our biggest pain. We can&apos;t get enough. Hospitals hoard it. HIPAA blocks it. The data we need to validate these models lives behind walls we can&apos;t cross.&rdquo;
        </Paragraph>

        <Paragraph>
          Nicolas thinks: what if the twin lives with the patient? Edge-native. No cloud. No hoarding problem. The imaging data never leaves the device. The model trains locally, shares only the gradient — the abstract pattern of learning — never the raw scan. The wall doesn&apos;t block you if you never try to cross it.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="A Warning"
          chapter="Chapter III"
          title="The Lilly Parable"
        />

        <Paragraph>
          Doug tells a story that silences the room. Not because it is dramatic. Because it is precise.
        </Paragraph>

        <Paragraph>
          Ken Sabin was a champion inside Eli Lilly. He had the conviction, the relationships, the credibility to move the institution. He convinced the company to send drug crystallization experiments to the International Space Station — a genuine scientific opportunity, microgravity as a laboratory for molecular biology. It cost millions. The result: nothing. Two failed experiments. Two lessons that nobody wanted to hear.
        </Paragraph>

        <Paragraph>
          The first failure was cultural. Lilly treated the ISS as a novelty. &ldquo;They put a NASA truck in the parking lot like it was a museum exhibit.&rdquo; A spectacle for the press release, not a research commitment. The second failure was structural. After the first attempt, the lab director said quietly: &ldquo;If I love this result, I&apos;m never going to get there again.&rdquo; The platform was too rare, too expensive, too inaccessible to build a research program around. You can&apos;t iterate if you can only afford one shot.
        </Paragraph>

        <Paragraph>
          Ken left for Redwire. The lesson traveled with him.
        </Paragraph>

        <Paragraph keyLine>
          Space projects without an Earth commercial path are expensive vanity.
        </Paragraph>

        <Paragraph>
          Virtual humans, Doug argues, make money now — on Earth, in drug trials, in insurance actuarial modeling, in hospital simulation and surgical training. Space is the prestige play, the headline, the thing that makes the investor deck memorable. Earth is the revenue play. The place where you eat.
        </Paragraph>

        <Paragraph>
          Do both. But eat on Earth.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="The Map"
          chapter="Chapter IV"
          title="What Happens Next"
        />

        <Paragraph>
          Dan maps the connections. He does this the way cartographers work — naming the terrain that already exists, drawing lines between points that have not yet been linked on any shared document.
        </Paragraph>

        <Paragraph>
          SURA, Latin America&apos;s largest health insurer, is running diabetes and Alzheimer&apos;s studies. They have the patient population, the longitudinal data, the institutional appetite. Florence Hudson&apos;s Digital Twin Workshop lands on April 27 in New York — a room where the people who need to meet each other will be in the same building. Viking Therapeutics in San Diego: $700 million in the bank, a failed trial behind them, the exact kind of organization that needs virtual-first hypothesis testing before it burns another runway.
        </Paragraph>

        <Paragraph>
          And then, quietly, the name that changes the temperature of the room.
        </Paragraph>

        <Paragraph>
          &ldquo;Vitalik Buterin. Ethereum. He has invested somewhere between fifty and five hundred million in longevity research. I can probably make an introduction.&rdquo;
        </Paragraph>

        <Paragraph>
          The room goes silent. Not because of the money. Because of the convergence. Blockchain and longevity. Digital twins and decentralized health sovereignty. Every thread Nicolas has been weaving for two years — LPI, edge-native data, biological modeling, tokenized knowledge, the idea that your health data should belong to you and no institution — is suddenly sitting in the same sentence as the founder of Ethereum.
        </Paragraph>

        <Paragraph keyLine>
          The network IS the twin.
        </Paragraph>

        <Paragraph>
          Nicolas ends the meeting with a list of commitments. Send M4 papers to Marc and Doug. Ask Gunnar about Alzheimer&apos;s modeling. Prepare a summary for Dan&apos;s workshop. Connect with SURA through Dan&apos;s network. Explore the Buterin introduction.
        </Paragraph>

        <Paragraph>
          But the real takeaway is not on the list. It is the realization that the room itself — four people who had no structural reason to know each other, connected by a methodology that does not yet have a name, orbiting the same problem from four different disciplines — is the product. The network that forms between them, the shared model of what a virtual human could become and who could build it, is more valuable than any single piece of science in the conversation.
        </Paragraph>

        <Paragraph>
          The twin is not a simulation of one body. It is a simulation of the future built by the people in this room. And it started, like all the important things, without an agenda item that said it would.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Dedication
            ════════════════════════════════════════════════ */}
        <DedicationBlock />

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
