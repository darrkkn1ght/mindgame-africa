"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { partnerContent } from "@/lib/content";
import {
  PartnerFormSchema,
  PartnerFormData,
  collaborationTypeOptions,
} from "@/lib/validations";

const contactOptions = [
  "Email",
  "Video call",
  "Written brief exchange",
];

export function PartnerForm() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  const [formData, setFormData] = useState<PartnerFormData>(() => {
    const validCollab =
      typeParam && (collaborationTypeOptions as readonly string[]).includes(typeParam)
        ? (typeParam as (typeof collaborationTypeOptions)[number])
        : ("" as unknown as (typeof collaborationTypeOptions)[number]);

    return {
      fullName: "",
      organisation: "",
      role: "",
      email: "",
      country: "",
      collaborationType: validCollab,
      discussionTopic: "",
      usefulOutcome: "",
      preferredContact: "Email",
      consent: false,
    };
  });

  // Synchronize state during render if URL query parameter changes
  const [prevTypeParam, setPrevTypeParam] = useState(typeParam);
  if (typeParam !== prevTypeParam) {
    setPrevTypeParam(typeParam);
    if (typeParam && (collaborationTypeOptions as readonly string[]).includes(typeParam)) {
      setFormData((prev) => ({
        ...prev,
        collaborationType: typeParam as (typeof collaborationTypeOptions)[number],
      }));
    }
  }

  const [errors, setErrors] = useState<Partial<Record<keyof PartnerFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const result = PartnerFormSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof PartnerFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof PartnerFormData;
        if (field && !newErrors[field]) {
          newErrors[field] = issue.message;
        }
      }
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

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
        let errMessage =
          "There was an issue submitting your form. Please try again or contact inquiries@mindgameafrica.com.";
        try {
          const data = await response.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
            errMessage =
              data.errors
                .map((err: { message?: string }) => err.message || "")
                .filter(Boolean)
                .join(", ") || errMessage;
          } else if (data?.error) {
            errMessage = typeof data.error === "string" ? data.error : errMessage;
          }
        } catch {
          // Use default fallback
        }
        setSubmitError(errMessage);
      }
    } catch {
      setSubmitError(
        "There was an issue submitting your form. Please try again or contact inquiries@mindgameafrica.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof PartnerFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      organisation: "",
      role: "",
      email: "",
      country: "",
      collaborationType: "" as unknown as (typeof collaborationTypeOptions)[number],
      discussionTopic: "",
      usefulOutcome: "",
      preferredContact: "Email",
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmitError(null);
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
              Thank you. We&apos;ll review your inquiry and be in touch.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              We have received your collaboration inquiry and will review it
              carefully before getting back to you.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-inter)] text-navy underline underline-offset-4 hover:text-gold transition-colors"
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
        {partnerContent.form.intro}
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {partnerContent.form.labels.fullName}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
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
              {partnerContent.form.labels.organisation}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="organisation"
              type="text"
              value={formData.organisation}
              onChange={(e) => handleChange("organisation", e.target.value)}
              placeholder="e.g. Club, University, Federation"
              className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.organisation ? "border-orange" : "border-navy/20"
              }`}
            />
            {errors.organisation && (
              <p className="mt-1.5 text-xs text-orange font-medium">
                {errors.organisation}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-navy mb-2"
            >
              {partnerContent.form.labels.role}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="role"
              type="text"
              value={formData.role}
              onChange={(e) => handleChange("role", e.target.value)}
              placeholder="e.g. Head Coach, Director, Researcher"
              className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.role ? "border-orange" : "border-navy/20"
              }`}
            />
            {errors.role && (
              <p className="mt-1.5 text-xs text-orange font-medium">
                {errors.role}
              </p>
            )}
          </div>
        </div>

        {/* Email & Country (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-navy mb-2"
            >
              {partnerContent.form.labels.email}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
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
              {partnerContent.form.labels.country}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              placeholder="e.g. Kenya, Ghana, South Africa, UK"
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
            {partnerContent.form.labels.collaborationType}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <select
            id="collaborationType"
            value={formData.collaborationType}
            onChange={(e) =>
              handleChange(
                "collaborationType",
                e.target.value as (typeof collaborationTypeOptions)[number]
              )
            }
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.collaborationType ? "border-orange" : "border-navy/20"
            }`}
          >
            <option value="">Select a collaboration type...</option>
            {collaborationTypeOptions.map((opt) => (
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
            {partnerContent.form.labels.discussionTopic}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
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
            {partnerContent.form.labels.usefulOutcome}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <textarea
            id="usefulOutcome"
            rows={3}
            value={formData.usefulOutcome}
            onChange={(e) => handleChange("usefulOutcome", e.target.value)}
            placeholder="e.g. a tailored assessment, a collaborative research paper, a structured workshop series, ongoing mentorship..."
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.usefulOutcome ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.usefulOutcome && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.usefulOutcome}
            </p>
          )}
        </div>

        {/* Preferred way to continue conversation */}
        <div>
          <label
            htmlFor="preferredContact"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {partnerContent.form.labels.preferredContact}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => handleChange("preferredContact", e.target.value)}
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.preferredContact ? "border-orange" : "border-navy/20"
            }`}
          >
            {contactOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.preferredContact && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.preferredContact}
            </p>
          )}
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
              {partnerContent.form.labels.consent}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
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
            {isSubmitting
              ? partnerContent.form.labels.submittingButton
              : partnerContent.form.labels.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
