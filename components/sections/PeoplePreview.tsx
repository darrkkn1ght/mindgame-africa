"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function PeoplePreview() {
  return (
    <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionEyebrow
            variant="gold-dark"
            label="PEOPLE"
            className="mb-4"
          />

          <div className="mt-6 max-w-[860px] space-y-6">
            <Card variant="navy">
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.12]">
                Built through expertise, not titles.
              </h2>
              <p className="mt-5 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
                MindGame Africa will grow through a network of practitioners,
                researchers, faculty and specialist collaborators whose roles are
                defined by the work they are qualified to contribute.
              </p>

              {/* Founder & Leadership Card */}
              <div className="mt-8 pt-8 border-t border-cream/15">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-gold">
                    Founder, MindGame Africa
                  </span>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-cream/60">
                    Performance Psychologist | Performance Strategist
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-cream tracking-tight mb-3">
                  Dr. Joshua A. Oparachukwu
                </h3>
                <p className="text-cream/80 text-[0.9375rem] md:text-base leading-relaxed max-w-[660px]">
                  Dr. Joshua A. Oparachukwu leads MindGame Africa&apos;s work across applied
                  performance practice, research, professional education and
                  practitioner development, with particular interest in the
                  psychological and behavioural factors that shape performance under
                  pressure.
                </p>
              </div>

              <div className="mt-8">
                <Button variant="primary" href="/people">
                  Meet the People & Leadership
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
