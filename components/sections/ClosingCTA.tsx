"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <section className="relative bg-navy py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[820px]"
        >
          <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
            Have a performance problem, research question, learning need or
            collaboration idea?
          </h2>
          <div className="mt-10">
            <Button variant="primary" href="/partner-with-us">
              Start the Right Conversation With MindGame Africa
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
