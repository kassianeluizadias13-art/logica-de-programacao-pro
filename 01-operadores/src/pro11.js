import leia from "readline-sync"
// entrada Q12
var salario = leia.questionFloat("digite o salario: ")
//processando
var novoSalario = salario * 1.15

console.log("O novo salario sera de " + novoSalario.toFixed(2)) 