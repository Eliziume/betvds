!function(){const t=document.querySelector(".burger-btn"),e=document.querySelector(".nav"),c=document.querySelector("body");t.addEventListener("click",(function(){t.classList.toggle("active"),t.classList.toggle("not-active"),e.classList.toggle("active"),c.classList.toggle("lock")})),document.querySelectorAll(".menu__link").forEach((s=>{s.addEventListener("click",(()=>{c.classList.contains("lock")&&(c.classList.remove("lock"),e.classList.toggle("active"),t.classList.toggle("active"),t.classList.toggle("not-active"))}))}))}();