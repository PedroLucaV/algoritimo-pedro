alert("Olá, este programa irá receber um número e caso ele seja par ele irá dobrar, se for impar ira triplicar, se for 0 ele irá cancelar")
/*let numero = 1
let valor

while(numero > 0 && Number.isInteger(numero)){
    numero = Number(prompt("Me informe um número"))
    if(numero % 2 === 0 && numero !== 0){
        let numeroF = numero * 2
        if(confirm(`O Valor ${numero} foi triplicado para ${numeroF}`)){
            valor = `${numeroF} para o ${numero}`
            document.write(valor)
            continue
        }else{
            break
        }
    }else if(numero %2 !== 0){
        let numeroF = numero * 3
        if(confirm(`O Valor ${numero} foi triplicado para ${numeroF}`)){
            valor = `${numeroF} para o ${numero}`
            document.write(valor)
            continue
        }else{
            break
        }
    }else{
        document.write(`Você cancelou o processamento...  <br>`)
        break
    }
}*/

do{
    let numero = Number(prompt("Digite um número"))

    if(isNaN(numero)){
        numero = 0
        if(numero == 0){
            let sair = confirm("Confirma a saida?")
            if(sair == true){
                alert("Operação cancelada!!!")
                break
            }else{
                continue
            }
        }
    }else{

    }if(numero % 2 === 0 && numero !== 0){
        let numeroF = numero * 2
        if(alert(`O Valor ${numero} foi duplicado para ${numeroF}`)){
            valor = `${numero} foi dubplicado para ${numeroF} <br>`
            document.write(valor)
            continue
        }else{
            break
        }
    }else if(numero %2 !== 0){
        let numeroF = numero * 3
        if(alert(`O Valor ${numero} foi triplicado para ${numeroF}`)){
            valor = `${numero} foi triplicado para ${numeroF} <br>`
            document.write(valor)
            continue
        }else{
            break
        }
    }
}while(numero !== 0)

