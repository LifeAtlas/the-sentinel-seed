"use client";
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
   Paragraph — key lines rendered as large gold italic quotes
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
      {/* Lines flanking chapter label */}
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

      {/* Year */}
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

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-light"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {/* Bottom ornament */}
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
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function ArchitectOfHooves() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ProgressBar />

      <main className="min-h-screen">
        {/* ═══ Title Screen ═══ */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 38%, rgba(201,168,76,0.04) 0%, transparent 60%)",
            }}
          />

          {/* Floating motes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: i % 3 === 0 ? "2px" : "1px",
                  height: i % 3 === 0 ? "2px" : "1px",
                  background: "var(--color-gold)",
                  opacity: 0.08 + (i % 5) * 0.03,
                  left: `${5 + i * 7}%`,
                  top: `${10 + (i % 6) * 14}%`,
                  animation: `mote ${8 + i * 1.6}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.7}s`,
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

            {/* Story number */}
            <p
              className="text-xs tracking-[0.5em] uppercase mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.5,
              }}
            >
              Story II &nbsp;&middot;&nbsp; 2027&ndash;2061
            </p>

            {/* Main title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-gold)",
              }}
            >
              The Architect
              <br />
              of Hooves
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-light italic mb-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "var(--color-text-secondary)",
              }}
            >
              The First Horse That Knew Itself
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
              The mare moved wrong. Not wrong in a way anyone could see.
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
            year="2027"
            chapter="Chapter I"
            title="The Arena at Mulawa"
          />

          <Paragraph>
            The mare moved wrong. Not wrong in a way anyone could see — not a limp, not a hesitation, not anything a groom would notice or a vet would flag. Wrong in a way that only showed up in the numbers, in the seventeen sensors embedded in the sand of the Mulawa arena, in the pressure map that bloomed like a heat signature across the screen each time she cantered the circle.
          </Paragraph>

          <Paragraph>
            Keira had been at Mulawa Arabian Stud for eleven years. She knew horses the way you know a language you grew up speaking — not as rules memorised but as rhythms felt in the body. She knew which mares were nervous at feed time, which stallions performed in the cold and which needed warm-up laps, which foals would grow into their cannon bones and which would always move with a slight over-reach. She knew horses. But she did not know what the numbers were telling her.
          </Paragraph>

          <Paragraph>
            The system was called EquestRai. It had been installed at Mulawa three months earlier, a network of pressure sensors beneath the arena surface, gait cameras at the fence line, a collar that read heart rate and cortisol and temperature and translated the horse into data. Each animal on the property now had a digital twin — a living mirror of its physiology, its movement signature, its stress responses, its biomechanical fingerprint.
          </Paragraph>

          <Paragraph>
            The vet had come last Tuesday. Walked the mare out, flexed the joints, watched her trot on the lunge. "She's fine," he said. "A little stiff in the morning, but that's seasonal." He was not wrong about what his eyes could see. His eyes could not see the pressure shift.
          </Paragraph>

          <Paragraph>
            The twin could see it. The twin had been watching for weeks, tracking a drift in the mare's left fore loading pattern — not a dramatic asymmetry, not a thing that would make a good showman wince, but a compensation. A subtle redistribution of weight that horses develop, invisibly, when something is beginning to hurt. The twin projected the trajectory forward eight months. Career-ending. The kind of injury that announces itself only once, loudly, on the wrong morning.
          </Paragraph>

          <Paragraph>
            EquestRai's recommendation was precise: a four-millimetre elevation on the inside branch of the left fore shoe, a fourteen percent reduction in arena work for six weeks, an increase in passive grazing hours. Small interventions. The kind that cost nothing if unnecessary and everything if not made.
          </Paragraph>

          <Paragraph>
            Keira sat with the recommendation for two days. The vet had said she was fine. The system was saying she was not. There was no dramatic collision between these views — one was the opinion of a skilled professional observing in present time, and one was the projection of a model observing in aggregate. Both could be right in their own frame. Only one was looking forward.
          </Paragraph>

          <Paragraph>
            She called the farrier on Friday morning. She modified the training schedule that afternoon. She did not explain her reasoning to the stable owner, because the stable owner did not yet understand the system, and the explanation would have taken longer than the decision.
          </Paragraph>

          <Paragraph delay={100}>
            Six weeks later, the pressure map was symmetric again. The mare ran the course at Warwick Farm in October and won. Nobody knew what had not happened to her.
          </Paragraph>

          <Paragraph keyLine>
            The mare didn't know she was hurt. The twin did.
          </Paragraph>

          {/* ── Chapter II ── */}
          <ChapterDivider
            year="2030"
            chapter="Chapter II"
            title="The Bloodline Database"
          />

          <Paragraph>
            Three years later, EquestRai was tracking four hundred horses across twelve studs in three countries. The expansion had happened quietly, the way good tools spread — not through sales campaigns but through results. A horse prevented from injury becomes a horse that competes. A horse that competes wins money. Money makes people talk.
          </Paragraph>

          <Paragraph>
            But the individual animal was no longer the most interesting unit. The platform had been collecting data long enough, and across enough generations, to begin seeing something that no vet, no trainer, no breeder could see from inside a single stud: the pattern beneath the bloodline.
          </Paragraph>

          <Paragraph>
            Conformation data. Gait signatures. Injury histories. Breeding records. Performance results across surfaces, distances, weather conditions, rider weights. The system had built a biomechanical map of the Arabian horse at a resolution that the breed's entire written history had never approached.
          </Paragraph>

          <Paragraph>
            The question arrived from a breeder in Newmarket. He had a champion mare — decorated, sound, with a pedigree that read like a list of immortals. He wanted to breed her in the spring. He had identified the obvious choice: the most decorated available stallion, a horse whose papers were flawless and whose stud fee reflected the consensus of every expert in the room. He came to EquestRai not to be told what to do but to have his decision confirmed.
          </Paragraph>

          <Paragraph>
            The system declined to confirm it. The algorithm ran the biomechanical compatibility analysis and identified something human eyes could not see: the champion stallion's gait pattern, when modelled against the mare's, predicted a foal with a specific asymmetry in the carpal joint — not a flaw that would show at birth, not one that would trouble any inspector, but one that would express itself at racing age under the stress of sustained gallop. The decorated stallion was exactly who he appeared to be. He was simply not the right complement for this particular mare.
          </Paragraph>

          <Paragraph>
            EquestRai recommended instead a stallion from a stud in County Kildare — less decorated, less famous, carrying a modest stud fee and no particular mythology. His biomechanics, in three specific dimensions of fore-limb extension and hindquarter drive, were an almost exact inverse complement of the mare's natural compensatory patterns. The foal produced by this pairing, the model projected, would have structural balance that neither parent possessed alone.
          </Paragraph>

          <Paragraph>
            The breeder was quiet on the phone for a long time. Then he said: "The horse has never won anything important."
          </Paragraph>

          <Paragraph>
            Keira, who was advising the consultation, said: "The horse has never been paired with the right mare."
          </Paragraph>

          <Paragraph>
            The breeding happened in April. The foal arrived the following February. By the time she was three, every expert who watched her move understood that something unusual had happened. Nobody could say exactly what.
          </Paragraph>

          <Paragraph keyLine>
            The best breeding decision in the history of the stud was made by a machine that had never seen a horse.
          </Paragraph>

          {/* ── Chapter III ── */}
          <ChapterDivider
            year="2034"
            chapter="Chapter III"
            title="The Pasture Speaks"
          />

          <Paragraph>
            The CPI integration arrived in the summer of 2034. CPI — the Contextual Physical Index, Life Atlas's model for the built and natural environment — had been developed initially for human wellbeing: the air quality of a room, the light spectrum of a workspace, the mineral composition of a water supply. The framework was domain-agnostic. Someone at EquestRai had realised that a horse's environment was just as legible as a human's, if you gave the system eyes.
          </Paragraph>

          <Paragraph>
            Mulawa's paddocks were twinned first. Soil sensors at one-metre intervals. Grass species mapping. Mineral content analysis — selenium, magnesium, copper, zinc — updated seasonally and after rain. The system built a model of each paddock not as acreage but as a nutritional and structural environment, dynamic, variable, as individual as the horses that grazed it.
          </Paragraph>

          <Paragraph>
            The first correlation arrived without announcement. The system had been running for four months when it flagged a pattern: the horses with the best joint health metrics — the lowest inflammation markers, the most consistent gait symmetry scores — were disproportionately rotating through Paddock 7. Not because Paddock 7 had better grass, not because it was more sheltered, not because the horses preferred it for any observable reason. Because the soil in Paddock 7 had selenium concentrations three times higher than the rest of the property.
          </Paragraph>

          <Paragraph>
            Selenium deficiency in horses is a known risk. Supplementation exists. But supplementation is given uniformly, at the rate the label suggests. The system had something more specific to offer. Each horse's digital twin now carried a metabolic model — not a generic equine model, but a model calibrated to that animal's blood panel, age, training load, and seasonal variation. The system began calculating, for each horse, the precise grazing rotation that would bring their selenium intake into the range their individual physiology required.
          </Paragraph>

          <Paragraph>
            The pasture rotation schedule that EquestRai now managed at Mulawa bore no resemblance to the seasonal rotation the stud had used for forty years. It was different for each horse. It changed week to week as soil surveys updated. It was not optimising for grass yield, or for even ground cover, or for any of the things a property manager would traditionally have optimised for.
          </Paragraph>

          <Paragraph>
            It was optimising for what the horse standing at the gate right now, specifically, needed from the earth beneath its feet.
          </Paragraph>

          <Paragraph>
            The stable owner watched a mare he had been supplementing for two years come off supplements entirely within a season. He watched her coat change first — a density and gloss he had never seen from her. Then her recovery times. Then her scores.
          </Paragraph>

          <Paragraph>
            He called Keira and asked what she had done differently. She said: nothing. The pasture had done it.
          </Paragraph>

          <Paragraph keyLine>
            The grass knew which horse was coming.
          </Paragraph>

          {/* ── Chapter IV ── */}
          <ChapterDivider
            year="2038"
            chapter="Chapter IV"
            title="The Foal That Was Born Right"
          />

          <Paragraph>
            In the spring of 2038, a foal arrived at Mulawa whose entire existence had been shaped by the system before she drew her first breath. Not shaped in the way that genetic engineering shapes — not edited, not corrected at the sequence level, not modified. Understood.
          </Paragraph>

          <Paragraph>
            The breeding decision had been EquestRai's recommendation, accepted. The pairing had been chosen not for prestige but for biomechanical complementarity, for the specific profile of soundness and stride that the system predicted this combination would express. The dam's nutritional programme through pregnancy had been managed by the CPI model, her grazing rotation optimised not for general equine health but for the specific demands of carrying a foal whose twin had already been modelled, in outline, from the parents' templates.
          </Paragraph>

          <Paragraph>
            The paddocks she grazed in the third trimester were selected for iron and folate profiles. Her cortisol levels were monitored daily; on the two occasions when they elevated beyond the model's threshold, the stable staff were notified before any observable sign of stress had presented. The stressors were identified — once, a new tractor parked at an unfamiliar angle; once, a change in farrier — and removed.
          </Paragraph>

          <Paragraph>
            The foal was born in September, just before the equinox. She stood within an hour. The gait cameras caught her first steps. The twin was born the same morning, assembled from the parents' data, the pregnancy record, and the early movement signature, and it began its watch.
          </Paragraph>

          <Paragraph>
            At six weeks, the foal's movement pattern was already unusual. The Arabian breeding community has a specific lexicon for exceptional movers — a vocabulary of lift and reach and impulsion that breeders spend lifetimes trying to understand. What this foal had was not a variation on the familiar forms. It was something the judges had not named yet, because they had not seen it at this age, in this combination.
          </Paragraph>

          <Paragraph>
            She was not a genetic miracle. No novel sequence had been written into her. Her sire was the unremarkable stallion from Kildare. Her dam was the champion mare. What had been done was not to her genome but to her gestation, her neonatal environment, her early grazing, her training load — every variable that science knows shapes phenotype from genotype, attended to with a precision that no previous generation of horsemen had possessed the tools to apply.
          </Paragraph>

          <Paragraph>
            She was not engineered. She was grown. There is a difference. The difference matters.
          </Paragraph>

          <Paragraph keyLine>
            You don't engineer perfection. You grow it.
          </Paragraph>

          {/* ── Chapter V ── */}
          <ChapterDivider
            year="2047"
            chapter="Chapter V"
            title="The Human Connection"
          />

          <Paragraph>
            The rider's name was Sofía. She had been working with a particular gelding at a performance stud in Andalusia for three years — long enough for the pair to have developed the wordless fluency that distinguishes good riding from great. The gelding's twin had mapped her as part of his environment. Not explicitly — the system had no category for "rider" in its initial design — but by inference, through the correlation of the horse's biomarkers with the presence or absence of specific individuals.
          </Paragraph>

          <Paragraph>
            Sofía fell in a training session in March. She hit the rail on the way down, three ribs and a wrist, nothing catastrophic, but she was off the property for six weeks. The gelding was reassigned to a substitute rider for the interim.
          </Paragraph>

          <Paragraph>
            Within four days, the system had flagged an anomaly. The gelding's cortisol was elevated. His sleep intervals — monitored through the collar's movement data — were shorter and more fragmented. His gait in morning work had developed a subtle stiffness on the right fore that had no structural explanation; the joint was sound. The system ruled out every physical cause and returned an unfamiliar result: the pattern correlated with the change in rider, not with any equine health variable.
          </Paragraph>

          <Paragraph>
            This was not, strictly speaking, within EquestRai's design parameters. The system was built to model horses. It was inferring something about the relationship between a horse and a human — about the way a particular body, at a particular weight and with a particular balance and rhythm, had become part of the gelding's environmental baseline.
          </Paragraph>

          <Paragraph>
            The system cross-referenced the available substitute riders against Sofía's recorded biomechanical profile — drawn from her six-axis movement data in the saddle, captured over three years of sessions. It recommended a specific substitute: a young rider from a neighbouring stud whose weight distribution, posting rhythm, and rein contact pattern most closely matched Sofía's signature.
          </Paragraph>

          <Paragraph>
            The substitution was made on the fifth day. Within forty-eight hours, the gelding's cortisol was back in range. Within a week, the gait anomaly had resolved. When Sofía returned in April, the system logged the transition as seamless.
          </Paragraph>

          <Paragraph>
            The paper that emerged from this case was titled "Symbiotic Twin Modelling in Equine-Human Dyads." It proposed that the relevant unit of analysis for performance animals was not the individual horse but the coupled system — the horse and the human together, their interaction a single biomechanical and endocrine entity that the twin should model as one. The implications for injury recovery, performance optimisation, and animal welfare were considerable.
          </Paragraph>

          <Paragraph>
            Keira read the paper three times. She thought about the mare at Mulawa in 2027, the pressure map, the compensation no eye could see. She thought about what it meant that the system was now seeing things that were not even, strictly, physical — that it was modelling the invisible architecture of a relationship.
          </Paragraph>

          <Paragraph keyLine>
            The horse missed her. The data proved it.
          </Paragraph>

          {/* ── Chapter VI ── */}
          <ChapterDivider
            year="2061"
            chapter="Chapter VI"
            title="The Herd"
          />

          <Paragraph>
            By 2061 the network contained the biomechanical record of every registered Arabian horse on earth. Not every horse that had ever lived — the pre-sensor generations existed only as performance records and stud books, rich in outcome and silent on mechanism — but every horse born since the early 2030s, when sensor costs had dropped below the threshold that made universal deployment viable. Twelve thousand studs. Forty-three countries. A knowledge graph that could trace the structural inheritance of any bloodline across seven generations of observed, not inferred, biomechanics.
          </Paragraph>

          <Paragraph>
            The breeding science had changed entirely. The decorated stallion was no longer the obvious choice by default; the obvious choice was the compatible one, and compatibility was now a calculable quantity. Injury rates in the racing population had declined by sixty-one percent since the platform's first decade. Some of this was veterinary progress, some was training evolution, but the models attributed the largest share to breeding decisions made with information that did not previously exist.
          </Paragraph>

          <Paragraph>
            But the most unexpected development was ecological. The same grazing optimisation logic that had served the horses at Mulawa — the paddock rotation calibrated to individual mineral needs, the soil survey driving the movement rather than the movement driving the soil — had, over thirty years of consistent application, done something to the land.
          </Paragraph>

          <Paragraph>
            The grasslands beneath the managed studs were different from the surrounding country. Not manicured — the opposite of manicured, richer and more diverse, carrying species profiles that agronomists had not seen in those regions in living memory. The horses, moving through their individually optimised rotations, had been grazing in patterns that, by accident or by emergence, restored the soil biology that industrial agriculture had depleted. They grazed unevenly, precisely, following the logic of their own bodies' needs — and their bodies' needs, it turned out, were calibrated to the same mineral diversity that healthy grassland requires to sustain itself.
          </Paragraph>

          <Paragraph>
            The system had not planned this. No one had planned this. It was a consequence of optimising for the animal rather than for the land, and discovering that the animal, at sufficient resolution, was the land's best guide.
          </Paragraph>

          <Paragraph>
            Across three continents — in the Iberian Peninsula, in the Najd plateau of Arabia, in the semi-arid grasslands of central Australia — herds managed by twin-pair logic were measurably reversing desertification. Soil carbon. Fungal network density. Water retention. The numbers were not dramatic in any single year. Across thirty years they were unmistakable.
          </Paragraph>

          <Paragraph>
            Keira was seventy-four. She had retired from training but not from the network — she consulted for three studs in New South Wales, reviewing the system's recommendations with the eye of someone who had been watching horses longer than the system had existed. She still trusted the data. She had never stopped.
          </Paragraph>

          <Paragraph>
            She read a briefing paper from Life Atlas that described the grassland restoration findings. It connected the architecture explicitly: the same LPI framework, the same SMILE methodology that modelled human beings in relationship with their environment — their rooms, their food, their communities, their work — was now modelling a different kingdom. Not metaphorically. The same ontology, the same inference engine, the same principle that the individual cannot be understood apart from the context it inhabits and the context cannot be understood apart from the individuals who shape it.
          </Paragraph>

          <Paragraph>
            She thought about the mare. The pressure map. The four-millimetre shim. The intervention so small it was almost invisible. The injury that never happened, the race that was won, the stud that trusted the data and bred differently, the foal that moved in a way the judges had no name for, the rider whose absence made itself measurable in cortisol, the grasslands regenerating because horses were grazing as their bodies required.
          </Paragraph>

          <Paragraph>
            All of it from one signal. One compensatory pressure shift in the sand of one arena at two in the afternoon in 2027. A pattern the eye could not see.
          </Paragraph>

          <Paragraph>
            The twin could see it.
          </Paragraph>

          <Paragraph keyLine>
            Every species that joins the network makes every other species healthier.
          </Paragraph>
        </article>

        {/* ═══ Dedication ═══ */}
        <DedicationBlock />

        {/* ═══ Back link ═══ */}
        <BackLink />
      </main>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0)    translateX(0)    scale(1);   opacity: 0.08; }
          50%  {                                                            opacity: 0.18; }
          100% { transform: translateY(-38px) translateX(14px) scale(1.4); opacity: 0.02; }
        }
      `}</style>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Dedication block
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
        For the mare who moved wrong.
        <br />
        And for everyone who listened.
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
   Back link
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
      <a
        href="/"
        className="inline-block group"
        style={{ textDecoration: "none" }}
      >
        <span
          className="text-[10px] tracking-[0.5em] uppercase transition-colors duration-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "var(--color-gold-dim)";
          }}
        >
          &larr;&nbsp;&nbsp;The Sentinel Stories
        </span>
      </a>
    </div>
  );
}
