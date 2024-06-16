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
