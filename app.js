/* ICETEX al Día — Vibras Positivas HM */
(() => {
  const C = window.CONTENIDO;
  const TZ = "America/Bogota";
  const SITE = "https://icetex-al-dia.netlify.app";
  const $ = (s) => document.querySelector(s);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} }
  };

  /* ---------- Idioma ---------- */
  const T = {
    es: {
      buscar: "Buscar en las noticias…", en_vivo: "Buscando en vivo…", vivo_ok: "En vivo · {n} nuevas",
      vivo_off: "Resultados del robot", sin_hoy: "Hoy no hay noticias nuevas del caso. Esto es lo más reciente:",
      nuevas: "{n} noticias desde su última visita", robot: "Robot: {f}", copiado: "Texto copiado",
      leer: "Leer en el medio", actualizado: "Actualizado {f}", estado: "Estado del caso",
      foto_de: "Foto: {m}", ver: "Ver video", nada: "No hay noticias con esa búsqueda.",
      sin_videos: "El robot está buscando los videos más recientes del caso. Mientras tanto, véalos directo en YouTube:",
      yt: "Ver videos del caso en YouTube"
    },
    en: {
      al_dia: "Tracker", nav_hoy: "Today", nav_caso: "The case", nav_plata: "The money", nav_linea: "Progress", nav_quienes: "Who",
      nav_versiones: "Both sides", nav_videos: "Videos", nav_noticias: "News", nav_peticion: "Petition", actualizar: "Refresh",
      seguimiento: "Live citizen tracker",
      hero_t: "Where did ICETEX's student-loan money go?",
      hero_p: "The new administration says that between 2022 and 2026 contractors grew 80% and billions were paid for a project its own study declared unviable, while new loans collapsed. Follow the case here, day by day.",
      kpi_1: "more contractors", kpi_2: "contract spending", kpi_3: "in an unviable project", kpi_4: "days since the complaint",
      hora_col: "Colombia time", hoy_ey: "Latest", hoy_t: "Today", hoy_sub: "Updates every time you open it.",
      caso_ey: "The findings", caso_t: "What the review found",
      caso_sub: "Figures presented by ICETEX president Richard Caicedo on November 4, 2026. They are allegations: oversight bodies have yet to confirm them.",
      plata_ey: "By the numbers", plata_t: "More contracts, fewer students",
      plata_sub: "While contractor spending grew, new loans fell and the interest-rate subsidy for about 200,000 young people ended.",
      m_cred: "New loans approved", m_cred_n: "Approximate figures from the ICETEX report.",
      m_aev: "Education Savings technology contract", m_girado: "delivered in under a year", m_total: "five-year value",
      m_aev_n: "The product never launched: it has no financial viability and no rules approved by the Financial Superintendency.",
      calc_t: "How many semesters would COP 70 billion pay for?", calc_sub: "Slide to the cost of one semester at your university or institute.",
      calc_sem: "Semester at", calc_res: "What contractors cost in one year would cover", calc_unit: "semesters of tuition",
      lin_ey: "The path", lin_t: "Where the case stands",
      lin_sub: "The Comptroller looks at damage to public funds, the Inspector General at officials' conduct and the Attorney General at possible crimes.",
      qui_ey: "The names", qui_t: "Who is involved", qui_sub: "Public information. The report names no individual culprits; that is for oversight bodies to decide.",
      ver_ey: "Both sides", ver_t: "What is alleged and what remains to be proven", ver_sub: "You decide, with the full picture.",
      gob_t: "What the Government alleges", otro_t: "What is missing and the other side",
      vid_ey: "On video", vid_t: "Recent videos", vid_sub: "The robot searches YouTube for the newest videos on the ICETEX case.",
      not_ey: "All the news", not_t: "Real news", not_sub: "The robot fetches them every 30 minutes and the app searches live on open.",
      f_todo: "All", f_contr: "Contracts", f_ahorro: "Education savings", f_cred: "Loans",
      pet_ey: "Take part", pet_t: "Right of petition: let's demand to know what happened to the money",
      pet_sub: "Article 23 of the Constitution and Law 1755 of 2015. Fill it in once and send it to every agency involved at once.",
      f_nombre: "Full name", f_cedula: "ID number", f_ciudad: "City", f_correo: "Email for the reply",
      f_deudor: "I am an ICETEX beneficiary, borrower or co-signer", f_dest: "Sent to",
      enviar: "Send to all at once", copiar: "Copy text", whatsapp: "Share on WhatsApp",
      pet_nota: "Agencies have 15 business days to reply (10 for documents). Keep the sent email as proof. (The petition is in Spanish, as Colombian agencies require.)",
      fuentes: "Sources and credits",
      creditos: "News and video images belong to each linked outlet or channel. Figures are those presented by ICETEX on November 4, 2026, as reported by the cited media.",
      pie: "Independent citizen app. Not affiliated with any party or agency.",
      buscar: "Search the news…", en_vivo: "Searching live…", vivo_ok: "Live · {n} new", vivo_off: "Robot results",
      sin_hoy: "No new stories on the case today. Here is the latest:", nuevas: "{n} stories since your last visit",
      robot: "Robot: {f}", copiado: "Text copied", leer: "Read at the outlet", actualizado: "Updated {f}", estado: "Case status",
      foto_de: "Photo: {m}", ver: "Watch", nada: "No stories match that search.",
      sin_videos: "The robot is fetching the latest videos on the case. Meanwhile, watch them on YouTube:",
      yt: "Watch case videos on YouTube"
    }
  };
  let lang = store.get("lang") || "es";
  const ORIG = {};
  document.querySelectorAll("[data-i18n]").forEach(el => ORIG[el.dataset.i18n] = el.innerHTML);
  const t = (k, vars = {}) => {
    let s = (T[lang] && T[lang][k]) || T.es[k] || ORIG[k] || k;
    Object.entries(vars).forEach(([a, b]) => s = s.replace("{" + a + "}", b));
    return s;
  };
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = lang === "es" ? ORIG[k] : (T.en[k] || ORIG[k]);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
    $("#btnLang").textContent = lang === "es" ? "EN" : "ES";
    renderStatic(); calc(); renderAll(); buildPetition();
  }
  $("#btnLang").onclick = () => { lang = lang === "es" ? "en" : "es"; store.set("lang", lang); applyLang(); };

  /* ---------- Fechas en hora de Colombia ---------- */
  const fmt = (d, opt) => new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en-US", { timeZone: TZ, ...opt }).format(new Date(d));
  const fFecha = (d) => d.length === 4 ? d : d.length <= 7 ? fmt(d + "-15T12:00:00-05:00", { month: "long", year: "numeric" }) : fmt(d + "T12:00:00-05:00", { day: "numeric", month: "short", year: "numeric" });
  const fHora = (d) => fmt(d, { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });
  const diaCol = (d) => fmt(d, { year: "numeric", month: "2-digit", day: "2-digit" });
  function tick() { $("#clock").textContent = fmt(Date.now(), { weekday: "long", day: "numeric", month: "long", hour: "numeric", minute: "2-digit", second: "2-digit" }); }
  setInterval(tick, 1000); tick();

  const esc = (s) => String(s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const num = (n) => Math.round(n).toLocaleString(lang === "es" ? "es-CO" : "en-US");
  const cop = (n) => "$" + Math.round(n).toLocaleString("es-CO");

  /* ---------- Contenido fijo ---------- */
  function renderStatic() {
    $("#kpiDias").textContent = Math.max(0, Math.floor((Date.now() - new Date(C.DENUNCIA)) / 864e5));
    $("#hallazgos").innerHTML = C.HALLAZGOS.map((h, i) => `<article class="find" style="--d:${i * 60}ms"><b>${h.cifra}</b><h4>${h[lang][0]}</h4><p>${h[lang][1]}</p></article>`).join("");
    const max = Math.max(...C.CREDITOS.map(c => c[0]));
    $("#barsCred").innerHTML = C.CREDITOS.map(([v, es, en]) => `<div class="bar"><span>${lang === "es" ? es : en}</span><div class="track"><i style="--w:${(v / max) * 100}%"></i></div><b>≈ ${num(v)}</b></div>`).join("");
    $("#aevFill").style.setProperty("--w", (C.AEV.girado / C.AEV.total * 100).toFixed(1) + "%");
    $("#road").innerHTML = C.ROAD.map((r, i) => `<div class="step ${r.done ? "done" : ""} ${r.now ? "now" : ""}"><i>${i + 1}</i><span>${r[lang]}</span></div>`).join("");
    $("#timeline").innerHTML = C.TIMELINE.slice().reverse().map(e => `<li><time>${fFecha(e.f)}</time><p>${e[lang]}</p></li>`).join("");
    $("#personas").innerHTML = C.PERSONAS.map(p => `<article class="person"><h4>${p.n}</h4><small>${p.r[lang]}</small><p>${p.d[lang]}</p></article>`).join("");
    $("#ojo").textContent = C.OJO[lang];
    $("#gobList").innerHTML = C.GOB.map(p => `<li>${p[lang]}</li>`).join("");
    $("#otroList").innerHTML = C.OTRO.map(p => `<li>${p[lang]}</li>`).join("");
    $("#fuentes").innerHTML = C.FUENTES.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n}</a></li>`).join("");
    if (!$("#destinos").children.length) {
      $("#destinos").innerHTML = C.DESTINOS.map(d => `<label class="d"><input type="checkbox" checked value="${d.m}"> <span>${d.n}<small>${d.m}</small></span></label>`).join("");
      $("#destinos").onchange = buildPetition;
    }
    const tk = C.HALLAZGOS.map(h => `<span><b>${h.cifra}</b> ${h[lang][0]}</span>`).join("");
    $("#ticker").innerHTML = tk + tk;
  }

  // Calculadora: semestres con $70.000 millones
  const range = $("#semRange");
  Object.assign(range, { min: C.CALC.min, max: C.CALC.max, step: C.CALC.paso, value: store.get("sem") || C.CALC.def });
  function calc() {
    $("#semVal").textContent = cop(range.value);
    $("#semN").textContent = num(Math.floor(C.CALC.plata / range.value));
  }
  range.oninput = () => { store.set("sem", range.value); calc(); };

  // Animaciones al aparecer en pantalla
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .2 }) : null;
  const watch = () => document.querySelectorAll(".find,.bars,.meter,.person,.mcard").forEach(el => io ? io.observe(el) : el.classList.add("in"));

  /* ---------- Datos vivos ---------- */
  const RESPALDO = [
    { src: "https://www.lapatria.com/sites/default/files/styles/opengraph_1200x630/public/noticia/2026-11/Icetex.jpeg?itok=zGyu1xaP", medio: "La Patria" },
    { src: "https://www.universidad.edu.co/wp-content/uploads/2026/11/icetexpresidencia.jpg", medio: "Observatorio de la Universidad Colombiana" }
  ];
  let NEWS = [], VIDEOS = [], FOTOS = [], robotAt = null, filtro = "todo";
  const key = (s) => String(s).toLowerCase().normalize("NFD").replace(/[^a-z0-9]/g, "").slice(0, 60);
  const temaDe = (s) => /ahorro|aev|inviable|no viable|83\.?7?/i.test(s) ? "ahorro"
    : /cr[eé]dito|subsidio|tasa|deudor|beca|cartera/i.test(s) ? "creditos" : "contratos";
  const relevante = (s) => /icetex/i.test(s);
  function merge(list) {
    const seen = new Set(NEWS.map(n => key(n.titulo)));
    let added = 0;
    list.forEach(n => {
      if (!n.titulo || !relevante(n.titulo) || seen.has(key(n.titulo))) return;
      seen.add(key(n.titulo)); NEWS.push({ tema: temaDe(n.titulo), ...n }); added++;
    });
    NEWS.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    return added;
  }
  const fallbackImg = (i) => RESPALDO[i % RESPALDO.length].src;
  const card = (n, i) => `
    <a class="ncard ${i === 0 ? "lead" : ""}" href="${esc(n.url)}" target="_blank" rel="noopener" style="--d:${Math.min(i, 8) * 50}ms">
      <div class="img"><img loading="lazy" src="${esc(n.imagen || fallbackImg(i))}" onerror="this.onerror=null;this.src='${fallbackImg(i)}'" alt=""></div>
      <div class="body">
        <small>${esc(n.medio)} <span>${fHora(n.fecha)}</span></small>
        <h4>${esc(n.titulo)}</h4>
        <span class="go">${t("leer")}</span>
      </div>
    </a>`;

  function renderNews() {
    const q = key($("#q").value || "");
    let list = filtro === "todo" ? NEWS : NEWS.filter(n => n.tema === filtro);
    if (q) list = list.filter(n => key(n.titulo + n.medio).includes(q));
    $("#newsList").innerHTML = list.length ? list.slice(0, 48).map(card).join("") : `<p class="muted span">${t("nada")}</p>`;
    $("#robotStamp").textContent = robotAt ? t("robot", { f: fHora(robotAt) }) : "";
  }
  function renderHoy() {
    const hoy = diaCol(Date.now());
    const deHoy = NEWS.filter(n => diaCol(n.fecha) === hoy);
    const last = store.get("lastVisit");
    const desde = last ? NEWS.filter(n => new Date(n.fecha) > new Date(last)).length : 0;
    $("#hoyStamp").textContent = t("actualizado", { f: fHora(Date.now()) });
    $("#hoyStatus").innerHTML = `<span class="label">${t("estado")}</span><p>${C.ESTADO[lang]}</p>${desde ? `<span class="badge">${t("nuevas", { n: desde })}</span>` : ""}`;
    $("#hoyList").innerHTML = deHoy.length ? deHoy.map(card).join("")
      : `<p class="muted span">${t("sin_hoy")}</p>` + NEWS.slice(0, 3).map(card).join("");
  }
  function renderVideos() {
    const box = $("#videoList");
    if (!VIDEOS.length) {
      box.innerHTML = `<p class="muted span">${t("sin_videos")}</p>
        <a class="btn solid big" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query=Icetex+contratistas+Caicedo&sp=CAI%253D">${t("yt")}</a>`;
      return;
    }
    box.innerHTML = VIDEOS.slice(0, 12).map(v => `
      <div class="vcard" data-id="${esc(v.id)}">
        <button class="vthumb" aria-label="${t("ver")}"><img loading="lazy" src="${esc(v.imagen)}" alt=""><span class="play">${t("ver")}</span></button>
        <div class="body"><h4>${esc(v.titulo)}</h4><small>${esc(v.canal)}${v.hace ? " · " + esc(v.hace) : ""}</small></div>
      </div>`).join("");
    box.querySelectorAll(".vcard").forEach(c => c.querySelector(".vthumb").onclick = () => {
      c.querySelector(".vthumb").outerHTML = `<div class="vframe"><iframe src="https://www.youtube-nocookie.com/embed/${c.dataset.id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="YouTube"></iframe></div>`;
    });
  }

  /* Portada con fotos actuales de las noticias, rotando */
  let slideIx = 0, slideTimer;
  function renderHero() {
    const fotos = FOTOS.length ? FOTOS : NEWS.filter(n => n.imagen).slice(0, 8).map(n => ({ src: n.imagen, medio: n.medio }));
    const set = fotos.length ? fotos : RESPALDO;
    const box = $("#heroSlides");
    box.innerHTML = set.map((f, i) => `<div class="slide ${i === 0 ? "on" : ""}" style="background-image:url('${esc(f.src)}')" data-medio="${esc(f.medio)}"></div>`).join("");
    const credit = () => { const m = box.children[slideIx]?.dataset.medio; $("#heroCredit").textContent = m ? t("foto_de", { m }) : ""; };
    slideIx = 0; credit();
    clearInterval(slideTimer);
    if (set.length > 1) slideTimer = setInterval(() => {
      box.children[slideIx].classList.remove("on");
      slideIx = (slideIx + 1) % set.length;
      box.children[slideIx].classList.add("on"); credit();
    }, 6500);
  }

  function renderAll() { renderHero(); renderHoy(); renderVideos(); renderNews(); watch(); }

  $("#q").oninput = renderNews;
  $("#filtro").onclick = (e) => {
    const b = e.target.closest("button"); if (!b) return;
    filtro = b.dataset.f;
    $("#filtro").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    renderNews();
  };

  async function loadRobot() {
    try {
      const r = await fetch("data/noticias.json?t=" + Date.now(), { cache: "no-store" });
      const j = await r.json();
      robotAt = j.actualizado; FOTOS = j.fotos || []; VIDEOS = j.videos || [];
      merge(j.noticias || []);
    } catch {}
  }

  // Búsqueda en vivo al abrir (Google Noticias, últimas semanas)
  const rss = (q) => "https://news.google.com/rss/search?q=" + encodeURIComponent(q + " when:30d") + "&hl=es-419&gl=CO&ceid=CO:es-419";
  const QUERIES = ['Icetex contratistas', 'Icetex "Richard Caicedo"', 'Icetex "ahorro educativo"', 'Icetex Contraloría OR Procuraduría'];
  function parseRSS(xml) {
    const d = new DOMParser().parseFromString(xml, "text/xml");
    return [...d.querySelectorAll("item")].map(it => {
      const title = it.querySelector("title")?.textContent || "";
      return { titulo: title.replace(/ - [^-]+$/, ""), medio: it.querySelector("source")?.textContent || title.split(" - ").pop(),
        fecha: it.querySelector("pubDate")?.textContent, url: it.querySelector("link")?.textContent, imagen: "" };
    });
  }
  async function fetchFeed(url) {
    const tries = [
      async () => { const r = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url)); const j = await r.json();
        if (j.status !== "ok") throw 0; return j.items.map(i => ({ titulo: i.title.replace(/ - [^-]+$/, ""), medio: i.author || i.title.split(" - ").pop(), fecha: i.pubDate.replace(" ", "T") + "Z", url: i.link, imagen: i.thumbnail || "" })); },
      async () => parseRSS(await (await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(url))).text()),
      async () => parseRSS(await (await fetch("https://corsproxy.io/?url=" + encodeURIComponent(url))).text())
    ];
    for (const f of tries) { try { return await f(); } catch {} }
    throw new Error("sin acceso");
  }
  async function liveSearch() {
    const st = $("#liveState"); st.textContent = t("en_vivo"); st.className = "state live";
    let n = 0, ok = false;
    await Promise.all(QUERIES.map(async q => {
      try { n += merge(await fetchFeed(rss(q))); ok = true; } catch {}
    }));
    st.textContent = ok ? t("vivo_ok", { n }) : t("vivo_off");
    st.className = ok ? "state ok" : "state";
  }

  async function refresh(btn) {
    if (btn) btn.classList.add("busy");
    await loadRobot(); renderAll();
    await liveSearch(); renderHoy(); renderNews();
    if (btn) btn.classList.remove("busy");
  }
  $("#btnRefresh").onclick = (e) => {
    navigator.serviceWorker?.getRegistration().then(r => r && r.update());
    refresh(e.currentTarget);
  };

  /* ---------- Derecho de petición ---------- */
  const form = $("#petForm");
  function petText() {
    const f = Object.fromEntries(new FormData(form));
    const destinos = [...document.querySelectorAll("#destinos input:checked")].map(i => C.DESTINOS.find(d => d.m === i.value).n);
    const fecha = new Intl.DateTimeFormat("es-CO", { timeZone: TZ, day: "numeric", month: "long", year: "numeric" }).format(new Date());
    return `${f.ciudad || "[Ciudad]"}, ${fecha}

Señores:
${destinos.map(d => "- " + d).join("\n")}

Asunto: Derecho de petición — contratación por prestación de servicios del ICETEX 2022-2026, contratos del producto Ahorro Educativo Voluntario y uso del Fondo Pasivo Contingente.

Yo, ${f.nombre || "[Nombre]"}, identificado(a) con cédula de ciudadanía ${f.cedula || "[Cédula]"}${f.deudor ? ", beneficiario(a) o deudor(a) del ICETEX," : ""} en ejercicio del derecho fundamental de petición consagrado en el artículo 23 de la Constitución Política y regulado por la Ley 1755 de 2015, y del derecho de acceso a la información pública (Ley 1712 de 2014), respetuosamente solicito que cada entidad, en lo de su competencia, informe y entregue copia de lo siguiente:

AL ICETEX:
1. El número de contratos de prestación de servicios suscritos por año entre 2022 y 2026, con su valor total anual, y la base de cálculo del aumento del 80 % en contratistas y del 140 % en el gasto anunciado el 4 de noviembre de 2026.
2. La relación de los tres contratos del producto Ahorro Educativo Voluntario (factibilidad, estructuración jurídica y desarrollo tecnológico): contratista, número, fecha de firma, modalidad de selección, valor, supervisor o interventor, pagos realizados con sus fechas y productos recibidos.
3. Copia del estudio de factibilidad entregado en septiembre de 2025 y explicación de por qué se siguieron girando recursos después de su conclusión.
4. Las actas de Junta Directiva relacionadas con el Ahorro Educativo Voluntario y con el uso de recursos del Fondo Pasivo Contingente, o la constancia de que no existe autorización.
5. Copia del informe de revisión contractual remitido a la Contraloría y a la Procuraduría, con la fecha y el número de radicado de cada envío.
6. El número actual de contratistas y el plan, con metas y fechas, para reducir el gasto de contratación y recuperar los créditos educativos.

A LA CONTRALORÍA GENERAL DE LA REPÚBLICA, A LA PROCURADURÍA GENERAL DE LA NACIÓN Y A LA FISCALÍA GENERAL DE LA NACIÓN:
7. Si recibieron el informe del ICETEX, con fecha y radicado, y si abrieron indagación preliminar, proceso de responsabilidad fiscal, indagación o investigación disciplinaria o noticia criminal, con su número y estado.

AL MINISTERIO DE EDUCACIÓN NACIONAL:
8. Qué conocimiento tuvo la Junta Directiva del ICETEX, que preside el Ministerio, de los contratos del Ahorro Educativo Voluntario y qué medidas ha tomado.

A LA SUPERINTENDENCIA FINANCIERA DE COLOMBIA:
9. Si el ICETEX radicó para aprobación el reglamento de la Cuenta de Ahorro Educativo Voluntario (Decreto 375 de 2018) y en qué estado está.

A LA PRESIDENCIA DE LA REPÚBLICA:
10. Las acciones adoptadas y su cronograma para que los recursos del ICETEX se destinen a créditos y apoyos para estudiantes.

Si alguna entidad no es competente para responder parte de esta petición, le solicito darle traslado a la autoridad competente según el artículo 21 de la Ley 1755 de 2015.

Recibiré respuesta en el correo: ${f.correo || "[Correo]"}

Atentamente,

${f.nombre || "[Nombre]"}
C.C. ${f.cedula || "[Cédula]"}
${f.ciudad || "[Ciudad]"}`;
  }
  function buildPetition() { $("#petText").textContent = petText(); }
  form.oninput = buildPetition;
  form.onsubmit = (e) => {
    e.preventDefault();
    const to = [...document.querySelectorAll("#destinos input:checked")].map(i => i.value).join(",");
    const f = Object.fromEntries(new FormData(form));
    location.href = `mailto:${to}?cc=${encodeURIComponent(f.correo)}&subject=${encodeURIComponent("Derecho de petición — contratistas y contratos del ICETEX 2022-2026")}&body=${encodeURIComponent(petText())}`;
  };
  $("#btnCopy").onclick = async () => { try { await navigator.clipboard.writeText(petText()); $("#btnCopy").textContent = t("copiado"); } catch {} };
  $("#btnWa").onclick = () => window.open("https://wa.me/?text=" + encodeURIComponent("En el ICETEX los contratistas crecieron 80 % mientras los créditos se caían. Exijamos saber qué pasó con la plata: envíe su derecho de petición de una sola vez aquí: " + SITE + "/#peticion"), "_blank");

  /* ---------- Arranque ---------- */
  applyLang();
  refresh().then(() => store.set("lastVisit", new Date().toISOString()));
  setInterval(() => refresh(), 30 * 60 * 1000);
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js");
})();
