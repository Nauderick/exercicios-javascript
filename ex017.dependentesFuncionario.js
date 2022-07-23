let input = require("readline-sync")
let nome = input.question("Digite seu nome: ")
let salarioAtual = Number(input.question("Digite seu salário atual: R$"))
let dependentes = Number(input.question("Informe a quantidade de dependentes: "))
let aumento = 0
if(dependentes == 0) {
    aumento = 0.05
} else if (dependentes <= 3) {
    aumento = 0.10
} else if (dependentes <= 6) {
    aumento = 0.15
} else {
    aumento = 0.18
}
console.clear()
console.log(`Olá, ${nome}! Seu salário após aumento: R$${(salarioAtual + (salarioAtual * aumento)).toFixed(2)}`)