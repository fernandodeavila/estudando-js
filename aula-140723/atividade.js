// Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
let vetor1 = [1,2,3,4,34,45,23,12]

function somarTodosItens(vetor){
    let soma = 0
    for(let num of vetor){
        soma+=num
    }
    return soma
}

console.log(somarTodosItens(vetor1))

console.log("--------")
// Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
let vetor2 = ["asdasdas", "sdfsfaasd", "sddsdfsasda"]
let concatenado = ""
function concatPalavras(vetor){
    for(let palavra of vetor){
        concatenado+=palavra
    }
    return concatenado
}
console.log(concatPalavras(vetor2))

console.log("--------")
// Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
let vetor3 = [1, 2, 34, 45, 23, 34]
let maior = 0
function returnMaior(vetor){
    vetor.forEach(num=>{
        if(num>maior){
            maior=num
        }
    })
    return maior
}
console.log(returnMaior(vetor3))
console.log("--------")
// Crie uma função que receba um vetor de números e retorne a média dos elementos.
let vetor4 = [1,23, 34 ,23, 12, 4512]
let media;
function returnMedia(vetor){
   return media = (vetor.reduce((acm, num)=>(acm+num)))/vetor.length
}

console.log(returnMedia(vetor4))

 

console.log("--------")
// Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
console.log("--------")
// Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
console.log("--------")
// Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
console.log("--------")
// Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array.
console.log("--------")