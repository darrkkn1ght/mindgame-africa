"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MailingSignupProps {
  className?: string;
  variant?: "cream" | "navy";
}

export function MailingSignup({
  className = "",
  variant = "navy",
}: MailingSignupProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

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
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError("Something went wrong — please try again.");
      }
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div
        className={`flex items-start gap-3 rounded-lg p-5 ${
          variant === "navy"
            ? "bg-navy-soft text-cream border border-white/10"
            : "bg-cream-dark text-navy border border-navy/10"
        } ${className}`}
      >
        <CheckCircle2 size={22} className="text-gold shrink-0 mt-0.5" />
        <p className="text-base leading-relaxed">
          You&apos;re on the list — we&apos;ll let you know when new pieces are
          published.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex flex-col sm:flex-row gap-3 max-w-[560px]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Enter your email address"
          className={`flex-1 rounded-md border px-4 py-3 text-[0.9375rem] font-[family-name:var(--font-inter)] transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold ${
            variant === "navy"
              ? "bg-white/10 text-cream placeholder:text-cream/50 border-white/20 focus:bg-white/15"
              : "bg-white text-navy placeholder:text-navy/40 border-navy/20 focus:bg-white"
          } ${error ? "border-orange" : ""}`}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="shrink-0"
        >
          {isSubmitting ? "Joining..." : "Join Mailing List"}
        </Button>
      </form>

      {error && (
        <p className="mt-2 text-xs text-orange font-medium">{error}</p>
      )}
    </div>
  );
}
