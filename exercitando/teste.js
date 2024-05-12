const dt = document.querySelectorAll(".pergunta");
function handleDt() {
  this.classList.toggle("ativo");
  this.nextElementSibling.classList.toggle("ativo")
}
dt.forEach((item) => {
  item.addEventListener("click", handleDt)
})