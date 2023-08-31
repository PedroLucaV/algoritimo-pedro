let lista = []
let c = 0

do{
    lista[c] = prompt("Me informe um item para ser adicionado a lista")
    if(lista[c] != "SAIR"){ 
        document.write(`${lista[c]} <br>`)
        c++
    }else{
        let sair = confirm("Deseja sair da aplicação?")
        if(sair == true){
            break
        }else{
            continue
        }
    }
}while(true)
