// Prototype é um objeto adicionado a uma função quando criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return "Andou pela propriedade do objeto";
  };
}

const gustavo = new Pessoa("Gustavo", 19);

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
