//Verificador de numero impar ou par
let numero = 12;
let resultado = numero%2==0?'par':'impar';
console.log(resultado);
//media aritmetica de dois numeros
let numero1 = 2;
let numero2 = 4;
let media = (numero1+numero2)/2;
console.log(media);

//determinar se um numero é divisivel por 3 e 5 ao mesmo tempo
let num = 34;
let result = (num%3==0)&&(num%5==0)?'é divisivel':'não é divisivel';
console.log(result)
//calcular a altura de um triangulo com base e altura
let area=200 ;
let base = 20;
let altura= (area*2)/base;
console.log(altura);

//de Celsius para Fahrenheit
let tempCel = 24;
let tempFah = 1.8*tempCel + 32;
console.log(tempFah);
//Calcular delta das funções de segundo grau
let a = 23;
let b = 12;
let c = 3;
let deltaVal =b**2 -4*a*c;
console.log(deltaVal); 
//Verificar se pode dirigir com base na idade
let idade = 12;
let permissao = idade>=18?'pode': 'naom pode';
console.log(permissao);