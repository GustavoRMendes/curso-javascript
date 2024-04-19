// Números
const idade = 19;
const gols = 1000;
const pi = 3.14;
const exp = 2e10;

// Operadores Aritméticos
const soma = 1 + 1;
const subtracao = 2 - 2;
const multiplicacao = 10 * 10;
const divisao = 10 / 2;
const expoente = 2 ** 4;
const modulo = 14 % 5;

// Operadores Aritméticos (String)
const somaString = "100" + 50; // 10050
const subtracaoString = 100 - "50"; // 50
const multiplicacaoString = "100" * "2"; //200
const divisaoString = "Comprei 10" / 2; // NaN

// A ordem importa
const total1 = 20 + 5 * 2; // 30
const total2 = (20 + 5) * 2; // 50
const total3 = (20 / 2) * 5; // 50
const total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Aritméticos Unários
let i = 0;
console.log(i++);
console.log(i);
console.log(++i);
console.log(i);

const idadeString = "20";
console.log(+idadeString); // number

// Exercício
const total = 10 + (5 * 2) / 2 + 20;
console.log(total);
const numeroString = +"200";
const cinquenta = 50;
console.log(numeroString + cinquenta); // 250
let cont = 5;
console.log(++cont);
const number = +"80" / 2;
const unidade = "kg";
const peso = number + unidade;
console.log(peso);
