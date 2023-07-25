let valorper15 = Number(prompt("Qual o valor a cada 15 minutos?"))
let usado = Number(prompt("Quanto tempo o cliente usou o computador em minutos?"))

let valorperMin = valorper15/15
valorUsado = valorperMin*usado

document.write(`O Cliente tem que pagar R$${valorUsado}`)