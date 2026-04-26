import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Linkedin, MapPin, Send } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function Contact() {
  const ref = useGsapReveal<HTMLDivElement>();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `[Portfolio] ${(data.get("name") as string) || "New opportunity"}`
    );
    const body = encodeURIComponent(
      `${data.get("message") as string}\n\n— ${data.get("name")} (${data.get(
        "email"
      )})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="container-px section-y mx-auto max-w-7xl"
    >
      <div className="ring-gradient relative overflow-hidden rounded-[28px] bg-ink-900/60 p-5 backdrop-blur-xl sm:rounded-[36px] sm:p-8 md:p-14">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[140%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,0.18),transparent)] blur-3xl" />

        <div className="relative grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </p>

            <h2
              data-reveal
              className="mt-6 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Let&apos;s ship something{" "}
              <span className="text-gradient-violet">unbreakable</span>.
            </h2>

            <p
              data-reveal
              className="mt-5 max-w-md text-base leading-relaxed text-white/65"
            >
              Hiring for QA, automation, or platform reliability? I&apos;d love
              to hear about the bugs you can&apos;t afford to ship.
            </p>

            <div data-reveal className="mt-8 space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/30">
                  <Mail size={14} />
                </span>
                <span className="min-w-0 break-all">{personal.email}</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:border-white/30">
                  <Linkedin size={14} />
                </span>
                <span className="min-w-0">LinkedIn</span>
              </a>
              <div className="group flex items-center gap-3 text-sm text-white/60">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <MapPin size={14} />
                </span>
                <span className="min-w-0">
                  {personal.location} · open to remote
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <form
              data-reveal
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md sm:p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Your name" placeholder="Jane Doe" />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>
              <Field
                name="company"
                label="Company"
                placeholder="Where you build"
              />
              <div>
                <label className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you trying to ship — and what's getting in the way?"
                  className="mt-2 block w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-violet/60 focus:outline-none focus:ring-2 focus:ring-accent-violet/30"
                />
              </div>

              <button
                type="submit"
                className="btn-primary group w-full sm:w-auto"
              >
                {status === "sent" ? (
                  <>
                    Opening your mail client <Send size={14} />
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              <p className="break-all text-[11px] text-white/40">
                Or write directly —{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="text-white/70 underline-offset-2 hover:underline"
                >
                  {personal.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.22em] text-white/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={name !== "company"}
        placeholder={placeholder}
        autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
        className="mt-2 block w-full min-w-0 rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent-violet/60 focus:outline-none focus:ring-2 focus:ring-accent-violet/30"
      />
    </div>
  );
}
