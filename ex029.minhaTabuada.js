let input = require("readline-sync")
console.log("====TABUADA====")
let numero = Number(input.question("Escolha um numero: "))
for(let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}