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
      <body className="antialiased">{children}</body>
    </html>
  );
}
