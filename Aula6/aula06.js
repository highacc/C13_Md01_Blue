console.clear();
const prompt = require('prompt-sync')();

// ex1 solicitar 20 numeros para um array e separalos em dois arrays par e impar
/*
const numeros = []
let par = []
let impar = []
posicao = 0

while (numeros.length < 20) {
    let pergunta = +prompt("Digite um numero:   ")
    numeros.push(pergunta)

    if (numeros[posicao] % 2 == 0) {
        par.push(numeros[posicao])
        posicao++
    }else {
        impar.push(numeros[posicao])
        posicao++
    }
    
}
console.clear()
console.log( numeros)
console.log()
console.log(`Numeros pares  ${par}`)
console.log()
console.log(`Numeros impares  ${impar}`)
*/

// ex2 - calcular a media de 5 idades e alturas em um array
/*
let altura = []
let idade = []


while (altura.length < 5 && idade.length < 5) {
    let pergunta1 = +prompt("Digite uma idade:   ")
    idade.push(pergunta1)
    let pergunta2 = +prompt("Digite uma Altura:   ")
    altura.push(pergunta2)
      
}
let mediaI = (idade[0] + idade[1] + idade[2] + idade[3] + idade[4])/ idade.length
let mediaA = (altura[0] + altura[1] + altura[2]+ altura[3] + altura[4] )/ altura.length
console.log(`A média das alturas foi: ${mediaA.toFixed(2)}`)
console.log(`Alturas  ${altura}`)
console.log(`A média das idades foi: ${mediaI}`)
console.log(`Idades  ${idade}`)
*/

//ex3 Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.
/*
let nomes = []
let notas = []
let pnomes = +prompt("Quantos alunos serão cadastrados?    ")


while (nomes.length < pnomes && notas.length < pnomes) {
    let pergunta1 = prompt("Digite o nome do aluno:   ")
    nomes.push(pergunta1)
    let pergunta2 = +prompt("Digite a nota:   ")
    notas.push(pergunta2)
      
}
console.log()
console.log(`Alunos:  ${nomes}`)
console.log()
console.log(`Notas: ${notas}`)

let i = 0
let total = 0

while (i < pnomes ) {
    
  console.log(`Aluno : ${nomes[i]} Nota: ${notas[i]}`)
  total = total + notas[i]
  i++
}

let media = total/notas.length

console.log()
console.log(`A média total da turma foi: ${media}`)
*/


//ex4 