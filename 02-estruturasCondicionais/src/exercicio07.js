import leia from "readline-sync"

    var Salario = leia.questionFloat("Seu salario eh: ")
    var emprestimo = leia.questionFloat("Valor do emprestimo pego: ")
    var Prestacoes = leia.questionFloat("Digite suas prestaçoes: ")

    var valorPrestaçao = emprestimo / Prestacoes
    if(valorPrestaçao <= Salario * 0.30){

        console.log("emprestimo pode ser concedido")
    } else {

        console.log("emprestimo nao pode ser concedido")
    }
    