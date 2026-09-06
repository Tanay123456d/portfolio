"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useCursorContext } from "@/components/ui/Cursor";
import { SITE_CONFIG } from "@/data/constants";
import Link from "next/link";

const ROLES = ["BRAND IDENTITY", "PACKAGING", "EDITORIAL", "ILLUSTRATION", "DIGITAL"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const { setCursorVariant } = useCursorContext();

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

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
          VISUAL COMMUNICATION DESIGNER — INDIA
        </motion.p>

        <motion.h1
          className="font-display font-bold text-display-xl tracking-tighter leading-[0.9]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="block overflow-hidden"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              UJJWAL
            </motion.span>
          </motion.span>
          <span className="text-foreground/90">
            <motion.span
              className="block overflow-hidden"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                TAMRAKAR
              </motion.span>
            </motion.span>
          </span>
          <span className="text-muted-foreground">
            <motion.span
              className="block overflow-hidden"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                DESIGNS<span className="text-accent">.</span>
              </motion.span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.div
          className="mt-8 h-10 flex items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <span className="text-meta uppercase tracking-widest text-muted-foreground mr-3">
            Focusing on
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="font-display font-semibold text-accent uppercase tracking-wider"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-md">
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              I turn ideas into visual systems people can recognize, remember, and
              feel — across branding, packaging, editorial, and digital.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-display text-meta uppercase tracking-wider hover:bg-accent hover:text-background transition-colors duration-300 w-fit"
              onMouseEnter={() => setCursorVariant("link")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              View All Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
              More About Me <span className="arrow">↓</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="section-padding py-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <p className="text-meta uppercase tracking-widest flex items-center gap-3 text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {SITE_CONFIG.availability}
        </p>
        <div className="hidden md:flex text-meta uppercase tracking-widest text-muted-foreground gap-12">
          <span>Based in {SITE_CONFIG.location}</span>
          <span>8 Projects</span>
          <span>{SITE_CONFIG.year}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
