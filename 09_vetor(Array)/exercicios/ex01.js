// let n = []

// for(let c = 6; c>=0; c--){
//     n[c] = Number(prompt("Me informe o número"))
// }
// console.log(n)
let numeros = []
let n = Number(prompt("Quantas números você quer cadastrar?"))

for(let i = 0; i<n; i++){
    numeros[i] = Number(prompt("Digite um valor para adicionar ao indice "+i+" do vetor."))
}
document.write(numeros)
document.write("<hr>")

for(let i = n-1; i >= 0; i--){
    document.write(numeros[i]+", ")
}