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
        For every city that remembered it was made of people. And for every
        student brave enough to ask a question they didn&rsquo;t yet understand.
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

export default function MeetingTheMapThatListened() {
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
              className="text-xs tracking-[0.5em] uppercase mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Meeting Stories
            </p>

            {/* Date label */}
            <p
              className="text-xs tracking-[0.4em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.35,
              }}
            >
              Apr 2, 2026
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Map That
              <br />
              Listened
            </h1>

            {/* Byline */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              When Cities Stopped Looking at Dashboards
              <br className="hidden md:block" />
              and Started Looking at Each Other
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
            title="The Power Nap"
          />

          <Paragraph>
            The apartment in Gothenburg was the kind of space that accumulated evidence. Not of disorder, exactly — of a life lived at the intersection of too many disciplines. A drone prototype occupied the top shelf of the bookcase, half-assembled, its rotors pointing in different directions as though it had been interrupted mid-thought. A holographic city model flickered quietly on the desk near the window, rendering Gothenburg in wireframe at a scale of one-to-eight-thousand, running a scenario no one had asked for, the way a mind runs scenarios even in sleep.
          </Paragraph>

          <Paragraph>
            Three coffee cups from yesterday. Two from the day before that. A stack of printed papers with handwritten marginalia in three languages. A sticky note on the monitor that read: OUTCOME FIRST. It had been there long enough to yellow at the corners.
          </Paragraph>

          <Paragraph>
            The man on the couch had been asleep for exactly ten minutes. Not accidentally. Deliberately. A power nap calibrated with the precision of someone who had learned, over years of back-to-back consulting calls spanning time zones from Vancouver to Dubai to Singapore, that ten minutes was the minimum viable reset. Enough to clear the cache. Not enough to fall into slow-wave sleep and emerge groggy, speaking in the wrong language, forgetting which city he was supposed to be solving.
          </Paragraph>

          <Paragraph>
            He opened his eyes. The holographic model was still running. Gothenburg 2087, performing a traffic simulation for a city that would not exist for sixty-one years. He sat up, ran a hand through his hair, and reached for the laptop.
          </Paragraph>

          <Paragraph>
            On the screen, a video call was waiting. Two small rectangles in a grid layout. Two faces, slightly blurry at this resolution, both looking just off-camera in the way that people do when they are nervous and trying not to show it. One face was from Poland. One from Hungary. Both were studying at Jönköping University, forty minutes south. Both were writing a thesis on AI adoption in small European cities, and both had somehow ended up in a call with a man who had advised Olympic committees and Ukrainian reconstruction teams and Saudi princes on the same subject, and they were not entirely sure how that had happened, and neither were they sure they were prepared for it.
          </Paragraph>

          <Paragraph>
            He clicked to join. The call connected. He looked at the two faces and said, with the mild efficiency of someone who had done this ten thousand times: &ldquo;Hello. Which one? Swedish or English?&rdquo;
          </Paragraph>

          <Paragraph>
            A beat. The one from Poland — Marta, her name was Marta — looked quickly at the one from Hungary, whose name was Kitti, and Kitti gave a small nod that meant: you decide.
          </Paragraph>

          <Paragraph>
            &ldquo;English,&rdquo; Marta said.
          </Paragraph>

          <Paragraph>
            He settled back. &ldquo;Good. Let&rsquo;s start.&rdquo;
          </Paragraph>

          <Paragraph>
            The conversation began the way all the best ones did: without anyone yet knowing what it was really about.
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            chapter="Chapter II"
            title="The Vague Question"
          />

          <Paragraph>
            The thesis question, as Marta read it from her notes, was this: How are small European cities adopting AI, and what are the barriers to effective implementation?
          </Paragraph>

          <Paragraph>
            It was, he thought, a perfectly reasonable question in the way that an empty room is a perfectly reasonable room — adequate, well-lit, but not yet containing anything. He had heard variations of it from people who had spent thirty years in urban policy. From engineers building sensor networks in Taipei. From a prince in Riyadh who wanted to know why his country&rsquo;s futuristic city kept encountering very ordinary human problems. The question always contained the same deeper question beneath it, like a geological layer that thesis-writing had not yet disturbed.
          </Paragraph>

          <Paragraph>
            The deeper question was always: how do you make cities that think?
          </Paragraph>

          <Paragraph>
            He did not answer directly. Experience had taught him that the direct answer to a vague question produces a vague answer, and vague answers are useful to nobody. What worked — what always worked, across every kind of room and every kind of audience — was to show something concrete and let the question sharpen itself against it.
          </Paragraph>

          <Paragraph>
            He shared his screen.
          </Paragraph>

          <Paragraph>
            &ldquo;Before we talk about AI,&rdquo; he said, &ldquo;let me show you how I think about cities. Because if we start with AI, we&rsquo;re already starting in the wrong place.&rdquo;
          </Paragraph>

          <Paragraph>
            Marta opened a new document on her laptop, fingers poised above the keyboard. Kitti adjusted her angle slightly, leaning forward as though the screen had just grown more interesting. He noticed both movements. Good signs. The nervousness was converting into attention. Attention was everything.
          </Paragraph>

          <Paragraph keyLine>
            If you start with AI, you are already starting in the wrong place.
          </Paragraph>

          <Paragraph>
            The image on his screen resolved into something that looked, at first glance, like a map of the world. But it was not static. It was breathing. Cell towers pulsed like slow synapses. Energy flows moved in colored currents between grids. Something in the North Sea blinked in a rhythm that suggested tidal generation. He gave them a moment to take it in.
          </Paragraph>

          <Paragraph>
            &ldquo;This,&rdquo; he said, &ldquo;is where we start.&rdquo;
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            chapter="Chapter III"
            title="The Planet View"
          />

          <Paragraph>
            The globe on his screen was not Google Earth. Google Earth was a photograph. This was a model — layered with data streams that the untrained eye could not yet read, but that the trained eye recognized as the difference between a picture of a person and an X-ray of their skeleton. The same surface. A completely different kind of information.
          </Paragraph>

          <Paragraph>
            He zoomed in to Seattle first. The city resolved into a dense mesh of data relationships — energy, traffic, water, communications, the slow pulse of buildings monitoring their own structural health. Then Dubrovnik: smaller, denser in its medieval core, the data thinner but more concentrated, every byte carrying more weight because there were fewer bytes to spare. Then Gothenburg, his own city, which he knew well enough to see its anomalies — a neighborhood where the energy data suggested aging infrastructure, a harbor district where the traffic patterns had been disrupted for months by a construction project that had become a permanent fixture of the city&rsquo;s collective frustration.
          </Paragraph>

          <Paragraph>
            &ldquo;Every city exists on the same planet,&rdquo; he said. &ldquo;That&rsquo;s not philosophy. That&rsquo;s architecture.&rdquo; He paused to let the distinction land. &ldquo;When you design for a city without understanding the planetary context — the shared infrastructure, the shared atmosphere, the shared pressure on the same finite resources — you are designing a solution that will eventually contradict solutions being implemented five hundred kilometers away.&rdquo;
          </Paragraph>

          <Paragraph>
            Marta was typing. Kitti was nodding. He continued.
          </Paragraph>

          <Paragraph>
            &ldquo;Digital twins are not technology. People think they are technology. They are a way of seeing. A physics-based simulation that lets you test reality before you commit to it.&rdquo; He leaned back slightly. &ldquo;Think about fusion research. A major research consortium was preparing to produce a specific material for a reactor — expensive to manufacture, years in development. Before they began, they ran a simulation. The simulation showed that the material would never perform as needed under the actual conditions of a fusion reaction. Two billion euros, saved. Not because the engineering was brilliant. Because someone asked the simulation first.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;I&rsquo;m glad we didn&rsquo;t spend two billion producing this material,&rdquo; he said, using the register of a physicist who has just narrowly escaped catastrophe, &ldquo;because it was never going to work anyway.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            The simulation is not a prediction. It is a question you ask before you commit.
          </Paragraph>

          <Paragraph>
            Kitti looked up from her notes. &ldquo;So the twin is essentially a testing environment for decisions?&rdquo;
          </Paragraph>

          <Paragraph>
            He pointed at her. &ldquo;Exactly. Not a dashboard. Not a monitoring tool. A decision environment. You run the scenario before you pour the concrete. Before you sign the contract. Before you pass the regulation. The city becomes, for the first time in history, a thing you can think about before you build it.&rdquo;
          </Paragraph>

          <Paragraph>
            The students had not expected a consulting call to feel like a lecture at Oxford. He had, in fact, lectured at Oxford. He found the register transferred well.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            chapter="Chapter IV"
            title="The Broken Olympics"
          />

          <Paragraph>
            He said: &ldquo;Let me tell you about Brisbane.&rdquo;
          </Paragraph>

          <Paragraph>
            Brisbane 2032. The Olympic Games. A mid-sized Australian city, pleasant, functional, operating with the easy efficiency of a place that had never needed its departments to talk to each other because nothing had ever demanded it. Brisbane had good tourism infrastructure. Good real estate development pipelines. Adequate water management. A functioning transit network. Each of these systems had its own budget, its own leadership, its own multi-year plan.
          </Paragraph>

          <Paragraph>
            And then it had to absorb the largest coordinated human event on Earth.
          </Paragraph>

          <Paragraph>
            &ldquo;Tourism was planning for millions of visitors without talking to real estate about where they would stay. Real estate was approving short-term rental conversions without talking to water about what that did to peak demand. Water was stress-testing its networks without talking to traffic about how maintenance windows would interact with event-day mobility. Traffic was designing shuttle routes without talking to tourism about which venues would draw which audiences on which days.&rdquo; He spread his hands. &ldquo;Everyone had a plan. Nobody had a city.&rdquo;
          </Paragraph>

          <Paragraph>
            He let that settle for a moment. The holographic model on his desk had shifted while he was talking — Gothenburg 2087 had cycled to a new scenario, something that looked like a flooding event, streets animated with slow blue water. He didn&rsquo;t look at it. He&rsquo;d seen it before.
          </Paragraph>

          <Paragraph>
            &ldquo;The structural reason this happens,&rdquo; he continued, &ldquo;is a funding mechanism that makes collaboration irrational. Every department is fighting for the same pool of money. If a department saves money this year, it gets a lower budget allocation next year — because the assumption is that it needed less. So no department has an incentive to save money. No department has an incentive to share information that might make another department look efficient. And absolutely no department has an incentive to solve a problem that belongs to someone else&rsquo;s budget line.&rdquo;
          </Paragraph>

          <Paragraph>
            Marta stopped typing. &ldquo;We found exactly this pattern in our literature review,&rdquo; she said, with the slight surprise of someone who has encountered a theory and then discovered it in the real world. &ldquo;The silos appear across every city we looked at.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Because the silos are not technical,&rdquo; he said. &ldquo;They are political. They are the way power organizes itself when no one has a structural reason to share. Technology does not fix political silos. Technology given to a siloed organization becomes a siloed technology. The data gets clean, the systems get connected, and then the people who need to use the data have never met each other and do not trust each other and are in competition for the same next-year budget.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            The silos are not technical. They are the way power organizes itself when no one has a reason to share.
          </Paragraph>

          <Paragraph>
            &ldquo;Brisbane did eventually coordinate,&rdquo; he said. &ldquo;But it took a crisis large enough to override the political logic. That&rsquo;s expensive. You don&rsquo;t want to need a crisis to achieve coordination. You want to build the architecture that makes coordination the path of least resistance before the crisis arrives.&rdquo;
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            chapter="Chapter V"
            title="Four Walls of Interoperability"
          />

          <Paragraph>
            He drew the layers on a shared whiteboard he had pulled up in the meeting — a simple diagram, the kind he had drawn hundreds of times, on whiteboards and napkins and the backs of conference badges when a proper surface was not available.
          </Paragraph>

          <Paragraph>
            &ldquo;Technical interoperability,&rdquo; he said, writing it at the base. &ldquo;Systems can exchange data. Layer one. Most smart city initiatives stop here and declare victory. They spend five years getting the sensors installed and the data standardized and the APIs documented, and then they hold a press conference and call it a smart city.&rdquo;
          </Paragraph>

          <Paragraph>
            He drew the second layer. &ldquo;Semantic interoperability. Systems do not just exchange data — they understand each other&rsquo;s data. What does &lsquo;temperature&rsquo; mean to a water system? What does it mean to a roads maintenance system? What does it mean to a public health system? They might all be measuring the same physical phenomenon and producing numbers that are technically compatible but semantically incompatible. One system&rsquo;s emergency threshold is another system&rsquo;s normal operating range.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Layer three.&rdquo; He wrote it. &ldquo;Organizational interoperability. The people in these departments know each other exist. They want to collaborate. They have relationships. There is a meeting that happens where the water engineer and the tourism manager and the traffic planner are in the same room. Not for a crisis. Not because someone made them. Because the organizational structure was designed to make that meeting happen.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;And layer four.&rdquo; A pause before he wrote it. &ldquo;Legal and political interoperability. They are allowed to. The data sharing is permitted. The liability is allocated. The governance framework exists for decisions made collectively by agents from multiple departments. Without this layer, you can have technically capable, semantically aligned, organizationally willing departments who are nonetheless unable to act together because no one has written the rule that says they can.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            Even with perfect data and willing people, if no one has written the rule that says they can act together, they cannot act together.
          </Paragraph>

          <Paragraph>
            He told them about the schools. Three schools in a Swedish municipality. A company had built a self-learning heating optimization system — genuinely good technology, capable of reducing energy costs by thirty percent across all three buildings, adapting in real time to weather forecasts and occupancy patterns. Technically beautiful. Organizationally dead on arrival.
          </Paragraph>

          <Paragraph>
            &ldquo;The municipality wanted a solution from a large vendor they already had a relationship with,&rdquo; he said. &ldquo;Not because the large vendor&rsquo;s solution was better. Because procurement categories existed for large vendors, and no procurement category existed for innovative small companies doing technically superior work. The innovation died in a spreadsheet. The municipality continued paying thirty percent more than necessary on heating, year after year, because the organizational interoperability layer had not been built.&rdquo;
          </Paragraph>

          <Paragraph>
            Kitti said, carefully: &ldquo;So what do you fix first?&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;None of them first,&rdquo; he said. &ldquo;All of them together. But you start with a question, not a layer. The question is: what outcome do you need? And you work backward to figure out which layers are blocking it.&rdquo;
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            chapter="Chapter VI"
            title="The Inversion"
          />

          <Paragraph>
            This was where the conversation pivoted. He felt it happen — the particular shift in energy when an interview or a lecture or a consulting engagement crosses from information-delivery into something more interesting. He had been explaining. Now he was about to invert.
          </Paragraph>

          <Paragraph>
            He drew an arrow on the whiteboard. Data. Information. Insight. Action. Outcome. The conventional flow, left to right, the way every data strategy presentation in every boardroom in every city in the developed world had been structured for the past twenty years. Collect data. Turn it into information. Extract insight from the information. Take action based on the insight. Hope the action produces the desired outcome.
          </Paragraph>

          <Paragraph>
            &ldquo;This,&rdquo; he said, &ldquo;is what Sweden is obsessed with. Data-driven everything. Measure first, decide second. And I think it&rsquo;s — &rdquo; he looked for the right word — &ldquo;it is limiting. In its most extreme form it is actually counterproductive. It assumes that reality can be understood from the data it produces, and that the best decisions emerge from the most comprehensive measurement. But two thousand years ago you had to go somewhere physically to look at a thing. Now we are trying to understand reality by looking at data — at representations of representations — and we are discovering that it&rsquo;s very nearly impossible to see what matters.&rdquo;
          </Paragraph>

          <Paragraph>
            He drew a second arrow, pointing the opposite direction.
          </Paragraph>

          <Paragraph>
            &ldquo;Start with the outcome. What does Brisbane look like in 2032 when it successfully absorbs two million visitors without its transit system failing, without its rental housing market collapsing, without its water infrastructure exceeding capacity? Describe that. In detail. With numbers if you have them. And then work backward. What actions produce that outcome? What insights do you need to take those actions? What information do those insights require? And only then — only at the end of that backward chain — ask: what data do you need to collect, from where, at what frequency, in what format?&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            Start with the outcome. Everything else is derived.
          </Paragraph>

          <Paragraph>
            &ldquo;This is what we call SMILE,&rdquo; he said. &ldquo;Sustainable Methodology for Impact Lifecycle Enablement. Not a framework that starts with sensors and ends with dashboards. A framework that starts with impact — with a picture of what needs to be true — and works backward through the chain until it arrives at the data layer last, not first.&rdquo;
          </Paragraph>

          <Paragraph>
            He could see both students recalibrating their understanding of their thesis. It was visible in the slight pause before they resumed typing. A thesis about AI adoption in small cities, framed around the conventional question of how cities collect and use data, had just encountered a methodology that turned that question inside out. The real question was not how cities use the data they collect. The real question was whether they have decided, before collecting anything, what they need the data to help them achieve.
          </Paragraph>

          <Paragraph>
            &ldquo;Most small cities,&rdquo; he said, &ldquo;have not had that conversation. They have procurement conversations. They have budget conversations. They have vendor conversations. They have conversations about which platform to adopt and which sensors to install and which dashboard to display in the mayor&rsquo;s office. The outcome conversation has not happened. Which means the data, even when it is excellent, is answering questions that were never precisely asked.&rdquo;
          </Paragraph>

          {/* ── Chapter VII ── */}
          <ChapterDivider
            chapter="Chapter VII"
            title="The Score"
          />

          <Paragraph>
            He introduced a framework he called NUDE. The acronym was deliberate — chosen, he said, because nakedness is the condition of having nothing to hide, and this was a framework for understanding how genuinely exposed an organization was to its own technology. How much of its decision-making was actually informed by the digital tools it claimed to rely on.
          </Paragraph>

          <Paragraph>
            None. Utility. Dependent. Enabler. DNA.
          </Paragraph>

          <Paragraph>
            &ldquo;None: the technology exists in the organization but does not touch decisions. Someone bought a platform three years ago and it runs on a server and produces reports that no one reads.&rdquo; He moved to the next level. &ldquo;Utility: the technology is used, but as a tool of convenience — it makes existing work faster or cheaper but does not change what work is done or how decisions are made. Dependent: the organization cannot function without the technology — it has been structurally integrated to the point where removing it would require rebuilding core processes. Enabler: the technology actively shapes what is possible — it opens decision spaces that did not exist before. And DNA: the technology is indistinguishable from the organization&rsquo;s identity and capability. It is not a tool the organization uses. It is part of what the organization is.&rdquo;
          </Paragraph>

          <Paragraph>
            He scored two hypothetical city officials. The tourism manager in Gothenburg he rated Enabler — she used predictive modeling to make decisions about event programming and infrastructure investment that would have been impossible without it. The tourism manager in Dubrovnik he rated None — but her city, he said, made better coordinated decisions than Gothenburg did, because Dubrovnik was small enough that the tourism manager and the mayor and the head of water services all went to the same coffee bar and had informal conversations that no technology platform in Gothenburg had yet managed to replicate.
          </Paragraph>

          <Paragraph keyLine>
            Less technology, better decisions. The paradox resolves when you realize the technology was never the variable.
          </Paragraph>

          <Paragraph>
            &ldquo;AI people think,&rdquo; he said, &ldquo;that because you have an AI strategy, because you are using AI, you can meet your goals faster. Which is of course not true. You can only meet your goals faster if the AI is helping you understand what your goals should be, and helping the people who need to act on those goals understand why the action makes sense. If the AI is just producing outputs that no one interrogates, you have added complexity without adding capability.&rdquo;
          </Paragraph>

          <Paragraph>
            The real metric, he said, was not technology adoption. It was decision velocity. How fast could a city recognize that something needed to change and put in place the conditions for that change? Not the speed of the software. The speed of the people responding to what the software was telling them — or, more precisely, what reality was telling them through the software.
          </Paragraph>

          <Paragraph>
            &ldquo;Dubrovnik moves faster in some ways because when three people need to agree, those three people are already in the same building. Gothenburg moves slower because those three people&rsquo;s agreement requires four meetings and two approval workflows. The question for your thesis,&rdquo; he said, addressing both of them now with the focused attention he reserved for moments when the research question was getting sharper, &ldquo;is whether there are structures in small cities that produce that kind of agreement velocity — and whether AI can amplify those structures rather than replace them.&rdquo;
          </Paragraph>

          {/* ── Chapter VIII ── */}
          <ChapterDivider
            chapter="Chapter VIII"
            title="The Swarm"
          />

          <Paragraph>
            He described the future with the matter-of-fact tone of someone describing something they believed was already happening, just not yet evenly distributed.
          </Paragraph>

          <Paragraph>
            Each city, he said, would eventually have its own swarm of AI agents. Not replacing people. Not making decisions on behalf of people. Representing people and departments and systems in the digital space — carrying their context, their constraints, their historical decisions, and their current objectives into every interaction with every other agent in the city&rsquo;s ecosystem.
          </Paragraph>

          <Paragraph>
            &ldquo;The tourism agent talks to the water agent. The water agent talks to the traffic agent. The traffic agent talks to the infrastructure maintenance agent. When a camera somewhere in the city detects damage to a road surface — a crack, a subsidence, the early signature of a failure that will become much more expensive in six months — the infrastructure agent calculates the cost of inaction. It models the repair trajectory under three scenarios: immediate response, thirty-day deferral, ninety-day deferral. It checks the spending authority of the maintenance department. If the repair falls within autonomous action limits, it dispatches a crew, supervises the work through the city&rsquo;s sensor network, closes the loop with an outcome report, and files the decision with a full explanation of why it made what it made.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Autonomous cities,&rdquo; he said. Not smart. Not digital. Autonomous.&rdquo;
          </Paragraph>

          <Paragraph>
            He paused. Both students were writing. He noticed and smiled, the slightly private smile of someone watching something become real in another person&rsquo;s mind. &ldquo;You should actually write about that. Autonomous cities. I don&rsquo;t think I&rsquo;ve heard that term used much, but it&rsquo;s exactly what this trajectory is heading toward.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            Not smart cities. Not digital cities. Autonomous cities.
          </Paragraph>

          <Paragraph>
            He let the phrase exist for a moment, and then he added something he said he had never said out loud before. &ldquo;Here is something worth including in your thesis. If autonomous city operations are the destination — if the city is eventually going to be making a significant fraction of its operational decisions through agents operating within defined parameters — then the department best positioned to lead that transition is not IT. It is not urban planning. It is not the mayor&rsquo;s office.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;It is tourism.&rdquo;
          </Paragraph>

          <Paragraph>
            Another pause. &ldquo;Tourism is the only city department that generates net revenue. Every other department is a cost center — it spends money from the city&rsquo;s budget. Tourism earns money that the city&rsquo;s budget then distributes. The head of tourism already understands, at a structural level, that the city has to earn the right to exist. That its services are not entitlements but products, delivered to people who could choose to go elsewhere. That the quality of the visitor experience directly affects whether the revenue comes in at all.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;If anyone is going to understand why autonomous operations are not a threat but an amplifier — why having agents handle the operational layer frees the humans to focus on the relationships, the creativity, the stories that make a city worth visiting — it&rsquo;s the person whose entire job is to make people want to come back.&rdquo;
          </Paragraph>

          {/* ── Chapter IX ── */}
          <ChapterDivider
            chapter="Chapter IX"
            title="250,000 Villages"
          />

          <Paragraph>
            He told them about Deep Matrix. A program, in its early stages when he had last encountered it, using drone networks to survey a quarter of a million villages across India — settlements too small to have appeared in any previous data collection effort, communities whose needs and infrastructure states were functionally invisible to any planning process operating at the national or state level. Small nodes. Sharing data laterally. Learning from each other&rsquo;s patterns. Building, incrementally, a picture of rural India that no satellite survey had ever produced.
          </Paragraph>

          <Paragraph>
            He compared this to the top ten Indian megacities. Delhi, Mumbai, Bangalore — places whose planning processes were so politically complex, whose procurement timelines stretched so long, whose stakeholder landscapes were so densely contested, that a single infrastructure decision could spend a decade in review before implementation began. Meanwhile, a thousand villages had each installed a solar micro-grid, tested it, refined it, and shared the results with their neighbors.
          </Paragraph>

          <Paragraph>
            &ldquo;A thousand small cities taking five steps in a month will outrun one megacity taking one step in a year,&rdquo; he said. &ldquo;Not because the small city is more capable. Because it is more agile. Because the decision-maker and the implementation team and the person most affected by the outcome are close enough to each other that the feedback loop closes in days instead of years.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            Small is not a weakness. Small is a superpower.
          </Paragraph>

          <Paragraph>
            &ldquo;This is what your thesis should argue,&rdquo; he said. &ldquo;Not that small cities face unique barriers to AI adoption. That small cities face unique advantages in becoming autonomous. The cities that will cross the threshold first — the ones that will genuinely have agent-driven operational layers before 2035 — are the ones small enough to put everyone in one room.&rdquo;
          </Paragraph>

          <Paragraph>
            He talked about Ukraine. A country rebuilding itself in the middle of a war, unable to afford the luxury of slow procurement cycles or multi-year planning horizons. Cities that had lost their infrastructure and were reconstructing it with digital twins as the primary design environment — not because they were advanced, but because rebuilding from nothing gave them the rare opportunity to skip the legacy layer entirely and start from architecture.
          </Paragraph>

          <Paragraph>
            &ldquo;Extreme constraint is a design accelerant,&rdquo; he said. &ldquo;The most innovative urban systems I&rsquo;ve encountered were not in the cities with the largest technology budgets. They were in the cities that could not afford to fail.&rdquo;
          </Paragraph>

          <Paragraph>
            He talked about Spatial Web — Web 4.0, as some called it, though he was cautious about version numbers that implied a tidiness the technology did not yet possess. The architecture in which the map was the internet. Where transactions happened geographically. Where AI agents did not search databases but navigated reality — looking at the world the way a person looked at it, oriented in space and time, understanding that a data point about a broken pipe was not just a data point but a location, and a location implied neighborhood context, and neighborhood context implied population density, and population density implied service priority, and all of that context was visible the moment you understood that intelligence should be anchored in physical reality rather than abstracted away from it.
          </Paragraph>

          <Paragraph>
            &ldquo;The map,&rdquo; he said, &ldquo;is not a visualization tool. The map is the operating system.&rdquo;
          </Paragraph>

          {/* ── Chapter X ── */}
          <ChapterDivider
            chapter="Chapter X"
            title="The Barcelona Warning"
          />

          <Paragraph>
            He brought up Barcelona without prompting. It arrived naturally in the conversation the way cautionary examples always do — as the shadow side of success, the story that the success story needs in order to be complete.
          </Paragraph>

          <Paragraph>
            Barcelona in the 2010s and 2020s. A tourism triumph by every revenue metric. Visitor numbers that outperformed comparable European cities. A global brand identity that attracted the ambitious and the creative and the wealthy. Hotels full. Restaurants full. The Sagrada Fam&iacute;lia accessible only by timed ticket, every slot claimed months in advance.
          </Paragraph>

          <Paragraph>
            And Barceloneta, the old fishing neighborhood by the waterfront, emptied of its residents. Airbnb conversions had turned apartment blocks that had housed working families for generations into short-term rental stock. The fishermen&rsquo;s children could not afford to live near the sea their grandparents had worked. The butcher on the corner who had operated for forty years had been replaced by a &ldquo;local tapas experience&rdquo; that served tourist-priced jamón to people who would leave by Sunday.
          </Paragraph>

          <Paragraph>
            &ldquo;The city made money,&rdquo; he said, &ldquo;and lost its soul. And the people who made the decisions that produced that outcome — the city council members, the tourism board, the housing regulators — were not making bad decisions by the metrics they were measuring. They were measuring revenue. Revenue went up. They were measuring visitor satisfaction scores. Those went up too. They were not measuring the rate at which a living neighborhood was being converted into a theme park version of itself, because no one had built a sensor for that.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            The city made money and lost its soul. Because no one had built a sensor for what mattered.
          </Paragraph>

          <Paragraph>
            &ldquo;Digital twins make participation visible,&rdquo; he said. &ldquo;Not participation as a checkbox — not as a public consultation where residents submit written comments that are acknowledged and ignored. Participation as a design tool. You show the residents of Barceloneta: here is what ten thousand more tourists per month looks like, in this neighborhood, on this street. Here is where they will walk. Here is the noise level change by hour and by day. Here is the rental conversion rate projected twelve months forward. Here is what this block looks like in five years if no intervention occurs. Here is what it looks like under intervention scenario A, intervention scenario B, intervention scenario C.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Not statistics. Not abstractions. Visible futures. Simulated realities that people can walk through — metaphorically, and with the right interface, literally — before the decisions are made.&rdquo;
          </Paragraph>

          <Paragraph>
            Both students had stopped typing. Marta was looking directly at the camera. &ldquo;Our thesis covers overtourism as a case study,&rdquo; she said. &ldquo;We found it everywhere. Venice, Amsterdam, Prague. But we framed it as a policy problem. Not a technology problem.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;It is both,&rdquo; he said. &ldquo;It is a participation failure, which is a governance failure, which is a visibility failure. People allowed decisions to be made in their name because they could not see what those decisions would produce. Digital twins do not make the decisions. They make the consequences visible before the decisions are made. Which changes the political economy of those decisions entirely.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Without the map,&rdquo; he said, &ldquo;you cannot make participation real. You can make it procedurally correct. You can hold the meetings and produce the transcripts and file the public records. But the resident who attends the meeting cannot imagine — without a visual, spatial, temporal model of what is being proposed — what the decision will mean for the street where she walks her dog. The map is not a visualization. The map is a democracy engine.&rdquo;
          </Paragraph>

          {/* ── Chapter XI ── */}
          <ChapterDivider
            chapter="Chapter XI"
            title="The Transfer"
          />

          <Paragraph>
            He described the final stage — the one that he said most organizations never reached, and the one that, when they did, transformed them from institutions that generated knowledge into institutions that preserved it.
          </Paragraph>

          <Paragraph>
            Knowledge transfer through the twin.
          </Paragraph>

          <Paragraph>
            &ldquo;A new head of tourism arrives in Dubrovnik,&rdquo; he said. &ldquo;She is competent. She is motivated. She has three months to get up to speed before the summer season begins. Under the current model, those three months are spent reading reports. Sitting in briefings. Having conversations with her predecessor, if her predecessor is still available and willing. Absorbing, through a slow osmosis of documents and meetings, the institutional memory of a department that may be thirty years old.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Under the twin model: she sits down. She presses play. She watches. Last year&rsquo;s tourist flows, animated on the city map, showing her the pressure points and the relief valves and the moments when the system was at capacity and the interventions that pulled it back from the edge. This quarter&rsquo;s infrastructure stress indicators, layered over the same map. The decisions her predecessor made — each one documented not as a memo but as an action taken at a specific place and time, with the outcome measured and visible. She can ask the twin questions. Show me how many visitors we had when it rained on the third Saturday of May last year. Show me five scenarios for improving throughput during peak cruise arrival days without increasing pressure on the old city. The twin answers. She learns in days what it used to take months to absorb.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            The city&rsquo;s intelligence is not in any person. It is in the twin. When people leave, the knowledge stays.
          </Paragraph>

          <Paragraph>
            &ldquo;And when the AI agents that are operating within the city&rsquo;s autonomous layer make a decision — when the infrastructure agent dispatches a maintenance crew, when the tourism agent adjusts the fee structure for a busy district, when the transport agent reroutes a shuttle — the explanation for that decision is visible on the map. Not in a log file. Not in an audit trail that requires three levels of technical access to navigate. On the map. At the location. At the time. With the context that produced the decision, and the outcome that followed from it.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Explainable AI is not a feature,&rdquo; he said. &ldquo;It is the architecture. When intelligence is anchored in physical reality — when every decision has a place and a time and a visible consequence — explainability is not something you add at the end. It is what you get when you start with the map.&rdquo;
          </Paragraph>

          <Paragraph>
            Kitti said: &ldquo;This is what our thesis is missing. We have been treating explainability as a technical requirement. A checkbox in an AI governance framework. But you are saying it is a spatial requirement.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;I am saying,&rdquo; he replied, &ldquo;that explanations become intuitive when they are anchored in the same reality as the people who need to understand them. A resident does not need to understand how a machine learning model produced a recommendation. She needs to be able to look at the map and see: here is what was happening, here is what the system decided, here is what changed. That is explainability. That is democracy. The technology is just the skin.&rdquo;
          </Paragraph>

          {/* ── Chapter XII ── */}
          <ChapterDivider
            chapter="Chapter XII"
            title="The Connection"
          />

          <Paragraph>
            The call was approaching its natural end. He could feel it — the particular atmospheric pressure of a conversation that has reached its resolution, where the most useful thing is not to continue elaborating but to close the loop and send people back into the world with something actionable. He had a son to pick up. The holographic model on his desk had cycled back to the flooding scenario and was running a variant he had not seen before, streets branching differently, some adaptation in the simulation parameters he had set before the nap.
          </Paragraph>

          <Paragraph>
            &ldquo;Three things,&rdquo; he said. &ldquo;For your thesis. First: narrow your research question. You are trying to answer a question that is large enough to require a department, not a master&rsquo;s thesis. Pick one city. Pick one department. Pick one transition — the movement from data-driven to outcome-driven, or from siloed to organizationally interoperable, or from smart to autonomous. One transition, one city, one department. Go deep.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Second: anchor every interview in a map. Do not ask city officials abstract questions about AI strategy. Show them a map of their city. Ask them: where on this map is the decision you are most proud of in the last year? Where is the decision you regret? Where is the problem you have not yet solved? The map will do more for your data quality than any interview guide.&rdquo;
          </Paragraph>

          <Paragraph>
            &ldquo;Third: stop thinking about AI as a technology to study. It is a way of making decisions. The technology is the implementation detail. The story is the organizational change — how does a department that has been optimizing for budget allocation learn to optimize for outcome? That is the human story. That is the thesis.&rdquo;
          </Paragraph>

          <Paragraph>
            He opened his LinkedIn. Right there, on the call, without ceremony. &ldquo;I am connecting you with someone,&rdquo; he said. &ldquo;Her name is Helena. She has worked on small city tourism across Scandinavia for fifteen years. She will have views on what I have told you, and some of them may contradict mine — dangerous territory, because I do not know if she is going to agree with me.&rdquo; He smiled slightly. &ldquo;That is actually better for your research. You want the disagreement. Disagreement between experts on the same subject tells you where the real questions are.&rdquo;
          </Paragraph>

          <Paragraph>
            He sent the connection request. &ldquo;I will also send you a transcript of this conversation. Feed it into Claude or ChatGPT and ask it to extract the five most useful frameworks for your thesis. You will be surprised how much material is there.&rdquo;
          </Paragraph>

          <Paragraph keyLine>
            The technology is just the skin. The story is the organizational change.
          </Paragraph>

          <Paragraph>
            The call ended. The thumbnail windows of Marta and Kitti disappeared from the screen. The apartment was quiet again — the particular quiet of a space that has just hosted something significant and is now returning to its baseline hum. The drone on the shelf. The coffee cups. The sticky note yellowing at its corners: OUTCOME FIRST.
          </Paragraph>

          <Paragraph>
            The holographic model on his desk continued its simulation. Gothenburg 2087, water receding from the streets now, the flooding scenario cycling into a recovery sequence that the simulation had generated without being asked. An autonomous response. The city thinking through its own future. Always thinking.
          </Paragraph>

          <Paragraph>
            He picked up his keys and went to get his son.
          </Paragraph>

          {/* ── Epilogue ── */}
          <ChapterDivider
            chapter="Epilogue"
            title="The Thesis They Almost Wrote"
          />

          <Paragraph>
            Two years later. Jönköping University. The thesis defense room smelled of coffee and the specific academic anxiety of three examiners who had already read the document twice and were prepared to be unimpressed.
          </Paragraph>

          <Paragraph>
            They were not unimpressed.
          </Paragraph>

          <Paragraph>
            The title was projected on the screen at the front of the room: &ldquo;Extreme Collaboration and the Road Towards Autonomous City Operations: An Action-Based Study of AI Adoption in Small European Cities.&rdquo; The committee had not seen a thesis structured this way before. Every interview anchored in geography. Every finding visible as a layer on a shared spatial model — not a map in the decorative sense, not a figure in an appendix, but a live interface that the committee could query during the defense, asking: show me Dubrovnik in July. Show me Jönköping under scenario B. Show me what the self-learning heating system failure looked like on the map of that school district.
          </Paragraph>

          <Paragraph>
            The committee could see. The data was not in tables. The data was in the world, in the places the world had actually generated it.
          </Paragraph>

          <Paragraph>
            The thesis became the most-cited master&rsquo;s paper at Jönköping University in a decade. Not because of the scope of the data or the sophistication of the methodology — though both were good — but because of the map. Because the committee and the readers who came after could look at the argument and see, spatially and temporally, why it was true. Because explainability was not a chapter in the document. It was the document&rsquo;s architecture.
          </Paragraph>

          <Paragraph>
            In the acknowledgments section, between the thanks to their supervisor and the thanks to their families, Marta and Kitti had written: &ldquo;To the man who told us to stop looking at dashboards and start looking at the city.&rdquo;
          </Paragraph>

          <Paragraph>
            He never read it. By the time the thesis was published, he was working on something else. Something smaller and larger simultaneously — the biological twin of a single human cell, a model that would eventually allow a physician to test a drug on a patient&rsquo;s own biology before the patient took it. Physics-based simulation. Outcome first. No dashboards.
          </Paragraph>

          <Paragraph keyLine>
            The smallest city of all — a single cell, sovereign, doing its work.
          </Paragraph>

          <Paragraph>
            In Dubrovnik, a new head of tourism pressed play on the city&rsquo;s digital twin and watched last year unfold in forty minutes. In Brisbane, a traffic agent and a water agent were in the middle of a negotiation about a maintenance window. In Gothenburg, a holographic model ran a scenario no one had asked for, solving a problem no one had yet identified.
          </Paragraph>

          <Paragraph>
            The cities were thinking. The cities had always been thinking. Now, for the first time, they had a language for what they were thinking about — and people small and brave enough to ask them to share it.
          </Paragraph>

        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Contact ═══ */}
        <div className="max-w-xl mx-auto px-6 py-10 text-center">
          <div className="h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
          <p className="text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Contact
          </p>
          <a href="mailto:ceo@winniio.io" className="text-sm transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-gold)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)"; }}>
            ceo@winniio.io
          </a>
          <p className="text-[10px] mt-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
            Nicolas Waern &middot; WINNIIO AB &middot; Gothenburg, Sweden
          </p>
        </div>

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
