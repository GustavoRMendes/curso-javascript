// Função construtora
function Carro() {
  this.nome = "Carro";
}

const hrV = new Carro();
hrV.nome = "hrv";
hrV.ano = 2024;
console.log(hrV);

// Parâmetros e argumentos

function Moto(marca, ano) {
  this.marca = marca;
  this.ano = ano;
}

const motocross = new Moto("honda", 2023);
console.log(motocross);


// This Keyword