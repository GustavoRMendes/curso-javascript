// functions

function lerNome(nome) {
  return nome;
}
console.log(lerNome("Gustavo"));
console.log(lerNome.length);
console.log(lerNome.name);

// call
const pessoa = {
  nome: "Gustavo",
  sobrenome: "Mendes",
};
function descricaoPessoa() {
  console.log(this.nome + " " + this.sobrenome);
}
descricaoPessoa();
descricaoPessoa.call(pessoa);

function mostrarNumero() {
  return console.log(this.numero);
}
const meuNumero = {
  numero: 47992442004,
};
mostrarNumero.call(meuNumero);

const animais = ["Burro", "Cavalo", "Cachorro"];
const motos = ["Honda", "Mitsui", "Gw"];
motos.forEach.call(motos, (moto) => {
  console.log(moto);
});
motos.forEach.call(animais, (animal) => {
  console.log(animal);
});

const li = document.querySelectorAll("li");

const filtro = Array.prototype.filter.call(li, (el) => {
  return el.classList.contains("ativo");
});

console.log(filtro);

const obj = {
  saudacao: function (nome) {
    console.log("Olá " + this.nome);
  },
};
const humano = { nome: "Gustavo" };
const resultadoHumano = obj.saudacao.call(humano);
// apply
const listaDeNumeros = [1, 2, 4, 5, 6, 7, 8, 9];
console.log(Math.max.apply(null, listaDeNumeros));

const lis = document.querySelectorAll("li");
function itemLi(el) {
  return el.classList.contains("ativo");
}
const lisApply = Array.prototype.filter.apply(li, [itemLi]);
console.log(lisApply);

const obj2 = {
  mensagem: function (sobrenome) {
    console.log("Minha mensagem para o senhor " + sobrenome);
    console.log(this);
  },
};
const pessoa3 = {
  e: "texto",
};
obj2.mensagem.apply(pessoa3, ["Mendes"]);
// bind
const lis1 = document.querySelectorAll("li");
const lisApply1 = Array.prototype.filter.bind(li, function (el) {
  return el.classList.contains("ativo");
});
console.log(lisApply1());

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);
console.log(imc(1.74, 66));
console.log(imc180(70));

function nomeCompleto() {
  console.log(this.nome + " " + this.sobrenome);
}

const pessoa2 = {
  nome: "Gustavo",
  sobrenome: "Mendes",
};

const resultado = nomeCompleto.bind(pessoa2);
resultado();

const ford = {
  marca: "Ford",
  acelerar(velocidade) {
    console.log(
      "O carro da marca " +
        this.marca +
        " atingiu uma velocidade de " +
        velocidade +
        " km/h"
    );
  },
};
const ferrari = {
  marca: "Ferrari",
};
const resultado3 = ford.acelerar.bind(ferrari, 90);
const resultado4 = ford.acelerar(30);
console.log(resultado4);
resultado3();
