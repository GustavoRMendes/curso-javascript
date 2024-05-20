// // Faça com que apareça Olá, Mundo! no console
// console.log("Olá, Mundo!");

// //Crie uma página HTML com um botão e faça com que ele exiba um alerta quando clicado.
// const buttonAlert = document.querySelector(".showAlert");
// function showMessage() {
//   alert("Alerta!");
// }
// buttonAlert.addEventListener("click", showMessage);

// // Crie um programa que peça ao usuário um nome e depois exiba uma mensagem de saudação.
// const nome = prompt("Qual seu nome?");
// const saudacao = alert("Olá " + nome + " !");

// // Crie uma página HTML com diferentes elementos e manipule-os usando JavaScript. Por exemplo, altere o texto de um parágrafo, adicione uma classe a um elemento ou esconda um elemento.
// const titulo = document.querySelector(".title");
// titulo.classList.add("ativo");
// titulo.innerHTML = "Novo Título";

// Crie um programa que realize operações matemáticas básicas com números, como adição, subtração, multiplicação e divisão.
let operacao = prompt(
  "Escolha um número para a operação que deseja:  \n 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"
);
switch (operacao) {
  case "1":
    let numero1 = Number(prompt("Digite o primeiro número: "));
    let numero2 = Number(prompt("Digite o segundo número: "));
    const soma = numero1 + numero2;
    alert("A soma é igual a: " + soma);
  case "2":
    let numero3 = Number(prompt("Digite o primeiro número: "));
    let numero4 = Number(prompt("Digite o segundo número: "));
    const subtracao = numero3 - numero4;
    alert("A subtracao é igual a: " + subtracao);
    break;
  case "3":
    let numero5 = Number(prompt("Digite o primeiro número: "));
    let numero6 = Number(prompt("Digite o segundo número: "));
    const multiplicacao = numero5 * numero6;
    alert("A multiplicação é igual a: " + multiplicacao);
    break;
  case "4":
    let numero7 = Number(prompt("Digite o primeiro número: "));
    let numero8 = Number(prompt("Digite o segundo número: "));
    const divisao = numero7 / numero8;
    alert("A divisão é igual a: " + divisao);
    break;
  default:
    alert("ERRO! TENTE NOVAMENTE...");
}
// Crie um programa que peça ao usuário dois números e depois exiba a soma deles.
let usuario1 = Number(prompt("Digite um número: "));
let usuario2 = Number(prompt("Digite outro número: "));
let soma = usuario1 + usuario2;
console.log(soma);



