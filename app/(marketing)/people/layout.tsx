import type { Metadata } from "next";
import PeoplePage from "./page";
import { peopleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "People & Leadership | MindGame Africa",
  description: peopleContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/people",
  },
  openGraph: {
    title: "People & Leadership | MindGame Africa",
    description: peopleContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/people",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People & Leadership | MindGame Africa",
    description: peopleContent.hero.supportingSentence,
  },
};

export default function PeopleLayout() {
  return <PeoplePage />;
}
