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
  return console.log(aula.min);
});
