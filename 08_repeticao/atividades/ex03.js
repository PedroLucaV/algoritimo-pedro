//Após a validação, o programa exibe todos os números pares entre 1 e o número informado pelo usuario

let valor = Number(prompt("Digite um valor e ele será levado até 1!"))
let tab = valor

if(isNaN(tab)){
    do{
        alert("O Valor informado não foi possivel ser processado, me informe um valor númerico!!!")
        valor = Number(prompt("Digite um valor e ele será levado até 1!"))
        tab = valor
    }while(isNaN(valor))

    document.write(`${tab} <br>`)

    do{
        if(tab % 2 == 0){
            document.write(`${tab} <br>`)
            valor = tab - 1
            tab = valor
            if(tab == 1){
                document.write(`${tab}`)
            }
        }else{
            tab--
        }
    }while(tab >= 1)
}else{
    document.write(`${tab} <br>`)
    do{
        if(tab % 2 == 0){
            document.write(`${tab} <br>`)
            valor = tab - 1
            tab = valor
            if(tab == 1){
                document.write(`${tab}`)
            }
        }else{
            tab--
        }
    }while(tab >= 1)
}
