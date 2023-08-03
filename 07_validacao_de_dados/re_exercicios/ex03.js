let sexo = prompt("Informe seu sexo \n M - Masculino \n F - Feminino:").toUpperCase()
let altura = parseFloat(prompt("Informe sua altura em metros:"))

if(altura === 0 || isNaN(altura) || altura >= 2.51){
    alert(`Não foi possivel processar o valor ${altura}`)
    location.reload()
}else if(sexo != "M" || sexo != "F"){
    alert(`Não foi possivel processar o sexo ${sexo}, digite "M" ou "F"`)
    location.reload()
}

let pesoIdeal = 0
if (sexo == "M"){
    pesoIdeal = 22 * (Math.pow(altura, 2))
}else if(sexo == "F"){
    pesoIdeal = 21 * (Math.pow(altura, 2))
}
pesoIdeal = pesoIdeal.toFixed(1)

alert(`Seu peso ideal sendo do sexo biologico: ${sexo} é de: ${pesoIdeal} KG`)