//Usuario vai passar nota1, nota2 e nota3 (A - Aritimetica e P - Ponderada) pesos: 5, 3 e 2. Criar uma função que valide a nota
let nota1 = 0, nota2 = 0, nota3 = 0

function mediaAri(a, b, c){
    return (a + b + c)/3
}

function mediaPond(a, b, c){
    return (a * 5 + b * 3 + c * 2)/10
}

function valida(a){
    if(isNaN(a) || a < 0 || a >10){
        alert("Valor invalido")
        return false
    }
    return true
}

do{
    nota1 = Number(prompt("Digite a nota: "))
}while(!valida(nota1))

do{
    nota2 = Number(prompt("Digite a nota: "))
}while(!valida(nota2))

do{
    nota3 = Number(prompt("Digite a nota: "))
}while(!valida(nota3))

let media = prompt("Me informe a media que você deseja: Ponderada ou Aritimetica")

media = media.toUpperCase()
media = media.charAt(0)
if(media == "P"){
    alert(`Sua média ponderada é ${mediaPond(nota1, nota2, nota3)}`)
}else if(media == "A"){
    alert(`Sua média aritimética é ${mediaAri(nota1, nota2, nota3)}`)
}else{
    alert("Não foi possivel entender, digite Ponderada ou Media")
    location.reload()
}