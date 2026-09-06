import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
}

export default function SectionHeading({
  label,
  title,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  }[align];

  return (
    <div className={`mb-16 md:mb-20 ${alignClass} ${className}`}>
      {label && (
        <motion.p
          className="label-text mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {label}
        </motion.p>
      )}
      {typeof title === "string" ? (
        <AnimatedText
          text={title}
          className="font-display font-bold text-display-md tracking-tighter leading-[0.95]"
        />
      ) : (
        title
      )}
    </div>
  );
}