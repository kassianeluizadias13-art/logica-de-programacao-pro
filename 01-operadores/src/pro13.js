import leia from "readline-sync"

var horas = leia.questionInt("as horas sao: ")
var minutos = leia.questionInt("e os minutos sao: ")

var HrspraMin = horas * 60
var minutosPseg = (HrspraMin + minutos) * 60

console.log("as hrs em min sao: " + HrspraMin)
console.log("as hrs em segundos sao: " + minutosPseg)


