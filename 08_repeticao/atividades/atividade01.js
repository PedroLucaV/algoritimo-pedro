//Faça um programa que leia um valor n, inteiro e positivo, calcule e mostre a seguinte soma: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/n.

let n = Number.parseInt(prompt("Digite um número: "))
let valor = 0
valorFinal = 0

for(let cont = 1; cont <= n; cont++){
    valor = 1/cont
    valorFinal = valorFinal + valor
}


console.log(`${valorFinal}`)