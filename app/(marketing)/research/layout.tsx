import type { Metadata } from "next";

import { researchContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research & Knowledge | MindGame Africa",
  description: researchContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/research",
  },
  openGraph: {
    title: "Research & Knowledge | MindGame Africa",
    description: researchContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/research",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Knowledge | MindGame Africa",
    description: researchContent.hero.supportingSentence,
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
