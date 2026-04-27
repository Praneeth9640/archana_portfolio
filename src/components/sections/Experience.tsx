import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, certifications } from "@/data/portfolio";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useGsapReveal<HTMLDivElement>();
  const lineWrap = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!lineWrap.current) return;
    const ctx = gsap.context(() => {
      const line = lineWrap.current!.querySelector<HTMLElement>("[data-line]");
      if (!line) return;
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineWrap.current!,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, lineWrap);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="container-px section-y mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="Trajectory"
        title={
          <>
            Four years.{" "}
            <span className="text-gradient-violet">One mission.</span>
          </>
        }
        description="Every role pushed me deeper into automation, security, and the discipline of shipping with confidence."
      />

      <div ref={lineWrap} className="relative mt-16 pl-10 md:pl-12">
        {/* Timeline rail */}
        <span className="absolute left-[15px] top-0 h-full w-px bg-white/[0.06] md:left-[19px]" />
        <span
          data-line
          className="absolute left-[15px] top-0 h-full w-px origin-top bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-lime md:left-[19px]"
        />

        {experience.map((job) => (
          <div data-reveal key={job.company} className="relative pb-10">
            {/* Node */}
            <span className="absolute -left-[32px] top-2 flex h-3.5 w-3.5 items-center justify-center md:-left-[36px]">
              <span className="absolute h-3.5 w-3.5 rounded-full bg-accent-violet/30" />
              <span className="relative h-2 w-2 rounded-full bg-white shadow-glow-violet" />
            </span>

            <div className="ring-gradient rounded-3xl bg-ink-900 p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {job.role}
                  </p>
                  <p className="mt-1 break-words text-sm text-white/60">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:text-[11px] sm:tracking-[0.18em]">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-white/75"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Certifications */}
        <div data-reveal className="relative">
          <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-white/60 md:-left-[33px]" />
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="font-display text-lg font-semibold text-white">
              Certifications
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20"
                >
                  <p className="text-sm font-medium text-white">{c.title}</p>
                  <p className="mt-1 text-xs text-white/50">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
