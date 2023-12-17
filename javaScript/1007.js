const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);
let media = (a * b) - (c * d);

console.log(`DIFERENCA = ${media}`);