let descricao = prompt("Informe a descrição do medicamento")
let valor = prompt("Agora informe o valor deste medicamento")

let valorNum = parseFloat(valor)

let valorNum2 = parseInt(valorNum)*2

document.write(`O rmedicamento $${descricao} ficou com um valor de: R$${valorNum}, caso você compre 2, ele ficará num total de: R$${valorNum2}`)