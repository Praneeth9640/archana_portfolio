import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (window.scrollY > 16) close();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* ── Main bar ── */}
      <nav className="container-px mx-auto flex h-14 items-center justify-between sm:h-16 max-w-7xl">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-1.5 text-sm font-semibold tracking-tight sm:gap-2"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan text-[10px] font-bold text-black sm:h-8 sm:w-8 sm:text-[11px]">
            AN
          </span>
          <span className="text-white/90 text-xs sm:text-sm">
            {personal.name}
          </span>
          <span className="hidden text-white/40 xs:inline sm:inline">·</span>
          <span className="hidden text-white/50 text-xs xs:inline sm:inline sm:text-sm">
            QA Engineer
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white xl:px-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to roles
          </span>
          <a href="#contact" className="btn-primary !px-5 !py-2 !text-xs">
            Hire me
          </a>
        </div>

        {/* Mobile / Tablet hamburger */}
        <button
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile / Tablet drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-30 bg-black/60 backdrop-blur-sm sm:top-16 lg:hidden"
              onClick={close}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-40 border-t border-white/5 bg-ink-950/95 backdrop-blur-2xl lg:hidden"
            >
              <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-3 sm:py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    className="flex items-center rounded-lg px-3 py-3 text-[15px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white sm:py-3.5 sm:text-base"
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Divider */}
                <div className="my-2 h-px bg-white/5" />

                {/* Status badge */}
                <div className="flex items-center gap-2 px-3 py-2 text-xs text-white/60 sm:text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to roles
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={close}
                  className="btn-primary mt-1 w-full text-center"
                >
                  Hire me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
