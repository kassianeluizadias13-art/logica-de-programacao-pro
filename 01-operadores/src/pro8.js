import leia from "readline-sync"
//Q7
var ValorProduto = leia.questionFloat("Valor do produto eh: ")

if(ValorProduto < 20){ 
var valorFinal = ValorProduto + (ValorProduto * 0.45)
console.log("valor final do produto: " + valorFinal.toFixed(2))
 } else {

var valorFinal = ValorProduto + (ValorProduto * 0.30)
console.log("valor final do produto eh: " + valorFinal.toFixed(2))

 }

