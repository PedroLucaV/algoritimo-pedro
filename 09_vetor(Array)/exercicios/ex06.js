//Faca um codigo em javascript que organize os valores recebidos em ordem decrescente
// Crie uma lista para armazenar os valores.
let valores = []
let aux = 0

//Usando função nativa

    // for(let i = 0; i<10; i++){
    //     valores.push(Number(prompt("Me informe um número")))
    // }

    // console.log(valores.sort((a, b) => b-a))

//Usando repetição:

for(let i = 0; i<4; i++){
    valores.push(Number(prompt("Me informe um número")))
}
console.log(`Vetor antes da ordenação ${valores}`)

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        if(valores[j] < valores[j++]){
            aux = valores[j]
            valores[j] = valores[j++]
            valores[j++] = aux
        }

    }
}
console.log(valores)