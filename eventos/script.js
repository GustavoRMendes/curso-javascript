const img = document.querySelector("img");
// img.addEventListener("click", () => {
//   console.log("clicou");
// })
function callback(event) {
  console.log(event);
}
img.addEventListener("click", callback);
const animaisLista = document.querySelector(".animais-lista");
function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}
animaisLista.addEventListener("click", callbackLista);