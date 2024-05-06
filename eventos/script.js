const img = document.querySelector("img");
// img.addEventListener("click", () => {
//   console.log("clicou");
// })
function callback(event) {
  console.log(event);
}
img.addEventListener("click", callback);
