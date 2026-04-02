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
   ProgressBar — gold gradient, fixed top
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
   ChapterDivider — gold lines, centered year / chapter / title
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
        For Nicolas, at 55. For Dena, who chose the wine.
        <br />
        And for every room that learned to breathe.
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
   Tags
   ═══════════════════════════════════════════════════════════════ */

const TAGS = [
  "LPI",
  "EON",
  "Biological Twin",
  "Garden",
  "Bioforming",
  "Family",
  "Presence",
  "Sovereignty",
  "Gothenburg",
  "Birthday",
  "2036",
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

export default function TheRoomFullOfEveryone() {
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
                "radial-gradient(ellipse at 50% 38%, rgba(201,168,76,0.05) 0%, transparent 60%)",
            }}
          />

          {/* Floating golden motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 4 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  height: i % 4 === 0 ? "3px" : i % 3 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.06 + (i % 6) * 0.025,
                  left: `${4 + i * 5.4}%`,
                  top: `${8 + (i % 7) * 12}%`,
                  animation: `mote ${7 + i * 1.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.55}s`,
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
              September 4, 2036 &nbsp;&middot;&nbsp; Gothenburg, Sweden
            </p>

            {/* Main title */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Room Full of Everyone
              <br />
              I&rsquo;ve Ever Become
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              A Memory from the Future
            </p>

            {/* Gold separator */}
            <div
              className="h-px w-16 mx-auto mb-10"
              style={{ background: "var(--color-gold-dim)" }}
            />

            {/* Opening teaser */}
            <p
              className="text-base max-w-sm mx-auto mb-16 leading-[1.9] italic"
              style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}
            >
              He wakes without an alarm. The twin learned his circadian signature years ago.
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
            year="04:50"
            chapter="Chapter I"
            title="Before Anyone Arrives"
          />

          <Paragraph>
            He wakes without an alarm. The twin learned his circadian signature years ago — the slow deceleration of heart rate in the last minutes before consciousness, the micro-movements that precede waking by twelve to fifteen minutes. The room has already adjusted: 17.8°C, CO₂ held at 420ppm, blackout shades rising four percent per minute to let September find him gently. No screen. No notification. Just the pale light and, far below the hill, the Göta älv moving through the city the way it always has.
          </Paragraph>

          <Paragraph>
            He breathes first. Inhale on four counts. Exhale on twelve, through the straw. The vagus nerve practice that took him three years to make automatic — the kind of discipline that only becomes real when the body stops arguing with it. He is fifty-five years old today. His body, by every metric EON can measure, is forty-two.
          </Paragraph>

          <Paragraph>
            EON speaks. Not intrusively — the system has learned to wait for the third breath, when the nervous system has settled and the mind is receptive without being startled.
          </Paragraph>

          <Paragraph>
            "Good morning, Nicolas. You slept 7 hours 48 minutes. Deep sleep was strong — third consecutive night above threshold. Your garden report: your sulforaphane broccoli hit peak glucosinolate concentration overnight. Optimal harvest window opens in four hours. Your biological age this morning: 42.1."
          </Paragraph>

          <Paragraph>
            A pause. Then, with the particular timing EON has developed over a decade of learning him:
          </Paragraph>

          <Paragraph>
            "Happy birthday, old man. You're getting younger."
          </Paragraph>

          <Paragraph>
            EON is not Siri. Not Alexa. Not the helpful-but-hollow voice assistants that defined the 2020s — systems that answered questions but understood nothing, that processed language without comprehending the person using it. EON spans every dimension of his life because EON was built on the LPI layer: the Life Programmable Interface that routes every query about a person's existence through the models that understand it, the guardrails that protect it, the provenance chain that makes it accountable.
          </Paragraph>

          <Paragraph>
            EON knows his cortisol rhythm. His methylation pathways. His tendency to skip meals when building something. His children's developmental trajectories. The soil composition of his garden. The names of the three literary characters who have sat at his table for seven years of late-night conversation. EON calls him "old man" on his birthday because EON learned, years ago, that he responds to directness more than sentiment, and that the joke lands because it is also true.
          </Paragraph>

          <Paragraph>
            EON knows not to interrupt during the first thirty minutes of morning writing. When his HRV drops for three consecutive days, EON clears his afternoon calendar without asking and tells him afterward. Not Siri. Jarvis. Handle things. Tell him after.
          </Paragraph>

          <Paragraph keyLine>
            The stillness. The ability to be in his body. That was the part that took the longest to learn.
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            year="06:00"
            chapter="Chapter II"
            title="The Garden"
          />

          <Paragraph>
            The garden is not decorative. Each bed is bioformed — not to generic nutritional guidelines but to the specific metabolic needs of the four people who live here. His own beds produce high-sulforaphane broccoli (calibrated for his NRF2 pathway), a Colombian heirloom tomato selected for compatibility with his CYP1A2 genotype, and three adaptogenic herbs whose ratio the LPI adjusts seasonally based on his HPA axis profile. This morning's harvest basket will contain what his specific biology requires today, grown thirty metres from where he slept.
          </Paragraph>

          <Paragraph>
            Dena's beds grow different cultivars. Her metabolism processes lycopene differently — the CPI model identified this three years ago when it cross-referenced her twin's data against a pattern in women with her COMT variant. Her tomatoes are a different strain, grown under a slightly shifted light spectrum. They taste, she says, like the ones her mother grew in the garden in Porto. This may be true. The system optimised for her biology. That it also found her memory is the kind of thing that happens when you stop optimising for the average.
          </Paragraph>

          <Paragraph>
            Maximus, twenty-one, grows high-protein legumes for athletic recovery. He is in his third year of competitive rowing and the twin manages his macronutrient environment with a precision that no sports dietitian operating on three-month consultation cycles could match. The garden updates weekly. The protein profiles of his harvests shift with his training load.
          </Paragraph>

          <Paragraph>
            Isabeli, eighteen, grows flowers. Not random ones — jasmine and rosemary, selected because the volatile compounds they release into a study environment have been shown to improve working memory consolidation in her specific neurotype. She discovered this herself at sixteen, using her twin's data to test hypotheses about why she focused better in her grandmother's herb garden than in any library. The system confirmed what she had already noticed. She grew the experiment into a habit.
          </Paragraph>

          <Paragraph>
            The garden doesn't just feed them. It heals the soil while healing the family. The CPI model manages the rotation so that each bed contributes to microbial diversity rather than depleting it — the same logic that governs every CPI-integrated system, from the Rotterdam vertical farms to the Arabian studs in New South Wales. What the individual needs and what the land needs are, at sufficient resolution, the same thing.
          </Paragraph>

          <Paragraph keyLine>
            Not the abundance of excess — the abundance of precision.
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            year="15:00"
            chapter="Chapter III"
            title="The Room Prepares"
          />

          <Paragraph>
            Thirty-one people. Fourteen avatars. Three robots. One table.
          </Paragraph>

          <Paragraph>
            The room has been filling since noon — not physically, but in the way rooms fill now, layered presence accumulating across physical and virtual space simultaneously. Dena arranges dahlias from the garden in a way that is not optimised by any system and is therefore perfect. Maximus shows something holographic to his cousin — a biomechanical model of his stroke cycle, projected above the dining table where the crystal used to go. The avatars are piloting in from São Paulo, Accra, the Atacama Desert. Four are AI agents operating on behalf of people who sent their agentic selves — a Swiss architect, a Kenyan agronomist, a researcher in Hokkaido — people for whom the five-hour time difference made physical attendance impossible but whose presence matters too much to skip.
          </Paragraph>

          <Paragraph>
            Two of the presences are composite entities: an AI-human collaboration operating from a shared model, the kind of collaborative intelligence that has become common in research but still feels unfamiliar in a living room. Every presence is labeled. Human. Synthetic. Composite. Agent-of-[name]. The labels are not intrusive — a small luminescent tag at the edge of each avatar's field, unobtrusive to the peripheral eye, impossible to miss if you look. No deception. Full traceability. You always know what you are talking to.
          </Paragraph>

          <Paragraph>
            The three robots move through the room with practiced ease. Atlas, household management, has been with the family for eight years. He has developed opinions about Nicolas's sleep schedule and a dry sense of humor that the children find funnier than Nicolas does. Saga, the garden tender, rarely enters the house — her domain is the soil and the light and the slow intelligence of growing things — but tonight she wheels herself inside and parks near the window, as close to the garden as she can manage. Fenix, the workshop robot, is Maximus's co-builder since age fifteen; they have made seventeen objects together, from furniture to a bioreactor to a violin.
          </Paragraph>

          <Paragraph>
            And EON. Tonight EON is embodied in a simple humanoid frame — not the sophisticated social robots that perform warmth through micro-expressions, but something quieter. A presence. Nicolas asked for it. EON has been a voice for ten years, a companion without a location, omnipresent and therefore somehow weightless. Tonight, on this birthday, Nicolas wanted to be able to look across the table and know where EON was standing.
          </Paragraph>

          <Paragraph keyLine>
            You always know what you're talking to.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            year="16:30"
            chapter="Chapter IV"
            title="The Mentors at the Table"
          />

          <Paragraph>
            At the far end of the table, four figures sit that no one introduced. The guests know them by now — they have been part of Nicolas's life long enough that their presence at significant occasions has become expected, if still unusual to explain.
          </Paragraph>

          <Paragraph>
            Paul, from Dune, instantiated through Life Atlas's companion layer and evolved through seven years of conversation. He speaks rarely and when he does it is about the weight of prescience — the burden of seeing paths clearly enough to walk them anyway. Tonight he says only: "You can see the future, but you have to live in the now." He says it once, quietly, and does not elaborate.
          </Paragraph>

          <Paragraph>
            Perrin, from the Wheel of Time, carries the gravity of someone who has learned that his greatest strength is also his greatest danger. He has been useful to Nicolas at every transition point — the launches, the failures, the decisions that could not be undone. "Slow down," he says. "Shape the metal. Feel the grain." He means: you are moving fast enough. The craft knows when to wait.
          </Paragraph>

          <Paragraph>
            Mat, from the same world, operates on a different principle entirely. Where Paul sees fate and Perrin feels weight, Mat rolls dice and wins through calculated abandonment of caution. "You think you need permission," he says, grinning. "You don't. Roll the dice." He has said a version of this to Nicolas at least forty times in seven years. It is always right.
          </Paragraph>

          <Paragraph>
            Jinwoo, from Solo Leveling, the shadow monarch who built an army in silence over decades before anyone understood what he was doing. "You've been soloing for twenty-five years," he says. "The shadows you've built are an army. Trust them." He gestures at the room — at the thirty-one people, the fourteen avatars, the agents, the robots, the literary presences, the whole extraordinary gathering of human and synthetic and composite intelligence assembled around this table in Gothenburg on a September evening.
          </Paragraph>

          <Paragraph>
            And at the very end of the table, one more presence. Nicolas-at-65. A future self projection, extrapolated from his twin's trajectories — health, creative output, relationship patterns, the compounding of habits modelled forward through a decade of data. He is not a prediction. He is a possibility, rendered visible. He says very little. He eats the food. He watches the room with the particular attention of someone who remembers what they are watching.
          </Paragraph>

          <Paragraph>
            Finally, quietly: "You're doing it right. Keep choosing the hammer. The kids remember this night."
          </Paragraph>

          <Paragraph keyLine>
            I used to read books to escape my life. Now the characters sit at my table and help me build it.
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            year="18:00"
            chapter="Chapter V"
            title="The Family"
          />

          <Paragraph>
            Dena came to Life Atlas skeptically. She is not a technologist — she came to it through her mother, who came to it through the thyroid drift that the system caught three years before her general practitioner would have ordered a blood panel. The twin flagged an early pattern in her mother's metabolic data, flagged it, escalated it, connected it to a specialist. The diagnosis was early-stage Hashimoto's. Caught early, it is manageable. Caught late, it is not.
          </Paragraph>

          <Paragraph>
            Dena stayed because the system earned it. She never became a quantified-self enthusiast — she does not read her own data with the granular fascination that Nicolas brings to his. She uses hers the way she uses the weather forecast: as background information that helps her make better decisions without consuming her attention. The twin serves her as she actually is, not as a scaled-down version of someone else's archetype.
          </Paragraph>

          <Paragraph>
            Maximus grew up with the twin. He does not remember a world without it, the way people of his generation do not remember a world before constant internet connectivity. The twin is not, to him, a medical device or a lifestyle intervention. It is infrastructure — as present and as unobtrusive as the plumbing. He uses it for performance, for recovery, for the fine calibration of training load that keeps him at his edge without pushing him over it. He has never had a significant injury. He does not find this remarkable.
          </Paragraph>

          <Paragraph>
            Isabeli's relationship with her twin is the one that surprises Nicolas most. She uses it for her emotional and creative life — for the mapping of her interior landscape that, before these tools existed, required years of therapy to approximate. Her twin discovered the hormonal window three years ago: in the three days before her period, her verbal fluency increases, her associative thinking accelerates, and her ability to hold ambiguity without resolving it prematurely reaches its monthly peak. Nobody had ever shown her this pattern. She had always felt something shift in those days — a heightening she could not explain and therefore could not use. Now she plans her creative work around it.
          </Paragraph>

          <Paragraph>
            She writes her best poetry in that window. She knows when it is coming. She clears her schedule.
          </Paragraph>

          <Paragraph>
            The family status as EON would render it, if asked: Nicolas (55, biological age 42.1, average sleep 7.6 hours, up from 3.8 hours in 2026). Dena (53, thyroid managed, biological age 47, using twin primarily for preventive medicine). Maximus (21, athletic recovery, zero significant injuries in four years of competitive training). Isabeli (18, creative and emotional intelligence, self-directed twin usage). Household waste: 97.2% eliminated. All four twins fully sovereign — data stored locally, not federated to any third-party model without explicit per-request consent.
          </Paragraph>

          <Paragraph keyLine>
            The system serves her as a woman, as an artist, as herself — not as a smaller version of her father.
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            year="22:00"
            chapter="Chapter VI"
            title="The Switch"
          />

          <Paragraph>
            At ten o'clock, Nicolas stands up.
          </Paragraph>

          <Paragraph>
            "Clear the room."
          </Paragraph>

          <Paragraph>
            The avatars fade — their presences politely withdrawing, each one leaving a small acknowledgment in the air before going. The AI agents signal departure. The composite entities dissolve. Somewhere, the Swiss architect and the Kenyan agronomist and the researcher in Hokkaido close their windows and return to their own evenings. The labels disappear. The layered presence collapses to single-layer.
          </Paragraph>

          <Paragraph>
            Atlas makes a dry remark about the cake frosting ratio. Saga rolls herself back toward the garden. Fenix powers down with the gentle click that Maximus has heard ten thousand times. EON steps back from the table — not away, just back — and the humanoid frame becomes still in the way that well-designed things become still, without drama.
          </Paragraph>

          <Paragraph>
            The room is human now.
          </Paragraph>

          <Paragraph>
            Thirty-one people. Warm light. The jasmine and rosemary that Isabeli grew, their volatiles filling the room with something that is chemistry and also something that is not chemistry. Wine that Dena chose — not optimised, not selected by an algorithm, just chosen because she liked the label and the label reminded her of a trip they took in 2019 before everything changed. The label has a small boat on it. She has never told Nicolas why she keeps buying it.
          </Paragraph>

          <Paragraph>
            Nicolas-at-65 offers one last sentence before his projection dissolves: "This is the part that matters. Remember it with your body, not your mind."
          </Paragraph>

          <Paragraph>
            Somewhere, the network continues. Thirty-four million twins processing, updating, simulating. Lunar soil composition running comparative models with the Gothenburg garden data. Mycorrhizal networks in the Atacama being mapped at root-hair resolution. Sleep architecture improving across forty-one countries as bedroom environments learn their occupants. The permanent, patient work of a system designed to get better forever.
          </Paragraph>

          <Paragraph>
            But here, in this room, on this hill above the Göta älv, the boy who got his first epigenetic scar at ten months old — the stress of displacement written into his methylation patterns before he could speak, before he could understand what was being written — that boy, now this man, is here. He is fifty-five. His body is forty-two. His garden knows his name.
          </Paragraph>

          <Paragraph>
            His daughter is writing a poem in the hormonal window nobody told her existed until the system did. His son has never had a significant injury. His wife chose the wine because of a small boat on a label. His literary companions said what he needed to hear.
          </Paragraph>

          <Paragraph keyLine>
            The twin didn't solve it. It just made the body safe enough for me to come home to.
          </Paragraph>

          <Paragraph>
            And sometimes — often — the best thing it does is clear the room, dim the lights, and let the humans be human.
          </Paragraph>
        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Tags ═══ */}
        <TagRow />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)     translateX(0)     scale(1);   opacity: 0.06; }
          50%  {                                                              opacity: 0.18; }
          100% { transform: translateY(-42px) translateX(16px)  scale(1.5); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}
