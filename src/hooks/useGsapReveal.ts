import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Options = {
  selector?: string;
  y?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
};

/**
 * Reveal direct children (or matching selector) with a clean fade + translate
 * tied to ScrollTrigger. Designed for premium, restrained motion.
 */
export function useGsapReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);
  const {
    selector = "[data-reveal]",
    y = 24,
    stagger = 0.08,
    duration = 0.9,
    delay = 0,
    start = "top 80%",
    once = true,
  } = options;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>(selector);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y, filter: "blur(6px)" });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [selector, y, stagger, duration, delay, start, once]);

  return ref;
}
