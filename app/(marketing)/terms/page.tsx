import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Terms of Use | MindGame Africa",
  description:
    "Terms of Use for MindGame Africa. Standards governing intellectual property, informational integrity, and professional consultation.",
  alternates: {
    canonical: "https://mindgameafrica.com/terms",
  },
  openGraph: {
    title: "Terms of Use | MindGame Africa",
    description:
      "Terms of Use for MindGame Africa. Standards governing intellectual property, informational integrity, and professional consultation.",
    url: "https://mindgameafrica.com/terms",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | MindGame Africa",
    description:
      "Terms of Use for MindGame Africa. Standards governing intellectual property, informational integrity, and professional consultation.",
  },
};

export default function TermsPage() {
  return (
    <article className="min-h-screen bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[56rem] px-5 md:px-12">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <SectionEyebrow
            variant="gold-dark"
            label="INSTITUTIONAL GOVERNANCE"
            className="mb-4"
          />
          <h1 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
            Terms of Use
          </h1>
          <p className="mt-4 text-navy/60 font-[family-name:var(--font-inter)] text-xs uppercase tracking-wider">
            Effective Date: 16 September 2026
          </p>
        </header>

        {/* Regulatory Flag Banner */}
        <div className="rounded-xl border border-navy/15 bg-white p-6 md:p-8 mb-12 shadow-sm">
          <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green block mb-2">
            Legal Notice & Advisory
          </span>
          <p className="text-navy/80 text-sm md:text-[0.9375rem] leading-relaxed">
            These Terms of Use govern access to and use of the MindGame Africa public digital platform. This document outlines terms of participation, intellectual property protections, and acceptable engagement standards.
          </p>
        </div>

        {/* Terms Body */}
        <div className="space-y-10 text-navy/85 text-base md:text-[1.0625rem] leading-[1.75]">
          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              1. Institutional Identity & Purpose
            </h2>
            <p>
              MindGame Africa is an applied performance, research, and education initiative dedicated to developing the human and intellectual infrastructure of high performance across Africa. All materials published on this website are provided for informational, educational, and professional orientation purposes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              All text, research frameworks, pedagogical designs, editorial articles, brand marks, and documentary photographic assets published across this website are the intellectual property of MindGame Africa or its content contributors, protected by relevant intellectual property and copyright laws.
            </p>
            <p>
              Visitors may read, reference, and cite excerpts from our public knowledge publications with appropriate institutional attribution. No content, graphics, frameworks, or code may be reproduced, mirrored, scraped, or republished for commercial gain without prior written authorisation.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              3. Non-Clinical and Applied Practice Disclaimer
            </h2>
            <p className="mb-4">
              MindGame Africa conducts applied performance psychology, performance strategy, coach development, and performance science research. 
            </p>
            <div className="rounded-lg bg-cream-dark/50 p-6 border-l-4 border-gold text-sm space-y-2">
              <p className="font-semibold text-navy">
                Important Practice Scope Notice:
              </p>
              <p className="text-navy/80">
                Information published on this platform does not constitute medical, psychiatric, clinical therapy, or mental illness diagnostic services. Individuals experiencing acute psychological distress or psychiatric emergencies must seek care from licensed medical or clinical psychiatric specialists in their region.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              4. Developing Capabilities & Forward-Looking Frameworks
            </h2>
            <p>
              In accordance with our core commitment to institutional clarity, certain sections of this website detail developing research themes, future capability areas, and prospective educational programmes. These descriptions outline areas of academic inquiry and institutional roadmaps; they do not constitute binding commercial offers, accredited university degree programmes, or guaranteed future employment.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              5. Acceptable Use of Inquiry Channels
            </h2>
            <p>
              When utilising our inquiry or partnership forms, you agree to provide authentic, accurate, and non-confidential operational information. Automated spam submissions, scraping bots, malicious payloads, and fraudulent representations of institutional identity are strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              6. Governing Law & Jurisdiction
            </h2>
            <div className="rounded-lg bg-cream-dark/50 p-6 border border-navy/10 text-sm space-y-2">
              <p className="font-semibold text-navy">
                Legal Jurisdiction Provision:
              </p>
              <p className="text-navy/70">
                These terms shall be governed by and construed in accordance with applicable regional and international civil contract principles.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
