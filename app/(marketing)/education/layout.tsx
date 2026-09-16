import type { Metadata } from "next";
import EducationPage from "./page";
import { educationContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Education & Professional Development | MindGame Africa",
  description: educationContent.hero.supportingSentence,
  alternates: {
    canonical: "https://mindgameafrica.com/education",
  },
  openGraph: {
    title: "Education & Professional Development | MindGame Africa",
    description: educationContent.hero.supportingSentence,
    url: "https://mindgameafrica.com/education",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education & Professional Development | MindGame Africa",
    description: educationContent.hero.supportingSentence,
  },
};

export default function EducationLayout() {
  return <EducationPage />;
}
