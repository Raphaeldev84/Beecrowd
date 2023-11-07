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
let [A, B, C] = lines.shift().split(" ").map((index) => parseInt(index)); ;

let delta = (B * B) - ((4 * A) * C);

let R1 = (-B + (Math.sqrt(delta))) / (2 * A);
let R2 = (-B - (Math.sqrt(delta)))/ (2 * A);

if(delta < 0 || A == 0){
    console.log("Impossivel calcular");
}
else{
    
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}