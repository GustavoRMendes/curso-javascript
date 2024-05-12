const dt = document.querySelectorAll(".pergunta");
if (dt.length) {
  dt[0].classList.add("ativo");
  dt[0].nextElementSibling.classList.add("ativo");
  function handleDt() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }
  dt.forEach((item) => {
    item.addEventListener("click", handleDt);
  });
}
