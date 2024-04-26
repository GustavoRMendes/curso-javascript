function areaQuadrada(lado) {
  return lado * lado;
}

console.log(areaQuadrada(2));

function pi() {
  return Math.PI;
}

console.log(pi());

function imc (peso,altura) {
  const resultado = peso / (altura ** 2);
  return resultado;
}

console.log(imc(63,1.74));

function corFavorita (cor){
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "preto"){
    return "Eu gosto da noite";
  } else {
    return "Eu gosto dessa cor";
  }
}

console.log(corFavorita("azul"));