// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("section > p");
const arrayParagrafos = Array.from(paragrafos);
const result = arrayParagrafos.reduce((acc, paragrafo) => {
  return acc + paragrafo.length;
}, 0);
console.log(result);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
