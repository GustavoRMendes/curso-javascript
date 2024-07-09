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
//  apply

// bind
