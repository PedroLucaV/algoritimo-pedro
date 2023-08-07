function calc(){
    debugger
    let msg = document.getElementById("res")
    let alt1 = document.getElementById("alt")

    let fsexo = document.getElementsByTagName("sex")

    var sexo = " "

    if(fsexo[0].checked) {
        sexo = "Homem"
    }else if(fsexo[1].checked) {
        sexo = "Mulher"
    }

    res.innerHTML = `${sexo}`

}