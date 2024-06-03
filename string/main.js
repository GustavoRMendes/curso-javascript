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

// slice()
const mensagem = "Oi, tudo bem com você?";
console.log(mensagem.slice(0, 2)); //Oi
console.log(mensagem.slice(4, 12)); //tudo bem
console.log(mensagem.slice(4)); //tudo bem com você?
console.log(mensagem.slice(-1)); //?

// substring()
console.log(mensagem.substring(0));

// indexOf and lastIndexOf
const oracao = "Pai nosso que estás no céu";
console.log(oracao.indexOf("P")); //0
console.log(oracao.lastIndexOf("o")); //21

// padStart() and padEnd()
const texto = "Oi";
console.log(texto.padStart(5, ".")); //...Oi
console.log(texto.padEnd(5, ".")); //Oi...

// repeat()
const repetirNome = "Gustavo";
console.log(repetirNome.repeat(3)); //GustavoGustavoGustavo

// replace()
const recado = "Olá senhores, vão limpar a sala!";
console.log(recado.replace("senhores", "meninas"));

// split()
const padrao = "Hello Como voce ta";
console.log(padrao.split(" ")); // ["Hello", "Como" , "voce" , "ta"]
