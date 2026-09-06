"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCursorContext } from "@/components/ui/Cursor";
import PortfolioImage from "@/components/ui/PortfolioImage";

interface NextProjectProps {
  slug: string;
  title: string;
  thumbnail: string;
}

export default function NextProject({ slug, title, thumbnail }: NextProjectProps) {
  const { setCursorVariant } = useCursorContext();

  return (
    <section className="border-t border-border">
      <Link
        href={`/work/${slug}`}
        className="block group relative min-h-[40vh] flex items-center justify-center overflow-hidden py-20"
        onMouseEnter={() => setCursorVariant("view")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="absolute inset-0">
          <PortfolioImage
            src={thumbnail}
            alt={title}
            aspectRatio="16:9"
            fullWidth
            className="opacity-10 group-hover:opacity-20 transition-opacity duration-700"
          />
        </div>
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-text mb-4">Next Project</p>
          <h3 className="font-display font-bold text-display-md tracking-tighter group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-6 text-body-sm font-display uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300">
            Next Project →
          </p>
        </motion.div>
      </Link>
    </section>
  );
}