import leia from 'readline-sync'
// exercicio 4

    var qtdMacas = leia.questionFloat("O usuario comprou: ")
    
      if(qtdMacas  < 12 && qtdMacas ) {
        var valorProduto = qtdMacas * 0.30
        console.log("O valor total das maças custando 0.30: " + valorProduto.toFixed((2)))
      }  else if(qtdMacas >= 12){ 
        var valorProduto = qtdMacas * 0.25
        console.log("O valor total das maças custando 0.25: " + valorProduto.toFixed((2)))
      }
