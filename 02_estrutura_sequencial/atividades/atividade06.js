let nome = prompt("Informe o Nome do Produto:")
let valor = parseFloat(prompt("Informe o valor do Produto:"))

valorFinal = (valor/2) + valor * 2
valorFinal.toFixed(2)

document.write(`O Valor final do produto ${nome} com a promoção, 3 produtos deste fica de: R$${valorFinal}`)