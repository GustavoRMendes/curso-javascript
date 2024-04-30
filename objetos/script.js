const person = {
  firstName: "Gustavo",
  age: 19,
};

console.log(person);
console.log(person.age);
console.log(person.firstName);

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(2));
console.log(Math.random());
console.log(Math.PI);
console.log(quadrado.hasOwnProperty("lados")); //true

// Exercício

const pessoa = {
  nome: "Gustavo",
  sobrenome: "Mendes",
  mostrarNome() {
    return this.nome + " " + this.sobrenome;
  },
};
console.log(pessoa.mostrarNome());
const carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
const cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latiu";
    } else {
      return "Nada";
    }
  },
};
console.log(cachorro.latir("homem"));