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

while(lines.length>1){
    let n = Number(lines.shift());
    let matriz=[]
    for(let i = 0; i<n; i++){
        matriz[i] = new Array(n);

    }
    for (let i = 0; i < n; i++) { 
        for (let j = 0; j < n; j++) {
            if(j+i == n-1){ 
                matriz[i][j] = 2
            }
            else if(i==j){ 
                matriz[i][j] = 1
            }
            else{
                matriz[i][j] = 3;
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        let linha = "";
        for (let j = 0; j < n; j++) {
            linha += matriz[i][j]; 
        }
        console.log(linha);
    }
}