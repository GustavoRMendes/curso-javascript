// Array
const lista = ["Gustavo", "Felipe", "Téo"];
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
const li = document.querySelectorAll("li"); // NodeList
const arrayLi = Array.from(li); // Array
console.log(li);
console.log(arrayLi);
