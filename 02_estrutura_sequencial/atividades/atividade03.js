let valorKg = prompt("Qual o preço por quilo?")
let consumo = prompt("Qual o consumo em gramas?")

let consumoNum = parseFloat(consumo)
let valorNum = parseFloat(valorKg) 

let valorFinal = consumoNum * (valorNum / 1000)
let valorFloat = parseFloat(valorFinal)

document.write(`Valor a ser pago: ${valorFloat}`)