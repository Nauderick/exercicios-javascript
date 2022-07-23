let input = require("readline-sync")
let numero = Number(input.question("Digite um numero: "))
let i = numero - 1
let fatorial = numero
do {
    fatorial *= i
    i--
} while (i != 0);
console.log(`O fatorial de ${numero} é igual a ${fatorial}`)