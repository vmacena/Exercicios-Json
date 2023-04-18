let receita = {
  'titulo': 'Parmegiana',
  'tempoDePreparo': "60 min",
  'ingredientes': ['500 g de carne (coxão mole, patinho ou alcatra)', '1 xícara de farinha de trigo', '2 ovos', '2 xícaras de farinha de rosca', '1/2 colher de chá de sal', '1/2 colher de chá de pimenta-do-reino', '1/2 colher de chá de alho em pó', '2 xícaras de molho de tomate', '200 g de queijo mussarela', 'óleo para fritar'],
  'preparo': ['Corte a carne em bifes finos e tempere com o sal, a pimenta-do-reino e o alho em pó', 'Empane os bifes passando-os na farinha de trigo, nos ovos batidos e na farinha de rosca', 'Frite os bifes em óleo quente até dourarem e reserve', 'Em um refratário, coloque uma camada de molho de tomate, os bifes, mais molho de tomate e o queijo mussarela', 'Leve ao forno preaquecido a 180°C por cerca de 20 minutos ou até o queijo derreter']
};

let output = "";
output += "<h2>" + receita.titulo + "</h2>\n";
output += "<p>Tempo de preparo: " + receita.tempoDePreparo + "</p>\n";
output += "<h3>Ingredientes:</h3>\n<ul>\n";
for (let i = 0; i < receita.ingredientes.length; i++) {
output += "<li>" + receita.ingredientes[i] + "</li>\n";
}
output += "</ul>\n<h3>Preparo:</h3>\n<ol>\n";
for (let i = 0; i < receita.preparo.length; i++) {
output += "<li>" + receita.preparo[i] + "</li>\n";
}
output += "</ol>\n";

document.getElementById("output").innerHTML = output;

let tamanho = receita.ingredientes.length;
console.log("Tamanho do vetor ingredientes: " + tamanho);
function contar(){
  for (let i = 0; i < tamanho; i++) {
    console.log("Ingrediente " + (i+1) + ": " + receita.ingredientes[i]);
    }
}
