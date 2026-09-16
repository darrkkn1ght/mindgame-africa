import type { Metadata } from "next";
import PerformanceSciencePage from "./page";
import { performanceScienceContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Performance Science | MindGame Africa",
  description: performanceScienceContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/research/performance-science",
  },
  openGraph: {
    title: "Performance Science | MindGame Africa",
    description: performanceScienceContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/research/performance-science",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Science | MindGame Africa",
    description: performanceScienceContent.hero.supportingSentence,
  },
};

export default function PerformanceScienceLayout() {
  return <PerformanceSciencePage />;
}
