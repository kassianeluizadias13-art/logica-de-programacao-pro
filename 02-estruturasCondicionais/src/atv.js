import leia from 'readline-sync'

    var aluno = leia.question("Digite o nome do aluno: ")
     var n1 = leia.questionFloat("Primeira nota do aluno: ")
     var n2 = leia.questionFloat("Segunda nota do aluno: ")
     var n3 = leia.questionFloat("Terceira nota do aluno: ")
     var n4 = leia.questionFloat("Quarta nota do aluno: ")
    var DiasLetivos = leia.questionInt(" Dias letivos que o aluno veio: ") 


    var media = (n1 + n2 + n3 + n4) / 4
    var frequencia = (200 / DiasLetivos) * 100

if(media >= 7){
    console.log('Aprovado por notas')
} else 
console.log("Reprovado por notas")

if(frequencia >= 75){
    console.log("Aprovado por frequencia")
} else 
console.log("Reprovado por faltas")




