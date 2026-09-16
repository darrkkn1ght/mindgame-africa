"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { opportunitiesContent } from "@/lib/content";
import {
  OpportunityInterestSchema,
  OpportunityInterestData,
} from "@/lib/validations";

const initialFormData: OpportunityInterestData = {
  name: "",
  email: "",
  role: "",
  areaOfInterest: "",
  message: "",
  consent: false,
};

const areaOptions = [
  "Practitioner Development & Mentorship",
  "Supervised Practicum & Experience",
  "Internships & Placements",
  "Applied Performance Projects",
  "Research Attachments",
  "Other",
];

export function OpportunityInterestForm() {
  const [formData, setFormData] =
    useState<OpportunityInterestData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof OpportunityInterestData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const result = OpportunityInterestSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<
        Record<keyof OpportunityInterestData, string>
      > = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof OpportunityInterestData;
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
        process.env.NEXT_PUBLIC_FORMSPREE_OPPORTUNITIES ||
        "https://formspree.io/f/mgaedrbn";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        let errMessage =
          "There was an issue submitting your form. Please try again or contact inquiries@mindgameafrica.com.";
        try {
          const data = await response.json();
          if (
            data?.errors &&
            Array.isArray(data.errors) &&
            data.errors.length > 0
          ) {
            errMessage =
              data.errors
                .map((err: { message?: string }) => err.message || "")
                .filter(Boolean)
                .join(", ") || errMessage;
          } else if (data?.error) {
            errMessage =
              typeof data.error === "string" ? data.error : errMessage;
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
    field: keyof OpportunityInterestData,
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
    setIsSuccess(false);
    setSubmitError(null);
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[720px]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={28} className="text-green" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy tracking-tight">
              Thank you. We&apos;ll contact you when relevant opportunities arise.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              Your details have been recorded. When structured opportunities
              including internships, supervised practicum, or practitioner
              development pathways open, we will contact you directly.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] text-navy underline underline-offset-4 hover:text-gold transition-colors"
              >
                Register another interest
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { labels, description } = opportunitiesContent.interestForm;

  return (
    <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[720px]">
      <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8 pb-6 border-b border-navy/10">
        {description}
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="opp-name"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {labels.fullName}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <input
            id="opp-name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your full name"
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.name ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="opp-email"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {labels.email}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <input
            id="opp-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="name@example.com"
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

        {/* Role / Background (optional) */}
        <div>
          <label
            htmlFor="opp-role"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {labels.currentBackground}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
              (optional)
            </span>
          </label>
          <input
            id="opp-role"
            type="text"
            value={formData.role}
            onChange={(e) => handleChange("role", e.target.value)}
            placeholder="e.g. Postgraduate student, coach, practitioner"
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        {/* Area of Interest (optional select) */}
        <div>
          <label
            htmlFor="opp-area"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {labels.areaOfInterest}{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
              (optional)
            </span>
          </label>
          <select
            id="opp-area"
            value={formData.areaOfInterest}
            onChange={(e) => handleChange("areaOfInterest", e.target.value)}
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <option value="">Select an area of interest (optional)...</option>
            {areaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message (optional) */}
        <div>
          <label
            htmlFor="opp-message"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Message or specific focus{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="opp-message"
            rows={3}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Share any specific pathways or learning expectations you would like us to note..."
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
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
              {labels.consent}{" "}
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
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? labels.submittingButton : labels.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
