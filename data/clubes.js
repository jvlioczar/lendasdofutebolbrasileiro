/* Lendas do Futebol Brasileiro — clubes
   Cada clube segue o mesmo método da Seleção: Titular, Reserva, Suplente 1 e Suplente 2 (cada um com treinador),
   capitão de todos os tempos, três maiores craques e outros nomes.
   Os 12 grandes estão em grandes.js; aqui ficam os clubes ainda em pesquisa. */
(function () {
  function pend(nome) { return { nome: nome, pendente: true }; }
  function pesquisa(c) {
    c.status = "pesquisa";
    c.times = [pend("Titular"), pend("Reserva"), pend("Suplente 1"), pend("Suplente 2")];
    return c;
  }

  var C = [];

  /* ---------------- clubes em pesquisa ----------------
     ídolos: apenas nomes já confirmados, ainda sem posição nas seleções. */
  var P = [
    ["paulistano", "Paulistano", "SP", "São Paulo", ["#D01F2E", "#FFFFFF"], ["Friedenreich"]],
    ["portuguesa", "Portuguesa", "SP", "São Paulo", ["#D7141A", "#00843D"], ["Djalma Santos", "Julinho Botelho", "Enéas", "Dener", "Zé Roberto"]],
    ["guarani", "Guarani", "SP", "Campinas", ["#00843D", "#FFFFFF"], ["Careca", "Zenon", "Neto", "Evair", "Amoroso", "Djalminha"]],
    ["ponte-preta", "Ponte Preta", "SP", "Campinas", ["#111111", "#FFFFFF"], ["Dicá", "Carlos", "Oscar"]],
    ["bragantino", "Red Bull Bragantino", "SP", "Bragança Paulista", ["#D20A11", "#FFFFFF"], ["Mauro Silva"]],
    ["sao-caetano", "São Caetano", "SP", "São Caetano do Sul", ["#1C4FA0", "#FFFFFF"], ["Sílvio Luiz", "Serginho", "Adhemar", "Mineiro"]],
    ["mirassol", "Mirassol", "SP", "Mirassol", ["#F7D417", "#00843D"], []],
    ["volta-redonda", "Volta Redonda", "RJ", "Volta Redonda", ["#F7D417", "#111111"], []],
    ["bangu", "Bangu", "RJ", "Rio de Janeiro", ["#D7141A", "#FFFFFF"], ["Domingos da Guia", "Zizinho", "Ademir da Guia"]],
    ["america-rj", "America-RJ", "RJ", "Rio de Janeiro", ["#D7141A", "#FFFFFF"], [], true],
    ["america-mg", "América-MG", "MG", "Belo Horizonte", ["#00843D", "#111111"], ["Tostão"]],
    ["ipatinga", "Ipatinga", "MG", "Ipatinga", null, []],
    ["juventude", "Juventude", "RS", "Caxias do Sul", ["#00843D", "#FFFFFF"], []],
    ["caxias", "Caxias", "RS", "Caxias do Sul", ["#8B1A2B", "#FFFFFF"], []],
    ["ypiranga-rs", "Ypiranga de Erechim", "RS", "Erechim", ["#F7D417", "#00843D"], []],
    ["brasil-pelotas", "Brasil de Pelotas", "RS", "Pelotas", ["#D7141A", "#111111"], []],
    ["criciuma", "Criciúma", "SC", "Criciúma", ["#F7D417", "#111111"], []],
    ["chapecoense", "Chapecoense", "SC", "Chapecó", ["#00843D", "#FFFFFF"], ["Danilo", "Cléber Santana", "Bruno Rangel"]],
    ["avai", "Avaí", "SC", "Florianópolis", ["#1C4FA0", "#FFFFFF"], []],
    ["figueirense", "Figueirense", "SC", "Florianópolis", ["#111111", "#FFFFFF"], []],
    ["joinville", "Joinville", "SC", "Joinville", ["#D7141A", "#111111"], []],
    ["athletico-pr", "Athletico Paranaense", "PR", "Curitiba", ["#C8102E", "#111111"], ["Sicupira", "Kléberson", "Alex Mineiro", "Washington", "Bruno Guimarães"]],
    ["coritiba", "Coritiba", "PR", "Curitiba", ["#00543C", "#FFFFFF"], ["Alex", "Dirceu Krüger"]],
    ["parana", "Paraná", "PR", "Curitiba", ["#1C3F94", "#D7141A"], []],
    ["operario-pr", "Operário", "PR", "Ponta Grossa", ["#111111", "#FFFFFF"], []],
    ["londrina", "Londrina", "PR", "Londrina", ["#1E88E5", "#FFFFFF"], []],
    ["maringa", "Maringá", "PR", "Maringá", null, []],
    ["cascavel", "Cascavel", "PR", "Cascavel", null, []],
    ["bahia", "Bahia", "BA", "Salvador", ["#1C4FA0", "#D7141A"], ["Bobô", "Charles", "Beijoca"]],
    ["vitoria", "Vitória", "BA", "Salvador", ["#D7141A", "#111111"], ["Bebeto", "Dida", "Vampeta", "David Luiz", "Petkovic"]],
    ["sport", "Sport", "PE", "Recife", ["#D7141A", "#111111"], ["Ademir de Menezes", "Vavá", "Juninho Pernambucano", "Magrão", "Durval", "Diego Souza"]],
    ["nautico", "Náutico", "PE", "Recife", ["#D7141A", "#FFFFFF"], []],
    ["santa-cruz", "Santa Cruz", "PE", "Recife", ["#111111", "#D7141A"], ["Rivaldo", "Ricardo Rocha"]],
    ["ceara", "Ceará", "CE", "Fortaleza", ["#111111", "#FFFFFF"], [], true],
    ["fortaleza", "Fortaleza", "CE", "Fortaleza", ["#1C4FA0", "#D7141A"], [], true],
    ["atletico-go", "Atlético-GO", "GO", "Goiânia", ["#D7141A", "#111111"], []],
    ["goias", "Goiás", "GO", "Goiânia", ["#00843D", "#FFFFFF"], ["Túlio Maravilha", "Fernandão"]],
    ["vila-nova", "Vila Nova", "GO", "Goiânia", ["#D7141A", "#FFFFFF"], []],
    ["cuiaba", "Cuiabá", "MT", "Cuiabá", ["#00843D", "#F7D417"], []],
    ["paysandu", "Paysandu", "PA", "Belém", ["#3DA9FC", "#FFFFFF"], ["Iarley"]],
    ["remo", "Remo", "PA", "Belém", ["#0B2A6F", "#FFFFFF"], []],
    ["crb", "CRB", "AL", "Maceió", ["#D7141A", "#FFFFFF"], []],
    ["csa", "CSA", "AL", "Maceió", ["#1C4FA0", "#FFFFFF"], []],
    ["asa", "ASA", "AL", "Arapiraca", null, []],
    ["abc", "ABC", "RN", "Natal", ["#111111", "#FFFFFF"], []],
    ["america-rn", "América-RN", "RN", "Natal", ["#D7141A", "#FFFFFF"], []],
    ["sampaio-correa", "Sampaio Corrêa", "MA", "São Luís", ["#F7D417", "#00843D"], []],
    ["botafogo-pb", "Botafogo-PB", "PB", "João Pessoa", ["#111111", "#FFFFFF"], []],
    ["treze", "Treze", "PB", "Campina Grande", ["#111111", "#FFFFFF"], []],
    ["confianca", "Confiança", "SE", "Aracaju", ["#1C4FA0", "#FFFFFF"], []],
    ["river-pi", "River-PI", "PI", "Teresina", null, []],
    ["amazonas", "Amazonas FC", "AM", "Manaus", ["#F7D417", "#111111"], []],
    ["tocantinopolis", "Tocantinópolis", "TO", "Tocantinópolis", null, []],
    ["porto-velho", "Porto Velho", "RO", "Porto Velho", null, []],
    ["rio-branco-ac", "Rio Branco-AC", "AC", "Rio Branco", null, []],
    ["trem", "Trem", "AP", "Macapá", null, []],
    ["sao-raimundo-rr", "São Raimundo-RR", "RR", "Boa Vista", null, []],
    ["operario-ms", "Operário-MS", "MS", "Campo Grande", ["#111111", "#FFFFFF"], []],
    ["comercial-ms", "Comercial-MS", "MS", "Campo Grande", ["#D7141A", "#FFFFFF"], []],
    ["brasiliense", "Brasiliense", "DF", "Taguatinga", ["#F7D417", "#00843D"], []],
    ["gama", "Gama", "DF", "Gama", ["#00843D", "#FFFFFF"], []],
    ["rio-branco-es", "Rio Branco-ES", "ES", "Vitória", ["#111111", "#FFFFFF"], []]
  ];
  P.forEach(function (p) {
    C.push(pesquisa({ id: p[0], nome: p[1], uf: p[2], cidade: p[3], cores: p[4] || ["#6E6A80", "#FFFFFF"], coresPendentes: !p[4],
      idolos: p[5], sugerido: !!p[6], capitao: "", craques: [], outros: [], outrosTec: [] }));
  });

  window.LFB = window.LFB || {};
  // clubes já pesquisados (regionais.js) substituem a ficha "em pesquisa"
  var REG = window.LFB.regionais || {};
  C.forEach(function (c) {
    if (!REG[c.id]) return;
    delete c.idolos;
    for (var k in REG[c.id]) c[k] = REG[c.id][k];
  });
  window.LFB.clubes = (window.LFB.grandes || []).concat(C);
})();
