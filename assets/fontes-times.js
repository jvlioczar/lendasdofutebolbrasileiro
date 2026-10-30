/* Lendas do Futebol Brasileiro — fontes de cada time (página Fontes) */
(function () {
  "use strict";
  var L = window.LFB, TIMES = [L.selecao].concat(L.clubes || []), META = L.meta || {}, WIKI = L.wiki || {}, PESQ = L.pesquisas || {};
  var UF = { BR: "Seleção Brasileira", SP: "São Paulo", RJ: "Rio de Janeiro", MG: "Minas Gerais", ES: "Espírito Santo", RS: "Rio Grande do Sul", SC: "Santa Catarina", PR: "Paraná",
    BA: "Bahia", PE: "Pernambuco", CE: "Ceará", AL: "Alagoas", RN: "Rio Grande do Norte", MA: "Maranhão", PB: "Paraíba", SE: "Sergipe", PI: "Piauí",
    GO: "Goiás", MT: "Mato Grosso", MS: "Mato Grosso do Sul", DF: "Distrito Federal", PA: "Pará", AM: "Amazonas", TO: "Tocantins", RO: "Rondônia", AC: "Acre", AP: "Amapá", RR: "Roraima" };
  var ORDER = ["BR", "SP", "RJ", "MG", "ES", "RS", "SC", "PR", "BA", "PE", "CE", "AL", "RN", "MA", "PB", "SE", "PI", "GO", "MT", "MS", "DF", "PA", "AM", "TO", "RO", "AC", "AP", "RR"];
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function norm(s) { return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }

  // todas as fontes de um time: as da pesquisa das seleções, depois os perfis oficiais e as pesquisas de torcida
  function fontesDe(c) {
    var out = (c.fontes || []).map(function (f) { return { t: f[0], u: f[1], tipo: "Seleções" }; });
    var m = META[c.id] || {}, w = WIKI["@|" + c.id];
    if (m.site) out.push({ t: "Site oficial", u: m.site, tipo: "Perfil" });
    if (w) out.push({ t: "Wikipédia: " + w, u: "https://pt.wikipedia.org/wiki/" + encodeURIComponent(w.replace(/ /g, "_")), tipo: "Perfil" });
    if (m.instagram) out.push({ t: "Instagram @" + m.instagram, u: "https://www.instagram.com/" + m.instagram + "/", tipo: "Perfil" });
    if (m.torcida) {
      if (m.torcida.ipec != null) out.push({ t: "Torcida: " + PESQ.ipec.nome + " (" + PESQ.ipec.data + ")", u: PESQ.ipec.url, tipo: "Torcida" });
      if (m.torcida.atlas != null) out.push({ t: "Torcida: " + PESQ.atlas.nome + " (" + PESQ.atlas.data + ")", u: PESQ.atlas.url, tipo: "Torcida" });
    }
    return out;
  }

  var list = document.getElementById("tsrc-list"), q = document.getElementById("tsq"), total = document.getElementById("tsrc-total");
  function render() {
    var term = norm(q.value).trim(), html = "", nT = 0, nF = 0;
    ORDER.forEach(function (uf) {
      var g = TIMES.filter(function (c) { return c.uf === uf; }).filter(function (c) {
        if (!term) return true;
        return norm(c.nome + " " + c.cidade + " " + UF[uf]).indexOf(term) >= 0 ||
          fontesDe(c).some(function (f) { return norm(f.t + " " + host(f.u)).indexOf(term) >= 0; });
      }).sort(function (a, b) { return a.nome.localeCompare(b.nome, "pt"); });
      if (!g.length) return;
      html += '<section class="tsrc-group"><h3>' + esc(UF[uf]) + " <small>" + g.length + "</small></h3><div class=\"tsrc-grid\">" + g.map(function (c) {
        var f = fontesDe(c), pesquisa = (c.fontes || []).length;
        nT++; nF += f.length;
        return '<article class="tsrc-card" id="t-' + c.id + '"><header><h4><a href="times/' + c.id + '.html">' + esc(c.nome) + "</a></h4>" +
          (c.status === "pesquisa" ? '<span class="status pesquisa">Em pesquisa</span>' : "") + "</header>" +
          (f.length ? '<ol class="tsrc-links">' + f.map(function (x) {
            return '<li><a href="' + esc(x.u) + '" target="_blank" rel="noopener"><span>' + esc(x.t) + "</span><small>" + esc(x.tipo) + " · " + esc(host(x.u)) + "</small></a></li>";
          }).join("") + "</ol>" : "") +
          (pesquisa ? "" : '<p class="muted tsrc-note">Fontes das seleções em levantamento.</p>') + "</article>";
      }).join("") + "</div></section>";
    });
    list.innerHTML = html || '<div class="empty"><h3>Nada encontrado</h3><p>Tente outro termo.</p></div>';
    total.innerHTML = "<strong>" + nT + "</strong> times · <strong>" + nF + "</strong> fontes";
  }
  q.addEventListener("input", render);
  render();
  function flash() {
    var el = location.hash && document.getElementById(location.hash.slice(1));
    if (!el) return;
    el.scrollIntoView({ block: "center" });
    el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  }
  window.addEventListener("hashchange", flash);
  setTimeout(flash, 50);
})();
