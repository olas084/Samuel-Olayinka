export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">
        <div className="font-mono text-xs tracking-widest text-mute uppercase">01 / About</div>
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-6">
            A decade building the infrastructure behind trading decisions.
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            I'm Samuel Olayinka — a full-stack developer and founder who has spent
            over ten years designing and building trading, prediction, and
            automation platforms from the ground up. My work sits at the
            intersection of financial markets and software engineering: turning
            volatile, fast-moving data into products people can actually trade,
            predict, and manage assets on.
          </p>
          <p className="text-mute leading-relaxed">
            I built Bintrest, Aipolypredict , and co-founded VixGPT working
            across binary options, asset management,
            crypto, prediction markets, and sports APIs — using Next.js, React,
            Node.js, Express, MongoDB, and Tailwind CSS as my core stack.
          </p>
        </div>
      </div>
    </section>
  );
}
