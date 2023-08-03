let n1 = Number(prompt("Informe o primeiro número"))
let n2 = Number(prompt("Informe o segundo número"))

//validação
if(n1 === 0 || isNaN(n1)){
    alert(`Valor ${n1} não é valido para o sistema!`)
    location.reload()
}else if(n2 === 0 || isNaN(n2)){
    alert(`Valor ${n2} não é valido para o sistema!`)
    location.reload()
}

//lógica
if(n1 > n2){
    alert(`O Maior número é ${n1}`)
}else if(n1 < n2){
    alert(`O Maior número é ${n2}`)
}else if(n1 == n2){
    alert(`${n1} é igual a ${n2}!`)
}
else{
    alert(`É impossivel fazer uma lógica com os valores recebidos`)
    location.reload()
}