let input = require("readline-sync")
let i = 1
let numerosNegativos = 0
while (i <= 5) {
    let numero = Number(input.question(`Digite o ${i}° numero: `))
    if(numero < 0) numerosNegativos++
    i++
}
console.log(`Quantidade de numeros negativos: ${numerosNegativos}`)