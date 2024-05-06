// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, index, array) {
//   // console.log(item);
//   // console.log(index);
//   // console.log(array);
// });

const titulos = document.getElementsByClassName("titulo");
titulosArray = Array.from(titulos);
titulosArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

const imgs = document.querySelectorAll("img");

imgs.forEach( (item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});