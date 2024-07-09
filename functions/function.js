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
