// Operadores de Atribuição
let numero = 20;
numero += 10;
console.log(numero);

// Ternário
const idade = 18;
const resultado = idade >= 18 ? "Maior de idade" : "Menor de Idade";
console.log(resultado);

// IF abreviado
if (idade === 18) 
  console.log("Idade igual a 18");
else
  console.log("Não é igual a 18");


// Exercício
let scroll = 1000;
scroll += 500;
console.log(scroll);

let possuiCarro = true;
let possuiCasa = true;
let darCredito;

darCredito = (possuiCarro &&  possuiCasa);
console.log(darCredito)