// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll(".menu a[href^='#']");
function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach(link => {
    link.classList.remove("ativo");
  })
  event.currentTarget.classList.add("ativo");
}
linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");
function handleElemento(event) {
  console.log(event.currentTarget);
  event.currentTarget.remove()
}
todosElementos.forEach((item) => {
  item.addEventListener("click",handleElemento)
} )

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("texto-maior")
  }
  }

window.addEventListener("keydown", handleT);
