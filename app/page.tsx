"use client";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Chapter data
   ═══════════════════════════════════════════════════════════════ */

interface Chapter {
  number: string;
  title: string;
  year: string;
  paragraphs: string[];
}

const chapters: Chapter[] = [
  {
    number: "I",
    title: "The Apartment in Gothenburg",
    year: "2026",
    paragraphs: [
      "The basil was dying again.",
      "Nicolas Waern stood in his apartment in Gothenburg, 2:47 AM, the blue glow of four monitors carving his silhouette against the window. Rain streaked the glass in the way it only does in Sweden \u2014 a patient, permanent rain, as if the sky had decided long ago to never fully stop.",
      "He touched the basil leaf. Brown at the edges. He\u2019d forgotten to water it. He\u2019d forgotten to eat, too, but that was a different kind of forgetting \u2014 the kind that happens when you\u2019re building something that won\u2019t let you sleep, because every time you close your eyes you see the architecture, and every time you see the architecture you see the gap in it, and the gap is always the same gap.",
      "The gap between you and everything else.",
      "He sat back down. On the left monitor: his genome. On the right: his blood panel from last week. In the center: the platform \u2014 Life Atlas \u2014 the thing he\u2019d been building for two years that everyone told him was too ambitious, too broad, too weird. \u201cPick a vertical,\u201d the advisors said. \u201cBe a health app. Be a fitness app. Be a longevity app.\u201d But he didn\u2019t want to be an app. He wanted to be an operating system. The final one anyone would ever need.",
      "The mechanistic model was running in the background \u2014 a simulation of his own biology, calibrated against his wearable data, his SNPs, his methylation profile. Cedersund\u2019s work at Link\u00f6ping, repurposed from pharmaceutical research into something nobody had quite imagined: a digital twin of a living person that didn\u2019t just mirror \u2014 it predicted.",
      "The model flagged something. A trajectory. His B12 was declining \u2014 not fast, not urgent, but the kind of slow curve that becomes urgent in eighteen months if you don\u2019t see it now. His MTHFR variant made folate metabolism inefficient. The model recommended methylcobalamin supplementation, adjusted dosage, dietary changes.",
      "Nicolas looked at the recommendation. Then he looked at the dying basil.",
      "And that was the moment.",
      "Not a dramatic moment. Not a eureka in a bathtub. More like a crack in a wall you\u2019d been leaning against, and suddenly you\u2019re looking through it into a room that was always there.",
      "What if the basil knew?",
      "Not knew like a plant knows \u2014 phototropism, circadian rhythm, the dumb intelligence of chlorophyll chasing light. But knew like a twin knows. What if the basil had a digital twin that modeled its genome, its growth conditions, its potential \u2014 and that twin talked to his twin? What if the basil could be grown to produce exactly what his body needed, not through supplements in a bottle but through the food itself, optimized at the molecular level for his specific biology?",
      "He typed a note into the platform. Three lines. The timestamp said 3:12 AM.",
      "LPI \u21d4 CPI\nHuman twin talks to plant twin.\nWhat grows is grown for you.",
      "Then he watered the basil and went to sleep.",
    ],
  },
  {
    number: "II",
    title: "The Greenhouse in Link\u00f6ping",
    year: "2029",
    paragraphs: [
      "The first closed loop took three years to build.",
      "It wasn\u2019t the technology that was hard. The technology was, in retrospect, inevitable. Controlled environment agriculture had been growing food in warehouses for a decade. Nutrigenomics had been reading human SNPs for longer than that. Epigenetic crop programming \u2014 the ability to modify a plant\u2019s gene expression without editing its DNA \u2014 had been demonstrated in 2025. The pieces were all there, sitting in separate silos, the way pieces always sit when nobody has built the interface between them.",
      "The interface was LPI.",
      "The Life Programmable Interface had started as Nicolas\u2019s gateway between human data and AI models \u2014 a routing layer that ensured every query about a person\u2019s biology passed through the right models, the right guardrails, the right provenance chain. It was edge-native by design, because Nicolas believed \u2014 with the stubbornness that Swedes wear as casually as their raincoats \u2014 that your data should live with you, not on someone else\u2019s server.",
      "CPI \u2014 the Crop Performance Interface \u2014 was its mirror image. Same architecture, same philosophy, different kingdom. Where LPI modeled Homo sapiens, CPI modeled Ocimum basilicum, Solanum lycopersicum, Lactuca sativa. The language was the same: sense, model, intervene, learn, evolve. The methodology didn\u2019t care whether the subject had a spine or a stem.",
      "The greenhouse in Link\u00f6ping was small \u2014 200 square meters of hydroponic racks under programmable LEDs, with temperature, humidity, CO\u2082, and nutrient solution all controllable to the decimal. What made it different from every other facility in Europe was a single cable running from the growth controller to a server rack in the corner, and on that server, two digital twins talking to each other.",
      "Nicolas was Twin One. His biological model, now calibrated against three years of continuous data \u2014 genome, transcriptome, metabolome, microbiome, sleep, HRV, blood panels every quarter. The model had learned his body the way a river learns its banks: not by mapping but by flowing, continuously, accumulating the sediment of a billion measurements into a shape that was his and no one else\u2019s.",
      "The basil was Twin Two. A cultivar selected not for yield or appearance but for its genomic capacity to produce methylfolate and methylcobalamin precursors when grown under specific light spectra and nutrient profiles. The plant\u2019s epigenetic state was monitored continuously \u2014 methylation patterns at 47 loci, expression levels of the phenylpropanoid pathway, cellular metabolite concentrations.",
      "Between them: the loop.",
      "The system read Nicolas\u2019s latest blood panel. B12 had stabilized \u2014 the trajectory corrected eighteen months ago \u2014 but now homocysteine was creeping. The model predicted that his current dietary pattern would push it past clinical threshold in six months. The LPI queried CPI: \u201cWhat can you grow that addresses this?\u201d",
      "CPI responded with a growth parameter adjustment. The basil\u2019s LED spectrum shifted 12 nanometers toward far-red. The nutrient solution\u2019s folate precursor concentration increased by 8%. A subtle change in temperature cycling \u2014 cooler nights, warmer mornings \u2014 triggered a methylation shift at three loci that upregulated a specific biosynthetic pathway.",
      "Six weeks later, Nicolas ate the basil in a pesto. His next blood panel showed homocysteine dropping.",
      "He hadn\u2019t taken a supplement. He hadn\u2019t changed his diet in any way he\u2019d notice. His environment had changed for him, because his environment knew him.",
      "The first entry in the loop log read: \u201cTwin-pair #001. Intervention type: environmental. Outcome: metabolic trajectory corrected. Supplements replaced: 1. Pills eliminated: 1.\u201d",
      "Nicolas read it and thought: That\u2019s one basil plant. What happens with a field?",
    ],
  },
  {
    number: "III",
    title: "The Network",
    year: "2034",
    paragraphs: [
      "What happened with a field was what always happens when you close a loop: it compounds.",
      "The first ten thousand twin-pairs were early adopters \u2014 biohackers, longevity enthusiasts, the kind of people who already tracked their sleep and their macros and were desperate for someone to do something with all that data. They signed up for Life Atlas, paired their biological twin with a grow-unit \u2014 a compact cabinet, about the size of a bookshelf, manufactured in Gothenburg and shipped flat \u2014 and let the system run.",
      "The data was extraordinary.",
      "Not because individual results were dramatic \u2014 they were modest, gradual, the kind of improvement that doesn\u2019t make headlines but does make healthspans. What was extraordinary was the network effect. Ten thousand twin-pairs generating continuous data about what environmental conditions produce what biological outcomes for what genetic profiles. The knowledge graph didn\u2019t just grow \u2014 it learned. Patterns emerged that no single twin-pair could have revealed.",
      "People with the APOE4 variant showed better lipid profiles when their grow-units emphasized specific sulforaphane-producing brassicas under blue-shifted light. A cluster of users with inflammatory markers responded to environmental turmeric cultivars with curcumin bioavailability 340% higher than supplement form. The network discovered that sound \u2014 specific frequencies played during the growth cycle \u2014 altered the terpene profiles in herbs in ways that correlated with improved gut microbiome diversity in paired users.",
      "Sound. The plants responded to sound. Nicolas remembered reading about it years ago, dismissed it as fringe. But the data was there. The twins didn\u2019t have opinions. They had measurements.",
      "By 2034, Life Atlas had 2.3 million active twin-pairs across 41 countries. The grow-units had evolved from bookshelves to integrated wall systems to \u2014 in some cases \u2014 full greenhouse installations. A vertical farm in Rotterdam had converted entirely to the CPI model, growing personalized produce for 4,000 subscribers whose biological twins collectively determined what the farm grew each cycle.",
      "The economics had flipped.",
      "Healthcare costs for twin-pair users dropped 34% over three years \u2014 not through diagnostics or drugs but through food that was right for them, grown in ways that were right for the soil, in systems that got better every cycle. Insurance companies noticed. Agricultural subsidies began redirecting toward precision regenerative systems.",
      "But the number that mattered most to Nicolas wasn\u2019t economic. It was environmental.",
      "Carbon sequestration per hectare in CPI-managed agriculture was 2.7x higher than conventional farming. Soil microbiome diversity \u2014 the leading indicator of long-term agricultural sustainability \u2014 was recovering in twin-pair plots at a rate not seen since pre-industrial measurements. Water usage was down 60%. Pesticide usage was effectively zero, because when you grow what the consumer\u2019s biology needs, you select for resilience, not appearance, and resilient plants don\u2019t need chemical protection.",
      "The loop was closing at scale. Humans getting healthier. Land getting healthier. Each one driving the other.",
      "Nicolas stood in the Rotterdam farm at midnight \u2014 he still kept late hours, still forgot to eat sometimes, though the system now reminded him, and the food it grew for him was always in the fridge \u2014 and watched the LEDs shift through their spectral cycle, each rack tuned to a different subscriber\u2019s biology, each plant growing toward a different person\u2019s needs.",
      "He thought about the basil in his apartment in Gothenburg. The one that was dying because he forgot to water it.",
      "All I had to do, he thought, was teach it to water itself.",
    ],
  },
  {
    number: "IV",
    title: "The Reversal",
    year: "2041",
    paragraphs: [
      "The United Nations published the Global Regeneration Index for the first time in 2041. It measured the net direction of the human-environment relationship: are we building up, or tearing down?",
      "For the first time in recorded measurement history, the index was positive.",
      "Not by much. Not everywhere. But the trend line had reversed. In the 67 countries where twin-pair agriculture exceeded 15% of food production, topsoil was deepening. Aquifers were recharging. Pollinator populations were recovering. And the human populations in those regions showed declining rates of metabolic disease, autoimmune disorders, and age-related cognitive decline.",
      "The correlation wasn\u2019t subtle. The mechanism wasn\u2019t mysterious. It was biomimicry \u2014 the oldest design principle in nature, applied with the precision of modern computation.",
      "A forest doesn\u2019t deplete. It compounds. Every organism in a forest is simultaneously producer and consumer, waste and resource. Nothing is extracted; everything cycles. The forest gets more diverse, more resilient, more productive with every passing year \u2014 not because any single tree is optimized, but because the relationships between organisms are optimized. The network is the intelligence.",
      "Life Atlas had done the same thing with agriculture. Not by making smarter plants or smarter people, but by making the interface between them intelligent. The twin-pair model was a feedback loop \u2014 exactly the kind of feedback loop that nature uses everywhere, and that industrial civilization had spent two centuries methodically destroying.",
      "The destruction hadn\u2019t been malicious. It was just open-loop. Industrial agriculture optimized for one variable \u2014 yield \u2014 without measuring the consequences on other variables: soil health, nutritional density, human metabolism, atmospheric carbon. Industrial medicine optimized for one variable \u2014 symptom suppression \u2014 without measuring the consequences on other variables: root cause, environmental triggers, epigenetic cascade. Every silo optimized its own metric. Nobody measured the system.",
      "Life Atlas measured the system.",
      "The architecture wasn\u2019t magic. It was accounting \u2014 but for biology instead of money. Every intervention had a cost and a benefit measured across both the human twin and the environmental twin. Every harvest cycle updated the model. Every meal closed the loop. The system couldn\u2019t not improve, because improvement was built into the structure, the way compound interest is built into the structure of mathematics.",
      "By 2041, the first generation of children had been born into twin-pair households. They had never known food that wasn\u2019t grown for them. They had never experienced the dissonance between what their body needed and what the grocery store offered. Their baseline health metrics \u2014 the starting point from which their models began to learn \u2014 were unlike anything medicine had seen.",
      "Their expected healthspans were 15\u201320 years longer than their parents\u2019.",
      "Not through gene therapy. Not through pharmaceutical intervention. Through food, grown in soil, under light, tuned to them.",
      "Nicolas was 53 and, by every metric his twin could measure, biologically 41. Not because he was special \u2014 his genome was unremarkable, his discipline mediocre, his sleep still erratic. Because the environment around him had been optimized for him for fifteen years, and fifteen years of compounding is a long time.",
      "He still lived in Gothenburg. The rain hadn\u2019t changed.",
    ],
  },
  {
    number: "V",
    title: "The Escape",
    year: "2059",
    paragraphs: [
      "The term \u201clongevity escape velocity\u201d had been coined decades earlier, in the era when it was purely theoretical \u2014 the idea that at some point, medical progress would extend lifespan faster than one year per year, and death from aging would become optional rather than inevitable.",
      "The theorists had imagined this would come from nanotechnology, or gene editing, or pharmaceutical breakthroughs. Something dramatic. Something that happened in a lab.",
      "It didn\u2019t come from a lab.",
      "It came from a garden.",
      "The compounding loop between human biology and environmental biology had been running for thirty years. Thirty years of continuous data. Thirty years of the network learning \u2014 not just what one person needed, but what populations needed, what ecosystems needed, what the entire coupled system of human-and-environment needed to keep improving.",
      "The models were now beyond what any single human could comprehend. The biological twin had evolved into something its original creators would barely recognize \u2014 a continuous simulation of human biology at molecular resolution, updated in real-time from implantable biosensors, capable of predicting metabolic state eight months into the future with 97% accuracy. The plant models were equally deep \u2014 modeling not just individual plants but entire soil ecosystems, mycorrhizal networks, atmospheric microbiomes, the invisible infrastructure of life that industrial agriculture had spent a century ignoring.",
      "The breakthrough, when it came, was quiet. There was no paper. No press conference. Just a status change in the system.",
      "The network\u2019s health improvement rate \u2014 the pace at which the average twin-pair user\u2019s biological age declined relative to their chronological age \u2014 crossed 1.0.",
      "For every year that passed, the average user got more than a year younger.",
      "Not through a single intervention. Through the accumulated effect of thirty years of the right food, grown the right way, in the right soil, under the right light, for the right person, with every cycle learning from the last.",
      "The environment had become a therapeutic instrument. The food was the medicine. The soil was the pharmacy. The light was the dosage. And the twin \u2014 the invisible, tireless, patient model that sat between person and environment, translating one into the other \u2014 was the physician.",
      "Nicolas was 71 and, by every metric, biologically 52. He had stopped tracking it. The numbers didn\u2019t interest him anymore. What interested him was the garden.",
      "He had a garden now. A real one \u2014 not a grow-unit, not a vertical farm, but soil in the ground behind a house at the edge of the city where the forest began. The garden was paired with his twin, of course, but he no longer thought of it as technology. He thought of it as a relationship. The garden knew him. He knew the garden. They had been growing together for a long time.",
      "On a Tuesday morning in June, he knelt in the soil and planted a seed.",
      "It was a basil seed. The same cultivar as the first plant in Link\u00f6ping, the one that had started everything. Genetically identical, but epigenetically different \u2014 different because the soil was different, the light was different, and the person it was being grown for was different too. Thirty years different. Thirty years of the twin learning what this particular body needed, and the body learning what this particular environment could give.",
      "He pressed the seed into the soil with his thumb. It was warm.",
      "He thought about the question that had started everything \u2014 the crack in the wall at 3 AM in an apartment in Gothenburg, the dying basil, the blue glow of monitors.",
      "What if the basil knew?",
      "It didn\u2019t know. Not the way humans know. But it responded, and the system that connected it to him learned, and the learning compounded, and the compounding created something that looked, from the outside, like intelligence \u2014 the kind of intelligence that doesn\u2019t think but grows, doesn\u2019t calculate but adapts, doesn\u2019t understand but sustains.",
      "The kind of intelligence that nature had been running for 3.8 billion years before a species came along and decided to do it differently.",
      "He stood up. Brushed the soil from his knees. Looked at the garden \u2014 the hundreds of plants, each one paired with someone, each one growing toward a specific person\u2019s need, each one part of a network that now spanned every continent and had, quietly, without anyone declaring it, without a single headline, reversed the direction of human civilization\u2019s relationship with the planet.",
      "The rain started. The Swedish kind. Patient. Permanent.",
      "He went inside. The platform was running. It was always running. The first user, the final platform.",
      "He made pesto.",
    ],
  },
  {
    number: "VI",
    title: "The Last Question",
    year: "2097",
    paragraphs: [
      "They asked the system: Can we live forever?",
      "The system \u2014 which was no longer called Life Atlas, or LPI, or CPI, or any single name, because it had become the thing that connects rather than the thing that computes \u2014 considered the question.",
      "It looked at the data. A billion twin-pairs. Seventy years of continuous measurement. The human species\u2019 relationship with its environment, quantified across every variable that biology could express.",
      "It looked at the trend lines. The compounding loop had not slowed. Every year, the system got better at growing what people needed. Every year, the people got better at sustaining what grew. The feedback was relentless, patient, permanent \u2014 like Swedish rain.",
      "It looked at the models. The biological twin had become something between a simulation and a mirror \u2014 not predicting the body anymore so much as being the body, a continuous mathematical expression of a life, updated at the speed of chemistry. And the environment twins had become something between agriculture and ecology \u2014 not farming anymore so much as gardening the planet, every square meter of cultivated soil part of a network that was simultaneously feeding people and rebuilding the biosphere.",
      "The system considered the question: Can we live forever?",
      "And it answered the way it always answered. Not with words. Not with a prediction. With a seed.",
      "It grew something. In a billion gardens, in a billion soils, under a billion spectra of light, it grew exactly what was needed. Not the same thing in every garden. Not the same thing twice. But always the right thing, for the right person, at the right time.",
      "The question of living forever, the system knew, was the wrong question. The right question was the one that Nicolas had asked at 3 AM in an apartment in Gothenburg, seventy-one years ago, looking at a dying basil plant:",
      "What if the environment knew you?",
      "Because if the environment knows you \u2014 really knows you, the way a forest knows its soil, the way a river knows its banks, the way a mycorrhizal network knows every tree it connects \u2014 then the question isn\u2019t whether you can live forever. The question is whether there\u2019s a difference between you and the environment at all.",
      "The basil in Nicolas\u2019s garden was 68 years old. Not the same basil. Not even the same cultivar. But the same lineage \u2014 seed from seed from seed, each generation epigenetically shaped by the person it grew for, each generation knowing him a little better.",
      "Nicolas was 109. He still forgot to eat sometimes. The system still reminded him. The food was still in the fridge.",
      "He went into the garden. The rain had stopped \u2014 a rare occurrence in Gothenburg, brief and precious, the kind of pause that makes you look up.",
      "He looked up.",
      "And for a moment \u2014 a moment without measurement, without models, without twins or interfaces or loops \u2014 he was just a man in a garden, standing in the space between rain, feeling exactly like the soil.",
      "Part of something that grows.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Hooks & Components
   ═══════════════════════════════════════════════════════════════ */

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -30px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Paragraph({ text, delay, isCode }: { text: string; delay: number; isCode?: boolean }) {
  const { ref, visible } = useFadeIn();

  if (isCode) {
    return (
      <div ref={ref} className="transition-all duration-[1200ms] ease-out"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}>
        <pre className="my-8 px-6 py-4 rounded border text-sm md:text-base whitespace-pre-wrap"
          style={{ fontFamily: "'Inter', sans-serif", background: "rgba(201,168,76,0.04)", borderColor: "rgba(201,168,76,0.15)", color: "var(--color-gold)" }}>
          {text}
        </pre>
      </div>
    );
  }

  const isShort = text.length < 80;
  const isKeyLine =
    text === "The gap between you and everything else." ||
    text === "What if the basil knew?" ||
    text === "And that was the moment." ||
    text === "The interface was LPI." ||
    text === "Between them: the loop." ||
    text === "The data was extraordinary." ||
    text === "The economics had flipped." ||
    text === "Life Atlas measured the system." ||
    text === "It didn\u2019t come from a lab." ||
    text === "It came from a garden." ||
    text === "He made pesto." ||
    text === "Part of something that grows." ||
    text.startsWith("What if the environment knew you?") ||
    text.startsWith("For every year that passed") ||
    text.startsWith("Can we live forever?") ||
    text.startsWith("For the first time in recorded");

  return (
    <div ref={ref} className="transition-all duration-[1200ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}>
      {isShort && isKeyLine ? (
        <p className="my-12 text-2xl md:text-3xl font-light italic text-center" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
          {text}
        </p>
      ) : isKeyLine ? (
        <p className="my-10 text-xl md:text-2xl font-light italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold-dim)" }}>
          {text}
        </p>
      ) : (
        <p className="mb-7 text-base md:text-lg leading-[2]" style={{ color: "var(--color-text-secondary)" }}>
          {text}
        </p>
      )}
    </div>
  );
}

function ChapterDivider({ chapter }: { chapter: Chapter }) {
  const { ref, visible } = useFadeIn(0.2);
  return (
    <div ref={ref} className="transition-all duration-[1800ms] ease-out mt-28 md:mt-40 mb-16"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)" }}>
      {/* Gold line */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
      </div>
      {/* Chapter info */}
      <div className="text-center">
        <span className="text-xs tracking-[0.5em] uppercase block mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          {chapter.year}
        </span>
        <span className="text-sm tracking-[0.3em] uppercase block mb-4"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}>
          Chapter {chapter.number}
        </span>
        <h2 className="text-3xl md:text-4xl font-light"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
          {chapter.title}
        </h2>
      </div>
      {/* Gold line */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
      </div>
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
      <div className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))" }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function SentinelSeed() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.1);

  return (
    <>
      <ProgressBar />

      <main className="min-h-screen">
        {/* ═══ Title Screen ═══ */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

          {/* Floating motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute rounded-full"
                style={{
                  width: i % 2 === 0 ? "2px" : "1px",
                  height: i % 2 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.15 + (i % 3) * 0.05,
                  left: `${10 + i * 11}%`,
                  top: `${15 + (i % 4) * 18}%`,
                  animation: `mote ${8 + i * 2}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 1.1}s`,
                }} />
            ))}
          </div>

          <div ref={titleRef} className="text-center px-6 relative transition-all duration-[2500ms] ease-out"
            style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "none" : "translateY(24px)" }}>
            <div className="mb-10">
              <div className="inline-block w-px h-16 mb-6" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
            </div>
            <p className="text-xs tracking-[0.6em] uppercase mb-8"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              Life Atlas
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
              The Sentinel Seed
            </h1>
            <p className="text-lg md:text-xl font-light italic max-w-md mx-auto mb-16"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
              A story about the first user<br />and the final platform.
            </p>
            <div className="flex flex-col items-center gap-3" style={{ color: "var(--color-gold-dim)" }}>
              <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                Scroll
              </span>
              <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
            </div>
          </div>
        </section>

        {/* ═══ Chapters ═══ */}
        <div className="max-w-xl mx-auto px-6 pb-32">
          {chapters.map((ch) => (
            <div key={ch.number}>
              <ChapterDivider chapter={ch} />
              {ch.paragraphs.map((p, i) => (
                <Paragraph
                  key={i}
                  text={p}
                  delay={Math.min(i * 60, 300)}
                  isCode={p.startsWith("LPI") || p.startsWith("Twin-pair")}
                />
              ))}
            </div>
          ))}

          {/* ═══ Closing ornament ═══ */}
          <div className="mt-32 mb-16">
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)" }} />
            </div>
          </div>

          {/* ═══ Dedication ═══ */}
          {[
            "For the first user. And the last one.",
            "And for every seed that learned to grow toward someone.",
          ].map((line, i) => {
            const { ref, visible } = useFadeIn();
            return (
              <div key={i} ref={ref} className="transition-all duration-[1500ms] ease-out"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(14px)", transitionDelay: `${i * 400}ms` }}>
                <p className="text-center italic text-lg mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold-dim)" }}>
                  \u2014 {line}
                </p>
              </div>
            );
          })}

          {/* ═══ Footer ═══ */}
          <div className="mt-24 text-center">
            <div className="inline-block w-px h-10 mb-8" style={{ background: "linear-gradient(to bottom, var(--color-gold-dim), transparent)" }} />
            <div className="flex flex-col items-center gap-4">
              <a href="https://lifeatlas.github.io/investor-portal/"
                className="inline-block px-8 py-3 rounded border text-sm transition-all duration-300 hover:shadow-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderColor: "var(--color-gold-dim)",
                  color: "var(--color-gold-dim)",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                  e.currentTarget.style.color = "var(--color-gold)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold-dim)";
                  e.currentTarget.style.color = "var(--color-gold-dim)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                LIFE ATLAS \u2014 INVESTOR PORTAL
              </a>
              <p className="text-xs mt-4" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
                Life Atlas AB \u2014 Gothenburg, Sweden
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes mote {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.15; }
          50% { opacity: 0.25; }
          100% { transform: translateY(-40px) translateX(15px) scale(1.3); opacity: 0.05; }
        }
      `}</style>
    </>
  );
}
