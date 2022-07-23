let input = require("readline-sync")
let i = 1
let soma = 0
while (i <= 5) {
    soma += Number(input.question(`Digite o ${i}° valor: `));
    i++ 
}
//console.clear()
console.log(`A soma dos valores é de : ${soma}`)