"use client";

import { useState, useEffect, useRef } from "react";
import Scroller from "../components/Scroller";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   The Sentinel Seed — Scrollytelling Edition

   Reuters-style: the medium IS the message.
   - Page starts dark (night in Gothenburg, 2:47 AM)
   - Greens bloom as the greenhouse chapter begins
   - Network chapter: particles multiply
   - Reversal: the world brightens, golden light
   - Escape velocity: transcendent, luminous
   - Last question: pure, minimal, just earth and rain
   ═══════════════════════════════════════════════════════════════ */

interface ChapterTheme {
  bg: string;
  textColor: string;
  accentColor: string;
  glowColor: string;
  particleColor: string;
  overlay?: string;
}

const themes: Record<number, ChapterTheme> = {
  // Prologue — absolute darkness, monitor glow
  0: {
    bg: "#03030a",
    textColor: "#8a9bae",
    accentColor: "#4a7dff",
    glowColor: "rgba(74, 125, 255, 0.06)",
    particleColor: "rgba(74, 125, 255, 0.15)",
  },
  // Ch I — Apartment, 2:47 AM, blue monitor glow, dying basil
  1: {
    bg: "#050810",
    textColor: "#9eaabb",
    accentColor: "#5b8def",
    glowColor: "rgba(91, 141, 239, 0.08)",
    particleColor: "rgba(91, 141, 239, 0.2)",
  },
  // Ch II — Greenhouse, Linköping, first green
  2: {
    bg: "#040a06",
    textColor: "#a0b8a4",
    accentColor: "#4dbd6a",
    glowColor: "rgba(77, 189, 106, 0.1)",
    particleColor: "rgba(77, 189, 106, 0.25)",
  },
  // Ch III — Network, global scale, emerald web
  3: {
    bg: "#060d0a",
    textColor: "#b0ccb4",
    accentColor: "#34d399",
    glowColor: "rgba(52, 211, 153, 0.12)",
    particleColor: "rgba(52, 211, 153, 0.3)",
  },
  // Ch IV — Reversal, golden dawn, the trend reversed
  4: {
    bg: "#0d0a04",
    textColor: "#cdc0a0",
    accentColor: "#d4a843",
    glowColor: "rgba(212, 168, 67, 0.15)",
    particleColor: "rgba(212, 168, 67, 0.3)",
  },
  // Ch V — Escape velocity, luminous cyan, transcendence
  5: {
    bg: "#040d10",
    textColor: "#b0d4e0",
    accentColor: "#22d3ee",
    glowColor: "rgba(34, 211, 238, 0.12)",
    particleColor: "rgba(34, 211, 238, 0.2)",
  },
  // Ch VI — Last question, return to earth, warm violet into gold
  6: {
    bg: "#08060d",
    textColor: "#c8c0d8",
    accentColor: "#a78bfa",
    glowColor: "rgba(167, 139, 250, 0.1)",
    particleColor: "rgba(167, 139, 250, 0.15)",
  },
  // Dedication — warm, minimal
  7: {
    bg: "#0a0806",
    textColor: "#c0b8a0",
    accentColor: "#d4b254",
    glowColor: "rgba(201, 168, 76, 0.08)",
    particleColor: "rgba(201, 168, 76, 0.1)",
  },
};

/* ─── Key moments (pull quotes that transform the page) ─── */
const keyMoments = [
  "What if the basil knew?",
  "The interface was LPI.",
  "The first closed loop took three years to build.",
  "The data was extraordinary.",
  "The economics had flipped.",
  "Life Atlas measured the system.",
  "It didn't come from a lab.",
  "It came from a garden.",
  "He made pesto.",
  "Part of something that grows.",
];

/* ─── Chapter text ─── */
const chapters = [
  {
    number: "I",
    title: "The Apartment in Gothenburg",
    year: "2026",
    paragraphs: [
      "The basil was dying again.",
      "Nicolas Waern stood in his apartment in Gothenburg, 2:47 AM, the blue glow of four monitors carving his silhouette against the window. Rain streaked the glass in the way it only does in Sweden — a patient, permanent rain, as if the sky had decided long ago to never fully stop.",
      "He touched the basil leaf. Brown at the edges. He'd forgotten to water it. He'd forgotten to eat, too, but that was a different kind of forgetting — the kind that happens when you're building something that won't let you sleep.",
      "The gap between you and everything else.",
      "On the left monitor: his genome. On the right: his blood panel. In the center: Life Atlas — the thing he'd been building for two years that everyone told him was too ambitious, too broad, too weird.",
      "The M4 model was running in the background — a mechanistic simulation of his own biology. It flagged something. A trajectory. His B12 was declining — not fast, not urgent, but the kind of slow curve that becomes urgent in eighteen months if you don't see it now.",
      "Nicolas looked at the recommendation. Then he looked at the dying basil.",
      "And that was the moment.",
      "What if the basil knew?",
      "He typed a note into the platform. Three lines. The timestamp said 3:12 AM.",
      "LPI ↔ CPI\nHuman twin talks to plant twin.\nWhat grows is grown for you.",
      "Then he watered the basil and went to sleep.",
    ],
  },
  {
    number: "II",
    title: "The Greenhouse in Linköping",
    year: "2029",
    paragraphs: [
      "The first closed loop took three years to build.",
      "The pieces were all there, sitting in separate silos, the way pieces always sit when nobody has built the interface between them.",
      "The interface was LPI.",
      "The greenhouse in Linköping was small — 200 square meters of hydroponic racks under programmable LEDs. What made it different was a single cable running from the growth controller to a server rack, and on that server, two digital twins talking to each other.",
      "Nicolas was Twin One. His M4 biological model, now calibrated against three years of continuous data.",
      "The basil was Twin Two.",
      "Between them: the loop.",
      "Six weeks later, Nicolas ate the basil in a pesto. His next blood panel showed homocysteine dropping.",
      "He hadn't taken a supplement. His environment had changed for him, because his environment knew him.",
    ],
  },
  {
    number: "III",
    title: "The Network",
    year: "2034",
    paragraphs: [
      "What happened with a field was what always happens when you close a loop: it compounds.",
      "The first ten thousand twin-pairs were early adopters. The data was extraordinary.",
      "By 2034, Life Atlas had 2.3 million active twin-pairs across 41 countries.",
      "The economics had flipped.",
      "Healthcare costs for twin-pair users dropped 34% over three years — not through diagnostics or drugs but through food that was right for them.",
      "Carbon sequestration per hectare was 2.7x higher than conventional farming. Water usage was down 60%. Pesticide usage was effectively zero.",
      "The loop was closing at scale. Humans getting healthier. Land getting healthier. Each one driving the other.",
    ],
  },
  {
    number: "IV",
    title: "The Reversal",
    year: "2041",
    paragraphs: [
      "The United Nations published the Global Regeneration Index for the first time in 2041.",
      "For the first time in recorded measurement history, the index was positive.",
      "Life Atlas measured the system.",
      "The LPI-CPI architecture wasn't magic. It was accounting — but for biology instead of money.",
      "By 2041, the first generation of children had been born into twin-pair households. Their expected healthspans were 15-20 years longer than their parents'.",
      "Not through gene therapy. Not through pharmaceutical intervention. Through food, grown in soil, under light, tuned to them.",
    ],
  },
  {
    number: "V",
    title: "The Escape",
    year: "2059",
    paragraphs: [
      "The term \"longevity escape velocity\" had been coined decades earlier. The theorists had imagined it would come from nanotechnology, or gene editing, or pharmaceutical breakthroughs.",
      "It didn't come from a lab.",
      "It came from a garden.",
      "The network's health improvement rate crossed 1.0. For every year that passed, the average user got more than a year younger.",
      "The environment had become a therapeutic instrument. The food was the medicine. The soil was the pharmacy. The light was the dosage. And the twin was the physician.",
      "He had a garden now. A real one. The garden knew him. He knew the garden. They had been growing together for a long time.",
      "He pressed the seed into the soil with his thumb. It was warm.",
      "He made pesto.",
    ],
  },
  {
    number: "VI",
    title: "The Last Question",
    year: "2097",
    paragraphs: [
      "They asked the system: Can we live forever?",
      "The system considered the question.",
      "And it answered the way it always answered. Not with words. Not with a prediction. With a seed.",
      "What if the environment knew you?",
      "Nicolas was 109. He still forgot to eat sometimes. The system still reminded him. The food was still in the fridge.",
      "He went into the garden. The rain had stopped — a rare occurrence in Gothenburg, brief and precious.",
      "He looked up.",
      "And for a moment — a moment without measurement, without models, without twins or interfaces or loops — he was just a man in a garden, standing in the space between rain, feeling exactly like the soil.",
      "Part of something that grows.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Visual Layer — the sticky background that transforms
   ═══════════════════════════════════════════════════════════════ */

function VisualLayer({ activeStep, progress }: { activeStep: number; progress: number }) {
  const theme = themes[activeStep] || themes[0];

  return (
    <div
      className="w-full h-full transition-all duration-[2000ms] ease-in-out"
      style={{ background: theme.bg }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms]"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${theme.glowColor}, transparent 70%)`,
        }}
      />

      {/* Rain effect — visible in chapters 0,1 and 6 */}
      {(activeStep <= 1 || activeStep >= 6) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
              style={{
                left: `${(i * 5.26) % 100}%`,
                height: `${60 + (i % 4) * 20}px`,
                animation: `rain ${1.5 + (i % 3) * 0.5}s linear infinite`,
                animationDelay: `${(i * 0.15) % 2}s`,
                opacity: activeStep >= 6 ? 0.15 : 0.25,
              }}
            />
          ))}
        </div>
      )}

      {/* Growth particles — visible from chapter 2 onward, multiplying */}
      {activeStep >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(Math.min((activeStep - 1) * 4, 20))].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full transition-all duration-[2000ms]"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                background: theme.particleColor,
                left: `${10 + ((i * 17) % 80)}%`,
                top: `${10 + ((i * 23) % 80)}%`,
                animation: `float-particle ${8 + (i % 5) * 2}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Monitor glow — chapter 0-1 only */}
      {activeStep <= 1 && (
        <div
          className="absolute transition-opacity duration-[2000ms]"
          style={{
            bottom: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(74, 125, 255, 0.06), transparent 70%)",
            opacity: activeStep === 0 ? 0.5 : 1,
          }}
        />
      )}

      {/* Golden dawn — chapter 4 */}
      {activeStep === 4 && (
        <div
          className="absolute inset-0 transition-opacity duration-[3000ms]"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(212, 168, 67, 0.03) 50%, rgba(212, 168, 67, 0.08) 100%)",
            opacity: progress > 0.3 ? 1 : 0,
          }}
        />
      )}

      {/* Transcendence glow — chapter 5 */}
      {activeStep === 5 && (
        <div
          className="absolute inset-0 transition-opacity duration-[2000ms]"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, rgba(34, 211, 238, 0.05), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Story Step — each scroll section
   ═══════════════════════════════════════════════════════════════ */

function StoryStep({
  children,
  isChapterTitle,
  isKeyMoment,
  isCode,
  theme,
}: {
  children: string;
  isChapterTitle?: boolean;
  isKeyMoment?: boolean;
  isCode?: boolean;
  theme: ChapterTheme;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (isCode) {
    return (
      <div ref={ref} className="transition-all duration-1000" style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)" }}>
        <pre
          className="font-mono text-sm md:text-base rounded-lg px-6 py-4 my-6 whitespace-pre-wrap"
          style={{
            background: "rgba(13, 17, 23, 0.8)",
            border: `1px solid ${theme.accentColor}30`,
            color: theme.accentColor,
          }}
        >
          {children}
        </pre>
      </div>
    );
  }

  if (isKeyMoment) {
    return (
      <div
        ref={ref}
        className="transition-all duration-[1500ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px) scale(0.97)",
        }}
      >
        <p
          className="text-2xl md:text-4xl font-light italic text-center my-16 md:my-24 leading-snug"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: theme.accentColor,
            textShadow: `0 0 40px ${theme.glowColor}`,
          }}
        >
          {children}
        </p>
      </div>
    );
  }

  const isShort = children.length < 80;

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      <p
        className={`leading-[1.9] mb-6 ${isShort ? "text-lg md:text-xl" : "text-base md:text-lg"}`}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: isShort ? theme.textColor : `${theme.textColor}cc`,
        }}
      >
        {children}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Reading progress
   ═══════════════════════════════════════════════════════════════ */

function ProgressBar({ activeStep }: { activeStep: number }) {
  const [progress, setProgress] = useState(0);
  const theme = themes[activeStep] || themes[0];

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          background: theme.accentColor,
          boxShadow: `0 0 10px ${theme.accentColor}40`,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Chapter marker — appears between chapters
   ═══════════════════════════════════════════════════════════════ */

function ChapterMarker({ number, title, year, theme }: { number: string; title: string; year: string; theme: ChapterTheme }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-[2000ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(50px)" }}
    >
      <div className="text-center py-20 md:py-32">
        <span
          className="text-xs tracking-[0.5em] uppercase block mb-4"
          style={{ fontFamily: "'Inter', sans-serif", color: `${theme.accentColor}80` }}
        >
          Chapter {number}
        </span>
        <h2
          className="text-3xl md:text-5xl font-light mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: theme.accentColor,
            textShadow: `0 0 60px ${theme.glowColor}`,
          }}
        >
          {title}
        </h2>
        <span
          className="text-sm tracking-[0.2em]"
          style={{ fontFamily: "'Inter', sans-serif", color: `${theme.textColor}80` }}
        >
          {year}
        </span>
        <div className="mt-8 mx-auto w-16 h-px" style={{ background: `${theme.accentColor}40` }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════ */

export default function SentinelSeedScroll() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // Build steps: prologue + (chapter marker + paragraphs) per chapter + dedication
  // We map steps to themes
  const stepToTheme = useRef<number[]>([]);

  // Build step-to-theme mapping
  // Step 0 = prologue (theme 0)
  // Then for each chapter: marker + paragraphs
  useEffect(() => {
    const mapping: number[] = [0]; // prologue
    chapters.forEach((ch, ci) => {
      mapping.push(ci + 1); // chapter marker
      ch.paragraphs.forEach(() => mapping.push(ci + 1)); // each paragraph
    });
    mapping.push(7); // dedication
    stepToTheme.current = mapping;
  }, []);

  const currentThemeIndex = stepToTheme.current[activeStep] ?? 0;
  const theme = themes[currentThemeIndex] || themes[0];

  return (
    <>
      <ProgressBar activeStep={currentThemeIndex} />
      <StoryNav />

      <Scroller
        onStepChange={setActiveStep}
        onProgress={(idx, p) => setStepProgress(p)}
        offset={0.45}
      >
        <Scroller.Background>
          <VisualLayer activeStep={currentThemeIndex} progress={stepProgress} />
        </Scroller.Background>

        <Scroller.Steps>
          {/* ═══ Prologue ═══ */}
          <Scroller.Step>
            <div className="text-center px-6 max-w-2xl mx-auto">
              <p
                className="text-xs tracking-[0.5em] uppercase mb-6"
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(74, 125, 255, 0.5)" }}
              >
                Life Atlas
              </p>
              <h1
                className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "#e8e4df",
                  textShadow: "0 0 80px rgba(74, 125, 255, 0.1)",
                }}
              >
                The Sentinel Seed
              </h1>
              <p
                className="text-xl md:text-2xl font-light italic max-w-lg mx-auto mb-16"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#9eaabb" }}
              >
                A story about the first user and the last platform.
              </p>
              <div className="flex flex-col items-center gap-2 opacity-40">
                <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "#9eaabb" }}>
                  Scroll to begin
                </span>
                <div className="w-px h-10 bg-blue-400/30 animate-pulse" />
              </div>
            </div>
          </Scroller.Step>

          {/* ═══ Chapters ═══ */}
          {chapters.map((chapter, ci) => {
            const chTheme = themes[ci + 1] || themes[0];
            return [
              // Chapter marker
              <Scroller.Step key={`ch-${ci}`} style={{ minHeight: "60vh" }}>
                <ChapterMarker
                  number={chapter.number}
                  title={chapter.title}
                  year={chapter.year}
                  theme={chTheme}
                />
              </Scroller.Step>,

              // Paragraphs
              ...chapter.paragraphs.map((p, pi) => {
                const isKey = keyMoments.includes(p);
                const isCode = p.startsWith("LPI") || p.startsWith("Twin-pair");
                return (
                  <Scroller.Step
                    key={`ch-${ci}-p-${pi}`}
                    style={{
                      minHeight: isKey ? "90vh" : "50vh",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                    }}
                  >
                    <div className="max-w-2xl mx-auto w-full">
                      <StoryStep
                        isKeyMoment={isKey}
                        isCode={isCode}
                        theme={chTheme}
                      >
                        {p}
                      </StoryStep>
                    </div>
                  </Scroller.Step>
                );
              }),
            ];
          }).flat()}

          {/* ═══ Dedication ═══ */}
          <Scroller.Step style={{ minHeight: "80vh" }}>
            <div className="text-center px-6 max-w-lg mx-auto">
              <div className="flex justify-center gap-3 mb-12">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(201, 168, 76, 0.3)" }} />
                ))}
              </div>
              <p
                className="text-lg italic mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#c0b8a0" }}
              >
                — For the first user. And the last one.
              </p>
              <p
                className="text-lg italic mb-16"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#c0b8a0" }}
              >
                — And for every seed that learned to grow toward someone.
              </p>
              <Link
                href="/"
                className="inline-block px-8 py-3 border rounded-lg text-sm transition-colors duration-300 hover:border-[var(--color-gold-dim)] hover:text-[var(--color-gold)]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  color: "rgba(201, 168, 76, 0.5)",
                }}
              >
                THE SENTINEL STORIES
              </Link>
            </div>
          </Scroller.Step>
        </Scroller.Steps>
      </Scroller>

      <style jsx global>{`
        @keyframes rain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px) scale(1.3); opacity: 0.6; }
          100% { transform: translateY(-40px) translateX(-5px) scale(0.8); opacity: 0.2; }
        }
      `}</style>
    </>
  );
}
