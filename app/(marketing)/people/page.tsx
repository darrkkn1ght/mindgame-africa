"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { peopleContent, founderProfile } from "@/lib/content";

export default function PeoplePage() {
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const visibleBio = founderProfile.fullBio.slice(0, 2);
  const remainingBio = founderProfile.fullBio.slice(2);

  return (
    <>
      {/* ── 1. Hero with Atmospheric Photography Backdrop ── */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-navy py-20 md:py-28 lg:py-32">
        {/* Background photo */}
        <Image
          src="/images/coaching-environments/services-coach-feedback-16x9.jpg"
          alt="MindGame Africa — People, leadership and performance practitioner network"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none opacity-40"
        />

        {/* Navy gradient scrim overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/88 to-navy/55 pointer-events-none"
          aria-hidden="true"
        />

        {/* Soft bottom dissolve into cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-cream via-cream/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[80rem] w-full px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[780px]"
          >
            <SectionEyebrow
              variant="gold"
              label={peopleContent.hero.eyebrow}
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              {peopleContent.hero.heading}
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              {peopleContent.hero.supportingSentence}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Leadership Section (Only Leadership is Active per §12.1) ── */}
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
              label="FOUNDING LEADERSHIP"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Leadership
            </h2>
            <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed">
              Intellectual and strategic leadership guiding MindGame Africa&apos;s applied practice, research mandate, and professional standards.
            </p>
          </motion.div>

          <div className="max-w-[920px] space-y-12">
            {/* ── Founder Profile Card (§12.2 Live at Launch) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/[0.08] shadow-[0_4px_24px_rgba(16,35,63,0.06)]"
            >
              {/* Portrait and Header Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-navy/[0.08]">
                {/* Professional Portrait Slot */}
                <div className="md:col-span-5">
                  <SectionImage
                    src="/images/practitioner-interaction/dr-joshua-oparachukwu-4x3.jpg"
                    name="Dr. Joshua A. Oparachukwu"
                    subject="Founder & Intellectual Lead"
                    alt="Dr. Joshua A. Oparachukwu, Founder of MindGame Africa"
                    aspectRatio="4/3"
                    variant="cream"
                  />
                </div>

                {/* Name, Designation & Short Profile */}
                <div className="md:col-span-7">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                      {founderProfile.role}
                    </span>
                    <Link
                      href="/people/dr-joshua-a-oparachukwu"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy/60 hover:text-navy font-[family-name:var(--font-inter)] uppercase"
                    >
                      <span>Full Profile</span>
                      <ArrowUpRight size={13} />
                    </Link>
                  </div>

                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-2">
                    {founderProfile.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-gold text-xs sm:text-sm font-semibold tracking-wide mb-4">
                    {founderProfile.designation}
                  </p>
                  <p className="text-navy/80 text-[0.9375rem] md:text-base leading-relaxed">
                    {founderProfile.shortProfile}
                  </p>
                </div>
              </div>

              {/* Full Bio Paragraphs — First 2 visible, remainder in crawlable expander */}
              <div>
                <h4 className="text-xs uppercase font-semibold font-[family-name:var(--font-inter)] text-navy/50 tracking-wider mb-4">
                  Professional Biography
                </h4>
                <div className="space-y-4 text-navy/80 text-base md:text-[1.0625rem] leading-[1.7]">
                  {visibleBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Remaining paragraphs kept in DOM for SEO crawlability */}
                <div
                  id="people-remaining-bio"
                  className={`space-y-4 text-navy/80 text-base md:text-[1.0625rem] leading-[1.7] pt-4 ${
                    isBioExpanded ? "block" : "hidden"
                  }`}
                >
                  {remainingBio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Expander Toggle */}
                <div className="mt-6 pt-4 border-t border-navy/[0.06]">
                  <button
                    type="button"
                    onClick={() => setIsBioExpanded(!isBioExpanded)}
                    aria-expanded={isBioExpanded}
                    aria-controls="people-remaining-bio"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)] text-navy hover:text-gold transition-colors"
                  >
                    <span>{isBioExpanded ? "Show Less" : "Read Full Profile"}</span>
                    {isBioExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
              </div>

              {/* Leadership Statement Quote */}
              <div className="mt-10 pt-8 border-t border-navy/[0.08]">
                <blockquote className="border-l-2 border-gold pl-5 py-1">
                  <p className="font-[family-name:var(--font-fraunces)] text-navy text-lg md:text-xl leading-relaxed italic">
                    &ldquo;{founderProfile.leadershipStatement}&rdquo;
                  </p>
                  <footer className="mt-3 font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider text-navy/60">
                    — {founderProfile.name}, Founder
                  </footer>
                </blockquote>
              </div>

              {/* Verified Credential Facts Only */}
              <div className="mt-8 pt-6 border-t border-navy/[0.08]">
                <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)] text-navy/50 block mb-3">
                  Academic Background
                </span>
                <ul className="space-y-2 text-sm md:text-[0.9375rem]">
                  {founderProfile.academicBackground.map((qual, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-2.5 text-navy/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ── Leadership Focus (9 items) ── */}
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
                {founderProfile.leadershipFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
                  >
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-navy/80 text-sm md:text-[0.9375rem] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Leadership Role Within MindGame Africa (2 paragraphs verbatim) ── */}
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
                {founderProfile.institutionalRole.map((para, rIdx) => (
                  <p key={rIdx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* ── Selected Research and Scholarly Interests (7 items secondary block) ── */}
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
                Selected Research and Scholarly Interests
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {founderProfile.researchInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
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

      {/* ── 3. Network Holding Line (§12.1) ──
          NO demo people or empty categories rendered.
      ── */}
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
              {peopleContent.networkHoldingLine}
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us?type=Practitioner+or+Faculty+Collaboration">
                Discuss Specialist Collaboration
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
