const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let media = (a * 2 + b * 3 + c * 5) / (2 + 3 + 5);

console.log(`MEDIA = ${media.toFixed(1)}`);