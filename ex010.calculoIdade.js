let input = require("readline-sync")
let anoNascimento = Number(input.question("Digite seu ano de nascimento: "))
let anoAtual = new Date().getFullYear()
let idade = anoAtual - anoNascimento

if (idade >= 18) {
    console.log(`Parabéns, você tem ${idade} anos! Já é maior de idade e pode ser preso! =)`)
} else if (idade < 18 && idade > 0) {
    console.log(`Parabéns! você tem ${idade} anos! Ainda pode acordar tarde e jogar video game o dia inteiro pois é sustentado pelos pais. Aproveite!...`)
} else if (idade <= 0) {
    console.log("Idade Inválida.")
}