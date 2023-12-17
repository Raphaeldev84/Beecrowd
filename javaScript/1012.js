//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [a, b, c] = lines.shift().split(" ");

let triangulo = parseFloat((a * c ) / 2).toFixed(3)
let circulo = parseFloat( 3.14159 * (c ** 2)).toFixed(3)
let trapezio = parseFloat(((parseFloat(a) + parseFloat(b)) * c) / 2).toFixed(3)
let quadrado = parseFloat(b **2).toFixed(3)
let retangulo = parseFloat(a * b).toFixed(3)

console.log(`TRIANGULO: ${triangulo}`)
console.log(`CIRCULO: ${circulo}`)
console.log(`TRAPEZIO: ${trapezio}`)
console.log(`QUADRADO: ${quadrado}`)
console.log(`RETANGULO: ${retangulo}`)




