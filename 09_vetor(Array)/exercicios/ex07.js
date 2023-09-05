//Faca um programa que receba idades diferentes em uma array e mostre a maior, quando digitar algum valor menor que 0 pergunta se e para sair

let idades = []
let c = 0
let idade = 0
let maiorIdade = 0
let menorIdade = 128

do{
    idade = Number(prompt(`Me informe a idade da ${c+1}ª pessoa`))
    if(isNaN(idade) || idade <= 0 || idade > 127){
        let sair = confirm("Você digitou um número maior que 127 ou um número negativo ou um valor invalido! \nDeseja sair do programa?")
        if(sair == true){
            break
        }else{
            continue
        }
    }
    idades.push(idade)
    document.write(`${c+1}ª pessoa: ${idade}<br>`)
    if(idade > maiorIdade){
        maiorIdade = idade
    }else if(idade < menorIdade){
        menorIdade = idade
    }
    c++
}while(Number.isInteger(idade))


document.write(`<hr>A Maior idade é <strong>${maiorIdade}</strong> anos! <br>A Menor idade é <strong>${menorIdade}</strong> anos! `)