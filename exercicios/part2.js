// const and let;
const constante = "constante";
let variavel;
variavel = "texto";

// number and string
const texto = "";
const numero = 10;

// array and object
const lista = ["Maça", "Banana", "Uva"];
const pessoa = {
  nome: "Felipe",
  idade: 19,
};

// symbol
const simbolo = Symbol();

// function
function showMessage(message) {
  return message;
}
console.log(showMessage("Helllo"));

// arrow function
const li = document.querySelectorAll("li");
li.forEach((li) => {
  li.classList.add("ativo");
});

// constructor function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const gustavo = new Pessoa("Gustavo", 19);

// if else
const idade = 19;
if (idade > 18) {
  console.log("Maior");
} else {
  console.log("Menor");
}

// else if
if (idade < 19) {
  console.log("Menor que 19");
} else if (idade == 19) {
  console.log("Igual");
} else {
  console.log("Maior");
}

// Math
const PI = Math.PI;
const numeroAleatorio = Math.random() * 101;
console.log(numeroAleatorio);
// while, do while and for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (true) {
  // console.log("Enquanto for verdadeiro");
}

do {
  // console.log("Faça, enquanto...");
} while (false);
