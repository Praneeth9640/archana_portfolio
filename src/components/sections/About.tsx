import { Bug, Shield, Workflow, Zap } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: Bug,
    title: "I think like an attacker.",
    body: "Edge cases, broken auth flows, and silent regressions — I find what users would otherwise discover at 2 AM.",
  },
  {
    icon: Workflow,
    title: "Automation that compounds.",
    body: "Every Playwright suite I write pays dividends — fewer manual cycles, faster releases, sharper engineering teams.",
  },
  {
    icon: Shield,
    title: "Quality is a security feature.",
    body: "On cybersecurity products, a bug is a breach waiting to happen. I treat QA as the first line of defense.",
  },
  {
    icon: Zap,
    title: "Ship fast, with proof.",
    body: "Risk-based testing, contract validation, performance baselines — engineering velocity without sacrificing trust.",
  },
];

export default function About() {
  const ref = useGsapReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="container-px section-y mx-auto max-w-7xl"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About"
            title={
              <>
                I don&apos;t just{" "}
                <span className="text-gradient-violet">test software</span>.
                <br /> I make teams ship with confidence.
              </>
            }
          />

          <div data-reveal className="mt-7 space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
            <p>
              My obsession started simple: software shouldn&apos;t embarrass
              the people who built it. Four years in, I&apos;ve seen what
              fragile releases cost — lost trust, late nights, and customer
              support queues that never empty.
            </p>
            <p>
              So I learned the craft on both ends. Manual exploration to find
              the unexpected. Automation, contract testing, and performance
              harnesses to lock in what we already know. Add cybersecurity
              testing — XSLT, Rego, vulnerability flows — and you get a QA
              engineer who treats reliability and security as a single
              discipline.
            </p>
            <p>
              The teams I work best with believe quality isn&apos;t a stage
              gate. It&apos;s the product.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  data-reveal
                  key={p.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 ring-1 ring-white/10">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="mt-5 font-display text-lg font-semibold text-white">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {p.body}
                  </p>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-violet/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
