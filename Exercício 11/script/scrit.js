const medidas = {
    altura: document.getElementById('altura').value,
    largura: document.getElementById('largura').value
}

const tamanho = (medidas => {
    console.log(medidas);
    let altura = 0;
    let largura = 0;
    medidas.forEach((element) => {
        altura = element.altura
        largura = element.largura
        return element.altura
    });
    console.log(altura)
    console.log(largura)
    document.getElementById("resultado").value = (`${altura * largura} metros quadrados`);
    return tamanho;
})