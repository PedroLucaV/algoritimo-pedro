let sexo = prompt("Informe seu sexo \n M - Masculino \n F - Feminino:").toUpperCase()
let altura = parseFloat(prompt("Informe sua altura em metros:"))
sexo = sexo.charAt(0)

if(altura === 0 || isNaN(altura) || altura >= 2.51){
    alert(`Não foi possivel processar o valor ${altura}`)
    location.reload()
}

let pesoIdeal = 0
if (sexo == "M"){
    pesoIdeal = 22 * (Math.pow(altura, 2))
}else if(sexo == "F"){
    pesoIdeal = 21 * (Math.pow(altura, 2))
}else{
    alert(`Não foi possivel identificar o sexo ${sexo}`)
    location.reload()
}

pesoIdeal = pesoIdeal.toFixed(1)

alert(`Seu peso ideal sendo do sexo biologico: ${sexo} é de: ${pesoIdeal} KG`)