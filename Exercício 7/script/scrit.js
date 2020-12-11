function maioresDeDezoitoAnos(pessoa) {
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
            'idade': 19,
            'telefone': '00997884422',
            'profissao': 'programador'
        }
    ]

    const pessoaComMaisDeDezoito = pessoa.find(element => {
        return element.idade > 18;
    })
    console.log(pessoaComMaisDeDezoito)
    document.getElementById('resultado').value = `Nome: ${pessoaComMaisDeDezoito.nome} Idade: ${pessoaComMaisDeDezoito.idade} 
    Telefone: ${pessoaComMaisDeDezoito.telefone} Profissão: ${pessoaComMaisDeDezoito.profissao}`
}