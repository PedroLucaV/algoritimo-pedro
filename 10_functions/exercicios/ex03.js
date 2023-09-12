//Crie uma função chamada gerarNumeroAleatorio que não aceite argumentos e retorne um número inteiro aleatorio entre 1 e 100.

function gerarNumeroAleatorio(min, max){
    return Math.round(Math.random(max - min) * 100)
}

console.log(gerarNumeroAleatorio(1, 100))