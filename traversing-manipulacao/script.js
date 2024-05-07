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