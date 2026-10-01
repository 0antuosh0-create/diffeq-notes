import type { Section } from "../types";

const r = String.raw;

export const variationSections: Section[] = [
  {
    id: "var-s1",
    chapterId: "var",
    num: "۲.۱",
    title: "روش عمومی برای حل معادلات خطی غیرهمگن (روش تغییر پارامترها)",
    pages: "صفحات ۶ و ۷",
    summary:
      "روش تغییر پارامترها (لاگرانژ) برای حل معادله خطی غیرهمگن $y'' + P(x)y' + q(x)y = R(x)$ به کار می‌رود. در این روش نیاز به شرط ثابت بودن ضرایب یا فرم خاص $R(x)$ نیست، اما جواب عمومی معادله همگن $y_h = C_1 y_1 + C_2 y_2$ باید مشخص باشد.",
    blocks: [
      {
        kind: "text",
        text: "معادله خطی غیرهمگن مرتبه دوم در حالت استاندارد به صورت زیر است:",
      },
      {
        kind: "formula",
        label: "فرم استاندارد معادله غیرهمگن",
        math: r`y'' + P(x)y' + q(x)y = R(x) \qquad (\star)`,
      },
      {
        kind: "text",
        text: "با داشتن جواب عمومی معادله همگن $y_h = C_1 y_1 + C_2 y_2$، توابع مجهول $v_1(x)$ و $v_2(x)$ را چنان می‌یابیم که جواب خصوصی به صورت زیر باشد:",
      },
      {
        kind: "formula",
        label: "فرض جواب خصوصی",
        math: r`y_p = v_1(x) y_1 + v_2(x) y_2`,
      },
      {
        kind: "text",
        text: "با مشتق‌گیری اول داریم:",
      },
      {
        kind: "formula",
        math: r`y_p' = v_1' y_1 + v_1 y_1' + v_2' y_2 + v_2 y_2'`,
      },
      {
        kind: "text",
        text: "برای ساده‌تر شدن تعیین مشتق‌ها، قرارداد (فرض) می‌کنیم که:",
      },
      {
        kind: "formula",
        label: "قرارداد اساسی",
        math: r`v_1' y_1 + v_2' y_2 = 0`,
        star: true,
      },
      {
        kind: "text",
        text: "در نتیجه مشتق دوم به دست می‌آید و با جایگذاری در معادله $(\\star)$، جملات متناظر همگن صفر می‌شوند و به دستگاه دو معادله و دو مجهول زیر برای $v_1'$ و $v_2'$ می‌رسیم:",
      },
      {
        kind: "formula",
        label: "دستگاه اصلی روش تغییر پارامترها",
        math: r`\begin{cases} v_1' y_1 + v_2' y_2 = 0 \\ v_1' y_1' + v_2' y_2' = R(x) \end{cases}`,
        star: true,
      },
      {
        kind: "text",
        text: "با استفاده از قاعده کرامر و دترمینان رونسکین $W$:",
      },
      {
        kind: "formula",
        label: "رونسکین ضرایب",
        math: r`W = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1'`,
      },
      {
        kind: "formula",
        label: "فرمول‌های محاسبه $v_1$ و $v_2$",
        math: r`v_1 = \int \frac{-R(x) y_2}{W} \, dx \qquad\qquad v_2 = \int \frac{R(x) y_1}{W} \, dx`,
        star: true,
      },
      {
        kind: "note",
        variant: "warn",
        title: "تذکر مهم درباره ثابت انتگرال‌گیری",
        text: "در انتگرال‌های روش تغییر پارامترها، ثابت انتگرال‌گیری را منظور نمی‌کنیم؛ زیرا $y_p$ جواب خصوصی است و فاقد پارامتر ثابت می‌باشد.",
      },
    ],
  },
  {
    id: "var-s2",
    chapterId: "var",
    num: "۲.۲",
    title: "مثال ۳-۵۱: حل معادله با سمت راست کسری مثلثاتی",
    pages: "صفحات ۷ و ۸",
    session: "جلسه ۲۳ام",
    summary:
      "چون سمت راست معادله $R(x) = \\frac{e^{-x}}{\\cos^3 x}$ است و حالت خاص ضرایب نامعین نیست، از روش تغییر پارامترها استفاده می‌کنیم. پس از محاسبه رونسکین $W = e^{-2x}$، انتگرال‌های $v_1$ و $v_2$ با تغییر متغیر $u = \\cos x$ محاسبه می‌شوند.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-3-51",
          label: "مثال ۳-۵۱",
          title: "معادله با $R(x) = \\frac{e^{-x}}{\\cos^3 x}$",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y'' + 2y' + 2y = \frac{e^{-x}}{\cos^3 x}`],
          method: "چون $R(x)$ حالت خاص نیست $\\leftarrow$ روش تغییر پارامترها",
          steps: [
            {
              title: "۱) حل حالت همگن",
              math: [
                r`y'' + 2y' + 2y = 0 \implies t^2 + 2t + 2 = 0`,
                r`\Delta = 4 - 8 = -4 \implies t = \frac{-2 \pm 2i}{2} = -1 \pm i`,
                r`y_g = e^{-x}\left(C_1 \cos x + C_2 \sin x\right)`,
              ],
              note: r`بنابراین توابع پایه عبارتند از: $y_1 = e^{-x}\cos x$ و $y_2 = e^{-x}\sin x$`,
            },
            {
              title: "۲) مشتقات توابع پایه و محاسبه رونسکین (W)",
              math: [
                r`y_1' = -e^{-x}\cos x - e^{-x}\sin x = -e^{-x}(\cos x + \sin x)`,
                r`y_2' = -e^{-x}\sin x + e^{-x}\cos x = e^{-x}(\cos x - \sin x)`,
                r`W = \begin{vmatrix} e^{-x}\cos x & e^{-x}\sin x \\ -e^{-x}(\cos x + \sin x) & e^{-x}(\cos x - \sin x) \end{vmatrix}`,
                r`W = e^{-2x}\left(\cos^2 x - \sin x\cos x + \sin x\cos x + \sin^2 x\right) = e^{-2x}`,
              ],
            },
            {
              title: "۳) محاسبه $v_1$",
              math: [
                r`v_1 = \int \frac{-R(x) y_2}{W} \, dx = \int \frac{-\frac{e^{-x}}{\cos^3 x} \cdot e^{-x}\sin x}{e^{-2x}} \, dx = \int \frac{-\sin x}{\cos^3 x} \, dx`,
                r`u = \cos x \implies du = -\sin x \, dx \implies v_1 = \int \frac{du}{u^3} = \int u^{-3} \, du = -\frac{1}{2u^2} = -\frac{1}{2\cos^2 x}`,
              ],
            },
            {
              title: "۴) محاسبه $v_2$",
              math: [
                r`v_2 = \int \frac{R(x) y_1}{W} \, dx = \int \frac{\frac{e^{-x}}{\cos^3 x} \cdot e^{-x}\cos x}{e^{-2x}} \, dx = \int \frac{1}{\cos^2 x} \, dx = \int (1 + \tan^2 x) \, dx = \tan x`,
              ],
            },
            {
              title: "۵) تشکیل و ساده‌سازی جواب خصوصی $y_p$",
              math: [
                r`y_p = v_1 y_1 + v_2 y_2 = \left(-\frac{1}{2\cos^2 x}\right) e^{-x}\cos x + (\tan x) e^{-x}\sin x`,
                r`y_p = -e^{-x}\left(\frac{1}{2\cos x} - \frac{\sin^2 x}{\cos x}\right) = -e^{-x}\left(\frac{1 - 2\sin^2 x}{2\cos x}\right) = -e^{-x}\left(\frac{\cos 2x}{2\cos x}\right)`,
              ],
            },
          ],
          answer: [
            r`y = y_g + y_p \implies y = e^{-x}\left(C_1 \cos x + C_2 \sin x - \frac{\cos 2x}{2\cos x}\right)`,
          ],
        },
      },
    ],
  },
  {
    id: "var-s3",
    chapterId: "var",
    num: "۲.۳",
    title: "مثال ۳-۵۲: با $R(x) = 4e^{-x}\\ln x$",
    pages: "صفحه ۹",
    session: "جلسه ۲۴ام (۳/۲۶)",
    summary:
      "معادله دارای ریشه مضاعف در حالت همگن است و $R(x)$ شامل عبارت لگاریتمی $\\ln x$ می‌باشد. انتگرال‌های $v_1$ و $v_2$ به روش جزء به جزء حل می‌شوند.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-3-52",
          label: "مثال ۳-۵۲",
          title: "معادله خطی با لگاریتم طبیعی",
          statementText: "معادله دیفرانسیل زیر را حل کنید:",
          statement: [r`y'' + 2y' + y = 4e^{-x}\ln x`],
          method: "روش تغییر پارامترها",
          steps: [
            {
              title: "۱) حل حالت همگن",
              math: [
                r`y'' + 2y' + y = 0 \implies t^2 + 2t + 1 = 0 \implies (t+1)^2 = 0 \implies t = -1 \quad (\text{ریشه مضاعف})`,
                r`y_g = (C_1 + C_2 x)e^{-x} \implies y_1 = e^{-x}, \quad y_2 = x e^{-x}`,
                r`y_1' = -e^{-x}, \quad y_2' = e^{-x} - x e^{-x} = e^{-x}(1-x)`,
              ],
            },
            {
              title: "۲) محاسبه رونسکین (W)",
              math: [
                r`W = \begin{vmatrix} e^{-x} & x e^{-x} \\ -e^{-x} & e^{-x}(1-x) \end{vmatrix} = e^{-2x}(1-x) + x e^{-2x} = e^{-2x}`,
              ],
            },
            {
              title: "۳) محاسبه $v_1$ با انتگرال جزء به جزء",
              math: [
                r`v_1 = \int \frac{-4e^{-x}\ln x \cdot x e^{-x}}{e^{-2x}} \, dx = -4\int x\ln x \, dx`,
                r`\begin{cases} u = \ln x \implies du = \frac{dx}{x} \\ dv = x\,dx \implies v = \frac{x^2}{2} \end{cases} \implies v_1 = -4\left(\frac{x^2}{2}\ln x - \int \frac{x^2}{2} \cdot \frac{dx}{x}\right) = -4\left(\frac{x^2}{2}\ln x - \frac{x^2}{4}\right)`,
                r`v_1 = -2x^2 \ln x + x^2`,
              ],
            },
            {
              title: "۴) محاسبه $v_2$",
              math: [
                r`v_2 = \int \frac{4e^{-x}\ln x \cdot e^{-x}}{e^{-2x}} \, dx = 4\int \ln x \, dx = 4(x\ln x - x)`,
              ],
              note: "علت محاسبه انتگرال $\\int \\ln x \\, dx = x\\ln x - x$ با جزء به جزء: $u = \\ln x, \\; dv = dx$.",
            },
            {
              title: "۵) تشکیل و ساده‌سازی $y_p$",
              math: [
                r`y_p = v_1 y_1 + v_2 y_2 = (-2x^2 \ln x + x^2)e^{-x} + 4(x\ln x - x) x e^{-x}`,
                r`y_p = e^{-x}\left(-2x^2 \ln x + x^2 + 4x^2 \ln x - 4x^2\right) = e^{-x}\left(2x^2 \ln x - 3x^2\right)`,
                r`y_p = x^2 e^{-x}(2\ln x - 3)`,
              ],
            },
          ],
          answer: [
            r`y = y_g + y_p \implies y = (C_1 + C_2 x)e^{-x} + x^2 e^{-x}(2\ln x - 3)`,
          ],
        },
      },
    ],
  },
  {
    id: "var-s4",
    chapterId: "var",
    num: "۲.۴",
    title: "معادلات اویلر (کوشی-اویلر) و مثال‌های کاربردی",
    pages: "صفحه ۱۰",
    summary:
      "معادله اویلر به فرم $x^2 y'' + p x y' + q y = g(x)$ است که با تغییر متغیر $x = e^t$ به یک معادله خطی با ضرایب ثابت برحسب $t$ تبدیل می‌شود: $\\frac{d^2 y}{dt^2} + (p-1)\\frac{dy}{dt} + q y = 0$. در حل بخش غیرهمگن، حتماً معادله باید با تقسیم بر $x^2$ استاندارد شود تا $R(x)$ صحیح به دست آید.",
    blocks: [
      {
        kind: "definition",
        label: "تعریف",
        title: "معادله دیفرانسیل اویلر",
        body: "معادله اویلر همگن مرتبه دوم به صورت زیر است:",
        math: [r`x^2 y'' + p\,x y' + q\,y = 0`],
      },
      {
        kind: "formula",
        label: "تغییر متغیر اویلر",
        math: r`x = e^t \implies \frac{d^2 y}{dt^2} + (p-1)\frac{dy}{dt} + q\,y = 0`,
      },
      {
        kind: "example",
        example: {
          id: "ex-3-53",
          label: "مثال ۳-۵۳",
          title: "حل معادله اویلر غیرهمگن",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`x^2 y'' - 2x y' + 2y = \frac{6}{x}`],
          method: "معادله اویلر با تغییر متغیر $x = e^t$ و سپس روش تغییر پارامترها",
          steps: [
            {
              title: "۱) حل حالت همگن با تغییر متغیر $x = e^t$",
              text: "با توجه به $p = -2$ و $q = 2$، ضریب مشتق اول برابر با $p-1 = -3$ می‌شود:",
              math: [
                r`x = e^t \implies \frac{d^2 y}{dt^2} - 3\frac{dy}{dt} + 2y = 0`,
                r`t^2 - 3t + 2 = 0 \implies \begin{cases} t_1 = 1 \\ t_2 = 2 \end{cases}`,
                r`y_g(t) = C_1 e^t + C_2 e^{2t} \xrightarrow{x = e^t} y_g(x) = C_1 x + C_2 x^2`,
              ],
              note: "توابع پایه: $y_1 = x$ و $y_2 = x^2$",
            },
            {
              title: "۲) محاسبه رونسکین (W)",
              math: [
                r`y_1' = 1, \quad y_2' = 2x \implies W = \begin{vmatrix} x & x^2 \\ 1 & 2x \end{vmatrix} = 2x^2 - x^2 = x^2`,
              ],
            },
            {
              title: "۳) استاندارد کردن معادله برای به دست آوردن $R(x)$",
              text: "طرفین معادله را بر $x^2$ تقسیم می‌کنیم تا ضریب $y''$ برابر ۱ شود:",
              math: [
                r`y'' - \frac{2}{x}y' + \frac{2}{x^2}y = \frac{6}{x^3} \implies R(x) = \frac{6}{x^3}`,
              ],
            },
            {
              title: "۴) محاسبه $v_1$ و $v_2$",
              math: [
                r`v_1 = \int \frac{-R(x) y_2}{W} \, dx = -\int \frac{\frac{6}{x^3} \cdot x^2}{x^2} \, dx = -6 \int x^{-3} \, dx = -6 \left(\frac{x^{-2}}{-2}\right) = \frac{3}{x^2}`,
                r`v_2 = \int \frac{R(x) y_1}{W} \, dx = \int \frac{\frac{6}{x^3} \cdot x}{x^2} \, dx = \int \frac{6}{x^4} \, dx = 6 \left(\frac{x^{-3}}{-3}\right) = -\frac{2}{x^3}`,
              ],
            },
            {
              title: "۵) تشکیل جواب خصوصی $y_p$",
              math: [
                r`y_p = v_1 y_1 + v_2 y_2 = \left(\frac{3}{x^2}\right)x + \left(-\frac{2}{x^3}\right)x^2 = \frac{3}{x} - \frac{2}{x} = \frac{1}{x}`,
              ],
            },
          ],
          answer: [r`y = y_g + y_p \implies y = C_1 x + C_2 x^2 + \frac{1}{x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-54",
          label: "سؤال ۳-۵۴ (تمرین منزل)",
          title: "اثبات پایه جواب و حل معادله مرتبه سوم",
          statementText:
            "نشان دهید $y_1 = x$ و $y_2 = \\frac{1}{x}$ جواب‌های معادله دیفرانسیل همگن $x^3 y'' + x^2 y' - xy = 0$ می‌باشند و سپس جواب عمومی معادله غیرهمگن را بنویسید:",
          statement: [
            r`x^3 y'' + x^2 y' - xy = \frac{x}{1+x}`,
          ],
          tag: "homework",
          steps: [
            {
              title: "گام ۱: صدق کردن توابع پایه در معادله همگن",
              math: [
                r`y_1 = x \implies y_1' = 1, \quad y_1'' = 0 \implies x^3(0) + x^2(1) - x(x) = x^2 - x^2 = 0 \;\checkmark`,
                r`y_2 = \frac{1}{x} \implies y_2' = -\frac{1}{x^2}, \quad y_2'' = \frac{2}{x^3} \implies x^3\left(\frac{2}{x^3}\right) + x^2\left(-\frac{1}{x^2}\right) - x\left(\frac{1}{x}\right) = 2 - 1 - 1 = 0 \;\checkmark`,
              ],
            },
            {
              title: "گام ۲: محاسبه رونسکین و استانداردسازی",
              math: [
                r`W = \begin{vmatrix} x & \frac{1}{x} \\ 1 & -\frac{1}{x^2} \end{vmatrix} = -\frac{1}{x} - \frac{1}{x} = -\frac{2}{x}`,
                r`\text{معادله استاندارد: } y'' + \frac{1}{x}y' - \frac{1}{x^2}y = \frac{1}{x^2(1+x)} \implies R(x) = \frac{1}{x^2(1+x)}`,
              ],
            },
          ],
          answer: [
            r`y = C_1 x + \frac{C_2}{x} + \frac{1}{2}\left(x - \frac{1}{x}\right)\ln(1+x) - \frac{x}{2}\ln x`,
          ],
        },
      },
    ],
  },
];
