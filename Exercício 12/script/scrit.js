document.getElementById('executar').addEventListener('click', (bairro, cidade, estado) => {
    bairro = document.getElementById('bairro').value;
    cidade = document.getElementById('cidade').value;
    estado = document.getElementById("estado").value;
    document.getElementById('resultado').value = `Meu endereço é: ${bairro}, ${cidade},  ${estado}`
})