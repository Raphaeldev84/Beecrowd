const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let media = (a * 3.5 + b * 7.5) / (3.5 + 7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);

