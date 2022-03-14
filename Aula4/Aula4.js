console.clear();
const prompt = require('prompt-sync')();
/*
1-Reajuste salarial - As empresas @.com resolveram dar um aumento de 
salário aos seus colaboradores e lhe contrataram para desenvolver o 
programa que calculará os reajustes. Faça um programa que recebe o 
salário de um colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual: 

Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.

Após o aumento ser realizado, informe na tela:

O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento.


let salario = +prompt('Qual o salário?  ')

if (salario < 280) {
    let aumento = 0.2
    let valorAumento = salario*aumento
    let salario2 = salario + (salario*aumento) 
    console.log()
    console.log(`Salário antes do reajuste: ${salario}\nO percentual de aumento: ${aumento}\nValor do aumento: ${valorAumento}\nSalário após aumento: ${salario2} `)
    console.log()

} else if ( salario >= 280 & salario < 700 ) {
    let aumento = 0.15
    let valorAumento = salario*aumento
    let salario2 = salario + (salario*aumento) 
    console.log()
    console.log(`Salário antes do reajuste: ${salario}\nO percentual de aumento: ${aumento}\nValor do aumento: ${valorAumento}\nSalário após aumento: ${salario2} `)
    console.log()

}else if ( salario >= 700 & salario < 1500 ) {
    let aumento = 0.10
    let valorAumento = salario*aumento
    let salario2 = salario + (salario*aumento) 
    console.log()
    console.log(`Salário antes do reajuste: ${salario}\nO percentual de aumento: ${aumento}\nValor do aumento: ${valorAumento}\nSalário após aumento: ${salario2} `)
    console.log()

} else {
    let aumento = 0.05
    let valorAumento = salario*aumento
    let salario2 = salario + (salario*aumento) 
    console.log()
    console.log(`Salário antes do reajuste: ${salario}\nO percentual de aumento: ${aumento}\nValor do aumento: ${valorAumento}\nSalário após aumento: ${salario2} `)
    console.log()
}
*/

/* 2- Jogo da adivinhação - Escreva um programa que faça o computador 
“pensar” em um número inteiro entre 0 e 10 e peça para o usuário 
tentar descobrir qual foi o número escolhido pelo computador. 
O programa deverá escrever na tela se o usuário venceu ou perdeu.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomInt(1, 11)
  

  //essa aqui funcionou!!
  let numero = +prompt("Digite um número e tente a sorte: ")

  let numeroRandom = Math.floor(Math.random() * 11);

  if ( numero == numeroRandom) {
    console.log()
    console.log(`Você Venceu!!!`)
    console.log()
  }
  else {
    console.log()  
    console.log(`Você Perdeu!!!`)
    console.log()
  }

  console.log(`O numero correto foi ${numeroRandom}`)




  */


  /* 3- Caixa Eletrônico - Faça um Programa para um caixa eletrônico.
   O programa deverá perguntar ao usuário a valor do saque e depois 
   informar quantas notas de cada valor serão fornecidas. As notas 
   disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo 
   é de 10 reais e o máximo de 600 reais. O programa não deve se 
   preocupar com a quantidade de notas existentes na máquina.

Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas 
notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.

Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três
notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e
quatro notas de 1.
*/

let saque = +prompt("Qual valor você deseja sacar? ")
console.log()

