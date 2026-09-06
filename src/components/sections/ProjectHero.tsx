"use client";

import { motion } from "framer-motion";
import PortfolioImage from "@/components/ui/PortfolioImage";

interface ProjectHeroProps {
  title: string;
  category: string;
  year: string;
  role: string;
  client: string;
  image: string;
}

export default function ProjectHero({ title, category, year, role, client, image }: ProjectHeroProps) {
  return (
    <section className="section-padding pt-32 md:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="/#work"
          className="text-meta uppercase tracking-widest text-foreground/40 hover:text-accent transition-colors inline-flex items-center gap-2 mb-12"
        >
          ← Back to Work
        </a>

        <h1 className="font-display font-bold text-display-lg tracking-tighter leading-[0.95] mb-8">
          {title}
        </h1>

        <div className="flex flex-wrap gap-x-12 gap-y-4 mb-12">
          <div>
            <p className="text-meta text-foreground/40 mb-1 uppercase tracking-widest">Category</p>
            <p className="text-body-sm font-medium">{category}</p>
          </div>
          <div>
            <p className="text-meta text-foreground/40 mb-1 uppercase tracking-widest">Year</p>
            <p className="text-body-sm font-medium">{year}</p>
          </div>
          <div>
            <p className="text-meta text-foreground/40 mb-1 uppercase tracking-widest">Role</p>
            <p className="text-body-sm font-medium">{role}</p>
          </div>
          <div>
            <p className="text-meta text-foreground/40 mb-1 uppercase tracking-widest">Client</p>
            <p className="text-body-sm font-medium">{client}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-24"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <PortfolioImage
          src={image}
          alt={title}
          aspectRatio="16:9"
          fullWidth
          priority
        />
      </motion.div>
    </section>
  );
}