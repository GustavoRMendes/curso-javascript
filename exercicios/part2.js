// const and let;
const constante = "constante";
let variavel;
variavel = "texto";

// number and string
const texto = "";
const numero = 10;

// object
const pessoa = {
  nome: "Felipe",
  idade: 19,
};

// symbol
const simbolo = Symbol();
console.log(simbolo);

// if else
const idade = 19;
if (idade > 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}

// else if
if (idade < 19) {
  console.log("Menor que 19");
} else if (idade == 19) {
  console.log("Igual");
} else {
  console.log("Maior");
}

// switch
// let opcao = Number(prompt("Digite um numero de 1 a 5:"));
// switch (opcao) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   case 4:
//     console.log("4");
//     break;
//   case 5:
//     console.log("5");
//     break;
//   default:
//     console.log("Nenhum dos números");
// }

// Math
const PI = Math.PI;
const numeroAleatorio = Math.random() * 101;
console.log(numeroAleatorio);
const numeroAletorioFloor = Math.floor(Math.random() * 101);
console.log(numeroAletorioFloor);

// while, do while and for
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while (true) {
//  console.log("Enquanto for verdadeiro");
// }

// do {
//  console.log("Faça, enquanto...");
// } while (false);

// Array
const listaDeNumeros = [1, 2, 3, 4, 5];
const primeroDaLista = listaDeNumeros[0];
const ultimoDaLista = listaDeNumeros[listaDeNumeros.length - 1];
console.log(primeroDaLista);
console.log(ultimoDaLista);
listaDeNumeros[3] = 70;
console.log(listaDeNumeros);
const nomes = ["Felipe", "Gustavo"];
nomes.push("Téo");
nomes.pop();
nomes.unshift("Camilo");
nomes.shift();
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.length);
const lista = ["Maça", "Banana", "Uva"];
