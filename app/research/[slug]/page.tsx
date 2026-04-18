import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import ResearchArticleClient from "./ResearchArticleClient";
import { SLUG_TO_DRAFT_DIR, PUBLICATIONS_DRAFTS_ROOT } from "../../../lib/articleDraftPaths";

/* ═══════════════════════════════════════════════════════════════
   Research article data — single source of truth for static export
   ═══════════════════════════════════════════════════════════════ */

export interface ResearchArticle {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  excerpt: string;
  doi: string;
  content: string; // full markdown body, read at build time
}

export const researchArticles: Omit<ResearchArticle, "content">[] = [
  {
    slug: "research-reality-construct",
    title: "The Reality Construct",
    subtitle: "Digital Twins as Boundary-Spanning Artefacts",
    year: "Apr 2026",
    excerpt: "Reality is not a given. It is constructed, negotiated, and increasingly computed.",
    doi: "10.5281/zenodo.19587944",
  },
  {
    slug: "research-sovereign-body",
    title: "The Sovereign Body",
    subtitle: "Personal Digital Twins Across WHO QoL Dimensions",
    year: "Apr 2026",
    excerpt: "Your body is the most complex system you will ever own. And you have no API for it.",
    doi: "10.5281/zenodo.19586851",
  },
  {
    slug: "research-indexing-reality",
    title: "Indexing Reality",
    subtitle: "Boundary-Spanning Objects and Spatial Intelligence",
    year: "Apr 2026",
    excerpt: "What if every object in a room could tell you its story?",
    doi: "10.5281/zenodo.19586867",
  },
  {
    slug: "research-edge-ai-genomics",
    title: "Edge-Native Intelligence",
    subtitle: "Sovereign Life Science Data Architecture",
    year: "Apr 2026",
    excerpt: "Your genomic data should never leave your device. Here\u2019s the architecture.",
    doi: "10.5281/zenodo.19601813",
  },
  {
    slug: "research-sports-dt",
    title: "The Transfer Due Diligence Twin",
    subtitle: "Biological Digital Twins in Sports Medicine",
    year: "Apr 2026",
    excerpt: "A \u20ac100M footballer\u2019s body has no documentation standard.",
    doi: "10.5281/zenodo.19601815",
  },
  {
    slug: "research-post-conflict",
    title: "From Conflict Zone to Innovation Hub",
    subtitle: "Post-War Nations as Emergent Ecosystems",
    year: "Apr 2026",
    excerpt: "The countries rebuilding from scratch have an advantage: no legacy.",
    doi: "10.5281/zenodo.19601817",
  },
  {
    slug: "research-ship-it-broken",
    title: "Ship It Broken, Label It Honest",
    subtitle: "Deployment Patterns for AI Agents",
    year: "Apr 2026",
    excerpt: "Perfect is the enemy of shipped. But dishonest is the enemy of trust.",
    doi: "10.5281/zenodo.19601819",
  },
  {
    slug: "research-api-first-screening",
    title: "114 Applicants, Zero CVs Read",
    subtitle: "API-First Contributor Screening",
    year: "Apr 2026",
    excerpt: "We replaced interviews with pull requests. The leaderboard IS the interview.",
    doi: "10.5281/zenodo.19601821",
  },
  {
    slug: "research-equine-data-os",
    title: "From Spreadsheets to Spatial Fabric",
    subtitle: "Why the Equine Industry Needs a Data OS",
    year: "Apr 2026",
    excerpt:
      "A horse breeder in South Africa taught us that animal health data is where human healthcare was in 2010.",
    doi: "10.5281/zenodo.19602349",
  },
  {
    slug: "research-leaderboard-screening",
    title: "114 to 9",
    subtitle: "What a Live Leaderboard Teaches About Screening",
    year: "Apr 2026",
    excerpt: "114 applicants. 9 contributed. 92% drop-off is not failure \u2014 it\u2019s signal.",
    doi: "10.5281/zenodo.19602339",
  },
  {
    slug: "research-epigenomics-edge",
    title: "Epigenomics Meets Edge",
    subtitle: "Freemium QC for Chromatin Research",
    year: "Apr 2026",
    excerpt: "You can\u2019t build AI on broken plumbing. Infrastructure before intelligence.",
    doi: "10.5281/zenodo.19602343",
  },
  {
    slug: "research-from-one-room",
    title: "From One Room to Fifty",
    subtitle: "Orchestrating Explainable AI in the Built Environment",
    year: "Oct 2025",
    excerpt: "Buildings are ecosystems. We\u2019ve been treating them as boxes.",
    doi: "10.5281/zenodo.17462962",
  },
  {
    slug: "research-beyond-shadows",
    title: "Beyond the Shadows",
    subtitle: "Contextual Awakening and Federated Learning",
    year: "Oct 2025",
    excerpt:
      "The shadow is not the thing. The map is not the territory. The twin is not the body.",
    doi: "10.5281/zenodo.17464804",
  },
  {
    slug: "research-infrastructure-before-intelligence",
    title: "Infrastructure Before Intelligence",
    subtitle: "Why a Biotech Startup Chose Cloud Foundations Over AI Models",
    year: "Apr 2026",
    excerpt: "You cannot build intelligence on broken plumbing. Three months of infrastructure before a single model.",
    doi: "10.5281/zenodo.19636820",
  },
  {
    slug: "research-point-clouds-decision-engines",
    title: "When Point Clouds Meet Decision Engines",
    subtitle: "Closing the Gap Between 3D Scanning and Actionable Intelligence",
    year: "Apr 2026",
    excerpt: "Scanning captures geometry. Nobody turns geometry into decisions. That\u2019s the gap.",
    doi: "10.5281/zenodo.19636822",
  },
  {
    slug: "research-ai-agent-security",
    title: "Edge-Native Security for AI Agents",
    subtitle: "Why Your Digital Twin Needs a Bodyguard",
    year: "Apr 2026",
    excerpt: "Your digital twin is a VIP. The AI agents are staff. The security layer is the bodyguard.",
    doi: "10.5281/zenodo.19636826",
  },
];

/* ═══════════════════════════════════════════════════════════════
   Build-time content loader
   Reads the markdown file for each article and strips YAML frontmatter.
   Returns empty string for articles with no source file.
   ═══════════════════════════════════════════════════════════════ */

function stripFrontmatter(raw: string): string {
  // Strip YAML frontmatter if present (--- ... ---)
  const fmMatch = raw.match(/^---\n[\s\S]*?\n---\n?/);
  if (fmMatch) {
    return raw.slice(fmMatch[0].length).trim();
  }
  return raw.trim();
}

function loadArticleContent(slug: string): string {
  const dir = SLUG_TO_DRAFT_DIR[slug];
  if (!dir) return "";
  const filePath = path.join(PUBLICATIONS_DRAFTS_ROOT, `${dir}.md`);
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return stripFrontmatter(raw);
  } catch {
    return "";
  }
}

/* ═══════════════════════════════════════════════════════════════
   Static params — required for output: 'export'
   ═══════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

/* ═══════════════════════════════════════════════════════════════
   Metadata — rich SEO + Schema.org JSON-LD
   ═══════════════════════════════════════════════════════════════ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Research \u2014 Life Atlas" };

  const canonicalUrl = `https://sentinel.lifeatlas.ai/research/${article.slug}`;
  const zenodoUrl = `https://doi.org/${article.doi}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    alternativeHeadline: article.subtitle,
    abstract: article.excerpt,
    author: {
      "@type": "Person",
      name: "Nicolas Waern",
      url: "https://orcid.org/0000-0001-7970-2707",
      affiliation: {
        "@type": "Organization",
        name: "WINNIIO AB",
        url: "https://winniio.io",
      },
    },
    datePublished: "2026-04-16",
    publisher: {
      "@type": "Organization",
      name: "WINNIIO AB",
      url: "https://winniio.io",
    },
    url: canonicalUrl,
    sameAs: zenodoUrl,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "DOI",
      value: article.doi,
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    isPartOf: {
      "@type": "Periodical",
      name: "Life Atlas Research Series",
      publisher: {
        "@type": "Organization",
        name: "WINNIIO AB",
      },
    },
    keywords: [
      "digital twins",
      "boundary objects",
      "edge computing",
      "data sovereignty",
      "biological digital twin",
      "SMILE methodology",
      "Life Atlas",
    ].join(", "),
  };

  return {
    title: `${article.title} \u2014 Life Atlas Research`,
    description: `${article.subtitle}. ${article.excerpt}`,
    robots: "index, follow",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: `${article.subtitle} \u2014 ${article.excerpt}`,
      type: "article",
      siteName: "Life Atlas",
      url: canonicalUrl,
      authors: ["Nicolas Waern"],
      publishedTime: "2026-04-16",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: `${article.subtitle}. ${article.excerpt}`,
    },
    other: {
      "citation_title": article.title,
      "citation_author": "Nicolas Waern",
      "citation_date": "2026/04/16",
      "citation_doi": article.doi,
      "citation_publisher": "WINNIIO AB",
      "dc.title": article.title,
      "dc.creator": "Nicolas Waern",
      "dc.identifier": `doi:${article.doi}`,
      "script:ld+json": JSON.stringify(jsonLd),
    },
  };
}

/* ═══════════════════════════════════════════════════════════════
   Page (server shell — loads content at build time, passes to client)
   ═══════════════════════════════════════════════════════════════ */

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const base = researchArticles.find((a) => a.slug === slug) ?? null;

  if (!base) {
    return <ResearchArticleClient article={null} />;
  }

  const content = loadArticleContent(slug);
  const article: ResearchArticle = { ...base, content };

  // Inject JSON-LD script tag for AI crawlers
  const zenodoUrl = `https://doi.org/${article.doi}`;
  const canonicalUrl = `https://sentinel.lifeatlas.ai/research/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: article.title,
    alternativeHeadline: article.subtitle,
    abstract: article.excerpt,
    author: {
      "@type": "Person",
      name: "Nicolas Waern",
      url: "https://orcid.org/0000-0001-7970-2707",
      affiliation: { "@type": "Organization", name: "WINNIIO AB" },
    },
    datePublished: "2026-04-16",
    publisher: { "@type": "Organization", name: "WINNIIO AB" },
    url: canonicalUrl,
    sameAs: zenodoUrl,
    identifier: { "@type": "PropertyValue", propertyID: "DOI", value: article.doi },
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResearchArticleClient article={article} />
    </>
  );
}
