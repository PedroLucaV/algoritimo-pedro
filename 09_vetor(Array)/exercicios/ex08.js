//Faça um programa que receba o gabarito, corrija a prova de certa quantia de alunos e depois mostre o percentual de aprovados!

let corretas = []
let aluno = []
let resposta
let notaAl = 0
let nota = []
let aprovados = 0
let porcentagem = 0
let qntAluno = Number(prompt("Quantos alunos há na sala?"))

for(let i = 0; i < 10; i++){
    corretas[i] = prompt(`Me informe a alternativa correta da questão ${i+1}; \na, b, c, d ou e`)
}

for(let i = 0; i < qntAluno; i++){
    aluno[i] = Number(prompt(`Olá, me informe a matricula do aluno ${i+1}`))
    for(let j = 0; j < 10; j++){
        resposta = prompt(`Me informe a resposta do aluno na questão ${j+1}`)
        if(resposta == corretas[j]){
            notaAl +=1
        }else{

        }
    }
    console.log(`Nota do aluno ${i} é igual a = ${notaAl}`)
    nota[i] = notaAl
    notaAl = 0
}

for(let i = 0; i<aluno.length; i++){
    if(nota[i] >= 6){
        aprovados+=1
    }else{

    }
}

for(let i = 0; i < aluno.length; i++){
    document.write(`Matricula ${aluno[i]}, Nota: ${nota[i]} <br>`)
}

porcentagem = (aprovados/aluno.length)*100
document.write(`<hr>A Media de alunos aprovados é de: ${porcentagem}%`)