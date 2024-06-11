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

// Array.of
console.log(Array.of(10));
console.log(Array.of("foo", 2, "bar", true));
console.log(Array.of());
console.log(Array.of(10, 2, 3, 5, 6));
// new Array()
console.log(new Array(10));
// Array()
console.log(Array(19));

// .length
const frutas = ["Banana", "Maça", ["Pera", "Uva"]];
console.log(frutas.length);
console.log(frutas[frutas.length - 1]);
console.log(frutas[0].length);
console.log(frutas[2][1].length);
console.log(frutas[2][0].length);

// sort()
const comidas = ["Carne", "Peixe", "Frango", "Ovo"];
const numerosAleatorios = [10, 38, 48, 2, 4, 72, 56, 79, 8];
console.log(comidas.sort());
console.log(numerosAleatorios.sort()); // Alinha de acordo com o primeiro caracter.

// unshift and push
const jogadores = ["Neymar", "Ronaldo", "Vinícius Júnior"];
jogadores.unshift("Messi");
console.log(jogadores);
jogadores.push("Iniesta");
console.log(jogadores);

// shift and pop
console.log(jogadores.shift());
console.log(jogadores);
console.log(jogadores.pop());
console.log(jogadores);

// reverse
console.log(jogadores.reverse());

// splice (index, remover, item1, item2, ...)
const animais = ["Camelo", "Vaca", "Boi", "Borboleta", "Cachorro"];
console.log(animais);
animais.splice(2, 0, "Gato"); // Retorna o 0 porque nada foi removido.
console.log(animais);
animais.splice(0, 1, "Lagartixa"); // ['Camelo']
console.log(animais);

// copyWithin ( alvo, inicio, final)
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 3));

// fill (valor,inicio,final)
console.log(["Messi", "Neymar", "Pelé", "Maradona"].fill("Cr7", 1, 2));

// Métodos de acesso Arrays

// concat()
const linguagens1 = ["Javascript", "Python", "C++"];
const linguagens2 = ["Java", "Ruby", "C#"];
const linguagens = linguagens1.concat(linguagens2);
console.log(linguagens);

const maisLinguagens = [].concat(linguagens1, linguagens2, "C");
console.log(maisLinguagens);
