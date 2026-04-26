export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,0.25),transparent)] blur-3xl" />
      <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent)] blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.10),transparent)] blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.4] mix-blend-overlay" />
    </div>
  );
}
