function myDisplayer(some) {
    document.getElementById("resultado").value = some;
}

function parOuImpar(numero1, numero2) {

    let myPromise = new Promise(function(myResolve, myReject) {

        numero1 = Number(numero1);
        numero2 = Number(numero2);

        if ((numero1 + numero2) % 2 == 0) {
            myResolve(numero1 + numero2);
        } else {
            myReject("A soma dos números informados não resulta num número par!");
        }
    });

    myPromise.then(
        function(value) { myDisplayer(value); },
        function(error) { myDisplayer(error); }
    );

}