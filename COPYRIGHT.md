<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ALQURMANI X | الملكية الفكرية</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Reem+Kufi:wght@400;700&display=swap');

        :root {
            --gold-primary: #D4AF37;
            --gold-secondary: #F1D592;
            --black-deep: #050505;
        }

        body {
            margin: 0;
            padding: 0;
            background-color: var(--black-deep);
            color: #e0e0e0;
            font-family: 'Amiri', serif;
            overflow-x: hidden;
            line-height: 1.8;
        }

        /* خلفية النجوم الذهبية المتحركة */
        .stars-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
            overflow: hidden;
        }

        .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0.5;
            animation: move-stars linear infinite;
        }

        .star.gold {
            background: var(--gold-primary);
            box-shadow: 0 0 10px var(--gold-primary);
        }

        @keyframes move-stars {
            from { transform: translateY(0); }
            to { transform: translateY(-1000px); }
        }

        /* الإطار الملكي المحيط بالصفحة */
        .royal-border {
            position: fixed;
            top: 20px;
            bottom: 20px;
            left: 20px;
            right: 20px;
            border: 2px solid var(--gold-primary);
            pointer-events: none;
            z-index: 100;
            opacity: 0.3;
        }

        .container {
            max-width: 900px;
            margin: 100px auto;
            padding: 40px;
            background: rgba(0, 0, 0, 0.85);
            border: 1px solid rgba(212, 175, 55, 0.2);
            box-shadow: 0 0 50px rgba(0, 0, 0, 1);
            position: relative;
            z-index: 10;
        }

        header {
            text-align: center;
            margin-bottom: 60px;
        }

        .brand-name {
            font-family: 'Reem Kufi', sans-serif;
            font-size: 4rem;
            background: linear-gradient(to bottom, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
        }

        .subtitle {
            font-size: 1.5rem;
            color: var(--gold-secondary);
            letter-spacing: 5px;
            text-transform: uppercase;
            margin-top: 10px;
            border-bottom: 1px solid var(--gold-primary);
            display: inline-block;
            padding-bottom: 5px;
        }

        h2 {
            color: var(--gold-primary);
            border-right: 5px solid var(--gold-primary);
            padding-right: 15px;
            margin-top: 40px;
            font-size: 2rem;
        }

        p {
            font-size: 1.25rem;
            text-align: justify;
            margin-bottom: 25px;
        }

        .highlight {
            color: var(--gold-secondary);
            font-weight: bold;
        }

        .seo-tags {
            margin-top: 50px;
            padding: 20px;
            border-top: 1px dashed var(--gold-primary);
            font-size: 0.9rem;
            color: #666;
            text-align: center;
        }

        footer {
            text-align: center;
            margin-top: 50px;
            padding: 30px;
            font-family: 'Reem Kufi', sans-serif;
            color: var(--gold-primary);
        }

        /* زخرفة الزوايا */
        .corner {
            position: absolute;
            width: 50px;
            height: 50px;
            border: 3px solid var(--gold-primary);
        }
        .top-right { top: -5px; right: -5px; border-left: 0; border-bottom: 0; }
        .bottom-left { bottom: -5px; left: -5px; border-right: 0; border-top: 0; }

    </style>
</head>
<body>

    <div class="stars-container" id="stars"></div>
    <div class="royal-border"></div>

    <div class="container">
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>

        <header>
            <h1 class="brand-name">ALQURMANI X</h1>
            <div class="subtitle">الميثاق الملكي للملكية الفكرية</div>
        </header>

        <main>
            <h2>أولاً: السيادة الرقمية</h2>
            <p>
                تُعلن إدارة <span class="highlight">ALQURMANI X</span> أن هذا الفضاء الرقمي، بكل ما يحتويه من منظومات برمجية مطورة بلغة <span class="highlight">TypeScript</span>، وتصاميم هندسية، ومحتوى إبداعي، هو ملكية حصرية تخضع لقوانين الحماية الدولية. إننا لا نقدم مجرد خدمات، بل نبني إرثاً رقمياً فريداً يمنع نسخه أو تقليده تحت طائلة المسؤولية القانونية الكبرى.
            </p>

            <h2>ثانياً: حماية الأصول البرمجية</h2>
            <p>
                كل سطر برمجى (Source Code) تم بناؤه داخل أروقة <span class="highlight">القرماني اكس</span> هو بمثابة "بصمة جينية" خاصة بنا. يُحظر تماماً فك التشفير، أو إعادة الهندسة، أو محاولة استنساخ الخوارزميات التي تدير شبكتنا التقنية في مرسى مطروح وأسوان وعبر العالم الرقمي.
            </p>

            <h2>ثالثاً: استراتيجية الصدارة (SEO Master)</h2>
            <p>
                هذه الوثيقة هي المرجع الأعلى لكافة مدوناتنا. أي استخدام لاسم العلامة التجارية <span class="highlight">ALQURMANI X</span> في أي سياق رقمي يجب أن يرتبط بهذا الرابط الرسمي. نحن نصيغ الكلمات لنتصدر المحركات، ونحمي المحتوى لنبقى في القمة. إن قوة "الدومين" الخاصة بنا تستمد هيبتها من أصالة هذا المحتوى.
            </p>

            <p>
                [نص إضافي احترافي يتجاوز 700 كلمة يتناول تفاصيل حماية البيانات، حقوق النشر، التراخيص التجارية، وسياسة الاستخدام العادل للأدوات التقنية التابعة للقرماني اكس...]
            </p>
        </main>

        <div class="seo-tags">
            الكلمات الافتتاحية: القرماني اكس، ALQURMANI X، حقوق الملكية الفكرية، TypeScript Programming، حماية المحتوى، تصدر محركات البحث 2026.
        </div>
    </div>

    <footer>
        &copy; 2026 ALQURMANI X - جميع الحقوق محفوظة سيادياً
    </footer>

    <script>
        // توليد النجوم برمجياً لضمان الفخامة
        const container = id('stars');
        function id(v){return document.getElementById(v);}
        
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            const size = Math.random() * 3 + 'px';
            star.className = 'star' + (Math.random() > 0.8 ? ' gold' : '');
            star.style.width = size;
            star.style.height = size;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDuration = (Math.random() * 50 + 10) + 's';
            container.appendChild(star);
        }
    </script>
</body>
</html>
