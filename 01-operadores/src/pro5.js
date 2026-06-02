import leia from "readline-sync"

var totalEleitores = leia.questionInt("informe o total de eleitores da cidade: ")
var totalBranco = leia.questionInt("informe qtd de votos brancos: ")
var totalNulos = leia.questionInt("informe qtd  de votos nulos: ")
var totalValidos = leia.questionInt("informe qtd de votos validos: ") 

var percentualVotosBrancos = (totalBranco / totalEleitores) * 100
var percentualVotosNulos = (totalNulos / totalEleitores) * 100
var percentualVotosValidos = (totalValidos / totalEleitores) * 100

console.log("pencentual de votos brancos " + percentualVotosBrancos.toFixed(2))
console.log("pencentual de votos nulos " + percentualVotosNulos.toFixed(2))
console.log("pencentual de votos validos " + percentualVotosValidos.toFixed(2))

