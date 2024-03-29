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

let [andares, inicio, meta, cima, baixo] = lines.shift().split(" ").map(Number);
let totCima = 0;
let totBaixo = 0;

if(andares == inicio && inicio == meta) {
    console.log(0);

} else if(cima === 0 && inicio < meta || baixo === 0 && inicio > meta || 
   cima > Math.abs(inicio - meta) && baixo > Math.abs(inicio - meta) || 
   cima % 2 === 0 && baixo % 2 === 0) {
    console.log("use the stairs");

} else {
    while(inicio < meta) {
        inicio += cima;
        totCima++;
        if(inicio > meta) {
            inicio -= baixo;
            totBaixo++;
        } else if(inicio == andares) {
            break;
        }
    }
    
    while(inicio > meta) {
        inicio -= baixo;
        totBaixo++;
        if(inicio < meta) {
            inicio += cima;
            totCima++;
        } else if(inicio == andares) {
            break;
        }
    }
    
    console.log(totBaixo + totCima);
}