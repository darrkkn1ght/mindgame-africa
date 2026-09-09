"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Generates SVG path data for abstract topographic/motion-capture contour lines.
 * These suggest scientific measurement and movement without being literal.
 */
function ContourPlaceholder() {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10233F" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#10233F" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="lineGrad1" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10233F" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#2F6B4F" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#10233F" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="lineGrad2" x1="0" y1="200" x2="400" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10233F" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#D9A441" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#10233F" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <rect width="400" height="500" fill="url(#bgGrad)" />

      {/* Topographic contour lines — suggesting terrain, data, or motion paths */}
      {/* Outer contours — faint */}
      <path d="M-20 180 Q80 120, 180 160 Q280 200, 380 140 Q420 120, 440 130" stroke="url(#lineGrad1)" strokeWidth="0.8" />
      <path d="M-20 210 Q60 160, 160 190 Q260 220, 360 170 Q420 150, 440 155" stroke="url(#lineGrad1)" strokeWidth="0.8" />
      <path d="M-20 240 Q50 200, 140 220 Q240 245, 340 200 Q400 180, 440 185" stroke="url(#lineGrad1)" strokeWidth="0.8" />

      {/* Mid contours — slightly stronger */}
      <path d="M-20 270 Q70 235, 150 255 Q230 275, 320 240 Q380 215, 440 220" stroke="url(#lineGrad1)" strokeWidth="1" />
      <path d="M-20 295 Q80 265, 160 280 Q240 295, 310 265 Q370 245, 440 250" stroke="url(#lineGrad1)" strokeWidth="1.2" />

      {/* Inner contours — tightest, most visible */}
      <path d="M-10 320 Q90 295, 170 310 Q230 320, 290 300 Q350 280, 430 285" stroke="url(#lineGrad1)" strokeWidth="1.4" />

      {/* Second cluster — lower, offset, suggesting a figure/movement arc */}
      <path d="M30 360 Q100 340, 180 355 Q260 370, 340 345 Q400 330, 440 335" stroke="url(#lineGrad2)" strokeWidth="0.8" />
      <path d="M50 385 Q120 368, 200 378 Q270 388, 340 370 Q390 358, 430 362" stroke="url(#lineGrad2)" strokeWidth="1" />
      <path d="M80 405 Q140 392, 210 400 Q270 408, 330 395 Q370 385, 420 388" stroke="url(#lineGrad2)" strokeWidth="1.2" />

      {/* Scattered data-point dots */}
      <circle cx="170" cy="310" r="2.5" fill="#2F6B4F" opacity="0.25" />
      <circle cx="290" cy="298" r="2" fill="#2F6B4F" opacity="0.2" />
      <circle cx="200" cy="378" r="2" fill="#D9A441" opacity="0.2" />
      <circle cx="130" cy="255" r="1.5" fill="#10233F" opacity="0.15" />
      <circle cx="320" cy="240" r="1.5" fill="#10233F" opacity="0.12" />

      {/* A single thin vertical measurement axis — suggests scientific context */}
      <line x1="60" y1="140" x2="60" y2="420" stroke="#10233F" strokeWidth="0.5" opacity="0.08" />
      <line x1="58" y1="160" x2="62" y2="160" stroke="#10233F" strokeWidth="0.5" opacity="0.12" />
      <line x1="58" y1="220" x2="62" y2="220" stroke="#10233F" strokeWidth="0.5" opacity="0.12" />
      <line x1="58" y1="280" x2="62" y2="280" stroke="#10233F" strokeWidth="0.5" opacity="0.12" />
      <line x1="58" y1="340" x2="62" y2="340" stroke="#10233F" strokeWidth="0.5" opacity="0.12" />
      <line x1="58" y1="400" x2="62" y2="400" stroke="#10233F" strokeWidth="0.5" opacity="0.12" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        {/* ── Full-width headline spanning the viewport (Option A) ── */}
        <motion.div
          className="pt-16 md:pt-24 lg:pt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionEyebrow label="Performance · Research · Education" className="mb-7" />

          <h1 className="font-[family-name:var(--font-fraunces)] text-navy max-w-[960px]">
            {/* Option B: split the headline — last phrase in gold */}
            Developing the Human and Intellectual Infrastructure of Performance{" "}
            <span className="relative inline-block text-gold">
              in Africa.
              {/* Thin gold underline for visual rhythm */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gold/40" />
            </span>
          </h1>
        </motion.div>

        {/* ── Asymmetric lower section: copy left, visual lower-right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-8 lg:gap-12 mt-8 lg:mt-4 pb-16 md:pb-24 lg:pb-28">
          {/* Left: supporting copy + CTAs, offset below the headline */}
          <motion.div
            className="lg:pt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-navy/70 max-w-[520px] text-[1.0625rem] leading-[1.65]">
              MindGame Africa connects performance science, research, education
              and professional practice to help athletes, teams, coaches,
              organisations and practitioners understand performance problems,
              develop capability and improve what happens in practice.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="primary" href="#what-we-do">
                Explore What We Do
              </Button>
              <Button variant="secondary" href="/partner-with-us">
                Work With MindGame Africa
              </Button>
            </div>
          </motion.div>

          {/* Right: visual placeholder — offset lower, overlaps paragraph area slightly */}
          <motion.div
            className="relative lg:-mt-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] lg:ml-auto rounded-lg overflow-hidden bg-cream-dark">
              {/* Contour-line placeholder — topographic/motion-capture pattern */}
              <ContourPlaceholder />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="h-px bg-navy/[0.06]" />
    </section>
  );
}
