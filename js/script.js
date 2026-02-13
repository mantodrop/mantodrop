const WHATSAPP = "5513997582072";

/* =========================
   CONTROLE DE NAVEGAÇÃO
========================= */

let pilha = ["paises"];

function esconderTudo() {
  document.getElementById("telaPaises").classList.add("hidden");
  document.getElementById("telaCategorias").classList.add("hidden");
  document.getElementById("telaProdutos").classList.add("hidden");
}

function voltar() {
  pilha.pop();
  esconderTudo();

  const tela = pilha[pilha.length - 1] || "paises";

  if (tela === "paises") {
    document.getElementById("telaPaises").classList.remove("hidden");
  }
  if (tela === "categorias") {
    document.getElementById("telaCategorias").classList.remove("hidden");
  }
  if (tela === "produtos") {
    document.getElementById("telaProdutos").classList.remove("hidden");
  }
}

/* =========================
   DADOS
========================= */

const ligas = {
  "Inglaterra": ["Premier League"],
  "Espanha": ["La Liga"],
  "Itália": ["Serie A"],
  "Alemanha": ["Bundesliga"],
  "França": ["Ligue 1"],
  "Holanda": ["Eredivisie"],
  "Portugal": ["Liga Portugal"],
  "Argentina": ["Liga Argentina"],
  "México": ["Liga MX"],
  "Estados Unidos": ["MLS"],
  "Arábia Saudita": ["Saudi Pro League"],
  "NBA" : ["NBA"]
};

const imagemLiga = {
  "Premier League": "img/ligas/premier-league.png",
  "La Liga": "img/ligas/la-liga.png",
  "Serie A": "img/ligas/serie-a.png",
  "Bundesliga": "img/ligas/bundesliga.png",
  "Ligue 1": "img/ligas/ligue-1.png",
  "Eredivisie": "img/ligas/eredivisie.png",
  "Liga Portugal": "img/ligas/liga-portugal.png",
  "Liga Argentina": "img/ligas/liga-argentina.png",
  "Liga MX": "img/ligas/liga-mx.png",
  "MLS": "img/ligas/mls.png",
  "Saudi Pro League": "img/ligas/saudi-pro-league.png",
  "Brasileirão": "img/ligas/brasileirao.png",
  "Seleções": "img/ligas/copadomundo.png",
  "NBA": "img/ligas/nba.png"
};

const timesPorLiga = {
  "Brasileirão": ["Flamengo", "Palmeiras", "Corinthians", "São Paulo", "Santos", "Fluminense", "Vasco", "Botafogo", "Cruzeiro", "Atlético-MG", "Grêmio", "Internacional", "Remo"],
  "Seleção Brasileira": ["Seleção Brasileira"],
  "Premier League": ["Manchester City", "Manchester United", "Liverpool", "Chelsea", "Arsenal", "Tottenham", "Newcastle", "Aston Villa", "West Ham"],
  "La Liga": ["Real Madrid", "Barcelona", "Atlético de Madrid"],
  "Serie A": ["Juventus", "Milan", "Inter de Milão", "Roma", "Napoli"],
  "Bundesliga": ["Bayern de Munique", "Borussia Dortmund"],
  "Ligue 1": ["PSG", "Lyon", "Marseille"],
  "Eredivisie": ["Ajax", "PSV"],
  "Liga Portugal": ["Benfica", "Porto", "Sporting"],
  "Liga Argentina": ["Boca Juniors", "River Plate"],
  "Liga MX": ["Tigres", "Monterrey"],
  "MLS": ["Inter Miami", "LA Galaxy"],
  "Saudi Pro League": ["Al Nassr", "Al Hilal", "Al Ahli"],
  "NBA": ["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","Los Angeles Clippers","Los Angeles Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia 76ers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"],
  
 "Seleções": ["Argentina", "Brasil", "Portugal", "Alemanha", "Espanha", "Arábia Saudita", "EUA", "França", "Holanda", "Inglaterra", "México", "Uruguai", "Colômbia", "Coreia do Sul", "Japão", "Noruega", "Bélgica", "Senegal"]

};

const escudoTime = {
  "Flamengo": "img/times/flamengo.png",
  "Palmeiras": "img/times/palmeiras.png",
  "Corinthians": "img/times/corinthians.png",
  "São Paulo": "img/times/sao-paulo.png",
  "Santos" : "img/times/santos.png",
  "Fluminense": "img/times/fluminense.png",
  "Vasco": "img/times/vasco.png",
  "Botafogo": "img/times/botafogo.png",
  "Cruzeiro": "img/times/cruzeiro.png",
  "Atlético-MG": "img/times/atletico-mineiro.png",
  "Grêmio": "img/times/gremio.png",
  "Internacional": "img/times/internacional.png",
  "Remo": "img/times/remo.png",
  "Seleção Brasileira": "img/times/brasil.png",

  "Manchester United" : "img/times/man-united.png",
  "Manchester City": "img/times/man-city.png",
  "Liverpool": "img/times/liverpool.png",
  "Chelsea": "img/times/chelsea.png",
  "Arsenal": "img/times/arsenal.png",
  "Tottenham": "img/times/tottenham.png",
  "Newcastle": "img/times/newcastle.png",
  "Aston Villa": "img/times/aston-villa.png",
  "West Ham": "img/times/west-ham.png",

  "Real Madrid": "img/times/real-madrid.png",
  "Barcelona": "img/times/barcelona.png",
  "Atlético de Madrid": "img/times/atletico-madrid.png",

  "Juventus": "img/times/juventus.png",
  "Milan": "img/times/milan.png",
  "Inter de Milão": "img/times/inter.png",
  "Roma": "img/times/roma.png",
  "Napoli": "img/times/napoli.png",

  "Bayern de Munique": "img/times/bayern.png",
  "Borussia Dortmund": "img/times/borussia-dortmund.png",

  "PSG": "img/times/psg.png",
  "Lyon": "img/times/lyon.png",
  "Marseille": "img/times/marseille.png",

  "Ajax": "img/times/ajax.png",
  "PSV": "img/times/psv.png",

  "Benfica": "img/times/benfica.png",
  "Porto": "img/times/porto.png",
  "Sporting": "img/times/sporting.png",

  "Boca Juniors": "img/times/boca-juniors.png",
  "River Plate": "img/times/river-plate.png",

  "Tigres": "img/times/tigres.png",
  "Monterrey": "img/times/monterrey.png",

  "Inter Miami": "img/times/inter-miami.png",
  "LA Galaxy": "img/times/la-galaxy.png",

  "Al Nassr": "img/times/al-nassr.png",
  "Al Hilal": "img/times/al-hilal.png",
  "Al Ahli": "img/times/al-ahli.png",

  "Atlanta Hawks": "img/times/nba/atlanta-hawks.png",
"Boston Celtics": "img/times/nba/boston-celtics.png",
"Brooklyn Nets": "img/times/nba/brooklyn-nets.png",
"Charlotte Hornets": "img/times/nba/charlotte-hornets.png",
"Chicago Bulls": "img/times/nba/chicago-bulls.png",
"Cleveland Cavaliers": "img/times/nba/cleveland-cavaliers.png",
"Dallas Mavericks": "img/times/nba/dallas-mavericks.png",
"Denver Nuggets": "img/times/nba/denver-nuggets.png",
"Detroit Pistons": "img/times/nba/detroit-pistons.png",
"Golden State Warriors": "img/times/nba/golden-state-warriors.png",
"Houston Rockets": "img/times/nba/houston-rockets.png",
"Indiana Pacers": "img/times/nba/indiana-pacers.png",
"Los Angeles Clippers": "img/times/nba/los-angeles-clippers.png",
"Los Angeles Lakers": "img/times/nba/los-angeles-lakers.png",
"Memphis Grizzlies": "img/times/nba/memphis-grizzlies.png",
"Miami Heat": "img/times/nba/miami-heat.png",
"Milwaukee Bucks": "img/times/nba/milwaukee-bucks.png",
"Minnesota Timberwolves": "img/times/nba/minnesota-timberwolves.png",
"New Orleans Pelicans": "img/times/nba/new-orleans-pelicans.png",
"New York Knicks": "img/times/nba/new-york-knicks.png",
"Oklahoma City Thunder": "img/times/nba/oklahoma-city-thunder.png",
"Orlando Magic": "img/times/nba/orlando-magic.png",
"Philadelphia 76ers": "img/times/nba/philadelphia-76ers.png",
"Phoenix Suns": "img/times/nba/phoenix-suns.png",
"Portland Trail Blazers": "img/times/nba/portland-trail-blazers.png",
"Sacramento Kings": "img/times/nba/sacramento-kings.png",
"San Antonio Spurs": "img/times/nba/san-antonio-spurs.png",
"Toronto Raptors": "img/times/nba/toronto-raptors.png",
"Utah Jazz": "img/times/nba/utah-jazz.png",
"Washington Wizards": "img/times/nba/washington-wizards.png",


  "Argentina": "img/times/argentina.png",
  "Brasil": "img/times/brasil.png",
  "Portugal": "img/times/portugal.png",
  "Alemanha": "img/times/alemanha.png",
  "Arábia Saudita": "img/times/arabia-saudita.png",
  "EUA": "img/times/eua.png",
  "Espanha": "img/times/espanha.png",
  "França": "img/times/franca.png",
  "Holanda": "img/times/holanda.png",
  "Inglaterra" : "img/times/inglaterra.png",
  "México": "img/times/mexico.png",
  "Uruguai": "img/times/uruguai.png",
"Colômbia": "img/times/colombia.png",
"Coreia do Sul": "img/times/coreiadosul.png",
"Japão": "img/times/japao.png",
"Noruega": "img/times/noruega.png",
"Bélgica": "img/times/belgica.png",
"Senegal": "img/times/senegal.png",
};

const produtos = {
    /* ================= BRASIL ================= */
   "Seleção Brasileira": [
    { nome: "Brasil Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremium.jpg" },
    { nome: "Brasil Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/awaypremium.jpg" },
    { nome: "Brasil Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasica.jpg" },
    { nome: "Brasil Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/awaybasica.jpg" },
    { nome: "Brasil Home 23/24 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremium2024.jpg" },
    { nome: "Brasil Home 23/24 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasica2024.jpg" },
    { nome: "Brasil Away 23/24 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/awaypremium2024.jpg" },
    { nome: "Brasil Away 23/24 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/awaybasica2024.jpg" },
    { nome: "Brasil Retrô 1998 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/brasil/retrohome1998.jpg" },
    { nome: "Brasil Retrô 1998 Away",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/retroaway1998.jpg" },
    { nome: "Brasil Retrô 2002 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/brasil/retrohome2002.jpg" },
    { nome: "Brasil Retrô 2002 Away",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/retroaway2002.jpg" },
    { nome: "Brasil Home 26/27 Premium Feminina",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremiumfeminina.jpg" },
    { nome: "Brasil Home 26/27 Básica Feminina",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasicafeminina.jpg" }
  ],

    "Flamengo": [
      { nome: "Flamengo Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/flamengo/homepremium.jpg" },
      { nome: "Flamengo Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/flamengo/awaypremium.jpg" },
      { nome: "Flamengo Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/flamengo/homebasica.jpg" },
      { nome: "Flamengo Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/flamengo/awaybasica.jpg" },
      { nome: "Flamengo Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/flamengo/thirdpremium.jpg" },
      { nome: "Flamengo Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/flamengo/thirdbasica.jpg" }

    ],  
    "Palmeiras": [
      { nome: "Palmeiras Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/palmeiras/homepremium.jpg" },
      { nome: "Palmeiras Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/palmeiras/awaypremium.jpg" },
      { nome: "Palmeiras Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/palmeiras/homebasica.jpg" },
      { nome: "Palmeiras Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/palmeiras/awaybasica.jpg" },
      { nome: "Palmeiras Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/palmeiras/thirdpremium.jpg" },
      { nome: "Palmeiras Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/palmeiras/thirdbasica.jpg" }
    ],
    "Corinthians": [
      { nome: "Corinthians Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/corinthians/homepremium.jpg" },
      { nome: "Corinthians Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/corinthians/awaypremium.jpg" },
      { nome: "Corinthians Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/corinthians/homebasica.jpg" },
      { nome: "Corinthians Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/corinthians/awaybasica.jpg" },
      { nome: "Corinthians 25/26 Laranja Premium",  preco: "R$79.90", img: "img/produtos/corinthians/laranjapremium.jpg" },
      { nome: "Corinthians 25/26 Laranja Básica",  preco: "R$49.90", img: "img/produtos/corinthians/laranjabasica.jpg" },
      { nome: "Corinthians 24/25 Roxa",  preco: "R$79.90", img: "img/produtos/corinthians/roxa.jpg"},
      { nome: "Corinthians 24/25 Preta",  preco: "R$79.90", img: "img/produtos/corinthians/preta.jpg"},
    ],
    "São Paulo": [
      { nome: "São Paulo Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/sao-paulo/homepremium.jpg" },
      { nome: "São Paulo Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/sao-paulo/awaypremium.jpg" },
      { nome: "São Paulo Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/sao-paulo/homebasica.jpg" },
      { nome: "São Paulo Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/sao-paulo/awaybasica.jpg" },
      { nome: "São Paulo Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/sao-paulo/thirdpremium.jpg" },
      { nome: "São Paulo Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/sao-paulo/thirdbasica.jpg" } 
    ],
    "Santos": [
      { nome: "Santos Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/santos/homepremium.jpg" },
      { nome: "Santos Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/santos/awaypremium.jpg" },
      { nome: "Santos Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/santos/homebasica.jpg" },
      { nome: "Santos Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/santos/awaybasica.jpg" },
      { nome: "Santos Third Azul 25/26 Premium",  preco: "R$79.90", img: "img/produtos/santos/thirdazulpremium.jpg" },
      { nome: "Santos Third Azul 25/26 Básica",  preco: "R$49.90", img: "img/produtos/santos/thirdazulbasica.jpg" },
      { nome: "Santos Retrô 2012 Home",  preco: "R$79.90", img: "img/produtos/santos/retrohome.jpg" },
      { nome: "Santos Retrô 2012 Away",  preco: "R$79.90", img: "img/produtos/santos/retroaway.jpg" },
      {nome: "Santos Charlie Brown Jr Preta",  preco: "R$79.90", img: "img/produtos/santos/cbjr-preta.jpg"},
      {nome: "Santos Charlie Brown Jr Branca",  preco: "R$79.90", img: "img/produtos/santos/cbjr-branca.jpg"},
    ],
    "Fluminense": [
      { nome: "Fluminense Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/fluminense/homepremium.jpg" },
      { nome: "Fluminense Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/fluminense/awaypremium.jpg" },
      { nome: "Fluminense Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/fluminense/homebasica.jpg" },
      { nome: "Fluminense Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/fluminense/awaybasica.jpg" },
      { nome: "Fluminense Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/fluminense/thirdpremium.jpg" },
      { nome: "Fluminense Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/fluminense/thirdbasica.jpg" }
    ],
    "Vasco": [
  { nome: "Vasco Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/vasco/homepremium.jpg" },
  { nome: "Vasco Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/vasco/awaypremium.jpg" },
  { nome: "Vasco Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/vasco/homebasica.jpg" },
  { nome: "Vasco Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/vasco/awaybasica.jpg" }
],

"Botafogo": [
  { nome: "Botafogo Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/botafogo/homepremium.jpg" },
  { nome: "Botafogo Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/botafogo/awaypremium.jpg" },
  { nome: "Botafogo Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/botafogo/homebasica.jpg" },
  { nome: "Botafogo Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/botafogo/awaybasica.jpg" }
],

"Cruzeiro": [
  { nome: "Cruzeiro Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/cruzeiro/homepremium.jpg" },
  { nome: "Cruzeiro Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/cruzeiro/awaypremium.jpg" },
  { nome: "Cruzeiro Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/cruzeiro/homebasica.jpg" },
  { nome: "Cruzeiro Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/cruzeiro/awaybasica.jpg" },
  { nome: "Cruzeiro Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/cruzeiro/thirdpremium.jpg" },
  { nome: "Cruzeiro Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/cruzeiro/thirdbasica.jpg" }
],

"Atlético-MG": [
  { nome: "Atlético-MG Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/atletico-mg/homepremium.jpg" },
  { nome: "Atlético-MG Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/atletico-mg/awaypremium.jpg" },
  { nome: "Atlético-MG Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/atletico-mg/homebasica.jpg" },
  { nome: "Atlético-MG Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/atletico-mg/awaybasica.jpg" },
  { nome: "Atlético-MG Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/atletico-mg/thirdpremium.jpg" },
  { nome: "Atlético-MG Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/atletico-mg/thirdbasica.jpg" }
],

"Grêmio": [
  { nome: "Grêmio Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/gremio/homepremium.jpg" },
  { nome: "Grêmio Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/gremio/awaypremium.jpg" },
  { nome: "Grêmio Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/gremio/homebasica.jpg" },
  { nome: "Grêmio Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/gremio/awaybasica.jpg" }
],

"Internacional": [
  { nome: "Internacional Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/internacional/homepremium.jpg" },
  { nome: "Internacional Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/internacional/awaypremium.jpg" },
  { nome: "Internacional Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/internacional/homebasica.jpg" },
  { nome: "Internacional Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/internacional/awaybasica.jpg" }
],

"Remo": [
  { nome: "Remo Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/remo/homepremium.jpg" },
  { nome: "Remo Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/remo/awaypremium.jpg" },
  { nome: "Remo Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/remo/homebasica.jpg" },
  { nome: "Remo Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/remo/awaybasica.jpg" },
  { nome: "Remo Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/remo/thirdpremium.jpg" },
  { nome: "Remo Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/remo/thirdbasica.jpg" },
],
/* ================= INGLATERRA ================= */
"Manchester United": [
{ nome: "Manchester United Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/man-united/homepremium.jpg" },
{ nome: "Manchester United Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/man-united/awaypremium.jpg" },
{ nome: "Manchester United Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/man-united/homebasica.jpg" },
{ nome: "Manchester United Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/man-united/awaybasica.jpg" },
{ nome: "Manchester United Retrô 2008",  preco: "R$79.90", img: "img/produtos/man-united/retro.jpg" },
],

"Manchester City": [
{ nome: "Manchester City Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/man-city/homepremium.jpg" },
{ nome: "Manchester City Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/man-city/awaypremium.jpg" },
{ nome: "Manchester City Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/man-city/homebasica.jpg" },
{ nome: "Manchester City Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/man-city/awaybasica.jpg" }
],

"Liverpool": [
{ nome: "Liverpool Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/liverpool/homepremium.jpg" },
{ nome: "Liverpool Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/liverpool/awaypremium.jpg" },
{ nome: "Liverpool Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/liverpool/homebasica.jpg" },
{ nome: "Liverpool Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/liverpool/awaybasica.jpg" }
],

"Chelsea": [
{ nome: "Chelsea Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/chelsea/homepremium.jpg" },
{ nome: "Chelsea Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/chelsea/awaypremium.jpg" },
{ nome: "Chelsea Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/chelsea/homebasica.jpg" },
{ nome: "Chelsea Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/chelsea/awaybasica.jpg" },
{ nome: "Chelsea Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/chelsea/third.jpg" },
{ nome: "Chelsea Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/chelsea/thirdbasica.jpg" }
],

"Arsenal": [
{ nome: "Arsenal Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/arsenal/homepremium.jpg" },
{ nome: "Arsenal Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/arsenal/awaypremium.jpg" },
{ nome: "Arsenal Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/arsenal/homebasica.jpg" },
{ nome: "Arsenal Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/arsenal/awaybasica.jpg" },
{ nome: "Arsenal Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/arsenal/third.jpg" },
{ nome: "Arsenal Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/arsenal/thirdbasica.jpg" }
],

"Tottenham": [
  { nome: "Tottenham Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/tottenham/homepremium.jpg" },
  { nome: "Tottenham Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/tottenham/awaypremium.jpg" },
  { nome: "Tottenham Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/tottenham/homebasica.jpg" },
  { nome: "Tottenham Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/tottenham/awaybasica.jpg" }
],

"Newcastle": [
  { nome: "Newcastle Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/newcastle/homepremium.jpg" },
  { nome: "Newcastle Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/newcastle/awaypremium.jpg" },
  { nome: "Newcastle Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/newcastle/homebasica.jpg" },
  { nome: "Newcastle Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/newcastle/awaybasica.jpg" }
],

"Aston Villa": [
  { nome: "Aston Villa Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/aston-villa/homepremium.jpg" },
  { nome: "Aston Villa Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/aston-villa/awaypremium.jpg" },
  { nome: "Aston Villa Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/aston-villa/homebasica.jpg" },
  { nome: "Aston Villa Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/aston-villa/awaybasica.jpg" }
],

"West Ham": [
  { nome: "West Ham Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/west-ham/homepremium.jpg" },
  { nome: "West Ham Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/west-ham/awaypremium.jpg" },
  { nome: "West Ham Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/west-ham/homebasica.jpg" },
  { nome: "West Ham Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/west-ham/awaybasica.jpg" }
],


/* ================= ESPANHA ================= */
"Real Madrid": [
{ nome: "Real Madrid Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/real-madrid/homepremium.jpg" },
{ nome: "Real Madrid Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/real-madrid/awaypremium.jpg" },
{ nome: "Real Madrid Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/real-madrid/homebasica.jpg" },
{ nome: "Real Madrid Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/real-madrid/awaybasica.jpg" },
{ nome: "Real Madrid Retrô Branca 17/18",  preco: "R$79.90", img: "img/produtos/real-madrid/retro1.jpg" },
{ nome: "Real Madrid Retrô Azul 17/18",  preco: "R$79.90", img: "img/produtos/real-madrid/retro2.jpg" },
{ nome: "Real Madrid Retrô 16/17",  preco: "R$79.90", img: "img/produtos/real-madrid/retro3.jpg" }
],

"Barcelona": [
{ nome: "Barcelona Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/barcelona/homepremium.jpg" },
{ nome: "Barcelona Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/barcelona/awaypremium.jpg" },
{ nome: "Barcelona Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/barcelona/homebasica.jpg" },
{ nome: "Barcelona Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/barcelona/awaybasica.jpg" },
{ nome: "Travis Scott x Barcelona 24/25",  preco: "R$79.90", img: "img/produtos/barcelona/preta1.jpg" },
{ nome: "Barcelona Third 24/25",  preco: "R$79.90", img: "img/produtos/barcelona/preta2.jpg" },
{ nome: "Barcelona Retrô 98/99",  preco: "R$79.90", img: "img/produtos/barcelona/retro1999.jpg" },
{ nome: "Barcelona Retrô 14/15",  preco: "R$79.90", img: "img/produtos/barcelona/retro.jpg" },
{ nome: "Barcelona Retrô 06/07",  preco: "R$79.90", img: "img/produtos/barcelona/retro2006.jpg" },
{ nome: "Barcelona Retrô 08/09",  preco: "R$79.90", img: "img/produtos/barcelona/retro2008.jpg" },
],

"Atlético de Madrid": [
{ nome: "Atlético de Madrid Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/atletico-madrid/homepremium.jpg" },
{ nome: "Atlético de Madrid Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/atletico-madrid/awaypremium.jpg" },
{ nome: "Atlético de Madrid Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/atletico-madrid/homebasica.jpg" },
{ nome: "Atlético de Madrid Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/atletico-madrid/awaybasica.jpg" }
],
    /* ================= ITÁLIA ================= */
"Juventus": [
    { nome: "Juventus Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/juventus/homepremium.jpg" },
    { nome: "Juventus Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/juventus/awaypremium.jpg" },
    { nome: "Juventus Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/juventus/homebasica.jpg" },
    { nome: "Juventus Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/juventus/awaybasica.jpg" },
    { nome: "Juventus Third 22/23",  preco: "R$79.90", img: "img/produtos/juventus/camisa2023.jpg" },
  ],
  
  "Milan": [
    { nome: "Milan Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/milan/homepremium.jpg" },
    { nome: "Milan Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/milan/awaypremium.jpg" },
    { nome: "Milan Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/milan/homebasica.jpg" },
    { nome: "Milan Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/milan/awaybasica.jpg" },
    { nome: "Milan Retrô 06/07",  preco: "R$79.90", img: "img/produtos/milan/retro.jpg" },
    { nome: "Milan Third 13/14",  preco: "R$79.90", img: "img/produtos/milan/third.jpg" }
  ],
  
  "Inter de Milão": [
    { nome: "Inter de Milão Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/inter/homepremium.jpg" },
    { nome: "Inter de Milão Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/inter/awaypremium.jpg" },
    { nome: "Inter de Milão Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/inter/homebasica.jpg" },
    { nome: "Inter de Milão Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/inter/awaybasica.jpg" },
    { nome: "Inter de Milão Retrô 96/97",  preco: "R$79.90", img: "img/produtos/inter/retro1997.jpg" },
    { nome: "Inter de Milão Retrô 09/10",  preco: "R$79.90", img: "img/produtos/inter/retro2010.jpg" }
  ],
  
  "Roma": [
    { nome: "Roma Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/roma/homepremium.jpg" },
    { nome: "Roma Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/roma/awaypremium.jpg" },
    { nome: "Roma Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/roma/homebasica.jpg" },
    { nome: "Roma Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/roma/awaybasica.jpg" },
    { nome: "Roma Retrô 1999/2000",  preco: "R$79.90", img: "img/produtos/roma/retro.jpg" }
  ],

  "Napoli": [
    { nome: "Napoli Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/napoli/homepremium.jpg" },
    { nome: "Napoli Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/napoli/awaypremium.jpg" },
    { nome: "Napoli Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/napoli/homebasica.jpg" },
    { nome: "Napoli Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/napoli/awaybasica.jpg" }
  ],
  
  /* ================= ALEMANHA ================= */
  "Bayern de Munique": [
    { nome: "Bayern Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/bayern/homepremium.jpg" },
    { nome: "Bayern Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/bayern/awaypremium.jpg" },
    { nome: "Bayern Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/bayern/homebasica.jpg" },
    { nome: "Bayern Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/bayern/awaybasica.jpg" }
  ],
  
  "Borussia Dortmund": [
    { nome: "Dortmund Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/dortmund/homepremium.jpg" },
    { nome: "Dortmund Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/dortmund/awaypremium.jpg" },
    { nome: "Dortmund Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/dortmund/homebasica.jpg" },
    { nome: "Dortmund Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/dortmund/awaybasica.jpg" }
  ],
  
  /* ================= FRANÇA ================= */
  "PSG": [
    { nome: "PSG Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/psg/homepremium.jpg" },
    { nome: "PSG Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/psg/awaypremium.jpg" },
    { nome: "PSG Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/psg/homebasica.jpg" },
    { nome: "PSG Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/psg/awaybasica.jpg" },
    { nome: "PSG Retrô 17/18",  preco: "R$79.90", img: "img/produtos/psg/retro.jpg" },
    { nome: "PSG Retrô 02/03",  preco: "R$79.90", img: "img/produtos/psg/retro2002.jpg" }
  ],
  
  "Lyon": [
    { nome: "Lyon Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/lyon/homepremium.jpg" },
    { nome: "Lyon Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/lyon/awaypremium.jpg" },
    { nome: "Lyon Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/lyon/homebasica.jpg" },
    { nome: "Lyon Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/lyon/awaybasica.jpg" }
  ],

  "Marseille": [
  { nome: "Marseille Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/marseille/homepremium.jpg" },
  { nome: "Marseille Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/marseille/awaypremium.jpg" },
  { nome: "Marseille Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/marseille/homebasica.jpg" },
  { nome: "Marseille Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/marseille/awaybasica.jpg" },
  { nome: "Marseille Retrô 17/18",  preco: "R$79.90", img: "img/produtos/marseille/retro.jpg" }
],
  
  /* ================= HOLANDA ================= */
  "Ajax": [
    { nome: "Ajax Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/ajax/homepremium.jpg" },
    { nome: "Ajax Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/ajax/awaypremium.jpg" },
    { nome: "Ajax Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/ajax/homebasica.jpg" },
    { nome: "Ajax Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/ajax/awaybasica.jpg" }
  ],
  
  "PSV": [
    { nome: "PSV Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/psv/homepremium.jpg" },
    { nome: "PSV Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/psv/awaypremium.jpg" },
    { nome: "PSV Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/psv/homebasica.jpg" },
    { nome: "PSV Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/psv/awaybasica.jpg" }
  ],
  
  /* ================= PORTUGAL ================= */
  "Benfica": [
    { nome: "Benfica Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/benfica/homepremium.jpg" },
    { nome: "Benfica Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/benfica/awaypremium.jpg" },
    { nome: "Benfica Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/benfica/homebasica.jpg" },
    { nome: "Benfica Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/benfica/awaybasica.jpg" }
  ],
  
  "Porto": [
    { nome: "Porto Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/porto/homepremium.jpg" },
    { nome: "Porto Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/porto/awaypremium.jpg" },
    { nome: "Porto Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/porto/homebasica.jpg" },
    { nome: "Porto Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/porto/awaybasica.jpg" }
  ],
  
  "Sporting": [
    { nome: "Sporting Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/sporting/homepremium.jpg" },
    { nome: "Sporting Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/sporting/awaypremium.jpg" },
    { nome: "Sporting Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/sporting/homebasica.jpg" },
    { nome: "Sporting Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/sporting/awaybasica.jpg" },
    { nome: "Sporting Retrô 02/03",  preco: "R$79.90", img: "img/produtos/sporting/retro.jpg" }
  ],
  
  /* ================= ARGENTINA ================= */
  "Boca Juniors": [
    { nome: "Boca Juniors Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/boca-juniors/homepremium.jpg" },
    { nome: "Boca Juniors Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/boca-juniors/awaypremium.jpg" },
    { nome: "Boca Juniors Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/boca-juniors/homebasica.jpg" },
    { nome: "Boca Juniors Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/boca-juniors/awaybasica.jpg" }
  ],
  
  "River Plate": [
    { nome: "River Plate Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/river-plate/homepremium.jpg" },
    { nome: "River Plate Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/river-plate/awaypremium.jpg" },
    { nome: "River Plate Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/river-plate/homebasica.jpg" },
    { nome: "River Plate Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/river-plate/awaybasica.jpg" }
  ],
  /* ================= México ================= */
  "Tigres": [
    { nome: "Tigres Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/tigres/homepremium.jpg" },
    { nome: "Tigres Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/tigres/awaypremium.jpg" },
    { nome: "Tigres Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/tigres/homebasica.jpg" },
    { nome: "Tigres Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/tigres/awaybasica.jpg" }
  ],
  "Monterrey": [
    { nome: "Monterrey Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/monterrey/homepremium.jpg" },
    { nome: "Monterrey Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/monterrey/awaypremium.jpg" },
    { nome: "Monterrey Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/monterrey/homebasica.jpg" },
    { nome: "Monterrey Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/monterrey/awaybasica.jpg" }
  ],
  /* ================= USA ================= */
  "Inter Miami": [
    { nome: "Inter Miami Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/inter-miami/homepremium.jpg" },
    { nome: "Inter Miami Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/inter-miami/awaypremium.jpg" },
    { nome: "Inter Miami Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/inter-miami/homebasica.jpg" },
    { nome: "Inter Miami Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/inter-miami/awaybasica.jpg" }
  ],
  
  "LA Galaxy": [
    { nome: "LA Galaxy Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/la-galaxy/homepremium.jpg" },
    { nome: "LA Galaxy Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/la-galaxy/awaypremium.jpg" },
    { nome: "LA Galaxy Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/la-galaxy/homebasica.jpg" },
    { nome: "LA Galaxy Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/la-galaxy/awaybasica.jpg" }
  ],
  
  /* ================= ARÁBIA SAUDITA ================= */
  "Al Nassr": [
    { nome: "Al Nassr Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-nassr/homepremium.jpg" },
    { nome: "Al Nassr Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-nassr/awaypremium.jpg" },
    { nome: "Al Nassr Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-nassr/homebasica.jpg" },
    { nome: "Al Nassr Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-nassr/awaybasica.jpg" }
  ],
  
  "Al Hilal": [
    { nome: "Al Hilal Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-hilal/homepremium.jpg" },
    { nome: "Al Hilal Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-hilal/awaypremium.jpg" },
    { nome: "Al Hilal Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-hilal/homebasica.jpg" },
    { nome: "Al Hilal Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-hilal/awaybasica.jpg" },
    { nome: "Al Hilal Third 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-hilal/thirdpremium.jpg" },
    { nome: "Al Hilal Third 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-hilal/thirdbasica.jpg" }
  ],
  
  "Al Ahli": [
    { nome: "Al Ahli Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-ahli/homepremium.jpg" },
    { nome: "Al Ahli Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/al-ahli/awaypremium.jpg" },
    { nome: "Al Ahli Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-ahli/homebasica.jpg" },
    { nome: "Al Ahli Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/al-ahli/awaybasica.jpg" }
  ],  
  
  /* ================= SELEÇÕES ================= */
  "Arábia Saudita": [
    { nome: "Arábia Saudita Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/arabia-saudita/homepremium.jpg" },
    { nome: "Arábia Saudita Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/arabia-saudita/awaypremium.jpg" },
    { nome: "Arábia Saudita Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/arabia-saudita/homebasica.jpg" },
    { nome: "Arábia Saudita Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/arabia-saudita/awaybasica.jpg" }
  ],

  "Argentina": [
    { nome: "Argentina Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/argentina/homepremium.jpg" },
    { nome: "Argentina Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/argentina/awaypremium.jpg" },
    { nome: "Argentina Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/argentina/homebasica.jpg" },
    { nome: "Argentina Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/argentina/awaybasica.jpg" },
    { nome: "Argentina Retrô 2006 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/argentina/retrohome.jpg" },
    { nome: "Argentina Retrô 2006 Away",  preco: "R$79.90", img: "img/produtos/selecoes/argentina/retroaway.jpg" }
  ],
  
  "Brasil": [
    { nome: "Brasil Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremium.jpg" },
    { nome: "Brasil Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/awaypremium.jpg" },
    { nome: "Brasil Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasica.jpg" },
    { nome: "Brasil Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/awaybasica.jpg" },
    { nome: "Brasil Home 23/24 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremium2024.jpg" },
    { nome: "Brasil Home 23/24 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasica2024.jpg" },
    { nome: "Brasil Away 23/24 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/awaypremium2024.jpg" },
    { nome: "Brasil Away 23/24 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/awaybasica2024.jpg" },
    { nome: "Brasil Retrô 1998 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/brasil/retrohome1998.jpg" },
    { nome: "Brasil Retrô 1998 Away",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/retroaway1998.jpg" },
    { nome: "Brasil Retrô 2002 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/brasil/retrohome2002.jpg" },
    { nome: "Brasil Retrô 2002 Away",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/retroaway2002.jpg" },
    { nome: "Brasil Home 26/27 Premium Feminina",  preco: "R$79.90", img: "img/produtos/selecoes/brasil/homepremiumfeminina.jpg" },
    { nome: "Brasil Home 26/27 Básica Feminina",  preco: "R$49.90", img: "img/produtos/selecoes/brasil/homebasicafeminina.jpg" }

  ],
  
  "Portugal": [
    { nome: "Portugal Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/portugal/homepremium.jpg" },
    { nome: "Portugal Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/portugal/awaypremium.jpg" },
    { nome: "Portugal Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/portugal/homebasica.jpg" },
    { nome: "Portugal Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/portugal/awaybasica.jpg" },
    { nome: "Portugal Retrô 2006 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/portugal/retro.jpg" }
  ],
  
  "Alemanha": [
    { nome: "Alemanha Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/alemanha/homepremium.jpg" },
    { nome: "Alemanha Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/alemanha/awaypremium.jpg" },
    { nome: "Alemanha Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/alemanha/homebasica.jpg" },
    { nome: "Alemanha Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/alemanha/awaybasica.jpg" },
    { nome: "Alemanha Retrô 2014 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/alemanha/retrohome.jpg" },
    { nome: "Alemanha Retrô 2014 Away",  preco: "R$79.90", img: "img/produtos/selecoes/alemanha/retroaway.jpg" },
  ],
  
  "Espanha": [
    { nome: "Espanha Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/espanha/homepremium.jpg" },
    { nome: "Espanha Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/espanha/awaypremium.jpg" },
    { nome: "Espanha Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/espanha/homebasica.jpg" },
    { nome: "Espanha Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/espanha/awaybasica.jpg" }
  ],
  "EUA": [
    { nome: "EUA Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/eua/homepremium.jpg" },
    { nome: "EUA Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/eua/awaypremium.jpg" },
    { nome: "EUA Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/eua/homebasica.jpg" },
    { nome: "EUA Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/eua/awaybasica.jpg" }
  ],
  
  "França": [
    { nome: "França Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/franca/homepremium.jpg" },
    { nome: "França Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/franca/awaypremium.jpg" },
    { nome: "França Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/franca/homebasica.jpg" },
    { nome: "França Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/franca/awaybasica.jpg" },
    { nome: "França Retrô 1998 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/franca/retrohome.jpg" },
    { nome: "França Retrô 1998 Away",  preco: "R$79.90", img: "img/produtos/selecoes/franca/retroaway.jpg" },
  ],
  
  "Holanda": [
    { nome: "Holanda Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/holanda/homepremium.jpg" },
    { nome: "Holanda Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/holanda/awaypremium.jpg" },
    { nome: "Holanda Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/holanda/homebasica.jpg" },
    { nome: "Holanda Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/holanda/awaybasica.jpg" },
    { nome: "Holanda Retrô 1998 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/holanda/retro.jpg" }
  ],

  "Inglaterra": [
    { nome: "Inglaterra Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/inglaterra/homepremium.jpg" },
    { nome: "Inglaterra Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/inglaterra/awaypremium.jpg" },
    { nome: "Inglaterra Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/inglaterra/homebasica.jpg" },
    { nome: "Inglaterra Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/inglaterra/awaybasica.jpg" },
    { nome: "Inglaterra Retrô 2006 Home",  preco: "R$ 79.90", img: "img/produtos/selecoes/inglaterra/retro.jpg" }
  ],

  "México": [
    { nome: "México Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/mexico/homepremium.jpg" },
    { nome: "México Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/mexico/awaypremium.jpg" },
    { nome: "México Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/mexico/homebasica.jpg" },
    { nome: "México Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/mexico/awaybasica.jpg" }
  ],

  "Uruguai": [
  { nome: "Uruguai Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/uruguai/homepremium.jpg" },
  { nome: "Uruguai Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/uruguai/awaypremium.jpg" },
  { nome: "Uruguai Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/uruguai/homebasica.jpg" },
  { nome: "Uruguai Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/uruguai/awaybasica.jpg" }
],

"Colômbia": [
  { nome: "Colômbia Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/colombia/homepremium.jpg" },
  { nome: "Colômbia Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/colombia/awaypremium.jpg" },
  { nome: "Colômbia Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/colombia/homebasica.jpg" },
  { nome: "Colômbia Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/colombia/awaybasica.jpg" }
],

"Coreia do Sul": [
  { nome: "Coreia do Sul Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/coreiadosul/homepremium.jpg" },
  { nome: "Coreia do Sul Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/coreiadosul/awaypremium.jpg" },
  { nome: "Coreia do Sul Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/coreiadosul/homebasica.jpg" },
  { nome: "Coreia do Sul Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/coreiadosul/awaybasica.jpg" }
],

"Japão": [
  { nome: "Japão Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/japao/homepremium.jpg" },
  { nome: "Japão Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/japao/awaypremium.jpg" },
  { nome: "Japão Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/japao/homebasica.jpg" },
  { nome: "Japão Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/japao/awaybasica.jpg" }
],

"Noruega": [
  { nome: "Noruega Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/noruega/homepremium.jpg" },
  { nome: "Noruega Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/noruega/awaypremium.jpg" },
  { nome: "Noruega Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/noruega/homebasica.jpg" },
  { nome: "Noruega Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/noruega/awaybasica.jpg" }
],

"Bélgica": [
  { nome: "Bélgica Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/belgica/homepremium.jpg" },
  { nome: "Bélgica Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/belgica/awaypremium.jpg" },
  { nome: "Bélgica Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/belgica/homebasica.jpg" },
  { nome: "Bélgica Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/belgica/awaybasica.jpg" }
],

"Senegal": [
  { nome: "Senegal Home 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/senegal/homepremium.jpg" },
  { nome: "Senegal Away 25/26 Premium",  preco: "R$79.90", img: "img/produtos/selecoes/senegal/awaypremium.jpg" },
  { nome: "Senegal Home 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/senegal/homebasica.jpg" },
  { nome: "Senegal Away 25/26 Básica",  preco: "R$49.90", img: "img/produtos/selecoes/senegal/awaybasica.jpg" }
],

/* ================= NBA ================= */

"Atlanta Hawks":[
{nome:"Atlanta Hawks Home Premium", preco:"R$79.90",img:"img/produtos/nba/atlanta/homepremium.jpg"},
{nome:"Atlanta Hawks Away Premium", preco:"R$79.90",img:"img/produtos/nba/atlanta/awaypremium.jpg"},
{nome:"Atlanta Hawks Third Premium", preco:"R$79.90",img:"img/produtos/nba/atlanta/thirdpremium.jpg"},
{nome:"Atlanta Hawks Home Básica", preco:"R$49.90",img:"img/produtos/nba/atlanta/homebasica.jpg"},
{nome:"Atlanta Hawks Away Básica", preco:"R$49.90",img:"img/produtos/nba/atlanta/awaybasica.jpg"},
{nome:"Atlanta Hawks Third Básica", preco:"R$49.90",img:"img/produtos/nba/atlanta/thirdbasica.jpg"},
{nome:"Atlanta Hawks Retrô 1986", preco:"R$79.90",img:"img/produtos/nba/atlanta/retro1986.jpg"}
],

"Boston Celtics":[
{nome:"Boston Celtics Home Premium", preco:"R$79.90",img:"img/produtos/nba/boston/homepremium.jpg"},
{nome:"Boston Celtics Away Premium", preco:"R$79.90",img:"img/produtos/nba/boston/awaypremium.jpg"},
{nome:"Boston Celtics Third Premium", preco:"R$79.90",img:"img/produtos/nba/boston/thirdpremium.jpg"},
{nome:"Boston Celtics Home Básica", preco:"R$49.90",img:"img/produtos/nba/boston/homebasica.jpg"},
{nome:"Boston Celtics Away Básica", preco:"R$49.90",img:"img/produtos/nba/boston/awaybasica.jpg"},
{nome:"Boston Celtics Third Básica", preco:"R$49.90",img:"img/produtos/nba/boston/thirdbasica.jpg"},
{nome:"Boston Celtics Retrô 1985", preco:"R$79.90",img:"img/produtos/nba/boston/retro1985.jpg"}
],

"Brooklyn Nets":[
{nome:"Brooklyn Nets Home Premium", preco:"R$79.90",img:"img/produtos/nba/brooklyn/homepremium.jpg"},
{nome:"Brooklyn Nets Away Premium", preco:"R$79.90",img:"img/produtos/nba/brooklyn/awaypremium.jpg"},
{nome:"Brooklyn Nets Third Premium", preco:"R$79.90",img:"img/produtos/nba/brooklyn/thirdpremium.jpg"},
{nome:"Brooklyn Nets Home Básica", preco:"R$49.90",img:"img/produtos/nba/brooklyn/homebasica.jpg"},
{nome:"Brooklyn Nets Away Básica", preco:"R$49.90",img:"img/produtos/nba/brooklyn/awaybasica.jpg"},
{nome:"Brooklyn Nets Third Básica", preco:"R$49.90",img:"img/produtos/nba/brooklyn/thirdbasica.jpg"},
{nome:"Brooklyn Nets Retrô 2002", preco:"R$79.90",img:"img/produtos/nba/brooklyn/retro2002.jpg"}
],

"Charlotte Hornets":[
{nome:"Charlotte Hornets Home Premium", preco:"R$79.90",img:"img/produtos/nba/charlotte/homepremium.jpg"},
{nome:"Charlotte Hornets Away Premium", preco:"R$79.90",img:"img/produtos/nba/charlotte/awaypremium.jpg"},
{nome:"Charlotte Hornets Third Premium", preco:"R$79.90",img:"img/produtos/nba/charlotte/thirdpremium.jpg"},
{nome:"Charlotte Hornets Home Básica", preco:"R$49.90",img:"img/produtos/nba/charlotte/homebasica.jpg"},
{nome:"Charlotte Hornets Away Básica", preco:"R$49.90",img:"img/produtos/nba/charlotte/awaybasica.jpg"},
{nome:"Charlotte Hornets Third Básica", preco:"R$49.90",img:"img/produtos/nba/charlotte/thirdbasica.jpg"},
{nome:"Charlotte Hornets Retrô 1996", preco:"R$79.90",img:"img/produtos/nba/charlotte/retro1996.jpg"}
],

"Chicago Bulls":[
{nome:"Chicago Bulls Home Premium", preco:"R$79.90",img:"img/produtos/nba/chicago/homepremium.jpg"},
{nome:"Chicago Bulls Away Premium", preco:"R$79.90",img:"img/produtos/nba/chicago/awaypremium.jpg"},
{nome:"Chicago Bulls Third Premium", preco:"R$79.90",img:"img/produtos/nba/chicago/thirdpremium.jpg"},
{nome:"Chicago Bulls Home Básica", preco:"R$49.90",img:"img/produtos/nba/chicago/homebasica.jpg"},
{nome:"Chicago Bulls Away Básica", preco:"R$49.90",img:"img/produtos/nba/chicago/awaybasica.jpg"},
{nome:"Chicago Bulls Third Básica", preco:"R$49.90",img:"img/produtos/nba/chicago/thirdbasica.jpg"},
{nome:"Chicago Bulls Retrô 1991", preco:"R$79.90",img:"img/produtos/nba/chicago/retro1991.jpg"},
{nome:"Chicago Bulls Retrô 1996", preco:"R$79.90",img:"img/produtos/nba/chicago/retro1996.jpg"}
],

"Cleveland Cavaliers":[
{nome:"Cleveland Cavaliers Home Premium", preco:"R$79.90",img:"img/produtos/nba/cleveland/homepremium.jpg"},
{nome:"Cleveland Cavaliers Away Premium", preco:"R$79.90",img:"img/produtos/nba/cleveland/awaypremium.jpg"},
{nome:"Cleveland Cavaliers Third Premium", preco:"R$79.90",img:"img/produtos/nba/cleveland/thirdpremium.jpg"},
{nome:"Cleveland Cavaliers Home Básica", preco:"R$49.90",img:"img/produtos/nba/cleveland/homebasica.jpg"},
{nome:"Cleveland Cavaliers Away Básica", preco:"R$49.90",img:"img/produtos/nba/cleveland/awaybasica.jpg"},
{nome:"Cleveland Cavaliers Third Básica", preco:"R$49.90",img:"img/produtos/nba/cleveland/thirdbasica.jpg"},
{nome:"Cleveland Cavaliers Retrô 2007", preco:"R$79.90",img:"img/produtos/nba/cleveland/retro2007.jpg"},
{nome:"Cleveland Cavaliers Retrô 2018", preco:"R$79.90",img:"img/produtos/nba/cleveland/retro2018.jpg"}
],

"Dallas Mavericks":[
{nome:"Dallas Mavericks Home Premium", preco:"R$79.90",img:"img/produtos/nba/dallas/homepremium.jpg"},
{nome:"Dallas Mavericks Away Premium", preco:"R$79.90",img:"img/produtos/nba/dallas/awaypremium.jpg"},
{nome:"Dallas Mavericks Third Premium", preco:"R$79.90",img:"img/produtos/nba/dallas/thirdpremium.jpg"},
{nome:"Dallas Mavericks Home Básica", preco:"R$49.90",img:"img/produtos/nba/dallas/homebasica.jpg"},
{nome:"Dallas Mavericks Away Básica", preco:"R$49.90",img:"img/produtos/nba/dallas/awaybasica.jpg"},
{nome:"Dallas Mavericks Third Básica", preco:"R$49.90",img:"img/produtos/nba/dallas/thirdbasica.jpg"},
{nome:"Dallas Mavericks Retrô 2011", preco:"R$79.90",img:"img/produtos/nba/dallas/retro2011.jpg"}
],

"Denver Nuggets":[
{nome:"Denver Nuggets Home Premium", preco:"R$79.90",img:"img/produtos/nba/denver/homepremium.jpg"},
{nome:"Denver Nuggets Away Premium", preco:"R$79.90",img:"img/produtos/nba/denver/awaypremium.jpg"},
{nome:"Denver Nuggets Third Premium", preco:"R$79.90",img:"img/produtos/nba/denver/thirdpremium.jpg"},
{nome:"Denver Nuggets Home Básica", preco:"R$49.90",img:"img/produtos/nba/denver/homebasica.jpg"},
{nome:"Denver Nuggets Away Básica", preco:"R$49.90",img:"img/produtos/nba/denver/awaybasica.jpg"},
{nome:"Denver Nuggets Third Básica", preco:"R$49.90",img:"img/produtos/nba/denver/thirdbasica.jpg"},
{nome:"Denver Nuggets Retrô 2015", preco:"R$79.90",img:"img/produtos/nba/denver/retro2015.jpg"}
],

"Detroit Pistons":[
{nome:"Detroit Pistons Home Premium", preco:"R$79.90",img:"img/produtos/nba/detroit/homepremium.jpg"},
{nome:"Detroit Pistons Away Premium", preco:"R$79.90",img:"img/produtos/nba/detroit/awaypremium.jpg"},
{nome:"Detroit Pistons Third Premium", preco:"R$79.90",img:"img/produtos/nba/detroit/thirdpremium.jpg"},
{nome:"Detroit Pistons Home Básica", preco:"R$49.90",img:"img/produtos/nba/detroit/homebasica.jpg"},
{nome:"Detroit Pistons Away Básica", preco:"R$49.90",img:"img/produtos/nba/detroit/awaybasica.jpg"},
{nome:"Detroit Pistons Third Básica", preco:"R$49.90",img:"img/produtos/nba/detroit/thirdbasica.jpg"},
{nome:"Detroit Pistons Retrô 1989", preco:"R$79.90",img:"img/produtos/nba/detroit/retro1989.jpg"}
],

"Golden State Warriors":[
{nome:"Golden State Warriors Home Premium", preco:"R$79.90",img:"img/produtos/nba/warriors/homepremium.jpg"},
{nome:"Golden State Warriors Away Premium", preco:"R$79.90",img:"img/produtos/nba/warriors/awaypremium.jpg"},
{nome:"Golden State Warriors Third Premium", preco:"R$79.90",img:"img/produtos/nba/warriors/thirdpremium.jpg"},
{nome:"Golden State Warriors Third Premium 24/25", preco:"R$79.90",img:"img/produtos/nba/warriors/thirdpremium2025.jpg"},
{nome:"Golden State Warriors Home Básica", preco:"R$49.90",img:"img/produtos/nba/warriors/homebasica.jpg"},
{nome:"Golden State Warriors Away Básica", preco:"R$49.90",img:"img/produtos/nba/warriors/awaybasica.jpg"},
{nome:"Golden State Warriors Third Básica", preco:"R$49.90",img:"img/produtos/nba/warriors/thirdbasica.jpg"},
{nome:"Golden State Warriors Retrô 2007", preco:"R$79.90",img:"img/produtos/nba/warriors/retro2007.jpg"}
],

"Houston Rockets":[
{nome:"Houston Rockets Home Premium", preco:"R$79.90",img:"img/produtos/nba/houston/homepremium.jpg"},
{nome:"Houston Rockets Away Premium", preco:"R$79.90",img:"img/produtos/nba/houston/awaypremium.jpg"},
{nome:"Houston Rockets Third Premium", preco:"R$79.90",img:"img/produtos/nba/houston/thirdpremium.jpg"},
{nome:"Houston Rockets Home Básica", preco:"R$49.90",img:"img/produtos/nba/houston/homebasica.jpg"},
{nome:"Houston Rockets Away Básica", preco:"R$49.90",img:"img/produtos/nba/houston/awaybasica.jpg"},
{nome:"Houston Rockets Third Básica", preco:"R$49.90",img:"img/produtos/nba/houston/thirdbasica.jpg"},
{nome:"Houston Rockets Retrô 1995", preco:"R$79.90",img:"img/produtos/nba/houston/retro1995.jpg"}
],

"Indiana Pacers":[
{nome:"Indiana Pacers Home Premium", preco:"R$79.90",img:"img/produtos/nba/indiana/homepremium.jpg"},
{nome:"Indiana Pacers Away Premium", preco:"R$79.90",img:"img/produtos/nba/indiana/awaypremium.jpg"},
{nome:"Indiana Pacers Third Premium", preco:"R$79.90",img:"img/produtos/nba/indiana/thirdpremium.jpg"},
{nome:"Indiana Pacers Home Básica", preco:"R$49.90",img:"img/produtos/nba/indiana/homebasica.jpg"},
{nome:"Indiana Pacers Away Básica", preco:"R$49.90",img:"img/produtos/nba/indiana/awaybasica.jpg"},
{nome:"Indiana Pacers Third Básica", preco:"R$49.90",img:"img/produtos/nba/indiana/thirdbasica.jpg"},
{nome:"Indiana Pacers Retrô 2000", preco:"R$79.90",img:"img/produtos/nba/indiana/retro2000.jpg"}
],

"Los Angeles Clippers":[
{nome:"Los Angeles Clippers Home Premium", preco:"R$79.90",img:"img/produtos/nba/clippers/homepremium.jpg"},
{nome:"Los Angeles Clippers Away Premium", preco:"R$79.90",img:"img/produtos/nba/clippers/awaypremium.jpg"},
{nome:"Los Angeles Clippers Third Premium", preco:"R$79.90",img:"img/produtos/nba/clippers/thirdpremium.jpg"},
{nome:"Los Angeles Clippers Home Básica", preco:"R$49.90",img:"img/produtos/nba/clippers/homebasica.jpg"},
{nome:"Los Angeles Clippers Away Básica", preco:"R$49.90",img:"img/produtos/nba/clippers/awaybasica.jpg"},
{nome:"Los Angeles Clippers Third Básica", preco:"R$49.90",img:"img/produtos/nba/clippers/thirdbasica.jpg"},
{nome:"Los Angeles Clippers Retrô 1984", preco:"R$79.90",img:"img/produtos/nba/clippers/retro1984.jpg"}
],

"Los Angeles Lakers":[
{nome:"Los Angeles Lakers Home Premium", preco:"R$79.90",img:"img/produtos/nba/lakers/homepremium.jpg"},
{nome:"Los Angeles Lakers Away Premium", preco:"R$79.90",img:"img/produtos/nba/lakers/awaypremium.jpg"},
{nome:"Los Angeles Lakers Third Premium", preco:"R$79.90",img:"img/produtos/nba/lakers/thirdpremium.jpg"},
{nome:"Los Angeles Lakers Home Básica", preco:"R$49.90",img:"img/produtos/nba/lakers/homebasica.jpg"},
{nome:"Los Angeles Lakers Away Básica", preco:"R$49.90",img:"img/produtos/nba/lakers/awaybasica.jpg"},
{nome:"Los Angeles Lakers Third Básica", preco:"R$49.90",img:"img/produtos/nba/lakers/thirdbasica.jpg"},
{nome:"Los Angeles Lakers Retrô 1987", preco:"R$79.90",img:"img/produtos/nba/lakers/retro1987.jpg"},
{nome:"Los Angeles Lakers Retrô 2001", preco:"R$79.90",img:"img/produtos/nba/lakers/retro2001.jpg"}
],

"Memphis Grizzlies":[
{nome:"Memphis Grizzlies Home Premium", preco:"R$79.90",img:"img/produtos/nba/memphis/homepremium.jpg"},
{nome:"Memphis Grizzlies Away Premium", preco:"R$79.90",img:"img/produtos/nba/memphis/awaypremium.jpg"},
{nome:"Memphis Grizzlies Third Premium", preco:"R$79.90",img:"img/produtos/nba/memphis/thirdpremium.jpg"},
{nome:"Memphis Grizzlies Home Básica", preco:"R$49.90",img:"img/produtos/nba/memphis/homebasica.jpg"},
{nome:"Memphis Grizzlies Away Básica", preco:"R$49.90",img:"img/produtos/nba/memphis/awaybasica.jpg"},
{nome:"Memphis Grizzlies Third Básica", preco:"R$49.90",img:"img/produtos/nba/memphis/thirdbasica.jpg"},
{nome:"Memphis Grizzlies Retrô 1996", preco:"R$79.90",img:"img/produtos/nba/memphis/retro1996.jpg"}
],

"Miami Heat":[
{nome:"Miami Heat Home Premium", preco:"R$79.90",img:"img/produtos/nba/miami/homepremium.jpg"},
{nome:"Miami Heat Away Premium", preco:"R$79.90",img:"img/produtos/nba/miami/awaypremium.jpg"},
{nome:"Miami Heat Third Premium", preco:"R$79.90",img:"img/produtos/nba/miami/thirdpremium.jpg"},
{nome:"Miami Heat Home Básica", preco:"R$49.90",img:"img/produtos/nba/miami/homebasica.jpg"},
{nome:"Miami Heat Away Básica", preco:"R$49.90",img:"img/produtos/nba/miami/awaybasica.jpg"},
{nome:"Miami Heat Third Básica", preco:"R$49.90",img:"img/produtos/nba/miami/thirdbasica.jpg"},
{nome:"Miami Heat Retrô 2006", preco:"R$79.90",img:"img/produtos/nba/miami/retro2006.jpg"},
{nome:"Miami Heat Retrô 2013", preco:"R$79.90",img:"img/produtos/nba/miami/retro2013.jpg"},

],

"Milwaukee Bucks":[
{nome:"Milwaukee Bucks Home Premium", preco:"R$79.90",img:"img/produtos/nba/milwaukee/homepremium.jpg"},
{nome:"Milwaukee Bucks Away Premium", preco:"R$79.90",img:"img/produtos/nba/milwaukee/awaypremium.jpg"},
{nome:"Milwaukee Bucks Third Premium", preco:"R$79.90",img:"img/produtos/nba/milwaukee/thirdpremium.jpg"},
{nome:"Milwaukee Bucks Home Básica", preco:"R$49.90",img:"img/produtos/nba/milwaukee/homebasica.jpg"},
{nome:"Milwaukee Bucks Away Básica", preco:"R$49.90",img:"img/produtos/nba/milwaukee/awaybasica.jpg"},
{nome:"Milwaukee Bucks Third Básica", preco:"R$49.90",img:"img/produtos/nba/milwaukee/thirdbasica.jpg"},
{nome:"Milwaukee Bucks Retrô 1971", preco:"R$79.90",img:"img/produtos/nba/milwaukee/retro1971.jpg"}
],

"Minnesota Timberwolves":[
{nome:"Minnesota Timberwolves Home Premium", preco:"R$79.90",img:"img/produtos/nba/minnesota/homepremium.jpg"},
{nome:"Minnesota Timberwolves Away Premium", preco:"R$79.90",img:"img/produtos/nba/minnesota/awaypremium.jpg"},
{nome:"Minnesota Timberwolves Third Premium", preco:"R$79.90",img:"img/produtos/nba/minnesota/thirdpremium.jpg"},
{nome:"Minnesota Timberwolves Home Básica", preco:"R$49.90",img:"img/produtos/nba/minnesota/homebasica.jpg"},
{nome:"Minnesota Timberwolves Away Básica", preco:"R$49.90",img:"img/produtos/nba/minnesota/awaybasica.jpg"},
{nome:"Minnesota Timberwolves Third Básica", preco:"R$49.90",img:"img/produtos/nba/minnesota/thirdbasica.jpg"},
{nome:"Minnesota Timberwolves Retrô 1997", preco:"R$79.90",img:"img/produtos/nba/minnesota/retro1997.jpg"}
],

"New Orleans Pelicans":[
{nome:"New Orleans Pelicans Home Premium", preco:"R$79.90",img:"img/produtos/nba/pelicans/homepremium.jpg"},
{nome:"New Orleans Pelicans Away Premium", preco:"R$79.90",img:"img/produtos/nba/pelicans/awaypremium.jpg"},
{nome:"New Orleans Pelicans Third Premium", preco:"R$79.90",img:"img/produtos/nba/pelicans/thirdpremium.jpg"},
{nome:"New Orleans Pelicans Home Básica", preco:"R$49.90",img:"img/produtos/nba/pelicans/homebasica.jpg"},
{nome:"New Orleans Pelicans Away Básica", preco:"R$49.90",img:"img/produtos/nba/pelicans/awaybasica.jpg"},
{nome:"New Orleans Pelicans Third Básica", preco:"R$49.90",img:"img/produtos/nba/pelicans/thirdbasica.jpg"},
{nome:"New Orleans Pelicans Retrô 2008", preco:"R$79.90",img:"img/produtos/nba/pelicans/retro2008.jpg"}
],

"New York Knicks":[
{nome:"New York Knicks Home Premium", preco:"R$79.90",img:"img/produtos/nba/knicks/homepremium.jpg"},
{nome:"New York Knicks Away Premium", preco:"R$79.90",img:"img/produtos/nba/knicks/awaypremium.jpg"},
{nome:"New York Knicks Third Premium", preco:"R$79.90",img:"img/produtos/nba/knicks/thirdpremium.jpg"},
{nome:"New York Knicks Home Básica", preco:"R$49.90",img:"img/produtos/nba/knicks/homebasica.jpg"},
{nome:"New York Knicks Away Básica", preco:"R$49.90",img:"img/produtos/nba/knicks/awaybasica.jpg"},
{nome:"New York Knicks Third Básica", preco:"R$49.90",img:"img/produtos/nba/knicks/thirdbasica.jpg"},
{nome:"New York Knicks Retrô 1973", preco:"R$79.90",img:"img/produtos/nba/knicks/retro1973.jpg"},
{nome:"New York Knicks Retrô 1999", preco:"R$79.90",img:"img/produtos/nba/knicks/retro1999.jpg"}
],

"Oklahoma City Thunder":[
{nome:"Oklahoma City Thunder Home Premium", preco:"R$79.90",img:"img/produtos/nba/okc/homepremium.jpg"},
{nome:"Oklahoma City Thunder Away Premium", preco:"R$79.90",img:"img/produtos/nba/okc/awaypremium.jpg"},
{nome:"Oklahoma City Thunder Third Premium", preco:"R$79.90",img:"img/produtos/nba/okc/thirdpremium.jpg"},
{nome:"Oklahoma City Thunder Home Básica", preco:"R$49.90",img:"img/produtos/nba/okc/homebasica.jpg"},
{nome:"Oklahoma City Thunder Away Básica", preco:"R$49.90",img:"img/produtos/nba/okc/awaybasica.jpg"},
{nome:"Oklahoma City Thunder Third Básica", preco:"R$49.90",img:"img/produtos/nba/okc/thirdbasica.jpg"},
{nome:"Oklahoma City Thunder Retrô 2015", preco:"R$79.90",img:"img/produtos/nba/okc/retro2015.jpg"}
],

"Orlando Magic":[
{nome:"Orlando Magic Home Premium", preco:"R$79.90",img:"img/produtos/nba/orlando/homepremium.jpg"},
{nome:"Orlando Magic Away Premium", preco:"R$79.90",img:"img/produtos/nba/orlando/awaypremium.jpg"},
{nome:"Orlando Magic Third Premium", preco:"R$79.90",img:"img/produtos/nba/orlando/thirdpremium.jpg"},
{nome:"Orlando Magic Home Básica", preco:"R$49.90",img:"img/produtos/nba/orlando/homebasica.jpg"},
{nome:"Orlando Magic Away Básica", preco:"R$49.90",img:"img/produtos/nba/orlando/awaybasica.jpg"},
{nome:"Orlando Magic Third Básica", preco:"R$49.90",img:"img/produtos/nba/orlando/thirdbasica.jpg"},
{nome:"Orlando Magic Retrô 1995", preco:"R$79.90",img:"img/produtos/nba/orlando/retro1995.jpg"}
],

"Philadelphia 76ers":[
{nome:"Philadelphia 76ers Home Premium", preco:"R$79.90",img:"img/produtos/nba/philadelphia/homepremium.jpg"},
{nome:"Philadelphia 76ers Away Premium", preco:"R$79.90",img:"img/produtos/nba/philadelphia/awaypremium.jpg"},
{nome:"Philadelphia 76ers Third Premium", preco:"R$79.90",img:"img/produtos/nba/philadelphia/thirdpremium.jpg"},
{nome:"Philadelphia 76ers Home Básica", preco:"R$49.90",img:"img/produtos/nba/philadelphia/homebasica.jpg"},
{nome:"Philadelphia 76ers Away Básica", preco:"R$49.90",img:"img/produtos/nba/philadelphia/awaybasica.jpg"},
{nome:"Philadelphia 76ers Third Básica", preco:"R$49.90",img:"img/produtos/nba/philadelphia/thirdbasica.jpg"},
{nome:"Philadelphia 76ers Retrô 2000", preco:"R$79.90",img:"img/produtos/nba/philadelphia/retro2000.jpg"}
],

"Phoenix Suns":[
{nome:"Phoenix Suns Home Premium", preco:"R$79.90",img:"img/produtos/nba/phoenix/homepremium.jpg"},
{nome:"Phoenix Suns Away Premium", preco:"R$79.90",img:"img/produtos/nba/phoenix/awaypremium.jpg"},
{nome:"Phoenix Suns Third Premium", preco:"R$79.90",img:"img/produtos/nba/phoenix/thirdpremium.jpg"},
{nome:"Phoenix Suns Home Básica", preco:"R$49.90",img:"img/produtos/nba/phoenix/homebasica.jpg"},
{nome:"Phoenix Suns Away Básica", preco:"R$49.90",img:"img/produtos/nba/phoenix/awaybasica.jpg"},
{nome:"Phoenix Suns Third Básica", preco:"R$49.90",img:"img/produtos/nba/phoenix/thirdbasica.jpg"},
{nome:"Phoenix Suns Retrô 1993", preco:"R$79.90",img:"img/produtos/nba/phoenix/retro1993.jpg"}
],

"Portland Trail Blazers":[
{nome:"Portland Trail Blazers Home Premium", preco:"R$79.90",img:"img/produtos/nba/portland/homepremium.jpg"},
{nome:"Portland Trail Blazers Away Premium", preco:"R$79.90",img:"img/produtos/nba/portland/awaypremium.jpg"},
{nome:"Portland Trail Blazers Third Premium", preco:"R$79.90",img:"img/produtos/nba/portland/thirdpremium.jpg"},
{nome:"Portland Trail Blazers Home Básica", preco:"R$49.90",img:"img/produtos/nba/portland/homebasica.jpg"},
{nome:"Portland Trail Blazers Away Básica", preco:"R$49.90",img:"img/produtos/nba/portland/awaybasica.jpg"},
{nome:"Portland Trail Blazers Third Básica", preco:"R$49.90",img:"img/produtos/nba/portland/thirdbasica.jpg"},
{nome:"Portland Trail Blazers Retrô 2019", preco:"R$79.90",img:"img/produtos/nba/portland/retro2019.jpg"}
],

"Sacramento Kings":[
{nome:"Sacramento Kings Home Premium", preco:"R$79.90",img:"img/produtos/nba/sacramento/homepremium.jpg"},
{nome:"Sacramento Kings Away Premium", preco:"R$79.90",img:"img/produtos/nba/sacramento/awaypremium.jpg"},
{nome:"Sacramento Kings Third Premium", preco:"R$79.90",img:"img/produtos/nba/sacramento/thirdpremium.jpg"},
{nome:"Sacramento Kings Home Básica", preco:"R$49.90",img:"img/produtos/nba/sacramento/homebasica.jpg"},
{nome:"Sacramento Kings Away Básica", preco:"R$49.90",img:"img/produtos/nba/sacramento/awaybasica.jpg"},
{nome:"Sacramento Kings Third Básica", preco:"R$49.90",img:"img/produtos/nba/sacramento/thirdbasica.jpg"},
{nome:"Sacramento Kings Retrô 2002", preco:"R$79.90",img:"img/produtos/nba/sacramento/retro2002.jpg"}
],

"San Antonio Spurs":[
{nome:"San Antonio Spurs Home Premium", preco:"R$79.90",img:"img/produtos/nba/spurs/homepremium.jpg"},
{nome:"San Antonio Spurs Away Premium", preco:"R$79.90",img:"img/produtos/nba/spurs/awaypremium.jpg"},
{nome:"San Antonio Spurs Third Premium", preco:"R$79.90",img:"img/produtos/nba/spurs/thirdpremium.jpg"},
{nome:"San Antonio Spurs Home Básica", preco:"R$49.90",img:"img/produtos/nba/spurs/homebasica.jpg"},
{nome:"San Antonio Spurs Away Básica", preco:"R$49.90",img:"img/produtos/nba/spurs/awaybasica.jpg"},
{nome:"San Antonio Spurs Third Básica", preco:"R$49.90",img:"img/produtos/nba/spurs/thirdbasica.jpg"},
{nome:"San Antonio Spurs Retrô 1999", preco:"R$79.90",img:"img/produtos/nba/spurs/retro1999.jpg"},
{nome:"San Antonio Spurs Retrô 2013", preco:"R$79.90",img:"img/produtos/nba/spurs/retro2013.jpg"}
],

"Toronto Raptors":[
{nome:"Toronto Raptors Home Premium", preco:"R$79.90",img:"img/produtos/nba/toronto/homepremium.jpg"},
{nome:"Toronto Raptors Away Premium", preco:"R$79.90",img:"img/produtos/nba/toronto/awaypremium.jpg"},
{nome:"Toronto Raptors Third Premium", preco:"R$79.90",img:"img/produtos/nba/toronto/thirdpremium.jpg"},
{nome:"Toronto Raptors Home Básica", preco:"R$49.90",img:"img/produtos/nba/toronto/homebasica.jpg"},
{nome:"Toronto Raptors Away Básica", preco:"R$49.90",img:"img/produtos/nba/toronto/awaybasica.jpg"},
{nome:"Toronto Raptors Third Básica", preco:"R$49.90",img:"img/produtos/nba/toronto/thirdbasica.jpg"},
{nome:"Toronto Raptors Retrô 2000", preco:"R$79.90",img:"img/produtos/nba/toronto/retro2000.jpg"},
{nome:"Toronto Raptors Retrô 2019", preco:"R$79.90",img:"img/produtos/nba/toronto/retro2019.jpg"}
],

"Utah Jazz":[
{nome:"Utah Jazz Home Premium", preco:"R$79.90",img:"img/produtos/nba/utah/homepremium.jpg"},
{nome:"Utah Jazz Away Premium", preco:"R$79.90",img:"img/produtos/nba/utah/awaypremium.jpg"},
{nome:"Utah Jazz Third Premium", preco:"R$79.90",img:"img/produtos/nba/utah/thirdpremium.jpg"},
{nome:"Utah Jazz Home Básica", preco:"R$49.90",img:"img/produtos/nba/utah/homebasica.jpg"},
{nome:"Utah Jazz Away Básica", preco:"R$49.90",img:"img/produtos/nba/utah/awaybasica.jpg"},
{nome:"Utah Jazz Third Básica", preco:"R$49.90",img:"img/produtos/nba/utah/thirdbasica.jpg"},
{nome:"Utah Jazz Retrô 1997", preco:"R$79.90",img:"img/produtos/nba/utah/retro1997.jpg"}
],

"Washington Wizards":[
{nome:"Washington Wizards Home Premium", preco:"R$79.90",img:"img/produtos/nba/washington/homepremium.jpg"},
{nome:"Washington Wizards Away Premium", preco:"R$79.90",img:"img/produtos/nba/washington/awaypremium.jpg"},
{nome:"Washington Wizards Third Premium", preco:"R$79.90",img:"img/produtos/nba/washington/thirdpremium.jpg"},
{nome:"Washington Wizards Home Básica", preco:"R$49.90",img:"img/produtos/nba/washington/homebasica.jpg"},
{nome:"Washington Wizards Away Básica", preco:"R$49.90",img:"img/produtos/nba/washington/awaybasica.jpg"},
{nome:"Washington Wizards Third Básica", preco:"R$49.90",img:"img/produtos/nba/washington/thirdbasica.jpg"},
{nome:"Washington Wizards Retrô 2018", preco:"R$79.90",img:"img/produtos/nba/washington/retro2018.jpg"}
]


};  

/* =========================
   TELAS
========================= */

function abrirBrasil() {
  pilha = ["paises", "categorias"];
  esconderTudo();

  const tela = document.getElementById("telaCategorias");
  tela.classList.remove("hidden");

  tela.innerHTML = `
    <a class="voltar" onclick="voltar()">← Voltar</a>

    <div class="card" onclick="abrirTimes('Brasileirão')">
      <img src="${imagemLiga['Brasileirão']}">
      <p>Brasileirão</p>
    </div>

    <div class="card" onclick="abrirTimes('Seleção Brasileira')">
      <img src="img/flags/brasil.png">
      <p>Seleção Brasileira</p>
    </div>
  `;
}

function abrirLigas(pais) {
  pilha = ["paises", "categorias"];
  esconderTudo();

  const tela = document.getElementById("telaCategorias");
  tela.classList.remove("hidden");
  tela.innerHTML = `<a class="voltar" onclick="voltar()">← Voltar</a>`;

  ligas[pais].forEach(liga => {
    tela.innerHTML += `
      <div class="card" onclick="abrirTimes('${liga}')">
        <img src="${imagemLiga[liga]}">
        <p>${liga}</p>
      </div>
    `;
  });
}

function abrirCopa() {
  pilha = ["paises", "categorias"];
  esconderTudo();

  const tela = document.getElementById("telaCategorias");
  tela.classList.remove("hidden");

  tela.innerHTML = `
    <a class="voltar" onclick="voltar()">← Voltar</a>
    <div class="card" onclick="abrirTimes('Seleções')">
      <img src="${imagemLiga['Seleções']}">
      <p>Seleções</p>
    </div>
  `;
}

function abrirTimes(liga) {
  pilha.push("categorias");
  esconderTudo();

  const tela = document.getElementById("telaCategorias");
  tela.classList.remove("hidden");
  tela.innerHTML = `<a class="voltar" onclick="voltar()">← Voltar</a>`;

  (timesPorLiga[liga] || []).forEach(time => {
    tela.innerHTML += `
      <div class="card" onclick="abrirProdutos('${time}')">
        <img src="${escudoTime[time] || 'img/times/default.png'}">
        <p>${time}</p>
      </div>
    `;
  });
}

function abrirProdutos(time) {
  pilha.push("produtos");
  esconderTudo();

  document.getElementById("telaProdutos").classList.remove("hidden");
  document.getElementById("tituloProdutos").innerText = time;

  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  (produtos[time] || []).forEach(p => {
    const msg = encodeURIComponent(`Olá! Quero a ${p.nome}`);
    lista.innerHTML += `
      <div class="produto">
        <img src="${p.img}">
        <h3>${p.nome}</h3>
        <p>${p. preco}</p>
        <a href="https://wa.me/${WHATSAPP}?text=${msg}" target="_blank">
          Comprar no WhatsApp
        </a>
      </div>
    `;
  });
}
