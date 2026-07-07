import leia from "readline-sync"

    console.log("==== desarme a bomba ====")
    console.log("uma bomba foi encontrada, voce precisa cortar o fio certo")
    console.log("se cortar o fio errado KABOOM!!!    e vc tera 3 tentativas")
    console.log("================")

     var fios = ["vermelho", "azul", 'verde', 'laranja', 'ciano',
                 'branco', 'cinza', 'roxo', 'marrom', 'rosa']
        var fioCorreto = fios[Math.floor(Math.random() * fios.length)]
        var TENTATIVAS = 3
        console.log(fioCorreto)
        var desarmou = false
        do {
        var escolha = leia.keyInSelect(fios, `escolha um fio para cortar, vc tem ${TENTATIVAS} tentativas`)
                var fioEscolhido = fios[escolha]
                console.log(fioEscolhido)

                if(fioEscolhido === fioCorreto){
                    console.log('voce desarmou a bomba. parabens!')
                    desarmou = true
                } else {

                    console.log("vc cortou o fio " + fioEscolhido)
                    console.log("esse nao era o fio correto, tente novamente")
                 TENTATIVAS--

                    fios.splice(escolha, 1) 
                    console.log("-----------------------")

                
                
                }
        } while (TENTATIVAS > 3 && desarmou === false)

            if(desarmou === false){

                console.log("KABOOOOM!!!!")
                console.log("o fio correto era o " + fioCorreto)
            }