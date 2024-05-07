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

const linkExterno = document.querySelector("a[href^='http']");
function handleLinkExterno(event) {
  event.preventDefault();
  console.log("clicou");
  console.log(this.getAttribute("href"));
}
linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");
function handleEvent(event) {
  console.log(event.type, event);
}
h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
h1.addEventListener("mousemove", handleEvent);

window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown", handleEvent);

// keyboard
function handleKeyboard(event){
  if(event.key ==="f") {
    document.body.classList.toggle("fullscreen")
  }
  console.log(event.key)
}

window.addEventListener("keydown",handleKeyboard)

function handleImg(event) {
  console.log(event.currentTarget.getAttribute("src"))
}
const imgs = document.querySelectorAll("img");
imgs.forEach(img => {
  img.addEventListener("click",handleImg)
})