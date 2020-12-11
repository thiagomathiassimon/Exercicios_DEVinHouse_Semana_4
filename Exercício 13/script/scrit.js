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

function catarinenses(cidades) {
    const sc = cidades.filter((element, index, array) => {
        return element.estado === 'SC'
    })
    console.log(sc)
    const estado = sc.forEach(element => {
        const elemento = document.createElement('p');
        elemento.textContent = `Nome: ${element.nome} \n Estado: ${element.estado}`;
        document.getElementById('resposta')
            .appendChild(elemento);
    });
}