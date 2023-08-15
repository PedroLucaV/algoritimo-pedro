let n1 = Number(prompt("Informe um número"))
let sqrt = Math.sqrt(n1)

if (n1 === 0 || n1 < 0 || isNaN(n1)){
    alert("Não foi possivel calcular o valor, digite um número maior que 0!")
}else{
    if (Number.isInteger(sqrt)){
        alert(`A Raiz de ${n1} é igual a ${sqrt} sendo uma raiz perfeita!`)
    }else{
        sqrt = sqrt.toFixed(2)
        alert(`A Raiz de ${n1} é aproximadamente ${sqrt} não sendo uma raiz exata`)
    }
}