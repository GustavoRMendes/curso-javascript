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

// toLowerCase and toUpperCase
const message = "Lógica";
console.log(message.toLowerCase());
console.log(message.toUpperCase());

// trim(), trimStart, trimEnd
const espacos = "    Oi tudo bom?           ";
console.log(espacos.trim());
console.log(espacos.trimStart());
console.log(espacos.trimEnd());

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes1.forEach((transacao) => {
  const numeroLimpo = +transacao.valor.replace("R$ ", "");
  if (transacao.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
  console.log(taxaTotal);
  console.log(recebimentoTotal);
});

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlA = html.replaceAll("span", "a");
console.log(htmlA);

// Retorne o último caracter da frase
const frase2 = "Melhor do ano!";
console.log(frase2.charAt(frase2.length - 1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let taxasTotal = 0;
transacoes2.forEach((transacao) => {
  transacao = transacao.toLocaleLowerCase();
  transacao = transacao.trim();
  transacao = transacao.slice(0, 4);
  if (transacao === "taxa") {
    taxasTotal++;
  }
  console.log(taxasTotal);
});
