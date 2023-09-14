let nomes = []
let salarios = []
let salarioAntes = 0
let tempo = []
let c = 0

document.write("<h1>Tabela de Funcionarios Gerais:</h1>")
do{
    nomes[c] = prompt(`Me informe o nome do ${c+1}º Funcionario`)
    salarios[c] = prompt(`Agora me informe o salario do funcionario: ${nomes[c]}`)
    tempo[c] = prompt(`Há quanto tempo (em anos) o funcionario ${nomes[c]} trabalha na empresa?`)
    document.write(`<p>Nome: ${nomes[c]}; Salario: R$${Number(salarios[c]).toFixed(2)}; Tempo Trabalhando: ${tempo[c]}  </p>`)
    c++
}while(c<2)
c = 0

document.write("<hr>")
document.write("<h1>Tabela de Funcionarios Sem Aumento:</h1>")

function verificaAumento(nome, salario, tempo){
    if(salario > 400 && tempo < 5){
        return false
    }else{
        return true
    }
}

do{
    if(verificaAumento(nomes[c], salarios[c], tempo[c]) == false){
        document.write(`O Funcionario ${nomes[c]} não teve aumento <br>`)
    }
    c++
}while(c < 2)

document.write(`<hr>`)
document.write("<h1>Tabela de Funcionarios Com Aumento:</h1>")
c=0

do{
    if(verificaAumento(nomes[c], salarios[c], tempo[c]) != false){
        if(salarios[c] < 400 && tempo > 5){
            salarios[c] *= 1.35
            document.write(`O(a) Funcionario(a) ${nomes[c]} teve um aumento de salario para: R$${Number(salarios[c]).toFixed(2)} <br>`)
        }else if(salarios[c] >= 400 && tempo[c] > 5){
            salarios[c] *= 1.25
            document.write(`O(a) Funcionario(a) ${nomes[c]} teve um aumento de salario para: R$${Number(salarios[c]).toFixed(2)} <br>`)
        }else{
            salarios[c] *= 1.15
            document.write(`O(a) Funcionario(a) ${nomes[c]} teve um aumento de salario para: R$${Number(salarios[c]).toFixed(2)} <br>`)
        }
    }
    c++
}while(c<2)