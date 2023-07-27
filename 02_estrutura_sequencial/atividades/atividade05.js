let valorper15 = Number(prompt("Qual o valor a cada 15 minutos?"))
let usado = Number(prompt("Quanto tempo o cliente usou o computador em minutos?"))

let valorUso = usado/15
let valorPagar = Math.ceil(valorUso) * valorper15

document.write(`O Cliente tem que pagar R$${valorPagar}`)