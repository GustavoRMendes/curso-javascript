// function
function showMessage(message) {
  return message;
}
console.log(showMessage("Helllo"));
// Named function
function rocketToMars() {
  return "BOOM!";
}

// Anonymous function
const rocketToMars = function () {
  return "BOOM!";
};

// arrow function =>
//const li = document.querySelectorAll("li");
//li.forEach((li) => {
//  li.classList.add("ativo");
//});

// constructor function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const gustavo = new Pessoa("Gustavo", 19);
const felipe = new Pessoa("Felipe", 29);
const teo = new Pessoa("Téo", 39);
console.log(gustavo, felipe, teo);
