const coresFarol = {
    vermelho:"imagens/vermelho.png", amarelo:"imagens/amarelo.png",
    verde:"imagens/verde.png" }

let imgEl = document.querySelector("img")
const vermelhoBtn = document.querySelector("#btn-red");
const amareloBtn = document.querySelector("#btn-yel");
const verdeBtn = document.querySelector("#btn-gre");
const autoBtn = document.querySelector("#btn-auto");

vermelhoBtn.addEventListener("click", ()=>{
    imgEl.src = `${coresFarol.vermelho}`

})
amareloBtn.addEventListener("click", ()=>{
    imgEl.src = `${coresFarol.amarelo}`

})
verdeBtn.addEventListener("click", ()=>{
    imgEl.src = `${coresFarol.verde}`

})





autoBtn.addEventListener("click", ()=>{
    setInterval(mudarCores, 2000)

})
