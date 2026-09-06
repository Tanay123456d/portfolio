"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { useCursorContext } from "@/components/ui/Cursor";
import { EXPERIENCE } from "@/data/constants";

interface TimelineRowProps {
  period: string;
  institution: string;
  title: string;
  description: string;
  index: number;
}

function TimelineRow({ period, institution, title, description, index }: TimelineRowProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { setCursorVariant } = useCursorContext();

  return (
    <motion.div
      ref={ref}
      className="border-b border-border"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        className="w-full flex items-center justify-between py-8 md:py-10 text-left group cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        onMouseEnter={() => setCursorVariant("text")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 flex-1">
          <span className="text-meta text-accent font-display tracking-widest w-28 shrink-0">
            {period}
          </span>
          <div>
            <h3 className="font-display font-bold text-display-sm tracking-tighter group-hover:text-accent transition-colors duration-300">
              {institution}
            </h3>
            <p className="text-meta text-foreground/40 uppercase tracking-widest mt-1">
              {title}
            </p>
          </div>
        </div>
        <motion.span
          className="text-display-sm text-foreground/30 ml-8 shrink-0"
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 md:pl-40 max-w-xl">
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="section-padding-y border-t border-border">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p className="label-text mb-6">Path</p>
              <h2 className="font-display font-bold text-display-md tracking-tighter leading-[0.95]">
                EXPERIENCE &amp;
                <br />
                EDUCATION<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-body-sm text-muted-foreground leading-relaxed md:text-right">
              Select a row to read more about my journey in design education and professional work.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-border">
          {EXPERIENCE.map((item, index) => (
            <TimelineRow key={item.institution} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}