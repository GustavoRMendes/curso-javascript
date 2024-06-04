// Number
const idade = 19;
const numero = 32.392;
// isNaN
console.log(Number.isNaN(idade)); // false

// isInteger
console.log(Number.isInteger(idade)); // true

// parseFloat
console.log(Number.parseFloat(numero));

// parseInt
console.log(Number.parseInt(numero));

// toFixed
const numeroAleatorio = 18.382882862651;
console.log(numeroAleatorio.toFixed(2));

// toString(radix)
console.log(numeroAleatorio.toString(10));

// toLocaleString(lang,options)
const dinheiro = 18.28;
console.log(
  dinheiro.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

// Math
console.log(Math.PI);

// abs, ceil, floor, round
console.log(Math.abs(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.round(numero));

// max, min, random
console.log(Math.random());
console.log(Math.max(18, 28, 482, 484, 4));
console.log(Math.min(18, 28, 482, 484, 4));
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * (40 - 20 + 1) + 20));

// Exercise
// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}
let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});
console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
