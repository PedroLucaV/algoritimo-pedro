let desconto = 0
function calcDesconto(seguidores, post) {
    if (seguidores > 5000 && seguidores <= 20000) {
        desconto = 5
    } else if (seguidores > 20000 && seguidores <= 50000) {
        desconto = 10
    } else if (seguidores > 50000 && seguidores <= 100000) {
        desconto = 15
    } else if (seguidores > 100000) {
        desconto = 25
    }

    if (post == 1) {
        return desconto += 5
    } else if (post == 2 || post == 3) {
        return desconto += 10
    }
}

let produto = prompt("Qual o nome do produto?")
let valorProduto = Number(prompt(`Qual o valor de ${produto}?`))
let arroba = prompt("Me informe seu @ do insta")
let seguidores = Number(prompt("Me informe a quantia de seguidores que você possui"))
let posts = prompt('Qual o tipo de postagem?\n1 - Storys\n2 - Rells\n3 - Ambos (Caso seja em ambos, será o desconto somente- de Rells!)')

let porcentagem = calcDesconto(seguidores, posts) / 100
let valorFinal = valorProduto - (valorProduto * porcentagem)

document.write(`Olá <strong>@${arroba}</strong>, o produto: ${produto} receberá um desconto de: ${calcDesconto(seguidores, posts)}% visto que você possui ${seguidores} seguidores!<br>`)
document.write(`O Valor inicial dele é de R$${Number(valorProduto).toFixed(2)}, foi aplicado um desconto de: ${calcDesconto(seguidores, posts)}%`)
document.write(`<hr>O Valor final ficou de: R$${Number(valorFinal).toFixed(2)}`)