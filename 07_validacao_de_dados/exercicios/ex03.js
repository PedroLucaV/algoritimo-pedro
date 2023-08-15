let valor = Number(prompt("Informe um número"))
let ced1 = 10
let ced2 = 50
let ced3 = 100
let valorFinal = 0

if(valor%100 == 0 || valor%50 == 0 || valor%10==0){
    ced3 = valor / 100
    ced2 = valor % 100 / 50
    ced1 = valor % 100 % 50 / 10
    valorFinal = `${Number.parseInt(ced1)} notas de 10 ; ${Number.parseInt(ced2)} notas de 50 ; ${Number.parseInt(ced3)} notas de 100;`
    alert(valorFinal)
}else{
    alert("Não foi possivel sacar o valor, digite um que seja possivel nota de 10 50 ou 100")
}