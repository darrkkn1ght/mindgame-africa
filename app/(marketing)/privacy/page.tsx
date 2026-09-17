import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy | MindGame Africa",
  description:
    "Privacy Policy for MindGame Africa. Details our handling of general inquiries, collaboration requests, and professional interest submissions.",
  alternates: {
    canonical: "https://mindgameafrica.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | MindGame Africa",
    description:
      "Privacy Policy for MindGame Africa. Details our handling of general inquiries, collaboration requests, and professional interest submissions.",
    url: "https://mindgameafrica.com/privacy",
    siteName: "MindGame Africa",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MindGame Africa",
    description:
      "Privacy Policy for MindGame Africa. Details our handling of general inquiries, collaboration requests, and professional interest submissions.",
  },
};

export default function PrivacyPage() {
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
            Privacy Policy
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
            This Privacy Policy sets out how MindGame Africa processes information submitted across this platform. This document outlines our data workflows, confidentiality commitments, and procedural safeguards.
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-navy/85 text-base md:text-[1.0625rem] leading-[1.75]">
          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              MindGame Africa collects personal information solely when voluntarily provided through one of our web inquiry and engagement forms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy/80 text-[0.9375rem]">
              <li>
                <strong>General Contact Form:</strong> Full Name, Email Address, Subject, Message, and optional Organisation, Inquiry Type, or Preferred Contact Method.
              </li>
              <li>
                <strong>Performance & Collaboration Inquiry Form:</strong> Full Name, Email Address, Organisation, Role, Country, Nature of Inquiry, Target Population, Estimated Timeline, and contextual notes.
              </li>
              <li>
                <strong>Partner With Us Form:</strong> Full Name, Organisation, Role, Email Address, Country, Type of Collaboration (selected from our seven collaboration tracks), Brief Project Description, Desired Outcomes, and Preferred Next Steps.
              </li>
              <li>
                <strong>Practitioner Opportunity Interest Form:</strong> Full Name, Email Address, optional Professional Role or Academic Background, and Area of Interest.
              </li>
              <li>
                <strong>Knowledge & Insights Mailing List:</strong> Full Name, Email Address, and optional Topical Interest Areas.
              </li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-navy/75 border-l-2 border-gold pl-4 py-1">
              Data Integrity Rule: MindGame Africa does not solicit, collect, or store sensitive personal data, physical home addresses, telephone numbers, or confidential medical or clinical health information through this website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              2. How Form Submissions Are Processed
            </h2>
            <p className="mb-4">
              When an inquiry or interest registration is submitted:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-navy/80 text-[0.9375rem]">
              <li>
                Form submissions are securely transmitted via encrypted HTTPS endpoints powered by our form infrastructure provider (Formspree).
              </li>
              <li>
                Submissions trigger direct internal email notifications to designated MindGame Africa leadership and administrative personnel for manual review and response.
              </li>
              <li>
                We do not sell, rent, commercialise, or share contact submissions with third-party marketing networks or automated programmatic data brokers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              3. Consent and Legal Basis
            </h2>
            <p>
              By ticking the explicit consent checkbox on any form, you provide unambiguous consent for MindGame Africa to process your name, contact information, and message content for the sole purpose of evaluating, discussing, and responding to your inquiry or subscription request. Consent may be withdrawn at any time.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              4. Data Retention
            </h2>
            <p>
              Correspondence and inquiry records are retained only for as long as necessary to fulfil the operational purpose for which they were gathered, facilitate active professional discussions, or comply with applicable legal obligations. Newsletter subscriptions remain active until you request removal.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              5. Data Subject Rights & Contact
            </h2>
            <p className="mb-4">
              Under applicable data protection principles, you retain the right to request access to the personal data we hold about you, request rectification of inaccurate records, or request erasure of your contact details from our records.
            </p>
            <div className="rounded-lg bg-cream-dark/50 p-6 border border-navy/10 text-sm space-y-2">
              <p className="font-semibold text-navy">
                Data Controller Contact Reference:
              </p>
              <p className="text-navy/70">
                Data privacy and deletion inquiries may be directed through the General Contact form on this website using the subject &ldquo;Data Subject Rights Request&rdquo;.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl font-bold text-navy mb-4">
              6. Policy Updates
            </h2>
            <p>
              MindGame Africa reserves the right to amend this Privacy Policy to reflect changes in our research, education, and practice operations, or evolving legal requirements across relevant jurisdictions.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
