// Escreva um programa que receba um texto e calcule a quantidade de letra de "a". O programa deve considerar maisculas e minusculas.
let numRecebido = "juAsaasbas"
let letraAtual;
let quantA=0;

for(let i=0;i<=numRecebido.length;i++){
    letraAtual=numRecebido.charAt(i)
    if((letraAtual.includes("a"))||(letraAtual.includes("A"))){
        quantA++
    }
}
console.log(`a quantidade de letras 'A' é ${quantA}`)

console.log("----------------------------")

// Escreva um programa que calcule a raiz quadrada de um número e mostre na tela.
let numeroRaiz= 169
let raizQuadradaNum= Math.sqrt(numeroRaiz)
console.log(raizQuadradaNum)
console.log("----------------------------")

// Escreva um programa que  arredonde um número para o inteiro mais próximo.
let numToRound = 12.67
let numRounded = Math.round(numToRound)
console.log(numRounded)

console.log("----------------------------")


// Escreva um programa que  calcule o valor absoluto de um número.
let numToAbs = -23.45
let numAbs = Math.abs(numToAbs)
console.log(numAbs)

console.log("----------------------------")
// Escreva um programa que  gere um número aleatório entre 10 e 20.
let randomNum = Math.floor(Math.random()*(20-10) +10);
console.log(randomNum)
console.log("----------------------------")
// Arredonde um número para um número específico de casas decimais.
console.log("----------------------------")
// Escreva um programa que  converta uma string para um número decimal e arredonde para o número inteiro anterior.
console.log("----------------------------")
// Verifique se um número é um valor finito, não infinito, NaN ou não.
console.log("----------------------------")
// Arredonde um número para um número específico de casas decimais.
console.log("----------------------------")
// Escreva um programa que verifique se a string "ba" contém em outras outra string.
console.log("----------------------------")
// Escreva um programa que  converte uma string para letras maiúsculas e para letras minúsculas e mostre na tela.
console.log("----------------------------")
// Extraia uma parte específica de uma string com base em índices.
console.log("----------------------------")
// Substitua todas as ocorrências de uma substring por outra em uma string.
let stringToSub = "Pao de Batata é Muito Bom"

console.log(stringToSub.replace('Batata','Pumba' ))
console.log("----------------------------")
// Remova espaços em branco extras no início e no final e no final de uma string.
let strinngAle= " Bumabasa "
let stringNoSpace = strinngAle.trim()
console.log(stringNoSpace)
console.log("----------------------------")
// Inverta uma string. Uitilize o laço for.
let string= "Pao de Batata"
let stringInvert="";

for(let i=(string.length)-1; i>=0; i--){
    stringInvert+=string.charAt(i)

}
console.log(stringInvert)
console.log("----------------------------")