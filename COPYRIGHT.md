<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Qurmanix | Intellectual Property</title>

<meta name="description" content="Qurmanix Global Intellectual Property Protection System">
<meta name="theme-color" content="#D4AF37">

<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&family=Poppins:wght@300;400;600&family=Orbitron:wght@400;800&display=swap" rel="stylesheet">

<style>
:root{
  --gold:#D4AF37;
  --bg:#03050a;
}

*{margin:0;padding:0;box-sizing:border-box;}

body{
  background: radial-gradient(circle at top,#0b0f1a,#000);
  color:#eee;
  overflow-x:hidden;
  transition:.4s;
}

/* Glow Background */
body::before{
  content:"";
  position:fixed;
  width:600px;
  height:600px;
  background:radial-gradient(circle, rgba(212,175,55,.2), transparent);
  top:-200px;
  left:-200px;
  filter:blur(100px);
  z-index:-1;
}

/* Layout */
.container{
  max-width:1100px;
  margin:auto;
  padding:30px;
}

/* Header */
header{
  text-align:center;
  padding:100px 20px 60px;
}

header h1{
  font-family:'Orbitron';
  font-size:3.5rem;
  color:var(--gold);
  text-shadow:0 0 30px rgba(212,175,55,.9);
}

header p{
  opacity:.7;
  margin-top:10px;
}

/* Cards */
.card{
  background:rgba(255,255,255,.05);
  backdrop-filter:blur(25px);
  border:1px solid rgba(255,255,255,.08);
  border-radius:25px;
  padding:40px;
  margin:30px 0;
  box-shadow:0 0 60px rgba(0,0,0,.6);
  transition:.4s;
}

.card:hover{
  transform:translateY(-5px) scale(1.01);
}

.card h2{
  color:var(--gold);
  margin-bottom:15px;
  font-family:'Orbitron';
}

footer{
  text-align:center;
  padding:40px;
  opacity:.6;
  font-size:14px;
}
</style>
</head>

<body>

<header>
  <h1>QURMANIX</h1>
  <p id="subtitle"></p>
</header>

<div class="container" id="content"></div>

<footer id="footer"></footer>

<script>
// ===== Detect Language =====
let userLang = navigator.language || "ar";

// Normalize (example: fr-FR → fr)
userLang = userLang.split("-")[0];

// RTL Languages
const rtlLangs = ["ar","fa","he","ur"];

// Supported languages (expandable to 13+)
const supported = ["ar","en","fr","de","es","tr","ru","it","pt","id","hi","zh","ja"];

// Fallback logic
let lang = supported.includes(userLang) ? userLang : "en";

// Default Arabic override if unknown
if(!userLang) lang = "ar";

// Direction
document.documentElement.dir = rtlLangs.includes(lang) ? "rtl" : "ltr";

// Font switch
document.body.style.fontFamily =
  rtlLangs.includes(lang) ? "'Cairo',sans-serif" : "'Poppins',sans-serif";

// ===== Content Engine =====
const contentData = {

ar:{
subtitle:"إطار حماية الملكية الفكرية العالمي",
footer:"© 2026 القرمانيكس - جميع الحقوق محفوظة",
sections:[
{
title:"مقدمة استراتيجية",
text:`القرمانيكس ليست مجرد منصة رقمية تقليدية، بل هي منظومة تقنية متقدمة تم تطويرها وفق أعلى معايير الابتكار الرقمي، حيث تم تصميم كل عنصر داخل هذا الكيان بعناية فائقة ليعكس مفهوم السيطرة الكاملة على الأصول الرقمية. هذه الصفحة تمثل الإطار القانوني والهيكلي الذي يحكم جميع مكونات النظام ويضمن حماية شاملة للملكية الفكرية.`
},
{
title:"الملكية الحصرية",
text:`جميع العناصر الرقمية داخل القرمانيكس، بما في ذلك الأكواد البرمجية، التصميمات، قواعد البيانات، الخوارزميات، والهندسة المعمارية للنظام، تعتبر ملكية حصرية. لا يحق لأي طرف نسخ أو إعادة توزيع أو تعديل أي جزء بدون إذن رسمي.`
},
{
title:"حماية العلامة",
text:`تمثل هوية القرمانيكس علامة رقمية مميزة تعكس مستوى عالٍ من الاحترافية والتميز. أي محاولة لاستخدام الاسم أو الشعار بدون تصريح تعتبر انتهاكًا مباشرًا.`
},
{
title:"قيود صارمة",
text:`يحظر تمامًا تحليل النظام أو محاولة استغلاله أو إعادة استخدام مكوناته لأي أغراض تجارية أو تقنية.`
},
{
title:"الأمن والمراقبة",
text:`يتم تشغيل أنظمة مراقبة ذكية على مدار الساعة لرصد أي نشاط غير طبيعي، مع تطبيق إجراءات حماية متقدمة لضمان سلامة البيانات.`
},
{
title:"الإطار القانوني",
text:`تخضع جميع العمليات داخل القرمانيكس لقوانين الملكية الفكرية الدولية، ويتم التعامل مع أي انتهاكات بصرامة قانونية كاملة.`
},
{
title:"بيان الهيمنة الرقمية",
text:`القرمانيكس هو كيان رقمي متكامل يمثل نموذجًا متقدمًا للسيطرة التقنية والملكية الفكرية. التعامل مع هذا النظام يتطلب الالتزام الكامل بجميع القوانين والشروط.`
}
]
},

en:{
subtitle:"Global Intellectual Property Framework",
footer:"© 2026 Qurmanix - All Rights Reserved",
sections:[
{
title:"Strategic Introduction",
text:`Qurmanix is not a conventional platform, but a highly engineered digital ecosystem designed with precision and authority.`
},
{
title:"Exclusive Ownership",
text:`All assets are protected and owned exclusively.`
},
{
title:"Brand Protection",
text:`Brand identity is strictly secured.`
},
{
title:"Restrictions",
text:`Unauthorized usage is prohibited.`
},
{
title:"Security",
text:`Advanced monitoring is active.`
},
{
title:"Legal Framework",
text:`Subject to global law.`
},
{
title:"Final Statement",
text:`Qurmanix is a protected digital entity.`
}
]
}

};

// ===== Render =====
const data = contentData[lang] || contentData["en"];

document.getElementById("subtitle").innerText = data.subtitle;
document.getElementById("footer").innerText = data.footer;

let html="";
data.sections.forEach(sec=>{
  html+=`
  <div class="card">
    <h2>${sec.title}</h2>
    <p>${sec.text.repeat(6)}</p>
  </div>
  `;
});

document.getElementById("content").innerHTML = html;

</script>

</body>
</html>
