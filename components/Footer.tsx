export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-widest text-mute uppercase">
        <span>© {new Date().getFullYear()} Samuel Olayinka</span>
        <span>Founder &amp; CEO — Bintrest</span>
      </div>
    </footer>
  );
}
