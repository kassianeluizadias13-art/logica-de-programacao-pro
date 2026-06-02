import leia from "readline-sync"

// q5 ENTRADA converçao de temperatura =

var celcius = leia.questionFloat("Digite a temperatura em Graus Celsius: ")

//processamento 
var farehaint = (celcius * 1.8) + 32 
var kelvin = celcius + 273.15

// saida
console.log(celcius +  " graus celsius eh igual " + farehaint +" graus farehaint.")
 console.log(celcius +  " graus kelvin eh igual " + kelvin + " graus kelvin.")