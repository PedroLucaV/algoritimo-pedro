//Faca um codigo em javascript que organize os valores recebidos em ordem decrescente
// Crie uma lista para armazenar os valores.
let valores = []
let maior = 0

for(let i = 0; i<=3; i++){
    valores.push(Number(prompt("Me informe um número")))
    if(valores > maior){
        maior = valores[i]
        valores[i] = maior
    }else{
        
    }
}

console.log(valores)