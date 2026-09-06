"use client";

import { motion } from "framer-motion";
import { useCursorContext } from "@/components/ui/Cursor";
import Link from "next/link";

export default function NotFound() {
  const { setCursorVariant } = useCursorContext();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-padding text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display font-bold text-[20vw] md:text-[12rem] leading-none tracking-tighter">
          404
        </h1>
        <p className="text-body-lg text-muted-foreground mb-12 max-w-md mx-auto">
          Looks like this page went off-grid.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-display text-body-sm uppercase tracking-wider hover:bg-accent transition-colors duration-300"
          onMouseEnter={() => setCursorVariant("link")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Back to Work →
        </Link>
      </motion.div>
    </div>
  );
}