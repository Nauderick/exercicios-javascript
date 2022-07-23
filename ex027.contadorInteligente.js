let input = require("readline-sync")
let i = Number(input.question("Começar contagem a partir do numero: "))
let c = Number(input.question("Terminar contagem no numero: "))
if (c > i) {
    console.log("Contagem progressiva")
    console.log("====================")
    while (i <= c) {
        console.log(i)
        i++
    }
} else if (i > c) {
    console.log("Contagem regressiva")
    console.log("===================")
    while (c <= i) {
        console.log(i)
        i--
    }
} else {
    console.log("Valores iguais!")
}