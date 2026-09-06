"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { SOCIAL_LINKS, SITE_CONFIG } from "@/data/constants";
import ContactForm from "./ContactForm";

export default function Contact() {
  const emailParts = SITE_CONFIG.email.split("@");

  return (
    <section id="contact" className="section-padding-y border-t border-border">
      <div className="section-padding">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-7">
              <p className="label-text mb-8">Contact</p>
              <h2 className="font-display font-bold text-display-lg tracking-tighter leading-[0.92]">
                LET&apos;S MAKE
                <br />
                SOMETHING
                <br />
                <span className="text-accent italic font-normal">GOOD.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-sm mb-8">
                Have a project in mind? Whether it&apos;s an identity system, a campaign, or something
                experimental — I&apos;d love to hear about it.
              </p>
              <p className="text-body-sm text-foreground/40">
                Currently based in India — working worldwide, remotely.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col md:items-center justify-between gap-6 mb-20 md:flex-row py-10 border-y border-border">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-medium text-body-lg tracking-tight hover:text-accent transition-colors duration-300 group inline-flex items-center gap-2"
              >
                {link.label}
                <span className="text-meta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <p className="text-meta uppercase tracking-widest text-foreground/40 mb-4">
                Direct Email
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-display font-medium text-display-sm tracking-tighter text-foreground hover:text-accent transition-colors duration-300 break-all"
              >
                {SITE_CONFIG.email}
              </a>

              <div className="mt-12">
                <p className="text-meta uppercase tracking-widest text-foreground/40 mb-4">
                  Response Time
                </p>
                <p className="text-body-md text-muted-foreground">
                  Usually within 24 — 48 hours.
                </p>
              </div>

              <div className="mt-12">
                <p className="text-meta uppercase tracking-widest text-foreground/40 mb-4">
                  Based In
                </p>
                <p className="text-body-md text-muted-foreground">
                  {SITE_CONFIG.location}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}