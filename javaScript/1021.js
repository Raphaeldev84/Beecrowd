
const fileSystem = require('fs')

const endereco = require('path');

const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor = lines.shift(); 

console.log("NOTAS:")

nota = 100
qtdeNotas = parseInt(valor / nota);
resto = valor % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 50
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 20
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 10
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 5
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

nota = 2
qtdeNotas = parseInt(resto / nota);
resto = resto % nota;
console.log(qtdeNotas + " nota(s) de R$ " + nota + ".00")

console.log("MOEDAS:")
moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 1.00")

resto = parseInt(resto * 100)

moeda = 50
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

moeda = 25
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

moeda = 10
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0." + moeda )

moeda = 5
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )

moeda = 1
qtdeMoedas = parseInt(resto / moeda);
resto = resto % moeda;
console.log(qtdeMoedas + " moeda(s) de R$ 0.0" + moeda )