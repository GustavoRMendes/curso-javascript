const lista = ["Banana", "Maça", "Pera"];
console.log(lista);

lista.pop();
console.log(lista);
// For Loop
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

// While
let contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Break
const nomes = ["Gustavo", "Felipe", "Camilo", "Cecília", "Isadora"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
  if (nomes[i] === "Camilo") {
    break;
  }
}

// forEach
nomes.forEach(function (item, index, array) {
  console.log(item, index, array);
});


// Exercício
const copasDoBrasil = [1959, 1962, 1970, 1994, 2002];
copasDoBrasil.forEach(function (ano){
  console.log(`O Brasil ganhou a copa do ano de ${ano}`)
})

const frutas = ['Banana','Maça','Pera','Uva','Melancia']
for(let cont = 0; cont < frutas.length; cont++){
  console.log(frutas[cont])
  if(frutas[cont] === "Pera") {
    break;
  }
} 

const ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta)