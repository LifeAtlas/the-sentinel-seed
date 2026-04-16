"use client";

import Link from "next/link";
import type { ResearchArticle } from "./page";

export default function ResearchArticleClient({
  article,
}: {
  article: ResearchArticle | null;
}) {
  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          >
            Not Found
          </p>
          <Link
            href="/"
            className="text-sm"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
          >
            &larr;&nbsp; Return to The Sentinel Stories
          </Link>
        </div>
      </main>
    );
  }

  const zenodoUrl = `https://doi.org/${article.doi}`;

  return (
    <main className="min-h-screen px-6 py-16 max-w-[720px] mx-auto">
      {/* ═══ Ambient glow ═══ */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.035) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        {/* ═══ Back link ═══ */}
        <div className="mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase transition-colors duration-200 hover:text-[var(--color-gold)]"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          >
            &larr;&nbsp; The Sentinel Stories
          </Link>
        </div>

        {/* ═══ Header ═══ */}
        <header className="mb-14">
          {/* Category label */}
          <p
            className="text-[9px] tracking-[0.55em] uppercase mb-5"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
          >
            Life Atlas &mdash; Research
          </p>

          {/* Decorative rule */}
          <div
            className="h-px w-12 mb-8"
            style={{
              background: "linear-gradient(90deg, var(--color-gold-dim), transparent)",
            }}
          />

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-gold)",
            }}
          >
            {article.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            {article.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-text-secondary)",
                opacity: 0.7,
              }}
            >
              Published {article.year}
            </span>

            <span style={{ color: "var(--color-border)" }}>&bull;</span>

            {/* DOI badge */}
            <a
              href={zenodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--color-gold-dim)",
                border: "1px solid rgba(160,138,62,0.35)",
                background: "rgba(160,138,62,0.07)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-gold)";
                el.style.borderColor = "rgba(212,178,84,0.5)";
                el.style.background = "rgba(212,178,84,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--color-gold-dim)";
                el.style.borderColor = "rgba(160,138,62,0.35)";
                el.style.background = "rgba(160,138,62,0.07)";
              }}
            >
              <span>DOI</span>
              <span style={{ opacity: 0.6 }}>{article.doi}</span>
            </a>
          </div>
        </header>

        {/* ═══ Divider ═══ */}
        <div
          className="h-px mb-12"
          style={{
            background:
              "linear-gradient(90deg, var(--color-gold-dim), transparent 70%)",
            opacity: 0.3,
          }}
        />

        {/* ═══ Excerpt / teaser ═══ */}
        <section className="mb-16">
          <p
            className="text-xl md:text-2xl font-light italic leading-[1.7]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: "var(--color-text-secondary)",
            }}
          >
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </section>

        {/* ═══ Primary CTA ═══ */}
        <section className="mb-20">
          <a
            href={zenodoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded border text-sm tracking-[0.2em] uppercase transition-all duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-gold)",
              borderColor: "rgba(212,178,84,0.4)",
              background: "rgba(212,178,84,0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--color-gold)";
              el.style.background = "rgba(212,178,84,0.12)";
              el.style.boxShadow = "0 0 40px rgba(212,178,84,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(212,178,84,0.4)";
              el.style.background = "rgba(212,178,84,0.06)";
              el.style.boxShadow = "none";
            }}
          >
            <span>Read the full paper on Zenodo</span>
            <span>&rarr;</span>
          </a>

          <p
            className="mt-4 text-[10px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.45,
            }}
          >
            Opens Zenodo in a new tab &mdash; open access, CC-licensed
          </p>
        </section>

        {/* ═══ Divider ═══ */}
        <div
          className="h-px mb-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
            opacity: 0.15,
          }}
        />

        {/* ═══ Footer / attribution ═══ */}
        <footer className="text-center">
          <p
            className="text-[10px] tracking-[0.25em] mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.35,
            }}
          >
            Nicolas Waern &mdash; Life Atlas AB
          </p>
          <p
            className="text-[9px] tracking-[0.2em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "var(--color-text-secondary)",
              opacity: 0.25,
            }}
          >
            ORCID: 0000-0001-7970-2707
          </p>
        </footer>
      </div>
    </main>
  );
}
