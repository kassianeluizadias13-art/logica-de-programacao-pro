import leia from "readline-sync"

    var doaçao = leia.questionFloat("Qual valor pretende doar: ")

    if(doaçao === 10 || doaçao === 25 || doaçao === 50){

        console.log("Vc doou um valor padrao! Obrigado")
    } else {
        console.log("Vc doou um valor diferente! Obrigado")
    }