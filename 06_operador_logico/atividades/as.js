let bairro = prompt("Qual seu bairro?")

switch (bairro) {
    case 'Antares', 'antares':
    valor = 1
    break;

    case 'Barro Duro', 'barro-duro', 'Barro duro':
        valor = 2
        break;

    case 'Bebedouro', 'bebedouro':
        valor = 3
        break;

    case 'Benedito Bentes', 'benedito-bentes', 'Benedito bentes':
        valor = 4  
        break;

    case 'Centro', 'centro':
        valor = 5
        break;

    case 'Clima Bom', 'clima-bom', 'Clima bom':
        valor = 6
        break;
    
    case 'Pajuçara', 'pajuçara', 'Ponta Verde', 'Ponta verde', 'ponta-verde', 'Jatiuca', 'Jatiúca', 'jatiuca', 'jatiúca':
        valor = 7
        break;
}
console.log(valor)