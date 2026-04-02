"use client";

import Link from "next/link";
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
    function onScroll() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    }
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
        className="h-full transition-all duration-75"
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
   Paragraph — keyLine mode = gold italic pull-quote
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: string;
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
  year: string;
  chapter: string;
  title: string;
}

function ChapterDivider({ year, chapter, title }: ChapterDividerProps) {
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

      <p
        className="text-xs tracking-[0.4em] mb-4"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-text-secondary)",
          opacity: 0.5,
        }}
      >
        {year}
      </p>

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
   DedicationBlock
   ═══════════════════════════════════════════════════════════════ */

function DedicationBlock() {
  const { ref, visible } = useFadeIn(0.15);

  return (
    <div
      ref={ref}
      className="max-w-xl mx-auto px-6 py-24 text-center transition-all duration-[2000ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
      }}
    >
      <div
        className="h-px mb-14"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
        }}
      />

      <p
        className="text-xs tracking-[0.5em] uppercase mb-6"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        Dedication
      </p>

      <p
        className="text-xl md:text-2xl font-light italic leading-[1.7]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        For every arm that was asked to throw too much.
        <br />
        And for every kid who just wanted to play.
      </p>

      <div
        className="h-px mt-14"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Sources — collapsible
   ═══════════════════════════════════════════════════════════════ */

const SOURCES = [
  "American Academy of Pediatrics. \"Overuse Injuries, Overtraining, and Burnout in Young Athletes.\" Pediatrics, Vol. 153, No. 2, February 2024.",
  "Aspen Institute Project Play. \"State of Play 2025.\" projectplay.org, 2025.",
  "George Washington University. \"Youth Athletes' Definitions of Fun in Sport.\" 2014.",
  "Hoag Orthopedic Institute. \"Study Shows Sharp Rise in UCL Injuries and Surgeries Among Youth Throwing Athletes.\" Journal of Bone and Joint Surgery Reviews, 2025.",
  "PMC12110343. \"Early Sport Specialization: A Rapid Systematic Review.\" 93 studies, 62,000+ athletes. 2024.",
  "Little League International. \"Regular Season Pitching Rules.\" littleleague.org.",
  "Hood, L. \"P4 Medicine: Predictive, Preventive, Personalized, Participatory.\" Institute for Systems Biology.",
  "Project Play Survey. \"Family spending on youth sports rises 46% over five years.\" 2025.",
  "ScholarshipStats.com. \"Odds of a High School Athlete Making a College Team.\" <2% scholarship rate.",
  "PMC10293556. \"Sleep and the Young Athlete.\" Minimum 9 hours recommended; 52% of adolescent athletes sleep 8+ hours.",
  "Balyi, I. \"Long-Term Athletic Development.\" Peak Height Velocity-based training periodization.",
  "Life Atlas Position Paper. \"All Futures in One Place.\" Nicolas Waern, 2026.",
];

function SourcesBlock() {
  const { ref, visible } = useFadeIn(0.1);
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto px-6 mb-10 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-3 mb-4 group focus:outline-none"
        aria-expanded={open}
      >
        <span
          className="text-[9px] tracking-[0.5em] uppercase transition-colors duration-300 group-hover:text-[var(--color-gold)]"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
        >
          Sources
        </span>
        <span
          className="text-[9px] transition-transform duration-300"
          style={{
            color: "var(--color-gold-dim)",
            display: "inline-block",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          &#9656;
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "1200px" : "0px", opacity: open ? 1 : 0 }}
      >
        <ol className="list-none space-y-3 pb-2">
          {SOURCES.map((source, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="flex-shrink-0 text-[10px] mt-0.5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-gold-dim)",
                }}
              >
                {i + 1}.
              </span>
              <span
                className="text-[10px] leading-[1.75]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "var(--color-text-secondary)",
                }}
              >
                {source}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Tags
   ═══════════════════════════════════════════════════════════════ */

const TAGS = [
  "youth sports",
  "Little League",
  "P4 medicine",
  "growth plates",
  "pitch count",
  "sleep science",
  "fun",
  "overuse injury",
  "Tommy John",
  "early specialization",
  "LTAD",
  "Life Atlas",
  "Austin",
  "baseball",
];

function TagRow() {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto px-6 pb-10 flex flex-wrap justify-center gap-2 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
      }}
    >
      {TAGS.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full border text-[9px] tracking-[0.1em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderColor: "var(--color-gold-dim)",
            color: "var(--color-text-secondary)",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BackLink
   ═══════════════════════════════════════════════════════════════ */

function BackLink() {
  const { ref, visible } = useFadeIn(0.2);

  return (
    <div
      ref={ref}
      className="pb-24 text-center transition-all duration-[1600ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
      }}
    >
      <Link
        href="/"
        className="inline-block"
        style={{ textDecoration: "none" }}
      >
        <span
          className="text-[10px] tracking-[0.5em] uppercase transition-colors duration-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "var(--color-gold-dim)";
          }}
        >
          &larr;&nbsp;&nbsp;The Sentinel Stories
        </span>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheArmThatRemembered() {
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
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 42%, rgba(201,168,76,0.04) 0%, transparent 58%)",
            }}
          />

          {/* Floating golden motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  height: i % 5 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.05 + (i % 5) * 0.028,
                  left: `${6 + i * 5.8}%`,
                  top: `${12 + (i % 8) * 11}%`,
                  animation: `mote ${8 + i * 1.3}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.65}s`,
                }}
              />
            ))}
          </div>

          {/* Title content */}
          <div
            className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "none" : "translateY(28px)",
            }}
          >
            {/* Vertical gold line above */}
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
              className="text-[10px] tracking-[0.7em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-gold-dim)",
              }}
            >
              Life Atlas &mdash; The Sentinel Stories
            </p>

            {/* Byline */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              When the game belonged to the children again
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Arm That Remembered
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              Sentinel New Dawn &mdash; A Youth Sports Story
            </p>

            {/* Gold separator */}
            <div
              className="h-px w-16 mx-auto mb-10"
              style={{ background: "var(--color-gold-dim)" }}
            />

            {/* Opening line teaser */}
            <p
              className="text-base max-w-sm mx-auto mb-16 leading-[1.9] italic"
              style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}
            >
              Nobody was counting. That was the whole problem.
            </p>

            {/* Scroll indicator */}
            <div
              className="flex flex-col items-center gap-3"
              style={{ color: "var(--color-gold-dim)" }}
            >
              <span
                className="text-[9px] tracking-[0.5em] uppercase"
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

        {/* ═══ Story Body ═══ */}
        <article className="max-w-2xl mx-auto px-6 pb-4">

          {/* ── Chapter I ── */}
          <ChapterDivider
            year="2027, Austin, Texas"
            chapter="Chapter I"
            title="The Boy Who Threw Too Much"
          />

          <Paragraph>
            Marcus Chen is twelve years old and his arm hurts. Not the kind of hurt that makes you stop — the kind you learn to ignore because stopping means losing your spot. He plays for three teams: his school league, a travel ball team called the Texas Hammers, and his All-Star squad. Between them, he threw 847 pitches last month. Nobody knows that number. Nobody is counting.
          </Paragraph>

          <Paragraph>
            His Little League has pitch count rules — 85 pitches per game for his age group, with four calendar days rest after 66. But those rules only govern Little League games. The travel team doesn't report to Little League. The showcase tournament last weekend in Houston had no pitch tracking at all. Marcus threw a complete game on Saturday, relieved on Sunday, and started again Tuesday for his school.
          </Paragraph>

          <Paragraph>
            Seventy percent of kids quit organized sports by age 13. When researchers asked why, the answer wasn't injury or cost. It was that sports stopped being fun. When George Washington University surveyed thousands of youth athletes and asked them to rank 81 definitions of what makes sports fun, kids ranked winning at number 48. Their parents didn't know that.
          </Paragraph>

          <Paragraph>
            Marcus's father doesn't know his son's arm hurts. Marcus doesn't tell him because the showcase is next month and three college scouts will be there. Marcus is twelve. He doesn't need a scholarship. He needs a childhood.
          </Paragraph>

          <Paragraph keyLine>
            Nobody was counting. That was the whole problem.
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            year="2029"
            chapter="Chapter II"
            title="The Twin Arrives"
          />

          <Paragraph>
            Two years later, the Austin Youth Baseball Association becomes one of the first leagues in the country to deploy Life Atlas for its players. Not as surveillance — the ethical guardrails are explicit. The data belongs to the child and their family. The league sees only anonymized, aggregated insights. No coach gets individual biometric data. No parent gets a leaderboard.
          </Paragraph>

          <Paragraph>
            What the twin does: it counts what nobody was counting. Marcus wears a small sensor sleeve — based on the PhySens wrist-worn IMU validated in 2025 research — that detects every throw across every team, every practice, every backyard session. His cumulative pitch count lives in his family's Life Atlas, not in any league database. His parents can see it. Marcus can see it. His body can finally speak.
          </Paragraph>

          <Paragraph>
            The twin also tracks his sleep. He's getting 7 hours and 12 minutes on school nights. The science says adolescents need a minimum of nine hours — and a study of 196 competitive athletes aged 14–17 found that those sleeping fewer than eight hours were statistically more likely to sustain injury. Marcus's twin flags the pattern: high throw volume plus insufficient sleep equals elevated injury risk. It doesn't send an alert to his coach. It sends it to Marcus.
          </Paragraph>

          <Paragraph>
            "Hey. Your arm needs two more days. And you need to sleep. The game will still be there."
          </Paragraph>

          <Paragraph>
            The twin speaks in his language. Not a doctor's language. Not a parent's language. His.
          </Paragraph>

          <Paragraph keyLine>
            The twin didn't tell him to stop. It told him he mattered more than the game.
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            year="2031"
            chapter="Chapter III"
            title="The Growth Plate Window"
          />

          <Paragraph>
            Marcus is sixteen. His twin has been running for four years. In that time, it tracked his Peak Height Velocity — the point of maximum growth during puberty — and automatically adjusted his training recommendations around it. During his growth spurt at fourteen, when his bones were growing faster than his tendons could adapt, the twin reduced his recommended throwing intensity by 30% and increased his mobility work. Not because a coach decided. Because the twin understood his physics.
          </Paragraph>

          <Paragraph>
            This matters because the science is brutal: 94% of competitive skeletally immature baseball players show radiographic evidence of medial epicondylar changes. Twenty percent of youth players aged 8–12 and 45% aged 13–14 report arm pain in a single season. Overuse injuries account for roughly half of all youth baseball injuries. And Tommy John surgery — reconstruction of the ulnar collateral ligament — is now performed on athletes as young as fourteen. Approximately 60% of all Tommy John surgeries in the US are on athletes aged 15–19.
          </Paragraph>

          <Paragraph>
            Marcus never had Tommy John surgery. Not because he was lucky. Because his twin tracked his cumulative load across all three teams, identified his growth plate vulnerability window, and adjusted his training before damage accumulated. Prevention is invisible. You never see the injury that didn't happen.
          </Paragraph>

          <Paragraph>
            The American Academy of Pediatrics' 2024 clinical report states clearly: specialization before adolescence increases risk of overuse injuries and burnout. A rapid systematic review of 93 studies involving over 62,000 athletes concluded that early sport specialization was associated with increased risk of injury, worse physical performance, and poor psychological outcomes. Marcus's twin encoded this science into daily recommendations — not as restrictions, but as guidance shaped by his own body's signals.
          </Paragraph>

          <Paragraph keyLine>
            Prevention is invisible. You never see the injury that didn't happen.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            year="2033"
            chapter="Chapter IV"
            title="The Team That Played Together"
          />

          <Paragraph>
            P4 medicine — Predictive, Preventive, Personalized, Participatory, originally formulated by Leroy Hood at the Institute for Systems Biology — was never designed for twelve-year-olds playing baseball. But when the Austin league adopted it, something unexpected happened.
          </Paragraph>

          <Paragraph>
            The P4 framework gave coaches anonymized, aggregated team insights: the team's collective sleep deficit, average recovery scores, and seasonal load trends. Not individual data — team patterns. Coaches could see that their team was collectively under-recovered on Monday mornings after Sunday doubleheaders. They stopped scheduling Monday practices. Injuries dropped 34% in the first season.
          </Paragraph>

          <Paragraph>
            For parents, the twin provided something they'd never had: context. Not "your son threw 85 pitches today" but "your son has thrown 312 pitches in 9 days across three teams, his sleep average is 6.8 hours, and his movement quality score declined 11% since last week. Here's what his body is telling you." Parents didn't need to be doctors. The twin translated.
          </Paragraph>

          <Paragraph>
            For the kids, the biggest change was the simplest: the twin's number one guardrail was fun. When a child's engagement score — derived from their own self-reports, not surveillance — dropped below a threshold, the twin didn't alert the parent. It asked the kid: "Hey, are you still having fun? Because that's the whole point."
          </Paragraph>

          <Paragraph>
            Nine out of ten kids say fun is their primary reason for playing. The system was designed to protect that.
          </Paragraph>

          <Paragraph keyLine>
            The system's number one guardrail was fun. Everything else was second.
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            year="2036"
            chapter="Chapter V"
            title="The Scholarship Myth Dies"
          />

          <Paragraph>
            The economics changed because the data changed.
          </Paragraph>

          <Paragraph>
            For decades, American families spent an average of $1,016 per year on their child's primary sport — a figure that rose 46% between 2019 and 2025. For travel baseball, the real number was $8,000 or more. Eleven percent of sports parents believed their child could go professional. The actual percentage of high school athletes who receive any college athletic scholarship: less than 2%.
          </Paragraph>

          <Paragraph>
            When Life Atlas made these numbers visible — not as abstractions in a magazine article, but as personalized projections based on their own child's trajectory — the travel team industrial complex began to crack. Parents could see, clearly, that spending $8,000 a year on showcase tournaments for a twelve-year-old with a 98.7% probability of never receiving a scholarship was not an investment. It was a lottery ticket purchased with their child's body.
          </Paragraph>

          <Paragraph>
            The money didn't disappear. It redirected. Families invested in sleep optimization, multi-sport participation (which the twin actively encouraged, citing the science that early multi-sport athletes outperform early specialists), family recreation, and — most radically — doing nothing. Unstructured play. The thing that children's bodies were actually designed for.
          </Paragraph>

          <Paragraph>
            Little League enrollment, which had been declining 1.5–3% per year for two decades, reversed for the first time. Not because the organization changed. Because the ecosystem around it changed. When the professionalization pressure lifted, kids came back. Because baseball was fun again.
          </Paragraph>

          <Paragraph keyLine>
            When the pressure lifted, the kids came back. Because baseball was fun again.
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            year="2039"
            chapter="Chapter VI"
            title="Marcus at Twenty-Two"
          />

          <Paragraph>
            Marcus Chen is twenty-two. He didn't play college baseball. He didn't get a scholarship. He doesn't have a torn UCL, a surgically reconstructed elbow, or the chronic shoulder pain that 45% of his childhood teammates developed by age twenty.
          </Paragraph>

          <Paragraph>
            He coaches Little League now. Volunteer. Tuesday and Thursday evenings at the same field where he learned to throw. His players wear sensor sleeves. Their twins track cumulative load. The league's P4 dashboard shows him team recovery patterns. But the thing he watches most carefully isn't on any screen.
          </Paragraph>

          <Paragraph>
            He watches to see if they're laughing.
          </Paragraph>

          <Paragraph>
            Because the twin taught him something no coach ever did: the body remembers everything. Every pitch. Every hour of lost sleep. Every game played through pain because quitting meant losing your spot. The body keeps score.
          </Paragraph>

          <Paragraph>
            But it also remembers joy. It remembers the sound of a ball hitting a glove on a Tuesday evening in Austin when the light is golden and nobody is scouting and nobody is counting pitches and the only reason to throw is because throwing feels good.
          </Paragraph>

          <Paragraph>
            That's what the arm remembers. Not the velocity. Not the showcase. The joy.
          </Paragraph>

          <Paragraph keyLine>
            The body keeps score. But it also remembers joy.
          </Paragraph>

          <div
            className="my-10 mx-auto text-center"
            style={{ maxWidth: "420px" }}
          >
            <p
              className="text-base md:text-lg font-light italic leading-[1.9]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              He watches to see if they&apos;re laughing. That&apos;s the only metric that matters.
            </p>
          </div>

        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Sources ═══ */}
        <SourcesBlock />

        {/* ═══ Tags ═══ */}
        <TagRow />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)     translateX(0)     scale(1);   opacity: 0.05; }
          50%  {                                                              opacity: 0.16; }
          100% { transform: translateY(-40px) translateX(12px)  scale(1.4); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}
