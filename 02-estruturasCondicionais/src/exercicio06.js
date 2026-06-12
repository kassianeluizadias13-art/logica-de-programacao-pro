import leia from "readline-sync"
// exercicio 6 / 02

var valorProduto = leia.questionFloat("O valor do produto desejado: ")

    var moeda = leia.questionFloat("Quantas moedas de 1 Real: ")
    var moeda1 = leia.questionFloat("Quantas moedas de 50 centavos: ")
    var moeda2 = leia.questionFloat("Quantas moedas de 25 centavos: ")
    var moeda3 = leia.questionFloat("Quantas moedas de 10 centavos: ")
    var moeda4 = leia.questionFloat("Quantas moedas de 5 centavos: ")
         var number1 = moeda1 * 0.50
         var number2 = moeda2 * 0.25
         var number3 = moeda3 * 0.10
         var number4 = moeda4 * 0.5
             var cofre =  moeda + number1 + number2 + number3 + number4
      if(cofre >= valorProduto)  {

        console.log("Vc pode comprar")
      } if(cofre < valorProduto) {

        console.log("Vc não pode comprar ainda")
      }