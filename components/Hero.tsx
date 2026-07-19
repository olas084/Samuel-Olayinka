import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 px-6 bg-grid overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,231,1,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-mute uppercase mb-6">
            <span className="text-signal">SAMUEL OLAYINKA</span>
            <span className="text-line">/</span>
            <span>FOUNDER &amp; CEO — BINTREST</span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-paper">
            Building the systems
            <br />
            markets run on<span className="text-gold">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-mute text-base sm:text-lg leading-relaxed">
            Full-stack engineer and fintech systems architect with over a decade
            of experience. I design and ship trading, prediction, and
            asset-management platforms end to end — across binary options,
            crypto, sports data, and financial markets.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="bg-gold text-ink font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="border border-line text-paper font-mono text-xs tracking-widest uppercase px-6 py-3.5 rounded-lg hover:border-gold hover:text-gold transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-md border-t border-line pt-6">
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-mute uppercase">
                Experience
              </dt>
              <dd className="font-display text-2xl font-semibold text-paper mt-1">10+ yrs</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-mute uppercase">
                Products Shipped
              </dt>
              <dd className="font-display text-2xl font-semibold text-paper mt-1">5+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] tracking-widest text-mute uppercase">
                Market Verticals
              </dt>
              <dd className="font-display text-2xl font-semibold text-paper mt-1">5+</dd>
            </div>
          </dl>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  );
}
