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

const desmanche = (cidade => {
    console.log(cidade);
    const [nome1, nome2, nome3, nome4] = cidade;
    console.log(nome1)
    console.log(nome2)
    console.log(nome3)
    console.log(nome4)

    const { nome: cidade1, estado: estado1 } = nome1;
    console.log(cidade1)
    console.log(estado1)
    const { nome: cidade2, estado: estado2 } = nome2;
    console.log(cidade2)
    console.log(estado2)
    const { nome: cidade3, estado: estado3 } = nome3;
    console.log(cidade3)
    console.log(estado3)
    const { nome: cidade4, estado: estado4 } = nome4;
    console.log(cidade4)
    console.log(estado4)

    const nome = [cidade1, cidade2, cidade3, cidade4]
    const estado = [estado1, estado2, estado3, estado4]

    console.log(`Cidade: ${nome} Estado: ${estado}`)
    document.getElementById('resultado').value = `Cidade: ${nome} Estado: ${estado}`
})