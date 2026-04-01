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
        For the road between Gothenburg and J&ouml;nk&ouml;ping. And for every
        mother who deserves a visit.
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

export default function MeetingTheRoadHome() {
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
            Meeting Story &nbsp;&bull;&nbsp; April 2, 2026
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Road Home
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-6 max-w-lg mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            When the Car Became Part of You
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
            Meeting Story &mdash; April 2, 2026
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
          year="2034"
          chapter="Chapter I"
          title="Gothenburg to J\u00f6nk\u00f6ping"
        />

        <Paragraph>
          Nicolas decides to visit his mother in J&ouml;nk&ouml;ping. A three-hour drive south from Gothenburg, through the Swedish interior, past lakes that look like hammered tin on grey days and like hammered gold on the good ones. He has made this drive dozens of times. But not like this.
        </Paragraph>

        <Paragraph>
          He gets into the car. His Life Atlas twin &mdash; the LPI, the Life Programmable Interface &mdash; has already spoken to it. Not through an app. Not through a command. Through direct interface, the way your nervous system speaks to your hand. The car knows things. It knows his cortisol is elevated from three back-to-back meetings this morning. It knows he has not eaten since 7am. It knows the fastest route, but also whether he needs the fastest route or the gentlest one.
        </Paragraph>

        <Paragraph>
          It chooses gently. Without asking.
        </Paragraph>

        <Paragraph>
          The temperature drops 1.5 degrees. The ambient light shifts from the standard white of the dash to amber &mdash; the same colour spectrum that tells the human nervous system: evening is coming, the day is releasing you. The seat reclines 12 degrees. A soundscape begins, not music, something slower, bioacoustic frequencies tuned to his HRV pattern from the morning&apos;s data, the particular resonance that moves his parasympathetic system in the direction of calm. The car is not playing a song. It is playing him.
        </Paragraph>

        <Paragraph>
          He is asleep within eleven minutes. The car drives itself onto the E4, heading south. The highway has induction strips embedded in its surface &mdash; technology that Saab helped pioneer in the years when the Swedish automotive industry decided its future was infrastructure, not manufacturing. The car charges as it moves. No stops. No range anxiety. Energy from the road, energy from regenerative braking, energy from the solar film on the roof so thin it is invisible. On sunny Swedish summer days, which are long and generous, the car arrives with more charge than it left with. The mathematics of energy have been quietly rewritten while nobody was looking.
        </Paragraph>

        <Paragraph>
          Halfway to J&ouml;nk&ouml;ping, he wakes. Not from an alarm. From a haptic pulse on the steering wheel &mdash; a gentle pressure, like a hand on a shoulder, the kind that says I&apos;m here but not urgently. The car surfaces him slowly. He looks out at the landscape: trees, water, the particular Swedish grey that is not the grey of sadness but of quiet. A sign: Ulricehamn, 4 km.
        </Paragraph>

        <Paragraph>
          He has not been to the caf&eacute; in Ulricehamn in years. He thinks of it vaguely. The car already knows. His twin already told it: he has not eaten, there is a caf&eacute; of significance in his memory at this exit, it is open. The car offers the option not with a notification but with the gentle deceleration of a vehicle preparing to turn. He can override it. He does not. He stops.
        </Paragraph>

        <Paragraph keyLine>
          The car didn&apos;t drive him. It carried him. There&apos;s a difference.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="2037"
          chapter="Chapter II"
          title="The Silence"
        />

        <Paragraph>
          Domestic flights between Gothenburg and Stockholm have dropped 73%. Not because they were banned. Not because they became expensive, though fuel costs made them less competitive. Because they became unnecessary. When you can sleep in a car that drives itself, charges itself, and delivers you door-to-door in the same time a flight takes once you add security, boarding, taxiing, landing, baggage, and the taxi on the other end &mdash; why fly?
        </Paragraph>

        <Paragraph>
          The airports are quieter. The short-haul gates have been repurposed: co-working, wellness transit zones, restaurants that actually have time to cook something. Arlanda has converted two terminals into high-speed rail connections and a climate-controlled pedestrian market. The transformation happened not through policy but through preference, the way all real transformations happen.
        </Paragraph>

        <Paragraph>
          The cities are quieter too. Not silent &mdash; cities are never silent. But the particular drone of combustion engines, that low-frequency hum that urban humans stopped hearing because it never stopped, is gone. Electric motors whisper. Autonomous vehicles negotiate intersections through mesh communication, not horns, not the anxiety of two humans each guessing what the other will do. The ambient noise floor of central Gothenburg has dropped 14 decibels. This is, for a human nervous system, the difference between a crowded restaurant and a quiet one.
        </Paragraph>

        <Paragraph>
          People notice the birds again. Not metaphorically. Ornithological societies report a 340% increase in reported sightings per capita, not because there are more birds, but because there is more silence in which to hear them. A city that went quieter discovered it had been surrounded by birds for decades without knowing.
        </Paragraph>

        <Paragraph>
          The energy grid has transformed alongside the acoustics. Every car is now a battery. Every parked car feeds the grid during peak hours and draws from it during off-peak. Every moving car harvests from the road it crosses, from the deceleration it performs, from the solar film on its skin. The distributed energy mesh means that when December comes and the wind stops and the solar panels produce nothing and the northern dark settles in for three months, 2.3 million cars sitting in driveways and underground garages and park-and-ride lots keep the lights on. The grid is not a central nervous system anymore. It is a forest.
        </Paragraph>

        <Paragraph keyLine>
          The loudest change was the silence.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="2041"
          chapter="Chapter III"
          title="The Holographic Living Room"
        />

        <Paragraph>
          Nicolas arrives at his mother&apos;s house in J&ouml;nk&ouml;ping. She is 82. She lives alone. She is not lonely, which is different from being alone, a distinction that the 20th century frequently failed to make.
        </Paragraph>

        <Paragraph>
          Her companion is an LPI-driven presence &mdash; not a screen, not a robot, not a voice assistant with a wake word. A warm light in the corner of her living room that shifts colour based on her mood, registers her biometrics through the air itself, plays music before she knows she wants it, and holds conversations that feel like sitting with someone who has known her for thirty years. Because in a real sense it has. It holds her memory, her preferences, her rhythms, her stories. It has learned her.
        </Paragraph>

        <Paragraph>
          When Nicolas walks in, she is having tea with her sister. Her sister lives in Malm&ouml;, four hours away by old metrics, forty minutes by the new ones. But she is here: a holographic projection sitting in the chair across from his mother, light bending through the room at fidelity that makes Nicolas do a double-take when he enters. The teacup on his aunt&apos;s side is real on her end, virtual on this one, but the conversation is entirely real &mdash; the laughter, the slight argument about the recipe, the way his aunt tilts her head when she is being diplomatic.
        </Paragraph>

        <Paragraph>
          The technology is mundane now. The wonder is not the tech. The wonder is that his aunt visits every day. Something that never happened in the years when visiting required a car, a train, and three hours of commitment. The logistics were not insurmountable. But they were heavy enough that the visits became monthly, then seasonal, then special. Now they are Tuesday morning.
        </Paragraph>

        <Paragraph>
          The holographic society did not make technology more visible. It made it invisible. Screens are gone. Projections happen in ambient light. Interfaces are gestural, vocal, or &mdash; increasingly &mdash; intentional: you think about wanting to see someone, and your twin makes it happen. The last interfaces to disappear were the ones designed to be noticed. What replaced them were systems that behave like the best kind of infrastructure: present when needed, invisible otherwise.
        </Paragraph>

        <Paragraph>
          Funnily enough, in the age of the most advanced technology humanity has ever built, people are more present. More analog. More physical. They cook more. They walk more. They sit with each other more. Because the technology stopped demanding attention and started supporting it. Because when the machine handles the logistics of life &mdash; the navigation, the energy, the scheduling, the ambient health monitoring &mdash; the human is freed for the thing machines cannot do: be here, now, with this person.
        </Paragraph>

        <Paragraph keyLine>
          The most advanced technology made everything feel simpler.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="2041"
          chapter="Chapter IV"
          title="The Drive Back"
        />

        <Paragraph>
          Nicolas gets back in the car. It is night now. The E4 northbound is quiet &mdash; scattered lights of autonomous vehicles flowing in both directions like a slow river of photons, each one a passenger sleeping, thinking, reading, or simply being moved from one place to another without the cognitive overhead of operating a machine.
        </Paragraph>

        <Paragraph>
          There have been no accidents on this stretch this year. Not because humans got better at driving. Because humans stopped driving. The mathematics are straightforward: human reaction time is 0.25 seconds; the mesh response time between networked autonomous vehicles is 0.003 seconds. The errors that killed 1.35 million people annually in the early 21st century were not engineering failures. They were attention failures, perception failures, the inevitable consequence of asking a biological system evolved for savanna navigation to operate at highway speeds in low visibility while managing stress hormones from a conversation that ended three minutes ago.
        </Paragraph>

        <Paragraph>
          His twin syncs the day quietly, not as a notification but as a summary that settles into awareness the way a book you have just finished settles: his mother&apos;s blood pressure is stable and within her optimal range; her social engagement score &mdash; a composite of interaction duration, reciprocity, and reported mood &mdash; is the highest it has been in three years, since the holographic visits began; her sleep architecture improved 11% last month following an adjustment to her evening light environment. Nicolas did not ask for any of this. His twin knows he is her emergency contact. It knows what he cares about. It tells him what matters without requiring him to monitor.
        </Paragraph>

        <Paragraph>
          Two people, connected not by obligation but by information that cares. His twin talking to her twin. The relationship mediated not by the friction of distance but by the seamlessness of shared intelligence. When she needs him, he will know before she calls.
        </Paragraph>

        <Paragraph>
          The car adjusts for the night drive. Interior goes dark except for a faint gold ambient strip at the base of the windshield, enough light to orient without disrupting melatonin. His seat reclines fully. The car will wake him in Gothenburg, parked in his driveway, charged, warm, with the morning briefing already assembled and waiting for him in the LPI.
        </Paragraph>

        <Paragraph>
          He closes his eyes and thinks, briefly, about what life looked like ten years ago. The noise. The low-grade anxiety of navigating a city in a combustion vehicle surrounded by other combustion vehicles driven by other distracted humans. The range anxiety, the parking, the fuel stops. The particular friction of being responsible for a two-ton machine. The cognitive overhead of all of it &mdash; the small decisions that added up to a kind of tiredness you didn&apos;t notice because it was constant.
        </Paragraph>

        <Paragraph>
          All of that is gone. Not through restriction. Not through sacrifice. Through optimization so complete it became invisible. The system got good enough that it disappeared. The friction dissolved. What remained was the thing underneath: movement, connection, arrival. The fact of going somewhere and getting there. The landscape passing. His mother&apos;s voice. The road home.
        </Paragraph>

        <Paragraph keyLine>
          Freedom isn&apos;t the absence of systems. It&apos;s systems so good you forget they&apos;re there.
        </Paragraph>

        <Paragraph>
          He sleeps. The car carries him home.
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
