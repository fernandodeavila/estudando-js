//  key down-> apertar o botão
//  key up -> soltar o botão
// mouse over -> Moveu o ponteiro do mouse sobre o elemento
// mouseout -> moveu o ponteiro para fora do elemento
// submit -> submeter os dados de um formulario
// change -> alterar o valor de um campo de formulario
// focu -> Eventos acionado quando  foco esta sobre o elemento

const quadrado = document.querySelector("#quadrado");
console.log({quadrado});

quadrado.onclick = ()=> {
    quadrado.style.backgroundColor = "#003049"
}



quadrado.ondbclick = ()=> {
    quadrado.style.borderRadius = "0x"
}


