/* Lendas do Futebol Brasileiro — prêmios individuais mundiais dos brasileiros (masculino).
   Cada prêmio: [código, ano, colocação (1 = vencedor; 2 ou 3 = pódio)].
   Fontes: listas oficiais da Bola de Ouro (France Football), FIFA World Player / The Best FIFA,
   IFFHS (melhor goleiro do mundo), Troféu Yashin, prêmios da Copa do Mundo e do Mundial de Clubes da FIFA.
   Prêmios da Copa anteriores a 1982 são escolhas retroativas da imprensa, não oficiais da FIFA. */
window.LFB = window.LFB || {};
window.LFB.premiosTipos = {
  BO: ["Bola de Ouro", "France Football"],
  FIFA: ["Melhor do mundo FIFA", "FIFA World Player (1991–2009) e The Best FIFA (2016–)"],
  GK: ["Melhor goleiro do mundo", "IFFHS e The Best FIFA"],
  YASHIN: ["Troféu Yashin", "France Football"],
  SECULO: ["Jogador do Século", "FIFA, 2000"],
  BOH: ["Bola de Ouro honorária", "FIFA e France Football, 2014"],
  COPA: ["Melhor jogador da Copa", "Bola de Ouro da Copa do Mundo (antes de 1982, escolha retroativa da imprensa)"],
  COPA2: ["Bola de Prata da Copa", "Copa do Mundo"],
  ART: ["Artilheiro da Copa", "Chuteira de Ouro da Copa do Mundo"],
  MUNDIAL: ["Melhor jogador do Mundial de Clubes", "Bola de Ouro do Mundial de Clubes da FIFA"],
  PUSKAS: ["Prêmio Puskás", "FIFA, gol mais bonito do ano"]
};
window.LFB.premios = {
  "Pelé": [["SECULO", 2000, 1], ["BOH", 2014, 1], ["COPA", 1958, 1], ["COPA", 1970, 1]],
  "Ronaldo": [["BO", 1997, 1], ["BO", 2002, 1], ["BO", 1996, 2], ["BO", 1998, 3], ["FIFA", 1996, 1], ["FIFA", 1997, 1], ["FIFA", 2002, 1], ["FIFA", 1998, 2], ["FIFA", 2003, 3], ["COPA", 1998, 1], ["COPA2", 2002, 1], ["ART", 2002, 1]],
  "Romário": [["FIFA", 1994, 1], ["FIFA", 1993, 2], ["COPA", 1994, 1]],
  "Rivaldo": [["BO", 1999, 1], ["FIFA", 1999, 1], ["FIFA", 2000, 3]],
  "Ronaldinho": [["BO", 2005, 1], ["BO", 2004, 3], ["FIFA", 2004, 1], ["FIFA", 2005, 1], ["FIFA", 2006, 3]],
  "Kaká": [["BO", 2007, 1], ["FIFA", 2007, 1], ["MUNDIAL", 2007, 1]],
  "Vinícius Júnior": [["FIFA", 2024, 1], ["BO", 2024, 2], ["MUNDIAL", 2022, 1]],
  "Neymar": [["BO", 2015, 3], ["BO", 2017, 3], ["PUSKAS", 2011, 1]],
  "Roberto Carlos": [["FIFA", 1997, 2], ["BO", 2002, 2]],
  "Alisson": [["GK", 2019, 1], ["YASHIN", 2019, 1]],
  "Ederson": [["GK", 2023, 1]],
  "Taffarel": [["GK", 1991, 3], ["GK", 1994, 3]],
  "Dida": [["GK", 2005, 2], ["GK", 2004, 3]],
  "Júlio César": [["GK", 2010, 2], ["GK", 2009, 3]],
  "Garrincha": [["COPA", 1962, 1], ["ART", 1962, 1]],
  "Vavá": [["ART", 1962, 1]],
  "Leônidas da Silva": [["COPA", 1938, 1], ["ART", 1938, 1]],
  "Ademir de Menezes": [["ART", 1950, 1]],
  "Zizinho": [["COPA", 1950, 1]],
  "Falcão": [["COPA2", 1982, 1]],
  "Rogério Ceni": [["MUNDIAL", 2005, 1]],
  "Cássio": [["MUNDIAL", 2012, 1]],
  "Edílson": [["MUNDIAL", 2000, 1]],
  "Thiago Silva": [["MUNDIAL", 2021, 1]]
};
/* homônimos: estes nomes, nestes times, são outros jogadores e não levam os prêmios acima */
window.LFB.premiosExcluir = { "flamengo|Dida": 1, "gremio|Edílson": 1 };

/* texto dos prêmios de um nome: vencedores primeiro, depois pódios */
window.LFB.premiosDe = function (nome, clube) {
  var L = window.LFB, P = (L.premios || {})[nome];
  if (!P || (clube && L.premiosExcluir[clube + "|" + nome])) return [];
  var wins = {}, pods = {}, order = [];
  P.forEach(function (p) {
    var bucket = p[2] === 1 ? wins : pods;
    if (!bucket[p[0]]) { bucket[p[0]] = []; if (order.indexOf(p[0]) < 0) order.push(p[0]); }
    bucket[p[0]].push(p[2] === 1 ? String(p[1]) : p[2] + "º em " + p[1]);
  });
  var out = [];
  order.forEach(function (k) {
    var nomeP = L.premiosTipos[k][0];
    if (wins[k]) out.push({ win: true, txt: nomeP + " " + wins[k].join(", ") });
    if (pods[k]) out.push({ win: false, txt: nomeP + ": " + pods[k].join(", ") });
  });
  return out;
};
