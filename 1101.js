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
// let [var1, var2, var3, var4] = lines.shift().split(" ").map((index) => parseInt(index));


//para ler linhas com um unico valor na mesma linha use o comando a seguir
// let n = parseInt(lines.shift());   

for(let i = 0; i < 3; i++){
    let [m, n] = lines[i].split(" ").map((index) => parseInt(index));
    if(m > n && n > 0 && m > 0){
        let numeros = " "
        let soma = 0
        for(let j = n; j <= m; j++){
            numeros += j + " "
            soma += j
        } 
        
        console.log(`${numeros.trim()} Sum=${soma}`)
        
    }else if(n > m && m > 0 && n > 0){
        let numeros = " "
        let soma = 0
        for(let j = m; j <= n; j++){
            numeros += j + " "
            soma += j
        } 
        console.log(`${numeros.trim()} Sum=${soma}`)
    }
}

