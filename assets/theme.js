/* Botão de tema das páginas de texto (sobre, fontes) */
(function () {
  var btn = document.getElementById("theme");
  if (!btn) return;
  function sync() {
    var dark = document.documentElement.dataset.theme === "dark";
    btn.setAttribute("aria-pressed", dark);
    btn.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
  }
  btn.addEventListener("click", function () {
    var dark = document.documentElement.dataset.theme !== "dark";
    if (dark) document.documentElement.dataset.theme = "dark"; else delete document.documentElement.dataset.theme;
    try { localStorage.setItem("lfb-theme", dark ? "dark" : "light"); } catch (e) {}
    sync();
  });
  sync();
})();
