// Faça com que apareça Olá, Mundo! no console
console.log("Olá, Mundo!");

//Crie uma página HTML com um botão e faça com que ele exiba um alerta quando clicado.
const buttonAlert = document.querySelector(".showAlert");
function showMessage() {
  alert("Alerta!");
}
buttonAlert.addEventListener("click", showMessage);
