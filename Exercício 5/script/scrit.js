let nome = [];

const pessoa = [{
        'nome': 'João',
        'idade': 18,
        'telefone': '00997884422',
        'profissao': 'programador'
    },
    {
        'nome': 'Julia',
        'idade': 16,
        'telefone': '00997884422',
        'profissao': 'programadora'
    },
    {
        'nome': 'Roberto',
        'idade': 16,
        'telefone': '00997884422',
        'profissao': 'programador'
    }
]

pessoa.forEach(extraiNomeDoJson);

function extraiNomeDoJson(element, index) {
    nome[index] = element.nome;
}

window.alert("Nomes: " + nome[0] + '\n' + nome[1] + '\n' + nome[2])