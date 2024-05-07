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
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");

animais.appendChild(tituloContato); 
// insertBefore
const mapa = document.querySelector(".mapa");
// contato.insertBefore(animais,mapa); 
// o segundo argumento tem quer ser filho do elemento que foi adicionado a função


// replaceChild
// contato.replaceChild(mapa,tituloContato);
// removeChild
// contato.removeChild(titulo);


// Novos elementos
const novoTitulo = document.createElement("h1");
novoTitulo.innerText = "Novo título";
novoTitulo.classList.add("new");

mapa.appendChild(novoTitulo);
console.log(novoTitulo);