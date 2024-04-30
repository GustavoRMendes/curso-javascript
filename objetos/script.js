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