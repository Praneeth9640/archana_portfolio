import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";

const accentMap: Record<Project["accent"], string> = {
  violet: "from-accent-violet/30 via-accent-violet/10 to-transparent",
  cyan: "from-accent-cyan/30 via-accent-cyan/10 to-transparent",
  lime: "from-accent-lime/30 via-accent-lime/10 to-transparent",
};

const dotMap: Record<Project["accent"], string> = {
  violet: "bg-accent-violet",
  cyan: "bg-accent-cyan",
  lime: "bg-accent-lime",
};

export default function Projects() {
  const ref = useGsapReveal<HTMLDivElement>({ stagger: 0.12, y: 40 });

  return (
    <section
      id="work"
      ref={ref}
      className="container-px section-y mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Real systems.{" "}
            <span className="text-gradient-violet">Real consequences.</span>
          </>
        }
        description="Each project below ships to real users where a missed bug means data loss, security exposure, or revenue impact. Here's how I made sure that didn't happen."
      />

      <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
        {projects.map((p, i) => (
          <article data-reveal key={p.slug}>
            <SpotlightCard>
              <div className="grid grid-cols-1 gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-12 md:p-10">
                {/* Left: meta + visual */}
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`inline-flex h-2 w-2 flex-shrink-0 rounded-full ${dotMap[p.accent]}`}
                      />
                      <span className="truncate uppercase tracking-[0.22em] text-white/50">
                        {p.category}
                      </span>
                    </div>
                    <span className="flex-shrink-0 font-mono text-[10px] text-white/30 sm:text-xs">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {projects.length.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                    {p.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    {p.year}
                  </p>

                  {/* Visual: real screenshot if provided, otherwise mock test-runner */}
                  <div
                    className={`group/visual mt-7 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accentMap[p.accent]} relative`}
                  >
                    {p.image ? (
                      <a
                        href={p.href ?? "#"}
                        target={p.href ? "_blank" : undefined}
                        rel={p.href ? "noreferrer noopener" : undefined}
                        className="absolute inset-0 block"
                        aria-label={`Open ${p.name}`}
                      >
                        <img
                          src={p.image}
                          alt={`${p.name} product screenshot`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover/visual:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/15 bg-ink-900/90 px-3 py-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                            {p.name} · live product
                          </span>
                          <ArrowUpRight
                            size={14}
                            className="text-white/70 transition-transform duration-300 group-hover/visual:-translate-y-0.5 group-hover/visual:translate-x-0.5"
                          />
                        </div>
                      </a>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-noise opacity-[0.4] mix-blend-overlay" />
                        <div className="absolute inset-0 grid-overlay opacity-50" />
                        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-ink-900/90 p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                            </div>
                            <span className="font-mono text-[10px] text-white/50">
                              {p.slug}.spec.ts
                            </span>
                          </div>
                          <div className="mt-2 space-y-1 font-mono text-[10px] text-white/60">
                            <p>
                              <span className="text-emerald-300">PASS</span> ·
                              142 tests · 38s
                            </p>
                            <p className="text-white/40">
                              coverage: 92% · flake-rate: 0.4%
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full ${dotMap[p.accent]} opacity-30 blur-3xl`}
                    />
                  </div>
                </div>

                {/* Right: P/S/I + stack */}
                <div className="md:col-span-7 lg:col-span-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        Problem
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-white/75 md:text-lg">
                        {p.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        Solution
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-white/75 md:text-lg">
                        {p.solution}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        Impact
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {p.impact.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-white/80 md:text-[15px]"
                          >
                            <CheckCircle2
                              size={16}
                              className={`mt-0.5 flex-shrink-0 text-accent-cyan`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-accent-cyan"
                      >
                        {p.hrefLabel ?? "Read case study"}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </article>
        ))}
      </div>
    </section>
  );
}
