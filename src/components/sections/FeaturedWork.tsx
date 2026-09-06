"use client";

import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import AnimatedText from "@/components/animations/AnimatedText";
import ProjectGrid from "@/components/ui/ProjectGrid";
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

      <ProjectGrid projects={featured} />
    </section>
  );
}