let modelo = prompt("Qual o Modelo do veiculo?")
let valor = prompt("Qual o valor do carro?")

let valorNum = parseFloat(valor)
let entrada =  valor / 2
let parcelas = entrada / 12

document.write(`Nome do Modelo: ${modelo}, entrada de: R$${entrada}, em 12 parcelas de R$${parcelas}`)