let arr1 = []
let arr2 = []
let arr3 = []

let c = 0
let a = 0
let d = 0
let lenghtT = 0

do{
    arr1[c] = Number(prompt(`Me informe um número para ser alocado a posição ${c}`))
    arr3[c] = arr1[c]
    document.write(`${arr1[c]} <br>`)
    c++
}while(c<10)

document.write(`<hr>`)

do{
    arr2[a] = Number(prompt(`Me informe um número para ser alocado a posição ${a}`))
    arr3[c] = arr2[a]
    c++
    document.write(`${arr2[a]} <br>`)
    a++
}while(a<10)
document.write(`<hr>`)

arr3.sort((a,b) => a-b)

lenghtT = arr1.length + arr2.length

do{
    document.write(`${arr3[d]} <br>`)
    d++
}while(d<lenghtT)