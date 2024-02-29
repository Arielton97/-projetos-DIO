
// Variáveis definidas como let, para armazenar o nome e a qtd de XP do Herói
let nomeHeroi = "Arielton";
let qtdXP = 2024;
let nivel = qtdXP; // Inicializado com a quantidade de XP, mas pode ser removido

// Estrutura de decisão if else para determinar o nível do Heroi
if (qtdXP <= 1000) {
  nivel = "Ferro";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 1001 && qtdXP <= 2000) {
  nivel = "Bronze";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 2001 && qtdXP <= 5000) {
  nivel = "Prata";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 5001 && qtdXP <= 7000) {
  nivel = "Ouro";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 7001 && qtdXP <= 8000) {
  nivel = "Platina";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 8001 && qtdXP <= 9000) {
  nivel = "Ascendente";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else if (qtdXP >= 9001 && qtdXP <= 10000) {
  nivel = "Imortal";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
} else {
  nivel = "Radiante";
  console.log("O Heroi de nome **" + nomeHeroi + "** está no nível de **" + nivel + "**");
}
