"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { insightsContent } from "@/lib/content";
import { MailingListSchema, MailingListData } from "@/lib/validations";

interface MailingSignupProps {
  className?: string;
  variant?: "cream" | "navy";
  buttonText?: string;
}

const initialFormData: MailingListData = {
  name: "",
  email: "",
  interestArea: "",
  consent: false,
};

export function MailingSignup({
  className = "",
  variant = "navy",
  buttonText = insightsContent.mailingList.buttonLabel,
}: MailingSignupProps) {
  const [formData, setFormData] = useState<MailingListData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof MailingListData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const result = MailingListSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof MailingListData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof MailingListData;
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
        process.env.NEXT_PUBLIC_FORMSPREE_INSIGHTS ||
        "https://formspree.io/f/meaqnvwz";

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
    field: keyof MailingListData,
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
      <div
        className={`flex items-start gap-4 rounded-xl p-6 ${
          variant === "navy"
            ? "bg-navy-soft text-cream border border-white/10"
            : "bg-cream-dark text-navy border border-navy/10"
        } ${className}`}
      >
        <CheckCircle2 size={24} className="text-gold shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-lg">
            Thank you. You&apos;re subscribed to MindGame Africa Insights.
          </h4>
          <p
            className={`mt-1.5 text-sm leading-relaxed ${
              variant === "navy" ? "text-cream/80" : "text-navy/75"
            }`}
          >
            You will receive new research translations, evidence reviews, and
            practitioner resources directly when published.
          </p>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleReset}
              className={`text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-inter)] underline underline-offset-4 hover:text-gold transition-colors ${
                variant === "navy" ? "text-cream/70" : "text-navy/70"
              }`}
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-[620px]">
        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="mailing-name"
              className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-[family-name:var(--font-inter)] ${
                variant === "navy" ? "text-cream/90" : "text-navy/90"
              }`}
            >
              Name <span className="text-orange">*</span>
            </label>
            <input
              id="mailing-name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your name"
              className={`w-full rounded-md border px-4 py-2.5 text-[0.9375rem] font-[family-name:var(--font-inter)] transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold ${
                variant === "navy"
                  ? "bg-white/10 border-white/20 text-cream placeholder:text-cream/40 focus:bg-white/15"
                  : "bg-white border-navy/20 text-navy placeholder:text-navy/40"
              } ${errors.name ? "border-orange" : ""}`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-orange font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="mailing-email"
              className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-[family-name:var(--font-inter)] ${
                variant === "navy" ? "text-cream/90" : "text-navy/90"
              }`}
            >
              Email <span className="text-orange">*</span>
            </label>
            <input
              id="mailing-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="name@example.com"
              className={`w-full rounded-md border px-4 py-2.5 text-[0.9375rem] font-[family-name:var(--font-inter)] transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold ${
                variant === "navy"
                  ? "bg-white/10 border-white/20 text-cream placeholder:text-cream/40 focus:bg-white/15"
                  : "bg-white border-navy/20 text-navy placeholder:text-navy/40"
              } ${errors.email ? "border-orange" : ""}`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-orange font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Primary Interest Area (optional) */}
        <div>
          <label
            htmlFor="mailing-interest"
            className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-[family-name:var(--font-inter)] ${
              variant === "navy" ? "text-cream/70" : "text-navy/70"
            }`}
          >
            Interest area (optional)
          </label>
          <select
            id="mailing-interest"
            value={formData.interestArea}
            onChange={(e) => handleChange("interestArea", e.target.value)}
            className={`w-full rounded-md border px-4 py-2.5 text-[0.9375rem] font-[family-name:var(--font-inter)] transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold ${
              variant === "navy"
                ? "bg-navy-soft border-white/20 text-cream"
                : "bg-white border-navy/20 text-navy"
            }`}
          >
            <option value="">All research translations & resources</option>
            {insightsContent.plannedCategories.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleChange("consent", e.target.checked)}
              className="mt-1 h-3.5 w-3.5 rounded border-navy/30 text-gold accent-gold focus:ring-gold"
            />
            <span
              className={`text-xs leading-snug ${
                variant === "navy" ? "text-cream/80" : "text-navy/80"
              }`}
            >
              I agree to receive structured institutional knowledge and updates.{" "}
              <span className="text-orange">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-xs text-orange font-medium">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Error */}
        {submitError && (
          <div className="rounded-md bg-orange/10 border border-orange/20 p-3 text-xs text-orange font-medium">
            {submitError}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-1">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Subscribing..." : buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
