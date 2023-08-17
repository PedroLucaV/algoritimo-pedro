/*for(let c=1; c<= 10; c++){
    document.write(`${c} `)
}*/

let n1 = 0, n2 = 1, nextTerm //n1 é o primeiro termo da sequencia e n2 o proximo, nextTerm servirá para poder realizar a operação de somar com o anterior

for (let i = 1; i <= 10; i++) { //quantia de vezes que se repetirá
    console.log(n1); //escreverá o primeiro termo
    nextTerm = n1 + n2; //calculará o proximo termo
    n1 = n2; //transforma o termo que será escrito (soma dos termos) no n1 para ser mostrado no console.
    n2 = nextTerm; // transforma o n2 com o valor do nextterm que equivale a soma dos anteriores
}