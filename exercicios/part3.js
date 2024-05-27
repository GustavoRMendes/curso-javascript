// Calculadora de Média:
// Escreva um programa que solicita ao usuário que insira três números e, em seguida, calcula e exibe a média desses números.

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));
const numero3 = Number(prompt("Digite o terceiro número: "));
const media = (numero1 + numero2 + numero3) / 3;
console.log("A média dos três números inseridos por você resulta em " + media);
