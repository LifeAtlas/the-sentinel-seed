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
  category: "origin" | "newdawn" | "meeting";
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
];

const meetingStories: Story[] = [
  { slug: "meeting-virtual-humans", number: "\u2022", title: "The Room Where It Started", subtitle: "Virtual Humans in Virtual Labs", year: "Apr 1, 2026", excerpt: "Four people who should never have been in the same room. The network IS the twin.", category: "meeting" },
];

const allStories = [...sentinelOrigin, ...newDawnStories, ...meetingStories];

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

export default function Home() {
  const [search, setSearch] = useState("");

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
        <div className="max-w-sm mx-auto">
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
      </header>

      {/* ═══ Search Results ═══ */}
      {filtered !== null ? (
        <section className="mb-10">
          <SectionHeader title={`${filtered.length} result${filtered.length !== 1 ? "s" : ""}`} />
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm" style={{ color: "var(--color-text-secondary)" }}>
              No stories match &ldquo;{search}&rdquo;
            </p>
          )}
        </section>
      ) : (
        <>
          {/* ═══ Sentinel Origin Stories ═══ */}
          <section className="mb-8">
            <SectionHeader title="Sentinel Origin Stories" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {sentinelOrigin.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </section>

          {/* ═══ Sentinel New Dawn Stories ═══ */}
          <section className="mb-8">
            <SectionHeader title="Sentinel New Dawn Stories" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {newDawnStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </section>

          {/* ═══ Meeting Stories ═══ */}
          <section className="mb-8">
            <SectionHeader title="Meeting Stories" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {meetingStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* ═══ Footer ═══ */}
      <footer className="text-center pt-6 pb-3">
        <p className="text-[10px] mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.35 }}>
          {allStories.length} stories \u2014 Gothenburg, Sweden \u2014 2026
        </p>
        {/* Hidden investor portal — shift+click bottom-right corner */}
        <a href="https://lifeatlas.github.io/investor-portal/"
          className="fixed bottom-2 right-2 w-4 h-4 opacity-0 hover:opacity-[0.08] transition-opacity cursor-default"
          title="" />
      </footer>
    </main>
  );
}
