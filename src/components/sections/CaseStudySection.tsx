"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CaseStudySectionProps {
  label: string;
  title?: string;
  children: ReactNode;
}

export default function CaseStudySection({ label, title, children }: CaseStudySectionProps) {
  return (
    <motion.section
      className="py-20 border-b border-border last:border-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-3">
          <p className="text-meta text-accent uppercase tracking-widest mb-2">{label}</p>
          {title && (
            <h2 className="font-display font-bold text-display-sm tracking-tighter">{title}</h2>
          )}
        </div>
        <div className="lg:col-span-8 lg:col-start-5 max-w-2xl">
          {children}
        </div>
      </div>
    </motion.section>
  );
}