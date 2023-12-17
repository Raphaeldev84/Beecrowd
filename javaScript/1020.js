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

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let quantidadeDeDias = parseInt(lines.shift());

let quantidadeDeAnos = parseInt(quantidadeDeDias / 365);
quantidadeDeDias = quantidadeDeDias % 365;

let quantidadeDeMeses = parseInt(quantidadeDeDias / 30);
quantidadeDeDias = quantidadeDeDias % 30;

let resultado = `${quantidadeDeAnos} ano(s)\n${quantidadeDeMeses} mes(es)\n${quantidadeDeDias} dia(s)`;

console.log(resultado);
