/* Lendas do Futebol Brasileiro — catálogo de times e página de cada time */
(function () {
  "use strict";

  var L = window.LFB, SEL = L.selecao, CLUBES = L.clubes || [], META = L.meta || {}, WIKI = L.wiki || {}, PESQ = L.pesquisas || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  // páginas em subpastas (times/) dizem onde fica a raiz do site
  var ROOT = document.body.dataset.root || "";
  function teamUrl(c) { return ROOT + "times/" + c.id + ".html"; }
  var FEM = { portuguesa: 1, "ponte-preta": 1, chapecoense: 1 }; // "da Portuguesa", "do Flamengo"
  function deNome(c) { return (FEM[c.id] ? "da " : "do ") + c.nome; }
  function teamTitle(c) { return (c.id === "selecao" ? "Seleção Brasileira de todos os tempos" : "Seleção de todos os tempos " + deNome(c)) + " · Lendas do Futebol Brasileiro"; }

  var UF = {
    SP: ["São Paulo", "sudeste"], RJ: ["Rio de Janeiro", "sudeste"], MG: ["Minas Gerais", "sudeste"], ES: ["Espírito Santo", "sudeste"],
    RS: ["Rio Grande do Sul", "sul"], SC: ["Santa Catarina", "sul"], PR: ["Paraná", "sul"],
    BA: ["Bahia", "nordeste"], PE: ["Pernambuco", "nordeste"], CE: ["Ceará", "nordeste"], AL: ["Alagoas", "nordeste"], RN: ["Rio Grande do Norte", "nordeste"],
    MA: ["Maranhão", "nordeste"], PB: ["Paraíba", "nordeste"], SE: ["Sergipe", "nordeste"], PI: ["Piauí", "nordeste"],
    GO: ["Goiás", "centro-oeste"], MT: ["Mato Grosso", "centro-oeste"], MS: ["Mato Grosso do Sul", "centro-oeste"], DF: ["Distrito Federal", "centro-oeste"],
    PA: ["Pará", "norte"], AM: ["Amazonas", "norte"], TO: ["Tocantins", "norte"], RO: ["Rondônia", "norte"], AC: ["Acre", "norte"], AP: ["Amapá", "norte"], RR: ["Roraima", "norte"]
  };
  var UF_ORDER = ["SP", "RJ", "MG", "ES", "RS", "SC", "PR", "BA", "PE", "CE", "AL", "RN", "MA", "PB", "SE", "PI", "GO", "MT", "MS", "DF", "PA", "AM", "TO", "RO", "AC", "AP", "RR"];
  var FORMS = { "4-3-3": [4, 3, 3], "4-2-3-1": [4, 2, 3, 1], "4-2-4": [4, 2, 4], "4-4-2": [4, 4, 2], "3-5-2": [3, 5, 2], "3-4-2-1": [3, 4, 2, 1], "2-3-5": [2, 3, 5], "3-4-3": [3, 4, 3] };
  var NUMS = { "4-3-3": [1, 2, 3, 4, 6, 5, 8, 10, 7, 9, 11], "4-2-3-1": [1, 2, 3, 4, 6, 5, 8, 7, 10, 11, 9], "4-2-4": [1, 2, 3, 4, 6, 5, 8, 7, 9, 10, 11], "4-4-2": [1, 2, 3, 4, 6, 5, 8, 7, 10, 9, 11], "3-5-2": [1, 3, 4, 6, 2, 5, 8, 10, 11, 7, 9], "3-4-2-1": [1, 3, 4, 6, 2, 5, 8, 11, 10, 7, 9], "2-3-5": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "3-4-3": [1, 3, 4, 6, 2, 5, 8, 10, 7, 9, 11] };
  var POS_NAME = { GOL: "Goleiro", LD: "Lateral-direito", ZAG: "Zagueiro", LE: "Lateral-esquerdo", VOL: "Volante", MEI: "Meia", PD: "Ponta-direita", PE: "Ponta-esquerda", ATA: "Centroavante", "TÉC": "Técnico" };

  var state = { q: "", uf: "", status: "", sort: "pop" };

  // justificativas (data/notas.js) completam os jogadores do Titular e do Reserva que ainda não têm nota
  var NOTAS = L.notas || {};
  [SEL].concat(CLUBES).forEach(function (c) {
    c.times.slice(0, 2).forEach(function (t) {
      if (t.pendente) return;
      t.jog.forEach(function (j) { if (!j[2] && NOTAS[c.id + "|" + j[0]]) j[2] = NOTAS[c.id + "|" + j[0]]; });
    });
  });

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function initials(nome) {
    var w = nome.replace(/[-().]/g, " ").split(/\s+/).filter(function (x) { return x && !/^(de|da|do|dos|das|e|fc)$/i.test(x); });
    if (w.length === 1) return w[0].slice(0, 3).toUpperCase();
    return w.slice(0, 3).map(function (x) { return x[0]; }).join("").toUpperCase();
  }
  function isLight(hex) {
    var h = hex.replace("#", ""); var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160;
  }
  function names(c) {
    var out = [];
    c.times.forEach(function (t) {
      if (t.pendente) return;
      t.jog.forEach(function (j) { out.push(j[0]); });
      if (t.tecnico && t.tecnico[0]) out.push(t.tecnico[0]);
    });
    return out.concat((c.outros || []).map(nameOf), c.outrosTec || [], c.idolos || []);
  }
  // prêmios individuais mundiais (Bola de Ouro, melhor do mundo FIFA, melhor goleiro etc.)
  function awards(c, nome) {
    var a = L.premiosDe ? L.premiosDe(nome, c.id) : [];
    return a.length ? '<span class="awards">' + a.map(function (x) {
      return '<span class="aw' + (x.win ? "" : " pod") + '">' + (x.win ? "🏆 " : "") + esc(x.txt) + "</span>";
    }).join("") + "</span>" : "";
  }
  function nameOf(x) { return Array.isArray(x) ? x[0] : x; }
  function fmtPct(v) { return v.toFixed(1).replace(".", ",") + "%"; }
  function torcida2(c) { var t = torcidas(c); return t.length ? t[t.length - 1].v : -1; }
  // torcida nas pesquisas: [{v, chave}] em ordem crescente; a home usa o número mais conservador (o menor)
  function torcidas(c) {
    var t = (META[c.id] || {}).torcida || {}, out = [];
    ["ipec", "atlas"].forEach(function (k) { if (t[k] != null) out.push({ v: t[k], k: k }); });
    return out.sort(function (a, b) { return a.v - b.v; });
  }
  function torcida(c) { var t = torcidas(c); return t.length ? t[0].v : null; }
  // link para a Wikipédia em português, quando a página do jogador foi encontrada e conferida
  function wk(c, nome) {
    var t = WIKI[c.id + "|" + nome] || WIKI["*|" + nome];
    return t ? '<a class="wk" href="https://pt.wikipedia.org/wiki/' + encodeURIComponent(t.replace(/ /g, "_")) + '" target="_blank" rel="noopener" title="Wikipédia: ' + esc(t) + '">' + esc(nome) + "</a>" : esc(nome);
  }
  function lum(hex) {
    var h = hex.replace("#", "");
    return [0, 2, 4].map(function (i) {
      var v = parseInt(h.substr(i, 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    }).reduce(function (a, v, i) { return a + v * [0.2126, 0.7152, 0.0722][i]; }, 0);
  }
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  // cor do texto no escudo e nas camisas: a terceira cor do clube, se houver; senão a segunda,
  // desde que dê leitura sobre a primeira; senão branco ou preto, o que contrastar mais
  function inkColor(c) {
    if (c.cores[2]) return c.cores[2];
    if (contrast(c.cores[0], c.cores[1]) >= 4.5) return c.cores[1];
    return contrast(c.cores[0], "#FFFFFF") >= contrast(c.cores[0], "#111111") ? "#FFFFFF" : "#111111";
  }
  function colorVars(c) { return "--c1:" + c.cores[0] + ";--c2:" + c.cores[1] + ";--c3:" + inkColor(c); }

  /* ---------------- tema ---------------- */
  var themeBtn = $("#theme");
  function syncTheme() {
    if (!themeBtn) return;
    var dark = document.documentElement.dataset.theme === "dark";
    themeBtn.setAttribute("aria-pressed", dark);
    themeBtn.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
  }
  if (themeBtn) themeBtn.addEventListener("click", function () {
    var dark = document.documentElement.dataset.theme !== "dark";
    if (dark) document.documentElement.dataset.theme = "dark"; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("lfb-theme", dark ? "dark" : "light"); } catch (e) {}
    syncTheme();
  });
  syncTheme();

  /* ---------------- home ---------------- */
  var home = $("#home"), team = $("#team");
  var ufSel = $("#uf");
  function initHome() {
    var allPlayers = {};
    [SEL].concat(CLUBES).forEach(function (c) { c.times.forEach(function (t) { if (!t.pendente) t.jog.forEach(function (j) { allPlayers[j[0]] = 1; }); }); });
    $("#stat-clubs").textContent = CLUBES.length;
    $("#stat-states").textContent = Object.keys(CLUBES.reduce(function (a, c) { a[c.uf] = 1; return a; }, {})).length;
    $("#stat-players").textContent = Object.keys(allPlayers).length;

    $("#sel-craques").innerHTML = SEL.craques.map(function (k, i) { return "<span><b>" + (i + 1) + "º</b> " + esc(k[0]) + "</span>"; }).join("") +
      "<span><b>C</b> " + esc(SEL.capitao) + "</span>";

    // filtro de estado: do estado com mais clubes para o com menos, empates em ordem alfabética (a Seleção tem destaque próprio)
    (function () {
      UF_ORDER.map(function (u) { return [u, CLUBES.filter(function (c) { return c.uf === u; }).length]; })
        .filter(function (x) { return x[1]; })
        .sort(function (a, b) { return b[1] - a[1] || UF[a[0]][0].localeCompare(UF[b[0]][0], "pt"); })
        .forEach(function (x) {
          var op = document.createElement("option"); op.value = x[0]; op.textContent = UF[x[0]][0] + " (" + x[1] + ")"; ufSel.appendChild(op);
        });
    })();
    ufSel.addEventListener("change", function () {
      state.uf = ufSel.value; renderAll();
    });
    $("#sort").addEventListener("change", function (e) { state.sort = e.target.value; renderList(); });
    $("#status").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      state.status = b.dataset.s; renderAll();
    });
    ["#q", "#q2"].forEach(function (id) {
      $(id).addEventListener("input", function (e) {
        state.q = e.target.value; $("#q").value = $("#q2").value = state.q;
        if (id === "#q" && state.q && !location.hash.match(/^#?$/)) location.hash = "";
        renderList();
        if (id === "#q") $("#explorar").scrollIntoView({ block: "start" });
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && !/input|select|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); $("#q").focus(); }
    });
    $("#reset").addEventListener("click", function () {
      state = { q: "", uf: "", status: "", sort: state.sort }; $("#q").value = $("#q2").value = ""; ufSel.value = ""; renderAll();
    });
  }

  function filtered() {
    var q = norm(state.q).trim();
    return CLUBES.map(function (c) {
      var hit = null;
      if (q) {
        var base = norm(c.nome + " " + c.cidade + " " + c.uf + " " + UF[c.uf][0]);
        if (base.indexOf(q) < 0) {
          hit = names(c).filter(function (n) { return norm(n).indexOf(q) >= 0; });
          if (!hit.length) return null;
        }
      }
      if (state.uf && c.uf !== state.uf) return null;
      if (state.status && c.status !== state.status) return null;
      return { c: c, hit: hit };
    }).filter(Boolean);
  }

  function clubCard(r) {
    var c = r.c;
    var cr = '<p class="club-craques"><b>Craques</b>' + (c.craques && c.craques.length ?
      c.craques.map(function (k) { return esc(k[0]); }).join(" · ") : '<span class="muted">em pesquisa</span>') + "</p>";
    var match = r.hit && r.hit.length ? '<div class="match">Encontrado: <b>' + r.hit.slice(0, 3).map(esc).join(", ") + "</b></div>" : "";
    return '<a class="club" href="' + teamUrl(c) + '" style="' + colorVars(c) + '">' +
      '<div class="club-top"><span class="crest">' + esc(initials(c.nome)) + '</span><div><h3>' + esc(c.nome) + '</h3><p>' + esc(c.cidade) + " · " + c.uf + "</p></div>" +
      (c.status === "pesquisa" ? '<span class="status pesquisa">Em pesquisa</span>' : "") + "</div>" +
      cr + match +
      // rodapé: torcida (quando há pesquisa) e a seta que indica que o card abre a página do time
      '<div class="club-foot">' + (torcida(c) != null ? '<span class="fans" title="Torcida (pesquisa nacional de 2025)">' + fmtPct(torcida(c)) + " da torcida</span>" : "") +
      '<span class="club-go" aria-hidden="true"><svg class="ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></span></div></a>';
  }

  function renderList() {
    var rows = filtered(), list = $("#results");
    var montados = rows.filter(function (r) { return r.c.status === "revisao"; }).length;
    $("#count").innerHTML = "<strong>" + rows.length + "</strong> " + (rows.length === 1 ? "time" : "times") + " · " + montados + " com seleções montadas";
    $("#reset").hidden = !(state.q || state.uf || state.status);
    if (!rows.length) { list.innerHTML = '<div class="empty"><h3>Nenhum time encontrado</h3><p>Tente outro nome ou estado.</p></div>'; return; }
    rows.sort(function (a, b) {
      if (state.sort === "pop") {
        var x = torcida(a.c), y = torcida(b.c);
        if (x != null || y != null) {
          if (x == null) return 1; if (y == null) return -1;
          if (y !== x) return y - x;
          if (torcida2(b.c) !== torcida2(a.c)) return torcida2(b.c) - torcida2(a.c);
        }
      }
      return a.c.nome.localeCompare(b.c.nome, "pt");
    });
    list.innerHTML = '<div class="grid">' + rows.map(clubCard).join("") + "</div>";
  }

  function renderAll() {
    ufSel.classList.toggle("active", !!state.uf);
    [].forEach.call($("#status").children, function (b) { b.setAttribute("aria-pressed", b.dataset.s === state.status); });
    renderList();
  }

  /* ---------------- página do time ---------------- */
  var PITCH_SVG = '<svg class="lines" viewBox="0 0 68 92" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="rgba(255,255,255,.55)" stroke-width=".4">' +
    '<rect x="2" y="2" width="64" height="88"/><line x1="2" y1="46" x2="66" y2="46"/><circle cx="34" cy="46" r="8"/>' +
    '<rect x="14" y="2" width="40" height="14"/><rect x="24" y="2" width="20" height="5"/><path d="M27 16 A8 8 0 0 0 41 16"/>' +
    '<rect x="14" y="76" width="40" height="14"/><rect x="24" y="85" width="20" height="5"/><path d="M27 76 A8 8 0 0 1 41 76"/></g>' +
    '<g fill="rgba(255,255,255,.6)"><circle cx="34" cy="46" r=".7"/><circle cx="34" cy="11.5" r=".5"/><circle cx="34" cy="80.5" r=".5"/></g></svg>';

  function pitchHTML(c, t) {
    var lines = FORMS[t.formacao] || FORMS["4-3-3"], nums = NUMS[t.formacao] || NUMS["4-3-3"];
    var out = [], idx = 1, n = lines.length;
    out.push(playerDot(c, t, t.jog[0], 50, 90, nums[0], true));
    lines.forEach(function (m, li) {
      var y = n === 1 ? 50 : 72 - li * (72 - 13) / (n - 1);
      var row = t.jog.slice(idx, idx + m);
      row.forEach(function (j, k) {
        var x = 12 + 76 * ((m - 1 - k) + 0.5) / m; // a lista vai da direita para a esquerda
        out.push(playerDot(c, t, j, x, y, nums[idx + k]));
      });
      idx += m;
    });
    return '<div class="pitch">' + PITCH_SVG + out.join("") + "</div>";
  }
  function playerDot(c, t, j, x, y, num, gk) {
    var cap = j[0] === t.cap ? '<i class="cap-mark" title="Capitão">C</i>' : "";
    return '<div class="pl' + (gk ? " gk" : "") + '" style="left:' + x.toFixed(1) + "%;top:" + y.toFixed(1) + '%" title="' + esc(POS_NAME[j[1]] || j[1]) + '">' +
      '<b class="shirt">' + num + cap + "</b><span>" + label(j[0]) + "</span></div>";
  }
  // nome no campo: até 13 letras numa linha; acima disso, quebra no espaço mais perto do meio
  function label(nome) {
    if (nome.length <= 13 || nome.indexOf(" ") < 0) return esc(nome);
    var mid = nome.length / 2, best = -1;
    for (var i = 0; i < nome.length; i++) if (nome[i] === " " && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
    return esc(nome.slice(0, best)) + "<br>" + esc(nome.slice(best + 1));
  }

  var INSUF = "Este clube não tem craques e ídolos suficientes para preencher este time.";
  function squadList(c, t, i, active, q) {
    var head = '<button type="button" data-i="' + i + '"><strong>' + esc(t.nome) + "</strong>" +
      (t.insuficiente ? "<small>sem nomes suficientes</small>" : t.pendente ? "<small>pendente</small>" : "<small>" + t.formacao + "</small>") +
      "</button>";
    if (t.insuficiente) return '<div class="squad">' + head + '<p class="pend-note">' + INSUF + "</p></div>";
    if (t.pendente) return '<div class="squad">' + head + '<p class="pend-note">Ainda em pesquisa. Este time será montado com o mesmo método da Seleção.</p></div>';
    var li = t.jog.map(function (j) {
      var hit = q && norm(j[0]).indexOf(q) >= 0 ? ' class="hit"' : "";
      return "<li" + hit + '><span class="pos" title="' + esc(POS_NAME[j[1]] || j[1]) + '">' + j[1] + "</span><div><b>" + wk(c, j[0]) +
        (j[0] === t.cap ? '<i class="c" title="Capitão">C</i>' : "") + "</b>" + (j[2] ? "<p>" + esc(j[2]) + "</p>" : "") + (awards(c, j[0]) ? "<p>" + awards(c, j[0]) + "</p>" : "") + "</div></li>";
    }).join("");
    if (t.tecnico && t.tecnico[0]) li += '<li class="coach-li"><span class="pos">TÉC</span><div><b>' + wk(c, t.tecnico[0]) + "</b>" + (t.tecnico[1] ? "<p>" + esc(t.tecnico[1]) + "</p>" : "") + "</div></li>";
    return '<div class="squad' + (active ? " active" : "") + '">' + head + "<ol>" + li + "</ol></div>";
  }

  var ICO_WEB = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>';
  var ICO_WIKI = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6l4.5 12L12 8l4.5 10L21 6"/></svg>';
  var ICO_SHARE = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>';
  var ICO_IG = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
  function links(c) {
    var m = META[c.id] || {}, out = "";
    if (m.site) out += '<a class="head-link" href="' + esc(m.site) + '" target="_blank" rel="noopener">' + ICO_WEB + "Site oficial</a>";
    var w = WIKI["@|" + c.id];
    if (w) out += '<a class="head-link" href="https://pt.wikipedia.org/wiki/' + encodeURIComponent(w.replace(/ /g, "_")) + '" target="_blank" rel="noopener" title="Wikipédia: ' + esc(w) + '">' + ICO_WIKI + "Wikipédia</a>";
    if (m.instagram) out += '<a class="head-link" href="https://www.instagram.com/' + esc(m.instagram) + '/" target="_blank" rel="noopener">' + ICO_IG + "@" + esc(m.instagram) + "</a>";
    return out;
  }
  function fansBox(c) {
    if (c.id === "selecao") return "";
    var t = torcidas(c);
    if (!t.length) return '<p class="head-fans">Torcida: o clube não aparece nas pesquisas nacionais recentes.</p>';
    // cada número leva à pesquisa de onde veio
    var num = function (x) { var p = PESQ[x.k]; return '<a href="' + p.url + '" target="_blank" rel="noopener" title="' + esc(p.nome + ", " + p.data) + '"><b>' + fmtPct(x.v) + "</b></a>"; };
    var txt = t.length === 1 || t[0].v === t[t.length - 1].v ? num(t[0]) : "entre " + num(t[0]) + " e " + num(t[t.length - 1]);
    return '<p class="head-fans"><span class="fans-label">Torcida</span> ' + txt + " dos brasileiros</p>";
  }
  function teamHTML(c, sel) {
    var q = norm(state.q).trim();
    if (sel == null) { sel = 0; }
    var t = c.times[sel], light = isLight(c.cores[0]);
    // times já revisados não levam selo; só os que ainda estão em pesquisa
    var status = c.status === "pesquisa" ? '<span class="status pesquisa">Em pesquisa</span>' : "";
    var html = '<header class="team-head' + (light ? " light" : "") + '" style="' + colorVars(c) + '"><span class="crest lg">' + esc(c.id === "selecao" ? "BRA" : initials(c.nome)) + "</span><div>" +
      "<h1>" + esc(c.nome) + "</h1><p>" + esc(c.cidade) + (c.uf !== "BR" ? " · " + UF[c.uf][0] : "") + (c.fundacao ? " · fundado em " + c.fundacao : "") + "</p>" +
      '<div class="team-meta">' + status + links(c) + '<button type="button" class="head-link" data-share aria-haspopup="true">' + ICO_SHARE + "Compartilhar</button></div>" + fansBox(c) + "</div>" +
      '<a class="head-back" href="' + ROOT + '#explorar"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>Todos os times</a></header>';

    html += '<div class="squad-switch" role="tablist" aria-label="Escolha o time">' + c.times.map(function (x, i) {
      var sub = x.insuficiente ? "sem nomes suficientes" : x.pendente ? "pendente" : x.formacao;
      return '<button role="tab" data-i="' + i + '" aria-selected="' + (i === sel) + '"' + (x.pendente || x.insuficiente ? ' class="pend"' : "") + "><strong>" + esc(x.nome) + "</strong><small>" + esc(sub) + "</small></button>";
    }).join("") + "</div>";

    var field;
    if (t.insuficiente) {
      field = '<div class="pend-box"><div><strong>' + esc(t.nome) + " sem nomes suficientes</strong>" + INSUF + "</div></div>";
    } else if (t.pendente) {
      field = '<div class="pend-box"><div><strong>' + esc(t.nome) + ' em pesquisa</strong>Este time ainda não foi montado. Ele seguirá o mesmo método da Seleção: marcas individuais, coletivas e representação popular.</div></div>';
    } else {
      field = pitchHTML(c, t); // o treinador aparece na lista ao lado
    }
    html += '<div class="team-grid"><section class="panel pitch-wrap" aria-label="' + esc(t.nome) + (t.formacao && !t.pendente ? ", " + t.formacao : "") + '">' + field + "</section>" +
      '<section class="squads" aria-label="' + esc(t.nome) + '">' + squadList(c, t, sel, true, q) + "</section></div>";

    // capitão e craques
    if (c.capitao || (c.craques && c.craques.length)) {
      html += '<div class="honors">' +
        (c.capitao ? '<div class="cap-card"><p class="eyebrow">Capitão de todos os tempos</p><h3><span class="c">C</span>' + wk(c, c.capitao) + "</h3>" + (c.capitaoNota ? "<p>" + esc(c.capitaoNota) + "</p>" : "") + "</div>" :
          '<div class="cap-card"><p class="eyebrow">Capitão de todos os tempos</p><h3>Em pesquisa</h3><p>Ainda não há fonte que aponte o grande capitão da história do clube.</p></div>') +
        '<div><p class="honors-title">Os 3 maiores craques de todos os tempos</p><div class="craques">' + c.craques.map(function (k, i) {
          return '<div class="craque"><span class="n">' + (i + 1) + "º</span><strong>" + wk(c, k[0]) + "</strong>" + (k[1] ? "<p>" + esc(k[1]) + "</p>" : "") + awards(c, k[0]) + "</div>";
        }).join("") + "</div></div></div>";
    }
    if ((c.outros && c.outros.length) || (c.outrosTec && c.outrosTec.length)) {
      html += '<section class="panel others"><h3>Outros nomes que poderiam estar nas seleções</h3><div class="people" style="margin-top:12px">' +
        c.outros.map(function (o) {
          var n = nameOf(o), p = Array.isArray(o) ? o[1] : "";
          return '<span class="person' + (q && norm(n).indexOf(q) >= 0 ? " hit" : "") + '"' + (p ? ' title="' + esc(POS_NAME[p] || p) + '"' : "") + ">" + wk(c, n) + (p ? " <small>(" + p + ")</small>" : "") + "</span>";
        }).join("") +
        (c.outrosTec || []).map(function (n) { return '<span class="person coach-p" title="Técnico">' + wk(c, n) + " <small>(TÉC)</small></span>"; }).join("") + "</div></section>";
    }
    if (c.idolos && c.idolos.length) {
      html += '<section class="panel others"><h3>Ídolos já mapeados</h3><p class="muted" style="margin:6px 0 12px">Nomes confirmados que entrarão na análise; ainda sem posição definida nas seleções.</p><div class="people">' +
        c.idolos.map(function (n) { return '<span class="person">' + esc(n) + "</span>"; }).join("") + "</div></section>";
    }
    var notes = [];
    if (c.nota) notes.push(esc(c.nota));
    if (c.status === "revisao") notes.push("<b>Em revisão:</b> seleções montadas a partir das fontes listadas; os números citados vêm delas. As escolhas ainda podem mudar.");
    if (c.times.some(function (x) { return x.insuficiente; })) notes.push("<b>Times incompletos:</b> o clube não tem craques e ídolos suficientes para preencher todas as seleções.");
    if (c.status === "pesquisa") notes.push("<b>Em pesquisa:</b> as quatro seleções deste time ainda serão montadas e checadas nas fontes.");
    if (c.sugerido) notes.push("<b>Sugerido:</b> clube acrescentado à lista original por sua relevância histórica.");
    if (c.coresPendentes) notes.push("Cores do clube a confirmar.");
    html += '<p class="note-box">' + notes.join(" ") + ' <a href="' + ROOT + 'sobre.html#metodo">Como as seleções são montadas</a>.</p>';
    if (c.fontes && c.fontes.length) {
      html += '<section class="panel others"><h3>Fontes deste time <small><a href="' + ROOT + 'fontes.html#t-' + c.id + '">Ver na página de fontes</a></small></h3><ul class="team-src">' + c.fontes.map(function (f) {
        return '<li><a href="' + esc(f[1]) + '" target="_blank" rel="noopener">' + esc(f[0]) + "</a></li>";
      }).join("") + "</ul></section>";
    }

    return html;
  }
  function renderTeam(c, sel) {
    team.innerHTML = teamHTML(c, sel);
    team.style.cssText = colorVars(c);
    fitPitch();
    team.querySelectorAll("[data-i]").forEach(function (b) {
      b.addEventListener("click", function () { renderTeam(c, +b.dataset.i); });
    });
    document.title = teamTitle(c);
  }

  // desktop: o campo inteiro (e o treinador) cabe na tela sem rolar, seja qual for a altura do cabeçalho
  function fitPitch() {
    if (!team) return;
    var p = team.querySelector(".pitch, .pend-box");
    if (!p || team.hidden || innerWidth < 961) { team.style.removeProperty("--pitch-w"); return; }
    var top = p.getBoundingClientRect().top + scrollY, coach = team.querySelector(".coach");
    var h = Math.max(320, innerHeight - top - (coach ? coach.offsetHeight + 12 : 0) - 28);
    team.style.setProperty("--pitch-w", Math.round(h * 68 / 92) + "px");
  }
  window.addEventListener("resize", fitPitch);

  /* ---------------- rotas ---------------- */
  // cada time tem a sua página (times/<id>.html); os endereços antigos com # levam até ela
  function route() {
    var h = decodeURIComponent(location.hash.slice(1));
    var id = h === "selecao" ? "selecao" : h.indexOf("t/") === 0 ? h.slice(2) : "";
    if (id && (id === "selecao" || CLUBES.some(function (x) { return x.id === id; }))) { location.replace(ROOT + "times/" + id + ".html"); return; }
    if (h === "explorar") setTimeout(function () { $("#explorar").scrollIntoView(); }, 0);
    var m = $(".mnav"); if (m) m.open = false;
  }

  // o gerador das páginas estáticas (lendas-tools) usa as mesmas funções
  L.teamHTML = teamHTML; L.teamTitle = teamTitle; L.deNome = deNome; L.colorVars = colorVars;

  if (home) {
    initHome();
    window.addEventListener("hashchange", route);
    renderAll();
    route();
  } else if (team && document.body.dataset.team) {
    var cur = document.body.dataset.team === "selecao" ? SEL : CLUBES.filter(function (x) { return x.id === document.body.dataset.team; })[0];
    if (cur) renderTeam(cur, 0);
  }
})();
