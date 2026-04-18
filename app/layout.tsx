import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://lifeatlas.github.io/the-sentinel-seed";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Sentinel Stories — Life Atlas",
    template: "%s — Life Atlas",
  },
  description:
    "Fictions from the future we are building. Sci-fi stories, research articles, and whitepapers on biological digital twins, sovereign life intelligence, and the Life Programmable Interface. By Nicolas Waern, WINNIIO AB, Gothenburg, Sweden.",
  keywords: [
    "biological digital twin",
    "Life Atlas",
    "LPI life programmable interface",
    "digital twin research",
    "SMILE methodology",
    "digital sovereignty",
    "edge-native AI",
    "systems medicine",
    "Nicolas Waern",
    "WINNIIO AB",
    "Gothenburg Sweden",
    "speculative fiction",
    "sci-fi research",
    "personalized medicine",
    "post-hospital care",
  ],
  authors: [{ name: "Nicolas Waern", url: "https://lifeatlas.online" }],
  creator: "Nicolas Waern",
  publisher: "WINNIIO AB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL + "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL + "/",
    siteName: "The Sentinel Stories — Life Atlas",
    title: "The Sentinel Stories — Life Atlas",
    description:
      "Fictions from the future we are building. Research, whitepapers, and speculative narratives on biological digital twins and sovereign life intelligence.",
    images: [
      {
        url: BASE_URL + "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Sentinel Stories — Life Atlas by Nicolas Waern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sentinel Stories — Life Atlas",
    description:
      "Fictions from the future we are building. Research, whitepapers, and speculative narratives on biological digital twins.",
    creator: "@lifeatlas",
    images: [BASE_URL + "/og-image.png"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": BASE_URL + "/#website",
      url: BASE_URL + "/",
      name: "The Sentinel Stories — Life Atlas",
      description:
        "Fictions from the future we are building. Research, whitepapers, and speculative narratives on biological digital twins, sovereign life intelligence, and the Life Programmable Interface.",
      publisher: {
        "@id": BASE_URL + "/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: BASE_URL + "/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": BASE_URL + "/#organization",
      name: "WINNIIO AB",
      alternateName: "Life Atlas",
      url: "https://lifeatlas.online",
      logo: {
        "@type": "ImageObject",
        url: BASE_URL + "/og-image.png",
      },
      sameAs: [
        "https://lifeatlas.online",
        "https://lifeatlas.github.io/the-sentinel-seed/",
        "https://zenodo.org/search?q=Nicolas+Waern",
        "https://orcid.org/0000-0001-7970-2707",
      ],
      founder: {
        "@type": "Person",
        name: "Nicolas Waern",
        url: "https://lifeatlas.online",
        sameAs: ["https://orcid.org/0000-0001-7970-2707"],
        jobTitle: "Founder & CEO",
        worksFor: {
          "@type": "Organization",
          name: "WINNIIO AB",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gothenburg",
          addressCountry: "SE",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gothenburg",
        addressCountry: "SE",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/the-sentinel-seed/site.webmanifest" />
        <meta name="theme-color" content="#C9A84C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <footer
          style={{
            borderTop: "1px solid rgba(30,30,36,0.5)",
            background: "rgba(8,8,10,0.95)",
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "rgba(160,138,62,0.5)",
              margin: "0 0 8px 0",
            }}
          >
            <a
              href="https://lifeatlas.online"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(201,168,76,0.7)",
                textDecoration: "none",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "10px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              lifeatlas.online
            </a>
            {" \u2014 "}
            Nicolas Waern
            {" \u2014 "}
            WINNIIO AB, Gothenburg, Sweden
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              color: "rgba(120,110,80,0.35)",
              margin: 0,
              letterSpacing: "0.1em",
            }}
          >
            &copy; 2026 WINNIIO AB &mdash; All rights reserved
          </p>
        </footer>
      </body>
    </html>
  );
}
