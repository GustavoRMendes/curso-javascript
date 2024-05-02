// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href
console.log(urlAtual);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classeAtivo = document.querySelector(".ativo")
classeAtivo.innerHTML = "Modificado"
// Retorne a linguagem do navegador
const language = window.navigator.language
console.log(language)
// Retorne a largura da janela 
const largura = window.innerWidth
console.log(largura)