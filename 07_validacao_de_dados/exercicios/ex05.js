const limite = Number(prompt("Qual a velocidade maxima da estrada permitida?"))

let semMulta = "Não recebeu nenhuma multa!"
let multaLeve = "Recebeu uma multa leve!"
let multaGrave = "Recebeu uma multa grave!"

if (isNaN(limite) || limite <= 0){
    alert("Informe um valor númerico maior que 0!!!")
    location.reload()
}else{
    let velocidade = Number(prompt("Qual a velocidade atingida pelo veiculo?"))

    if(isNaN(velocidade) || velocidade <= 0){
        alert("Não foi possivel processar o valor da velocidade do carro!")
        location.reload()
    }else{
        if(velocidade <= limite){
            alert(semMulta)
        }else if(velocidade <= 1.20*limite && velocidade >= 1.01*limite){
            alert(multaLeve)
        }else{
            alert(multaGrave)
        }
    }
}