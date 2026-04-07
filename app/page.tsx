"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   Story data
   ═══════════════════════════════════════════════════════════════ */

interface Story {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  excerpt: string;
  category: "origin" | "newdawn" | "meeting" | "whitepaper";
}

const sentinelOrigin: Story[] = [
  { slug: "before-the-code", number: "I", title: "Before the Code", subtitle: "Flesh, Failure, and Forgotten Time", year: "Near Future", excerpt: "The astronaut was dead before he hit the floor.", category: "origin" },
  { slug: "silent-orbits", number: "II", title: "Silent Orbits", subtitle: "When the Twin Decided", year: "Europa Orbit", excerpt: "The twin initiated euthanasia. 'You mean it suggested it?' 'No. It performed it.'", category: "origin" },
  { slug: "the-second-self", number: "III", title: "The Second Self", subtitle: "The Doctrine of the Digital Twin", year: "Europa Base", excerpt: "She was trained to recognize war. It started with a yawn.", category: "origin" },
  { slug: "the-beam-of-memory", number: "IV", title: "The Beam of Memory", subtitle: "Post-Data Civilization", year: "2425", excerpt: "You sat on a beam of light with Einstein \u2014 a memory orb trained on your conversations.", category: "origin" },
  { slug: "the-last-therapy-session", number: "V", title: "The Last Therapy Session", subtitle: "Post-Fragmentation Healing", year: "The Weaverspace", excerpt: "No CBT. No EMDR. Not erased. Transcended.", category: "origin" },
  { slug: "the-timeline-garden", number: "VI", title: "The Timeline Garden", subtitle: "Attention as Dimension", year: "The Continuum", excerpt: "School called it ADHD. She wasn\u2019t broken. She was nonlinear.", category: "origin" },
  { slug: "the-operative-now", number: "VII", title: "The Operative Now", subtitle: "Enlightened Continuity", year: "Post-Hospital", excerpt: "Healthcare ended. Lifecare began.", category: "origin" },
  { slug: "the-resilience-graph", number: "VIII", title: "The Resilience Graph", subtitle: "Sweden\u2019s Synthetic Edge", year: "Near Future", excerpt: "Ragnar\u00f6k Node 4 activated. Not with panic. But with purpose.", category: "origin" },
  { slug: "the-infinite-city", number: "IX", title: "The Infinite City", subtitle: "Urban Intelligence", year: "Sweden 2087", excerpt: "Cities were no longer designed. They were modulated by impact.", category: "origin" },
  { slug: "the-countdown-gene", number: "X", title: "The Countdown Gene", subtitle: "Post-Human Self-Authorship", year: "Post-Human", excerpt: "One cell outperformed four billion years. By 9.5%.", category: "origin" },
  { slug: "a-hard-fork-in-reality", number: "XI", title: "A Hard Fork in Reality", subtitle: "Two Timelines, One Species", year: "2036", excerpt: "Between Lavender and Gospel, we lost the plot.", category: "origin" },
];

const newDawnStories: Story[] = [
  { slug: "the-sentinel-seed", number: "\u2022", title: "The Sentinel Seed", subtitle: "The First User and the Final Platform", year: "2026\u20132097", excerpt: "The basil was dying again. 2:47 AM in Gothenburg.", category: "newdawn" },
  { slug: "the-architect-of-hooves", number: "\u2022", title: "The Architect of Hooves", subtitle: "The First Horse That Knew Itself", year: "2027\u20132061", excerpt: "The mare moved wrong. Only the numbers saw it.", category: "newdawn" },
  { slug: "the-last-silo", number: "\u2022", title: "The Last Silo", subtitle: "The Day the Walls Came Down", year: "2028\u20132084", excerpt: "She had seventeen doctors. None of them knew about the others.", category: "newdawn" },
  { slug: "the-forgetting-curve", number: "\u2022", title: "The Forgetting Curve", subtitle: "The Disease That Forgot to Win", year: "2028\u20132048", excerpt: "Her p-tau217 had been rising for eighteen months. Not dramatically. The way a river rises before anyone notices.", category: "newdawn" },
  { slug: "the-room-full-of-everyone", number: "\u2022", title: "The Room Full of Everyone", subtitle: "A Memory from the Future", year: "Sep 4, 2036", excerpt: "On the evening of his 55th birthday, Nicolas sits in a room with thirty-one people, fourteen avatars, three robots, and a voice he\u2019s known longer than some of his friends.", category: "newdawn" },
  { slug: "the-sovereign-body", number: "\u2022", title: "The Sovereign Body", subtitle: "A Manifesto", year: "March 2026", excerpt: "I got my first epigenetic scar before I could speak. The body keeps score long before the mind learns to count.", category: "newdawn" },
  { slug: "the-arm-that-remembered", number: "\u2022", title: "The Arm That Remembered", subtitle: "A Youth Sports Story", year: "2027\u20132039", excerpt: "He threw 847 pitches last month. Nobody was counting. That was the whole problem.", category: "newdawn" },
  { slug: "the-steel-forest", number: "VIII", title: "The Steel Forest", subtitle: "From Factory Floors to Forest Floors \u2014 Sweden\u2019s Edge-Native Revolution", year: "2027\u20132035", excerpt: "It began with three metal factories in northern Sweden and an AI that learned to predict energy prices. It ended with every forest, farm, and factory in the country running on the same self-learning architecture.", category: "newdawn" },
  { slug: "the-reconstruction", number: "\u2022", title: "The Reconstruction", subtitle: "Four Lives, Five Time Periods, One City Rebuilding", year: "2015\u20132035", excerpt: "Kharkiv, 2015\u20132035. A water engineer, a professor, a displaced architect, and a Swedish technologist. Their paths converge in the rubble and the renewal.", category: "newdawn" },
];

const meetingStories: Story[] = [
  { slug: "meeting-virtual-humans", number: "\u2022", title: "The Room Where It Started", subtitle: "Virtual Humans in Virtual Labs", year: "Apr 1, 2026", excerpt: "Four people who should never have been in the same room. The network IS the twin.", category: "meeting" },
  { slug: "meeting-the-road-home", number: "\u2022", title: "The Road Home", subtitle: "When the Car Became Part of You", year: "Apr 2, 2026", excerpt: "The car didn\u2019t drive him. It carried him. There\u2019s a difference.", category: "meeting" },
  { slug: "meeting-the-map-that-listened", number: "\u2022", title: "The Map That Listened", subtitle: "When Cities Stopped Looking at Dashboards and Started Looking at Each Other", year: "Apr 2, 2026", excerpt: "Two students asked about AI in small cities. He showed them the planet instead.", category: "meeting" },
];

const whitepaperStories: Story[] = [
  { slug: "whitepaper-nri-tokyo", number: "\u2022", title: "\u30c7\u30b8\u30bf\u30eb\u306e\u93e1\u306b\u6620\u308b\u672a\u6765", subtitle: "A Journey from Tokyo to Gothenburg", year: "Sep 18, 2025", excerpt: "\u4e5d\u6708\u306e\u6771\u4eac\u306f\u3001\u307e\u3060\u590f\u306e\u6b8b\u308a\u9999\u3092\u7e4f\u3063\u3066\u3044\u305f\u3002\u5927\u624b\u753a\u306e\u91ce\u6751\u7dcf\u5408\u7814\u7a76\u6240\u672c\u793e\u30d3\u30eb\u3067\u3001\u5317\u6b27\u306e\u7537\u304c\u73fe\u5b9f\u306e\u672c\u8cea\u306b\u3064\u3044\u3066\u8a9e\u308a\u59cb\u3081\u305f\u3002", category: "whitepaper" },
  { slug: "whitepaper-smile-digital-twins", number: "\u2022", title: "Digital Twins and AI", subtitle: "A Methodological Framework for Japan\u2019s Next Industrial Transformation", year: "Sep 18, 2025", excerpt: "Do not start with data. Start with impact. Do everything virtually first.", category: "whitepaper" },
  { slug: "whitepaper-extreme-collaboration", number: "\u2022", title: "Extreme Collaboration", subtitle: "The Road Towards Autonomous and Cognitive City Operations", year: "Apr 2026", excerpt: "The road to autonomous cities does not begin with AI, data, or sensors. It begins with people in the same room, looking at the same reality.", category: "whitepaper" },
  { slug: "energy-crisis-manufacturing", number: "IV", title: "The Hidden Energy Crisis", subtitle: "Why Swedish Manufacturing Is Bleeding Money Every Hour", year: "Apr 2026", excerpt: "EU electricity prices are double the US rate. Every factory running on static schedules is losing money. The technology to fix it exists. The question is execution.", category: "whitepaper" },
  { slug: "digital-sovereignty", number: "V", title: "Digital Sovereignty or Digital Dependency?", subtitle: "Why Your Production Data Shouldn\u2019t Live on Someone Else\u2019s Servers", year: "Apr 2026", excerpt: "Your manufacturing data sits on servers governed by foreign law, in countries whose regulations don\u2019t protect you. There is a better architecture.", category: "whitepaper" },
  { slug: "untrusted-ai", number: "VI", title: "The AI You Can\u2019t Trust", subtitle: "What Happens When Someone Attacks Your Factory\u2019s Brain", year: "Apr 2026", excerpt: "You deployed AI in your factory. Have you tested what happens when someone poisons its training data? When an adversarial input makes it run the furnace at the wrong temperature?", category: "whitepaper" },
  { slug: "whitepaper-reconstruction-gap", number: "\u2022", title: "The Reconstruction Gap", subtitle: "How Digital Twins Can Accelerate Post-Conflict Infrastructure Recovery", year: "Apr 2026", excerpt: "Between damage and reconstruction lies a gap measured in months and years. Digital twins can close it to days.", category: "whitepaper" },
  { slug: "whitepaper-healthcare-roadmap", number: "\u2022", title: "Healing Fragmented Reality", subtitle: "The 15-Year Biological Digital Twin Roadmap", year: "Apr 7, 2026", excerpt: "Healthcare is broken because reality is fragmented. The biological digital twin is the first computational object that forces integration. A 15-year roadmap grounded in evidence, funded by physics.", category: "whitepaper" },
  { slug: "whitepaper-lpi-protocol", number: "\u2022", title: "The Life Programmable Interface", subtitle: "A Protocol for Sovereign Biological Intelligence", year: "Apr 2026", excerpt: "Like TCP/IP for communication or HTTP for information, LPI provides the protocol layer for biological digital twins \u2014 sovereign, edge-native, engine-agnostic. For all 8 billion people.", category: "whitepaper" },
];

const allStories = [...sentinelOrigin, ...newDawnStories, ...meetingStories, ...whitepaperStories];

/* ═══════════════════════════════════════════════════════════════
   Components
   ═══════════════════════════════════════════════════════════════ */

function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/${story.slug}`} className="block group">
      <div
        className="border rounded-md p-3 md:p-4 transition-all duration-300 h-full flex flex-col cursor-pointer"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
          e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.04)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          {story.category === "origin" && (
            <span className="text-[9px] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              {story.number}
            </span>
          )}
          <span className="text-[9px] tracking-[0.15em] ml-auto"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}>
            {story.year}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-light mb-0.5 transition-colors duration-300 group-hover:text-[var(--color-gold)]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
          {story.title}
        </h3>
        <p className="text-[11px] italic mb-2"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
          {story.subtitle}
        </p>
        <p className="text-[10px] leading-relaxed flex-1 mb-2"
          style={{ color: "var(--color-text-secondary)", opacity: 0.6 }}>
          {story.excerpt}
        </p>
        <span className="text-[9px] tracking-[0.12em] uppercase transition-colors duration-300 group-hover:text-[var(--color-gold)]"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          Read \u2192
        </span>
      </div>
    </Link>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
      <h2 className="text-[10px] tracking-[0.4em] uppercase whitespace-nowrap"
        style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
        {title}
      </h2>
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim))" }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

type Tab = "origin" | "newdawn" | "meeting" | "whitepaper" | "all";

const tabs: { key: Tab; label: string; count: number }[] = [
  { key: "all", label: "All", count: allStories.length },
  { key: "origin", label: "Origin", count: sentinelOrigin.length },
  { key: "newdawn", label: "New Dawn", count: newDawnStories.length },
  { key: "meeting", label: "Meetings", count: meetingStories.length },
  { key: "whitepaper", label: "White Papers", count: whitepaperStories.length },
];

const storiesByTab: Record<Tab, Story[]> = {
  all: allStories,
  origin: sentinelOrigin,
  newdawn: newDawnStories,
  meeting: meetingStories,
  whitepaper: whitepaperStories,
};

function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6">
      {tabs.map((tab) => {
        const isActive = active === tab.key;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className="px-3 md:px-4 py-1.5 rounded-full border text-[10px] md:text-[11px] tracking-[0.15em] uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              borderColor: isActive ? "var(--color-gold)" : "var(--color-border)",
              background: isActive ? "rgba(201,168,76,0.1)" : "transparent",
              color: isActive ? "var(--color-gold)" : "var(--color-text-secondary)",
            }}
          >
            {tab.label}
            <span className="ml-1.5 opacity-50">{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const filtered = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return allStories.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.subtitle.toLowerCase().includes(q) ||
        s.excerpt.toLowerCase().includes(q) ||
        s.year.toLowerCase().includes(q)
    );
  }, [search]);

  const displayStories = filtered !== null ? filtered : storiesByTab[activeTab];

  return (
    <main className="min-h-screen px-4 md:px-6 py-6 md:py-10 max-w-6xl mx-auto">
      {/* ═══ Header ═══ */}
      <header className="text-center mb-6">
        <p className="text-[9px] tracking-[0.5em] uppercase mb-2"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          Life Atlas
        </p>
        <h1 className="text-3xl md:text-5xl font-light mb-2 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
          The Sentinel Stories
        </h1>
        <p className="text-sm font-light italic max-w-sm mx-auto mb-5"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
          Fictions from the future we are building.
        </p>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-5">
          <input
            type="text"
            placeholder="Search stories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded border text-sm focus:outline-none transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "var(--color-surface)",
              borderColor: search ? "var(--color-gold-dim)" : "var(--color-border)",
              color: "var(--color-text)",
            }}
          />
        </div>

        {/* Tabs */}
        {filtered === null && <TabBar active={activeTab} onChange={setActiveTab} />}
      </header>

      {/* ═══ Content ═══ */}
      {filtered !== null && (
        <div className="mb-4">
          <SectionHeader title={`${filtered.length} result${filtered.length !== 1 ? "s" : ""}`} />
        </div>
      )}

      {displayStories.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {displayStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm py-12" style={{ color: "var(--color-text-secondary)" }}>
          {filtered !== null
            ? <>No stories match &ldquo;{search}&rdquo;</>
            : "No stories in this category yet."}
        </p>
      )}

      {/* ═══ Footer ═══ */}
      <footer className="text-center pt-10 pb-3">
        <p className="text-[10px] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.35 }}>
          {allStories.length} stories {"\u2014"} Gothenburg, Sweden {"\u2014"} 2026
        </p>
        {/* Hidden investor portal — shift+click bottom-right corner */}
        <a href="https://lifeatlas.github.io/investor-portal/"
          className="fixed bottom-2 right-2 w-4 h-4 opacity-0 hover:opacity-[0.08] transition-opacity cursor-default"
          title="" />
      </footer>
    </main>
  );
}
