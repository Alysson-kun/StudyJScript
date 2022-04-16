let nome = "Alysson";
let sentença = "Você é um amigo";
const template1 = `Olá, ${nome}! ${sentença}`;

 console.log(template1);

const template2 = `Olá, 
${nome}!
${sentença}`;

console.log(template2);

const contatenacao = "Vamo jogar algo";

console.log(template1, contatenacao);

console.log (`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Oiiiiiiii... ${up("ramo simbora")}`);
