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

let totTuristas = 0;
let totVeiculos = 0;

for(let i = 0; i < lines.length; i++) {
    let [veiculos, turistas] = lines[i].split(" ");
    turistas = Number(turistas);

    if(veiculos == "SALIDA") {
        totVeiculos++;
        totTuristas += turistas;
    } else if(veiculos == "VUELTA") {
        totVeiculos--;
        totTuristas -= turistas;
    } else {
        break;
    }
}

console.log(totTuristas);
console.log(totVeiculos);