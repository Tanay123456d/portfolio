"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Statement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center section-padding section-padding-y overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="text-center max-w-5xl"
      >
        <motion.p
          className="label-text mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design Philosophy
        </motion.p>

        <motion.h2
          className="font-display font-bold text-display-lg tracking-tighter leading-[0.95]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block">GOOD DESIGN DOESN&apos;T</span>
          <span className="block italic font-normal text-muted-foreground">just look good.</span>
          <motion.span
            className="block mt-4 text-6xl md:text-8xl text-accent"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            IT CREATES RECOGNITION.
          </motion.span>
        </motion.h2>
      </motion.div>
    </section>
  );
}