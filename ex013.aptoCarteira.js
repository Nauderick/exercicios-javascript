let input = require("readline-sync")
let anoAtual = new Date().getFullYear()
let anoNascimento = Number(input.question("Digite seu ano de nascimento: "))
let idade = anoAtual - anoNascimento
console.clear()
console.log(`Você tem ${idade} anos.`)
if(idade >= 18) {
    console.log("Você está apto a tirar carteira de motorista.")
} else if (idade < 18 && idade > 0) {
    console.log("Você não está apto a tirar carteira de motorista.")
} else {
    console.log("Idade Inválida.")
}