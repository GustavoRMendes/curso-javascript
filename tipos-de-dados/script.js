// Tipos de Dados

const nome = "Gustavo"; // string
const numero = 11; // number
const possuiTrabalho = false; // boolean
let time; // undefined
let comida = null; // null
let simbolo = Symbol(); // Symbol
const person = {}; // Object

// Verificar tipo de dados
// typeof
const sobrenome = "Mendes";
console.log(typeof sobrenome);

// Concatenar
const timeFavorito = "Barcelona";
const rival = "Real Madrid";
console.log("o " + timeFavorito + " é rival do " + rival);

// Template String
const anoDeNascimento = 2004;
const mesDeNascimento = "Outubro";
const diaDoNascimento = 20;
console.log(
  `Eu nasci dia ${diaDoNascimento} no mês de ${mesDeNascimento} no ano de ${anoDeNascimento}!`
);

// Exercício
const animal = "Cachorro";
const numeroTexto = "2004";
const minhaIdade = 19;
const meuNome = "Gustavo";
const meuSobrenome = "Mendes";
console.log("Meu nome completo é " + meuNome + " " + meuSobrenome);
const frase = "It ' s time";
console.log(typeof meuNome);
