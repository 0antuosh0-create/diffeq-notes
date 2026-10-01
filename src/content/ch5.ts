import type { Section } from "../types";

const r = String.raw;

export const ch5Sections: Section[] = [
  {
    id: "c5-s1",
    chapterId: "c5",
    num: "۳.۱",
    title: "فصل ۵: دستگاه معادلات دیفرانسیل خطی و روش حذفی",
    pages: "صفحات ۱۱ و ۱۲",
    summary:
      "دو روش برای حل دستگاه معادلات دیفرانسیل خطی وجود دارد: روش حذفی و روش اپراتوری. در روش حذفی، با حذف کردن یکی از توابع مجهول و مشتقات آن، معادله‌ای تک‌مجهوله به دست می‌آید که پس از حل آن، سایر توابع مجهول بدون تولید ثابت‌های مستقل اضافی محاسبه می‌شوند.",
    blocks: [
      {
        kind: "text",
        text: "در روش حذفی با حذف کردن تابع‌های مجهول و مشتقات این توابع، معادله‌ای را به دست می‌آوریم که فقط شامل یک تابع مجهول و مشتقات آن باشد و با حل این معادله، یکی از توابع مجهول به دست می‌آید و سپس سایر توابع مجهول را محاسبه می‌کنیم.",
      },
      {
        kind: "example",
        example: {
          id: "ex-5-1",
          label: "مثال ۵-۱",
          title: "حل دستگاه خطی دو معادله و دو مجهول با روش حذفی",
          statementText: "دستگاه معادلات زیر را حل کنید:",
          statement: [
            r`\begin{cases} (1)\quad y_1' = 2y_1 - 5y_2 \implies 5y_2 = 2y_1 - y_1' \\ (2)\quad y_2' = 5y_1 - 6y_2 \end{cases}`,
          ],
          steps: [
            {
              title: "۱) به دست آوردن $y_2$ و مشتق آن از معادله (۱)",
              math: [
                r`y_2 = \frac{2}{5}y_1 - \frac{1}{5}y_1' \xrightarrow{\text{مشتق}} y_2' = \frac{2}{5}y_1' - \frac{1}{5}y_1''`,
              ],
            },
            {
              title: "۲) جایگذاری در معادله (۲) و تشکیل معادله تک‌مجهوله",
              math: [
                r`5y_1 - 6y_2 = y_2' \implies 5y_1 - \frac{12}{5}y_1 + \frac{6}{5}y_1' = \frac{2}{5}y_1' - \frac{1}{5}y_1''`,
                r`\xrightarrow{\times 5} 25y_1 - 12y_1 + 6y_1' = 2y_1' - y_1'' \implies y_1'' + 4y_1' + 13y_1 = 0`,
              ],
            },
            {
              title: "۳) حل معادله مشخصه برای $y_1$",
              math: [
                r`t^2 + 4t + 13 = 0, \quad \Delta = 16 - 4(13) = -36 < 0 \implies \sqrt{-36} = 6i`,
                r`t = \frac{-4 \pm 6i}{2} = \overset{\alpha}{-2} \pm \overset{\beta}{3}i`,
                r`y_1 = e^{-2x}\left(C_1 \cos 3x + C_2 \sin 3x\right)`,
              ],
            },
            {
              title: "۴) محاسبه مشتق $y_1'$",
              math: [
                r`y_1' = -2e^{-2x}\left(C_1 \cos 3x + C_2 \sin 3x\right) + e^{-2x}\left(-3C_1 \sin 3x + 3C_2 \cos 3x\right)`,
              ],
            },
            {
              title: "۵) جایگذاری $y_1$ و $y_1'$ در رابطه $y_2$",
              math: [
                r`y_2 = \frac{2}{5}y_1 - \frac{1}{5}y_1' \implies y_2 = \frac{1}{5}e^{-2x} \Big((4C_1 - 3C_2)\cos 3x + (3C_1 + 4C_2)\sin 3x\Big)`,
              ],
              note: "توجه شود که $y_2$ بر حسب همان ثوابت $C_1$ و $C_2$ تعیین می‌شود.",
            },
          ],
          answer: [
            r`y_1 = e^{-2x}\left(C_1 \cos 3x + C_2 \sin 3x\right)`,
            r`y_2 = \frac{1}{5}e^{-2x} \Big((4C_1 - 3C_2)\cos 3x + (3C_1 + 4C_2)\sin 3x\Big)`,
          ],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-5-2",
          label: "مثال ۵-۲",
          title: "دستگاه شامل مشتقات مرتبه دوم",
          statementText: "دستگاه معادلات زیر را حل کنید:",
          statement: [
            r`\begin{cases} (1)\quad y_1'' = y_2 + 1 \\ (2)\quad y_2'' = y_1 + x \end{cases}`,
          ],
          steps: [
            {
              title: "۱) حذف $y_2$ و تشکیل معادله مرتبه چهارم",
              math: [
                r`(1) \implies y_2 = y_1'' - 1 \xrightarrow{\text{دو بار مشتق}} y_2'' = y_1^{(4)}`,
                r`y_1^{(4)} = y_1 + x \implies y_1^{(4)} - y_1 = x`,
              ],
            },
            {
              title: "۲) حل حالت همگن",
              math: [
                r`t^4 - 1 = 0 \implies (t^2 - 1)(t^2 + 1) = 0 \implies \begin{cases} t = \pm 1 \\ t = \pm i \end{cases}`,
                r`y_{g_1} = C_1 e^{-x} + C_2 e^x + C_3 \cos x + C_4 \sin x`,
              ],
            },
            {
              title: "۳) جواب خصوصی با روش ضرایب نامعین",
              text: "چون در معادله مشخصه ریشه صفر نداریم ($c \\neq 0$):",
              math: [
                r`y_{p_1} = Ax + B \implies y_{p_1}^{(4)} = 0 \implies 0 - (Ax + B) = x \implies \begin{cases} A = -1 \\ B = 0 \end{cases}`,
                r`y_{p_1} = -x`,
              ],
            },
            {
              title: "۴) نوشتن $y_1$ و به دست آوردن $y_2$",
              math: [
                r`y_1 = y_{g_1} + y_{p_1} = C_1 e^{-x} + C_2 e^x + C_3 \cos x + C_4 \sin x - x`,
                r`y_2 = y_1'' - 1 = C_1 e^{-x} + C_2 e^x - C_3 \cos x - C_4 \sin x - 1`,
              ],
            },
          ],
          answer: [
            r`y_1 = C_1 e^{-x} + C_2 e^x + C_3 \cos x + C_4 \sin x - x`,
            r`y_2 = C_1 e^{-x} + C_2 e^x - C_3 \cos x - C_4 \sin x - 1`,
          ],
        },
      },
    ],
  },
  {
    id: "c5-s2",
    chapterId: "c5",
    num: "۳.۲",
    title: "مثال ۵-۳ و سؤال امتحانی مسیرهای قائم",
    pages: "صفحات ۱۲ و ۱۳",
    session: "جلسه ۲۵ام (۳/۳۱)",
    summary:
      "در این بخش ابتدا دستگاه شامل عبارات خطی غیرهمگن با روش حذفی حل می‌شود و سپس مسیرهای قائم یک دسته منحنی با حذف ثابت $C$ و تبدیل $y' \\to -\\frac{1}{y'}$ به کمک معادله همگن و تغییر متغیر $u = \\frac{y}{x}$ محاسبه می‌گردد.",
    blocks: [
      {
        kind: "example",
        example: {
          id: "ex-5-3",
          label: "مثال ۵-۳",
          title: "دستگاه خطی با سمت راست ثابت",
          statementText: "دستگاه معادلات زیر را حل کنید:",
          statement: [
            r`\begin{cases} (1)\quad y_1' + 4y_1 - 4y_2 = 12 \\ (2)\quad 10y_2' - 4y_1' + 4y_2 = 0 \end{cases}`,
          ],
          steps: [
            {
              title: "۱) محاسبه $y_2$ از معادله (۱)",
              math: [
                r`y_2 = \frac{1}{4}y_1' + y_1 - 3 \xrightarrow{\text{مشتق}} y_2' = \frac{1}{4}y_1'' + y_1'`,
              ],
            },
            {
              title: "۲) جایگذاری در معادله (۲) و ساده‌سازی",
              math: [
                r`10\left(\frac{1}{4}y_1'' + y_1'\right) - 4y_1' + 4\left(\frac{1}{4}y_1' + y_1 - 3\right) = 0`,
                r`\frac{5}{2}y_1'' + 7y_1' + 4y_1 = 12 \xrightarrow{\times \frac{2}{5}} y_1'' + \frac{14}{5}y_1' + \frac{8}{5}y_1 = \frac{24}{5}`,
              ],
            },
            {
              title: "۳) حل معادله مشخصه و جواب همگن",
              math: [
                r`t^2 + \frac{14}{5}t + \frac{8}{5} = 0, \quad \Delta = \frac{196}{25} - \frac{160}{25} = \frac{36}{25}`,
                r`t = \frac{-\frac{14}{5} \pm \frac{6}{5}}{2} \implies \begin{cases} t_1 = -2 \\ t_2 = -\frac{4}{5} \end{cases}`,
                r`y_{g_1} = C_1 e^{-2x} + C_2 e^{-\frac{4}{5}x}`,
              ],
            },
            {
              title: "۴) محاسبه جواب خصوصی $y_{p_1}$",
              math: [
                r`y_{p_1} = A \implies \frac{8}{5}A = \frac{24}{5} \implies A = 3`,
                r`y_1 = C_1 e^{-2x} + C_2 e^{-\frac{4}{5}x} + 3`,
                r`y_1' = -2C_1 e^{-2x} - \frac{4}{5}C_2 e^{-\frac{4}{5}x}`,
              ],
            },
            {
              title: "۵) محاسبه $y_2$ با جایگذاری $y_1$ و $y_1'$",
              math: [
                r`y_2 = \frac{1}{4}\left(-2C_1 e^{-2x} - \frac{4}{5}C_2 e^{-\frac{4}{5}x}\right) + \left(C_1 e^{-2x} + C_2 e^{-\frac{4}{5}x} + 3\right) - 3`,
                r`y_2 = \frac{1}{2}C_1 e^{-2x} + \frac{4}{5}C_2 e^{-\frac{4}{5}x}`,
              ],
            },
          ],
          answer: [
            r`y_1 = C_1 e^{-2x} + C_2 e^{-\frac{4}{5}x} + 3`,
            r`y_2 = \frac{1}{2}C_1 e^{-2x} + \frac{4}{5}C_2 e^{-\frac{4}{5}x}`,
          ],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-orth",
          label: "سؤال امتحانی",
          title: "محاسبه مسیرهای قائم دسته منحنی",
          statementText: "مسیرهای قائم دسته منحنی زیر را به دست آورید:",
          statement: [r`y^2 = Cx^3 + x^2`],
          tag: "exam",
          steps: [
            {
              title: "۱) مشتق‌گیری و حذف ثابت $C$",
              math: [
                r`y^2 = Cx^3 + x^2 \xrightarrow{\text{مشتق}} 2yy' = 3Cx^2 + 2x`,
                r`Cx^3 = y^2 - x^2 \implies 2xyy' = 3(y^2 - x^2) + 2x^2 = 3y^2 - x^2`,
                r`y' = \frac{3y^2 - x^2}{2xy}`,
              ],
            },
            {
              title: r`۲) اعمال شرط مسیرهای قائم ($y' \to -\frac{1}{y'}$)`,
              math: [
                r`-\frac{1}{y'} = \frac{3y^2 - x^2}{2xy} \implies y' = -\frac{2xy}{3y^2 - x^2} = \frac{2xy}{x^2 - 3y^2}`,
              ],
              note: "معادله همگن از درجه صفر است (صورت و مخرج هر دو از درجه ۲).",
            },
            {
              title: r`۳) تغییر متغیر $u = \frac{y}{x}$`,
              math: [
                r`y = ux \implies y' = u'x + u \implies u'x + u = \frac{2u}{1 - 3u^2}`,
                r`u'x = \frac{2u - u(1 - 3u^2)}{1 - 3u^2} = \frac{u + 3u^3}{1 - 3u^2}`,
              ],
            },
            {
              title: "۴) جداسازی متغیرها و تجزیه به کسرهای جزئی",
              math: [
                r`\int \frac{1 - 3u^2}{u(1 + 3u^2)} \, du = \int \frac{dx}{x}`,
                r`\frac{1 - 3u^2}{u(3u^2 + 1)} = \frac{A}{u} + \frac{Bu + C}{3u^2 + 1} \implies \begin{cases} A = 1 \\ B = -6 \\ C = 0 \end{cases}`,
              ],
            },
            {
              title: "۵) انتگرال‌گیری و بازگشت به متغیرهای اصلی",
              math: [
                r`\int \frac{du}{u} - \int \frac{6u}{3u^2 + 1} \, du = \int \frac{dx}{x} \implies \ln|u| - \ln(3u^2 + 1) = \ln|x| + \ln C`,
                r`\frac{u}{3u^2 + 1} = Cx \xrightarrow{u = \frac{y}{x}} \frac{y/x}{3(y/x)^2 + 1} = Cx \implies \frac{y}{3y^2 + x^2} = C`,
              ],
            },
          ],
          answer: [r`y = C\left(x^2 + 3y^2\right)`],
        },
      },
    ],
  },
  {
    id: "c5-s3",
    chapterId: "c5",
    num: "۳.۳",
    title: "روش اپراتوری و کرامر برای دستگاه‌ها",
    pages: "صفحه ۱۴",
    session: "جلسه ۲۶ام (۵/۴/۰۲)",
    summary:
      "با تعریف اپراتور $D = \\frac{d}{dt}$، دستگاه معادلات دیفرانسیل به شکل ماتریسی نوشته شده و با استفاده از دستور کرامر برای هر یک از توابع مجهول معادله دیفرانسیل جداگانه به دست می‌آید.",
    blocks: [
      {
        kind: "text",
        text: "از نماد $D = \\frac{d}{dt}$ استفاده می‌کنیم و دستگاه را با قاعده کرامر حل می‌نماییم (این روش در امتحان به عنوان روش اصلی مطرح نیست ولی برای یادگیری عمیق کاربرد دارد):",
      },
      {
        kind: "formula",
        label: "قاعده کرامر اپراتوری",
        math: r`\begin{cases} A_1 x + B_1 y = C_1 \\ A_2 x + B_2 y = C_2 \end{cases} \implies x = \frac{\begin{vmatrix} C_1 & B_1 \\ C_2 & B_2 \end{vmatrix}}{\begin{vmatrix} A_1 & B_1 \\ A_2 & B_2 \end{vmatrix}}`,
      },
      {
        kind: "example",
        example: {
          id: "ex-5-5",
          label: "مثال ۵-۵",
          title: "حل دستگاه با روش اپراتورها",
          statementText: "دستگاه معادلات زیر را حل کنید ($\\dot{x} = \\frac{dx}{dt}$):",
          statement: [
            r`\begin{cases} (1)\quad \dot{x} - 2x - 3y = 2e^{2t} \\ (2)\quad -x + \dot{y} - 4y = 3e^{2t} \end{cases}`,
          ],
          method: "روش اپراتورها (در امتحان نیست)",
          steps: [
            {
              title: "۱) فرم اپراتوری دستگاه",
              math: [
                r`\begin{cases} (D - 2)x - 3y = 2e^{2t} \\ -x + (D - 4)y = 3e^{2t} \end{cases}`,
              ],
            },
            {
              title: "۲) محاسبه دترمینان‌ها و معادله برای $x$",
              math: [
                r`x = \frac{\begin{vmatrix} 2e^{2t} & -3 \\ 3e^{2t} & D-4 \end{vmatrix}}{\begin{vmatrix} D-2 & -3 \\ -1 & D-4 \end{vmatrix}} = \frac{5e^{2t}}{D^2 - 6D + 5} \implies (D^2 - 6D + 5)x = 5e^{2t}`,
              ],
            },
            {
              title: "۳) حل معادله مشخصه و جواب خصوصی برای $x$",
              math: [
                r`t^2 - 6t + 5 = 0 \implies (t - 1)(t - 5) = 0 \implies \begin{cases} t_1 = 1 \\ t_2 = 5 \end{cases} \implies x_g = C_1 e^t + C_2 e^{5t}`,
                r`x_p = A e^{2t} \implies 4A e^{2t} - 12A e^{2t} + 5A e^{2t} = 5e^{2t} \implies -3A = 5 \implies A = -\frac{5}{3}`,
                r`x = C_1 e^t + C_2 e^{5t} - \frac{5}{3}e^{2t}`,
              ],
            },
            {
              title: "۴) محاسبه $y$ و تعیین رابطه ثوابت",
              math: [
                r`(D^2 - 6D + 5)y = 2e^{2t} \implies y = A e^t + B e^{5t} - \frac{2}{3}e^{2t}`,
                r`\text{جایگذاری در معادله (۱) برای حذف ثوابت وابسته:} \implies \begin{cases} C_1 = -3A \\ C_2 = B \end{cases}`,
              ],
            },
          ],
          answer: [
            r`x = -3A e^t + B e^{5t} - \frac{5}{3}e^{2t}`,
            r`y = A e^t + B e^{5t} - \frac{2}{3}e^{2t}`,
          ],
        },
      },
    ],
  },
];
