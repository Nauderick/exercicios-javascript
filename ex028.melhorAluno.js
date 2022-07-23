let input = require("readline-sync")
let quantidadeAlunos = Number(input.question("Quantos alunos a turma tem? "))
console.clear()
let i = 0
let melhorNota = 0
let melhorAluno = ``
while (i < quantidadeAlunos) {
    console.log("================")
    let nomeAluno = String(input.question(`Nome do aluno ${i + 1}: `))
    let notaAluno = Number(input.question(`Nota do aluno ${i + 1}: `))
    if(notaAluno > melhorNota) {
        melhorNota = notaAluno
        melhorAluno = nomeAluno
    }
    console.clear()
    i++
}
console.log(`A turma tem ${quantidadeAlunos} alunos`)
console.log(`O melhor aproveitamento foi de ${melhorAluno} com a nota ${melhorNota}`)
console.log("================")