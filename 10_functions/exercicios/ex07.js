let valor
function verificaConta(val){
    if(val >= 250){
        return "O Produto será taxado"
    }else{
        return "O Produto não será taxado"
    }
}

valor = Number(prompt("Me informe o valor do pedido"))

console.log(verificaConta(valor))