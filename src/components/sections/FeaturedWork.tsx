"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import AnimatedText from "@/components/animations/AnimatedText";
import PortfolioImage from "@/components/ui/PortfolioImage";
import { projects } from "@/data/projects";
import { useCursorContext } from "@/components/ui/Cursor";

export default function FeaturedWork() {
  const { setCursorVariant } = useCursorContext();
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="section-padding section-padding-y border-t border-border">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="label-text mb-6">Selected Works</p>
            <AnimatedText
              text="FEATURED WORK."
              className="font-display font-bold text-display-md tracking-tighter leading-[0.95]"
            />
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-body-sm font-display uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors w-fit"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            View All Work <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 md:gap-y-28">
        {featured.map((project, index) => (
          <motion.div
            key={project.slug}
            className={index % 2 === 1 ? "md:mt-24" : ""}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block"
              onMouseEnter={() => setCursorVariant("view")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="relative overflow-hidden cursor-pointer">
                <PortfolioImage
                  src={project.thumbnail}
                  alt={`${project.title} — ${project.category}`}
                  aspectRatio="16:9"
                  fullWidth
                  className="transition-all duration-700 ease-out group-hover:scale-105"
                />
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
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
