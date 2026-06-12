import leia from 'readline-sync'
// exercicio "5" / 01

    var cliente1 = leia.question("Nome do cliente: ")
    var valor = leia.questionFloat("O cliente gastou: ")
    var cliente2 = leia.question("Nome do cliente: ")
    var valor2 = leia.questionFloat("O cliente gastou: ")

    var gastoTotal = valor + valor2
    console.log("o gasto total dos clientes: " + gastoTotal.toFixed((2)))
    var valorMedio = gastoTotal / 2
    console.log("O valor medio da compra: " + valorMedio.toFixed((2))) 
    {
 
     if(valor > 20)
        console.log("Clientes que gastaram maior que 20: " + cliente1)
    } if (valor2 > 20){
     console.log("Clientes que gastaram maior que 20: " + cliente2)}

