let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
let nota3 = Number(prompt("Informe a terceira nota"))
let nota4 = Number(prompt("Informe a quarta nota"))

//validação
if (nota1 <= 0 ||isNaN(nota1) || nota1 > 10){
    alert(`O Valor ${nota1} não pode ser processado`)
    location.reload()
}else if (nota2 <= 0 ||isNaN(nota2) || nota2 > 10){
    alert(`O Valor ${nota2} não pode ser processado`)
    location.reload()
}else if (nota3 <= 0 ||isNaN(nota3) || nota3 > 10){
    alert(`O Valor ${nota3} não pode ser processado`)
    location.reload()
}else if (nota4 <= 0 ||isNaN(nota4) || nota4 > 10){
    alert(`O Valor ${nota4} não pode ser processado`)
    location.reload()
}

//lógica
let media = (nota1+nota2+nota3+nota4)/4

if(media <= 10){
    if(media >= 7){
        alert(`O Aluno foi aprovado com uma média de ${media}`)
    }else if(media < 7){
        alert(`O Aluno foi reprovado com uma média de ${media}`)
    }
}else{
    alert("Não foi possivel calcular, a média deu mais que 10")
}

/*
let nota1 = 0
do{
    nota1 = Number(prompt("Informe a primeira nota"))
}while(nota1 > 10 || nota1 < 1 || isNaN(nota1))

let nota2 = 0
do{
    nota2 = Number(prompt("Informe a segunda nota"))
}while(nota2 > 10 || nota2 < 1 || isNaN(nota2))

let nota3 = 0
do{
    nota3 = Number(prompt("Informe a terceira nota"))
}while(nota3 > 10 || nota3 < 1 || isNaN(nota3))

let nota4 = 0
do{
    nota4 = Number(prompt("Informe a quarta nota"))
}while(nota4 > 10 || nota4 < 1 || isNaN(nota4))

let media = (nota1+nota2+nota3+nota4)/4


if(media >= 7){
    alert(`O Aluno foi aprovado com uma média de ${media}`)
}else if(media < 7){
    alert(`O Aluno foi reprovado com uma média de ${media}`)
}else{
    alert("Não foi possivel calcular, a média deu mais que 10")
}*/