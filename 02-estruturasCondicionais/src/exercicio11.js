import leia from 'readline-sync'

var time1 = leia.questionInt("Quantos gols o time fez: ")
var time2 = leia.questionInt("Quantos gols o time fez: ")

if(time1 === time2)
{

    console.log("empate")
} 
if(time1 > time2)
{

    console.log("o time 1 ganhou")}
    if(time1 < time2)
{

    console.log("o time 2 ganhou") }