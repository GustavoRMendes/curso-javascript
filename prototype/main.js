// Prototype é um objeto adicionado a uma função quando criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.endereco = {
    rua: "Avenida Sete de Setembro",
    numero: 6795,
  };
  this.falar = function () {
    console.log("Oi");
  };
  this.andar = function () {
    return "Andou pela propriedade do objeto";
  };
}
function Animal(nome, age) {
  this.nome = nome;
  this.age = age;
}
const gustavo = new Pessoa("Gustavo", 19);
const felipe = new Pessoa("Felipe", 19);
const cachorro = new Animal("TimTim", 2);
const cavalo = new Animal("Loppi", 5);

// Adicionar propriedade ou método no objeto prototype da função.
// Primeiro ele procura se existe o método ou propriedade no objeto.
Pessoa.prototype.andar = function () {
  return "andou";
};
Pessoa.prototype.respirar = function () {
  return this.nome + " respirou";
};

Animal.prototype.falar = function () {
  console.log("Hello, my name is " + this.nome);
};
cachorro.falar();
console.log(cachorro.toString()); // Object Object

// __proto__
// Papel da engine fazer a busca pelo __proto__

// Herança de Protótipo
Object.prototype;

// Construtores nativos

const pais = "Brasil";
const cidade = new String("Porto Velho");

cidade.toUpperCase();
pais.toLowerCase();
pais.charAt(0);
cidade.charAt(2);

// Acessar a função do protótipo

String.prototype.toLowerCase();

const listaAnimais = ["Gato", "Cavalo", "Urso"];
console.log(listaAnimais);

// Retornar uma array
const lista = document.querySelectorAll("li"); // Node List
const listaArray = Array.prototype.slice.call(lista); // Array
const listaArray2 = Array.from(lista); // Array

Object.getOwnPropertyNames(Array);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

console.log(typeof Carro); // object
console.log(Carro.marca.constructor.name); // String
console.log(Carro.preco.constructor.name); // Number
console.log(Carro.andar.constructor.name); // Function

// Exercício
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Node List = For Each, Item, Entries, Keys and Value
// HTMLCollection = Call,Apply, Bind, To String
// Document

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

console.log(li.constructor.name); // HTTMLIElement
li.click; // function
console.log(li.innerText.constructor.name); // String
console.log(li.value.constructor.name); // Number
console.log(li.hidden.constructor.name); // Boolean
console.log(li.offsetLeft.constructor.name); // Number
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // Boolean
