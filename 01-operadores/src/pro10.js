import leia from "readline-sync"
//Q10

var nota1 = leia.questionFloat("digite primeira nota: ")
var nota2 = leia.questionFloat("digite segunda nota: ")
var nota3 = leia.questionFloat("digite terceira nota: ")

var media = (nota1 + nota2 + nota3) / 3
var resultado = media >= 7 ? "APROVADO" : "REPROVADO"

console.log("A media do aluno eh: " + media.toFixed(2) + " ELE ESTA: "+ resultado)
