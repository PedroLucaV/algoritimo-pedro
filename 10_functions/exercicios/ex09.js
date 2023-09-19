let nome = []
let salario = []
let sexo = []
let confirmar 

let c = 0
do{
    confirmar = prompt("Deseja continuar a aplicação")
    confirmar.charAt(0)
    confirmar.toUpperCase()
    if(confirmar == "N"){
        false
    }else{
        true
    }
    nome[c] = prompt(`Me informe o nome da ${c+1}ª pessoa`)
    salario[c] = prompt(`Me informe o salario de ${nome}`)
    sexo[c] = prompt(`Me informe o sexo da ${c+1}ª pessoa`)

    document.write(`${nome[c]}, ${salario[c]}, ${sexo[c]}`)
    c++
}while(true)