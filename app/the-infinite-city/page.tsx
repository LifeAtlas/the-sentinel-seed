"use client";
import StoryNav from "../components/StoryNav";
import Link from "next/link";

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
   Paragraph — key lines as large gold italic Cormorant Garamond
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
        For every city that learned to listen. And for every robot that was
        never a dog.
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
      <Link href="/" style={{ textDecoration: "none" }}>
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
          &larr;&nbsp;&nbsp;THE SENTINEL STORIES
        </span>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheInfiniteCity() {
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
          {/* Ambient gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 38%, rgba(201,168,76,0.05) 0%, transparent 65%)",
            }}
          />

          {/* Floating golden motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 4 === 0 ? "2px" : "1px",
                  height: i % 4 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.07 + (i % 6) * 0.025,
                  left: `${4 + i * 5.5}%`,
                  top: `${8 + (i % 7) * 12}%`,
                  animation: `mote ${9 + i * 1.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.6}s`,
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

            {/* Story arc label */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Sentinel Arc: Book VIII
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Infinite
              <br />
              City
            </h1>

            {/* Byline */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              A parametric story of urban intelligence, living machines,
              <br className="hidden md:block" />
              and the freedom to reprogram reality
            </p>

            {/* Gold separator */}
            <div
              className="h-px w-16 mx-auto mb-10"
              style={{ background: "var(--color-gold-dim)" }}
            />

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
            chapter="Chapter I"
            title="The City Was Never Fixed"
          />

          <Paragraph>
            They used to pour concrete and call it planning. Roads were drawn before the people who would walk them. Towers were placed before the functions they would serve. A city, for most of human history, was a commitment made in stone to a future that had already been decided.
          </Paragraph>

          <Paragraph>
            But in Sweden 2087, cities were modulated by impact. Every structural decision was a live query against a reality-twin — a continuously updated simulation of the urban environment that knew not just what existed, but what was needed, what was failing, and what could become.
          </Paragraph>

          <Paragraph>
            At the center of every urban mesh was not a mayor&rsquo;s office or a planning department. It was a reality-twin. No longer the Internet of Things. No longer the Internet of People. Now: something else entirely.
          </Paragraph>

          <Paragraph keyLine>
            The Impact Mesh.
          </Paragraph>

          <Paragraph>
            The Mesh didn&rsquo;t optimize. It listened. It didn&rsquo;t control. It responded. Every sensor, every citizen, every building, every migratory pattern of wind and light and footfall fed into a shared context that the city used to ask a single question, on a loop, forever: what do you need from me right now?
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            chapter="Chapter II"
            title="The City Spawns What It Needs"
          />

          <Paragraph>
            A man collapses during a heatwave in Malm&ouml;. The temperature on the pavement is 54 degrees Celsius. He is 67, has a cardiac history the city&rsquo;s ambient health layer has been tracking for eleven months, and he has been standing in direct sun for twenty-two minutes.
          </Paragraph>

          <Paragraph>
            The Mesh sees this before he falls.
          </Paragraph>

          <Paragraph>
            Five microdrones detach from a streetlight eight meters away. They form a cooling canopy above him in 4.3 seconds — a temporary shade structure, drawing power from the pavement&rsquo;s solar inlay, spraying a fine aerosol mist calibrated to bring ambient temperature down by 11 degrees in a one-meter radius. An adaptive mobility node two blocks south reconfigures its routing and arrives within ninety seconds.
          </Paragraph>

          <Paragraph>
            The intervention was not designed. There was no engineer who built a system that said: if a man with a cardiac history stands in 54-degree sun for twenty-two minutes, deploy these assets. The response was grown — in the simulation space of the city&rsquo;s impact twin, five seconds before it happened, when the Mesh saw the trajectory and ran the scenarios.
          </Paragraph>

          <Paragraph>
            The man survived. He was not aware of what had saved him. He felt shade. He felt coolness. He felt, later, that the city had been kind.
          </Paragraph>

          <Paragraph>
            He was not wrong.
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            chapter="Chapter III"
            title="Generative Urban Life"
          />

          <Paragraph>
            Each block in the 2087 city grid contained three layers invisible to the eye. The first was the physical — the buildings, streets, utilities, the ordinary matter of urban infrastructure. The second was the digital twin — a real-time model of that block&rsquo;s state, updated continuously from ten thousand sensor streams. The third was the substrate.
          </Paragraph>

          <Paragraph>
            The substrate was a game engine running at the speed of the city&rsquo;s breath. Infinite iterations. Every night, when the block was quietest, the substrate ran forward — simulating a thousand possible next days, a hundred possible next weeks, a dozen possible next years. What if the bus stop were moved? What if the bench faced east? What if the wall were a garden? The simulations were not proposals. They were the city thinking.
          </Paragraph>

          <Paragraph>
            And the edge-native agent stack — distributed, sovereign, running on the infrastructure itself rather than shipped to a distant cloud — was how the thinking became action.
          </Paragraph>

          <Paragraph>
            Reality wasn&rsquo;t copied. It wasn&rsquo;t archived or analyzed after the fact. It was queried, in real time, by agents whose only job was to ask the question the substrate could answer.
          </Paragraph>

          <Paragraph keyLine>
            It was queried.
          </Paragraph>

          <Paragraph>
            &ldquo;What do you need from this space now?&rdquo; Not what you needed last year. Not what the master plan specified in 2041. Now. This moment. This body. This weather. This season of life.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            chapter="Chapter IV"
            title="JADO for Cities"
          />

          <Paragraph>
            They borrowed the concept from the military and made it civil. Joint All-Domain Operations had once referred to the coordination of land, sea, air, space, and cyber assets in armed conflict. JADO for Cities meant something gentler and more ambitious: every system in the urban environment operated with shared awareness of every other system.
          </Paragraph>

          <Paragraph>
            SAM arrays — Spatial Awareness Meshes — blanketed the city in millimeter-wave sensing, feeding a continuous depth map of the urban environment that updated twelve times per second. Post-quantum relay nodes handled encrypted coordination between agents without a single point of failure. Every mobility system, every energy system, every environmental system, every health system talked.
          </Paragraph>

          <Paragraph>
            More importantly: every system listened.
          </Paragraph>

          <Paragraph>
            The listening was the breakthrough. Talking was what the old smart city had always done — sensors sending data to dashboards, dashboards displaying numbers that humans had to interpret, humans making decisions on a timescale the city had already moved past. Listening meant that the information flowed both ways, that every subsystem modified its behavior in response to what other subsystems were doing, that the coordination was not managed but emergent.
          </Paragraph>

          <Paragraph>
            You don&rsquo;t manage a forest. The forest coordinates itself. JADO for Cities was the moment cities learned to be forests.
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            chapter="Chapter V"
            title="The People As Nodes"
          />

          <Paragraph>
            The citizens were not users of the city. They were nodes in it. Each person carried an LPI — a Life Programmable Interface — a sovereign layer between their biological reality and the digital twin that the city maintained on their behalf. The LPI was theirs. The city could not read it without consent. The city could not write to it at all.
          </Paragraph>

          <Paragraph>
            But through the LPI, a citizen could reprogram nearby assets. You could assign purpose to a robot that had arrived in your district without a task. You could request a reconfiguration of the plaza outside your building. You could vote your LPI&rsquo;s resources into a neighborhood project and watch the Mesh respond.
          </Paragraph>

          <Paragraph>
            In exchange, the Mesh rewarded contribution. Not with money. With context. When your actions improved the impact scores of your immediate environment — reduced energy load, improved social cohesion metrics, enhanced air quality — you earned tokenized rewards. Not cash. Something more useful: priority. Priority in Mesh resource allocation. Priority in simulation queues. Priority in the city&rsquo;s attention.
          </Paragraph>

          <Paragraph>
            This was not universal basic income. It had nothing to do with income at all.
          </Paragraph>

          <Paragraph keyLine>
            Universal contextual reward.
          </Paragraph>

          <Paragraph>
            The city paid you, in the coin of its attention, for making it better. And making it better made it better at making you better. The loop compounded. The city and its people were no longer in a transactional relationship. They were in a metabolic one.
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            chapter="Chapter VI"
            title="Reality As Design Partner"
          />

          <Paragraph>
            Urban planners in 2087 were less designers than conversationalists. They came to work not with blueprints but with questions. They sat at the interface between the city&rsquo;s substrate and the real world and they asked things. The simulation answered. The planners asked better questions. The simulation answered more precisely. Over weeks and months, a design emerged — not from a single mind or a committee, but from a dialogue.
          </Paragraph>

          <Paragraph>
            A planner in Stockholm asked: &ldquo;What is the least-disruptive pathway for phasing out private car travel in the Vasastan district over the next four years?&rdquo; The substrate ran 40,000 simulations in three minutes. It returned not one answer but a probability space: seventeen viable transition sequences, each with projected impact on commute times, business viability, social cohesion, carbon output, and adaptive mobility coverage. The planner chose a sequence. The city began to grow toward it.
          </Paragraph>

          <Paragraph>
            Nobody had drafted this. Nobody had sat at a table and argued about it. The conversation had happened between a person with a question and a reality with an answer.
          </Paragraph>

          <Paragraph>
            Cities designed by reality itself.
          </Paragraph>

          {/* ── Chapter VII ── */}
          <ChapterDivider
            chapter="Chapter VII"
            title="The Robots Were Never Humans"
          />

          <Paragraph>
            The great mistake of the early robotics era was the assumption that a useful robot must resemble a human. Two legs, two arms, a head. The anthropomorphic robot had dominated design thinking for forty years — not because it was optimal, but because humans are tribal creatures who trust what mirrors them.
          </Paragraph>

          <Paragraph>
            The city&rsquo;s robots had no interest in resembling humans. They were not dogs either. They were contextual bodies — forms generated by the generative simulation layer in response to specific tasks, manufactured on-demand by the city&rsquo;s distributed fabrication network, and dissolved back into feedstock when the task was complete.
          </Paragraph>

          <Paragraph>
            A bridge maintenance robot looked like nothing you would recognize: a lattice of articulated carbon filaments, capable of expressing any shape required by the surface it was repairing. A crowd flow optimizer was invisible — a soft pressure in the air, a subtle reconfiguration of light and sound that guided bodies without commanding them.
          </Paragraph>

          <Paragraph>
            Their primary language wasn&rsquo;t code. Code was how you wrote instructions for a machine that needed to be told what to do. The city&rsquo;s robots operated on intent — a higher-level construct that the Mesh translated into behavior. The intent was set by the Impact Mesh. The behavior was generated by the robot, in real time, in response to conditions the intent layer couldn&rsquo;t fully anticipate.
          </Paragraph>

          <Paragraph keyLine>
            Their primary language wasn&rsquo;t code. It was intent.
          </Paragraph>

          <Paragraph>
            They were never in charge. They had no goals of their own, no drives, no preferences. They were in collaboration — with the city, with the Mesh, with the humans whose needs had been translated into intent. The robots were how the city kept its promises.
          </Paragraph>

          {/* ── Chapter VIII ── */}
          <ChapterDivider
            chapter="Chapter VIII"
            title="The Post-City"
          />

          <Paragraph>
            Somewhere around 2087, urban planners stopped using the word &ldquo;city.&rdquo; Not in protest or rejection. The word had simply stopped being precise enough for what they were describing.
          </Paragraph>

          <Paragraph>
            A city, in the old sense, was a bounded place. A territory, a jurisdiction, a collection of structures and services with edges you could cross. But the Impact Mesh had no edges. Its intelligence propagated from node to node, fading at the periphery not because of walls or administrative lines but because density thinned and context grew sparse. It was less like a container and more like a field — a field of responsiveness, of awareness, of the city&rsquo;s continuous attention to what its people needed.
          </Paragraph>

          <Paragraph>
            The city had not disappeared. It had integrated. It had become the weave of relationships between people and space and infrastructure and simulation that held a community together.
          </Paragraph>

          <Paragraph>
            You did not live in the city. You did not consume the city or move through the city. The city was not a backdrop to your life or a set of services you accessed when necessary.
          </Paragraph>

          <Paragraph>
            You lived in the weave.
          </Paragraph>

          <Paragraph>
            The weave knew you. The weave responded to you. The weave changed for you and was changed by you, in every moment, in both directions, the way a conversation changes both people.
          </Paragraph>

          <Paragraph>
            And in Sweden, in the long light of a 2087 summer evening, in a Malm&ouml; that was almost unrecognizable from the city of thirty years before — quieter, greener, slower in its surfaces and faster in its intelligence — a man sat on a bench that had been placed by a simulation that had learned he needed a view of water at this hour, and he looked at the channel, and the light moved on it, and he did not think about any of this.
          </Paragraph>

          <Paragraph>
            He thought: it&rsquo;s good here.
          </Paragraph>

          <Paragraph>
            The Mesh noted the emotional signature and filed it under: impact confirmed.
          </Paragraph>

          <Paragraph keyLine>
            We stopped designing cities to shape life. We shaped life to design the next cities.
          </Paragraph>

        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)     translateX(0)    scale(1);   opacity: 0.07; }
          50%  {                                                             opacity: 0.18; }
          100% { transform: translateY(-42px) translateX(16px) scale(1.5); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}
