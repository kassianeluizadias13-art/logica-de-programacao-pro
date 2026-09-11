// import leia from "readline-sync"

// var cinema = []
// for(var i = 0;  i < 20; i++){
//     var cadeira = {
//         num: "A" + (i + 1),
//         ocupado: false,
//         tipo: (i < 5) ? "preferencial" : "normal"
//     }
//     cinema.push(cadeira)
// }
// function mostrarCinema(){
// console.log("------cadeiras------")
// cinema.forEach((cadeira) => {
//     var situacao = cadeira.ocupado === true ? "OCUPADA" : "LIVRE"
//         console.log(`Assentos - ${cadeira.num} | ${cadeira.tipo} | ${situacao}`)

// })

// }

// mostrarCinema()
// function reservarAssentos(){
//     var reserva = leia.question("Informe sua reserva: [A1-20]")
//     var encontrouCadeira = false
//     cinema.forEach((cadeira) => {
//         if(cadeira.num === reserva){
//             encontrouCadeira = true
//             if(cadeira.ocupado === true){
//                 console.log("cadeira ocupada. Tente novamente.")
//             } else {
//                 cadeira.ocupado = true 
//                 console.log("cadeira reservada com sucesso")
//             }
//             return
//         }
      
//     })
//     if(encontrouCadeira === false){
//         console.log("cadeira informada nao existe")
//     }
    
// }

// function cancelarAssentos(){

//     mostrarCinema()
//     var cancelar = leia.question("Informe qual assento quer cancelar: [A1-20]")
//     var encontrouCadeira = false
//     cinema.forEach((cadeira) => {
//         if(cadeira.num === cancelar){
//             encontrouCadeira = true
//             if(cadeira.ocupado === false){
//                 console.log("reserva cancelada")
//             } else {
//                 cadeira.ocupado = false
//                 console.log("cancelado com sucesso")
//             }
//             return
//         }
      
//     })
//     if(encontrouCadeira === false){
//         console.log("cadeira informada nao existe")
//     }
    
// }


// var opcao;
// do {

// console.log("\n---------CINEMA---------")
// console.log("1 - Mostrar assentos")
// console.log("2 - Reservar assentos")
// console.log("3 - Cancelar assentos")
// console.log("4 - Mostrar quantidades livres")
// console.log("5 - Mostrar quantidades ocupados")
// console.log("0 - sair")

// opcao = leia.questionInt("Informe uma opcao: ")

// if(opcao === 1){
//     mostrarCinema()
// } else if (opcao === 2){
// reservarAssentos()
// } else if (opcao === 3){
// cancelarAssentos()
// }else if (opcao === 4){
    
// } else if (opcao === 5){
    
// } else {
//     console.log("---------ENCERRANDO SISTEMA---------")
// }


// } while(opcao !== 0)
//     console.log("---------SISTEMA ENCERRADO---------")


    import leia from 'readline-sync';

var assentos = [];

function criarAssentos() {
    for (var i = 1; i <= 20; i++) {

        var tipo = "normal";

        if (i == 5 || i == 10 || i == 15 || i == 20) {
            tipo = "preferencial";
        }

        assentos.push({
            numero: i,
            ocupado: false,
            tipo: tipo
        });
    }
}

function mostrarAssentos() {
    console.log("\n--- ASSENTOS ---");

    assentos.forEach(function (assento) {
        var situacao = "";

        if (assento.ocupado == true) {
            situacao = "Ocupado";
        } else {
            situacao = "Livre";
        }

        console.log(
            "Assento " + assento.numero +
            " | " + assento.tipo +
            " | " + situacao
        );
    });
}

function reservarAssento() {
    var numero = leia.questionInt("\nDigite o numero do assento para reservar: ");
    var encontrado = false;

    for (var i = 0; i < assentos.length; i++) {

        if (assentos[i].numero == numero) {
            encontrado = true;

            if (assentos[i].ocupado == false) {
                assentos[i].ocupado = true;
                console.log("Assento reservado com sucesso!");
            } else {
                console.log("Esse assento ja esta ocupado.");
            }

            break;
        }
    }

    if (encontrado == false) {
        console.log("Assento nao encontrado.");
    }
}

function cancelarReserva() {
    var numero = leia.questionInt("\nDigite o numero do assento para cancelar: ");
    var encontrado = false;

    for (var i = 0; i < assentos.length; i++) {

        if (assentos[i].numero == numero) {
            encontrado = true;

            if (assentos[i].ocupado == true) {
                assentos[i].ocupado = false;
                console.log("Reserva cancelada com sucesso!");
            } else {
                console.log("Esse assento ja esta livre.");
            }

            break;
        }
    }

    if (encontrado == false) {
        console.log("Assento nao encontrado.");
    }
}

function quantidadeLivres() {
    var livres = 0;

    assentos.forEach(function (assento) {
        if (assento.ocupado == false) {
            livres++;
        }
    });

    console.log("\nQuantidade de assentos livres: " + livres);
}

function quantidadeOcupados() {
    var ocupados = 0;

    assentos.forEach(function (assento) {
        if (assento.ocupado == true) {
            ocupados++;
        }
    });

    console.log("\nQuantidade de assentos ocupados: " + ocupados);
}

function mostrarPorcentagemOcupacao() {
    var ocupados = 0;

    assentos.forEach(function (assento) {
        if (assento.ocupado == true) {
            ocupados++;
        }
    });

    var porcentagem = (ocupados / assentos.length) * 100;

    console.log("\nPorcentagem de ocupacao: " + porcentagem + "%");
}

criarAssentos();

var opcao;

do {
    console.log("\n==============================");
    console.log("       CINEMA");
    console.log("==============================");
    console.log("1 - Mostrar assentos");
    console.log("2 - Reservar assento");
    console.log("3 - Cancelar reserva");
    console.log("4 - Mostrar quantidade de assentos livres");
    console.log("5 - Mostrar quantidade de assentos ocupados");
    console.log("0 - Encerrar");
    console.log("==============================");

    opcao = leia.questionInt("Escolha uma opcao: ");

    switch (opcao) {

        case 1:
            mostrarAssentos();
            break;

        case 2:
            reservarAssento();
            break;

        case 3:
            cancelarReserva();
            break;

        case 4:
            quantidadeLivres();
            break;

        case 5:
            quantidadeOcupados();
            break;

        case 0:
            console.log("\nPrograma encerrado.");
            break;

        default:
            console.log("\nOpcao invalida.");
    }

} while (opcao != 0);

mostrarPorcentagemOcupacao();