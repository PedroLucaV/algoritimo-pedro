//Pegue o valor de 3 Números e mostre o maior, menor e o do meio entre eles

let numA = Number(prompt("Me informe o primeiro número")) 
let numB = Number(prompt("Me informe o segundo número")) 
let numC = Number(prompt("Me informe o terceiro número")) 
let maior, menor, meio

if (numA > numB && numA > numC){
    maior = numA
    if(numB > numC){
        meio = numB
        menor = numC
    }else{
        meio = numC
        menor = numB
    }
}else if (numB > numA && numB > numC){
    maior = numB
    if(numA > numC){
        meio = numA
        menor = numC
    }else{
        meio = numC
        menor = numA
    }
}else if (numC > numA && numC > numA){
    maior = numC
    if(numA > numB){
        meio = numA
        menor = numB
    }else{
        meio = numB
        menor = numA
    }
}else{
    alert("Os valores são iguais")
}