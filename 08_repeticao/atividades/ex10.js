//Crie um programa que leia a idade de 10 pessoas diferentes e mostre: a soma, media e quantos e quem são maiores de Idade
let idade, c=1
let soma = 0
let maioresIdade=0
let maiorIdade=[]

do{
    idade = Number(prompt(`Me informe a idade da idade ${c}`))
    if(idade > 0 && idade <= 122 && Number.isInteger(idade)){
        document.write(`idade ${c} - ${idade} Anos<br>`)
        soma = idade + soma
        c++
        if(idade >= 18){
            maiorIdade.push(idade)
        }
    }else{
        alert("Por favor, me informe um valor entre 1 e 122")
        continue
    }
}while(c<=10)

maioresIdade = maiorIdade.length

let media = soma/10
document.write(`<hr>Soma das Idades: ${soma} <br>Media das Idades: ${media} <br>Quantia de Maiores de Idade (+18): ${maioresIdade} <br>Idade dos Maiores de idade: ${maiorIdade}`)