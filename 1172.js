const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

/////////////////////// COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE ///////////////////

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
//lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin

let n = parseInt(lines[0]);
let numeros = [];
let contIn = 0;
let contOut = 0;
for (let index = 1; index <= n; index++) {
    numeros.push(parseInt(lines[index]));    
}

for (let index = 0; index < n; index++) {
    if (numeros[index] >= 10 && numeros[index]<= 20) {
        contIn++
    }else{
        contOut++
    }
    
}

console.log(contIn+" in");
console.log(contOut+" out");