function mutiplicaNumeros(numeros) {
    numeros = [12, 5, 10, 2]
    const multiplicacao = numeros.reduce((anterior, atual) => anterior * atual)
    document.getElementById('resultado').value = multiplicacao
}