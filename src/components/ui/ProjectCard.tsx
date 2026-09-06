"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useCursorContext } from "@/components/ui/Cursor";
import PortfolioImage from "./PortfolioImage";
import { cn } from "@/lib/helpers";

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    year: string;
    category: string;
    client: string;
    shortDescription: string;
    thumbnail: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { setCursorVariant } = useCursorContext();

  const isEven = index % 2 === 0;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("block w-full", isEven ? "" : "md:ml-auto")}
    >
      <div className={isEven ? "w-full" : "w-full md:w-3/4 md:ml-auto"}>
        <div
          ref={ref}
          className="group relative overflow-hidden cursor-pointer"
          onMouseEnter={() => { setCursorVariant("view"); }}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <motion.div style={{ y: scrollYProgress }} className="relative">
            <PortfolioImage
              src={project.thumbnail}
              alt={`${project.title} — ${project.category}`}
              aspectRatio={isEven ? "16:9" : "4:5"}
              fullWidth
              className="transition-all duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="px-6 py-3 bg-foreground text-background font-display text-meta uppercase tracking-widest">
              View Project
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-meta uppercase tracking-widest text-foreground/40 mb-2">
              <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="font-display font-bold text-display-sm tracking-tighter hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-meta uppercase tracking-widest text-foreground/40 mt-1">
              {project.client}
            </p>
          </div>
          <p className="max-w-xs text-body-sm text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}