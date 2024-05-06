const itemsMenu = document.querySelectorAll(".menu a")
itemsMenu.forEach(item => {
  item.classList.add("ativo")
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach(item => {
  item.classList.remove('ativo')
})
itemsMenu[0].classList.add("ativo")
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img")
imgs.forEach((item) => {
  if(item.hasAttribute("alt")){
    console.log("possui")
  } else {
    console.log("nao possui")
  }
})
// Modifique o href do link externo no menu
const linkExterno = document.querySelector(".menu a[href^='https://www.origamid.com/']")
linkExterno.setAttribute("href","https://www.google.com")
console.log(linkExterno)