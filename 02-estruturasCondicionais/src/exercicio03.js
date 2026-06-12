import leia from  "readline-sync"
    // exercicio 3

     var placa = leia.question("Digite digitos da sua placa: ")
     var ultimoDigito = placa[placa.length - 1] // para ir ao ultimo digito
  
        if(ultimoDigito === '0' || ultimoDigito === '1'){

            console.log("voce nao pode rodar na segunda-feira")
         } else if(ultimoDigito === "2" || ultimoDigito === '3'){

            console.log("voce nao pode rodar na terça-feira") 

         } else if(ultimoDigito === "4" || ultimoDigito === '5'){

                console.log("voce nao pode rodar na quarta-feira")

         } else if(ultimoDigito === "6" || ultimoDigito === '7'){

            console.log("voce nao pode rodar na quinta-feira")

         } else if(ultimoDigito === "8" || ultimoDigito === '9'){

        console.log("voce nao pode rodar na sexta-feira")
    }


//switch case

switch(ultimoDigito) {
 case '0':
 case '1':
    console.log("vc nao pode rodar na segunda-feira")
break

 case '2':
 case '3':
    console.log("vc nao pode rodar na terça-feira")
break

 case '4':
 case'5':
    console.log("vc nao pode rodar na quarta-feira")
break

 case '6':
 case "7":
    console.log("vc nao pode rodar na quinta-feira")
break 

case '8':
 case '9':
    console.log("vc nao pode rodar na sexta-feira")
break

default:
    console.log("invalido")

}