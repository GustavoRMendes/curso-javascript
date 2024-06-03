// Length
const nome = "Gustavo";
console.log(nome.length);

// chartAt()
console.log(nome.charAt(0)); //G

// concat()
const linguagem = "Javascript";
const frase = " é a melhor linguagem do mundo!";
console.log(linguagem.concat(frase));

// includes
const helloWorld = "Hello World!";
console.log(helloWorld.includes("Hello")); //true
console.log(helloWorld.includes("World", 4)); //true

// startsWith() and endsWith()
const nomeCompleto = "Gustavo Rodrigues Mendes Valente";
console.log(nomeCompleto.startsWith("Gustavo")); //true
console.log(nomeCompleto.endsWith("Valente")); //true
