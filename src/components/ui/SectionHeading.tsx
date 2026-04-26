type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p
        data-reveal
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60"
      >
        <span className="h-1 w-1 rounded-full bg-accent-cyan" />
        {eyebrow}
      </p>
      <h2
        data-reveal
        className="mt-5 font-display text-4xl font-semibold tracking-tight text-gradient md:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {description}
        </p>
      )}
    </div>
  );
}
