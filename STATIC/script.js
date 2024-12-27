//Test per la comunicazione della pagina HTML e il file Javascript
console.log("Javascript è stato caricato correttamente");
//Variabili del gioco
let punteggio  = 0;
let temporimasto = 30;
let celle = document.querySelectorAll('.cellblock');
let punteggiostampato = document.querySelector('.punti');
let decremento = -1;
let activecellblock
//Inizio del gioco
let pulsante = document.querySelector('#Inizia')
pulsante.addEventListener('click', function(){
    punteggio = 0;
    temporimasto = 30;
    punteggiostampato.textContent = punteggio;
    let timer = setInterval(function() {
        temporimasto --;
        if(temporimasto <=0){
            clearInterval(timer);
            punteggiostampato.textContent = "TEMPO SCADUTO!!!";
        }
    }, 1000);
let celltimer = setInterval(function() {
    if(activecellblock <=0)

























});

