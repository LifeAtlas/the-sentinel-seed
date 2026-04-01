"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const allSlugs = [
  // Origin Stories
  "before-the-code",
  "silent-orbits",
  "the-second-self",
  "the-beam-of-memory",
  "the-last-therapy-session",
  "the-timeline-garden",
  "the-operative-now",
  "the-resilience-graph",
  "the-infinite-city",
  "the-countdown-gene",
  "a-hard-fork-in-reality",
  // New Dawn
  "the-sentinel-seed",
  "the-architect-of-hooves",
  "the-last-silo",
  "the-forgetting-curve",
  // Meeting
  "meeting-virtual-humans",
  "meeting-the-road-home",
];

const titles: Record<string, string> = {
  "before-the-code": "Before the Code",
  "silent-orbits": "Silent Orbits",
  "the-second-self": "The Second Self",
  "the-beam-of-memory": "The Beam of Memory",
  "the-last-therapy-session": "The Last Therapy Session",
  "the-timeline-garden": "The Timeline Garden",
  "the-operative-now": "The Operative Now",
  "the-resilience-graph": "The Resilience Graph",
  "the-infinite-city": "The Infinite City",
  "the-countdown-gene": "The Countdown Gene",
  "a-hard-fork-in-reality": "A Hard Fork in Reality",
  "the-sentinel-seed": "The Sentinel Seed",
  "the-architect-of-hooves": "The Architect of Hooves",
  "the-last-silo": "The Last Silo",
  "the-forgetting-curve": "The Forgetting Curve",
  "meeting-virtual-humans": "The Room Where It Started",
  "meeting-the-road-home": "The Road Home",
};

export default function StoryNav() {
  const pathname = usePathname();
  const currentSlug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const currentIndex = allSlugs.indexOf(currentSlug);

  const prev = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const next = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 px-3 py-2 flex items-center justify-between backdrop-blur-md"
      style={{
        background: "rgba(8,8,10,0.85)",
        borderBottom: "1px solid rgba(30,30,36,0.5)",
      }}
    >
      {/* Prev */}
      <div className="w-1/3">
        {prev && (
          <Link
            href={`/${prev}`}
            className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-[var(--color-gold)]"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
          >
            &larr; {titles[prev]?.length > 20 ? titles[prev].slice(0, 18) + "..." : titles[prev]}
          </Link>
        )}
      </div>

      {/* Home */}
      <div className="w-1/3 text-center">
        <Link
          href="/"
          className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase transition-colors duration-200 hover:text-[var(--color-gold)]"
          style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-gold-dim)" }}
        >
          All Stories
        </Link>
      </div>

      {/* Next */}
      <div className="w-1/3 text-right">
        {next && (
          <Link
            href={`/${next}`}
            className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 hover:text-[var(--color-gold)]"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--color-text-secondary)" }}
          >
            {titles[next]?.length > 20 ? titles[next].slice(0, 18) + "..." : titles[next]} &rarr;
          </Link>
        )}
      </div>
    </nav>
  );
}
