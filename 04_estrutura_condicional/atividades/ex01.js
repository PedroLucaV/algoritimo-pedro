let n1 = Number(prompt("Informe o primeiro número"))
let n2 = Number(prompt("Informe o segundo número"))

if(n1 > n2){
    alert(`O Maior número é ${n1}`)
}else if(n1 < n2){
    alert(`O Maior número é ${n2}`)
}else{
    alert(`Não foi possivel identificar, por favor, digite um número`)
}