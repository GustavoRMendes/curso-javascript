// Object.defineProperties(objeto, propriedades)

// configurable: impede deletar e mudar valor
// enumerable: torna ou não inumerável
// value: valor da propriedade
// writable: impede mudança de valor
const carro = {};
Object.defineProperties(carro, {
  rodas: {
    value: 4,
    configurable: false,
    writable: false,
  },
});
carro.rodas = 3;
delete carro.rodas;
console.log(carro);

// get()
// set()
const moto = {};
Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor + " Rodas";
    },
  },
});
console.log(moto);
moto.rodas = 2;
console.log(moto);
