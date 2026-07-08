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
    slug: "research-quantum-city",
    title: "The Quantum City",
    subtitle: "Self-Healing Networks, Interoperable Digital Twins, and the Architecture Decisions That Reverb With Eternity",
    year: "Jul 8, 2026",
    excerpt: "Kyiv proved the axis is not cloud versus on-premise but reachability under partition. No data should depend on one reachable place.",
    doi: "10.5281/zenodo.21258104",
  },
  {
    slug: "research-reality-construct",
    title: "The Reality Construct",
    subtitle: "Digital Twins as Boundary-Spanning Artefacts",
    year: "Apr 16, 2026",
    excerpt: "Reality is not a given. It is constructed, negotiated, and increasingly computed.",
    doi: "10.5281/zenodo.19587944",
  },
  {
    slug: "research-sovereign-body",
    title: "The Sovereign Body",
    subtitle: "Personal Digital Twins Across WHO QoL Dimensions",
    year: "Apr 16, 2026",
    excerpt: "Your body is the most complex system you will ever own. And you have no API for it.",
    doi: "10.5281/zenodo.19586851",
  },
  {
    slug: "research-indexing-reality",
    title: "Indexing Reality",
    subtitle: "Boundary-Spanning Objects and Spatial Intelligence",
    year: "Apr 16, 2026",
    excerpt: "What if every object in a room could tell you its story?",
    doi: "10.5281/zenodo.19586867",
  },
  {
    slug: "research-edge-ai-genomics",
    title: "Edge-Native Intelligence",
    subtitle: "Sovereign Life Science Data Architecture",
    year: "Apr 16, 2026",
    excerpt: "Your genomic data should never leave your device. Here\u2019s the architecture.",
    doi: "10.5281/zenodo.19601813",
  },
  {
    slug: "research-sports-dt",
    title: "The Transfer Due Diligence Twin",
    subtitle: "Biological Digital Twins in Sports Medicine",
    year: "Apr 16, 2026",
    excerpt: "A \u20ac100M footballer\u2019s body has no documentation standard.",
    doi: "10.5281/zenodo.19601815",
  },
  {
    slug: "research-post-conflict",
    title: "From Conflict Zone to Innovation Hub",
    subtitle: "Post-War Nations as Emergent Ecosystems",
    year: "Apr 16, 2026",
    excerpt: "The countries rebuilding from scratch have an advantage: no legacy.",
    doi: "10.5281/zenodo.19601817",
  },
  {
    slug: "research-ship-it-broken",
    title: "Ship It Broken, Label It Honest",
    subtitle: "Deployment Patterns for AI Agents",
    year: "Apr 16, 2026",
    excerpt: "Perfect is the enemy of shipped. But dishonest is the enemy of trust.",
    doi: "10.5281/zenodo.19601819",
  },
  {
    slug: "research-api-first-screening",
    title: "114 Applicants, Zero CVs Read",
    subtitle: "API-First Contributor Screening",
    year: "Apr 16, 2026",
    excerpt: "We replaced interviews with pull requests. The leaderboard IS the interview.",
    doi: "10.5281/zenodo.19601821",
  },
  {
    slug: "research-equine-data-os",
    title: "From Spreadsheets to Spatial Fabric",
    subtitle: "Why the Equine Industry Needs a Data OS",
    year: "Apr 16, 2026",
    excerpt:
      "A horse breeder in South Africa taught us that animal health data is where human healthcare was in 2010.",
    doi: "10.5281/zenodo.19602349",
  },
  {
    slug: "research-leaderboard-screening",
    title: "114 to 9",
    subtitle: "What a Live Leaderboard Teaches About Screening",
    year: "Apr 16, 2026",
    excerpt: "114 applicants. 9 contributed. 92% drop-off is not failure \u2014 it\u2019s signal.",
    doi: "10.5281/zenodo.19602339",
  },
  {
    slug: "research-epigenomics-edge",
    title: "Epigenomics Meets Edge",
    subtitle: "Freemium QC for Chromatin Research",
    year: "Apr 16, 2026",
    excerpt: "You can\u2019t build AI on broken plumbing. Infrastructure before intelligence.",
    doi: "10.5281/zenodo.19602343",
  },
  {
    slug: "research-from-one-room",
    title: "From One Room to Fifty",
    subtitle: "Orchestrating Explainable AI in the Built Environment",
    year: "Oct 28, 2025",
    excerpt: "Buildings are ecosystems. We\u2019ve been treating them as boxes.",
    doi: "10.5281/zenodo.17462962",
  },
  {
    slug: "research-beyond-shadows",
    title: "Beyond the Shadows",
    subtitle: "Contextual Awakening and Federated Learning",
    year: "Oct 28, 2025",
    excerpt:
      "The shadow is not the thing. The map is not the territory. The twin is not the body.",
    doi: "10.5281/zenodo.17464804",
  },
  {
    slug: "research-infrastructure-before-intelligence",
    title: "Infrastructure Before Intelligence",
    subtitle: "Why a Biotech Startup Chose Cloud Foundations Over AI Models",
    year: "Apr 18, 2026",
    excerpt: "You cannot build intelligence on broken plumbing. Three months of infrastructure before a single model.",
    doi: "10.5281/zenodo.19636820",
  },
  {
    slug: "research-point-clouds-decision-engines",
    title: "When Point Clouds Meet Decision Engines",
    subtitle: "Closing the Gap Between 3D Scanning and Actionable Intelligence",
    year: "Apr 18, 2026",
    excerpt: "Scanning captures geometry. Nobody turns geometry into decisions. That\u2019s the gap.",
    doi: "10.5281/zenodo.19636822",
  },
  {
    slug: "research-ai-agent-security",
    title: "Edge-Native Security for AI Agents",
    subtitle: "Why Your Digital Twin Needs a Bodyguard",
    year: "Apr 18, 2026",
    excerpt: "Your digital twin is a VIP. The AI agents are staff. The security layer is the bodyguard.",
    doi: "10.5281/zenodo.19636826",
  },
  {
    slug: "research-bio-threat-dt",
    title: "From Years to Days",
    subtitle: "Compressing Pharmaceutical Response to Bio-Threats",
    year: "Apr 19, 2026",
    excerpt: "The gap between biological threat identification and pharmaceutical response has historically been measured in years. Digital twins compress it to days.",
    doi: "10.5281/zenodo.19643317",
  },
  {
    slug: "research-spatial-web-browser",
    title: "The Web Browser Moment",
    subtitle: "Open Standards for the Spatial Web",
    year: "Apr 19, 2026",
    excerpt: "The spatial web is where the internet was in 1993. One open standard away from explosion.",
    doi: "10.5281/zenodo.19643348",
  },
  {
    slug: "research-aas-agentic-ai",
    title: "Asset Administration Shell Meets Agentic AI",
    subtitle: "The Quiet Revolution in Manufacturing",
    year: "Apr 19, 2026",
    excerpt: "AAS gives every asset a passport. Agentic AI gives every passport a brain.",
    doi: "10.5281/zenodo.19643320",
  },
  {
    slug: "research-panic-pendant",
    title: "When the Panic Pendant Dies",
    subtitle: "Edge-Native IoT for Preventive Healthcare",
    year: "Apr 19, 2026",
    excerpt: "The pendant fails at 3am. Edge-native architecture means care never depends on the cloud being up.",
    doi: "10.5281/zenodo.19643324",
  },
  {
    slug: "research-edge-first-genomics",
    title: "Edge-First Genomics",
    subtitle: "Why Labs Process Data Locally",
    year: "Apr 19, 2026",
    excerpt: "Genomic data is the most sensitive data on Earth. Sending it to the cloud is an architecture mistake.",
    doi: "10.5281/zenodo.19643350",
  },
  {
    slug: "research-queryable-spatial-rf",
    title: "Building a Queryable Spatial-RF Fabric",
    subtitle: "250,000 Villages Connected",
    year: "Apr 19, 2026",
    excerpt: "RF is invisible infrastructure. Making it queryable turns every antenna into a node in a planetary nervous system.",
    doi: "10.5281/zenodo.19643352",
  },
  {
    slug: "research-smart-cities-dna",
    title: "Digital DNA Scoring",
    subtitle: "City Readiness for Autonomous Operations",
    year: "Apr 19, 2026",
    excerpt: "Every city has a digital DNA. Most cities don\u2019t know their score. The ones that do move faster.",
    doi: "10.5281/zenodo.19643354",
  },
  {
    slug: "research-city-rf-layer",
    title: "Your City Needs an RF Layer",
    subtitle: "Why Digital Twins Are Blind Without Radio",
    year: "Apr 19, 2026",
    excerpt: "3D models see geometry. RF layers see presence, occupancy, and signal. Without radio, the twin is blind.",
    doi: "10.5281/zenodo.19643356",
  },
  {
    slug: "research-crowdsourcing-dt",
    title: "Crowdsourcing Digital Twins at Scale",
    subtitle: "Facility Managers as the Data Workforce",
    year: "Apr 19, 2026",
    excerpt: "The most accurate floor plans in existence are held by people with clipboards. Time to give them an API.",
    doi: "10.5281/zenodo.19643501",
  },
  {
    slug: "research-health-dt-tourism",
    title: "Health DTs for Cross-Border Care",
    subtitle: "Patient Data That Travels With You",
    year: "Apr 19, 2026",
    excerpt: "Medical tourism is growing. Patient data doesn\u2019t travel. The health digital twin fixes both problems.",
    doi: "10.5281/zenodo.19643505",
  },
  {
    slug: "research-edge-intelligence-buildings",
    title: "Edge Intelligence for Buildings",
    subtitle: "Not Dashboards",
    year: "Apr 19, 2026",
    excerpt: "Buildings don\u2019t need better dashboards. They need edge intelligence that acts without being told.",
    doi: "10.5281/zenodo.19643509",
  },
  {
    slug: "research-spreadsheets-to-agents",
    title: "From Spreadsheets to AI Agents",
    subtitle: "600 People Rethinking Data",
    year: "Apr 19, 2026",
    excerpt: "600 property managers. 600 spreadsheets. One AI agent layer. The transition is not about software \u2014 it\u2019s about trust.",
    doi: "10.5281/zenodo.19643511",
  },
  {
    slug: "research-mechanistic-medicine",
    title: "When Research Meets the Clinic",
    subtitle: "Bridging Mechanistic Models and Medicine",
    year: "Apr 19, 2026",
    excerpt: "Mechanistic models predict. Clinical data validates. The bridge between them is the missing layer in precision medicine.",
    doi: "10.5281/zenodo.19643471",
  },
  {
    slug: "research-teaching-dt-mba",
    title: "Teaching DTs to MBA Students",
    subtitle: "Financial Metrics Beat Tech Demos",
    year: "Apr 19, 2026",
    excerpt: "MBA students don\u2019t care about the architecture. They care about the ROI. Teaching digital twins through finance unlocks the room.",
    doi: "10.5281/zenodo.19643513",
  },
  {
    slug: "research-energy-sovereignty",
    title: "Digital Twins for Energy Sovereignty",
    subtitle: "Graph DBs and VR Compress Skill Transfer",
    year: "Apr 19, 2026",
    excerpt: "Energy sovereignty starts with knowing what you consume. Graph databases and VR cut skill transfer time from months to days.",
    doi: "10.5281/zenodo.19643516",
  },
  {
    slug: "research-camera-first",
    title: "Camera-First Construction",
    subtitle: "Physical AI Meets Model Management",
    year: "Apr 19, 2026",
    excerpt: "Every construction site is already covered in cameras. Most of them are recording nothing useful. Camera-first flips the model.",
    doi: "10.5281/zenodo.19643520",
  },
  {
    slug: "research-gaussian-splatting",
    title: "Open-Source 3D Gaussian Splatting",
    subtitle: "Hybrid Cloud-Edge for Construction",
    year: "Apr 19, 2026",
    excerpt: "Gaussian splatting went open-source. The construction industry didn\u2019t notice. It should have.",
    doi: "10.5281/zenodo.19643522",
  },
  {
    slug: "research-quantum-cultural",
    title: "From Quantum to Cultural Memory",
    subtitle: "Beyond Factory Digital Twins",
    year: "Apr 19, 2026",
    excerpt: "The factory twin captures operations. The cultural memory twin captures knowledge. Both are necessary for organizational survival.",
    doi: "10.5281/zenodo.19643590",
  },
  {
    slug: "research-robots-factory",
    title: "Robots Will Replace Every Job",
    subtitle: "Pharma Standards for the Transition",
    year: "Apr 19, 2026",
    excerpt: "Automation is inevitable. The question is whether the transition follows pharma-grade standards or collapses into chaos.",
    doi: "10.5281/zenodo.19643596",
  },
  {
    slug: "research-drones-hurricane",
    title: "Drones and Hurricane Damage",
    subtitle: "Replacing Manual Inspections",
    year: "Apr 19, 2026",
    excerpt: "After a hurricane, inspectors walk every street. Drones can cover the same ground in hours. The data feeds directly into the digital twin.",
    doi: "10.5281/zenodo.19643598",
  },
  {
    slug: "research-ai-killed-department",
    title: "AI Killed a Department",
    subtitle: "When Automation Actually Works",
    year: "Apr 19, 2026",
    excerpt: "A department of twelve was replaced by one AI agent and two people who knew how to run it. This is what successful automation looks like.",
    doi: "10.5281/zenodo.19643600",
  },
  {
    slug: "research-eu-ai-act",
    title: "The EU AI Act Problem",
    subtitle: "Compliance as Platform Opportunity",
    year: "Apr 19, 2026",
    excerpt: "The EU AI Act is not a blocker. For teams with the right architecture, it is a moat. Compliance becomes the product.",
    doi: "10.5281/zenodo.19643604",
  },
  {
    slug: "research-smile-methodology",
    title: "SMILE v4.4",
    subtitle: "The Reality Fabric \u2014 Universal Methodology",
    year: "Apr 19, 2026",
    excerpt: "SMILE is not a framework. It is a methodology for building reality-aligned systems. Version 4.4 adds the Reality Fabric layer.",
    doi: "10.5281/zenodo.19646374",
  },
  {
    slug: "research-digital-twin-social-simulation",
    title: "Can Digital Twins Form Their Own Teams?",
    subtitle: "Part I: The Setup \u2014 A Six-Part Experiment",
    year: "Apr 20, 2026",
    excerpt: "44 interns. 44 soul files. One compatibility matrix. Three natural squads emerged before anyone met. The twins talked first.",
    doi: "10.5281/zenodo.19657591",
  },
  {
    slug: "research-tokyo-2040-reactive-networks",
    title: "Tokyo 2040: From Reactive Networks to Living Digital Twins",
    subtitle: "How Open RAN and Holographic Societies Will Reshape Connectivity",
    year: "Apr 28, 2026",
    excerpt: "Shinjuku Station. 3.64 million passengers daily. The network handles it. Mostly. But 'mostly' is where the interesting engineering lives.",
    doi: "",
  },
  {
    slug: "research-tokyo-2040-cognitive-cities",
    title: "From Reactive Networks to Cognitive Cities",
    subtitle: "A SMILE-Based Digital Twin Roadmap for 6G and Holographic Societies (2025\u20132040)",
    year: "Apr 28, 2026",
    excerpt: "6G does not merely accelerate 5G. It constitutes the nervous system of a fundamentally different kind of city. 81 references.",
    doi: "",
  },
  {
    slug: "research-tokyo-2040-last-drive-test",
    title: "The Last Drive Test",
    subtitle: "A Sentinel Story \u2014 Tokyo, March 2040",
    year: "Apr 28, 2026",
    excerpt: "Keiko Tanaka keeps the old measurement rig on the shelf behind her desk. It isn\u2019t nostalgia. She is the reminder.",
    doi: "",
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
