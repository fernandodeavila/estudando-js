let lado=7;
let linha="";

for(let i=0;i<lado;i++){
    linha=""
    for(let j=0; j<lado;j++){
        linha+=" # "

    }
    console.log(linha)
}

// //break e continue
// for (let i=1; i<=20; i++){
//     if((i%2==0)){
//         continue
//     }
//     console.log(i)
// }

//imprimir 20 num
for(let i=0;i<20;i++){
    console.log(i+1)
}
console.log("----------------------------")

// fibonacci
let primeiro=0;
let segundo=1;
let soma;
for(let i=0;i<10;i++){
    soma=primeiro
    primeiro+=segundo
    segundo=soma
    console.log(soma)
    
}
console.log("----------------------------")
//soma dos impares
let num=12;
let som=0;
for(let i=0; i<=num; i++){
    if(i%2==0){
        continue
    }
    som+=i

} 
console.log(som)
console.log("----------------------------")
//tabuada
let numero=18;

for(let i = 0; i<=10;i++){
    soma=numero+i
    console.log(`${numero} + ${i} == ${soma}`);
}

console.log("----------------------------")
//multiplos de 7
for(let i=0;i<=100;i++){
    if(!(i%7==0)){
        continue
    }
    console.log(i)
}
console.log("----------------------------")
//triangulo
let alturaTriang=50;
for(let i=0; i<alturaTriang;i++){
    let linha=""
    for(let j = 0; j<=i; j++){
        
        linha+="#"
    }
    console.log(linha)
}

