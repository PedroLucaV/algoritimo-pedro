let bairro = prompt("Qual seu bairro?")

bairro = bairro.toUpperCase()
bairro = bairro.replace(" ", "-")

switch (bairro) {
    case 'ANTARES':
        alert(`O Frete para ${bairro} ficou de R$ 7,00`)
        break;

    case 'BARRO-DURO':
        alert(`O Frete para ${bairro} ficou de R$ 5,00`)
        break;

    case 'BEBEDOURO':
        alert(`O Frete para ${bairro} ficou de R$ 8,00`)
        break;

    case 'BENEDITO-BENTES':
        alert(`O Frete para ${bairro} ficou de R$ 6,00`)    
        break;

    case 'CENTRO':
        alert(`O Frete para ${bairro} ficou de R$ 10,00`)
        break;

    case 'CLIMA-BOM':
        alert(`O Frete para ${bairro} ficou de R$ 4,00`)
        break;
    
    case 'PAJUÇARA':
        case 'PONTA-VERDE' :
        case 'JATIUCA' :
        case 'JATIÚCA':
        alert(`O Frete para ${bairro} ficou de R$ 15,00`)
        break;

    default:
        alert('Bairro inexistente ou indisponivel!')
        break;
}