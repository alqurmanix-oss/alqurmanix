(function () {
  if (window.__adsAI) return;
  window.__adsAI = true;

  // إعدادات عامة
  var SETTINGS = {
    minGap: 2,            // أقل عدد فقرات بين إعلانين
    maxAds: 2,            // عدد الإعلانات داخل المحتوى
    popupDelay: 5000,     // تأخير البوب (مللي ثانية)
    minParagraphs: 3      // أقل عدد فقرات لحقن الإعلانات
  };

  // ===== أدوات مساعدة =====
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return (root || document).querySelectorAll(sel); }

  function getContentRoot() {
    return qs("article") || qs(".post-body") || qs(".entry-content") || qs("main") || document.body;
  }

  function visible(el) {
    var r = el.getBoundingClientRect();
    return r.height > 20 && r.width > 20;
  }

  function pickParagraphs(root) {
    var ps = Array.from(qsa("p", root)).filter(visible);
    return ps;
  }

  // ===== إنشاء الإعلانات =====
  function adBox(html, margin) {
    var d = document.createElement("div");
    d.style.cssText = "display:block;text-align:center;margin:" + (margin || "24px 0") + ";";
    d.innerHTML = html;
    return d;
  }

  function createAd1() {
    return adBox(`
      <script>
        atOptions = {
          'key' : '6e875cc37b483ebcf03c1a3b504e2982',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      <\/script>
      <script src="https://www.highperformanceformat.com/6e875cc37b483ebcf03c1a3b504e2982/invoke.js"><\/script>
    `, "20px 0");
  }

  function createAd2() {
    return adBox(`
      <script async="async" data-cfasync="false" src="https://pl29202060.profitablecpmratenetwork.com/e56a0323c18fc687cacb5fdd3739a2da/invoke.js"><\/script>
      <div id="container-e56a0323c18fc687cacb5fdd3739a2da"><\/div>
    `, "28px 0");
  }

  function loadPopup() {
    var s = document.createElement("script");
    s.src = "https://pl29202020.profitablecpmratenetwork.com/d9/60/c3/d960c3f64ef5ab2d626b205e230a7cb3.js";
    document.body.appendChild(s);
  }

  // ===== منطق الاختيار الذكي =====
  function chooseSlots(paragraphs) {
    var n = paragraphs.length;
    if (n < SETTINGS.minParagraphs) return [];

    // نقاط مرشحة: بعد 1، ~30%، ~60% من المحتوى
    var candidates = [
      Math.min(1, n - 1),
      Math.floor(n * 0.3),
      Math.floor(n * 0.6)
    ];

    // تنظيف القيم + إزالة التكرار
    var uniq = Array.from(new Set(candidates))
      .filter(function (i) { return i > 0 && i < n; })
      .sort(function (a, b) { return a - b; });

    // فرض مسافة بين الإعلانات
    var picked = [];
    uniq.forEach(function (idx) {
      if (picked.length >= SETTINGS.maxAds) return;
      if (!picked.length || (idx - picked[picked.length - 1]) >= SETTINGS.minGap) {
        picked.push(idx);
      }
    });

    return picked;
  }

  function injectAds() {
    var root = getContentRoot();
    var ps = pickParagraphs(root);

    if (ps.length < SETTINGS.minParagraphs) return;

    var slots = chooseSlots(ps);

    // زرع الإعلانات
    slots.forEach(function (slot, i) {
      var el = (i === 0) ? createAd1() : createAd2();
      ps[slot].after(el);
    });

    // البوب بعد تفاعل (Scroll أو وقت)
    var fired = false;

    function firePopup() {
      if (fired) return;
      fired = true;
      loadPopup();
      window.removeEventListener("scroll", onScroll);
    }

    function onScroll() {
      var sc = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (sc > 0.35) firePopup(); // بعد ما المستخدم يقرأ شوية
    }

    window.addEventListener("scroll", onScroll);
    setTimeout(firePopup, SETTINGS.popupDelay);
  }

  // ===== تشغيل =====
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectAds);
  } else {
    injectAds();
  }
})();
