import leia from "readline-sync"

var shampoo = leia.questionFloat("O valor do shampoo eh: ")

var desconto = shampoo / 10
var valorTshampoo = (shampoo) - desconto

 console.log("Valor do shampoo eh: " + shampoo)
 console.log("Valor com o desconto: " + valorTshampoo.toFixed(2))