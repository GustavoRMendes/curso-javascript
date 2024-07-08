// Array-Iteração
// forEach(callback(item,index,array))
const animais = ["Cavalo", "Lagartixa", "Boi"];
animais.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

animais.forEach(function (item) {
  console.log(item.toLowerCase());
});

// Arrow Function
const li = document.querySelectorAll("li");
li.forEach((item, index) => item.classList.add("ativo" + index));

// map(callback(itemAtual,index,array))
const mapRetornaArray = animais.map((item, index, array) => {
  return item.toUpperCase() + " - " + index;
});
console.log(mapRetornaArray);
const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const dobroDosNumeros = numeros.map((num) => {
  return num * 2;
});
console.log(dobroDosNumeros);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
const tempoAula = aulas.map((aula) => {
  return console.log("O tempo da aula é de " + aula.min + " minutos");
});

// reduce
const reduceAulas = [10, 20, 30];

const reduzir = reduceAulas.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(reduzir);

const lista = [2, 4, 6, 8, 10, 12, 14, 16];
const menorNumeroDaLista = lista.reduce((acc, item) => {
  if (acc < item) {
    return acc;
  } else {
    return item;
  }
});

console.log(menorNumeroDaLista);

// reduce right
const frutasDaDireitaPraEsquerda = ["Banana", "Uva", "Pera"];
const direita = frutasDaDireitaPraEsquerda.reduceRight((acc, item) => {
  return acc + " " + item;
});

console.log(direita);

// some === procura pelo menos um verdadeiro
const nomes = ["Gustavo", "Felipe", "Téo"];
const maiorQue3 = nomes.some((n) => n.length > 3);
const teo = nomes.some((n) => n === "téo");
console.log(maiorQue3); // true
console.log(teo); // false

// every === procura o primeiro falso
const numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numbers.every((n) => n > 10));
console.log(numbers.every((n) => n >= 30));
console.log(numbers.every((n) => n === 100));
