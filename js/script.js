
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