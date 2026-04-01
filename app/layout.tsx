import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sentinel Seed — Life Atlas",
  description: "A story about the first user and the final platform. Where biology meets environment.",
  openGraph: {
    title: "The Sentinel Seed",
    description: "A story about the first user and the final platform.",
    type: "article",
    siteName: "Life Atlas",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
