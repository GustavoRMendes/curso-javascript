// Object create

const animal = {
  comer() {
    return this.nome + " comeu...";
  },
  andar() {
    return this.nome + " andou...";
  },
};
const cavalo = Object.create(animal);
cavalo.nome = "Cavalo";
console.log(cavalo);
console.log(cavalo.andar());
