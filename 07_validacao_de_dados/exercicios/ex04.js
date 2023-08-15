let numero = Number(prompt("Digite um valor inteiro:"))

if(isNaN(numero)){
    alert("Digite um valor númerico")
    location.reload()
}else if(Number.isInteger(numero)){
    if(numero % 2 == 0){
        alert(`O Valor ${numero} é Par!`)
    }else{
        alert(`O Valor ${numero} é Impar!`)
    }
}else{
    alert("Digite um valor inteiro!!!")
}