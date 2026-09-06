"use client";

import Link from "next/link";
import { useCursorContext } from "@/components/ui/Cursor";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/data/constants";

export default function Footer() {
  const { setCursorVariant } = useCursorContext();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-padding-y border-t border-border">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight block mb-4">
              {SITE_CONFIG.name}
            </Link>
            <p className="text-body-sm text-muted-foreground mb-6 max-w-xs">
              Graphic Designer / Visual Designer crafting identity systems, campaigns, and digital experiences.
            </p>
            <p className="text-body-sm text-muted-foreground">
              {SITE_CONFIG.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-text mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-sm text-muted-foreground hover:text-accent transition-colors w-fit"
                  onMouseEnter={() => setCursorVariant("link")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/"
                className="text-body-sm text-muted-foreground hover:text-accent transition-colors w-fit"
                onMouseEnter={() => setCursorVariant("link")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Home
              </Link>
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="label-text mb-4">Connect</p>
            <div className="flex flex-col gap-3 mb-6">
              <CopyEmail email={SITE_CONFIG.email} />
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm text-muted-foreground hover:text-accent transition-colors w-fit"
                  onMouseEnter={() => setCursorVariant("link")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-meta text-foreground/40">
            © {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-meta text-foreground/40 hover:text-accent transition-colors uppercase tracking-widest"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
