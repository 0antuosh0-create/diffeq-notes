import type { Section } from "../types";

const r = String.raw;

export const ch6Sections: Section[] = [
  {
    id: "c6-s1",
    chapterId: "c6",
    num: "۴.۱",
    title: "فصل ۶: تبدیل لاپلاس و خواص خطی",
    pages: "صفحه ۱۵",
    summary:
      "تبدیل لاپلاس یک تبدیل انتگرالی خطی است که توابع حوزه زمان $f(t)$ را به توابع حوزه فرکانس مختلط $F(s)$ می‌برد. این تبدیل دارای خاصیت خطی بودن در هر دو جهت مستقیم و معکوس است.",
    blocks: [
      {
        kind: "definition",
        label: "تعریف ۶-۱",
        title: "تبدیل لاپلاس و لاپلاس معکوس",
        body: "تبدیل لاپلاس تابع $f(t)$ که برای $t \\ge 0$ تعریف شده باشد، با نماد $\\mathcal{L}[f(t)]$ یا $F(s)$ نمایش داده می‌شود و عبارت است از:",
        math: [
          r`\mathcal{L}[f(t)] = \int_{0}^{+\infty} e^{-st} f(t)\, dt = F(s)`,
          r`f(t) = \mathcal{L}^{-1}[F(s)] \quad (\text{تبدیل معکوس لاپلاس})`,
        ],
      },
      {
        kind: "theorem",
        label: "قضیه ۶-۱",
        title: "خاصیت خطی تبدیل لاپلاس",
        body: "تبدیل لاپلاس یک اپراتور خطی است:",
        math: [
          r`\mathcal{L}\big[c_1 f_1(t) + c_2 f_2(t)\big] = c_1 \mathcal{L}[f_1(t)] + c_2 \mathcal{L}[f_2(t)]`,
        ],
      },
      {
        kind: "theorem",
        label: "قضیه ۶-۲",
        title: "خاصیت خطی معکوس تبدیل لاپلاس",
        body: "معکوس تبدیل لاپلاس نیز دارای خاصیت خطی است:",
        math: [
          r`\mathcal{L}^{-1}\big[c_1 F_1(s) + c_2 F_2(s)\big] = c_1 \mathcal{L}^{-1}[F_1(s)] + c_2 \mathcal{L}^{-1}[F_2(s)]`,
        ],
      },
      {
        kind: "example",
        example: {
          id: "ex-6-1",
          label: "مثال ۶-۱",
          title: "تبدیل لاپلاس تابع ثابت",
          statementText: "تبدیل لاپلاس $f(t) = 5$ را پیدا کنید.",
          statement: [],
          steps: [
            {
              title: "محاسبه انتگرال تعریف",
              math: [
                r`\mathcal{L}[f(t)] = \int_{0}^{+\infty} 5 e^{-st}\, dt = 5 \left[ -\frac{1}{s} e^{-st} \right]_0^{+\infty} = 5 \left( 0 - \left(-\frac{1}{s}\right) \right) = \frac{5}{s}`,
              ],
              note: "با فرض $s > 0$، در کران بالا $e^{-\infty} = 0$ است.",
            },
          ],
          answer: [r`f(t) = a \implies F(s) = \frac{a}{s}`],
        },
      },
    ],
  },
  {
    id: "c6-s2",
    chapterId: "c6",
    num: "۴.۲",
    title: "تبدیل توابع پایه: چندجمله‌ای، نمایی، مثلثاتی و هیپربولیک",
    pages: "صفحات ۱۶ و ۱۷",
    summary:
      "با استفاده از روش جزء به جزء و تعاریف اویلر، تبدیل لاپلاس توان‌های $t^n$، نمایی $e^{at}$، توابع مثلثاتی $\\cos at, \\sin at$ و توابع هیپربولیک $\\cosh at, \\sinh at$ محاسبه می‌شوند.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-6-5",
          label: "مثال ۶-۵",
          title: "تبدیل تابع خطی با روش جدولی (جزء به جزء)",
          statementText: "تبدیل لاپلاس $f(t) = 3t$ را پیدا کنید:",
          statement: [r`\mathcal{L}(3t) = \int_{0}^{+\infty} 3t e^{-st} \, dt = 3 \int_{0}^{+\infty} t e^{-st} \, dt`],
          steps: [
            {
              title: "جدول روش مشتق و انتگرال",
              math: [
                r`3 \left[ -\frac{t}{s} e^{-st} - \frac{1}{s^2} e^{-st} \right]_{0}^{+\infty} = 0 - \left( 0 - \frac{3}{s^2} \right) = \frac{3}{s^2}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}[at] = \frac{a}{s^2}`],
        },
      },
      {
        kind: "formula",
        label: "تبدیل لاپلاس توان‌های صحیح مثبت $t^n$",
        math: r`\mathcal{L}[t^n] = \frac{n!}{s^{n+1}} \qquad (n \in \mathbb{N})`,
        star: true,
      },
      {
        kind: "example",
        example: {
          id: "ex-6-7",
          label: "مثال ۶-۷",
          title: "تبدیل $t^4$",
          statementText: "تبدیل لاپلاس $t^4$ را محاسبه کنید:",
          statement: [],
          steps: [
            {
              title: "جایگذاری در فرمول توان",
              math: [r`\mathcal{L}[t^4] = \frac{4!}{s^5} = \frac{24}{s^5}`],
            },
          ],
          answer: [r`\mathcal{L}[t^4] = \frac{24}{s^5}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-8",
          label: "مثال ۶-۸",
          title: "تبدیل چندجمله‌ای درجه دوم",
          statementText: "تبدیل لاپلاس تابع $f(t) = 3t^2 - 4t + 2$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "اعمال خاصیت خطی",
              math: [
                r`\mathcal{L}[f(t)] = 3\mathcal{L}(t^2) - 4\mathcal{L}(t) + 2\mathcal{L}(1) = 3 \left(\frac{2!}{s^3}\right) - 4 \left(\frac{1!}{s^2}\right) + 2 \left(\frac{1}{s}\right)`,
                r`= \frac{6}{s^3} - \frac{4}{s^2} + \frac{2}{s}`,
              ],
            },
          ],
          answer: [r`F(s) = \frac{6}{s^3} - \frac{4}{s^2} + \frac{2}{s}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-9",
          label: "مثال ۶-۹",
          title: "تبدیل تابع نمایی $e^{at}$",
          statementText: "تبدیل لاپلاس $f(t) = e^{at}$ را بیابید:",
          statement: [],
          steps: [
            {
              title: "محاسبه انتگرال مستقیم",
              math: [
                r`\mathcal{L}(e^{at}) = \int_{0}^{\infty} e^{at} \cdot e^{-st} \, dt = \int_{0}^{\infty} e^{-(s-a)t} \, dt = \left[ \frac{-1}{s-a} e^{-(s-a)t} \right]_{0}^{\infty} = \frac{1}{s-a} \quad (s > a)`,
              ],
            },
          ],
          answer: [r`\mathcal{L}[e^{at}] = \frac{1}{s-a}`],
        },
      },
      {
        kind: "formula",
        label: "تبدیل لاپلاس توابع مثلثاتی",
        math: r`\mathcal{L}[\cos at] = \frac{s}{s^2 + a^2} \qquad\qquad \mathcal{L}[\sin at] = \frac{a}{s^2 + a^2}`,
        star: true,
      },
      {
        kind: "example",
        example: {
          id: "ex-6-11",
          label: "مثال ۶-۱۱",
          title: "تبدیل توابع هیپربولیک",
          statementText: "تبدیل لاپلاس $\\cosh at$ و $\\sinh at$ را به دست آورید:",
          statement: [],
          steps: [
            {
              title: "تبدیل کسینوس هیپربولیک",
              math: [
                r`\cosh at = \frac{e^{at} + e^{-at}}{2} \implies \mathcal{L}[\cosh at] = \frac{1}{2} \left( \frac{1}{s-a} + \frac{1}{s+a} \right) = \frac{1}{2} \left( \frac{2s}{s^2 - a^2} \right) = \frac{s}{s^2 - a^2}`,
              ],
            },
            {
              title: "تبدیل سینوس هیپربولیک",
              math: [
                r`\sinh at = \frac{e^{at} - e^{-at}}{2} \implies \mathcal{L}[\sinh at] = \frac{1}{2} \left( \frac{1}{s-a} - \frac{1}{s+a} \right) = \frac{a}{s^2 - a^2}`,
              ],
            },
          ],
          answer: [
            r`\mathcal{L}[\cosh at] = \frac{s}{s^2 - a^2} \qquad\qquad \mathcal{L}[\sinh at] = \frac{a}{s^2 - a^2}`,
          ],
        },
      },
    ],
  },
  {
    id: "c6-s3",
    chapterId: "c6",
    num: "۴.۳",
    title: "جدول یک کتاب و تبدیل معکوس با تجزیه کسرها",
    pages: "صفحه ۱۸",
    session: "جلسه ۲۷ام (۴/۷)",
    summary:
      "جدول یک، مرجع اصلی تبدیل‌های استاندارد است. تبدیل معکوس عبارات کسری پیچیده با روش تجزیه به کسرهای جزئی و تفکیک به فرم‌های استاندارد جدول محاسبه می‌شود.",
    blocks: [
      {
        kind: "table",
        caption: "جدول یک — مرجع تبدیل لاپلاس (بخش اول)",
        headers: [r`f(t)`, r`a`, r`a t^n`, r`k t^a \quad (a > -1)`, r`k e^{at}`],
        rows: [
          [
            r`F(s)`,
            r`\frac{a}{s}`,
            r`\frac{a\,n!}{s^{n+1}}`,
            r`k \frac{\Gamma(a+1)}{s^{a+1}}`,
            r`\frac{k}{s-a} \quad (s > a)`,
          ],
        ],
      },
      {
        kind: "table",
        caption: "جدول یک — مرجع تبدیل لاپلاس (بخش دوم)",
        headers: [r`f(t)`, r`k\cos at`, r`k\sin at`, r`k\cosh at`, r`k\sinh at`],
        rows: [
          [
            r`F(s)`,
            r`k \frac{s}{s^2 + a^2}`,
            r`k \frac{a}{s^2 + a^2}`,
            r`k \frac{s}{s^2 - a^2}`,
            r`k \frac{a}{s^2 - a^2}`,
          ],
        ],
      },
      {
        kind: "example",
        example: {
          id: "ex-6-12",
          label: "مثال ۶-۱۲",
          title: "تبدیل لاپلاس عبارت ترکیبی",
          statementText: "تبدیل لاپلاس تابع زیر را پیدا کنید:",
          statement: [r`f(t) = 4t^2 - 2\cos 3t + 5e^{-t} - 3\sinh 2t + 1`],
          steps: [
            {
              title: "اعمال مستقیم جدول تبدیل",
              math: [
                r`\mathcal{L}[f(t)] = 4 \left(\frac{2!}{s^3}\right) - 2\left(\frac{s}{s^2 + 9}\right) + 5\left(\frac{1}{s+1}\right) - 3\left(\frac{2}{s^2 - 4}\right) + \frac{1}{s}`,
                r`= \frac{8}{s^3} - \frac{2s}{s^2 + 9} + \frac{5}{s+1} - \frac{6}{s^2 - 4} + \frac{1}{s}`,
              ],
            },
          ],
          answer: [r`F(s) = \frac{8}{s^3} - \frac{2s}{s^2 + 9} + \frac{5}{s+1} - \frac{6}{s^2 - 4} + \frac{1}{s}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-13",
          label: "مثال ۶-۱۳",
          title: "تبدیل معکوس با روش تجزیه به کسرهای جزئی",
          statementText: "تبدیل معکوس تابع زیر را پیدا کنید:",
          statement: [r`F(s) = \frac{5s - 1}{s(s^2+1)(s-1)}`],
          steps: [
            {
              title: "۱) تجزیه به کسرهای جزئی",
              math: [
                r`\frac{5s - 1}{s(s^2+1)(s-1)} = \frac{A}{s} + \frac{B}{s-1} + \frac{Cs + D}{s^2+1}`,
                r`5s - 1 = A(s-1)(s^2+1) + Bs(s^2+1) + (Cs+D)s(s-1)`,
              ],
            },
            {
              title: "۲) تعیین ضرایب با جایگذاری مقادیر خاص",
              math: [
                r`s = 0 \implies -1 = -A \implies A = 1`,
                r`s = 1 \implies 4 = 2B \implies B = 2`,
                r`s = -1 \implies -6 = -4A - 2B - 2C + 2D \implies -2C + 2D = 2`,
                r`s = 2 \implies 9 = 5A + 10B + 4C + 2D \implies 4C + 2D = -16`,
                r`\begin{cases} -2C + 2D = 2 \\ 4C + 2D = -16 \end{cases} \implies D = -2, \quad C = -3`,
              ],
            },
            {
              title: "۳) جایگذاری و گرفتن لاپلاس معکوس",
              math: [
                r`F(s) = \frac{1}{s} + \frac{2}{s-1} - \frac{3s+2}{s^2+1} = \frac{1}{s} + \frac{2}{s-1} - 3\frac{s}{s^2+1} - 2\frac{1}{s^2+1}`,
                r`\mathcal{L}^{-1}[F(s)] = 1 + 2e^t - 3\cos t - 2\sin t`,
              ],
            },
          ],
          answer: [r`f(t) = 1 + 2e^t - 3\cos t - 2\sin t`],
        },
      },
    ],
  },
  {
    id: "c6-s4",
    chapterId: "c6",
    num: "۴.۴",
    title: "تابع گاما و توان‌های کسری",
    pages: "صفحه ۱۹",
    summary:
      "تابع گاما $\\Gamma(p) = \\int_0^{\\infty} t^{p-1} e^{-t} dt$ مفهوم فاکتوریل را برای اعداد حقیقی و کسری تعمیم می‌دهد. تبدیل توان‌های حقیقی با $\\mathcal{L}[t^a] = \\frac{\\Gamma(a+1)}{s^{a+1}}$ محاسبه می‌شود.",
    blocks: [
      {
        kind: "definition",
        label: "تعریف",
        title: "تابع گاما",
        body: "تابع گاما برای $p > 0$ به صورت زیر تعریف می‌شود:",
        math: [r`\Gamma(p) = \int_{0}^{+\infty} t^{p-1} e^{-t} \, dt \qquad (p > 0)`],
      },
      {
        kind: "theorem",
        label: "قضایای تابع گاما",
        title: "روابط بازگشتی گاما",
        body: "خواص مهم تابع گاما:",
        math: [
          r`\text{الف) } \Gamma(p+1) = p\,\Gamma(p)`,
          r`\text{ب) } \Gamma(n+1) = n! \qquad (n \in \mathbb{N} \cup \{0\})`,
          r`\Gamma\left(\frac{1}{2}\right) = \sqrt{\pi} \qquad \Gamma\left(\frac{3}{2}\right) = \frac{\sqrt{\pi}}{2} \qquad \Gamma\left(\frac{5}{2}\right) = \frac{3\sqrt{\pi}}{4}`,
        ],
      },
      {
        kind: "formula",
        label: "تبدیل لاپلاس توان‌های کسری",
        math: r`\mathcal{L}[t^a] = \frac{\Gamma(a+1)}{s^{a+1}} \qquad (a > -1)`,
        star: true,
      },
      {
        kind: "example",
        example: {
          id: "ex-6-14",
          label: "مثال ۶-۱۴",
          title: "تبدیل لاپلاس $f(t) = \\frac{1}{\\sqrt{t}}$",
          statementText: "تبدیل لاپلاس تابع $f(t) = \\dfrac{1}{\\sqrt{t}}$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "استفاده از فرمول گاما با توان منفی یک‌دوم",
              math: [
                r`\mathcal{L}\left[\frac{1}{\sqrt{t}}\right] = \mathcal{L}[t^{-1/2}] = \frac{\Gamma\left(-\frac{1}{2} + 1\right)}{s^{-1/2 + 1}} = \frac{\Gamma\left(\frac{1}{2}\right)}{\sqrt{s}} = \frac{\sqrt{\pi}}{\sqrt{s}} = \sqrt{\frac{\pi}{s}} \quad (s > 0)`,
              ],
            },
          ],
          answer: [r`\mathcal{L}\left[\frac{1}{\sqrt{t}}\right] = \sqrt{\frac{\pi}{s}}`],
        },
      },
    ],
  },
  {
    id: "c6-s5",
    chapterId: "c6",
    num: "۴.۵",
    title: "توابع پاره‌ای و قضیه تغییر مقیاس متغیر",
    pages: "صفحات ۲۰ و ۲۱",
    session: "جلسه ۲۸ام",
    summary:
      "برای توابع چندضابطه‌ای (پاره‌ای)، انتگرال تبدیل لاپلاس روی بازه‌های متوالی شکسته می‌شود. همچنین طبق قضیه تغییر مقیاس، تغییر مقیاس در زمان $t \\to bt$ با ضریب $\\frac{1}{b} F(\\frac{s}{b})$ در حوزه لاپلاس همراه است.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-6-15",
          label: "مثال ۶-۱۵",
          title: "تبدیل لاپلاس تابع پاره‌ای",
          statementText: "تبدیل لاپلاس تابع زیر را به دست آورید:",
          statement: [
            r`f(t) = \begin{cases} t & 0 \le t \le 1 \\ 0 & t > 1 \end{cases}`,
          ],
          steps: [
            {
              title: "تفکیک بازه‌های انتگرال‌گیری",
              math: [
                r`\mathcal{L}[f(t)] = \int_{0}^{1} t e^{-st} \, dt + \int_{1}^{+\infty} 0 \cdot e^{-st} \, dt = \left[ -\frac{t}{s} e^{-st} - \frac{1}{s^2} e^{-st} \right]_{0}^{1}`,
                r`= \left( -\frac{1}{s} e^{-s} - \frac{1}{s^2} e^{-s} \right) - \left( 0 - \frac{1}{s^2} \right) = -\frac{1}{s} e^{-s} - \frac{1}{s^2} e^{-s} + \frac{1}{s^2}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}[f(t)] = -\frac{1}{s} e^{-s} - \frac{1}{s^2} e^{-s} + \frac{1}{s^2}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-16",
          label: "مثال ۶-۱۶",
          title: "تبدیل معکوس با فرم هیپربولیک",
          statementText: "تبدیل معکوس تابع $F(s) = \\dfrac{s+3}{s^2-2}$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "تفکیک کسر به توابع هیپربولیک",
              math: [
                r`F(s) = \frac{s}{s^2-2} + 3 \cdot \frac{1}{s^2-2} = \frac{s}{s^2 - (\sqrt{2})^2} + \frac{3}{\sqrt{2}} \cdot \frac{\sqrt{2}}{s^2 - (\sqrt{2})^2}`,
                r`\mathcal{L}^{-1}[F(s)] = \cosh(\sqrt{2}t) + \frac{3}{\sqrt{2}} \sinh(\sqrt{2}t)`,
              ],
            },
          ],
          answer: [r`f(t) = \cosh(\sqrt{2}t) + \frac{3}{\sqrt{2}} \sinh(\sqrt{2}t)`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-17",
          label: "مثال ۶-۱۷",
          title: "تبدیل معکوس با فرم مثلثاتی",
          statementText: "تبدیل معکوس تابع $F(s) = \\dfrac{2s+1}{s^2+4}$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "تفکیک کسر",
              math: [
                r`\mathcal{L}^{-1}[F(s)] = 2 \mathcal{L}^{-1}\left[\frac{s}{s^2+4}\right] + \frac{1}{2} \mathcal{L}^{-1}\left[\frac{2}{s^2+4}\right] = 2\cos 2t + \frac{1}{2}\sin 2t`,
              ],
            },
          ],
          answer: [r`f(t) = 2\cos 2t + \frac{1}{2}\sin 2t`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-18",
          label: "مثال ۶-۱۸",
          title: "تبدیل با زاویه افزوده مثلثاتی",
          statementText: "تبدیل لاپلاس $f(t) = \\sin\\left(3t + \\frac{\\pi}{4}\\right)$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "بسط با اتحاد مثلثاتی $\\sin(\\alpha + \\beta)$",
              math: [
                r`f(t) = \sin 3t \cos \frac{\pi}{4} + \cos 3t \sin \frac{\pi}{4} = \frac{\sqrt{2}}{2} (\sin 3t + \cos 3t)`,
                r`\mathcal{L}[f(t)] = \frac{\sqrt{2}}{2} \left( \frac{3}{s^2+9} + \frac{s}{s^2+9} \right) = \frac{\sqrt{2}}{2} \left( \frac{s+3}{s^2+9} \right)`,
              ],
            },
          ],
          answer: [r`F(s) = \frac{\sqrt{2}}{2} \left( \frac{s+3}{s^2+9} \right)`],
        },
      },
      {
        kind: "theorem",
        label: "قضیه ۶-۵",
        title: "قضیه تغییر مقیاس متغیر",
        body: "اگر $\\mathcal{L}[f(t)] = F(s)$ باشد، برای $b > 0$ و $k > 0$ داریم:",
        math: [
          r`\mathcal{L}\big[f(bt)\big] = \frac{1}{b} F\left(\frac{s}{b}\right) \qquad (\text{قسمت ۱})`,
          r`\mathcal{L}^{-1}\big[F(ks)\big] = \frac{1}{k} f\left(\frac{t}{k}\right) \qquad (\text{قسمت ۲})`,
        ],
      },
      {
        kind: "example",
        example: {
          id: "ex-6-19",
          label: "مثال ۶-۱۹",
          title: "کاربرد قضیه تغییر مقیاس",
          statementText:
            "اگر $\\mathcal{L}\\left(\\frac{1 - e^{-t}}{t}\\right) = \\ln\\left(1 + \\frac{1}{s}\\right)$ باشد، تبدیل لاپلاس $f(t) = \\frac{1 - e^{-2t}}{2t}$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "اعمال قضیه با $b = 2$",
              math: [
                r`t \to 2t \xrightarrow{\text{قضیه ۶-۵}} \mathcal{L}\left(\frac{1 - e^{-2t}}{2t}\right) = \frac{1}{2} \ln\left(1 + \frac{1}{\frac{s}{2}}\right) = \frac{1}{2} \ln\left(1 + \frac{2}{s}\right)`,
              ],
            },
          ],
          answer: [r`F(s) = \frac{1}{2} \ln\left(1 + \frac{2}{s}\right)`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-20",
          label: "مثال ۶-۲۰",
          title: "تبدیل معکوس با تغییر مقیاس",
          statementText: "تبدیل عکس $F(s) = \\dfrac{1}{4s^2 + 9}$ را پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "تغییر متغیر $s \\to 2s$",
              math: [
                r`F(s) = \frac{1}{(2s)^2 + 9}`,
                r`\mathcal{L}^{-1}\left[\frac{1}{s^2 + 9}\right] = \frac{1}{3}\sin 3t \xrightarrow{s \to 2s} \mathcal{L}^{-1}[F(s)] = \frac{1}{2} \times \frac{1}{3} \sin\left(\frac{3t}{2}\right) = \frac{1}{6} \sin\left(\frac{3}{2}t\right)`,
              ],
            },
          ],
          answer: [r`f(t) = \frac{1}{6} \sin\left(\frac{3}{2}t\right)`],
        },
      },
    ],
  },
  {
    id: "c6-s6",
    chapterId: "c6",
    num: "۴.۶",
    title: "تبدیل لاپلاس مشتقات مراتب اول، دوم و سوم",
    pages: "صفحات ۲۲ و ۲۳",
    summary:
      "تبدیل لاپلاس مشتقات، مشتق‌گیری را به ضرب در $s$ و کسر شرایط اولیه در $t = 0$ تبدیل می‌کند. این قضیه اساس حل معادلات دیفرانسیل با تبدیل لاپلاس است.",
    blocks: [
      {
        kind: "formula",
        label: "فرمول‌های تبدیل لاپلاس مشتق",
        math: r`\begin{cases} \mathcal{L}(f'(t)) = s F(s) - f(0) \\ \mathcal{L}(f''(t)) = s^2 F(s) - s f(0) - f'(0) \\ \mathcal{L}(f'''(t)) = s^3 F(s) - s^2 f(0) - s f'(0) - f''(0) \end{cases}`,
        star: true,
      },
      {
        kind: "example",
        example: {
          id: "ex-6-21",
          label: "مثال ۶-۲۱",
          title: "محاسبه $\\mathcal{L}(t)$ با استفاده از تبدیل مشتق",
          statementText: "تبدیل لاپلاس تابع $f(t) = t$ را با استفاده از تبدیل لاپلاس مشتق پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "محاسبه مشتق و اعمال فرمول",
              math: [
                r`f(t) = t \implies f'(t) = 1, \quad f(0) = 0`,
                r`\mathcal{L}(f'(t)) = s F(s) - f(0) \implies \mathcal{L}(1) = s F(s) - 0 \implies \frac{1}{s} = s F(s) \implies F(s) = \frac{1}{s^2}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}(t) = \frac{1}{s^2}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-22",
          label: "مثال ۶-۲۲",
          title: "محاسبه $\\mathcal{L}(\\sin t)$ با استفاده از تبدیل مشتق دوم",
          statementText: "تبدیل لاپلاس $f(t) = \\sin t$ را با استفاده از تبدیل لاپلاس مشتق پیدا کنید:",
          statement: [],
          steps: [
            {
              title: "محاسبه مشتقات",
              math: [
                r`f(t) = \sin t \implies f'(t) = \cos t \implies f''(t) = -\sin t`,
                r`f(0) = 0, \quad f'(0) = 1`,
              ],
            },
            {
              title: "اعمال رابطه مشتق دوم",
              math: [
                r`\mathcal{L}(f''(t)) = s^2 F(s) - s f(0) - f'(0) \implies -\mathcal{L}(\sin t) = s^2 \mathcal{L}(\sin t) - s(0) - 1`,
                r`\mathcal{L}(\sin t)(s^2 + 1) = 1 \implies \mathcal{L}(\sin t) = \frac{1}{s^2 + 1}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}(\sin t) = \frac{1}{s^2 + 1}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-24",
          label: "مثال ۶-۲۴",
          title: r`تبدیل لاپلاس تابع $f(t) = t\cos 2t$`,
          statementText: r`تبدیل لاپلاس تابع $f(t) = t\cos 2t$ را با استفاده از رابطه تبدیل مشتق پیدا کنید:`,
          statement: [],
          steps: [
            {
              title: "محاسبه مشتق اول و دوم",
              math: [
                r`f'(t) = \cos 2t - 2t\sin 2t \implies f(0) = 0, \quad f'(0) = 1`,
                r`f''(t) = -2\sin 2t - 2\sin 2t - 4t\cos 2t = -4\sin 2t - 4t\cos 2t`,
              ],
            },
            {
              title: "اعمال تبدیل لاپلاس مشتق دوم",
              math: [
                r`\mathcal{L}(f''(t)) = s^2 \mathcal{L}(f(t)) - s f(0) - f'(0)`,
                r`-4 \mathcal{L}(\sin 2t) - 4 \mathcal{L}(t\cos 2t) = s^2 \mathcal{L}(t\cos 2t) - 1`,
                r`-4\left(\frac{2}{s^2+4}\right) + 1 = \mathcal{L}(t\cos 2t)(s^2 + 4)`,
                r`\frac{s^2 + 4 - 8}{s^2 + 4} = \mathcal{L}(t\cos 2t)(s^2 + 4) \implies \mathcal{L}(t\cos 2t) = \frac{s^2 - 4}{(s^2 + 4)^2}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}(t\cos 2t) = \frac{s^2 - 4}{(s^2 + 4)^2}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-25",
          label: "مثال ۶-۲۵",
          title: "تبدیل لاپلاس $\\cos^2 t$ با اتحاد نصف کمان",
          statementText: "تبدیل لاپلاس تابع $f(t) = \\cos^2 t$ را حساب کنید:",
          statement: [],
          steps: [
            {
              title: "تبدیل با اتحاد مثلثاتی $\\cos^2 t = \\frac{1 + \\cos 2t}{2}$",
              math: [
                r`\mathcal{L}[\cos^2 t] = \frac{1}{2} \mathcal{L}(1) + \frac{1}{2} \mathcal{L}(\cos 2t) = \frac{1}{2}\left(\frac{1}{s}\right) + \frac{1}{2}\left(\frac{s}{s^2+4}\right) = \frac{s^2 + 2}{s(s^2 + 4)}`,
              ],
            },
          ],
          answer: [r`\mathcal{L}[\cos^2 t] = \frac{s^2 + 2}{s(s^2 + 4)}`],
        },
      },
    ],
  },
  {
    id: "c6-s7",
    chapterId: "c6",
    num: "۴.۷",
    title: "حل معادلات دیفرانسیل به کمک تبدیل لاپلاس",
    pages: "صفحات ۲۴ و ۲۵",
    summary:
      "برای حل مسائل مقدار اولیه، از معادله دیفرانسیل تبدیل لاپلاس می‌گیریم، با اعمال شرایط اولیه معادله جبری برحسب $Y(s)$ را حل می‌کنیم، و در نهایت با تجزیه به کسرهای جزئی و لاپلاس معکوس به جواب $y(t)$ می‌رسیم.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-6-27",
          label: "مثال ۶-۲۷",
          title: "حل مسئله مقدار اولیه معادله همگن مرتبه دوم",
          statementText: "معادله دیفرانسیل زیر را به کمک تبدیل لاپلاس حل کنید:",
          statement: [r`y'' - 2y' - 3y = 0, \qquad y(0) = 1, \quad y'(0) = 7`],
          steps: [
            {
              title: "۱) گرفتن تبدیل لاپلاس از طرفین معادله",
              math: [
                r`\mathcal{L}(y'') - 2 \mathcal{L}(y') - 3 \mathcal{L}(y) = 0`,
                r`\Big(s^2 Y(s) - s y(0) - y'(0)\Big) - 2\Big(s Y(s) - y(0)\Big) - 3Y(s) = 0`,
                r`s^2 Y(s) - s(1) - 7 - 2s Y(s) + 2(1) - 3Y(s) = 0`,
              ],
            },
            {
              title: "۲) دسته‌بندی و حل برای $Y(s)$",
              math: [
                r`Y(s)(s^2 - 2s - 3) = s + 5 \implies Y(s) = \frac{s + 5}{(s - 3)(s + 1)}`,
              ],
            },
            {
              title: "۳) تجزیه به کسرهای جزئی",
              math: [
                r`\frac{s + 5}{(s - 3)(s + 1)} = \frac{A}{s - 3} + \frac{B}{s + 1} \implies \begin{cases} A = 2 \\ B = -1 \end{cases} \implies Y(s) = \frac{2}{s - 3} - \frac{1}{s + 1}`,
              ],
            },
            {
              title: "۴) گرفتن لاپلاس معکوس",
              math: [
                r`y(t) = \mathcal{L}^{-1}[Y(s)] = 2 \mathcal{L}^{-1}\left[\frac{1}{s - 3}\right] - \mathcal{L}^{-1}\left[\frac{1}{s + 1}\right] = 2e^{3t} - e^{-t}`,
              ],
            },
          ],
          answer: [r`y(t) = 2e^{3t} - e^{-t}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-6-28",
          label: "مثال ۶-۲۸",
          title: "حل مسئله مقدار اولیه معادله غیرهمگن",
          statementText: "معادله دیفرانسیل زیر را با کمک تبدیل لاپلاس حل کنید:",
          statement: [r`y'' - 3y' + 2y = 2e^{-t}, \qquad y(0) = 2, \quad y'(0) = -1`],
          steps: [
            {
              title: "۱) گرفتن تبدیل لاپلاس با اعمال شرایط اولیه",
              math: [
                r`\mathcal{L}(y'') - 3\mathcal{L}(y') + 2\mathcal{L}(y) = 2\mathcal{L}(e^{-t})`,
                r`s^2 Y(s) - 2s - (-1) - 3\big(s Y(s) - 2\big) + 2Y(s) = \frac{2}{s + 1}`,
                r`s^2 Y(s) - 2s + 1 - 3s Y(s) + 6 + 2Y(s) = \frac{2}{s + 1}`,
              ],
            },
            {
              title: "۲) حل برای $Y(s)$",
              math: [
                r`Y(s)(s^2 - 3s + 2) = \frac{2}{s + 1} + 2s - 7 = \frac{2 + (2s - 7)(s + 1)}{s + 1} = \frac{2s^2 - 5s - 5}{s + 1}`,
                r`Y(s) = \frac{2s^2 - 5s - 5}{(s + 1)(s - 1)(s - 2)}`,
              ],
            },
            {
              title: "۳) تجزیه به کسرهای جزئی",
              math: [
                r`\frac{2s^2 - 5s - 5}{(s + 1)(s - 1)(s - 2)} = \frac{A}{s + 1} + \frac{B}{s - 1} + \frac{C}{s - 2} \implies \begin{cases} A = \frac{1}{3} \\ B = 4 \\ C = -\frac{7}{3} \end{cases}`,
              ],
            },
            {
              title: "۴) گرفتن لاپلاس معکوس",
              math: [
                r`y(t) = \frac{1}{3}\mathcal{L}^{-1}\left[\frac{1}{s+1}\right] + 4\mathcal{L}^{-1}\left[\frac{1}{s-1}\right] - \frac{7}{3}\mathcal{L}^{-1}\left[\frac{1}{s-2}\right] = \frac{1}{3}e^{-t} + 4e^t - \frac{7}{3}e^{2t}`,
              ],
            },
          ],
          answer: [r`y(t) = \frac{1}{3}e^{-t} + 4e^t - \frac{7}{3}e^{2t}`],
        },
      },
    ],
  },
];
