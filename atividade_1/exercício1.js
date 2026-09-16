const entrada = require('readline-sync');

const produto = entrada.question("Qual o nome do produto: ");
const qtdporHora = entrada.questionInt("Quantas pecas sao produzidas por hora? ");
const horas = entrada.questionInt("Quantas horas trabalhadas?");
const proDiaria = qtdporHora * horas

console.log("=== RELATORIO DE PRODUCAO  ===");
console.log(`Produto: ${produto}`);
console.log(`Pecas produzidas por hora: ${qtdporHora}`);
console.log(`Pecas produzidas no dia ${proDiaria}`);
console.log("===============================");