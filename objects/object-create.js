// Object.create(objeto, definePropriedades)

const animal = {
  iniciar(valor) {
    this.idade = valor;
    return this;
  },
  comer() {
    return this.nome + " comeu...";
  },
  andar() {
    return this.nome + " andou...";
  },
};
const cachorro = Object.create(animal).iniciar(2);
cachorro.nome = "Cachorro";
console.log(cachorro);
console.log(cachorro.andar());
