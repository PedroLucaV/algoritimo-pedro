let valor = 8
let tab = 0
let c = 1

/*
for(let c = 1; c <= 10;  c++){
    let tab = valor * c
    document.write(`${valor} * ${c} = ${tab} <br>`)
}
*/

do{
    tab = valor * c
    console.log(`${valor} * ${c} = ${tab} \t`)
    c++
}while(c <= 10)