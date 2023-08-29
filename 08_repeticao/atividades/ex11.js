let c0=0, c1=0, c2=0, c3=0, votos, sair, branco =0, nulo = 0, total=0

alert("O Sistema a seguir simula uma eleição, digite 0 ou alguma letra ou um número maior que 6 para sair! \n1 = Candidato 1 \n2 = Candidato 2 \n3 = Candidato 3 \n4 = Candidato 4 \n5 = Voto em Branco \n6 = Voto Nulo")
do{
    votos = Number(prompt("Me informe em qual candidato você irá votar"))
    if(votos <= 0 || isNaN(votos) || votos > 6){
        sair = confirm("Você deseja sair da aplicação?")
        if(sair == true){
            break
        }else{
            continue
        }
    }else{
        if(votos == 1){
            c0++
        }else if(votos == 2){
            c1++
        }else if(votos == 3){
            c2++
        }else if(votos == 4){
            c3++
        }else if(votos == 5){
            branco++
        }else if(votos == 6){
            nulo++
        }
    }
    total++
}while(true)

document.write(`Candidato 1: ${c0} <br>Candidato 2: ${c1} <br>Candidato 3: ${c2} <br>Candidato 4: ${c3} <br>Voto em Branco: ${c2} <br>Voto Nulo: ${c3} <hr>Total = ${total}`)
/*
let votos, c0=0, sair

do{
    votos = Number(prompt("Me informe em qual candidato você irá votar"))
    if(votos <= 0 || isNaN(votos) || votos > 6){
        sair = confirm("Você deseja sair da aplicação?")
        if(sair == true){
            break
        }else{
            continue
        }
    }else{
        alert("Obrigado por votar no Candidato 1!")
        if(votos == 1){
            c0++
        }else if(votos == 2){
            c0++
        }else if(votos == 3){
            c0++
        }else if(votos == 4){
            c0++
        }else if(votos == 5){
            c0++
        }else if(votos == 6){
            c0++
        }
    }
}while(true)

document.write(`Candidato 1: ${c0} <br>Candidato 2: 0 <br>Candidato 3: 0 <br>Candidato 4: 0 <br>Voto em Branco: 0 <br>Voto Nulo: 0 <hr>Total = 0`)*/
