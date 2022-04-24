// Exemplos para entender let

let numero = 1;
{
     let numero = 2;
     console.log('dentro =', numero)
}

console.log('fora =', numero);

/* A variavel criada com let possui 3 escopos, global, funcao e bloco. No caso de escopo por bloco sera 
dada sempre a prioridade pra variavel criada dentro do escopo menor. */
