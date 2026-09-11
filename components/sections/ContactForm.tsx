"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormData {
  name: string;
  organisation: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
}

const initialFormData: ContactFormData = {
  name: "",
  organisation: "",
  email: "",
  inquiryType: "",
  subject: "",
  message: "",
  consent: false,
};

const inquiryTypes = [
  "Performance",
  "Research",
  "Education",
  "Partnership",
  "General",
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please provide a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please confirm this information can be used to respond to your message.";
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
              Thanks — your message has been sent.
            </h3>
            <p className="mt-3 text-navy/75 text-base md:text-lg leading-relaxed">
              We have received your message and will get back to you as soon as
              possible.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] text-navy underline underline-offset-4 hover:text-gold transition-colors"
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
            Name{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
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

        {/* Organisation & Email (2 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact-org"
              className="block text-sm font-semibold text-navy mb-2"
            >
              Organisation{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
                (optional)
              </span>
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
              Email{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
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

        {/* Inquiry Type (optional selector) */}
        <div>
          <label
            htmlFor="contact-inquiryType"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Inquiry type{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-navy/40 font-normal">
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

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-sm font-semibold text-navy mb-2"
          >
            Subject{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
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
            Message{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-orange font-normal">
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
              I confirm this information can be used to respond to my message.{" "}
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
