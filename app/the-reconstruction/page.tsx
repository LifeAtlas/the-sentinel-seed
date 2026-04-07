"use client";
import StoryNav from "../components/StoryNav";

import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface ParagraphProps {
  children: React.ReactNode;
  keyLine?: boolean;
  delay?: number;
}

interface ChapterDividerProps {
  year: string;
  chapter: string;
  title: string;
  voice?: string;
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

function ChapterDivider({ year, chapter, title, voice }: ChapterDividerProps) {
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

      {/* Voice label */}
      {voice && (
        <p
          className="mt-4 text-xs tracking-[0.35em] uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--color-gold-dim)",
            opacity: 0.7,
          }}
        >
          {voice}
        </p>
      )}

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
        For the engineers who stayed, the professors who taught from basements,
        the young who rebuilt what they did not break, and the outsiders who
        learned that showing up is the beginning, not the end.
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
   AuthorNote
   ═══════════════════════════════════════════════════════════════ */

function AuthorNote() {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="mt-20 mb-10 px-6 py-8 transition-all duration-[1400ms] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(16px)",
        border: "1px solid var(--color-border)",
        borderRadius: "4px",
        background: "var(--color-surface)",
      }}
    >
      <p
        className="text-[10px] tracking-[0.4em] uppercase mb-4"
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "var(--color-gold-dim)",
        }}
      >
        Author&apos;s Note
      </p>
      <p
        className="text-sm leading-[1.85]"
        style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}
      >
        The SURE Hub concept, the DigiMuni digital twin platform, the DREAM state ecosystem, and the contextual
        interoperability framework referenced in this story are based on real initiatives in post-conflict Ukrainian
        infrastructure reconstruction. The characters are fictional. The problems they face are not. Air raid alerts
        in Kharkiv occur, on average, every thirty minutes. The gap between damage documentation and funding-ready
        project status remains the critical bottleneck in Ukraine&apos;s reconstruction pipeline. The technology to close
        that gap exists. The people to operate it are being trained. The institutions to sustain it are being built.
      </p>
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

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function TheReconstruction() {
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

          {/* Story label */}
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.5,
            }}
          >
            New Dawn &nbsp;&bull;&nbsp; A novella in twenty chapters
          </p>

          {/* Main title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light mb-5 tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            The Reconstruction
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-10 max-w-md mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Four Lives, Five Time Periods, One City Rebuilding
          </p>

          {/* Author */}
          <p
            className="text-sm mb-16"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.45,
              letterSpacing: "0.15em",
            }}
          >
            by N.W. (Nicolas Waern)
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

        {/* ── I. Olena ── */}
        <ChapterDivider
          year="Kharkiv, 2015"
          chapter="Chapter I"
          title="Olena"
        />

        <Paragraph>
          I am standing in a trench that is not a trench. It is a service corridor for a 600-millimeter water main
          that runs beneath Nauky Avenue, and I am the only person in the municipal water authority who volunteered
          to crawl down here in February. The pipe is cast iron, Soviet-era, installed in 1971.
        </Paragraph>
        <Paragraph>
          The pipe is sweating. Condensation beads on its surface like fever on a forehead. I run my hand along the
          joint where two sections meet and feel the faint irregularity that means the gasket is degrading. I make a
          note. I take a photograph with my phone, holding it close so the flash catches the mineral deposits &mdash;
          white and green, calcium and copper, the signature of a system that has been losing pressure for years while
          the reports say everything is nominal.
        </Paragraph>
        <Paragraph>
          I am twenty-six years old. I have a degree in municipal engineering. My salary is the equivalent of three
          hundred euros a month. My mother asks me every Sunday why I don&apos;t move to Kyiv. I don&apos;t move to Kyiv
          because these pipes are mine. Not legally. Emotionally. I know every joint, every valve, every bypass in
          the northern grid. I know that the pressure drops at 6:14 every morning when the Saltivka district wakes up
          and turns on its taps.
        </Paragraph>
        <Paragraph keyLine>
          Nobody cares about any of this. I love this work. I love it the way you love something that does not love you back.
        </Paragraph>

        {/* ── II. Viktor ── */}
        <ChapterDivider
          year="Kharkiv, 2015"
          chapter="Chapter II"
          title="Viktor"
        />

        <Paragraph>
          I am giving a lecture on public administration reform to forty-three students, of whom perhaps eleven are
          listening. This is an improvement over last Thursday, when the number was nine. I know because I count.
          An academic who does not count his audience is an academic who has already surrendered.
        </Paragraph>
        <Paragraph>
          The lecture concerns the Contextual Interoperability Framework &mdash; a methodology I have spent seven years
          developing and which precisely zero municipal administrators have adopted. The framework analyzes six
          dimensions: legal, organizational, semantic, technical, political, cultural. Each dimension contains nested
          decision nodes. The whole thing, when properly applied, predicts with reasonable accuracy where a reform will
          stall. It stalls, invariably, at the cultural dimension. Technology is easy. People are hard. Institutions are
          people with filing cabinets.
        </Paragraph>
        <Paragraph>
          I published this framework in 2013. It was cited four times. Three of those citations were by myself.
          The fourth was by a graduate student in Tallinn who misspelled my name.
        </Paragraph>
        <Paragraph>
          After the lecture, a student &mdash; Serhii, a bright boy, sixteen, sitting in because his architecture program
          has a public policy elective &mdash; asks me if the framework has ever been used in practice. I tell him it was
          piloted in the Tsyrkuny community as a diagnostic tool. He asks what happened. I tell him the community
          administrators found it illuminating and then proceeded to do exactly what they would have done without it.
          He laughs. I appreciate the laugh. It means he understands.
        </Paragraph>

        {/* ── III. Serhii ── */}
        <ChapterDivider
          year="Kharkiv, 2015"
          chapter="Chapter III"
          title="Serhii"
        />

        <Paragraph>
          I&apos;m going to build things. That&apos;s the secret. Not study things, not write about things. Build.
        </Paragraph>
        <Paragraph>
          Dunayev&apos;s lecture hall smells like radiator dust and cheap floor wax. I&apos;m in the back row because the back
          row has the widest desk and I need it for sketching. Not buildings. My architecture profs want buildings.
          I draw what&apos;s underneath them &mdash; pipe cross-sections, electrical conduit runs, the heating mains that
          keep this city from freezing every November. The invisible city. The one that actually works.
        </Paragraph>
        <Paragraph>
          Dunayev talks about interoperability frameworks. I get maybe sixty percent. The sixty percent says: everything&apos;s
          broken. The forty percent probably says the same thing with more syllables.
        </Paragraph>
        <Paragraph>
          After class, Shevchenko Park. A Khrushchyovka panel block on the corner has a crack running from the third
          floor to the ground, patched with cement that&apos;s a different shade of gray. The building wears its repairs
          like scars. Every building in Kharkiv does. I photograph it. I don&apos;t know why yet.
        </Paragraph>
        <Paragraph keyLine>
          I don&apos;t know yet that in two years, the machine will be taken apart with missiles.
        </Paragraph>

        {/* ── IV. Anna ── */}
        <ChapterDivider
          year="Stockholm, 2015"
          chapter="Chapter IV"
          title="Anna"
        />

        <Paragraph>
          I am debugging a shader in a game engine that renders a building that does not exist yet. The building is a
          school in Hammarby Sjostad, Stockholm&apos;s eco-district, and my job is to make it real before it is real &mdash;
          to create an interactive 3D environment where architects, administrators, parents, and city planners can walk
          through the building, open doors, look out windows, and argue about corridor widths in a space that currently
          exists only as thirty-two million polygons and a very large texture atlas.
        </Paragraph>
        <Paragraph>
          I work for a GovTech company. We are seven people. Our office is in Sodermalm and our ambitions are
          Scandinavian, which means moderate in volume and immoderate in scope. We believe that 3D visualization will
          transform how public institutions make decisions.
        </Paragraph>
        <Paragraph>
          The shader is misbehaving because of a normal map that one of our 3D artists generated with inverted green
          channels. This is the kind of problem that takes four hours to find and four seconds to fix. I find it.
          I fix it. I do not feel heroic. I feel like a person who spent four hours looking at the wrong shade of gray.
        </Paragraph>
        <Paragraph>
          I have never been to Ukraine. I could not find Kharkiv on a map. If you told me that in fifteen years
          I would be standing in a bombed-out municipal building in that city, showing a woman named Olena how to
          create a digital twin of a destroyed water main, I would assume you were describing a movie I would not watch.
        </Paragraph>

        {/* ── V. Olena 2020 ── */}
        <ChapterDivider
          year="Kharkiv, 2020"
          chapter="Chapter V"
          title="The Northern Grid"
          voice="Olena"
        />

        <Paragraph>
          The northern grid upgrade is approved. Three years of reports, two changes of deputy director, one change
          of mayor, and finally &mdash; the authorization to replace 4.2 kilometers of cast iron with high-density
          polyethylene. I stand in the project office and look at the plans spread across the table and feel something
          I do not have a word for in Ukrainian. In English it might be &ldquo;vindication.&rdquo; In engineering it is
          simply: the data was correct and now someone acted on it.
        </Paragraph>
        <Paragraph>
          My team is four people: two experienced technicians who know the physical grid better than they know their
          wives, and two recent graduates who know software better than they know pipe fittings. We are, in our way,
          a bridge between two centuries.
        </Paragraph>

        {/* ── VI. Viktor 2020 ── */}
        <ChapterDivider
          year="Kharkiv, 2020"
          chapter="Chapter VI"
          title="The Cultural Dimension"
          voice="Viktor"
        />

        <Paragraph>
          The European Union has funded a digitalization initiative for Ukrainian municipal governance. Excellent.
          The initiative requires participating municipalities to adopt standardized data formats for infrastructure
          reporting. Also excellent. The standardized formats were designed by a consulting firm in Brussels that has
          never visited Kharkiv, do not accommodate the legal distinctions in Ukrainian municipal law, and require data
          fields that no Ukrainian municipality actually collects.
        </Paragraph>
        <Paragraph>
          I write a fourteen-page analysis of the incompatibilities. I present it to the regional administration.
          They thank me. They forward it to the Ministry. The Ministry acknowledges receipt. The consulting firm in
          Brussels revises the format. The revision adds three new fields and removes none of the incompatible ones.
        </Paragraph>
        <Paragraph keyLine>
          This is what I mean by the cultural dimension. The technology works. The legal framework exists. And still it fails.
        </Paragraph>

        {/* ── VII. Serhii 2020 ── */}
        <ChapterDivider
          year="Kharkiv, 2020"
          chapter="Chapter VII"
          title="The Infrastructure Model"
          voice="Serhii"
        />

        <Paragraph>
          I show Professor Dunayev my infrastructure model. He looks at it for a long time. He asks me how I built it.
          I tell him: open-source GIS data, a game engine for rendering, public records for pipe diameters and
          installation dates. He says, &ldquo;This is what the EU consultants should be building instead of forms.&rdquo;
          He means it.
        </Paragraph>
        <Paragraph>
          I am twenty-one. I have two years left in the architecture program. I can feel it &mdash; not because it&apos;s
          technically impressive, but because it represents a way of seeing the city that nobody is offering. The architects
          see facades. The engineers see pipes. The administrators see spreadsheets. Nobody sees the whole thing.
        </Paragraph>

        {/* ── VIII. Anna 2020 ── */}
        <ChapterDivider
          year="Stockholm, 2020"
          chapter="Chapter VIII"
          title="One Reality"
          voice="Anna"
        />

        <Paragraph>
          We are experimenting with game-engine digital twins for an existing building &mdash; a school heating system
          in Uppsala. The building manager can enter the 3D environment, navigate to the mechanical room, and see
          real-time temperature data overlaid on the actual geometry of the pipes and radiators. When a valve fails,
          it turns red in the model before anyone in the building notices the temperature drop.
        </Paragraph>
        <Paragraph>
          This is the methodology in action &mdash; we create a shared visual reality where all stakeholders work with
          the same model. No more spreadsheets interpreted differently by different people. One reality.
          Multiple perspectives.
        </Paragraph>
        <Paragraph>
          I read a news article about the war in eastern Ukraine. I feel the appropriate Scandinavian empathy, which
          is sincere and also abstract. I think about those buildings being damaged and wonder, briefly, whether anyone
          is documenting what is lost. Then I close the article and return to my shader.
        </Paragraph>

        {/* ── IX. Olena 2025 ── */}
        <ChapterDivider
          year="Uzhhorod, 2025"
          chapter="Chapter IX"
          title="Displacement"
          voice="Olena"
        />

        <Paragraph>
          The air raid alert sounds at 4:17 AM. I know the exact time because I check my phone before I move, an
          absurd habit that persists because habits are the last things to die. I am in Uzhhorod &mdash; not my city,
          not my basement. I am a thousand kilometers from my pipes.
        </Paragraph>
        <Paragraph>
          The northern grid I rebuilt &mdash; my grid, my four-point-two kilometers of polyethylene, my eighteen months
          of work &mdash; was severed in three places by missile strikes in March 2022. The Saltivka district no longer
          has running water in most buildings. The treatment plant on Shevchenko Street took a direct hit.
        </Paragraph>
        <Paragraph>
          I have a folder on my phone of photographs from the northern grid project. I look at them sometimes, the way
          you look at photographs of a person who has died &mdash; not to remember what they looked like, but to confirm
          that they existed.
        </Paragraph>
        <Paragraph keyLine>
          Human adaptability is not a virtue. It is a scar.
        </Paragraph>

        {/* ── X. Viktor 2025 ── */}
        <ChapterDivider
          year="Kharkiv, 2025"
          chapter="Chapter X"
          title="Teaching from Basements"
          voice="Viktor"
        />

        <Paragraph>
          I am teaching a lecture on institutional resilience from the basement of the Faculty of Law building.
          The air raid alert has been active for forty minutes. Eleven students. Three are in uniform. Two attend
          via a laptop propped on a chair, transmitting from displacement locations in western Ukraine. The connection
          drops every few minutes. Nobody comments on this. It is simply how education works now.
        </Paragraph>
        <Paragraph>
          I document everything. Not for the journal. For later. I have a notebook &mdash; actual paper, because the
          power goes out and laptops die and paper survives &mdash; in which I record every institutional adaptation I
          observe. How the university maintained accreditation while teaching from basements. How neighborhood committees
          emerged to manage generators and water distribution without any formal charter.
        </Paragraph>
        <Paragraph>
          Because reconstruction is not building things again. It is building institutions that can build things again.
        </Paragraph>

        {/* ── XI. Serhii 2025 ── */}
        <ChapterDivider
          year="Kharkiv, 2025"
          chapter="Chapter XI"
          title="The Hard Drive"
          voice="Serhii"
        />

        <Paragraph>
          Half a degree. No future. Not self-pity &mdash; arithmetic.
        </Paragraph>
        <Paragraph>
          The Academy suspended in-person in 2022. Online classes continued, technically, but try learning architecture
          through a laptop screen in a room where the power dies three times a day and the Wi-Fi drops whenever something
          hits the grid. I stopped attending. Didn&apos;t formally withdraw. Just stopped. The way you stop when the reasons
          evaporate &mdash; not a decision, an accumulation of non-decisions until the absence is the decision.
        </Paragraph>
        <Paragraph>
          Back in Kharkiv. Ma&apos;s apartment. My childhood bedroom with the Zaha Hadid poster still on the wall. I sleep
          under it while my city&apos;s buildings get taken apart by Shaheds.
        </Paragraph>
        <Paragraph>
          The alert goes off at 5:20 AM. My phone says &ldquo;aerial threat.&rdquo; I roll over and count. The thump comes
          fourteen seconds later &mdash; far, east side, probably Saltivka again. The all-clear at 5:47. Then another alert
          at 6:12. This is the rhythm. This is the clock the city runs on now. Not hours and minutes but intervals and impacts.
        </Paragraph>
        <Paragraph>
          The hard drive is in my backpack. The infrastructure model. I carry it everywhere and never open it.
          The data describes a city that doesn&apos;t exist anymore &mdash; water network reconfigured by missiles, power
          grid held together with tape and prayers, heating on emergency generators. My beautiful model is a photograph
          of a corpse.
        </Paragraph>
        <Paragraph keyLine>
          I keep it anyway. Storage is cheap. Hope is cheaper.
        </Paragraph>

        {/* ── XII. Anna 2025 ── */}
        <ChapterDivider
          year="Stockholm, 2025"
          chapter="Chapter XII"
          title="The Gap"
          voice="Anna"
        />

        <Paragraph>
          I see the gap. Not all at once. Understanding arrives in layers.
        </Paragraph>
        <Paragraph>
          First layer: a conference in Copenhagen on post-disaster reconstruction. The keynote &mdash; World Bank
          infrastructure specialist, the kind of person who has seen everything and shows it in the flatness of her
          delivery &mdash; puts up a slide. One slide. A timeline: damage documentation to funding-ready project status
          for a water treatment plant in eastern Ukraine. Fourteen months. I stare at it. Fourteen months from &ldquo;this
          is destroyed&rdquo; to &ldquo;here is the paperwork to fix it.&rdquo; Not because the money isn&apos;t there &mdash;
          fifty billion euros committed through the EU facility alone. Because somebody has to physically go to the
          destroyed asset, assess it, classify it, cost it, format it for whichever donor institution will fund it.
          And there are not enough people to do that work.
        </Paragraph>
        <Paragraph>
          Fourteen months. I write the number in my notebook and underline it twice.
        </Paragraph>
        <Paragraph>
          Second layer: back in Stockholm, staring at our platform. We build 3D twins of buildings so people can make
          decisions. What if the building is destroyed? What if the decision is not &ldquo;paint the corridor blue&rdquo;
          but &ldquo;rebuild the water supply for three hundred thousand people&rdquo;?
        </Paragraph>
        <Paragraph>
          Third layer: a paper. Dense, academic, exactly right. A professor at a Ukrainian university on why
          international reconstruction tools fail when they ignore local institutional context. The paper reads like
          a post-mortem written before the patient died. Legal dimensions, organizational dimensions, cultural
          dimensions. All the things our 3D models cannot render but that determine whether a project succeeds or
          dies in a filing cabinet.
        </Paragraph>
        <Paragraph>
          I email him. He replies in two hours. Brief, formal, more insight per sentence than most white papers I&apos;ve read.
          His name is Viktor. He is still in Kharkiv. Still teaching from basements.
        </Paragraph>

        {/* ── XIII. Olena 2030 ── */}
        <ChapterDivider
          year="Kharkiv, 2030"
          chapter="Chapter XIII"
          title="The Return"
          voice="Olena"
        />

        <Paragraph>
          The hub is a repurposed warehouse on Haharina Avenue. When I walk in, the first thing I notice is the
          sound: the hum of GPU workstations overlaid on the distant thud of generators. The second thing is the
          smell &mdash; concrete dust and fresh coffee. The third is a 3D model running on a wall-mounted monitor: a water
          treatment facility, destroyed, rendered in precise geometry, damage annotations floating around it like a
          surgeon&apos;s notes on an X-ray.
        </Paragraph>
        <Paragraph>
          I understand within my first week. Not the technology &mdash; the methodology. The systematic approach to a
          problem I have only ever seen from inside the pipe.
        </Paragraph>
        <Paragraph>
          My first assignment: the northern water grid. My grid.
        </Paragraph>
        <Paragraph>
          Tuesday morning, Saltivka. The alert sounds at 8:03. I crouch against a building wall, tablet pressed to
          my chest, counting. The impact is east, maybe two kilometers. Car alarms. Then silence, then the all-clear
          at 8:31. I stand up, brush grit off my jacket, open the capture interface.
        </Paragraph>
        <Paragraph>
          The junction of Heroiv Pratsi and Buchmy. The pipe has sheared at the bell joint &mdash; Category 3,
          structural failure. I photograph it with a steadiness that surprises me, because this is the exact point
          where I predicted stress concentration twelve years ago. I wrote it in a report. The report went into a cabinet.
        </Paragraph>
        <Paragraph>
          The interval between alerts &mdash; twenty, thirty minutes &mdash; becomes the unit of work. Not hours. Intervals.
          You learn to think in them. How many captures fit between sirens.
        </Paragraph>
        <Paragraph keyLine>
          By Friday: forty-seven damaged assets documented. Fifteen to twenty minutes each. Under the old system, each would take an engineer two to three days.
        </Paragraph>

        {/* ── XIV. Viktor 2030 ── */}
        <ChapterDivider
          year="Kharkiv, 2030"
          chapter="Chapter XIV"
          title="The Framework Applied"
          voice="Viktor"
        />

        <Paragraph>
          I am, officially, the institutional methodology lead. This means I ensure that the technology platform
          &mdash; a Swedish game-engine digital twin system married to local engineering knowledge &mdash; does not crash
          against the same institutional barriers that have wrecked every previous reform I have observed in thirty
          years of observation.
        </Paragraph>
        <Paragraph>
          My Contextual Interoperability Framework, the one that was cited four times, is now the diagnostic tool
          applied before any pilot deployment begins. Before the field teams go out with their tablets, I conduct a
          Rapid Institutional Assessment of the target community. The assessment takes two days and prevents three
          months of failures.
        </Paragraph>
        <Paragraph>
          The Swedish woman, Anna, understands something that most technologists do not: technology is a tool,
          not a solution. The solution is the institutional fabric that allows the tool to function. She and I have
          arguments that are productive. She pushes for faster deployment. I push for deeper assessment.
          We meet in the middle, which is where progress lives.
        </Paragraph>

        {/* ── XV. Serhii 2030 ── */}
        <ChapterDivider
          year="Kharkiv, 2030"
          chapter="Chapter XV"
          title="The Training Program"
          voice="Serhii"
        />

        <Paragraph>
          Twenty-nine. Don&apos;t know how I got here. Standard condition for someone whose life was rearranged by
          forces they didn&apos;t pick, who found &mdash; against all arithmetic &mdash; that the rearrangement led somewhere.
        </Paragraph>
        <Paragraph>
          Ma brought the flyer home from the station. Training program, eight weeks, digital infrastructure assessment.
          She put it on the kitchen table and said nothing. Next morning, still there. Third morning, I picked it up.
          Ma&apos;s silence is louder than most people&apos;s arguments.
        </Paragraph>
        <Paragraph>
          Week one: field capture. Tablets, standardized angles, damage classification. Intuitive &mdash; I&apos;ve been staring
          at broken buildings for three years. What changes is the lens. Not &ldquo;this is broken&rdquo; but &ldquo;this is broken
          in this specific way, which means this cause, this severity, this recovery path.&rdquo; The alert sounds during our
          first field exercise and the Swedish trainer freezes. The rest of us &mdash; all locals &mdash; just shift to cover
          and keep talking. He learns. The interval is the unit of work.
        </Paragraph>
        <Paragraph>
          Week two: the 3D platform. This is where everything clicks. Game-engine visualization &mdash; walk through a
          damaged building from any angle, data layers mapped to geometry. It&apos;s my model. The one from the hard drive.
          Scaled up, made professional, populated with real data instead of my guesses. My hands already know this language.
        </Paragraph>
        <Paragraph>
          Olena teaches me the physical layer. She stops at a junction and points down.
        </Paragraph>
        <Paragraph>
          &ldquo;This joint. I filed a report on it in 2015. Gasket was degrading. They filed the report. Joint failed 2018.
          Replaced. Destroyed 2022. Emergency repair used the wrong fitting.&rdquo;
        </Paragraph>
        <Paragraph>
          &ldquo;How long will it hold?&rdquo;
        </Paragraph>
        <Paragraph>
          &ldquo;Eighteen months. Maybe.&rdquo;
        </Paragraph>
        <Paragraph>
          She looks at me the way she looks at everything &mdash; flat, precise, patient. &ldquo;The obvious damage is dramatic.
          The invisible damage is fatal.&rdquo;
        </Paragraph>
        <Paragraph>
          Week eight: a job. Not a certificate &mdash; a salary. Health insurance. Colleagues who build things instead of
          defending things. The diesel-and-solder smell of generator work replaced by concrete dust and coffee.
        </Paragraph>
        <Paragraph keyLine>
          I stop carrying the hard drive. The dream wasn&apos;t dead. It was interrupted. Now it&apos;s a job, which is better than a dream because a job has a paycheck and deadlines and colleagues who depend on you showing up when the all-clear sounds.
        </Paragraph>

        {/* ── XVI. Anna 2030 ── */}
        <ChapterDivider
          year="Kharkiv, 2030"
          chapter="Chapter XVI"
          title="The City in the Intervals"
          voice="Anna"
        />

        <Paragraph>
          I arrive in Kharkiv on a Thursday. I expected devastation. There is devastation. But the city is not its
          wounds. The city is the people walking to work in the intervals between air raid alerts. The city is the
          metro, which has not stopped running since the full-scale invasion. The city is the coffee shop on Sumska
          Street where the barista knows my colleague Phil&apos;s order and makes it without asking.
        </Paragraph>
        <Paragraph>
          Olena walks me through the northern water grid on a Saturday morning. She points to a junction and says,
          &ldquo;This gasket was degrading in 2015. I filed a report. The report was filed. The gasket failed in 2018.
          It was replaced. The replacement was destroyed in 2022. The emergency repair used an incompatible fitting.
          It will fail within two years.&rdquo; She says this with the flat precision of someone stating weather
          observations. There is no bitterness in her voice. There is something harder than bitterness: certainty.
        </Paragraph>
        <Paragraph>
          The first documentation packages from the full 3D deployment go out within two weeks. An engineering firm
          in Kyiv reports that the packages reduce their preliminary assessment phase by seventy percent.
          They order forty more.
        </Paragraph>
        <Paragraph keyLine>
          The technology is the vehicle. The people are the engine.
        </Paragraph>

        {/* ── XVII. Olena 2035 ── */}
        <ChapterDivider
          year="Kharkiv, 2035"
          chapter="Chapter XVII"
          title="Training Daryna"
          voice="Olena"
        />

        <Paragraph>
          I am training a woman named Daryna who reminds me of myself at twenty-six: precise, impatient, unreasonably
          attached to infrastructure that will never thank her.
        </Paragraph>
        <Paragraph>
          The hub has processed over two thousand documentation packages since 2030. These packages have fed into
          more than eight hundred reconstruction projects through the DREAM ecosystem. What began as a pilot in three
          communities now serves fifteen municipalities in four oblasts.
        </Paragraph>
        <Paragraph>
          The northern water grid is rebuilt. Not as I designed it in 2015 &mdash; better. The new system incorporates
          lessons from the destruction: distributed supply with redundant pathways, smart valves with remote monitoring,
          materials that survive blast overpressure. The digital twin of the new grid lives in our platform,
          continuously updated, a living document of infrastructure that will serve Kharkiv for fifty years.
        </Paragraph>

        {/* ── XVIII. Viktor 2035 ── */}
        <ChapterDivider
          year="Kharkiv, 2035"
          chapter="Chapter XVIII"
          title="The Framework Travels"
          voice="Viktor"
        />

        <Paragraph>
          My methodology is taught in five countries. I find this alternately gratifying and alarming. Gratifying
          because the framework works. Alarming because academic adoption always involves simplification, and my
          framework resists simplification the way a river resists being put in a pipe.
        </Paragraph>
        <Paragraph>
          My department has thirty-two students this year. Six of them are international &mdash; from Moldova, Georgia,
          Bangladesh, Colombia &mdash; who have come specifically to study post-conflict institutional reconstruction
          because this is now the only university in the world that teaches it from direct experience.
        </Paragraph>
        <Paragraph>
          I am sixty-four years old. My knees have not improved. I am, despite everything, content. Not satisfied
          &mdash; satisfaction is for people who have stopped paying attention. But content, in the sense that the work
          I have done has mattered, and the work that remains will be done by people I have trained.
        </Paragraph>

        {/* ── XIX. Serhii 2035 ── */}
        <ChapterDivider
          year="Odesa, 2035"
          chapter="Chapter XIX"
          title="The Third Hub"
          voice="Serhii"
        />

        <Paragraph>
          I am standing in a building that will, in four days, be the third hub in the network. This one is mine.
          I do not mean I own it. I mean I operate it.
        </Paragraph>
        <Paragraph>
          My team is twelve people. Four are hub veterans from Kharkiv who transferred. Eight are local. Three of the
          eight are former architecture students whose education was interrupted by the war. I know what that interruption
          feels like. I know what it feels like when someone says &ldquo;your skills matter&rdquo; after years of being told,
          by circumstance, that they don&apos;t.
        </Paragraph>
        <Paragraph>
          I think about the hard drive. The one with the old infrastructure model. I found it last year, in a box
          in my mother&apos;s apartment. I opened the files. The model was crude. The data was wrong. But the logic was
          right. The idea that a city is a system, and that understanding the system is the first step to rebuilding it
          &mdash; that idea was correct. I was twenty-one when I had it. It took a war and a hub and a British director
          and a Swedish technologist and a Ukrainian professor and a water engineer who never smiles to make it real.
        </Paragraph>
        <Paragraph keyLine>
          I did not become an architect. I became something that does not have a name yet.
        </Paragraph>

        {/* ── XX. The Opening ── */}
        <ChapterDivider
          year="Odesa, 2035"
          chapter="Chapter XX"
          title="The Opening"
        />

        <Paragraph>
          <em style={{ color: "var(--color-gold-dim)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1em" }}>Olena:</em>
        </Paragraph>
        <Paragraph>
          I arrive in Odesa the night before. At the hub, the field equipment is the new model &mdash; lighter, faster,
          with an improved capture interface that Serhii&apos;s team designed. I notice they have adopted my photo angle
          protocol for underground infrastructure. He doesn&apos;t mention this. I don&apos;t ask. Engineers communicate
          through standards, not words.
        </Paragraph>
        <Paragraph>
          I think about the pipe under Nauky Avenue &mdash; the Soviet cast iron with the sweating gasket, the one I
          photographed in 2015 in a trench that was not a trench. That pipe is gone. The grid it served was destroyed
          and rebuilt and is now monitored by a digital twin that lives in a platform I helped create. My photograph
          from 2015 is irrelevant. The knowledge it represented is not.
        </Paragraph>
        <Paragraph>
          I stand in the doorway and look at the sea. The salt air is doing things to the door hinges that I make
          a mental note to address. I feel something I have not felt since 2020, when the northern grid upgrade was
          approved. Not vindication. Not hope. The engineering certainty that a well-designed system, properly
          maintained, will function. It is a small feeling. It is enough.
        </Paragraph>

        <Paragraph>
          <em style={{ color: "var(--color-gold-dim)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1em" }}>Viktor:</em>
        </Paragraph>
        <Paragraph>
          Eighteen guests for the opening. Not many by conference standards. But these are not conference people.
          They are the Odesa regional administration&apos;s infrastructure director, representatives from four engineering
          firms, two delegates from the European Investment Bank&apos;s Kyiv office, three community heads from pilot
          municipalities, the vice-rector of the local polytechnic, and &mdash; this surprises me &mdash; two researchers
          from Nairobi who are studying the model for potential application in East Africa.
        </Paragraph>
        <Paragraph>
          I look around the room and see the shape of what we have built. It is not a building. It is not a platform.
          It is not a methodology. It is the intersection of all three &mdash; a system that functions because each
          component respects the others. The technology does not override the institutional context. The institutional
          context does not block the technology. The training creates people who understand both.
        </Paragraph>
        <Paragraph>
          When a framework works, it becomes invisible &mdash; the way grammar disappears into speech, the way plumbing
          disappears into water.
        </Paragraph>

        <Paragraph>
          <em style={{ color: "var(--color-gold-dim)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1em" }}>Serhii:</em>
        </Paragraph>
        <Paragraph>
          Phil said I should give a speech. Viktor said something about institutional ceremonies. Olena said nothing.
          Anna texted: &ldquo;Short. Engineers don&apos;t listen.&rdquo;
        </Paragraph>
        <Paragraph>
          So I stand in front of this room &mdash; my room, my hub, five years traced back to eight weeks traced back
          to a flyer on a kitchen table &mdash; and I say:
        </Paragraph>
        <Paragraph>
          &ldquo;This hub exists because damage exists. We didn&apos;t choose the damage. We choose what we do with it.
          Seven days. That&apos;s the gap now &mdash; from field capture to a funding-ready package. It was fourteen months.
          Every day we cut from that gap, someone gets their water back sooner. That&apos;s the job.&rdquo;
        </Paragraph>
        <Paragraph>
          I stop. The silence stretches. Then the infrastructure director from the regional administration asks about
          the second-wave assessment timeline, and I know the speech worked because the room has moved past it and
          into the work.
        </Paragraph>
        <Paragraph>
          Viktor nods. Olena checks her tablet. Anna makes a note.
        </Paragraph>

        <Paragraph>
          <em style={{ color: "var(--color-gold-dim)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1em" }}>Anna:</em>
        </Paragraph>
        <Paragraph>
          I think about the shader. 2015. An inverted green channel on a normal map for a school that did not yet
          exist. Four hours to find, four seconds to fix. I did not feel heroic.
        </Paragraph>
        <Paragraph>
          I do not feel heroic now. I feel the satisfaction of having built something that works, and the knowledge
          that it works because of Olena&apos;s hands, Viktor&apos;s patience, and a twenty-nine-year-old who carried a hard
          drive through a war because he couldn&apos;t let go of the idea that a city is a system.
        </Paragraph>
        <Paragraph>
          Serhii&apos;s mother arrives on the evening train. She is small, gray-haired, wearing a coat that is too heavy
          for April in Odesa. She looks at the room &mdash; the workstations, the monitors showing 3D models of damaged
          buildings, the field equipment, the people. She opens her purse and takes out a folded piece of paper. The
          training program announcement from five years ago, creased and soft from being carried. She says something
          in Ukrainian that Serhii does not translate immediately. His eyes are wet. He translates:
        </Paragraph>

        <Paragraph keyLine>
          She says she put it on the table every day for a week before I applied.
        </Paragraph>

        <Paragraph>
          The air raid app buzzes. Odesa alert. The room pauses &mdash; not panic, the practiced calculation of people
          who assess threat the way others check the weather. The hub is rated as a shelter. Everyone stays.
        </Paragraph>
        <Paragraph>
          Serhii&apos;s mother folds the flyer and puts it back in her purse. She does not look afraid. She looks like
          a woman who has carried more important things than paper through worse than this.
        </Paragraph>

        <Paragraph keyLine>
          The alert clears. In the intervals, always, the work continues.
        </Paragraph>

        {/* ════════════════════════════════════════════════
            Dedication
            ════════════════════════════════════════════════ */}
        <DedicationBlock />

        {/* ════════════════════════════════════════════════
            Author's Note
            ════════════════════════════════════════════════ */}
        <AuthorNote />

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
