import leia from "readline-sync"
// exercicio 1

    var senhaPadrao = "6767"
     var senhaDigitada = leia.question("Digite sua senha: ")
    
     if(senhaDigitada === senhaPadrao){

        console.log("acesso permitido")

     } else {
        console.log("acesso negado")
     }   
    