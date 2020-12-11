let idade = [];

function menoresDeDezoitoAnos(pessoa) {
    pessoa = [{
            'nome': 'João',
            'idade': 20,
            'telefone': '00997884422',
            'profissao': 'programador'
        },
        {
            'nome': 'Julia',
            'idade': 18,
            'telefone': '00997884422',
            'profissao': 'programadora'
        },
        {
            'nome': 'Roberto',
            'idade': 16,
            'telefone': '00997884422',
            'profissao': 'programador'
        },
        {
            'nome': 'Ricardo',
            'idade': 17,
            'telefone': '00997884422',
            'profissao': 'programador'
        }
    ]

    pessoa.forEach(extraiIdadeDoJson);
    console.log(idade)
    let pessoasComMenosDeDezoitoAnos = idade.filter(idadeMinima);
    console.log(pessoasComMenosDeDezoitoAnos);
    let teste = pessoa.filter(idadeMinima);
    console.log(teste)
    teste.forEach(element => {
            const elemento = document.createElement('p');
            elemento.textContent = `Nome: ${element.nome} \n Idade: ${element.idade} \n Telefone: ${element.telefone} 
            \n Profissão: ${element.profissao} `;
            document.getElementById('resposta')
                .appendChild(elemento)
        })
        // document.getElementById('resultado').value = teste;
}

function extraiIdadeDoJson(element, index) {
    idade[index] = element.idade;
}

function idadeMinima(idade, index) {
    if (idade.idade < 18) {
        console.log(idade)
        return idade;
    }
}