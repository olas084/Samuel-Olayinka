export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">
        <div className="font-mono text-xs tracking-widest text-mute uppercase">05 / Contact</div>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-6">
            Let's build something the market notices.
          </h2>
          <p className="text-mute leading-relaxed mb-10">
            Open to product builds, technical partnerships, and opportunities
            across trading, prediction, and fintech systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hollax084@gmail.com"
              className="flex-1 bg-panel border border-line rounded-xl px-6 py-5 hover:border-gold transition-colors"
            >
              <p className="font-mono text-[10px] tracking-widest text-mute uppercase mb-1">
                Email
              </p>
              <p className="font-display text-lg text-paper">hollax084@gmail.com</p>
            </a>
            <a
              href="tel:+2349036410768"
              className="flex-1 bg-panel border border-line rounded-xl px-6 py-5 hover:border-gold transition-colors"
            >
              <p className="font-mono text-[10px] tracking-widest text-mute uppercase mb-1">
                Phone
              </p>
              <p className="font-display text-lg text-paper">+234 903 641 0768</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
