import leia from 'readline-sync'

var numDigitado = leia.questionInt("digite um numero: ")

while(numDigitado >= 0){
    console.log(numDigitado);
    numDigitado--
}