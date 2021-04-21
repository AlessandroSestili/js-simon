//Informo l'utente che deve ricordarsi 5 numeri per vincere il gioco
alert("Stanno per apparire 5 NUMERI. Per VINCERE il gioco devi RICORDARLI.")

// Creo l' Array dove staranno i numeri generati dal computer, che l'utente dovrà ricordare
var numeriDaRicordare = [];

document.querySelector("h5").innerHTML = ("Allo scadere di questo timer scrivi i numeri che hai appena visto.");

// Faccio ripetere il ciclo finchè l'Array non contiene 5 elementi
// while (numeriDaRicordare.length !== 5) {
for (var i = 0; numeriDaRicordare.length !== 5; i++) {

    var numeroRandom = generaNumRandom();

    if (numeriDaRicordare.includes(numeroRandom) == false) {
        alert(i + 1 + "º numero: " + numeroRandom);
        numeriDaRicordare.push(numeroRandom);
    }

}

// }

// Creo il timer dei 30 secondi - parte da 30 e arriva a 0 - a 0 si ferma
var time = 30
var boxHtml = document.getElementById("box")
// il timer che parte da 30
var timer = setInterval(function () {

    boxHtml.innerHTML = (time--);

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

        if (Number.isNaN(numeroUtente) || numeroUtente < 0 || arrayNumeriUtente.includes(numeroUtente)) {

            alert("Inserisci un numero valido.")

        } else {

            arrayNumeriUtente.push(numeroUtente);

            for (var i = 0; i < numeriDaRicordare.length; i++) {

                if (numeriDaRicordare[i] === (numeroUtente)) {
                    numeriEsatti.push(numeroUtente)
                }
            }

        }

    }

    console.log("Questi sono i numeri da ricordare: " + numeriDaRicordare);
    console.log("Questi sono i numeri scelti da te: " + arrayNumeriUtente);
    
    if (numeriEsatti.length == 1) {

        document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punto. Niente male! 😀");

    } else if (numeriEsatti.length == 0){
        
        document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punti. Mi dispiace 😟");

    } else {

        document.querySelector("h5").innerHTML = ("Hai totalizzato " + numeriEsatti.length + " punti. Complimenti ✅");

    }
}, 31000);










