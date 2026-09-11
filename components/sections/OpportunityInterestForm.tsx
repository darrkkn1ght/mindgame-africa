"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  interestNote: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  interestNote: "",
};

export function OpportunityInterestForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
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
        setSubmitError(
          "Something went wrong — please try again or contact us directly."
        );
      }
    } catch {
      setSubmitError(
        "Something went wrong — please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
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
              Thanks — we&apos;ll be in touch when opportunities open.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              Your details have been recorded. We will contact you when relevant
              practitioner development, mentoring, or project opportunities
              become available.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[720px]">
      <p className="text-navy/80 text-base md:text-lg leading-relaxed mb-8 pb-6 border-b border-navy/10">
        Interested in future opportunities with MindGame Africa? Leave your
        details and we&apos;ll reach out when something opens up.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="opp-name"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Your name{" "}
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
            Email address{" "}
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

        {/* Area of Interest (optional) */}
        <div>
          <label
            htmlFor="opp-note"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Area of interest{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
              (optional)
            </span>
          </label>
          <textarea
            id="opp-note"
            rows={3}
            value={formData.interestNote}
            onChange={(e) => handleChange("interestNote", e.target.value)}
            placeholder="e.g. Internships, supervised practice, practitioner education, applied research, performance psychology..."
            className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
          />
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
            {isSubmitting ? "Submitting..." : "Submit Details"}
          </Button>
        </div>
      </form>
    </div>
  );
}
