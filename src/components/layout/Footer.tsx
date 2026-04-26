import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 sm:mt-32">
      <div className="container-px mx-auto max-w-7xl py-10 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-white">
              {personal.name}
            </p>
            <p className="mt-1 text-sm text-white/50">
              {personal.role} · {personal.location}
            </p>
          </div>

          <div className="flex w-full max-w-full flex-wrap gap-2.5 sm:w-auto sm:gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="glass glass-hover inline-flex max-w-full items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white/80 sm:px-4 sm:text-sm"
            >
              <Mail size={14} className="flex-shrink-0" />
              <span className="truncate">{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white/80 sm:px-4 sm:text-sm"
            >
              <Phone size={14} className="flex-shrink-0" />
              <span>{personal.phone}</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white/80 sm:px-4 sm:text-sm"
            >
              <Linkedin size={14} className="flex-shrink-0" />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} className="opacity-60" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {personal.name}. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
