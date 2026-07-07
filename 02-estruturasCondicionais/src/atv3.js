import leia from "readline-sync"

    var hrs = leia.questionFloat("QTD de horas que o veiculo ficou: ")
    var cartao = leia.keyInSelect(["s", "n"], "O motorista tem cartao fidelidade? : ")

    if(cartao === 0)
        var valor = 0
        
       
        if (hrs === 1) {
            valor = 8;
        } else if (hrs <= 3) {
            valor = 15;
        } else if (hrs <= 6) {
            valor = 22;
        } else if (hrs <= 24) {
            valor = 30;
        } if (cartao === 0) {
            valor = valor * 0.15
            console.log("Parabens! vc recebeu 15% de desconto")
        }
        
        console.log("Valor para pagar: R$ " + valor.toFixed((2)))