import leia from 'readline-sync'

var num = leia.questionInt("digite o numero: ")

var cont = 0
    while(cont <= 10){
        var resultado = num * cont
        console.log(num + " X " + cont + " = " + resultado) 



    cont++
    }