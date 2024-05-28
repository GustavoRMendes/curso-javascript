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
