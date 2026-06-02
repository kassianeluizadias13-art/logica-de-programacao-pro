import leia from "readline-sync"
//Q2 entrada.
// ler as dimensoes de um retangulo e calcular a area =

var altura = leia.questionFloat("Digite a altura do retangulo: ");
var largura = leia.questionFloat("Digite a largura do retangulo: ");
//processamento
var area = altura * largura;
//saida
 console.log("A area do retangulo eh:" + area.toFixed(2));

