let readLineSync = require("readline-sync")
let anoNascimento = Number(readLineSync.question("Ano de nascimento: "))
let anoAtual = new Date().getFullYear()

if(anoNascimento > anoAtual) {
    console.log("Data inválida")
} else {
    console.log(`Sua idade é ${anoAtual - anoNascimento} anos!`)
}