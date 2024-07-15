// Object.getOwnPropertyDescriptors(objeto)

const carro = {};
Object.defineProperties(carro, {
  rodas: {
    value: 4,
    configurable: false,
    writable: false,
  },
});
console.log(carro);
console.log(Object.getOwnPropertyDescriptors(carro));
console.log(Object.getOwnPropertyDescriptors(window));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
const configure = Object.getOwnPropertyDescriptor(window, "innerHeight");
console.log(configure);
console.log(configure.configurable);
console.log(configure.get);
console.log(configure.set);
console.log(configure.enumerable);
