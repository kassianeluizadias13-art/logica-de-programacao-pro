import leia from "readline-sync"

var valorTotalC1 = leia.questionFloat("valor Total da corrida um: " )
var valorTotalC2 = leia.questionFloat("valor Total da corrida dois: ")
var valorTotalC3 = leia.questionFloat("valor Total da corrida tres: ")
var valorTotalC4 = leia.questionFloat(" valor Total da corrida quatro: ")
var valorTotalC5 = leia.questionFloat("valor Total da corrida cinco: " )

var desconto = (valorTotalC1 + valorTotalC2+ valorTotalC3+ valorTotalC4+ valorTotalC5) * 0.25
var ValorTdascorridas = (valorTotalC1 + valorTotalC2+ valorTotalC3+ valorTotalC4+ valorTotalC5) - desconto

console.log("O valor total com desconto eh: " + ValorTdascorridas.toFixed(2))