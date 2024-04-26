function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada(2));

function pi() {
  return Math.PI;
}

console.log(pi());

function imc(peso, altura) {
  const resultado = peso / altura ** 2;
  return resultado;
}

console.log(imc(63, 1.74));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "preto") {
    return "Eu gosto da noite";
  } else {
    return "Eu gosto dessa cor";
  }
}

console.log(corFavorita("azul"));

addEventListener("click", function () {
  console.log("Oi");
});
// ou
function mostrarAlerta(mensagem) {
  if (typeof mensagem === "string"){
    alert("oi");
  } else {
    return "Preencha com um texto."
  }
}
addEventListener("click", mostrarAlerta("string"));

// Exercício
// Crie uma função para verificar se um valor é Truthy
function verification(value) {
  if (value) {
    console.log("verdade")
  } else {
    console.log("false")
  }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado1,lado2,lado3,lado4){
  return lado1 + lado2 + lado3 + lado4
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function showFullname(nome,sobrenome) {
  return `Meu nome completo é ${nome} ${sobrenome}`
}
// Crie uma função que verifica se um número é par
function verificarNumero(numero) {
  if (numero % 2 === 0) {
    return "Par"
  } else {
    return "Ímpar"
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(valor) {
  if (typeof valor === "string") {
    return "String"
  } else if (typeof valor === "number") {
    return "Number"
  } else if (typeof valor === "object") {
    return "Object"
  } else if (typeof valor === "boolean") {
    return "Boolean"
  } else if (typeof valor === "function") {
    return "Function"
  } else if (typeof valor === "symbol") {
    return "Symbol"
  } else if(typeof valor === "undefined") {
    return "Undefined"
  } else {
    console.log("tente novamente")
  }
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function showName(nome){
  console.log(nome)
}
addEventListener("scroll", showName("gustavo"))
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20));
