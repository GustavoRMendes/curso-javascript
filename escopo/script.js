"use strict";
// Escopo de Função
function mostrarCarro() {
  let carro = "Fusca";
  console.log(carro);
}
mostrarCarro(); // Fusca
// console.log(carro); carro is not defined;

// Escopo de Bloco
if (true) {
  let mensagem = "Oii"
  console.log(mensagem);
}
console.log(mensagem); //mensagem is not defined