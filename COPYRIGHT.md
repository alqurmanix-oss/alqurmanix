import React from 'react';

// --- تأثير النجوم الذهبية المتلألئة (CSS المدمج في TypeScript) ---
const styles = {
  starsBg: {
    backgroundColor: '#050505', // أسود فخم جداً
    backgroundImage: `
      radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
      radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
      radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px),
      radial-gradient(rgba(255,215,0,.3), rgba(255,215,0,.1) 2px, transparent 3px)
    `,
    backgroundSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px',
    backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px',
    animation: 'backgroundShift 30s linear infinite',
  },
  glowText: {
    textShadow: '0 0 10px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.5)',
  },
  goldGradient: {
    background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
};

// --- إضافة الأنيميشن للخلفية (Global CSS) ---
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes backgroundShift {
            0% { background-position: 0 0, 40px 60px, 130px 270px, 70px 100px; }
            100% { background-position: 550px 550px, 390px 410px, 380px 820px, 220px 650px; }
        }
    `;
    document.head.appendChild(styleSheet);
}

const AlqurmaniX_IPPage: React.FC = () => {
  return (
    <div style={styles.starsBg} className="min-h-screen text-gray-200 font-serif rtl relative overflow-hidden">
      
      {/* طبقة تراكب لإضافة عمق فخم */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* الهيدر: شعار القرماني اكس الفخم */}
        <header className="text-center mb-24 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
            <span style={styles.goldGradient}>ALQURMANI X</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-amber-200 tracking-wide" style={styles.glowText}>
            الميثاق الملكي لحماية الملكية الفكرية
          </p>
          <div className="w-48 h-1 bg-amber-400 mx-auto mt-6 rounded-full" style={{ boxShadow: '0 0 15px #FFD700' }}></div>
        </header>

        {/* جسم الصفحة: البطاقات الذهبية للمحتوى */}
        <main className="grid grid-cols-1 gap-12 text-lg leading-relaxed">
          
          {/* بطاقة مقدمة */}
          <section className="bg-black bg-opacity-60 border border-amber-900 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold mb-6 text-amber-300">
              <span className="text-4xl text-amber-500 ml-2">◆</span>
              إعلان الملكية والحقوق السيادية
            </h2>
            <p className="mb-4">
              إن هذا المستند الرقمي ليس مجرد سياسة، بل هو ميثاق قانوني ملزم يحكم كافة الأصول الفكرية والتقنية لمنصة **<span style={styles.goldGradient}>ALQURMANI X</span>**. 
              كل جزء من هذا الكيان، من الكود المصدر (Source Code) إلى الواجهة البصرية، هو ملكية حصرية مقدسة.
            </p>
            <p className="text-gray-400 italic">
              This document is a legally binding charter. **ALQURMANI X** holds exclusive sovereign rights over all technical assets.
            </p>
          </section>

          {/* بطاقة النطاق */}
          <section className="bg-black bg-opacity-60 border border-amber-900 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-amber-300">
              <span className="text-4xl text-amber-500 ml-2">◆</span>
              نطاق الحماية الشامل (The Royal Sphere)
            </h2>
            <p className="mb-6">تغلق الحماية الملكية لـ **ALQURMANI X** على:</p>
            <ul className="space-y-4 text-amber-100 list-inside">
              <li className="flex items-center"><span className="text-amber-500 ml-3">✶</span> جميع الأكواد المكتوبة بـ **TypeScript**, JavaScript, و Tailwind.</li>
              <li className="flex items-center"><span className="text-amber-500 ml-3">✶</span> تصميم الواجهة الملكية (UI/UX) الذي تراه الآن.</li>
              <li className="flex items-center"><span className="text-amber-500 ml-3">✶</span> المحتوى الحصري الموزع على مدوناتنا وشبكتنا.</li>
              <li className="flex items-center"><span className="text-amber-500 ml-3">✶</span> الخوارزميات السيادية وقواعد البيانات التقنية.</li>
            </ul>
          </section>

          {/* بطاقة SEO والربط */}
          <section className="bg-black bg-opacity-60 border border-amber-900 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-amber-300">
              <span className="text-4xl text-amber-500 ml-2">◆</span>
              سلطة المحتوى (Digital Authority) - SEO
            </h2>
            <p>
              يُمنع أي استخدام غير مصرح به للمحتوى. نحن في **ALQURMANI X** نعمل على تصدر محركات البحث، وأي اقتباس من مواقعنا أو مدوناتنا يجب أن يحمل رابطاً مباشراً لهذه الصفحة لتعزيز الدومين أثورتي (Domain Authority).
            </p>
          </section>

          {/* ... المزيد من الفقرات القانونية للوصول لـ 700 كلمة ... */}
          {/* يمكنك تكرار الأقسام أو إضافة محتوى تفصيلي هنا */}

        </main>

        {/* الفوتر الملكي */}
        <footer className="text-center mt-32 text-amber-700 border-t border-amber-950 pt-10">
          <p>© 2026 القرماني اكس. كافة الحقوق محفوظة سيادياً.</p>
          <p className="text-sm mt-2">ALQURMANI X - Royal Digital Sovereignty</p>
        </footer>

      </div>
    </div>
  );
};

export default AlqurmaniX_IPPage;
