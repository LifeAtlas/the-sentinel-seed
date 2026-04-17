import type { Metadata } from "next";
import ResearchArticleClient from "./ResearchArticleClient";

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
}

export const researchArticles: ResearchArticle[] = [
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
    excerpt: "Scanning captures geometry. Nobody turns geometry into decisions. That's the gap.",
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
   Static params — required for output: 'export'
   ═══════════════════════════════════════════════════════════════ */

export function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

/* ═══════════════════════════════════════════════════════════════
   Metadata
   ═══════════════════════════════════════════════════════════════ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Research \u2014 Life Atlas" };

  return {
    title: `${article.title} \u2014 Life Atlas Research`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: `${article.subtitle} \u2014 ${article.excerpt}`,
      type: "article",
      siteName: "Life Atlas",
      url: `https://doi.org/${article.doi}`,
    },
  };
}

/* ═══════════════════════════════════════════════════════════════
   Page (server shell — passes data to client component)
   ═══════════════════════════════════════════════════════════════ */

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = researchArticles.find((a) => a.slug === slug) ?? null;
  return <ResearchArticleClient article={article} />;
}
