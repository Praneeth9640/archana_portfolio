type Props = {
  items: string[];
  speed?: "slow" | "normal" | "fast";
};

export default function Marquee({ items, speed = "normal" }: Props) {
  const duration =
    speed === "slow" ? "60s" : speed === "fast" ? "20s" : "35s";

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      <div
        className="marquee-track flex w-max gap-12"
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="font-display text-2xl font-medium uppercase tracking-tight text-white/30 transition-colors hover:text-white/80 md:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
