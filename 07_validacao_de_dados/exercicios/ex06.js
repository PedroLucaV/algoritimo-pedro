/*let lado1 = Number(prompt("Digite a medida do primeiro lado"))
let lado2 = Number(prompt("Digite a medida do segundo lado"))
let lado3 = Number(prompt("Digite a medida do terceiro lado"))
let arr = [lado1, lado2, lado3]
arr = Number(arr)

if(isNaN(arr)){
    alert("Não foi possivel processar os números, me informe um valor maior que 0!!!")
    location.reload()
}else{
    if(lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
        alert("Não foi possivel formar um triangulo")
        location.reload()
    }else{
        alert("Formou um triangulo!")
        if(lado1 == lado2 && lado1 != lado3 && lado2 != lado3){
            alert("Formou um triangulo do tipo Isoceles!!!")
        }else if(lado1 == lado3 && lado1 != lado2 && lado3 != lado2 ){
            alert("Formou um triangulo do tipo Isoceles!!!")
        }else if(lado2 == lado3 && lado1 != lado2 && lado3 != lado1){
            alert("Formou um triangulo do tipo Isoceles!!!")
        }else if(lado1 == lado2 == lado3){
            alert("Formou um triangulo do tipo Equilatero!!!")
        }else{
            alert("Formou um triangulo do tipo Escaleno!!!")
        }
    }
}
*/
let lado1 = Number(prompt("Digite a medida do primeiro lado"))
if (isNaN(lado1) || lado1 <=0){
    do{
        alert("Não foi possivel reconhecer o valor, por favor, digite um Numero maior que 0!!")
        lado1 = Number(prompt("Digite a medida do primeiro lado"))
    }while(isNaN(lado1) || lado1 <=0)
}

let lado2 = Number(prompt("Digite a medida do segundo lado"))
if (isNaN(lado2) || lado2 <=0){
    do{
        alert("Não foi possivel reconhecer o valor, por favor, digite um Numero maior que 0!!")
        lado2 = Number(prompt("Digite a medida do segundo lado"))
    }while(isNaN(lado2) || lado2 <=0)
}

let lado3 = Number(prompt("Digite a medida do terceiro lado"))
if (isNaN(lado3) || lado3 <=0){
    do{
        alert("Não foi possivel reconhecer o valor, por favor, digite um Numero maior que 0!!")
        lado3 = Number(prompt("Digite a medida do terceiro lado"))
    }while(isNaN(lado3) || lado3 <=0)
}

if(lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
    alert("Não foi possivel formar um triangulo, a página será reiniciada")
    location.reload()
}else{
    alert("Formou um triangulo!")
    if(lado1 == lado2 && lado1 != lado3 && lado2 != lado3){
        alert("Formou um triangulo do tipo Isoceles!!!")
    }else if(lado1 == lado3 && lado1 != lado2 && lado3 != lado2 ){
        alert("Formou um triangulo do tipo Isoceles!!!")
    }else if(lado2 == lado3 && lado1 != lado2 && lado3 != lado1){
        alert("Formou um triangulo do tipo Isoceles!!!")
    }else if(lado1 == lado2){
        alert("Formou um triangulo do tipo Equilatero!!!")
    }else if(lado1 == lado3){
        alert("Formou um triangulo do tipo Equilatero!!!")
    }else if(lado3 == lado2){
        alert("Formou um triangulo do tipo Equilatero!!!")
    }else{
        alert("Formou um triangulo do tipo Escaleno!!!")
    }
}