import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${pct / 100})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return createPortal(
    <div
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10000 }}
      className="h-[2px] bg-white/5"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-lime"
        style={{ transform: "scaleX(0)" }}
      />
    </div>,
    document.body
  );
}
