let nome = prompt("Escreva o nome de um filme")
let duracao = prompt("Agora me diga a duração desse filme em minutos")

let duracao_num = parseInt(duracao)
let hora = duracao_num/60
let horaInt = parseInt(hora)
let min = duracao_num%60
let minInt = parseInt(min)

document.write(`Nome do Filme: ${nome}, duração de: ${horaInt} horas e ${minInt} minutos`)