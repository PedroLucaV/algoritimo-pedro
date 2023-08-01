let nota1 = Number(prompt("Informe a primeira nota"))
let nota2 = Number(prompt("Informe a segunda nota"))
let nota3 = Number(prompt("Informe a terceira nota"))
let nota4 = Number(prompt("Informe a quarta nota"))

let media = (nota1+nota2+nota3+nota4)/4

if(media <= 10){
    if(media >= 7){
        alert(`O Aluno foi aprovado com uma média de ${media}`)
    }else if(media < 7){
        alert(`O Aluno foi reprovado com uma média de ${media}`)
    }
}else{
    alert("Não foi possivel calcular, escolha uma nota entre 1 e 10")
}