//Crie uma função chamada verificarMaiorIdade que receba a idade de uma pessoa e retorne "Maior idade" se >= 18, caso contrario "Menor de Idade"

function verificarMaiorIdade(idade){ 
    if(idade >= 18){
        return "Você é maior de idade"
    }else{
        return "Você é menor de idade"
    }
    
}

let idade = Number(prompt("Me informe sua idade"))

document.write(verificarMaiorIdade(idade))