const { clear } = require('console');
const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

// COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

const raio = parseFloat(lines[0]);
const pi = 3.14159;
const area = pi * raio * raio;

console.log(`A=${area.toFixed(4)}`);