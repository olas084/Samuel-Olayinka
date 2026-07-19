const MARKETS = [
  { code: "OPT", name: "Binary Options", note: "Execution, brokerage & risk tooling" },
  { code: "AST", name: "Asset Management", note: "Portfolio & allocation systems" },
  { code: "CRY", name: "Crypto", note: "On-chain & exchange integrations" },
  { code: "PRD", name: "Predictions", note: "Forecasting & prediction markets" },
  { code: "SPT", name: "Sports API", note: "Live sports data & odds pipelines" },
];

export default function Markets() {
  return (
    <section id="markets" className="py-24 px-6 border-t border-line bg-panel/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">
        <div className="font-mono text-xs tracking-widest text-mute uppercase">04 / Markets</div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper max-w-2xl mb-10">
            Verticals I build for.
          </h2>
          <div className="border-t border-line">
            {MARKETS.map((m) => (
              <div
                key={m.code}
                className="flex items-center justify-between gap-6 py-5 border-b border-line group"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-gold w-10 shrink-0">{m.code}</span>
                  <span className="font-display text-lg text-paper group-hover:text-gold transition-colors">
                    {m.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-mute text-right hidden sm:block">
                  {m.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
