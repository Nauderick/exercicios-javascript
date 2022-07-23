let input = require("readline-sync")
console.log("===============")
console.log("     Doação    ")
console.log("===============")
console.log("[1] para doar R$10")
console.log("[2] para doar R$25")
console.log("[3] para doar R$50")
console.log("[4] para doar outros valores")
console.log("[5] para cancelar")
let opcao = Number(input.question("Escolha a opção de 1 a 5: "))
let doacao = 0
console.clear()

switch (opcao) {
    case 1:
        doacao = 10
        break;
    case 2:
        doacao = 25
        break
    case 3:
        doacao = 50
        break
    case 4:
        doacao = Number(input.question("Digite o valor desejado: R$"))
        break
    case 5:
        console.log(`Doação cancelada`)
        break
    default:
        console.log(`Escolha uma opção de 1 a 5`)        
        break;
}
console.log("===============")
console.log("     Doação    ")
console.log("===============")
console.log(`Muito obrigado por doar ${doacao.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
console.log("===============")