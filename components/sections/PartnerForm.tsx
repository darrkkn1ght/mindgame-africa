"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  organisation: string;
  role: string;
  email: string;
  country: string;
  collaborationType: string;
  discussionTopic: string;
  usefulOutcome: string;
  preferredContact: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  organisation: "",
  role: "",
  email: "",
  country: "",
  collaborationType: "",
  discussionTopic: "",
  usefulOutcome: "",
  preferredContact: "Email",
  consent: false,
};

const collaborationOptions = [
  "Performance Engagement",
  "Research and Evaluation",
  "University or Academic Collaboration",
  "Professional Education",
  "Practitioner or Faculty Collaboration",
  "Institutional or International Partnership",
  "Other",
];

const contactOptions = ["Email", "Video call", "Phone call"];

export function PartnerForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Please provide your country.";
    }

    if (!formData.collaborationType) {
      newErrors.collaborationType = "Please select a type of collaboration.";
    }

    if (!formData.discussionTopic.trim()) {
      newErrors.discussionTopic =
        "Please describe what you would like to discuss.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please confirm this information can be used to respond to your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_PARTNER ||
        "https://formspree.io/f/mzeboyqg";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          "Something went wrong — please try again or email us directly."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong — please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[860px]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={28} className="text-green" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy tracking-tight">
              Thanks — we&apos;ll be in touch.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              We have received your collaboration inquiry and will review it
              carefully before getting back to you.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] text-navy underline underline-offset-4 hover:text-gold transition-colors"
              >
                Send another inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[860px]">
      <p className="text-navy/75 text-base md:text-lg leading-relaxed mb-8 pb-6 border-b border-navy/10">
        Tell us what you are trying to build, examine or improve, and where you
        think MindGame Africa may fit.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Full name{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Your full name"
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.fullName ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Organisation & Role (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="organisation"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Organisation or institution{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
                (optional)
              </span>
            </label>
            <input
              id="organisation"
              type="text"
              value={formData.organisation}
              onChange={(e) => handleChange("organisation", e.target.value)}
              placeholder="e.g. Club, University, Federation"
              className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Role or position{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
                (optional)
              </span>
            </label>
            <input
              id="role"
              type="text"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              placeholder="e.g. Head Coach, Director, Researcher"
              className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>

        {/* Email & Country (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Email address{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="name@organisation.com"
              className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.email ? "border-orange" : "border-navy/20"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-orange font-medium">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Country{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              placeholder="e.g. Nigeria, South Africa, Kenya, UK"
              className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.country ? "border-orange" : "border-navy/20"
              }`}
            />
            {errors.country && (
              <p className="mt-1.5 text-xs text-orange font-medium">
                {errors.country}
              </p>
            )}
          </div>
        </div>

        {/* Type of Collaboration */}
        <div>
          <label
            htmlFor="collaborationType"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Type of collaboration{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <select
            id="collaborationType"
            value={formData.collaborationType}
            onChange={(e) => handleChange("collaborationType", e.target.value)}
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.collaborationType ? "border-orange" : "border-navy/20"
            }`}
          >
            <option value="">Select a collaboration type...</option>
            {collaborationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.collaborationType && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.collaborationType}
            </p>
          )}
        </div>

        {/* Briefly describe what you would like to discuss */}
        <div>
          <label
            htmlFor="discussionTopic"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Briefly describe what you would like to discuss.{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <textarea
            id="discussionTopic"
            rows={4}
            value={formData.discussionTopic}
            onChange={(e) => handleChange("discussionTopic", e.target.value)}
            placeholder="Provide context regarding the performance question, intervention, research project, or educational programme you are considering..."
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.discussionTopic ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.discussionTopic && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.discussionTopic}
            </p>
          )}
        </div>

        {/* What would a useful outcome look like? */}
        <div>
          <label
            htmlFor="usefulOutcome"
            className="block text-sm font-semibold text-navy mb-2"
          >
            What would a useful outcome from this collaboration look like?{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="usefulOutcome"
            rows={3}
            value={formData.usefulOutcome}
            onChange={(e) => handleChange("usefulOutcome", e.target.value)}
            placeholder="e.g. A tailored assessment, a collaborative research paper, a certified workshop series, structured mentorship..."
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        {/* Preferred way to continue conversation */}
        <div>
          <label
            htmlFor="preferredContact"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Preferred way to continue the conversation
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => handleChange("preferredContact", e.target.value)}
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {contactOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-navy/30 text-gold accent-gold focus:ring-gold"
            />
            <span className="text-sm text-navy/80 leading-snug">
              I confirm this information can be used to respond to my inquiry.{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
                *
              </span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="rounded-md bg-orange/10 border border-orange/20 p-4 text-sm text-orange font-medium">
            {submitError}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}
