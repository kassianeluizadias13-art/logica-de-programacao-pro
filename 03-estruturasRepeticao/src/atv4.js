import leia from 'readline-sync'

var menorValor, maiorValor;

for(var cont = 1; cont <= 15; cont++){
    var numDigitado = leia.questionInt("digite um numero: " + cont + ": ")

    if(cont === 1){
        maiorValor = numDigitado
        menorValor = numDigitado
    } else if(numDigitado > maiorValor){
        maiorValor = numDigitado
    }else if(numDigitado < menorValor){
        
    }
} 
