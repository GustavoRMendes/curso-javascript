// Prototype é um objeto adicionado a uma função quando criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return "Andou pela propriedade do objeto";
  };
}

const gustavo = new Pessoa("Gustavo", 19);
function Animal(nome) {
  this.nome = nome;
}
Animal.prototype.falar = function () {
  console.log("Hello, my name is " + this.nome);
};
const cachorro = new Animal("TimTim");
cachorro.falar();
console.log(cachorro.toString()); // Object Object
// Adicionar propriedade ou método no objeto prototype da função.
// Primeiro ele procura se existe o método ou propriedade no objeto.
Pessoa.prototype.andar = function () {
  return "andou";
};
Pessoa.prototype.respirar = function () {
  return this.nome + " respirou";
};

// __proto__
// Papel da engine fazer a busca pelo __proto__

// Herança de Protótipo
Object.prototype;

// Construtores nativos

const pais = "Brasil";
const cidade = new String("Porto Velho");

cidade.toUpperCase();

pais.charAt(0);
cidade.charAt(2);
