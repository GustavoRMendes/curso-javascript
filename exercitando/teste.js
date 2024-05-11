const dt = document.querySelector(".pergunta");
const dd = document.querySelector(".resposta");
function handleDt() {
  dt.classList.toggle("ativo");
  dd.classList.toggle("ativo");
}
dt.addEventListener("click", handleDt)