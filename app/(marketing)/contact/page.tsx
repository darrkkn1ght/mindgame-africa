"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ContactForm } from "@/components/sections/ContactForm";
import { FullInquiryForm } from "@/components/sections/FullInquiryForm";
import { contactContent } from "@/lib/content";

// ── Contact Details ──
// No email, telephone, or location has been supplied.
// Per Amendment A1, no location is to be published at all.
const CONTACT_EMAIL = "";
const CONTACT_PHONE = "";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"general" | "detailed">("general");

  const showEmail = Boolean(CONTACT_EMAIL);
  const showPhone = Boolean(CONTACT_PHONE);
  const hasDirectContact = showEmail || showPhone;

  return (
    <>
      {/* ── 1. Hero (§14) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[780px]"
          >
            <SectionEyebrow
              variant="gold"
              label={contactContent.hero.eyebrow}
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              {contactContent.hero.heading}
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              {contactContent.hero.supportingSentence}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Direct Channels Block ──
          Per §14 and Amendment A1: renders ONLY when a real value exists.
          Zero placeholders, zero '#', zero greyed-out dummy rows.
      ── */}
      {hasDirectContact && (
        <section className="relative bg-cream border-t border-navy/[0.06] py-16">
          <div className="mx-auto max-w-[80rem] px-5 md:px-12">
            <div className="max-w-[760px]">
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                Direct Channels
              </span>
              <div className="mt-4 flex flex-wrap gap-8">
                {showEmail && (
                  <div>
                    <span className="text-xs text-navy/50 font-[family-name:var(--font-inter)] uppercase">
                      Email
                    </span>
                    <p className="text-navy font-bold font-[family-name:var(--font-inter)] text-lg">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                )}
                {showPhone && (
                  <div>
                    <span className="text-xs text-navy/50 font-[family-name:var(--font-inter)] uppercase">
                      Phone
                    </span>
                    <p className="text-navy font-bold font-[family-name:var(--font-inter)] text-lg">
                      {CONTACT_PHONE}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Inquiry Form Section (General Message vs §14.1 Full Flow) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          {/* Form Selection Tabs */}
          <div className="max-w-[840px] mx-auto mb-10">
            <div className="flex border-b border-navy/[0.12] gap-4">
              <button
                type="button"
                onClick={() => setActiveTab("general")}
                className={`pb-3.5 px-2 text-sm md:text-base font-semibold transition-all relative ${
                  activeTab === "general"
                    ? "text-navy font-[family-name:var(--font-fraunces)]"
                    : "text-navy/50 hover:text-navy/80"
                }`}
              >
                <span>General Message</span>
                {activeTab === "general" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("detailed")}
                className={`pb-3.5 px-2 text-sm md:text-base font-semibold transition-all relative ${
                  activeTab === "detailed"
                    ? "text-navy font-[family-name:var(--font-fraunces)]"
                    : "text-navy/50 hover:text-navy/80"
                }`}
              >
                <span>Performance & Collaboration Inquiry (§14.1)</span>
                {activeTab === "detailed" && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
                )}
              </button>
            </div>
          </div>

          {/* Form Render */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "general" ? (
              <ContactForm />
            ) : (
              <FullInquiryForm />
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
