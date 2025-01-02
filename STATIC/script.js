console.log("Javascript è stato caricato correttamente");

let punteggio = 0;
let temporimasto = 30;
let celle = document.querySelectorAll('.cellblock');
let punteggiostampato = document.querySelector('.punti');
let temporimanentestampato = document.querySelector('.tempo');
let activecellblock = null;
let celleattive = 0;

function aggiornatempo() {
    if (temporimasto > 0) {
        temporimasto--;
        temporimanentestampato.textContent = temporimasto;
        setTimeout(aggiornatempo, 1000);
    } else {
        temporimanentestampato.textContent = "Tempo esaurito";
        console.log("L'utente ha perso");
        if (activecellblock) {
            activecellblock.classList.remove('active');
            activecellblock.classList.remove('cellblock-attiva');
        }
    }
}

function attivacella() {
    if (temporimasto > 0) {
        if (activecellblock) {
            activecellblock.classList.remove('active');
            activecellblock.classList.remove('cellblock-attiva');
        }

        if (celleattive >= celle.length) {
            celleattive = 0;

        }    
        activecellblock = celle[celleattive];
        activecellblock.classList.add('active');
        activecellblock.classList.add('cellblock-attiva');

        activecellblock.onclick = function () {
            punteggio = punteggio + 1;
            console.log(punteggio);

            activecellblock.classList.remove('active');
            activecellblock.classList.remove('cellblock-attiva');
            activecellblock.onclick = null;
            punteggiostampato.textContent = punteggio;
        }
    }
}

aggiornatempo();
attivacella();
