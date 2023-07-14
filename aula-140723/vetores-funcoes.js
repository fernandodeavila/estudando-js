const nums =[6,9,0,3,8,1,4,2,5,7,7]

//FIM
nums.push(4); // adiciona uma elemento ao ginal do vetor 
nums.unshift(9);//adiciona um elemento no inicio do vvetor

//INiCIo
nums.pop() // remove um elemento do final do vetor
nums.shift()//remove o primeiro elemento do vetor.

// let juncao = nums.join() //fazer a junção dos elelmentos do vetor- retorna uma string.

let veotr2 = [5, 6, 7]
let vetor3= nums.concat(vetor2); // gera um outro vetor com a concatenação feita no vetor primario

nums.sort() // Vai ordenar os elelementos em ordem alfabetica

nums.reverse() // gera um novo vetor com elementos invertidos

nums.includes(); // retorna um booleano

nums.fill() // preenche // modifica o vetor

nums.indexOf() //retorna o indice de determinado elemento

(nums.splice(6,3)) // remove elementos do meio do vetor. modifica 

nums.slice() // fatia o vetor a partir de um indice até outro indice. não modifica.

nums.forEach(num=>console.log(num)) //itera sobre os elelemtnos do vetor

nums.reduce((acumulador, num)=>(acumulador+num), 0); //vai reduzir o vetor a somente um valor, esse valor pode ser a multiplição, subtração, som, divisão de todos os itens do array. 
// o segundo parametro dessa função defini qual sera o vvalor inicial do acumulador. Caso esse valor não seja definido o acummulador vai iniciar com o primeiro item do array.


 nums.map(num => num*2)//transformar todos os valores de um vetor e gera um novo vetor.

 nums.find(num => (num > 8)) //retorna o primeiro valor que corresponde a condição especificada.

 nums.filter(num => (num%2==0)) // retorna um vetor com elementos correspondentes a condição

 //STRING COMO VETOR
 let nome=`Fernando de Avila`