let descricao = prompt("Informe o nome do medicamento")
let valor = parseFloat(prompt("Agora informe o valor deste medicamento"))

let valorDesc = valor + parseInt(valor)

document.write(`O rmedicamento ${descricao} ficou com um valor de: R$${valor}, caso você compre 2, ele ficará num total de: R$${valorDesc}`)