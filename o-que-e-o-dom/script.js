const titulo = document.querySelector("h1");
window.alert("Hello");
alert("Hello de novo")
const href = window.location.href;
console.log(document.body)
if (href === "http://localhost:5500/o-que-e-o-dom/") {
  console.log("true");
} else {
  console.log("false");
}

console.log(Element)
console.log(titulo.classList[0])
console.log(titulo.classList[1])
console.log(titulo.innerText)
console.log(titulo.id)
console.log(titulo.offsetHeight)
function clicou() {
  if(titulo.innerText === "Título"){
    titulo.innerText = "Clicou"
  } else if(titulo.innerText === "Clicou") {
    titulo.innerText =  "Título"
  }
}
titulo.addEventListener("click", clicou)
