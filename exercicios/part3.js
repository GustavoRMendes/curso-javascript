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

function mensagem(nome) {
  alert(`Seja Bem-Vindo ${nome}!`);
}
mensagem("Gustavo");

// Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.

function verificarNumero(numero) {
  if (numero % 2 === 0) {
    console.log("é par");
  } else {
    console.log("é impar");
  }
}
verificarNumero(10);
verificarNumero(15);

// Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta. Utilize essa função para converter diferentes strings.

function converterLetra(frase) {
  const maiusculo = frase.toUpperCase();
  console.log(maiusculo);
}

// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.

function primo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Função que some dois números

function somaDoisNumeros(numero1, numero2) {
  console.log(numero1 + numero2);
}
somaDoisNumeros(10, 20); // 30

// Escreva uma função que receba uma string como entrada e retorne a string invertida. Exemplo: "oi mundo!" -> "!odnum oi".

function inverter(mensagem) {
  const palavraInvertida = mensagem.reverse().join("");
}

inverter("mensagem");

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.endereco = {
    rua: "Sete de Setembro",
    bairro: "Rio Madeira",
    numero: 3984,
  };
  this.falar = function () {
    console.log("Oi.");
  };
}
Pessoa.prototype.andar = function () {
  alert(this.nome + " andou");
};
const gustavo = new Pessoa("Gustavo", "Mendes", 19);
gustavo.falar();
gustavo.andar.constructor.name;
