let total = 0;


function fazArrayDeNotas() {
    const notas = [];
    notas[0] = Number(document.getElementById('nota1').value);
    notas[1] = Number(document.getElementById('nota2').value);
    notas[2] = Number(document.getElementById('nota3').value);
    notas.forEach(calculaMedia);
    let media = total / notas.length;
    window.alert("Sua média é: " + media);
    total = 0;
}

function calculaMedia(item) {
    total += item;
}