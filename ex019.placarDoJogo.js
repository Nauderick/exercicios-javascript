let input = require("readline-sync")
console.log("Informe o placar final do jogo")
let timeA = Number(input.question("Placar do time A :"))
let timeB = Number(input.question("Placr do time B :"))
let diferenca = Math.abs(timeA - timeB)
let status = ``

if(diferenca === 0) {
    status = `EMPATE`
} else if(diferenca <= 3) {
    status = `NORMAL`
} else {
    status = `GOLEADA`
}

console.clear()
console.log("Placar final do jogo")
console.log("====================")
console.log(`Time A ${timeA} x ${timeB} Time B`)
console.log(`Status: ${status}`)