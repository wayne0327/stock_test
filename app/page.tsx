import Reveal from "./components/Reveal";
import HeroVisual from "./components/HeroVisual";

type Metric = {
  name: string;
  desc: string;
};

type Category = {
  index: string;
  title: string;
  intro: string;
  metrics: Metric[];
  span: "wide" | "narrow" | "full";
  accent: string;
};

const categories: Category[] = [
  {
    index: "01",
    title: "獲利能力",
    intro: "看公司賺不賺錢、賺錢的效率有多高，是所有分析的起點。",
    metrics: [
      { name: "EPS 每股盈餘", desc: "公司幫每一股賺了多少錢，是最基本的獲利指標。" },
      { name: "ROE 股東權益報酬率", desc: "用股東的錢創造了多少報酬，數字越高代表經營效率越好。" },
      { name: "ROA 資產報酬率", desc: "衡量公司運用全部資產創造獲利的能力。" },
      { name: "毛利率 / 淨利率", desc: "反映產品競爭力與成本控制能力。" },
    ],
    span: "wide",
    accent: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  },
  {
    index: "02",
    title: "估值指標",
    intro: "判斷目前股價是便宜還是昂貴。",
    metrics: [
      { name: "本益比 P/E", desc: "股價相對每股盈餘的倍數，越低通常代表相對便宜。" },
      { name: "股價淨值比 P/B", desc: "股價相對每股淨值的倍數，常用於評估金融股。" },
      { name: "PEG 本益成長比", desc: "結合本益比與盈餘成長率，衡量成長股是否合理。" },
    ],
    span: "narrow",
    accent: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  },
  {
    index: "03",
    title: "財務體質",
    intro: "確認公司體質穩健，不會輕易倒下。",
    metrics: [
      { name: "負債比率", desc: "總負債占總資產的比例，比率過高代表財務風險較大。" },
      { name: "流動比率", desc: "流動資產與流動負債的比值，評估短期償債能力。" },
      { name: "利息保障倍數", desc: "營業利益是利息費用的幾倍，數字越高償債壓力越小。" },
    ],
    span: "narrow",
    accent: "border-teal-400/30 bg-teal-400/10 text-teal-300",
  },
  {
    index: "04",
    title: "成長性",
    intro: "觀察公司業績是否持續向上發展。",
    metrics: [
      { name: "營收成長率", desc: "月、季、年營收的年增率，是觀察景氣最直接的指標。" },
      { name: "EPS 成長率", desc: "每股盈餘的年增率，反映獲利是否同步放大。" },
      { name: "CAGR 年複合成長率", desc: "衡量一段期間內營收或獲利的平均成長速度。" },
    ],
    span: "narrow",
    accent: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  },
  {
    index: "05",
    title: "現金流",
    intro: "獲利之外，更要確認公司真的有收到現金。",
    metrics: [
      { name: "營業活動現金流", desc: "本業經營實際產生的現金，是公司造血能力的核心指標。" },
      { name: "自由現金流", desc: "扣除資本支出後可自由運用的現金，決定配息與擴張的本錢。" },
      { name: "現金流量比率", desc: "營業現金流對流動負債的比例，評估真實償債能力。" },
    ],
    span: "narrow",
    accent: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
  },
  {
    index: "06",
    title: "股利政策",
    intro: "評估公司回饋股東的誠意與穩定性，長期存股族特別重視的一環。",
    metrics: [
      { name: "股息殖利率", desc: "每股股利占股價的比例，是存股族最在意的指標之一。" },
      { name: "配息率", desc: "股利占盈餘的比例，過高可能代表缺乏再投資機會。" },
      { name: "連續配息年數", desc: "觀察公司長期配息的穩定度與企業文化。" },
    ],
    span: "full",
    accent: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  },
];

const spanClass: Record<Category["span"], string> = {
  wide: "lg:col-span-4",
  narrow: "lg:col-span-2",
  full: "lg:col-span-6",
};

const snapshot = [
  { label: "EPS", value: "9.21", width: "72%" },
  { label: "ROE", value: "28.3%", width: "88%" },
  { label: "本益比", value: "18.2x", width: "55%" },
  { label: "毛利率", value: "54.1%", width: "64%" },
];

const stats = [
  { value: "06", label: "大分析構面" },
  { value: "20+", label: "常用財務指標" },
  { value: "00", label: "行情緒雜訊" },
];

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-12 lg:items-center lg:pt-28">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">
            Stock Fundamentals · 01
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.15] font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-[3.4rem]">
            從財報數字，
            <br />
            看懂企業真實體質。
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
            彙整六大基本面分析面向與常用指標，幫助你建立屬於自己的選股邏輯，而不是只看股價漲跌。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#categories"
              className="rounded-md bg-cyan-400 px-7 py-3 text-sm font-semibold text-[#05080d] transition hover:bg-cyan-300"
            >
              開始探索分析面向
            </a>
            <a
              href="#stats"
              className="text-sm font-medium text-slate-400 underline decoration-slate-700 underline-offset-4 transition hover:text-cyan-300 hover:decoration-cyan-400"
            >
              查看指標總覽 →
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual snapshot={snapshot} />
        </div>
      </section>

      {/* stats strip */}
      <section id="stats" className="border-y border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-2 sm:px-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="px-2 py-8 text-center sm:px-8 sm:py-10">
              <p className="font-serif text-3xl font-semibold text-cyan-300 sm:text-4xl md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] tracking-[0.1em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.15em]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* categories */}
      <section id="categories" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mb-14 max-w-xl">
          <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">
            Analysis Framework
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-slate-100 sm:text-4xl">
            六大基本面分析構面
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            每個構面對應一組財報指標，由淺入深建立判斷框架，而非單一數字決定投資決策。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={(i % 3) * 0.08}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05] sm:p-7 ${spanClass[cat.span]}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-xs ${cat.accent}`}
                >
                  {cat.index}
                </span>
                <h3 className="font-serif text-xl font-semibold text-slate-100">
                  {cat.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {cat.intro}
              </p>
              <ul
                className={`mt-6 space-y-4 border-t border-white/10 pt-5 ${
                  cat.span === "wide" || cat.span === "full"
                    ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 lg:space-y-0"
                    : ""
                }`}
              >
                {cat.metrics.map((m) => (
                  <li key={m.name}>
                    <p className="text-sm font-medium text-slate-200">
                      {m.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{m.desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
