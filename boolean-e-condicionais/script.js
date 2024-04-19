// Boolean e Condicional
const possuiGraducao = false;
const possuiDoutorado = true;
if (possuiGraducao) {
  console.log("Possui Graduação");
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
} else {
  console.log("Não possui nada.");
}

const nome = "Gustavo";
// Truthy e Falsy
if (nome) {
  console.log(nome);
} else {
  console.log("nome não existe");
}
// Negação
if (!possuiGraducao) {
  console.log("nao possui graducao");
}

// if(!!null ) assim você verifica

// Comparação
10 > 5; //true
10 < 2; //false
10 >= 10; //true
5 <= 3; //false
10 === 10; //true
11 != 10; //true
11 !== 11; //false

// Operadores Lógicos
true && true; //true
true && false; //false
false && true; //false
'Gato' && 'Cão'; // Cão

true || true; //true
true || false; //true
false || true; //true
"Gato" || "Cão"; // Gato