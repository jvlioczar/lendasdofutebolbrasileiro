/* Lendas do Futebol Brasileiro — página Craques: seleção de todos os tempos e os melhores por posição,
   do futebol brasileiro como um todo ou de cada time. */
(function () {
  "use strict";
  var L = window.LFB, GRUPOS = L.craques, WIKI = L.wiki || {}, NOTAS = L.notas || {}, LADO = L.craquesLado || {};
  var TIMES = [L.selecao].concat(L.clubes || []);
  var $ = function (s) { return document.querySelector(s); };

  // quantos nomes cada posição mostra
  var LIMITE = { "goleiros": 6, "laterais-direitos": 6, "zagueiros": 10, "laterais-esquerdos": 6, "volantes": 10, "meias": 6, "pontas": 6, "centroavantes": 6, "tecnicos": 6 };
  // posição do time -> grupo da página
  var GRUPO_DA_POS = { GOL: "goleiros", LD: "laterais-direitos", ZAG: "zagueiros", LE: "laterais-esquerdos", VOL: "volantes", MEI: "meias", PD: "pontas", PE: "pontas", ATA: "centroavantes", "TÉC": "tecnicos" };
  var FORMS = { "4-3-3": [4, 3, 3], "4-2-3-1": [4, 2, 3, 1], "4-2-4": [4, 2, 4], "4-4-2": [4, 4, 2], "3-5-2": [3, 5, 2], "3-4-2-1": [3, 4, 2, 1], "2-3-5": [2, 3, 5], "3-4-3": [3, 4, 3] };

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  // notas de data/notas.js completam o Titular e o Reserva de cada time (como na página do time)
  TIMES.forEach(function (c) {
    c.times.slice(0, 2).forEach(function (t) {
      if (t.pendente) return;
      t.jog.forEach(function (j) { if (!j[2] && NOTAS[c.id + "|" + j[0]]) j[2] = NOTAS[c.id + "|" + j[0]]; });
    });
  });

  /* ---------- links e prêmios ---------- */
  function wikiTitle(clube, nome) {
    if (clube) return WIKI[clube + "|" + nome] || null;
    return WIKI["*|" + nome] || WIKI["selecao|" + nome] || null;  // não usa a de outros clubes: pode ser homônimo
  }
  function nomeLink(clube, nome) {
    var w = wikiTitle(clube, nome);
    return w ? '<a class="wk" href="https://pt.wikipedia.org/wiki/' + encodeURIComponent(w.replace(/ /g, "_")) + '" target="_blank" rel="noopener">' + esc(nome) + "</a>" : esc(nome);
  }
  function awardsHTML(nome, clube) {
    var a = L.premiosDe ? L.premiosDe(nome, clube) : [];
    return a.length ? '<p class="awards">' + a.map(function (x) {
      return '<span class="aw' + (x.win ? "" : " pod") + '">' + (x.win ? "🏆 " : "") + esc(x.txt) + "</span>";
    }).join("") + "</p>" : "";
  }
  // em quais seleções do LFB o nome aparece (só na visão "Brasil")
  function presencas(nome, tec) {
    var out = [];
    TIMES.forEach(function (c) {
      c.times.forEach(function (t) {
        if (t.pendente || t.insuficiente) return;
        var hit = tec ? t.tecnico && t.tecnico[0] === nome : t.jog.some(function (j) { return j[0] === nome; });
        if (hit) out.push('<a class="chip-link" href="times/' + c.id + '.html">' + esc(c.curto || c.nome) + " · " + esc(t.nome) + "</a>");
      });
    });
    return out;
  }

  /* ---------- rankings de um time, tirados das quatro seleções e dos outros nomes ---------- */
  function rankingsDoTime(c) {
    var R = {}; GRUPOS.forEach(function (g) { R[g.id] = []; });
    var visto = {};
    function add(grupo, nome, meta, nota) {
      if (!grupo || visto[grupo + "|" + nome]) return;
      visto[grupo + "|" + nome] = 1;
      R[grupo].push({ nome: nome, meta: meta, nota: nota || "" });
    }
    c.times.forEach(function (t) {
      if (t.pendente) return;
      t.jog.forEach(function (j) { add(GRUPO_DA_POS[j[1]], j[0], t.nome, j[2]); });
    });
    c.times.forEach(function (t) {
      if (!t.pendente && t.tecnico && t.tecnico[0]) add("tecnicos", t.tecnico[0], "Técnico do " + t.nome, t.tecnico[1]);
    });
    (c.outros || []).forEach(function (o) { if (Array.isArray(o)) add(GRUPO_DA_POS[o[1]], o[0], "Outros nomes", ""); });
    (c.outrosTec || []).forEach(function (n) { add("tecnicos", n, "Outros nomes", ""); });
    return R;
  }

  /* ---------- seleção de todos os tempos do Brasil, a partir dos rankings ---------- */
  function lista(id) { return GRUPOS.filter(function (g) { return g.id === id; })[0].lista.map(function (p) { return p[0]; }); }
  function selecaoBrasil() {
    var gol = lista("goleiros"), ld = lista("laterais-direitos"), zag = lista("zagueiros"), le = lista("laterais-esquerdos"),
      vol = lista("volantes"), mei = lista("meias"), pon = lista("pontas"), ca = lista("centroavantes"), tec = lista("tecnicos");
    var pd = pon.filter(function (n) { return LADO[n] === "PD"; }), pe = pon.filter(function (n) { return LADO[n] === "PE"; });
    function xi(i) {
      return { nome: i ? "Reserva" : "Titular", formacao: "4-3-3", tecnico: [tec[i], ""],
        jog: [[gol[i], "GOL"], [ld[i], "LD"], [zag[2 * i], "ZAG"], [zag[2 * i + 1], "ZAG"], [le[i], "LE"],
          [vol[i], "VOL"], [mei[2 * i], "MEI"], [mei[2 * i + 1], "MEI"], [pd[i], "PD"], [ca[i], "ATA"], [pe[i], "PE"]] };
    }
    return [xi(0), xi(1)];
  }

  /* ---------- campo ---------- */
  var PITCH_SVG = '<svg class="lines" viewBox="0 0 68 92" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".4">' +
    '<rect x="2" y="2" width="64" height="88"/><line x1="2" y1="46" x2="66" y2="46"/><circle cx="34" cy="46" r="8"/>' +
    '<rect x="14" y="2" width="40" height="14"/><rect x="24" y="2" width="20" height="5"/><path d="M27 16 A8 8 0 0 0 41 16"/>' +
    '<rect x="14" y="76" width="40" height="14"/><rect x="24" y="85" width="20" height="5"/><path d="M27 76 A8 8 0 0 1 41 76"/></g></svg>';
  function label(nome) {
    if (nome.length <= 13 || nome.indexOf(" ") < 0) return esc(nome);
    var mid = nome.length / 2, best = -1;
    for (var i = 0; i < nome.length; i++) if (nome[i] === " " && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
    return esc(nome.slice(0, best)) + "<br>" + esc(nome.slice(best + 1));
  }
  function campo(t) {
    var lines = FORMS[t.formacao] || FORMS["4-3-3"], out = [], idx = 1, n = lines.length;
    out.push(dot(t.jog[0], 50, 90, true));
    lines.forEach(function (m, li) {
      var y = 72 - li * (72 - 13) / (n - 1);
      t.jog.slice(idx, idx + m).forEach(function (j, k) { out.push(dot(j, 12 + 76 * ((m - 1 - k) + 0.5) / m, y)); });
      idx += m;
    });
    return '<div class="pitch">' + PITCH_SVG + out.join("") + "</div>";
  }
  function dot(j, x, y, gk) {
    return '<div class="pl' + (gk ? " gk" : "") + '" style="left:' + x.toFixed(1) + "%;top:" + y.toFixed(1) + '%"><b class="shirt">' + esc(j[1]) + "</b><span>" + label(j[0]) + "</span></div>";
  }
  // cores das camisas: as do clube; na visão Brasil, o amarelo e o verde da Seleção
  function cores(clube) {
    var c = clube && TIMES.filter(function (x) { return x.id === clube; })[0];
    var k = c ? c.cores : ["#FFDF00", "#009C3B"];
    var h = k[0].replace("#", ""), lum = (parseInt(h.substr(0, 2), 16) * 299 + parseInt(h.substr(2, 2), 16) * 587 + parseInt(h.substr(4, 2), 16) * 114) / 1000;
    var tinta = k[2] || (lum > 160 ? "#17151F" : "#FFFFFF");
    return "--c1:" + k[0] + ";--c2:" + k[1] + ";--c3:" + tinta;
  }
  function blocoSelecao(xis, clube, titulo) {
    return '<section class="cq-xi"><h2 class="pos-title">' + esc(titulo) + "</h2><div class=\"cq-xi-grid\">" + xis.map(function (t) {
      return '<div class="panel cq-xi-card" style="' + cores(clube) + '"><h3>' + esc(t.nome) + " <small>" + esc(t.formacao) + "</small></h3>" + campo(t) +
        (t.tecnico && t.tecnico[0] ? '<p class="cq-tec"><span>Técnico</span> ' + nomeLink(clube, t.tecnico[0]) + "</p>" : "") + "</div>";
    }).join("") + "</div></section>";
  }

  /* ---------- seletor de time ---------- */
  var sel = $("#cq-time");
  var comTimes = TIMES.filter(function (c) { return c.times.some(function (t) { return !t.pendente; }); });
  sel.innerHTML = '<option value="">Brasil: todos os clubes e a Seleção</option>' +
    comTimes.map(function (c) { return '<option value="' + c.id + '">' + esc(c.nome) + "</option>"; }).join("");

  var tabs = $("#pos-tabs"), list = $("#pos-list"), xiBox = $("#cq-xi");
  tabs.innerHTML = GRUPOS.map(function (g) { return '<button role="tab" data-id="' + g.id + '" aria-selected="false">' + esc(g.nome) + "</button>"; }).join("");

  var estado = { time: "", pos: GRUPOS[0].id };
  function lerHash() {
    var h = decodeURIComponent(location.hash.slice(1)).split("/");
    if (h.length === 2) { estado.time = h[0]; estado.pos = h[1]; } else if (h[0]) { estado.pos = h[0]; }
    if (!GRUPOS.some(function (g) { return g.id === estado.pos; })) estado.pos = GRUPOS[0].id;
    if (estado.time && !comTimes.some(function (c) { return c.id === estado.time; })) estado.time = "";
  }
  function gravarHash() { history.replaceState(null, "", "#" + (estado.time ? estado.time + "/" : "") + estado.pos); }

  function render() {
    sel.value = estado.time;
    var c = estado.time ? comTimes.filter(function (x) { return x.id === estado.time; })[0] : null;
    var g = GRUPOS.filter(function (x) { return x.id === estado.pos; })[0];
    [].forEach.call(tabs.children, function (b) { b.setAttribute("aria-selected", b.dataset.id === g.id); });
    var lim = LIMITE[g.id] || 6, tec = g.pos === "TÉC", itens;

    if (c) {
      var xis = c.times.slice(0, 2).filter(function (t) { return !t.pendente; });
      xiBox.innerHTML = xis.length ? blocoSelecao(xis, c.id, "Seleção de todos os tempos do " + c.nome) : "";
      itens = rankingsDoTime(c)[g.id].slice(0, lim).map(function (p, i) {
        return '<li class="rank-item"><span class="rank-n">' + (i + 1) + "º</span><div><h3>" + nomeLink(c.id, p.nome) + "</h3>" +
          '<p class="rank-meta">' + esc(p.meta) + "</p>" + (p.nota ? "<p>" + esc(p.nota) + "</p>" : "") + awardsHTML(p.nome, c.id) + "</div></li>";
      });
      $("#cq-intro").innerHTML = "Os melhores de cada posição na história do " + esc(c.nome) + ", na ordem das seleções do time (Titular, Reserva e suplentes) e depois dos outros nomes. <a href=\"./#" + (c.id === "selecao" ? "selecao" : "t/" + c.id) + "\">Ver a página do time</a>.";
    } else {
      xiBox.innerHTML = blocoSelecao(selecaoBrasil(), null, "Seleção de todos os tempos do futebol brasileiro");
      itens = g.lista.slice(0, lim).map(function (p, i) {
        var pres = presencas(p[0], tec);
        return '<li class="rank-item"><span class="rank-n">' + (i + 1) + "º</span><div><h3>" + nomeLink(null, p[0]) + "</h3>" +
          '<p class="rank-meta">' + esc([p[1], p[2]].filter(Boolean).join(" · ")) + "</p><p>" + esc(p[3]) + "</p>" + awardsHTML(p[0]) +
          (pres.length ? '<p class="rank-in"><span>Nas seleções do LFB:</span> ' + pres.join("") + "</p>" : "") + "</div></li>";
      });
      $("#cq-intro").innerHTML = "Os maiores jogadores e técnicos brasileiros de todos os tempos em cada posição, tenham ou não entrado nas seleções dos times. A seleção de todos os tempos reúne os primeiros de cada ranking no Titular e os segundos no Reserva.";
    }
    list.innerHTML = '<h2 class="pos-title">' + esc(g.nome) + " <small>top " + lim + "</small></h2>" +
      (itens.length ? '<ol class="rank">' + itens.join("") + "</ol>" : '<p class="muted">Ainda não há nomes nesta posição para este time.</p>');
    document.title = (c ? c.nome + " · " : "") + g.nome + " · Craques · Lendas do Futebol Brasileiro";
  }

  tabs.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    estado.pos = b.dataset.id; gravarHash(); render();
  });
  sel.addEventListener("change", function () { estado.time = sel.value; gravarHash(); render(); });
  window.addEventListener("hashchange", function () { lerHash(); render(); });
  lerHash(); render();
})();
