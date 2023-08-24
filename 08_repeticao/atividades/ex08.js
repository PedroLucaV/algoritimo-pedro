let numero = 8
let i = 0
let c = 1

i = numero

do{
    document.write(`${c} <br/>`)
    numero *= c
    c++
}while(c <= i)

document.write(`<hr> Fatorial de ${i} é: ${numero}`)
