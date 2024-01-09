/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/





const btnGenerate = document.querySelector('#button');

btnGenerate.addEventListener('click', function(){

const winnerHtml = document.getElementById('winner');    
const looserHtml = document.getElementById('looser');
const eventHtml = document.getElementById('even');

const choose_number = Number(document.getElementById ('userInput').value);
console.log(choose_number);

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);



if (choose_number === pcNumber) {
    //console.log('pari');
    const even = (choose_number === pcNumber)
    eventHtml.classList.remove('d-none')

}else if (choose_number > pcNumber){
    //console.log('hai vinto');
    const winner = (choose_number > pcNumber)
    winnerHtml.classList.remove("d-none")

}else {
    //console.log('hai perso');
    //const looser = prompt("Hai perso")
    looserHtml.classList.remove('d-none')
}


})

const cancelHtml = document.getElementById('cancel');

cancelHtml.addEventListener('click', function(){


    winnerHtml.classList.add('d-none')
    looserHtml.classList.add('d-none')
    eventHtml.classList.add('d-none')

})



