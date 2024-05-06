const img = document.querySelector("img");

// img.addEventListener("click", () => {
//   console.log("clicou");
// })
function callback() {
  console.log("clicou");
}
img.addEventListener("click", callback);
