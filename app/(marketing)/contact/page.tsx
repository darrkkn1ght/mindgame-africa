"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";

// ── Contact Details Placeholders (Swap in one place when confirmed) ──
const CONTACT_EMAIL = "[EMAIL TO BE ADDED]";
const CONTACT_PHONE = "[PHONE TO BE ADDED]";
const CONTACT_LOCATION = "[LOCATION TO BE ADDED]";

export default function ContactPage() {
  // Only display phone if an actual number is provided, not a placeholder
  const showPhone =
    Boolean(CONTACT_PHONE) &&
    !CONTACT_PHONE.includes("PLACEHOLDER") &&
    !CONTACT_PHONE.includes("TO BE ADDED") &&
    !CONTACT_PHONE.startsWith("[");

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
              label="CONTACT"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Contact MindGame Africa
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              For performance inquiries, research conversations, education,
              professional collaboration or general questions, use the contact
              details below or send us a message through the form.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Contact Details Block ── */}
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
              label="DIRECT CONTACT"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Contact Details
            </h2>
            <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
              Direct communication channels for reaching our institutional
              team.
            </p>
          </motion.div>

          <div
            className={`grid grid-cols-1 ${
              showPhone ? "md:grid-cols-3" : "md:grid-cols-2"
            } gap-6 lg:gap-8 max-w-[960px]`}
          >
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Card
                variant="default"
                className="h-full flex flex-col justify-between border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.03)]"
              >
                <div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green block mb-3">
                    Email
                  </span>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg md:text-xl font-bold text-navy tracking-tight mb-3 break-all">
                    {CONTACT_EMAIL}
                  </p>
                  <p className="text-navy/70 text-[0.9375rem] leading-relaxed">
                    For performance inquiries, research conversations,
                    education, and institutional partnerships.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Card
                variant="default"
                className="h-full flex flex-col justify-between border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.03)]"
              >
                <div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green block mb-3">
                    Location
                  </span>
                  <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg md:text-xl font-bold text-navy tracking-tight mb-3">
                    {CONTACT_LOCATION}
                  </p>
                  <p className="text-navy/70 text-[0.9375rem] leading-relaxed">
                    Operating across African performance environments and
                    collaborative institutional networks.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Phone Card (only shown when an actual phone is provided) */}
            {showPhone && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.16,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card
                  variant="default"
                  className="h-full flex flex-col justify-between border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.03)]"
                >
                  <div>
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green block mb-3">
                      Phone
                    </span>
                    <p className="font-[family-name:var(--font-jetbrains-mono)] text-lg md:text-xl font-bold text-navy tracking-tight mb-3">
                      {CONTACT_PHONE}
                    </p>
                    <p className="text-navy/70 text-[0.9375rem] leading-relaxed">
                      Direct telephone communication line.
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. Contact Form ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-12 md:mb-16"
          >
            <SectionEyebrow
              variant="gold"
              label="SEND A MESSAGE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Contact Form
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
