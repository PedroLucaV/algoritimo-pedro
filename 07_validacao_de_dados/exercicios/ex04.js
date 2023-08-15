let numero = Number(prompt("Digite um valor:"))

if(isNaN(numero)){
    alert("Digite um número")
    location.reload()
}else{
    if(numero % 2 == 0){
        alert(`O Valor ${numero} é Par!`)
    }else{
        alert(`O Valor ${numero} é Impar!`)
    }
}