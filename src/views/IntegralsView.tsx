import React, { useState, useMemo } from "react";
import {
  Calculator,
  Search,
  X,
  Printer,
  Sparkles,
  TrendingUp,
  Waves,
  Activity,
  Divide,
  Layers,
  HelpCircle,
  Lightbulb,
} from "lucide-react";
import {
  integralCategories,
  integralFormulas,
  type IntegralCategory,
  type IntegralItem,
} from "../content/integrals";
import { MB, T, fa } from "../components/Math";
import { CopyButton } from "../components/Blocks";
const r = String.raw;

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calculator,
  TrendingUp,
  Waves,
  Activity,
  Divide,
  Layers,
};

export const IntegralsView = React.memo(function IntegralsView({
  selectedCategory: propCategory = "all",
  onCategoryChange,
}: {
  selectedCategory?: string;
  onCategoryChange?: (cat: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>(propCategory);
  const [query, setQuery] = useState("");
  const [showExplanation, setShowExplanation] = useState(true);

  // Keep in sync with prop changes (e.g. from sidebar)
  React.useEffect(() => {
    if (propCategory) {
      setSelectedCategory(propCategory);
    }
  }, [propCategory]);

  // Filter formulas
  const filteredFormulas = useMemo(() => {
    let list = integralFormulas;
    if (selectedCategory !== "all") {
      list = list.filter((it) => it.category === selectedCategory);
    }
    const q = query.trim().toLowerCase();
    if (!q) return list;

    return list.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.math.toLowerCase().includes(q) ||
        (it.note && it.note.toLowerCase().includes(q))
    );
  }, [selectedCategory, query]);
  return (
    <div className="mx-auto max-w-[1050px] px-3 pb-28 pt-4 md:px-6 md:pt-8 w-full min-w-0 max-w-full">
      {/* 1. Header Command Hub */}
      <header className="fade-up mb-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-line bg-gradient-to-bl from-teal-500/[0.1] via-card to-amber-500/[0.07] p-5 sm:p-7 md:p-8 shadow-xs">
          {/* Background decorative watermark */}
          <div
            className="pointer-events-none absolute -bottom-8 -start-6 select-none text-[140px] font-black text-accent/[0.07] dark:text-accent/[0.05]"
            aria-hidden="true"
          >
            ∫
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1 text-xs font-black text-teal-800 dark:text-teal-200 shadow-2xs">
              <Calculator size={14} />
              <span>جعبه‌ابزار و جدول انتگرال‌های کاربردی</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="no-print inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-line-soft bg-card px-3 py-1.5 text-xs font-bold text-soft hover:text-ink hover:border-accent active:scale-95 transition-all shadow-2xs"
                title="توضیح مفهوم انتگرال و کاربردها"
              >
                <HelpCircle size={14} />
                <span>{showExplanation ? "بستن راهنما" : "انتگرال چیست؟"}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="no-print inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-1.5 text-xs font-black text-ink shadow-2xs transition-all hover:bg-card2 hover:border-accent active:scale-95"
                title="چاپ یا ذخیره نسخه چاپی جدول انتگرال‌ها"
              >
                <Printer size={15} />
                نسخه چاپی / PDF
              </button>
            </div>
          </div>

          <h1 className="relative text-2xl sm:text-3xl font-black text-ink tracking-tight">
            مرجع کامل و دسته‌بندی‌شدهٔ انتگرال‌ها
          </h1>
          <p className="relative mt-2 max-w-2xl text-[14px] sm:text-[14.5px] leading-7 font-medium text-soft">
            تمام روابط و فرمول‌های پرکاربرد انتگرال‌گیری که برای حل معادلات دیفرانسیل، روش تغییر پارامترها، مسیرهای قائم و تبدیل لاپلاس به آنها نیاز دارید.
          </p>

          {/* Search bar inside header */}
          <div className="relative mt-5 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <div className="flex items-center gap-2.5 rounded-xl border-2 border-line bg-card px-3.5 py-2 shadow-2xs focus-within:border-accent focus-within:shadow-xs transition-all">
                <Search size={16} className="shrink-0 text-faint" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="جستجو در انتگرال‌ها (مثلاً: توان، tan، نمایی، کسر)..."
                  className="w-full bg-transparent text-xs font-bold text-ink outline-none placeholder:text-faint"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="cursor-pointer text-faint hover:text-ink"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>
            <span className="rounded-xl border border-accent/40 bg-accent/15 px-3 py-1.5 text-xs font-black text-ink shadow-2xs">
              {fa(filteredFormulas.length)} فرمول در دسترس
            </span>
          </div>
        </div>
      </header>

      {/* 2. Educational Explainer: What is an Integral & Role in ODEs */}
      {showExplanation && (
        <div className="fade-up mb-8 rounded-3xl border-2 border-line bg-card p-5 sm:p-7 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-line bg-amber-400/20 text-amber-600 dark:text-amber-400 shadow-2xs">
              <Lightbulb size={17} />
            </span>
            <h2 className="text-base sm:text-lg font-black text-ink">
              انتگرال چیست و چرا در معادلات دیفرانسیل نقشی حیاتی دارد؟
            </h2>
          </div>

          <div className="space-y-3 text-[13.5px] leading-7 text-soft font-medium">
            <p>
              انتگرال در اصل <strong className="text-ink font-black">عمل معکوس مشتق‌گیری (پادمشتق)</strong> و محاسبهٔ پیوستهٔ انباشت مقادیر است. از آن‌جا که هر معادلهٔ دیفرانسیل رابطه‌ای بین یک تابع ناشناخته و مشتقات آن را بیان می‌کند، تنها راه رهایی از دست مشتق‌ها و رسیدن به خودِ تابع اصلی، <strong className="text-ink font-black">انتگرال‌گیری</strong> است.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border border-line-soft bg-card2/40 p-3.5">
                <p className="text-xs font-black text-ink mb-1 flex items-center gap-1.5">
                  <span className="text-teal-600">۱.</span>
                  <span>روش تغییر پارامترها (لاگرانژ):</span>
                </p>
                <p className="text-[12px] text-faint leading-6">
                  برای یافتن جواب خصوصی معادله غیرهمگن، باید انتگرال‌های پارامترها را محاسبه کنید:
                </p>
                <div className="overflow-x-auto py-1 text-center scrollbar-thin">
                  <MB tex={r`v_1 = \int \frac{-R(x)y_2}{W} dx, \quad v_2 = \int \frac{R(x)y_1}{W} dx`} />
                </div>
              </div>

              <div className="rounded-xl border border-line-soft bg-card2/40 p-3.5">
                <p className="text-xs font-black text-ink mb-1 flex items-center gap-1.5">
                  <span className="text-amber-600">۲.</span>
                  <span>تبدیل لاپلاس و تابع گاما:</span>
                </p>
                <p className="text-[12px] text-faint leading-6">
                  تعریف بنیادین تبدیل لاپلاس و تابع گاما ذاتاً یک انتگرال ناسره در بازهٔ صفر تا بی‌نهایت است:
                </p>
                <div className="overflow-x-auto py-1 text-center scrollbar-thin">
                  <MB tex={r`\mathcal{L}\{f(t)\} = \int_0^\infty e^{-st} f(t) dt, \quad \Gamma(p) = \int_0^\infty t^{p-1}e^{-t} dt`} />
                </div>
              </div>

              <div className="rounded-xl border border-line-soft bg-card2/40 p-3.5">
                <p className="text-xs font-black text-ink mb-1 flex items-center gap-1.5">
                  <span className="text-sky-600">۳.</span>
                  <span>مسیرهای قائم و معادلات جداپذیر:</span>
                </p>
                <p className="text-[12px] text-faint leading-6">
                  <T text="پس از تفکیک متغیرها یا اعمال شرط تعامد $y' \to -1/y'$، با انتگرال‌گیری مستقیم از طرفین معادله جواب نهایی منحنی حاصل می‌شود." />
                </p>
              </div>

              <div className="rounded-xl border border-line-soft bg-card2/40 p-3.5">
                <p className="text-xs font-black text-ink mb-1 flex items-center gap-1.5">
                  <span className="text-violet-600">۴.</span>
                  <span>تکنیک جزء به جزء (قاعده DI):</span>
                </p>
                <p className="text-[12px] text-faint leading-6">
                  حاصل‌ضرب چندجمله‌ای‌ها در توابع نمایی و مثلثاتی در محاسبهٔ رونسکین و لاپلاس به کمک روش جدولی مشتق-انتگرال حل می‌شود.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Category Filter Rail */}
      <nav
        aria-label="فیلتر دسته‌بندی انتگرال‌ها"
        className="no-print sticky top-16 z-30 mb-8 rounded-2xl border-2 border-line bg-card/95 p-1.5 shadow-xs backdrop-blur-md"
      >
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-thin">
          <button
            onClick={() => {
              setSelectedCategory("all");
              onCategoryChange?.("all");
            }}
            className={`shrink-0 cursor-pointer rounded-xl border-2 px-3 py-1.5 text-xs font-black transition-all ${
              selectedCategory === "all"
                ? "border-line bg-accent text-white shadow-xs dark:text-[#08130f]"
                : "border-transparent bg-transparent text-soft hover:bg-card2 hover:text-ink"
            }`}
          >
            همه فرمول‌ها ({fa(integralFormulas.length)})
          </button>

          {integralCategories.map((cat) => {
            const active = selectedCategory === cat.id;
            const Icon = ICONS[cat.icon] ?? Sparkles;
            const count = integralFormulas.filter((f) => f.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  onCategoryChange?.(cat.id);
                }}
                className={`shrink-0 cursor-pointer rounded-xl border-2 px-3 py-1.5 text-xs font-black transition-all flex items-center gap-1.5 ${
                  active
                    ? "border-line bg-accent text-white shadow-xs dark:text-[#08130f]"
                    : "border-transparent bg-transparent text-soft hover:bg-card2 hover:text-ink"
                }`}
              >
                <Icon size={13} />
                <span>{cat.short}</span>
                <span className="text-[10px] opacity-75">({fa(count)})</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 4. Formulas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full min-w-0 max-w-full">
        {filteredFormulas.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl border-2 border-line-soft bg-card p-4 shadow-2xs hover:border-accent hover:shadow-xs transition-all flex flex-col justify-between w-full min-w-0 max-w-full ${
              item.wide ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2 w-full min-w-0">
              <h3 className="text-[13px] font-black text-ink">
                <T text={item.title} />
              </h3>
              <CopyButton text={item.math} iconOnly reveal />
            </div>

            <div className="overflow-x-auto py-2 scrollbar-thin w-full min-w-0 max-w-full">
              <MB tex={item.math} />
            </div>

            {item.note && (
              <p className="mt-2 border-t border-line-soft pt-1.5 text-[11px] font-medium leading-5 text-faint">
                <T text={item.note} />
              </p>
            )}
          </div>
        ))}

        {filteredFormulas.length === 0 && (
          <div className="sm:col-span-2 rounded-2xl border-2 border-line bg-card p-12 text-center text-sm font-bold text-faint">
            فرمول انتگرالی مطابق با «{query}» پیدا نشد.
          </div>
        )}
      </div>
    </div>
  );
});
