import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from("[data-hero-eyebrow]", {
        y: 16,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          "[data-hero-line]",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          "[data-hero-sub]",
          {
            y: 24,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          "[data-hero-cta] > *",
          {
            y: 18,
            opacity: 0,
            stagger: 0.08,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          "[data-hero-stat]",
          {
            y: 18,
            opacity: 0,
            stagger: 0.06,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          "[data-hero-orb]",
          {
            scale: 0.6,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1.2"
        );

      // Floating orb idle motion
      gsap.to("[data-hero-orb]", {
        y: -14,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate flex min-h-[100svh] items-center pt-24"
    >
      {/* Hero Orb / decorative */}
      <div
        data-hero-orb
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[520px] w-[520px] rounded-full opacity-80 md:right-[-5%]"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(124,92,255,0.55), rgba(34,211,238,0.35), rgba(163,230,53,0.18), rgba(124,92,255,0.55))",
          filter: "blur(80px)",
        }}
      />

      <div className="container-px mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div
              data-hero-eyebrow
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/70 backdrop-blur-md sm:text-xs"
            >
              <Sparkles size={12} className="flex-shrink-0 text-accent-cyan" />
              <span className="truncate uppercase tracking-[0.2em]">
                Software Test Engineer · {personal.location}
              </span>
            </div>

            <h1 className="mt-6 font-display text-[15vw] font-semibold leading-[1.02] tracking-tight text-white sm:mt-7 sm:text-[12vw] md:text-[8vw] lg:text-[6.5vw]">
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-hero-line className="block pb-[0.04em]">
                  {personal.headline[0]}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <span
                  data-hero-line
                  className="block bg-gradient-to-r from-accent-violet via-accent-cyan to-white bg-clip-text pb-[0.04em] text-transparent"
                >
                  {personal.headline[1]}
                </span>
              </span>
            </h1>

            <p
              data-hero-sub
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65 sm:mt-7 sm:text-base md:text-lg"
            >
              {personal.subheadline}
            </p>

            <div
              data-hero-cta
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9"
            >
              <a href="#work" className="btn-primary group">
                View Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
              </a>
              <span className="hidden text-xs text-white/40 sm:inline">
                — usually responds in 24h
              </span>
            </div>

            {/* Inline stats */}
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/5 pt-7 sm:gap-6 sm:pt-8 md:mt-14">
              {[
                { v: "4+", l: "Years in QA" },
                { v: "60%", l: "Faster regressions" },
                { v: "100+", l: "APIs validated" },
              ].map((s) => (
                <div data-hero-stat key={s.l}>
                  <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {s.v}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/40 sm:text-xs sm:tracking-[0.18em]">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative right card */}
          <div className="lg:col-span-4">
            <div className="ring-gradient relative overflow-hidden rounded-3xl bg-ink-900/60 p-5 backdrop-blur-xl sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-xs text-white/50">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently shipping
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  v4.2026
                </span>
              </div>

              <div className="mt-6 overflow-hidden font-mono text-[11px] leading-relaxed text-white/60">
                <p className="text-white/40">// regression.spec.ts</p>
                <p className="break-words">
                  <span className="text-accent-cyan">test</span>(
                  <span className="text-emerald-300">
                    &apos;critical user journey&apos;
                  </span>
                  , async () =&gt; {"{"}
                </p>
                <p className="break-words pl-4">
                  await page.<span className="text-white/90">goto</span>(
                  <span className="text-emerald-300">&apos;/checkout&apos;</span>);
                </p>
                <p className="break-words pl-4">
                  await expect(page).
                  <span className="text-white/90">toHaveURL</span>(/success/);
                </p>
                <p>{"}"});</p>
                <p className="mt-3 text-emerald-300">
                  ✓ 142 tests passed in 38s
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Playwright", "Postman", "JMeter", "Jira"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
