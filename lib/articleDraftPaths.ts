/**
 * Maps research article slugs to their draft directory names.
 * The actual article.md path is: C:/Users/ceo/publications/drafts/{dir}/article.md
 * For Oct 2025 articles the published/ folder is empty — we fall back to no content.
 */
export const SLUG_TO_DRAFT_DIR: Record<string, string> = {
  "research-reality-construct": "000-reality-construct",
  "research-sovereign-body": "004-life-atlas-position",
  "research-indexing-reality": "003-indexing-reality",
  "research-edge-ai-genomics": "005-edge-ai-genomics",
  "research-sports-dt": "006-sports-dt-due-diligence",
  "research-post-conflict": "008-post-conflict-innovation",
  "research-ship-it-broken": "009-experimental-ai-deployment",
  "research-api-first-screening": "010-api-first-screening",
  "research-equine-data-os": "012-equine-data-operating-system",
  "research-leaderboard-screening": "013-leaderboard-contributor-screening",
  "research-epigenomics-edge": "014-epigenomics-freemium-gui",
  "research-infrastructure-before-intelligence": "015-infrastructure-before-intelligence",
  "research-point-clouds-decision-engines": "016-point-clouds-decision-engines",
  "research-ai-agent-security": "017-edge-native-ai-agent-security",
  "research-bio-threat-dt": "018-bio-threat-digital-twin",
  "research-spatial-web-browser": "019-spatial-web-browser-moment",
  "research-aas-agentic-ai": "020-aas-agentic-ai-manufacturing",
  "research-panic-pendant": "021-panic-pendant-dies",
  "research-edge-first-genomics": "022-edge-first-genomics",
  "research-queryable-spatial-rf": "023-queryable-spatial-rf",
  "research-smart-cities-dna": "024-smart-cities-digital-dna",
  "research-city-rf-layer": "025-city-dt-rf-layer",
  "research-crowdsourcing-dt": "026-crowdsourcing-dt-25m-sqm",
  "research-health-dt-tourism": "027-health-dt-medical-tourism",
  "research-edge-intelligence-buildings": "028-edge-intelligence-buildings",
  "research-spreadsheets-to-agents": "029-spreadsheets-to-ai-agents-property",
  "research-mechanistic-medicine": "030-mechanistic-models-functional-medicine",
  "research-teaching-dt-mba": "031-teaching-dt-mba-students",
  "research-energy-sovereignty": "032-energy-sovereignty-dt",
  "research-camera-first": "033-camera-first-construction",
  "research-gaussian-splatting": "034-open-source-gaussian-splatting",
  "research-quantum-cultural": "035-quantum-cultural-memory",
  "research-robots-factory": "036-robots-replace-factory-jobs",
  "research-drones-hurricane": "037-drones-hurricane-damage",
  "research-ai-killed-department": "038-ai-killed-department",
  "research-eu-ai-act": "039-eu-ai-act-billion-dollar-problem",
  "research-smile-methodology": "040-smile-methodology",
  "research-digital-twin-social-simulation": "041-digital-twin-social-simulation",
  // Oct 2025 articles: published/ dirs are empty — no content file available
  "research-from-one-room": null,
  "research-beyond-shadows": null,
} as unknown as Record<string, string>;

// Use repo-local content directory (works in CI and locally)
import path from "path";
export const PUBLICATIONS_DRAFTS_ROOT =
  path.join(process.cwd(), "content", "research");
