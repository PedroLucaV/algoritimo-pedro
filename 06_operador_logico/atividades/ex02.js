let bairro = prompt("Qual seu bairro?")

switch (bairro) {
    case 'Antares'|| 'antares':
        alert(`O Frete para ${bairro} ficou de R$ 7,00`)
        break;

    case 'Barro Duro'|| 'barro duro'|| 'Barro duro':
        alert(`O Frete para ${bairro} ficou de R$ 5,00`)
        break;

    case 'Bebedouro'|| 'bebedouro':
        alert(`O Frete para ${bairro} ficou de R$ 8,00`)
        break;

    case 'Benedito Bentes'|| 'benedito bentes'|| 'Benedito bentes':
        alert(`O Frete para ${bairro} ficou de R$ 6,00`)    
        break;

    case 'Centro'|| 'centro':
        alert(`O Frete para ${bairro} ficou de R$ 10,00`)
        break;

    case 'Clima Bom'|| 'clima bom'|| 'Clima bom':
        alert(`O Frete para ${bairro} ficou de R$ 4,00`)
        break;
    
    case 'Pajuçara'|| 'pajuçara'|| 'Ponta Verde'|| 'Ponta verde'|| 'ponta verde'|| 'Jatiuca'|| 'Jatiúca'|| 'jatiuca'|| 'jatiúca':
        alert(`O Frete para ${bairro} ficou de R$ 15,00`)
        break;

    default:
        alert('Bairro inexistente ou indisponivel!')
        break;
}