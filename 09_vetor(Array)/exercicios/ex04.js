//Intercalar os valores dos vetores 1 e 2 no vetor 3, exemplo
//Vetor1=[1,3,5]
//Vetor2=[2,4,6]
//Vetor3=[1.2.3.4.5.6]
//Os vetores 1 e 2 tem que ter cada um 10 valores

let arr1 = []
let arr2 = []
let arr3 = []

let c = 0
let d = 0
let b = 0

do{
    arr1[c] = Number(prompt(`Me informe um número para ser alocado a posição ${c} do primeiro vetor`))
    arr2[c] = Number(prompt(`Me informe um número para ser alocado a posição ${c} do segundo vetor`))
    c++
}while(c<10)

do{
    arr3[d] = arr1[b]
    document.write(`${arr3[d]} <br>`)
    d++
    arr3[d] = arr2[b]
    document.write(`${arr3[d]} <br>`)
    b++
    d++
}while(d<20)