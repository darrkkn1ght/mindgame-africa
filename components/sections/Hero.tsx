"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function Hero() {
  return (
    <section
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-navy bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* High-res background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="MindGame Africa — Performance Science, Research & Education"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center select-none pointer-events-none"
      />

      {/* ── Navy gradient overlay ──
          Darker/more opaque on the left (85%-95%) where text sits,
          fading to 35% on the right for cinematic color-grading
      */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50 md:from-navy/92 md:via-navy/78 md:to-navy/35 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Subtle bottom-to-transparent gradient transitioning into cream below ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-t from-cream via-cream/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Hero content: editorial left-aligned overlay ── */}
      <div className="relative z-10 mx-auto max-w-[80rem] w-full px-5 md:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-[760px] lg:max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Eyebrow tag in gold, small-caps, mono-style */}
            <SectionEyebrow
              variant="gold"
              label="PERFORMANCE · RESEARCH · EDUCATION"
              className="mb-6 md:mb-7"
            />

            {/* Headline with split gold accent on 'in Africa.' */}
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Developing the Human and Intellectual Infrastructure of Performance{" "}
              <span className="relative inline-block text-gold">
                in Africa.
                {/* Thin gold underline for visual rhythm */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gold/50" />
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Supporting copy in cream/off-white */}
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[560px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              MindGame Africa connects performance science, research, education
              and professional practice to help athletes, teams, coaches,
              organisations and practitioners understand performance problems,
              develop capability and improve what happens in practice.
            </p>

            {/* CTAs: Gold primary + Cream-outline secondary */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4 items-center">
              <Button variant="primary" href="#what-we-do">
                Explore What We Do
              </Button>
              <Button variant="secondary-cream" href="/partner-with-us">
                Work With MindGame Africa
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
