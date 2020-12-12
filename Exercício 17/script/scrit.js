const livro1 = 'Dom Quixote'
const livro2 = 'Guerra e Paz'
const livro3 = 'A Montanha Mágica'
const livro4 = 'Cem Anos de Solidão'
const livro5 = 'Ulisses'
const livro6 = 'Em Busca do Tempo Perdido'
const livro7 = 'A Divina Comédia'

const livrosMaisVendidos = ((primeiro, segundo, terceiro, ...demaisLivros) => {
    console.log(primeiro);
    console.log(segundo);
    console.log(terceiro);
    console.log(...demaisLivros);
});