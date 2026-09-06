"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/helpers";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  arrow?: boolean;
  [key: string]: unknown;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
  arrow = true,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-display font-medium uppercase tracking-wider transition-all duration-500 ease-out-expo group";

  const variants = {
    primary: "bg-foreground text-background hover:bg-accent",
    secondary: "border border-border text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground hover:text-accent",
  };

  const sizes = {
    sm: "text-meta px-4 py-2",
    md: "text-body-sm px-6 py-3",
    lg: "text-body-md px-8 py-4",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const arrowSpan = arrow ? (
    <span className="arrow inline-block transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  ) : null;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {arrowSpan}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
      {arrowSpan}
    </button>
  );
}
