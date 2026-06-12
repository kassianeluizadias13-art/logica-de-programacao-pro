// && E  - so vai dar vdd se todos forem vdds
// ou - so vai dar falso se todos forem falsos
var idade = 18
temCnh = true
        if(idade < 1 ){
            console.log("recem nascido")
console.log

        }else if(idade >= 1 && idade <= 12) {

            console.log("Cria")
        } 
        else if(idade > 12 && idade < 18)
            {
                console.log("Adolescente")
            } else if(idade >= 18 && idade <= 60) {
    console.log("Adulto")
        } else if(idade >= 18 && idade <= 60) {

console.log("Idoso")

        }

var mediafinal = 10

if(mediafinal >= 7) {

    console.log("aprovadooo ye")
} else if(mediafinal >= 5 && mediafinal < 7){

    console.log("Em recuperação")
    } else {
        console.log("reprovado :(")
    }

    var diaSemana = "quarta"

if(diaSemana === "sabado" || diaSemana === "domingo"){
    console.log("final de semana")
    } else {

    console.log("dia util")
    }

var formaPagamento = "dinheiro"
var valorProduto = 15.8
if(formaPagamento === "pix" || formaPagamento === "dinheiro" || formaPagamento === "debito") {
    if(formaPagamento === "debito") {
        var valorfinal = valorProduto + (valorProduto * 0.5)
        console.log("valor do produto eh: " + valorfinal.toFixed((2))) 
    } else {
        console.log("valor do produto ehh: " + valorProduto.toFixed((2))) 
    } 
} else {
        var valorfinal = valorProduto + (valorProduto * 0.15)
        console.log("valor do produto eh: " + valorfinal.toFixed((2)))
    }

    //desafio par ou impar

    var numero = 3
    if(numero % 2 === 0) /// % = 10 % 3 = 1 pois fica 3, 3, 3 e sobra 1
    {
    console.log("par")

    } else { console.log("impar") }

//switch case
    var cor = "amarelo"
        switch (cor.toLowerCase()){
         case "vermelho":
         console.log("pare")
    break
         case "amarelo":
         console.log("atençao!")
    break
         case "verde":
         console.log("siga")
    break
        default: 
         console.log("INVALIDO")
         // case sensitive
    }
// switch case 2
    var idioma = "japanese"
    switch(idioma){
            case 'en':
             console.log("hii lol")
        break
            case 'es':
             console.log("Hola XD")
        break
            case 'ptbr':
             console.log("Opa uai so")
        break
            case "japanese":
             console.log("konnichiwa :3")
        break
            default:
             console.log("invalido")
    }

      /// operador ternario 
        var idade = 22
        var eMaior = idade => 18 ? "maior de idade" : "menor de idade"
        console.log(eMaior)
        /// ou console.log(idade => 18 ? "maior de idade" : "menor de idade")