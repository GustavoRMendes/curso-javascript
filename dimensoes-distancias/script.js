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

// Window
console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
)
if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

// matchMedia
const small = window.matchMedia('("max-width: 600px")');
if(small.matches) {
  console.log("tela menor que 600px");
} else {
  console.log("tela maior que 600px")
}