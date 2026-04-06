"use client";
import StoryNav from "../components/StoryNav";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface Chapter {
  number: string;
  title: string;
  year: string;
  color: string;
  paragraphs: string[];
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
    <div className="fixed top-0 left-0 right-0 z-50 h-px" style={{ background: "var(--color-border)" }}>
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #4ade80, #22d3ee, #a78bfa)",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Chapter data
   ═══════════════════════════════════════════════════════════════ */

const chapters: Chapter[] = [
  {
    number: "I",
    title: "Three Factories in Edsbyn",
    year: "2027",
    color: "amber",
    paragraphs: [
      "The cold comes early in Hälsingland.",
      "By mid-October, frost is already closing in from the north, and the light in Edsbyn has taken on the flat, pewter quality that lasts until April. The river Voxnan runs dark through town, and the factories along its banks — three of them, all working the same alloys, competing for the same contracts — run their furnaces around the clock because stopping and restarting costs more than running.",
      "This is the math no one questions. It has been the math for forty years.",
      "Erik Lindström runs the largest of the three. He is fifty-three, has worked in metal processing since he was twenty-two, and is the kind of man who reads energy bills the way other men read novels — closely, personally, as if the numbers are trying to tell him something. In 2027, they are. The Nord Pool spot price has swung four hundred percent in a single day twice that month. His Q3 energy cost is up eighteen percent year on year. He can absorb it, barely. His margins cannot absorb another year like this.",
      "The team arrives on a Tuesday morning in November: two engineers from Stockholm, a woman named Lena who handles the software, and a man named Marcus who handles the hardware. They bring sensor arrays in aluminum cases, edge gateway units roughly the size of a shoebox, and laptops running thermal modeling software that Lena has written most of herself. They are polite, quiet, thorough. They spend the first two days doing nothing but watching — mapping every machine, every heat cycle, every power draw, laying current clamps on the supply cables without touching anything that runs.",
      "On the third day, Lena shows Erik a graph.",
      "It is a simple graph. On the x-axis: time. On the y-axis: electricity cost, in kronor per megawatt-hour. Overlaid on it, in a different color, is his production schedule — which machines are running, when. The two lines are completely uncorrelated. His heaviest loads happen to fall, again and again, during the most expensive hours of the day. Not because anyone planned it that way. Because no one ever connected those two streams of information.",
      '"How much?" Erik asks.',
      "Lena runs the number. Twenty-two percent of his annual electricity cost could be eliminated by shifting flexible loads by an average of three hours. Not shutting anything down. Not changing the products. Just moving the work.",
      '"Three hours," Erik says.',
      '"Three hours."',
      "He looks at the factory floor — the presses, the punching machines, the heat treatment furnaces he has operated since before Lena was born. He has been losing this money every year for twenty years, and nobody told him because nobody was looking.",
      '"What do you need?" he says.',
      "They need six weeks, forty-seven sensors, three edge gateway units, and access to the OPC UA data bus his SCADA system already exports. They already know the system exports it because they checked, quietly, before they came.",
      "Six weeks later, FlexSteel goes live. The energy drops twenty percent in the first billing cycle. In the second, twenty-three.",
      "Erik's margins breathe for the first time in three years.",
    ],
  },
  {
    number: "II",
    title: "The Poisoned Signal",
    year: "2028",
    color: "red",
    paragraphs: [
      "The incident happens on a Thursday morning in March 2028, at 04:17.",
      "The anomaly detection layer catches it before any human is awake. A temperature reading from the secondary heat treatment furnace — the one that runs the overnight cycle on aerospace-grade components — has climbed 340 degrees in ninety seconds. The physics-informed validation layer evaluates the reading against what it knows: the thermal mass of the furnace, the current load, the ambient temperature, the rate at which heat can physically be added to this system given its specifications. The answer takes eleven milliseconds to compute.",
      "The reading is impossible.",
      "Not unlikely. Not surprising. Physically impossible. The furnace cannot reach that temperature that fast. The sensor is lying, or something upstream of the sensor is lying.",
      "The system does not act on the reading. It flags it, quarantines the data stream, routes control to the backup sensor cluster, and wakes the on-call engineer at 04:18.",
      "Marta, the on-call engineer that night, is thirty-one and has worked the overnight shift for two years. She has never received an alert like this. She calls Marcus at 04:22. They spend the next hour in the system's logs together.",
      "What they find is subtle. Someone has been injecting small, plausible-looking anomalies into the sensor data for eleven days — readings that were unusual but not impossible, small enough to pass most threshold checks, accumulating toward a moment when the AI would have made a control decision based on a temperature state that didn't exist. The furnace would have run a heat soak cycle on components already at temperature. The parts would have been destroyed. At best, a production loss. At worst, parts passing quality control that should have failed, going to aerospace customers.",
      "Marcus runs the red team simulation in the digital twin. He rewinds to day one of the intrusion and plays it forward: here is what the system would have done, here is when the damage would have occurred, here is the cascade. The simulation finishes in eight minutes.",
      "Then he runs the blue team response: here is the physics validation catching the anomaly, here is the decision to quarantine, here is the fallback. The cascade doesn't happen. The parts are fine. The customers never know.",
      "SENTINEL-STEEL — the security framework the team has been building alongside the energy optimization, the layer they hoped they would never need — has worked the first time it needed to.",
      "Erik looks at the simulation on Marcus's laptop. At the red team version — the one where SENTINEL didn't catch it.",
      '"The parts," he says. "They would have passed inspection?"',
      '"With high probability," Marcus says.',
      "Erik is quiet for a moment. He is thinking about aerospace customers. About what happens when a part fails in the field.",
      '"Who was it?" he asks.',
      '"We don\'t know," Marcus says. "It came through a supplier integration endpoint. We\'ve closed the vector. The forensics are going to MSB."',
      "The mandatory incident report is filed the same morning. The regulators, when they see the forensics, will note something that goes into a report cited in a parliamentary briefing: the attack was stopped not by perimeter defense, but by physics. The sensor data was plausible in isolation. It was impossible in context.",
      "The physical world had been the authentication layer.",
    ],
  },
  {
    number: "III",
    title: "The Sovereign Platform",
    year: "2029",
    color: "blue",
    paragraphs: [
      "By 2029, something has shifted that nobody announced.",
      "The three factories in Edsbyn are no longer competing in the same way. They are still separate businesses, still bidding against each other for contracts, still independent in every commercial sense. But at the infrastructure layer, something different is happening. Each factory's edge AI model is learning. Each factory's federated learning node is contributing, anonymously and cryptographically, to a shared model that gets better at predicting energy prices, at detecting anomalies, at understanding the rhythms of this particular grid in this particular region of northern Sweden.",
      "The raw data stays at each factory. The learning travels.",
      "Lena has spent the year building SovereignEdge — the platform layer that makes this possible. It runs on Swedish servers. It depends on no single cloud provider. It is containerized, so any component can be replaced. The underlying standards are OPC UA for machine communication, the Asset Administration Shell specification for the digital twin data model, federated learning protocols built on open aggregation libraries.",
      "When manufacturers from Gävle call, asking to join the federation, Lena's answer is: yes, and here is the protocol, and here is what you contribute, and here is what you receive, and the raw data never leaves your building.",
      "By the end of 2029, SovereignEdge has seventeen factory nodes. The federation's shared model has seen more operational variation than any single factory will see in a decade. It is predicting energy demand with ninety-three percent accuracy at a four-hour horizon.",
      "The director of the Energimyndigheten's industrial efficiency division visits in November. She walks the factory floor with Erik, who has become something he did not expect to become: an advocate.",
      '"The other manufacturers," she says. "Why did they join?"',
      "Erik thinks about it.",
      '"Because it doesn\'t cost them anything they want to keep," he says. "The data stays with them. The learning is shared. It\'s like asking why you\'d join a weather network. You give your readings. You get the forecast. Nobody owns the weather."',
      "She writes that down.",
    ],
  },
  {
    number: "IV",
    title: "The Pivot",
    year: "2030",
    color: "emerald",
    paragraphs: [
      "In the spring of 2030, Nicolas Waern drives north from Stockholm to Edsbyn.",
      "He sits with Lena in the factory's small meeting room, drinking coffee that is slightly too bitter, and she walks him through the architecture. Edge nodes. Federated learning. Physics-informed validation. Digital twins of each factory, continuously updated from sensor data, used for simulation before any change touches the real world. Open standards at every layer so no single vendor controls the stack.",
      "Nicolas listens. He has heard parts of this before, in different contexts. But here, in a metal factory in Hälsingland, looking at a real system that real people depend on, the pieces click together differently.",
      '"This is the same architecture," he says.',
      "Lena looks at him.",
      '"As what?"',
      "He explains. He has been building a platform — Life Atlas — that models human biology at the edge, that learns across users without centralizing their data, that validates AI outputs against known physiological constraints the way her system validates sensor readings against known physics.",
      '"Your furnace twin," he says. "It models the thermal state of the system, so you can predict what will happen before you change the parameters."',
      '"Yes," she says.',
      '"I have a biological twin that models the metabolic state of a person, so you can predict what will happen before you change the diet, the supplements, the environment."',
      '"Yes," she says, slowly.',
      '"The architecture is identical."',
      "She puts down her coffee. She has been thinking about expansion — more factories, more nodes, more industrial domains. She has not been thinking about forests.",
      "Nicolas tells her what he has been thinking about forests.",
      "Timber. Soil sensors. Growth models. The same federated learning that has taught the energy system to predict furnace behavior could teach a forest management system to predict timber growth, harvest windows, soil saturation, fire risk. The same physics-informed validation that catches impossible temperature readings could catch impossible soil moisture readings — could flag when something is wrong in a stand of trees before any human eye would notice.",
      "And then the piece that is harder to articulate: if you know what the forest contains, at the molecular level — and you know what the factory needs, at the production level — then the supply chain between forest and factory becomes visible for the first time.",
      "Not a spreadsheet. A living model. The forest twin and the factory twin, in conversation.",
      "Lena is quiet for a long time.",
      '"That\'s not a factory problem," she says finally.',
      '"No," Nicolas says. "It\'s bigger than that."',
      "Outside, through the meeting room window, the Voxnan runs dark toward the south. The forest begins forty meters from the river's edge — spruce and pine, dense and old, the same trees that have been here since before anyone thought about digital twins or energy optimization.",
      "They have no idea what is about to happen to them.",
    ],
  },
  {
    number: "V",
    title: "The Forest That Learned",
    year: "2030–2031",
    color: "green",
    paragraphs: [
      "The first soil sensors go into the ground in the autumn of 2030, forty kilometers north of Edsbyn, in a managed forest owned by a family cooperative that has been growing timber on the same land for five generations.",
      "The sensors measure what the forest has always known and never communicated: moisture at three depths, temperature, pH, nitrogen, phosphorus, the electrical conductivity that signals microbial activity in the soil. From the trees themselves: dendrometers measuring trunk diameter growth to the tenth of a millimeter, acoustic sensors that detect the hydraulic tension in the sapwood that predicts drought stress before it is visible. A drone passes over twice a month, building a point cloud of the canopy — not a photograph but a volumetric model, gaussian splats of every crown, updated continuously as the season changes.",
      "Björn, who runs the cooperative with his sister Anna, has been growing timber for thirty years. He knows what a healthy stand looks like. He knows these things the way Erik knows energy bills — personally, experientially, in his body.",
      "The twin knows them differently. The twin knows them at four in the morning, in the middle of winter, when Björn is asleep, measuring the slow electrical signals in the soil that will not become visible signs for another six weeks. The twin knows them at a granularity that no human can maintain across a forest of forty thousand trees.",
      "In the spring of 2031, the twin flags a moisture anomaly in the northeast quadrant — a section of the stand where drainage has been subtly inadequate since a logging road was built in 2018. The soil there is retaining water in ways that are creating anaerobic conditions at root depth, twelve centimeters below the surface, invisible from above. The trees are showing no stress yet. They will, in eighteen months.",
      "Anna goes to look. She brings a probe. She takes a core sample.",
      "The twin is right.",
      "They redirect a drainage ditch. A morning's work with a small excavator. Forty thousand kronor. They save a section of the stand that, without intervention, would have lost sixty percent of its commercial value over five years.",
      "Björn tells the story at a forest owners' cooperative meeting in Ljusdal the following month. Six other cooperatives ask to join the federation.",
      "The forest is beginning to tell the truth about itself.",
    ],
  },
  {
    number: "VI",
    title: "The Robot That Knew Which Tree",
    year: "2032",
    color: "teal",
    paragraphs: [
      "By 2032, the two federations — factory and forest — have begun to speak to each other.",
      "This is Lena's work, and it is the most technically complex piece of the project: a coordination layer between the SovereignEdge manufacturing federation and the SilvaNet forest federation, a shared optimization problem that spans the full supply chain from standing timber to finished component.",
      "The question it tries to answer is: what should be harvested, when, and what should it become?",
      "Not a simple question. A tree that is harvested too early misses its peak fiber density. A tree harvested in the wrong season has different moisture content that requires different drying protocols. And on the factory side: a production run scheduled three months from now needs material with specific tolerances that only certain trees in certain stands at certain stages of growth can provide.",
      "The coordination layer holds both models. It knows the forest and it knows the factory. It runs the optimization continuously.",
      "In October 2032, it makes its first autonomous harvest recommendation: a specific quadrant of a specific stand in Bollnäs, ninety-seven trees of a specific diameter range, harvested in a specific sequence to minimize ground disturbance, producing timber with the fiber characteristics required for a production run at a factory in Söderhamn in February.",
      "A robotic harvester — not humanoid, not designed to look like anything except what it is — follows the route. It moves through the stand on low-ground-pressure tracks, guided by the forest twin's three-dimensional model. It knows which trees. It knows the sequence. It knows how to cut to minimize the force on adjacent root systems.",
      "Waste approaches zero. The parts of each tree that don't go to the factory go to the biogas facility. The slash stays in the stand, returning nutrients to the soil that the twin has already modeled and incorporated into the next growth cycle.",
      "Björn watches from the tree line.",
      '"It\'s reading the forest," he says.',
      "Anna, standing beside him, says nothing. She is watching the harvester move around a tree it was not scheduled to take — a deviation from the plan, a real-time decision based on a soil moisture reading the sensor network sent thirty seconds ago. The ground there is softer than the model predicted. The harvester reroutes to protect the root system of an adjacent tree.",
      "The plan adapts. The forest is part of the plan.",
    ],
  },
  {
    number: "VII",
    title: "The Resilience Marketplace",
    year: "2035",
    color: "cyan",
    paragraphs: [
      "Sweden in 2035 is not dramatically different from Sweden in 2027. The same rain. The same long winters. The same quiet stubbornness in the people who live here, who have always known that survival is a design problem and that the best solutions are the ones that don't look like solutions — they look like the way things are.",
      "But at the infrastructure layer, something has consolidated that took eight years to build.",
      "Every factory in the SovereignEdge federation — there are now 340 of them, from Malmö to Kiruna — runs its production against a real-time model of the grid, the spot market, its own digital twin, and the twins of every factory it can coordinate with. Energy costs across the federation are down, on average, twenty-six percent from 2027.",
      "Every forest in the SilvaNet federation — 1.2 million hectares — is monitored by sensors and drone surveys updated into living digital twins. Carbon sequestration per hectare in SilvaNet-managed forests is up thirty-one percent from baseline.",
      "The connection between these two systems — the factory twin and the forest twin — has become something neither Lena nor Nicolas fully anticipated. It is not just a supply chain. It is a resilience network. When a factory goes offline, the coordination layer reroutes, and other factories absorb the load. When a storm damages a section of forest, the harvest plan adapts in real time, and the factories downstream are notified before they have planned around material that won't come.",
      "The system is antifragile in the way that only systems with good models can be. It does not just respond to disruption. It anticipates it.",
      "In Brussels, the EU Resilience and Energy Efficiency Commission releases a report describing Sweden's edge-native industrial digital twin ecosystem as a reference architecture for European manufacturing. The report notes that the methodology was not developed by a single company or a single government program — it grew from three factories in a small town in northern Sweden, and spread because it worked, and spread because the protocol was open, and spread because every factory that joined gave something and got something back and never had to give up control of its own data.",
      "At the federation's annual gathering in Uppsala, Lena speaks for twenty minutes to an audience of three hundred factory managers and forest cooperative directors.",
      '"The pattern," she says, "is always the same. You build a twin. The twin knows your system better than you can know it alone. The twin learns. The learning compounds. And the thing you built to run one factory, or one forest, or one supply chain — you look up one day and it runs the country."',
    ],
  },
  {
    number: "VIII",
    title: "The Last Connection",
    year: "2035",
    color: "violet",
    paragraphs: [
      "The connection that Nicolas makes is the one nobody made out loud until 2035, though it had been implicit in the architecture from the beginning.",
      "He writes it down in a note, late at night, the way he always writes the things that matter.",
      "FPI ↔ FoPI\nFactory twin talks to forest twin.\nWhat is built is built for the land.",
      "He looks at what he has written. He has been building Life Atlas for nine years. He has been thinking about the LPI-CPI connection — the human twin talking to the plant twin — for the same amount of time.",
      "Now he sees it.",
      "The factory twin and the forest twin are the same architecture as the human twin and the plant twin. Not metaphorically. Structurally. The same edge-native processing. The same federated learning across a network of sovereign nodes. The same physics-informed validation layer that rejects impossible inputs. The same SMILE methodology: virtual first, then physical, because you don't touch the real system until you understand it in the model.",
      "Every layer of the LPI architecture has an analog in SovereignEdge. Every principle of SilvaNet has an analog in CPI. The body twin and the plant twin are the same architecture as the factory twin and the forest twin. They are all answering the same question with the same tools: how do you manage a complex, living system at a scale no single human can hold in their head, without losing sovereignty over your own data, without creating dependencies you cannot remove?",
      "The answer is always: build the twin. Let it learn. Share the learning without sharing the raw data. Validate against physics because physics doesn't lie. Keep the human in control. Let the system handle the scale.",
      "He adds one more line to the note.",
      "The body knows the forest.\nThe forest knows the factory.\nThe factory knows the grid.\nThe grid knows the land.\nWhat grows is built for us.\nWhat is built grows from what grows.",
      "He closes the laptop. The rain has stopped — a rare occurrence in Gothenburg, brief and precious, the kind of pause that makes you look up.",
      "He looks up.",
      "And for a moment, he sees the whole thing at once: the factories and the forests and the farms and the cities, each one running a twin, each twin in conversation with the others, the learning flowing across the network without the data leaving the places where it was born, the physical world and the model of the physical world calibrating each other continuously.",
      "Part of something that grows.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   FadeParagraph
   ═══════════════════════════════════════════════════════════════ */

const KEY_LINES = new Set([
  "The reading is impossible.",
  "The raw data stays at each factory. The learning travels.",
  "The plan adapts. The forest is part of the plan.",
  "The forest is beginning to tell the truth about itself.",
  "The physical world had been the authentication layer.",
  "Part of something that grows.",
  "Now he sees it.",
  "The twin is right.",
  '"This is the same architecture," he says.',
]);

function FadeParagraph({ text, delay }: { text: string; delay: number }) {
  const { ref, visible } = useFadeIn();
  const isCode = text.startsWith("FPI") || text.startsWith("The body knows");
  const isKey = KEY_LINES.has(text);

  if (isCode) {
    return (
      <div
        ref={ref}
        className="transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        <pre className="font-mono text-sm md:text-base bg-[#0d1117] border border-green-900/30 rounded-lg px-6 py-4 text-green-300 my-6 whitespace-pre-wrap">
          {text}
        </pre>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p
        className={`leading-[1.9] mb-6 ${
          isKey
            ? "text-xl md:text-2xl font-light italic text-[var(--color-text)] my-10"
            : "text-[var(--color-text-secondary)] text-base md:text-lg"
        }`}
      >
        {text}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ChapterHeader
   ═══════════════════════════════════════════════════════════════ */

function ChapterHeader({ chapter }: { chapter: Chapter }) {
  const { ref, visible } = useFadeIn(0.1);

  const colorMap: Record<string, string> = {
    amber: "from-amber-500/15 to-transparent border-amber-800/30 text-amber-400",
    red: "from-red-500/15 to-transparent border-red-900/30 text-red-400",
    blue: "from-blue-500/15 to-transparent border-blue-800/30 text-blue-400",
    emerald: "from-emerald-500/15 to-transparent border-emerald-800/30 text-emerald-400",
    green: "from-green-500/15 to-transparent border-green-800/30 text-green-400",
    teal: "from-teal-500/15 to-transparent border-teal-800/30 text-teal-400",
    cyan: "from-cyan-500/15 to-transparent border-cyan-800/30 text-cyan-400",
    violet: "from-violet-500/15 to-transparent border-violet-800/30 text-violet-400",
  };

  const colors = colorMap[chapter.color] || colorMap.amber;
  const parts = colors.split(" ");
  const gradient = `${parts[0]} ${parts[1]}`;
  const border = parts[2];
  const text = parts[3];

  return (
    <div
      ref={ref}
      className="transition-all duration-1200 ease-out my-20 md:my-32"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <div className={`bg-gradient-to-b ${gradient} border-t ${border} pt-12 pb-4 -mx-6 px-6`}>
        <div className="flex items-baseline gap-4 mb-3">
          <span className={`text-sm tracking-[0.3em] uppercase ${text} opacity-70`}>
            Chapter {chapter.number}
          </span>
          <span className="text-sm text-[var(--color-text-secondary)] opacity-50">
            {chapter.year}
          </span>
        </div>
        <h2 className={`text-3xl md:text-4xl font-bold ${text}`}>
          {chapter.title}
        </h2>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheSteeForest() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true);
  }, []);

  return (
    <>
      <ProgressBar />
      <StoryNav />

      <main className="min-h-screen">
        {/* Title screen */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-transparent to-transparent" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  background: i % 2 === 0 ? "rgba(74,222,128,0.15)" : "rgba(34,211,238,0.12)",
                  left: `${10 + i * 11}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  animation: `float ${7 + i * 1.2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div
            ref={titleRef}
            className="text-center px-6 relative transition-all duration-[2000ms] ease-out"
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <p className="text-sm tracking-[0.4em] uppercase text-[var(--color-text-secondary)] mb-6">
              Sentinel Arc — Story XXV
            </p>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              The Steel Forest
            </h1>
            <p
              className="text-xl md:text-2xl font-light italic max-w-xl mx-auto mb-4"
              style={{ color: "var(--color-text-secondary)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              From Factory Floors to Forest Floors — Sweden's Edge-Native Revolution
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] opacity-50 mb-12">
              2027 — 2035
            </p>
            <div className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] opacity-50">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-[var(--color-text-secondary)] animate-pulse" />
            </div>
          </div>
        </section>

        {/* Chapters */}
        <div className="max-w-2xl mx-auto px-6 pb-32">
          {chapters.map((chapter) => (
            <div key={chapter.number}>
              <ChapterHeader chapter={chapter} />
              {chapter.paragraphs.map((p, i) => (
                <FadeParagraph
                  key={i}
                  text={p}
                  delay={Math.min(i * 80, 400)}
                />
              ))}
            </div>
          ))}

          {/* Separator */}
          <div className="my-24 flex justify-center">
            <div className="flex gap-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)] opacity-30" />
              ))}
            </div>
          </div>

          {/* Closing note */}
          <div className="text-center mb-16">
            <p className="text-[var(--color-text-secondary)] italic text-base mb-2 opacity-60">
              Sweden, 2035. Every factory, every forest, every farm.
            </p>
            <p className="text-[var(--color-text-secondary)] italic text-base mb-2 opacity-60">
              The pattern repeats. The architecture is always the same.
            </p>
            <p className="text-[var(--color-text-secondary)] italic text-base opacity-60">
              What if the system knew you?
            </p>
          </div>

          {/* Back link */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 border border-[var(--color-border)] rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:border-green-600/50 transition-colors text-sm"
            >
              THE SENTINEL STORIES
            </a>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.15; }
          100% { transform: translateY(-28px) scale(1.4); opacity: 0.04; }
        }
      `}</style>
    </>
  );
}
