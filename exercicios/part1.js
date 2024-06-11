// const numero1 = 10;
// const numero2 = 20;

// const soma = numero1 + numero2;
// const subtracao = numero1 - numero2;
// const multiplicacao = numero1 * numero2;
// const divisao = numero1 / numero2;
// console.log("A soma resulta em " + soma);
// console.log("A subtração resulta em " + subtracao);
// console.log("A multiplicação resulta em " + multiplicacao);
// console.log("A divisão resulta em " + divisao);

// // -------------------------------
// const idade = 18;
// const resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
// console.log(resultado);
// // -------------------------------
// const nota1 = 10;
// const nota2 = 10;
// const nota3 = 8;
// const mediaDasNotas = (nota1 + nota2 + nota3) / 3;
// console.log(mediaDasNotas);
// // ------------------------------
// function verificacao(numero) {
//   if (numero < 10) {
//     console.log("Menor que 10");
//   } else {
//     console.log("Maior ou igual 10");
//   }
// }
// verificacao(20);
// // ----------------------------
// function parOuImpar(numero) {
//   if (numero % 2 === 0) {
//     console.log("Par");
//   } else {
//     console.log("Impar");
//   }
// }
// parOuImpar(20);
// // --------------------------
// // Celsius to farenheit
// function celsiusToFarenheit(celsius) {
//   const resultado = celsius * 1.8 + 32;
//   return resultado;
// }
// console.log(celsiusToFarenheit(10));
// console.log(celsiusToFarenheit(20));

// Jogo de 1 a 100
const numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let tentativa = 0;
let palpite;
do {
  tentativa++;
  palpite = Number(prompt("Adivinhe o número de 1 a 100: "));
  if (palpite > numeroAleatorio) {
    alert("Seu palpite é maior, tente novamente.");
  } else if (palpite < numeroAleatorio) {
    alert("Seu palpite é menor, tente novamente.");
  } else {
    alert("Parabéns, você acertou em " + tentativa + " tentativas!");
  }
} while (palpite !== numeroAleatorio);
