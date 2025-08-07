//informações e atributos do heroi
let nomeHeroi = "Zhè";

//Função para calcular Saldo de vitórias
function nivelRanqueado(vitorias, derrotas) {
    let nivelRanqueado = 120 - 19;
    return nivelRanqueado;
}

//Calculando saldo de vitórias
let vitorias = 120;
let derrotas = 19;
let saldoVitorias = nivelRanqueado(vitorias, derrotas);

//Verificando nivel do heroi
if (nivelRanqueado < 10) {
    nivelHeroi = "Ferro";
} else if (nivelRanqueado >= 11 && nivelRanqueado < 20) {
    nivelHeroi = "Bronze";
} else if (nivelRanqueado >= 21 && nivelRanqueado < 50) {
    nivelHeroi = "Prata";
} else if (nivelRanqueado >= 51 && nivelRanqueado < 80) {
    nivelHeroi = "Ouro";
} else if (nivelRanqueado >= 81 && nivelRanqueado < 90) {
    nivelHeroi = "Diamante";
} else if (nivelRanqueado >= 91 && nivelRanqueado < 100) {
    nivelHeroi = "Lendário";
} else {
    nivelHeroi = "Imortal";
}

//Mensagem de saída
console.log("O Herói " + nomeHeroi + " tem de saldo de " + saldoVitorias + " vitórias e está no nível " + nivelHeroi);