import leia from 'readline-sync'

    //16 / 06

    let valor = leia.questionFloat("Digite valor da sua compra: ")
    let vip = leia.keyInSelect(["s", "n"], "vc eh vip?: ")
    
    let desconto = valor * 0.20
    let desconto2 = valor * 0.10    
    let desconto3 = valor * 0.5
    let preçoFinal = valor - desconto
    let preçoFinal2 = valor - desconto2
    let preçoFinal3 = valor - desconto3
    
    if(vip === 0 && valor > 1000){
        console.log("Parabens! vc recebeu 20% de desconto, novo valor para pagar eh de " + preçoFinal)
    } else if(vip === 0 && valor > 500){
    
        console.log("Parabens! vc recebeu 10% de desconto, novo valor para pagar eh de " + preçoFinal2)
    } if(vip === 1){
        console.log("Parabens! vc recebeu 5% de desconto, novo valor para pagar eh de " + preçoFinal3)
    }