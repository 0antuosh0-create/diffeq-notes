import { BookOpenText, BookOpenCheck, Table2, GraduationCap, Calculator, Search, Moon, Sun, Menu, Sigma } from "lucide-react";
import { fa } from "./Math";

export type View = "notes" | "summary" | "cheatsheet" | "integrals" | "exam";

const views: { id: View; label: string; icon: typeof BookOpenText }[] = [
  { id: "notes", label: "جزوه", icon: BookOpenText },
  { id: "summary", label: "خلاصه مباحث", icon: BookOpenCheck },
  { id: "cheatsheet", label: "فرمول‌نامه", icon: Table2 },
  { id: "integrals", label: "انتگرال‌ها", icon: Calculator },
  { id: "exam", label: "آمادگی امتحان", icon: GraduationCap },
];
export function ProgressRing({ pct }: { pct: number }) {
  const r = 13;
  const c = 2 * Math.PI * r;
  return (
    <div
      className="relative flex items-center justify-center"
      title={`پیشرفت مرور: ${fa(pct)}٪`}
    >
      <svg width="34" height="34" viewBox="0 0 34 34" className="-rotate-90">
        <circle cx="17" cy="17" r={r} fill="none" strokeWidth="3.5" className="stroke-card2" />
        <circle
          cx="17"
          cy="17"
          r={r}
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          className="stroke-accent transition-all duration-700"
        />
      </svg>
      <span className="absolute text-[8.5px] font-black text-soft">{fa(pct)}</span>
    </div>
  );
}

export function TopBar({
  view,
  setView,
  dark,
  toggleDark,
  onSearch,
  onMenu,
  progressPct,
}: {
  view: View;
  setView: (v: View) => void;
  dark: boolean;
  toggleDark: () => void;
  onSearch: () => void;
  onMenu: () => void;
  progressPct: number;
}) {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 md:px-6">
        {/* mobile menu */}
        <button
          onClick={onMenu}
          className="cursor-pointer rounded-xl border border-line bg-card p-2 text-ink shadow-2xs transition-all duration-200 hover:border-accent hover:shadow-xs active:scale-95 lg:hidden"
          aria-label="فهرست و منو"
        >
          <Menu size={19} />
        </button>

        {/* brand */}
        <button
          onClick={() => setView("notes")}
          className="flex cursor-pointer items-center gap-2.5 text-start min-w-0 shrink transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-[0_0_15px_rgba(15,118,110,0.3)] dark:shadow-[0_0_20px_rgba(45,212,191,0.35)] transition-shadow duration-300">
            <Sigma size={19} strokeWidth={2.8} />
          </div>
          <div className="leading-tight min-w-0">
            <p className="text-[13px] sm:text-[13.5px] font-black text-ink truncate">جزوه معادلات دیفرانسیل</p>
            <p className="text-[10px] sm:text-[10.5px] font-bold text-faint truncate hidden sm:block">نیم‌ترم دوم — بازنویسی دقیق</p>
          </div>
        </button>

        {/* view switcher */}
        <nav className="mx-auto hidden items-center gap-1 rounded-2xl border border-line bg-card p-1 shadow-xs md:flex">
          {views.map((v) => {
            const Icon = v.icon;
            const active = view === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-1.5 text-[12.5px] font-black transition-all duration-200 ${
                  active
                    ? "border border-teal-600/50 bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs dark:from-teal-500 dark:to-emerald-500 dark:text-[#08130f]"
                    : "border border-transparent text-soft hover:bg-card2/70 hover:text-ink"
                }`}
              >
                <Icon size={14} />
                {v.label}
              </button>
            );
          })}
        </nav>

        {/* actions */}
        <div className="ms-auto flex items-center gap-2.5">
          <button
            onClick={onSearch}
            className="hidden cursor-pointer items-center gap-2.5 rounded-xl border border-line bg-card px-3.5 py-1.5 text-[12px] font-bold text-ink shadow-2xs transition-all duration-200 hover:border-accent hover:shadow-xs hover:scale-[1.02] active:scale-[0.98] sm:flex"
          >
            <Search size={14} className="text-ink" />
            <span>جستجو در جزوه…</span>
            <kbd className="rounded-md border border-line bg-card2 px-1.5 py-0.5 font-mono text-[10px] font-black text-ink shadow-2xs">
              CTRL K
            </kbd>
          </button>
          <button
            onClick={onSearch}
            className="cursor-pointer rounded-xl border border-line bg-card p-2 text-ink shadow-2xs transition-all duration-200 hover:border-accent hover:shadow-xs active:scale-95 sm:hidden"
            aria-label="جستجو"
          >
            <Search size={17} />
          </button>
          <div className="rounded-xl border border-line bg-card p-0.5 shadow-2xs">
            <ProgressRing pct={progressPct} />
          </div>
          <button
            onClick={toggleDark}
            className="cursor-pointer rounded-xl border border-line bg-card p-2 text-ink shadow-2xs transition-all duration-200 hover:border-accent hover:shadow-xs active:scale-95"
            aria-label="تغییر تم"
          >
            {dark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
          </button>
        </div>
      </div>

      {/* Single clean header — mobile bottom nav handles thumb switching */}
    </header>
  );
}
