import leia from 'readline-sync'

    var temperatura = leia.questionInt("TEMPERATURA ATUAL DA MAQUINA: ")

    if(temperatura < 50){
        console.log("Resfriamento critico")

    } if (temperatura > 50 && temperatura <= 89){
        console.log("Normal")
    } if(temperatura > 90 && temperatura <= 110){
        console.log("Atenção!")
    } if(temperatura > 110){
        console.log("Superaquecimento!!!")
    } else{
        console.log("ERRO")
    }