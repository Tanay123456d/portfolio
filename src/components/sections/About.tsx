"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { useCursorContext } from "@/components/ui/Cursor";

export default function About() {
  const { setCursorVariant } = useCursorContext();

  const skills = [
    "Graphic Design",
    "Visual Identity",
    "Art Direction",
    "Branding",
    "Digital Design",
    "Typography",
    "Campaign Design",
  ];

  return (
    <section id="about" className="section-padding section-padding-y border-t border-border">
      <Reveal>
        <p className="label-text mb-6">About</p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-display-md tracking-tighter leading-[1.05] mb-10">
              I&apos;m interested in turning ideas into{" "}
              <span className="text-accent italic font-normal">visual systems</span> people can
              recognize, remember, and feel.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-body-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              I&apos;m a graphic designer based in India, currently pursuing my B.Des in Graphic Design
              at NIFT Bhopal. My practice sits at the intersection of brand identity, art direction,
              and editorial design — where strategy meets craft.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-body-md text-muted-foreground leading-relaxed max-w-xl mb-12">
              I believe good design doesn&apos;t just look good — it creates recognition. Whether it&apos;s a
              complete identity system, a campaign, or an experimental poster series, I approach
              every project with the same intention: clarity, character, and confidence.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border text-meta font-display uppercase tracking-wider text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <Button href="/cv/ujjwal-tamrakar-cv.pdf" variant="primary">
              Download CV
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2} direction="left">
            <motion.div
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] border border-border"
              whileHover="hover"
              onMouseEnter={() => setCursorVariant("view")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <span className="label-text">Portrait</span>
              </div>
              <motion.div
                className="absolute inset-0 bg-accent/20 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-meta text-background mix-blend-difference uppercase tracking-widest">
                  Ujjwal Tamrakar
                </span>
                <span className="text-meta text-background mix-blend-difference uppercase tracking-widest">
                  NIFT Bhopal · 2026
                </span>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}