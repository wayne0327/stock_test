const links = [
  { label: "分析面向", href: "#categories" },
  { label: "指標總覽", href: "#stats" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-white/[0.06] bg-[#04060a]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-400/10 font-mono text-xs font-semibold text-cyan-300">
              FA
            </span>
            <span className="font-serif text-base font-semibold text-slate-100">
              基本面選股
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            把財報數字拆解成可以理解的語言，幫助你用基本面建立屬於自己的投資判斷。
          </p>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-cyan-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-slate-500 uppercase">
            Disclaimer
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            內容僅供學習與參考，不構成任何投資建議，投資前請自行判斷風險。
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-6 py-6">
        <p className="mx-auto max-w-6xl font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} 基本面選股指南
        </p>
      </div>
    </footer>
  );
}
