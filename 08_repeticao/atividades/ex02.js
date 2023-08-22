//Elabore um programa que ilustra a montaegm de uma estrutura de repeticao decrescente, do inicial ate o 1

let valor = Number(prompt("Digite um valor e ele será levado até 1!"))
let tab = valor

if(isNaN(tab)){
    do{
        alert("O Valor informado não foi possivel ser processado, me informe um valor númerico!!!")
        valor = Number(prompt("Digite um valor e ele será levado até 1!"))
        tab = valor
    }while(isNaN(valor))
    if(tab <= 0)
        for(let c = valor; c <= 1; c++){
            document.write(`${tab} <br>`)
            tab++
        }
}else{
    if(tab > 0){
        do{
            document.write(`${tab} <br>`)
            valor = tab - 1
            tab = valor
        }while(tab >= 1)
    }else{
        do{
            document.write(`${tab} <br>`)
            valor = tab + 1
            tab = valor
        }while(tab < 1)
    }
}