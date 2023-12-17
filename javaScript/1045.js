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
let [a1, b1, c1] = lines.shift().split(" "); 

let y 

a1 = parseFloat(a1)
b1 = parseFloat(b1)
c1 = parseFloat(c1)

let [a, b, c] = ordenarNumeros(a1, b1, c1)

classificarTriangulo(a, b, c)

function ordenarNumeros(a,b,c){
    if( b < c){
        y = b
        b = c
        c = y
    }
    if( a < b){
        y = a
        a = b
        b = y
        if( b < c){
            y = b
            b = c
            c = y
        }
    }
    return [a, b, c]
}

function classificarTriangulo(){
    if(a >= (b + c)){
        console.log("NAO FORMA TRIANGULO")
    }else{
        if((a ** 2) == ((b ** 2) + (c **2))){
            console.log("TRIANGULO RETANGULO")
        }else if((a ** 2) > ((b ** 2) + (c **2))){
            console.log("TRIANGULO OBTUSANGULO")
        }else{
            console.log("TRIANGULO ACUTANGULO")
        }
    
        if(a == b && b == c){
            console.log("TRIANGULO EQUILATERO")
        }else if(a == b || b == c || a == c){
            console.log("TRIANGULO ISOSCELES")
        }
    }
}