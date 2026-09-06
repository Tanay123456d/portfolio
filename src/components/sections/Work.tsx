"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectGrid from "@/components/ui/ProjectGrid";
import Reveal from "@/components/animations/Reveal";
import { projects, CATEGORIES } from "@/data/projects";
import AnimatedText from "@/components/animations/AnimatedText";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section-padding section-padding-y">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="label-text mb-6">Selected Works</p>
            <AnimatedText
              text="SELECTED WORK."
              className="font-display font-bold text-display-md tracking-tighter leading-[0.95]"
            />
          </div>
          <p className="max-w-sm text-body-sm text-muted-foreground leading-relaxed md:text-right">
            A selection of identity systems, campaigns, digital experiences, and visual experiments.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="flex flex-wrap gap-3 mb-16 md:mb-24 border-b border-border pb-4"
          role="group"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-meta font-display uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === category
                  ? "text-accent"
                  : "text-muted-foreground/60 hover:text-foreground"
              }`}
              aria-pressed={activeCategory === category}
            >
              {activeCategory === category && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <ProjectGrid projects={filteredProjects} />
    </section>
  );
}