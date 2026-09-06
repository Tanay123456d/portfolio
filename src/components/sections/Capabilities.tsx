"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { useCursorContext } from "@/components/ui/Cursor";
import { CAPABILITIES } from "@/data/constants";

interface CapabilityRowProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function CapabilityRow({ number, title, description, index }: CapabilityRowProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);
  const { setCursorVariant } = useCursorContext();

  return (
    <motion.div
      ref={ref}
      className="group relative border-t border-border overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setCursorVariant("view")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <motion.div
        className="absolute inset-0 bg-accent/5 pointer-events-none"
        style={{ opacity: expanded ? 1 : 0 }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <button
        className="relative w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-8 px-4 md:px-8 py-6 md:py-8 text-left md:group-hover:translate-x-2 transition-transform duration-500 ease-out-expo"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        onMouseEnter={() => setCursorVariant("view")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <span className="text-meta text-accent font-display tracking-widest w-10 shrink-0">
          {number}
        </span>
        <div className="flex-1 md:flex md:items-center md:justify-between gap-8">
          <h3 className="font-display font-bold text-display-sm tracking-tighter group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <motion.span
            className="text-display-sm text-foreground/30 shrink-0 md:hidden"
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden
          >
            +
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="ml-12 pb-6 pr-8">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop hover description */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-8 w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <p className="text-body-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-padding-y">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p className="label-text mb-6">Capabilities</p>
              <h2 className="font-display font-bold text-display-md tracking-tighter leading-[0.95]">
                WHAT I DO<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-body-sm text-muted-foreground leading-relaxed md:text-right">
              Services built on a foundation of strategic thinking, typographic craft, and visual intelligence.
            </p>
          </div>
        </Reveal>

        <div className="border-b border-border">
          {CAPABILITIES.map((capability, index) => (
            <CapabilityRow key={capability.number} {...capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}