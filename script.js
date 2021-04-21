alert("Stanno per apparire 5 NUMERI. Per VINCERE il gioco devi RICORDARLI.")

// Creo l' Array dove staranno i numeri generati dal computer, che l'utente dovrà ricordare
var numeriDaRicordare = [];

document.querySelector("h5").innerHTML = ("Allo scadere di questo timer scrivi i numeri che hai appena visto.");

// Faccio ripetere il ciclo finchè l'Array numeriDaRicordare non contiene 5 elementi
for (var i = 0; numeriDaRicordare.length !== 5; i++) {

    var numeroRandom = generaNumRandom(100);

    // Se il numero NON già è presente nell'Array allora lo pusho 
    if (numeriDaRicordare.includes(numeroRandom) == false) {
        alert(i + 1 + "º numero: " + numeroRandom);
        numeriDaRicordare.push(numeroRandom);
    }

}

console.log("Questi sono i numeri da ricordare: " + numeriDaRicordare);

// Creo un timer che va da 30 a 0
var time = 30
var boxHtml = document.getElementById("box")

// Setto un setInterval ogni 1s di Time che decrementa
var timer = setInterval(function () {


    boxHtml.innerHTML = (time--);

    // Se la variabile time è = 0 allora fermo il timer
    if (time == 0) {
        clearInterval(timer)
    }

}, 1000)


// Quando si ferma il timer dei 30 secondi parte questa parte di codice
setTimeout(function () {

    var arrayNumeriUtente = [];
    var numeriEsatti = [];

    // Chiedo all'Utente di inserire un numero finchè non ce ne sono 5 in arrayNumeriUtente
    while (arrayNumeriUtente.length !== 5) {

        var numeroUtente = parseInt(prompt("Inserisci un numero"));

        // Controllo che:
            // Il numero sia effettivamente un numero
            // Il numero non sia negativo
            // Il numero non sia gia stato inserito
        if (Number.isNaN(numeroUtente) || numeroUtente < 0 || arrayNumeriUtente.includes(numeroUtente)) {

            alert("Inserisci un numero valido.")

        } else {

            // Se passa tutti i check pusho i numeri inseriti dall' utente in arrayNumeriUtente
            arrayNumeriUtente.push(numeroUtente);

            // Cerco nell' arrayNumeriDaRicordare se c'è un numero uguale a ad uno dei numeri inseriti dall' utente
            for (var i = 0; i < numeriDaRicordare.length; i++) {

                if (numeriDaRicordare[i] === (numeroUtente)) {
                    // Se c'è lo pusho nell' array numeriEsatti 
                    numeriEsatti.push(numeroUtente)
                }
            }
        }
    }

    console.log("Questi sono i numeri scelti da te: " + arrayNumeriUtente);

    // Definisco le condizioni di vittoria o sconfitta
    switch (numeriEsatti.length) {
        case 0:
            document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punti. Mi dispiace 😟");
            break;

        case 1:
            document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punto. Niente male! 😀");
            break;

        case 5:
            document.querySelector("h5").innerHTML = (numeriEsatti.length + "/5 Complimenti ✅");
            break;

        default:
            document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punti. Bel lavoro 😃");
    }

}, 1000);










