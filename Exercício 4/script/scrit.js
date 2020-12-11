let profissao = [];

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

function profissional(profissao) {
    return profissao === 'programador' || profissao === 'programadora';
}

pessoa.forEach(extraiProfisaoDoJson);

function extraiProfisaoDoJson(element, index) {
    profissao[index] = element.profissao;
}
console.log(profissao)

const ehProgramador = profissao.every(profissional);
console.log(ehProgramador)