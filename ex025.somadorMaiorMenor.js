let input = require("readline-sync")
let i = 1
let somaValores = 0
let maior = 0
let menor = 0
while (i <= 5) {
    let valor = Number(input.question(`Digite o ${i}° valor: `))
    if(valor > maior) maior = valor
    if(i == 1) menor = valor
    if(valor < menor) menor = valor
    somaValores += valor
    i++
}
console.log("===================")
console.log("Somador maior menor")
console.log("===================")
console.log(`Total dos valores: ${somaValores}`)
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
console.log("===================")