let sexo = prompt("Informe seu sexo (masculino ou feminino):")
let altura = parseFloat(prompt("Informe sua altura em metros:"))

let pesoIdeal = 0
if (sexo == "masculino" || sexo == "Masculino"){
    pesoIdeal = 22 * (Math.pow(altura, 2))
}else if(sexo == "feminino" || sexo == "Feminino"){
    pesoIdeal = 21 * (Math.pow(altura, 2))
}
pesoIdeal = pesoIdeal.toFixed(1)

alert(`Seu peso ideal sendo do sexo biologico: ${sexo} é de: ${pesoIdeal} KG`)