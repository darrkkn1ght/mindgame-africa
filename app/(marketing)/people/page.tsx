"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PersonCard, Person } from "@/components/ui/PersonCard";
import { Button } from "@/components/ui/Button";

interface PersonCategory {
  id: string;
  title: string;
  eyebrow: string;
  description?: string;
  people: Person[];
}

// ── Leadership Profiles ──────────────────────────────────────────────────
// Replace these placeholder values with real leadership details before launch.
// Each entry follows the Person interface from components/ui/PersonCard.tsx.
const leadership: Person[] = [
  {
    name: "[LEADERSHIP NAME — TO BE ADDED]",
    role: "[ROLE — TO BE ADDED]",
    bio: "[Short professional biography to be added.]",
  },
];

const futureCategories: PersonCategory[] = [
  {
    id: "faculty",
    title: "Faculty",
    eyebrow: "ACADEMIC & TEACHING",
    description:
      "Academic faculty and subject-matter leaders contributing to our curriculum and intellectual direction.",
    people: [],
  },
  {
    id: "practitioners",
    title: "Practitioners",
    eyebrow: "APPLIED PRACTICE",
    description:
      "Specialist practitioners delivering evidence-informed interventions across performance environments.",
    people: [],
  },
  {
    id: "research-associates",
    title: "Research Associates",
    eyebrow: "RESEARCH & SCIENCE",
    description:
      "Researchers conducting investigations, evaluations and contextual inquiry across African performance questions.",
    people: [],
  },
  {
    id: "advisors",
    title: "Advisors",
    eyebrow: "STRATEGIC ADVISORY",
    description:
      "Senior leaders and domain experts advising on strategy, governance and institutional growth.",
    people: [],
  },
  {
    id: "mentors-supervisors",
    title: "Mentors or Supervisors",
    eyebrow: "SUPERVISION & MENTORSHIP",
    description:
      "Experienced practitioners supervising emerging professionals and guiding practitioner development pathways.",
    people: [],
  },
  {
    id: "visiting-faculty",
    title: "Visiting Faculty",
    eyebrow: "VISITING FACULTY",
    description:
      "Distinguished international and regional contributors collaborating on specific masterclasses, seminars and initiatives.",
    people: [],
  },
];

export default function PeoplePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px]"
          >
            <SectionEyebrow
              variant="gold"
              label="PEOPLE"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              People
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              MindGame Africa is being built through a networked model that can
              bring together leadership, practitioners, researchers, faculty,
              advisors and specialist collaborators around the work that
              requires their expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Leadership ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-12 md:mb-16"
          >
            <SectionEyebrow
              variant="gold-dark"
              label="LEADERSHIP"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Leadership
            </h2>
          </motion.div>

          <div className="max-w-[840px]">
            {leadership.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PersonCard person={person} variant="default" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Categories for Future Roles ── */}
      {/* Gracefully collapses if empty; dynamically renders when people are populated */}
      {futureCategories
        .filter((category) => category.people.length > 0)
        .map((category, idx) => {
          const isNavy = idx % 2 === 1;
          return (
            <section
              key={category.id}
              className={`relative py-20 md:py-28 lg:py-32 ${
                isNavy ? "bg-navy" : "bg-cream border-t border-navy/[0.06]"
              }`}
            >
              <div className="mx-auto max-w-[80rem] px-5 md:px-12">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="max-w-[760px] mb-12 md:mb-16"
                >
                  <SectionEyebrow
                    variant={isNavy ? "gold" : "gold-dark"}
                    label={category.eyebrow}
                    className="mb-4"
                  />
                  <h2
                    className={`font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12] ${
                      isNavy ? "text-cream" : "text-navy"
                    }`}
                  >
                    {category.title}
                  </h2>
                  {category.description && (
                    <p
                      className={`mt-4 text-base md:text-lg leading-relaxed ${
                        isNavy ? "text-cream/80" : "text-navy/70"
                      }`}
                    >
                      {category.description}
                    </p>
                  )}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {category.people.map((person, pIdx) => (
                    <PersonCard
                      key={pIdx}
                      person={person}
                      variant={isNavy ? "navy" : "default"}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      {/* ── 4. Closing Note ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <SectionEyebrow
              variant="gold"
              label="NETWORK DEVELOPMENT"
              className="mb-6"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance leading-[1.25]">
              Our wider practitioner, faculty and research network will be added
              as formal roles and collaborations are confirmed.
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Discuss Collaboration
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
