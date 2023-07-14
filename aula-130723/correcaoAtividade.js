// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
function mediaPonderada(n1, n2, n3){
    return((n1*2 + n2*3 + n3*4)/9);
}
console.log("Media ponderada entre 6, 7, 8 é " +mediaPonderada(6,7,8) )
console.log("----------------------------------");

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.
function numDivisores(num){
    let qnt = 0;
    for(let i = 2; i<num; i++){
        if(num%i==0){
            qnt++;
        }
    }
    return qnt
}
console.log("A quantidade de divisores de 78 é " + numDivisores(78));
console.log("----------------------------------");

// Crie uma função que calcule a soma de todos os dígitos de um número.
function numDigitos(num){
    let numTexto = num.toString();
    let acumulador=0;
    for (let i = 0; i<numTexto.length; i++){
        acumulador+=parseInt(numTexto.charAt(i));

    }
    return acumulador;
}
console.log("A soma dos digitos de 4629 é")

console.log("----------------------------------");
// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.
function reverterTexto(texto){
    let textoRevertido= "";
    for (let i = texto.length-1; i>=0; i--){
       textoRevertido+= texto.charAt(i);

    }
    return textoRevertido;
    
}
console.log("A frase ola mundo revertida seria''" + reverterTexto("Ola, mundo"))
console.log("----------------------------------");
// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
function velocidadeMedia(comprimento, tempo){
    return (comprimento/tempo);
    }
    console.log("A velocidade media de uma bicicletaque percorreu 30km em 2horas é "+ velocidadeMedia(30, 2))

console.log("----------------------------------");
// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.
console.log("----------------------------------");
// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário.
function converteDecimal(decimal, base) {

    //A base deve estar entre 2 e 64, ou seja, número letras e os símbolos '+' e '/'.
    let digitos = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/";
  
    let resultado = ""; // variavel vazia pra ir iterando nos numeros + significativos e menos significativos
    while (decimal > 0) {
      let resto = decimal % base; // resto da divisão
      resultado = digitos.charAt(resto) + resultado; // o número do resto procura a posição do digito na variavel 'digitos' e adiciona em resultado.
      decimal = Math.floor(decimal / base);  // tem que sempre atualiar decimal se nao não funciona.
    }
  
    return resultado; // retorno da função
  }
  
  console.log(converteDecimal(42, 64)); // 'g'.
console.log("----------------------------------");
// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
console.log("----------------------------------");