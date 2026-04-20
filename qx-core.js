(function() {
  // 1. القالب الكامل للـ HTML (تم دمجه لضمان الظهور الفوري)
  const qxTemplate = `
    <div id="qx-root">
      <div id="qx-menu-toggle"><span></span><span></span><span></span><span></span></div>
      <aside id="qx-sidebar">
        <div class="qx-header">
          <div id="qx-country">Alqurmani X</div>
          <div id="qx-datetime"></div>
        </div>
        <input id="qx-search" placeholder="🔍 بحث في القرماني..." />
        <nav id="qx-menu">
          <a href="https://alqurmanix.com/">🏠 الرئيسية</a>
          <a href="https://alqurmanix.com/policies.html">📜 السياسات والقوانين</a>
          <a href="https://alqurmanix.com/services.html">🧩 خدماتنا</a>
          <a href="https://alqurmanix.com/platforms.html">🌐 منصاتنا</a>
          <a href="https://alqurmanix.com/support.html">🧑‍💻 الدعم الفني</a>
        </nav>
        <button id="qx-close">✖</button>
      </aside>
      <div id="qx-left">
        <span id="qx-status">🟢 متصل</span>
        <div id="qx-globe">🌍</div>
      </div>
      <div id="qx-dua-btn">✨</div>
      <div id="qx-dua-box">
        <div class="content">
          <p>اللهم اجعل هذا العمل شاهدًا لي لا عليّ، واجعله في ميزان حسناتي.</p>
          <p class="author">المؤسس: محمد بسيوني</p>
          <button onclick="document.getElementById('qx-dua-box').style.display='none'">إغلاق</button>
        </div>
      </div>
      <div id="qx-top">⬆</div>
    </div>
  `;

  // 2. الحقن في الصفحة
  document.body.insertAdjacentHTML("beforeend", qxTemplate);

  // 3. المنطق البرمجي (الفتح والقفل)
  const sidebar = document.getElementById("qx-sidebar");
  const menuToggle = document.getElementById("qx-menu-toggle");
  const closeBtn = document.getElementById("qx-close");

  if(menuToggle) menuToggle.onclick = () => sidebar.classList.add("open");
  if(closeBtn) closeBtn.onclick = () => sidebar.classList.remove("open");

  // إغلاق عند الضغط في الخارج
  document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // تحديث الوقت
  setInterval(() => {
    const d = new Date();
    const el = document.getElementById("qx-datetime");
    if(el) el.innerText = d.toLocaleString('ar-EG');
  }, 1000);

  // زر الرجوع للأعلى
  const topBtn = document.getElementById("qx-top");
  window.addEventListener('scroll', () => {
    if(topBtn) topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  if(topBtn) topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

  // تفعيل زر الدعاء
  const duaBtn = document.getElementById("qx-dua-btn");
  if(duaBtn) duaBtn.onclick = () => document.getElementById("qx-dua-box").style.display="block";

})();
