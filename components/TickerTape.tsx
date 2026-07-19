const ITEMS = [
  { label: "NEXT.JS", tone: "signal" },
  { label: "REACT", tone: "signal" },
  { label: "NODE.JS", tone: "signal" },
  { label: "MONGODB", tone: "signal" },
  { label: "EXPRESS", tone: "signal" },
  { label: "TAILWIND", tone: "signal" },
  { label: "BINARY OPTIONS", tone: "gold" },
  { label: "ASSET MANAGEMENT", tone: "gold" },
  { label: "CRYPTO", tone: "gold" },
  { label: "PREDICTIONS", tone: "gold" },
  { label: "SPORTS API", tone: "gold" },
  { label: "BINTREST", tone: "alert" },
  { label: "VIXGPT", tone: "alert" },
  { label: "AIPOLYPREDICT", tone: "alert" },
];

const toneClass: Record<string, string> = {
  signal: "text-signal",
  gold: "text-gold",
  alert: "text-alert",
};

export default function TickerTape() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-line bg-panel/60 overflow-hidden select-none">
      <div className="flex w-max animate-ticker">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {track.map((item, i) => (
              <div
                key={`${copy}-${i}`}
                className="flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest whitespace-nowrap"
              >
                <span className={toneClass[item.tone]}>●</span>
                <span className="text-mute">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
