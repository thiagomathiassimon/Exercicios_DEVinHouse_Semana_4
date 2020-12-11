const cidade = [{
        nome: 'Santo Amaro',
        estado: 'SC'
    },
    {
        nome: 'Carazinho',
        estado: 'RS'
    },
    {
        nome: 'Águas Mornas',
        estado: 'SC'
    },
    {
        nome: 'Londrina',
        estado: 'PR'
    },
]

const gaucha = (cidade => {
    const sulRioGrandense = cidade.some(element => element.estado == 'RS')
    if (sulRioGrandense == true) {
        document.getElementById('resultado').value = 'Sim, há uma cidade do RS';
    } else {
        document.getElementById('resultado').value = 'Não, nenhuma cidade é do RS';

    }
})