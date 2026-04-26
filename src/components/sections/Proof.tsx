import { metrics, trustedBy } from "@/data/portfolio";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import Marquee from "@/components/ui/Marquee";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Proof() {
  const ref = useGsapReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="container-px section-y mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Proof of impact"
        title={
          <>
            Numbers don&apos;t <span className="text-gradient-violet">lie</span>.
          </>
        }
        description="What changes when I join a team — measurable, repeatable, and shipped."
      />

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div
            data-reveal
            key={m.label}
            className="group relative bg-ink-900/60 p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:p-7"
          >
            <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {m.value}
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">
              {m.label}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/45">
              {m.detail}
            </p>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-violet/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <div data-reveal className="mt-16">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-white/40">
          Tools, platforms & products I&apos;ve hardened
        </p>
        <div className="mt-6">
          <Marquee items={trustedBy} />
        </div>
      </div>
    </section>
  );
}
