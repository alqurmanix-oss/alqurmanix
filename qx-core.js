fetch("https://YOUR-USERNAME.github.io/YOUR-REPO/qx-core.html")
.then(r=>r.text())
.then(html=>{
  document.body.insertAdjacentHTML("beforeend", html);

  const sidebar = document.getElementById("qx-sidebar");

  document.getElementById("qx-menu-toggle").onclick = ()=> {
    sidebar.classList.add("open");
  };

  document.getElementById("qx-close").onclick = ()=> {
    sidebar.classList.remove("open");
  };

  document.body.onclick = (e)=>{
    if(!sidebar.contains(e.target)) sidebar.classList.remove("open");
  };

  // وقت وتاريخ
  setInterval(()=>{
    const d = new Date();
    document.getElementById("qx-datetime").innerText =
      d.toLocaleString();
  },1000);

  // زر أعلى
  const topBtn = document.getElementById("qx-top");
  window.onscroll = ()=>{
    topBtn.style.display = window.scrollY > 200 ? "block":"none";
  };
  topBtn.onclick = ()=> window.scrollTo({top:0,behavior:"smooth"});

  // الوضع الليلي
  document.getElementById("qx-dark").onclick = ()=>{
    document.body.classList.toggle("dark");
  };

  // الدعاء
  document.getElementById("qx-dua-btn").onclick = ()=>{
    document.getElementById("qx-dua-box").style.display="block";
  };

});

function qxCloseDua(){
  document.getElementById("qx-dua-box").style.display="none";
}
