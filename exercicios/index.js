// Faça com que apareça Olá, Mundo! no console
console.log("Olá, Mundo!");

//Crie uma página HTML com um botão e faça com que ele exiba um alerta quando clicado.
const buttonAlert = document.querySelector(".showAlert");
function showMessage() {
  alert("Alerta!");
}
buttonAlert.addEventListener("click", showMessage);

// Crie um programa que peça ao usuário um nome e depois exiba uma mensagem de saudação.
const nome = prompt("Qual seu nome?");
const saudacao = alert("Olá " + nome + " !");

// Crie uma página HTML com diferentes elementos e manipule-os usando JavaScript. Por exemplo, altere o texto de um parágrafo, adicione uma classe a um elemento ou esconda um elemento.
const titulo = document.querySelector(".title");
titulo.classList.add("ativo");
titulo.innerHTML = "Novo Título";
