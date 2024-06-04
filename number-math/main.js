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
