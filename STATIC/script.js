//Test per la comunicazione della pagina HTML e il file Javascript
console.log("Javascript è stato caricato correttamente");
//Variabili del gioco
let punteggio  = 0;
let temporimasto = 30;
let celle = document.querySelector('.cellblock');
let punteggiostampato = document.querySelector('.punti');
let decremento = -1;
//Inizio del gioco
let pulsante = document.querySelector('#Inizia')
pulsante.addEventListener('click', function(){
    punteggiostampato.textContent = punteggio
    

    });
