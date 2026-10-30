/* Lendas do Futebol Brasileiro — site oficial, Instagram e torcida de cada time.
   site e instagram: conferidos no próprio site oficial do clube (o link do Instagram vem do site quando ele o publica).
   torcida: percentual dos brasileiros que torcem para o clube, nas pesquisas nacionais mais recentes.
   Clubes que não aparecem nessas pesquisas ficam sem número. */
window.LFB = window.LFB || {};
window.LFB.pesquisas = {
  ipec: { nome: "Ipsos-Ipec / O Globo", data: "junho de 2025", nota: "2.000 entrevistas em 132 municípios, margem de erro de 2 pontos", url: "https://www.cnnbrasil.com.br/esportes/futebol/pesquisa-revela-ranking-das-maiores-torcidas-do-brasil-em-2025-veja/" },
  atlas: { nome: "AtlasIntel / ge", data: "2025", nota: "", url: "https://www.itatiaia.com.br/esportes/futebol/futebol-nacional/nova-pesquisa-aponta-maiores-torcidas-do-brasil-em-2025-veja-ranking/" }
};
window.LFB.meta = {
  "selecao": { site: "https://www.cbf.com.br", instagram: "brasil" },
  "corinthians": { site: "https://www.corinthians.com.br", instagram: "corinthians", torcida: { ipec: 11.9, atlas: 13.9 } },
  "palmeiras": { site: "https://www.palmeiras.com.br", instagram: "palmeiras", torcida: { ipec: 6.5, atlas: 7.8 } },
  "santos": { site: "https://www.santosfc.com.br", instagram: "santosfc", torcida: { ipec: 2.0, atlas: 3.1 } },
  "sao-paulo": { site: "https://www.saopaulofc.net", instagram: "saopaulofc", torcida: { ipec: 6.4, atlas: 10.1 } },
  "flamengo": { site: "https://www.flamengo.com.br", instagram: "flamengo", torcida: { ipec: 21.2, atlas: 20.6 } },
  "fluminense": { site: "https://www.fluminense.com.br", instagram: "fluminensefc", torcida: { ipec: 0.9, atlas: 2.6 } },
  "botafogo": { site: "https://www.botafogo.com.br", instagram: "botafogo", torcida: { ipec: 1.5, atlas: 3.6 } },
  "vasco": { site: "https://vasco.com.br", instagram: "vascodagama", torcida: { ipec: 3.4, atlas: 6.0 } },
  "cruzeiro": { site: "https://www.cruzeiro.com.br", instagram: "cruzeiro", torcida: { ipec: 2.3, atlas: 6.0 } },
  "atletico-mg": { site: "https://atletico.com.br", instagram: "atletico", torcida: { ipec: 2.3, atlas: 3.6 } },
  "gremio": { site: "https://gremio.net", instagram: "gremio", torcida: { ipec: 3.0, atlas: 4.6 } },
  "internacional": { site: "https://internacional.com.br", instagram: "scinternacional", torcida: { ipec: 1.7, atlas: 3.3 } },
  "bahia": { site: "https://www.esporteclubebahia.com.br", instagram: "ecbahia", torcida: { ipec: 2.2, atlas: 2.4 } },
  "vitoria": { site: "https://ecvitoria.com.br", instagram: "ecvitoria", torcida: { ipec: 0.8, atlas: 1.7 } },
  "sport": { site: "https://www.sportrecife.com.br", instagram: "sportrecife", torcida: { ipec: 1.3, atlas: 2.4 } },
  "santa-cruz": { site: "https://www.santacruzpe.com.br", torcida: { ipec: 0.6 } },
  "nautico": { site: "https://www.nautico-pe.com.br", instagram: "nauticope" },
  "ceara": { site: "https://www.cearasc.com", instagram: "cearasc", torcida: { ipec: 0.7, atlas: 1.1 } },
  "fortaleza": { site: "https://fortaleza1918.com.br", instagram: "fortalezaec", torcida: { ipec: 0.7, atlas: 1.0 } },
  "athletico-pr": { site: "https://athletico.com.br", instagram: "athleticoparanaense", torcida: { ipec: 0.5 } },
  "coritiba": { site: "https://www.coritiba.com.br", instagram: "coritiba" },
  "remo": { site: "https://www.clubedoremo.com.br", instagram: "clubedoremo", torcida: { ipec: 0.5 } },
  "paysandu": { site: "https://www.paysandu.com.br", instagram: "paysandu" },
  "bragantino": { site: "https://www.redbullbragantino.com/br-pt", instagram: "redbullbragantino" },
  "juventude": { site: "https://www.juventude.com.br" },
  "chapecoense": { site: "https://chapecoense.com", instagram: "chapecoensereal" },
  "criciuma": { site: "https://www.criciuma.com.br", instagram: "criciumaoficial" },
  "avai": { site: "https://avai.com.br", instagram: "avaifc" },
  "figueirense": { site: "https://www.figueirense.com.br" },
  "mirassol": { site: "https://mirassolfc.com.br", instagram: "mirassolfc" },
  "portuguesa": { site: "https://www.portuguesa.com.br", instagram: "portuguesaclube" },
  "guarani": { site: "https://guaranifc.com.br", instagram: "guaranifc_oficial" },
  "ponte-preta": { site: "https://pontepreta.com.br", instagram: "pontepretaoficial" },
  "goias": { site: "https://www.goiasec.com.br" },
  "atletico-go": { site: "https://www.atleticogoianiense.com.br" },
  "vila-nova": { site: "https://www.vilanovafc.com.br" },
  "crb": { site: "https://www.crb.com.br" }
};
