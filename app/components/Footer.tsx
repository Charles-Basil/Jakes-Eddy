export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="num text-xs text-muted tracking-[0.1em]">
          © {new Date().getFullYear()} JAKES EDDY
        </span>
        <div className="flex items-center gap-3">
          <span className="eyebrow !text-[#8a887e]">THINK</span>
          <span className="text-[#c9c5b8] text-xs">→</span>
          <span className="eyebrow !text-[#8a887e]">BUILD</span>
          <span className="text-[#c9c5b8] text-xs">→</span>
          <span className="eyebrow !text-[#8a887e]">COMMUNICATE</span>
        </div>
      </div>
    </footer>
  );
}