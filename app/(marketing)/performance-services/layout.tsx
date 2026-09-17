import type { Metadata } from "next";

import { performanceServicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Performance Services | MindGame Africa",
  description: performanceServicesContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/performance-services",
  },
  openGraph: {
    title: "Performance Services | MindGame Africa",
    description: performanceServicesContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/performance-services",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Services | MindGame Africa",
    description: performanceServicesContent.hero.supportingSentence,
  },
};

export default function PerformanceServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
