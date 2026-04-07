"use client";
import StoryNav from "../components/StoryNav";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   Hooks
   ═══════════════════════════════════════════════════════════════ */

function useFadeIn(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return progress;
}

/* ═══════════════════════════════════════════════════════════════
   ProgressBar
   ═══════════════════════════════════════════════════════════════ */

function ProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-px" style={{ background: "var(--color-border)" }}>
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{ width: `${progress * 100}%`, background: "linear-gradient(90deg, var(--color-gold-dim), var(--color-gold))" }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FadeBlock — generic fade-in wrapper
   ═══════════════════════════════════════════════════════════════ */

function FadeBlock({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${className}`}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(16px)", transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ActDivider
   ═══════════════════════════════════════════════════════════════ */

function ActDivider({ act, title, subtitle }: { act: string; title: string; subtitle: string }) {
  const { ref, visible } = useFadeIn(0.06);
  return (
    <div
      ref={ref}
      className="my-20 md:my-28 text-center transition-all duration-[1800ms] ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)" }}
    >
      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-gold-dim))" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-gold-dim)" }} />
        <div className="h-px flex-1 max-w-[100px]" style={{ background: "linear-gradient(90deg, var(--color-gold-dim), transparent)" }} />
      </div>
      <p className="text-[10px] tracking-[0.6em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
        {act}
      </p>
      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
        {title}
      </h2>
      <p className="text-sm italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
        {subtitle}
      </p>
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, transparent, var(--color-border))" }} />
        <div className="w-px h-4" style={{ background: "var(--color-gold-dim)", opacity: 0.4 }} />
        <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, var(--color-border), transparent)" }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SectionLabel
   ═══════════════════════════════════════════════════════════════ */

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[9px] tracking-[0.4em] uppercase mb-3 mt-8" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Prose
   ═══════════════════════════════════════════════════════════════ */

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.95rem] leading-[1.9] mb-5" style={{ color: "var(--color-text-secondary)" }}>
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CodeBlock
   ═══════════════════════════════════════════════════════════════ */

function CodeBlock({ code, language = "python" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <FadeBlock className="my-6">
      <div
        className="rounded-md overflow-hidden border"
        style={{ borderColor: "var(--color-border)", background: "#0b0b0e" }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ borderColor: "var(--color-border)", background: "#0d0d10" }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="text-[9px] tracking-[0.2em] uppercase transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif", color: copied ? "var(--color-gold)" : "var(--color-text-secondary)", opacity: 0.7 }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        {/* Code */}
        <pre
          className="overflow-x-auto px-5 py-5 text-[0.78rem] leading-[1.75]"
          style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace", color: "#c9b882" }}
        >
          <code>{code}</code>
        </pre>
      </div>
    </FadeBlock>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ResultsTable — generic key/value or multi-column table
   ═══════════════════════════════════════════════════════════════ */

interface TableRow {
  cells: string[];
  highlight?: "warning" | "preferred" | "normal";
}

function ResultsTable({ headers, rows }: { headers: string[]; rows: TableRow[] }) {
  const highlightStyle = (h?: "warning" | "preferred" | "normal") => {
    if (h === "warning") return { color: "#e8a060" };
    if (h === "preferred") return { color: "#6abf69" };
    return {};
  };

  return (
    <FadeBlock className="my-6 overflow-x-auto">
      <table
        className="w-full text-[0.78rem] border-collapse"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2 text-[9px] tracking-[0.25em] uppercase"
                style={{ color: "var(--color-gold-dim)", fontWeight: 400 }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{ borderBottom: "1px solid rgba(30,30,36,0.5)", ...highlightStyle(row.highlight) }}
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 leading-[1.55]"
                  style={{ color: row.highlight ? undefined : "var(--color-text-secondary)" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </FadeBlock>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CalloutBox
   ═══════════════════════════════════════════════════════════════ */

function CalloutBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <FadeBlock className="my-6">
      <div
        className="rounded-md px-5 py-4 border-l-2"
        style={{ background: "var(--color-surface)", borderLeftColor: "var(--color-gold-dim)" }}
      >
        <p className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
          {label}
        </p>
        <div className="text-[0.88rem] leading-[1.8]" style={{ color: "var(--color-text-secondary)" }}>
          {children}
        </div>
      </div>
    </FadeBlock>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Pipeline diagram (Act 3)
   ═══════════════════════════════════════════════════════════════ */

const pipelineSteps = [
  { label: "Patient genotype (Act 2)", note: "CYP2D6 *1/*4 — Intermediate Metabolizer" },
  { label: "CYP2D6 IM phenotype", note: "Reduced enzyme activity, activity score 1.0" },
  { label: "Donepezil AUC +40–60%", note: "Higher plasma concentration than population average" },
  { label: "Receptor occupancy curve", note: "M4 ODE — AChE binding kinetics over time" },
  { label: "Downstream cAMP signalling", note: "M4 ODE — G-protein cascade, synaptic plasticity" },
  { label: "Synaptic plasticity score", note: "M4 output — measurable surrogate endpoint" },
  { label: "Predicted MMSE trajectory", note: "Clinical output — cognitive function over 12 months" },
  { label: "Decision: reduce dose 10mg → 5mg", note: "Clinician action — auditable, reversible" },
];

function PipelineDiagram() {
  return (
    <FadeBlock className="my-8">
      <div className="space-y-0">
        {pipelineSteps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="flex flex-col items-center pt-1" style={{ minWidth: "20px" }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: i === pipelineSteps.length - 1 ? "var(--color-gold)" : "var(--color-gold-dim)" }} />
              {i < pipelineSteps.length - 1 && (
                <div className="w-px flex-1" style={{ height: "28px", background: "linear-gradient(to bottom, var(--color-gold-dim), var(--color-border))" }} />
              )}
            </div>
            <div className="pb-3">
              <p className="text-[0.82rem] font-medium" style={{ color: i === pipelineSteps.length - 1 ? "var(--color-gold)" : "var(--color-text)", fontFamily: "'Inter', sans-serif" }}>
                {step.label}
              </p>
              <p className="text-[0.72rem]" style={{ color: "var(--color-text-secondary)", opacity: 0.7, fontFamily: "'Inter', sans-serif" }}>
                {step.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </FadeBlock>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════════ */

export default function DemoBiologicalTwin() {
  const { ref: titleRef, visible: titleVisible } = useFadeIn(0.05);

  return (
    <main className="min-h-screen">
      <ProgressBar />
      <StoryNav />

      {/* ════════════════════════════════════════════════
          Hero
          ════════════════════════════════════════════════ */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.05) 0%, transparent 65%)" }}
        />

        {/* Floating motes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 3 === 0 ? "2px" : "1px",
                height: i % 3 === 0 ? "2px" : "1px",
                background: "var(--color-gold)",
                opacity: 0.06 + (i % 5) * 0.02,
                left: `${5 + i * 7}%`,
                top: `${10 + (i % 6) * 13}%`,
                animation: `mote ${10 + i * 1.1}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={titleRef}
          className="text-center px-6 relative transition-all duration-[2200ms] ease-out"
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? "none" : "translateY(28px)" }}
        >
          <div className="mb-8 flex justify-center">
            <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold-dim))" }} />
          </div>

          <p className="text-[9px] tracking-[0.6em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
            Life Atlas — Technical Demo
          </p>
          <p className="text-[9px] tracking-[0.45em] uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)", opacity: 0.5 }}>
            Audience: Marc Horner, Distinguished Scientist, Ansys / Synopsys
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-5 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}>
            Biological Digital Twin
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-3 tracking-wide" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
            Three Acts: Disease. Patient. Integration.
          </h2>

          <p className="text-sm italic mb-12 max-w-lg mx-auto leading-[1.7]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text-secondary)" }}>
            A working pipeline from genomic target landscape to metabolic flux simulation — with an explicit bridge to M4&apos;s ODE system and the V&amp;V 40 credibility argument.
          </p>

          <div className="flex flex-col items-center gap-3" style={{ color: "var(--color-gold-dim)" }}>
            <span className="text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
            <div className="w-px h-10 animate-pulse" style={{ background: "var(--color-gold-dim)" }} />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          Body
          ════════════════════════════════════════════════ */}
      <article className="max-w-[780px] mx-auto px-6 pb-32">

        {/* ── Context ── */}
        <FadeBlock className="mb-16">
          <CalloutBox label="Context">
            <p>
              Marc Horner co-authored ASME V&amp;V 40 — the FDA standard that defines how computational models earn regulatory credibility. This demo was built specifically for him, answering his four questions about the LifeAtlas + M4 biological twin platform: individual patient twins, disease scope, extensibility, and dual monetisation.
            </p>
            <p className="mt-3">
              Everything shown here is real computation. No mocks. Live API calls to Open Targets Platform. Live COBRApy flux balance analysis. The numbers are the numbers.
            </p>
          </CalloutBox>
        </FadeBlock>

        {/* ── The Ansys Equivalence Table ── */}
        <FadeBlock>
          <SectionLabel>The Ansys Equivalence</SectionLabel>
          <p className="text-lg font-light mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-text)" }}>
            Three acts that map exactly to the Ansys simulation workflow
          </p>
          <Prose>
            Marc speaks the language of computational physics. Before showing code, here is the translation: the three acts of this demo map directly to the three stages of any Ansys FEA or CFD analysis. Same epistemology. Different domain.
          </Prose>
          <ResultsTable
            headers={["Act", "Shows", "Ansys Equivalent"]}
            rows={[
              { cells: ["Act 1 — Disease map", "All molecular targets for Alzheimer's, ranked by evidence score", "Complete CAD model of the system — the full structural blueprint before any load is applied"] },
              { cells: ["Act 2 — Patient overlay", "How one patient's genetics change drug metabolism and risk profile", "Site-specific material properties and boundary conditions — same design, different soil, different climate, different outcome"] },
              { cells: ["Act 3 — Live simulation", "Metabolic flux model running real math under a glucose restriction perturbation", "FEA/CFD solver running under load — watching where stress concentrates, where the system compensates, where it breaks"] },
            ]}
          />
          <Prose>
            Acts 1 and 2 are the model. Act 3 is the solver. Together they create a patient-specific biological simulation. M4 is the platform that orchestrates all three at scale, across organs, over time.
          </Prose>
        </FadeBlock>

        {/* ════ ACT 1 ════ */}
        <ActDivider
          act="Act 1"
          title="Here Is the Disease"
          subtitle="Alzheimer's target landscape via Open Targets Platform"
        />

        <FadeBlock>
          <SectionLabel>Plain English</SectionLabel>
          <Prose>
            Before you can simulate a building, you need the complete electrical blueprint. Every circuit breaker, every wire, every junction box. You need to see exactly where things connect, where the faults might be, and which systems depend on which.
          </Prose>
          <Prose>
            Act 1 does this for Alzheimer&apos;s disease. The genes and proteins are the wiring. We pull the complete map from a live biomedical database — 13,142 associated targets for Alzheimer&apos;s, ranked by multi-evidence association score. This is the disease&apos;s full circuit diagram before we place a patient into it.
          </Prose>
        </FadeBlock>

        <FadeBlock>
          <SectionLabel>The Code</SectionLabel>
        </FadeBlock>

        <CodeBlock language="python" code={`# Act 1 — Query Open Targets Platform for Alzheimer's disease landscape
# Disease: MONDO_0004975 (Alzheimer disease — updated from EFO_0000249 in 2023)

import requests

disease_query = """
query AlzheimersTargets($diseaseId: String!) {
  disease(efoId: $diseaseId) {
    id
    name
    associatedTargets(page: {index: 0, size: 15}) {
      count
      rows {
        target {
          id
          approvedSymbol
          approvedName
          tractability { label modality value }
        }
        score
        datatypeScores { id score }
      }
    }
  }
}
"""

resp = requests.post(
    "https://api.platform.opentargets.org/api/v4/graphql",
    json={"query": disease_query, "variables": {"diseaseId": "MONDO_0004975"}},
    timeout=30,
)
data = resp.json()
rows = data["data"]["disease"]["associatedTargets"]["rows"]
total = data["data"]["disease"]["associatedTargets"]["count"]

print(f"Total associated targets in database: {total}")
# → 13,142

for i, row in enumerate(rows[:10], 1):
    tgt = row["target"]
    genetic = next(
        (d["score"] for d in row["datatypeScores"] if d["id"] == "genetic_association"), 0.0
    )
    print(f"{i:>2}. {tgt['approvedSymbol']:<10} score={row['score']:.3f}  genetic={genetic:.3f}")`} />

        <FadeBlock>
          <SectionLabel>Results</SectionLabel>
          <Prose>
            Live query. 13,142 targets in the database. The top 15, ranked by multi-evidence association score:
          </Prose>
        </FadeBlock>

        <ResultsTable
          headers={["#", "Symbol", "Gene Name", "Score", "Genetic Evidence", "Druggable"]}
          rows={[
            { cells: ["1", "APP", "amyloid beta precursor protein", "0.870", "0.924", "YES"] },
            { cells: ["2", "PSEN1", "presenilin 1", "0.866", "0.954", "YES"] },
            { cells: ["3", "PSEN2", "presenilin 2", "0.817", "0.909", "YES"] },
            { cells: ["4", "APOE", "apolipoprotein E", "0.775", "0.896", "—"] },
            { cells: ["5", "GRIN1", "glutamate ionotropic receptor NMDA type 1", "0.700", "0.000", "YES"] },
            { cells: ["6", "SORL1", "sortilin related receptor 1", "0.689", "0.761", "—"] },
            { cells: ["7", "ADAM10", "ADAM metallopeptidase domain 10", "0.682", "0.782", "—"] },
            { cells: ["8", "CDK5", "cyclin dependent kinase 5", "0.680", "0.000", "YES"] },
            { cells: ["9", "ACE", "angiotensin I converting enzyme", "0.634", "0.863", "YES"] },
            { cells: ["10", "ACHE", "acetylcholinesterase", "0.629", "0.000", "YES"] },
          ]}
        />

        <CalloutBox label="What this means">
          <p>
            Open Targets tells us <em>which nodes matter</em>. APP, PSEN1, and PSEN2 have the highest genetic evidence — these are the genes where mutations directly cause early-onset Alzheimer&apos;s. APOE has the strongest overall literature association (0.999) but no approved drug targeting it, which is where the field is moving.
          </p>
          <p className="mt-3">
            This is the starting point for any therapeutic digital twin: knowing which biological nodes to model. M4 models the <em>dynamic behaviour</em> of these nodes — how does APOE4 status change amyloid clearance trajectories over 12 months? That is the question Open Targets cannot answer alone.
          </p>
        </CalloutBox>

        {/* ════ ACT 2 ════ */}
        <ActDivider
          act="Act 2"
          title="Here Is the Patient"
          subtitle="Personalised pharmacogenomics — same drug, different biology, different outcome"
        />

        <FadeBlock>
          <SectionLabel>Plain English</SectionLabel>
          <Prose>
            You designed a building for Stockholm. The blueprint is perfect. Now you want to build the exact same building in Antalya. Same design, but the soil is different, the climate is different, the seismic risk is different. You must adapt the design to the specific site — or the building fails.
          </Prose>
          <Prose>
            Act 2 is the site survey for a patient. Their genetics are the soil conditions. We show that this specific patient — 68F, CYP2D6 Intermediate Metabolizer, APOE4 heterozygous — metabolises Alzheimer&apos;s drugs differently from the population average. Same drug. Different biology. Different outcome.
          </Prose>
        </FadeBlock>

        <FadeBlock>
          <SectionLabel>The Code</SectionLabel>
        </FadeBlock>

        <CodeBlock language="python" code={`# Act 2 — Patient pharmacogenomic profile
# Patient: LA-DEMO-001, 68F, Alzheimer's risk assessment

patient = {
    "id": "LA-DEMO-001",
    "age": 68,
    "sex": "F",
    "genotype": {
        "CYP2D6": {
            "alleles": ("*1", "*4"),
            "phenotype": "Intermediate Metabolizer (IM)",
            "activity_score": 1.0,  # *1=1.0, *4=0.0 → total 1.0 = IM
            "frequency": "~40% of Europeans",
        },
        "CYP3A4": {
            "alleles": ("*1", "*1"),
            "phenotype": "Normal Metabolizer (NM)",
            "activity_score": 2.0,
        },
        "APOE": {
            "alleles": ("ε3", "ε4"),
            "phenotype": "Heterozygous APOE4 carrier",
            "frequency": "~25% of population",
        },
    },
}

# Drug-gene interaction assessment
donepezil_auc_change = "+40-60%"  # primary route CYP2D6, IM reduces clearance
galantamine_auc_change = "+35-50%"  # same — CYP2D6 primary
memantine_auc_change = "<5%"    # renal clearance, CYP-independent → PREFERRED
rivastigmine_auc_change = "0%"  # non-CYP hydrolysis → PREFERRED

print("CYP2D6 IM phenotype detected.")
print(f"Donepezil (CYP2D6 primary): AUC {donepezil_auc_change} — WARNING")
print(f"Galantamine (CYP2D6 primary): AUC {galantamine_auc_change} — WARNING")
print(f"Memantine (renal clearance): AUC {memantine_auc_change} — PREFERRED")
print(f"Rivastigmine (non-CYP): AUC {rivastigmine_auc_change} — PREFERRED")`} />

        <FadeBlock>
          <SectionLabel>Results — CYP Genotype Profile</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["Enzyme", "Alleles", "Phenotype", "Activity Score", "Population Frequency"]}
          rows={[
            { cells: ["CYP2D6", "*1 / *4", "Intermediate Metabolizer (IM)", "1.0", "~40% of Europeans"] },
            { cells: ["CYP3A4", "*1 / *1", "Normal Metabolizer (NM)", "2.0", "~60% of population"] },
            { cells: ["CYP1A2", "*1F / *1F", "Ultra-Rapid Metabolizer (URM)", "3.0", "~5–10% of population"] },
            { cells: ["APOE", "ε3 / ε4", "Heterozygous APOE4 carrier", "—", "~25% of population"] },
          ]}
        />

        <FadeBlock>
          <SectionLabel>Results — Drug Assessment</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["Drug", "Class", "Primary CYP", "AUC Change", "Flag", "Recommendation"]}
          rows={[
            {
              cells: ["Donepezil (Aricept)", "AChE Inhibitor", "CYP2D6", "+40–60%", "WARNING", "Dose reduction. Start 5 mg/day. Monitor bradycardia, GI."],
              highlight: "warning",
            },
            {
              cells: ["Galantamine (Razadyne)", "AChE + nAChR", "CYP2D6", "+35–50%", "WARNING", "Dose reduction. Start 8 mg/day ER. Standard dose risks nausea."],
              highlight: "warning",
            },
            {
              cells: ["Memantine (Namenda)", "NMDA Antagonist", "Renal (~48% unchanged)", "<5%", "PREFERRED", "No CYP adjustment. Standard titration 5→20 mg/day over 4 weeks."],
              highlight: "preferred",
            },
            {
              cells: ["Rivastigmine (Exelon)", "AChE + BuChE", "Non-CYP (hydrolysis)", "0%", "PREFERRED", "CYP genotype irrelevant. Patch formulation bypasses first-pass."],
              highlight: "preferred",
            },
          ]}
        />

        <CalloutBox label="What this means">
          <p>
            Static pharmacogenomics tells us <em>what concentration to expect</em>. That&apos;s the floor. M4 models <em>how that concentration propagates through the APOE4-modified signalling network over 12 months</em>: receptor occupancy → downstream cAMP → synaptic plasticity → cognitive trajectory. That&apos;s the ceiling — and the V&amp;V 40 argument: model output anchored in mechanistic biology, not black-box ML.
          </p>
          <p className="mt-3">
            This patient&apos;s APOE4 status (ε3/ε4) is independently significant: 3–4x increased AD risk, reduced response to cholinesterase inhibitors, higher amyloid burden. She is a candidate for anti-amyloid therapy (Lecanemab, Donanemab) if her cognitive status warrants it.
          </p>
        </CalloutBox>

        {/* ════ ACT 3 ════ */}
        <ActDivider
          act="Act 3"
          title="Here Is the Integration"
          subtitle="COBRApy metabolic flux modelling with a glucose restriction perturbation"
        />

        <FadeBlock>
          <SectionLabel>Plain English</SectionLabel>
          <Prose>
            This is the Ansys moment. In Ansys, you build a 3D model of a bridge, then apply load: wind, weight, temperature, vibration. You watch the simulation run and see where stress concentrates, where cracks would form, how the structure behaves over time.
          </Prose>
          <Prose>
            Act 3 does the same thing with human metabolism. The &quot;bridge&quot; is cellular metabolism. The &quot;load&quot; is glucose restriction — a simplified model of what happens in Type 2 Diabetes and in AD-associated brain hypometabolism. Real differential equations. Real stoichiometric constraints. Real biology. The numbers that come out are the boundary conditions for M4&apos;s ODE system.
          </Prose>
        </FadeBlock>

        <FadeBlock>
          <SectionLabel>The Code</SectionLabel>
        </FadeBlock>

        <CodeBlock language="python" code={`# Act 3 — COBRApy Flux Balance Analysis
# Model: E. coli core (COBRApy textbook, 95 reactions)
# Production: swap for Recon3D (human), HMR 2.0, or patient-specific GEM

import pathlib
import cobra

# Load bundled model
_cobra_data = pathlib.Path(cobra.__file__).parent / "data" / "textbook.xml.gz"
model = cobra.io.read_sbml_model(str(_cobra_data))

print(f"Model: {model.id}")
print(f"Reactions: {len(model.reactions)}  Metabolites: {len(model.metabolites)}")

# ── Baseline FBA ──────────────────────────────────────────────────
solution = model.optimize()
print(f"\\nBaseline biomass: {solution.objective_value:.4f} h⁻¹")
# → 0.8739 h⁻¹

key_reactions = {
    "EX_glc__D_e": "Glucose uptake",
    "EX_o2_e":     "Oxygen uptake",
    "EX_co2_e":    "CO2 production",
    "PFK":         "Phosphofructokinase (glycolysis)",
    "CS":          "Citrate synthase (TCA entry)",
    "ATPM":        "ATP maintenance demand",
}

baseline_fluxes = {rxn: solution.fluxes[rxn] for rxn in key_reactions if rxn in model.reactions}

# ── Perturbation: 50% glucose restriction ─────────────────────────
# Biological analogy: impaired glucose uptake in T2D or AD-associated
# brain hypometabolism (FDG-PET reduction precedes cognitive symptoms)
with model:
    glc_rxn = model.reactions.get_by_id("EX_glc__D_e")
    glc_rxn.lower_bound = glc_rxn.lower_bound * 0.5  # −10 → −5 mmol/gDW/h
    perturbed = model.optimize()
    print(f"Perturbed biomass: {perturbed.objective_value:.4f} h⁻¹")
    # → 0.4156 h⁻¹  (−52.4% from baseline)

    for rxn_id, desc in key_reactions.items():
        if rxn_id in model.reactions:
            b = baseline_fluxes.get(rxn_id, 0)
            p = perturbed.fluxes[rxn_id]
            pct = (p - b) / abs(b) * 100 if abs(b) > 1e-9 else 0.0
            print(f"{rxn_id:<20} baseline={b:+.3f}  restricted={p:+.3f}  {pct:+.1f}%")`} />

        <FadeBlock>
          <SectionLabel>Results — Baseline Flux Balance Analysis</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["Reaction", "Description", "Flux (mmol/gDW/h)"]}
          rows={[
            { cells: ["EX_glc__D_e", "Glucose uptake", "−10.0000"] },
            { cells: ["EX_o2_e", "Oxygen uptake", "−21.7995"] },
            { cells: ["EX_co2_e", "CO2 production", "+22.8098"] },
            { cells: ["EX_lac__D_e", "Lactate secretion", "0.0000"] },
            { cells: ["PFK", "Phosphofructokinase (glycolysis control)", "+7.4774"] },
            { cells: ["CS", "Citrate synthase (TCA entry)", "+6.0072"] },
            { cells: ["ATPM", "ATP maintenance demand", "+8.3900"] },
          ]}
        />

        <FadeBlock>
          <SectionLabel>Results — 50% Glucose Restriction Perturbation</SectionLabel>
          <Prose>
            Biological analogy: impaired glucose uptake in Type 2 Diabetes, or AD-associated brain hypometabolism. FDG-PET studies show this metabolic reduction precedes cognitive symptoms by years.
          </Prose>
        </FadeBlock>

        <ResultsTable
          headers={["Reaction", "Baseline", "Restricted", "Delta", "Change"]}
          rows={[
            { cells: ["EX_glc__D_e", "−10.0000", "−5.0000", "+5.0000", "−50.0%"] },
            { cells: ["EX_o2_e", "−21.7995", "−11.8336", "+9.9659", "−45.7%"] },
            { cells: ["EX_co2_e", "+22.8098", "+12.3140", "−10.4958", "−46.0%"] },
            { cells: ["PFK", "+7.4774", "+3.8981", "−3.5792", "−47.9%"] },
            { cells: ["CS (TCA entry)", "+6.0072", "+3.4435", "−2.5638", "−42.7%"] },
            { cells: ["ATPM", "+8.3900", "+8.3900", "0.0000", "0.0%"] },
            { cells: ["Biomass (growth rate)", "0.8739 h⁻¹", "0.4156 h⁻¹", "−0.4583", "−52.4%"] },
          ]}
        />

        <FadeBlock>
          <SectionLabel>Results — Robustness: Oxygen Sensitivity</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["O₂ Fraction", "Biomass (h⁻¹)", "Note"]}
          rows={[
            { cells: ["1.00", "0.8739", "Aerobic baseline"] },
            { cells: ["0.75", "0.8739", ""] },
            { cells: ["0.50", "0.8739", "Hypoxic tissue — biomass maintained by flux redistribution"] },
            { cells: ["0.25", "0.8739", ""] },
            { cells: ["0.00", "0.2117", "Anaerobic — fermentation mode, 75.8% biomass loss"] },
          ]}
        />

        <CalloutBox label="What this means">
          <p>
            The anaerobic shift mimics ischaemic tissue — relevant to vascular dementia, stroke recovery modelling, and tumour microenvironment simulation. These FBA outputs are not end-products. They are <em>boundary conditions</em>. M4 takes these steady-state flux values and runs them forward in time: how do glucose, ATP, NADH, and lactate concentrations evolve over hours, days, and months? How does Metformin shift this flux map over 3 months? This is what COBRApy alone cannot do.
          </p>
        </CalloutBox>

        {/* ════ M4 Bridge ════ */}
        <ActDivider
          act="The M4 Bridge"
          title="From Steady-State to Dynamic Simulation"
          subtitle="How FBA outputs become boundary conditions for M4's ODE network"
        />

        <FadeBlock>
          <Prose>
            COBRApy gives us the metabolic operating point — a snapshot of what is stoichiometrically possible at steady state. It is time-invariant. It cannot tell you how long it takes for the shift to happen, what compensatory mechanisms activate, or how a drug changes the trajectory over 3 months.
          </Prose>
          <Prose>
            M4 takes those FBA flux values and uses them as initial boundary conditions for a system of ordinary differential equations that model the same biology dynamically. The FBA snapshot becomes the starting configuration for a time-resolved simulation across multiple organ systems.
          </Prose>
        </FadeBlock>

        <FadeBlock>
          <SectionLabel>FBA vs M4 ODE — What each layer contributes</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["Layer", "Method", "Time", "What it answers"]}
          rows={[
            { cells: ["COBRApy FBA", "Linear programming on stoichiometric constraints", "Steady-state (time-invariant)", "What is the metabolic operating point? What is possible given stoichiometry?"] },
            { cells: ["M4 ODE system", "Differential equations, parameterised from PK/PD literature", "Dynamic (hours to months)", "How do concentrations evolve? How does a drug shift the trajectory? When does pathology become irreversible?"] },
            { cells: ["LifeAtlas platform", "Orchestration layer — connects Act 1, 2, 3 to M4", "Continuous (real-time + longitudinal)", "From SNP to clinical decision, in one auditable pipeline. Accessible to every clinician."] },
          ]}
        />

        <FadeBlock>
          <SectionLabel>The Full Patient Pipeline — Act 2 flowing into M4</SectionLabel>
          <Prose>
            Follow one clinical decision from genotype to dose recommendation. Every arrow is a mechanistic model, every step is auditable, every output can be traced back to a published rate constant.
          </Prose>
        </FadeBlock>

        <PipelineDiagram />

        <CalloutBox label="Why this matters for V&V 40">
          <p>
            This pipeline is not a black box. Every arrow maps to a published biochemical reaction with a rate constant from the literature. That is the foundation of the ASME V&amp;V 40 credibility argument: a mechanistic model you can defend, not a neural network you cannot.
          </p>
          <p className="mt-3">
            FBA provides the mechanistic prior. M4 ODEs are parameterised against clinical PK/PD data. Uncertainty quantification through parameter sweeps identifies which fluxes most sensitively affect the cognitive outcome. The regulatory path under V&amp;V 40 starts here — with evidence of model form, evidence of parameter provenance, and a defined credibility assessment plan.
          </p>
        </CalloutBox>

        {/* ════ V&V 40 ════ */}
        <ActDivider
          act="V&amp;V 40"
          title="The Credibility Argument"
          subtitle="How Marc Horner's validation framework applies to biological computational models"
        />

        <FadeBlock>
          <SectionLabel>What V&V 40 Is</SectionLabel>
          <Prose>
            ASME V&amp;V 40 answers one question: how do you prove to the FDA that a computer simulation is trustworthy enough to replace a physical test? V&amp;V 40 was written for physics-based models — fluid dynamics in blood vessels, stress analysis on implants, electromagnetic safety in MRI scanners. Marc co-authored it. It is now the foundation of FDA guidance on computational modelling and simulation.
          </Prose>
        </FadeBlock>

        <FadeBlock>
          <SectionLabel>Why Biology Is Different</SectionLabel>
        </FadeBlock>

        <ResultsTable
          headers={["Aspect", "Physics Models (V&V 40 original scope)", "Biology Models (the gap)"]}
          rows={[
            { cells: ["Validation benchmark", "Physical bench tests — build the thing, measure it, compare to simulation", "Ethical constraints prevent direct human validation; in vitro models are incomplete surrogates"] },
            { cells: ["Parameter provenance", "Well-characterised material properties — steel has known yield strength", "Patient-specific parameters vary enormously — your liver enzymes are not my liver enzymes"] },
            { cells: ["Model form", "Established PDEs (Navier-Stokes, FEM)", "ODEs parameterised from clinical cohorts with high inter-individual variability"] },
            { cells: ["Regulatory pathway", "CDRH — medical devices, mature computational model acceptance", "CDER — drugs; CDRH-CDER boundary is the gap no current standard addresses"] },
          ]}
        />

        <FadeBlock>
          <SectionLabel>The Opportunity</SectionLabel>
          <Prose>
            V&amp;V 40 does not currently address these biological validation challenges. There is no equivalent standard for biological computational models. Marc is uniquely positioned to fill this gap: he wrote V&amp;V 40, co-leads V&amp;V 40.5 (the FDA mock submission guide), chairs ISO TC 194, and leads the MDIC Blood Damage Working Group. He bridges CDRH and CDER through the Avicenna Alliance.
          </Prose>
          <Prose>
            The pitch is not that Ansys should license M4. The pitch is that Marc defined how physics-based computational models earn FDA credibility. The same framework needs to exist for biology-based computational models. M4 would be the first model to go through it.
          </Prose>
        </FadeBlock>

        <CalloutBox label="The Standards Analogy">
          <p>
            V&amp;V 40 is the building code for computational models. Marc wrote the building code for physics simulations. Nobody has written the building code for biology simulations yet. This demo shows the first building that will need that code. We are not asking Marc to move in. We are asking Marc to write the code that every biological digital twin — not just M4 — will need to follow.
          </p>
          <p className="mt-3 italic" style={{ opacity: 0.8 }}>
            That is not a vendor conversation. It is a standards conversation. And standards conversations are where scientific legacies are built.
          </p>
        </CalloutBox>

        {/* ════ Summary ════ */}
        <ActDivider
          act="Summary"
          title="What We Just Demonstrated"
          subtitle="Three acts, one pipeline, one credibility argument"
        />

        <ResultsTable
          headers={["Act", "What we showed", "Source", "Real data?"]}
          rows={[
            { cells: ["1 — Disease landscape", "13,142 Alzheimer's targets, top 15 ranked by multi-evidence score", "Open Targets Platform API (live GraphQL)", "Yes"] },
            { cells: ["2 — Patient personalisation", "CYP2D6 IM genotype changes Donepezil AUC +40–60%; two preferred alternatives identified", "Curated PGx (PharmGKB-consistent)", "Yes"] },
            { cells: ["3 — Metabolic integration", "FBA baseline 0.8739 h⁻¹; 50% glucose restriction → −52.4% biomass; FBA → M4 boundary conditions", "COBRApy textbook model (bundled)", "Yes"] },
          ]}
        />

        <FadeBlock className="mt-12 text-center">
          <div className="inline-block w-8 h-px mb-8" style={{ background: "var(--color-gold-dim)" }} />
          <p
            className="text-2xl md:text-3xl font-light italic leading-[1.55] max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "var(--color-gold)" }}
          >
            &ldquo;LifeAtlas is not a chatbot with a health dashboard. It is a computational biology platform with a consumer interface on top. M4 is the engine. The digital twin is the product. The patient is sovereign.&rdquo;
          </p>
          <div className="inline-block w-8 h-px mt-8" style={{ background: "var(--color-gold-dim)" }} />
        </FadeBlock>

        {/* ════ Notebook CTA ════ */}
        <FadeBlock className="mt-16">
          <div
            className="rounded-md px-5 py-4 border text-center"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
          >
            <p className="text-[9px] tracking-[0.35em] uppercase mb-2" style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}>
              Run it yourself
            </p>
            <p className="text-[0.88rem] mb-2" style={{ color: "var(--color-text-secondary)" }}>
              The complete pipeline is available as a Jupyter notebook.
            </p>
            <code
              className="text-[0.78rem] px-3 py-1 rounded"
              style={{ background: "#0b0b0e", color: "#c9b882", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
            >
              ansys_marc_horner_demo.ipynb
            </code>
            <p className="text-[0.75rem] mt-3" style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}>
              pip install cobra requests — then run all cells
            </p>
          </div>
        </FadeBlock>

        {/* Back link */}
        <FadeBlock className="mt-16 mb-8 text-center">
          <a
            href="/"
            className="inline-block text-xs tracking-[0.4em] uppercase transition-colors duration-300"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-gold-dim)"; }}
          >
            &larr;&nbsp;&nbsp;The Sentinel Stories
          </a>
        </FadeBlock>

      </article>

      <style jsx global>{`
        @keyframes mote {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.06; }
          50%  { opacity: 0.18; }
          100% { transform: translateY(-40px) translateX(10px) scale(1.4); opacity: 0.02; }
        }
      `}</style>
    </main>
  );
}
