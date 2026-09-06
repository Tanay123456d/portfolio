"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-body-lg text-muted-foreground py-16 text-center">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.div layout className="flex flex-col gap-24 md:gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}