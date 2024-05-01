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
//console.log(mensagem); // mensagem is not defined

// var vaza o escopo
{
  const carro2 = "Ferrari"
}
// console.log(carro2); // Not defined

// Exercício
// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
console.log(cor);

 //Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;
for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}
const total = 10 * numero;
console.log(total);
