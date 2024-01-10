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

let n = lines.shift();
let i, j, ehNumero;
let soma;

for(i = 0; i < n; i++) {
    caracteres = lines[i];
    ehNumero = 0;
    ehLetra = 0;
    soma = 0;
    
    for(j = 0; j < caracteres.length; j++) {
        if(numero(caracteres[j])) {
            ehNumero += caracteres[j];
            if(caracteres.length - j == 1) {
                soma += Number(ehNumero);
            }
        } else {
            soma += Number(ehNumero);
            ehNumero = 0;
        }
    }
    console.log(soma);
}

function numero(caracter) {
    if(caracter.charCodeAt() >= 48 && caracter.charCodeAt() <= 57) {
        return true;
    }
    return false;
}