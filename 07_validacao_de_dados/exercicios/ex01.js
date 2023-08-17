let horaBR = Number.parseFloat(prompt("Me informe a hora e minuto no Brasil: (ex: 1.59 = 1 Hora e 59 Minutos)"))
let horaFR = 0

if(isNaN(horaBR) || horaBR < 0){
    alert("Informe um valor númerico maior ou igual a 0!!!")
    location.reload()
}else if(horaBR > 24){
    alert("Informe um valor menor que 24!!!")
    location.reload()
}else{
    if (horaBR >= 19){
        horaFR = (horaBR + 5) - 24
        horaFR = horaFR.toFixed(2)
        alert(horaFR+" Horas na França!")
    }else{
        horaFR = (horaBR + 5)
        horaFR = horaFR.toFixed(2)
        alert(horaFR+" Horas na França!")
    }
}