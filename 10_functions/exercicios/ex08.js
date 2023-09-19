function fahrenheit(temperatura){
    let final = (temperatura * (9/5)) + 32
    return final
}

function celsius(temperatura){
    let final = (temperatura - 32) * 5/9
    return final
}

let valorTemp = Number(prompt("Me informe o valor na temperatura desejada:"))
let opcao = prompt("O valor informado está em celsius ou fahrenheit?")

let celsiusV = fahrenheit(valorTemp)
let fahrenheitV = celsius(valorTemp)

if(opcao == "F"){
    if(Number.isInteger(fahrenheitV)){
        document.write(celsius(valorTemp))
    }else{
    document.write(Number(celsius(valorTemp)).toFixed(2))
    }
}else if(opcao == "C"){
    if(Number.isInteger(celsiusV)){
        document.write(fahrenheit(valorTemp))
    }else{
    document.write(Number(fahrenheit(valorTemp)).toFixed(2))
    }
}