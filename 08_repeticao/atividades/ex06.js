alert("Este é um programa que analisa um número se é primo ou não, caso deseje sair digite 0 ou uma letra")
let numero
let c = 1
let div = 0
numero = Number(prompt("Informe um número"))

do{
    let primo = numero % c
    if(isNaN(numero) || numero <= 0){
        let sair = confirm("Confirma a saida?")
        if(sair == true){
            console.log("CANCELADO!")
            break
        }else{
            continue
        }
    }else{
        if(primo === 0){
            div++
        }else{
            div = div
        }
        c++
    }
}while(c <= numero)

if(isNaN(numero) || numero <= 1){
    alert("Obrigado por usar o programa!")
}else{
    if(div > 2 || div < 1){
        document.write(`O Numero ${numero} tem ${div} divisores, logo não é primo`)
    }else{
        document.write(`O Numero ${numero} tem ${div} divisores. logo é primo`)
    }
}