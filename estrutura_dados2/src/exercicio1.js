import leia from "readline-sync"

var cinema = []
for(var i = 0;  i < 20; i++){
    var cadeira = {
        num: "A" + (i + 1),
        ocupado: false,
        tipo: (i < 5) ? "preferencial" : "normal"
    }
    cinema.push(cadeira)
}
function mostrarCinema(){
console.log("------cadeiras------")
cinema.forEach((cadeira) => {
    var situacao = cadeira.ocupado === true ? "OCUPADA" : "LIVRE"
        console.log(`Assentos - ${cadeira.num} | ${cadeira.tipo} | ${situacao}`)

})

}

mostrarCinema()
function reservarAssentos(){
    var reserva = leia.question("Informe sua reserva: [A1-20]")
    var encontrouCadeira = false
    cinema.forEach((cadeira) => {
        if(cadeira.num === reserva){
            encontrouCadeira = true
            if(cadeira.ocupado === true){
                console.log("cadeira ocupada. Tente novamente.")
            } else {
                cadeira.ocupado = true 
                console.log("cadeira reservada com sucesso")
            }
            return
        }
      
    })
    if(encontrouCadeira === false){
        console.log("cadeira informada nao existe")
    }
    
}

function cancelarAssentos(){

    mostrarCinema()
    var cancelar = leia.question("Informe qual assento quer cancelar: [A1-20]")
    var encontrouCadeira = false
    cinema.forEach((cadeira) => {
        if(cadeira.num === cancelar){
            encontrouCadeira = true
            if(cadeira.ocupado === false){
                console.log("reserva cancelada")
            } else {
                cadeira.ocupado = false
                console.log("cancelado com sucesso")
            }
            return
        }
      
    })
    if(encontrouCadeira === false){
        console.log("cadeira informada nao existe")
    }
    
}


var opcao;
do {

console.log("\n---------CINEMA---------")
console.log("1 - Mostrar assentos")
console.log("2 - Reservar assentos")
console.log("3 - Cancelar assentos")
console.log("4 - Mostrar quantidades livres")
console.log("5 - Mostrar quantidades ocupados")
console.log("0 - sair")

opcao = leia.questionInt("Informe uma opcao: ")

if(opcao === 1){
    mostrarCinema()
} else if (opcao === 2){
reservarAssentos()
} else if (opcao === 3){
cancelarAssentos()
}else if (opcao === 4){
    
} else if (opcao === 5){
    
} else {
    console.log("---------ENCERRANDO SISTEMA---------")
}


} while(opcao !== 0)
    console.log("---------SISTEMA ENCERRADO---------")