const r = String.raw;

export interface IntegralItem {
  id: string;
  title: string;
  math: string;
  note?: string;
  category: "basic" | "exp_log" | "trig" | "hyperbolic" | "rational" | "parts";
  wide?: boolean;
}

export interface IntegralCategory {
  id: "basic" | "exp_log" | "trig" | "hyperbolic" | "rational" | "parts";
  title: string;
  short: string;
  desc: string;
  icon: string;
}

export const integralCategories: IntegralCategory[] = [
  {
    id: "basic",
    title: "قواعد پایه و توان‌ها",
    short: "پایه و توان",
    desc: "روابط پایه‌ای توان‌ها، ضریب مشتق و انتگرال‌های لگاریتمی مستقیم",
    icon: "Calculator",
  },
  {
    id: "exp_log",
    title: "توابع نمایی و لگاریتمی",
    short: "نمایی و لگاریتم",
    desc: "فرمول‌های کلیدی توابع e^x، لگاریتم طبیعی و ضرب چندجمله‌ای در نمایی",
    icon: "TrendingUp",
  },
  {
    id: "trig",
    title: "توابع مثلثاتی و توان‌ها",
    short: "مثلثاتی",
    desc: "سینوس، کسینوس، تانژانت، سکانت و تبدیل توان‌های زوج با نصف کمان",
    icon: "Waves",
  },
  {
    id: "hyperbolic",
    title: "توابع هیپربولیک",
    short: "هیپربولیک",
    desc: "انتگرال‌های sinh، cosh و رابطه با توابع نمایی متناظر",
    icon: "Activity",
  },
  {
    id: "rational",
    title: "کسری، رادیکالی و معکوس مثلثاتی",
    short: "کسری و رادیکالی",
    desc: "فرم‌های استاندارد مخرج دو جمله‌ای که به آرک‌تانژانت و لگاریتم منتهی می‌شوند",
    icon: "Divide",
  },
  {
    id: "parts",
    title: "جزء به جزء و ضرب‌های خاص",
    short: "جزء به جزء",
    desc: "فرمول لاگرانژ، روش سریع جدولی (DI) و انتگرال‌های ضرب نمایی در مثلثاتی",
    icon: "Layers",
  },
];

export const integralFormulas: IntegralItem[] = [
  /* ------------------------------------------------------------------ */
  /*  1. Basic Rules & Powers (قواعد پایه و توان‌ها)                     */
  /* ------------------------------------------------------------------ */
  {
    id: "b-1",
    category: "basic",
    title: "قاعده توان پایه",
    math: r`\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)`,
    note: "برای تمام توان‌های حقیقی به جز منفی یک صادق است",
  },
  {
    id: "b-2",
    category: "basic",
    title: "انتگرال معکوس x (پیدایش لگاریتم)",
    math: r`\int \frac{1}{x} \, dx = \ln |x| + C`,
    note: "استفاده از قدر مطلق |x| برای تضمین مثبت بودن آرگومان الزامی است",
  },
  {
    id: "b-3",
    category: "basic",
    title: "عبارت خطی به توان n",
    math: r`\int (ax + b)^n \, dx = \frac{(ax + b)^{n+1}}{a(n+1)} + C \quad (n \neq -1)`,
    note: "ضریب ۱/a پشت انتگرال به دلیل مشتق زنجیره‌ای داخل پرانتز است",
  },
  {
    id: "b-4",
    category: "basic",
    title: "فرمول طلایی: مشتق در صورت، تابع در مخرج",
    math: r`\int \frac{f'(x)}{f(x)} \, dx = \ln |f(x)| + C`,
    note: "پرکاربردترین فرمول در حل معادلات جداپذیر و مسیرهای قائم",
    wide: true,
  },
  {
    id: "b-5",
    category: "basic",
    title: "قاعده زنجیره‌ای توان کلی",
    math: r`\int f'(x) [f(x)]^n \, dx = \frac{[f(x)]^{n+1}}{n+1} + C \quad (n \neq -1)`,
    note: "با تغییر متغیر u = f(x) به انتگرال توان ساده تبدیل می‌شود",
  },
  {
    id: "b-6",
    category: "basic",
    title: "مشتق زیر رادیکال در مخرج",
    math: r`\int \frac{f'(x)}{\sqrt{f(x)}} \, dx = 2\sqrt{f(x)} + C`,
  },

  /* ------------------------------------------------------------------ */
  /*  2. Exponential & Logarithmic (توابع نمایی و لگاریتمی)               */
  /* ------------------------------------------------------------------ */
  {
    id: "e-1",
    category: "exp_log",
    title: "تابع نمایی پایه e",
    math: r`\int e^{ax} \, dx = \frac{1}{a} e^{ax} + C`,
    note: "تابع e تنها تابعی است که با ضریب ثابتی از خودش برابر است",
  },
  {
    id: "e-2",
    category: "exp_log",
    title: "تابع نمایی با هر پایه مثبت a",
    math: r`\int a^x \, dx = \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1)`,
  },
  {
    id: "e-3",
    category: "exp_log",
    title: "انتگرال لگاریتم طبیعی ln(x)",
    math: r`\int \ln x \, dx = x \ln x - x + C`,
    note: "حاصل از روش جزء به جزء با انتخاب u = ln(x) و dv = dx؛ بسیار مهم در معادله اویلر",
  },
  {
    id: "e-4",
    category: "exp_log",
    title: "ضرب x در تابع نمایی",
    math: r`\int x e^{ax} \, dx = \frac{e^{ax}}{a^2}(ax - 1) + C`,
    note: "در تبدیل لاپلاس توابع خطی و حل معادلات با ریشه مضاعف تکرار می‌شود",
  },
  {
    id: "e-5",
    category: "exp_log",
    title: "ضرب x^2 در تابع نمایی",
    math: r`\int x^2 e^{ax} \, dx = \frac{e^{ax}}{a^3}\left(a^2 x^2 - 2ax + 2\right) + C`,
    note: "با روش انتگرال‌گیری جدولی (DI) به آسانی محاسبه می‌شود",
    wide: true,
  },
  {
    id: "e-6",
    category: "exp_log",
    title: "ضرب چندجمله‌ای در لگاریتم",
    math: r`\int x^n \ln x \, dx = \frac{x^{n+1}}{n+1}\ln x - \frac{x^{n+1}}{(n+1)^2} + C \quad (n \neq -1)`,
  },

  /* ------------------------------------------------------------------ */
  /*  3. Trigonometric Functions (توابع مثلثاتی)                        */
  /* ------------------------------------------------------------------ */
  {
    id: "t-1",
    category: "trig",
    title: "انتگرال سینوس",
    math: r`\int \sin ax \, dx = -\frac{1}{a} \cos ax + C`,
    note: "دقت در علامت منفی پشت کسینوس الزامی است",
  },
  {
    id: "t-2",
    category: "trig",
    title: "انتگرال کسینوس",
    math: r`\int \cos ax \, dx = \frac{1}{a} \sin ax + C`,
  },
  {
    id: "t-3",
    category: "trig",
    title: "انتگرال تانژانت",
    math: r`\int \tan ax \, dx = \frac{1}{a} \ln |\sec ax| + C = -\frac{1}{a} \ln |\cos ax| + C`,
    note: "با نوشتن sin/cos و استفاده از فرمول f'/f به دست می‌آید",
  },
  {
    id: "t-4",
    category: "trig",
    title: "انتگرال کتانژانت",
    math: r`\int \cot ax \, dx = \frac{1}{a} \ln |\sin ax| + C`,
  },
  {
    id: "t-5",
    category: "trig",
    title: "انتگرال سکانت",
    math: r`\int \sec ax \, dx = \frac{1}{a} \ln |\sec ax + \tan ax| + C`,
    note: "در روش تغییر پارامترها وقتی R(x) = sec x یا tan x است کاربرد دارد",
  },
  {
    id: "t-6",
    category: "trig",
    title: "انتگرال کسکانت",
    math: r`\int \csc ax \, dx = -\frac{1}{a} \ln |\csc ax + \cot ax| + C`,
  },
  {
    id: "t-7",
    category: "trig",
    title: "انتگرال sec²(ax)",
    math: r`\int \sec^2 ax \, dx = \frac{1}{a} \tan ax + C`,
  },
  {
    id: "t-8",
    category: "trig",
    title: "انتگرال csc²(ax)",
    math: r`\int \csc^2 ax \, dx = -\frac{1}{a} \cot ax + C`,
  },
  {
    id: "t-9",
    category: "trig",
    title: "انتگرال سینوس توان دوم (نصف کمان)",
    math: r`\int \sin^2 ax \, dx = \frac{x}{2} - \frac{\sin 2ax}{4a} + C`,
    note: "با اتحاد نصف کمان: sin² θ = (1 - cos 2θ)/2",
    wide: true,
  },
  {
    id: "t-10",
    category: "trig",
    title: "انتگرال کسینوس توان دوم (نصف کمان)",
    math: r`\int \cos^2 ax \, dx = \frac{x}{2} + \frac{\sin 2ax}{4a} + C`,
    note: "با اتحاد نصف کمان: cos² θ = (1 + cos 2θ)/2",
    wide: true,
  },

  /* ------------------------------------------------------------------ */
  /*  4. Hyperbolic Functions (توابع هیپربولیک)                         */
  /* ------------------------------------------------------------------ */
  {
    id: "h-1",
    category: "hyperbolic",
    title: "انتگرال سینوس هیپربولیک sinh",
    math: r`\int \sinh ax \, dx = \frac{1}{a} \cosh ax + C`,
    note: "برخلاف سینوس معمولی، علامت مثبت است",
  },
  {
    id: "h-2",
    category: "hyperbolic",
    title: "انتگرال کسینوس هیپربولیک cosh",
    math: r`\int \cosh ax \, dx = \frac{1}{a} \sinh ax + C`,
  },
  {
    id: "h-3",
    category: "hyperbolic",
    title: "انتگرال تانژانت هیپربولیک tanh",
    math: r`\int \tanh ax \, dx = \frac{1}{a} \ln(\cosh ax) + C`,
  },
  {
    id: "h-4",
    category: "hyperbolic",
    title: "انتگرال sech²",
    math: r`\int \text{sech}^2 ax \, dx = \frac{1}{a} \tanh ax + C`,
  },

  /* ------------------------------------------------------------------ */
  /*  5. Rational & Inverse Trig (کسری، رادیکالی و معکوس مثلثاتی)       */
  /* ------------------------------------------------------------------ */
  {
    id: "r-1",
    category: "rational",
    title: "فرمول استاندارد آرک‌تانژانت",
    math: r`\int \frac{1}{x^2 + a^2} \, dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C`,
    note: "پرتکرارترین انتگرال در تبدیل لاپلاس معکوس و تجزیه کسرهای درجه دوم",
  },
  {
    id: "r-2",
    category: "rational",
    title: "فرمول آرک‌سینوس",
    math: r`\int \frac{1}{\sqrt{a^2 - x^2}} \, dx = \arcsin\left(\frac{x}{a}\right) + C`,
    note: "نیازی به ضریب ۱/a در پشت کمان نیست",
  },
  {
    id: "r-3",
    category: "rational",
    title: "تفاضل مربع‌ها در مخرج (لگاریتم کسری)",
    math: r`\int \frac{1}{x^2 - a^2} \, dx = \frac{1}{2a} \ln\left|\frac{x - a}{x + a}\right| + C`,
    note: "حاصل تجزیه به کسرهای جزئی: 1/(2a) [ 1/(x-a) - 1/(x+a) ]",
  },
  {
    id: "r-4",
    category: "rational",
    title: "کسر با متغیر x در صورت",
    math: r`\int \frac{x}{x^2 \pm a^2} \, dx = \frac{1}{2} \ln|x^2 \pm a^2| + C`,
    note: "مشتق مخرج ۲x است؛ با ضرب و تقسیم در ۲ حل می‌شود",
  },
  {
    id: "r-5",
    category: "rational",
    title: "رادیکال در مخرج با x در صورت",
    math: r`\int \frac{x}{\sqrt{a^2 \pm x^2}} \, dx = \pm \sqrt{a^2 \pm x^2} + C`,
  },

  /* ------------------------------------------------------------------ */
  /*  6. Integration by Parts & Special Products (جزء به جزء)           */
  /* ------------------------------------------------------------------ */
  {
    id: "p-1",
    category: "parts",
    title: "قانون انتگرال‌گیری جزء به جزء (لاگرانژ)",
    math: r`\int u \, dv = u v - \int v \, du`,
    note: "اولویت انتخاب u با قاعده لیپت (LIPET): لگاریتمی، معکوس مثلثاتی، چندجمله‌ای، نمایی، مثلثاتی",
    wide: true,
  },
  {
    id: "p-2",
    category: "parts",
    title: "ضرب نمایی در سینوس",
    math: r`\int e^{ax} \sin bx \, dx = \frac{e^{ax}}{a^2 + b^2}\left(a \sin bx - b \cos bx\right) + C`,
    note: "در حل معادلات نوسانگر میرا و لاپلاس توابع e^{at} sin(bt) تکرار می‌شود",
    wide: true,
  },
  {
    id: "p-3",
    category: "parts",
    title: "ضرب نمایی در کسینوس",
    math: r`\int e^{ax} \cos bx \, dx = \frac{e^{ax}}{a^2 + b^2}\left(a \cos bx + b \sin bx\right) + C`,
    note: "با دو بار جزء به جزء گرفتن یا استفاده از فرمول اویلر اثبات می‌شود",
    wide: true,
  },
  {
    id: "p-4",
    category: "parts",
    title: "روش جدولی DI برای چندجمله‌ای در نمایی/مثلثاتی",
    math: r`\int P(x) e^{ax} \, dx = e^{ax} \left[ \frac{P(x)}{a} - \frac{P'(x)}{a^2} + \frac{P''(x)}{a^3} - \dots \right] + C`,
    note: "مشتق‌های متوالی چندجمله‌ای را تا صفر شدن با علامت متناوب در انتگرال‌های نمایی ضرب کنید",
    wide: true,
  },
];
