import leia from 'readline-sync'

    var lado = leia.questionFloat("QUANTOS CM TEM O PRIMEIRO LADO: ")
    var lado2 = leia.questionFloat("QUANTOS CM TEM O SEGUNDO LADO: ")
    var lado3 = leia.questionFloat("QUANTOS CM TEM O TERCEIRO LADO: ")

    if(lado + lado2 > lado3 && 
        lado + lado3 > lado2 &&
        lado2 + lado3 > lado){
            console.log("os lados podem formar um triangulo")
        }

    if(lado === lado2 || lado === lado3 || lado2 === lado3){
        console.log("O triangulo eh isosceles")
        } else if(lado === lado2 && lado === lado3){

            console.log("O triangulo eh equilatero")
            } else if(lado != lado2 && lado != lado3 && lado2 != lado3){
            console.log("O triangulo eh escaleno")}
        else{
            console.log("Nao é possivel formar um triangulo")
        } 