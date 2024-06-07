// Array
const lista = ["Gustavo", "Felipe", "Téo", "Victor", "Portuga"];
const precos = [10, 20, 30, 40];
const carros = new Array("Corola", "Mustang", "Honda");

lista[3] = "Camilo";
lista[0] = "Rian";
lista[20] = "Zanol";
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);
console.log(lista[20]);
console.log(carros.length);

// Array.from()

const obj = {
  0: "Gustavo",
  1: "Mendes",
  2: "Rodrigues",
  length: 3,
};
const objArray = Array.from(obj);
const li = document.querySelectorAll("li"); // NodeList
const arrayLi = Array.from(li); // Array
console.log(li);
console.log(arrayLi);
console.log(objArray);

// isArray()
console.log(Array.isArray("[]"));
console.log(Array.isArray(objArray));
console.log(Array.isArray(li));
console.log(Array.isArray(arrayLi));

// Array.of , Array(), new Array()
console.log(Array.of(10));
console.log(Array.of("foo", 2, "bar", true));
console.log(Array.of());
console.log(Array.of(10, 2, 3, 5, 6));
console.log(new Array(10));
console.log(Array(19));

// .length
const frutas = ["Banana", "Maça", ["Pera", "Uva"]];
console.log(frutas.length);
console.log(frutas[frutas.length - 1]);
console.log(frutas[0].length);
console.log(frutas[2][1].length);
console.log(frutas[2][0].length);
