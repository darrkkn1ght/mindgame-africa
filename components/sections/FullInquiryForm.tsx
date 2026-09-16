"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { CheckCircle2, Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FullInquiryData {
  nameAndRole: string;
  organisation: string;
  email: string;
  telephone: string;
  country: string;
  inquiryCategory: "Performance Practice" | "Research & Evaluation" | "Education & Learning" | "Institutional Collaboration" | "Other";
  whoTheWorkConcerns: string;
  description: string;
  whatHasBeenTried: string;
  desiredOutcome: string;
  indicativeTimeline: string;
  preferredDeliveryFormat: string;
  howDidYouHear: string;
  consent: boolean;
}

const initialData: FullInquiryData = {
  nameAndRole: "",
  organisation: "",
  email: "",
  telephone: "",
  country: "",
  inquiryCategory: "Performance Practice",
  whoTheWorkConcerns: "Individual performer",
  description: "",
  whatHasBeenTried: "",
  desiredOutcome: "",
  indicativeTimeline: "Immediate (1-3 months)",
  preferredDeliveryFormat: "Hybrid / Blended",
  howDidYouHear: "",
  consent: false,
};

export function FullInquiryForm() {
  const [formData, setFormData] = useState<FullInquiryData>(initialData);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FullInquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FullInquiryData, string>> = {};
    if (!formData.nameAndRole.trim()) {
      newErrors.nameAndRole = "Name and role are required.";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "A valid email address is required.";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }
    if (formData.description.trim().length < 15) {
      newErrors.description = "Please provide at least 15 characters describing the inquiry.";
    }
    if (!formData.consent) {
      newErrors.consent = "You must consent to data processing for this inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (selected.size > 10 * 1024 * 1024) {
        setSubmitError("Attachment must be under 10MB.");
        return;
      }
      setFile(selected);
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_CONTACT ||
        "https://formspree.io/f/mvkoldel";

      const payload = {
        ...formData,
        fileName: file ? file.name : "None",
        formType: "Performance / Collaboration Full Inquiry (§14.1)",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          "There was an issue submitting your inquiry. Please try again or reach out directly to inquiries@mindgameafrica.com."
        );
      }
    } catch {
      setSubmitError(
        "There was a network issue submitting your inquiry. Please contact inquiries@mindgameafrica.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-white p-8 md:p-12 border border-navy/[0.08] shadow-[0_4px_24px_rgba(16,35,63,0.06)] text-center max-w-[720px] mx-auto">
        <CheckCircle2 size={48} className="text-green mx-auto mb-4" />
        <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-2xl sm:text-3xl font-bold mb-3">
          Inquiry Received
        </h3>
        <p className="text-navy/80 text-base leading-relaxed max-w-[540px] mx-auto">
          Thank you for providing details regarding your inquiry. Our team will review the information provided and follow up through your preferred contact method.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl bg-white p-7 md:p-10 border border-navy/[0.08] shadow-[0_4px_24px_rgba(16,35,63,0.06)] max-w-[840px] mx-auto text-left"
    >
      <div className="border-b border-navy/[0.08] pb-6 mb-8">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
          Detailed Intake Flow (§14.1)
        </span>
        <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-2xl sm:text-3xl font-bold mt-1">
          Performance & Collaboration Inquiry
        </h3>
        <p className="text-navy/70 text-sm mt-2">
          Structured for performers, institutions, researchers, and organisations seeking a scoped performance or collaborative engagement.
        </p>
      </div>

      {submitError && (
        <div className="p-4 mb-6 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {submitError}
        </div>
      )}

      <div className="space-y-6">
        {/* Row 1: Name & Role, Organisation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Name and Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.nameAndRole}
              onChange={(e) => setFormData({ ...formData, nameAndRole: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
            {errors.nameAndRole && (
              <p className="text-xs text-red-600 mt-1">{errors.nameAndRole}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Organisation / Team / Institution
            </label>
            <input
              type="text"
              value={formData.organisation}
              onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
          </div>
        </div>

        {/* Row 2: Email, Telephone, Country */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Telephone (Optional)
            </label>
            <input
              type="tel"
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
            {errors.country && (
              <p className="text-xs text-red-600 mt-1">{errors.country}</p>
            )}
          </div>
        </div>

        {/* Inquiry Category & Who the work concerns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Inquiry Category
            </label>
            <select
              value={formData.inquiryCategory}
              onChange={(e) => setFormData({ ...formData, inquiryCategory: e.target.value as FullInquiryData["inquiryCategory"] })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            >
              <option value="Performance Practice">Performance Practice</option>
              <option value="Research & Evaluation">Research & Evaluation</option>
              <option value="Education & Learning">Education & Learning</option>
              <option value="Institutional Collaboration">Institutional Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Who the Work Concerns
            </label>
            <select
              value={formData.whoTheWorkConcerns}
              onChange={(e) => setFormData({ ...formData, whoTheWorkConcerns: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            >
              <option value="Individual performer">Individual performer</option>
              <option value="Team / Squad">Team / Squad</option>
              <option value="Staff group / Coaches">Staff group / Coaches</option>
              <option value="Students / Learners">Students / Learners</option>
              <option value="Organisation / Club">Organisation / Club</option>
              <option value="Research population">Research population</option>
            </select>
          </div>
        </div>

        {/* Brief description */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
            Brief Description of Performance Problem, Research Question, or Learning Need <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
          />
          {errors.description && (
            <p className="text-xs text-red-600 mt-1">{errors.description}</p>
          )}
        </div>

        {/* What has been tried & Desired outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              What Has Already Been Tried (If relevant)
            </label>
            <textarea
              rows={3}
              value={formData.whatHasBeenTried}
              onChange={(e) => setFormData({ ...formData, whatHasBeenTried: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Desired Outcome
            </label>
            <textarea
              rows={3}
              value={formData.desiredOutcome}
              onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
          </div>
        </div>

        {/* Timeline & Delivery format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Indicative Timeline
            </label>
            <select
              value={formData.indicativeTimeline}
              onChange={(e) => setFormData({ ...formData, indicativeTimeline: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            >
              <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
              <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
              <option value="Long-term / Next Season">Long-term / Next Season</option>
              <option value="Exploratory / Unscheduled">Exploratory / Unscheduled</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Preferred Delivery Format
            </label>
            <select
              value={formData.preferredDeliveryFormat}
              onChange={(e) => setFormData({ ...formData, preferredDeliveryFormat: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            >
              <option value="Hybrid / Blended">Hybrid / Blended</option>
              <option value="In-person Field Engagement">In-person Field Engagement</option>
              <option value="Remote / Video Consultation">Remote / Video Consultation</option>
              <option value="Written Review & Exchange">Written Review & Exchange</option>
            </select>
          </div>
        </div>

        {/* Document Upload & Referral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              Attach Scoping Brief / Document (PDF, max 10MB)
            </label>
            <div className="relative border border-dashed border-navy/30 rounded-lg p-4 bg-navy/[0.02] text-center">
              {file ? (
                <div className="flex items-center justify-between gap-2 text-sm text-navy">
                  <div className="flex items-center gap-2 truncate">
                    <FileText size={16} className="text-green shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-navy/50 hover:text-navy p-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer flex flex-col items-center justify-center gap-1.5 py-1">
                  <Upload size={18} className="text-navy/40" />
                  <span className="text-xs text-navy/70">Click to attach document</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 mb-2">
              How Did You Hear About MindGame Africa?
            </label>
            <input
              type="text"
              value={formData.howDidYouHear}
              onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-navy/20 bg-white text-navy text-sm focus:outline-none focus:border-navy"
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-navy/30 text-navy focus:ring-navy"
            />
            <span className="text-xs text-navy/75 leading-relaxed">
              I consent to MindGame Africa using the information provided to respond to this performance inquiry and understand that detailed intake happens through professional channels. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-navy/[0.08]">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Submitting Inquiry..." : "Submit Performance & Collaboration Inquiry"}
          </Button>
        </div>
      </div>
    </form>
  );
}
