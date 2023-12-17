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


let quantidade = Number(lines.shift()); 

for(i = 1; i <= quantidade; i++){
    let numero = Number(lines.shift());
    if(numero < 0 && numero % 2 === 0){
        console.log("EVEN NEGATIVE")
    } else if(numero < 0 && numero % 2 !== 0){
        console.log("ODD NEGATIVE")
    } else if(numero > 0 && numero % 2 === 0){
        console.log("EVEN POSITIVE")
    } else if(numero > 0 && numero % 2 !== 0){
        console.log("ODD POSITIVE")
    } else{
        console.log("NULL")
    }
}