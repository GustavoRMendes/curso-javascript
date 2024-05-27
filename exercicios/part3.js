// Calculadora de Média:
// Escreva um programa que solicita ao usuário que insira três números e, em seguida, calcula e exibe a média desses números.

const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));
const numero3 = Number(prompt("Digite o terceiro número: "));
const media = (numero1 + numero2 + numero3) / 3;
console.log("A média dos três números inseridos por você resulta em " + media);

// Verificar Palíndromo:
// Crie uma função que recebe uma string como entrada e verifica se é um palíndromo (ou seja, se pode ser lida da mesma forma da esquerda para a direita e vice-versa).

function verificarPalindromo(palavra) {
  palavra = palavra.toLowerCase().replace(/ /g, "");
  const palavraInvertida = palavra.split("").reverse().join("");
  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

// Contar Vogais:
// Escreva uma função que aceite uma string como entrada e retorne o número de vogais presentes nessa string.

function contadorDeVogais(texto) {
  const regexVogais = /[aeiou]/gi;
  const numeroVogais = texto.match(regexVogais).length;
  return numeroVogais;
}

// Crie uma função que exiba uma mensagem de boas-vindas ao usuário quando a página for carregada. Utilize essa função para personalizar a experiência de cada usuário.

function mensagem() {
  alert("Seja Bem-Vindo!");
}
