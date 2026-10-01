import type { Section } from "../types";

const r = String.raw;

export const ch3Sections: Section[] = [
  {
    id: "c3-s1",
    chapterId: "ch3",
    num: "۱.۱",
    title: "معادله مشخصه و ساختار جواب عمومی",
    pages: "صفحات ۱ تا ۲",
    summary:
      "برای معادلهٔ دیفرانسیل خطی همگن با ضرایب ثابت، جواب را به شکل $y = e^{tx}$ حدس می‌زنیم. با جایگذاری این فرض در معادله، چون $e^{tx} \\neq 0$ است، چندجمله‌ای مشخصه به دست می‌آید. ریشه‌های این چندجمله‌ای، ساختار جواب عمومی را مشخص می‌کنند.",
    blocks: [
      {
        kind: "note",
        variant: "info",
        title: "ادامهٔ مباحث قبل از میان‌ترم",
        text: "در بخش ضرایب نامعین نشان داده شد که جواب عمومی برابر با مجموع جواب عمومی حالت همگن و جواب خصوصی است:",
        math: [
          r`y_p = y_{p_1} + y_{p_2} + y_{p_3} \implies x\sin 2x + 2\cos 2x + 2x^2 - x - 1`,
          r`y = y_g + y_p \implies y = C_1\cos 2x + C_2\sin 2x + x\sin 2x + 2\cos 2x + 2x^2 - x - 1`,
        ],
      },
      {
        kind: "definition",
        label: "تعریف",
        title: "معادله دیفرانسیل همگن از مرتبه دلخواه n با ضرایب ثابت",
        body: "معادلات دیفرانسیل خطی مرتبه $n$ همگن با ضرایب ثابت به صورت زیر تعریف می‌شوند:",
        math: [r`y^{(n)} + a_1 y^{(n-1)} + \cdots + a_{n-1} y' + a_n y = 0`],
      },
      {
        kind: "text",
        text: "با توجه به این که $y = e^{tx}$ یک جواب معادله است، مشتق‌های متوالی آن عبارتند از:",
      },
      {
        kind: "formula",
        label: "مشتق‌های فرض $y = e^{tx}$",
        math: r`y = e^{tx} \longrightarrow y' = t\,e^{tx} \longrightarrow y'' = t^2 e^{tx} ,\; \dots ,\; y^{(n)} = t^n e^{tx}`,
      },
      {
        kind: "text",
        text: "با جایگذاری در معادله دیفرانسیل، عبارت $e^{tx}$ فاکتور گرفته می‌شود و چون $e^{tx} \\neq 0$ است، به معادله مشخصه می‌رسیم:",
      },
      {
        kind: "formula",
        label: "معادله مشخصه (چندجمله‌ای مشخصه)",
        math: r`e^{tx}\left(t^n + a_1 t^{n-1} + \cdots + a_{n-1} t + a_n\right) = 0 \xrightarrow{e^{tx} \neq 0} t^n + a_1 t^{n-1} + \cdots + a_{n-1} t + a_n = 0`,
        note: "معادله مشخصه یک چندجمله‌ای از درجه n با ضرایب حقیقی است که دقیقاً n ریشه دارد.",
        star: true,
      },
      {
        kind: "table",
        caption: "دسته‌بندی ریشه‌های معادله مشخصه و شکل جواب متناظر",
        headers: ["نوع ریشه معادله مشخصه", "پایه جواب‌های مستقل خطی", "سهم در جواب عمومی"],
        rows: [
          [
            "ریشه‌های حقیقی متمایز $r_1, \\dots, r_n$",
            r`e^{r_1 x},\; e^{r_2 x},\; \dots,\; e^{r_n x}`,
            r`y = C_1 e^{r_1 x} + C_2 e^{r_2 x} + \cdots + C_n e^{r_n x}`,
          ],
          [
            "ریشه حقیقی مضاعف $r$ (از مرتبه تکرار $k$)",
            r`e^{rx},\; x e^{rx},\; x^2 e^{rx},\; \dots,\; x^{k-1} e^{rx}`,
            r`y = \left(C_1 + C_2 x + \cdots + C_k x^{k-1}\right)e^{rx}`,
          ],
          [
            "ریشه‌های مختلط مزدوج $t = \\alpha \\pm \\beta i$",
            r`e^{\alpha x}\cos(\beta x),\quad e^{\alpha x}\sin(\beta x)`,
            r`y = e^{\alpha x}\left(C_1\cos\beta x + C_2 \sin\beta x\right)`,
          ],
        ],
      },
      {
        kind: "theorem",
        label: "قضیه ۳-۴",
        title: "ترکیب خطی جواب‌ها (جواب عمومی)",
        body: "اگر $y_1, y_2, \\dots, y_n$ جواب‌های معادله دیفرانسیل همگن باشند، در این صورت ترکیب خطی آن‌ها جواب عمومی معادله است:",
        math: [
          r`y = C_1 y_1 + C_2 y_2 + \cdots + C_n y_n`,
        ],
      },
    ],
  },
  {
    id: "c3-s2",
    chapterId: "ch3",
    num: "۱.۲",
    title: "رونسکین و استقلال خطی",
    pages: "صفحات ۲ تا ۳",
    session: "جلسه ۲۲ام (۳/۱۹)",
    summary:
      "برای بررسی استقلال یا وابستگی خطی توابع جواب، دترمینان رونسکین $W(x)$ محاسبه می‌شود. اگر رونسکین روی بازه مخالف صفر باشد، توابع مستقل خطی بوده و یک پایه برای جواب تشکیل می‌دهند.",
    blocks: [
      {
        kind: "theorem",
        label: "قضیه ۳-۵",
        title: "تعریف رونسکین و وابستگی خطی",
        body: "اگر توابع $y_1, y_2, \\dots, y_n$ روی بازه $[a, b]$ وابسته خطی باشند، آنگاه روی بازه $[a, b]$، دترمینان رونسکین زیر برابر با صفر خواهد بود:",
        math: [
          r`W(x) = W[y_1, y_2, \dots, y_n] = \begin{vmatrix} y_1 & y_2 & \dots & y_n \\ y_1' & y_2' & \dots & y_n' \\ \vdots & \vdots & & \vdots \\ y_1^{(n-1)} & y_2^{(n-1)} & \dots & y_n^{(n-1)} \end{vmatrix}`,
        ],
      },
      {
        kind: "theorem",
        label: "قضیه ۳-۶",
        title: "استقلال خطی و شرط ناصفر بودن رونسکین",
        body: "اگر توابع $y_1, y_2, \\dots, y_n$ جواب‌های مستقل خطی معادله دیفرانسیل خطی همگن با ضرایب ثابت روی بازه $[a, b]$ باشند، آنگاه رونسکین مخالف صفر است:",
        math: [
          r`W(x) = \begin{vmatrix} y_1 & y_2 & \dots & y_n \\ y_1' & y_2' & \dots & y_n' \\ \vdots & \vdots & & \vdots \\ y_1^{(n-1)} & y_2^{(n-1)} & \dots & y_n^{(n-1)} \end{vmatrix} \neq 0`,
        ],
      },
      {
        kind: "example",
        example: {
          id: "ex-3-16",
          label: "مثال ۳-۱۶",
          title: "اثبات پایه جواب برای معادله مرتبه سوم",
          statementText:
            "نشان دهید که توابع $y_1 = e^{-x}$ ، $y_2 = e^x$ و $y_3 = x e^x$ یک پایه برای جواب معادله دیفرانسیل زیر تشکیل می‌دهند:",
          statement: [r`y''' - y'' - y' + y = 0`],
          steps: [
            {
              title: "گام ۱: صدق کردن در معادله دیفرانسیل",
              text: "ابتدا مشتق‌های متوالی $y_1$ را به دست آورده و در معادله جایگذاری می‌کنیم:",
              math: [
                r`y_1 = e^{-x} \implies y_1' = -e^{-x} \implies y_1'' = e^{-x} \implies y_1''' = -e^{-x}`,
                r`-e^{-x} - e^{-x} - (-e^{-x}) + e^{-x} = -e^{-x} - e^{-x} + e^{-x} + e^{-x} = 0 \;\checkmark`,
              ],
              note: "به همین ترتیب نشان می‌دهیم که $y_2 = e^x$ و $y_3 = x e^x$ نیز در معادله دیفرانسیل صدق می‌کنند.",
            },
            {
              title: "گام ۲: تشکیل رونسکین توابع",
              math: [
                r`W(x) = \begin{vmatrix} y_1 & y_2 & y_3 \\ y_1' & y_2' & y_3' \\ y_1'' & y_2'' & y_3'' \end{vmatrix} = \begin{vmatrix} e^{-x} & e^x & x e^x \\ -e^{-x} & e^x & e^x (x+1) \\ e^{-x} & e^x & e^x (x+2) \end{vmatrix}`,
              ],
            },
            {
              title: "گام ۳: محاسبه دترمینان و اثبات استقلال خطی",
              text: "با فاکتورگیری و بسط دترمینان داریم:",
              math: [
                r`W(x) = e^{-x} \cdot e^x \cdot e^x \begin{vmatrix} 1 & 1 & x \\ -1 & 1 & x+1 \\ 1 & 1 & x+2 \end{vmatrix} = e^x \cdot \Big( (x+2 - (x+1)) - (-1(x+2) - (x)) + x(-1 - 1) \Big)`,
                r`W(x) = 4e^x \neq 0`,
              ],
              note: "چون $W(x) = 4e^x \\neq 0$ است، توابع مستقل خطی بوده و تشکیل پایه جواب می‌دهند.",
            },
          ],
          answer: [r`y = C_1 e^{-x} + C_2 e^x + C_3 x e^x`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-17",
          label: "مثال ۳-۱۷",
          title: "استقلال خطی دو تابع نمایی",
          statementText: "نشان دهید توابع $y_1 = e^{-x}$ و $y_2 = e^{2x}$ استقلال خطی دارند.",
          statement: [],
          steps: [
            {
              title: "تشکیل و محاسبه رونسکین",
              math: [
                r`W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = \begin{vmatrix} e^{-x} & e^{2x} \\ -e^{-x} & 2e^{2x} \end{vmatrix} = 2e^x - (-e^x) = 3e^x`,
              ],
              note: "چون $W(x) = 3e^x \\neq 0$ است، دو تابع مستقل خطی هستند.",
            },
          ],
          answer: [r`W(x) = 3e^x \neq 0 \implies \text{توابع مستقل خطی هستند}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-18",
          label: "مثال ۳-۱۸",
          title: "اثبات وابستگی خطی با رونسکین",
          statementText: "نشان دهید توابع $y_1 = x^2$ و $y_2 = 3x^2$ وابستگی خطی دارند.",
          statement: [],
          steps: [
            {
              title: "تشکیل رونسکین",
              text: "باید نشان دهیم رونسکین آن‌ها برابر با صفر است:",
              math: [
                r`W(x) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = \begin{vmatrix} x^2 & 3x^2 \\ 2x & 6x \end{vmatrix} = 6x^3 - 6x^3 = 0`,
              ],
              note: "صفر شدن رونسکین نشان‌دهنده وابستگی خطی توابع است ($y_2 = 3y_1$).",
            },
          ],
          answer: [r`W(x) = 0 \implies \text{توابع وابسته خطی هستند}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-19",
          label: "مثال ۳-۱۹",
          title: "معادله مشخصه با ریشه صفر (امتحانی)",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y''' - 2y'' - 3y' = 0`],
          tag: "exam",
          steps: [
            {
              title: "تشکیل معادله مشخصه و تعیین ریشه‌ها",
              math: [
                r`t^3 - 2t^2 - 3t = 0 \implies t(t^2 - 2t - 3) = 0`,
                r`t(t+1)(t-3) = 0 \implies \begin{cases} t_1 = 0 \\ t_2 = -1 \\ t_3 = 3 \end{cases}`,
              ],
              note: "ریشه $t = 0$ منجر به جواب $e^{0x} = 1$ یعنی ثابت $C_1$ می‌شود.",
            },
          ],
          answer: [r`y = C_1 + C_2 e^{-x} + C_3 e^{3x}`],
        },
      },
    ],
  },
  {
    id: "c3-s3",
    chapterId: "ch3",
    num: "۱.۳",
    title: "ریشه‌های مضاعف، تکراری و مختلط",
    pages: "صفحه ۴",
    summary:
      "در ریشه‌های مضاعف با تکرار $k$، جملات با ضریب $x, x^2, \\dots$ افزوده می‌شوند. در ریشه‌های مختلط مزدوج $\\alpha \\pm \\beta i$، با فرمول اویلر جواب به فرم سینوسی و کسینوسی با ضریب نمایی $e^{\\alpha x}$ نوشته می‌شود.",
    blocks: [
      {
        kind: "formula",
        label: "فرمول ریشه مضاعف با تکرار k",
        math: r`y = \left(C_1 + C_2 x + C_3 x^2 + \cdots + C_k x^{k-1}\right)e^{rx}`,
        star: true,
      },
      {
        kind: "formula",
        label: "فرمول ریشه‌های مختلط مزدوج $t = \\alpha \\pm \\beta i$",
        math: r`y = e^{\alpha x}\left(C_1 \cos\beta x + C_2 \sin\beta x\right)`,
        star: true,
      },
      {
        kind: "example",
        example: {
          id: "ex-3-20",
          label: "مثال ۳-۲۰",
          title: "ریشه مضاعف صفر و ریشه ساده",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y''' - y'' = 0`],
          steps: [
            {
              title: "حل معادله مشخصه",
              math: [
                r`t^3 - t^2 = 0 \implies t^2(t - 1) = 0`,
                r`\begin{cases} t = 0 & (\text{ریشه مضاعف مرتبه ۲}) \\ t = 1 & (\text{ریشه مرتبه ۱}) \end{cases}`,
              ],
            },
            {
              title: "نوشتن جواب عمومی",
              math: [
                r`y = (C_1 + C_2 x) e^{0x} + C_3 e^x \implies y = C_1 + C_2 x + C_3 e^x`,
              ],
            },
          ],
          answer: [r`y = C_1 + C_2 x + C_3 e^x`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-21",
          label: "مثال ۳-۲۱",
          title: "ریشه مضاعف ۱ و ریشه ساده منفی ۱",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y''' - y'' - y' + y = 0`],
          steps: [
            {
              title: "تجزیه چندجمله‌ای مشخصه",
              math: [
                r`t^3 - t^2 - t + 1 = 0 \implies t^2(t - 1) - (t - 1) = 0 \implies (t - 1)(t^2 - 1) = 0`,
                r`(t - 1)^2 (t + 1) = 0 \implies \begin{cases} t = 1 & (\text{ریشه مضاعف مرتبه ۲}) \\ t = -1 & (\text{ریشه مرتبه ۱}) \end{cases}`,
              ],
            },
          ],
          answer: [r`y = (C_1 + C_2 x) e^x + C_3 e^{-x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-22",
          label: "مثال ۳-۲۲",
          title: "ریشه مضاعف ۲ و ریشه منفی ۲",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y''' - 2y'' - 4y' + 8y = 0`],
          steps: [
            {
              title: "تجزیه معادله مشخصه",
              math: [
                r`t^3 - 2t^2 - 4t + 8 = 0 \implies t^2(t - 2) - 4(t - 2) = 0 \implies (t - 2)(t^2 - 4) = 0`,
                r`(t - 2)^2 (t + 2) = 0 \implies \begin{cases} t = 2 & (\text{ریشه مضاعف}) \\ t = -2 & (\text{ریشه مرتبه ۱}) \end{cases}`,
              ],
            },
          ],
          answer: [r`y = (C_1 + C_2 x) e^{2x} + C_3 e^{-2x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-23",
          label: "مثال ۳-۲۳",
          title: "معادله مرتبه چهارم با دو ریشه مضاعف",
          statementText: "جواب عمومی معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y^{(4)} - 2y'' + y = 0`],
          steps: [
            {
              title: "معادله مشخصه و مربع کامل",
              math: [
                r`t^4 - 2t^2 + 1 = 0 \implies (t^2 - 1)^2 = 0 \implies (t - 1)^2 (t + 1)^2 = 0`,
                r`\begin{cases} t = 1 & (\text{ریشه مضاعف مرتبه ۲}) \\ t = -1 & (\text{ریشه مضاعف مرتبه ۲}) \end{cases}`,
              ],
            },
          ],
          answer: [r`y = (C_1 + C_2 x) e^x + (C_3 + C_4 x) e^{-x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-24",
          label: "مثال ۳-۲۴",
          title: "ریشه‌های مختلط با دلتای منفی",
          statementText: "جواب معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y''' - 4y'' + 5y' = 0`],
          steps: [
            {
              title: "معادله مشخصه و محاسبه ریشه‌ها",
              math: [
                r`t^3 - 4t^2 + 5t = 0 \implies t(t^2 - 4t + 5) = 0`,
                r`\Delta = (-4)^2 - 4(1)(5) = 16 - 20 = -4 < 0 \implies \sqrt{-4} = 2i`,
                r`t = \frac{4 \pm 2i}{2} = \underset{\alpha}{2} \pm \underset{\beta}{1}i \implies \begin{cases} t_1 = 0 \\ t_{2,3} = 2 \pm i \end{cases}`,
              ],
            },
          ],
          answer: [r`y = C_1 + e^{2x}\left(C_2 \cos x + C_3 \sin x\right)`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-25",
          label: "مثال ۳-۲۵",
          title: "ریشه‌های چهارم واحد",
          statementText: "جواب معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y^{(4)} - y = 0`],
          steps: [
            {
              title: "معادله مشخصه",
              math: [
                r`t^4 - 1 = 0 \implies (t^2 - 1)(t^2 + 1) = 0 \implies \begin{cases} t = \pm 1 \\ t = \pm i \end{cases}`,
              ],
            },
          ],
          answer: [r`y = C_1 e^{-x} + C_2 e^x + C_3 \cos x + C_4 \sin x`],
        },
      },
    ],
  },
  {
    id: "c3-s4",
    chapterId: "ch3",
    num: "۱.۴",
    title: "نماد اپراتوری D و معادلات مرتبه بالا",
    pages: "صفحات ۵ و ۶",
    session: "جلسه ۲۳ام (۸/۲۴)",
    summary:
      "با نماد $D = \\frac{d}{dx}$ معادله دیفرانسیل به شکل $F(D)y = 0$ درمی‌آید. این روش نوشتن، تجزیه اپراتور را به صورت حاصل‌ضرب عوامل خطی و درجه دوم تسهیل کرده و خواندن ریشه‌ها را سریع‌تر می‌کند.",
    blocks: [
      {
        kind: "definition",
        label: "تذکر: انتخاب نماد اپراتوری",
        title: "اپراتور دیفرانسیل خطی",
        body: "نماد مشتق‌گیری به صورت زیر تعریف می‌شود:",
        math: [
          r`D = \frac{d}{dx} , \quad D^2 = \frac{d^2}{dx^2} , \dots , \quad D^n = \frac{d^n}{dx^n}`,
          r`F(D) y = (D^n + a_1 D^{n-1} + \dots + a_{n-1} D + a_n) y = 0`,
        ],
      },
      {
        kind: "example",
        example: {
          id: "ex-3-27",
          label: "مثال ۳-۲۷",
          title: "فرم اپراتوری معادله مرتبه چهارم",
          statementText: "جواب معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`y^{(4)} - y''' - 4y'' + 4y' = 0`],
          steps: [
            {
              title: "فرم اپراتوری و معادله مشخصه",
              math: [
                r`(D^4 - D^3 - 4D^2 + 4D) y = 0`,
                r`t^4 - t^3 - 4t^2 + 4t = 0 \implies t^3(t - 1) - 4t(t - 1) = 0`,
                r`t(t - 1)(t^2 - 4) = 0 \implies \begin{cases} t = 0 \\ t = 1 \\ t = \pm 2 \end{cases}`,
              ],
            },
          ],
          answer: [r`y = C_1 + C_2 e^x + C_3 e^{-2x} + C_4 e^{2x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-28",
          label: "مثال ۳-۲۸",
          title: "معادله تجزیه‌شده اپراتوری",
          statementText: "جواب معادله دیفرانسیل زیر را بنویسید:",
          statement: [r`D(D - 1)(D + 3) y = 0`],
          steps: [
            {
              title: "معادله مشخصه",
              math: [
                r`t(t - 1)(t + 3) = 0 \implies \begin{cases} t = 0 \\ t = 1 \\ t = -3 \end{cases}`,
              ],
            },
          ],
          answer: [r`y = C_1 + C_2 e^x + C_3 e^{-3x}`],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-29",
          label: "مثال ۳-۲۹",
          title: "ترکیب ریشه مضاعف و مختلط",
          statementText: "جواب عمومی معادله دیفرانسیل زیر:",
          statement: [r`D(D^2 + 1)(D - 2)^3 y = 0`],
          steps: [
            {
              title: "معادله مشخصه و ریشه‌ها",
              math: [
                r`t(t^2 + 1)(t - 2)^3 = 0 \implies \begin{cases} t = 0 & (\text{ریشه مرتبه ۱}) \\ t = \pm i & \\ t = 2 & (\text{ریشه مرتبه ۳}) \end{cases}`,
              ],
            },
          ],
          answer: [
            r`y = C_1 + C_2 \cos x + C_3 \sin x + \left(C_4 + C_5 x + C_6 x^2\right) e^{2x}`,
          ],
        },
      },
      {
        kind: "example",
        example: {
          id: "ex-3-30",
          label: "مثال ۳-۳۰",
          title: "معادله دیفرانسیل مرتبه ۱۲",
          statementText:
            "جواب عمومی معادله دیفرانسیل مرتبه ۱۲ زیر را بنویسید:",
          statement: [
            r`D^2 (D-1)^3 (D^2 + 4)^2 (D^2 + 2D + 2)(D+1) y = 0`,
          ],
          steps: [
            {
              title: "معادله مشخصه و تفکیک ریشه‌ها",
              math: [
                r`t^2 (t-1)^3 (t^2 + 4)^2 (t^2 + 2t + 2)(t+1) = 0`,
                r`\begin{cases} t = 0 & (\text{ریشه مرتبه ۲}) \\ t = 1 & (\text{ریشه مرتبه ۳}) \\ t = \pm 2i & (\text{ریشه مضاعف مرتبه ۲}) \\ t = -1 \pm i & (\text{ریشه مرتبه ۱}) \\ t = -1 & (\text{ریشه مرتبه ۱}) \end{cases}`,
              ],
            },
            {
              title: "محاسبه ریشه‌های $t^2 + 2t + 2 = 0$",
              math: [
                r`\Delta = 4 - 8 = -4 < 0 \implies t = \frac{-2 \pm 2i}{2} = -1 \pm i`,
              ],
            },
          ],
          answer: [
            r`y = C_1 + C_2 x + \left(C_3 + C_4 x + C_5 x^2\right)e^x + \left(C_6 + C_7 x\right)\cos(2x) + \left(C_8 + C_9 x\right)\sin(2x) + e^{-x}\left(C_{10}\cos x + C_{11}\sin x\right) + C_{12}e^{-x}`,
          ],
          note: "شمارش ثابت‌ها: ۲ + ۳ + ۴ + ۲ + ۱ = ۱۲ ثابت دلخواه مستقل، دقیقاً برابر با مرتبه معادله.",
        },
      },
    ],
  },
];
