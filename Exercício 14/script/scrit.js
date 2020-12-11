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

const cidadeComEstado = (cidade => {
    // console.log(cidade);
    const cidadeEstado = cidade.map(element => {
        const estadoCidade = `Cidade: ${element.nome} \n Estado: ${element.estado}`;
        const elemento = document.createElement('p');
        elemento.textContent = estadoCidade;
        document.getElementById('resposta').appendChild(elemento);
        return estadoCidade;
    })
    console.log("Aqui" + cidadeEstado)
    document.getElementById('resultado').value = cidadeEstado
})