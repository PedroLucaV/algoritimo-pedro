/*
Elaborar um programa para uma revenda de
veículos. O programa deve ler modelo e
preço do veículo. Apresentar como resposta
o valor da entrada (50%) e o saldo em 12x.
*/

//1º Receber o valor das variaveis
let modelo = prompt("Qual o Modelo do veiculo?")
let valor = prompt("Qual o valor do carro?")

//2º Casting de Variaveis
let valorNum = parseFloat(valor)

//2º Processar as variaveis
let entrada =  valor / 2
let parcelas = entrada / 12

//3º Mostrar o resultado
document.write(`Nome do Modelo: ${modelo}, entrada de: R$${entrada}, em 12 parcelas de R$${parcelas}`)