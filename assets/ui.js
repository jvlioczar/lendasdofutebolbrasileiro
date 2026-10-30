/* Lendas do Futebol Brasileiro — botões comuns a todas as páginas: compartilhar e voltar ao topo */
(function () {
  "use strict";
  var ICO_SHARE = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/></svg>';

  /* ---------------- compartilhar ---------------- */
  // botão no cabeçalho, ao lado do tema; as páginas dos times têm outro no topo do time (data-share)
  var theme = document.getElementById("theme");
  if (theme) {
    var hb = document.createElement("button");
    hb.type = "button"; hb.className = "theme-btn"; hb.setAttribute("data-share", "");
    hb.setAttribute("aria-label", "Compartilhar esta página"); hb.title = "Compartilhar";
    hb.innerHTML = ICO_SHARE;
    theme.parentNode.insertBefore(hb, theme);
  }
  function pageUrl() { var c = document.querySelector('link[rel="canonical"]'); return c ? c.href : location.href.replace(/#.*$/, ""); }
  function pageTitle() { return document.title.replace(/ · Lendas do Futebol Brasileiro$/, "") + " · Lendas do Futebol Brasileiro"; }

  var menu = null, opener = null;
  function closeMenu() { if (menu) { menu.remove(); menu = null; if (opener) opener.setAttribute("aria-expanded", "false"); } }
  function openMenu(btn) {
    closeMenu(); opener = btn; btn.setAttribute("aria-expanded", "true");
    var u = encodeURIComponent(pageUrl()), t = encodeURIComponent(pageTitle());
    menu = document.createElement("div");
    menu.className = "share-menu"; menu.setAttribute("role", "menu");
    menu.innerHTML =
      '<a role="menuitem" href="https://wa.me/?text=' + t + "%20" + u + '" target="_blank" rel="noopener">WhatsApp</a>' +
      '<a role="menuitem" href="https://x.com/intent/post?text=' + t + "&url=" + u + '" target="_blank" rel="noopener">X (Twitter)</a>' +
      '<a role="menuitem" href="https://www.facebook.com/sharer/sharer.php?u=' + u + '" target="_blank" rel="noopener">Facebook</a>' +
      '<a role="menuitem" href="https://t.me/share/url?url=' + u + "&text=" + t + '" target="_blank" rel="noopener">Telegram</a>' +
      '<button role="menuitem" type="button" data-copy>Copiar link</button>';
    document.body.appendChild(menu);
    var r = btn.getBoundingClientRect(), w = menu.offsetWidth;
    menu.style.top = (r.bottom + scrollY + 8) + "px";
    menu.style.left = Math.max(12, Math.min(r.right + scrollX - w, document.documentElement.clientWidth - w - 12)) + "px";
    menu.querySelector("a, button").focus();
  }
  function copy(btn) {
    var url = pageUrl(), done = function () { btn.textContent = "Link copiado!"; setTimeout(closeMenu, 1200); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("Copie o link:", url); });
    else { prompt("Copie o link:", url); }
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-share]");
    if (b) {
      e.preventDefault();
      if (menu && opener === b) { closeMenu(); return; }
      // celular: a folha de compartilhamento do sistema; computador: o menu
      if (navigator.share && matchMedia("(pointer: coarse)").matches) {
        navigator.share({ title: pageTitle(), url: pageUrl() }).catch(function () {});
      } else openMenu(b);
      return;
    }
    if (e.target.closest("[data-copy]")) { copy(e.target.closest("[data-copy]")); return; }
    if (menu && !e.target.closest(".share-menu")) closeMenu();
    else if (menu && e.target.closest("a")) setTimeout(closeMenu, 0);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu) { var o = opener; closeMenu(); if (o) o.focus(); } });
  window.addEventListener("resize", closeMenu);

  /* ---------------- voltar ao topo ---------------- */
  var b = document.createElement("button");
  b.type = "button"; b.className = "to-top";
  b.setAttribute("aria-label", "Voltar ao topo"); b.title = "Voltar ao topo";
  b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>';
  b.addEventListener("click", function () {
    var calmo = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: calmo ? "auto" : "smooth" });
  });
  document.body.appendChild(b);
  function sync() { b.classList.toggle("on", window.scrollY > 600); }
  window.addEventListener("scroll", sync, { passive: true });
  sync();
})();
