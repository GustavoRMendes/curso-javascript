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

// Switch
const corFavorita = "Azul";

switch (corFavorita) {
  case "Azul": 
    console.log("Sua cor favorita é azul");
    break;
  case "Vermelho":
    console.log("Sua cor favorita é vermelho");
    break;
  default:
    console.log("Suas cores não estão nas nossas opções");
}

// Exercício

let primeiroNome = "Neymar";
let idade = 31;
let possuiBolaDeOuro = false;
let empregoFuturo;
let dinheiroNaConta = 0;
console.log(!!primeiroNome);
console.log(!!idade);
console.log(!!possuiBolaDeOuro);
console.log(!!empregoFuturo);
console.log(!!dinheiroNaConta);

const expressao = (5-2) && (5 - ' ') && (5-2);
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}