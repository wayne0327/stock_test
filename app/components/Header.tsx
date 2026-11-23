import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#05080d]/70 backdrop-blur-xl">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-semibold text-cyan-300">
            FA
          </span>
          <span className="font-serif text-base font-semibold tracking-wide text-slate-100">
            基本面選股
          </span>
        </a>
        <div className="hidden items-center gap-6 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase sm:flex md:gap-10">
          <a href="#categories" className="transition hover:text-cyan-300">
            分析面向
          </a>
          <a href="#stats" className="transition hover:text-cyan-300">
            指標總覽
          </a>
          <a href="#footer" className="transition hover:text-cyan-300">
            關於
          </a>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
