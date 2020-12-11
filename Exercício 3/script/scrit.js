let idade = [];

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

function maiorDeIdade(idade) {
    return idade >= 18;
}

pessoa.forEach(extraiIdadeDoJson);

function extraiIdadeDoJson(element, index) {
    idade[index] = element.idade;
}
console.log(idade)

const ehMaiorDeIdade = idade.some(maiorDeIdade);
console.log(ehMaiorDeIdade)