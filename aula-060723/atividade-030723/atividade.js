//1-Verificar positivo e negativo
let numero = 12;

if(numero>0){       
    console.log("numero é positivo")
}else if(numero<0){
    console.log("numero é negativo")
}else{
    console.log("zero")
}
console.log("----------------------------")
//2-maior de idade
let idade=18;
if(idade>=18){
    console.log("Maior de idade")
}else{
    console.log("menor de idade")
}
console.log("----------------------------")
//3-tres numeros
let num1=2, num2=3, num3=4;
if(num1>num2&&num1>num3){
    console.log(`O maior numero é ${num1}`);
}else if(num2>num1&&num2>num3){
    console.log(`O maior numero é ${num2}`);
}else if(num3>num1&&num3>num2){
    console.log(`O maior numero é ${num3}`);
}else{
    consolelog("Todos são iguais")
}
console.log("----------------------------")
//4-par ou impar
let num4=5, num5=8, prod;
prod=num4*num5;

if(prod%2==0){
    console.log("par");
}else{
    console.log("impar");
}

console.log("----------------------------")
//5-dias da semana util
diaSemana="sexta-feira";

if(diaSemana=="segunda"||diaSemana=="terça"||diaSemana=="quarta"||diaSemana=="quinta"||diaSemana=="sexta"){
    console.log("Dia útil");
    
}else if(diaSemana=="sabado"||diaSemana=="domingo"){
    console.log("FIm de Semana")
}
console.log("----------------------------")
//6-dia da semana
let dia =1;

switch(dia){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Domingo")
        break;
    case 3:
        console.log("Domingo")
        break;
    case 4:
        console.log("Domingo")
        break;
    case 5:
        console.log("Domingo")
        break;
    case 6:
        console.log("Domingo")
        break;
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log("Caracter invalido")
}

console.log("----------------------------")