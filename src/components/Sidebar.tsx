import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Search,
  X,
  Layers,
  BookOpenText,
  BookOpenCheck,
  Table2,
  Calculator,
  GraduationCap,
  Zap,
  Check,
} from "lucide-react";
import { chapters, sections, cheatGroups, skills } from "../content";
import { courseSummaries } from "../content/courseSummary";
import { integralCategories, integralFormulas } from "../content/integrals";
import type { Chapter } from "../types";
import { T, fa } from "./Math";
import type { View } from "./TopBar";

const hueDot: Record<string, string> = {
  teal: "bg-teal-500",
  amber: "bg-amber-500",
  sky: "bg-sky-500",
  violet: "bg-violet-500",
};
const hueText: Record<string, string> = {
  teal: "text-teal-600 dark:text-teal-300",
  amber: "text-amber-600 dark:text-amber-300",
  sky: "text-sky-600 dark:text-sky-300",
  violet: "text-violet-600 dark:text-violet-300",
};

function norm(s: string) {
  return s
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/\u200c/g, " ")
    .toLowerCase();
}

const SECTION_SEARCH_INDEX = sections.map((s) => ({
  ...s,
  normText: norm(`${s.num} ${s.title}`),
}));

export const Sidebar = React.memo(function Sidebar({
  activeId,
  progress,
  onNavigate,
  onClose,
  currentView = "notes",
  onViewChange,
  onToggleProgress,
  summaryChapter = "ch3",
  onSelectSummaryChapter,
  selectedIntegralCategory = "all",
  onSelectIntegralCategory,
}: {
  activeId: string;
  progress: Record<string, boolean>;
  onNavigate: (id: string) => void;
  onClose?: () => void;
  currentView?: View;
  onViewChange?: (view: View) => void;
  onToggleProgress?: (id: string) => void;
  summaryChapter?: string;
  onSelectSummaryChapter?: (chId: string) => void;
  selectedIntegralCategory?: string;
  onSelectIntegralCategory?: (cat: string) => void;
}) {
  const [tab, setTab] = useState<View>(currentView);
  const [query, setQuery] = useState("");

  // Keep tab in sync with parent view if currentView changes externally
  React.useEffect(() => {
    setTab(currentView);
  }, [currentView]);

  const matchingSectionIds = useMemo(() => {
    const q = norm(query.trim());
    if (!q) return null;
    return new Set(
      SECTION_SEARCH_INDEX.filter((s) => s.normText.includes(q)).map((s) => s.id)
    );
  }, [query]);

  const filteredChapters = useMemo(() => {
    if (!matchingSectionIds) return chapters;
    return chapters.filter((c) =>
      sections.some((s) => s.chapterId === c.id && matchingSectionIds.has(s.id))
    );
  }, [matchingSectionIds]);

  const doneCount = useMemo(
    () => sections.filter((s) => progress[s.id]).length,
    [progress]
  );
  const pct = Math.round((doneCount / sections.length) * 100);

  const skillsDone = useMemo(
    () => skills.filter((s) => progress[s.id]).length,
    [progress]
  );
  const skillsPct = Math.round((skillsDone / skills.length) * 100);

  const switchTab = (v: View) => {
    setTab(v);
    onViewChange?.(v);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Sidebar sub-navigation tabs (Uncrowded 2-tier architecture) */}
      <div className="border-b border-line-soft px-3 py-2.5 bg-card/60 backdrop-blur-sm">
        {/* Tier 1: 3 Spacious Primary Tabs */}
        <div className="flex items-center gap-1.5 rounded-xl bg-card2/80 p-1 border border-line-soft">
          <button
            onClick={() => switchTab("notes")}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-black transition-all ${
              tab === "notes"
                ? "bg-card text-ink shadow-xs border border-line-soft/80"
                : "text-faint hover:text-ink font-bold"
            }`}
          >
            <BookOpenText size={14} />
            <span>جزوه</span>
          </button>

          <button
            onClick={() => {
              if (tab !== "cheatsheet" && tab !== "integrals" && tab !== "summary") {
                switchTab("cheatsheet");
              }
            }}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-black transition-all ${
              tab === "cheatsheet" || tab === "integrals" || tab === "summary"
                ? "bg-card text-ink shadow-xs border border-line-soft/80"
                : "text-faint hover:text-ink font-bold"
            }`}
          >
            <Table2 size={14} />
            <span>مراجع</span>
          </button>

          <button
            onClick={() => switchTab("exam")}
            className={`flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-black transition-all ${
              tab === "exam"
                ? "bg-card text-ink shadow-xs border border-line-soft/80"
                : "text-faint hover:text-ink font-bold"
            }`}
          >
            <GraduationCap size={14} />
            <span>آزمون</span>
          </button>
        </div>

        {/* Tier 2: Reference Sub-Tabs (Clean & uncrowded, shown when in reference mode) */}
        {(tab === "cheatsheet" || tab === "integrals" || tab === "summary") && (
          <div className="flex items-center gap-1 rounded-lg bg-card2/50 p-1 border border-line-soft/60 mt-2">
            <button
              onClick={() => switchTab("cheatsheet")}
              className={`flex-1 cursor-pointer rounded-md py-1 text-[11px] font-black transition-all text-center ${
                tab === "cheatsheet"
                  ? "bg-accent text-white shadow-2xs dark:text-[#08130f]"
                  : "text-soft hover:text-ink font-bold"
              }`}
            >
              فرمول‌نامه
            </button>
            <button
              onClick={() => switchTab("integrals")}
              className={`flex-1 cursor-pointer rounded-md py-1 text-[11px] font-black transition-all text-center ${
                tab === "integrals"
                  ? "bg-accent text-white shadow-2xs dark:text-[#08130f]"
                  : "text-soft hover:text-ink font-bold"
              }`}
            >
              انتگرال‌ها
            </button>
            <button
              onClick={() => switchTab("summary")}
              className={`flex-1 cursor-pointer rounded-md py-1 text-[11px] font-black transition-all text-center ${
                tab === "summary"
                  ? "bg-accent text-white shadow-2xs dark:text-[#08130f]"
                  : "text-soft hover:text-ink font-bold"
              }`}
            >
              خلاصه فصول
            </button>
          </div>
        )}
      </div>

      {/* TAB 1: NOTES LIST */}
      {tab === "notes" && (
        <>
          {/* search */}
          <div className="border-b border-line-soft px-3 py-2.5">
            <div className="flex items-center gap-2 rounded-xl border border-line-soft bg-card px-3 py-2 shadow-2xs focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15 transition-all">
              <Search size={14} className="shrink-0 text-faint" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی بخش‌های جزوه…"
                className="w-full bg-transparent text-xs font-bold text-ink outline-none placeholder:text-faint"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="cursor-pointer text-faint hover:text-ink"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* nav */}
          <nav className="flex-1 space-y-4 overflow-y-auto px-3 py-3">
            {filteredChapters.map((c: Chapter) => (
              <div key={c.id}>
                <button
                  onClick={() => {
                    onNavigate(`chapter-${c.id}`);
                    onClose?.();
                  }}
                  className="group mb-1.5 flex w-full cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-start transition-all hover:bg-card2/80"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${hueDot[c.hue]} ring-2 ring-card`} />
                  <span className={`text-[12px] font-black tracking-wide ${hueText[c.hue]}`}>
                    فصل {fa(c.num)}:
                  </span>
                  <span className="truncate text-[11.5px] font-bold text-ink flex-1">
                    {c.short}
                  </span>
                  <span className="text-[10px] font-bold text-faint bg-card2 px-1.5 py-0.5 rounded-md">
                    ص {fa(c.pages)}
                  </span>
                </button>
                <ul className="space-y-1">
                  {sections
                    .filter((s) => s.chapterId === c.id)
                    .filter((s) => !matchingSectionIds || matchingSectionIds.has(s.id))
                    .map((s) => {
                      const active = s.id === activeId;
                      return (
                        <li key={s.id}>
                          <button
                            onClick={() => {
                              onNavigate(s.id);
                              onClose?.();
                            }}
                            className={`group flex w-full cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2 text-start text-[12.5px] transition-all ${
                              active
                                ? "border-accent/40 bg-accent/10 font-bold text-ink shadow-xs"
                                : "border-transparent text-soft hover:bg-card2/70 hover:text-ink font-medium"
                            }`}
                          >
                            <span
                              className={`w-9 shrink-0 rounded-md border px-1 py-0.5 text-center text-[10px] ${
                                active
                                  ? "border-accent/50 bg-accent text-white dark:text-[#08130f] font-black shadow-2xs"
                                  : "border-line-soft bg-card2 text-faint group-hover:text-ink font-bold"
                              }`}
                            >
                              {s.num}
                            </span>
                            <span className="line-clamp-2 flex-1 leading-5">
                              <T text={s.title} />
                            </span>
                            {progress[s.id] ? (
                              <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                            ) : (
                              <Circle
                                size={14}
                                className={`shrink-0 ${active ? "text-accent" : "text-faint/35"}`}
                              />
                            )}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
            {filteredChapters.length === 0 && (
              <p className="px-2 py-8 text-center text-xs text-faint">بخشی با این عنوان پیدا نشد…</p>
            )}
          </nav>
        </>
      )}
      {/* TAB 2: COURSE SUMMARY NAVIGATOR */}
      {tab === "summary" && (
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5">
          <div className="mb-2 rounded-2xl border-2 border-line-soft bg-gradient-to-br from-teal-500/[0.08] via-card to-amber-500/[0.06] p-3 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-black text-ink mb-1">
              <BookOpenCheck size={15} className="text-accent" />
              <span>فهرست خلاصه فصول</span>
            </div>
            <p className="text-[11px] text-faint font-medium">
              برای مشاهده خلاصه، فرمول‌ها و نکات کلیدی هر فصل روی آن کلیک کنید:
            </p>
          </div>

          <div className="space-y-2">
            {courseSummaries.map((s) => {
              const active = summaryChapter === s.chapterId;
              return (
                <div
                  key={s.chapterId}
                  className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                    active
                      ? "border-accent bg-accent/[0.08] shadow-xs"
                      : "border-line-soft bg-card hover:border-line hover:shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => {
                      onSelectSummaryChapter?.(s.chapterId);
                      onNavigate(`summary-${s.chapterId}`);
                      onClose?.();
                    }}
                    className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 text-start"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-black shadow-2xs ${
                        active
                          ? "border-line bg-accent text-white dark:text-[#08130f]"
                          : "border-line-soft bg-card2 text-soft"
                      }`}
                    >
                      {fa(s.num)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-black text-ink">{s.title}</p>
                      <p className="text-[10px] font-medium text-faint">
                        {fa(s.formulas.length)} فرمول • {fa(s.concepts.length)} مفهوم • {fa(s.mistakes.length)} دام امتحانی
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: FORMULA GROUPS */}
      {tab === "cheatsheet" && (
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          <p className="px-1 text-[11px] font-bold text-faint mb-2">
            پرش به دسته‌های فرمول‌نامه ({fa(cheatGroups.length)} دسته):
          </p>
          {cheatGroups.map((g, i) => (
            <button
              key={g.id}
              onClick={() => {
                onNavigate(`cs-${g.id}`);
                onClose?.();
              }}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl border border-line-soft bg-card px-3 py-2.5 text-start shadow-2xs transition-all duration-150 hover:border-accent hover:shadow-xs active:scale-[0.98]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-line-soft bg-card2 text-xs font-black text-ink">
                {fa(i + 1)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12.5px] font-black text-ink">{g.title}</p>
                <p className="truncate text-[10.5px] font-medium text-faint">{g.desc}</p>
              </div>
              <span className="rounded-md border border-line-soft bg-card2 px-1.5 py-0.5 text-[10px] font-black text-ink">
                {fa(g.items.length)}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* TAB: INTEGRALS NAVIGATOR (Image #1 fix) */}
      {tab === "integrals" && (
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5">
          <div className="mb-2 rounded-2xl border-2 border-line-soft bg-gradient-to-br from-teal-500/[0.08] via-card to-amber-500/[0.06] p-3 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-black text-ink mb-1">
              <Calculator size={15} className="text-accent" />
              <span>دسته‌بندی انتگرال‌ها</span>
            </div>
            <p className="text-[11px] text-faint font-medium">
              دسترسی سریع به {fa(integralFormulas.length)} فرمول پرکاربرد انتگرال‌گیری:
            </p>
          </div>

          <div className="space-y-2">
            {integralCategories.map((cat, i) => {
              const count = integralFormulas.filter((f) => f.category === cat.id).length;
              const active = selectedIntegralCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`rounded-xl border-2 transition-all duration-200 overflow-hidden ${
                    active
                      ? "border-accent bg-accent/[0.08] shadow-xs"
                      : "border-line-soft bg-card hover:border-line hover:shadow-2xs"
                  }`}
                >
                  <button
                    onClick={() => {
                      onSelectIntegralCategory?.(cat.id);
                      onNavigate("integrals");
                      onClose?.();
                    }}
                    className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 text-start"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-xs font-black shadow-2xs ${
                        active
                          ? "border-line bg-accent text-white dark:text-[#08130f]"
                          : "border-line-soft bg-card2 text-soft"
                      }`}
                    >
                      {fa(i + 1)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-black text-ink">{cat.title}</p>
                      <p className="truncate text-[10px] font-medium text-faint">{cat.desc}</p>
                    </div>
                    <span className="rounded-md border border-line-soft bg-card2 px-1.5 py-0.5 text-[10px] font-black text-ink">
                      {fa(count)}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: EXAM CHECKLIST OVERVIEW (Image #1 overhaul) */}
      {tab === "exam" && (
        <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2.5">
          <div className="mb-2 rounded-2xl border-2 border-line-soft bg-gradient-to-br from-violet-500/[0.08] via-card to-teal-500/[0.06] p-3.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-black text-ink mb-2">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <Zap size={14} className="fill-accent text-accent" />
                تسلط بر مهارت‌های آزمون
              </span>
              <span className="tabular-nums font-black text-xs text-ink bg-card px-2 py-0.5 rounded-md border border-line-soft shadow-2xs">
                {fa(skillsDone)} از {fa(skills.length)} ({fa(skillsPct)}٪)
              </span>
            </div>
            <div className="h-2 rounded-full border border-line-soft bg-card2 overflow-hidden shadow-2xs">
              <div
                className="h-full bg-gradient-to-l from-teal-500 to-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${skillsPct}%` }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            {skills.map((sk, i) => {
              const checked = !!progress[sk.id];
              return (
                <div
                  key={sk.id}
                  className={`group flex items-start gap-2.5 rounded-xl border p-2.5 transition-all duration-200 ${
                    checked
                      ? "border-emerald-500/40 bg-emerald-500/[0.06] shadow-2xs"
                      : "border-line-soft bg-card hover:border-line hover:bg-card2/50 shadow-2xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleProgress?.(sk.id);
                    }}
                    className={`mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-lg border transition-all active:scale-90 ${
                      checked
                        ? "border-emerald-500 bg-emerald-500 text-white shadow-2xs"
                        : "border-line bg-card2 text-faint hover:border-accent hover:text-accent"
                    }`}
                    title={checked ? "علامت‌گذاری به عنوان انجام‌نشده" : "علامت‌گذاری به عنوان مسلط"}
                  >
                    {checked ? (
                      <Check size={12} strokeWidth={3} />
                    ) : (
                      <span className="text-[10px] font-black">{fa(i + 1)}</span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate("exam-skills");
                      onClose?.();
                    }}
                    className="flex-1 text-start cursor-pointer min-w-0"
                  >
                    <p
                      className={`text-[12px] leading-5 font-bold transition-colors ${
                        checked ? "text-faint line-through" : "text-ink group-hover:text-accent"
                      }`}
                    >
                      {sk.text}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* progress footer — firmly docked at the bottom */}
      <div className="border-t border-line-soft px-4 py-3 bg-card/90 backdrop-blur-md mt-auto">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold text-soft">
          <span className="inline-flex items-center gap-1.5">
            <Layers size={13} className="text-accent" />
            پیشرفت کل جزوه
          </span>
          <span className="tabular-nums font-black text-xs text-ink">
            {fa(doneCount)} از {fa(sections.length)} ({fa(pct)}٪)
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full border border-line-soft bg-card2">
          <div
            className="h-full rounded-full bg-gradient-to-l from-teal-500 to-emerald-400 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
});
