// Array-Iteração
// forEach(callback(item,index,array))
const animais = ["Cavalo", "Lagartixa", "Boi"];
animais.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

animais.forEach(function (item) {
  console.log(item.toLowerCase());
});

// Arrow Function
const li = document.querySelectorAll("li");
li.forEach((item, index) => item.classList.add("ativo" + index));

// map(callback(itemAtual,index,array))
