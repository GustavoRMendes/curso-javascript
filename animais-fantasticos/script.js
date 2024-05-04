// Document.querySelector()
// Document.querySelectorAll()

const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const ul = document.getElementsByTagName("ul");
console.log(ul);

const firstLi = document.querySelector("li");
console.log(firstLi);

const linksInterno = document.querySelector("[href^='#']");
console.log(linksInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);