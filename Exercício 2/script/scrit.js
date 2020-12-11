const listaDeNumeros = [5, 10, 11, 12, 20, 25, 36, 45, 153]

let quadradoDosNumeros = listaDeNumeros.map(quadrado);
console.log(quadradoDosNumeros)
window.alert("Lista original: " + listaDeNumeros + '\nNova lista com o quadrado dos números: ' + quadradoDosNumeros);

function quadrado(num) {
    return num * num;
}