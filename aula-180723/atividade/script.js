let vetorObjetos = [
    aluno1={nome:"Fernando", idade:18, nota:10},
    aluno2 = {nome:"Anne", idade:42, nota:9.5},
    aluno3= {nome:"Fernandes", idade:41, nota:10},
    aluno4 = {nome:"Vinicius", idade:18, nota:9.5}
];
let tableEl = document.querySelector(".Tabela")

function montarTabela(vetor){

    vetor.forEach(aluno=> {
        tableEl.innerHTML += `<tr> <td>${aluno.nome}</td> <td>${aluno.idade}</td> <td>${aluno.nota}</td> </tr>`

    })

}

montarTabela(vetorObjetos)