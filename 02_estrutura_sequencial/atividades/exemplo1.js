//Declaro todas as variáveis
let nome, anoNascimento, anoAtual, idade

//2º variavel que irão receber valor
nome = prompt("Digite seu nome: ")
anoNascimento = prompt("Digite o ano em que nasceu: ")
anoAtual = prompt("Digite o ano que está usando o site")
//anoAtual = number(("Digite o ano que está usando o site"))

//3º Casting nas variáveis que possuem valor númerico
anoNascimento = parseInt(anoNascimento)
anoAtual = Number(anoAtual)

//4º Processar as variáveis que possuem valor
idade = anoAtual - anoNascimento

//5º Mostras o resultado
document.write(`Olá ${nome}, sua idade é ${idade} anos`)
