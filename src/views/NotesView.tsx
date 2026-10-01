import React, { useEffect, useRef } from "react";
import { CheckCircle2, Circle, CalendarDays, FileText, ArrowDown, Heart, BookOpenCheck } from "lucide-react";
import { chapters, sectionsByChapter, chapters as allChapters } from "../content";
import type { Section } from "../types";
import { BlockRenderer } from "../components/Blocks";
import { T, fa } from "../components/Math";
import { AcknowledgementsSection } from "../components/AcknowledgementsSection";

const hueChip: Record<string, string> = {
  teal: "bg-teal-500/12 text-teal-700 dark:text-teal-300",
  amber: "bg-amber-500/12 text-amber-700 dark:text-amber-300",
  sky: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
  violet: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
};
const hueRing: Record<string, string> = {
  teal: "border-teal-500/40",
  amber: "border-amber-500/40",
  sky: "border-sky-500/40",
  violet: "border-violet-500/40",
};
const hueDot: Record<string, string> = {
  teal: "bg-teal-500",
  amber: "bg-amber-500",
  sky: "bg-sky-500",
  violet: "bg-violet-500",
};
const hueText: Record<string, string> = {
  teal: "text-teal-700 dark:text-teal-300",
  amber: "text-amber-700 dark:text-amber-300",
  sky: "text-sky-700 dark:text-sky-300",
  violet: "text-violet-700 dark:text-violet-300",
};

/* ---------------- hero ---------------- */

const Hero = React.memo(function Hero({ onJump }: { onJump: (id: string) => void }) {
  return (
    <div className="relative mb-8 sm:mb-12 overflow-hidden rounded-3xl border-2 border-line bg-gradient-to-bl from-teal-500/[0.1] via-card to-amber-500/[0.06] p-4.5 sm:p-7 md:p-10 shadow-md dark:shadow-md">
      {/* Ambient top highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden>
        <div className="floaty absolute -top-4 start-[5%] text-[110px] font-black text-teal-500/10 dark:text-teal-300/10">
          <span style={{ fontFamily: "KaTeX_Main, serif" }}>∫</span>
        </div>
        <div
          className="floaty absolute bottom-2 end-[6%] text-[130px] font-black text-amber-500/10 dark:text-amber-300/10"
          style={{ animationDelay: "-2.5s" }}
        >
          <span style={{ fontFamily: "KaTeX_Main, serif" }}>Σ</span>
        </div>
        <div
          className="floaty absolute bottom-[18%] start-[12%] hidden text-4xl text-faint/20 md:block"
          style={{ animationDelay: "-1.5s" }}
        >
          <span style={{ fontFamily: "KaTeX_Main, serif" }}>𝓛{"{f(t)}"}</span>
        </div>
      </div>

      <div className="relative">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3.5 py-1 text-[11.5px] font-black text-teal-800 dark:text-teal-200 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>بازنویسی تمیز و خط‌به‌خط جزوهٔ کلاسی • گام‌به‌گام برای شب امتحان</span>
        </div>
        <h1 className="max-w-2xl text-2xl font-black leading-[1.35] text-ink sm:text-3xl md:text-[2.6rem]">
          جزوه جامع معادلات دیفرانسیل
          <span className="mt-2 block bg-gradient-to-l from-teal-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-teal-300 dark:to-emerald-300">
            انتگرال هم داریم — تایپ ریاضی دقیق و مرحله‌به‌مرحله
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-[14.5px] sm:text-[15px] leading-8 text-soft font-medium">
          اینجا تمام مباحث مهم دیفرانسیل و انتگرال رو دسته‌بندی‌شده و مرتب پیدا می‌کنی: از معادله مشخصه و رونسکین تا روش لاگرانژ، اویلر، دستگاه معادلات و تبدیل لاپلاس، انتگرال های عادی تا  مثلثاتی، هاپیربولیک و جز به جز  همراه با حل تشریحی مثال و تمرین امتحانی.
        </p>
        {/* Interactive jump pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onJump(sections[0].id)}
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl border-2 border-line bg-accent px-4 py-2 text-xs font-black text-white shadow-xs transition-all duration-200 hover:shadow-sm hover:translate-y-[-1px] active:translate-y-[1px] active:scale-[0.98] dark:text-[#08130f]"
          >
            <ArrowDown size={14} />
            بزن بریم برای شروع مطالعه
          </button>
          {allChapters.map((c) => (
            <button
              key={c.id}
              onClick={() => onJump(`chapter-${c.id}`)}
              className={`cursor-pointer rounded-xl border-2 border-line px-3.5 py-1.5 text-xs font-black shadow-2xs transition-all duration-200 hover:shadow-xs hover:translate-y-[-1px] active:translate-y-[1px] active:scale-[0.98] bg-card inline-flex items-center gap-1.5 ${hueText[c.hue]}`}
            >
              <span className={`h-2 w-2 rounded-full ${hueDot[c.hue]}`} />
              <span>فصل {fa(c.num)}: {c.short}</span>
            </button>
          ))}
        </div>

        {/* Neobrutalist tactile stats cards (Image #2 upgraded) */}
        <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
          {[
            { v: fa(25), l: "صفحه جزوه کامل", tag: "پوشش خط‌به‌خط", tagColor: "bg-teal-500/15 text-teal-800 dark:text-teal-200" },
            { v: fa(34), l: "مسئله و مثال حل‌شده", tag: "گام‌به‌گام", tagColor: "bg-amber-500/15 text-amber-800 dark:text-amber-200" },
            { v: fa(allChapters.length), l: "فصل درسی جامع", tag: "صفر تا صد مباحث", tagColor: "bg-sky-500/15 text-sky-800 dark:text-sky-200" },
          ].map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 border-line bg-card p-3 sm:p-4 text-center shadow-xs transition-all duration-200 hover:shadow-md hover:translate-y-[-2px] ${
                i === 0
                  ? "border-t-4 border-t-teal-500 hover:shadow-teal-500/10"
                  : i === 1
                  ? "border-t-4 border-t-amber-500 hover:shadow-amber-500/10"
                  : "border-t-4 border-t-sky-500 hover:shadow-sky-500/10"
              }`}
            >
              <span className={`rounded-md border border-line/50 px-2 py-0.5 text-[9.5px] font-black ${s.tagColor}`}>
                {s.tag}
              </span>
              <p className="mt-1.5 text-2xl md:text-3xl font-black text-ink tracking-tight">{s.v}</p>
              <p className="mt-1 text-[11.5px] font-extrabold text-soft">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Acknowledgments Card (آیناز & معین) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border-2 border-line bg-gradient-to-l from-amber-500/[0.08] via-card to-teal-500/[0.08] p-4 sm:p-5 shadow-xs transition-all duration-200 hover:shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-amber-400/20 text-amber-500 shadow-2xs">
              <Heart size={20} className="fill-amber-400 text-amber-500" />
            </span>
            <div>
              <p className="text-xs font-black text-ink">قدردانی و تشکر ویژه</p>
              <p className="text-xs font-medium text-soft leading-5 mt-0.5 max-w-xl">
                یه تشکر از ته دل از <strong className="font-black text-ink underline decoration-amber-400 decoration-2">آیناز</strong> نان سحر بابت دست‌خط دقیق و نگارش تمام صفحات جزوه، و <strong className="font-black text-ink underline decoration-teal-400 decoration-2">معین</strong>  هکر برای طراحی، تایپ فرمول‌ها و ساخت این برنامه برای بچه‌ها.{" "}
                <button
                  type="button"
                  onClick={() => onJump("acknowledgements")}
                  className="cursor-pointer inline-flex items-center text-[11px] font-black text-accent hover:underline ms-1"
                >
                  مشاهده بخش یادبود کامل ←
                </button>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 ms-auto">
            <span className="flex items-center gap-1.5 rounded-lg border border-line bg-amber-400/15 px-3 py-1 text-[11px] font-black text-amber-800 dark:text-amber-200">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] text-ink font-black">آ</span>
              دست‌نویس: آیناز
            </span>
            <span className="flex items-center gap-1.5 rounded-lg border border-line bg-teal-400/15 px-3 py-1 text-[11px] font-black text-teal-800 dark:text-teal-200">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[10px] text-white font-black">م</span>
              توسعه: معین
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

/* ---------------- section ---------------- */

const SectionView = React.memo(function SectionView({
  section,
  studied,
  onToggle,
}: {
  section: Section;
  studied: boolean;
  onToggle: () => void;
}) {
  return (
    <section id={section.id} className="scroll-mt-header">
      <div className="fade-up">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="rounded-lg border-2 border-line bg-accent px-2.5 py-1 text-xs font-black text-white shadow-[1.5px_1.5px_0px_var(--line)] dark:text-[#08130f]">
            {section.num}
          </span>
          <h3 className="text-lg font-black text-ink md:text-xl tracking-tight">
            <T text={section.title} />
          </h3>
          <button
            onClick={onToggle}
            title={studied ? "علامت‌گذاری به عنوان مرورنشده" : "علامت‌گذاری به عنوان مرورشده"}
            className={`no-print ms-auto inline-flex cursor-pointer items-center gap-1.5 rounded-xl border-2 px-3 py-1.5 text-xs font-black transition-all ${
              studied
                ? "border-line bg-emerald-400/20 text-emerald-800 dark:text-emerald-300 shadow-[1.5px_1.5px_0px_var(--line)]"
                : "border-line bg-card text-soft shadow-[1.5px_1.5px_0px_var(--line)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[2.5px_2.5px_0px_var(--line)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            }`}
          >
            {studied ? <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Circle size={13} />}
            {studied ? "مرور شد" : "مرور نشده"}
          </button>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px]">
          {section.session && (
            <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2.5 py-1 font-bold text-violet-600 dark:text-violet-300">
              <CalendarDays size={11} />
              {section.session}
            </span>
          )}
          {section.pages && (
            <span className="inline-flex items-center gap-1 rounded-full bg-card2 px-2.5 py-1 font-bold text-soft">
              <FileText size={11} />
              {section.pages}
            </span>
          )}
        </div>

        {section.summary && (
          <div className="mb-5 rounded-2xl border-s-4 border-accent/60 bg-accent/[0.05] px-5 py-3.5">
            <p className="text-[14.5px] leading-8 text-ink/85">
              <T text={section.summary} />
            </p>
          </div>
        )}

        <div className="space-y-4">
          {section.blocks.map((b, i) => (
            <BlockRenderer key={i} block={b} />
          ))}
        </div>
      </div>
    </section>
  );
});

/* ---------------- main ---------------- */

export const NotesView = React.memo(function NotesView({
  onJump,
  setActiveId,
  progress,
  toggleSection,
}: {
  onJump: (id: string) => void;
  setActiveId: (id: string) => void;
  progress: Record<string, boolean>;
  toggleSection: (id: string) => void;
}) {
  const lastActiveRef = useRef<string>("");

  useEffect(() => {
    let ticking = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          for (const e of entries) {
            if (e.isIntersecting && e.target.id && e.target.id !== lastActiveRef.current) {
              lastActiveRef.current = e.target.id;
              setActiveId(e.target.id);
              break;
            }
          }
          ticking = false;
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.05 }
    );

    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [setActiveId]);

  return (
    <div className="mx-auto max-w-[860px] px-3 pb-28 pt-4 md:px-6 md:pt-6">
      <Hero onJump={onJump} />

      {chapters.map((c) => {
        const secs = sectionsByChapter(c.id);
        return (
          <div key={c.id} id={`chapter-${c.id}`} className="scroll-mt-header">
            {/* chapter divider */}
            <div className="mb-6 sm:mb-8 mt-10 sm:mt-14 first:mt-0">
              <div className="rounded-3xl border-2 border-line bg-card p-4 sm:p-6 md:p-8 shadow-xs hover:shadow-sm transition-all duration-200">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-line text-lg font-black shadow-[2px_2px_0px_var(--line)] ${hueChip[c.hue]}`}
                  >
                    {fa(c.num)}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base font-black text-ink md:text-lg">{c.title}</h2>
                    <p className="mt-0.5 text-xs font-medium text-faint">{c.blurb}</p>
                  </div>
                  <span className="ms-auto rounded-lg border-1.5 border-line bg-card2 px-3 py-1 text-[11px] font-black text-ink shadow-[1px_1px_0px_var(--line)]">
                    صفحات {fa(c.pages)}
                  </span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {secs.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onJump(s.id)}
                      className="cursor-pointer rounded-lg border border-line bg-card px-2.5 py-1 text-[11px] font-black text-ink shadow-2xs transition-all duration-150 hover:bg-card2 hover:border-accent hover:translate-y-[-0.5px] active:scale-95"
                    >
                      {s.num}{" "}
                      <T text={s.title.length > 34 ? s.title.slice(0, 34) + "…" : s.title} />
                    </button>
                  ))}
                  <button
                    onClick={() => onJump(`summary-${c.id}`)}
                    className="cursor-pointer rounded-lg border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-black text-accent shadow-2xs transition-all duration-150 hover:bg-accent hover:text-white dark:hover:text-[#08130f] hover:translate-y-[-0.5px] active:scale-95 inline-flex items-center gap-1.5"
                  >
                    <BookOpenCheck size={13} />
                    <span>مرور خلاصه و نکات کلیدی فصل {fa(c.num)} ←</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              {secs.map((s) => (
                <SectionView
                  key={s.id}
                  section={s}
                  studied={!!progress[s.id]}
                  onToggle={() => toggleSection(s.id)}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Dedicated Special Thanks & Acknowledgements Section */}
      <AcknowledgementsSection />
    </div>
  );
});
