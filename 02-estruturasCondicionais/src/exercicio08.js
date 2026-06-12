import leia from "readline-sync"

var Mes = leia.question("Digite seu mes: ")

if(Mes === 'janeiro' || Mes === 'marco' || Mes === 'maio' 
    || Mes ===  'julho' || Mes === 'agosto' || Mes ===  'outubro' || Mes === 'dezembro'){

        console.log("Seu mes contem 31 dias!")
        } else if(Mes === 'abril' || Mes === 'junho' || Mes === 'setembro' || Mes === 'novembro'){

            console.log("Seu mes contem 30 dias!")
        } else if(Mes === 'fevereiro'){

            console.log("Seu mes contem 28/29 dias!")
        }

