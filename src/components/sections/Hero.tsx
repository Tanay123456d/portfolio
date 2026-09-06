"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCursorContext } from "@/components/ui/Cursor";
import { SITE_CONFIG } from "@/data/constants";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { setCursorVariant } = useCursorContext();

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex flex-col justify-between relative pt-16 md:pt-20 overflow-hidden"
      style={{ opacity }}
    >
      <motion.div className="section-padding pt-16 md:pt-24" style={{ y }}>
        <motion.p
          className="label-text mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          GRAPHIC DESIGNER / ART DIRECTOR
        </motion.p>

        <motion.h1
          className="font-display font-bold text-display-xl tracking-tighter leading-[0.9]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          I DESIGN
          <br />
          <span className="text-foreground/90">VISUAL SYSTEMS</span>
          <br />
          <span className="italic font-normal text-muted-foreground">that matter.</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-md">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              Graphic designer focused on visual identity, branding, digital experiences, and art direction.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-body-sm font-display uppercase tracking-wider hover-arrow text-foreground/80 hover:text-accent transition-colors w-fit"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              View Selected Work <span className="arrow">↓</span>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-body-sm font-display uppercase tracking-wider hover-arrow text-foreground/80 hover:text-accent transition-colors w-fit"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              About Me <span className="arrow">→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="section-padding py-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p className="text-meta uppercase tracking-widest flex items-center gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {SITE_CONFIG.availability}
        </p>
        <div className="hidden md:flex text-meta uppercase tracking-widest text-muted-foreground gap-12">
          <span>Based in {SITE_CONFIG.location}</span>
          <span>{SITE_CONFIG.education}</span>
          <span>{SITE_CONFIG.year}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}