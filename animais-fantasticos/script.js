// Document.querySelector() Seleciona só o primeiro
// Document.querySelectorAll() Seleciona todos

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

const primeiraUL = document.querySelector(".menu ul")
console.log(primeiraUL);
primeiraUL.classList.add("grid-section");

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");
console.log(gridSectionHTML); // adicionou a ul com a classe adicionada.
console.log(gridSectionNode); // não adicionou a ul com a classe adicionada.

// Array Like só funciona em NodeList
gridSectionNode.forEach(function (item,index) {
  console.log(item);
  console.log(index);
})
// Para transformar um HTMLCollection para NodeList usa se o Array.from()
const arrayGrid = Array.from(gridSectionHTML);
arrayGrid.forEach(function (item,index) {
  console.log(item);
  console.log(index);
}) 
