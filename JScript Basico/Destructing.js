// Entendendo Destructing

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:  {

    logradouro: 'Rua ABC',
    numero: 1000
    }
}

// Tire de dentro do objeto nome e idade. De qual obj? Pessoa.

const { nome, idade } = pessoa;

// Tire de dentro do objeto o nome e idade do objeto pessoa. Mas crie uma variavel com nome n para nome e i para idade.

const { nome: n, idade: i } = pessoa;
console.log(n, i);

/* Caso tente tirar de dentro do objeto um atributo que não existe dentro dele será retornado por padrão undefined.
E se você não quiser isso pode ser indicado com = o valor padrão que você quer. */

const { sobrenome, bemHumorada = true  }  = pessoa
console.log(sobrenome, bemHumorada);

/* Caso queira retirar de dentro de endereço: */

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

// Em arrays

const [a] = [10];
console.log(a);

// n1 = 10, ignora n2 e n4, atribui o resto. O n5 vai ser undefined porque não foi passado valor.

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

// Ignora o primeiro elemento, no segundo elemeto pegue a segunda posição e coloque na variável nota.

const [, [, nota]] = [[, 8, 8], [9, 6, 8]];
console.log(nota);

//Exemplos de uso

// A função vai entregar o valor min e max sem a necessidade de usar a notação . pra acessar o objeto

function rand1({ min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

// Utilizando um objeto dentro do console.log poderia ser usado também:
/* 
const obj = { max: 50, min 40 };
console.log(rand(obj));
*/

// Se não for passado nada como console.log(rand({})) sera retornado valores entre 0 e 1000
console.log(rand1({max: 30, min: 10}));

// Em arrays Exemplo

// Se o min for maior que o máximo, com uso do operador destructing, troque o valor de min e max
function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

// Caso passe assim sera trocado o valor de max e min
console.log(rand([50,40]));
// Caso passe 1 só sera considerado o min
// Caso não passe nada assume o padrão
console.log(rand([500]));
