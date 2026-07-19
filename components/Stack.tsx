const STACK = [
  { name: "Next.js", role: "Framework" },
  { name: "React", role: "UI Library" },
  { name: "Tailwind CSS", role: "Styling" },
  { name: "Node.js", role: "Runtime" },
  { name: "Express", role: "API Layer" },
  { name: "MongoDB", role: "Database" },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">
        <div className="font-mono text-xs tracking-widest text-mute uppercase">03 / Stack</div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper max-w-2xl mb-10">
            The core toolkit behind every build.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STACK.map((s) => (
              <div
                key={s.name}
                className="bg-panel border border-line rounded-xl p-6 hover:border-gold/50 transition-colors"
              >
                <p className="font-display text-lg font-semibold text-paper">{s.name}</p>
                <p className="font-mono text-[10px] tracking-widest text-mute uppercase mt-1">
                  {s.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
