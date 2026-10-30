/* Lendas do Futebol Brasileiro — os melhores jogadores brasileiros de todos os tempos, por posição.
   Independe de o jogador estar nas seleções dos times. Cada entrada: [nome, época, clubes, marcas].
   Mesmo método das seleções: marcas individuais, marcas coletivas e representação popular. */
window.LFB = window.LFB || {};
window.LFB.craques = [
  { id: "goleiros", nome: "Goleiros", pos: "GOL", lista: [
    ["Gilmar", "1951–1969", "Corinthians, Santos", "Bicampeão mundial como titular (1958 e 1962) e campeão da Libertadores e do Mundial de 1962 e 1963 pelo Santos."],
    ["Taffarel", "1985–2003", "Internacional, Atlético-MG, Galatasaray", "Campeão mundial em 1994, campeão da Copa América (1989 e 1997) e da Copa da UEFA de 2000."],
    ["Alisson", "2013–", "Internacional, Roma, Liverpool", "Melhor goleiro do mundo em 2019 (The Best FIFA, IFFHS e Troféu Yashin), campeão da Champions League e da Copa América de 2019."],
    ["Rogério Ceni", "1990–2015", "São Paulo", "Recordista de jogos por um clube (1.237) e goleiro com mais gols da história (131); melhor jogador do Mundial de 2005."],
    ["Marcos", "1992–2012", "Palmeiras", "Titular do penta em 2002 e herói da Libertadores de 1999."],
    ["Dida", "1992–2010", "Vitória, Cruzeiro, Corinthians, Milan", "Campeão da Libertadores (1997), do Mundial (2000) e de duas Champions League (2003 e 2007)."],
    ["Júlio César", "1997–2018", "Flamengo, Inter de Milão", "Tríplice coroa com a Inter de Milão em 2010, Copa América 2004 e Copas das Confederações de 2009 e 2013."],
    ["Ederson", "2011–", "Benfica, Manchester City", "Melhor goleiro do mundo em 2023 (The Best FIFA e IFFHS), campeão da Champions League de 2023 e de várias Premier Leagues pelo City."],
    ["Cássio", "2006–", "Corinthians, Cruzeiro", "Campeão da Libertadores e do Mundial de 2012, eleito o melhor jogador do Mundial."],
    ["Émerson Leão", "1968–1987", "Palmeiras, Grêmio, Corinthians", "Recordista de jogos entre os goleiros do Palmeiras (621) e convocado para quatro Copas do Mundo."],
    ["Félix", "1955–1977", "Portuguesa, Fluminense", "Goleiro titular do tri em 1970."],
    ["Castilho", "1947–1965", "Fluminense", "Recordista de jogos do Fluminense (697) e eleito o maior ídolo do clube."],
    ["Barbosa", "1945–1962", "Vasco", "Goleiro do \"Expresso da Vitória\" e campeão sul-americano de clubes em 1948."],
    ["Zetti", "1984–2001", "Palmeiras, São Paulo", "Bicampeão da Libertadores e do Mundial (1992 e 1993) pelo São Paulo."],
    ["Raul Plassmann", "1965–1983", "Cruzeiro, Flamengo", "Campeão da Libertadores por Cruzeiro (1976) e Flamengo (1981), e do Mundial de 1981."]
  ] },
  { id: "laterais-direitos", nome: "Laterais-direitos", pos: "LD", lista: [
    ["Cafu", "1989–2008", "São Paulo, Roma, Milan", "Três finais de Copa seguidas, bicampeão mundial, capitão do penta e recordista de jogos pela Seleção."],
    ["Djalma Santos", "1948–1970", "Portuguesa, Palmeiras", "Bicampeão mundial (1958 e 1962), presente na seleção da Copa de 1958."],
    ["Carlos Alberto Torres", "1963–1982", "Fluminense, Santos, Botafogo", "Capitão do tri em 1970, com gol na final."],
    ["Daniel Alves", "2001–2022", "Bahia, Sevilla, Barcelona, Juventus, PSG", "Um dos jogadores com mais títulos da história; campeão da Copa América (2007 e 2019) e ouro olímpico em 2021."],
    ["Leandro", "1978–1990", "Flamengo", "Lateral do Flamengo campeão do mundo em 1981 e da Seleção de 1982."],
    ["Jorginho", "1983–2002", "America-RJ, Flamengo, Bayer Leverkusen, Bayern", "Lateral titular do tetra em 1994."],
    ["Zé Maria", "1966–1983", "Portuguesa, Corinthians", "Campeão mundial em 1970 e 598 jogos pelo Corinthians."],
    ["Nelinho", "1970–1987", "Cruzeiro, Atlético-MG", "Campeão da Libertadores de 1976 e autor de um dos gols mais famosos da Copa de 1978."],
    ["Josimar", "1981–1997", "Botafogo, Flamengo", "Eleito para a seleção da Copa de 1986."],
    ["Maicon", "2001–2020", "Cruzeiro, Inter de Milão", "Tríplice coroa com a Inter de Milão em 2010 e campeão da Copa América em 2004 e 2007."],
    ["Belletti", "1994–2011", "São Paulo, Barcelona, Chelsea", "Gol do título da Champions League de 2006 e campeão mundial em 2002."],
    ["De Sordi", "1952–1965", "São Paulo", "Campeão mundial em 1958 e 544 jogos pelo São Paulo."]
  ] },
  { id: "zagueiros", nome: "Zagueiros", pos: "ZAG", lista: [
    ["Domingos da Guia", "1929–1948", "Bangu, Vasco, Flamengo, Corinthians", "O \"Divino Mestre\", considerado o maior zagueiro brasileiro da primeira metade do século XX."],
    ["Lúcio", "1997–2016", "Internacional, Bayer Leverkusen, Bayern, Inter de Milão", "Campeão mundial em 2002 e da Champions League (tríplice coroa) em 2010."],
    ["Thiago Silva", "2002–", "Fluminense, Milan, PSG, Chelsea", "Capitão da Seleção por quase uma década e campeão da Champions League de 2021."],
    ["Bellini", "1949–1969", "Vasco, São Paulo", "Capitão do título mundial de 1958."],
    ["Mauro Ramos", "1948–1967", "São Paulo, Santos", "Capitão do bi em 1962 e campeão da Libertadores e do Mundial pelo Santos."],
    ["Aldair", "1985–2007", "Flamengo, Benfica, Roma", "Campeão mundial em 1994 e ídolo da Roma."],
    ["Luís Pereira", "1967–1985", "Palmeiras, Atlético de Madrid", "Zagueiro da \"Segunda Academia\" e titular na Copa de 1974."],
    ["Marquinhos", "2012–", "Corinthians, Roma, PSG", "Ouro olímpico em 2016, campeão da Copa América de 2019 e capitão do PSG campeão da Champions League."],
    ["Oscar", "1972–1990", "Ponte Preta, São Paulo", "Titular nas Copas de 1978 e 1982 e campeão brasileiro de 1986 pelo São Paulo."],
    ["Brito", "1958–1979", "Vasco, Flamengo, Cruzeiro", "Zagueiro titular do tri em 1970."],
    ["Mozer", "1980–1996", "Flamengo, Benfica, Olympique de Marseille", "Campeão da Libertadores e do Mundial de 1981."],
    ["Ricardo Gomes", "1982–1998", "Fluminense, Benfica, PSG", "Capitão da Seleção e campeão brasileiro de 1984."],
    ["Juan", "1996–2019", "Flamengo, Bayer Leverkusen, Roma, Internacional", "Campeão da Copa América (2004 e 2007) e das Copas das Confederações de 2005 e 2009."],
    ["Mauro Galvão", "1979–2001", "Internacional, Botafogo, Vasco", "Zagueiro do Vasco campeão brasileiro de 1997 e da Libertadores de 1998."]
  ] },
  { id: "laterais-esquerdos", nome: "Laterais-esquerdos", pos: "LE", lista: [
    ["Nílton Santos", "1948–1964", "Botafogo", "A \"Enciclopédia do Futebol\", bicampeão mundial e recordista de jogos do Botafogo (721)."],
    ["Roberto Carlos", "1991–2016", "Palmeiras, Inter de Milão, Real Madrid", "Campeão mundial em 2002, três vezes campeão da Champions League e vice-melhor do mundo pela FIFA em 1997."],
    ["Júnior", "1974–1993", "Flamengo, Torino", "Recordista de jogos do Flamengo (875) e titular nas Copas de 1982 e 1986."],
    ["Marcelo", "2005–", "Fluminense, Real Madrid", "Cinco vezes campeão da Champions League e campeão da Libertadores de 2023."],
    ["Branco", "1980–1998", "Fluminense, Porto", "Campeão mundial em 1994, com o gol de falta contra a Holanda."],
    ["Leonardo", "1987–2003", "Flamengo, São Paulo, Milan", "Campeão mundial em 1994 e campeão da Libertadores e do Mundial de 1993 pelo São Paulo."],
    ["Marinho Chagas", "1970–1987", "Botafogo", "Eleito para a seleção da Copa de 1974."],
    ["Everaldo", "1964–1974", "Grêmio", "Lateral titular do tri em 1970."],
    ["Filipe Luís", "2003–2024", "Atlético de Madrid, Chelsea, Flamengo", "Campeão da Copa América (2019) e das Libertadores de 2019 e 2022."],
    ["Wladimir", "1972–1987", "Corinthians", "Recordista de jogos do Corinthians: 806."],
    ["Altair", "1955–1971", "Fluminense", "Campeão mundial em 1962 e 551 jogos pelo Fluminense."]
  ] },
  { id: "volantes", nome: "Volantes", pos: "VOL", lista: [
    ["Zito", "1952–1967", "Santos", "Bicampeão mundial, com gol na final de 1962, e capitão do Santos bicampeão da Libertadores e do Mundial."],
    ["Dunga", "1980–2000", "Internacional, Fiorentina, Stuttgart", "Capitão do tetra em 1994 e campeão da Copa América (1989 e 1997)."],
    ["Falcão", "1972–1986", "Internacional, Roma", "O \"Rei de Roma\", tricampeão brasileiro e Bola de Prata da Copa de 1982."],
    ["Clodoaldo", "1966–1979", "Santos", "Tricampeão em 1970, com os dribles que iniciaram o quarto gol da final."],
    ["Toninho Cerezo", "1972–1997", "Atlético-MG, Roma, Sampdoria, São Paulo", "Titular nas Copas de 1978 e 1982 e campeão do Mundial de 1993 pelo São Paulo."],
    ["Mauro Silva", "1987–2005", "Bragantino, Deportivo La Coruña", "Volante titular do tetra em 1994."],
    ["Gilberto Silva", "1997–2013", "Atlético-MG, Arsenal", "Campeão mundial em 2002 e da Copa América de 2007."],
    ["Casemiro", "2010–", "São Paulo, Real Madrid, Manchester United", "Cinco vezes campeão da Champions League e campeão da Copa América de 2019."],
    ["Piazza", "1964–1979", "Cruzeiro", "Tricampeão em 1970 e capitão do Cruzeiro campeão da Libertadores de 1976."],
    ["Bauer", "1943–1958", "São Paulo", "Titular na Copa de 1950."],
    ["Danilo Alvim", "1938–1955", "Vasco", "Craque do \"Expresso da Vitória\" e titular na Copa de 1950."],
    ["César Sampaio", "1986–2004", "Santos, Palmeiras", "Titular na Copa de 1998 e campeão brasileiro pelo Palmeiras."],
    ["Andrade", "1977–1992", "Flamengo", "Volante do Flamengo campeão da Libertadores e do Mundial de 1981."]
  ] },
  { id: "meias", nome: "Meias", pos: "MEI", lista: [
    ["Pelé", "1956–1977", "Santos, New York Cosmos", "Único tricampeão mundial (1958, 1962 e 1970), 1.091 gols pelo Santos e eleito o maior jogador do século XX."],
    ["Ronaldinho", "1998–2015", "Grêmio, PSG, Barcelona, Milan, Atlético-MG", "Campeão mundial em 2002, duas vezes melhor do mundo pela FIFA, Bola de Ouro de 2005, Champions League (2006) e Libertadores (2013)."],
    ["Zico", "1971–1994", "Flamengo, Udinese", "Maior ídolo do Flamengo, campeão da Libertadores e do Mundial de 1981."],
    ["Kaká", "2001–2017", "São Paulo, Milan, Real Madrid", "Campeão mundial em 2002, Bola de Ouro e melhor do mundo pela FIFA em 2007 e campeão da Champions League de 2007."],
    ["Rivaldo", "1991–2015", "Palmeiras, Deportivo La Coruña, Barcelona, Milan", "Campeão mundial em 2002 e Bola de Ouro e melhor do mundo pela FIFA em 1999."],
    ["Didi", "1946–1966", "Fluminense, Botafogo, Real Madrid", "Cérebro do Brasil campeão de 1958, bicampeão mundial e criador da \"folha-seca\"."],
    ["Gérson", "1959–1974", "Flamengo, Botafogo, São Paulo, Fluminense", "O \"Canhotinha de Ouro\", tricampeão em 1970 com gol na final."],
    ["Rivellino", "1965–1981", "Corinthians, Fluminense", "Tricampeão em 1970 e apontado como o maior jogador da história do Corinthians."],
    ["Sócrates", "1974–1989", "Botafogo-SP, Corinthians, Fiorentina, Flamengo", "Capitão da Seleção de 1982 e líder da Democracia Corintiana."],
    ["Zizinho", "1939–1962", "Flamengo, Bangu, São Paulo", "Craque da Copa de 1950 e ídolo de infância de Pelé."],
    ["Ademir da Guia", "1959–1977", "Bangu, Palmeiras", "O \"Divino\", maior ídolo do Palmeiras."],
    ["Raí", "1984–2000", "Botafogo-SP, São Paulo, PSG", "Bicampeão da Libertadores e do Mundial (1992 e 1993) e campeão mundial com a Seleção em 1994."],
    ["Juninho Pernambucano", "1993–2013", "Sport, Vasco, Lyon", "Campeão da Libertadores de 1998 e heptacampeão francês pelo Lyon."],
    ["Alex", "1995–2014", "Coritiba, Palmeiras, Cruzeiro, Fenerbahçe", "Craque da Tríplice Coroa do Cruzeiro em 2003 e ídolo do Fenerbahçe."],
    ["Dirceu Lopes", "1963–1979", "Cruzeiro", "610 jogos e 223 gols pelo Cruzeiro."]
  ] },
  { id: "pontas", nome: "Pontas", pos: "PD", lista: [
    ["Garrincha", "1953–1972", "Botafogo", "Bicampeão mundial e grande nome da Copa de 1962; 245 gols pelo Botafogo."],
    ["Neymar", "2009–", "Santos, Barcelona, PSG, Al-Hilal", "Maior artilheiro da história da Seleção, ouro olímpico em 2016 e campeão da Champions League de 2015."],
    ["Jairzinho", "1959–1982", "Botafogo, Cruzeiro", "Tricampeão em 1970 marcando em todos os jogos da Copa."],
    ["Vinícius Júnior", "2017–", "Flamengo, Real Madrid", "The Best FIFA de 2024 e campeão da Champions League com gols em finais."],
    ["Julinho Botelho", "1950–1967", "Portuguesa, Fiorentina, Palmeiras", "Titular na Copa de 1954 e ídolo da Fiorentina."],
    ["Pepe", "1954–1969", "Santos", "Segundo maior artilheiro do Santos (405 gols) e bicampeão mundial com a Seleção."],
    ["Zagallo", "1950–1965", "Flamengo, Botafogo", "Bicampeão mundial como jogador (1958 e 1962)."],
    ["Éder", "1974–1996", "Grêmio, Atlético-MG", "O canhão da Seleção de 1982."],
    ["Canhoteiro", "1950–1963", "São Paulo", "O \"Garrincha da ponta-esquerda\", ídolo do São Paulo."],
    ["Dorval", "1956–1972", "Santos", "Ponta do Santos bicampeão da Libertadores e do Mundial, 610 jogos pelo clube."],
    ["Joãozinho", "1973–1986", "Cruzeiro", "Gol do título da Libertadores de 1976."],
    ["Tesourinha", "1939–1957", "Internacional, Vasco", "Ponta do \"Rolo Compressor\" do Internacional."],
    ["Robinho", "2002–2020", "Santos, Real Madrid, Milan", "Campeão da Copa América (2007) e brasileiro pelo Santos (2002 e 2004)."]
  ] },
  { id: "centroavantes", nome: "Centroavantes", pos: "ATA", lista: [
    ["Ronaldo", "1993–2011", "Cruzeiro, PSV, Barcelona, Inter de Milão, Real Madrid, Corinthians", "Bicampeão mundial, artilheiro da Copa de 2002, 15 gols em Copas, três vezes melhor do mundo pela FIFA e duas Bolas de Ouro."],
    ["Romário", "1985–2009", "Vasco, PSV, Barcelona, Flamengo", "Melhor jogador da Copa de 1994 e melhor do mundo pela FIFA em 1994."],
    ["Friedenreich", "1909–1935", "Paulistano, São Paulo da Floresta", "Primeiro grande craque do futebol brasileiro e campeão sul-americano de 1919."],
    ["Leônidas da Silva", "1929–1950", "Vasco, Flamengo, São Paulo", "O \"Diamante Negro\", artilheiro da Copa de 1938."],
    ["Ademir de Menezes", "1939–1956", "Sport, Vasco, Fluminense", "Artilheiro da Copa de 1950 e 301 gols pelo Vasco."],
    ["Vavá", "1949–1967", "Sport, Vasco, Atlético de Madrid, Palmeiras", "Bicampeão mundial, com gols nas finais de 1958 e 1962."],
    ["Tostão", "1962–1973", "América-MG, Cruzeiro, Vasco", "Tricampeão em 1970 e maior artilheiro do Cruzeiro (245 gols)."],
    ["Roberto Dinamite", "1971–1993", "Vasco", "Maior artilheiro do Vasco (708 gols) e do Campeonato Brasileiro."],
    ["Careca", "1978–1999", "Guarani, São Paulo, Napoli", "Campeão brasileiro por Guarani (1978) e São Paulo (1986) e ídolo do Napoli."],
    ["Reinaldo", "1973–1988", "Atlético-MG", "Maior artilheiro do Atlético-MG (255 gols)."],
    ["Coutinho", "1958–1970", "Santos", "Parceiro de Pelé, 368 gols pelo Santos e artilheiro da Libertadores de 1962."],
    ["Bebeto", "1983–2002", "Flamengo, Vasco, Deportivo La Coruña", "Campeão mundial em 1994, em dupla com Romário."],
    ["Heleno de Freitas", "1937–1951", "Botafogo, Vasco", "Ídolo do Botafogo com 209 gols."],
    ["Adriano", "1999–2016", "Flamengo, Inter de Milão", "Artilheiro e melhor jogador da Copa América de 2004 e campeão brasileiro de 2009."]
  ] },
  { id: "tecnicos", nome: "Técnicos", pos: "TÉC", lista: [
    ["Zagallo", "1966–2001", "Seleção, Botafogo, Flamengo", "Quatro títulos mundiais: 1958 e 1962 como jogador, 1970 como técnico e 1994 como coordenador."],
    ["Telê Santana", "1969–1996", "Atlético-MG, Seleção, São Paulo", "Bicampeão da Libertadores e do Mundial com o São Paulo (1992 e 1993) e técnico da Seleção de 1982."],
    ["Luiz Felipe Scolari", "1982–2024", "Grêmio, Palmeiras, Seleção", "Campeão mundial em 2002 e da Libertadores por Grêmio (1995) e Palmeiras (1999)."],
    ["Carlos Alberto Parreira", "1967–2010", "Seleção, Fluminense", "Campeão mundial em 1994 e da Copa América de 2004."],
    ["Vicente Feola", "1937–1975", "São Paulo, Seleção", "Campeão mundial em 1958."],
    ["Lula (Luís Alonso Pérez)", "1954–1966", "Santos", "34 títulos pelo Santos, entre eles duas Libertadores e dois Mundiais."],
    ["Tite", "1990–", "Grêmio, Corinthians, Seleção", "Campeão da Libertadores e do Mundial de 2012 e da Copa América de 2019."],
    ["Vanderlei Luxemburgo", "1983–", "Palmeiras, Corinthians, Cruzeiro, Santos", "Cinco vezes campeão brasileiro, recorde entre os técnicos."],
    ["Muricy Ramalho", "1993–2016", "São Paulo, Fluminense, Santos", "Tetracampeão brasileiro e campeão da Libertadores de 2011."],
    ["Aymoré Moreira", "1940–1974", "Seleção", "Campeão mundial em 1962."],
    ["Rubens Minelli", "1963–1990", "Internacional, São Paulo", "Tricampeão brasileiro seguido (1975, 1976 e 1977)."],
    ["Flávio Costa", "1937–1967", "Flamengo, Vasco, Seleção", "Técnico do \"Expresso da Vitória\" e da Seleção de 1950."],
    ["Ênio Andrade", "1966–1993", "Internacional, Grêmio, Coritiba", "Campeão brasileiro por três clubes diferentes."],
    ["Renato Portaluppi", "2000–", "Grêmio", "Campeão da Libertadores de 2017 pelo Grêmio."]
  ] }
];

/* lado de cada ponta (para a seleção de todos os tempos ter um ponta-direita e um ponta-esquerda) */
window.LFB.craquesLado = {
  "Garrincha": "PD", "Jairzinho": "PD", "Julinho Botelho": "PD", "Dorval": "PD", "Tesourinha": "PD",
  "Neymar": "PE", "Vinícius Júnior": "PE", "Pepe": "PE", "Zagallo": "PE", "Éder": "PE", "Canhoteiro": "PE", "Joãozinho": "PE", "Robinho": "PE"
};
