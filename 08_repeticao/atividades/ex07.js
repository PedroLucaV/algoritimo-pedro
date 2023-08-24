let numeroChin, numeroAno, chinchilas, ano
numeroChin = Number(prompt("Me informe quantas chinchilas tem no primeiro ano"))
numeroAno = Number(prompt("Me informe após quantos anos você quer saber a quantia de chincila"))
let numeros = [numeroAno, numeroChin]

chinchilas = numeroChin
ano = 1

if(isNaN(numeroAno) || isNaN(numeroChin) || numeroAno < 2 || numeroChin < 0){
    alert("Não foi possivel analisar o valor, reiniciando...")
    location.reload()
}else{
    do{
        document.write(`${chinchilas} no ano ${ano} <br>`)
        ano++
        chinchilas = chinchilas * 3
    }while(ano <= numeroAno)
}