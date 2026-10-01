import type { Chapter, CheatGroup, Section, Skill } from "../types";
import { ch3Sections } from "./ch3";
import { variationSections } from "./variation";
import { ch5Sections } from "./ch5";
import { ch6Sections } from "./ch6";

export const chapters: Chapter[] = [
  {
    id: "ch3",
    num: "۳",
    title: "معادلات خطی همگن با ضرایب ثابت",
    short: "همگن با ضرایب ثابت",
    pages: "۱ تا ۶",
    blurb: "معادله مشخصه، رونسکین، ریشه‌های مضاعف و مختلط، نماد اپراتوری D",
    hue: "teal",
  },
  {
    id: "var",
    num: "۴",
    title: "روش تغییر پارامترها و معادله اویلر",
    short: "تغییر پارامترها",
    pages: "۶ تا ۱۰",
    blurb: "روش لاگرانژ، فرمول‌های v₁ و v₂، معادله اویلر با x = eᵗ",
    hue: "amber",
  },
  {
    id: "c5",
    num: "۵",
    title: "دستگاه معادلات دیفرانسیل خطی",
    short: "دستگاه معادلات",
    pages: "۱۱ تا ۱۴",
    blurb: "روش حذفی، روش اپراتوری و کرامر، مسیرهای قائم",
    hue: "sky",
  },
  {
    id: "c6",
    num: "۶",
    title: "تبدیل لاپلاس",
    short: "تبدیل لاپلاس",
    pages: "۱۵ تا ۲۵",
    blurb: "تعریف، جدول یک، تابع گاما، تبدیل مشتق، حل معادله",
    hue: "violet",
  },
];

export const sections: Section[] = [
  ...ch3Sections,
  ...variationSections,
  ...ch5Sections,
  ...ch6Sections,
];

export const chapterById = (id: string) => chapters.find((c) => c.id === id);

export const sectionsByChapter = (chapterId: string) =>
  sections.filter((s) => s.chapterId === chapterId);

export const allExamples = sections.flatMap((s) =>
  s.blocks.filter((b) => b.kind === "example").map((b) => (b as any).example)
);

export const exampleById = (id: string) =>
  (allExamples as any[]).find((e) => e.id === id);

/* ------------------------------------------------------------------ */
/*  Cheat sheet formulas                                               */
/* ------------------------------------------------------------------ */

const r = String.raw;

export const cheatGroups: CheatGroup[] = [
  {
    id: "roots",
    title: "معادله مشخصه و ساختار جواب‌ها",
    short: "معادله مشخصه",
    icon: "FunctionSquare",
    desc: "هر ریشه چه جمله‌ای به جواب عمومی اضافه می‌کند",
    items: [
      {
        title: "معادله مشخصه مرتبه n",
        math: r`t^n + a_1 t^{n-1} + \dots + a_{n-1} t + a_n = 0`,
        note: "با فرض $y = e^{tx}$ و حذف فاکتور ناصفر $e^{tx}$",
      },
      {
        title: "ریشه حقیقی متمایز $r$",
        math: r`y = C e^{rx}`,
      },
      {
        title: "ریشه مضاعف $r$ (با مرتبه تکرار $k$)",
        math: r`y = \left(C_1 + C_2 x + \dots + C_k x^{k-1}\right) e^{rx}`,
      },
      {
        title: "ریشه مختلط مزدوج $\\alpha \\pm \\beta i$",
        math: r`y = e^{\alpha x}\left(C_1 \cos\beta x + C_2 \sin\beta x\right)`,
      },
    ],
  },
  {
    id: "wronskian",
    title: "رونسکین و شرط استقلال خطی",
    short: "رونسکین",
    icon: "Grid3x3",
    desc: "آزمون پایه بودن مجموعه جواب‌ها",
    items: [
      {
        title: "رونسکین دو تابع $y_1, y_2$",
        math: r`W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'`,
      },
      {
        title: "معیار استقلال و وابستگی",
        math: r`W(x) \neq 0 \iff \text{استقلال خطی} \qquad W(x) = 0 \iff \text{وابستگی خطی}`,
        wide: true,
      },
    ],
  },
  {
    id: "variation",
    title: "روش تغییر پارامترها (لاگرانژ)",
    short: "تغییر پارامترها",
    icon: "Shuffle",
    desc: "چهار گام از فرم استاندارد تا جواب خصوصی",
    items: [
      {
        title: "فرم استاندارد معادله مرتبه ۲",
        math: r`y'' + P(x)y' + q(x)y = R(x)`,
      },
      {
        title: "دستگاه اصلی برای $v_1', v_2'$",
        math: r`\begin{cases} v_1' y_1 + v_2' y_2 = 0 \\ v_1' y_1' + v_2' y_2' = R(x) \end{cases}`,
      },
      {
        title: "فرمول‌های انتگرال پارامترها",
        math: r`v_1 = \int \frac{-R(x) y_2}{W} \, dx \qquad\qquad v_2 = \int \frac{R(x) y_1}{W} \, dx`,
        note: "بدون ثابت انتگرال‌گیری محاسبه می‌شود.",
        wide: true,
      },
      {
        title: "جواب نهایی",
        math: r`y = y_g + y_p = (C_1 y_1 + C_2 y_2) + (v_1 y_1 + v_2 y_2)`,
        wide: true,
      },
    ],
  },
  {
    id: "euler",
    title: "معادله اویلر (کوشی-اویلر)",
    short: "اویلر",
    icon: "Repeat",
    desc: "تبدیل ضرایب متغیر به ضرایب ثابت",
    items: [
      {
        title: "معادله همگن اویلر",
        math: r`x^2 y'' + p x y' + q y = 0`,
      },
      {
        title: "تبدیل با تغییر متغیر $x = e^t$",
        math: r`x = e^t \implies \frac{d^2 y}{dt^2} + (p - 1)\frac{dy}{dt} + q y = 0`,
      },
      {
        title: "استانداردسازی بخش غیرهمگن",
        math: r`x^2 y'' + p x y' + q y = g(x) \xrightarrow{\div x^2} y'' + \frac{p}{x}y' + \frac{q}{x^2}y = \frac{g(x)}{x^2} \implies R(x) = \frac{g(x)}{x^2}`,
        wide: true,
      },
    ],
  },
  {
    id: "system",
    title: "دستگاه معادلات دیفرانسیل",
    short: "دستگاه معادلات",
    icon: "Network",
    desc: "دو راه رسیدن از دستگاه به معادله تک‌مجهولی",
    items: [
      {
        title: "روش حذفی",
        math: r`y_2 = f(y_1, y_1') \xrightarrow{\text{جایگذاری}} y_1'' + a y_1' + b y_1 = g(x)`,
        note: "تابع دوم مستقیماً از رابطه جبری به دست می‌آید تا ثابت اضافی ایجاد نشود.",
        wide: true,
      },
      {
        title: "قاعده کرامر با اپراتور $D$",
        math: r`x = \frac{\begin{vmatrix} C_1 & B_1 \\ C_2 & B_2 \end{vmatrix}}{\begin{vmatrix} A_1 & B_1 \\ A_2 & B_2 \end{vmatrix}} \implies F(D) x = R_1(t)`,
        wide: true,
      },
    ],
  },
  {
    id: "laplace",
    title: "جدول یک — تبدیل لاپلاس",
    short: "جدول لاپلاس",
    icon: "Table2",
    desc: "هشت تبدیل پایه؛ مهم‌ترین جدول نیم‌ترم",
    items: [
      { title: "تابع ثابت", math: r`\mathcal{L}[a] = \frac{a}{s}` },
      { title: "توان طبیعی", math: r`\mathcal{L}[t^n] = \frac{n!}{s^{n+1}}` },
      {
        title: "توان حقیقی و کسری",
        math: r`\mathcal{L}[t^a] = \frac{\Gamma(a+1)}{s^{a+1}} \quad (a > -1)`,
      },
      { title: "نمایی", math: r`\mathcal{L}[e^{at}] = \frac{1}{s-a} \quad (s > a)` },
      { title: "کسینوس", math: r`\mathcal{L}[\cos at] = \frac{s}{s^2 + a^2}` },
      { title: "سینوس", math: r`\mathcal{L}[\sin at] = \frac{a}{s^2 + a^2}` },
      { title: "کسینوس هیپربولیک", math: r`\mathcal{L}[\cosh at] = \frac{s}{s^2 - a^2}` },
      { title: "سینوس هیپربولیک", math: r`\mathcal{L}[\sinh at] = \frac{a}{s^2 - a^2}` },
    ],
  },
  {
    id: "deriv",
    title: "تبدیل لاپلاس مشتق و خواص گاما",
    short: "مشتق و گاما",
    icon: "Sigma",
    desc: "ابزار ورود به حل مسائل مقدار اولیه",
    items: [
      {
        title: "تبدیل مشتق اول و دوم",
        math: r`\mathcal{L}(f') = s F(s) - f(0) \qquad \mathcal{L}(f'') = s^2 F(s) - s f(0) - f'(0)`,
        wide: true,
      },
      {
        title: "قضیه تغییر مقیاس",
        math: r`\mathcal{L}[f(bt)] = \frac{1}{b} F\left(\frac{s}{b}\right) \qquad \mathcal{L}^{-1}[F(ks)] = \frac{1}{k} f\left(\frac{t}{k}\right)`,
        wide: true,
      },
      {
        title: "روابط بازگشتی تابع گاما",
        math: r`\Gamma(p+1) = p\,\Gamma(p), \quad \Gamma(n+1) = n!, \quad \Gamma\left(\tfrac{1}{2}\right) = \sqrt{\pi}`,
        wide: true,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Exam prep skills                                                   */
/* ------------------------------------------------------------------ */

export const skills: Skill[] = [
  { id: "sk-1", text: "نوشتن معادله مشخصه و پیدا کردن ریشه‌ها برای مرتبه‌های ۲ تا ۴" },
  { id: "sk-2", text: "تشکیل رونسکین و تعیین استقلال/وابستگی خطی توابع" },
  { id: "sk-3", text: "نوشتن جواب عمومی برای ریشه مضاعف و ریشه مختلط" },
  { id: "sk-4", text: "حل معادلات با نماد اپراتوری D و شمارش دقیق ثابت‌ها" },
  { id: "sk-5", text: "اجرای کامل روش تغییر پارامترها (محاسبه W، v₁، v₂ و yp)" },
  { id: "sk-6", text: "حل معادله اویلر با تغییر متغیر x = eᵗ و استاندارد کردن R(x)" },
  { id: "sk-7", text: "حل دستگاه معادلات با روش حذفی بدون ساخت ثابت اضافی" },
  { id: "sk-8", text: "تسلط کامل بر جدول یک تبدیل لاپلاس (۱۰ تبدیل پایه)" },
  { id: "sk-9", text: "تجزیه کسرهای جزئی و گرفتن لاپلاس معکوس" },
  { id: "sk-10", text: "حل مسائل مقدار اولیه با تبدیل لاپلاس مشتق" },
];

export const examExampleIds = ["ex-3-19", "ex-orth"];
export const homeworkExampleIds = ["ex-3-54"];
