let readlineSync = require("readline-sync")
let numero1 = Number(readlineSync.question("Digite um número:"))
let numero2 = Number(readlineSync.question("Digite outro número:"))
console.log(`A soma entre ${numero1} e ${numero2} é igual a ${numero1 + numero2}`)