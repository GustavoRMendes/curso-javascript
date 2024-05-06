const listaAnimais = document.querySelector(".animais-lista");
// scrollHeight, scrollWidth, clientHeight, clientWidth, offsetHeight, offsetWidth
const height = listaAnimais.scrollHeight;
console.log(listaAnimais.offsetWidth);
console.log(height);

// offsetTop e offsetLeft
console.log(listaAnimais.offsetTop);
console.log(listaAnimais.offsetLeft);

// getBoundingClientRect()
const primeiroh2 = document.querySelector("h2");
const rect = primeiroh2.getBoundingClientRect();
console.log(rect)