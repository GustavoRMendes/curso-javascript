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

function Time(nome, divisao) {
  this.nome = nome;
  this.divisao = divisao;
}
const impetuosa = new Time("Atlética Impetuosa", "A");

// This Keyword
