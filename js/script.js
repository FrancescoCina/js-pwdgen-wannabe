
/* 
    STEP:
    Chiedi all’utente il suo nome,
    poi chiedi il suo cognome,
    poi chiedi il suo colore preferito
    Infine scrivi sulla pagina nomecognomecolorepreferito21

 */




var passwordElement = document.getElementById("password");
console.log("elemento html", passwordElement);

var name = prompt("Inserisci qui il tuo nome");
console.log("Nome", name);

var surname = prompt("Iserisci qui il tuo cognome");
console.log("Cognome", surname);

var preferColor = prompt("Qual è il tuo colore preferito?");
console.log("Colore", preferColor);

var lastCharacter = ("21");
console.log(lastCharacter);

passwordElement.innerHTML = ("La tua password è: ") + name + surname + preferColor + lastCharacter;





/* 

ESERCIZIO ETA'

Chiediamo all'utente la sua età e forniamogli la sua data di nascita:

variabile per età
chiediamo età
variabile per l'anno in cui siamo
stampiamo data di nascita

*/

/* var age = prompt("Quanti anni hai?");
console.log(age);
var currentYear = ("2021");
console.log(currentYear);
var yearElement = document.getElementById("birthYear");
console.log(yearElement);


yearElement.innerHTML = currentYear - age;
 

 */
