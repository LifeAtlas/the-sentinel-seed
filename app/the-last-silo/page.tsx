"use client";

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

      {/* Year */}
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
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheLastSilo() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />

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

        {/* Floating motes */}
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

          {/* Story number */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            Story III &nbsp;&bull;&nbsp; 2028 &ndash; 2084
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Last Silo
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-16 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            The Day the Walls Came Down
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
          year="2028"
          chapter="Chapter I"
          title="Seventeen Doctors"
        />

        <Paragraph>
          Ingrid Eriksson was 83 years old and she had seventeen doctors. Not
          one of them knew about the others. Not really. They knew in the way
          that bureaucracies know things — in referral letters filed and
          forgotten, in discharge summaries that arrived three weeks late, in
          medication lists that contradicted each other across three different
          systems in four different hospitals spread across three municipalities
          in western Sweden.
        </Paragraph>

        <Paragraph>
          Her granddaughter Sara was a nurse at Sahlgrenska. She had watched
          the problem from the inside for eleven years — watched it not as an
          abstraction but as a living, daily failure. The wrong insulin dose
          because the endocrinologist didn&apos;t know the nephrologist had
          changed something. The physiotherapy appointment cancelled because
          nobody had updated the shared calendar that nobody actually shared.
          Sara saw it clearly. She just couldn&apos;t fix it. The systems
          didn&apos;t talk. The systems had never been designed to talk. They
          had been designed to be correct in isolation, which is a different
          thing entirely.
        </Paragraph>

        <Paragraph>
          Then Sara discovered Life Atlas. She was sceptical — she&apos;d seen
          enough wellness apps to know the distance between a demo and a ward.
          But Life Atlas didn&apos;t ask Ingrid to change anything. It asked
          her Careium pendant to do more. The pendant Ingrid already wore, the
          small white disc around her neck that had been there for two years,
          the one she wore for fall detection and for Sara&apos;s peace of
          mind — that pendant became the seed of something else.
        </Paragraph>

        <Paragraph>
          Not a medical record. Something quieter and more continuous than
          that. A stream. Movement patterns through the day. Sleep architecture
          through the night. Heart rate variability across seasons. Room
          temperature correlated with mood indicators. How long it took Ingrid
          to answer the door, measured not once but thousands of times,
          averaged and trended and watched for the slow drift that nobody else
          was watching for. The pendant stopped being a safety net. It started
          being a mirror.
        </Paragraph>

        <Paragraph>
          Ingrid didn&apos;t notice. She noticed that the basil on her
          windowsill was doing better this year. She noticed that Sara called
          more often. She didn&apos;t notice that her loneliness was, for the
          first time in years, being seen.
        </Paragraph>

        <Paragraph keyLine>
          She had seventeen doctors and none of them knew she was lonely.
        </Paragraph>

        {/* ── Chapter II ── */}
        <ChapterDivider
          year="2031"
          chapter="Chapter II"
          title="The Invisible Wall"
        />

        <Paragraph>
          Sara spent most of 2031 trying to connect things that did not want
          to be connected. The Swedish healthcare system had twenty-one
          regions. Each region had its own Electronic Health Record system.
          Some of those systems were ten years old. Some were twenty-five.
          They spoke different dialects of HL7, different versions of FHIR,
          different internal ontologies that had grown organically from
          different administrative decisions made by different committees in
          different decades. Getting a blood test result from one hospital to
          another took three weeks — by post, sometimes literally by post,
          because the digital channel didn&apos;t trust the other digital
          channel&apos;s authentication protocol.
        </Paragraph>

        <Paragraph>
          The wall between the systems was not visible. It didn&apos;t look
          like a wall. It looked like a form to fill in, a login screen, a
          privacy notice, a checkbox, a waiting period. It looked like
          bureaucracy. It looked like caution. It looked, from the inside,
          exactly like responsible data governance. But from the outside — from
          the position of Ingrid, who simply wanted her seventeen doctors to
          know what the others knew — it was a wall so complete and so
          invisible that most people didn&apos;t know it existed until they
          ran into it in a crisis.
        </Paragraph>

        <Paragraph>
          Life Atlas didn&apos;t try to reform the system. It had learned from
          decades of failed health informatics initiatives that the system
          would not be reformed from inside. Instead it went around it.
          Edge-native by design. Ingrid&apos;s twin didn&apos;t live on a
          server in Stockholm. It lived on her device, in her home, in her
          pendant, in the small hub on her kitchen counter that had replaced
          her old router. The data didn&apos;t need to move between hospitals.
          Ingrid carried her context with her. When she saw a new doctor, she
          shared her twin — or the relevant layer of it — directly, in a
          format that the doctor&apos;s system could read because Life Atlas
          had built adapters for all twenty-one regional formats. Not a
          solution. A translation layer. A bridge over the wall, not a
          demolition of it.
        </Paragraph>

        <Paragraph>
          The twin became Ingrid&apos;s portable medical context. Not a
          record — records are static, records are past tense. A context. A
          living document of who she was right now, updated continuously,
          owned entirely by her, shared only when and how she chose to share
          it. For the first time in her life, Ingrid walked into a hospital
          appointment and the doctor on the other side of the desk knew
          something real about her before she opened her mouth.
        </Paragraph>

        <Paragraph keyLine>
          The wall between you and your health wasn&apos;t built by doctors.
          It was built by databases.
        </Paragraph>

        {/* ── Chapter III ── */}
        <ChapterDivider
          year="2034"
          chapter="Chapter III"
          title="The Quiet Emergency"
        />

        <Paragraph>
          It wasn&apos;t a fall. Ingrid hadn&apos;t fallen. Her vitals were
          stable, her blood pressure within the range her cardiologist
          considered acceptable, her weight unchanged to within half a
          kilogram. There was no emergency. There was nothing anyone would
          have noticed.
        </Paragraph>

        <Paragraph>
          But the twin had been watching for six years. It had learned
          Ingrid&apos;s patterns the way a long marriage learns them — not by
          study, but by presence. When she woke. How long before she moved
          from bedroom to kitchen. How quickly she answered the door on the
          first ring versus the second. How far she walked on Tuesdays, which
          had always been her good day, the day she went to the market. The
          twin had a model of Ingrid that was more granular than anything in
          her medical records, because her medical records contained what had
          happened at appointments, which was perhaps four hours of data per
          year. The twin contained everything else.
        </Paragraph>

        <Paragraph>
          And the pattern was changing. Slowly. Over eight weeks. The Tuesday
          walk had shortened by fourteen percent. The kitchen-to-bedroom
          evening time had extended — she was moving more slowly at the end of
          the day. The door response time had drifted up. None of these things
          was alarming in isolation. Together, over time, with the confidence
          of a model trained on 2,190 days of continuous observation, they
          formed a signature. The twin had seen this signature in the
          aggregated data of 340,000 other seniors. It knew what it meant. It
          was called pre-frailty — the insidious, gradual, almost imperceptible
          decline that preceded the crisis everyone would eventually see.
        </Paragraph>

        <Paragraph>
          The twin&apos;s recommendation was not medication. It was a walking
          group that met on Tuesday and Thursday mornings at the community
          centre three blocks from Ingrid&apos;s apartment. The group was led
          by a retired physiotherapist. It had eleven regular members, average
          age 79. The twin had cross-referenced Ingrid&apos;s social
          isolation score — derived from visitor frequency, call duration
          patterns, and time spent in communal spaces — with outcome data from
          similar interventions. It knew that the walking group would address
          both the physical trajectory and the psychological one. It knew
          because the data said so, plainly, across hundreds of thousands of
          cases.
        </Paragraph>

        <Paragraph>
          Ingrid&apos;s doctor would never have prescribed &quot;go talk to
          people.&quot; It was not a prescription. It was not billable. It
          was not in any clinical pathway for a patient with stable vitals and
          no presenting complaint. The twin prescribed it anyway.
        </Paragraph>

        <Paragraph>
          Ingrid joined the group in October. By Christmas her Tuesday walk
          had returned to its baseline. By the following spring it had
          exceeded it.
        </Paragraph>

        <Paragraph keyLine>
          The emergency that never happened was the most important one.
        </Paragraph>

        {/* ── Chapter IV ── */}
        <ChapterDivider
          year="2040"
          chapter="Chapter IV"
          title="515,000 Pendants"
        />

        <Paragraph>
          Careium had 515,000 users across Scandinavia. For most of its
          history, each of those users was, to the system, an alarm. A fall
          detected. A button pressed. An absence of movement that triggered a
          welfare check. The pendant was a reactive device — it waited for
          something bad to happen and then notified someone.
        </Paragraph>

        <Paragraph>
          In 2040, Careium deployed the twin-enhanced pendant system across
          their entire network. Every pendant became a seed. Not because the
          hardware changed — the hardware was almost identical. Because the
          software layer changed. Because each pendant now fed into a digital
          twin that belonged not to Careium but to the person wearing it.
          Careium had access only to the anonymised aggregate. The twin was
          sovereign.
        </Paragraph>

        <Paragraph>
          The aggregate changed everything. Not because the individual data
          was new — individual health monitoring had existed for decades. But
          because patterns visible at 515,000 individuals were invisible at
          one. Seasonal depression correlated with heating patterns in ways
          that suggested the temperature at which Scandinavian public housing
          was kept in November was a measurable contributor to mental health
          admissions in January. Medication non-compliance — the silent
          epidemic that no doctor&apos;s visit ever caught — correlated at
          0.73 with loneliness scores derived from visitor frequency data.
          Fall risk correlated not with age, not with balance scores, but
          with how many days had passed since the last visitor.
        </Paragraph>

        <Paragraph>
          The system didn&apos;t just detect falls. It identified, at
          population scale, the conditions that preceded falls. Social
          isolation. Heating failure. Disrupted sleep caused by medication
          interactions that no single doctor had the full picture to notice.
          It surfaced these conditions in time for municipalities to act —
          not with individual interventions but with policy interventions. A
          district in Gothenburg changed its community outreach model based
          on twin-derived loneliness data. A municipality in Oslo changed its
          heating maintenance schedule based on pendant temperature
          correlations. Nobody had asked them to. The data made it obvious.
        </Paragraph>

        <Paragraph>
          Healthcare costs for twin-enhanced users dropped 28% in the first
          two years. Not because the technology was magic. Because prevention,
          it turned out, was exactly as effective as the evidence had always
          said it was — it had simply never had a delivery mechanism capable
          of operating continuously, across a whole population, without
          requiring anyone to do anything different.
        </Paragraph>

        <Paragraph keyLine>
          The pendant stopped being an alarm. It became a companion.
        </Paragraph>

        {/* ── Chapter V ── */}
        <ChapterDivider
          year="2049"
          chapter="Chapter V"
          title="Ingrid&apos;s Garden"
        />

        <Paragraph>
          Ingrid was 104. She had outlived her doctor&apos;s predictions by
          twenty years, which her doctor — she was on her sixth now, the others
          having retired or moved — considered extraordinary. Ingrid did not
          consider it extraordinary. She considered it a consequence of paying
          attention, though she could not have said exactly what had paid
          attention or to what.
        </Paragraph>

        <Paragraph>
          She had a garden. Not a real garden — she lived in a one-bedroom
          flat on the fourth floor of a building in Majorna, the same flat
          she had moved into in 2019, the year her husband died. But her
          balcony held four raised beds, a grow light on a timer, and a small
          sensor array connected to her twin through the CPI — the
          Consumer Plant Interface, the protocol that had emerged from the
          work that started in a different apartment, in a different part of
          Gothenburg, more than twenty years earlier.
        </Paragraph>

        <Paragraph>
          The plants grew what her body needed. Not in a way that Ingrid
          directed — she could barely read her phone anymore, though it read
          to her quite well — but in a way that the system directed, quietly,
          through soil moisture adjustments and nutrient dosing and grow-light
          spectrum tuning that happened while she slept. The herbs in her
          morning tea were tuned to her current inflammatory markers, which
          the pendant measured continuously through photoplethysmography and
          a skin-contact biosensor no larger than a watch face. The tomatoes
          on her windowsill had been optimised over three growing seasons for
          her specific vitamin K metabolism — her twin had learned, from nine
          years of blood-work correlation data, that her body processed K2
          from food more efficiently than from supplements, and that the
          conversion rate varied with gut microbiome composition in ways that
          the soil amendment in her tomato bed was now directly compensating
          for.
        </Paragraph>

        <Paragraph>
          She didn&apos;t know about LPI or CPI or digital twins or
          photoplethysmography or vitamin K metabolism. She didn&apos;t know
          about the loop that had started with a different basil plant, in a
          different flat, in the same city, back when the world was still
          trying to figure out whether plants and people could talk to each
          other through the same system. She knew that the basil tasted
          better than anything she had ever grown. She knew that she felt
          well. She knew that she was, at 104, still going to the walking
          group on Tuesdays.
        </Paragraph>

        <Paragraph>
          Sara visited on Sundays. They drank the tea. It tasted different
          every week, depending on what Ingrid&apos;s body was doing that
          week, though neither of them knew that. Sara just thought her
          grandmother had finally learned to make tea properly.
        </Paragraph>

        <Paragraph keyLine>
          She didn&apos;t know the platform existed. She just knew the basil
          was perfect.
        </Paragraph>

        {/* ── Chapter VI ── */}
        <ChapterDivider
          year="2084"
          chapter="Chapter VI"
          title="The Last Wall"
        />

        <Paragraph>
          The last silo fell quietly. Not with a policy announcement. Not with
          a technology breakthrough. Not with a summit or a standard or a
          regulation. It fell the way most cultural shifts fall — not when
          someone knocks the wall down, but when the generation that built
          the wall is no longer the generation that has to live with it.
        </Paragraph>

        <Paragraph>
          Ingrid&apos;s great-great-granddaughter was 30 years old in 2084.
          Her name was Astrid and she was a physician, which Ingrid would
          have found unlikely and Ingrid&apos;s granddaughter Sara would have
          found inevitable. Astrid had never known fragmented care. She had
          been born into a twin-pair household — her mother had enrolled her
          at birth, which was the default by then, the opt-out rather than
          the opt-in. Her health context had been continuous since her first
          breath. It followed her across every clinician, every city, every
          country she had ever visited. It was as unremarkable to her as
          the fact that her phone knew her calendar.
        </Paragraph>

        <Paragraph>
          In her medical history class at university, Astrid had encountered
          the concept of the &quot;medical record&quot; — the paper file, the
          siloed database, the fragmented system that her great-great-great
          grandmother had navigated with seventeen doctors and a pendant and
          eventually, against all institutional odds, a solution. She had
          found it incomprehensible. Not technically — she understood the
          technical reasons perfectly. But humanly. The idea that a system
          would be designed to know things about you without letting you know
          that it knew, or letting you share what it knew, or letting the
          people treating you know what the other people treating you knew —
          it struck her as a kind of organised forgetting. A system that had
          been built to protect data and had ended up protecting it from the
          people the data was about.
        </Paragraph>

        <Paragraph>
          She read about it the way Ingrid had read about the world before
          smartphones — with the patient incomprehension of someone who had
          never needed to learn the thing that used to be necessary, who
          could not quite reconstruct the cognitive steps that had made it
          seem normal.
        </Paragraph>

        <Paragraph>
          The walls hadn&apos;t fallen because the technology made them
          impossible. The technology had been ready decades before the walls
          fell. They hadn&apos;t fallen because regulators required it or
          because industry consolidated around it or because someone finally
          got the EHR systems to talk to each other. None of those things had
          happened cleanly. The walls had fallen because the people who
          remembered building them — who remembered the reasons, who carried
          the institutional memory of why each brick had been placed — had
          retired. And the generation that replaced them had never been
          taught that the bricks were necessary, because they&apos;d never
          seen the world the bricks were supposed to protect.
        </Paragraph>

        <Paragraph>
          Cultures change one generation at a time. Not faster. Not slower.
          The last silo was never a technical problem. It was the oldest
          problem of all. It was a story that the old world told itself about
          why things had to be the way they were, passed down until the day
          it reached someone young enough to ask why — and old enough to do
          something about the answer.
        </Paragraph>

        <Paragraph keyLine>
          The walls didn&apos;t fall. The people who built them retired.
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

/* ═══════════════════════════════════════════════════════════════
   Dedication
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
      <div
        className="flex items-center justify-center gap-6 mb-10"
      >
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
        className="text-xl md:text-2xl italic font-light mt-3 max-w-md mx-auto leading-[1.7]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          color: "var(--color-text-secondary)",
        }}
      >
        For Ingrid. And for every grandmother whose loneliness was invisible
        to the system.
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
   Back link
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
      <a
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
      </a>
    </div>
  );
}
