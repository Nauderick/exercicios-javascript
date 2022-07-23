let input = require("readline-sync")
let numero = Number(input.question("Digite um número: "))
if (numero % 2 === 0) console.log(`Par!`)
    else console.log(`Impar!`)