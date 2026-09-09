import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhoWeWorkWith />

      {/* Future sections will be added here:
          - Research & Evidence
          - Education & Development
          - Insights / Latest
          - CTA / Partner
      */}
    </>
  );
}
