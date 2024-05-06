// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagemUm = document.querySelector("img");
console.log(imagemUm.offsetTop)
// Retorne a soma da largura de todas as imagens
function somaImagens(){
const imagens = document.querySelectorAll("img");
let soma = 0
imagens.forEach((item) => {
  soma += item.offsetWidth;
} )
console.log(soma);
}
window.onload = function (){
  somaImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o Google)
const links = document.querySelectorAll("a");
links.forEach(item => { console.log(
  item.offsetWidth, item.offsetHeight
)})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tela = matchMedia('("max-width: 720px")')
const menu = document.querySelector(".menu")
if (tela.matches){
  menu.classList.add("menu-mobile")
  console.log('true')
} else {
  console.log('false')
}