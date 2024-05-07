// outerHTML === todo o html do elemento.
// innerHTML === html interno.
// innerText === texto, sem tags.

const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");
const animaisDescricao = document.querySelector(".animais-descricao");
console.log(animaisDescricao.innerText);
console.log(animaisDescricao.innerHTML);
console.log(animaisLista.innerText); // empty <vazio>, porque são imagens.
console.log(h1.innerHTML);

h1.innerHTML = "Olá, Gustavo!";

// Traversing

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling);

console.log(lista.children);
console.log(lista.children[lista.children.length - 1]);
console.log(lista.querySelectorAll("li"));
console.log(lista.querySelector("li:last-child"));

// Element vs Node
console.log(lista.childNodes);
console.log(lista.previousSibling);
console.log(lista.nextSibling);

// Manipulando Elementos