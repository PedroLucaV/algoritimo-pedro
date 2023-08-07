function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //dia
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    }else if (hora >= 12 && hora < 18){
        //tarde
        img.src = "tarde.png"
        document.body.style.background = "#e2cd2f"
    }else{
        //noite
        img.src = "noite1.png"
        document.body.style.background = "#c3c3c3"
    }
}