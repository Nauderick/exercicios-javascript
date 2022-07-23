let input = require("readline-sync")
console.log("SEUS DÓLARES")
let valorEmReal = Number(input.question("Digite o valor em reais R$: "))
console.clear()
console.log("SEUS DÓLARES")
// cotação 22 de julho 15:14 UTC
console.log(`Você tem $${(valorEmReal/5.45).toFixed(2)} dólares`)