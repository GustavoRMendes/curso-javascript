const lista = ['Banana','Maça','Pera'];
console.log(lista);

lista.pop();
console.log(lista);
// For Loop
for(let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
for (let numero = 0; numero <= 10; numero++ ){
  console.log(numero);
}

// While
let contador = 0;
while(contador <= 10) {
  console.log(contador);
  contador++;
}

// Break
const nomes = ["Gustavo","Felipe","Camilo","Cecília","Isadora"];
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
  if(nomes[i] === "Camilo") {
    break;
  }
}  

// forEach
nomes.forEach(function(item,index,array) {
  console.log(item,index,array);
})