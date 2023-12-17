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
let [codigoDaPeca, numeroDePecas, valorDeCadaPeca] = lines.shift().split(" "); 
let [codigoDaPeca2, numeroDePecas2, valorDeCadaPeca2] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
// let notaExame = lines.shift();   

codigoDaPeca = parseInt(codigoDaPeca)
codigoDaPeca2 = parseInt(codigoDaPeca2)
numeroDePecas = parseInt(numeroDePecas)
numeroDePecas2 = parseInt(numeroDePecas2)
valorDeCadaPeca = parseFloat(valorDeCadaPeca)
valorDeCadaPeca2 = parseFloat(valorDeCadaPeca2)

let valorTotalPagar = (numeroDePecas * valorDeCadaPeca) + (numeroDePecas2 * valorDeCadaPeca2)


console.log(`VALOR A PAGAR: R$ ${valorTotalPagar.toFixed(2)}`);

