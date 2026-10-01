import React from "react";
import { Heart, Sparkles, Feather, Code2, Award, Sun, Quote, Compass, Zap, Smartphone } from "lucide-react";
import { fa } from "./Math";

export const AcknowledgementsSection = React.memo(function AcknowledgementsSection() {
  return (
    <section
      id="acknowledgements"
      className="scroll-mt-header mt-16 sm:mt-24 pt-8 border-t-2 border-line/60"
      aria-label="بخش قدردانی و سپاسگزاری ویژه"
    >
      {/* 1. Plaque Section Header */}
      <div className="mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-black text-amber-800 dark:text-amber-200 shadow-2xs">
          <Heart size={14} className="fill-amber-500 text-amber-500 animate-pulse" />
          <span>یادبود، تقدیر و سپاسگزاری ویژه</span>
          <Sparkles size={13} className="text-amber-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">
          قدردانی از پدیدآورندگان و همیاران جزوه
        </h2>

        <p className="mx-auto max-w-xl text-sm leading-7 text-soft font-medium">
          این برنامه برای کمک به خودم و استفاده در درس‌هایی ساخته شده که نیاز به دونستن دیفرانسیل و انتگرال داشتن. توی این مسیر، دو دوست عزیزم، معین و آیناز، کمک‌های زیادی کردن و بخش مهمی از این برنامه حاصل زحمت و همراهی اون‌هاست.
        </p>
      </div>

      {/* 2. Dual Honor Cards Grid (Image #1 Overhaul) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {/* Card 1: Aynaz (آیناز) */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-line border-t-4 border-t-amber-400 bg-gradient-to-br from-amber-500/[0.12] via-card to-card p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          {/* Subtle background watermark calligraphy */}
          <div
            className="pointer-events-none absolute -bottom-10 -start-6 select-none text-[150px] font-black text-amber-500/[0.07] dark:text-amber-400/[0.05]"
            aria-hidden="true"
          >
            آ
          </div>

          <div>
            {/* Top row: Avatar emblem & Role */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/25 ring-4 ring-amber-400/20">
                <span className="text-2xl font-black">آ</span>
                <span className="absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full bg-card border-2 border-amber-500 text-amber-600 dark:text-amber-400 shadow-xs">
                  <Feather size={12} strokeWidth={2.8} />
                </span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-400/15 px-2.5 py-0.5 text-[11px] font-black text-amber-800 dark:text-amber-200">
                  <Award size={12} />
                  <span>نگارش و تحریر کامل جزوه</span>
                </span>
                <h3 className="text-2xl font-black text-ink tracking-tight mt-0.5">آیناز</h3>
              </div>
            </div>

            {/* Appreciation Statement with Quote styling */}
            <div className="relative my-4 rounded-2xl bg-amber-500/[0.05] p-4 border border-amber-500/20">
              <Quote size={18} className="text-amber-500/40 mb-1" />
              <p className="text-[13.5px] leading-7 text-soft font-medium">
                یک تشکر از ته دل از <strong className="font-black text-ink">آیناز نان سحر </strong>؛ برای ساعت‌ها وقت و حوصله‌ای که گذاشت، دست‌خط تمیز و خوانایی که تمام {fa(25)} صفحه جزوه رو ثبت کرد، و تفکیک دقیق مراحل حل مسائل که سنگ‌بنای اصلی این برنامه شد.
              </p>
            </div>
          </div>

          {/* 3-Column Achievement Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-line-soft">
            <div className="rounded-xl border border-amber-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 mx-auto">
                <Feather size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">{fa(25)} صفحه</p>
              <p className="text-[10px] font-bold text-faint">نگارش دستی کامل</p>
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 mx-auto">
                <Compass size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">{fa(34)} مسئله</p>
              <p className="text-[10px] font-bold text-faint">حل گام‌به‌گام</p>
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 mx-auto">
                <Sparkles size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">{fa(4)} فصل</p>
              <p className="text-[10px] font-bold text-faint">سرفصل‌های ۳ تا ۶</p>
            </div>
          </div>
        </div>

        {/* Card 2: Moein (معین) */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-line border-t-4 border-t-teal-500 bg-gradient-to-br from-teal-500/[0.12] via-card to-card p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          {/* Subtle background watermark code */}
          <div
            className="pointer-events-none absolute -bottom-8 -start-6 select-none text-[130px] font-black text-teal-500/[0.07] dark:text-teal-400/[0.05]"
            aria-hidden="true"
          >
            م
          </div>

          <div>
            {/* Top row: Avatar emblem & Role */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-teal-500/50 bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 text-white shadow-md shadow-teal-500/25 ring-4 ring-teal-500/20">
                <span className="text-2xl font-black">م</span>
                <span className="absolute -bottom-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full bg-card border-2 border-teal-500 text-teal-600 dark:text-teal-400 shadow-xs">
                  <Code2 size={12} strokeWidth={2.8} />
                </span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/15 px-2.5 py-0.5 text-[11px] font-black text-teal-800 dark:text-teal-200">
                  <Award size={12} />
                  <span>طراحی سامانه و توسعهٔ وبگاه</span>
                </span>
                <h3 className="text-2xl font-black text-ink tracking-tight mt-0.5">معین</h3>
              </div>
            </div>

            {/* Appreciation Statement with Quote styling */}
            <div className="relative my-4 rounded-2xl bg-teal-500/[0.05] p-4 border border-teal-500/20">
              <Quote size={18} className="text-teal-500/40 mb-1" />
              <p className="text-[13.5px] leading-7 text-soft font-medium">
                یک سپاس ویژه از <strong className="font-black text-ink">معین هکر </strong>؛ برای وسواس و وقتی که در طراحی رابط کاربری تعاملی، تایپ استاندارد صدها فرمول در لاتک، و آماده‌سازی این سامانه به خرج داد تا مطالعه و مرور برای همه ساده‌تر و لذت‌بخش‌تر بشه.
              </p>
            </div>
          </div>

          {/* 3-Column Achievement Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-line-soft">
            <div className="rounded-xl border border-teal-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 mx-auto">
                <Code2 size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">فرانت‌اند</p>
              <p className="text-[10px] font-bold text-faint">طراحی و توسعه</p>
            </div>
            <div className="rounded-xl border border-teal-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 mx-auto">
                <Zap size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">+{fa(300)} فرمول</p>
              <p className="text-[10px] font-bold text-faint">تایپ ریاضی لاتک</p>
            </div>
            <div className="rounded-xl border border-teal-500/30 bg-card p-2.5 text-center shadow-2xs hover:shadow-xs transition-all">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400 mx-auto">
                <Smartphone size={16} strokeWidth={2.5} />
              </span>
              <p className="mt-1.5 font-black text-xs sm:text-[13px] text-ink">۱۰۰٪</p>
              <p className="text-[10px] font-bold text-faint">بهینه‌سازی موبایل</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. "Long May The Sunshine" Dedicated Plaque (Image #1 & #2 removed) */}
      <div className="mt-10 overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/[0.12] via-card to-amber-500/[0.12] p-8 sm:p-12 text-center shadow-md dark:shadow-md relative">
        {/* Subtle background solar rays watermark */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05] dark:opacity-[0.07] select-none"
          aria-hidden="true"
        >
          <Sun size={280} className="text-amber-500" />
        </div>

        <div className="relative py-2 sm:py-4">
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-600 dark:text-amber-400 tracking-wider"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif", letterSpacing: "0.08em" }}
          >
            Long May The Sunshine
          </h3>
        </div>
      </div>
    </section>
  );
});
