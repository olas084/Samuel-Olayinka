const PRODUCTS = [
  {
    symbol: "BNTR",
    name: "Bintrest",
    tag: "Brokerage Platform",
    tone: "gold",
    description:
      "A trading and brokerage platform I founded and lead as CEO. Bintrest gives traders a unified environment to execute across binary options and asset management with real-time market data and automated tooling.",
    role: "Founder & CEO",
  },
  {
    symbol: "VIXG",
    name: "VixGPT",
    tag: "AI Market Assistant",
    tone: "signal",
    description:
      "An AI-driven assistant built to interpret volatility and market signals across crypto and financial assets, helping traders reason through fast-moving conditions.",
    role: "Co-founder & CTO",
  },
  {
    symbol: "AIPP",
    name: "Aipolypredict",
    tag: "Prediction Engine",
    tone: "alert",
    description:
      "A prediction platform spanning sports and market outcomes, combining sports APIs with predictive modeling to surface data-backed forecasts.",
    role: "Founder & CTO",
  },
];

const toneMap: Record<string, { text: string; border: string }> = {
  gold: { text: "text-gold", border: "border-gold/40" },
  signal: { text: "text-signal", border: "border-signal/40" },
  alert: { text: "text-alert", border: "border-alert/40" },
};

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 border-t border-line bg-panel/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10 mb-12">
          <div className="font-mono text-xs tracking-widest text-mute uppercase">02 / Products</div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper max-w-2xl">
            Platforms I've founded and built, end to end.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => {
            const tone = toneMap[p.tone];
            return (
              <div
                key={p.symbol}
                className={`flex flex-col border ${tone.border} bg-ink rounded-2xl p-6`}
              >
                <div className="flex items-center justify-between font-mono text-xs tracking-widest">
                  <span className={tone.text}>{p.symbol}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-paper mt-3">
                  {p.name}
                </h3>
                <p className="font-mono text-[11px] tracking-widest text-mute uppercase mt-1">
                  {p.tag}
                </p>
                <p className="text-mute leading-relaxed text-sm mt-4 flex-1">{p.description}</p>
                <p className="font-mono text-[11px] tracking-widest text-paper uppercase mt-5">
                  Role — {p.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
