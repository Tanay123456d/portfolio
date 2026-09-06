"use client";

import Image from "next/image";
import ProjectPlaceholder from "./ProjectPlaceholder";
import { cn } from "@/lib/helpers";

interface PortfolioImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "cover" | "contain";
  fullWidth?: boolean;
}

export default function PortfolioImage({
  src,
  alt,
  aspectRatio = "16:9",
  className = "",
  sizes = "100vw",
  priority = false,
  fill = false,
  objectFit = "cover",
  fullWidth = false,
}: PortfolioImageProps) {
  if (!src) {
    return (
      <ProjectPlaceholder
        label={alt}
        aspectRatio={aspectRatio}
        fullWidth={fullWidth}
        className={className}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", fullWidth ? "w-full" : "", className)}>
      <div
        className={cn(
          "relative w-full h-full",
          aspectRatio === "4:5" && "aspect-[4/5]",
          aspectRatio === "3:2" && "aspect-[3/2]",
          aspectRatio === "16:9" && "aspect-[16/9]",
          aspectRatio === "1:1" && "aspect-square",
          aspectRatio === "9:16" && "aspect-[9/16]"
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill || !src.endsWith("svg")}
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            objectFit === "contain" && "object-contain",
            src.endsWith("svg") ? "static h-auto w-auto" : ""
          )}
        />
      </div>
    </div>
  );
}