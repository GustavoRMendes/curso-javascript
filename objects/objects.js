// Object
const obj = {};
const obj2 = new Object({
  nome: "Gustavo",
});

// Object.create
const moto = {
  marca: "Marca",
  buzinar() {
    console.log("Moto " + marca + " buzinou");
  },
};
const honda = Object.create(moto);
console.log(honda);
honda.marca = "honda";
console.log(honda);
