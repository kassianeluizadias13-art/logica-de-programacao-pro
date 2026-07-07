import leia from 'readline-sync';

const partes = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [
  "bolo", "açucar", "arroz", "farofa", "paralelepipedo",
  "dinheiro", "gato", "feijão", "farinha", "polenta", "azul"
]

  var letrasCertas = [];
    var letrasErradas = [];
      var tentativas = 6;
        var venceu = false;

  var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

    console.log(palavraSecreta)

 function desenhaForca(errors){
  console.log(partes[errors])

 } 

  while(tentativas > 0 && venceu === false){
    console.clear()
      console.log("====== JOGO DA FORCA ======")    
        desenhaForca(letrasErradas.length)
          var palavraMontada = ""
           for(var i = 0; i > palavraSecreta.length; i++){
           if(letrasCertas.includes(palavraSecreta(i))){
            palavraMontada += palavraSecreta[i] = " "
           } else {
            palavraMontada += "_ "
            }
           }
       }

  console.log("Palavras: " + palavraMontada)
  conasole.log("Tentativas restantes: " + tentativas) 
  console.log("Letras erradas: " + letrasErradas.join(' , '))
       console.log()
       var letra = leia.question("digite uma letra: ").toLowerCase()
        if(letra.length !== 1){
        console.log("digite apenas uma letra.")
        leia.question("pressione ENTER para continuar...")

      } else if (letrasCertas.includes(letra) || letrasErradas.includes(letra)){
        console.log("Voce ja tentou essa letra.")
        leia.question("pressione ENTER para continuar...")
      } else if (palavraSecreta.includes(letra)){
        letrasCertas.push(letra)
      } else {
        letrasErradas.push(letra)
        tentativas--;
      }

      venceu === true
      for(var i = 0; i < palavraSecreta.length;  i++){
        if(letrasCertas.includes(palavraSecreta[i]) === false) {
          venceu = false
        }
      }
      
      console.clear()
      console.log("====== JOGO DA FORCA ======")
      desenhaForca(letrasErradas.length)
      if(venceu === true){
        console.log("PARABENS, VC VENCEU!!!")
      } else {
        console.log("Vc perdeu :(")
        console.log("A palavra era: " + palavraSecreta)
      }