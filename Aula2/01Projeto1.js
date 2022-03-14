console.clear();
const prompt = require('prompt-sync')();

//Background inicial
console.log("Sombras de Nuvens escuras rastejam como cobras migrando na direção do vento, o sol escaldante brilhando em meio as nuvens.");
console.log();
console.log("Ao longe, em meio aos arbustos pode-se ver uma casa simples, construída não tão firmemente de madeira e barro.");
console.log();
console.log("Ao se aproximar é possível perceber uma penumbra habitanto o interior daquele covíl!");
console.log();
console.log("Aos fundos, swish...swish...swish");
console.log();
console.log("Mechendo Incansávelmente o caldeirão está uma figura feminina IMPONENTE e AMEDRONTADORA");
console.log();
console.log("Aquela que não deve ser mensionada...");
console.log("O ser que despensa apresentações e impõe respeito com apenas um olhar...");
console.log("Aquela que com apenas um balançar de um galho de goiabeira faz multidões sumirem...");
console.log();
console.log("Por Alguns chamada de Senhora, outrora chamada de Rainha por um Rei, porém apenas uma pessoa a chama de:");
console.log();
console.log("MAINHA!!");
console.log();
console.log(" Mainha: O que danado esse peste desse menino ta correndo pra lá e pra cá nesse sol quente!?");
console.log(" Mainha: Ô JUNHO venha cá!!!");
console.log("Ao ser pego na armadilha de parecer não estar fazendo nada JUNHO(Você) recebe uma quest da Ínfame MAINHA!");
//Background inicial

//Pergunta 1

let pergunta1 = prompt("Você aceita o SUMMON daquela que não deve ser mencionada? \nPs.: todos aqueles que não aceitaram não podem mais contar suas histórias.\nDigite: Sim ou Não\nResposta: ").toLowerCase();
if (pergunta1 == "sim" ){
    pergunta1 = 1;
    console.clear();
    console.log("Você respondeu sim");
    console.log();
    console.log("");

}else if ( pergunta1 == "não") {
    pergunta1 = 0;
    console.clear();
    console.log("Você respondeu não");
    console.log("");
    
}
else {
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA e o deixou incapacitado!!");
    
}

//pergunta 2

let pergunta2 = prompt("Digite a segunda resposta: ").toLowerCase();
if (pergunta2 == "sim" ){
    pergunta2 = 1;
    console.clear();
    console.log("Você respondeu sim");
    console.log();
    console.log("");

}else if ( pergunta2 == "não") {
    pergunta2 = 0;
    console.clear();
    console.log("Você respondeu não");
    console.log("");
    
}
else {
    console.log("");
    
}

//pergunta 3 

let pergunta3 = prompt("Digite a terceira resposta: ").toLowerCase();
if (pergunta3 == "sim" ){
    pergunta3 = 1;
    console.clear();
    console.log("Você respondeu sim");
    console.log();
    console.log("");

}else if ( pergunta3 == "não") {
    pergunta3 = 0;
    console.clear();
    console.log("Você respondeu não");
    console.log("");
    
}
else {
    console.log("");
    
}

//pergunta 4

let pergunta4 = prompt("Digite a quarta resposta: ").toLowerCase();
if (pergunta4 == "sim" ){
    pergunta4 = 1;
    console.clear();
    console.log("Você respondeu sim");
    console.log();
    console.log("");

}else if ( pergunta4 == "não") {
    pergunta4 = 0;
    console.clear();
    console.log("Você respondeu não");
    console.log("");
    
}
else {
    console.log("");
    
}

// pergunta 5

let pergunta5 = prompt("Digite a quinta resposta: ").toLowerCase();
if (pergunta5 == "sim" ){
    pergunta5 = 1;
    console.clear();
    console.log("Você respondeu sim");
    console.log();
    console.log("");

}else if ( pergunta5 == "não") {
    pergunta5 = 0;
    console.clear();
    console.log("Você respondeu não");
    console.log("");
    
}
else {
    console.log("");
    
}

let contador = (pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5);

if ( contador >0 & contador <=2) {
    console.log("Você falha, mas ainda consegue fugir da situação");
}
else if ( contador = 3) {
    console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco");
}
else if ( contador = 4) {
    console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita");
}
else if ( contador = 5) {
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações");
}
else  {
    console.log("Você falhou miseravelmente"); 
}





