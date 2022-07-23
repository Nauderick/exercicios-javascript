let input = require("readline-sync")
let peso = Number(input.question("Informe seu peso (Kg):"))
let altura = Number(input.question("Informe sua altura (m):"))
console.clear()
let imc = (peso / (altura * altura)).toFixed(2)
console.log(`Seu IMC é igual a: ${imc}`)
if (imc < 17 && imc >= 0) {
    console.log("Muito abaixo do peso")
} else if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc < 25) {
    console.log("Peso ideal")
} else if (imc < 30) {
    console.log("Sobrepeso")
} else if (imc < 35) {
    console.log("Obesidade")
} else if (imc < 40) {
    console.log("Obesidade Severa")
} else {
    console.log("Obesidade Morbida")
}