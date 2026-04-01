"use client";

import { useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   Story data — Sentinel Arc + Origin Stories
   ═══════════════════════════════════════════════════════════════ */

interface Story {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  excerpt: string;
  category: "arc" | "origin";
}

const sentinelArc: Story[] = [
  {
    slug: "before-the-code",
    number: "I",
    title: "Before the Code",
    subtitle: "A Story of Flesh, Failure, and Forgotten Time",
    year: "Near Future",
    excerpt: "The astronaut was dead before he hit the floor. Not literally. But for 11 minutes, his organs had already begun to fail.",
    category: "arc",
  },
  {
    slug: "the-second-self",
    number: "II",
    title: "The Second Self",
    subtitle: "The Doctrine of the Digital Twin",
    year: "Europa Base",
    excerpt: "She was trained to recognize war. But when it came, it wasn\u2019t a gunshot. It wasn\u2019t even loud. It started with a yawn.",
    category: "arc",
  },
  {
    slug: "the-countdown-gene",
    number: "IX",
    title: "The Countdown Gene",
    subtitle: "On the Eve of Post-Human Self-Authorship",
    year: "Post-Human Era",
    excerpt: "It didn\u2019t come with a mushroom cloud. No sirens. No parades. For 72 hours, one cell outperformed four billion years of genetic negotiation.",
    category: "arc",
  },
];

const originStories: Story[] = [
  {
    slug: "the-sentinel-seed",
    number: "\u2022",
    title: "The Sentinel Seed",
    subtitle: "The First User and the Final Platform",
    year: "2026 \u2013 2097",
    excerpt: "The basil was dying again. Nicolas Waern stood in his apartment in Gothenburg, 2:47 AM, the blue glow of four monitors carving his silhouette against the window.",
    category: "origin",
  },
  {
    slug: "the-architect-of-hooves",
    number: "\u2022",
    title: "The Architect of Hooves",
    subtitle: "The First Horse That Knew Itself",
    year: "2027 \u2013 2061",
    excerpt: "The mare moved wrong. Not wrong in a way anyone could see. Wrong in a way that only showed up in the numbers.",
    category: "origin",
  },
  {
    slug: "the-last-silo",
    number: "\u2022",
    title: "The Last Silo",
    subtitle: "The Day the Walls Came Down",
    year: "2028 \u2013 2084",
    excerpt: "Ingrid Eriksson was 83 years old and she had seventeen doctors. Not one of them knew about the others.",
    category: "origin",
  },
];

/* ═══════════════════════════════════════════════════════════════
   Story Card (compact, side-by-side)
   ═══════════════════════════════════════════════════════════════ */

function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/${story.slug}`} className="block group">
      <div
        className="border rounded-lg p-5 md:p-6 transition-all duration-300 h-full flex flex-col cursor-pointer"
        style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
          e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          {story.category === "arc" && (
            <span className="text-[10px] tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              Book {story.number}
            </span>
          )}
          <span className="text-[10px] tracking-[0.2em] ml-auto"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}>
            {story.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-light mb-1 transition-colors duration-300 group-hover:text-[var(--color-gold)]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
          {story.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm italic mb-3"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
          {story.subtitle}
        </p>

        {/* Excerpt */}
        <p className="text-xs leading-relaxed mb-4 flex-1"
          style={{ color: "var(--color-text-secondary)", opacity: 0.7 }}>
          {story.excerpt}
        </p>

        {/* Read link */}
        <span className="text-xs tracking-[0.15em] uppercase transition-colors duration-300 group-hover:text-[var(--color-gold)]"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          Read \u2192
        </span>
      </div>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Home Page — compact, no-scroll-to-find layout
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-8 py-8 md:py-12 max-w-6xl mx-auto">
      {/* ═══ Header — compact ═══ */}
      <header className="text-center mb-10 md:mb-14">
        <div className="mb-4">
          <div className="inline-block w-px h-10 mb-4"
            style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
        </div>
        <p className="text-[10px] tracking-[0.5em] uppercase mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          Life Atlas
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-3 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
          The Sentinel Stories
        </h1>
        <p className="text-base md:text-lg font-light italic max-w-md mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
          Fictions from the future we are building.
        </p>
      </header>

      {/* ═══ Sentinel Arc ═══ */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
          <h2 className="text-xs tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Sentinel Arc
          </h2>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim))" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sentinelArc.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* ═══ Origin Stories ═══ */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
          <h2 className="text-xs tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Origin Stories
          </h2>
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim))" }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {originStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="text-center pt-8 pb-4">
        <div className="inline-block w-px h-8 mb-4"
          style={{ background: "linear-gradient(to bottom, var(--color-gold-dim), transparent)" }} />
        <p className="text-xs mb-4"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.4 }}>
          Written for Life Atlas \u2014 Gothenburg, Sweden \u2014 2026
        </p>
        <a href="https://lifeatlas.github.io/investor-portal/"
          className="inline-block px-6 py-2 rounded border text-xs transition-all duration-300"
          style={{
            fontFamily: "'Inter', sans-serif",
            borderColor: "var(--color-border)",
            color: "var(--color-gold-dim)",
            letterSpacing: "0.1em",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            e.currentTarget.style.color = "var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.color = "var(--color-gold-dim)";
          }}>
          INVESTOR PORTAL
        </a>
      </footer>
    </main>
  );
}
