import { livros } from "./livros.js";



function exibirTabela(livros){
    const tableEl = document.querySelector("#table-content");
    tableEl.innerHTML =" " 
    for(let livro of livros){
        tableEl.innerHTML += `
            <tr>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.anoPublicacao}</td>
                <td>${livro.genero}</td>
            </tr>
        `
    }
}

exibirTabela(livros);
