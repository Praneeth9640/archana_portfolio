import { useEffect, useRef } from "react";

/**
 * Soft gradient spotlight that follows the cursor.
 * Lightweight — uses requestAnimationFrame and CSS transform only.
 */
export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      const el = dotRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.current.x - 200}px, ${
          current.current.y - 200
        }px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-70 mix-blend-screen"
      style={{
        background:
          "radial-gradient(closest-side, rgba(124,92,255,0.18), rgba(34,211,238,0.05) 40%, transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  );
}
