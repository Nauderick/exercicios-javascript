let readLineSync = require("readline-sync")
let n1 = Number(readLineSync.question("Digite um número:"))
let n2 = Number(readLineSync.question("Digite outro número:"))
console.log(`A média entre ${n1} e ${n2} é igual a ${(n1 + n2) / 2}`)