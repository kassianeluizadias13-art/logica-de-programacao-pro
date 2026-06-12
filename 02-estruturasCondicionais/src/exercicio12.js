import leia from "readline-sync"
     var idade = leia.questionInt("Idade do usuario: ")

     if(idade >= 18){
        console.log("Permitido")
     } else if(idade < 18) {
        console.log("peça permissão aos seus pais: ")
        var permissao = leia.question("Digite sim ou nao: ")
        if(permissao === "sim"){
            var nome = leia.question("Digite seu nome: ")
            console.log(`${nome} Voce tem permissao`)
        } else if(permissao === "nao"){
  
      console.log("Vc nao tem permissao")
        }
     }
     

        
    