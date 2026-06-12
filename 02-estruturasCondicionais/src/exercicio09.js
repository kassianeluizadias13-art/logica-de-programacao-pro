import leia from 'readline-sync'

var nome = leia.question("Digite o nome do funcionario: ")
var salario = leia.questionFloat("Digite o salario do funcionario: ")
var filhos = leia.questionInt("Quantos filhos tem? : ")
var aumento = salario * 0.02
var aumento2 = salario * 0.05
var aumento3 = salario * 0.07
var aumento4 = salario * 0.10
var aumento5 = salario * 0.15
if(filhos === 0){

    console.log("O salario novo 2% de aumento: " + aumento)
} if(filhos === 1){

    console.log("O salario novo 5% de aumento: " + aumento2) }
    
    if(filhos === 2){

        console.log("O salario novo 7% de aumento: " + aumento3) }
        
        if(filhos === 3){

            console.log("O salario novo 10% de aumento: " + aumento4) }

            if(filhos >= 4){
          console.log("O salario novo 15% de aumento: " + aumento5) }
                
            
            
    

