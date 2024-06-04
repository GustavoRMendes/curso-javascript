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
console.log(Math.floor(Math.random() * (20 - 40 + 1) + 40));
