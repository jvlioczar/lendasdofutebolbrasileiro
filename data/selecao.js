/* Lendas do Futebol Brasileiro — Seleção Brasileira
   Cada time: [nome, posição, marcas]. Posições: GOL, LD, ZAG, LE, VOL, MEI, PD, PE, ATA.
   A ordem segue a formação, de trás para frente; em cada linha, da direita para a esquerda. */
window.LFB = window.LFB || {};
window.LFB.selecao = {
  id: "selecao",
  nome: "Seleção Brasileira",
  curto: "Seleção",
  uf: "BR",
  cidade: "Brasil",
  fundacao: 1914,
  cores: ["#FFDF00", "#009C3B"],
  status: "revisao",
  capitao: "Cafu",
  capitaoNota: "Único jogador a disputar três finais de Copa seguidas (1994, 1998 e 2002), bicampeão mundial, capitão do penta e recordista de jogos pela Seleção. Carlos Alberto Torres (1970), Bellini (1958) e Mauro Ramos (1962) completam o pódio dos capitães campeões.",
  craques: [
    ["Pelé", "Único tricampeão mundial como jogador (1958, 1962 e 1970) e eleito o maior jogador do século XX."],
    ["Ronaldo", "Bicampeão mundial (1994 e 2002), artilheiro da Copa de 2002, 15 gols em Copas, três vezes melhor do mundo pela FIFA e duas Bolas de Ouro."],
    ["Garrincha", "Bicampeão mundial (1958 e 1962), melhor jogador e um dos artilheiros da Copa de 1962. Com ele e Pelé juntos em campo, o Brasil nunca perdeu."]
  ],
  times: [
    {
      nome: "Titular", formacao: "4-2-3-1", tecnico: ["Zagallo", "Quatro títulos mundiais: 1958 e 1962 como jogador, 1970 como técnico e 1994 como coordenador."], cap: "Cafu",
      jog: [
        ["Gilmar", "GOL", "Goleiro titular dos títulos mundiais de 1958 e 1962."],
        ["Cafu", "LD", "Três finais de Copa, dois títulos, capitão do penta e recordista de jogos pela Seleção."],
        ["Lúcio", "ZAG", "Campeão mundial em 2002, campeão da Copa das Confederações de 2005 e 2009 e mais de 100 jogos."],
        ["Aldair", "ZAG", "Campeão mundial em 1994 e titular também em 1998."],
        ["Nílton Santos", "LE", "A \"Enciclopédia do Futebol\". Bicampeão mundial em 1958 e 1962; pioneiro do lateral que ataca."],
        ["Dunga", "VOL", "Capitão do tetra em 1994, campeão da Copa América (1989 e 1997) e da Copa das Confederações de 1997."],
        ["Didi", "VOL", "Cérebro do time campeão de 1958, bicampeão mundial e criador da \"folha-seca\"."],
        ["Garrincha", "PD", "Bicampeão mundial e o grande nome da Copa de 1962."],
        ["Pelé", "MEI", "Tricampeão mundial (1958, 1962 e 1970)."],
        ["Ronaldinho", "PE", "Campeão mundial em 2002, duas vezes melhor do mundo pela FIFA (2004 e 2005) e Bola de Ouro de 2005."],
        ["Ronaldo", "ATA", "Bicampeão mundial, artilheiro da Copa de 2002 e três vezes melhor do mundo pela FIFA."]
      ]
    },
    {
      nome: "Reserva", formacao: "4-2-3-1", tecnico: ["Luiz Felipe Scolari", "Técnico do penta em 2002 e campeão da Copa das Confederações de 2013."], cap: "Carlos Alberto Torres",
      jog: [
        ["Taffarel", "GOL", "Campeão mundial em 1994 e da Copa América em 1989 e 1997."],
        ["Carlos Alberto Torres", "LD", "Capitão do tri em 1970, com gol na final contra a Itália."],
        ["Thiago Silva", "ZAG", "Capitão por quase uma década, campeão da Copa das Confederações de 2013 e da Copa América de 2019."],
        ["Bellini", "ZAG", "Capitão do título de 1958 e autor do gesto de erguer a taça acima da cabeça."],
        ["Roberto Carlos", "LE", "Campeão mundial em 2002, da Copa América em 1997 e 1999 e vice-melhor do mundo pela FIFA em 1997."],
        ["Zito", "VOL", "Bicampeão mundial, com gol na final de 1962."],
        ["Gérson", "VOL", "O \"Canhotinha de Ouro\". Tricampeão em 1970, com gol na final."],
        ["Jairzinho", "PD", "Tricampeão em 1970 marcando em todos os jogos da Copa."],
        ["Zico", "MEI", "O \"Galinho de Quintino\". Um dos maiores artilheiros da Seleção e símbolo da geração de 1982."],
        ["Neymar", "PE", "Maior artilheiro da história da Seleção, ouro olímpico em 2016 e melhor jogador da Copa das Confederações de 2013."],
        ["Romário", "ATA", "Melhor jogador da Copa de 1994 e campeão da Copa América em 1989 e 1997."]
      ]
    },
    {
      nome: "Suplente 1", formacao: "4-2-3-1", tecnico: ["Carlos Alberto Parreira", "Técnico do tetra em 1994, campeão da Copa América de 2004 e da Copa das Confederações de 2005."], cap: "Mauro Ramos",
      jog: [
        ["Marcos", "GOL", "Goleiro titular do penta em 2002."],
        ["Djalma Santos", "LD", "Bicampeão mundial (1958 e 1962); entrou na seleção da Copa de 1958 jogando apenas a final."],
        ["Mauro Ramos", "ZAG", "Capitão do bi em 1962."],
        ["Domingos da Guia", "ZAG", "O \"Divino Mestre\", considerado o maior zagueiro brasileiro da primeira metade do século XX. Disputou a Copa de 1938."],
        ["Júnior", "LE", "O \"Maestro\". Titular nas Copas de 1982 e 1986."],
        ["Gilberto Silva", "VOL", "Campeão mundial em 2002, da Copa América de 2007 e das Copas das Confederações de 2005 e 2009."],
        ["Falcão", "VOL", "O \"Rei de Roma\". Bola de Prata da Copa de 1982."],
        ["Bebeto", "PD", "Campeão mundial em 1994, em dupla histórica com Romário."],
        ["Kaká", "MEI", "Campeão mundial em 2002, Bola de Ouro e melhor do mundo pela FIFA em 2007."],
        ["Rivaldo", "PE", "Campeão mundial em 2002, Bola de Ouro e melhor do mundo pela FIFA em 1999, campeão e melhor jogador da Copa América de 1999."],
        ["Tostão", "ATA", "Tricampeão em 1970, peça central do ataque daquela Copa."]
      ]
    },
    {
      nome: "Suplente 2", formacao: "4-2-3-1", tecnico: ["Vicente Feola", "Técnico do primeiro título mundial, em 1958."], cap: "Sócrates",
      jog: [
        ["Alisson", "GOL", "Campeão da Copa América de 2019 e melhor goleiro do mundo (The Best FIFA e Troféu Yashin) em 2019."],
        ["Daniel Alves", "LD", "Campeão da Copa América em 2007 e 2019 (melhor jogador em 2019), das Confederações em 2009 e 2013 e ouro olímpico em 2021."],
        ["Marquinhos", "ZAG", "Ouro olímpico em 2016, campeão da Copa América de 2019 e capitão da Seleção."],
        ["Brito", "ZAG", "Zagueiro titular do tri em 1970."],
        ["Branco", "LE", "Campeão mundial em 1994, com o gol de falta contra a Holanda nas quartas de final."],
        ["Clodoaldo", "VOL", "Tricampeão em 1970; seus dribles iniciaram a jogada do quarto gol da final."],
        ["Sócrates", "VOL", "O \"Doutor\". Capitão da Seleção de 1982."],
        ["Julinho Botelho", "PD", "Titular na Copa de 1954 e ídolo da Fiorentina."],
        ["Zizinho", "MEI", "Apontado como o melhor jogador da Copa de 1950 e ídolo de infância de Pelé."],
        ["Rivellino", "PE", "Tricampeão em 1970, dono do elástico e de uma das patadas mais fortes da história."],
        ["Leônidas da Silva", "ATA", "O \"Diamante Negro\". Artilheiro da Copa de 1938."]
      ]
    }
  ],
  outros: [["Friedenreich", "ATA"], ["Ademir de Menezes", "ATA"], ["Vavá", "ATA"], ["Zagallo", "PE"], ["Pepe", "PE"], ["Amarildo", "ATA"], ["Careca", "ATA"], ["Adriano", "ATA"], ["Vinícius Júnior", "PE"], ["Casemiro", "VOL"], ["Mauro Silva", "VOL"], ["Toninho Cerezo", "VOL"], ["Éder", "PE"], ["Leandro", "LD"], ["Jorginho", "LD"], ["Marcelo", "LE"], ["Leonardo", "LE"], ["Everaldo", "LE"], ["Juan", "ZAG"], ["Oscar", "ZAG"], ["Luís Pereira", "ZAG"], ["Mozer", "ZAG"], ["Ricardo Rocha", "ZAG"], ["Júlio César", "GOL"], ["Dida", "GOL"], ["Émerson Leão", "GOL"], ["Félix", "GOL"], ["Castilho", "GOL"], ["Barbosa", "GOL"]],
  outrosTec: ["Telê Santana", "Aymoré Moreira", "Tite", "Flávio Costa"],
  nota: "A Seleção serve de modelo para todos os times: quatro formações completas, cada uma com treinador, mais o capitão de todos os tempos, os três maiores craques e outros nomes que poderiam estar nas seleções."
};
