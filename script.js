//Informo l'utente che deve ricordarsi 5 numeri per vincere il gioco
alert("Stanno per apparire 5 numeri. Per vincere il gioco devi ricordarli.")

// Creo l' Array dove staranno i numeri generati dal computer, che l'utente dovrà ricordare
var numeriDaRicordare = [];

// Faccio ripetere il ciclo finchè l'Array non contiene 5 elementi
while (numeriDaRicordare.length !== 5) {

    var numeroRandom = generaNumRandom();

    if (numeriDaRicordare.includes(numeroRandom) == false) {
        alert("numero " + numeroRandom);
        numeriDaRicordare.push(numeroRandom);
    }
}

console.log("Questi sono i numeri scelti dal computer che l'utente deve ricordare: " + numeriDaRicordare);

// Creo il timer dei 30 secondi - parte da 30 e arriva a 0 - a 0 si ferma
var time = 10
// il timer che parte da 30
var timer = setInterval(function () {

    console.log(time--)

    if (time == 0) {
        clearInterval(timer)
    }

}, 1000)


// Quando si ferma il timer dei 30 secondi parte questa parte di codice
setTimeout(function () {

    var arrayNumeriUtente = [];
    var numeriEsatti = [];
    
    while (arrayNumeriUtente.length !== 5) {
        
        var numeroUtente = parseInt(prompt("Inserisci un numero"));
        arrayNumeriUtente.push(numeroUtente);
        
        for (var i = 0; i < numeriDaRicordare.length; i++) {

            if (numeriDaRicordare[i] === (numeroUtente)) {
                numeriEsatti.push(numeroUtente)
            }
        }
    }

    console.log(numeriEsatti);

}, 10000);









