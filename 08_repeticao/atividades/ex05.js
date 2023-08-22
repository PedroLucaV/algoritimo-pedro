let contas, c, quantia, quantiaF

c=0
quantiaF = 0
alert("O Programa a seguir calculará todas as suas contas, caso deseje sair aperte 0 ou cancele a operação")
do{
    let quantia = Number(prompt("Me informe o valor da conta"))
    quantiaF = quantia + quantiaF

    if(isNaN(quantia) || quantia === 0){
        let sair = confirm("Confirma a saida?")
        if(sair == true){
            alert("Operação cancelada!!!")
            break
        }else{
            continue
        }
    }else{
        let tipoConta = prompt("Me informe do que é a conta:")
        quantia = Number.parseFloat(quantia).toFixed(2)
        c++
        document.write(`${c} - Valor da conta de ${tipoConta} é de R$${quantia} <br>`)
        continue
    }
}while(true)
document.write(`<hr> Final = R$${quantiaF.toFixed(2)}`)