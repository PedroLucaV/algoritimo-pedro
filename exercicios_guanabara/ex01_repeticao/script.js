function processar(){
    let ini = document.getElementById("ini")
    let tes = document.getElementById("test")
    let inc = document.getElementById("incr")
    let res =  document.getElementById("res")

    if (ini.value.length == 0 || tes.value.length == 0 || inc.value.length == 0){
        alert("Por favor digite um valor númerico dentro dos espaços!")
    }else{
        res.innerHTML = 'Contado: '
        let i = Number(ini.value)
        let f = Number(tes.value)
        let p = Number(inc.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
        }
        res.innerHTML += `.`
    }
}