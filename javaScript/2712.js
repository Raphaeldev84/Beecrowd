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
let placa;
let dia;
const REGEX = /^[A-Z]{3}-\d{4}$/;

for(let i = 0; i < n; i++) {
    placa = lines[i];
    if(REGEX.test(placa)) {
        switch(placa[7]) {
            case '1':
            case '2': dia = "MONDAY"; 
                break;
            case '3':
            case '4': dia = "TUESDAY";
                break;
            case '5':
            case '6': dia = "WEDNESDAY";
                break;
            case '7':
            case '8': dia = "THURSDAY";
                break;
            case '9':
            case '0': dia = "FRIDAY";
        }
    } else {
        dia = "FAILURE";
    }
    console.log(dia);
}