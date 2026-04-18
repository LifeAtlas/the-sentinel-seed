"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ResearchArticle } from "./page";

/* ═══════════════════════════════════════════════════════════════
   Inline styles — kept as JS objects to stay fully in-file
   ═══════════════════════════════════════════════════════════════ */

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Inter', sans-serif";

const gold = "var(--color-gold)";
const goldDim = "var(--color-gold-dim)";
const textPrimary = "var(--color-text)";
const textSecondary = "var(--color-text-secondary)";
const border = "var(--color-border)";

/* ═══════════════════════════════════════════════════════════════
   Markdown component overrides — maps each markdown element to
   styled JSX. Cormorant Garamond throughout, gold headings,
   dark-theme blockquote, code blocks.
   ═══════════════════════════════════════════════════════════════ */

type ComponentProps = {
  children?: React.ReactNode;
  [key: string]: unknown;
};

const mdComponents = {
  // Paragraphs
  p({ children }: ComponentProps) {
    return (
      <p
        style={{
          fontFamily: serif,
          color: textPrimary,
          fontSize: "1.125rem",
          lineHeight: "1.9",
          marginBottom: "1.4em",
          letterSpacing: "0.01em",
        }}
      >
        {children}
      </p>
    );
  },

  // Headings
  h1({ children }: ComponentProps) {
    return (
      <h1
        style={{
          fontFamily: serif,
          color: gold,
          fontSize: "2rem",
          fontWeight: 300,
          letterSpacing: "0.04em",
          marginTop: "2.5em",
          marginBottom: "0.6em",
          lineHeight: 1.3,
        }}
      >
        {children}
      </h1>
    );
  },

  h2({ children }: ComponentProps) {
    return (
      <h2
        style={{
          fontFamily: serif,
          color: gold,
          fontSize: "1.55rem",
          fontWeight: 400,
          letterSpacing: "0.035em",
          marginTop: "2.2em",
          marginBottom: "0.5em",
          lineHeight: 1.35,
          borderBottom: `1px solid rgba(160,138,62,0.2)`,
          paddingBottom: "0.3em",
        }}
      >
        {children}
      </h2>
    );
  },

  h3({ children }: ComponentProps) {
    return (
      <h3
        style={{
          fontFamily: serif,
          color: goldDim,
          fontSize: "1.2rem",
          fontWeight: 500,
          letterSpacing: "0.03em",
          marginTop: "1.8em",
          marginBottom: "0.4em",
          lineHeight: 1.4,
          fontStyle: "italic",
        }}
      >
        {children}
      </h3>
    );
  },

  h4({ children }: ComponentProps) {
    return (
      <h4
        style={{
          fontFamily: sans,
          color: textSecondary,
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: "1.5em",
          marginBottom: "0.4em",
        }}
      >
        {children}
      </h4>
    );
  },

  // Emphasis
  em({ children }: ComponentProps) {
    return (
      <em style={{ fontStyle: "italic", color: textPrimary, fontFamily: serif }}>
        {children}
      </em>
    );
  },

  strong({ children }: ComponentProps) {
    return (
      <strong style={{ fontWeight: 600, color: textPrimary, fontFamily: serif }}>
        {children}
      </strong>
    );
  },

  // Horizontal rule — decorative gold gradient
  hr() {
    return (
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(160,138,62,0.4), transparent)",
          margin: "2.5em 0",
          border: "none",
        }}
      />
    );
  },

  // Blockquote — indented gold left border
  blockquote({ children }: ComponentProps) {
    return (
      <blockquote
        style={{
          borderLeft: `3px solid ${goldDim}`,
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: "1.5em",
          paddingTop: "0.5em",
          paddingBottom: "0.5em",
          background: "rgba(160,138,62,0.04)",
          borderRadius: "0 4px 4px 0",
          marginBottom: "1.6em",
        }}
      >
        {children}
      </blockquote>
    );
  },

  // Unordered list
  ul({ children }: ComponentProps) {
    return (
      <ul
        style={{
          paddingLeft: "1.4em",
          marginBottom: "1.4em",
          listStyleType: "disc",
        }}
      >
        {children}
      </ul>
    );
  },

  // Ordered list
  ol({ children }: ComponentProps) {
    return (
      <ol
        style={{
          paddingLeft: "1.4em",
          marginBottom: "1.4em",
          listStyleType: "decimal",
        }}
      >
        {children}
      </ol>
    );
  },

  li({ children }: ComponentProps) {
    return (
      <li
        style={{
          fontFamily: serif,
          color: textPrimary,
          fontSize: "1.1rem",
          lineHeight: "1.85",
          marginBottom: "0.3em",
        }}
      >
        {children}
      </li>
    );
  },

  // Inline code
  code({ children, className }: ComponentProps & { className?: string }) {
    const isBlock = className?.startsWith("language-");
    if (isBlock) {
      return (
        <code
          className={className as string}
          style={{
            fontFamily: "'Fira Code', 'Fira Mono', monospace",
            fontSize: "0.85rem",
            color: "#e8e4df",
          }}
        >
          {children}
        </code>
      );
    }
    return (
      <code
        style={{
          fontFamily: "'Fira Code', 'Fira Mono', monospace",
          fontSize: "0.875em",
          background: "rgba(160,138,62,0.1)",
          color: goldDim,
          padding: "0.1em 0.35em",
          borderRadius: "3px",
          border: `1px solid rgba(160,138,62,0.2)`,
        }}
      >
        {children}
      </code>
    );
  },

  // Code block wrapper
  pre({ children }: ComponentProps) {
    return (
      <pre
        style={{
          background: "rgba(15,15,18,0.8)",
          border: `1px solid ${border}`,
          borderRadius: "6px",
          padding: "1.2em 1.4em",
          overflowX: "auto",
          marginBottom: "1.6em",
          fontFamily: "'Fira Code', 'Fira Mono', monospace",
          fontSize: "0.85rem",
          lineHeight: "1.6",
        }}
      >
        {children}
      </pre>
    );
  },

  // Tables — for comparison tables in the articles
  table({ children }: ComponentProps) {
    return (
      <div style={{ overflowX: "auto", marginBottom: "1.8em" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: sans,
            fontSize: "0.8rem",
          }}
        >
          {children}
        </table>
      </div>
    );
  },

  thead({ children }: ComponentProps) {
    return (
      <thead
        style={{
          borderBottom: `2px solid rgba(160,138,62,0.4)`,
        }}
      >
        {children}
      </thead>
    );
  },

  tbody({ children }: ComponentProps) {
    return <tbody>{children}</tbody>;
  },

  tr({ children }: ComponentProps) {
    return (
      <tr
        style={{
          borderBottom: `1px solid rgba(30,30,36,0.8)`,
        }}
      >
        {children}
      </tr>
    );
  },

  th({ children }: ComponentProps) {
    return (
      <th
        style={{
          padding: "0.5em 0.8em",
          textAlign: "left",
          color: goldDim,
          fontWeight: 600,
          letterSpacing: "0.05em",
          fontSize: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        {children}
      </th>
    );
  },

  td({ children }: ComponentProps) {
    return (
      <td
        style={{
          padding: "0.5em 0.8em",
          color: textSecondary,
          verticalAlign: "top",
          lineHeight: "1.5",
        }}
      >
        {children}
      </td>
    );
  },

  // Links — styled gold
  a({ href, children }: ComponentProps & { href?: string }) {
    return (
      <a
        href={href as string}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{
          color: goldDim,
          textDecoration: "underline",
          textDecorationColor: "rgba(160,138,62,0.4)",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = gold;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.color = goldDim;
        }}
      >
        {children}
      </a>
    );
  },
};

/* ═══════════════════════════════════════════════════════════════
   Not Found state
   ═══════════════════════════════════════════════════════════════ */

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ fontFamily: sans, color: goldDim }}
        >
          Not Found
        </p>
        <Link
          href="/"
          className="text-sm"
          style={{ fontFamily: sans, color: textSecondary }}
        >
          &larr;&nbsp; Return to The Sentinel Stories
        </Link>
      </div>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main client component
   ═══════════════════════════════════════════════════════════════ */

export default function ResearchArticleClient({
  article,
}: {
  article: ResearchArticle | null;
}) {
  if (!article) return <NotFound />;

  const zenodoUrl = `https://doi.org/${article.doi}`;
  const hasContent = article.content && article.content.length > 100;

  return (
    <main className="min-h-screen px-6 py-16 max-w-[760px] mx-auto">
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
            style={{ fontFamily: sans, color: goldDim }}
          >
            &larr;&nbsp; The Sentinel Stories
          </Link>
        </div>

        {/* ═══ Article header ═══ */}
        <header className="mb-12">
          {/* Category label */}
          <p
            className="text-[9px] tracking-[0.55em] uppercase mb-5"
            style={{ fontFamily: sans, color: goldDim }}
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
            style={{ fontFamily: serif, color: gold }}
          >
            {article.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl font-light italic mb-8"
            style={{ fontFamily: serif, color: textSecondary }}
          >
            {article.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.2em]"
              style={{ fontFamily: sans, color: textSecondary, opacity: 0.7 }}
            >
              Published {article.year}
            </span>

            <span style={{ color: border }}>&bull;</span>

            <span
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: sans, color: textSecondary, opacity: 0.6 }}
            >
              Nicolas Waern &mdash; WINNIIO AB
            </span>

            <span style={{ color: border }}>&bull;</span>

            <span
              className="text-[10px] tracking-[0.1em]"
              style={{ fontFamily: sans, color: textSecondary, opacity: 0.5 }}
            >
              ORCID: 0009-0001-4011-8201
            </span>

            <span style={{ color: border }}>&bull;</span>

            {/* DOI badge */}
            <a
              href={zenodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded transition-all duration-200"
              style={{
                fontFamily: sans,
                color: goldDim,
                border: "1px solid rgba(160,138,62,0.35)",
                background: "rgba(160,138,62,0.07)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = gold;
                el.style.borderColor = "rgba(212,178,84,0.5)";
                el.style.background = "rgba(212,178,84,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = goldDim;
                el.style.borderColor = "rgba(160,138,62,0.35)";
                el.style.background = "rgba(160,138,62,0.07)";
              }}
            >
              <span>DOI</span>
              <span style={{ opacity: 0.6 }}>{article.doi}</span>
            </a>
          </div>

          {/* License badge */}
          <div className="flex items-center gap-2">
            <span
              className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded"
              style={{
                fontFamily: sans,
                color: textSecondary,
                border: `1px solid rgba(30,30,36,0.9)`,
                opacity: 0.6,
              }}
            >
              CC-BY 4.0
            </span>
            <span
              className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 rounded"
              style={{
                fontFamily: sans,
                color: textSecondary,
                border: `1px solid rgba(30,30,36,0.9)`,
                opacity: 0.6,
              }}
            >
              Open Access
            </span>
          </div>
        </header>

        {/* ═══ Divider ═══ */}
        <div
          className="h-px mb-10"
          style={{
            background: "linear-gradient(90deg, var(--color-gold-dim), transparent 70%)",
            opacity: 0.3,
          }}
        />

        {/* ═══ Abstract / excerpt callout ═══ */}
        <section className="mb-12">
          <p
            className="text-[9px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: sans, color: goldDim }}
          >
            Abstract
          </p>
          <p
            className="text-xl md:text-2xl font-light italic leading-[1.7]"
            style={{ fontFamily: serif, color: textSecondary }}
          >
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </section>

        {/* ═══ Full article content ═══ */}
        {hasContent ? (
          <article className="mb-20">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={mdComponents as Record<string, unknown>}
            >
              {article.content}
            </ReactMarkdown>
          </article>
        ) : (
          /* Fallback for Oct 2025 articles with no local source */
          <section className="mb-20">
            <div
              className="rounded-lg p-8 mb-8"
              style={{
                background: "rgba(15,15,18,0.6)",
                border: `1px solid ${border}`,
              }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: sans, color: goldDim }}
              >
                Full Text Available on Zenodo
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: serif, color: textSecondary }}
              >
                This paper is archived on Zenodo under a CC-BY 4.0 open access licence.
                Read and download the full text at the link below.
              </p>
              <a
                href={zenodoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded border text-sm tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: sans,
                  color: gold,
                  borderColor: "rgba(212,178,84,0.4)",
                  background: "rgba(212,178,84,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = gold;
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
                <span>Read on Zenodo &rarr;</span>
              </a>
            </div>
          </section>
        )}

        {/* ═══ Cite this article ═══ */}
        <section className="mb-16">
          <div
            className="h-px mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-gold-dim), transparent)",
              opacity: 0.15,
            }}
          />
          <p
            className="text-[9px] tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: sans, color: goldDim }}
          >
            Cite This Article
          </p>
          <div
            className="rounded-lg p-6"
            style={{
              background: "rgba(15,15,18,0.5)",
              border: `1px solid ${border}`,
            }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ fontFamily: serif, color: textSecondary }}
            >
              Waern, N. ({article.year.replace("Apr ", "").replace("Oct ", "")}). <em>{article.title}: {article.subtitle}</em>.
              WINNIIO AB.{" "}
              <a
                href={zenodoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: goldDim, textDecoration: "underline" }}
              >
                https://doi.org/{article.doi}
              </a>
            </p>
            <p
              className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: sans, color: textSecondary, opacity: 0.5 }}
            >
              Open Access &mdash; CC-BY 4.0 &mdash; ORCID: 0009-0001-4011-8201
            </p>
          </div>
        </section>

        {/* ═══ Zenodo CTA — still present after full text ═══ */}
        {hasContent && (
          <section className="mb-16">
            <a
              href={zenodoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded border text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                fontFamily: sans,
                color: goldDim,
                borderColor: "rgba(160,138,62,0.3)",
                background: "rgba(160,138,62,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = gold;
                el.style.borderColor = "rgba(212,178,84,0.5)";
                el.style.background = "rgba(212,178,84,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = goldDim;
                el.style.borderColor = "rgba(160,138,62,0.3)";
                el.style.background = "rgba(160,138,62,0.04)";
              }}
            >
              <span>View on Zenodo (PDF + metadata)</span>
              <span>&rarr;</span>
            </a>
            <p
              className="mt-3 text-[10px]"
              style={{ fontFamily: sans, color: textSecondary, opacity: 0.4 }}
            >
              Open access &mdash; CC-BY 4.0
            </p>
          </section>
        )}

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
            style={{ fontFamily: sans, color: textSecondary, opacity: 0.35 }}
          >
            Nicolas Waern &mdash; WINNIIO AB / Life Atlas
          </p>
          <p
            className="text-[9px] tracking-[0.2em]"
            style={{ fontFamily: sans, color: textSecondary, opacity: 0.25 }}
          >
            ORCID: 0009-0001-4011-8201
          </p>
        </footer>
      </div>
    </main>
  );
}
