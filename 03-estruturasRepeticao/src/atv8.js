import leia from 'readline-sync'

var contador = 1
var s = 0
var m = 1
while(contador <= 6){
var numDigitado = leia.questionInt("digite seu numero " + contador +  ": ")
 contador++ 

 if(numDigitado % 2 === 0){
    m *= numDigitado
 } else {
    s += numDigitado
 }
} 

console.log("soma dos numeros impares: " + s)
console.log("produto dos numeros pares: " + m)


