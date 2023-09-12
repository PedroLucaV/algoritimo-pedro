//Crie uma função chamada calcularMedia que aceite 3 números como argumentos e retorne a media desses argumentos

function calcularMedia(a, b, c){
    let media = (a + b + c) / 3
    return media
}

let nota1 = Number(prompt("Me informe o valor da primeira nota"))
let nota2 = Number(prompt("Me informe o valor da segunda nota"))
let nota3 = Number(prompt("Me informe o valor da terceira nota"))

let media = calcularMedia(nota1, nota2, nota3)

console.log(media)