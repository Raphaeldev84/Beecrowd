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
    let [x, y] = lines.shift().split(" ").map((index) => parseFloat(index));
    if(x > 0 && y > 0){
        console.log("Q1")
    } else if(x < 0 && y > 0 ){
        console.log("Q2")
    } else if(x < 0 && y < 0){
        console.log("Q3")
    }else if(x > 0 && y < 0){
        console.log("Q4")
    }else if(x === 0 && y !== 0){
        console.log("Eixo Y")
    }else if(y === 0  && x !== 0){
        console.log("Eixo X")
    }else {
        console.log("Origem")
    }
