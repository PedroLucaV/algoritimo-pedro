let n = []
let soma = 0
for(let c = 0; c<5; c++){
    n[c] = Number(prompt(`Me informe um valor para ser adicionado ao indice ${c}`))
    document.write(n[c] + "<br>")
    soma += n[c]
}

document.write("<hr>"+soma)