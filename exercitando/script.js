// // eventos
// function handleClick(event) {
//   if (event.key === "f") {
//     alert("Tela cheia");
//   }
// }

// window.addEventListener("keydown", handleClick);

// function darkTheme(event) {
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("dark");
//   }
// }

// window.addEventListener("keydown", darkTheme);

// // currentTarget  e Target
// const img = document.querySelector("img");
// function handleImg(event) {
//   console.log(event.target)
//   console.log(event.currentTarget)
// }
// img.addEventListener("click", handleImg);

// const h1 = document.querySelector("h1");
// h1.innerHTML = "Título modificado com JavaScript."


// // Traversing == Navegação pelo DOM
// const body = document.querySelector("body");
// console.log(body.parentElement)
// console.log(body.previousElementSibling)

// // Element vs node

// // lista.previousElementSibling; elemento acima
// // lista.previousSibling; node acima
// // lista.firstChild; primeiro node child
// // lista.childNodes; todos os node child

// const cloneTitulo = h1.cloneNode(true);
// console.log(cloneTitulo)