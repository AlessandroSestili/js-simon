//Informo l'utente che deve ricordarsi 5 numeri per vincere il gioco
alert("Stanno per apparire 5 numeri. Per vincere il gioco devi ricordarli.")

// Creo l' Array dove staranno i numeri generati dal computer, che l'utente dovrà ricordare
var numeriDaRicordare = [];
var numeriDaScartare = [];

// Faccio ripetere il ciclo finchè l'Array non contiene 5 elementi
while (numeriDaRicordare.length !== 5) {

    var numeroRandom = generaNumRandom();

    if (numeriDaRicordare.includes(numeroRandom) == false) {
        alert("numero " + numeroRandom);
        numeriDaRicordare.push(numeroRandom);
    } else {
        numeriDaScartare.push(numeroRandom);
    }
}

console.log(numeriDaRicordare);







