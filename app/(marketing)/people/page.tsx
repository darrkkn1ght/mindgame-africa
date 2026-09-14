"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PersonCard, Person } from "@/components/ui/PersonCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface PersonCategory {
  id: string;
  title: string;
  eyebrow: string;
  description?: string;
  people: Person[];
}

// ── Leadership Profile (Dr. Joshua A. Oparachukwu) ────────────────────────
const leaderProfile = {
  name: "Dr. Joshua A. Oparachukwu",
  role: "Founder, MindGame Africa",
  designation: "Performance Psychologist | Performance Strategist",
  shortBio:
    "Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa and a performance psychologist and performance strategist whose work sits at the intersection of human performance, applied psychology, research and professional education. His work focuses on understanding the psychological and behavioural factors that shape performance, particularly under pressure, and translating that knowledge into practical support for athletes, coaches, teams and other high pressure performers.",
  fullBio: [
    "Dr. Joshua A. Oparachukwu is the Founder of MindGame Africa, an African performance science, research, education and professional practice institution being built around the human and intellectual side of performance.",
    "His work is grounded in performance psychology and applied performance science, with particular interest in how confidence, attention, self regulation, mistake response, pressure, decision making, communication and behavioural adaptation influence what performers are able to do when performance matters.",
    "Across his applied work, he has worked with athletes, coaches, teams and performers in demanding environments, helping them examine the factors that may be disrupting performance and develop more deliberate ways of preparing, responding and adapting. His approach is not built around motivational language or isolated mental techniques. It begins with the performance problem, considers the context in which that problem occurs, and uses evidence, assessment, structured intervention and review to determine what is most appropriate.",
    "His academic background is in Human Kinetics, the Sociology and Psychology of Sport, and Performance Psychology at the University of Ibadan. His research and scholarly interests include cognitive reframing, verbal affirmation, mistake contingency, mental toughness, athlete behaviour and the translation of psychological knowledge into real performance environments.",
    "Through MindGame Africa, Dr. Oparachukwu is working to create stronger connections between research, performance practice, professional education and practitioner development in Africa. The wider aim is to contribute to an environment in which African athletes, coaches, researchers and practitioners are not only users of performance knowledge, but also active producers, translators and developers of it.",
    "His role within MindGame Africa is therefore broader than delivering individual performance support. He provides strategic and intellectual leadership around the institution's performance practice, research direction, education function, practitioner development and the progressive development of multidisciplinary performance science capability.",
  ],
  quote:
    "MindGame Africa is being built around a simple idea: performance should be understood more deeply, supported more intelligently and studied within the environments in which it actually happens. My role is to help build the people, knowledge, practice and professional standards that make that possible.",
  leadershipFocus: [
    "Applied performance psychology and mental performance.",
    "Performance strategy and behavioural performance.",
    "Performance under pressure.",
    "Confidence, attention and self regulation.",
    "Mistake response and recovery after error.",
    "Coach behaviour and the psychological performance environment.",
    "Applied research and evidence translation.",
    "Professional education and practitioner development.",
    "Development of multidisciplinary performance science capability in African contexts.",
  ],
  institutionalRole: [
    "As Founder, Dr. Oparachukwu provides the strategic, intellectual and professional direction for MindGame Africa. He leads the development of the institution's applied performance work, research priorities, education and professional development architecture, practitioner pathways and specialist collaborations.",
    "His responsibility is also to ensure that MindGame Africa grows with clear professional boundaries. New disciplines, programmes, research relationships and technical capabilities should only be presented as active when the qualified people, methods and infrastructure required to deliver them properly are genuinely in place.",
  ],
  researchInterests: [
    "Cognitive reframing and performance behaviour.",
    "Verbal affirmation and psychological response in sport.",
    "Mistake contingency and recovery after performance errors.",
    "Mental toughness and assertive performance behaviour.",
    "Psychological skills interventions in football.",
    "Coach behaviour, confidence and the athlete performance environment.",
    "Performance psychology in African sport contexts.",
  ],
  qualifications: [
    "Performance Psychology & Sport Psychology, University of Ibadan",
    "Human Kinetics, Sociology and Psychology of Sport, University of Ibadan",
  ],
};

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

          <div className="max-w-[880px] space-y-12">
            {/* Main Leadership Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/[0.08] shadow-[0_4px_24px_rgba(16,35,63,0.06)]"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
                  {leaderProfile.role}
                </span>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-gold">
                  {leaderProfile.designation}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl font-bold tracking-tight text-navy mb-6">
                {leaderProfile.name}
              </h3>

              {/* Full Bio Paragraphs */}
              <div className="space-y-4 text-navy/80 text-base md:text-[1.0625rem] leading-[1.7]">
                {leaderProfile.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Leadership Statement Quote */}
              <div className="mt-8 pt-8 border-t border-navy/[0.08]">
                <blockquote className="border-l-2 border-gold pl-5 py-1">
                  <p className="font-[family-name:var(--font-fraunces)] text-navy text-lg md:text-xl leading-relaxed italic">
                    &ldquo;{leaderProfile.quote}&rdquo;
                  </p>
                  <footer className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider text-navy/60">
                    — {leaderProfile.name}, Founder
                  </footer>
                </blockquote>
              </div>

              {/* Qualifications */}
              <div className="mt-8 pt-6 border-t border-navy/[0.08]">
                <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/50 block mb-3">
                  Academic Background & Credentials
                </span>
                <ul className="space-y-2 text-sm md:text-[0.9375rem]">
                  {leaderProfile.qualifications.map((qual, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-2.5 text-navy/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Leadership Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionEyebrow
                variant="gold-dark"
                label="LEADERSHIP FOCUS"
                className="mb-4"
              />
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-6">
                Areas of Leadership Focus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leaderProfile.leadershipFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white/80 border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-navy/80 text-sm md:text-[0.9375rem] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Role Within MindGame Africa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl bg-navy p-8 md:p-10 text-cream"
            >
              <SectionEyebrow
                variant="gold"
                label="INSTITUTIONAL DIRECTION"
                className="mb-4"
              />
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-cream mb-5">
                Leadership Role Within MindGame Africa
              </h3>
              <div className="space-y-4 text-cream/80 text-base leading-relaxed">
                {leaderProfile.institutionalRole.map((para, rIdx) => (
                  <p key={rIdx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Selected Research and Scholarly Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionEyebrow
                variant="gold-dark"
                label="SCHOLARLY INQUIRY"
                className="mb-4"
              />
              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-6">
                Selected Research & Scholarly Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leaderProfile.researchInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white/80 border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-green shrink-0 mt-2" aria-hidden="true" />
                    <span className="text-navy/80 text-sm md:text-[0.9375rem] leading-snug">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
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
