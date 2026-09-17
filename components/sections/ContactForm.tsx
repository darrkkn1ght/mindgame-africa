"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactContent } from "@/lib/content";
import { ContactFormSchema, ContactFormData } from "@/lib/validations";

const initialFormData: ContactFormData = {
  name: "",
  organisation: "",
  email: "",
  inquiryType: "",
  subject: "",
  message: "",
  preferredContactMethod: "",
  consent: false,
};

const inquiryTypes = [
  "Performance",
  "Research",
  "Education",
  "Partnership",
  "General",
];

const contactMethods = [
  "Email",
  "Video conversation",
  "Either method",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
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
        process.env.NEXT_PUBLIC_FORMSPREE_CONTACT ||
        "https://formspree.io/f/mvkoldel";

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
          // Use default fallback message
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
    field: keyof ContactFormData,
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
    setSubmitError(null);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[760px]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center shrink-0">
            <CheckCircle2 size={28} className="text-green" />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy tracking-tight">
              Thank you. Your message has been received.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              We have received your message and will review your inquiry.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-inter)] text-navy underline underline-offset-4 hover:text-gold transition-colors"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[760px]">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {contactContent.form.labels.fullName}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <input
            id="contact-name"
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

        {/* Organisation & Email (Two columns on sm+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact-org"
              className="block text-sm font-semibold text-navy mb-2"
            >
              {contactContent.form.labels.organisation}
            </label>
            <input
              id="contact-org"
              type="text"
              value={formData.organisation}
              onChange={(e) => handleChange("organisation", e.target.value)}
              placeholder="e.g. Club, Academy, University"
              className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-navy mb-2"
            >
              {contactContent.form.labels.email}{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
                *
              </span>
            </label>
            <input
              id="contact-email"
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
        </div>

        {/* Inquiry Type and Preferred Contact Method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact-inquiryType"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Inquiry type{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-navy/40 font-normal">
                (optional)
              </span>
            </label>
            <select
              id="contact-inquiryType"
              value={formData.inquiryType}
              onChange={(e) => handleChange("inquiryType", e.target.value)}
              className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select an inquiry type (optional)...</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-method"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Preferred contact method{" "}
              <span className="font-[family-name:var(--font-inter)] text-xs text-navy/40 font-normal">
                (optional)
              </span>
            </label>
            <select
              id="contact-method"
              value={formData.preferredContactMethod}
              onChange={(e) =>
                handleChange("preferredContactMethod", e.target.value)
              }
              className="w-full rounded-md border border-navy/20 bg-cream/30 px-4 py-3 text-navy text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select a preferred method...</option>
              {contactMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {contactContent.form.labels.subject}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            placeholder="Brief summary of your inquiry"
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.subject ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-navy mb-2"
          >
            {contactContent.form.labels.message}{" "}
            <span className="font-[family-name:var(--font-inter)] text-xs text-orange font-normal">
              *
            </span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Please share details about your inquiry or what you would like to discuss..."
            className={`w-full rounded-md border bg-cream/30 px-4 py-3 text-navy placeholder:text-navy/40 text-[0.9375rem] leading-relaxed transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.message ? "border-orange" : "border-navy/20"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-orange font-medium">
              {errors.message}
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
              {contactContent.form.labels.consent}{" "}
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
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting
              ? contactContent.form.labels.submittingButton
              : contactContent.form.labels.submitButton}
          </Button>
        </div>
      </form>
    </div>
  );
}
