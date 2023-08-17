let lado1 = Number(prompt("Digite a medida do primeiro lado"))
let lado2 = Number(prompt("Digite a medida do segundo lado"))
let lado3 = Number(prompt("Digite a medida do terceiro lado"))
let arr = [lado1, lado2, lado3]

if(isNaN(arr) || arr <= 0){
    alert("Não foi possivel processar os números, me informe um valor maior que 0!!!")
    location.reload()
}else{
    if(lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
        alert("Não foi possivel formar um triangulo")
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