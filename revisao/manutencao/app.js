// ☐ Solicitar nome da máquina, valor das peças, horas e meses desde a última manutenção.
// ☐ Chamar as funções pelo objeto importado e exibir relatório final completo.

const entrada = require('readline-sync');
const funcoes = require('./funcoes.manutencao');

const maquina = entrada.question("Digite o noem da maquina: ")
const valorPecas = entrada.questionFloat("Digite o valor das peças em R$: ");
const horas = entrada.questionInt("quantas horas trabalhadas? ");
const meses = entrada.questionInt("Quantos meses desde a ultima manutencao: ");

const maoObra = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorPecas, horas);