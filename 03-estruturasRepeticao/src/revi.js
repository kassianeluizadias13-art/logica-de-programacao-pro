import leia from "readline-sync"


var qtdAbastecimento = leia.questionInt("abastecimento: ")

var Gasolina = 0;
var etanol = 0;
var diesel = 0;
var valorT = 0;

var contGasolina = 0
var contEtanol = 0 
var contDiesel = 0

for(var i = 0; i < qtdAbastecimento; i++){
    console.log("1 - gasolina")
    console.log("2 - etanol")
    console.log("3 - diesel")

    var tipoCombustivel = leia.questionInt("informe o tipo de combustivel: ")
    var qtdCombustivel = leia.questionFloat("INFORME OS LITROS: ")

    if(qtdCombustivel === 1){
        Gasolina += + qtdCombustivel
        contGasolina++
    } else if(qtdCombustivel === 2){
etanol += + qtdCombustivel

contEtanol++

    }else if(qtdCombustivel === 3){
        diesel += + qtdCombustivel
contDiesel++

    } else {
        console.log("informação invalida")
    }

}




console.log("qtd abastecimento gasolina: " + Gasolina)
console.log("qtd abastecimento etanol: " + etanol)
console.log("qtd abastecimento diesel: " + diesel)

console.log("qtd total dos combustiveis: " + Gasolina + etanol + diesel)

console.log("valor total: " + (Gasolina * 6.2) + (diesel * 5.9) + (etanol * 4.3))
