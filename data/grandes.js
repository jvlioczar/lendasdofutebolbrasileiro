/* Lendas do Futebol Brasileiro — os 12 grandes, com as quatro seleções de todos os tempos.
   xi(nome, técnico, capitão, jogadores, formação): jogadores na ordem da formação (padrão 4-3-3):
   goleiro; lateral-direito, zagueiros, lateral-esquerdo; volante, meias; ponta-direita, centroavante, ponta-esquerda.
   Cada jogador ou técnico pode ser "Nome" ou ["Nome", "marcas"]. Números conforme as fontes de cada clube. */
(function () {
  var POS = {
    "4-3-3": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "MEI", "MEI", "PD", "ATA", "PE"],
    "4-2-3-1": ["GOL", "LD", "ZAG", "ZAG", "LE", "VOL", "VOL", "PD", "MEI", "PE", "ATA"]
  };
  function pair(x) { return typeof x === "string" ? [x, ""] : x; }
  function xi(nome, tecnico, cap, nomes, formacao) {
    formacao = formacao || "4-3-3";
    return { nome: nome, formacao: formacao, tecnico: pair(tecnico), cap: cap,
      jog: nomes.map(function (n, i) { var p = pair(n); return [p[0], POS[formacao][i], p[1]]; }) };
  }
  function clube(c, times) { c.status = "revisao"; c.times = times; return c; }
  var WIKI = "https://pt.wikipedia.org/wiki/";

  var G = [];

  /* ---------------- São Paulo ---------------- */
  G.push(clube({ id: "corinthians", nome: "Corinthians", uf: "SP", cidade: "São Paulo", fundacao: 1910, cores: ["#111111", "#FFFFFF"],
    capitao: "Sócrates", capitaoNota: "Capitão e líder da Democracia Corintiana, tricampeão paulista (1979, 1982 e 1983) e autor de 172 gols pelo clube.",
    craques: [["Rivellino", "Apontado como o maior jogador da história do clube; 475 jogos."], ["Sócrates", "172 gols e o símbolo da Democracia Corintiana."], ["Marcelinho Carioca", "206 gols, bicampeão brasileiro (1998 e 1999) e campeão mundial em 2000."]],
    outros: [["Ado", "GOL"], ["Cabeção", "GOL"], ["Tobias", "GOL"], ["Tuffy", "GOL"], ["Fábio Luciano", "ZAG"], ["Grané", "ZAG"], ["Henrique", "ZAG"], ["Homero", "ZAG"], ["Oreco", "LE"], ["William", "ZAG"], ["Balbuena", "ZAG"], ["Brandão", "VOL"], ["Roberto Belangero", "VOL"], ["Wilson Mano", "VOL"], ["Zé Elias", "VOL"], ["Elias", "VOL"], ["Gilmar Fubá", "VOL"], ["Basílio", "MEI"], ["Carbone", "MEI"], ["Danilo", "MEI"], ["Ezequiel", "MEI"], ["Jadson", "MEI"], ["Rato", "MEI"], ["Ruço", "MEI"], ["Tupãzinho", "MEI"], ["Ricardinho", "MEI"], ["Amílcar", "ATA"], ["Ángel Romero", "ATA"], ["Ataliba", "ATA"], ["Dinei", "ATA"], ["Emerson Sheik", "ATA"], ["Flávio", "ATA"], ["Geraldão", "ATA"], ["Jorge Henrique", "ATA"], ["Liedson", "ATA"], ["Luizão", "ATA"], ["Palhinha", "ATA"], ["Paulo", "ATA"], ["Paulo Borges", "ATA"], ["Romarinho", "ATA"], ["Viola", "ATA"], ["Yuri Alberto", "ATA"]],
    outrosTec: ["Nelsinho Baptista", "Mano Menezes", "Vanderlei Luxemburgo", "Carlos Alberto Parreira"],
    fontes: [["Wikipédia: artilheiros, mais jogos e maiores ídolos", WIKI + "Sport_Club_Corinthians_Paulista"], ["Lance: os 10 maiores artilheiros", "https://www.lance.com.br/corinthians/artilheiros-corinthians.html"], ["Gazeta: jogadores com mais jogos", "https://www.gazetasp.com.br/gazeta-mais/curiosidades/veja-quais-sao-os-jogadores-com-mais-jogos-pelo-corinthians/"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-corinthians-com-mais-titulos-na-historia.html"]] },
    [
      xi("Titular", ["Tite", "Técnico com mais títulos pelo clube (6): Brasileiros de 2011 e 2015, Libertadores e Mundial de 2012, Paulista e Recopa de 2013."], "Sócrates", [
        ["Cássio", "712 jogos; campeão da Libertadores e do Mundial de 2012."], ["Zé Maria", "598 jogos."], "Gamarra", "Chicão", ["Wladimir", "Recordista: 806 jogos."],
        "Rincón", ["Sócrates", "172 gols."], ["Rivellino", "475 jogos."], ["Cláudio", "Maior artilheiro: 305 gols."], ["Baltazar", "269 gols."], ["Marcelinho Carioca", "206 gols."]]),
      xi("Reserva", ["Oswaldo Brandão", "4 títulos (Paulistas de 1954 e 1977, Rio-São Paulo de 1954 e 1966) e técnico com mais jogos: 435."], "Fagner", [
        ["Gilmar", "Considerado o maior goleiro da história do clube (1951 a 1961)."], ["Fagner", "578 jogos."], "Gil", "Domingos da Guia", "Fábio Santos",
        "Paulinho", ["Luizinho", "607 jogos e 175 gols."], "Neto", ["Neco", "243 gols (1913 a 1930)."], "Ronaldo", ["Teleco", "257 gols."]]),
      xi("Suplente 1", ["Fábio Carille", "4 títulos: Brasileiro de 2017 e Paulistas de 2017, 2018 e 2019."], "Alessandro", [
        ["Ronaldo Giovanelli", "602 jogos."], "Alessandro", "Del Debbio", ["Olavo", "507 jogos."], "Sylvinho",
        "Ralf", ["Biro-Biro", "589 jogos."], "Zenon", ["Vaguinho", "551 jogos."], "Casagrande", "Edílson"]),
      xi("Suplente 2", ["Oswaldo de Oliveira", "3 títulos: Brasileiro e Paulista de 1999 e Mundial de 2000."], "Dida", [
        "Dida", "Idário", "Ditão", "Célio Silva", "Kléber",
        "Vampeta", "Dino Sani", "Renato Augusto", "Tévez", "Guerrero", ["Servílio", "200 gols."]])
    ]));

  G.push(clube({ id: "palmeiras", nome: "Palmeiras", uf: "SP", cidade: "São Paulo", fundacao: 1914, cores: ["#006437", "#FFFFFF"],
    capitao: "Gustavo Gómez", capitaoNota: "Capitão das conquistas das Libertadores de 2020 e 2021 e dos Brasileiros de 2022 e 2023.",
    craques: [["Ademir da Guia", "O \"Divino\", maior ídolo do clube e jogador que mais vestiu a camisa alviverde."], ["Djalma Santos", "Bicampeão mundial com a Seleção e lateral da Academia."], ["Marcos", "533 jogos; o \"São Marcos\" da Libertadores de 1999."]],
    outros: [["Oberdan Cattani", "GOL"], ["Velloso", "GOL"], ["Fernando Prass", "GOL"], ["Sérgio", "GOL"], ["Cafu", "LD"], ["Mina", "ZAG"], ["Vágner Bacharel", "ZAG"], ["Márcio Araújo", "VOL"], ["Danilo", "VOL"], ["Zé Rafael", "VOL"], ["Freddy Rincón", "VOL"], ["Edu Manga", "MEI"], ["Romeu Pellicciari", "ATA"], ["Mirandinha", "ATA"], ["Vavá", "ATA"], ["Willian Bigode", "ATA"], ["Oséas", "ATA"], ["Endrick", "ATA"]],
    outrosTec: ["Telê Santana", "Rubens Minelli"],
    fontes: [["Wikipédia: história e ídolos", WIKI + "Sociedade_Esportiva_Palmeiras"], ["Lance: os 10 maiores artilheiros", "https://www.lance.com.br/palmeiras/artilheiros-palmeiras.html"], ["Palmeiras: goleiros com mais jogos", "https://www.palmeiras.com.br/noticias/prass-iguala-evair-e-integra-top-50-dos-que-mais-jogaram-em-toda-historia-alviverde/"]] },
    [
      xi("Titular", ["Abel Ferreira", "Bicampeão da Libertadores (2020 e 2021) e campeão brasileiro (2022 e 2023)."], "Gustavo Gómez", [
        ["Marcos", "533 jogos."], "Djalma Santos", "Luís Pereira", "Gustavo Gómez", "Roberto Carlos",
        "Dudu (volante)", ["Ademir da Guia", "155 gols; o maior ídolo do clube."], "Alex", "Edmundo", ["Evair", "Herói do título paulista de 1993."], "Dudu (atacante)"]),
      xi("Reserva", ["Luiz Felipe Scolari", "Campeão da Libertadores de 1999 e do Brasileiro de 2018."], "César Sampaio", [
        ["Émerson Leão", "Goleiro com mais jogos: 621."], "Marcos Rocha", "Antônio Carlos", "Roque Júnior", "Zé Roberto",
        "César Sampaio", "Zinho", "Raphael Veiga", "Leivinha", ["Heitor", "Maior artilheiro: 323 gols (1916 a 1931)."], ["César Maluco", "182 gols."]]),
      xi("Suplente 1", ["Vanderlei Luxemburgo", "Bicampeão brasileiro (1993 e 1994)."], "Weverton", [
        "Weverton", "Mayke", "Djalma Dias", "Júnior Baiano", "Júnior",
        "Mazinho", "Rivaldo", "Djalminha", "Paulo Nunes", "Mazzola", "Tupãzinho"]),
      xi("Suplente 2", ["Oswaldo Brandão", "Campeão brasileiro de 1972 e 1973."], "Felipe Melo", [
        ["Valdir de Moraes", "480 jogos."], "Arce", "Cléber", "Luan", "Piquerez",
        "Felipe Melo", "Valdivia", "Marcos Assunção", "Jorginho Putinatti", "Rony", "Gabriel Jesus"])
    ]));

  G.push(clube({ id: "santos", nome: "Santos", uf: "SP", cidade: "Santos", fundacao: 1912, cores: ["#111111", "#FFFFFF"],
    capitao: "Zito", capitaoNota: "Capitão do bicampeonato da Libertadores e do Mundial (1962 e 1963) e 733 jogos pelo clube.",
    craques: [["Pelé", "1.091 gols em 1.116 jogos; maior artilheiro e recordista de jogos do clube."], ["Pepe", "405 gols, segundo maior artilheiro, carreira inteira no Santos."], ["Neymar", "Campeão da Libertadores de 2011 e Prêmio Puskás."]],
    outros: [["Laércio", "GOL"], ["Aranha", "GOL"], ["Vladimir", "GOL"], ["Alfredo Polvo", "ZAG"], ["Abreu", "ZAG"], ["Calvet", "ZAG"], ["Alison", "VOL"], ["Afonsinho", "MEI"], ["Jair Rosa Pinto", "MEI"], ["Serginho Chulapa", "ATA"], ["Ricardo Oliveira", "ATA"], ["Rodrygo", "ATA"], ["Cláudio Adão", "ATA"], ["Álvaro", "ATA"], ["Arnaldo Silveira", "ATA"]],
    outrosTec: ["Antoninho Fernandes", "Dorival Júnior", "Chico Formiga", "Pepe"],
    fontes: [["Wikipédia: treinadores e títulos", WIKI + "Santos_Futebol_Clube"], ["Goal: maiores artilheiros", "https://www.goal.com/br/listas/os-maiores-artilheiros-da-historia-do-santos/blt40e95efdeff728b5"], ["Diário do Litoral: quem mais atuou", "https://www.diariodolitoral.com.br/esportes/conheca-os-jogadores-que-mais-atuaram-pelo-santos/"]] },
    [
      xi("Titular", ["Lula (Luís Alonso Pérez)", "34 títulos, entre eles as Libertadores e os Mundiais de 1962 e 1963."], "Zito", [
        "Gilmar", "Carlos Alberto Torres", "Mauro Ramos", "Ramos Delgado", "Léo",
        ["Zito", "733 jogos."], "Mengálvio", ["Pelé", "1.091 gols."], ["Dorval", "610 jogos e 194 gols."], ["Coutinho", "368 gols."], ["Pepe", "405 gols e 741 jogos."]]),
      xi("Reserva", ["Vanderlei Luxemburgo", "Campeão brasileiro de 2004."], "Edu Dracena", [
        "Rodolfo Rodríguez", ["Lima", "692 jogos."], "Edu Dracena", "Alex", "Dalmo",
        ["Clodoaldo", "512 jogos."], "Diego", "Giovanni", "Robinho", ["Toninho Guerreiro", "279 gols."], "Neymar"]),
      xi("Suplente 1", ["Emerson Leão", "Campeão brasileiro de 2002."], "Elano", [
        ["Cejas", "254 jogos."], "Ânderson Lima", "Formiga", ["André Luís", "213 jogos."], "Rildo",
        "Elano", "Ganso", "Pita", ["Edu", "584 jogos e 185 gols."], ["Araken Patusca", "184 gols."], ["Feitiço", "215 gols."]]),
      xi("Suplente 2", ["Muricy Ramalho", "Campeão da Libertadores de 2011."], "Arouca", [
        "Fábio Costa", "Victor Ferraz", "Durval", "Lucas Veríssimo", "Alex Sandro",
        "Arouca", "Renato", ["Aílton Lira", "182 jogos."], ["Antoninho", "402 jogos e 143 gols."], "Pagão", "Juary"])
    ]));

  G.push(clube({ id: "sao-paulo", nome: "São Paulo", uf: "SP", cidade: "São Paulo", fundacao: 1930, cores: ["#E2231A", "#111111"],
    capitao: "Rogério Ceni", capitaoNota: "Recordista de jogos (1.237), capitão da Libertadores e do Mundial de 2005 e do tri brasileiro (2006 a 2008).",
    craques: [["Rogério Ceni", "Maior ídolo do clube, 1.237 jogos e 131 gols."], ["Raí", "Bicampeão da Libertadores e do Mundial (1992 e 1993)."], ["Leônidas da Silva", "143 gols e cinco títulos paulistas."]],
    outros: [["Gilmar Rinaldi", "GOL"], ["King", "GOL"], ["Caxambu", "GOL"], ["Sérgio Valentim", "GOL"], ["Belletti", "LD"], ["Getúlio", "LD"], ["Adilson", "ZAG"], ["Alex Silva", "ZAG"], ["André Dias", "ZAG"], ["Antônio Carlos Zago", "ZAG"], ["Fabão", "ZAG"], ["Noronha", "ZAG"], ["Ronaldão", "ZAG"], ["Válber", "ZAG"], ["Jorge Wagner", "LE"], ["Falcão", "VOL"], ["Chicão", "VOL"], ["Danilo", "VOL"], ["Doriva", "VOL"], ["Richarlyson", "VOL"], ["Zizinho", "MEI"], ["Juninho Paulista", "MEI"], ["Palhinha", "MEI"], ["Lucas Moura", "ATA"], ["Aloísio", "ATA"], ["Grafite", "ATA"], ["Dagoberto", "ATA"], ["Denílson", "ATA"], ["Friaça", "ATA"], ["Friedenreich", "ATA"], ["Maurinho", "ATA"], ["Calleri", "ATA"], ["Luizinho", "ATA"]],
    outrosTec: ["Vicente Feola", "Cilinho", "José Poy", "Béla Guttmann"],
    fontes: [["Wikipédia: grandes ídolos, artilheiros, mais jogos e treinadores", WIKI + "São_Paulo_Futebol_Clube"]] },
    [
      xi("Titular", ["Telê Santana", "Dez títulos, entre eles as Libertadores e os Mundiais de 1992 e 1993."], "Rogério Ceni", [
        ["Rogério Ceni", "1.237 jogos e 131 gols."], "Cafu", "Lugano", "Darío Pereyra", "Leonardo",
        "Toninho Cerezo", "Raí", "Pedro Rocha", ["Müller", "160 gols."], ["Serginho Chulapa", "Maior artilheiro: 242 gols."], ["Leônidas da Silva", "143 gols."]]),
      xi("Reserva", ["Muricy Ramalho", "Tricampeão brasileiro (2006, 2007 e 2008)."], "Roberto Dias", [
        ["Waldir Peres", "617 jogos."], ["De Sordi", "544 jogos."], "Oscar", "Roberto Dias", ["Nelsinho Kerchner", "512 jogos."],
        "Bauer", "Hernanes", "Pita", "Terto", ["Luis Fabiano", "212 gols."], "Canhoteiro"]),
      xi("Suplente 1", ["Paulo Autuori", "Campeão da Libertadores e do Mundial de 2005."], "Mauro Ramos", [
        "Zetti", "Cicinho", ["Mauro Ramos", "498 jogos."], "Miranda", "Júnior",
        "Mineiro", "Silas", "Kaká", "Careca", ["Gino Orlando", "233 gols."], "Zé Sérgio"]),
      xi("Suplente 2", ["Rubens Minelli", "Primeiro título brasileiro do clube (1977)."], "Bellini", [
        "José Poy", "Zé Teodoro", "Ricardo Rocha", "Bellini", "Reinaldo",
        "Pintado", "Dino Sani", "Antonio Sastre", ["Teixeirinha", "525 jogos e 189 gols."], ["França", "182 gols."], "Amoroso"])
    ]));

  /* ---------------- Rio de Janeiro ---------------- */
  G.push(clube({ id: "flamengo", nome: "Flamengo", uf: "RJ", cidade: "Rio de Janeiro", fundacao: 1895, cores: ["#C3171D", "#111111"],
    capitao: "Júnior", capitaoNota: "Recordista de jogos (875), campeão da Libertadores e do Mundial de 1981 e quatro vezes campeão brasileiro.",
    craques: [["Zico", "Maior ídolo e maior artilheiro do clube; 732 jogos, campeão da Libertadores e do Mundial de 1981."], ["Júnior", "Recordista de jogos: 875."], ["Leandro", "Lateral do time campeão do mundo de 1981."]],
    outros: [["Zé Carlos", "GOL"], ["Fabrício Bruno", "ZAG"], ["Dequinha", "VOL"], ["Rubens", "MEI"], ["Carlinhos", "MEI"], ["Henrique Frade", "ATA"], ["Evaristo de Macedo", "ATA"], ["Pirillo", "ATA"]],
    outrosTec: ["Cláudio Coutinho", "Filipe Luís", "Zagallo", "Fleitas Solich", "Andrade", "Rogério Ceni"],
    fontes: [["Wikipédia: treinadores e jogadores destacados", WIKI + "Clube_de_Regatas_do_Flamengo"], ["Lance: jogadores com mais jogos", "https://www.lance.com.br/flamengo/jogadores-com-mais-jogos-pelo-flamengo.html"], ["90min: maiores jogadores", "https://www.90min.com/pt-br/posts/maiores-jogadores-historia-flamengo"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-flamengo-com-mais-titulos-na-historia.html"]] },
    [
      xi("Titular", ["Carlinhos", "Técnico com mais títulos pelo clube (6): Brasileiros de 1987 e 1992, Mercosul de 1999 e Cariocas de 1991, 1999 e 2000."], "Júnior", [
        "Raul Plassmann", "Leandro", "Mozer", "Rondinelli", ["Júnior", "875 jogos."],
        "Andrade", ["Adílio", "617 jogos."], ["Zico", "732 jogos; maior artilheiro."], "Nunes", ["Gabigol", "Decisivo nas Libertadores de 2019 e 2022."], "Bruno Henrique"]),
      xi("Reserva", ["Jorge Jesus", "5 títulos: Libertadores e Brasileiro de 2019, Supercopa, Recopa e Carioca de 2020."], "Everton Ribeiro", [
        "Júlio César", "Rafinha", "Domingos da Guia", "Juan", "Filipe Luís",
        "Gérson", "Everton Ribeiro", "Arrascaeta", "Bebeto", "Dida", "Romário"]),
      xi("Suplente 1", ["Flávio Costa", "5 títulos: Cariocas de 1939, 1942, 1943, 1944 e 1963."], "Léo Moura", [
        "Diego Alves", "Léo Moura", "Aldair", "Júnior Baiano", "Leonardo",
        "Carpegiani", "Petkovic", "Zizinho", "Renato Gaúcho", "Leônidas da Silva", "Lico"]),
      xi("Suplente 2", ["Paulo César Carpegiani", "4 títulos: Carioca, Libertadores e Mundial de 1981 e Brasileiro de 1982."], "Diego Ribas", [
        "Cantarele", "Jorginho", "Rodrigo Caio", "Léo Pereira", "Ayrton Lucas",
        "Willian Arão", "Diego Ribas", "Tita", "Doval", ["Pedro", "151 gols."], "Adriano"])
    ]));

  G.push(clube({ id: "fluminense", nome: "Fluminense", uf: "RJ", cidade: "Rio de Janeiro", fundacao: 1902, cores: ["#7A1E3A", "#00613C", "#FFFFFF"],
    capitao: "Castilho", capitaoNota: "Recordista de jogos (697) e eleito o maior ídolo do clube na votação de O Globo e Extra (2020).",
    craques: [["Castilho", "697 jogos; 1º na votação de maiores ídolos de O Globo e Extra (2020)."], ["Rivellino", "Craque da \"Máquina Tricolor\" dos anos 1970."], ["Fred", "199 gols, segundo maior artilheiro; 2º na votação de ídolos."]],
    outros: [["Diego Cavalieri", "GOL"], ["Marcos de Mendonça", "GOL"], ["André", "VOL"], ["Cafuringa", "ATA"], ["Escurinho", "ATA"], ["Welfare", "ATA"], ["Russo", "ATA"], ["Jhon Arias", "ATA"]],
    outrosTec: ["Carlos Alberto Parreira", "Muricy Ramalho", "Renato Gaúcho"],
    fontes: [["Wikipédia: maiores ídolos (votação O Globo/Extra), artilheiros e mais jogos", WIKI + "Fluminense_Football_Club"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-fluminense-com-mais-titulos-na-historia.html"]] },
    [
      xi("Titular", ["Abel Braga", "4 títulos: Cariocas de 2005, 2012 e 2022 e Brasileiro de 2012."], "Castilho", [
        ["Castilho", "697 jogos."], "Carlos Alberto Torres", ["Pinheiro", "603 jogos."], "Thiago Silva", "Marcelo",
        "Didi", "Rivellino", "Conca", "Assis", ["Waldo", "Maior artilheiro: 319 gols."], ["Fred", "199 gols."]]),
      xi("Reserva", ["Zezé Moreira", "4 títulos: Cariocas de 1951 e 1959, Copa Rio de 1952 e Rio-São Paulo de 1960."], "Nino", [
        "Félix", "Samuel Xavier", "Ricardo Gomes", "Nino", "Branco",
        "Romerito", "Deco", "Ganso", ["Telê Santana", "559 jogos e 164 gols."], "Germán Cano", ["Washington", "124 gols."]]),
      xi("Suplente 1", ["Fernando Diniz", "3 títulos: Carioca e Libertadores de 2023 e Recopa de 2024."], "Edinho", [
        ["Paulo Victor", "360 jogos."], ["Rubens Galaxe", "465 jogos."], ["Edinho", "359 jogos."], ["Gum", "414 jogos."], ["Altair", "551 jogos."],
        "Gérson", "Paulo César Caju", ["Carlos Alberto Pintinho", "381 jogos."], ["Orlando Pingo de Ouro", "184 gols."], ["Preguinho", "128 gols."], ["Hércules", "165 gols."]]),
      xi("Suplente 2", ["Ondino Viera", "3 títulos pelo clube."], "Felipe Melo", [
        "Fábio", "Mariano", ["Assis (zagueiro)", "412 jogos."], "Felipe Melo", ["Bigode", "394 jogos."],
        ["Denílson", "433 jogos."], ["Marcão", "397 jogos."], "Thiago Neves", "Renato Gaúcho", "Ézio", "Magno Alves"])
    ]));

  G.push(clube({ id: "botafogo", nome: "Botafogo", uf: "RJ", cidade: "Rio de Janeiro", fundacao: 1904, cores: ["#111111", "#FFFFFF"],
    capitao: "Nílton Santos", capitaoNota: "Recordista de jogos (721), a \"Enciclopédia do Futebol\" e bicampeão mundial com a Seleção.",
    craques: [["Garrincha", "612 jogos e 245 gols; bicampeão mundial."], ["Nílton Santos", "Recordista de jogos: 721."], ["Didi", "Cérebro do Brasil campeão de 1958 e bicampeão mundial."]],
    outros: [["Adalberto", "GOL"], ["William Bacana", "GOL"], ["Moreira", "LD"], ["Afonsinho", "MEI"], ["Paulinho Criciúma", "MEI"], ["Túlio Guerreiro", "MEI"], ["Flávio Ramos", "ATA"], ["Maurício", "ATA"], ["Mimi Sodré", "ATA"], ["Sinval", "ATA"], ["Nilo", "ATA"], ["Octávio Moraes", "ATA"], ["Dino da Costa", "ATA"], ["Paulinho Valentim", "ATA"], ["Nílson Dias", "ATA"], ["Zezinho", "ATA"], ["Igor Jesus", "ATA"]],
    outrosTec: ["Joel Santana", "Paulo Autuori", "João Saldanha", "Valdir Espinosa", "Carlito Rocha", "Carlos Alberto Torres"],
    fontes: [["Wikipédia: muro dos ídolos, artilheiros, mais jogos e treinadores", WIKI + "Botafogo_de_Futebol_e_Regatas"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-botafogo-com-mais-titulos-na-historia.html"]] },
    [
      xi("Titular", ["Zagallo", "7 títulos, entre eles a Taça Brasil de 1968 e os Cariocas de 1967 e 1968."], "Nílton Santos", [
        ["Manga", "442 jogos."], "Carlos Alberto Torres", "Sebastião Leônidas", "Gonçalves", ["Nílton Santos", "721 jogos."],
        ["Didi", "313 jogos e 114 gols."], "Gérson", "Paulo César Caju", ["Garrincha", "612 jogos e 245 gols."], ["Quarentinha", "Maior artilheiro: 313 gols."], ["Jairzinho", "189 gols."]]),
      xi("Reserva", ["Marinho Rodrigues", "7 títulos, entre eles o Rio-São Paulo de 1962 e os Cariocas de 1961 e 1962."], "Mauro Galvão", [
        ["Jefferson", "459 jogos."], ["Paulistinha", "305 jogos."], ["Wilson Gottardo", "354 jogos."], "Mauro Galvão", "Marinho Chagas",
        "Seedorf", ["Mendonça", "118 gols."], ["Carlos Roberto", "440 jogos."], ["Heleno de Freitas", "209 gols."], ["Carvalho Leite", "261 gols."], "Zagallo"]),
      xi("Suplente 1", ["Nicolas Ladanyi", "4 títulos, entre eles os Cariocas de 1930 e 1932."], "Wágner", [
        "Wágner", "Josimar", "Alexander Barboza", "Bastos", ["Valtencir", "453 jogos."],
        ["Nei Conceição", "342 jogos."], "Alemão", "Sérgio Manoel", "Amarildo", ["Roberto Miranda", "154 gols."], ["Túlio Maravilha", "167 gols."]]),
      xi("Suplente 2", ["Artur Jorge", "Campeão da Libertadores e do Brasileiro de 2024."], "Marlon Freitas", [
        "John", "Vitinho", "Zé Carlos", ["Gérson dos Santos", "372 jogos."], "Alex Telles",
        "Marlon Freitas", "Thiago Almada", ["Geninho", "425 jogos."], "Luiz Henrique", "Loco Abreu", "Donizete"])
    ]));

  G.push(clube({ id: "vasco", nome: "Vasco da Gama", uf: "RJ", cidade: "Rio de Janeiro", fundacao: 1898, cores: ["#111111", "#FFFFFF"],
    capitao: "Bellini", capitaoNota: "Capitão do Vasco e da Seleção campeã do mundo em 1958.",
    craques: [["Roberto Dinamite", "Maior artilheiro (708 gols) e recordista de jogos; eleito o maior ídolo do clube por jornalistas."], ["Ademir de Menezes", "301 gols; craque do \"Expresso da Vitória\"."], ["Romário", "326 gols, segundo maior artilheiro."]],
    outros: [["Hélton", "GOL"], ["Fernando Prass", "GOL"], ["Martín Silva", "GOL"], ["Abel Braga", "ZAG"], ["Alex Teixeira", "MEI"], ["Diego Souza", "MEI"], ["Russinho", "ATA"], ["Sabará", "ATA"], ["Lelé", "ATA"], ["Sorato", "ATA"], ["Donizete", "ATA"], ["Luizão", "ATA"]],
    outrosTec: ["Nelsinho Rosa", "Ricardo Gomes", "Martim Francisco", "Harry Welfare", "Mário Travaglini", "Ramón Platero"],
    fontes: [["Wikipédia: treinadores e história", WIKI + "Club_de_Regatas_Vasco_da_Gama"], ["NetVasco: os 10 maiores artilheiros", "https://www.netvasco.com.br/n/333702/confira-lista-e-numero-de-gols-dos-10-maiores-artilheiros-da-historia-do-vasco"], ["NetVasco: enquete com jornalistas sobre o maior ídolo", "https://www.netvasco.com.br/n/249437/enquete-com-jornalistas-elege-roberto-dinamite-o-maior-idolo-do-vasco"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-vasco-com-mais-titulos-na-historia.html"], ["NetVasco: escalação da final do Brasileiro de 1989 (súmula)", "https://netvasco.com.br/historia/decisoes/Sumula19891216.html"]] },
    [
      xi("Titular", ["Antônio Lopes", "Técnico com mais títulos (6, empatado com Ondino Vieira), entre eles o Brasileiro de 1997 e a Libertadores de 1998."], "Bellini", [
        "Barbosa", "Augusto", "Bellini", "Mauro Galvão", "Felipe",
        "Danilo Alvim", "Geovani", "Juninho Pernambucano", ["Ademir de Menezes", "301 gols."], ["Roberto Dinamite", "708 gols."], ["Romário", "326 gols."]]),
      xi("Reserva", ["Ondino Vieira", "6 títulos, com destaque para Cariocas e torneios dos anos 1940."], "Brito", [
        "Carlos Germano", "Luís Carlos Winck", "Brito", "Odvan", "Mazinho",
        "Maneca", "Ipojucan", "Pedrinho", "Edmundo", ["Pinga", "250 gols."], "Chico"]),
      xi("Suplente 1", ["Joel Santana", "5 títulos, entre eles o Brasileiro e a Copa Mercosul de 2000."], "Orlando Peçanha", [
        "Acácio", "Fidélis", "Orlando Peçanha", "Ely do Amparo", "Marco Antônio",
        "Ramon", "Juninho Paulista", "Dirceu", "Friaça", ["Vavá", "191 gols."], "Bebeto"]),
      xi("Suplente 2", ["Flávio Costa", "5 títulos; técnico do \"Expresso da Vitória\", campeão sul-americano de 1948."], "Dedé", [
        "Andrada", "Jorginho", "Ricardo Rocha", "Dedé", "Lucas Piton",
        "Philippe Coutinho", "Payet", "Nenê", "Euller", "Vegetti", "Valdir Bigode"])
    ]));

  /* ---------------- Minas Gerais ---------------- */
  G.push(clube({ id: "cruzeiro", nome: "Cruzeiro", uf: "MG", cidade: "Belo Horizonte", fundacao: 1921, cores: ["#1E3C8C", "#FFFFFF"],
    capitao: "Piazza", capitaoNota: "566 jogos; capitão da Taça Brasil de 1966 e da Libertadores de 1976.",
    craques: [["Tostão", "Maior artilheiro: 245 gols."], ["Dirceu Lopes", "610 jogos e 223 gols."], ["Alex", "Craque da Tríplice Coroa de 2003."]],
    outros: [["Hilton Oliveira", "ATA"], ["Alcides Lemos", "ATA"], ["Sabu", "ATA"], ["Guerino", "ATA"], ["Cleison", "ATA"], ["Raimundinho", "ATA"], ["Pelau", "ATA"], ["Orlando Fantoni", "ATA"], ["Wellington Paulista", "ATA"], ["Elivélton", "ATA"], ["Deivid", "ATA"], ["Kléber", "ATA"], ["Marcelo Moreno", "ATA"], ["Jairzinho", "ATA"]],
    outrosTec: ["Zezé Moreira", "Paulo Autuori", "Matturio Fabbi", "Ilton Chaves", "Ênio Andrade", "Airton Moreira"],
    fontes: [["Wikipédia: artilheiros, mais jogos e treinadores", WIKI + "Cruzeiro_Esporte_Clube"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-cruzeiro-com-mais-titulos-na-historia.html"], ["Trivela: Cruzeiro x Santos, a Taça Brasil de 1966", "https://trivela.com.br/brasil/no-grande-cruzeiro-x-santos-o-time-de-tostao-ignorou-o-de-pele-e-levou-a-taca-brasil-de-1966/"]] },
    [
      xi("Titular", ["Mano Menezes", "4 títulos: Copas do Brasil de 2017 e 2018 e Mineiros de 2018 e 2019."], "Piazza", [
        ["Fábio", "Recordista: 976 jogos."], ["Nelinho", "411 jogos e 105 gols."], "Procópio", ["Cris", "260 jogos."], "Sorín",
        ["Piazza", "566 jogos."], ["Dirceu Lopes", "610 jogos e 223 gols."], "Alex", ["Joãozinho", "485 jogos e 118 gols."], ["Tostão", "245 gols."], ["Palhinha", "457 jogos e 145 gols."]]),
      xi("Reserva", ["Levir Culpi", "4 títulos: Recopa e Mineiro de 1998, Copa Centro-Oeste e Copa dos Campeões Mineiros de 1999."], "Raul Plassmann", [
        ["Raul Plassmann", "557 jogos."], "Mayke", "Dedé", ["Léo", "401 jogos."], ["Vanderlei", "538 jogos."],
        ["Zé Carlos", "633 jogos."], ["Ricardinho", "441 jogos."], "Éverton Ribeiro", ["Roberto Batata", "110 gols."], ["Marcelo Ramos", "162 gols."], "Ronaldo"]),
      xi("Suplente 1", ["Vanderlei Luxemburgo", "3 títulos, todos em 2003: Brasileiro, Copa do Brasil e Mineiro (Tríplice Coroa)."], "Henrique", [
        ["Dida", "306 jogos."], ["Pedro Paulo", "405 jogos."], ["Morais", "283 jogos."], "Perfumo", "Egídio",
        ["Henrique", "524 jogos."], "Ricardo Goulart", "Thiago Neves", ["Natal", "71 gols."], ["Niginho", "207 gols."], ["Ninão", "167 gols."]]),
      xi("Suplente 2", ["Marcelo Oliveira", "3 títulos: Brasileiros de 2013 e 2014 e Mineiro de 2014."], "Cássio", [
        "Cássio", "Maicon", ["Darci Menezes", "427 jogos."], ["Célio Lúcio", "249 jogos."], ["Nonato", "394 jogos."],
        ["Douglas", "391 jogos."], "Montillo", "Arrascaeta", ["Evaldo", "108 gols."], ["Bengala", "168 gols."], ["Fábio Júnior", "81 gols."]])
    ]));

  G.push(clube({ id: "atletico-mg", nome: "Atlético-MG", uf: "MG", cidade: "Belo Horizonte", fundacao: 1908, cores: ["#111111", "#FFFFFF"],
    capitao: "Réver", capitaoNota: "Capitão da Libertadores de 2013, com 12 títulos oficiais pelo clube.",
    craques: [["Reinaldo", "Maior artilheiro: 255 gols em 475 jogos."], ["Ronaldinho", "Campeão da Libertadores de 2013 e da Recopa de 2014."], ["Hulk", "Campeão brasileiro e da Copa do Brasil de 2021; maior artilheiro do clube no século."]],
    outros: [["Jô", "ATA"], ["Keno", "ATA"], ["Vargas", "ATA"], ["Lucas Miranda", "ATA"], ["Nívio", "ATA"]],
    outrosTec: ["Procópio Cardoso", "Ricardo Díez", "Iustrich", "Jair Pereira"],
    fontes: [["Wikipédia: artilheiros e treinadores", WIKI + "Clube_Atlético_Mineiro"], ["Trivela: os 10 maiores jogadores", "https://trivela.com.br/brasil/atletico-lista-maiores-jogadores/"], ["Lance: João Leite, jogos e estatísticas", "https://www.lance.com.br/lancepedia/a-historia-de-joao-leite-no-atletico-mg.html"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-atletico-mg-com-mais-titulos-na-historia.html"], ["Itatiaia: Cuca e o recorde de títulos mineiros", "https://www.itatiaia.com.br/esportes/futebol/futebol-nacional/futebol-mineiro/atletico/campeao-pelo-atletico-cuca-atinge-feito-historico-no-campeonato-mineiro/"], ["Lance: como foi o título da Libertadores de 2013", "https://www.lance.com.br/lancepedia/titulo-atletico-mg-libertadores.html"]] },
    [
      xi("Titular", ["Cuca", "Técnico com mais títulos pelo clube, entre eles a Libertadores de 2013 e o Brasileiro e a Copa do Brasil de 2021."], "Réver", [
        ["Victor", "424 jogos; herói da Libertadores de 2013."], "Marcos Rocha", "Luizinho", "Réver", "Guilherme Arana",
        "Toninho Cerezo", "Paulo Isidoro", "Ronaldinho", ["Hulk", "Campeão brasileiro e da Copa do Brasil de 2021."], ["Reinaldo", "255 gols."], ["Éder", "122 gols em 368 jogos."]]),
      xi("Reserva", ["Levir Culpi", "Campeão da Copa do Brasil de 2014 e tricampeão mineiro pelo clube (1995, 2007 e 2015)."], "Leonardo Silva", [
        ["João Leite", "Recordista: 684 jogos."], "Nelinho", "Leonardo Silva", "Junior Alonso", "Júnior César",
        "Pierre", "Gilberto Silva", "Nacho Fernández", "Bernard", ["Dadá Maravilha", "211 gols em 290 jogos."], ["Diego Tardelli", "112 gols em 230 jogos."]]),
      xi("Suplente 1", ["Telê Santana", "3 títulos: Brasileiro de 1971 e Mineiros de 1970 e 1988; técnico com mais jogos (434)."], "Marques", [
        "Everson", "Mariano", "Vantuir", "Grapete", "Richarlyson",
        "Jair", "Allan", "Luan", ["Marques", "133 gols."], ["Guará", "168 gols em 200 jogos."], ["Mário de Castro", "195 gols."]]),
      xi("Suplente 2", ["Barbatana", "3 títulos: Mineiros de 1976 e 1978 e Torneio dos Campeões de 1978."], "Battaglia", [
        "Kafunga", "Cicinho", "Jemerson", "Igor Rabello", "Fábio Santos",
        "Battaglia", "Zaracho", "Dátolo", ["Guilherme", "139 gols."], ["Ubaldo", "135 gols em 274 jogos."], ["Said", "142 gols."]])
    ]));

  /* ---------------- Rio Grande do Sul ---------------- */
  G.push(clube({ id: "gremio", nome: "Grêmio", uf: "RS", cidade: "Porto Alegre", fundacao: 1903, cores: ["#0D80BF", "#111111", "#FFFFFF"],
    capitao: "Hugo de León", capitaoNota: "Capitão da Libertadores e do Mundial de 1983.",
    craques: [["Renato Gaúcho", "Dois gols na final do Mundial de 1983; depois técnico da Libertadores de 2017."], ["Hugo de León", "Capitão da Libertadores e do Mundial de 1983."], ["Tarciso", "Recordista de jogos (721) e 226 gols."]],
    outros: [["Goiano", "VOL"], ["Paulo Isidoro", "MEI"], ["Jael", "ATA"], ["Douglas Costa", "ATA"], ["Marino", "ATA"], ["João Severiano", "ATA"]],
    outrosTec: ["Valdir Espinosa", "Ênio Andrade", "Evaristo de Macedo", "Tite", "Telê Santana"],
    fontes: [["Wikipédia: artilheiros, mais jogos e treinadores", WIKI + "Grêmio_Foot-Ball_Porto_Alegrense"], ["Lance: técnicos com mais títulos", "https://www.lance.com.br/lancepedia/tecnicos-gremio-com-mais-titulos-na-historia.html"], ["Wikipédia (inglês): escalação do Mundial de 1983", "https://en.wikipedia.org/wiki/1983_Intercontinental_Cup"]] },
    [
      xi("Titular", ["Renato Portaluppi", "Técnico com mais títulos pelo clube (10), entre eles a Copa do Brasil de 2016, a Libertadores de 2017 e a Recopa de 2018."], "Hugo de León", [
        ["Danrlei", "591 jogos."], "Arce", "Hugo de León", "Geromel", "Everaldo",
        "Dinho", "Arthur", "Luan", "Renato Gaúcho", ["Alcindo", "Maior artilheiro: 230 gols."], ["Tarciso", "721 jogos e 226 gols."]]),
      xi("Reserva", ["Oswaldo Rolla", "O \"Foguinho\": 10 títulos, entre eles o pentacampeonato gaúcho de 1956 a 1960."], "Adílson Batista", [
        ["Mazarópi", "425 jogos."], "Paulo Roberto", ["Ancheta", "426 jogos."], "Adílson Batista", ["Roger", "505 jogos."],
        "Maicon", "Valdo", "Ronaldinho", "Paulo Nunes", "Jardel", "Everton Cebolinha"]),
      xi("Suplente 1", ["Luiz Felipe Scolari", "Campeão da Copa do Brasil de 1994, da Libertadores de 1995, da Recopa e do Brasileiro de 1996."], "Kannemann", [
        "Marcelo Grohe", "Edílson", "Kannemann", "Rivarola", "Casemiro",
        ["Milton Kuelle", "502 jogos e 117 gols."], "Mário Sérgio", "Carlos Miguel", ["Gessy", "214 gols."], ["Juarez", "202 gols."], ["Baltazar", "131 gols."]]),
      xi("Suplente 2", ["Telêmaco Frazão", "8 títulos, entre eles os gaúchos de 1931 e 1932."], "Airton Pavilhão", [
        "Eurico Lara", "Rafinha", "Baidek", ["Airton Pavilhão", "592 jogos."], "Zé Roberto",
        "Ramiro", "Douglas", "Arilson", ["Luis Carvalho", "146 gols."], "Luis Suárez", ["Loivo", "425 jogos."]])
    ]));

  G.push(clube({ id: "internacional", nome: "Internacional", uf: "RS", cidade: "Porto Alegre", fundacao: 1909, cores: ["#D2161E", "#FFFFFF"],
    capitao: "Fernandão", capitaoNota: "Capitão da Libertadores e do Mundial de 2006.",
    craques: [["Falcão", "O \"Rei de Roma\", tricampeão brasileiro (1975, 1976 e 1979)."], ["Figueroa", "Zagueiro do bicampeonato brasileiro de 1975 e 1976."], ["Fernandão", "Capitão da Libertadores e do Mundial de 2006."]],
    outros: [["Vacaria", "LE"], ["Hermínio", "ZAG"], ["Flávio Minuano", "ATA"], ["Danilo Fernandes", "GOL"], ["Dario", "ATA"], ["Villalba", "ATA"]],
    outrosTec: ["Dunga", "Tite"],
    fontes: [["Wikipédia: história e treinadores", WIKI + "Sport_Club_Internacional"], ["Lance: os 10 maiores artilheiros", "https://www.lance.com.br/internacional/artilheiros-internacional.html"], ["Goal: maiores artilheiros", "https://www.goal.com/br/listas/os-maiores-artilheiros-da-historia-do-internacional/bltbbb92b2a042e6931"], ["Wikipédia: escalação da final e Bola de Prata do Brasileiro de 1975", "https://pt.wikipedia.org/wiki/Campeonato_Brasileiro_de_Futebol_de_1975"]] },
    [
      xi("Titular", ["Abel Braga", "Campeão da Libertadores e do Mundial de 2006."], "Fernandão", [
        "Manga", "Ceará", "Figueroa", "Índio", "Chico Fraga",
        "Falcão", "D'Alessandro", "Fernandão", ["Valdomiro", "Jogador que mais atuou pelo clube."], ["Carlitos", "Maior artilheiro: 326 gols."], "Lula"]),
      xi("Reserva", ["Rubens Minelli", "Bicampeão brasileiro (1975 e 1976)."], "Bolívar", [
        "Clemer", "Valdir", "Mauro Galvão", "Bolívar", "Kléber",
        "Carpegiani", "Batista", "Tinga", "Tesourinha", ["Claudiomiro", "204 gols."], "Rafael Sóbis"]),
      xi("Suplente 1", ["Ênio Andrade", "Campeão brasileiro invicto de 1979."], "Marinho Peres", [
        "Taffarel", "Nei", "Marinho Peres", "Fabiano Eller", "Jorge Wagner",
        "Caçapava", "Guiñazú", "Mário Sérgio", "Escurinho", ["Bodinho", "233 gols."], "Larry"]),
      xi("Suplente 2", ["Celso Roth", "Campeão da Libertadores de 2010."], "Gamarra", [
        "Gainete", "Luiz Carlos Winck", "Gamarra", "Rodrigo Moledo", "Rubens Cardoso",
        "Edenílson", "Alan Patrick", "Iarley", "Nilmar", "Leandro Damião", "Alexandre Pato"])
    ]));

  window.LFB = window.LFB || {};
  window.LFB.grandes = G;
})();
