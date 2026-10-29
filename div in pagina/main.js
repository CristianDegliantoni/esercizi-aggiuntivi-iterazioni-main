

//Scrivi in un div della pagina 100. 
// Ognuno conterrà uno dei numeri da 1 a 100.
//  I numeri multipli di 3 però andranno sostituiti dalla stringa "Fizz".
//  I multipli di 5 dalla stringa "Buzz". I multipli sia di 3 che di 5 riportano "FizzBuzz".


const numeriEl = document.getElementById("numeri")

let tuttiIDiv = "";

for (let i = 1; i <= 100; i++) {

    let valore = i;
    if (i % 3 === 0 && i % 5 === 0) {
        valore = "Fizzabuzz";

    } else if (i % 3 === 0) {
        valore = "fizz";

    } else if (i % 5 === 0) {
        valore = "buzz";
    }

    tuttiIDiv += `<div>${valore}</div>`;

}


numeriEl.innerHTML = tuttiIDiv;