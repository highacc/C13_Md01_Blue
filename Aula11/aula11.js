console.clear();
const prompt = require('prompt-sync')();


//12.1-Exercício – Treino: Crie uma função que dado dois 
//valores (passados como parâmetros) mostre no console a soma, 
//subtração, multiplicação e divisão desses valores.
/*
function funcao(p1,p2) {

    let soma = p1+p2
    let sub = p1-p2
    let mult = p1*p2
    let div = p1/p2
    console.log(`\nA soma é: ${p1} + ${p2} = ${soma.toFixed(2)}\n`)
    console.log(`\nA subtração é: ${p1} - ${p2} = ${sub.toFixed(2)}\n`)
    console.log(`\nA multiplicação é: ${p1} * ${p2} = ${mult.toFixed(2)}\n`)
    console.log(`\nA divisão é: ${p1} / ${p2} = ${div.toFixed(2)}\n`)
    
}

funcao(10,2)
*/

//12.2-Exercício – Treino:  Crie uma função que verifica se um número inteiro passado 
//como parâmetro é divisível por 3 e retorne true ou false.
/*
function num (params) {
   
        return params % 3 == 0;
       
}

console.log(num(10))
*/
//12.3-Exercício – Treino: Faça um programa que tenha uma função chamada area(), que receba as dimensões de um 
//terreno retangular (largura e comprimento) e mostre a área do terreno.
/*
function area(largura,comprimento) {

    return largura * comprimento
    
}

console.log(area(2,2))

*/

//11.1-Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático 
//(+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
/*
function calculadora(num1,num2,operador) {
    if (operador == "+") {
        return num1+num2
    }else if (operador == "-") {
        return num1-num2
        
    } else if(operador == "*"){
        return num1*num2
    }else if(operador == "/"){
        return num1/num2
    }

    
}

console.log(calculadora(1,2,"/"))
*/
