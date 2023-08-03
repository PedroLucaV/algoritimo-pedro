let horaBR = Number(prompt("Me informe a hora e minuto atual: (ex: 1.59 = 1 Hora e 59 Minutos)"))
let horaFR = 0

if (horaBR >= 19){
    horaFR = (horaBR + 5) - 24
    alert(horaFR+" Horas na França!")
}else{
    horaFR = (horaBR + 5)
    alert(horaFR+" Horas na França!")
}