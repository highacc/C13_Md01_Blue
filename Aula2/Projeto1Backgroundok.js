
console.clear();
const prompt = require('prompt-sync')();

//Variaveis contagem

let contsim = 0
let contnao = 0

//Variaveis perguntas

let pergunta1
let pergunta2
let pergunta3
let pergunta4
let pergunta5

//Apresentação do jogo.


let start = prompt("Começar o Jogo? Dugite: sim ou nao: ")
while (start != "sim" && start != "nao") {
    console.log(`\nComando invalido. Digite apenas sim ou nao.\n`);
    start = prompt("Começar o Jogo? Dugite: sim ou nao: ");
}   

if (start == "nao") {
    console.log()
    console.log("Fim do Jogo!");
    console.log()
    process.exit(1);
}else{
    console.log('\n\nCalor e Quintura\n\n')
    console.log(`Uma aventura épica nas terras Nordesticas para salvar o mundo da IRA daquela Que Não deve ser Mencionada!!!\n`);
}
//Identificação do Usuário

let nome = prompt("Digite o nome do seu Personagem: ");

console.log(`\nSe prepare para uma aventura em Calor e Quintura ${nome}!!!`)

//Background

console.log(`\n Sombras de Nuvens escuras rastejam como cobras migrando na direção do vento, o sol escaldante brilhando em meio as nuvens. Ao longe, em meio aos arbustos pode-se ver uma casa simples, construída não tão firmemente de madeira e barro. Ao se aproximar é possível perceber uma penumbra habitanto o interior daquele covíl! Aos fundos, swish...swish...swish... Mechendo Incansávelmente o caldeirão, está uma figura feminina IMPONENTE e AMEDRONTADORA. Aquela que não deve ser mensionada... O ser que despensa apresentações e impõe respeito com apenas um olhar... Aquela que com apenas um balançar de um galho de goiabeira faz multidões sumirem... Por Alguns chamada de Senhora, outrora chamada de Rainha por um Rei, porém apenas uma pessoa a chama de: \n`);
console.log();
console.log("MAINHA!!");
console.log();
console.log(" Mainha: O que danado esse peste desse menino ta correndo pra lá e pra cá nesse sol quente!?");
console.log(` Mainha: Ô ${nome} venha cá!!!`);
console.log(`Ao ser pego na armadilha de parecer não estar fazendo nada ${nome} recebe uma quest da Impiedosa MAINHA!`);

//Primeira pergunta

console.log(`\nVocê aceita o SUMMON daquela que não deve ser mencionada?\n`)
console.log(`\nPs.: todos aqueles que não aceitaram não podem mais contar suas histórias. \n`)
console.log("Digite sim ou não");
pergunta1 = prompt();

while (pergunta1 != "sim" && pergunta1 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta1 = prompt("");
   
}   
if (pergunta1 == "sim" ){
    contsim++
    console.clear();
    console.log(`\nCorajosamente ${nome} vai de encontro a MAINHA para receber sua quest!\n`);
    

}else if ( pergunta1 == "nao") {
    contnao++
    console.clear();
    console.log(`\n${nome}, Aterrorizado, sem saber o que possa ter feito para atrair a IRA de MAINHA!! Decide correr na direção contrária com todas suas forças. Porém, uma das Habilidades mais poderosas de Mainha foi invocada! HAVAIANA BUMERANG!! ${nome} recebe Dano Crítico e vai ao encontro de MAINHA com suor heróico escorrendo de seus olhos. \n`);

       
}

//Background 2

//Segunda pergunta

pergunta2 = prompt("resp ");

while (pergunta2 != "sim" && pergunta2 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta2 = prompt("");
   
}   
if (pergunta2 == "sim" ){
    contsim++
    console.clear();
    console.log();
    console.log(``);
    

}else if ( pergunta2 == "nao") {
    contnao++
    console.clear();
    console.log();

       
}

//Terceira pergunta


pergunta3 = prompt("resp ");

while (pergunta3 != "sim" && pergunta3 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta3 = prompt("");
   
}   
if (pergunta3 == "sim" ){
    contsim++
    console.clear();
    console.log();
    console.log(``);
    

}else if ( pergunta3 == "nao") {
    contnao++
    console.clear();
    console.log();

       
}

//Quarta Pergunta


pergunta4 = prompt("resp ");

while (pergunta4 != "sim" && pergunta4 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta4 = prompt("");
   
}   
if (pergunta4 == "sim" ){
    contsim++
    console.clear();
    console.log();
    console.log(``);
    

}else if ( pergunta4 == "nao") {
    contnao++
    console.clear();
    console.log();

       
}

//Quinta pergunta


pergunta5 = prompt("resp ");

while (pergunta5 != "sim" && pergunta5 != "nao") {
    console.log();
    console.log("O MEDO TOMOU CONTA DE VOCÊ E AFETOU SUA CAPACIDADE COGNITIVA E O DEIXOU INCAPACITADO!!");
    console.log("Digite apenas sim ou nao.");
    pergunta5 = prompt("");
   
}   
if (pergunta5 == "sim" ){
    contsim++
    console.clear();
    console.log();
    console.log(``);
    

}else if ( pergunta5 == "nao") {
    contnao++
    console.clear();
    console.log();

       
}




console.log(`${nome} Sua pontuação final foi : ${contsim}`)

if ( contsim >0 & contsim <=2) {
    console.log(`${nome} Você falha, mas ainda consegue fugir da situação`);
}
else if ( contsim == 3) {
    console.log(`${nome} Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco`);
}
else if ( contsim == 4) {
    console.log(`${nome} Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita`);
}
else if ( contsim == 5) {
    console.log(`${nome} Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações`);
}
else  {
    console.log(`${nome} Você falhou miseravelmente`); 
}

console.log(`\n ${nome} Veja suas respostas\n`);
console.log(`1 - ${pergunta1}\n2 - ${pergunta2}\n3 - ${pergunta3}\n4 - ${pergunta4}\n5 - ${pergunta5}\n`);
console.log(`Você respondeu SIM ${contsim} vezes\nVocê respondeu NÃO ${contnao} vezes\n`);
