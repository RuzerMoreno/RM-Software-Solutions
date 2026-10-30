const $=s=>document.querySelector(s);
const WA="https://wa.me/529833111706?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20RM%20Software%20Solutions";
$("#wa").href=WA;$("#yr").textContent=new Date().getFullYear();
const I=p=>`<svg viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
// Servicios (iconos, nombre, descripción)
const SV=[
[`<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>`,"Desarrollo de páginas web","Sitios rápidos, claros y adaptables a cualquier dispositivo."],
[`<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>`,"Catálogos digitales","Menús y catálogos con pedidos por WhatsApp y contenido editable."],
[`<path d="M5 8h14l-1 12H6zM9 8a3 3 0 016 0"/>`,"Tiendas en línea","Presenta y vende tus productos desde el navegador."],
[`<path d="M4 4h16v10H4zM8 20h8M12 14v6"/>`,"Sistemas de punto de venta","Ventas, inventario y control para barberías, boutiques y más."],
[`<path d="M3 5h18v14H3zM3 9h18"/>`,"Aplicaciones web","Herramientas que funcionan desde el navegador, sin instalar nada."],
[`<path d="M20 12a8 8 0 10-3 6.2M20 5v5h-5"/>`,"Automatización de procesos","Reduce tareas repetitivas y errores en tu operación diaria."],
[`<path d="M12 3v3M12 18v3M3 12h3M18 12h3M7 7h10v10H7z"/>`,"Soluciones con inteligencia artificial","Asistentes y herramientas con IA aplicadas a tu negocio."],
[`<path d="M14 6a4 4 0 005 5l-9 9-3-3 9-9a4 4 0 00-2-2z"/>`,"Mantenimiento y actualización web","Cambios, mejoras y cuidado continuo de tu sitio."],
[`<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 2 3 3 7 3s7-1 7-3V6M5 12c0 2 3 3 7 3s7-1 7-3"/>`,"Integraciones y bases de datos","Organiza y conecta la información de tu negocio."],
[`<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>`,"Software personalizado","Desarrollo a la medida de lo que tu negocio necesita."]];
$("#sv").innerHTML=SV.map(s=>`<article class="cd sv"><div class="ic">${I(s[0])}</div><h3>${s[1]}</h3><p>${s[2]}</p><a href="#contacto">Cotizar este servicio</a></article>`).join("");
// Proyectos (img: captura real si existe; si no, se muestra un monograma)
const BP="https://ruzermoreno.github.io/RM-Software-Solutions/assets/screenshots/";
const PJ=[
["X by Ximena POS","Sistemas","Sistema de punto de venta para una boutique, para organizar operaciones y facilitar la administración del negocio.",["Python","POS","Inventario","Gestión de ventas"],[["Ver en GitHub","https://github.com/RuzerMoreno/X-by-Ximena-POS"]],"assets/xbyximenapos.png"],
["Barber POS","Sistemas","Punto de venta y administración para barberías. Pago único, licencia perpetua por equipo y sin mensualidades.",["POS","Licencia perpetua","Funciona sin internet"],[["Ver proyecto","https://ruzermoreno.github.io/RM-Software-Solutions/"]],BP+"basico/dashboard-basico.png"],
["Culpable POS","Sistemas","Punto de venta para apoyar la operación diaria de un negocio, con enfoque en ventas y administración.",["Python","Software de escritorio","Ventas","Base de datos"],[["En desarrollo"]],""],
["RM-BURGER","Web","Catálogo digital para negocio de hamburguesas, con menú, pedidos por WhatsApp y panel administrativo para actualizar contenido.",["HTML5","CSS3","JavaScript","LocalStorage"],[["Ver catálogo","https://ruzermoreno.github.io/rm-burguer/"]],"assets/rmburguer.png"],
["X by Ximena Web","Web","Experiencia web para una boutique, orientada a presentar productos y facilitar que los clientes conozcan el catálogo.",["HTML5","CSS3","JavaScript","Catálogo digital"],[["Ver sitio","https://x-by-ximena-catalogo.onrender.com/"]],"assets/xbyximena.png"],
["JURVO","Web","Plataforma de servicios jurídicos para encontrar al abogado indicado: compara especialistas, experiencia, opiniones y disponibilidad, y agenda una consulta.",["Plataforma web","Directorio de abogados","Agenda de consultas"],[["Ver sitio","https://jurvo.onrender.com/"]],"assets/jurvo.png"],
["TaskFlow","Web","Aplicación de gestión de tareas para organizar actividades desde el navegador.",["HTML5","CSS3","JavaScript","Responsive"],[["Ver demostración","https://ruzermoreno.github.io/taskflow/"]],"assets/taskflow.png"],
["RM Wedding","Web","Proyecto web de RM Software Solutions. Descripción y enlace por agregar.",[],[["Enlace pendiente"]],""],
["Sitio web de RM Software Solutions","Web","Sitio para presentar servicios, proyectos y medios de contacto en una interfaz adaptable.",["HTML5","CSS3","JavaScript","GitHub Pages"],[["Ver sitio","https://ruzermoreno.github.io/RM-Software-Solutions/"]],"assets/rmsoftwaresolutions.png"]];
function drawPJ(f){$("#pj").innerHTML=PJ.filter(p=>f==="all"||p[1]===f).map(p=>`<article class="cd pj"><div class="pv">${p[5]?`<img src="${p[5]}" alt="Captura de ${p[0]}" loading="lazy" onerror="this.parentNode.innerHTML='<span>${p[0][0]}</span>'">`:`<span>${p[0][0]}</span>`}</div><div class="pb"><small>${p[1]==="Web"?"Web y catálogos":"Sistemas y POS"}</small><h3>${p[0]}</h3><p>${p[2]}</p><div class="tg">${p[3].map(t=>`<i>${t}</i>`).join("")}</div><div class="pl">${p[4].map(l=>l[1]?`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`:`<em>${l[0]}</em>`).join("")}</div></div></article>`).join("")}
drawPJ("all");
document.querySelectorAll("#fl button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#fl button").forEach(x=>x.classList.remove("on"));b.classList.add("on");drawPJ(b.dataset.f)});
// Tecnologías con logotipos (Devicon / Simple Icons)
const D=n=>"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"+n,S=n=>"https://cdn.simpleicons.org/"+n+"/fff";
const T=[["Desarrollo web",[["HTML5",D("html5/html5-plain.svg")],["CSS3",D("css3/css3-plain.svg")],["JavaScript",D("javascript/javascript-plain.svg")],["Python",D("python/python-plain.svg")],["React",D("react/react-original.svg")],["PHP",D("php/php-plain.svg")]]],
["Backend y bases de datos",[["Flask",D("flask/flask-original.svg")],["PostgreSQL",D("postgresql/postgresql-plain.svg")],["Supabase",D("supabase/supabase-original.svg")],["SQLite",D("sqlite/sqlite-plain.svg")],["Node.js",D("nodejs/nodejs-plain.svg")],["MySQL",D("mysql/mysql-plain.svg")]]],
["Herramientas de desarrollo",[["Visual Studio Code",D("vscode/vscode-plain.svg")],["Git",D("git/git-plain.svg")],["GitHub",D("github/github-original.svg")],["Claude Code",S("claude")],["OpenAI Codex",S("openai")],["Cursor",S("cursor")],["Postman",D("postman/postman-plain.svg")]]],
["Inteligencia artificial",[["OpenAI",S("openai")],["ChatGPT",S("openai")],["Claude",S("claude")],["Ollama",S("ollama")]]],
["Diseño y experiencia",[["Figma",D("figma/figma-plain.svg")],["Adobe Photoshop",D("photoshop/photoshop-plain.svg")],["Adobe Illustrator",D("illustrator/illustrator-plain.svg")]]]];
$("#tk").innerHTML=T.map(c=>`<div class="tc"><h3>${c[0]}</h3><div class="tl">${c[1].map(t=>`<div class="tb2" tabindex="0" data-n="${t[0]}" role="img" aria-label="${t[0]}"><img src="${t[1]}" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode('${t[0]}'))"></div>`).join("")}</div></div>`).join("");
// Proceso y valores
const PR=[["Descubrimiento","Entendemos tu negocio y lo que necesitas."],["Planeación","Definimos alcance, funciones y tiempos."],["Diseño","Diseñamos pantallas claras y fáciles de usar."],["Desarrollo","Construimos la solución con código organizado."],["Pruebas","Revisamos que todo funcione en distintos dispositivos."],["Implementación","Publicamos o instalamos tu sistema."],["Mantenimiento","Damos soporte y seguimos mejorándolo."]];
$("#pr").innerHTML=PR.map((s,i)=>`<div class="st"><b>${i+1}</b><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("");
const PQ=[["Soluciones personalizadas","Cada proyecto parte de tu negocio, no de una plantilla."],["Diseño centrado en el usuario","Interfaces simples para quien las usa todos los días."],["Desarrollo funcional","Primero que funcione bien; después, que luzca mejor."],["Código organizado","Estructura ordenada que facilita mejoras futuras."],["Adaptable a dispositivos","Computadora, tablet o teléfono."],["Seguridad y buenas prácticas","Cuidado de la información desde el diseño."],["Comunicación directa","Hablas con quien desarrolla tu proyecto."],["Mejora continua","Tu solución evoluciona junto con tu negocio."]];
$("#pq").innerHTML=PQ.map(p=>`<div class="cd"><h3>${p[0]}</h3><p>${p[1]}</p></div>`).join("");
// Redes
const SO=[["Facebook",S("facebook"),"https://www.facebook.com/RMSoftwareySolutions/"],["Instagram",S("instagram"),"https://www.instagram.com/rm.software.solutions/"],["TikTok",S("tiktok"),"https://www.tiktok.com/@rm.softwareysolutions"],["WhatsApp",S("whatsapp"),WA],["Correo",S("gmail"),"mailto:morricugc@gmail.com"]];
const so=SO.map(s=>`<a href="${s[2]}" aria-label="${s[0]}" title="${s[0]}" ${s[2].startsWith("http")?'target="_blank" rel="noopener"':""}><img src="${s[1]}" alt="" loading="lazy"></a>`).join("");
$("#so1").innerHTML=so;$("#so2").innerHTML=so;
// Menú, progreso, reveal
const hd=$("#hd"),nv=$("#nav"),bg=$("#bg");
bg.onclick=()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
nv.querySelectorAll("a").forEach(a=>a.onclick=()=>{nv.classList.remove("open");bg.setAttribute("aria-expanded",false)});
addEventListener("scroll",()=>{hd.classList.toggle("sc",scrollY>30);$("#pg").style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+"%"},{passive:true});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
// Iluminación al pasar el cursor (fondo y tarjetas)
if(matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){const g=$("#gl");
addEventListener("pointermove",e=>{g.style.opacity=1;g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;const c=e.target.closest&&e.target.closest(".cd");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--x",e.clientX-r.left+"px");c.style.setProperty("--y",e.clientY-r.top+"px")}},{passive:true});
document.addEventListener("pointerleave",()=>g.style.opacity=0)}
// Números cayendo (se difuminan hacia la mitad)
(function(){const c=$("#mx");if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;const x=c.getContext("2d");let w,h,cols,d;
function rs(){w=c.width=c.offsetWidth;h=c.height=c.offsetHeight;cols=Math.floor(w/22);d=Array.from({length:cols},()=>Math.random()*h/16)}
rs();addEventListener("resize",rs);
setInterval(()=>{x.fillStyle="rgba(7,8,10,.12)";x.fillRect(0,0,w,h);x.fillStyle="#d4af37";x.font="14px monospace";
d.forEach((y,i)=>{x.fillText(Math.floor(Math.random()*10),i*22,y*16);d[i]=y*16>h&&Math.random()>.97?0:y+1})},70)})();