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
