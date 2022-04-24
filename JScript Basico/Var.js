// Exemplos para entender VAR

{
    {
        var sera = 'sera????';
    }
}

console.log(sera)

// uma var ficara visivel para fora do bloco a menos que esteja dentro de uma funcao.  Sendo assim a variavel var tem 2 escopos: global e funcao.

cconsole.log(sera)

function teste() {
        var local = 123;
        console.log(local);
    }

teste()
console.log(local)

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero);
}

console.log('fora =', numero);
