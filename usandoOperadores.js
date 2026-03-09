
const preco = 100;
const porcentagem = 30;

const desconto = (preco * porcentagem) /100;
const precoFinal = preco - desconto;

console.log(`O preço original é de ${preco}, em reais`)
console.log(`O desconto é de ${desconto}, em reais`)
console.log(`O preço final é de ${precoFinal}, em reais`)

const salario = 1518;

const salarioAnual = salario * 12;

const salarioPorDia = salario / (7 * 4); // considerando que o mês tem 4 semanas, e a semana tem 7 dias, então o mês tem 28 dias, e o salário por dia é o salário mensal dividido por 28 //);
const salarioPorSemana = salario / 4;

console.log(`O salário mensal é de ${salario}, em reais`)
console.log(`O salário anual é de ${salarioAnual}, em reais`)
console.log(`O salário por dia é de ${salarioPorDia}, em reais`)
console.log(`O salário por semana é de ${salarioPorSemana}, em reais`)
