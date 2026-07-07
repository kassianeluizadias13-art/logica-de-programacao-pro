import leia from 'readline-sync'

    var idade = leia.questionInt("Digite a idade: ")
    var salario = leia.questionFloat("Quanto recebe: ")
    var nomeLimpo = leia.keyInSelect(["s", "n"], "Possui nome limpo? : ")