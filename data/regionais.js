/* Lendas do Futebol Brasileiro — clubes fora dos 12 grandes, já pesquisados.
   Mesmo formato de grandes.js. Times que ainda dependem de confirmação de nomes e posições ficam pendentes;
   times que o clube não tem ídolos suficientes para preencher ficam como insuficientes. */
(function () {
  var POS = {
    "4-3-3": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "MEI", "MEI", "PD", "ATA", "PE"],
    "4-2-4": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "MEI", "PD", "ATA", "ATA", "PE"],
    "4-4-2": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "MEI", "MEI", "ATA", "ATA"],
    "4-2-3-1": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "PD", "MEI", "PE", "ATA"],
    "3-5-2": ["GOL", "ZAG", "ZAG", "ZAG", "LD", "VOL", "MEI", "MEI", "LE", "ATA", "ATA"],
    "3-4-2-1": ["GOL", "ZAG", "ZAG", "ZAG", "LD", "VOL", "VOL", "LE", "MEI", "MEI", "ATA"],
    "2-3-5": ["GOL", "ZAG", "ZAG", "VOL", "VOL", "VOL", "PD", "MEI", "ATA", "MEI", "PE"],
    "3-4-3": ["GOL", "ZAG", "ZAG", "ZAG", "MEI", "VOL", "VOL", "MEI", "PD", "ATA", "PE"]
  };
  function pair(x) { return typeof x === "string" ? [x, ""] : x; }
  function xi(nome, tecnico, cap, nomes, formacao) {
    formacao = formacao || "4-3-3";
    return { nome: nome, formacao: formacao, tecnico: pair(tecnico), cap: cap,
      jog: nomes.map(function (n, i) { var p = pair(n); return [p[0], POS[formacao][i], p[1]]; }) };
  }
  function pend(nome) { return { nome: nome, pendente: true }; }
  // também "pendente" para os laços que pulam times sem jogadores; a página mostra o aviso de insuficiente
  function insuf(nome) { return { nome: nome, insuficiente: true, pendente: true }; }
  var WIKI = "https://pt.wikipedia.org/wiki/";

  var R = {};

  R["portuguesa"] = { status: "revisao", fundacao: 1920,
    capitao: "Djalma Santos", capitaoNota: "Revelado pela Portuguesa, bicampeão mundial com a Seleção (1958 e 1962).",
    craques: [["Djalma Santos", "Bicampeão mundial e um dos maiores laterais da história."], ["Julinho Botelho", "Titular da Seleção na Copa de 1954 e ídolo também da Fiorentina."], ["Pinga", "Maior artilheiro do clube: 235 gols."]],
    times: [
      xi("Titular", ["Otto Glória", "Campeão paulista de 1973."], "Djalma Santos", [
        "Félix", "Djalma Santos", "Marinho Peres", "Ditão", "Zé Roberto",
        "Brandãozinho", ["Enéas", "171 gols."], "Dener", ["Julinho Botelho", "97 gols."], ["Pinga", "235 gols."], ["Ivair", "106 gols."]]),
      xi("Reserva", ["Candinho", "Vice-campeão brasileiro de 1996."], "Alexandre Gallo", [
        "Clemer", "Valmir", "Émerson", "Marcelo Miguel", "Roque",
        "Capitão", "Alexandre Gallo", "Caio", "Rodrigo Fabri", ["Leandro Amaral", "105 gols."], "Alex Alves"]),
      pend("Suplente 1"), pend("Suplente 2")
    ],
    outros: [["Zé Maria", "LD"], ["Jair Marinho", "LD"], ["Badeco", "VOL"], ["Basílio", "MEI"], ["Leivinha", "MEI"], ["Ipojucan", "MEI"], ["Edu Marangon", "MEI"], ["Servílio", "ATA"], ["Nininho", "ATA"], ["Evair", "ATA"], ["Ricardo Oliveira", "ATA"], ["Paulinho McLaren", "ATA"], ["Henrique Frade", "ATA"]],
    outrosTec: ["Candinho", "Cilinho", "Rubens Minelli", "Jair Picerni", "Zagallo"],
    fontes: [["Wikipédia: ídolos, artilheiros, treinadores e títulos", WIKI + "Associação_Portuguesa_de_Desportos"], ["Wikipédia: escalações das finais do Brasileiro de 1996", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1996_-_Série_A"], ["Wikipédia (inglês): Otto Glória, técnico da Portuguesa de 1973 a 1977", "https://en.wikipedia.org/wiki/Otto_Gl%C3%B3ria"]] };

  R["guarani"] = { status: "revisao", fundacao: 1911,
    capitao: "Édson", capitaoNota: "Capitão do título brasileiro de 1978, o primeiro de um clube do interior.",
    craques: [["Careca", "Gol do título brasileiro de 1978 e Bola de Prata em 1982."], ["Zenon", "Craque do meio-campo campeão brasileiro de 1978."], ["Amoroso", "Artilheiro e Bola de Ouro (melhor jogador) do Brasileiro de 1994."]],
    times: [
      xi("Titular", ["Carlos Alberto Silva", "Campeão brasileiro de 1978."], "Zenon", [
        "Neneca", "Mauro Cabeção", ["Amaral", "Bola de Prata em 1975."], ["Ricardo Rocha", "Bola de Prata em 1986."], "Miranda",
        "Zé Carlos", "Zenon", ["Djalminha", "Bola de Prata em 1993."], ["Amoroso", "Artilheiro e Bola de Ouro do Brasileiro de 1994."], ["Zuza", "Maior artilheiro: 221 gols."], ["Careca", "118 gols."]]),
      xi("Reserva", ["Carlos Gainete", "Vice-campeão brasileiro de 1986."], "Édson", [
        "Sérgio Neri", "Marco Antônio", "Fernando", ["Édson", "Capitão do título de 1978."], "Zé Mário",
        "Tosin", "Neto", "Marco Antônio Boiadeiro", ["João Paulo", "Bola de Prata em 1986."], "Evair", "Luizão"]),
      pend("Suplente 1"), pend("Suplente 2")
    ],
    outros: [["Gomes", "ZAG"], ["Valdir Carioca", "ZAG"], ["Júlio César", "ZAG"], ["Jorge Luís", "ZAG"], ["Renato", "MEI"], ["Jorge Mendonça", "MEI"], ["Tite", "MEI"], ["Capitão", "ATA"], ["Bozó", "ATA"], ["Catatau", "ATA"], ["Chiquinho Carioca", "ATA"], ["Nenê", "ATA"], ["Augusto", "ATA"], ["Zequinha", "ATA"], ["Fumagalli", "ATA"], ["Edmar", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia: títulos, artilheiros e Bola de Prata", WIKI + "Guarani_Futebol_Clube"], ["Trivela: Guarani 100 anos", "https://trivela.com.br/sem-categoria/guarani-100-anos/"], ["Band: 48 anos do título brasileiro", "https://www.band.com.br/esportes/guarani-comemora-48-anos-do-historico-titulo-brasileiro"], ["Wikipédia: escalações das finais e Bola de Prata do Brasileiro de 1986", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1986"]] };

  R["ponte-preta"] = { status: "revisao", fundacao: 1900,
    capitao: "Oscar", capitaoNota: "Zagueiro revelado pela Ponte, Bola de Prata em 1977 e titular da Seleção nas Copas de 1978 e 1982.",
    craques: [["Dicá", "Maior artilheiro do clube: 155 gols."], ["Oscar", "Bola de Prata em 1977."], ["Carlos", "Goleiro Bola de Prata em 1980 e 1982."]],
    times: [
      xi("Titular", ["Cilinho", "Técnico com mais jogos pelo clube: 348."], "Oscar", [
        ["Carlos", "Bola de Prata em 1980 e 1982."], "Jair Picerni", ["Oscar", "Bola de Prata em 1977."], ["Polozzi", "Bola de Prata em 1977."], ["Odirlei", "Bola de Prata em 1978."],
        ["Zé Mário", "Bola de Prata em 1981."], ["Mineiro", "Bola de Prata em 2000."], ["Dicá", "155 gols."], ["Paulinho", "140 gols."], "Washington", ["William Pottker", "Bola de Prata em 2016."]]),
      xi("Reserva", ["Jorginho", "Vice-campeão da Copa Sul-Americana de 2013."], "Roberto", [
        "Roberto", "Artur", "César", "Diego Sacoman", "Uendel",
        "Fernando Bob", "Fellipe Bastos", "Elias", "Rildo", "Rui Rei", "Leonardo"]),
      insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Juninho", "ZAG"], ["Baraka", "VOL"], ["Osvaldo", "ATA"], ["Bibe", "ATA"], ["Nabor", "ATA"]],
    outrosTec: ["Nico", "Zé Duarte", "Gilson Kleina", "Marco Aurélio"],
    fontes: [["Wikipédia: artilheiros, técnicos e Bola de Prata", WIKI + "Associação_Atlética_Ponte_Preta"], ["Wikipédia (inglês): escalações das finais da Copa Sul-Americana de 2013", "https://en.wikipedia.org/wiki/2013_Copa_Sudamericana_finals"]] };

  R["sao-caetano"] = { status: "revisao", fundacao: 1989,
    capitao: "Russo", capitaoNota: "Capitão do time vice-campeão da Libertadores de 2002.",
    craques: [["Adhemar", "Artilheiro das campanhas do vice-campeonato brasileiro de 2000 e 2001."], ["Sílvio Luiz", "Goleiro titular dos vices brasileiros e da final da Libertadores de 2002."], ["Anaílson", "Meia titular na final da Libertadores de 2002."]],
    times: [
      xi("Titular", ["Jair Picerni", "Vice-campeão brasileiro (2000 e 2001) e da Libertadores (2002)."], "Russo", [
        "Sílvio Luiz", "Russo", "Daniel", "Dininho", "Rubens Cardoso",
        "Marcos Senna", "Adãozinho", "Anaílson", ["Aílton", "Gol na final da Libertadores de 2002."], "Adhemar", ["Somália", "Gol na final da Libertadores de 2002."]]),
      insuf("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Luciano", "GOL"], ["Serginho", "ZAG"], ["Marlon", "MEI"], ["Wágner", "MEI"], ["Robert", "ATA"]],
    outrosTec: ["Muricy Ramalho"],
    nota: "Clube fundado em 1989: tem ídolos para um time titular, mas não o bastante para as outras três seleções.",
    fontes: [["Wikipédia (inglês): escalações da final da Libertadores de 2002", "https://en.wikipedia.org/wiki/2002_Copa_Libertadores_finals"], ["Wikipédia: história e títulos", WIKI + "Associação_Desportiva_São_Caetano"]] };

  R["bragantino"] = { status: "revisao", fundacao: 1928,
    capitao: "Mauro Silva", capitaoNota: "Revelado no Bragantino, campeão paulista de 1990 e depois tetracampeão mundial com a Seleção (1994).",
    craques: [["Mauro Silva", "Campeão paulista de 1990 e vice brasileiro de 1991; tetracampeão mundial em 1994."], ["Claudinho", "Craque do Brasileiro de 2020 (prêmio da CBF), também revelação e artilheiro, com 18 gols."], ["Artur", "Ponta do time vice-campeão da Copa Sul-Americana de 2021."]],
    times: [
      xi("Titular", ["Vanderlei Luxemburgo", "Campeão paulista de 1990."], "Mauro Silva", [
        "Marcelo", "Gil Baiano", "Júnior", "Nei", "Biro-Biro",
        "Mauro Silva", "Alberto", "Mazinho", "Ivair", "Sílvio", "João Santos"]),
      xi("Reserva", ["Maurício Barbieri", "Vice-campeão da Copa Sul-Americana de 2021."], "Léo Ortiz", [
        "Cleiton", "Aderlan", "Fabrício Bruno", "Léo Ortiz", "Edimar",
        "Jadsom", "Bruno Praxedes", ["Claudinho", "Craque do Brasileiro de 2020."], "Artur", "Ytalo", "Helinho"]),
      insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Ronaldo Alfredo", "ATA"], ["Luís Müller", "ATA"], ["Franklin", "ATA"], ["Tomás Cuello", "MEI"], ["Luan Cândido", "LE"]],
    outrosTec: ["Carlos Alberto Parreira"],
    fontes: [["Wikipédia: escalações das finais do Brasileiro de 1991", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1991_-_Série_A"], ["Wikipédia (inglês): escalação da final da Copa Sul-Americana de 2021", "https://en.wikipedia.org/wiki/2021_Copa_Sudamericana_final"], ["Wikipédia (inglês): Prêmio Craque do Brasileirão", "https://en.wikipedia.org/wiki/Pr%C3%AAmio_Craque_do_Brasileir%C3%A3o"]] };

  /* ---------------- Rio de Janeiro ---------------- */
  R["bangu"] = { status: "revisao", fundacao: 1904,
    capitao: "Domingos da Guia", capitaoNota: "Revelado pelo Bangu, o \"Divino Mestre\" foi o maior zagueiro brasileiro da primeira metade do século XX.",
    craques: [["Zizinho", "Ídolo do clube e craque da Seleção na Copa de 1950."], ["Domingos da Guia", "O \"Divino Mestre\", revelado pelo clube."], ["Ladislau da Guia", "Maior artilheiro da história do clube: 229 gols em 333 jogos."]],
    times: [
      xi("Titular", ["Tim", "Campeão da International Soccer League de 1960."], "Domingos da Guia", [
        "Ubirajara Motta", "Fidélis", "Domingos da Guia", "Zózimo", ["Baby", "Bola de Prata em 1985."],
        ["Mário Marques", "Titular na final do Brasileiro de 1985."], "Zizinho", "Ademir da Guia",
        ["Paulo Borges", "Artilheiro do Carioca de 1966 e 1967."], ["Ladislau da Guia", "229 gols."], ["Marinho", "Bola de Ouro (melhor jogador) do Brasileiro de 1985."]]),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Gilmar", "GOL"], ["Márcio Nunes", "LD"], ["Jair", "ZAG"], ["Oliveira", "ZAG"], ["Israel", "MEI"], ["Lulinha", "MEI"], ["João Cláudio", "ATA"], ["Ado", "ATA"], ["Cláudio Adão", "ATA"], ["Cabralzinho", "ATA"], ["Aladim", "ATA"]],
    outrosTec: ["Moisés"],
    fontes: [["Wikipédia: ídolos, artilheiros, técnicos e títulos", WIKI + "Bangu_Atlético_Clube"], ["Wikipédia: final, Bola de Ouro e Bola de Prata do Brasileiro de 1985", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1985"]] };

  R["america-rj"] = { status: "revisao", fundacao: 1904,
    capitao: "Wilson Santos", capitaoNota: "Capitão do último título carioca do clube, em 1960.", craques: [["Luisinho", "Maior artilheiro da história do clube: 333 gols."], ["Edu", "Segundo maior artilheiro: 267 gols."], ["Danilo Alvim", "Craque do meio-campo na seleção do século do clube."]],
    times: [
      xi("Titular", ["Jorge Vieira", "Campeão carioca de 1960."], "", [
        "Pompéia", "Jorge", "Djalma Dias", "Alex", "Ivan",
        "Danilo Alvim", "Bráulio", ["Maneco", "227 gols."], ["Edu", "267 gols."], "Canário", ["Luisinho", "333 gols."]], "4-2-4"),
      pend("Reserva"), pend("Suplente 1"), pend("Suplente 2")
    ],
    outros: [["Ari", "GOL"], ["Wilson Santos", "VOL"], ["Sebastião Leônidas", "ZAG"], ["Amaro", "VOL"], ["João Carlos", "MEI"], ["Calazans", "ATA"], ["Nilo", "ATA"], ["Antoninho", "ATA"], ["Fontoura", "ATA"], ["Plácido", "ATA"], ["Carola", "ATA"], ["Chiquinho", "ATA"]],
    outrosTec: ["Gentil Cardoso", "Martim Francisco", "Dudu", "Edu Coimbra"],
    nota: "O time titular é a seleção do America do século XX, escolhida por torcedores ilustres do clube e publicada pelo Jornal do Brasil em 24 de janeiro de 2001.",
    fontes: [["Wikipédia: artilheiros, técnicos campeões, títulos e seleção do século XX (Jornal do Brasil, 2001)", WIKI + "America_Football_Club_(Rio_de_Janeiro)"], ["Trivela: os 60 anos do último título carioca", "https://trivela.com.br/brasil/os-60-anos-do-ultimo-titulo-carioca-do-america-surpreendente-campeao-que-superou-esquadroes-para-reviver-seus-dias-de-gloria/"]] };

  R["volta-redonda"] = { status: "revisao", fundacao: 1976,
    capitao: "", craques: [["Túlio Maravilha", "Artilheiro do Carioca de 2005, ano da Taça Guanabara."], ["Humberto", "Apontado como o maior artilheiro do clube (79 gols, dado ainda sem fonte confirmada)."], ["Bruno Barra", "Jogador com mais partidas pelo clube: 400 em 2025."]],
    times: [
      xi("Titular", ["Dário Lourenço", "Campeão da Taça Guanabara de 2005."], "", [
        ["Lugão", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Schneider", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Ailson", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Alemão", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Maciel", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."],
        ["Haroldo", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Jonílson", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Mário César", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Gláuber", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."],
        ["Humberto", "Titular na final da Taça Guanabara de 2005, o primeiro título de turno do clube."], ["Túlio Maravilha", "Artilheiro do Carioca de 2005, com 12 gols, e titular na final da Taça Guanabara."]], "4-4-2"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Sanchez", "LE"], ["Heliardo", "ATA"], ["Fábio", "ATA"], ["Tiago Amaral", "ATA"]],
    outrosTec: ["Rogério Corrêa"],
    nota: "Clube fundado em 1976. O Reserva pode sair do time campeão da Série C de 2024; os suplentes não têm nomes suficientes.",
    fontes: [["Tribuna PR: Volta Redonda campeão da Taça Guanabara de 2005 (escalação)", "https://www.tribunapr.com.br/esportes/volta-redonda-e-campeao-da-taca-guanabara/amp/"], ["Wikipédia: história, artilheiros e títulos", WIKI + "Volta_Redonda_Futebol_Clube"], ["Trivela: campeão da Série C de 2024", "https://trivela.com.br/brasil/volta-redonda-campeoes-serie-c-rio-de-janeiro/"]] };

  /* ---------------- Minas Gerais ---------------- */
  R["america-mg"] = { status: "revisao", fundacao: 1912,
    capitao: "", craques: [["Satyro Taboada", "Maior artilheiro da história do clube: 167 gols."], ["Tostão", "Revelado no clube antes de brilhar no Cruzeiro e na Seleção."], ["Euller", "O \"Filho do Vento\", 79 gols, quinto maior artilheiro."]],
    times: [
      xi("Titular", ["Givanildo Oliveira", "Técnico do clube em 1997, ano do título da Série B."], "", [
        ["Milagres", "Goleiro com mais jogos pelo clube: 372 (1990 a 2001)."], ["Danilo", "Revelado no clube, depois lateral da Seleção, do Real Madrid e da Juventus."], ["Júnior", "Titular contra o Milan na Copa Centenário de 1997."], ["Ricardo", "Titular contra o Milan na Copa Centenário de 1997."], ["Tércio", "Titular contra o Milan na Copa Centenário de 1997."],
        ["Gilberto Silva", "Revelado no clube, depois campeão mundial em 2002."], ["Pintado", "Titular contra o Milan na Copa Centenário de 1997."], ["Tostão", "Revelado no clube, depois tricampeão mundial em 1970."],
        ["Euller", "79 gols, quinto maior artilheiro do clube."], ["Fred", "Revelado no clube, depois ídolo do Fluminense."], ["Éder", "Revelado no clube, depois ídolo do Atlético e da Seleção de 1982."]]),
      pend("Reserva"), pend("Suplente 1"), pend("Suplente 2")
    ],
    outros: [["Gilberto", "GOL"], ["Evanílson", "LD"], ["Estevam", "LD"], ["Nakazawa", "ZAG"], ["Irênio", "MEI"], ["Marco Antônio Boiadeiro", "MEI"], ["Satyro Taboada", "ATA"], ["Gunga", "ATA"], ["Petrônio", "ATA"], ["Harvey", "ATA"], ["Jair Bala", "ATA"], ["Palhinha", "ATA"], ["Tupãzinho", "ATA"], ["Alex Mineiro", "ATA"], ["Richarlison", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia: revelações, artilheiros, mais jogos, títulos e escalação contra o Milan (1997)", WIKI + "América_Futebol_Clube_(Belo_Horizonte)"]] };


  /* ---------------- Rio Grande do Sul ---------------- */
  R["brasil-pelotas"] = { status: "revisao", fundacao: 1911,
    capitao: "", craques: [["Claudio Milar", "Maior ídolo da história do clube, com 111 gols."]],
    times: [
      xi("Titular", ["Rogério Zimmermann", "Apontado como o maior técnico da história do clube."], "", [
        ["João Luís", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Valdoir", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Silva", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Hélio", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Jorge Batata", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Doraci", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Lívio", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Andrezinho", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."], ["Júnior Brasília", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."],
        ["Claudio Milar", "Uruguaio, maior ídolo do clube: 111 gols."], ["Zezinho", "Titular na semifinal do Brasileiro de 1985, no 3º lugar do clube."]]),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Eduardo Martini", "GOL"], ["Régis", "ZAG"], ["Fernando Cardozo", "ZAG"], ["Bira", "ATA"], ["Leandrão", "ATA"]],
    outrosTec: ["Walmir Louruz", "Luiz Felipe Scolari"],
    nota: "O Titular parte do time 3º colocado no Brasileiro de 1985, a melhor campanha de um clube do interior do Sul.",
    fontes: [["Wikipédia: ídolos, títulos e campanha de 1985", WIKI + "Grêmio_Esportivo_Brasil"]] };

  R["juventude"] = { status: "pesquisa",
    outros: [["Emerson", "GOL"], ["Capone", "ZAG"], ["Flávio", "VOL"], ["Maurílio", "ATA"], ["Márcio Mixirica", "ATA"]],
    outrosTec: [],
    nota: "Campeão da Copa do Brasil de 1999. Os nomes listados vêm do relato da final; a escalação completa ainda não foi encontrada.",
    fontes: [["Soccerway: o dia em que o Juventude conquistou a Copa do Brasil de 1999", "https://br.soccerway.com/noticias/futebol-copa-do-brasil-flashback-o-dia-em-que-o-juventude-frustrou-os-planos-do-bota-e-conquistou-a-copa-do-brasil/GzLFfk1S"]] };

  R["caxias"] = { status: "pesquisa",
    outros: [["Gilmar Dal Pozzo", "GOL"], ["Paulo Turra", "ZAG"]],
    outrosTec: ["Tite"],
    nota: "Campeão gaúcho de 2000 sobre o Grêmio de Ronaldinho, com Tite no comando. A escalação completa ainda não foi encontrada.",
    fontes: [["Lance: Gilmar Dal Pozzo relembra o título de 2000", "https://www.lance.com.br/futebol-nacional/gilmar-dal-pozzo-relembra-historico-titulo-do-caxias-contra-gremio-de-ronaldinho-gaucho.html"]] };

  /* ---------------- Santa Catarina ---------------- */
  R["criciuma"] = { status: "revisao", fundacao: 1947,
    capitao: "", craques: [["Vilmar", "Gol na primeira final da Copa do Brasil de 1991."], ["Roberto Cavalo", "Volante da Copa do Brasil de 1991 e depois técnico campeão nacional pelo Avaí."]],
    times: [
      xi("Titular", ["Luiz Felipe Scolari", "Campeão da Copa do Brasil de 1991."], "", [
        ["Alexandre", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Sarandí", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Vilmar", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube. Fez o gol na primeira final."],
        ["Altair", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Itá", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Roberto Cavalo", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Grizzo", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Zé Roberto", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Gelson", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Jairo Lenzi", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."], ["Soares", "Titular nas finais da Copa do Brasil de 1991, título nacional do clube."]], "4-4-2"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Vanderlei", "MEI"]],
    outrosTec: [],
    fontes: [["Wikipédia: escalações das finais da Copa do Brasil de 1991", WIKI + "Copa_do_Brasil_de_Futebol_1991_-_Final"]] };

  R["chapecoense"] = { status: "revisao", fundacao: 1973,
    capitao: "", craques: [["Cléber Santana", "Meia titular na campanha da Sul-Americana de 2016."], ["Danilo", "Goleiro das defesas decisivas na semifinal da Sul-Americana de 2016."], ["Bruno Rangel", "Atacante da campanha de 2016."]],
    times: [
      xi("Titular", ["Caio Júnior", "Técnico da campanha da Sul-Americana de 2016; morreu no acidente aéreo."], "", [
        ["Danilo", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Gimenez", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Thiego", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Neto", "Titular na semifinal da Copa Sul-Americana de 2016; sobrevivente do acidente aéreo."],
        ["Dener", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Matheus Biteco", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Gil", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Cléber Santana", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."],
        ["Ananias", "Gol de empate na semifinal de ida da Copa Sul-Americana de 2016; morreu no acidente aéreo."], ["Bruno Rangel", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."], ["Tiaguinho", "Titular na semifinal da Copa Sul-Americana de 2016; morreu no acidente aéreo de novembro daquele ano."]]),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Follmann", "GOL"], ["Alan Ruschel", "LE"], ["Josimar", "VOL"], ["Sérgio Manoel", "MEI"], ["Kempes", "ATA"], ["Lucas Gomes", "ATA"]],
    outrosTec: [],
    nota: "Campeão da Copa Sul-Americana de 2016: a final não foi disputada por causa do acidente aéreo que vitimou a delegação, e a CONMEBOL deu o título ao clube.",
    fontes: [["O Imparcial: escalação da semifinal de ida contra o San Lorenzo (2016)", "https://oimparcial.com.br/esportes/2016/11/chapecoense-arranca-empate-com-o-san-lorenzo-na-argentina/"], ["Gazeta Esportiva: a classificação para a final de 2016", "https://www.gazetaesportiva.com/?p=2387600"]] };

  R["figueirense"] = { status: "revisao", fundacao: 1921,
    capitao: "", craques: [["Cleiton Xavier", "Meia titular na final da Copa do Brasil de 2007."], ["André Santos", "Lateral da final de 2007, depois da Seleção."], ["Henrique", "Gol na primeira final da Copa do Brasil de 2007."]],
    times: [
      xi("Titular", ["Mário Sérgio", "Vice-campeão da Copa do Brasil de 2007."], "", [
        ["Wilson", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Felipe Santana", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Chicão", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Vinícius", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Diogo", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Edson", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Henrique", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato. Fez o gol do Figueirense."],
        ["André Santos", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Ruy", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Cleiton Xavier", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."], ["Victor Simões", "Titular na primeira final da Copa do Brasil de 2007, no vice-campeonato."]], "3-4-2-1"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Anderson Luís", "LD"]],
    outrosTec: [],
    fontes: [["Wikipédia: escalações das finais da Copa do Brasil de 2007", WIKI + "Copa_do_Brasil_de_Futebol_2007_-_Final"]] };

  R["avai"] = { status: "revisao", fundacao: 1923,
    capitao: "", craques: [["Zenon", "Revelado no clube e escolhido para a seleção histórica de 1998."], ["Saul", "Atacante dos títulos catarinenses dos anos 1940 e da seleção histórica."], ["Adolfinho", "Goleiro dos títulos dos anos 1940 e da seleção histórica."]],
    times: [
      xi("Titular", ["Roberto Cavalo", "Campeão da Série C de 1998, título nacional do clube."], "", [
        ["Adolfinho", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Loló", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Fateco", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Veneza", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Procópio", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Beck", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Bráulio", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Zenon", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Felipinho", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Saul", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."], ["Nizeta", "Escolhido para a seleção histórica do clube (votação de torcedores e jornalistas, 1998)."]], "2-3-5"),
      xi("Reserva", ["Silas", "Campeão catarinense de 2009."], "", [
        ["Eduardo Martini", "Titular no título catarinense de 2009."], ["Ferdinando", "Titular no título catarinense de 2009."], ["Turatto", "Titular no título catarinense de 2009."], ["Émerson", "Titular no título catarinense de 2009."], ["Uendel", "Titular no título catarinense de 2009."], ["Marcus Winícius", "Titular no título catarinense de 2009."], ["Léo Gago", "Titular no título catarinense de 2009."], ["Marquinhos Santos", "Titular no título catarinense de 2009."], ["Caio", "Titular no título catarinense de 2009."], ["Evando", "Titular no título catarinense de 2009."], ["William", "Titular no título catarinense de 2009."]], "4-4-2"),
      insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Chocolate", "ZAG"], ["Tião", "ATA"], ["Dão", "ATA"]],
    outrosTec: ["Péricles Chamusca", "Luiz Gonzaga Milioli", "Sérgio Lopes"],
    nota: "O Titular é a seleção histórica do clube, escolhida por torcedores e jornalistas em 1998; as posições seguem a ordem clássica da lista (goleiro, zagueiros, linha média e ataque).",
    fontes: [["Wikipédia: seleção histórica, títulos e escalações dos times campeões", WIKI + "Avaí_Futebol_Clube"]] };

  R["joinville"] = { status: "pesquisa",
    outros: [["Ivan", "GOL"], ["Marcão", "GOL"], ["Nardela", "MEI"], ["Lima", "ATA"], ["Osni Fontan", "ATA"]],
    outrosTec: ["Arturzinho", "Hemerson Maria"],
    nota: "Octacampeão catarinense (1978 a 1985), campeão da Série C de 2011 e da Série B de 2014. Lima é o maior artilheiro (140 gols) e Nardela, o recordista de jogos (680).",
    fontes: [["Wikipédia: ídolos, artilheiros e títulos", WIKI + "Joinville_Esporte_Clube"]] };

  /* ---------------- Paraná ---------------- */
  R["athletico-pr"] = { status: "revisao", fundacao: 1924,
    capitao: "Thiago Heleno", capitaoNota: "Capitão na final da Copa Sul-Americana de 2021 e titular nas finais de 2018.",
    craques: [["Kléberson", "Revelado no clube, Bola de Prata do título brasileiro de 2001 e depois pentacampeão mundial."], ["Alex Mineiro", "Bola de Prata e destaque das finais do Brasileiro de 2001."], ["Washington", "Recordista de gols numa edição do Brasileiro: 34 em 2004."]],
    times: [
      xi("Titular", ["Tiago Nunes", "Campeão da Copa Sul-Americana de 2018 e da Copa do Brasil de 2019."], "", [
        ["Flávio", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Rogério Corrêa", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Nem", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Gustavo", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube. Bola de Prata em 2001."],
        ["Alessandro", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Cocito", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Adriano", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."], ["Kléberson", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube. Bola de Prata em 2001."], ["Fabiano", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube."],
        ["Alex Mineiro", "Titular nas finais do Brasileiro de 2001, primeiro título nacional do clube. Bola de Prata em 2001."], ["Washington", "Recordista de gols numa edição do Brasileiro: 34 em 2004."]], "3-5-2"),
      xi("Reserva", ["Geninho", "Campeão brasileiro de 2001."], "Lucho González", [
        ["Santos", "Titular nas finais da Copa Sul-Americana de 2018."], ["Jonathan", "Titular nas finais da Copa Sul-Americana de 2018."], ["Thiago Heleno", "Titular nas finais da Copa Sul-Americana de 2018."], ["Léo Pereira", "Titular nas finais da Copa Sul-Americana de 2018."], ["Renan Lodi", "Titular nas finais da Copa Sul-Americana de 2018."], ["Bruno Guimarães", "Titular nas finais da Copa Sul-Americana de 2018."], ["Lucho González", "Capitão nas finais da Copa Sul-Americana de 2018."],
        ["Marcelo Cirino", "Titular nas finais da Copa Sul-Americana de 2018."], ["Raphael Veiga", "Titular nas finais da Copa Sul-Americana de 2018."], ["Nikão", "Titular nas finais da Copa Sul-Americana de 2018."], ["Pablo", "Titular nas finais da Copa Sul-Americana de 2018."]], "4-2-3-1"),
      pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Sicupira", "ATA"], ["Paulo Rink", "ATA"], ["Ilan", "ATA"], ["Kléber", "ATA"], ["Pedro Henrique", "ZAG"], ["Erick", "VOL"], ["Léo Cittadini", "MEI"], ["Renato Kayzer", "ATA"], ["David Terans", "MEI"]],
    outrosTec: ["Alberto Valentim"],
    fontes: [["Wikipédia: escalações e Bola de Prata do Brasileiro de 2001", WIKI + "Campeonato_Brasileiro_de_Futebol_de_2001_-_Série_A"], ["Wikipédia (inglês): escalações das finais da Copa Sul-Americana de 2018", "https://en.wikipedia.org/wiki/2018_Copa_Sudamericana_finals"], ["Wikipédia (inglês): escalação da final da Copa Sul-Americana de 2021", "https://en.wikipedia.org/wiki/2021_Copa_Sudamericana_final"]] };

  R["coritiba"] = { status: "revisao", fundacao: 1909,
    capitao: "Emerson", capitaoNota: "Capitão nas finais da Copa do Brasil de 2011.",
    craques: [["Alex", "Revelado no clube, depois ídolo do Palmeiras, do Cruzeiro e do Fenerbahçe."], ["Rafael", "Goleiro Bola de Prata do título brasileiro de 1985."], ["Dirceu Krüger", "Ídolo histórico do clube."]],
    times: [
      xi("Titular", ["Ênio Andrade", "Campeão brasileiro de 1985."], "", [
        ["Rafael", "Titular na final do Brasileiro de 1985, título nacional do clube. Bola de Prata em 1985."], ["André", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Gomes", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Heraldo", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Dida", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Almir", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Toby", "Titular na final do Brasileiro de 1985, título nacional do clube."],
        ["Alex", "Revelado no clube, depois ídolo do Palmeiras, do Cruzeiro e do Fenerbahçe."], ["Lela", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Índio", "Titular na final do Brasileiro de 1985, título nacional do clube."], ["Édson", "Titular na final do Brasileiro de 1985, título nacional do clube."]]),
      xi("Reserva", ["Marcelo Oliveira", "Vice-campeão da Copa do Brasil de 2011."], "Emerson", [
        ["Edson Bastos", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Jonas", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Demerson", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Emerson", "Capitão nas finais da Copa do Brasil de 2011."],
        ["Lucas Mendes", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Willian", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Léo Gago", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Rafinha", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Davi", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Anderson Aquino", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."], ["Bill", "Titular na primeira final da Copa do Brasil de 2011, no vice-campeonato."]], "4-4-2"),
      insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Marildo", "MEI"], ["Dirceu Krüger", "ATA"], ["Marcos Paulo", "VOL"], ["Keirrison", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia: final e Bola de Prata do Brasileiro de 1985", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1985"], ["Wikipédia: escalações das finais da Copa do Brasil de 2011", WIKI + "Final_da_Copa_do_Brasil_de_Futebol_de_2011"]] };

  R["londrina"] = { status: "revisao", fundacao: 1956,
    capitao: "", craques: [["Paulinho", "Dois gols na final da Série B de 1980."], ["Éverton", "Ídolo histórico e titular na final de 1980."]],
    times: [
      xi("Titular", ["Jair Bala", "Campeão da Série B de 1980."], "", [
        ["Jorge", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Toquinho", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Gilberto", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Fernando", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Zé Antônio", "Titular na final da Série B de 1980, primeiro título nacional do clube. Fez um gol na final."],
        ["Wanderley", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Éverton", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Lívio", "Titular na final da Série B de 1980, primeiro título nacional do clube. Fez um gol na final."],
        ["Zé Dias", "Titular na final da Série B de 1980, primeiro título nacional do clube."], ["Paulinho", "Titular na final da Série B de 1980, primeiro título nacional do clube. Fez dois gols na final."], ["Nivaldo", "Titular na final da Série B de 1980, primeiro título nacional do clube."]]),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Ado", "GOL"], ["Joel", "ATA"], ["Bruno Santos", "ATA"]],
    outrosTec: ["Floreal Garro", "Varlei de Carvalho", "Claudio Tencati"],
    fontes: [["Wikipédia: jogadores históricos, técnicos, títulos e escalação da final da Série B de 1980", WIKI + "Londrina_Esporte_Clube"]] };

  R["parana"] = { status: "pesquisa",
    outros: [["Saulo", "ATA"]],
    outrosTec: ["Rubens Minelli"],
    nota: "Campeão da Série B de 1992 e pentacampeão paranaense (1993 a 1997, o último com Rubens Minelli). Saulo é o maior artilheiro da história do clube.",
    fontes: [["Wikipédia: títulos e história", WIKI + "Paraná_Clube"]] };


  /* ---------------- Bahia ---------------- */
  R["bahia"] = { status: "revisao", fundacao: 1931,
    capitao: "", craques: [["Bobô", "Craque do título brasileiro de 1988, Bola de Prata naquele ano."], ["Charles", "Atacante titular nas finais do Brasileiro de 1988."], ["Paulo Rodrigues", "Volante do título de 1988, Bola de Prata naquele ano."]],
    times: [
      xi("Titular", ["Evaristo de Macedo", "Campeão brasileiro de 1988."], "", [
        ["Ronaldo", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Tarantini", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["João Marcelo", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Claudir", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Edinho", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Paulo Rodrigues", "Titular nas finais do Brasileiro de 1988, título nacional do clube. Bola de Prata em 1988."],
        ["Zé Carlos", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Bobô", "Titular nas finais do Brasileiro de 1988, título nacional do clube. Bola de Prata em 1988."], ["Osmar", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Charles", "Titular nas finais do Brasileiro de 1988, título nacional do clube."], ["Marquinhos", "Titular nas finais do Brasileiro de 1988, título nacional do clube."]]),
      xi("Reserva", ["Geninho", "Campeão da Taça Brasil de 1959, sobre o Santos de Pelé."], "", [
        ["Nadinho", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Leone", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Henrique", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Beto", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Vicente", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Flávio", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Bombeiro", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Marito", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Alencar", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Léo", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."], ["Biriba", "Titular nas finais da Taça Brasil de 1959, primeiro título nacional do clube."]], "2-3-5"),
      pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Paulo Róbson", "LE"], ["Gil Sergipano", "ATA"], ["Beijoca", "ATA"], ["Nenzinho", "ZAG"]],
    outrosTec: ["Carlos Volante", "Rogério Ceni"],
    fontes: [["Wikipédia: escalações das finais e Bola de Prata do Brasileiro de 1988", WIKI + "Campeonato_Brasileiro_de_Futebol_de_1988"], ["Wikipédia: escalações das finais da Taça Brasil de 1959", WIKI + "Taça_Brasil_de_1959"]] };

  R["vitoria"] = { status: "revisao", fundacao: 1899,
    capitao: "Ramon Menezes", capitaoNota: "Capitão nas finais da Copa do Brasil de 2010.",
    craques: [["Bebeto", "Revelado no clube, depois tetracampeão mundial em 1994."], ["Dida", "Revelado no clube, goleiro do vice-campeonato brasileiro de 1993."], ["Petkovic", "Meia sérvio, ídolo do clube no fim dos anos 1990."]],
    times: [
      xi("Titular", ["Ricardo Silva", "Vice-campeão da Copa do Brasil de 2010."], "Ramon Menezes", [
        ["Dida", "Revelado no clube, goleiro do vice-campeonato brasileiro de 1993 e depois campeão da Champions League."], ["Nino Paraíba", "Titular na final de volta da Copa do Brasil de 2010, no vice-campeonato."],
        ["David Luiz", "Revelado no clube, depois zagueiro da Seleção e campeão da Champions League."], ["Anderson Martins", "Titular na final de volta da Copa do Brasil de 2010, no vice-campeonato."], ["Egídio", "Titular na final de volta da Copa do Brasil de 2010, no vice-campeonato."],
        ["Vampeta", "Revelado no clube, depois pentacampeão mundial em 2002."], ["Ramon Menezes", "Capitão nas finais da Copa do Brasil de 2010."], ["Petkovic", "Meia sérvio, ídolo do clube no fim dos anos 1990."],
        ["Elkeson", "Titular na final de volta da Copa do Brasil de 2010, no vice-campeonato."], ["Bebeto", "Revelado no clube, depois tetracampeão mundial em 1994."], ["Schwenck", "Titular na final de volta da Copa do Brasil de 2010, no vice-campeonato."]]),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Viáfara", "GOL"], ["Neto Coruja", "VOL"], ["Bida", "VOL"], ["Júnior", "ATA"], ["Hulk", "ATA"], ["Alex Alves", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia: escalações das finais da Copa do Brasil de 2010", WIKI + "Final_da_Copa_do_Brasil_de_Futebol_de_2010"]] };

  /* ---------------- Pernambuco ---------------- */
  R["sport"] = { status: "revisao", fundacao: 1905,
    capitao: "", craques: [["Magrão", "Recordista de jogos pelo clube: 732 (2005 a 2019)."], ["Traçaia", "Maior artilheiro da história do clube: 202 gols."], ["Juninho Pernambucano", "Revelado no clube, depois ídolo do Vasco e do Lyon."]],
    times: [
      xi("Titular", ["Nelsinho Baptista", "Campeão da Copa do Brasil de 2008."], "", [
        ["Magrão", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube. Recordista de jogos: 732."], ["Diogo", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."], ["Durval", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube. Terceiro em jogos pelo clube: 472."], ["Igor", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."], ["Dutra", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."],
        ["Daniel Paulista", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."], ["Sandro Goiano", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."], ["Kassio", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."], ["Luciano Henrique", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube. Fez um gol na final."],
        ["Carlinhos Bala", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube. Fez um gol na final."], ["Leandro Machado", "Titular na final de volta da Copa do Brasil de 2008, título nacional do clube."]], "4-4-2"),
      pend("Reserva"), pend("Suplente 1"), pend("Suplente 2")
    ],
    outros: [["Manga", "GOL"], ["Luisinho Netto", "LD"], ["Bria", "ZAG"], ["Rithely", "VOL"], ["Fábio Gomes", "VOL"], ["Juninho Pernambucano", "MEI"], ["Diego Souza", "MEI"], ["Traçaia", "ATA"], ["Djalma Freitas", "ATA"], ["Ademir de Menezes", "ATA"], ["Vavá", "ATA"], ["Dadá Maravilha", "ATA"], ["Roberto Coração de Leão", "ATA"]],
    outrosTec: ["Emerson Leão", "Jair Picerni"],
    nota: "Campeão brasileiro de 1987 (com Emerson Leão e, no quadrangular final, Jair Picerni) e da Copa do Brasil de 2008. A escalação de 1987 ainda não foi encontrada.",
    fontes: [["Wikipédia: escalações das finais da Copa do Brasil de 2008", WIKI + "Final_da_Copa_do_Brasil_de_Futebol_de_2008"], ["Wikipédia: artilheiros, mais jogos, técnicos e títulos", WIKI + "Sport_Club_do_Recife"]] };

  R["santa-cruz"] = { status: "revisao", fundacao: 1914,
    capitao: "", craques: [["Rivaldo", "Revelado no clube, depois campeão mundial em 2002 e melhor do mundo em 1999."], ["Ricardo Rocha", "Revelado no clube, depois tetracampeão mundial em 1994."], ["Ramón", "Atacante do time dos anos 1970."]],
    times: [
      xi("Titular", ["Alfredo González", "Campeão pernambucano de 1957, o primeiro Supercampeonato."], "", [
        ["Aníbal", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Diogo", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Sidney", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Zequinha", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Aldemar", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Edinho", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Lanzoninho", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Rudimar", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Faustino", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Mituca", "Titular na final do Pernambucano de 1957 contra o Sport."], ["Jorginho", "Titular na final do Pernambucano de 1957 contra o Sport."]], "2-3-5"),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Ricardo Rocha", "ZAG"], ["Givanildo", "VOL"], ["Rivaldo", "MEI"], ["Ramón", "ATA"], ["Nunes", "ATA"], ["Grafite", "ATA"], ["Keno", "ATA"], ["Arthur", "ATA"]],
    outrosTec: ["Milton Mendes"],
    nota: "Campeão da Série C de 2013 e da Copa do Nordeste de 2016. O Titular é o time do Supercampeonato pernambucano de 1957; os ídolos posteriores estão em outros nomes enquanto as escalações de 1975 e 2016 não são encontradas.",
    fontes: [["Wikipédia: história, títulos e escalações", WIKI + "Santa_Cruz_Futebol_Clube"]] };

  R["nautico"] = { status: "pesquisa",
    outros: [["Bita", "ATA"], ["Fernando Carvalheira", "ATA"], ["Baiano", "ATA"], ["Ivson de Freitas", "ATA"], ["Jorge Mendonça", "ATA"]],
    outrosTec: ["Gentil Cardoso", "Palmeira", "Muricy Ramalho", "Zé Teodoro", "Roberto Fernandes"],
    nota: "Hexacampeão pernambucano (1963 a 1968) e vice da Taça Brasil de 1967. Bita é o maior artilheiro (221 gols em 319 jogos).",
    fontes: [["Wikipédia: artilheiros, títulos e técnicos", WIKI + "Clube_Náutico_Capibaribe"]] };

  /* ---------------- Ceará ---------------- */
  R["fortaleza"] = { status: "revisao", fundacao: 1918,
    capitao: "Tinga", capitaoNota: "Capitão na final da Copa Sul-Americana de 2023.",
    craques: [["Tinga", "Capitão na final da Copa Sul-Americana de 2023."], ["João Ricardo", "Goleiro titular na final da Copa Sul-Americana de 2023."], ["Juan Martín Lucero", "Centroavante titular na final da Copa Sul-Americana de 2023."]],
    times: [
      xi("Titular", ["Juan Pablo Vojvoda", "Vice-campeão da Copa Sul-Americana de 2023."], "Tinga", [
        ["João Ricardo", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Tinga", "Capitão na final da Copa Sul-Americana de 2023."], ["Emanuel Brítez", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Titi", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Bruno Pacheco", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Zé Welison", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Caio Alexandre", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Marinho", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Tomás Pochettino", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Guilherme", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."], ["Juan Martín Lucero", "Titular na final da Copa Sul-Americana de 2023, no vice-campeonato."]], "4-2-3-1"),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Yago Pikachu", "LD"], ["Lucas Crispim", "MEI"], ["Thiago Galhardo", "ATA"], ["Silvio Romero", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia (inglês): escalação da final da Copa Sul-Americana de 2023", "https://en.wikipedia.org/wiki/2023_Copa_Sudamericana_final"]] };

  R["ceara"] = { status: "pesquisa",
    outros: [["Diego", "GOL"], ["Walter Barroso", "MEI"], ["Iarley", "MEI"], ["Vina", "MEI"], ["Gildo", "ATA"], ["Rubens Feijão", "ATA"], ["Sérgio Alves", "ATA"]],
    outrosTec: ["Janos Tratay"],
    nota: "Tricampeão da Copa do Nordeste (2015, 2020 e 2023) e vice da Copa do Brasil de 1994. Gildo está entre os maiores ídolos do clube.",
    fontes: [["Wikipédia: ídolos, títulos e técnicos", WIKI + "Ceará_Sporting_Club"]] };

  /* ---------------- Alagoas e Rio Grande do Norte ---------------- */
  R["csa"] = { status: "revisao", fundacao: 1913,
    capitao: "", craques: [["Mimi", "Atacante titular nas finais da Copa Conmebol de 1999."], ["Missinho", "Atacante titular nas finais da Copa Conmebol de 1999."]],
    times: [
      xi("Titular", ["Otávio Oliveira", "Vice-campeão da Copa Conmebol de 1999."], "", [
        ["Veloso", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Mazinho", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Márcio Pereira", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Jivago", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Williams", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Roberto Alves", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Léo", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Bruno Alves", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Fábio Magrão", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Missinho", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."], ["Mimi", "Titular na primeira final da Copa Conmebol de 1999, no vice-campeonato."]], "4-4-2"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Ramon", "MEI"]],
    outrosTec: [],
    fontes: [["Wikipédia (inglês): escalações das finais da Copa Conmebol de 1999", "https://en.wikipedia.org/wiki/1999_Copa_CONMEBOL_Finals"]] };

  R["abc"] = { status: "revisao", fundacao: 1915,
    capitao: "", craques: [["Leandrão", "Centroavante do título da Série C de 2010."]],
    times: [
      xi("Titular", ["Leandro Campos", "Campeão da Série C de 2010."], "", [
        ["Wellington", "Titular no jogo decisivo do título da Série C de 2010."], ["Sueliton", "Titular no jogo decisivo do título da Série C de 2010."], ["Tiago Garça", "Titular no jogo decisivo do título da Série C de 2010."], ["Leonardo", "Titular no jogo decisivo do título da Série C de 2010."], ["Renatinho Potiguar", "Titular no jogo decisivo do título da Série C de 2010."], ["Basílio", "Titular no jogo decisivo do título da Série C de 2010."], ["Ricardo Oliveira", "Titular no jogo decisivo do título da Série C de 2010."], ["Pio", "Titular no jogo decisivo do título da Série C de 2010."], ["Jackson", "Titular no jogo decisivo do título da Série C de 2010."], ["Cascata", "Titular no jogo decisivo do título da Série C de 2010."], ["Leandrão", "Titular no jogo decisivo do título da Série C de 2010."]], "4-4-2"),
      insuf("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [],
    outrosTec: [],
    nota: "Maior campeão potiguar (57 títulos estaduais). O Titular é o time do título nacional, a Série C de 2010.",
    fontes: [["Wikipédia: títulos e escalação do jogo decisivo da Série C de 2010", WIKI + "ABC_Futebol_Clube"]] };


  /* ---------------- Maranhão, Paraíba e Sergipe ---------------- */
  R["sampaio-correa"] = { status: "revisao", fundacao: 1923,
    capitao: "", craques: [["Pelezinho", "Artilheiro do clube no título da Série B de 1972, com 8 gols."], ["Pimentinha", "Ponta com 285 jogos e 42 gols em 11 anos de clube."], ["Marcelo Baron", "Artilheiro da Série C de 1997, com 9 gols."]],
    times: [
      xi("Titular", ["Marçal Tolentino", "Campeão da Série B de 1972."], "", [
        ["Jurandir", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Célio Rodrigues", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Neguinho", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Nivaldo", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Valdecir Lima", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Gojoba", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Edmilson Leite", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Lima", "Titular no título da Série B de 1972, o primeiro título nacional do clube."], ["Djalma Campos", "Titular no título da Série B de 1972, o primeiro título nacional do clube."],
        ["Pelezinho", "Titular no título da Série B de 1972, o primeiro título nacional do clube. Artilheiro do clube na competição, com 8 gols."], ["Jaldemir", "Titular no título da Série B de 1972, o primeiro título nacional do clube."]], "4-2-4"),
      xi("Reserva", ["Roberto Fonseca", "Campeão da Copa do Nordeste de 2018."], "", [
        ["Andrey", "Titular no título da Copa do Nordeste de 2018."], ["Bruno Moura", "Titular no título da Copa do Nordeste de 2018."], ["Joécio", "Titular no título da Copa do Nordeste de 2018."], ["Maracás", "Titular no título da Copa do Nordeste de 2018."], ["Alyson", "Titular no título da Copa do Nordeste de 2018."], ["Willian Oliveira", "Titular no título da Copa do Nordeste de 2018."], ["Diego Silva", "Titular no título da Copa do Nordeste de 2018."], ["Fernando Sobral", "Titular no título da Copa do Nordeste de 2018."], ["João Paulo", "Titular no título da Copa do Nordeste de 2018."], ["Danielzinho", "Titular no título da Copa do Nordeste de 2018."],
        ["Uilliam", "Titular no título da Copa do Nordeste de 2018. Artilheiro do clube na competição, com 4 gols."]], "4-4-2"),
      xi("Suplente 1", ["Pinho", "Campeão da Série C de 1997."], "", [
        ["Geraldo", "Titular no título da Série C de 1997."], ["Erly", "Titular no título da Série C de 1997."], ["Gelásio", "Titular no título da Série C de 1997."], ["Nei", "Titular no título da Série C de 1997."], ["Lélis", "Titular no título da Série C de 1997."], ["Luís Almeida", "Titular no título da Série C de 1997."], ["Toninho", "Titular no título da Série C de 1997."], ["Ricardo", "Titular no título da Série C de 1997."], ["Jô", "Titular no título da Série C de 1997."],
        ["Marcelo Baron", "Titular no título da Série C de 1997. Artilheiro da competição, com 9 gols."], ["Adãozinho", "Titular no título da Série C de 1997."]]),
      xi("Suplente 2", ["Flávio Araújo", "Campeão da Série D de 2012."], "", [
        ["Rodrigo Ramos", "Titular no título da Série D de 2012."], ["Roniery", "Titular no título da Série D de 2012."], ["Mimica", "Titular no título da Série D de 2012."], ["Robinho", "Titular no título da Série D de 2012."], ["Deca", "Titular no título da Série D de 2012."], ["Dudu", "Titular no título da Série D de 2012."], ["Arlindo Maracanã", "Titular no título da Série D de 2012."], ["Eloir", "Titular no título da Série D de 2012."], ["Cleitinho", "Titular no título da Série D de 2012."], ["Wescley", "Titular no título da Série D de 2012."], ["Pimentinha", "Titular no título da Série D de 2012."]], "4-4-2")
    ],
    outros: [["Célio Codó", "ATA"], ["Caio Dantas", "ATA"], ["Gabriel Poveda", "ATA"], ["Mascote", "ATA"], ["Mundiquinho", "ATA"], ["Cabecinha", "ATA"]],
    outrosTec: ["Sérgio Ramírez", "Júlio Espinosa"],
    nota: "Único clube brasileiro campeão de três divisões nacionais diferentes (Séries B, C e D). Cada time é um elenco campeão, com escalação publicada.",
    fontes: [["Wikipédia: ídolos, artilheiros, técnicos, títulos e escalações dos times campeões", WIKI + "Sampaio_Corrêa_Futebol_Clube"]] };

  R["botafogo-pb"] = { status: "revisao", fundacao: 1931,
    capitao: "", craques: [["Pagé", "Goleiro, lenda do futebol paraibano e primeiro grande contratado do clube."], ["Warley", "Ídolo da campanha do título da Série D de 2013 e artilheiro do Paraibano daquele ano."]],
    times: [
      xi("Titular", "", "", [
        ["Pagé", "Titular no título paraibano de 1936."], ["Euclides", "Titular no título paraibano de 1936."], ["Márcio Teixeira", "Titular no título paraibano de 1936."], ["Pedro Macaco", "Titular no título paraibano de 1936."], ["Lemos", "Titular no título paraibano de 1936."], ["Américo Filho", "Titular no título paraibano de 1936."], ["Tonico", "Titular no título paraibano de 1936."], ["Ronal", "Titular no título paraibano de 1936."], ["Lucas", "Titular no título paraibano de 1936."], ["Hélio", "Titular no título paraibano de 1936."], ["Evan Holmes", "Titular no título paraibano de 1936."]], "2-3-5"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Remerson", "GOL"], ["Michel Alves", "GOL"], ["Magno Alves", "ZAG"], ["Djavan", "VOL"], ["Zaquel", "VOL"], ["Lenílson", "MEI"], ["Doda", "MEI"], ["Warley", "ATA"], ["Rafael Oliveira", "ATA"], ["Frontini", "ATA"]],
    outrosTec: ["Marcelo Vilar"],
    nota: "Campeão da Série D de 2013. O Titular é o time do primeiro título paraibano, em 1936; o Reserva deve sair do elenco de 2013, cuja escalação ainda não foi encontrada.",
    fontes: [["Wikipédia: jogadores de destaque, títulos e escalação de 1936", WIKI + "Botafogo_Futebol_Clube_(João_Pessoa)"]] };

  R["confianca"] = { status: "revisao", fundacao: 1936,
    capitao: "", craques: [["Audair", "Ídolo de 1985 a 1995, artilheiro do Sergipano de 1990."], ["Fábio", "Goleiro ídolo de 2001 a 2014."], ["Cristiano Alagoano", "Artilheiro da Copa do Nordeste de 2010, com 10 gols."]],
    times: [
      xi("Titular", "", "", [
        ["Fábio", "Entre os ídolos do clube. Goleiro de 2001 a 2014."], ["Cacau", "Entre os ídolos do clube."], ["Fiscina", "Entre os ídolos do clube."], ["Valdson", "Entre os ídolos do clube."], ["Lima Sergipano", "Entre os ídolos do clube."], ["Batista", "Entre os ídolos do clube."], ["Dinho", "Entre os ídolos do clube."], ["Luiz Carlos Bossa Nova", "Entre os ídolos do clube."],
        ["Audair", "Entre os ídolos do clube. Artilheiro do Sergipano de 1990, com 15 gols."], ["Nunes", "Entre os ídolos do clube. Artilheiro do Sergipano de 1974, com 17 gols."],
        ["Cristiano Alagoano", "Entre os ídolos do clube. Artilheiro da Copa do Nordeste de 2010, com 10 gols."]], "3-4-3"),
      insuf("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Éverson", "GOL"], ["Zé Luís", "GOL"], ["Geraldo", "MEI"], ["Richardson", "MEI"], ["Rocha", "MEI"], ["Edil Highlander", "ATA"], ["Iêdo", "ATA"], ["Joãozinho", "ATA"], ["Leandro Kivel", "ATA"], ["Merica", "ATA"], ["Nininho", "ATA"], ["Paulo Lumumba", "ATA"], ["Ruiter", "ATA"], ["Tito", "ATA"]],
    outrosTec: [],
    nota: "O Titular reúne os ídolos que o clube lista por posição; como a lista não tem laterais, o time joga num 3-4-3. Não há ídolos suficientes para os outros times.",
    fontes: [["Wikipédia: ídolos por posição, artilheiros e títulos", WIKI + "Associação_Desportiva_Confiança"]] };

  R["treze"] = { status: "pesquisa",
    outros: [], outrosTec: [],
    nota: "17 vezes campeão paraibano, incluindo o título invicto de 1966. A pesquisa não encontrou ídolos com posições nem escalações dos títulos.",
    fontes: [["Wikipédia: títulos e história", WIKI + "Treze_Futebol_Clube"]] };

  R["crb"] = { status: "pesquisa",
    outros: [], outrosTec: [],
    nota: "45 vezes campeão alagoano. A pesquisa ainda não encontrou ídolos com posições nem escalações dos títulos.",
    fontes: [["Wikipédia: títulos", WIKI + "Clube_de_Regatas_Brasil"]] };


  /* ---------------- Goiás e Distrito Federal ---------------- */
  R["goias"] = { status: "revisao", fundacao: 1943,
    capitao: "Wellington Saci", capitaoNota: "Capitão nas finais da Copa Sul-Americana de 2010.",
    craques: [["Harlei", "Goleiro titular nas finais da Copa Sul-Americana de 2010."], ["Rafael Moura", "Centroavante titular nas finais da Copa Sul-Americana de 2010."], ["Túlio Maravilha", "Atacante que despontou no clube antes de brilhar no Botafogo."]],
    times: [
      xi("Titular", ["Artur Neto", "Vice-campeão da Copa Sul-Americana de 2010."], "Wellington Saci", [
        ["Harlei", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Ernando", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Rafael Toloi", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Marcão", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Douglas", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Amaral", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Marcelo Costa", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Carlos Alberto", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."],
        ["Wellington Saci", "Capitão nas finais da Copa Sul-Americana de 2010."], ["Rafael Moura", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."], ["Otacílio Neto", "Titular nas finais da Copa Sul-Americana de 2010, no vice-campeonato."]], "3-5-2"),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Túlio Maravilha", "ATA"], ["Fernandão", "ATA"]],
    outrosTec: [],
    fontes: [["Wikipédia (inglês): escalações das finais da Copa Sul-Americana de 2010", "https://en.wikipedia.org/wiki/2010_Copa_Sudamericana_finals"]] };

  R["brasiliense"] = { status: "revisao", fundacao: 2000,
    capitao: "", craques: [["Gil Baiano", "Meia titular nas finais da Copa do Brasil de 2002."], ["Wellington Dias", "Atacante titular nas finais da Copa do Brasil de 2002."]],
    times: [
      xi("Titular", ["Péricles Chamusca", "Vice-campeão da Copa do Brasil de 2002."], "", [
        ["Donizeti", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Moisés", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Aldo", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Tiago", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Emerson", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Evandro", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Carioca", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Maurício", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Gil Baiano", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Wellington Dias", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."], ["Jackson", "Titular nas finais da Copa do Brasil de 2002, no vice-campeonato."]], "4-4-2"),
      insuf("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [], outrosTec: [],
    nota: "Clube fundado em 2000: o Titular é o time vice-campeão da Copa do Brasil de 2002; não há ídolos suficientes para os outros times.",
    fontes: [["Wikipédia: escalações das finais da Copa do Brasil de 2002", WIKI + "Final_da_Copa_do_Brasil_de_Futebol_de_2002"]] };

  R["gama"] = { status: "pesquisa",
    outros: [], outrosTec: ["Vagner Benazzi", "Orlando Lelé", "Martim Francisco"],
    nota: "Campeão da Série B de 1998, com Vagner Benazzi, e 13 vezes campeão brasiliense. A escalação do título nacional ainda não foi encontrada.",
    fontes: [["Wikipédia: títulos e técnicos", WIKI + "Sociedade_Esportiva_do_Gama"]] };

  R["vila-nova"] = { status: "pesquisa",
    outros: [["Túlio Maravilha", "ATA"]], outrosTec: ["Márcio Fernandes", "Teodorico"],
    nota: "Tricampeão da Série C (1996, 2015 e 2020). Túlio Maravilha é o maior artilheiro do clube, com 99 gols.",
    fontes: [["Wikipédia: artilheiro, técnicos e títulos", WIKI + "Vila_Nova_Futebol_Clube"]] };

  R["atletico-go"] = { status: "pesquisa",
    outros: [["Baltazar", "ATA"], ["Tarzan", "ATA"], ["Dadi", "ATA"], ["Luiz Fernando", "ATA"]], outrosTec: [],
    nota: "Campeão da Série B de 2016 e semifinalista da Copa Sul-Americana de 2022. Baltazar tem o recorde de gols numa temporada (31, em 1978).",
    fontes: [["Wikipédia: artilheiros e títulos", WIKI + "Atlético_Clube_Goianiense"]] };

  /* ---------------- Mato Grosso e Mato Grosso do Sul ---------------- */
  R["cuiaba"] = { status: "revisao", fundacao: 2001,
    capitao: "", craques: [["Fernando", "Maior artilheiro da história do clube: 54 gols."], ["Walter", "Recordista de jogos: 203."], ["Jonathan Cafu", "Atacante com mais jogos pelo clube: 156."]],
    times: [
      xi("Titular", ["Ary Marques", "Técnico com mais jogos pelo clube: 124."], "", [
        ["Walter", "Entre os jogadores com mais partidas pelo clube: 203 (recordista)."], ["Matheus Alexandre", "Entre os jogadores com mais partidas pelo clube: 102."], ["Marllon Borges", "Entre os jogadores com mais partidas pelo clube: 194."], ["Alan Empereur", "Entre os jogadores com mais partidas pelo clube: 178."], ["Natanael", "Entre os jogadores com mais partidas pelo clube: 101."],
        ["Bogé", "Entre os jogadores com mais partidas pelo clube: 177."], ["Jean", "Entre os jogadores com mais partidas pelo clube: 171."], ["Denilson", "Entre os jogadores com mais partidas pelo clube: 149."], ["Fernando", "Maior artilheiro do clube: 54 gols em 109 jogos."],
        ["Jonathan Cafu", "Entre os jogadores com mais partidas pelo clube: 156."], ["Isidro Pitta", "33 gols e 108 jogos."]], "4-4-2"),
      pend("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Ednei", "ZAG"], ["Anderson Conceição", "ZAG"], ["Lucas Mineiro", "VOL"], ["Fernando Sobral", "VOL"], ["Rafael Gava", "MEI"], ["Max", "MEI"], ["Felipe Marques", "ATA"], ["Clayson", "ATA"], ["Jenison", "ATA"], ["Deyverson", "ATA"]],
    outrosTec: ["Marcelo Chamusca", "Itamar Schulle", "António Oliveira"],
    nota: "Clube fundado em 2001, bicampeão da Copa Verde (2015 e 2019). O Titular reúne os recordistas de jogos de cada posição e o maior artilheiro.",
    fontes: [["Wikipédia: mais jogos (com posições), artilheiros, técnicos e títulos", WIKI + "Cuiabá_Esporte_Clube"]] };

  R["operario-ms"] = { status: "pesquisa",
    outros: [], outrosTec: ["Carlos Castilho"],
    nota: "Semifinalista do Brasileiro de 1977, com Carlos Castilho no comando, e campeão do Módulo Branco de 1987. A pesquisa não encontrou ídolos com posições nem escalações.",
    fontes: [["Wikipédia: títulos e história", WIKI + "Operário_Futebol_Clube"]] };

  /* ---------------- Norte ---------------- */
  R["paysandu"] = { status: "revisao", fundacao: 1914,
    capitao: "", craques: [["Vandick", "Ídolo do clube, campeão da Série B de 2001 e da Copa dos Campeões de 2002; depois presidente."], ["Iarley", "Destaque da campanha da Libertadores de 2003."], ["Sandro Goiano", "Volante dos títulos de 2001 e 2002."]],
    times: [
      xi("Titular", ["Givanildo Oliveira", "Campeão da Série B de 2001 e da Copa dos Campeões de 2002."], "", [
        ["Marcão", "Titular no título da Copa dos Campeões de 2002."], ["Marcos", "Titular no título da Copa dos Campeões de 2002."], ["Gino", "Titular no título da Copa dos Campeões de 2002."], ["Sérgio", "Titular no título da Copa dos Campeões de 2002."], ["Luís Fernando", "Titular no título da Copa dos Campeões de 2002."], ["Sandro Goiano", "Titular no título da Copa dos Campeões de 2002."], ["Rogerinho", "Titular no título da Copa dos Campeões de 2002."], ["Jóbson", "Titular no título da Copa dos Campeões de 2002."], ["Vélber", "Titular no título da Copa dos Campeões de 2002."], ["Jajá", "Titular no título da Copa dos Campeões de 2002."],
        ["Vandick", "Titular no título da Copa dos Campeões de 2002. Ídolo do clube e depois presidente."]], "4-4-2"),
      pend("Reserva"), pend("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [["Valentim", "LD"], ["Lino", "LE"], ["Luís Carlos Trindade", "MEI"], ["Iarley", "MEI"], ["Zé Augusto", "ATA"], ["Cacaio", "ATA"], ["Quarentinha", "ATA"]],
    outrosTec: ["Joel Martins", "Darío Pereyra"],
    nota: "Campeão da Série B (1991 e 2001) e da Copa dos Campeões de 2002, que levou o clube à Libertadores de 2003.",
    fontes: [["Wikipédia: títulos, técnicos e escalações de 2001 e 2002", WIKI + "Paysandu_Sport_Club"]] };

  R["remo"] = { status: "pesquisa",
    outros: [["Francelísio", "GOL"], ["Orlando Brito", "GOL"], ["Édson Cimento", "GOL"], ["Aranha", "LD"], ["Lulu", "ZAG"], ["Coelho", "ZAG"], ["Rubilar", "ATA"], ["Alcino", "ATA"], ["Bira", "ATA"], ["Amoroso", "ATA"], ["Robilotta", "ATA"]],
    outrosTec: ["Danilo Alvim", "Valdemar Carabina", "Agnaldo de Jesus", "Roberto Fernandes"],
    nota: "Campeão da Série C de 2005 e da Copa Verde de 2021, com 48 títulos paraenses. Aranha (1972) e Édson Cimento (1977) foram Bola de Prata; Bira foi artilheiro do Paraense em 1978 e 1979. Faltam meio-campistas confirmados para montar o time.",
    fontes: [["Wikipédia: história, títulos e jogadores", WIKI + "Clube_do_Remo"]] };

  R["amazonas"] = { status: "revisao", fundacao: 2019,
    capitao: "", craques: [["Sassá", "Titular na final da Série C de 2023 e artilheiro do clube em 2024."], ["Rafael Tavares", "Artilheiro da Série D de 2022, com 11 gols."], ["Ítalo", "Artilheiro da Série D de 2022, com 11 gols."]],
    times: [
      xi("Titular", ["Luizinho Vieira", "Campeão da Série C de 2023."], "", [
        ["Edson Marden", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Patrick", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Maycon", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Jackson", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["PH", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Julio Rusch", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Igor Bolt", "Titular na final de volta da Série C de 2023, título nacional do clube."],
        ["Ítalo", "Titular na final de volta da Série C de 2023, título nacional do clube. Artilheiro da Série D de 2022."], ["Rafael Tavares", "Titular na final de volta da Série C de 2023, título nacional do clube. Artilheiro da Série D de 2022."], ["Diego Torres", "Titular na final de volta da Série C de 2023, título nacional do clube."], ["Sassá", "Titular na final de volta da Série C de 2023, título nacional do clube."]], "4-4-2"),
      insuf("Reserva"), insuf("Suplente 1"), insuf("Suplente 2")
    ],
    outros: [], outrosTec: ["Rafael Lacerda"],
    nota: "Clube fundado em 2019. O Titular é o time campeão da Série C de 2023, com as posições pela ordem da escalação publicada.",
    fontes: [["Wikipédia: títulos, técnicos e escalação da final da Série C de 2023", WIKI + "Amazonas_Futebol_Clube"]] };

  /* ---------------- Espírito Santo ---------------- */
  R["rio-branco-es"] = { status: "pesquisa",
    outros: [["Jorge Reis", "GOL"], ["Rodolfo", "GOL"]], outrosTec: [],
    nota: "39 vezes campeão capixaba. Alcy Simões é o maior artilheiro (213 gols); o goleiro Jorge Reis ficou 1.604 minutos sem sofrer gols em 1971.",
    fontes: [["Wikipédia: artilheiros, jogadores e títulos", WIKI + "Rio_Branco_Atlético_Clube"]] };

  window.LFB = window.LFB || {};
  window.LFB.regionais = R;
})();
