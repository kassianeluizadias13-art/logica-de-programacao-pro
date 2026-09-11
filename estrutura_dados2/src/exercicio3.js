import leia from "readline-sync"

var compromissos = [
    {
        descricao: "jogar roblox",
        dia: "terça",
        horario: "13:00",
        concluido: false

    },

    {
        descricao: "comer",
        dia: "terça",
        horario: "17:00",
        concluido: false
    },
    {
        descricao: "dar raçao pro gato",
        dia: "terça",
        horario: "19:00",
        concluido: false
    },
    {
        descricao: "estudar",
        dia: "quarta",
        horario: "14:00",
        concluido: false
    }

    
]
var opcao
do {
    console.log("\n=== MENU ===")
    console.log("1 - listar todos compromissos")
    console.log("2 - listar compromissos pendentes")
    console.log("3 - marca compromisso como concluido")
    console.log("4 - mostrar compromissos concluidos")
    console.log("5 - QTD de compromissos concluidos")
    console.log("6 - QTD de compromissos pendentes")
    console.log("0 - sair")
    opcao = leia.questionInt("escolha uma opcao: ")
} while(opcao != 0)

    switch(opcao){
    case 1: 
        console.log("=== compromissos ===")
        compromisso.forEach(function(compromisso){
            console.log(" descriçao: ", compromisso.descricao,  " dia: ", compromisso.dia,
                "horario: ", compromisso.horario)
        })
        break
    case 2: 
        console.log("=== compromissos pendentes ===")
        compromissos.forEach(function(compromisso){
            if(compromisso.concluido == false){
                console.log(" descriçao: ", compromisso.descricao,  " dia: ", compromisso.dia,
                    "horario: ", compromisso.horario
                )
            } 
    }) 
        break
    case 3:
        var num = leia.questionInt("digite o numero de compromisso para concluir: ")
        if(num >= 1 && num <= compromissos.length){
            console.log("compromisso concluido com sucesso")

        } else {
            console.log("compromisso nao encontrado")
        } 
        break
    case 4:
        var dia = leia.question("digite o dia: ")
        
};
    
