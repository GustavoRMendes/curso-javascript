// Object.assign(alvo, obj1, obj2)

const funcoesDeAutomovel = {
  acelerar() {
    console.log(this.automovel + " acelerou");
  },
  desacelerar() {
    console.log(this.automovel + " desacelerou");
  },
};
const moto = {
  automovel: "Moto",
};
Object.assign(moto, funcoesDeAutomovel).acelerar();

const carro = {
  automovel: "Carro",
};
Object.assign(carro, funcoesDeAutomovel).acelerar();

const programador = {
  nome: this.nome,
  idade: this.idade,
  programador: this.programador,
};

const felipe = Object.assign({}, programador);
felipe.nome = "Felipe";
felipe.idade = 19;
felipe.programador = true;
console.log(felipe);

const gustavo = Object.assign({}, programador);
gustavo.nome = "Gustavo";
gustavo.idade = 20;
gustavo.programador = false;
console.log(gustavo);
