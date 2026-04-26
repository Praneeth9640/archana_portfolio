import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups, tools } from "@/data/portfolio";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const ref = useGsapReveal<HTMLDivElement>();
  const barsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!barsRef.current) return;
    const ctx = gsap.context(() => {
      const bars = barsRef.current!.querySelectorAll<HTMLElement>("[data-bar]");
      bars.forEach((bar) => {
        const target = Number(bar.dataset.target ?? 80);
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, barsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="container-px section-y mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Capabilities"
        title={
          <>
            A toolkit built for{" "}
            <span className="text-gradient-violet">trust at scale</span>.
          </>
        }
        description="Four years of compounding craft across automation, APIs, performance, and security."
      />

      <div ref={barsRef} className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            data-reveal
            key={group.title}
            className="ring-gradient rounded-3xl bg-ink-900/60 p-6 backdrop-blur-xl sm:p-7"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold text-white">
                {group.title}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                {group.skills.length} skills
              </span>
            </div>
            <p className="mt-1.5 text-sm text-white/55">{group.caption}</p>

            <div className="mt-6 space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/80">{s.name}</span>
                    <span className="font-mono text-white/40">
                      {s.level ?? 80}%
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      data-bar
                      data-target={s.level ?? 80}
                      className="h-full rounded-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-lime"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div data-reveal className="mt-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
          Daily-driver toolkit
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/75 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
