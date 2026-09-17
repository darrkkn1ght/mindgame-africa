import type { Metadata } from "next";

import { aboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "About MindGame Africa",
  description: aboutContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/about",
  },
  openGraph: {
    title: "About MindGame Africa",
    description: aboutContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/about",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MindGame Africa",
    description: aboutContent.hero.supportingSentence,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
