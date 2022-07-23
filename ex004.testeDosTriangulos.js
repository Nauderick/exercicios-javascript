let readLineSync = require("readline-sync")
console.log("--------------------------")
console.log("    TESTE DOS TRIÂNGULOS  ")
console.log("--------------------------")
let ladoA = Number(readLineSync.question("Digite o primeiro lado:"))
let ladoB = Number(readLineSync.question("Digite o segundo lado:"))
let ladoC = Number(readLineSync.question("Digite o terceiro lado:"))
console.clear()

let triangulo = Math.abs(ladoB - ladoC) < ladoA && ladoA < ladoB + ladoC && Math.abs(ladoC - ladoA) < ladoB && ladoB < ladoC + ladoA && Math.abs(ladoA - ladoB) < ladoC && ladoC < ladoA + ladoB

let equilatero = ladoA == ladoB && ladoB == ladoC && ladoC == ladoA

let escaleno = ladoA != ladoB && ladoB !== ladoC && ladoC !== ladoA

console.log("--------------------------")
console.log("    TESTE DOS TRIÂNGULOS  ")
console.log("--------------------------")
console.log(`Valores Digitados: ${ladoA}, ${ladoB}, ${ladoC}`)
console.log(`Triângulo: ${triangulo}`)
console.log(`Equilátero: ${equilatero}`)
console.log(`Escaleno: ${escaleno}`)
console.log("--------------------------")