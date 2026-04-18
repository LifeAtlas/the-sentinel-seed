"use client";

import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════════ */

interface Article {
  id: number;
  dir: string;
  title: string;
  description: string;
  keywords: string;
  score: number;
  status: "ready" | "published" | "hold";
  doi?: string;
}

/* ═══════════════════════════════════════════════════════════════
   Article data — matches publications/tools/publish_all.py
   ═══════════════════════════════════════════════════════════════ */

const ARTICLES: Article[] = [
  {
    id: 5, dir: "005-edge-ai-genomics",
    title: "Edge-Native Intelligence for Sovereign Life Science Data",
    description: "Position paper on edge-native architecture for sovereign life science data processing.",
    keywords: "edge computing,genomics,data sovereignty,LQM,SQM,digital twins",
    score: 8.5, status: "published",
    doi: "10.5281/zenodo.19593261",
  },
  {
    id: 6, dir: "006-sports-dt-due-diligence",
    title: "The Transfer Due Diligence Twin",
    description: "Biological digital twins as asset valuation instruments in professional sports medicine.",
    keywords: "biological digital twin,sports medicine,athlete transfer,boundary objects",
    score: 8.6, status: "published",
    doi: "10.5281/zenodo.19593265",
  },
  {
    id: 8, dir: "008-post-conflict-innovation",
    title: "From Conflict Zone to Innovation Hub",
    description: "Post-war nations as emergent ecosystems for civilian drone infrastructure.",
    keywords: "post-conflict reconstruction,drone infrastructure,digital twin,Sendai Framework",
    score: 8.5, status: "published",
    doi: "10.5281/zenodo.19593267",
  },
  {
    id: 9, dir: "009-experimental-ai-deployment",
    title: "Ship It Broken, Label It Honest",
    description: "Deployment patterns for AI agents in early-stage wellness platforms.",
    keywords: "AI deployment,experimental label,wellness platform,critical realism",
    score: 8.8, status: "published",
    doi: "10.5281/zenodo.19593271",
  },
  {
    id: 10, dir: "010-api-first-screening",
    title: "114 Applicants, Zero CVs Read",
    description: "Designing an API-first contributor screening methodology.",
    keywords: "contributor screening,API-first,work sample testing,absorptive capacity",
    score: 8.6, status: "published",
    doi: "10.5281/zenodo.19593273",
  },
  {
    id: 7, dir: "007-bio-dt-product-ladder",
    title: "From Data Aggregation to Mechanistic Simulation",
    description: "A product ladder framework for personal biological digital twins.",
    keywords: "product ladder,biological digital twin,Carlile,WHO QoL",
    score: 8.3, status: "hold",
  },
  {
    id: 11, dir: "011-bacnet-to-bodies",
    title: "When Buildings and Bodies Finally Talk",
    description: "From automated to programmable — bridging BACnet and FHIR.",
    keywords: "BACnet,FHIR,building automation,personal digital twin",
    score: 8.4, status: "hold",
  },
  {
    id: 4, dir: "004-life-atlas-position",
    title: "The Sovereign Body",
    description: "Personal digital twins as boundary-spanning objects across WHO QoL dimensions.",
    keywords: "personal digital twin,WHO QoL,boundary objects,edge computing",
    score: 8.8, status: "published",
    doi: "10.5281/zenodo.19586851",
  },
];

const REALITY_CONSTRUCT_DOI = "10.5281/zenodo.19587944";
const ZENODO_API = "https://zenodo.org/api";
const ADMIN_PASSWORD = "winniio2026";

/* ═══════════════════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════════════════ */

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [articles, setArticles] = useState<Article[]>(ARTICLES);
  const [publishing, setPublishing] = useState<number | null>(null);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("zenodo_token");
    if (saved) setToken(saved);
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") setAuthenticated(true);
  }, []);

  const addLog = useCallback((msg: string) => {
    setLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    }
  };

  const saveToken = () => {
    localStorage.setItem("zenodo_token", token);
    addLog("Zenodo token saved to browser.");
  };

  const publishArticle = async (article: Article) => {
    if (!token) {
      addLog("ERROR: No Zenodo token set.");
      return;
    }
    if (article.status === "published") {
      addLog(`${article.title} already published: ${article.doi}`);
      return;
    }

    setPublishing(article.id);
    addLog(`Publishing: ${article.title}...`);

    try {
      // 1. Create deposit
      const createResp = await fetch(`${ZENODO_API}/deposit/depositions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (!createResp.ok) throw new Error(`Create failed: ${createResp.status}`);
      const deposit = await createResp.json();
      const depId = deposit.id;
      addLog(`  Deposit created: ${depId}`);

      // 2. Set metadata
      const metadata = {
        metadata: {
          upload_type: "publication",
          publication_type: "workingpaper",
          access_right: "open",
          license: "cc-by-4.0",
          language: "eng",
          title: article.title,
          description: article.description,
          creators: [{ name: "Waern, Nicolas", affiliation: "WINNIIO AB", orcid: "0000-0001-7970-2707" }],
          keywords: article.keywords.split(",").map(k => k.trim()),
          related_identifiers: [
            { identifier: REALITY_CONSTRUCT_DOI, relation: "continues", scheme: "doi" },
          ],
        },
      };

      const metaResp = await fetch(`${ZENODO_API}/deposit/depositions/${depId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(metadata),
      });
      if (!metaResp.ok) throw new Error(`Metadata failed: ${metaResp.status}`);
      addLog("  Metadata set.");

      // Note: Can't upload PDF from browser (no file access).
      // The article is published as metadata-only — PDF must be uploaded via CLI.
      addLog("  NOTE: Metadata-only deposit. Run `python publish.py` for PDF upload.");
      addLog(`  Preview: https://zenodo.org/deposit/${depId}`);

      // Don't auto-publish without PDF — leave as draft
      setArticles(prev =>
        prev.map(a =>
          a.id === article.id ? { ...a, status: "ready" as const } : a
        )
      );
    } catch (err) {
      addLog(`  ERROR: ${err}`);
    } finally {
      setPublishing(null);
    }
  };

  /* ── Login Screen ── */
  if (!authenticated) {
    return (
      <div style={{ background: "#0a0a0a", color: "#e0e0e0", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Sentinel Seeds — Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            style={{ padding: "10px 16px", fontSize: "16px", background: "#1a1a1a", color: "#fff", border: "1px solid #333", borderRadius: "6px", width: "250px" }}
          />
          <br />
          <button onClick={handleLogin} style={{ marginTop: "12px", padding: "10px 24px", fontSize: "14px", background: "#c9a227", color: "#000", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  /* ── Admin Dashboard ── */
  const published = articles.filter(a => a.status === "published");
  const ready = articles.filter(a => a.status === "ready");
  const hold = articles.filter(a => a.status === "hold");

  return (
    <div style={{ background: "#0a0a0a", color: "#e0e0e0", minHeight: "100vh", padding: "40px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>Publishing Command Center</h1>
        <p style={{ color: "#888", marginBottom: "30px" }}>Nicolas Waern — WINNIIO AB — ORCID 0000-0001-7970-2707</p>

        {/* Token setup */}
        <div style={{ background: "#111", padding: "16px", borderRadius: "8px", marginBottom: "24px" }}>
          <label style={{ fontSize: "12px", color: "#888" }}>Zenodo Token</label>
          <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
            <input
              type="password"
              value={token}
              onChange={e => setToken(e.target.value)}
              placeholder="Paste your Zenodo token"
              style={{ flex: 1, padding: "8px 12px", background: "#1a1a1a", color: "#fff", border: "1px solid #333", borderRadius: "4px", fontSize: "13px" }}
            />
            <button onClick={saveToken} style={{ padding: "8px 16px", background: "#333", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
              Save
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <div style={{ flex: 1, background: "#0d1f0d", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#4ade80" }}>{published.length}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>Published</div>
          </div>
          <div style={{ flex: 1, background: "#1f1f0d", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#facc15" }}>{ready.length}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>Ready</div>
          </div>
          <div style={{ flex: 1, background: "#1f0d0d", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#f87171" }}>{hold.length}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>On Hold</div>
          </div>
        </div>

        {/* Articles */}
        <h2 style={{ fontSize: "18px", marginBottom: "12px" }}>Articles</h2>
        {articles.map(article => (
          <div
            key={article.id}
            style={{
              background: "#111",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "8px",
              borderLeft: `3px solid ${article.status === "published" ? "#4ade80" : article.status === "ready" ? "#facc15" : "#555"}`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  #{article.id} — {article.title}
                </div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
                  Score: {article.score} |{" "}
                  {article.status === "published" && article.doi ? (
                    <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noreferrer" style={{ color: "#4ade80" }}>
                      {article.doi}
                    </a>
                  ) : (
                    <span style={{ color: article.status === "ready" ? "#facc15" : "#f87171" }}>
                      {article.status.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              {article.status === "ready" && (
                <button
                  onClick={() => publishArticle(article)}
                  disabled={publishing === article.id}
                  style={{
                    padding: "8px 16px",
                    background: publishing === article.id ? "#555" : "#c9a227",
                    color: "#000",
                    border: "none",
                    borderRadius: "6px",
                    cursor: publishing === article.id ? "wait" : "pointer",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {publishing === article.id ? "Publishing..." : "Publish"}
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Log */}
        {log.length > 0 && (
          <div style={{ marginTop: "24px" }}>
            <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>Log</h2>
            <div style={{ background: "#111", padding: "12px", borderRadius: "8px", fontFamily: "monospace", fontSize: "12px", maxHeight: "200px", overflow: "auto" }}>
              {log.map((entry, i) => (
                <div key={i}>{entry}</div>
              ))}
            </div>
          </div>
        )}

        <p style={{ fontSize: "11px", color: "#444", marginTop: "40px", textAlign: "center" }}>
          Sentinel Seeds Publishing Command Center — WINNIIO AB 2026
        </p>
      </div>
    </div>
  );
}
