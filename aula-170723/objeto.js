class Livro {
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar= function(){
        console.log("Alugado")
    };
    //COntructor vai definir os parametros de contrução do objeto
    constructor(titulo, pagina, autor, isbn){
        this.titulo = titulo;
        this.paginas= paginas;
        this.autor = autor;
        this.isbn = isbn;
    //this- referencia a classe.
    }
}

//CONSTRUINDO SEM ESPECIFICAR O CONSTRUCTOR
    //INSTANCIA --> processo de criar um objeto
let arquiteturaLimpa = new Livro();// instancia do objeto Livro  

arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.autor = "Robert C. Martin";

//CONTRUINDO ESPECIFICANDO O CONSTRUCTOR

let livroBom = new Livro("livroBom", 300, "Joãozinho", "12312312-123-1232-123")

//-------------------------------------

//-------OBJETOS SEM CLASSE------------

class Pessoa{
    nome;
    idade;
    email;
}

let pessoa1 = new Pessoa();
pessoa1.nome="Gabriel";
pessoa1.idade=21;
pessoa1.email="gabriel@gmail.com";
pessoa1.cor="Branco";

const pessoa2 = {
    nome:'Aline',
    idade:12,
    email: "dsffa@gmail.com"
}

copiaPessoa1 = {
    ...pessoa1
}