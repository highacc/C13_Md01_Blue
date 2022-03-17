console.clear();
const prompt = require('prompt-sync')();

let numero = +prompt("Digite um numero:  ")
let operador = prompt("Digite um operador:  ")
for (let index = 1; index < 11; index++) {

    if (operador == "+") {
        console.log(numero, "+", index, "=", numero+index); 
} else if (operador == "-") {
    console.log(index, "-", numero, "=", index-numero);
}else if (operador == "*") {
    console.log(numero, "*", index, "=", numero*index); 
} else if (operador == "/") {
    console.log(numero, "/", index, "=", numero/index)
    
}
}