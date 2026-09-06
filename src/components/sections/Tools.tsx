"use client";

import Reveal from "@/components/animations/Reveal";
import { TOOLS } from "@/data/constants";

export default function Tools() {
  return (
    <section className="section-padding-y border-t border-border">
      <div className="section-padding">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="label-text mb-6">Toolkit</p>
              <h2 className="font-display font-bold text-display-md tracking-tighter leading-[0.95]">
                THINGS I MAKE WITH<span className="text-accent">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-body-sm text-muted-foreground leading-relaxed md:text-right">
              The tools in my daily practice — software I use fluently to bring ideas from concept to execution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
            {TOOLS.map((tool, index) => (
              <div
                key={tool.name}
                className={`group bg-background p-8 md:p-10 transition-colors duration-300 hover:bg-muted ${
                  index === TOOLS.length - 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <p className="text-meta text-foreground/30 mb-3 font-display tracking-widest">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display font-medium text-body-lg tracking-tight group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-meta text-foreground/30 mt-2 uppercase tracking-widest ml-auto">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}