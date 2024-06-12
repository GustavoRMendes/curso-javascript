// Array-Iteração
// forEach(callback(item,index,array))
const animais = ["Cavalo", "Lagartixa", "Boi"];
animais.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

animais.forEach(function (item) {
  console.log(item.toLowerCase());
});
