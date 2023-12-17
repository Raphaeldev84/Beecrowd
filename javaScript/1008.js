const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//Realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');
var lines = input.split('\r\n');

//COLAR NO BEECROWD O CODIGO ABAIXO

//lines = lines[0].split("");

let numeroDoFuncionario = parseInt(lines[0]);
let horasTrabalhadas = parseInt(lines[1]);
let valorPorHoraTrabalhada = parseFloat(lines[2]);

let salario = horasTrabalhadas * valorPorHoraTrabalhada;

console.log (`NUMBER = ${numeroDoFuncionario}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`);