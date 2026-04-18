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
  // Oct 2025 articles: published/ dirs are empty — no content file available
  "research-from-one-room": null,
  "research-beyond-shadows": null,
} as unknown as Record<string, string>;

// Use repo-local content directory (works in CI and locally)
import path from "path";
export const PUBLICATIONS_DRAFTS_ROOT =
  path.join(process.cwd(), "content", "research");
