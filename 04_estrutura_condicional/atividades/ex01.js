function comparar(){
    let tn1 = document.getElementById('caixa1')
    let tn2 = document.getElementById('caixa2')
    let res = document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)

    if(n1>n2){
        res.innerHTML = `O número ${n1} é maior que o número ${n2}!`
    }else if(n2 > n1){
        res.innerHTML = `O número ${n2} é maior que o número ${n1}!`
    }else if(n1 == n2){
        res.innerHTML = `Os números ${n1} e ${n2} são iguais!`
    }else{
        res.innerHTML = "Não foi possivel calcular os valores"
    }
}