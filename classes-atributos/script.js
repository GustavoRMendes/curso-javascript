const menu = document.querySelector(".menu");
menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");  
}
console.log(menu.className);
menu.className += " vermelho"

// Attributes
const animais = document.querySelector(".animais");
console.log(animais.attributes);
console.log(animais.attributes['data-texto']);

//getAttribute e setAttribute
const img = document.querySelector("img");
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));
img.setAttribute("alt","Texto alternativo");
console.log(img.hasAttribute("alt")); //Verifica - true.

// Read Only - attributes
const carro = {
  portas: 4,
  andar() {
    return "andou";
  }
}
console.log(carro.andar());

