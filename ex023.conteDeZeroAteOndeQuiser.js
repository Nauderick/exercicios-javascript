let input = require("readline-sync")
let i = 0
let c = Number(input.question("Digite um número: "))
let pulo = Number(input.question("De quanto será o pulo? :"))
console.clear()
while (i <= c) {
    console.log(i)
    if(pulo <= 0) pulo = 1
    i += pulo
}