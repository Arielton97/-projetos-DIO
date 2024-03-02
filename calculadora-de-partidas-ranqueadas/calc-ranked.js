
let saldoVitoria = 97
let saldoDerrota = 40
let resultado = saldoDeVitoriaEDerrota(saldoVitoria, saldoDerrota)
let nivel = resultado


function saldoDeVitoriaEDerrota(saldoVitoria, saldoDerrota) {
    return saldoVitoria - saldoDerrota
}

if (nivel < 10) {
    nivel = "Ferro"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (resultado >= 21 && resultado <= 30) {
    nivel = "Prata"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (nivel >= 51 && nivel <= 80) {
    nivel = "Ouro"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} else if (resultado >= 101) {
    nivel = "Imortal"
    console.log("O Heroi tem saldo de **" + resultado + "** e está no nível de **" + nivel + "**")
} 