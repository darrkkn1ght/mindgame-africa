import type { Metadata } from "next";
import AppliedPerformancePracticePage from "./page";
import { appliedPerformancePracticeContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Applied Performance Practice | MindGame Africa",
  description: appliedPerformancePracticeContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/performance-services/applied-performance-practice",
  },
  openGraph: {
    title: "Applied Performance Practice | MindGame Africa",
    description: appliedPerformancePracticeContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/performance-services/applied-performance-practice",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applied Performance Practice | MindGame Africa",
    description: appliedPerformancePracticeContent.hero.supportingSentence,
  },
};

export default function AppliedPerformancePracticeLayout() {
  return <AppliedPerformancePracticePage />;
}
