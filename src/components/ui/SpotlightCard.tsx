import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * A card that paints a soft cursor-tracking spotlight when hovered.
 * Pure CSS variables + pointer events — no re-renders.
 */
export default function SpotlightCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-px transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(450px circle at var(--mx) var(--my), rgba(124,92,255,0.18), transparent 40%)",
        }}
      />
      <div className="relative rounded-[calc(theme(borderRadius.3xl)-1px)] bg-ink-900">
        {children}
      </div>
    </div>
  );
}
