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

