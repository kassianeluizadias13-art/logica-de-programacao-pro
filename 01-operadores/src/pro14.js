import leia from "readline-sync"
  var distancia = leia.questionInt("a distancia percorrida: ")
  var litros = leia.questionInt("A QTD de litros gastos: ")

    var consumo = distancia / litros 
    console.log("o consumo medio eh: " + consumo + "KM/L")