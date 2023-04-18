let gamesCerto = '{"jogo":[{"nomeJogo":"Pac Man","Ano":2010},'+
                  '{"nomeJogo":"River Rade","Ano":1979}]}';

let games = JSON.parse(gamesCerto).jogo;

let output = "";
for (let i = 0; i < games.length; i++) {
  let jogo = games[i];
  let numJogo = i+1;
  output += "<h3>Jogo-" + numJogo + ":</h3>\n";
  output += "<p>" + jogo.nomeJogo + "<br>" + jogo.Ano + "</p>\n";
}

document.getElementById("output").innerHTML = output;
