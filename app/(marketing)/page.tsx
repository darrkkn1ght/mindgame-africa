import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { EducationPreview } from "@/components/sections/EducationPreview";
import { PeoplePreview } from "@/components/sections/PeoplePreview";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhoWeWorkWith />
      <CurrentFocus />
      <ResearchPreview />
      <EducationPreview />
      <PeoplePreview />
      <ClosingCTA />
    </>
  );
}
