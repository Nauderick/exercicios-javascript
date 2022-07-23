let input = require("readline-sync")
let nota1 = Number(input.question("Digite a 1° nota:"))
let nota2 = Number(input.question("Digite a 2° nota:"))
let media = ((nota1 + nota2) / 2).toFixed(2)
let aproveitamento = `Aproveitamento: `

if(media >= 9) {
    aproveitamento += `A`
} else if (media >= 7) {
    aproveitamento += `B`
} else if (media >= 5) {
    aproveitamento += `C`
} else if (media >= 3) {
    aproveitamento += `D`
} else if (media >= 1) {
    aproveitamento += `E`
} else {
    aproveitamento += `F`
}
console.clear()
console.log(`Media do aluno: ${media}`)
console.log(aproveitamento)