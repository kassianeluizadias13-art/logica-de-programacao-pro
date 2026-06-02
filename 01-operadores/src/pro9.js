import leia from "readline-sync"
//entrada Q9
var metros = leia.questionFloat("digite o numero em metros: ")
//processamento
var centimetros = metros * 100
var milimetros = metros * 1000

console.log("---resultado---")
console.log(metros.toFixed(2) + " m")
console.log(centimetros.toFixed(2) + " cm")
console.log(milimetros.toFixed(2) + " mm")