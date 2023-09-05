let arr1 = []
let posi = []
let negt = []

let i = 0
do{
    arr1[i] = Number(prompt(`Me informe o valor a ser alocado no indice ${i}`))
    if(isNaN(arr1[i])){
        let sair = confirm("Deseja sair da aplicação?")
        if(sair == true){
            break
        }else{
            continue
        }
    }
    if(arr1[i] >= 0){
        posi[i] = arr1[i]
    }else{
        negt[i] = arr1[i]
    }
    i++
}while(i < 8)

document.write("Positivos: ")
for(let c = 0; c<posi.length;c++){
    if(Number.isInteger(posi[c])){
        document.write(`${posi[c]}, `)
    }else{
        
    }
}

document.write("<br>Negativos: ")
for(let c = 0; c<negt.length;c++){
    if(Number.isInteger(negt[c])){
        document.write(`${negt[c]} `)
    }else{

    }
}