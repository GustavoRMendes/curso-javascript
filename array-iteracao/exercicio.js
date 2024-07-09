// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const objetosCursos = arrayCursos.map((cursos) => {
  const titulo = cursos.querySelector("h1").innerText;
  const descricao = cursos.querySelector("p").innerText;
  const aulas = cursos.querySelector("span.aulas").innerText;
  const horas = cursos.querySelector("span.horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetosCursos);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter((num) => num > 100);
console.log(maioresQue100);
// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(instrumentos.includes("Baixo"));
// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
const valorTotal = compras.reduce((acc, compra) => {
  const preco = compra.preco.slice(3).replace(",", ".");
  return acc + Number(preco);
}, 0);
console.log("Valor total: " + valorTotal);
