let games2 = '{"jogo":[{"nomeJogo":"Pac Man","Ano":2010,"personagens":[{"nomeP":"Personagem1","raridade":"média","preco":1500.00},{"nomeP":"Personagem2","raridade":"alta","preco":3502.53}]}'+
            ',{"nomeJogo":"River Rade","Ano":1979,"personagens":[{"nomeP":"Personagem3","raridade":"surreal","preco":10000.00},{"nomeP":"Personagem4","raridade":"baixa","preco":500.25}]}]}';

let games = JSON.parse(games2).jogo;

let output = "";
games.forEach((jogo, i) => {
  let numJogo = i + 1;
  output += `<h3>Jogo-${numJogo}:</h3>
             <p>${jogo.nomeJogo}<br>${jogo.Ano}</p>
             <p>Personagens:</p>`;
  jogo.personagens.forEach((personagem, j) => {
    let numPersonagem = j + 1;
    output += `<p>Personagem-${numPersonagem}:<br>
               ${personagem.nomeP}<br>
               ${personagem.raridade}<br>
               ${personagem.preco}</p>`;
  });
});

document.getElementById("output").innerHTML = output;
