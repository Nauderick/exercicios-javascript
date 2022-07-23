let input = require("readline-sync")
let nota1 = Number(input.question("Digite a primeira nota: "))
let nota2 = Number(input.question("Digite a segunda nota: "))
let media = (nota1 + nota2) / 2
console.log(`Sua média é: ${media}`)
if (media >= 7) {
    console.log("Aprovado!")
} else if (media >= 5) {
    console.log("Em recuperação!")
} else {
    console.log("Reprovado!")
}