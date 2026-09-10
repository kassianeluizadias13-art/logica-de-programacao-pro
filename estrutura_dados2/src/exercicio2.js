import leia from 'readline-sync'
const passageiros = [
    {
        nome: "Carlos",
        idade: 25,
        destino: "São Paulo",
        pagouPassagem: true
    },
    {
        nome: "Maria",
        idade: 32,
        destino: "Curitiba",
        pagouPassagem: true
    },
    {
        nome: "João",
        idade: 17,
        destino: "Florianópolis",
        pagouPassagem: false
    }
];
var menores = 0
var idosos = 0 
var npago = 0
var somaida = 0
passageiros.forEach(function(passageiro){
    if (passageiros.idade < 18){
        menores++
    }
    if(passageiros.idade >= 60 ){
        idosos++
    }
    if (passageiro.pagouPassagem == false){
        npago++
    }
    somaida = somaida + passageiro.idade
})

var mediaIdade = somaida / passageiros.length


console.log("QTD de passageiros: ", passageiros.length);
console.log("QTD de menores de idade: ", menores);
console.log("QTD de += 60 anos: ", idosos);
console.log("QTD de passageiros que nao pagaram: ", npago)
console.log("Media de idade dos passageiros: ", mediaIdade)

var destinoInformado = leia.question("Digite o destino: ")
console.log("Passageiros para: ", destinoInformado)

var encontrado = false
passageiros.forEach(function(passageiros){
    if (passageiros.destino.toLocaleLowerCase() == destinoInformado.toLocaleLowerCase()){
        console.log("nome: ", passageiros.nome + "/ idade ", passageiros.idade +
            "pagou: ", passageiros.pagouPassagem
        )
        encontrado = true
    }
})
if(encontrado == false){
    console.log("nenhum passageiro encontrado para esse destino")
}