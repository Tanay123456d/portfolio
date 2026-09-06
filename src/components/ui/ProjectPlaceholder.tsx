"use client";

import { cn } from "@/lib/helpers";

interface ProjectPlaceholderProps {
  label: string;
  aspectRatio?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function ProjectPlaceholder({
  label,
  aspectRatio = "16/10",
  fullWidth = false,
  className = "",
}: ProjectPlaceholderProps) {
  const aspectClasses: Record<string, string> = {
    "4:5": "aspect-[4/5]",
    "3:2": "aspect-[3/2]",
    "16:9": "aspect-[16/9]",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  return (
    <div
      className={cn(
        "project-placeholder",
        fullWidth ? "w-full" : "",
        aspectClasses[aspectRatio] || "aspect-[16/10]",
        className
      )}
    >
      <span>{label}</span>
    </div>
  );
}
