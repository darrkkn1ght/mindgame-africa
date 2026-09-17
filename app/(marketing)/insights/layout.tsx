import type { Metadata } from "next";

import { insightsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights & Knowledge Library | MindGame Africa",
  description: insightsContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/insights",
  },
  openGraph: {
    title: "Insights & Knowledge Library | MindGame Africa",
    description: insightsContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/insights",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Knowledge Library | MindGame Africa",
    description: insightsContent.hero.supportingSentence,
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
