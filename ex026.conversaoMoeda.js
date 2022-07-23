let input = require("readline-sync")
let i = 0
let valorEmReais = 0
let valorEmDolares = 0
let quantidadeConversoes = Number(input.question("Quantas vezes você quer converter?: "))
while (i < quantidadeConversoes) {
    console.log("=======================")
    valorEmReais = Number(input.question("Qual o valor em R$ "))
    valorEmDolares = valorEmReais / 5.50
    console.log(`O valor convertido em US$ ${valorEmDolares.toFixed(2)}`)
    i++
}