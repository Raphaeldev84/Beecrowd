const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

let nomeDoFuncionario = (lines[0]);
let salarioFixo = parseFloat(lines[1]);
let totalDeVendas = parseFloat(lines[2]);

let total = salarioFixo + (totalDeVendas * 0.15);


console.log(`TOTAL = R$ ${total.toFixed(2)}`);