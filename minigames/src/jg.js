import leia from "readline-sync";

var opcoes = ["PEDRA", "PAPEL", "TESOURA"];

var escolhaComputador = Math.floor(Math.random() * 3);
var escolhaUsuario = leia.keyInSelect(opcoes, "Escolha sua opcao:");

if (escolhaUsuario === -1) {

    console.log("Opcao invalida, jogo cancelado!!!");

} else {

    console.log("Voce escolheu: " + opcoes[escolhaUsuario]);
    console.log("O computador escolheu: " + opcoes[escolhaComputador]);

    if (escolhaComputador === escolhaUsuario) {

        console.log("EMPATE!");

    } else if (
        (escolhaUsuario === 0 && escolhaComputador === 2) ||
        (escolhaUsuario === 1 && escolhaComputador === 0) ||
        (escolhaUsuario === 2 && escolhaComputador === 1)
    ) {

        console.log("USUARIO GANHOU!!");

    } else {

        console.log("COMPUTADOR GANHOU!!!");

    }
}