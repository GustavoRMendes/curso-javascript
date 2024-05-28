// const Dom = {
//   tagSeletor: "li",
//   element() {
//     return (tagSelecionada = document.querySelector(this.tagSeletor));
//   },
//   classeAtivar() {
//     this.element().classList.add("ativo");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}
const lastLi = new Dom("li:last-child");
const li = new Dom("li");
const ul = new Dom("ul");
ul.ativar("ul-ativa");

// Exercises
// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("joao", 20);
const maria = new Pessoa("maria", 25);
const bruno = new Pessoa("bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function ManipularDom(seletor) {
  const elementoSelecionado = document.querySelectorAll(seletor);
  this.elements = elementoSelecionado;
  this.addClass = function (classe) {
    elementoSelecionado.forEach((el) => {
      el.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    this.elements.forEach((el) => {
      el.classList.remove(classe);
    });
  };
}
