const LINKS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#stack", label: "Stack" },
  { href: "#markets", label: "Markets" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold tracking-tight text-paper">
          Samuel<span className="text-gold">.</span>Olayinka
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-mute">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-mono text-xs tracking-widest uppercase border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-ink transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
